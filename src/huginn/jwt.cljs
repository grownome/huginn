(ns huginn.jwt
  (:require
   [clojure.string :as st]
   [promesa.core :as p]
   [cljs-node-io.core :as io]
   [cljs.nodejs :as nodejs]
   [huginn.config :as config]
   [jsonwebtoken :as jwt]))

(defn round-now []
  (int (/ (js/Date.now) 1000)))

(defn clean-env-key
  "becuase env vars don't get assinged with newlines in resin"
  [private-key]
  (when private-key
    (let [split  (st/split private-key  #" ")
          header (st/join " " (take 3 split))
          footer (st/join " " (take-last 3 split))
          body   (drop-last 3 (drop 3 split))
          joined-body (st/join "\n" body)
          joined-text (st/join "\n" [header joined-body footer])]
      joined-text)))

(defn create-jwt
  "Builds a jwt with an experation"
  [{:keys [projectId tokenExpMins privateKey privateKeyFile algorithm] :as opts}]
  (let [token
        #js {:iat (round-now)
             :exp (+ (* tokenExpMins 60) (round-now)) ;now + 20 min
             :aud projectId}
        privKey (or (clean-env-key privateKey) (io/slurp privateKeyFile))]
    (jwt/sign token privKey #js {:algorithm algorithm })))

(defn client-id
  [{:keys [projectId registryId cloudRegion deviceId] :as opts}]
  (str "projects/" projectId
       "/locations/" cloudRegion
       "/registries/" registryId
       "/devices/" deviceId))

(defn google-iot-conn-args
  [{:keys [registryId
           deviceId
           cloudRegion
           projectId
           privateKey
           privateKeyFile] :as opts}]
  #js {:projectId projectId
       :registryId registryId
       :deviceId deviceId
       :cloudRegion cloudRegion
       :privateKey (or (clean-env-key privateKey) (io/slurp privateKeyFile))})

(defn connection-args
  "builds connection args for connecting to mqtt
  The same args are used no matter what topic you
  are connecting too"
  [{:keys [mqttBridgeHostname tokenExpMins mqttBridgePort projectId privateKeyFile algorithm] :as opts}]
  #js {:host mqttBridgeHostname
       :port mqttBridgePort
       :clean true
       :clientId (client-id opts)
       :keepAlive 60
       :tokenLifecycle (* tokenExpMins 60)
       :username "unused"
       :password (create-jwt opts)
       :protocol "mqtts"
       :onConfiguration (fn [config] (swap! config/iot-config  merge (js->clj config)))
       :secureProtocol "TLSv1_2_method"})

