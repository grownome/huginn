goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__50939__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__50939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50940__i = 0, G__50940__a = new Array(arguments.length -  0);
while (G__50940__i < G__50940__a.length) {G__50940__a[G__50940__i] = arguments[G__50940__i + 0]; ++G__50940__i;}
  args = new cljs.core.IndexedSeq(G__50940__a,0,null);
} 
return G__50939__delegate.call(this,args);};
G__50939.cljs$lang$maxFixedArity = 0;
G__50939.cljs$lang$applyTo = (function (arglist__50941){
var args = cljs.core.seq(arglist__50941);
return G__50939__delegate(args);
});
G__50939.cljs$core$IFn$_invoke$arity$variadic = G__50939__delegate;
return G__50939;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__50942__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__50942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50943__i = 0, G__50943__a = new Array(arguments.length -  0);
while (G__50943__i < G__50943__a.length) {G__50943__a[G__50943__i] = arguments[G__50943__i + 0]; ++G__50943__i;}
  args = new cljs.core.IndexedSeq(G__50943__a,0,null);
} 
return G__50942__delegate.call(this,args);};
G__50942.cljs$lang$maxFixedArity = 0;
G__50942.cljs$lang$applyTo = (function (arglist__50944){
var args = cljs.core.seq(arglist__50944);
return G__50942__delegate(args);
});
G__50942.cljs$core$IFn$_invoke$arity$variadic = G__50942__delegate;
return G__50942;
})()
;

return null;
});
