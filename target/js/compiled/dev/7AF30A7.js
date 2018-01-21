goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45021__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45022__i = 0, G__45022__a = new Array(arguments.length -  0);
while (G__45022__i < G__45022__a.length) {G__45022__a[G__45022__i] = arguments[G__45022__i + 0]; ++G__45022__i;}
  args = new cljs.core.IndexedSeq(G__45022__a,0,null);
} 
return G__45021__delegate.call(this,args);};
G__45021.cljs$lang$maxFixedArity = 0;
G__45021.cljs$lang$applyTo = (function (arglist__45023){
var args = cljs.core.seq(arglist__45023);
return G__45021__delegate(args);
});
G__45021.cljs$core$IFn$_invoke$arity$variadic = G__45021__delegate;
return G__45021;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45024__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45025__i = 0, G__45025__a = new Array(arguments.length -  0);
while (G__45025__i < G__45025__a.length) {G__45025__a[G__45025__i] = arguments[G__45025__i + 0]; ++G__45025__i;}
  args = new cljs.core.IndexedSeq(G__45025__a,0,null);
} 
return G__45024__delegate.call(this,args);};
G__45024.cljs$lang$maxFixedArity = 0;
G__45024.cljs$lang$applyTo = (function (arglist__45026){
var args = cljs.core.seq(arglist__45026);
return G__45024__delegate(args);
});
G__45024.cljs$core$IFn$_invoke$arity$variadic = G__45024__delegate;
return G__45024;
})()
;

return null;
});
