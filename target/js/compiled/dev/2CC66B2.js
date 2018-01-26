goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38598__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38598 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38599__i = 0, G__38599__a = new Array(arguments.length -  0);
while (G__38599__i < G__38599__a.length) {G__38599__a[G__38599__i] = arguments[G__38599__i + 0]; ++G__38599__i;}
  args = new cljs.core.IndexedSeq(G__38599__a,0,null);
} 
return G__38598__delegate.call(this,args);};
G__38598.cljs$lang$maxFixedArity = 0;
G__38598.cljs$lang$applyTo = (function (arglist__38600){
var args = cljs.core.seq(arglist__38600);
return G__38598__delegate(args);
});
G__38598.cljs$core$IFn$_invoke$arity$variadic = G__38598__delegate;
return G__38598;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38601__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38602__i = 0, G__38602__a = new Array(arguments.length -  0);
while (G__38602__i < G__38602__a.length) {G__38602__a[G__38602__i] = arguments[G__38602__i + 0]; ++G__38602__i;}
  args = new cljs.core.IndexedSeq(G__38602__a,0,null);
} 
return G__38601__delegate.call(this,args);};
G__38601.cljs$lang$maxFixedArity = 0;
G__38601.cljs$lang$applyTo = (function (arglist__38603){
var args = cljs.core.seq(arglist__38603);
return G__38601__delegate(args);
});
G__38601.cljs$core$IFn$_invoke$arity$variadic = G__38601__delegate;
return G__38601;
})()
;

return null;
});
