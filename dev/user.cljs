(ns user
  (:require
   [cljs.core.async :as a]
   [systeminformation :as si]
   [huginn.camera :as c]
   [clojure.pprint :as pprint]
   [cljs.test :as t]
   [cljs.spec.test.alpha :as stest]))


(defn summarize-results [spec-check]
  (map (comp
        #(pprint/write % :stream nil) stest/abbrev-result) spec-check))

(def check-opts {:clojure.spec.test.check/opts {:num-tests 500}})


(defn main [])
