goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67909__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67909 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67910__i = 0, G__67910__a = new Array(arguments.length -  0);
while (G__67910__i < G__67910__a.length) {G__67910__a[G__67910__i] = arguments[G__67910__i + 0]; ++G__67910__i;}
  args = new cljs.core.IndexedSeq(G__67910__a,0,null);
} 
return G__67909__delegate.call(this,args);};
G__67909.cljs$lang$maxFixedArity = 0;
G__67909.cljs$lang$applyTo = (function (arglist__67911){
var args = cljs.core.seq(arglist__67911);
return G__67909__delegate(args);
});
G__67909.cljs$core$IFn$_invoke$arity$variadic = G__67909__delegate;
return G__67909;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67912__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67912 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67913__i = 0, G__67913__a = new Array(arguments.length -  0);
while (G__67913__i < G__67913__a.length) {G__67913__a[G__67913__i] = arguments[G__67913__i + 0]; ++G__67913__i;}
  args = new cljs.core.IndexedSeq(G__67913__a,0,null);
} 
return G__67912__delegate.call(this,args);};
G__67912.cljs$lang$maxFixedArity = 0;
G__67912.cljs$lang$applyTo = (function (arglist__67914){
var args = cljs.core.seq(arglist__67914);
return G__67912__delegate(args);
});
G__67912.cljs$core$IFn$_invoke$arity$variadic = G__67912__delegate;
return G__67912;
})()
;

return null;
});
