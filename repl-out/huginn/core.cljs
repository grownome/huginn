(ns huginn.core
  (:require
   [huginn.config :as config]
   [huginn.mqtt :as mqtt]))


(nodejs/enable-util-print!)


(defn -main []
  (println "starting huginn")
  (def c (mqtt/init-client config/default-options)))

