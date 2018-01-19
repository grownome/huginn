goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63839__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63839 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63840__i = 0, G__63840__a = new Array(arguments.length -  0);
while (G__63840__i < G__63840__a.length) {G__63840__a[G__63840__i] = arguments[G__63840__i + 0]; ++G__63840__i;}
  args = new cljs.core.IndexedSeq(G__63840__a,0,null);
} 
return G__63839__delegate.call(this,args);};
G__63839.cljs$lang$maxFixedArity = 0;
G__63839.cljs$lang$applyTo = (function (arglist__63841){
var args = cljs.core.seq(arglist__63841);
return G__63839__delegate(args);
});
G__63839.cljs$core$IFn$_invoke$arity$variadic = G__63839__delegate;
return G__63839;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63842__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63842 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63843__i = 0, G__63843__a = new Array(arguments.length -  0);
while (G__63843__i < G__63843__a.length) {G__63843__a[G__63843__i] = arguments[G__63843__i + 0]; ++G__63843__i;}
  args = new cljs.core.IndexedSeq(G__63843__a,0,null);
} 
return G__63842__delegate.call(this,args);};
G__63842.cljs$lang$maxFixedArity = 0;
G__63842.cljs$lang$applyTo = (function (arglist__63844){
var args = cljs.core.seq(arglist__63844);
return G__63842__delegate(args);
});
G__63842.cljs$core$IFn$_invoke$arity$variadic = G__63842__delegate;
return G__63842;
})()
;

return null;
});
