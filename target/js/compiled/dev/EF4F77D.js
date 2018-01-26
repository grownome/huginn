goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38681__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38681 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38682__i = 0, G__38682__a = new Array(arguments.length -  0);
while (G__38682__i < G__38682__a.length) {G__38682__a[G__38682__i] = arguments[G__38682__i + 0]; ++G__38682__i;}
  args = new cljs.core.IndexedSeq(G__38682__a,0,null);
} 
return G__38681__delegate.call(this,args);};
G__38681.cljs$lang$maxFixedArity = 0;
G__38681.cljs$lang$applyTo = (function (arglist__38683){
var args = cljs.core.seq(arglist__38683);
return G__38681__delegate(args);
});
G__38681.cljs$core$IFn$_invoke$arity$variadic = G__38681__delegate;
return G__38681;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38684__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38684 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38685__i = 0, G__38685__a = new Array(arguments.length -  0);
while (G__38685__i < G__38685__a.length) {G__38685__a[G__38685__i] = arguments[G__38685__i + 0]; ++G__38685__i;}
  args = new cljs.core.IndexedSeq(G__38685__a,0,null);
} 
return G__38684__delegate.call(this,args);};
G__38684.cljs$lang$maxFixedArity = 0;
G__38684.cljs$lang$applyTo = (function (arglist__38686){
var args = cljs.core.seq(arglist__38686);
return G__38684__delegate(args);
});
G__38684.cljs$core$IFn$_invoke$arity$variadic = G__38684__delegate;
return G__38684;
})()
;

return null;
});
