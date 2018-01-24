goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45457__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45457 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45458__i = 0, G__45458__a = new Array(arguments.length -  0);
while (G__45458__i < G__45458__a.length) {G__45458__a[G__45458__i] = arguments[G__45458__i + 0]; ++G__45458__i;}
  args = new cljs.core.IndexedSeq(G__45458__a,0,null);
} 
return G__45457__delegate.call(this,args);};
G__45457.cljs$lang$maxFixedArity = 0;
G__45457.cljs$lang$applyTo = (function (arglist__45459){
var args = cljs.core.seq(arglist__45459);
return G__45457__delegate(args);
});
G__45457.cljs$core$IFn$_invoke$arity$variadic = G__45457__delegate;
return G__45457;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45460__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45460 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45461__i = 0, G__45461__a = new Array(arguments.length -  0);
while (G__45461__i < G__45461__a.length) {G__45461__a[G__45461__i] = arguments[G__45461__i + 0]; ++G__45461__i;}
  args = new cljs.core.IndexedSeq(G__45461__a,0,null);
} 
return G__45460__delegate.call(this,args);};
G__45460.cljs$lang$maxFixedArity = 0;
G__45460.cljs$lang$applyTo = (function (arglist__45462){
var args = cljs.core.seq(arglist__45462);
return G__45460__delegate(args);
});
G__45460.cljs$core$IFn$_invoke$arity$variadic = G__45460__delegate;
return G__45460;
})()
;

return null;
});
