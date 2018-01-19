goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63851__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63851 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63852__i = 0, G__63852__a = new Array(arguments.length -  0);
while (G__63852__i < G__63852__a.length) {G__63852__a[G__63852__i] = arguments[G__63852__i + 0]; ++G__63852__i;}
  args = new cljs.core.IndexedSeq(G__63852__a,0,null);
} 
return G__63851__delegate.call(this,args);};
G__63851.cljs$lang$maxFixedArity = 0;
G__63851.cljs$lang$applyTo = (function (arglist__63853){
var args = cljs.core.seq(arglist__63853);
return G__63851__delegate(args);
});
G__63851.cljs$core$IFn$_invoke$arity$variadic = G__63851__delegate;
return G__63851;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63854__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63854 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63855__i = 0, G__63855__a = new Array(arguments.length -  0);
while (G__63855__i < G__63855__a.length) {G__63855__a[G__63855__i] = arguments[G__63855__i + 0]; ++G__63855__i;}
  args = new cljs.core.IndexedSeq(G__63855__a,0,null);
} 
return G__63854__delegate.call(this,args);};
G__63854.cljs$lang$maxFixedArity = 0;
G__63854.cljs$lang$applyTo = (function (arglist__63856){
var args = cljs.core.seq(arglist__63856);
return G__63854__delegate(args);
});
G__63854.cljs$core$IFn$_invoke$arity$variadic = G__63854__delegate;
return G__63854;
})()
;

return null;
});
