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
       :tokenLifecycle  (* 60 (:tokenExpMins config/default-options))
       :keepalive 300
       :cloudRegion cloudRegion
       :onConfiguration (fn [v] (reset! config/iot-config v))
       :privateKey (or (clean-env-key privateKey) (io/slurp privateKeyFile))})



