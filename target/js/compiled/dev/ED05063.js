goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48184__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__48184 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48185__i = 0, G__48185__a = new Array(arguments.length -  0);
while (G__48185__i < G__48185__a.length) {G__48185__a[G__48185__i] = arguments[G__48185__i + 0]; ++G__48185__i;}
  args = new cljs.core.IndexedSeq(G__48185__a,0,null);
} 
return G__48184__delegate.call(this,args);};
G__48184.cljs$lang$maxFixedArity = 0;
G__48184.cljs$lang$applyTo = (function (arglist__48186){
var args = cljs.core.seq(arglist__48186);
return G__48184__delegate(args);
});
G__48184.cljs$core$IFn$_invoke$arity$variadic = G__48184__delegate;
return G__48184;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__48187__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__48187 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48188__i = 0, G__48188__a = new Array(arguments.length -  0);
while (G__48188__i < G__48188__a.length) {G__48188__a[G__48188__i] = arguments[G__48188__i + 0]; ++G__48188__i;}
  args = new cljs.core.IndexedSeq(G__48188__a,0,null);
} 
return G__48187__delegate.call(this,args);};
G__48187.cljs$lang$maxFixedArity = 0;
G__48187.cljs$lang$applyTo = (function (arglist__48189){
var args = cljs.core.seq(arglist__48189);
return G__48187__delegate(args);
});
G__48187.cljs$core$IFn$_invoke$arity$variadic = G__48187__delegate;
return G__48187;
})()
;

return null;
});
