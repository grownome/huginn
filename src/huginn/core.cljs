(ns huginn.core
  (:require
   [huginn.config :as config]
   [cljs.nodejs :as nodejs]
   [huginn.mqtt :as mqtt]))


(nodejs/enable-util-print!)


(defn -main []
  (println "starting huginn")
 ; (def c (mqtt/ config/default-options))

  )

