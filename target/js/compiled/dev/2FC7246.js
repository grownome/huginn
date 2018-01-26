goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37144__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37144 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37145__i = 0, G__37145__a = new Array(arguments.length -  0);
while (G__37145__i < G__37145__a.length) {G__37145__a[G__37145__i] = arguments[G__37145__i + 0]; ++G__37145__i;}
  args = new cljs.core.IndexedSeq(G__37145__a,0,null);
} 
return G__37144__delegate.call(this,args);};
G__37144.cljs$lang$maxFixedArity = 0;
G__37144.cljs$lang$applyTo = (function (arglist__37146){
var args = cljs.core.seq(arglist__37146);
return G__37144__delegate(args);
});
G__37144.cljs$core$IFn$_invoke$arity$variadic = G__37144__delegate;
return G__37144;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37147__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37147 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37148__i = 0, G__37148__a = new Array(arguments.length -  0);
while (G__37148__i < G__37148__a.length) {G__37148__a[G__37148__i] = arguments[G__37148__i + 0]; ++G__37148__i;}
  args = new cljs.core.IndexedSeq(G__37148__a,0,null);
} 
return G__37147__delegate.call(this,args);};
G__37147.cljs$lang$maxFixedArity = 0;
G__37147.cljs$lang$applyTo = (function (arglist__37149){
var args = cljs.core.seq(arglist__37149);
return G__37147__delegate(args);
});
G__37147.cljs$core$IFn$_invoke$arity$variadic = G__37147__delegate;
return G__37147;
})()
;

return null;
});
