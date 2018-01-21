goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__56343__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__56343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56344__i = 0, G__56344__a = new Array(arguments.length -  0);
while (G__56344__i < G__56344__a.length) {G__56344__a[G__56344__i] = arguments[G__56344__i + 0]; ++G__56344__i;}
  args = new cljs.core.IndexedSeq(G__56344__a,0,null);
} 
return G__56343__delegate.call(this,args);};
G__56343.cljs$lang$maxFixedArity = 0;
G__56343.cljs$lang$applyTo = (function (arglist__56345){
var args = cljs.core.seq(arglist__56345);
return G__56343__delegate(args);
});
G__56343.cljs$core$IFn$_invoke$arity$variadic = G__56343__delegate;
return G__56343;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__56346__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__56346 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56347__i = 0, G__56347__a = new Array(arguments.length -  0);
while (G__56347__i < G__56347__a.length) {G__56347__a[G__56347__i] = arguments[G__56347__i + 0]; ++G__56347__i;}
  args = new cljs.core.IndexedSeq(G__56347__a,0,null);
} 
return G__56346__delegate.call(this,args);};
G__56346.cljs$lang$maxFixedArity = 0;
G__56346.cljs$lang$applyTo = (function (arglist__56348){
var args = cljs.core.seq(arglist__56348);
return G__56346__delegate(args);
});
G__56346.cljs$core$IFn$_invoke$arity$variadic = G__56346__delegate;
return G__56346;
})()
;

return null;
});
