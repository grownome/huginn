goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37073__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37074__i = 0, G__37074__a = new Array(arguments.length -  0);
while (G__37074__i < G__37074__a.length) {G__37074__a[G__37074__i] = arguments[G__37074__i + 0]; ++G__37074__i;}
  args = new cljs.core.IndexedSeq(G__37074__a,0,null);
} 
return G__37073__delegate.call(this,args);};
G__37073.cljs$lang$maxFixedArity = 0;
G__37073.cljs$lang$applyTo = (function (arglist__37075){
var args = cljs.core.seq(arglist__37075);
return G__37073__delegate(args);
});
G__37073.cljs$core$IFn$_invoke$arity$variadic = G__37073__delegate;
return G__37073;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37076__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37076 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37077__i = 0, G__37077__a = new Array(arguments.length -  0);
while (G__37077__i < G__37077__a.length) {G__37077__a[G__37077__i] = arguments[G__37077__i + 0]; ++G__37077__i;}
  args = new cljs.core.IndexedSeq(G__37077__a,0,null);
} 
return G__37076__delegate.call(this,args);};
G__37076.cljs$lang$maxFixedArity = 0;
G__37076.cljs$lang$applyTo = (function (arglist__37078){
var args = cljs.core.seq(arglist__37078);
return G__37076__delegate(args);
});
G__37076.cljs$core$IFn$_invoke$arity$variadic = G__37076__delegate;
return G__37076;
})()
;

return null;
});
