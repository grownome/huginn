(ns huginn.core
  (:require [pyroclast-clojure.v1.client :as client]

            [huginn.specs.v1 :as specs]))

(def config
  {:pyroclast.topic/id "topic-e12d30eb-63a6-4044-9241-c617fe15ea60"
   :pyroclast.topic/write-key "9d1bfa7d-6aae-407e-8df3-9b0b36f44e72"})


(def resp (client/topic-send-event! config {:value (first (specs/generate-reading-seq))}))


(defn main []
  (let [random-samples (specs/generate-reading-seq)]
    (while true
      (Thread/sleep 600)
      (println "Sending")
      (println @(client/topic-send-event! config
                                          {:value
                                           (assoc
                                            (take 1 random-samples)
                                            :client-id "client-id-a") })))))
