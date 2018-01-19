goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67467__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67467 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67468__i = 0, G__67468__a = new Array(arguments.length -  0);
while (G__67468__i < G__67468__a.length) {G__67468__a[G__67468__i] = arguments[G__67468__i + 0]; ++G__67468__i;}
  args = new cljs.core.IndexedSeq(G__67468__a,0,null);
} 
return G__67467__delegate.call(this,args);};
G__67467.cljs$lang$maxFixedArity = 0;
G__67467.cljs$lang$applyTo = (function (arglist__67469){
var args = cljs.core.seq(arglist__67469);
return G__67467__delegate(args);
});
G__67467.cljs$core$IFn$_invoke$arity$variadic = G__67467__delegate;
return G__67467;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67470__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67470 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67471__i = 0, G__67471__a = new Array(arguments.length -  0);
while (G__67471__i < G__67471__a.length) {G__67471__a[G__67471__i] = arguments[G__67471__i + 0]; ++G__67471__i;}
  args = new cljs.core.IndexedSeq(G__67471__a,0,null);
} 
return G__67470__delegate.call(this,args);};
G__67470.cljs$lang$maxFixedArity = 0;
G__67470.cljs$lang$applyTo = (function (arglist__67472){
var args = cljs.core.seq(arglist__67472);
return G__67470__delegate(args);
});
G__67470.cljs$core$IFn$_invoke$arity$variadic = G__67470__delegate;
return G__67470;
})()
;

return null;
});
