goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46379__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46379 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46380__i = 0, G__46380__a = new Array(arguments.length -  0);
while (G__46380__i < G__46380__a.length) {G__46380__a[G__46380__i] = arguments[G__46380__i + 0]; ++G__46380__i;}
  args = new cljs.core.IndexedSeq(G__46380__a,0,null);
} 
return G__46379__delegate.call(this,args);};
G__46379.cljs$lang$maxFixedArity = 0;
G__46379.cljs$lang$applyTo = (function (arglist__46381){
var args = cljs.core.seq(arglist__46381);
return G__46379__delegate(args);
});
G__46379.cljs$core$IFn$_invoke$arity$variadic = G__46379__delegate;
return G__46379;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46382__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46383__i = 0, G__46383__a = new Array(arguments.length -  0);
while (G__46383__i < G__46383__a.length) {G__46383__a[G__46383__i] = arguments[G__46383__i + 0]; ++G__46383__i;}
  args = new cljs.core.IndexedSeq(G__46383__a,0,null);
} 
return G__46382__delegate.call(this,args);};
G__46382.cljs$lang$maxFixedArity = 0;
G__46382.cljs$lang$applyTo = (function (arglist__46384){
var args = cljs.core.seq(arglist__46384);
return G__46382__delegate(args);
});
G__46382.cljs$core$IFn$_invoke$arity$variadic = G__46382__delegate;
return G__46382;
})()
;

return null;
});
