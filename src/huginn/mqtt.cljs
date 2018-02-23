(ns huginn.mqtt
  (:require
   [promesa.core :as p]
   [clojure.string :as st]
   [huginn.jwt :as jw]
   [mqtt :as mqtt]
   [huginn.config :as config]
   [taoensso.timbre :as timbre
    :refer-macros [log  trace  debug  info  warn  error  fatal  report
                   logf tracef debugf infof warnf errorf fatalf reportf
                   spy get-env]]
   [clojure.core.async :as a]
   [systeminformation :as si]
   [cljs.nodejs :as nodejs]))


(defn client-id
  [{:keys [projectId registryId cloudRegion deviceId] :as opts}]
  (str "projects/" projectId
       "/locations/" cloudRegion
       "/registries/" registryId
       "/devices/" deviceId))

(defn config-chan
  [{:keys [deviceId] :as opts}]
  (str "/devices/" deviceId "/config"))

(defn client-handlers
  [success-fn fail send recv]
  {"connect" (fn [success]
               (info "client connected")
               (if success
                 (do
                   (debug "client connection success")
                   (success-fn))
                 (do
                   (debug "client connection failure")
                   (fail))))
   "close"   (fn [] (debug "client connection closed"))
   "error"   (fn [err] (error "error: " err))
   "message" (fn [topic message packet]
               (a/go
                 (a/>! recv {:topic topic
                             :message message
                             :packet packet})))})

(defn add-handlers
  [client handlers]
  (doseq [[key hand] handlers]
    (.on client key hand)))

(defn build-client [opts]
  (let [conn-args (jw/connection-args opts)
        client    (mqtt/connect conn-args)]
    {:client (mqtt/connect conn-args)
     :iat-time (jw/round-now)}))

(declare publish-async)

(defn init-client [opts send recv ]
  (p/promise
   (fn [resolve reject]
     (let [{:keys [time client] :as init} (build-client opts)
           handlers (client-handlers #(resolve client) #(reject :client-fail) send recv)]
       (.subscribe client (config-chan opts))
       (add-handlers client handlers)))))

(defn payload-root
  [{:keys [registryId userId deviceId] :as opts}]
  (str registryId "/" userId "/" deviceId "-payload"))

(defn mqtt-topic
  "msg-type can be 'state' for state updates
   or 'events' to publish telemetry"
  [{:keys [deviceId] :as opts} msg-type]
  (str "/devices/" deviceId "/" msg-type))

(defn prep-temps
  [opts data]
  (let [pr (payload-root opts)
        cores-raw (js->clj (.-cores data))
        cores (map-indexed
               (fn [index value]
                 {:payload (str pr "-core-temp-" index "/" (str value))
                  :subfolder (str "metrics/core-temp-" index)
                  :ts (jw/round-now)})
               cores-raw)
        main (when (.-main data)
               {:payload (str pr "-core-temp-main/" (str (.-main data)))
                :subfolder "metrics/core-temp-main"
                :ts (jw/round-now)})
        max (when (.-max data)
              {:payload (str pr "-core-temp-max/" (str (.-max data)))
               :subfolder "metrics/core-temp-max"
               :ts (jw/round-now)})]
    (concat [main] [max] cores)))

(def stop (atom false))

(defn publish-one
  [^MqttClient client {:keys [topic payload qos] :as p}]
  (.publish client topic payload qos))

(defn publisher
  [client-atom send-chan]
  (a/go-loop []
    (let [to-send (a/<! send-chan)]
      (publish-one @client-atom  to-send)
      (recur))))

(defn client-refresher
  "loops and refreshs the client atom every token experation"
  [client-atom {:keys [tokenExpMins delayMs] :as opts} send recv]
  (a/go-loop []
    (let [wait (a/<! (a/timeout (* tokenExpMins 1000 60)))]
      (info "\tRefreshing token after " (* tokenExpMins 1000 60)  "ms")
      (p/chain
       (p/promise
        (fn [resolve reject]
          (swap! client-atom (fn [c] (.end c)
                               (resolve)))))
       #(init-client opts send recv)
       (fn [client]
         (reset! client-atom client))))
    (recur)))

(defn tele-chan
  [opts]
  (let [temp-chan (a/chan)
        out-chan (a/chan)]
    (a/go-loop []
        (p/chain
         (si/cpuTemperature)
         (partial prep-temps opts)
         (fn [vs] (a/go (a/>! temp-chan vs))))
        (let [v (a/<! temp-chan)]
          (a/>! out-chan v)
          (recur)))
    out-chan))


(defn sender
  [topic-name opts send t-chan]
  (a/go-loop []
    (let [teles (a/<! t-chan)
          topic (mqtt-topic opts topic-name)
          qos #js {:qos 1}]
      (when (= "state" topic-name)
        (debug "pushing state" topic))
      (a/onto-chan
       send
       (map  (fn [{:keys [subfolder] :as t}]
               (let [my-topic (if subfolder (str topic "/" subfolder) topic)]
                 (-> t
                     (assoc :topic my-topic)
                     (assoc :qos qos))) ) teles)
       false)
      (a/<! (a/timeout (:delayMs opts)))
      (recur))))

(def state-send
  (partial sender "state"))

(def tele-send
  (partial sender "events"))

(defn clean-up
  [{:keys [send-chan recv-chan telemetry-chan state-chan client-atom] :as system}]
  (log "Killing system")
  (doall
   (map (fn [c] (a/close! c))
        [send-chan recv-chan state-chan telemetry-chan]))
  (.end @client-atom))

(defn system-function
  "the heart of the system lies here.
  This function takes options (config/default-options works well)
  It returns a map
  This map has
  :send-chan A channel you can use to directly send messages of mqtt, must be of the
  form {:payload string? :qos #js {:qos #{0 1 2}} :topic (topics can be built with mqtt-topic)}
  :recv-chan has items in the form of {:topic string? :message string? :packet buffer?}
  :state-chan, send things of the form (coll-of {:payload string?}), onto the state channel
  (google publishes these values to a differnt pubsub channel then device telemetry)
  :telemetry-chan, sends (coll-of {:payload string?}), all the events in the collections
  are sent in the same batch, the same is true for stat-chan.
  :client-atom, contains the current version of the mqtt client. This is an atom so
  that the client-refersher can refresh the authentication token and swap it.
  this pattern also ensures only one client

  payloads must be prefixed with a string describing where the data came (payload-root opts) will generate this for you"
  [opts]
  (let [send (a/chan)
        recv (a/chan)
        kill (atom false)
        client-promise (init-client opts send recv)
        client-atom (atom nil)
        t-chan (tele-chan opts)
        state-chan (a/chan)]
    (p/then
     client-promise
     (fn [client]
       (reset! client-atom client)
       (client-refresher client-atom opts send recv)
       (publisher client-atom send)
       (tele-send opts send t-chan)
       (state-send opts send state-chan)
       {:send-chan send
        :recv-chan recv
        :state-chan state-chan
        :telemetry-chan t-chan
        :client-atom client-atom}))))


;(def system-promise (system-function config/default-options))

(defn kill-it
  "Feed the system promise to this and it will kill it"
  [system-promise]
  (p/then system-promise
          clean-up))

;(kill-it system-promise)
