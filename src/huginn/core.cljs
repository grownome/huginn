(ns huginn.core
  (:require
   [huginn.config :as config]
   [huginn.mqtt :as mqtt]
   [huginn.camera :as camera]
   [huginn.sensors :as sensor]
   [cljs.nodejs :as nodejs]
   [promesa.core :as p]))


(nodejs/enable-util-print!)

(def system-atom (atom nil))

(defn main [& args]
  (println "starting huginn")
  (let [system (mqtt/system-function config/default-options)
        s-with-humididty (sensor/start-mix-sensor system config/default-options 17)
        s-with-cam (camera/start-mix-camera s-with-humididty)]
    (p/chain
     s-with-cam
     #(reset! system-atom %))))


