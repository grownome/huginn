goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38195__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38195 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38196__i = 0, G__38196__a = new Array(arguments.length -  0);
while (G__38196__i < G__38196__a.length) {G__38196__a[G__38196__i] = arguments[G__38196__i + 0]; ++G__38196__i;}
  args = new cljs.core.IndexedSeq(G__38196__a,0,null);
} 
return G__38195__delegate.call(this,args);};
G__38195.cljs$lang$maxFixedArity = 0;
G__38195.cljs$lang$applyTo = (function (arglist__38197){
var args = cljs.core.seq(arglist__38197);
return G__38195__delegate(args);
});
G__38195.cljs$core$IFn$_invoke$arity$variadic = G__38195__delegate;
return G__38195;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38198__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38198 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38199__i = 0, G__38199__a = new Array(arguments.length -  0);
while (G__38199__i < G__38199__a.length) {G__38199__a[G__38199__i] = arguments[G__38199__i + 0]; ++G__38199__i;}
  args = new cljs.core.IndexedSeq(G__38199__a,0,null);
} 
return G__38198__delegate.call(this,args);};
G__38198.cljs$lang$maxFixedArity = 0;
G__38198.cljs$lang$applyTo = (function (arglist__38200){
var args = cljs.core.seq(arglist__38200);
return G__38198__delegate(args);
});
G__38198.cljs$core$IFn$_invoke$arity$variadic = G__38198__delegate;
return G__38198;
})()
;

return null;
});
