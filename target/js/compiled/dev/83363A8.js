goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37357__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37358__i = 0, G__37358__a = new Array(arguments.length -  0);
while (G__37358__i < G__37358__a.length) {G__37358__a[G__37358__i] = arguments[G__37358__i + 0]; ++G__37358__i;}
  args = new cljs.core.IndexedSeq(G__37358__a,0,null);
} 
return G__37357__delegate.call(this,args);};
G__37357.cljs$lang$maxFixedArity = 0;
G__37357.cljs$lang$applyTo = (function (arglist__37359){
var args = cljs.core.seq(arglist__37359);
return G__37357__delegate(args);
});
G__37357.cljs$core$IFn$_invoke$arity$variadic = G__37357__delegate;
return G__37357;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37360__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37361__i = 0, G__37361__a = new Array(arguments.length -  0);
while (G__37361__i < G__37361__a.length) {G__37361__a[G__37361__i] = arguments[G__37361__i + 0]; ++G__37361__i;}
  args = new cljs.core.IndexedSeq(G__37361__a,0,null);
} 
return G__37360__delegate.call(this,args);};
G__37360.cljs$lang$maxFixedArity = 0;
G__37360.cljs$lang$applyTo = (function (arglist__37362){
var args = cljs.core.seq(arglist__37362);
return G__37360__delegate(args);
});
G__37360.cljs$core$IFn$_invoke$arity$variadic = G__37360__delegate;
return G__37360;
})()
;

return null;
});
