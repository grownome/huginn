goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38847__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38847 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38848__i = 0, G__38848__a = new Array(arguments.length -  0);
while (G__38848__i < G__38848__a.length) {G__38848__a[G__38848__i] = arguments[G__38848__i + 0]; ++G__38848__i;}
  args = new cljs.core.IndexedSeq(G__38848__a,0,null);
} 
return G__38847__delegate.call(this,args);};
G__38847.cljs$lang$maxFixedArity = 0;
G__38847.cljs$lang$applyTo = (function (arglist__38849){
var args = cljs.core.seq(arglist__38849);
return G__38847__delegate(args);
});
G__38847.cljs$core$IFn$_invoke$arity$variadic = G__38847__delegate;
return G__38847;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38850__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38850 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38851__i = 0, G__38851__a = new Array(arguments.length -  0);
while (G__38851__i < G__38851__a.length) {G__38851__a[G__38851__i] = arguments[G__38851__i + 0]; ++G__38851__i;}
  args = new cljs.core.IndexedSeq(G__38851__a,0,null);
} 
return G__38850__delegate.call(this,args);};
G__38850.cljs$lang$maxFixedArity = 0;
G__38850.cljs$lang$applyTo = (function (arglist__38852){
var args = cljs.core.seq(arglist__38852);
return G__38850__delegate(args);
});
G__38850.cljs$core$IFn$_invoke$arity$variadic = G__38850__delegate;
return G__38850;
})()
;

return null;
});
