goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67863__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67864__i = 0, G__67864__a = new Array(arguments.length -  0);
while (G__67864__i < G__67864__a.length) {G__67864__a[G__67864__i] = arguments[G__67864__i + 0]; ++G__67864__i;}
  args = new cljs.core.IndexedSeq(G__67864__a,0,null);
} 
return G__67863__delegate.call(this,args);};
G__67863.cljs$lang$maxFixedArity = 0;
G__67863.cljs$lang$applyTo = (function (arglist__67865){
var args = cljs.core.seq(arglist__67865);
return G__67863__delegate(args);
});
G__67863.cljs$core$IFn$_invoke$arity$variadic = G__67863__delegate;
return G__67863;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67866__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67867__i = 0, G__67867__a = new Array(arguments.length -  0);
while (G__67867__i < G__67867__a.length) {G__67867__a[G__67867__i] = arguments[G__67867__i + 0]; ++G__67867__i;}
  args = new cljs.core.IndexedSeq(G__67867__a,0,null);
} 
return G__67866__delegate.call(this,args);};
G__67866.cljs$lang$maxFixedArity = 0;
G__67866.cljs$lang$applyTo = (function (arglist__67868){
var args = cljs.core.seq(arglist__67868);
return G__67866__delegate(args);
});
G__67866.cljs$core$IFn$_invoke$arity$variadic = G__67866__delegate;
return G__67866;
})()
;

return null;
});
