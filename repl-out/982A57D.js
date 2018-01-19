goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67846__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67846 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67847__i = 0, G__67847__a = new Array(arguments.length -  0);
while (G__67847__i < G__67847__a.length) {G__67847__a[G__67847__i] = arguments[G__67847__i + 0]; ++G__67847__i;}
  args = new cljs.core.IndexedSeq(G__67847__a,0,null);
} 
return G__67846__delegate.call(this,args);};
G__67846.cljs$lang$maxFixedArity = 0;
G__67846.cljs$lang$applyTo = (function (arglist__67848){
var args = cljs.core.seq(arglist__67848);
return G__67846__delegate(args);
});
G__67846.cljs$core$IFn$_invoke$arity$variadic = G__67846__delegate;
return G__67846;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67849__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67849 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67850__i = 0, G__67850__a = new Array(arguments.length -  0);
while (G__67850__i < G__67850__a.length) {G__67850__a[G__67850__i] = arguments[G__67850__i + 0]; ++G__67850__i;}
  args = new cljs.core.IndexedSeq(G__67850__a,0,null);
} 
return G__67849__delegate.call(this,args);};
G__67849.cljs$lang$maxFixedArity = 0;
G__67849.cljs$lang$applyTo = (function (arglist__67851){
var args = cljs.core.seq(arglist__67851);
return G__67849__delegate(args);
});
G__67849.cljs$core$IFn$_invoke$arity$variadic = G__67849__delegate;
return G__67849;
})()
;

return null;
});
