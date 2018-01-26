goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37730__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37731__i = 0, G__37731__a = new Array(arguments.length -  0);
while (G__37731__i < G__37731__a.length) {G__37731__a[G__37731__i] = arguments[G__37731__i + 0]; ++G__37731__i;}
  args = new cljs.core.IndexedSeq(G__37731__a,0,null);
} 
return G__37730__delegate.call(this,args);};
G__37730.cljs$lang$maxFixedArity = 0;
G__37730.cljs$lang$applyTo = (function (arglist__37732){
var args = cljs.core.seq(arglist__37732);
return G__37730__delegate(args);
});
G__37730.cljs$core$IFn$_invoke$arity$variadic = G__37730__delegate;
return G__37730;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37733__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37733 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37734__i = 0, G__37734__a = new Array(arguments.length -  0);
while (G__37734__i < G__37734__a.length) {G__37734__a[G__37734__i] = arguments[G__37734__i + 0]; ++G__37734__i;}
  args = new cljs.core.IndexedSeq(G__37734__a,0,null);
} 
return G__37733__delegate.call(this,args);};
G__37733.cljs$lang$maxFixedArity = 0;
G__37733.cljs$lang$applyTo = (function (arglist__37735){
var args = cljs.core.seq(arglist__37735);
return G__37733__delegate(args);
});
G__37733.cljs$core$IFn$_invoke$arity$variadic = G__37733__delegate;
return G__37733;
})()
;

return null;
});
