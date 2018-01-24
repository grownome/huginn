goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48402__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__48402 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48403__i = 0, G__48403__a = new Array(arguments.length -  0);
while (G__48403__i < G__48403__a.length) {G__48403__a[G__48403__i] = arguments[G__48403__i + 0]; ++G__48403__i;}
  args = new cljs.core.IndexedSeq(G__48403__a,0,null);
} 
return G__48402__delegate.call(this,args);};
G__48402.cljs$lang$maxFixedArity = 0;
G__48402.cljs$lang$applyTo = (function (arglist__48404){
var args = cljs.core.seq(arglist__48404);
return G__48402__delegate(args);
});
G__48402.cljs$core$IFn$_invoke$arity$variadic = G__48402__delegate;
return G__48402;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__48405__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__48405 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48406__i = 0, G__48406__a = new Array(arguments.length -  0);
while (G__48406__i < G__48406__a.length) {G__48406__a[G__48406__i] = arguments[G__48406__i + 0]; ++G__48406__i;}
  args = new cljs.core.IndexedSeq(G__48406__a,0,null);
} 
return G__48405__delegate.call(this,args);};
G__48405.cljs$lang$maxFixedArity = 0;
G__48405.cljs$lang$applyTo = (function (arglist__48407){
var args = cljs.core.seq(arglist__48407);
return G__48405__delegate(args);
});
G__48405.cljs$core$IFn$_invoke$arity$variadic = G__48405__delegate;
return G__48405;
})()
;

return null;
});
