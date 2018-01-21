goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57228__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57229__i = 0, G__57229__a = new Array(arguments.length -  0);
while (G__57229__i < G__57229__a.length) {G__57229__a[G__57229__i] = arguments[G__57229__i + 0]; ++G__57229__i;}
  args = new cljs.core.IndexedSeq(G__57229__a,0,null);
} 
return G__57228__delegate.call(this,args);};
G__57228.cljs$lang$maxFixedArity = 0;
G__57228.cljs$lang$applyTo = (function (arglist__57230){
var args = cljs.core.seq(arglist__57230);
return G__57228__delegate(args);
});
G__57228.cljs$core$IFn$_invoke$arity$variadic = G__57228__delegate;
return G__57228;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57231__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57232__i = 0, G__57232__a = new Array(arguments.length -  0);
while (G__57232__i < G__57232__a.length) {G__57232__a[G__57232__i] = arguments[G__57232__i + 0]; ++G__57232__i;}
  args = new cljs.core.IndexedSeq(G__57232__a,0,null);
} 
return G__57231__delegate.call(this,args);};
G__57231.cljs$lang$maxFixedArity = 0;
G__57231.cljs$lang$applyTo = (function (arglist__57233){
var args = cljs.core.seq(arglist__57233);
return G__57231__delegate(args);
});
G__57231.cljs$core$IFn$_invoke$arity$variadic = G__57231__delegate;
return G__57231;
})()
;

return null;
});
