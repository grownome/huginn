goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__55936__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__55936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55937__i = 0, G__55937__a = new Array(arguments.length -  0);
while (G__55937__i < G__55937__a.length) {G__55937__a[G__55937__i] = arguments[G__55937__i + 0]; ++G__55937__i;}
  args = new cljs.core.IndexedSeq(G__55937__a,0,null);
} 
return G__55936__delegate.call(this,args);};
G__55936.cljs$lang$maxFixedArity = 0;
G__55936.cljs$lang$applyTo = (function (arglist__55938){
var args = cljs.core.seq(arglist__55938);
return G__55936__delegate(args);
});
G__55936.cljs$core$IFn$_invoke$arity$variadic = G__55936__delegate;
return G__55936;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__55939__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__55939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55940__i = 0, G__55940__a = new Array(arguments.length -  0);
while (G__55940__i < G__55940__a.length) {G__55940__a[G__55940__i] = arguments[G__55940__i + 0]; ++G__55940__i;}
  args = new cljs.core.IndexedSeq(G__55940__a,0,null);
} 
return G__55939__delegate.call(this,args);};
G__55939.cljs$lang$maxFixedArity = 0;
G__55939.cljs$lang$applyTo = (function (arglist__55941){
var args = cljs.core.seq(arglist__55941);
return G__55939__delegate(args);
});
G__55939.cljs$core$IFn$_invoke$arity$variadic = G__55939__delegate;
return G__55939;
})()
;

return null;
});
