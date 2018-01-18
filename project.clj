(defproject huginn "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main user
  :plugins [[lein-cljsbuild "1.1.7"]]

;  :jvm-opts ["--add-modules" "java.xml.bind"]
  :source-paths ["dev" "src"]
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :cljsbuild {:builds [{:source-paths ["src"]
                        :compiler {:optimizations :simple
                                   :install-deps true
                                   :main huginn.core
                                   :output-to "package/index.js"
                                   :target :nodejs
                                   :output-dir "target"
                                   :npm-deps {"@google-cloud/storage" "1.5.2"
                                              "@google-cloud/pubsub" "0.13.2"
                                              :ava "0.22.0"
                                              :systeminformation "3.33.0"
                                              :jsonwebtoken "7.4.1"
                                              :mqtt "2.15.0"
                                              :uuid "3.1.0"
                                              :yargs "8.0.2"}
                                   :pretty-print true}}]}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [clj-time "0.14.2"]
                 [org.clojure/clojurescript "1.9.946"]
                 [cljs-node-io "0.5.0"]
                 [funcool/promesa "1.9.0"]
                 [org.clojure/core.async "0.4.474"]
                 [lein-cljsbuild "1.1.7"]
                 [com.cemerick/piggieback "0.2.2"]
                 [org.clojure/tools.nrepl "0.2.10"]
                 [org.clojure/tools.reader "1.1.1"]
                 [com.github.sarxos/v4l4j "0.9.1-r507"]
                 [io.pyroclast/pyroclast-clojure "0.2.1"]
                 [com.profesorfalken/jSensors "2.0.2"]
                 [org.clojure/test.check "0.10.0-alpha2"]])
