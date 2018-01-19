(ns huginn.mqtt-test
  (:require [huginn.mqtt :as sut]
            [huginn.config :as config]
            [clojure.core.async :as a]
            [cljs.test :as t :include-macros true]))



(t/deftest tele-chan
  (t/testing "telemetry channel should have data on it"
    (t/async done
             (a/go
               (let [c (sut/tele-chan config/default-options)]
                 (t/is (not (= nil (a/<! c))))
                 (done))))))
