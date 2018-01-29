// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32538__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32538 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32539__i = 0, G__32539__a = new Array(arguments.length -  0);
while (G__32539__i < G__32539__a.length) {G__32539__a[G__32539__i] = arguments[G__32539__i + 0]; ++G__32539__i;}
  args = new cljs.core.IndexedSeq(G__32539__a,0,null);
} 
return G__32538__delegate.call(this,args);};
G__32538.cljs$lang$maxFixedArity = 0;
G__32538.cljs$lang$applyTo = (function (arglist__32540){
var args = cljs.core.seq(arglist__32540);
return G__32538__delegate(args);
});
G__32538.cljs$core$IFn$_invoke$arity$variadic = G__32538__delegate;
return G__32538;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32541__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32541 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32542__i = 0, G__32542__a = new Array(arguments.length -  0);
while (G__32542__i < G__32542__a.length) {G__32542__a[G__32542__i] = arguments[G__32542__i + 0]; ++G__32542__i;}
  args = new cljs.core.IndexedSeq(G__32542__a,0,null);
} 
return G__32541__delegate.call(this,args);};
G__32541.cljs$lang$maxFixedArity = 0;
G__32541.cljs$lang$applyTo = (function (arglist__32543){
var args = cljs.core.seq(arglist__32543);
return G__32541__delegate(args);
});
G__32541.cljs$core$IFn$_invoke$arity$variadic = G__32541__delegate;
return G__32541;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map
