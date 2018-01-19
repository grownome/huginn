goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67829__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67829 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67830__i = 0, G__67830__a = new Array(arguments.length -  0);
while (G__67830__i < G__67830__a.length) {G__67830__a[G__67830__i] = arguments[G__67830__i + 0]; ++G__67830__i;}
  args = new cljs.core.IndexedSeq(G__67830__a,0,null);
} 
return G__67829__delegate.call(this,args);};
G__67829.cljs$lang$maxFixedArity = 0;
G__67829.cljs$lang$applyTo = (function (arglist__67831){
var args = cljs.core.seq(arglist__67831);
return G__67829__delegate(args);
});
G__67829.cljs$core$IFn$_invoke$arity$variadic = G__67829__delegate;
return G__67829;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67832__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67832 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67833__i = 0, G__67833__a = new Array(arguments.length -  0);
while (G__67833__i < G__67833__a.length) {G__67833__a[G__67833__i] = arguments[G__67833__i + 0]; ++G__67833__i;}
  args = new cljs.core.IndexedSeq(G__67833__a,0,null);
} 
return G__67832__delegate.call(this,args);};
G__67832.cljs$lang$maxFixedArity = 0;
G__67832.cljs$lang$applyTo = (function (arglist__67834){
var args = cljs.core.seq(arglist__67834);
return G__67832__delegate(args);
});
G__67832.cljs$core$IFn$_invoke$arity$variadic = G__67832__delegate;
return G__67832;
})()
;

return null;
});
