(ns huginn.core
  (:require
   [huginn.config :as config]
   [huginn.mqtt :as mqtt]
   [huginn.camera :as camera]
   [huginn.sensors :as sensor]
   [clojure.core.async :as a]
   [cljs.nodejs :as nodejs]
   [promesa.core :as p]))


(nodejs/enable-util-print!)

(def system-atom (atom nil))

(defn add-mixer
  [{:keys [telemetry-chan] :as state}]
  (assoc state :mixer (a/mix telemetry-chan)))

(defn camera-restarter
  [system]
  (a/go-loop [restart  (a/<! (:restart-chan system))]
    (a/unmix (:mixer system) (:snap-chan system))
    (p/then (camera/start-mix-camera system)
            (fn [sys]
              (reset! system-atom sys)
              (recur (a/<! (:restart-chan sys)))))))

(defn main [& args]
  (println "starting huginn")
  (let [system (mqtt/system-function config/default-options)
        system-with-mixer (p/then system add-mixer)
        s-with-humididty (sensor/start-mix-sensor system-with-mixer config/default-options 17)
        s-with-cam (camera/start-mix-camera s-with-humididty)]
    (p/chain
     s-with-cam
     (fn final [sys]
       (reset! system-atom sys)
       (camera-restarter sys)))))


