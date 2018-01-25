// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44537__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44537 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44538__i = 0, G__44538__a = new Array(arguments.length -  0);
while (G__44538__i < G__44538__a.length) {G__44538__a[G__44538__i] = arguments[G__44538__i + 0]; ++G__44538__i;}
  args = new cljs.core.IndexedSeq(G__44538__a,0,null);
} 
return G__44537__delegate.call(this,args);};
G__44537.cljs$lang$maxFixedArity = 0;
G__44537.cljs$lang$applyTo = (function (arglist__44539){
var args = cljs.core.seq(arglist__44539);
return G__44537__delegate(args);
});
G__44537.cljs$core$IFn$_invoke$arity$variadic = G__44537__delegate;
return G__44537;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44540__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44541__i = 0, G__44541__a = new Array(arguments.length -  0);
while (G__44541__i < G__44541__a.length) {G__44541__a[G__44541__i] = arguments[G__44541__i + 0]; ++G__44541__i;}
  args = new cljs.core.IndexedSeq(G__44541__a,0,null);
} 
return G__44540__delegate.call(this,args);};
G__44540.cljs$lang$maxFixedArity = 0;
G__44540.cljs$lang$applyTo = (function (arglist__44542){
var args = cljs.core.seq(arglist__44542);
return G__44540__delegate(args);
});
G__44540.cljs$core$IFn$_invoke$arity$variadic = G__44540__delegate;
return G__44540;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map
