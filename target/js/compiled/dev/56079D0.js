goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47301__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47301 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47302__i = 0, G__47302__a = new Array(arguments.length -  0);
while (G__47302__i < G__47302__a.length) {G__47302__a[G__47302__i] = arguments[G__47302__i + 0]; ++G__47302__i;}
  args = new cljs.core.IndexedSeq(G__47302__a,0,null);
} 
return G__47301__delegate.call(this,args);};
G__47301.cljs$lang$maxFixedArity = 0;
G__47301.cljs$lang$applyTo = (function (arglist__47303){
var args = cljs.core.seq(arglist__47303);
return G__47301__delegate(args);
});
G__47301.cljs$core$IFn$_invoke$arity$variadic = G__47301__delegate;
return G__47301;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__47304__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__47304 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47305__i = 0, G__47305__a = new Array(arguments.length -  0);
while (G__47305__i < G__47305__a.length) {G__47305__a[G__47305__i] = arguments[G__47305__i + 0]; ++G__47305__i;}
  args = new cljs.core.IndexedSeq(G__47305__a,0,null);
} 
return G__47304__delegate.call(this,args);};
G__47304.cljs$lang$maxFixedArity = 0;
G__47304.cljs$lang$applyTo = (function (arglist__47306){
var args = cljs.core.seq(arglist__47306);
return G__47304__delegate(args);
});
G__47304.cljs$core$IFn$_invoke$arity$variadic = G__47304__delegate;
return G__47304;
})()
;

return null;
});
