goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37037__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37037 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37038__i = 0, G__37038__a = new Array(arguments.length -  0);
while (G__37038__i < G__37038__a.length) {G__37038__a[G__37038__i] = arguments[G__37038__i + 0]; ++G__37038__i;}
  args = new cljs.core.IndexedSeq(G__37038__a,0,null);
} 
return G__37037__delegate.call(this,args);};
G__37037.cljs$lang$maxFixedArity = 0;
G__37037.cljs$lang$applyTo = (function (arglist__37039){
var args = cljs.core.seq(arglist__37039);
return G__37037__delegate(args);
});
G__37037.cljs$core$IFn$_invoke$arity$variadic = G__37037__delegate;
return G__37037;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37040__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37040 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37041__i = 0, G__37041__a = new Array(arguments.length -  0);
while (G__37041__i < G__37041__a.length) {G__37041__a[G__37041__i] = arguments[G__37041__i + 0]; ++G__37041__i;}
  args = new cljs.core.IndexedSeq(G__37041__a,0,null);
} 
return G__37040__delegate.call(this,args);};
G__37040.cljs$lang$maxFixedArity = 0;
G__37040.cljs$lang$applyTo = (function (arglist__37042){
var args = cljs.core.seq(arglist__37042);
return G__37040__delegate(args);
});
G__37040.cljs$core$IFn$_invoke$arity$variadic = G__37040__delegate;
return G__37040;
})()
;

return null;
});
