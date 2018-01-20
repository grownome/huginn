(ns huginn.camera
  (:require
   [promesa.core :as p]
   [taoensso.timbre :as timbre
    :refer-macros [log  trace  debug  info  warn  error  fatal  report
                   logf tracef debugf infof warnf errorf fatalf reportf
                   spy get-env]]
   [clojure.core.async :as a]
   [cljs-node-io.core :as io]
   [goog.crypt :as c]
   [raspicam :as r]))

(defn cam-handlers
  [success-fn stop-fn read-chan]
  {"start" (fn []
             (info "camera connected")
             (success-fn))
   "stop"   (fn [] (debug "camera stopping")
              (stop-fn))
   "exit"   (fn [err] (error "error: " err))
   "read" (fn [err timestamp filename]
               (spy :debug [err timestamp filename])
               (a/>! read-chan {:err err
                                :timestamp timestamp
                                :filename filename}))})


(defn add-handlers
  [camera handlers]
  (doseq [[key hand] handlers]
    (.on camera key hand)))


(defn read-img-xform
  [{:keys [err timestamp filename]
    :as img-res}]
  (debug "xforming image " filename)
  (let [img-data (io/slurp filename)
        base64-img (c/base64 "abc")]
    (io/delete-file filename)
    {:img base64-img
     :timestamp timestamp}))

(defn build-camera
  ([] (build-camera {}))
  ([{:keys [output-dir tl mode encoding]
     :or {output-dir "pics"
          mode "timelapse"
          encoding "jpg"
          tl (* 60 1000 60 5)} :as opts} ]
   (p/promise
    (fn [resolve reject]
      (let [snap-chan (a/chan 5 (map read-img-xform))
            ^RaspiCam
            camera (r.
                    #js
                    {:output (str output-dir "/%d_img.jpg")
                     :mode mode
                     :encoding encoding
                     :tl tl})
            output {:snap-chan snap-chan
                    :camera camera}
            handlers (cam-handlers
                      #(resolve output)
                      #(doall
                        (map io/delete-file
                             (io/file-seq output-dir)))
                      snap-chan)]
        (add-handlers camera handlers)
        (.start camera))))))


(defn cleanup-camera
  [{:keys [camera snap-chan]}]
  (.stop camera)
  (a/close! snap-chan))


(defn -start-mix-camera
  [{:keys [state-chan] :as system}]
  (let [camera (build-camera)
        mixer (a/mix state-chan)]
    (a/admix mixer (:snap-chan camera))
    [(-> system
         (assoc :camera (:camera camera))
         (assoc :mixer mixer)
         (assoc :snap-chan (:snap-chan camera)))]))

(defn start-mix-camera
  [system-promise]
  (p/then system-promise -start-mix-camera))
