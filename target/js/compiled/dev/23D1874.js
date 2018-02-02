goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40224__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40224 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40225__i = 0, G__40225__a = new Array(arguments.length -  0);
while (G__40225__i < G__40225__a.length) {G__40225__a[G__40225__i] = arguments[G__40225__i + 0]; ++G__40225__i;}
  args = new cljs.core.IndexedSeq(G__40225__a,0,null);
} 
return G__40224__delegate.call(this,args);};
G__40224.cljs$lang$maxFixedArity = 0;
G__40224.cljs$lang$applyTo = (function (arglist__40226){
var args = cljs.core.seq(arglist__40226);
return G__40224__delegate(args);
});
G__40224.cljs$core$IFn$_invoke$arity$variadic = G__40224__delegate;
return G__40224;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40227__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40227 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40228__i = 0, G__40228__a = new Array(arguments.length -  0);
while (G__40228__i < G__40228__a.length) {G__40228__a[G__40228__i] = arguments[G__40228__i + 0]; ++G__40228__i;}
  args = new cljs.core.IndexedSeq(G__40228__a,0,null);
} 
return G__40227__delegate.call(this,args);};
G__40227.cljs$lang$maxFixedArity = 0;
G__40227.cljs$lang$applyTo = (function (arglist__40229){
var args = cljs.core.seq(arglist__40229);
return G__40227__delegate(args);
});
G__40227.cljs$core$IFn$_invoke$arity$variadic = G__40227__delegate;
return G__40227;
})()
;

return null;
});
