// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53083__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53083 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53084__i = 0, G__53084__a = new Array(arguments.length -  0);
while (G__53084__i < G__53084__a.length) {G__53084__a[G__53084__i] = arguments[G__53084__i + 0]; ++G__53084__i;}
  args = new cljs.core.IndexedSeq(G__53084__a,0,null);
} 
return G__53083__delegate.call(this,args);};
G__53083.cljs$lang$maxFixedArity = 0;
G__53083.cljs$lang$applyTo = (function (arglist__53085){
var args = cljs.core.seq(arglist__53085);
return G__53083__delegate(args);
});
G__53083.cljs$core$IFn$_invoke$arity$variadic = G__53083__delegate;
return G__53083;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53086__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53086 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53087__i = 0, G__53087__a = new Array(arguments.length -  0);
while (G__53087__i < G__53087__a.length) {G__53087__a[G__53087__i] = arguments[G__53087__i + 0]; ++G__53087__i;}
  args = new cljs.core.IndexedSeq(G__53087__a,0,null);
} 
return G__53086__delegate.call(this,args);};
G__53086.cljs$lang$maxFixedArity = 0;
G__53086.cljs$lang$applyTo = (function (arglist__53088){
var args = cljs.core.seq(arglist__53088);
return G__53086__delegate(args);
});
G__53086.cljs$core$IFn$_invoke$arity$variadic = G__53086__delegate;
return G__53086;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map?rel=1516433048812
