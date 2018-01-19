goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67749__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67749 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67750__i = 0, G__67750__a = new Array(arguments.length -  0);
while (G__67750__i < G__67750__a.length) {G__67750__a[G__67750__i] = arguments[G__67750__i + 0]; ++G__67750__i;}
  args = new cljs.core.IndexedSeq(G__67750__a,0,null);
} 
return G__67749__delegate.call(this,args);};
G__67749.cljs$lang$maxFixedArity = 0;
G__67749.cljs$lang$applyTo = (function (arglist__67751){
var args = cljs.core.seq(arglist__67751);
return G__67749__delegate(args);
});
G__67749.cljs$core$IFn$_invoke$arity$variadic = G__67749__delegate;
return G__67749;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67752__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67753__i = 0, G__67753__a = new Array(arguments.length -  0);
while (G__67753__i < G__67753__a.length) {G__67753__a[G__67753__i] = arguments[G__67753__i + 0]; ++G__67753__i;}
  args = new cljs.core.IndexedSeq(G__67753__a,0,null);
} 
return G__67752__delegate.call(this,args);};
G__67752.cljs$lang$maxFixedArity = 0;
G__67752.cljs$lang$applyTo = (function (arglist__67754){
var args = cljs.core.seq(arglist__67754);
return G__67752__delegate(args);
});
G__67752.cljs$core$IFn$_invoke$arity$variadic = G__67752__delegate;
return G__67752;
})()
;

return null;
});
