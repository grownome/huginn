goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__68162__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__68162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68163__i = 0, G__68163__a = new Array(arguments.length -  0);
while (G__68163__i < G__68163__a.length) {G__68163__a[G__68163__i] = arguments[G__68163__i + 0]; ++G__68163__i;}
  args = new cljs.core.IndexedSeq(G__68163__a,0,null);
} 
return G__68162__delegate.call(this,args);};
G__68162.cljs$lang$maxFixedArity = 0;
G__68162.cljs$lang$applyTo = (function (arglist__68164){
var args = cljs.core.seq(arglist__68164);
return G__68162__delegate(args);
});
G__68162.cljs$core$IFn$_invoke$arity$variadic = G__68162__delegate;
return G__68162;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__68165__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__68165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68166__i = 0, G__68166__a = new Array(arguments.length -  0);
while (G__68166__i < G__68166__a.length) {G__68166__a[G__68166__i] = arguments[G__68166__i + 0]; ++G__68166__i;}
  args = new cljs.core.IndexedSeq(G__68166__a,0,null);
} 
return G__68165__delegate.call(this,args);};
G__68165.cljs$lang$maxFixedArity = 0;
G__68165.cljs$lang$applyTo = (function (arglist__68167){
var args = cljs.core.seq(arglist__68167);
return G__68165__delegate(args);
});
G__68165.cljs$core$IFn$_invoke$arity$variadic = G__68165__delegate;
return G__68165;
})()
;

return null;
});
