(ns user
  (:require
   [cljs.core.async :as a]
   [systeminformation :as si]
   [huginn.camera :as c]
   [cljs.test :as t]
   [cljs.spec.test.alpha :as stest]
   [cljs.spec.alpha :as s]))


(def check-opts {:clojure.spec.test.check/opts {:num-tests 500}})


(defn main [])
