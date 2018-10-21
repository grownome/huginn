(ns huginn.mqtt-spec
  (:require
   [cljs.spec.alpha :as s]
   [cljs.test :as t]
   [huginn.mqtt :as mqtt]
   [huginn.config :as config]
   [huginn.jwt :as jw]
   [promesa.core :as p]
   [orchestra-cljs.spec.test :as st]))

(st/instrument 'huginn.mqtt)


(t/deftest test-jwt
  (t/async done
           (p/then
            (mqtt/system-function config/default-options)
            (fn [system]
              (p/then (mqtt/kill-it system)
                      (fn [dead]
                        (done)))))))
