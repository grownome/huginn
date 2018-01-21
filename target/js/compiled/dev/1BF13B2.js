goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47530__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47530 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47531__i = 0, G__47531__a = new Array(arguments.length -  0);
while (G__47531__i < G__47531__a.length) {G__47531__a[G__47531__i] = arguments[G__47531__i + 0]; ++G__47531__i;}
  args = new cljs.core.IndexedSeq(G__47531__a,0,null);
} 
return G__47530__delegate.call(this,args);};
G__47530.cljs$lang$maxFixedArity = 0;
G__47530.cljs$lang$applyTo = (function (arglist__47532){
var args = cljs.core.seq(arglist__47532);
return G__47530__delegate(args);
});
G__47530.cljs$core$IFn$_invoke$arity$variadic = G__47530__delegate;
return G__47530;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__47533__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__47533 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47534__i = 0, G__47534__a = new Array(arguments.length -  0);
while (G__47534__i < G__47534__a.length) {G__47534__a[G__47534__i] = arguments[G__47534__i + 0]; ++G__47534__i;}
  args = new cljs.core.IndexedSeq(G__47534__a,0,null);
} 
return G__47533__delegate.call(this,args);};
G__47533.cljs$lang$maxFixedArity = 0;
G__47533.cljs$lang$applyTo = (function (arglist__47535){
var args = cljs.core.seq(arglist__47535);
return G__47533__delegate(args);
});
G__47533.cljs$core$IFn$_invoke$arity$variadic = G__47533__delegate;
return G__47533;
})()
;

return null;
});
