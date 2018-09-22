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
   [cljs.core.async :as a]
   [systeminformation :as si]
   [cljs.spec.alpha :as s]
   [cljs.nodejs :as nodejs]))



(s/def ::projectId string?)
(s/def ::registryId string?)
(s/def ::cloudRegion string?)
(s/def ::deviceId string?)
(s/def ::chan (partial instance? (a/chan)))

(s/def ::topic-type #{"events" "state"})


(s/def ::client-config (s/keys :req-un
                               [::projectId
                                ::registryId
                                ::cloudRegion
                                ::deviceId]))

(s/def ::payload (s/and string? #(< ( count %) 200000)))
(s/def ::subfolder (s/and string? #(< (count %) 200)))
(s/def ::ts float?)

(s/def ::mqtt-packet
  (s/keys :req-un [::payload
                   ::subfolder
                   ::ts]))

(s/fdef client-id
  :args ::client-config
  :ret  string?)


(defn client-id
  "Builds a client id used to identify the device this message is
  comming from"
  [{:keys [projectId registryId cloudRegion deviceId] :as opts}]
  (str "projects/" projectId
       "/locations/" cloudRegion
       "/registries/" registryId
       "/devices/" deviceId))

(s/fdef config-chan
  :args (s/keys :req [::deviceId])
  :ret string?)
(defn config-chan
  "google give each device two channeles, a state channel (the config channel)
  and a telemetry channel (the one that we push all our data over). The name of
  these channels are determined by google iot core."
  [{:keys [deviceId] :as opts}]
  (str "/devices/" deviceId "/config"))

(s/fdef client-handlers
  :args (s/cat :success-fn fn?
               :fail       fn?
               :send       ::chan
               :recv       ::chan))

(defn client-handlers
  "builds a map of handels to attach to the mqtt object"
  [success-fn fail send recv]
  {"connect" (fn [success]
               (if success
                 (do
                   (success-fn))
                 (do
                   (debug "client connection failure")
                   (fail))))
   "close"   (fn [] )
   "error"   (fn [err] (error "error: " err))
   "message" (fn [topic message packet]
               (a/go
                 (a/>! recv {:topic topic
                             :message message
                             :packet packet})))})


(defn add-handlers
  "takes a map of handlers and attaches them to the mqtt object"
  [client handlers]
  (doseq [[key hand] handlers]
    (.on client key hand)))

(s/fdef build-client
  :args ::client-config)

(defn build-client [opts]
  "builds the mqtt client using the client-config
the mqtt client is responsible for holding on to
auth to talk to google iot core. The mqtt client
is also responsible for actually pushing the data
to google iot core."
  (let [conn-args (jw/connection-args opts)
        client    (mqtt/connect conn-args)]
    {:client (mqtt/connect conn-args)
     :iat-time (jw/round-now)}))

;This function is referenced before it is defined so we
;declare it
(declare publish-async)

(s/fdef init-client
  :args (s/cat :opts ::client-config
               :send ::chan
               :recv ::chan)
  :ret p/promise?)

(defn init-client [opts send recv]
  "using client config and a channel to send and a channel to recv on,
builds an mqtt client that will read from the send chan and push to google
  and write to the recv chan when google pushes to it. This object is wrapped
in a promise that returns when the client is ready"
  (p/promise
   (fn [resolve reject]
     (let [{:keys [time client] :as init} (build-client opts)
           handlers (client-handlers #(resolve client) #(reject :client-fail) send recv)]
       (.subscribe client (config-chan opts))
       (add-handlers client handlers)))))

(defn payload-root
  "builds the prefix of the actual values being sent
  (str (payload-root config) sensor-name /  sensor-value)"
  [{:keys [registryId userId deviceId] :as opts}]
  (str registryId "/" userId "/" deviceId "-payload"))

(s/fdef mqtt-topic
    :args (s/cat :opts     ::client-config
                 :msg-type ::topic-type)
    :ret string?)

(defn mqtt-topic
  "msg-type can be 'state' for state updates
   or 'events' to publish telemetry"
  [{:keys [deviceId] :as opts} msg-type]
  (str "/devices/" deviceId "/" msg-type))

(s/fdef prep-temps
  :args (s/cat :opts ::client-config :data any?)
  :ret (s/coll-of ::mqtt-packet))
(defn prep-temps
  "pulls the data out of the systeminformation library and wrapping them up
  to be sent into mqtt"
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

(s/fdef publish-one
  :args (s/cat :client any? :packet ::mqtt-packet))
(defn publish-one
  "Publises one mqtt packet to the client"
  [^MqttClient client {:keys [topic payload qos] :as p}]
  (.publish client topic payload qos))


(defn publisher
  "main loop that pushes packets added to the send-chan to google iot core"
  [client-atom send-chan]
  (a/go-loop []
    (let [to-send (a/<! send-chan)]
      (publish-one @client-atom to-send)
      (recur))))

(defn client-refresher
  "loops and refreshs the client atom every token experation.
  Mqtt requires that you refresh your token frequently (less then 20 mins)"
  [client-atom {:keys [tokenExpMins delayMs] :as opts} send recv]
  ; make a mixer so that we can pause the data when switching clients
  (let [client-send-chan (a/chan)
        client-mixer (a/mix client-send-chan)]
    (a/admix client-mixer send)
   ;Loop forever waiting for the tokenExpMins, then building a new client
    (a/go-loop []
   ; use core.async/timeout to set up a channel that has a value every tokenExpMins
      (let [wait (a/<! (a/timeout (* tokenExpMins 1000 60)))]
        (info "\tRefreshing token after " (* tokenExpMins 1000 60)  "ms")
        (a/toggle client-mixer {send {:pause true}})
        (p/chain
         ;Builds a new client
         (init-client opts client-send-chan recv)
         ;Use the client built in the previous step and replace the old-client
         (fn [client]
           (reset! client-atom client)
           (a/toggle client-mixer {send {:pause false}}))))
      (recur))))

(s/fdef tele-chan
  :args ::client-config
  :ret ::chan)
(defn tele-chan
  "takes the client opts and builds a channel with system telementry
  values on it (cpu tempratures specifically)"
  [opts]
  (let [temp-chan (a/chan)
        out-chan (a/chan)]
    (a/go-loop []
        (p/chain
         (si/cpuTemperature)
         #(prep-temps opts %)
         (fn [mqtt-packets] (a/go
                              (a/<! (a/timeout (* 1000 60 1)))
                              (a/>! temp-chan mqtt-packets))))
        (let [v (a/<! temp-chan)]
          (a/>! out-chan v)
          (recur)))
    out-chan))


(s/fdef sender
  :args (s/cat :topic-name ::topic-type
               :opts       ::client-config
               :send       ::chan
               :t-chan     ::chan))

(defn sender
  "takes information for the tele-chan in the form of collections of
  mqtt-packets and assignes a default topic if a subfolder is set,
  adds a default qos. Then takes the resulting structures and puts
  them on to the send channel. waits for :delayMs between collections "
  [topic-name opts send t-chan]
  (a/go-loop []
    (let [teles (a/<! t-chan)
          topic (mqtt-topic opts topic-name)
          qos #js {:qos 1}]

      ;becuase this should rarely happen
      (when (= "state" topic-name)
        (debug "pushing state" topic))

      (a/onto-chan
       send
       (map
        (fn [{:keys [subfolder] :as mqtt-packet}]
          (let [my-topic (if subfolder (str topic "/" subfolder) topic)]
            (-> mqtt-packet
                (assoc :topic my-topic)
                (assoc :qos qos)))) teles)
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
