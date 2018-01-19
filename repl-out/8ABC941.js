goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67778__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67778 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67779__i = 0, G__67779__a = new Array(arguments.length -  0);
while (G__67779__i < G__67779__a.length) {G__67779__a[G__67779__i] = arguments[G__67779__i + 0]; ++G__67779__i;}
  args = new cljs.core.IndexedSeq(G__67779__a,0,null);
} 
return G__67778__delegate.call(this,args);};
G__67778.cljs$lang$maxFixedArity = 0;
G__67778.cljs$lang$applyTo = (function (arglist__67780){
var args = cljs.core.seq(arglist__67780);
return G__67778__delegate(args);
});
G__67778.cljs$core$IFn$_invoke$arity$variadic = G__67778__delegate;
return G__67778;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67781__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67781 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67782__i = 0, G__67782__a = new Array(arguments.length -  0);
while (G__67782__i < G__67782__a.length) {G__67782__a[G__67782__i] = arguments[G__67782__i + 0]; ++G__67782__i;}
  args = new cljs.core.IndexedSeq(G__67782__a,0,null);
} 
return G__67781__delegate.call(this,args);};
G__67781.cljs$lang$maxFixedArity = 0;
G__67781.cljs$lang$applyTo = (function (arglist__67783){
var args = cljs.core.seq(arglist__67783);
return G__67781__delegate(args);
});
G__67781.cljs$core$IFn$_invoke$arity$variadic = G__67781__delegate;
return G__67781;
})()
;

return null;
});
