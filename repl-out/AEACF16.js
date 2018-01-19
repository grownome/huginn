goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67795__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67795 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67796__i = 0, G__67796__a = new Array(arguments.length -  0);
while (G__67796__i < G__67796__a.length) {G__67796__a[G__67796__i] = arguments[G__67796__i + 0]; ++G__67796__i;}
  args = new cljs.core.IndexedSeq(G__67796__a,0,null);
} 
return G__67795__delegate.call(this,args);};
G__67795.cljs$lang$maxFixedArity = 0;
G__67795.cljs$lang$applyTo = (function (arglist__67797){
var args = cljs.core.seq(arglist__67797);
return G__67795__delegate(args);
});
G__67795.cljs$core$IFn$_invoke$arity$variadic = G__67795__delegate;
return G__67795;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67798__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67798 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67799__i = 0, G__67799__a = new Array(arguments.length -  0);
while (G__67799__i < G__67799__a.length) {G__67799__a[G__67799__i] = arguments[G__67799__i + 0]; ++G__67799__i;}
  args = new cljs.core.IndexedSeq(G__67799__a,0,null);
} 
return G__67798__delegate.call(this,args);};
G__67798.cljs$lang$maxFixedArity = 0;
G__67798.cljs$lang$applyTo = (function (arglist__67800){
var args = cljs.core.seq(arglist__67800);
return G__67798__delegate(args);
});
G__67798.cljs$core$IFn$_invoke$arity$variadic = G__67798__delegate;
return G__67798;
})()
;

return null;
});
