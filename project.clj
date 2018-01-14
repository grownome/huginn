(defproject huginn "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main huginn.core
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [clj-time "0.14.2"]
                 [com.github.sarxos/v4l4j "0.9.1-r507"]
                 [io.pyroclast/pyroclast-clojure "0.2.1"]
                 [com.profesorfalken/jSensors "2.0.2"]
                 [org.clojure/test.check "0.10.0-alpha2"]])
