goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38438__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38438 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38439__i = 0, G__38439__a = new Array(arguments.length -  0);
while (G__38439__i < G__38439__a.length) {G__38439__a[G__38439__i] = arguments[G__38439__i + 0]; ++G__38439__i;}
  args = new cljs.core.IndexedSeq(G__38439__a,0,null);
} 
return G__38438__delegate.call(this,args);};
G__38438.cljs$lang$maxFixedArity = 0;
G__38438.cljs$lang$applyTo = (function (arglist__38440){
var args = cljs.core.seq(arglist__38440);
return G__38438__delegate(args);
});
G__38438.cljs$core$IFn$_invoke$arity$variadic = G__38438__delegate;
return G__38438;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38441__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38442__i = 0, G__38442__a = new Array(arguments.length -  0);
while (G__38442__i < G__38442__a.length) {G__38442__a[G__38442__i] = arguments[G__38442__i + 0]; ++G__38442__i;}
  args = new cljs.core.IndexedSeq(G__38442__a,0,null);
} 
return G__38441__delegate.call(this,args);};
G__38441.cljs$lang$maxFixedArity = 0;
G__38441.cljs$lang$applyTo = (function (arglist__38443){
var args = cljs.core.seq(arglist__38443);
return G__38441__delegate(args);
});
G__38441.cljs$core$IFn$_invoke$arity$variadic = G__38441__delegate;
return G__38441;
})()
;

return null;
});
