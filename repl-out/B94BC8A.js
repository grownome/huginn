goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__50951__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__50951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50952__i = 0, G__50952__a = new Array(arguments.length -  0);
while (G__50952__i < G__50952__a.length) {G__50952__a[G__50952__i] = arguments[G__50952__i + 0]; ++G__50952__i;}
  args = new cljs.core.IndexedSeq(G__50952__a,0,null);
} 
return G__50951__delegate.call(this,args);};
G__50951.cljs$lang$maxFixedArity = 0;
G__50951.cljs$lang$applyTo = (function (arglist__50953){
var args = cljs.core.seq(arglist__50953);
return G__50951__delegate(args);
});
G__50951.cljs$core$IFn$_invoke$arity$variadic = G__50951__delegate;
return G__50951;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__50954__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__50954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50955__i = 0, G__50955__a = new Array(arguments.length -  0);
while (G__50955__i < G__50955__a.length) {G__50955__a[G__50955__i] = arguments[G__50955__i + 0]; ++G__50955__i;}
  args = new cljs.core.IndexedSeq(G__50955__a,0,null);
} 
return G__50954__delegate.call(this,args);};
G__50954.cljs$lang$maxFixedArity = 0;
G__50954.cljs$lang$applyTo = (function (arglist__50956){
var args = cljs.core.seq(arglist__50956);
return G__50954__delegate(args);
});
G__50954.cljs$core$IFn$_invoke$arity$variadic = G__50954__delegate;
return G__50954;
})()
;

return null;
});
