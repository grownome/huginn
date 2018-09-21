(ns huginn.camera-spec
  (:require
   [cljs.test :as t]
   [cljs.spec.alpha :as s]
   [huginn.camera :as c]
   [cljs.spec.test.alpha :as sr]))

(t/deftest equal-chunk-img
  (let [ b1 (js/Buffer.from "alongteststring", "ascii")]
    (t/is (= (.toString (js/Buffer.concat (to-array (c/chunk-img b1 3))) "ascii")) "alongteststring")))



(t/deftest equal-big-chunk-img
  (let [s "alongteststringalongteststringalongteststringalongteststring"
        b1 (js/Buffer.from s "ascii")]
    (t/is (= (.toString (js/Buffer.concat (to-array (c/chunk-img b1 3))) "ascii")) s)))

(t/deftest equal-big-chunk-img-bytes
  (let [s #js [0x0 0x1 0x2 0x3 0x4 0x5 0x6 0x7 0x8 0x9 0xa]
        b1 (js/Buffer.from s )]
    (t/is (= (.toString (js/Buffer.concat (to-array (c/chunk-img b1 3))) )) s)))


