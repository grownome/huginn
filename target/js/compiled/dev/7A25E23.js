goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57163__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57163 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57164__i = 0, G__57164__a = new Array(arguments.length -  0);
while (G__57164__i < G__57164__a.length) {G__57164__a[G__57164__i] = arguments[G__57164__i + 0]; ++G__57164__i;}
  args = new cljs.core.IndexedSeq(G__57164__a,0,null);
} 
return G__57163__delegate.call(this,args);};
G__57163.cljs$lang$maxFixedArity = 0;
G__57163.cljs$lang$applyTo = (function (arglist__57165){
var args = cljs.core.seq(arglist__57165);
return G__57163__delegate(args);
});
G__57163.cljs$core$IFn$_invoke$arity$variadic = G__57163__delegate;
return G__57163;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57166__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57166 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57167__i = 0, G__57167__a = new Array(arguments.length -  0);
while (G__57167__i < G__57167__a.length) {G__57167__a[G__57167__i] = arguments[G__57167__i + 0]; ++G__57167__i;}
  args = new cljs.core.IndexedSeq(G__57167__a,0,null);
} 
return G__57166__delegate.call(this,args);};
G__57166.cljs$lang$maxFixedArity = 0;
G__57166.cljs$lang$applyTo = (function (arglist__57168){
var args = cljs.core.seq(arglist__57168);
return G__57166__delegate(args);
});
G__57166.cljs$core$IFn$_invoke$arity$variadic = G__57166__delegate;
return G__57166;
})()
;

return null;
});
