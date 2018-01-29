goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37237__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37237 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37238__i = 0, G__37238__a = new Array(arguments.length -  0);
while (G__37238__i < G__37238__a.length) {G__37238__a[G__37238__i] = arguments[G__37238__i + 0]; ++G__37238__i;}
  args = new cljs.core.IndexedSeq(G__37238__a,0,null);
} 
return G__37237__delegate.call(this,args);};
G__37237.cljs$lang$maxFixedArity = 0;
G__37237.cljs$lang$applyTo = (function (arglist__37239){
var args = cljs.core.seq(arglist__37239);
return G__37237__delegate(args);
});
G__37237.cljs$core$IFn$_invoke$arity$variadic = G__37237__delegate;
return G__37237;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37240__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37240 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37241__i = 0, G__37241__a = new Array(arguments.length -  0);
while (G__37241__i < G__37241__a.length) {G__37241__a[G__37241__i] = arguments[G__37241__i + 0]; ++G__37241__i;}
  args = new cljs.core.IndexedSeq(G__37241__a,0,null);
} 
return G__37240__delegate.call(this,args);};
G__37240.cljs$lang$maxFixedArity = 0;
G__37240.cljs$lang$applyTo = (function (arglist__37242){
var args = cljs.core.seq(arglist__37242);
return G__37240__delegate(args);
});
G__37240.cljs$core$IFn$_invoke$arity$variadic = G__37240__delegate;
return G__37240;
})()
;

return null;
});
