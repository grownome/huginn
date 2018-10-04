(ns huginn.core
  (:require
   [huginn.config :as config]
   [huginn.mqtt :as mqtt]
   [huginn.camera :as camera]
   [huginn.sensors :as sensor]
   [clojure.core.async :as a]
   [cljs.nodejs :as nodejs]
   [promesa.core :as p]
   [gpio.core :as gp]))


(nodejs/enable-util-print!)

(def system-atom (atom nil))

(defn add-mixer
  [{:keys [telemetry-chan] :as state}]
  (assoc state :mixer (a/mix telemetry-chan)))

(def port (gp/open-port 4))

(defn led-flash
  (gp/set-direction! port :out)
  (gp/write-value! port :high)
  (a/<! (a/timeout 500))
  (gp/write-value! port :low)
  (a/<! (a/timeout 500)))

(defn led-start-flash
  (take 5 (repeatedly led-flash)))

(defn main [& args]
  (println "starting huginn")
  (led-start-flash)
  (let [system (mqtt/system-function config/default-options)
        system-with-mixer (p/then system add-mixer)
        s-with-humididty (sensor/start-mix-sensor system-with-mixer config/default-options 17)
        s-with-cam (camera/start-mix-camera s-with-humididty)
        ]
    (p/chain
     s-with-cam
     #(reset! system-atom %))))


