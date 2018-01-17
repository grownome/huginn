(ns huginn.core
  (:require
   [promesa.core :as p]
   [cljs-node-io.core :as io]
   [mqtt :as mqtt]
   [systeminformation :as si]
   [jsonwebtoken :as jwt]))


(def default-options
  {:projectId (or js/process.env.GCLOUD_PROJECT js/process.env.GCLOUD_PROJECT "grownome")
   :cloudRegion "us-central1"
   :registryId (or js/process.env.REGISTRY_ID "nomes")
   :deviceId  (or js/process.env.DEVICE_ID "test-device")
   :privateKeyFile (or js/process.env.PRIVATE_KEY_FILE "rsa_private.pem")
   :algorithm "RS256"
   :tokenExpMins 20
   :delayMs (* 1000 60)
   :mqttBridgeHostname "mqtt.googleapis.com"
   :mqttBridgePort 8883
   :messageType "events"})


(defn client-id
  [{:keys [projectId registryId cloudRegion deviceId] :as opts}]
  (str "projects/" projectId
       "/locations/" cloudRegion
       "/registries/" registryId
       "/devices/" deviceId))


(defn round-now []
  (int (/ (js/Date.now) 1000)))

(defn create-jwt
   [{:keys [projectId tokenExpMins privateKeyFile algorithm] :as opts}]
    (let [token
          #js {:iat (round-now)
               :exp (+ (* tokenExpMins 60) (round-now)) ;now + 20 min
               :aud projectId}

          privKey (io/slurp privateKeyFile)]
      (jwt/sign token privKey #js {:algorithm algorithm })))





(defn connection-args
  [{:keys [mqttBridgeHostname mqttBridgePort projectId privateKeyFile algorithm] :as opts}]
  #js {:host mqttBridgeHostname
       :port mqttBridgePort
       :clientId (client-id opts)
       :username "unused"
       :password (create-jwt opts)
       :protocol "mqtts"
       :secureProtocol "TLSv1_2_method"})



(defn client-handlers
  [main-loop]
  {"connect" (fn [success]
               (println "connected")
               (if success
                 (main-loop)
                 (println "client not connected")))
   "close"   (fn [] (println "closed"))
   "error"   (fn [err] (println (str "error: " err)))
   "message" (fn [topic message packet] (println "got message"))})

(defn add-handlers
  [client handlers]
  (doseq [[key hand] handlers]
    (.on client key hand)))

(defn build-client [opts]
  (let [conn-args (connection-args opts)
        client    (mqtt/connect conn-args)]
    {:client (mqtt/connect conn-args)
     :iat-time (round-now)}))

(declare publish-async)

(defn init-client [opts]
  (let [{:keys [time client] :as init} (build-client opts)
        handlers (client-handlers #(publish-async init opts))]
    (add-handlers client handlers)
    init))

(defn topic-root
  [{:keys [registryId deviceId] :as opts}]
  (str registryId "/" deviceId "-payload"))

(defn mqtt-topic
  "msg-type can be 'state' for state updates
   or 'events' to publish telemetry"
  [{:keys [deviceId] :as opts} msg-type]
  (str "/devices/" deviceId "/" msg-type))

(defn sleep-promise
  [wait]
  (p/promise (fn [resolve reject]
               (p/schedule wait #(resolve wait)))))

(defn publish-cpu-data
  [^MqttClient client topic qos data]
  (let [[c1 c2] (js->clj (.-cores data))]
    (.publish client (str topic "-core-1") (str c1) qos)
    (.publish client (str topic "-core-2") (str c2) qos)))

(def stop (atom false))


(defn publish-async
  [{:keys [^MqttClient client iat-time] :as cconfig} {:keys [tokenExpMins delayMs] :as opts}]
  (if @stop
    (.end client)
    (do
      (let [topic (mqtt-topic opts "events")
            qos #js {:qos 1}]
        (println "Publishing message: ")
        (p/then (si/cpuTemperature)
                (partial publish-cpu-data client topic qos)))
      (p/then (sleep-promise delayMs)
              (fn []
                (let [secs-from-issue (round-now)]
                  (if (> secs-from-issue (* tokenExpMins 60))
                    (do
                      (println (str "\tRefreshing token after " 60  " seconds"))
                      (.end client)
                      (when-not @stop
                        (init-client opts)))
                    (publish-async cconfig opts))))))))


(def c (init-client default-options))

