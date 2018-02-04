(ns huginn.sensors
  (:require
   [promesa.core :as p]
   [taoensso.timbre :as timbre
    :refer-macros [log  trace  debug  info  warn  error  fatal  report
                   logf tracef debugf infof warnf errorf fatalf reportf
                   spy get-env]]
   [clojure.core.async :as a]))

(def s (js/require "node-dht-sensor"))

(defn build-sensor-packet
  [sensor-name  sensor-reading]
  (spy  [{:payload sensor-reading
          :subfolder (str "metrics/" sensor-name)}]))


(defn sensor-chan
  "this creates a channel with sensor readings from a given gpio channel
  Use
  Please note that there are two different and confusing ways to reference a channel; either using the Raspberry Pi or the BCM/SoC naming schema (sadly, neither of which match the physical pins!). This module supports both schemas, with Raspberry Pi being the default. Please see this page for more details.

  taken from rpi-gpio readem "
  [gpio-channel]
  (let [out-chan (a/chan)]
    (info gpio-channel)
    (a/go-loop []
      (a/<! (a/timeout 10000))
      (.read s 11 gpio-channel
             (fn [err temp humidity]
               (spy [err temp humidity])
                     (if err
                       (do (info err))
                       (a/>! out-chan
                             [{:payload temp
                               :subfolder "metrics/temprature"}
                              {:payload humidity
                               :subfolder "metrics/humidity"}]))))
        (recur))
    out-chan))



(defn cleanup-sensor
  [{:keys [sensor-chan] :as system}]
  (a/close! sensor-chan)
  (-> system
      (dissoc :sensor-chan)))


(defn -start-mix-sensor
  [sensor-gpio {:keys [telemetry-chan] :as system} ]
  (let [s-chan (sensor-chan sensor-gpio)
        mixer (a/mix telemetry-chan)]
              (info "connecting sensor to mixer")
              (a/admix mixer s-chan)
              (spy (-> system
                       (assoc :mixer mixer)
                       (assoc :sensor-chan s-chan)))))

(defn start-mix-sensor
  [system-promise sensor-gpio]
  (p/then system-promise (partial -start-mix-sensor sensor-gpio)))
