goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67423__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67424__i = 0, G__67424__a = new Array(arguments.length -  0);
while (G__67424__i < G__67424__a.length) {G__67424__a[G__67424__i] = arguments[G__67424__i + 0]; ++G__67424__i;}
  args = new cljs.core.IndexedSeq(G__67424__a,0,null);
} 
return G__67423__delegate.call(this,args);};
G__67423.cljs$lang$maxFixedArity = 0;
G__67423.cljs$lang$applyTo = (function (arglist__67425){
var args = cljs.core.seq(arglist__67425);
return G__67423__delegate(args);
});
G__67423.cljs$core$IFn$_invoke$arity$variadic = G__67423__delegate;
return G__67423;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67426__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67427__i = 0, G__67427__a = new Array(arguments.length -  0);
while (G__67427__i < G__67427__a.length) {G__67427__a[G__67427__i] = arguments[G__67427__i + 0]; ++G__67427__i;}
  args = new cljs.core.IndexedSeq(G__67427__a,0,null);
} 
return G__67426__delegate.call(this,args);};
G__67426.cljs$lang$maxFixedArity = 0;
G__67426.cljs$lang$applyTo = (function (arglist__67428){
var args = cljs.core.seq(arglist__67428);
return G__67426__delegate(args);
});
G__67426.cljs$core$IFn$_invoke$arity$variadic = G__67426__delegate;
return G__67426;
})()
;

return null;
});
