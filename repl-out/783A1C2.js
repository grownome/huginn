goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__50455__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__50455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50456__i = 0, G__50456__a = new Array(arguments.length -  0);
while (G__50456__i < G__50456__a.length) {G__50456__a[G__50456__i] = arguments[G__50456__i + 0]; ++G__50456__i;}
  args = new cljs.core.IndexedSeq(G__50456__a,0,null);
} 
return G__50455__delegate.call(this,args);};
G__50455.cljs$lang$maxFixedArity = 0;
G__50455.cljs$lang$applyTo = (function (arglist__50457){
var args = cljs.core.seq(arglist__50457);
return G__50455__delegate(args);
});
G__50455.cljs$core$IFn$_invoke$arity$variadic = G__50455__delegate;
return G__50455;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__50458__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__50458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50459__i = 0, G__50459__a = new Array(arguments.length -  0);
while (G__50459__i < G__50459__a.length) {G__50459__a[G__50459__i] = arguments[G__50459__i + 0]; ++G__50459__i;}
  args = new cljs.core.IndexedSeq(G__50459__a,0,null);
} 
return G__50458__delegate.call(this,args);};
G__50458.cljs$lang$maxFixedArity = 0;
G__50458.cljs$lang$applyTo = (function (arglist__50460){
var args = cljs.core.seq(arglist__50460);
return G__50458__delegate(args);
});
G__50458.cljs$core$IFn$_invoke$arity$variadic = G__50458__delegate;
return G__50458;
})()
;

return null;
});
