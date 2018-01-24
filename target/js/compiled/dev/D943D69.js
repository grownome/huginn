goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47748__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47748 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47749__i = 0, G__47749__a = new Array(arguments.length -  0);
while (G__47749__i < G__47749__a.length) {G__47749__a[G__47749__i] = arguments[G__47749__i + 0]; ++G__47749__i;}
  args = new cljs.core.IndexedSeq(G__47749__a,0,null);
} 
return G__47748__delegate.call(this,args);};
G__47748.cljs$lang$maxFixedArity = 0;
G__47748.cljs$lang$applyTo = (function (arglist__47750){
var args = cljs.core.seq(arglist__47750);
return G__47748__delegate(args);
});
G__47748.cljs$core$IFn$_invoke$arity$variadic = G__47748__delegate;
return G__47748;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__47751__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__47751 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47752__i = 0, G__47752__a = new Array(arguments.length -  0);
while (G__47752__i < G__47752__a.length) {G__47752__a[G__47752__i] = arguments[G__47752__i + 0]; ++G__47752__i;}
  args = new cljs.core.IndexedSeq(G__47752__a,0,null);
} 
return G__47751__delegate.call(this,args);};
G__47751.cljs$lang$maxFixedArity = 0;
G__47751.cljs$lang$applyTo = (function (arglist__47753){
var args = cljs.core.seq(arglist__47753);
return G__47751__delegate(args);
});
G__47751.cljs$core$IFn$_invoke$arity$variadic = G__47751__delegate;
return G__47751;
})()
;

return null;
});
