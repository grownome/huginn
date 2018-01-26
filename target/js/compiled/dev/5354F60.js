goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38278__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38279__i = 0, G__38279__a = new Array(arguments.length -  0);
while (G__38279__i < G__38279__a.length) {G__38279__a[G__38279__i] = arguments[G__38279__i + 0]; ++G__38279__i;}
  args = new cljs.core.IndexedSeq(G__38279__a,0,null);
} 
return G__38278__delegate.call(this,args);};
G__38278.cljs$lang$maxFixedArity = 0;
G__38278.cljs$lang$applyTo = (function (arglist__38280){
var args = cljs.core.seq(arglist__38280);
return G__38278__delegate(args);
});
G__38278.cljs$core$IFn$_invoke$arity$variadic = G__38278__delegate;
return G__38278;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38281__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38281 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38282__i = 0, G__38282__a = new Array(arguments.length -  0);
while (G__38282__i < G__38282__a.length) {G__38282__a[G__38282__i] = arguments[G__38282__i + 0]; ++G__38282__i;}
  args = new cljs.core.IndexedSeq(G__38282__a,0,null);
} 
return G__38281__delegate.call(this,args);};
G__38281.cljs$lang$maxFixedArity = 0;
G__38281.cljs$lang$applyTo = (function (arglist__38283){
var args = cljs.core.seq(arglist__38283);
return G__38281__delegate(args);
});
G__38281.cljs$core$IFn$_invoke$arity$variadic = G__38281__delegate;
return G__38281;
})()
;

return null;
});
