goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48620__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__48620 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48621__i = 0, G__48621__a = new Array(arguments.length -  0);
while (G__48621__i < G__48621__a.length) {G__48621__a[G__48621__i] = arguments[G__48621__i + 0]; ++G__48621__i;}
  args = new cljs.core.IndexedSeq(G__48621__a,0,null);
} 
return G__48620__delegate.call(this,args);};
G__48620.cljs$lang$maxFixedArity = 0;
G__48620.cljs$lang$applyTo = (function (arglist__48622){
var args = cljs.core.seq(arglist__48622);
return G__48620__delegate(args);
});
G__48620.cljs$core$IFn$_invoke$arity$variadic = G__48620__delegate;
return G__48620;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__48623__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__48623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48624__i = 0, G__48624__a = new Array(arguments.length -  0);
while (G__48624__i < G__48624__a.length) {G__48624__a[G__48624__i] = arguments[G__48624__i + 0]; ++G__48624__i;}
  args = new cljs.core.IndexedSeq(G__48624__a,0,null);
} 
return G__48623__delegate.call(this,args);};
G__48623.cljs$lang$maxFixedArity = 0;
G__48623.cljs$lang$applyTo = (function (arglist__48625){
var args = cljs.core.seq(arglist__48625);
return G__48623__delegate(args);
});
G__48623.cljs$core$IFn$_invoke$arity$variadic = G__48623__delegate;
return G__48623;
})()
;

return null;
});
