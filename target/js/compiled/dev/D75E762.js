goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47966__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47967__i = 0, G__47967__a = new Array(arguments.length -  0);
while (G__47967__i < G__47967__a.length) {G__47967__a[G__47967__i] = arguments[G__47967__i + 0]; ++G__47967__i;}
  args = new cljs.core.IndexedSeq(G__47967__a,0,null);
} 
return G__47966__delegate.call(this,args);};
G__47966.cljs$lang$maxFixedArity = 0;
G__47966.cljs$lang$applyTo = (function (arglist__47968){
var args = cljs.core.seq(arglist__47968);
return G__47966__delegate(args);
});
G__47966.cljs$core$IFn$_invoke$arity$variadic = G__47966__delegate;
return G__47966;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__47969__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__47969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47970__i = 0, G__47970__a = new Array(arguments.length -  0);
while (G__47970__i < G__47970__a.length) {G__47970__a[G__47970__i] = arguments[G__47970__i + 0]; ++G__47970__i;}
  args = new cljs.core.IndexedSeq(G__47970__a,0,null);
} 
return G__47969__delegate.call(this,args);};
G__47969.cljs$lang$maxFixedArity = 0;
G__47969.cljs$lang$applyTo = (function (arglist__47971){
var args = cljs.core.seq(arglist__47971);
return G__47969__delegate(args);
});
G__47969.cljs$core$IFn$_invoke$arity$variadic = G__47969__delegate;
return G__47969;
})()
;

return null;
});
