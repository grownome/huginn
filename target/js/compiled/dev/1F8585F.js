goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37338__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37338 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37339__i = 0, G__37339__a = new Array(arguments.length -  0);
while (G__37339__i < G__37339__a.length) {G__37339__a[G__37339__i] = arguments[G__37339__i + 0]; ++G__37339__i;}
  args = new cljs.core.IndexedSeq(G__37339__a,0,null);
} 
return G__37338__delegate.call(this,args);};
G__37338.cljs$lang$maxFixedArity = 0;
G__37338.cljs$lang$applyTo = (function (arglist__37340){
var args = cljs.core.seq(arglist__37340);
return G__37338__delegate(args);
});
G__37338.cljs$core$IFn$_invoke$arity$variadic = G__37338__delegate;
return G__37338;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37341__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37341 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37342__i = 0, G__37342__a = new Array(arguments.length -  0);
while (G__37342__i < G__37342__a.length) {G__37342__a[G__37342__i] = arguments[G__37342__i + 0]; ++G__37342__i;}
  args = new cljs.core.IndexedSeq(G__37342__a,0,null);
} 
return G__37341__delegate.call(this,args);};
G__37341.cljs$lang$maxFixedArity = 0;
G__37341.cljs$lang$applyTo = (function (arglist__37343){
var args = cljs.core.seq(arglist__37343);
return G__37341__delegate(args);
});
G__37341.cljs$core$IFn$_invoke$arity$variadic = G__37341__delegate;
return G__37341;
})()
;

return null;
});
