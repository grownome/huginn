goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38115__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38115 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38116__i = 0, G__38116__a = new Array(arguments.length -  0);
while (G__38116__i < G__38116__a.length) {G__38116__a[G__38116__i] = arguments[G__38116__i + 0]; ++G__38116__i;}
  args = new cljs.core.IndexedSeq(G__38116__a,0,null);
} 
return G__38115__delegate.call(this,args);};
G__38115.cljs$lang$maxFixedArity = 0;
G__38115.cljs$lang$applyTo = (function (arglist__38117){
var args = cljs.core.seq(arglist__38117);
return G__38115__delegate(args);
});
G__38115.cljs$core$IFn$_invoke$arity$variadic = G__38115__delegate;
return G__38115;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38118__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38118 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38119__i = 0, G__38119__a = new Array(arguments.length -  0);
while (G__38119__i < G__38119__a.length) {G__38119__a[G__38119__i] = arguments[G__38119__i + 0]; ++G__38119__i;}
  args = new cljs.core.IndexedSeq(G__38119__a,0,null);
} 
return G__38118__delegate.call(this,args);};
G__38118.cljs$lang$maxFixedArity = 0;
G__38118.cljs$lang$applyTo = (function (arglist__38120){
var args = cljs.core.seq(arglist__38120);
return G__38118__delegate(args);
});
G__38118.cljs$core$IFn$_invoke$arity$variadic = G__38118__delegate;
return G__38118;
})()
;

return null;
});
