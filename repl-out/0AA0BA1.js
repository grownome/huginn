goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63828__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63829__i = 0, G__63829__a = new Array(arguments.length -  0);
while (G__63829__i < G__63829__a.length) {G__63829__a[G__63829__i] = arguments[G__63829__i + 0]; ++G__63829__i;}
  args = new cljs.core.IndexedSeq(G__63829__a,0,null);
} 
return G__63828__delegate.call(this,args);};
G__63828.cljs$lang$maxFixedArity = 0;
G__63828.cljs$lang$applyTo = (function (arglist__63830){
var args = cljs.core.seq(arglist__63830);
return G__63828__delegate(args);
});
G__63828.cljs$core$IFn$_invoke$arity$variadic = G__63828__delegate;
return G__63828;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63831__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63832__i = 0, G__63832__a = new Array(arguments.length -  0);
while (G__63832__i < G__63832__a.length) {G__63832__a[G__63832__i] = arguments[G__63832__i + 0]; ++G__63832__i;}
  args = new cljs.core.IndexedSeq(G__63832__a,0,null);
} 
return G__63831__delegate.call(this,args);};
G__63831.cljs$lang$maxFixedArity = 0;
G__63831.cljs$lang$applyTo = (function (arglist__63833){
var args = cljs.core.seq(arglist__63833);
return G__63831__delegate(args);
});
G__63831.cljs$core$IFn$_invoke$arity$variadic = G__63831__delegate;
return G__63831;
})()
;

return null;
});
