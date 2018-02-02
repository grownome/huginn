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
huginn.core.main = (function huginn$core$main(var_args){
var args__10212__auto__ = [];
var len__10205__auto___40219 = arguments.length;
var i__10206__auto___40220 = (0);
while(true){
if((i__10206__auto___40220 < len__10205__auto___40219)){
args__10212__auto__.push((arguments[i__10206__auto___40220]));

var G__40221 = (i__10206__auto___40220 + (1));
i__10206__auto___40220 = G__40221;
continue;
} else {
}
break;
}

var argseq__10213__auto__ = ((((0) < args__10212__auto__.length))?(new cljs.core.IndexedSeq(args__10212__auto__.slice((0)),(0),null)):null);
return huginn.core.main.cljs$core$IFn$_invoke$arity$variadic(argseq__10213__auto__);
});

huginn.core.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.println.call(null,"starting huginn");

var system = huginn.mqtt.system_function.call(null,huginn.config.default_options);
var s_with_humididty = huginn.sensors.start_mix_sensor.call(null,system,(17));
var s_with_cam = huginn.camera.start_mix_camera.call(null,system);
return promesa.core.chain.call(null,promesa.core.all.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_with_humididty,s_with_cam], null)),cljs.core.partial.call(null,cljs.core.reduce,cljs.core.merge),((function (system,s_with_humididty,s_with_cam){
return (function (p1__40217_SHARP_){
return cljs.core.reset_BANG_.call(null,huginn.core.system_atom,p1__40217_SHARP_);
});})(system,s_with_humididty,s_with_cam))
);
});

huginn.core.main.cljs$lang$maxFixedArity = (0);

huginn.core.main.cljs$lang$applyTo = (function (seq40218){
return huginn.core.main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40218));
});


//# sourceMappingURL=core.js.map
