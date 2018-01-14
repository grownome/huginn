(ns huginn.sense
  (:require [clojure.reflect :as r]
            [clj-time.coerce :as c]
            [clj-time.core :as t])
  (:import [com.profesorfalken.jsensors JSensors]))
 


(defn get-cpu-temps-raw []
  (into {}
        (map
         #(vector (.name %) (.value %))
         (mapcat #(.temperatures ( .sensors %))
                 (.cpus (.components (JSensors/get)))))))


(defn get-cpu-temps-reading
  []
  (into
   []
   (map
    (fn [[k v]]
      {:event-type "temp"
       :client-id  ""
       :temp-reading {:id k
                      :value v
                      :timestamp (c/to-string (t/now))}}))
   (get-cpu-temps-raw)))

