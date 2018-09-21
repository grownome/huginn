(ns user
  (:require
   [cljs.core.async :as a]
   [systeminformation :as si]
   [huginn.camera :as c]
   [cljs.test :as t]
   [cljs.spec.alpha :as s]))

(chunk-image (js/Buffer.from "string" "ascii"))

(def check-opts {:clojure.spec.test.check/opts {:num-tests 500}})

(defn check-it []
  (stest/check 'c/chunk-image))

(i/)

(defn main [])
