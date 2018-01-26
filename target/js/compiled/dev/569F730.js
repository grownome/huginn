goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37428__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37428 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37429__i = 0, G__37429__a = new Array(arguments.length -  0);
while (G__37429__i < G__37429__a.length) {G__37429__a[G__37429__i] = arguments[G__37429__i + 0]; ++G__37429__i;}
  args = new cljs.core.IndexedSeq(G__37429__a,0,null);
} 
return G__37428__delegate.call(this,args);};
G__37428.cljs$lang$maxFixedArity = 0;
G__37428.cljs$lang$applyTo = (function (arglist__37430){
var args = cljs.core.seq(arglist__37430);
return G__37428__delegate(args);
});
G__37428.cljs$core$IFn$_invoke$arity$variadic = G__37428__delegate;
return G__37428;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37431__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37432__i = 0, G__37432__a = new Array(arguments.length -  0);
while (G__37432__i < G__37432__a.length) {G__37432__a[G__37432__i] = arguments[G__37432__i + 0]; ++G__37432__i;}
  args = new cljs.core.IndexedSeq(G__37432__a,0,null);
} 
return G__37431__delegate.call(this,args);};
G__37431.cljs$lang$maxFixedArity = 0;
G__37431.cljs$lang$applyTo = (function (arglist__37433){
var args = cljs.core.seq(arglist__37433);
return G__37431__delegate(args);
});
G__37431.cljs$core$IFn$_invoke$arity$variadic = G__37431__delegate;
return G__37431;
})()
;

return null;
});
