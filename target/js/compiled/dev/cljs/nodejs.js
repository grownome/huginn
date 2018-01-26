// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37030__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37030 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37031__i = 0, G__37031__a = new Array(arguments.length -  0);
while (G__37031__i < G__37031__a.length) {G__37031__a[G__37031__i] = arguments[G__37031__i + 0]; ++G__37031__i;}
  args = new cljs.core.IndexedSeq(G__37031__a,0,null);
} 
return G__37030__delegate.call(this,args);};
G__37030.cljs$lang$maxFixedArity = 0;
G__37030.cljs$lang$applyTo = (function (arglist__37032){
var args = cljs.core.seq(arglist__37032);
return G__37030__delegate(args);
});
G__37030.cljs$core$IFn$_invoke$arity$variadic = G__37030__delegate;
return G__37030;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37033__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37033 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37034__i = 0, G__37034__a = new Array(arguments.length -  0);
while (G__37034__i < G__37034__a.length) {G__37034__a[G__37034__i] = arguments[G__37034__i + 0]; ++G__37034__i;}
  args = new cljs.core.IndexedSeq(G__37034__a,0,null);
} 
return G__37033__delegate.call(this,args);};
G__37033.cljs$lang$maxFixedArity = 0;
G__37033.cljs$lang$applyTo = (function (arglist__37035){
var args = cljs.core.seq(arglist__37035);
return G__37033__delegate(args);
});
G__37033.cljs$core$IFn$_invoke$arity$variadic = G__37033__delegate;
return G__37033;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map
