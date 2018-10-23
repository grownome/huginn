(ns huginn.core
  (:require
   [huginn.config :as config]
   [huginn.mqtt :as mqtt]
   [huginn.camera :as camera]
   [huginn.sensors :as sensor]
   [orchestra-cljs.spec.test :as spec-test]
   [clojure.core.async :as a]
   [cljs.nodejs :as nodejs]
   [cljs.spec.alpha :as s]
   [taoensso.timbre :as timbre
    :refer-macros [log  trace  debug  info  warn  error  fatal  report
                   logf tracef debugf infof warnf errorf fatalf reportf
                   spy get-env]]
   [promesa.core :as p]))


(nodejs/enable-util-print!)

(def system-atom (atom nil))


(spec-test/instrument)

;Channel
(s/def ::camera-restart any?)
(s/def ::snap-chan any?)
(s/def ::camera-restart any?)
(s/def ::telemetry-chan any?)
(s/def ::mixer   any?)


(s/fdef add-mixer
  :args (s/cat :state (s/keys :req-un [::telemetry-chan]))
  :ret (s/keys :req-un [::telemetry-chan ::mixer]))

(defn add-mixer
  [{:keys [telemetry-chan] :as state}]
  (assoc state :mixer (a/mix telemetry-chan)))

(s/fdef camera-restarter
  :args (s/cat :system (s/keys :req-un [::camera-restart ::snap-chan ::mixer]))
  :ret any?)

(defn camera-restarter
  [system]
  (a/go-loop [restart  (a/<! (:camera-restart system))]
    (a/unmix (:mixer system) (:snap-chan system))
    (p/then (camera/start-mix-camera system)
            (fn [sys]
              (reset! system-atom sys)
              (recur (a/<! (:camera-restart sys)))))))

(defn main [& args]
  (println "starting huginn")
  (let [system (mqtt/system-function config/default-options)
        system-with-mixer (p/then system add-mixer)
        s-with-humididty (sensor/start-mix-sensor system-with-mixer config/default-options 17)
        s-with-cam (camera/start-mix-camera s-with-humididty)]
    (p/chain
     s-with-cam
     (fn final [sys]
       (debug sys)
       (reset! system-atom sys)
       (camera-restarter sys)))))


