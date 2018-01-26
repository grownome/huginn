goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37215__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37215 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37216__i = 0, G__37216__a = new Array(arguments.length -  0);
while (G__37216__i < G__37216__a.length) {G__37216__a[G__37216__i] = arguments[G__37216__i + 0]; ++G__37216__i;}
  args = new cljs.core.IndexedSeq(G__37216__a,0,null);
} 
return G__37215__delegate.call(this,args);};
G__37215.cljs$lang$maxFixedArity = 0;
G__37215.cljs$lang$applyTo = (function (arglist__37217){
var args = cljs.core.seq(arglist__37217);
return G__37215__delegate(args);
});
G__37215.cljs$core$IFn$_invoke$arity$variadic = G__37215__delegate;
return G__37215;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37218__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37219__i = 0, G__37219__a = new Array(arguments.length -  0);
while (G__37219__i < G__37219__a.length) {G__37219__a[G__37219__i] = arguments[G__37219__i + 0]; ++G__37219__i;}
  args = new cljs.core.IndexedSeq(G__37219__a,0,null);
} 
return G__37218__delegate.call(this,args);};
G__37218.cljs$lang$maxFixedArity = 0;
G__37218.cljs$lang$applyTo = (function (arglist__37220){
var args = cljs.core.seq(arglist__37220);
return G__37218__delegate(args);
});
G__37218.cljs$core$IFn$_invoke$arity$variadic = G__37218__delegate;
return G__37218;
})()
;

return null;
});
