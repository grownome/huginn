goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38358__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38359__i = 0, G__38359__a = new Array(arguments.length -  0);
while (G__38359__i < G__38359__a.length) {G__38359__a[G__38359__i] = arguments[G__38359__i + 0]; ++G__38359__i;}
  args = new cljs.core.IndexedSeq(G__38359__a,0,null);
} 
return G__38358__delegate.call(this,args);};
G__38358.cljs$lang$maxFixedArity = 0;
G__38358.cljs$lang$applyTo = (function (arglist__38360){
var args = cljs.core.seq(arglist__38360);
return G__38358__delegate(args);
});
G__38358.cljs$core$IFn$_invoke$arity$variadic = G__38358__delegate;
return G__38358;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38361__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38362__i = 0, G__38362__a = new Array(arguments.length -  0);
while (G__38362__i < G__38362__a.length) {G__38362__a[G__38362__i] = arguments[G__38362__i + 0]; ++G__38362__i;}
  args = new cljs.core.IndexedSeq(G__38362__a,0,null);
} 
return G__38361__delegate.call(this,args);};
G__38361.cljs$lang$maxFixedArity = 0;
G__38361.cljs$lang$applyTo = (function (arglist__38363){
var args = cljs.core.seq(arglist__38363);
return G__38361__delegate(args);
});
G__38361.cljs$core$IFn$_invoke$arity$variadic = G__38361__delegate;
return G__38361;
})()
;

return null;
});
