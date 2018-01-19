goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67812__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67812 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67813__i = 0, G__67813__a = new Array(arguments.length -  0);
while (G__67813__i < G__67813__a.length) {G__67813__a[G__67813__i] = arguments[G__67813__i + 0]; ++G__67813__i;}
  args = new cljs.core.IndexedSeq(G__67813__a,0,null);
} 
return G__67812__delegate.call(this,args);};
G__67812.cljs$lang$maxFixedArity = 0;
G__67812.cljs$lang$applyTo = (function (arglist__67814){
var args = cljs.core.seq(arglist__67814);
return G__67812__delegate(args);
});
G__67812.cljs$core$IFn$_invoke$arity$variadic = G__67812__delegate;
return G__67812;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67815__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67816__i = 0, G__67816__a = new Array(arguments.length -  0);
while (G__67816__i < G__67816__a.length) {G__67816__a[G__67816__i] = arguments[G__67816__i + 0]; ++G__67816__i;}
  args = new cljs.core.IndexedSeq(G__67816__a,0,null);
} 
return G__67815__delegate.call(this,args);};
G__67815.cljs$lang$maxFixedArity = 0;
G__67815.cljs$lang$applyTo = (function (arglist__67817){
var args = cljs.core.seq(arglist__67817);
return G__67815__delegate(args);
});
G__67815.cljs$core$IFn$_invoke$arity$variadic = G__67815__delegate;
return G__67815;
})()
;

return null;
});
