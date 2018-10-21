(ns huginn.mqtt-spec
  (:require
   [cljs.spec.alpha :as s]
   [cljs.test :as t]
   [huginn.mqtt :as mqtt]
   [huginn.config :as config]
   [huginn.jwt :as jw]
   [promesa.core :as p]
   [cljs.core.async :as a]
   [orchestra-cljs.spec.test :as st]))

(st/instrument 'huginn.mqtt)


(t/deftest test-startup-shutdown
  (t/async done
           (p/then
            (mqtt/system-function config/default-options)
            (fn [system]
              (p/then (mqtt/kill-it system)
                      (fn [dead]
                        (done)))))))

(defn test-chan
  []
    (let [mets
          [{:payload (str "test-temp/" (str 10))
            :subfolder "metrics/temperature"}
           {:payload (str "test-temp/" (str 10))
            :subfolder "metrics/temperature"}
           {:payload (str "test-temp/" (str 10))
            :subfolder "metrics/temperature"}]
          c (a/chan)
          ]
      (a/onto-chan c mets false)))


(defn -start-mix-tester
  [sensor-gpio  {:keys [telemetry-chan mixer] :as system} ]
  (let [s-chan (test-chan)]
    (a/admix mixer s-chan)
    (-> system
        (assoc :mixer mixer)
        (assoc :test-chan s-chan))))

(defn start-mix-tester
  [system-promise]
  (p/then system-promise (partial -start-mix-tester )))

(defn sleep
  [prom]
  (p/then prom
          (fn [res ]
            (p/promise
             (fn [resolve reject]
               (a/go
                 (let [waiter (a/<! (a/timeout 1000))]
                   (resolve res))))))))

(t/deftest test-send-shutdown
  (t/async done
           (p/chain
            (mqtt/system-function config/default-options)
            start-mix-tester
            mqtt/kill-it
            sleep
            (fn [system]
              (done)))))
