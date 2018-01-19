goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67880__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67881__i = 0, G__67881__a = new Array(arguments.length -  0);
while (G__67881__i < G__67881__a.length) {G__67881__a[G__67881__i] = arguments[G__67881__i + 0]; ++G__67881__i;}
  args = new cljs.core.IndexedSeq(G__67881__a,0,null);
} 
return G__67880__delegate.call(this,args);};
G__67880.cljs$lang$maxFixedArity = 0;
G__67880.cljs$lang$applyTo = (function (arglist__67882){
var args = cljs.core.seq(arglist__67882);
return G__67880__delegate(args);
});
G__67880.cljs$core$IFn$_invoke$arity$variadic = G__67880__delegate;
return G__67880;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67883__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67884__i = 0, G__67884__a = new Array(arguments.length -  0);
while (G__67884__i < G__67884__a.length) {G__67884__a[G__67884__i] = arguments[G__67884__i + 0]; ++G__67884__i;}
  args = new cljs.core.IndexedSeq(G__67884__a,0,null);
} 
return G__67883__delegate.call(this,args);};
G__67883.cljs$lang$maxFixedArity = 0;
G__67883.cljs$lang$applyTo = (function (arglist__67885){
var args = cljs.core.seq(arglist__67885);
return G__67883__delegate(args);
});
G__67883.cljs$core$IFn$_invoke$arity$variadic = G__67883__delegate;
return G__67883;
})()
;

return null;
});
