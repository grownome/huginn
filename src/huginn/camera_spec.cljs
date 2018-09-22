(ns huginn.camera-spec
  (:require
   [cljs.test :as t]
   [cljs.spec.alpha :as s]
   [huginn.camera :as c]
   [goog.crypt.base64 :as b64]
   [goog.crypt :as gc]
   [cljs.spec.test.alpha :as sr]))

(sr/instrument 'huginn.camera)

(t/deftest equal-chunk-img
  (let [ b1 (js/Buffer.from "alongteststring", "ascii")
        parts (map b64/decodeStringToByteArray  (c/chunk-img b1 3))
        ]
    (t/is (= (.toString (js/Buffer.concat (to-array parts)) "ascii")) "alongteststring")))



(t/deftest equal-big-chunk-img
  (let [s "alongteststringalongteststringalongteststringalongteststring"
        b1 (js/Buffer.from s "ascii")
        parts (map b64/decodeStringToByteArray (c/chunk-img b1 3))
        ]
    (t/is (= (.toString (js/Buffer.concat (to-array parts)) "ascii")) s)))

(t/deftest equal-big-chunk-img-bytes
  (let [s #js [0x0 0x1 0x2 0x3 0x4 0x5 0x6 0x7 0x8 0x9 0xa]
        b1 (js/Buffer.from s )
        parts (map b64/decodeStringToByteArray  (c/chunk-img b1 3))
        ]
    (t/is (= (.toString (js/Buffer.concat (clj->js  parts)) )) s)))

(t/deftest equal-big-chunk-img-bytes-2
  (let [s #js [0xff 0xff 0xff 0xff 0xff 0xff 0xff 0xff]
        b1 (js/Buffer.from s )]
    (t/is (= (js/Buffer.concat (clj->js (map b64/decodeStringToByteArray  (c/chunk-img b1 3)))) s))))
