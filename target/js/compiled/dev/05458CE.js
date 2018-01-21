goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48003__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__48003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48004__i = 0, G__48004__a = new Array(arguments.length -  0);
while (G__48004__i < G__48004__a.length) {G__48004__a[G__48004__i] = arguments[G__48004__i + 0]; ++G__48004__i;}
  args = new cljs.core.IndexedSeq(G__48004__a,0,null);
} 
return G__48003__delegate.call(this,args);};
G__48003.cljs$lang$maxFixedArity = 0;
G__48003.cljs$lang$applyTo = (function (arglist__48005){
var args = cljs.core.seq(arglist__48005);
return G__48003__delegate(args);
});
G__48003.cljs$core$IFn$_invoke$arity$variadic = G__48003__delegate;
return G__48003;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__48006__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__48006 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48007__i = 0, G__48007__a = new Array(arguments.length -  0);
while (G__48007__i < G__48007__a.length) {G__48007__a[G__48007__i] = arguments[G__48007__i + 0]; ++G__48007__i;}
  args = new cljs.core.IndexedSeq(G__48007__a,0,null);
} 
return G__48006__delegate.call(this,args);};
G__48006.cljs$lang$maxFixedArity = 0;
G__48006.cljs$lang$applyTo = (function (arglist__48008){
var args = cljs.core.seq(arglist__48008);
return G__48006__delegate(args);
});
G__48006.cljs$core$IFn$_invoke$arity$variadic = G__48006__delegate;
return G__48006;
})()
;

return null;
});
