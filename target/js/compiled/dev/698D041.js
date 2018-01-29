goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37236__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37236 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37237__i = 0, G__37237__a = new Array(arguments.length -  0);
while (G__37237__i < G__37237__a.length) {G__37237__a[G__37237__i] = arguments[G__37237__i + 0]; ++G__37237__i;}
  args = new cljs.core.IndexedSeq(G__37237__a,0,null);
} 
return G__37236__delegate.call(this,args);};
G__37236.cljs$lang$maxFixedArity = 0;
G__37236.cljs$lang$applyTo = (function (arglist__37238){
var args = cljs.core.seq(arglist__37238);
return G__37236__delegate(args);
});
G__37236.cljs$core$IFn$_invoke$arity$variadic = G__37236__delegate;
return G__37236;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37239__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37240__i = 0, G__37240__a = new Array(arguments.length -  0);
while (G__37240__i < G__37240__a.length) {G__37240__a[G__37240__i] = arguments[G__37240__i + 0]; ++G__37240__i;}
  args = new cljs.core.IndexedSeq(G__37240__a,0,null);
} 
return G__37239__delegate.call(this,args);};
G__37239.cljs$lang$maxFixedArity = 0;
G__37239.cljs$lang$applyTo = (function (arglist__37241){
var args = cljs.core.seq(arglist__37241);
return G__37239__delegate(args);
});
G__37239.cljs$core$IFn$_invoke$arity$variadic = G__37239__delegate;
return G__37239;
})()
;

return null;
});
