goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37884__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37885__i = 0, G__37885__a = new Array(arguments.length -  0);
while (G__37885__i < G__37885__a.length) {G__37885__a[G__37885__i] = arguments[G__37885__i + 0]; ++G__37885__i;}
  args = new cljs.core.IndexedSeq(G__37885__a,0,null);
} 
return G__37884__delegate.call(this,args);};
G__37884.cljs$lang$maxFixedArity = 0;
G__37884.cljs$lang$applyTo = (function (arglist__37886){
var args = cljs.core.seq(arglist__37886);
return G__37884__delegate(args);
});
G__37884.cljs$core$IFn$_invoke$arity$variadic = G__37884__delegate;
return G__37884;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37887__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37888__i = 0, G__37888__a = new Array(arguments.length -  0);
while (G__37888__i < G__37888__a.length) {G__37888__a[G__37888__i] = arguments[G__37888__i + 0]; ++G__37888__i;}
  args = new cljs.core.IndexedSeq(G__37888__a,0,null);
} 
return G__37887__delegate.call(this,args);};
G__37887.cljs$lang$maxFixedArity = 0;
G__37887.cljs$lang$applyTo = (function (arglist__37889){
var args = cljs.core.seq(arglist__37889);
return G__37887__delegate(args);
});
G__37887.cljs$core$IFn$_invoke$arity$variadic = G__37887__delegate;
return G__37887;
})()
;

return null;
});
