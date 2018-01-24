goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46815__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46816__i = 0, G__46816__a = new Array(arguments.length -  0);
while (G__46816__i < G__46816__a.length) {G__46816__a[G__46816__i] = arguments[G__46816__i + 0]; ++G__46816__i;}
  args = new cljs.core.IndexedSeq(G__46816__a,0,null);
} 
return G__46815__delegate.call(this,args);};
G__46815.cljs$lang$maxFixedArity = 0;
G__46815.cljs$lang$applyTo = (function (arglist__46817){
var args = cljs.core.seq(arglist__46817);
return G__46815__delegate(args);
});
G__46815.cljs$core$IFn$_invoke$arity$variadic = G__46815__delegate;
return G__46815;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46818__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46819__i = 0, G__46819__a = new Array(arguments.length -  0);
while (G__46819__i < G__46819__a.length) {G__46819__a[G__46819__i] = arguments[G__46819__i + 0]; ++G__46819__i;}
  args = new cljs.core.IndexedSeq(G__46819__a,0,null);
} 
return G__46818__delegate.call(this,args);};
G__46818.cljs$lang$maxFixedArity = 0;
G__46818.cljs$lang$applyTo = (function (arglist__46820){
var args = cljs.core.seq(arglist__46820);
return G__46818__delegate(args);
});
G__46818.cljs$core$IFn$_invoke$arity$variadic = G__46818__delegate;
return G__46818;
})()
;

return null;
});
