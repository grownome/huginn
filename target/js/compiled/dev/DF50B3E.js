goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44775__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44775 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44776__i = 0, G__44776__a = new Array(arguments.length -  0);
while (G__44776__i < G__44776__a.length) {G__44776__a[G__44776__i] = arguments[G__44776__i + 0]; ++G__44776__i;}
  args = new cljs.core.IndexedSeq(G__44776__a,0,null);
} 
return G__44775__delegate.call(this,args);};
G__44775.cljs$lang$maxFixedArity = 0;
G__44775.cljs$lang$applyTo = (function (arglist__44777){
var args = cljs.core.seq(arglist__44777);
return G__44775__delegate(args);
});
G__44775.cljs$core$IFn$_invoke$arity$variadic = G__44775__delegate;
return G__44775;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44778__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44778 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44779__i = 0, G__44779__a = new Array(arguments.length -  0);
while (G__44779__i < G__44779__a.length) {G__44779__a[G__44779__i] = arguments[G__44779__i + 0]; ++G__44779__i;}
  args = new cljs.core.IndexedSeq(G__44779__a,0,null);
} 
return G__44778__delegate.call(this,args);};
G__44778.cljs$lang$maxFixedArity = 0;
G__44778.cljs$lang$applyTo = (function (arglist__44780){
var args = cljs.core.seq(arglist__44780);
return G__44778__delegate(args);
});
G__44778.cljs$core$IFn$_invoke$arity$variadic = G__44778__delegate;
return G__44778;
})()
;

return null;
});
