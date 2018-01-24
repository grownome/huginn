goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44764__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44764 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44765__i = 0, G__44765__a = new Array(arguments.length -  0);
while (G__44765__i < G__44765__a.length) {G__44765__a[G__44765__i] = arguments[G__44765__i + 0]; ++G__44765__i;}
  args = new cljs.core.IndexedSeq(G__44765__a,0,null);
} 
return G__44764__delegate.call(this,args);};
G__44764.cljs$lang$maxFixedArity = 0;
G__44764.cljs$lang$applyTo = (function (arglist__44766){
var args = cljs.core.seq(arglist__44766);
return G__44764__delegate(args);
});
G__44764.cljs$core$IFn$_invoke$arity$variadic = G__44764__delegate;
return G__44764;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44767__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44768__i = 0, G__44768__a = new Array(arguments.length -  0);
while (G__44768__i < G__44768__a.length) {G__44768__a[G__44768__i] = arguments[G__44768__i + 0]; ++G__44768__i;}
  args = new cljs.core.IndexedSeq(G__44768__a,0,null);
} 
return G__44767__delegate.call(this,args);};
G__44767.cljs$lang$maxFixedArity = 0;
G__44767.cljs$lang$applyTo = (function (arglist__44769){
var args = cljs.core.seq(arglist__44769);
return G__44767__delegate(args);
});
G__44767.cljs$core$IFn$_invoke$arity$variadic = G__44767__delegate;
return G__44767;
})()
;

return null;
});
