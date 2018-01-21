// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('huginn.core');
goog.require('cljs.core');
goog.require('huginn.config');
goog.require('cljs.nodejs');
goog.require('huginn.camera');
goog.require('promesa.core');
goog.require('huginn.mqtt');
cljs.nodejs.enable_util_print_BANG_.call(null);
huginn.core.system_atom = cljs.core.atom.call(null,null);
huginn.core._main = (function huginn$core$_main(var_args){
var args__32158__auto__ = [];
var len__32151__auto___45452 = arguments.length;
var i__32152__auto___45453 = (0);
while(true){
if((i__32152__auto___45453 < len__32151__auto___45452)){
args__32158__auto__.push((arguments[i__32152__auto___45453]));

var G__45454 = (i__32152__auto___45453 + (1));
i__32152__auto___45453 = G__45454;
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
return promesa.core.then.call(null,s_with_cam,((function (system,s_with_cam){
return (function (p1__45450_SHARP_){
return cljs.core.reset_BANG_.call(null,huginn.core.system_atom,p1__45450_SHARP_);
});})(system,s_with_cam))
);
});

huginn.core._main.cljs$lang$maxFixedArity = (0);

huginn.core._main.cljs$lang$applyTo = (function (seq45451){
return huginn.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45451));
});

cljs.core._STAR_main_cli_fn_STAR_ = huginn.core._main;

//# sourceMappingURL=core.js.map
