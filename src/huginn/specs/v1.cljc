(ns huginn.specs.v1
  (:require [clojure.spec.alpha :as s]
            [clojure.test.check.generators :as tg]
            [clj-time.coerce :as c]
            [clj-time.format :as f]
            [clj-time.core :as t]
            [clj-time.predicates :as tp]))


(def date-format (:rfc822 f/formatters) )

(s/def ::id uuid?)
(s/def ::timestamp
  (s/with-gen
    string?
    #(tg/fmap (fn [v] (print v) (c/to-string  (c/from-long v))) (tg/large-integer* {:min 1000000000000 :max 8000000000000}))))

(f/unparse date-format (c/from-long 100000000))

(tg/sample (s/gen ::timestamp))

(s/def ::value float?)
(s/def ::url string?)


(s/def ::temp-reading
  (s/keys :req-un [::id
                   ::value
                   ::timestamp]))

(s/def ::humidity-reading (s/keys :req-un [::id ::value ::timestamp]))

(s/def ::image-reading
  (s/keys :req-un [::id
                   ::url
                   ::timestamp]))

(s/def ::client-id uuid?)
(s/def ::event-type #{"temp" "humidity" "image"})

(s/def ::reading
  (s/keys
   :req-un [::client-id
            ::event-type]

   :opt-un [::temp-reading
            ::humidity-reading
            ::image-reading]))


(defn generate-reading-seq []
  (tg/sample-seq (s/gen ::reading)))

