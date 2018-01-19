goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__50220__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__50220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50221__i = 0, G__50221__a = new Array(arguments.length -  0);
while (G__50221__i < G__50221__a.length) {G__50221__a[G__50221__i] = arguments[G__50221__i + 0]; ++G__50221__i;}
  args = new cljs.core.IndexedSeq(G__50221__a,0,null);
} 
return G__50220__delegate.call(this,args);};
G__50220.cljs$lang$maxFixedArity = 0;
G__50220.cljs$lang$applyTo = (function (arglist__50222){
var args = cljs.core.seq(arglist__50222);
return G__50220__delegate(args);
});
G__50220.cljs$core$IFn$_invoke$arity$variadic = G__50220__delegate;
return G__50220;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__50223__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__50223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50224__i = 0, G__50224__a = new Array(arguments.length -  0);
while (G__50224__i < G__50224__a.length) {G__50224__a[G__50224__i] = arguments[G__50224__i + 0]; ++G__50224__i;}
  args = new cljs.core.IndexedSeq(G__50224__a,0,null);
} 
return G__50223__delegate.call(this,args);};
G__50223.cljs$lang$maxFixedArity = 0;
G__50223.cljs$lang$applyTo = (function (arglist__50225){
var args = cljs.core.seq(arglist__50225);
return G__50223__delegate(args);
});
G__50223.cljs$core$IFn$_invoke$arity$variadic = G__50223__delegate;
return G__50223;
})()
;

return null;
});
