goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67762__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67763__i = 0, G__67763__a = new Array(arguments.length -  0);
while (G__67763__i < G__67763__a.length) {G__67763__a[G__67763__i] = arguments[G__67763__i + 0]; ++G__67763__i;}
  args = new cljs.core.IndexedSeq(G__67763__a,0,null);
} 
return G__67762__delegate.call(this,args);};
G__67762.cljs$lang$maxFixedArity = 0;
G__67762.cljs$lang$applyTo = (function (arglist__67764){
var args = cljs.core.seq(arglist__67764);
return G__67762__delegate(args);
});
G__67762.cljs$core$IFn$_invoke$arity$variadic = G__67762__delegate;
return G__67762;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67765__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67766__i = 0, G__67766__a = new Array(arguments.length -  0);
while (G__67766__i < G__67766__a.length) {G__67766__a[G__67766__i] = arguments[G__67766__i + 0]; ++G__67766__i;}
  args = new cljs.core.IndexedSeq(G__67766__a,0,null);
} 
return G__67765__delegate.call(this,args);};
G__67765.cljs$lang$maxFixedArity = 0;
G__67765.cljs$lang$applyTo = (function (arglist__67767){
var args = cljs.core.seq(arglist__67767);
return G__67765__delegate(args);
});
G__67765.cljs$core$IFn$_invoke$arity$variadic = G__67765__delegate;
return G__67765;
})()
;

return null;
});
