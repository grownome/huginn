(ns huginn.test-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [huginn.core-test]
            [huginn.mqtt-test]
            [huginn.jwt-test]))

(doo-tests 'huginn.core-test
           'huginn.mqtt-test
           'huginn.jwt-test)
