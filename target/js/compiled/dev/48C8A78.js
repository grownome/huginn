goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37807__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37808__i = 0, G__37808__a = new Array(arguments.length -  0);
while (G__37808__i < G__37808__a.length) {G__37808__a[G__37808__i] = arguments[G__37808__i + 0]; ++G__37808__i;}
  args = new cljs.core.IndexedSeq(G__37808__a,0,null);
} 
return G__37807__delegate.call(this,args);};
G__37807.cljs$lang$maxFixedArity = 0;
G__37807.cljs$lang$applyTo = (function (arglist__37809){
var args = cljs.core.seq(arglist__37809);
return G__37807__delegate(args);
});
G__37807.cljs$core$IFn$_invoke$arity$variadic = G__37807__delegate;
return G__37807;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37810__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37810 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37811__i = 0, G__37811__a = new Array(arguments.length -  0);
while (G__37811__i < G__37811__a.length) {G__37811__a[G__37811__i] = arguments[G__37811__i + 0]; ++G__37811__i;}
  args = new cljs.core.IndexedSeq(G__37811__a,0,null);
} 
return G__37810__delegate.call(this,args);};
G__37810.cljs$lang$maxFixedArity = 0;
G__37810.cljs$lang$applyTo = (function (arglist__37812){
var args = cljs.core.seq(arglist__37812);
return G__37810__delegate(args);
});
G__37810.cljs$core$IFn$_invoke$arity$variadic = G__37810__delegate;
return G__37810;
})()
;

return null;
});
