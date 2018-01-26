goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38518__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38518 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38519__i = 0, G__38519__a = new Array(arguments.length -  0);
while (G__38519__i < G__38519__a.length) {G__38519__a[G__38519__i] = arguments[G__38519__i + 0]; ++G__38519__i;}
  args = new cljs.core.IndexedSeq(G__38519__a,0,null);
} 
return G__38518__delegate.call(this,args);};
G__38518.cljs$lang$maxFixedArity = 0;
G__38518.cljs$lang$applyTo = (function (arglist__38520){
var args = cljs.core.seq(arglist__38520);
return G__38518__delegate(args);
});
G__38518.cljs$core$IFn$_invoke$arity$variadic = G__38518__delegate;
return G__38518;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38521__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38521 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38522__i = 0, G__38522__a = new Array(arguments.length -  0);
while (G__38522__i < G__38522__a.length) {G__38522__a[G__38522__i] = arguments[G__38522__i + 0]; ++G__38522__i;}
  args = new cljs.core.IndexedSeq(G__38522__a,0,null);
} 
return G__38521__delegate.call(this,args);};
G__38521.cljs$lang$maxFixedArity = 0;
G__38521.cljs$lang$applyTo = (function (arglist__38523){
var args = cljs.core.seq(arglist__38523);
return G__38521__delegate(args);
});
G__38521.cljs$core$IFn$_invoke$arity$variadic = G__38521__delegate;
return G__38521;
})()
;

return null;
});
