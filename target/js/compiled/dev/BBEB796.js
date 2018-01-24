goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47059__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47059 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47060__i = 0, G__47060__a = new Array(arguments.length -  0);
while (G__47060__i < G__47060__a.length) {G__47060__a[G__47060__i] = arguments[G__47060__i + 0]; ++G__47060__i;}
  args = new cljs.core.IndexedSeq(G__47060__a,0,null);
} 
return G__47059__delegate.call(this,args);};
G__47059.cljs$lang$maxFixedArity = 0;
G__47059.cljs$lang$applyTo = (function (arglist__47061){
var args = cljs.core.seq(arglist__47061);
return G__47059__delegate(args);
});
G__47059.cljs$core$IFn$_invoke$arity$variadic = G__47059__delegate;
return G__47059;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__47062__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__47062 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47063__i = 0, G__47063__a = new Array(arguments.length -  0);
while (G__47063__i < G__47063__a.length) {G__47063__a[G__47063__i] = arguments[G__47063__i + 0]; ++G__47063__i;}
  args = new cljs.core.IndexedSeq(G__47063__a,0,null);
} 
return G__47062__delegate.call(this,args);};
G__47062.cljs$lang$maxFixedArity = 0;
G__47062.cljs$lang$applyTo = (function (arglist__47064){
var args = cljs.core.seq(arglist__47064);
return G__47062__delegate(args);
});
G__47062.cljs$core$IFn$_invoke$arity$variadic = G__47062__delegate;
return G__47062;
})()
;

return null;
});
