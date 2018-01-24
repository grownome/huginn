goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37483__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37483 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37484__i = 0, G__37484__a = new Array(arguments.length -  0);
while (G__37484__i < G__37484__a.length) {G__37484__a[G__37484__i] = arguments[G__37484__i + 0]; ++G__37484__i;}
  args = new cljs.core.IndexedSeq(G__37484__a,0,null);
} 
return G__37483__delegate.call(this,args);};
G__37483.cljs$lang$maxFixedArity = 0;
G__37483.cljs$lang$applyTo = (function (arglist__37485){
var args = cljs.core.seq(arglist__37485);
return G__37483__delegate(args);
});
G__37483.cljs$core$IFn$_invoke$arity$variadic = G__37483__delegate;
return G__37483;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37486__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37486 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37487__i = 0, G__37487__a = new Array(arguments.length -  0);
while (G__37487__i < G__37487__a.length) {G__37487__a[G__37487__i] = arguments[G__37487__i + 0]; ++G__37487__i;}
  args = new cljs.core.IndexedSeq(G__37487__a,0,null);
} 
return G__37486__delegate.call(this,args);};
G__37486.cljs$lang$maxFixedArity = 0;
G__37486.cljs$lang$applyTo = (function (arglist__37488){
var args = cljs.core.seq(arglist__37488);
return G__37486__delegate(args);
});
G__37486.cljs$core$IFn$_invoke$arity$variadic = G__37486__delegate;
return G__37486;
})()
;

return null;
});
