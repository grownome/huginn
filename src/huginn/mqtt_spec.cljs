(ns huginn.mqtt-spec
  (:require
   [cljs.spec.alpha :as s]
   [cljs.test :as t]
   [huginn.mqtt :as mqtt]
   [huginn.jwt :as jw]
   [orchestra-cljs.spec.test :as st]))

(st/instrument)


(t/deftest test-jwt
  (t/async done
           (t/is (= 1 0))
           (done)


           )

  )
