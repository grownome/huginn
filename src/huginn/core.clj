(ns huginn.core
  (:require [clojure.test :refer :all]
            [pyroclast-clojure.v1.roaming.client :as roaming]
            [pyroclast-clojure.v1.roaming.seq :as pseq]
            [pyroclast-clojure.v1.roaming.string :as string]
            [pyroclast-clojure.v1.roaming.math :as math]
            [pyroclast-clojure.v1.roaming.time :as time]
            [pyroclast-clojure.v1.roaming.service :as s]
            [pyroclast-clojure.v1.roaming.filters :as f]
            [pyroclast-clojure.v1.roaming.aggregations :as a]
            [pyroclast-clojure.v1.roaming.coerce :as c]
            [pyroclast-clojure.v1.roaming.topic :as t]))

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))

(def config {:endpoint "http://192.168.0.108:9700"})

(def temperature-records
  [{"sensor-id" "1" "event-type" "reading" "value" "50.24" "unit" "fahrenheit"}
   {"sensor-id" "2" "event-type" "reading" "value" "48.37" "unit" "fahrenheit"}
   {"sensor-id" "3" "event-type" "reading" "value" "52.98" "unit" "fahrenheit"}
   {"sensor-id" "2" "event-type" "ping"}
   {"sensor-id" "1" "event-type" "reading" "value" "49.53" "unit" "fahrenheit"}
   {"sensor-id" "3" "event-type" "reading" "value" "51.13" "unit" "fahrenheit"}
   {"sensor-id" "2" "event-type" "reading" "value" "50.03" "unit" "fahrenheit"}
   {"sensor-id" "1" "event-type" "ping"}
   {"sensor-id" "2" "event-type" "reading" "value" "50.01" "unit" "fahrenheit"}])

(def service (-> (s/new-service)
                 (t/input-topic "sensor-events")
                 (f/= "event-type" "reading")               ;; Only interested in tempterature readings.
                 (c/parse-vals {"value" "double"})          ;; Parse strings into doubles.
                 (math/minus "value" 32)                    ;; Fahrenheit to celsius math.
                 (math/divide "value" 1.8)
                 (pseq/assoc-in ["unit"] "celsius")         ;; Update the event to reflect the new unit.
                 (math/round-decimals "value" 2)            ;; Tidy up our decimals.
                 (t/output-topic "as-celsius")))
 
(deftest test-streaming-temperature-sensor-readings
  (let [simulation (roaming/simulate! config service temperature-records)]
    (is (:success? simulation))
    (is (= [{"sensor-id" "1" "event-type" "reading" "value" 10.13 "unit" "celsius"}
            {"sensor-id" "2" "event-type" "reading" "value" 9.09 "unit" "celsius"}
            {"sensor-id" "3" "event-type" "reading" "value" 11.66 "unit" "celsius"}
            {"sensor-id" "1" "event-type" "reading" "value" 9.74 "unit" "celsius"}
            {"sensor-id" "3" "event-type" "reading" "value" 10.63 "unit" "celsius"}
            {"sensor-id" "2" "event-type" "reading" "value" 10.02 "unit" "celsius"}
            {"sensor-id" "2" "event-type" "reading" "value" 10.01 "unit" "celsius"}]
           (get-in simulation [:result :output-records])))))

