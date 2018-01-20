(ns huginn.camera
  (:require
   [promesa.core :as p]
   [taoensso.timbre :as timbre
    :refer-macros [log  trace  debug  info  warn  error  fatal  report
                   logf tracef debugf infof warnf errorf fatalf reportf
                   spy get-env]]
   [clojure.core.async :as a]
   [cljs-node-io.core :as io]
   [goog.crypt.base64 :as c]
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
            (a/go
              (a/>! read-chan {:err err
                               :timestamp timestamp
                               :filename filename})))})


(defn add-handlers
  [camera handlers]
  (doseq [[key hand] handlers]
    (.on camera key hand)))


(defn read-img-xform
  [output-dir
   {:keys [err timestamp filename]
    :as img-res}]
  (debug "xforming image " filename)
  (let [img-data (io/slurp (str output-dir "/" filename) {:encoding ""})
        base64-img (c/encodeString img-data)
        split-img  (partition 200000 img-data)
        header    {:payload (str "split_image/" (count img-data))}
        img-packets (map #(hash-map :payload % :timestamp timestamp) split-img)
        complete  (concat [header] img-packets)]
    complete))

(defn build-camera
  ([] (build-camera {}))
  ([{:keys [output-dir tl mode encoding]
     :or {output-dir "pics"
          mode "timelapse"
          encoding "jpg"
          tl (* 60 1000 )} :as opts} ]
   (p/promise
    (fn [resolve reject]
      (let [snap-chan (a/chan (a/buffer 1) (map (partial read-img-xform output-dir)))
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
  (let [camera-p (build-camera)
        mixer (a/mix state-chan)]
    (p/then camera-p
            (fn [{:keys [snap-chan camera]}]
              (info "connecting camera to mixer")
              (a/admix mixer snap-chan)
              [(-> system
                   (assoc :camera camera)
                   (assoc :mixer mixer)
                   (assoc :snap-chan snap-chan))]))))

(defn start-mix-camera
  [system-promise]
  (p/then system-promise -start-mix-camera))
