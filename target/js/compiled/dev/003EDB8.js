goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48215__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__48215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48216__i = 0, G__48216__a = new Array(arguments.length -  0);
while (G__48216__i < G__48216__a.length) {G__48216__a[G__48216__i] = arguments[G__48216__i + 0]; ++G__48216__i;}
  args = new cljs.core.IndexedSeq(G__48216__a,0,null);
} 
return G__48215__delegate.call(this,args);};
G__48215.cljs$lang$maxFixedArity = 0;
G__48215.cljs$lang$applyTo = (function (arglist__48217){
var args = cljs.core.seq(arglist__48217);
return G__48215__delegate(args);
});
G__48215.cljs$core$IFn$_invoke$arity$variadic = G__48215__delegate;
return G__48215;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__48218__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__48218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48219__i = 0, G__48219__a = new Array(arguments.length -  0);
while (G__48219__i < G__48219__a.length) {G__48219__a[G__48219__i] = arguments[G__48219__i + 0]; ++G__48219__i;}
  args = new cljs.core.IndexedSeq(G__48219__a,0,null);
} 
return G__48218__delegate.call(this,args);};
G__48218.cljs$lang$maxFixedArity = 0;
G__48218.cljs$lang$applyTo = (function (arglist__48220){
var args = cljs.core.seq(arglist__48220);
return G__48218__delegate(args);
});
G__48218.cljs$core$IFn$_invoke$arity$variadic = G__48218__delegate;
return G__48218;
})()
;

return null;
});
