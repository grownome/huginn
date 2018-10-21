(ns huginn.camera-spec
  (:require
   [cljs.test :as t]
   [cljs.spec.alpha :as s]
   [huginn.camera :as c]
   [goog.crypt.base64 :as b64]
   [goog.crypt :as gc]
   [cljs.spec.test.alpha :as sr]))

(sr/instrument 'huginn.camera)

(defn decode
  [v]
  (js/Buffer.from
   (b64/decodeStringToUint8Array
     v))

  )
(t/deftest equal-chunk-img
  (let [ b1 (js/Buffer.from "alongteststring", "ascii")
        parts  (c/chunk-img b1 3)]
    (t/is (= (apply str (map decode parts))) "alongteststring")))



(t/deftest equal-big-chunk-img
  (let [s "alongteststringalongteststringalongteststringalongteststring"
        b1 (js/Buffer.from s "ascii")
        parts (c/chunk-img b1 3)
        ]
    (t/is (= (apply str (map decode parts))) s)))



(t/deftest equal-big-binary-chunk-img
  (let [s #js [0x1 0x2 0x3 0x4 0x5 0x6 0x7 0x8]
        b1 (js/Buffer.from s)
        parts (c/chunk-img b1 3)]
    (t/is (.equals (js/Buffer.concat (apply array (map decode parts))) b1))))

