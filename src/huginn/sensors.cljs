(ns huginn.sensors
  (:require
   [promesa.core :as p]
   [taoensso.timbre :as timbre
    :refer-macros [log  trace  debug  info  warn  error  fatal  report
                   logf tracef debugf infof warnf errorf fatalf reportf
                   spy get-env]]
   [clojure.core.async :as a]
   [rpi-gpio  :as s]))

(defn build-sensor-packet
  [sensor-name  sensor-reading]
  (spy  [{:payload sensor-reading
          :subfolder (str "metrics/" sensor-name)}]))

(defn sensor-chan
  "this creates a channel with sensor readings from a given gpio channel
  Use
  Please note that there are two different and confusing ways to reference a channel; either using the Raspberry Pi or the BCM/SoC naming schema (sadly, neither of which match the physical pins!). This module supports both schemas, with Raspberry Pi being the default. Please see this page for more details.

  taken from rpi-gpio readem "
  [sensor-name gpio-channel]
  (let [temp-chan (a/chan)
        out-chan (a/chan (map build-sensor-packet))]
    (a/go-loop []
      (p/chain
       (p/promise
        (fn [resolve reject]
          (s/setup gpio-channel s/DIR_IN (fn [err] (when err (reject err))))
          (resolve nil)))
       (p/promise
        (fn [resolve reject]
          (s/read gpio-channel (fn [err value] (if err (reject err) (resolve value))))))
       (fn [vs] (a/go (a/>! temp-chan vs))))
      (let [v (a/<! temp-chan)]
        (a/>! out-chan v)
        (recur)))
    out-chan))



(defn cleanup-sensor
  [{:keys [sensor-chan] :as system}]
  (a/close! sensor-chan)
  (-> system
      (dissoc :sensor-chan)))


(defn -start-mix-sensor
  [sensor-name sensor-gpio {:keys [telemetry-chan] :as system} ]
  (let [sensor-chan (sensor-chan sensor-name sensor-gpio)
        mixer (a/mix telemetry-chan)]
              (info "connecting sensor to mixer")
              (a/admix mixer sensor-chan)
              [(-> system
                   (assoc :mixer mixer)
                   (assoc :sensor-chan snap-chan))]))

(defn start-mix-sensor
  [system-promise sensor-name sensor-gpio]
  (p/then system-promise (partial -start-mix-sensor sensor-name sensor-gpio)))
