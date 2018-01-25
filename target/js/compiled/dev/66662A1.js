goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44791__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44791 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44792__i = 0, G__44792__a = new Array(arguments.length -  0);
while (G__44792__i < G__44792__a.length) {G__44792__a[G__44792__i] = arguments[G__44792__i + 0]; ++G__44792__i;}
  args = new cljs.core.IndexedSeq(G__44792__a,0,null);
} 
return G__44791__delegate.call(this,args);};
G__44791.cljs$lang$maxFixedArity = 0;
G__44791.cljs$lang$applyTo = (function (arglist__44793){
var args = cljs.core.seq(arglist__44793);
return G__44791__delegate(args);
});
G__44791.cljs$core$IFn$_invoke$arity$variadic = G__44791__delegate;
return G__44791;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44794__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44794 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44795__i = 0, G__44795__a = new Array(arguments.length -  0);
while (G__44795__i < G__44795__a.length) {G__44795__a[G__44795__i] = arguments[G__44795__i + 0]; ++G__44795__i;}
  args = new cljs.core.IndexedSeq(G__44795__a,0,null);
} 
return G__44794__delegate.call(this,args);};
G__44794.cljs$lang$maxFixedArity = 0;
G__44794.cljs$lang$applyTo = (function (arglist__44796){
var args = cljs.core.seq(arglist__44796);
return G__44794__delegate(args);
});
G__44794.cljs$core$IFn$_invoke$arity$variadic = G__44794__delegate;
return G__44794;
})()
;

return null;
});
