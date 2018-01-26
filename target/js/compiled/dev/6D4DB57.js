goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38038__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38038 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38039__i = 0, G__38039__a = new Array(arguments.length -  0);
while (G__38039__i < G__38039__a.length) {G__38039__a[G__38039__i] = arguments[G__38039__i + 0]; ++G__38039__i;}
  args = new cljs.core.IndexedSeq(G__38039__a,0,null);
} 
return G__38038__delegate.call(this,args);};
G__38038.cljs$lang$maxFixedArity = 0;
G__38038.cljs$lang$applyTo = (function (arglist__38040){
var args = cljs.core.seq(arglist__38040);
return G__38038__delegate(args);
});
G__38038.cljs$core$IFn$_invoke$arity$variadic = G__38038__delegate;
return G__38038;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38041__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38042__i = 0, G__38042__a = new Array(arguments.length -  0);
while (G__38042__i < G__38042__a.length) {G__38042__a[G__38042__i] = arguments[G__38042__i + 0]; ++G__38042__i;}
  args = new cljs.core.IndexedSeq(G__38042__a,0,null);
} 
return G__38041__delegate.call(this,args);};
G__38041.cljs$lang$maxFixedArity = 0;
G__38041.cljs$lang$applyTo = (function (arglist__38043){
var args = cljs.core.seq(arglist__38043);
return G__38041__delegate(args);
});
G__38041.cljs$core$IFn$_invoke$arity$variadic = G__38041__delegate;
return G__38041;
})()
;

return null;
});
