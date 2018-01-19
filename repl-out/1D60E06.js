goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67923__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67924__i = 0, G__67924__a = new Array(arguments.length -  0);
while (G__67924__i < G__67924__a.length) {G__67924__a[G__67924__i] = arguments[G__67924__i + 0]; ++G__67924__i;}
  args = new cljs.core.IndexedSeq(G__67924__a,0,null);
} 
return G__67923__delegate.call(this,args);};
G__67923.cljs$lang$maxFixedArity = 0;
G__67923.cljs$lang$applyTo = (function (arglist__67925){
var args = cljs.core.seq(arglist__67925);
return G__67923__delegate(args);
});
G__67923.cljs$core$IFn$_invoke$arity$variadic = G__67923__delegate;
return G__67923;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67926__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67927__i = 0, G__67927__a = new Array(arguments.length -  0);
while (G__67927__i < G__67927__a.length) {G__67927__a[G__67927__i] = arguments[G__67927__i + 0]; ++G__67927__i;}
  args = new cljs.core.IndexedSeq(G__67927__a,0,null);
} 
return G__67926__delegate.call(this,args);};
G__67926.cljs$lang$maxFixedArity = 0;
G__67926.cljs$lang$applyTo = (function (arglist__67928){
var args = cljs.core.seq(arglist__67928);
return G__67926__delegate(args);
});
G__67926.cljs$core$IFn$_invoke$arity$variadic = G__67926__delegate;
return G__67926;
})()
;

return null;
});
