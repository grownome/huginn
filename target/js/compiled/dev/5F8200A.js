goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48838__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__48838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48839__i = 0, G__48839__a = new Array(arguments.length -  0);
while (G__48839__i < G__48839__a.length) {G__48839__a[G__48839__i] = arguments[G__48839__i + 0]; ++G__48839__i;}
  args = new cljs.core.IndexedSeq(G__48839__a,0,null);
} 
return G__48838__delegate.call(this,args);};
G__48838.cljs$lang$maxFixedArity = 0;
G__48838.cljs$lang$applyTo = (function (arglist__48840){
var args = cljs.core.seq(arglist__48840);
return G__48838__delegate(args);
});
G__48838.cljs$core$IFn$_invoke$arity$variadic = G__48838__delegate;
return G__48838;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__48841__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__48841 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48842__i = 0, G__48842__a = new Array(arguments.length -  0);
while (G__48842__i < G__48842__a.length) {G__48842__a[G__48842__i] = arguments[G__48842__i + 0]; ++G__48842__i;}
  args = new cljs.core.IndexedSeq(G__48842__a,0,null);
} 
return G__48841__delegate.call(this,args);};
G__48841.cljs$lang$maxFixedArity = 0;
G__48841.cljs$lang$applyTo = (function (arglist__48843){
var args = cljs.core.seq(arglist__48843);
return G__48841__delegate(args);
});
G__48841.cljs$core$IFn$_invoke$arity$variadic = G__48841__delegate;
return G__48841;
})()
;

return null;
});
