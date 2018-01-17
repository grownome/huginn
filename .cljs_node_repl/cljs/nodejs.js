// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24980__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24981__i = 0, G__24981__a = new Array(arguments.length -  0);
while (G__24981__i < G__24981__a.length) {G__24981__a[G__24981__i] = arguments[G__24981__i + 0]; ++G__24981__i;}
  args = new cljs.core.IndexedSeq(G__24981__a,0,null);
} 
return G__24980__delegate.call(this,args);};
G__24980.cljs$lang$maxFixedArity = 0;
G__24980.cljs$lang$applyTo = (function (arglist__24982){
var args = cljs.core.seq(arglist__24982);
return G__24980__delegate(args);
});
G__24980.cljs$core$IFn$_invoke$arity$variadic = G__24980__delegate;
return G__24980;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24983__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24983 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24984__i = 0, G__24984__a = new Array(arguments.length -  0);
while (G__24984__i < G__24984__a.length) {G__24984__a[G__24984__i] = arguments[G__24984__i + 0]; ++G__24984__i;}
  args = new cljs.core.IndexedSeq(G__24984__a,0,null);
} 
return G__24983__delegate.call(this,args);};
G__24983.cljs$lang$maxFixedArity = 0;
G__24983.cljs$lang$applyTo = (function (arglist__24985){
var args = cljs.core.seq(arglist__24985);
return G__24983__delegate(args);
});
G__24983.cljs$core$IFn$_invoke$arity$variadic = G__24983__delegate;
return G__24983;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map
