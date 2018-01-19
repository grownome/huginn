goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67445__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67445 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67446__i = 0, G__67446__a = new Array(arguments.length -  0);
while (G__67446__i < G__67446__a.length) {G__67446__a[G__67446__i] = arguments[G__67446__i + 0]; ++G__67446__i;}
  args = new cljs.core.IndexedSeq(G__67446__a,0,null);
} 
return G__67445__delegate.call(this,args);};
G__67445.cljs$lang$maxFixedArity = 0;
G__67445.cljs$lang$applyTo = (function (arglist__67447){
var args = cljs.core.seq(arglist__67447);
return G__67445__delegate(args);
});
G__67445.cljs$core$IFn$_invoke$arity$variadic = G__67445__delegate;
return G__67445;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67448__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67448 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67449__i = 0, G__67449__a = new Array(arguments.length -  0);
while (G__67449__i < G__67449__a.length) {G__67449__a[G__67449__i] = arguments[G__67449__i + 0]; ++G__67449__i;}
  args = new cljs.core.IndexedSeq(G__67449__a,0,null);
} 
return G__67448__delegate.call(this,args);};
G__67448.cljs$lang$maxFixedArity = 0;
G__67448.cljs$lang$applyTo = (function (arglist__67450){
var args = cljs.core.seq(arglist__67450);
return G__67448__delegate(args);
});
G__67448.cljs$core$IFn$_invoke$arity$variadic = G__67448__delegate;
return G__67448;
})()
;

return null;
});
