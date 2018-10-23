(ns huginn.camera
  (:require
   [promesa.core :as p]
   [taoensso.timbre :as timbre
    :refer-macros [log  trace  debug  info  warn  error  fatal  report
                   logf tracef debugf infof warnf errorf fatalf reportf
                   spy get-env]]
   [goog.crypt.Md5 :as MD5]
   [goog.crypt.base64 :as b64]
   [goog.crypt :as gcrypt]
   [clojure.core.async :as a]
   [cljs-node-io.core :as io]
   [raspicam :as r]
   [cljs.spec.alpha :as spec]))

(defn hash-bytes [digester bytes-in]
  (do
    (.update digester bytes-in)
    (.digest digester)))

(defn md5
  "convert bytes to md5 bytes"
  [bytes-in]
  (gcrypt/byteArrayToHex (hash-bytes (goog.crypt.Md5.) bytes-in)))

(defn cam-handlers
  [success-fn stop-fn restart-fn read-chan ]
  {"start" (fn []
             (info "camera connected")
             (success-fn))
   "stop"   (fn [] (debug "camera stopping")
              (stop-fn))
   "exit"   (fn [err] (restart-fn) (error "exit: " err))
   "read" (fn [err timestamp filename]
               (spy :debug [err timestamp filename])
            (a/go
              (let []
                (a/>! read-chan {:err err
                                 :timestamp timestamp
                                 :filename filename}))))})



(defn add-handlers
  [camera handlers]
  (doseq [[key hand] handlers]
    (.on camera key hand)))


(defn decode
  [v]
  (js/Buffer.from
   (b64/decodeStringToUint8Array
    v
    )))

(spec/fdef chunk-img
  :args (spec/cat :img (partial js/Buffer.isBuffer)
                  :chunk-size int?)
  :ret (spec/coll-of string?)
  :fn  (fn [{:keys [args ret]}]
         (.equals (:img args) (js/Buffer.concat (apply array (map decode ret))))))


(defn chunk-img
  [img chunk-size]
  ""
  (let [points   (range 0 (.-length img))
        groups   (partition-all chunk-size points)
        starts   (map first groups)
        ends     (map (comp inc last) groups)]
    (if (< (.-length img) chunk-size)
      [img]
      (->> (map (fn [start end] (.slice img start end)) starts ends)
           (map (fn [buff] (b64/encodeByteArray  (js/Buffer. buff))))
           (into [])))))


(defn read-imgs
  [output-dir in out]
  (a/go-loop []
    (let [{:keys [err timestamp filename]
           :as img-res} (a/<! in)]
      (debug "xforming image " filename)::camera-restart

      (let [[err img-data] (a/<!
                            (io/aslurp (str output-dir "/" filename) :encoding ""))]
        (if (or err (= filename ""))
          (do (error "error reading image:" err " " filename)
              (recur))
          (let [img-buffers (chunk-img img-data  50000)
                byte-hash (md5 img-data)
                img-packets (map-indexed
                             (fn [index payload]
                               (hash-map :payload payload
                                         :timestamp timestamp
                                         :subfolder (str "captures/"
                                                         byte-hash
                                                         "/"
                                                         (- (count img-buffers) 1)
                                                         "/"
                                                         index))) img-buffers)
               complete  img-packets]
            (debug "trying to write img packet")
            (a/>! out complete)
            (debug "done transforming")
            (recur)))))))

(defn build-camera
  ([] (build-camera {}))
  ([{:keys [output-dir tl mode encoding]
     :or {output-dir "pics"
          mode "timelapse"
          encoding "jpg"
          tl (* 60 1000 5)} :as opts}]
   (p/promise
    (fn [resolve reject]
      (let [snap-chan (a/chan)
            data-chan (a/chan)
            restart-chan (a/chan)
            ^RaspiCam
            camera (r.
                    #js
                    {:output (str output-dir "/%01d_img.jpg")
                     :mode mode
                     :encoding encoding
                     :tl tl})
            output {:raw-chan snap-chan
                    :snap-chan data-chan
                    :restart-chan restart-chan
                    :camera camera}
            handlers (cam-handlers
                      #(resolve output)
                      #(doall
                        (map io/delete-file
                             (io/file-seq output-dir)))
                      (fn restart []
                        (a/>! restart-chan "Camera Dead"))
                      snap-chan)]
        (read-imgs output-dir snap-chan data-chan)
        (add-handlers camera handlers)
        (.start camera))))))


(defn cleanup-camera
  [{:keys [camera restart-chan mixer snap-chan] :as system}]
  (.stop camera)
  (a/close! restart-chan)
  (a/unmix mixer snap-chan)
  (a/close! snap-chan)
  (-> system
      (dissoc :camera)
      (dissoc :restart-chan)
      (dissoc :snap-chan)))


(defn -start-mix-camera
  [{:keys [telemetry-chan mixer] :as system}]
  (let [camera-p (build-camera )]
    (p/then camera-p
            (fn [{:keys [snap-chan restart-chan camera]}]
              (info "connecting camera to mixer")
              (a/admix mixer snap-chan)
              (-> system
                  (assoc :camera camera)
                  (assoc :mixer mixer)
                  (assoc :camera-restart restart-chan)
                  (assoc :snap-chan snap-chan))))))

(defn start-mix-camera
  [system-promise]
  (p/then system-promise -start-mix-camera))
