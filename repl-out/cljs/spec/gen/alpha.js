// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__21873__auto__,writer__21874__auto__,opt__21875__auto__){
return cljs.core._write.call(null,writer__21874__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__22488__auto__ = [];
var len__22481__auto___64956 = arguments.length;
var i__22482__auto___64957 = (0);
while(true){
if((i__22482__auto___64957 < len__22481__auto___64956)){
args__22488__auto__.push((arguments[i__22482__auto___64957]));

var G__64958 = (i__22482__auto___64957 + (1));
i__22482__auto___64957 = G__64958;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq64955){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64955));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__22488__auto__ = [];
var len__22481__auto___64960 = arguments.length;
var i__22482__auto___64961 = (0);
while(true){
if((i__22482__auto___64961 < len__22481__auto___64960)){
args__22488__auto__.push((arguments[i__22482__auto___64961]));

var G__64962 = (i__22482__auto___64961 + (1));
i__22482__auto___64961 = G__64962;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq64959){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64959));
});

var g_QMARK__64963 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_64964 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__64963){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__64963))
,null));
var mkg_64965 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__64963,g_64964){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__64963,g_64964))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__64963,g_64964,mkg_64965){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__64963).call(null,x);
});})(g_QMARK__64963,g_64964,mkg_64965))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__64963,g_64964,mkg_64965){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_64965).call(null,gfn);
});})(g_QMARK__64963,g_64964,mkg_64965))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__64963,g_64964,mkg_64965){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_64964).call(null,generator);
});})(g_QMARK__64963,g_64964,mkg_64965))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__22584__auto___64985 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__22584__auto___64985){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__22488__auto__ = [];
var len__22481__auto___64986 = arguments.length;
var i__22482__auto___64987 = (0);
while(true){
if((i__22482__auto___64987 < len__22481__auto___64986)){
args__22488__auto__.push((arguments[i__22482__auto___64987]));

var G__64988 = (i__22482__auto___64987 + (1));
i__22482__auto___64987 = G__64988;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22584__auto___64985))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22584__auto___64985){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22584__auto___64985),args);
});})(g__22584__auto___64985))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__22584__auto___64985){
return (function (seq64966){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64966));
});})(g__22584__auto___64985))
;


var g__22584__auto___64989 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__22584__auto___64989){
return (function cljs$spec$gen$alpha$list(var_args){
var args__22488__auto__ = [];
var len__22481__auto___64990 = arguments.length;
var i__22482__auto___64991 = (0);
while(true){
if((i__22482__auto___64991 < len__22481__auto___64990)){
args__22488__auto__.push((arguments[i__22482__auto___64991]));

var G__64992 = (i__22482__auto___64991 + (1));
i__22482__auto___64991 = G__64992;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22584__auto___64989))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22584__auto___64989){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22584__auto___64989),args);
});})(g__22584__auto___64989))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__22584__auto___64989){
return (function (seq64967){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64967));
});})(g__22584__auto___64989))
;


var g__22584__auto___64993 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__22584__auto___64993){
return (function cljs$spec$gen$alpha$map(var_args){
var args__22488__auto__ = [];
var len__22481__auto___64994 = arguments.length;
var i__22482__auto___64995 = (0);
while(true){
if((i__22482__auto___64995 < len__22481__auto___64994)){
args__22488__auto__.push((arguments[i__22482__auto___64995]));

var G__64996 = (i__22482__auto___64995 + (1));
i__22482__auto___64995 = G__64996;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22584__auto___64993))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22584__auto___64993){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22584__auto___64993),args);
});})(g__22584__auto___64993))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__22584__auto___64993){
return (function (seq64968){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64968));
});})(g__22584__auto___64993))
;


var g__22584__auto___64997 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__22584__auto___64997){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__22488__auto__ = [];
var len__22481__auto___64998 = arguments.length;
var i__22482__auto___64999 = (0);
while(true){
if((i__22482__auto___64999 < len__22481__auto___64998)){
args__22488__auto__.push((arguments[i__22482__auto___64999]));

var G__65000 = (i__22482__auto___64999 + (1));
i__22482__auto___64999 = G__65000;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22584__auto___64997))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22584__auto___64997){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22584__auto___64997),args);
});})(g__22584__auto___64997))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__22584__auto___64997){
return (function (seq64969){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64969));
});})(g__22584__auto___64997))
;


var g__22584__auto___65001 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__22584__auto___65001){
return (function cljs$spec$gen$alpha$set(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65002 = arguments.length;
var i__22482__auto___65003 = (0);
while(true){
if((i__22482__auto___65003 < len__22481__auto___65002)){
args__22488__auto__.push((arguments[i__22482__auto___65003]));

var G__65004 = (i__22482__auto___65003 + (1));
i__22482__auto___65003 = G__65004;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22584__auto___65001))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22584__auto___65001){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22584__auto___65001),args);
});})(g__22584__auto___65001))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__22584__auto___65001){
return (function (seq64970){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64970));
});})(g__22584__auto___65001))
;


var g__22584__auto___65005 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__22584__auto___65005){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65006 = arguments.length;
var i__22482__auto___65007 = (0);
while(true){
if((i__22482__auto___65007 < len__22481__auto___65006)){
args__22488__auto__.push((arguments[i__22482__auto___65007]));

var G__65008 = (i__22482__auto___65007 + (1));
i__22482__auto___65007 = G__65008;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22584__auto___65005))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22584__auto___65005){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22584__auto___65005),args);
});})(g__22584__auto___65005))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__22584__auto___65005){
return (function (seq64971){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64971));
});})(g__22584__auto___65005))
;


var g__22584__auto___65009 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__22584__auto___65009){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65010 = arguments.length;
var i__22482__auto___65011 = (0);
while(true){
if((i__22482__auto___65011 < len__22481__auto___65010)){
args__22488__auto__.push((arguments[i__22482__auto___65011]));

var G__65012 = (i__22482__auto___65011 + (1));
i__22482__auto___65011 = G__65012;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22584__auto___65009))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22584__auto___65009){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22584__auto___65009),args);
});})(g__22584__auto___65009))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__22584__auto___65009){
return (function (seq64972){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64972));
});})(g__22584__auto___65009))
;


var g__22584__auto___65013 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__22584__auto___65013){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65014 = arguments.length;
var i__22482__auto___65015 = (0);
while(true){
if((i__22482__auto___65015 < len__22481__auto___65014)){
args__22488__auto__.push((arguments[i__22482__auto___65015]));

var G__65016 = (i__22482__auto___65015 + (1));
i__22482__auto___65015 = G__65016;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22584__auto___65013))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22584__auto___65013){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22584__auto___65013),args);
});})(g__22584__auto___65013))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__22584__auto___65013){
return (function (seq64973){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64973));
});})(g__22584__auto___65013))
;


var g__22584__auto___65017 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__22584__auto___65017){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65018 = arguments.length;
var i__22482__auto___65019 = (0);
while(true){
if((i__22482__auto___65019 < len__22481__auto___65018)){
args__22488__auto__.push((arguments[i__22482__auto___65019]));

var G__65020 = (i__22482__auto___65019 + (1));
i__22482__auto___65019 = G__65020;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22584__auto___65017))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22584__auto___65017){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22584__auto___65017),args);
});})(g__22584__auto___65017))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__22584__auto___65017){
return (function (seq64974){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64974));
});})(g__22584__auto___65017))
;


var g__22584__auto___65021 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__22584__auto___65021){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65022 = arguments.length;
var i__22482__auto___65023 = (0);
while(true){
if((i__22482__auto___65023 < len__22481__auto___65022)){
args__22488__auto__.push((arguments[i__22482__auto___65023]));

var G__65024 = (i__22482__auto___65023 + (1));
i__22482__auto___65023 = G__65024;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22584__auto___65021))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22584__auto___65021){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22584__auto___65021),args);
});})(g__22584__auto___65021))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__22584__auto___65021){
return (function (seq64975){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64975));
});})(g__22584__auto___65021))
;


var g__22584__auto___65025 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__22584__auto___65025){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65026 = arguments.length;
var i__22482__auto___65027 = (0);
while(true){
if((i__22482__auto___65027 < len__22481__auto___65026)){
args__22488__auto__.push((arguments[i__22482__auto___65027]));

var G__65028 = (i__22482__auto___65027 + (1));
i__22482__auto___65027 = G__65028;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22584__auto___65025))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22584__auto___65025){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22584__auto___65025),args);
});})(g__22584__auto___65025))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__22584__auto___65025){
return (function (seq64976){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64976));
});})(g__22584__auto___65025))
;


var g__22584__auto___65029 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__22584__auto___65029){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65030 = arguments.length;
var i__22482__auto___65031 = (0);
while(true){
if((i__22482__auto___65031 < len__22481__auto___65030)){
args__22488__auto__.push((arguments[i__22482__auto___65031]));

var G__65032 = (i__22482__auto___65031 + (1));
i__22482__auto___65031 = G__65032;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22584__auto___65029))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22584__auto___65029){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22584__auto___65029),args);
});})(g__22584__auto___65029))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__22584__auto___65029){
return (function (seq64977){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64977));
});})(g__22584__auto___65029))
;


var g__22584__auto___65033 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__22584__auto___65033){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65034 = arguments.length;
var i__22482__auto___65035 = (0);
while(true){
if((i__22482__auto___65035 < len__22481__auto___65034)){
args__22488__auto__.push((arguments[i__22482__auto___65035]));

var G__65036 = (i__22482__auto___65035 + (1));
i__22482__auto___65035 = G__65036;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22584__auto___65033))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22584__auto___65033){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22584__auto___65033),args);
});})(g__22584__auto___65033))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__22584__auto___65033){
return (function (seq64978){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64978));
});})(g__22584__auto___65033))
;


var g__22584__auto___65037 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__22584__auto___65037){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65038 = arguments.length;
var i__22482__auto___65039 = (0);
while(true){
if((i__22482__auto___65039 < len__22481__auto___65038)){
args__22488__auto__.push((arguments[i__22482__auto___65039]));

var G__65040 = (i__22482__auto___65039 + (1));
i__22482__auto___65039 = G__65040;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22584__auto___65037))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22584__auto___65037){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22584__auto___65037),args);
});})(g__22584__auto___65037))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__22584__auto___65037){
return (function (seq64979){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64979));
});})(g__22584__auto___65037))
;


var g__22584__auto___65041 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__22584__auto___65041){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65042 = arguments.length;
var i__22482__auto___65043 = (0);
while(true){
if((i__22482__auto___65043 < len__22481__auto___65042)){
args__22488__auto__.push((arguments[i__22482__auto___65043]));

var G__65044 = (i__22482__auto___65043 + (1));
i__22482__auto___65043 = G__65044;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22584__auto___65041))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22584__auto___65041){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22584__auto___65041),args);
});})(g__22584__auto___65041))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__22584__auto___65041){
return (function (seq64980){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64980));
});})(g__22584__auto___65041))
;


var g__22584__auto___65045 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__22584__auto___65045){
return (function cljs$spec$gen$alpha$return(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65046 = arguments.length;
var i__22482__auto___65047 = (0);
while(true){
if((i__22482__auto___65047 < len__22481__auto___65046)){
args__22488__auto__.push((arguments[i__22482__auto___65047]));

var G__65048 = (i__22482__auto___65047 + (1));
i__22482__auto___65047 = G__65048;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22584__auto___65045))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22584__auto___65045){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22584__auto___65045),args);
});})(g__22584__auto___65045))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__22584__auto___65045){
return (function (seq64981){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64981));
});})(g__22584__auto___65045))
;


var g__22584__auto___65049 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__22584__auto___65049){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65050 = arguments.length;
var i__22482__auto___65051 = (0);
while(true){
if((i__22482__auto___65051 < len__22481__auto___65050)){
args__22488__auto__.push((arguments[i__22482__auto___65051]));

var G__65052 = (i__22482__auto___65051 + (1));
i__22482__auto___65051 = G__65052;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22584__auto___65049))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22584__auto___65049){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22584__auto___65049),args);
});})(g__22584__auto___65049))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__22584__auto___65049){
return (function (seq64982){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64982));
});})(g__22584__auto___65049))
;


var g__22584__auto___65053 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__22584__auto___65053){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65054 = arguments.length;
var i__22482__auto___65055 = (0);
while(true){
if((i__22482__auto___65055 < len__22481__auto___65054)){
args__22488__auto__.push((arguments[i__22482__auto___65055]));

var G__65056 = (i__22482__auto___65055 + (1));
i__22482__auto___65055 = G__65056;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22584__auto___65053))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22584__auto___65053){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22584__auto___65053),args);
});})(g__22584__auto___65053))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__22584__auto___65053){
return (function (seq64983){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64983));
});})(g__22584__auto___65053))
;


var g__22584__auto___65057 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__22584__auto___65057){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65058 = arguments.length;
var i__22482__auto___65059 = (0);
while(true){
if((i__22482__auto___65059 < len__22481__auto___65058)){
args__22488__auto__.push((arguments[i__22482__auto___65059]));

var G__65060 = (i__22482__auto___65059 + (1));
i__22482__auto___65059 = G__65060;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22584__auto___65057))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22584__auto___65057){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22584__auto___65057),args);
});})(g__22584__auto___65057))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__22584__auto___65057){
return (function (seq64984){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64984));
});})(g__22584__auto___65057))
;

var g__22597__auto___65082 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__22597__auto___65082){
return (function cljs$spec$gen$alpha$any(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65083 = arguments.length;
var i__22482__auto___65084 = (0);
while(true){
if((i__22482__auto___65084 < len__22481__auto___65083)){
args__22488__auto__.push((arguments[i__22482__auto___65084]));

var G__65085 = (i__22482__auto___65084 + (1));
i__22482__auto___65084 = G__65085;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22597__auto___65082))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22597__auto___65082){
return (function (args){
return cljs.core.deref.call(null,g__22597__auto___65082);
});})(g__22597__auto___65082))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__22597__auto___65082){
return (function (seq65061){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65061));
});})(g__22597__auto___65082))
;


var g__22597__auto___65086 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__22597__auto___65086){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65087 = arguments.length;
var i__22482__auto___65088 = (0);
while(true){
if((i__22482__auto___65088 < len__22481__auto___65087)){
args__22488__auto__.push((arguments[i__22482__auto___65088]));

var G__65089 = (i__22482__auto___65088 + (1));
i__22482__auto___65088 = G__65089;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22597__auto___65086))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22597__auto___65086){
return (function (args){
return cljs.core.deref.call(null,g__22597__auto___65086);
});})(g__22597__auto___65086))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__22597__auto___65086){
return (function (seq65062){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65062));
});})(g__22597__auto___65086))
;


var g__22597__auto___65090 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__22597__auto___65090){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65091 = arguments.length;
var i__22482__auto___65092 = (0);
while(true){
if((i__22482__auto___65092 < len__22481__auto___65091)){
args__22488__auto__.push((arguments[i__22482__auto___65092]));

var G__65093 = (i__22482__auto___65092 + (1));
i__22482__auto___65092 = G__65093;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22597__auto___65090))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22597__auto___65090){
return (function (args){
return cljs.core.deref.call(null,g__22597__auto___65090);
});})(g__22597__auto___65090))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__22597__auto___65090){
return (function (seq65063){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65063));
});})(g__22597__auto___65090))
;


var g__22597__auto___65094 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__22597__auto___65094){
return (function cljs$spec$gen$alpha$char(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65095 = arguments.length;
var i__22482__auto___65096 = (0);
while(true){
if((i__22482__auto___65096 < len__22481__auto___65095)){
args__22488__auto__.push((arguments[i__22482__auto___65096]));

var G__65097 = (i__22482__auto___65096 + (1));
i__22482__auto___65096 = G__65097;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22597__auto___65094))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22597__auto___65094){
return (function (args){
return cljs.core.deref.call(null,g__22597__auto___65094);
});})(g__22597__auto___65094))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__22597__auto___65094){
return (function (seq65064){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65064));
});})(g__22597__auto___65094))
;


var g__22597__auto___65098 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__22597__auto___65098){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65099 = arguments.length;
var i__22482__auto___65100 = (0);
while(true){
if((i__22482__auto___65100 < len__22481__auto___65099)){
args__22488__auto__.push((arguments[i__22482__auto___65100]));

var G__65101 = (i__22482__auto___65100 + (1));
i__22482__auto___65100 = G__65101;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22597__auto___65098))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22597__auto___65098){
return (function (args){
return cljs.core.deref.call(null,g__22597__auto___65098);
});})(g__22597__auto___65098))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__22597__auto___65098){
return (function (seq65065){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65065));
});})(g__22597__auto___65098))
;


var g__22597__auto___65102 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__22597__auto___65102){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65103 = arguments.length;
var i__22482__auto___65104 = (0);
while(true){
if((i__22482__auto___65104 < len__22481__auto___65103)){
args__22488__auto__.push((arguments[i__22482__auto___65104]));

var G__65105 = (i__22482__auto___65104 + (1));
i__22482__auto___65104 = G__65105;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22597__auto___65102))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22597__auto___65102){
return (function (args){
return cljs.core.deref.call(null,g__22597__auto___65102);
});})(g__22597__auto___65102))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__22597__auto___65102){
return (function (seq65066){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65066));
});})(g__22597__auto___65102))
;


var g__22597__auto___65106 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__22597__auto___65106){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65107 = arguments.length;
var i__22482__auto___65108 = (0);
while(true){
if((i__22482__auto___65108 < len__22481__auto___65107)){
args__22488__auto__.push((arguments[i__22482__auto___65108]));

var G__65109 = (i__22482__auto___65108 + (1));
i__22482__auto___65108 = G__65109;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22597__auto___65106))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22597__auto___65106){
return (function (args){
return cljs.core.deref.call(null,g__22597__auto___65106);
});})(g__22597__auto___65106))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__22597__auto___65106){
return (function (seq65067){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65067));
});})(g__22597__auto___65106))
;


var g__22597__auto___65110 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__22597__auto___65110){
return (function cljs$spec$gen$alpha$double(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65111 = arguments.length;
var i__22482__auto___65112 = (0);
while(true){
if((i__22482__auto___65112 < len__22481__auto___65111)){
args__22488__auto__.push((arguments[i__22482__auto___65112]));

var G__65113 = (i__22482__auto___65112 + (1));
i__22482__auto___65112 = G__65113;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22597__auto___65110))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22597__auto___65110){
return (function (args){
return cljs.core.deref.call(null,g__22597__auto___65110);
});})(g__22597__auto___65110))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__22597__auto___65110){
return (function (seq65068){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65068));
});})(g__22597__auto___65110))
;


var g__22597__auto___65114 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__22597__auto___65114){
return (function cljs$spec$gen$alpha$int(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65115 = arguments.length;
var i__22482__auto___65116 = (0);
while(true){
if((i__22482__auto___65116 < len__22481__auto___65115)){
args__22488__auto__.push((arguments[i__22482__auto___65116]));

var G__65117 = (i__22482__auto___65116 + (1));
i__22482__auto___65116 = G__65117;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22597__auto___65114))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22597__auto___65114){
return (function (args){
return cljs.core.deref.call(null,g__22597__auto___65114);
});})(g__22597__auto___65114))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__22597__auto___65114){
return (function (seq65069){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65069));
});})(g__22597__auto___65114))
;


var g__22597__auto___65118 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__22597__auto___65118){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65119 = arguments.length;
var i__22482__auto___65120 = (0);
while(true){
if((i__22482__auto___65120 < len__22481__auto___65119)){
args__22488__auto__.push((arguments[i__22482__auto___65120]));

var G__65121 = (i__22482__auto___65120 + (1));
i__22482__auto___65120 = G__65121;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22597__auto___65118))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22597__auto___65118){
return (function (args){
return cljs.core.deref.call(null,g__22597__auto___65118);
});})(g__22597__auto___65118))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__22597__auto___65118){
return (function (seq65070){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65070));
});})(g__22597__auto___65118))
;


var g__22597__auto___65122 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__22597__auto___65122){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65123 = arguments.length;
var i__22482__auto___65124 = (0);
while(true){
if((i__22482__auto___65124 < len__22481__auto___65123)){
args__22488__auto__.push((arguments[i__22482__auto___65124]));

var G__65125 = (i__22482__auto___65124 + (1));
i__22482__auto___65124 = G__65125;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22597__auto___65122))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22597__auto___65122){
return (function (args){
return cljs.core.deref.call(null,g__22597__auto___65122);
});})(g__22597__auto___65122))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__22597__auto___65122){
return (function (seq65071){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65071));
});})(g__22597__auto___65122))
;


var g__22597__auto___65126 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__22597__auto___65126){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65127 = arguments.length;
var i__22482__auto___65128 = (0);
while(true){
if((i__22482__auto___65128 < len__22481__auto___65127)){
args__22488__auto__.push((arguments[i__22482__auto___65128]));

var G__65129 = (i__22482__auto___65128 + (1));
i__22482__auto___65128 = G__65129;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22597__auto___65126))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22597__auto___65126){
return (function (args){
return cljs.core.deref.call(null,g__22597__auto___65126);
});})(g__22597__auto___65126))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__22597__auto___65126){
return (function (seq65072){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65072));
});})(g__22597__auto___65126))
;


var g__22597__auto___65130 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__22597__auto___65130){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65131 = arguments.length;
var i__22482__auto___65132 = (0);
while(true){
if((i__22482__auto___65132 < len__22481__auto___65131)){
args__22488__auto__.push((arguments[i__22482__auto___65132]));

var G__65133 = (i__22482__auto___65132 + (1));
i__22482__auto___65132 = G__65133;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22597__auto___65130))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22597__auto___65130){
return (function (args){
return cljs.core.deref.call(null,g__22597__auto___65130);
});})(g__22597__auto___65130))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__22597__auto___65130){
return (function (seq65073){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65073));
});})(g__22597__auto___65130))
;


var g__22597__auto___65134 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__22597__auto___65134){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65135 = arguments.length;
var i__22482__auto___65136 = (0);
while(true){
if((i__22482__auto___65136 < len__22481__auto___65135)){
args__22488__auto__.push((arguments[i__22482__auto___65136]));

var G__65137 = (i__22482__auto___65136 + (1));
i__22482__auto___65136 = G__65137;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22597__auto___65134))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22597__auto___65134){
return (function (args){
return cljs.core.deref.call(null,g__22597__auto___65134);
});})(g__22597__auto___65134))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__22597__auto___65134){
return (function (seq65074){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65074));
});})(g__22597__auto___65134))
;


var g__22597__auto___65138 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__22597__auto___65138){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65139 = arguments.length;
var i__22482__auto___65140 = (0);
while(true){
if((i__22482__auto___65140 < len__22481__auto___65139)){
args__22488__auto__.push((arguments[i__22482__auto___65140]));

var G__65141 = (i__22482__auto___65140 + (1));
i__22482__auto___65140 = G__65141;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22597__auto___65138))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22597__auto___65138){
return (function (args){
return cljs.core.deref.call(null,g__22597__auto___65138);
});})(g__22597__auto___65138))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__22597__auto___65138){
return (function (seq65075){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65075));
});})(g__22597__auto___65138))
;


var g__22597__auto___65142 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__22597__auto___65142){
return (function cljs$spec$gen$alpha$string(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65143 = arguments.length;
var i__22482__auto___65144 = (0);
while(true){
if((i__22482__auto___65144 < len__22481__auto___65143)){
args__22488__auto__.push((arguments[i__22482__auto___65144]));

var G__65145 = (i__22482__auto___65144 + (1));
i__22482__auto___65144 = G__65145;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22597__auto___65142))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22597__auto___65142){
return (function (args){
return cljs.core.deref.call(null,g__22597__auto___65142);
});})(g__22597__auto___65142))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__22597__auto___65142){
return (function (seq65076){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65076));
});})(g__22597__auto___65142))
;


var g__22597__auto___65146 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__22597__auto___65146){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65147 = arguments.length;
var i__22482__auto___65148 = (0);
while(true){
if((i__22482__auto___65148 < len__22481__auto___65147)){
args__22488__auto__.push((arguments[i__22482__auto___65148]));

var G__65149 = (i__22482__auto___65148 + (1));
i__22482__auto___65148 = G__65149;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22597__auto___65146))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22597__auto___65146){
return (function (args){
return cljs.core.deref.call(null,g__22597__auto___65146);
});})(g__22597__auto___65146))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__22597__auto___65146){
return (function (seq65077){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65077));
});})(g__22597__auto___65146))
;


var g__22597__auto___65150 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__22597__auto___65150){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65151 = arguments.length;
var i__22482__auto___65152 = (0);
while(true){
if((i__22482__auto___65152 < len__22481__auto___65151)){
args__22488__auto__.push((arguments[i__22482__auto___65152]));

var G__65153 = (i__22482__auto___65152 + (1));
i__22482__auto___65152 = G__65153;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22597__auto___65150))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22597__auto___65150){
return (function (args){
return cljs.core.deref.call(null,g__22597__auto___65150);
});})(g__22597__auto___65150))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__22597__auto___65150){
return (function (seq65078){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65078));
});})(g__22597__auto___65150))
;


var g__22597__auto___65154 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__22597__auto___65154){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65155 = arguments.length;
var i__22482__auto___65156 = (0);
while(true){
if((i__22482__auto___65156 < len__22481__auto___65155)){
args__22488__auto__.push((arguments[i__22482__auto___65156]));

var G__65157 = (i__22482__auto___65156 + (1));
i__22482__auto___65156 = G__65157;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22597__auto___65154))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22597__auto___65154){
return (function (args){
return cljs.core.deref.call(null,g__22597__auto___65154);
});})(g__22597__auto___65154))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__22597__auto___65154){
return (function (seq65079){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65079));
});})(g__22597__auto___65154))
;


var g__22597__auto___65158 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__22597__auto___65158){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65159 = arguments.length;
var i__22482__auto___65160 = (0);
while(true){
if((i__22482__auto___65160 < len__22481__auto___65159)){
args__22488__auto__.push((arguments[i__22482__auto___65160]));

var G__65161 = (i__22482__auto___65160 + (1));
i__22482__auto___65160 = G__65161;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22597__auto___65158))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22597__auto___65158){
return (function (args){
return cljs.core.deref.call(null,g__22597__auto___65158);
});})(g__22597__auto___65158))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__22597__auto___65158){
return (function (seq65080){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65080));
});})(g__22597__auto___65158))
;


var g__22597__auto___65162 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__22597__auto___65162){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65163 = arguments.length;
var i__22482__auto___65164 = (0);
while(true){
if((i__22482__auto___65164 < len__22481__auto___65163)){
args__22488__auto__.push((arguments[i__22482__auto___65164]));

var G__65165 = (i__22482__auto___65164 + (1));
i__22482__auto___65164 = G__65165;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});})(g__22597__auto___65162))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22597__auto___65162){
return (function (args){
return cljs.core.deref.call(null,g__22597__auto___65162);
});})(g__22597__auto___65162))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__22597__auto___65162){
return (function (seq65081){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65081));
});})(g__22597__auto___65162))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__22488__auto__ = [];
var len__22481__auto___65168 = arguments.length;
var i__22482__auto___65169 = (0);
while(true){
if((i__22482__auto___65169 < len__22481__auto___65168)){
args__22488__auto__.push((arguments[i__22482__auto___65169]));

var G__65170 = (i__22482__auto___65169 + (1));
i__22482__auto___65169 = G__65170;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__65166_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__65166_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq65167){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65167));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__65171_SHARP_){
return (new Date(p1__65171_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
