goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47312__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47312 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47313__i = 0, G__47313__a = new Array(arguments.length -  0);
while (G__47313__i < G__47313__a.length) {G__47313__a[G__47313__i] = arguments[G__47313__i + 0]; ++G__47313__i;}
  args = new cljs.core.IndexedSeq(G__47313__a,0,null);
} 
return G__47312__delegate.call(this,args);};
G__47312.cljs$lang$maxFixedArity = 0;
G__47312.cljs$lang$applyTo = (function (arglist__47314){
var args = cljs.core.seq(arglist__47314);
return G__47312__delegate(args);
});
G__47312.cljs$core$IFn$_invoke$arity$variadic = G__47312__delegate;
return G__47312;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__47315__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__47315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47316__i = 0, G__47316__a = new Array(arguments.length -  0);
while (G__47316__i < G__47316__a.length) {G__47316__a[G__47316__i] = arguments[G__47316__i + 0]; ++G__47316__i;}
  args = new cljs.core.IndexedSeq(G__47316__a,0,null);
} 
return G__47315__delegate.call(this,args);};
G__47315.cljs$lang$maxFixedArity = 0;
G__47315.cljs$lang$applyTo = (function (arglist__47317){
var args = cljs.core.seq(arglist__47317);
return G__47315__delegate(args);
});
G__47315.cljs$core$IFn$_invoke$arity$variadic = G__47315__delegate;
return G__47315;
})()
;

return null;
});
