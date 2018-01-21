// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44536__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44536 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44537__i = 0, G__44537__a = new Array(arguments.length -  0);
while (G__44537__i < G__44537__a.length) {G__44537__a[G__44537__i] = arguments[G__44537__i + 0]; ++G__44537__i;}
  args = new cljs.core.IndexedSeq(G__44537__a,0,null);
} 
return G__44536__delegate.call(this,args);};
G__44536.cljs$lang$maxFixedArity = 0;
G__44536.cljs$lang$applyTo = (function (arglist__44538){
var args = cljs.core.seq(arglist__44538);
return G__44536__delegate(args);
});
G__44536.cljs$core$IFn$_invoke$arity$variadic = G__44536__delegate;
return G__44536;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44539__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44539 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44540__i = 0, G__44540__a = new Array(arguments.length -  0);
while (G__44540__i < G__44540__a.length) {G__44540__a[G__44540__i] = arguments[G__44540__i + 0]; ++G__44540__i;}
  args = new cljs.core.IndexedSeq(G__44540__a,0,null);
} 
return G__44539__delegate.call(this,args);};
G__44539.cljs$lang$maxFixedArity = 0;
G__44539.cljs$lang$applyTo = (function (arglist__44541){
var args = cljs.core.seq(arglist__44541);
return G__44539__delegate(args);
});
G__44539.cljs$core$IFn$_invoke$arity$variadic = G__44539__delegate;
return G__44539;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map
