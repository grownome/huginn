(ns huginn.sensors
  (:require
   [promesa.core :as p]
   [taoensso.timbre :as timbre
    :refer-macros [log  trace  debug  info  warn  error  fatal  report
                   logf tracef debugf infof warnf errorf fatalf reportf
                   spy get-env]]
   [huginn.mqtt :refer [payload-root]]
   [clojure.core.async :as a]
   ["node-dht-sensor" :as s]))


(defn build-sensor-packet
  [sensor-name  sensor-reading]
  (spy  [{:payload sensor-reading
          :subfolder (str "metrics/" sensor-name)}]))

(defn publish-sensor-reading
  [opts out-chan err temp humidity]
  (if err
    (do (info err))
    (a/go
      (a/>! out-chan
            [{:payload (str (payload-root opts) "-room-temp/" (str temp))
              :subfolder "metrics/temprature"}
             {:payload (str
                        (payload-root opts) "-room-humidity/" (str humidity))
              :subfolder "metrics/humidity"}]))))

(defn sensor-chan
  "this creates a channel with sensor readings from a given gpio channel
  Use
  Please note that there are two different and confusing ways to reference a channel; either using the Raspberry Pi or the BCM/SoC naming schema (sadly, neither of which match the physical pins!). This module supports both schemas, with Raspberry Pi being the default. Please see this page for more details.

  taken from rpi-gpio readem "
  [opts gpio-channel]
  (let [out-chan (a/chan)]
    (info gpio-channel)
    (s/read 22 gpio-channel (partial publish-sensor-reading opts out-chan))
    (a/go-loop []
      (a/<! (a/timeout (:dht11Delay opts)))
      (s/read 22 gpio-channel (partial publish-sensor-reading opts out-chan))
        (recur))
    out-chan))



(defn cleanup-sensor
  [{:keys [sensor-chan] :as system}]
  (a/close! sensor-chan)
  (-> system
      (dissoc :sensor-chan)))


(defn -start-mix-sensor
  [opts sensor-gpio  {:keys [telemetry-chan mixer] :as system} ]
  (let [s-chan (sensor-chan opts sensor-gpio)]
              (info "connecting sensor to mixer")
              (a/admix mixer s-chan)
              (spy (-> system
                       (assoc :mixer mixer)
                       (assoc :sensor-chan s-chan)))))

(defn start-mix-sensor
  [system-promise opts sensor-gpio]
  (p/then system-promise (partial -start-mix-sensor opts sensor-gpio)))
