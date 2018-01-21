goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__45239__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__45239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45240__i = 0, G__45240__a = new Array(arguments.length -  0);
while (G__45240__i < G__45240__a.length) {G__45240__a[G__45240__i] = arguments[G__45240__i + 0]; ++G__45240__i;}
  args = new cljs.core.IndexedSeq(G__45240__a,0,null);
} 
return G__45239__delegate.call(this,args);};
G__45239.cljs$lang$maxFixedArity = 0;
G__45239.cljs$lang$applyTo = (function (arglist__45241){
var args = cljs.core.seq(arglist__45241);
return G__45239__delegate(args);
});
G__45239.cljs$core$IFn$_invoke$arity$variadic = G__45239__delegate;
return G__45239;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__45242__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__45242 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45243__i = 0, G__45243__a = new Array(arguments.length -  0);
while (G__45243__i < G__45243__a.length) {G__45243__a[G__45243__i] = arguments[G__45243__i + 0]; ++G__45243__i;}
  args = new cljs.core.IndexedSeq(G__45243__a,0,null);
} 
return G__45242__delegate.call(this,args);};
G__45242.cljs$lang$maxFixedArity = 0;
G__45242.cljs$lang$applyTo = (function (arglist__45244){
var args = cljs.core.seq(arglist__45244);
return G__45242__delegate(args);
});
G__45242.cljs$core$IFn$_invoke$arity$variadic = G__45242__delegate;
return G__45242;
})()
;

return null;
});
