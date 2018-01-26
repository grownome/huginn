// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('huginn.core');
goog.require('cljs.core');
goog.require('huginn.config');
goog.require('huginn.mqtt');
goog.require('huginn.camera');
goog.require('huginn.sensors');
goog.require('cljs.nodejs');
goog.require('promesa.core');
cljs.nodejs.enable_util_print_BANG_.call(null);
huginn.core.system_atom = cljs.core.atom.call(null,null);
huginn.core._main = (function huginn$core$_main(var_args){
var args__32158__auto__ = [];
var len__32151__auto___37086 = arguments.length;
var i__32152__auto___37087 = (0);
while(true){
if((i__32152__auto___37087 < len__32151__auto___37086)){
args__32158__auto__.push((arguments[i__32152__auto___37087]));

var G__37088 = (i__32152__auto___37087 + (1));
i__32152__auto___37087 = G__37088;
continue;
} else {
}
break;
}

var argseq__32159__auto__ = ((((0) < args__32158__auto__.length))?(new cljs.core.IndexedSeq(args__32158__auto__.slice((0)),(0),null)):null);
return huginn.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__32159__auto__);
});

huginn.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.println.call(null,"starting huginn");

var system = huginn.mqtt.system_function.call(null,huginn.config.default_options);
var s_with_cam = huginn.camera.start_mix_camera.call(null,system);
var s_with_humididty = huginn.sensors.start_mix_sensor.call(null,s_with_cam,"humidity",(17));
return promesa.core.then.call(null,s_with_cam,((function (system,s_with_cam,s_with_humididty){
return (function (p1__37084_SHARP_){
return cljs.core.reset_BANG_.call(null,huginn.core.system_atom,p1__37084_SHARP_);
});})(system,s_with_cam,s_with_humididty))
);
});

huginn.core._main.cljs$lang$maxFixedArity = (0);

huginn.core._main.cljs$lang$applyTo = (function (seq37085){
return huginn.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37085));
});

cljs.core._STAR_main_cli_fn_STAR_ = huginn.core._main;

//# sourceMappingURL=core.js.map
