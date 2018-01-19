goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67401__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67402__i = 0, G__67402__a = new Array(arguments.length -  0);
while (G__67402__i < G__67402__a.length) {G__67402__a[G__67402__i] = arguments[G__67402__i + 0]; ++G__67402__i;}
  args = new cljs.core.IndexedSeq(G__67402__a,0,null);
} 
return G__67401__delegate.call(this,args);};
G__67401.cljs$lang$maxFixedArity = 0;
G__67401.cljs$lang$applyTo = (function (arglist__67403){
var args = cljs.core.seq(arglist__67403);
return G__67401__delegate(args);
});
G__67401.cljs$core$IFn$_invoke$arity$variadic = G__67401__delegate;
return G__67401;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67404__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67405__i = 0, G__67405__a = new Array(arguments.length -  0);
while (G__67405__i < G__67405__a.length) {G__67405__a[G__67405__i] = arguments[G__67405__i + 0]; ++G__67405__i;}
  args = new cljs.core.IndexedSeq(G__67405__a,0,null);
} 
return G__67404__delegate.call(this,args);};
G__67404.cljs$lang$maxFixedArity = 0;
G__67404.cljs$lang$applyTo = (function (arglist__67406){
var args = cljs.core.seq(arglist__67406);
return G__67404__delegate(args);
});
G__67404.cljs$core$IFn$_invoke$arity$variadic = G__67404__delegate;
return G__67404;
})()
;

return null;
});
