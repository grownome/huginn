goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__55857__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__55857 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55858__i = 0, G__55858__a = new Array(arguments.length -  0);
while (G__55858__i < G__55858__a.length) {G__55858__a[G__55858__i] = arguments[G__55858__i + 0]; ++G__55858__i;}
  args = new cljs.core.IndexedSeq(G__55858__a,0,null);
} 
return G__55857__delegate.call(this,args);};
G__55857.cljs$lang$maxFixedArity = 0;
G__55857.cljs$lang$applyTo = (function (arglist__55859){
var args = cljs.core.seq(arglist__55859);
return G__55857__delegate(args);
});
G__55857.cljs$core$IFn$_invoke$arity$variadic = G__55857__delegate;
return G__55857;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__55860__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__55860 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55861__i = 0, G__55861__a = new Array(arguments.length -  0);
while (G__55861__i < G__55861__a.length) {G__55861__a[G__55861__i] = arguments[G__55861__i + 0]; ++G__55861__i;}
  args = new cljs.core.IndexedSeq(G__55861__a,0,null);
} 
return G__55860__delegate.call(this,args);};
G__55860.cljs$lang$maxFixedArity = 0;
G__55860.cljs$lang$applyTo = (function (arglist__55862){
var args = cljs.core.seq(arglist__55862);
return G__55860__delegate(args);
});
G__55860.cljs$core$IFn$_invoke$arity$variadic = G__55860__delegate;
return G__55860;
})()
;

return null;
});
