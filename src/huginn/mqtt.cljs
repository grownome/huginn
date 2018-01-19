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
               (spy :debug [topic message packet])
               (a/>! recv {:topic topic
                           :message message
                           :packet packet}))})

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
       (add-handlers client handlers)))))

(defn payload-root
  [{:keys [registryId deviceId] :as opts}]
  (str registryId "/" deviceId "-payload"))

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
                  :ts (jw/round-now)})
               cores-raw)
        main (when (.-main data)
               {:payload (str pr "-core-temp-main/" (str (.-main data)))
                :ts (jw/round-now)})
        max (when (.-max data)
              {:payload (str pr "-core-temp-max/" (str (.-max data)))
               :ts (jw/round-now)})]
    (concat [main] [max] cores)))

(def stop (atom false))

(defn publish-one
  [^MqttClient client-atom {:keys [topic payload qos]}]
  (.publish client-atom topic payload qos))

(defn publisher
  [client-atom send-chan]
  (a/go-loop [to-send (a/<! send-chan)]
    (publish-one @client-atom to-send)))

(defn client-refresher
  "loops and refreshs the client atom every token experation"
  [client-atom {:keys [tokenExpMins delayMs] :as opts} send recv]
  (a/go-loop [wait (a/<! (a/timeout (* tokenExpMins 60)))]
    (info "\tRefreshing token after " (* tokenExpMins 60)  "ms")
      (.end @client-atom)
      (p/then (init-client opts send recv)
              (fn [client]
                (reset! client-atom client)))))

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


(defn tele-send
  [opts send t-chan]
  (a/go-loop []
    (let [teles (a/<! t-chan)
          sleep (a/<! (a/timeout (:delayMs opts)))
          topic (mqtt-topic opts "events")
          qos #js {:qos 1}]
      (debug "Preparing to send telemetry")
      (spy :debug teles)
      (a/onto-chan
       send
       (mapcat  (fn [t]
                  (-> t
                      (assoc :topic topic)
                      (assoc :qos qos)) ) teles))
      (recur))))

(defn watcher
  [kill-atom kill-fn]
  (a/go-loop []
    (if @kill-atom
      (kill-fn)
      (do
        (a/<! (a/timeout 100))
        (recur)))))

(defn clean-up
  [{:keys [send-chan recv-chan telemetry-chan client-atom] :as system}]
  (log "Killing system")
  (doall
   (map (fn [c] (a/close! c))
        [send-chan recv-chan telemetry-chan]))
  (.close @client-atom))

(defn system-function
  [opts]
  (let [send (a/chan (a/buffer 20))
        recv (a/chan (a/buffer 20))
        kill (atom false)
        client-promise (init-client opts send recv)
        client-atom (atom nil)
        t-chan (tele-chan opts)]
    (p/then
     client-promise
     (fn [client]
       (reset! client-atom client)
       (client-refresher client-atom opts send recv)
       (publisher client-atom send)
       (tele-send opts send t-chan)
       {:send-chan send
        :recv-chan recv
        :telemetry-chan t-chan
        :client-atom client-atom}))))


;(def system-promise (system-function config/default-options))

(defn kill-it
  [system-promise]
  (p/then system-promise
          clean-up))

;(kill-it system-promise)
