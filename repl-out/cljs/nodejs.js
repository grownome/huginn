// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__49842__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__49842 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49843__i = 0, G__49843__a = new Array(arguments.length -  0);
while (G__49843__i < G__49843__a.length) {G__49843__a[G__49843__i] = arguments[G__49843__i + 0]; ++G__49843__i;}
  args = new cljs.core.IndexedSeq(G__49843__a,0,null);
} 
return G__49842__delegate.call(this,args);};
G__49842.cljs$lang$maxFixedArity = 0;
G__49842.cljs$lang$applyTo = (function (arglist__49844){
var args = cljs.core.seq(arglist__49844);
return G__49842__delegate(args);
});
G__49842.cljs$core$IFn$_invoke$arity$variadic = G__49842__delegate;
return G__49842;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__49845__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__49845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49846__i = 0, G__49846__a = new Array(arguments.length -  0);
while (G__49846__i < G__49846__a.length) {G__49846__a[G__49846__i] = arguments[G__49846__i + 0]; ++G__49846__i;}
  args = new cljs.core.IndexedSeq(G__49846__a,0,null);
} 
return G__49845__delegate.call(this,args);};
G__49845.cljs$lang$maxFixedArity = 0;
G__49845.cljs$lang$applyTo = (function (arglist__49847){
var args = cljs.core.seq(arglist__49847);
return G__49845__delegate(args);
});
G__49845.cljs$core$IFn$_invoke$arity$variadic = G__49845__delegate;
return G__49845;
})()
;

return null;
});
