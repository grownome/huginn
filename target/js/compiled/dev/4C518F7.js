goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37961__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37962__i = 0, G__37962__a = new Array(arguments.length -  0);
while (G__37962__i < G__37962__a.length) {G__37962__a[G__37962__i] = arguments[G__37962__i + 0]; ++G__37962__i;}
  args = new cljs.core.IndexedSeq(G__37962__a,0,null);
} 
return G__37961__delegate.call(this,args);};
G__37961.cljs$lang$maxFixedArity = 0;
G__37961.cljs$lang$applyTo = (function (arglist__37963){
var args = cljs.core.seq(arglist__37963);
return G__37961__delegate(args);
});
G__37961.cljs$core$IFn$_invoke$arity$variadic = G__37961__delegate;
return G__37961;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37964__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37965__i = 0, G__37965__a = new Array(arguments.length -  0);
while (G__37965__i < G__37965__a.length) {G__37965__a[G__37965__i] = arguments[G__37965__i + 0]; ++G__37965__i;}
  args = new cljs.core.IndexedSeq(G__37965__a,0,null);
} 
return G__37964__delegate.call(this,args);};
G__37964.cljs$lang$maxFixedArity = 0;
G__37964.cljs$lang$applyTo = (function (arglist__37966){
var args = cljs.core.seq(arglist__37966);
return G__37964__delegate(args);
});
G__37964.cljs$core$IFn$_invoke$arity$variadic = G__37964__delegate;
return G__37964;
})()
;

return null;
});
