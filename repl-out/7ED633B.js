goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63863__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63864__i = 0, G__63864__a = new Array(arguments.length -  0);
while (G__63864__i < G__63864__a.length) {G__63864__a[G__63864__i] = arguments[G__63864__i + 0]; ++G__63864__i;}
  args = new cljs.core.IndexedSeq(G__63864__a,0,null);
} 
return G__63863__delegate.call(this,args);};
G__63863.cljs$lang$maxFixedArity = 0;
G__63863.cljs$lang$applyTo = (function (arglist__63865){
var args = cljs.core.seq(arglist__63865);
return G__63863__delegate(args);
});
G__63863.cljs$core$IFn$_invoke$arity$variadic = G__63863__delegate;
return G__63863;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63866__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63867__i = 0, G__63867__a = new Array(arguments.length -  0);
while (G__63867__i < G__63867__a.length) {G__63867__a[G__63867__i] = arguments[G__63867__i + 0]; ++G__63867__i;}
  args = new cljs.core.IndexedSeq(G__63867__a,0,null);
} 
return G__63866__delegate.call(this,args);};
G__63866.cljs$lang$maxFixedArity = 0;
G__63866.cljs$lang$applyTo = (function (arglist__63868){
var args = cljs.core.seq(arglist__63868);
return G__63866__delegate(args);
});
G__63866.cljs$core$IFn$_invoke$arity$variadic = G__63866__delegate;
return G__63866;
})()
;

return null;
});
