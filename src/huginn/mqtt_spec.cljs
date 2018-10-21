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
      (a/onto-chan c mets )))


(defn -start-mix-tester
  [ {:keys [telemetry-chan mixer] :as system} ]
  (let [s-chan (test-chan)]
    (println "adding mixxer")
    (a/admix mixer s-chan)
    (-> system
        (assoc :mixer mixer)
        (assoc :test-chan s-chan))))

(defn start-mix-tester
  [system-promise]
  (p/then system-promise  -start-mix-tester ))

(defn sleep
  [prom]
  (p/then prom
          (fn [res]
            (t/is (contains? res :mixer))
            (t/is (contains? res :test-chan))
            (p/promise
             (fn [resolve reject]
               (a/go
                 (let [waiter (a/<! (a/timeout 1))]
                   (resolve res))))))))

  (t/deftest test-send-shutdown
    (t/async done
             (p/chain
              (mqtt/system-function config/default-options)
              start-mix-tester
              sleep
              mqtt/kill-it
              (fn [system]
                (done)))))
