goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37439__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37439 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37440__i = 0, G__37440__a = new Array(arguments.length -  0);
while (G__37440__i < G__37440__a.length) {G__37440__a[G__37440__i] = arguments[G__37440__i + 0]; ++G__37440__i;}
  args = new cljs.core.IndexedSeq(G__37440__a,0,null);
} 
return G__37439__delegate.call(this,args);};
G__37439.cljs$lang$maxFixedArity = 0;
G__37439.cljs$lang$applyTo = (function (arglist__37441){
var args = cljs.core.seq(arglist__37441);
return G__37439__delegate(args);
});
G__37439.cljs$core$IFn$_invoke$arity$variadic = G__37439__delegate;
return G__37439;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37442__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37442 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37443__i = 0, G__37443__a = new Array(arguments.length -  0);
while (G__37443__i < G__37443__a.length) {G__37443__a[G__37443__i] = arguments[G__37443__i + 0]; ++G__37443__i;}
  args = new cljs.core.IndexedSeq(G__37443__a,0,null);
} 
return G__37442__delegate.call(this,args);};
G__37442.cljs$lang$maxFixedArity = 0;
G__37442.cljs$lang$applyTo = (function (arglist__37444){
var args = cljs.core.seq(arglist__37444);
return G__37442__delegate(args);
});
G__37442.cljs$core$IFn$_invoke$arity$variadic = G__37442__delegate;
return G__37442;
})()
;

return null;
});
