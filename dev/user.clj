(ns user
  (:require [cemerick.piggieback :as pback]
            [cljs.repl.node :as rn]))


(defn start-cljs-repl []
  (pback/cljs-repl (rn/repl-env)))

