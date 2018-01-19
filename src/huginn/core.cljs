(ns huginn.core
  (:require
   [huginn.config :as config]
   [cljs.nodejs :as nodejs]
   [huginn.mqtt :as mqtt]))


(nodejs/enable-util-print!)


(defn -main [& args]
  (println "starting huginn")
  (let [system (mqtt/system-function config/default-options)]))


(print "test")
(set! *main-cli-fn* -main)
