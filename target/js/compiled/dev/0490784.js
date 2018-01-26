goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37499__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37499 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37500__i = 0, G__37500__a = new Array(arguments.length -  0);
while (G__37500__i < G__37500__a.length) {G__37500__a[G__37500__i] = arguments[G__37500__i + 0]; ++G__37500__i;}
  args = new cljs.core.IndexedSeq(G__37500__a,0,null);
} 
return G__37499__delegate.call(this,args);};
G__37499.cljs$lang$maxFixedArity = 0;
G__37499.cljs$lang$applyTo = (function (arglist__37501){
var args = cljs.core.seq(arglist__37501);
return G__37499__delegate(args);
});
G__37499.cljs$core$IFn$_invoke$arity$variadic = G__37499__delegate;
return G__37499;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37502__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37503__i = 0, G__37503__a = new Array(arguments.length -  0);
while (G__37503__i < G__37503__a.length) {G__37503__a[G__37503__i] = arguments[G__37503__i + 0]; ++G__37503__i;}
  args = new cljs.core.IndexedSeq(G__37503__a,0,null);
} 
return G__37502__delegate.call(this,args);};
G__37502.cljs$lang$maxFixedArity = 0;
G__37502.cljs$lang$applyTo = (function (arglist__37504){
var args = cljs.core.seq(arglist__37504);
return G__37502__delegate(args);
});
G__37502.cljs$core$IFn$_invoke$arity$variadic = G__37502__delegate;
return G__37502;
})()
;

return null;
});
