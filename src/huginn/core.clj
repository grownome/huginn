(ns huginn.core
  (:require [pyroclast-clojure.v1.client :as client]
            [huginn.sense :as sense]
            [huginn.specs.v1 :as specs]))

(def config
  {:pyroclast.topic/id "topic-e12d30eb-63a6-4044-9241-c617fe15ea60"
   :pyroclast.topic/write-key "9d1bfa7d-6aae-407e-8df3-9b0b36f44e72"
   :pyroclast.archiver/bucket "test-huginn"
   :pyroclast.api/region "us-west-2"})




(defn -main []
  (let [random-samples (specs/generate-reading-seq)]
    (while true
      (Thread/sleep 600)
      (println "Sending")
      (println @(client/topic-send-events!
                 config
                 (into []
                       (map
                        (fn [v] {:value v}))
                       (sense/get-cpu-temps-reading)))))))
