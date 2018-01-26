goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37286__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37287__i = 0, G__37287__a = new Array(arguments.length -  0);
while (G__37287__i < G__37287__a.length) {G__37287__a[G__37287__i] = arguments[G__37287__i + 0]; ++G__37287__i;}
  args = new cljs.core.IndexedSeq(G__37287__a,0,null);
} 
return G__37286__delegate.call(this,args);};
G__37286.cljs$lang$maxFixedArity = 0;
G__37286.cljs$lang$applyTo = (function (arglist__37288){
var args = cljs.core.seq(arglist__37288);
return G__37286__delegate(args);
});
G__37286.cljs$core$IFn$_invoke$arity$variadic = G__37286__delegate;
return G__37286;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37289__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37290__i = 0, G__37290__a = new Array(arguments.length -  0);
while (G__37290__i < G__37290__a.length) {G__37290__a[G__37290__i] = arguments[G__37290__i + 0]; ++G__37290__i;}
  args = new cljs.core.IndexedSeq(G__37290__a,0,null);
} 
return G__37289__delegate.call(this,args);};
G__37289.cljs$lang$maxFixedArity = 0;
G__37289.cljs$lang$applyTo = (function (arglist__37291){
var args = cljs.core.seq(arglist__37291);
return G__37289__delegate(args);
});
G__37289.cljs$core$IFn$_invoke$arity$variadic = G__37289__delegate;
return G__37289;
})()
;

return null;
});
