(ns huginn.core
  (:require
   [huginn.config :as config]
   [cljs.nodejs :as nodejs]
   [huginn.camera :as camera]
   [promesa.core :as p]
   [huginn.mqtt :as mqtt]))


(nodejs/enable-util-print!)

(def system-atom (atom nil))

(defn -main [& args]
  (println "starting huginn")
  (let [system (mqtt/system-function config/default-options)
        s-with-cam (camera/start-mix-camera system)] 
    (p/then s-with-cam
     #(reset! system-atom %))))


(set! *main-cli-fn* -main)
