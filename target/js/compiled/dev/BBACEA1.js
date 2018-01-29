goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37284__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37285__i = 0, G__37285__a = new Array(arguments.length -  0);
while (G__37285__i < G__37285__a.length) {G__37285__a[G__37285__i] = arguments[G__37285__i + 0]; ++G__37285__i;}
  args = new cljs.core.IndexedSeq(G__37285__a,0,null);
} 
return G__37284__delegate.call(this,args);};
G__37284.cljs$lang$maxFixedArity = 0;
G__37284.cljs$lang$applyTo = (function (arglist__37286){
var args = cljs.core.seq(arglist__37286);
return G__37284__delegate(args);
});
G__37284.cljs$core$IFn$_invoke$arity$variadic = G__37284__delegate;
return G__37284;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37287__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37288__i = 0, G__37288__a = new Array(arguments.length -  0);
while (G__37288__i < G__37288__a.length) {G__37288__a[G__37288__i] = arguments[G__37288__i + 0]; ++G__37288__i;}
  args = new cljs.core.IndexedSeq(G__37288__a,0,null);
} 
return G__37287__delegate.call(this,args);};
G__37287.cljs$lang$maxFixedArity = 0;
G__37287.cljs$lang$applyTo = (function (arglist__37289){
var args = cljs.core.seq(arglist__37289);
return G__37287__delegate(args);
});
G__37287.cljs$core$IFn$_invoke$arity$variadic = G__37287__delegate;
return G__37287;
})()
;

return null;
});
