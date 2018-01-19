goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67897__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67898__i = 0, G__67898__a = new Array(arguments.length -  0);
while (G__67898__i < G__67898__a.length) {G__67898__a[G__67898__i] = arguments[G__67898__i + 0]; ++G__67898__i;}
  args = new cljs.core.IndexedSeq(G__67898__a,0,null);
} 
return G__67897__delegate.call(this,args);};
G__67897.cljs$lang$maxFixedArity = 0;
G__67897.cljs$lang$applyTo = (function (arglist__67899){
var args = cljs.core.seq(arglist__67899);
return G__67897__delegate(args);
});
G__67897.cljs$core$IFn$_invoke$arity$variadic = G__67897__delegate;
return G__67897;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67900__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67900 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67901__i = 0, G__67901__a = new Array(arguments.length -  0);
while (G__67901__i < G__67901__a.length) {G__67901__a[G__67901__i] = arguments[G__67901__i + 0]; ++G__67901__i;}
  args = new cljs.core.IndexedSeq(G__67901__a,0,null);
} 
return G__67900__delegate.call(this,args);};
G__67900.cljs$lang$maxFixedArity = 0;
G__67900.cljs$lang$applyTo = (function (arglist__67902){
var args = cljs.core.seq(arglist__67902);
return G__67900__delegate(args);
});
G__67900.cljs$core$IFn$_invoke$arity$variadic = G__67900__delegate;
return G__67900;
})()
;

return null;
});
