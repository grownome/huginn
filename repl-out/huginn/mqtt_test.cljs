(ns huginn.mqtt-test
  (:require [huginn.mqtt :as sut]
            [cljs.test :as t :include-macros true]))


(t/deftest tele-chan
  (t/testing "telemetry channel should have data on it"
    (t/async done
             (let [c (sut/tele-chan)]
               (is (not (= nil (a/<! c))))))))
