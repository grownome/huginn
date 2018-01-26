goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37055__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37055 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37056__i = 0, G__37056__a = new Array(arguments.length -  0);
while (G__37056__i < G__37056__a.length) {G__37056__a[G__37056__i] = arguments[G__37056__i + 0]; ++G__37056__i;}
  args = new cljs.core.IndexedSeq(G__37056__a,0,null);
} 
return G__37055__delegate.call(this,args);};
G__37055.cljs$lang$maxFixedArity = 0;
G__37055.cljs$lang$applyTo = (function (arglist__37057){
var args = cljs.core.seq(arglist__37057);
return G__37055__delegate(args);
});
G__37055.cljs$core$IFn$_invoke$arity$variadic = G__37055__delegate;
return G__37055;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37058__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37058 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37059__i = 0, G__37059__a = new Array(arguments.length -  0);
while (G__37059__i < G__37059__a.length) {G__37059__a[G__37059__i] = arguments[G__37059__i + 0]; ++G__37059__i;}
  args = new cljs.core.IndexedSeq(G__37059__a,0,null);
} 
return G__37058__delegate.call(this,args);};
G__37058.cljs$lang$maxFixedArity = 0;
G__37058.cljs$lang$applyTo = (function (arglist__37060){
var args = cljs.core.seq(arglist__37060);
return G__37058__delegate(args);
});
G__37058.cljs$core$IFn$_invoke$arity$variadic = G__37058__delegate;
return G__37058;
})()
;

return null;
});
