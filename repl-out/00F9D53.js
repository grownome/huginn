goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__50916__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__50916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50917__i = 0, G__50917__a = new Array(arguments.length -  0);
while (G__50917__i < G__50917__a.length) {G__50917__a[G__50917__i] = arguments[G__50917__i + 0]; ++G__50917__i;}
  args = new cljs.core.IndexedSeq(G__50917__a,0,null);
} 
return G__50916__delegate.call(this,args);};
G__50916.cljs$lang$maxFixedArity = 0;
G__50916.cljs$lang$applyTo = (function (arglist__50918){
var args = cljs.core.seq(arglist__50918);
return G__50916__delegate(args);
});
G__50916.cljs$core$IFn$_invoke$arity$variadic = G__50916__delegate;
return G__50916;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__50919__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__50919 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50920__i = 0, G__50920__a = new Array(arguments.length -  0);
while (G__50920__i < G__50920__a.length) {G__50920__a[G__50920__i] = arguments[G__50920__i + 0]; ++G__50920__i;}
  args = new cljs.core.IndexedSeq(G__50920__a,0,null);
} 
return G__50919__delegate.call(this,args);};
G__50919.cljs$lang$maxFixedArity = 0;
G__50919.cljs$lang$applyTo = (function (arglist__50921){
var args = cljs.core.seq(arglist__50921);
return G__50919__delegate(args);
});
G__50919.cljs$core$IFn$_invoke$arity$variadic = G__50919__delegate;
return G__50919;
})()
;

return null;
});
