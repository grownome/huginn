goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45700__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45701__i = 0, G__45701__a = new Array(arguments.length -  0);
while (G__45701__i < G__45701__a.length) {G__45701__a[G__45701__i] = arguments[G__45701__i + 0]; ++G__45701__i;}
  args = new cljs.core.IndexedSeq(G__45701__a,0,null);
} 
return G__45700__delegate.call(this,args);};
G__45700.cljs$lang$maxFixedArity = 0;
G__45700.cljs$lang$applyTo = (function (arglist__45702){
var args = cljs.core.seq(arglist__45702);
return G__45700__delegate(args);
});
G__45700.cljs$core$IFn$_invoke$arity$variadic = G__45700__delegate;
return G__45700;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45703__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45703 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45704__i = 0, G__45704__a = new Array(arguments.length -  0);
while (G__45704__i < G__45704__a.length) {G__45704__a[G__45704__i] = arguments[G__45704__i + 0]; ++G__45704__i;}
  args = new cljs.core.IndexedSeq(G__45704__a,0,null);
} 
return G__45703__delegate.call(this,args);};
G__45703.cljs$lang$maxFixedArity = 0;
G__45703.cljs$lang$applyTo = (function (arglist__45705){
var args = cljs.core.seq(arglist__45705);
return G__45703__delegate(args);
});
G__45703.cljs$core$IFn$_invoke$arity$variadic = G__45703__delegate;
return G__45703;
})()
;

return null;
});
