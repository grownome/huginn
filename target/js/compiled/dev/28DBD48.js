goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38764__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38764 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38765__i = 0, G__38765__a = new Array(arguments.length -  0);
while (G__38765__i < G__38765__a.length) {G__38765__a[G__38765__i] = arguments[G__38765__i + 0]; ++G__38765__i;}
  args = new cljs.core.IndexedSeq(G__38765__a,0,null);
} 
return G__38764__delegate.call(this,args);};
G__38764.cljs$lang$maxFixedArity = 0;
G__38764.cljs$lang$applyTo = (function (arglist__38766){
var args = cljs.core.seq(arglist__38766);
return G__38764__delegate(args);
});
G__38764.cljs$core$IFn$_invoke$arity$variadic = G__38764__delegate;
return G__38764;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38767__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38768__i = 0, G__38768__a = new Array(arguments.length -  0);
while (G__38768__i < G__38768__a.length) {G__38768__a[G__38768__i] = arguments[G__38768__i + 0]; ++G__38768__i;}
  args = new cljs.core.IndexedSeq(G__38768__a,0,null);
} 
return G__38767__delegate.call(this,args);};
G__38767.cljs$lang$maxFixedArity = 0;
G__38767.cljs$lang$applyTo = (function (arglist__38769){
var args = cljs.core.seq(arglist__38769);
return G__38767__delegate(args);
});
G__38767.cljs$core$IFn$_invoke$arity$variadic = G__38767__delegate;
return G__38767;
})()
;

return null;
});
