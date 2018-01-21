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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__42083__auto__,writer__42084__auto__,opt__42085__auto__){
return cljs.core._write.call(null,writer__42084__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__42698__auto__ = [];
var len__42691__auto___54026 = arguments.length;
var i__42692__auto___54027 = (0);
while(true){
if((i__42692__auto___54027 < len__42691__auto___54026)){
args__42698__auto__.push((arguments[i__42692__auto___54027]));

var G__54028 = (i__42692__auto___54027 + (1));
i__42692__auto___54027 = G__54028;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq54025){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54025));
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
var args__42698__auto__ = [];
var len__42691__auto___54030 = arguments.length;
var i__42692__auto___54031 = (0);
while(true){
if((i__42692__auto___54031 < len__42691__auto___54030)){
args__42698__auto__.push((arguments[i__42692__auto___54031]));

var G__54032 = (i__42692__auto___54031 + (1));
i__42692__auto___54031 = G__54032;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq54029){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54029));
});

var g_QMARK__54033 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_54034 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__54033){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__54033))
,null));
var mkg_54035 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__54033,g_54034){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__54033,g_54034))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__54033,g_54034,mkg_54035){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__54033).call(null,x);
});})(g_QMARK__54033,g_54034,mkg_54035))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__54033,g_54034,mkg_54035){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_54035).call(null,gfn);
});})(g_QMARK__54033,g_54034,mkg_54035))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__54033,g_54034,mkg_54035){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_54034).call(null,generator);
});})(g_QMARK__54033,g_54034,mkg_54035))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__53997__auto___54055 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__53997__auto___54055){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54056 = arguments.length;
var i__42692__auto___54057 = (0);
while(true){
if((i__42692__auto___54057 < len__42691__auto___54056)){
args__42698__auto__.push((arguments[i__42692__auto___54057]));

var G__54058 = (i__42692__auto___54057 + (1));
i__42692__auto___54057 = G__54058;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__53997__auto___54055))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53997__auto___54055){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53997__auto___54055),args);
});})(g__53997__auto___54055))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__53997__auto___54055){
return (function (seq54036){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54036));
});})(g__53997__auto___54055))
;


var g__53997__auto___54059 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__53997__auto___54059){
return (function cljs$spec$gen$alpha$list(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54060 = arguments.length;
var i__42692__auto___54061 = (0);
while(true){
if((i__42692__auto___54061 < len__42691__auto___54060)){
args__42698__auto__.push((arguments[i__42692__auto___54061]));

var G__54062 = (i__42692__auto___54061 + (1));
i__42692__auto___54061 = G__54062;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__53997__auto___54059))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53997__auto___54059){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53997__auto___54059),args);
});})(g__53997__auto___54059))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__53997__auto___54059){
return (function (seq54037){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54037));
});})(g__53997__auto___54059))
;


var g__53997__auto___54063 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__53997__auto___54063){
return (function cljs$spec$gen$alpha$map(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54064 = arguments.length;
var i__42692__auto___54065 = (0);
while(true){
if((i__42692__auto___54065 < len__42691__auto___54064)){
args__42698__auto__.push((arguments[i__42692__auto___54065]));

var G__54066 = (i__42692__auto___54065 + (1));
i__42692__auto___54065 = G__54066;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__53997__auto___54063))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53997__auto___54063){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53997__auto___54063),args);
});})(g__53997__auto___54063))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__53997__auto___54063){
return (function (seq54038){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54038));
});})(g__53997__auto___54063))
;


var g__53997__auto___54067 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__53997__auto___54067){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54068 = arguments.length;
var i__42692__auto___54069 = (0);
while(true){
if((i__42692__auto___54069 < len__42691__auto___54068)){
args__42698__auto__.push((arguments[i__42692__auto___54069]));

var G__54070 = (i__42692__auto___54069 + (1));
i__42692__auto___54069 = G__54070;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__53997__auto___54067))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53997__auto___54067){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53997__auto___54067),args);
});})(g__53997__auto___54067))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__53997__auto___54067){
return (function (seq54039){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54039));
});})(g__53997__auto___54067))
;


var g__53997__auto___54071 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__53997__auto___54071){
return (function cljs$spec$gen$alpha$set(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54072 = arguments.length;
var i__42692__auto___54073 = (0);
while(true){
if((i__42692__auto___54073 < len__42691__auto___54072)){
args__42698__auto__.push((arguments[i__42692__auto___54073]));

var G__54074 = (i__42692__auto___54073 + (1));
i__42692__auto___54073 = G__54074;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__53997__auto___54071))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53997__auto___54071){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53997__auto___54071),args);
});})(g__53997__auto___54071))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__53997__auto___54071){
return (function (seq54040){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54040));
});})(g__53997__auto___54071))
;


var g__53997__auto___54075 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__53997__auto___54075){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54076 = arguments.length;
var i__42692__auto___54077 = (0);
while(true){
if((i__42692__auto___54077 < len__42691__auto___54076)){
args__42698__auto__.push((arguments[i__42692__auto___54077]));

var G__54078 = (i__42692__auto___54077 + (1));
i__42692__auto___54077 = G__54078;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__53997__auto___54075))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53997__auto___54075){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53997__auto___54075),args);
});})(g__53997__auto___54075))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__53997__auto___54075){
return (function (seq54041){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54041));
});})(g__53997__auto___54075))
;


var g__53997__auto___54079 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__53997__auto___54079){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54080 = arguments.length;
var i__42692__auto___54081 = (0);
while(true){
if((i__42692__auto___54081 < len__42691__auto___54080)){
args__42698__auto__.push((arguments[i__42692__auto___54081]));

var G__54082 = (i__42692__auto___54081 + (1));
i__42692__auto___54081 = G__54082;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__53997__auto___54079))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53997__auto___54079){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53997__auto___54079),args);
});})(g__53997__auto___54079))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__53997__auto___54079){
return (function (seq54042){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54042));
});})(g__53997__auto___54079))
;


var g__53997__auto___54083 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__53997__auto___54083){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54084 = arguments.length;
var i__42692__auto___54085 = (0);
while(true){
if((i__42692__auto___54085 < len__42691__auto___54084)){
args__42698__auto__.push((arguments[i__42692__auto___54085]));

var G__54086 = (i__42692__auto___54085 + (1));
i__42692__auto___54085 = G__54086;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__53997__auto___54083))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53997__auto___54083){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53997__auto___54083),args);
});})(g__53997__auto___54083))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__53997__auto___54083){
return (function (seq54043){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54043));
});})(g__53997__auto___54083))
;


var g__53997__auto___54087 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__53997__auto___54087){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54088 = arguments.length;
var i__42692__auto___54089 = (0);
while(true){
if((i__42692__auto___54089 < len__42691__auto___54088)){
args__42698__auto__.push((arguments[i__42692__auto___54089]));

var G__54090 = (i__42692__auto___54089 + (1));
i__42692__auto___54089 = G__54090;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__53997__auto___54087))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53997__auto___54087){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53997__auto___54087),args);
});})(g__53997__auto___54087))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__53997__auto___54087){
return (function (seq54044){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54044));
});})(g__53997__auto___54087))
;


var g__53997__auto___54091 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__53997__auto___54091){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54092 = arguments.length;
var i__42692__auto___54093 = (0);
while(true){
if((i__42692__auto___54093 < len__42691__auto___54092)){
args__42698__auto__.push((arguments[i__42692__auto___54093]));

var G__54094 = (i__42692__auto___54093 + (1));
i__42692__auto___54093 = G__54094;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__53997__auto___54091))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53997__auto___54091){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53997__auto___54091),args);
});})(g__53997__auto___54091))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__53997__auto___54091){
return (function (seq54045){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54045));
});})(g__53997__auto___54091))
;


var g__53997__auto___54095 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__53997__auto___54095){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54096 = arguments.length;
var i__42692__auto___54097 = (0);
while(true){
if((i__42692__auto___54097 < len__42691__auto___54096)){
args__42698__auto__.push((arguments[i__42692__auto___54097]));

var G__54098 = (i__42692__auto___54097 + (1));
i__42692__auto___54097 = G__54098;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__53997__auto___54095))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53997__auto___54095){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53997__auto___54095),args);
});})(g__53997__auto___54095))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__53997__auto___54095){
return (function (seq54046){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54046));
});})(g__53997__auto___54095))
;


var g__53997__auto___54099 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__53997__auto___54099){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54100 = arguments.length;
var i__42692__auto___54101 = (0);
while(true){
if((i__42692__auto___54101 < len__42691__auto___54100)){
args__42698__auto__.push((arguments[i__42692__auto___54101]));

var G__54102 = (i__42692__auto___54101 + (1));
i__42692__auto___54101 = G__54102;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__53997__auto___54099))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53997__auto___54099){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53997__auto___54099),args);
});})(g__53997__auto___54099))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__53997__auto___54099){
return (function (seq54047){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54047));
});})(g__53997__auto___54099))
;


var g__53997__auto___54103 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__53997__auto___54103){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54104 = arguments.length;
var i__42692__auto___54105 = (0);
while(true){
if((i__42692__auto___54105 < len__42691__auto___54104)){
args__42698__auto__.push((arguments[i__42692__auto___54105]));

var G__54106 = (i__42692__auto___54105 + (1));
i__42692__auto___54105 = G__54106;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__53997__auto___54103))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53997__auto___54103){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53997__auto___54103),args);
});})(g__53997__auto___54103))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__53997__auto___54103){
return (function (seq54048){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54048));
});})(g__53997__auto___54103))
;


var g__53997__auto___54107 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__53997__auto___54107){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54108 = arguments.length;
var i__42692__auto___54109 = (0);
while(true){
if((i__42692__auto___54109 < len__42691__auto___54108)){
args__42698__auto__.push((arguments[i__42692__auto___54109]));

var G__54110 = (i__42692__auto___54109 + (1));
i__42692__auto___54109 = G__54110;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__53997__auto___54107))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53997__auto___54107){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53997__auto___54107),args);
});})(g__53997__auto___54107))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__53997__auto___54107){
return (function (seq54049){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54049));
});})(g__53997__auto___54107))
;


var g__53997__auto___54111 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__53997__auto___54111){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54112 = arguments.length;
var i__42692__auto___54113 = (0);
while(true){
if((i__42692__auto___54113 < len__42691__auto___54112)){
args__42698__auto__.push((arguments[i__42692__auto___54113]));

var G__54114 = (i__42692__auto___54113 + (1));
i__42692__auto___54113 = G__54114;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__53997__auto___54111))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53997__auto___54111){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53997__auto___54111),args);
});})(g__53997__auto___54111))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__53997__auto___54111){
return (function (seq54050){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54050));
});})(g__53997__auto___54111))
;


var g__53997__auto___54115 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__53997__auto___54115){
return (function cljs$spec$gen$alpha$return(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54116 = arguments.length;
var i__42692__auto___54117 = (0);
while(true){
if((i__42692__auto___54117 < len__42691__auto___54116)){
args__42698__auto__.push((arguments[i__42692__auto___54117]));

var G__54118 = (i__42692__auto___54117 + (1));
i__42692__auto___54117 = G__54118;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__53997__auto___54115))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53997__auto___54115){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53997__auto___54115),args);
});})(g__53997__auto___54115))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__53997__auto___54115){
return (function (seq54051){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54051));
});})(g__53997__auto___54115))
;


var g__53997__auto___54119 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__53997__auto___54119){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54120 = arguments.length;
var i__42692__auto___54121 = (0);
while(true){
if((i__42692__auto___54121 < len__42691__auto___54120)){
args__42698__auto__.push((arguments[i__42692__auto___54121]));

var G__54122 = (i__42692__auto___54121 + (1));
i__42692__auto___54121 = G__54122;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__53997__auto___54119))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53997__auto___54119){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53997__auto___54119),args);
});})(g__53997__auto___54119))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__53997__auto___54119){
return (function (seq54052){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54052));
});})(g__53997__auto___54119))
;


var g__53997__auto___54123 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__53997__auto___54123){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54124 = arguments.length;
var i__42692__auto___54125 = (0);
while(true){
if((i__42692__auto___54125 < len__42691__auto___54124)){
args__42698__auto__.push((arguments[i__42692__auto___54125]));

var G__54126 = (i__42692__auto___54125 + (1));
i__42692__auto___54125 = G__54126;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__53997__auto___54123))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53997__auto___54123){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53997__auto___54123),args);
});})(g__53997__auto___54123))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__53997__auto___54123){
return (function (seq54053){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54053));
});})(g__53997__auto___54123))
;


var g__53997__auto___54127 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__53997__auto___54127){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54128 = arguments.length;
var i__42692__auto___54129 = (0);
while(true){
if((i__42692__auto___54129 < len__42691__auto___54128)){
args__42698__auto__.push((arguments[i__42692__auto___54129]));

var G__54130 = (i__42692__auto___54129 + (1));
i__42692__auto___54129 = G__54130;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__53997__auto___54127))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53997__auto___54127){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53997__auto___54127),args);
});})(g__53997__auto___54127))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__53997__auto___54127){
return (function (seq54054){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54054));
});})(g__53997__auto___54127))
;

var g__54010__auto___54152 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__54010__auto___54152){
return (function cljs$spec$gen$alpha$any(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54153 = arguments.length;
var i__42692__auto___54154 = (0);
while(true){
if((i__42692__auto___54154 < len__42691__auto___54153)){
args__42698__auto__.push((arguments[i__42692__auto___54154]));

var G__54155 = (i__42692__auto___54154 + (1));
i__42692__auto___54154 = G__54155;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__54010__auto___54152))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54010__auto___54152){
return (function (args){
return cljs.core.deref.call(null,g__54010__auto___54152);
});})(g__54010__auto___54152))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__54010__auto___54152){
return (function (seq54131){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54131));
});})(g__54010__auto___54152))
;


var g__54010__auto___54156 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__54010__auto___54156){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54157 = arguments.length;
var i__42692__auto___54158 = (0);
while(true){
if((i__42692__auto___54158 < len__42691__auto___54157)){
args__42698__auto__.push((arguments[i__42692__auto___54158]));

var G__54159 = (i__42692__auto___54158 + (1));
i__42692__auto___54158 = G__54159;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__54010__auto___54156))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54010__auto___54156){
return (function (args){
return cljs.core.deref.call(null,g__54010__auto___54156);
});})(g__54010__auto___54156))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__54010__auto___54156){
return (function (seq54132){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54132));
});})(g__54010__auto___54156))
;


var g__54010__auto___54160 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__54010__auto___54160){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54161 = arguments.length;
var i__42692__auto___54162 = (0);
while(true){
if((i__42692__auto___54162 < len__42691__auto___54161)){
args__42698__auto__.push((arguments[i__42692__auto___54162]));

var G__54163 = (i__42692__auto___54162 + (1));
i__42692__auto___54162 = G__54163;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__54010__auto___54160))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54010__auto___54160){
return (function (args){
return cljs.core.deref.call(null,g__54010__auto___54160);
});})(g__54010__auto___54160))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__54010__auto___54160){
return (function (seq54133){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54133));
});})(g__54010__auto___54160))
;


var g__54010__auto___54164 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__54010__auto___54164){
return (function cljs$spec$gen$alpha$char(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54165 = arguments.length;
var i__42692__auto___54166 = (0);
while(true){
if((i__42692__auto___54166 < len__42691__auto___54165)){
args__42698__auto__.push((arguments[i__42692__auto___54166]));

var G__54167 = (i__42692__auto___54166 + (1));
i__42692__auto___54166 = G__54167;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__54010__auto___54164))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54010__auto___54164){
return (function (args){
return cljs.core.deref.call(null,g__54010__auto___54164);
});})(g__54010__auto___54164))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__54010__auto___54164){
return (function (seq54134){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54134));
});})(g__54010__auto___54164))
;


var g__54010__auto___54168 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__54010__auto___54168){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54169 = arguments.length;
var i__42692__auto___54170 = (0);
while(true){
if((i__42692__auto___54170 < len__42691__auto___54169)){
args__42698__auto__.push((arguments[i__42692__auto___54170]));

var G__54171 = (i__42692__auto___54170 + (1));
i__42692__auto___54170 = G__54171;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__54010__auto___54168))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54010__auto___54168){
return (function (args){
return cljs.core.deref.call(null,g__54010__auto___54168);
});})(g__54010__auto___54168))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__54010__auto___54168){
return (function (seq54135){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54135));
});})(g__54010__auto___54168))
;


var g__54010__auto___54172 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__54010__auto___54172){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54173 = arguments.length;
var i__42692__auto___54174 = (0);
while(true){
if((i__42692__auto___54174 < len__42691__auto___54173)){
args__42698__auto__.push((arguments[i__42692__auto___54174]));

var G__54175 = (i__42692__auto___54174 + (1));
i__42692__auto___54174 = G__54175;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__54010__auto___54172))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54010__auto___54172){
return (function (args){
return cljs.core.deref.call(null,g__54010__auto___54172);
});})(g__54010__auto___54172))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__54010__auto___54172){
return (function (seq54136){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54136));
});})(g__54010__auto___54172))
;


var g__54010__auto___54176 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__54010__auto___54176){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54177 = arguments.length;
var i__42692__auto___54178 = (0);
while(true){
if((i__42692__auto___54178 < len__42691__auto___54177)){
args__42698__auto__.push((arguments[i__42692__auto___54178]));

var G__54179 = (i__42692__auto___54178 + (1));
i__42692__auto___54178 = G__54179;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__54010__auto___54176))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54010__auto___54176){
return (function (args){
return cljs.core.deref.call(null,g__54010__auto___54176);
});})(g__54010__auto___54176))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__54010__auto___54176){
return (function (seq54137){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54137));
});})(g__54010__auto___54176))
;


var g__54010__auto___54180 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__54010__auto___54180){
return (function cljs$spec$gen$alpha$double(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54181 = arguments.length;
var i__42692__auto___54182 = (0);
while(true){
if((i__42692__auto___54182 < len__42691__auto___54181)){
args__42698__auto__.push((arguments[i__42692__auto___54182]));

var G__54183 = (i__42692__auto___54182 + (1));
i__42692__auto___54182 = G__54183;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__54010__auto___54180))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54010__auto___54180){
return (function (args){
return cljs.core.deref.call(null,g__54010__auto___54180);
});})(g__54010__auto___54180))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__54010__auto___54180){
return (function (seq54138){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54138));
});})(g__54010__auto___54180))
;


var g__54010__auto___54184 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__54010__auto___54184){
return (function cljs$spec$gen$alpha$int(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54185 = arguments.length;
var i__42692__auto___54186 = (0);
while(true){
if((i__42692__auto___54186 < len__42691__auto___54185)){
args__42698__auto__.push((arguments[i__42692__auto___54186]));

var G__54187 = (i__42692__auto___54186 + (1));
i__42692__auto___54186 = G__54187;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__54010__auto___54184))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54010__auto___54184){
return (function (args){
return cljs.core.deref.call(null,g__54010__auto___54184);
});})(g__54010__auto___54184))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__54010__auto___54184){
return (function (seq54139){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54139));
});})(g__54010__auto___54184))
;


var g__54010__auto___54188 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__54010__auto___54188){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54189 = arguments.length;
var i__42692__auto___54190 = (0);
while(true){
if((i__42692__auto___54190 < len__42691__auto___54189)){
args__42698__auto__.push((arguments[i__42692__auto___54190]));

var G__54191 = (i__42692__auto___54190 + (1));
i__42692__auto___54190 = G__54191;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__54010__auto___54188))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54010__auto___54188){
return (function (args){
return cljs.core.deref.call(null,g__54010__auto___54188);
});})(g__54010__auto___54188))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__54010__auto___54188){
return (function (seq54140){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54140));
});})(g__54010__auto___54188))
;


var g__54010__auto___54192 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__54010__auto___54192){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54193 = arguments.length;
var i__42692__auto___54194 = (0);
while(true){
if((i__42692__auto___54194 < len__42691__auto___54193)){
args__42698__auto__.push((arguments[i__42692__auto___54194]));

var G__54195 = (i__42692__auto___54194 + (1));
i__42692__auto___54194 = G__54195;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__54010__auto___54192))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54010__auto___54192){
return (function (args){
return cljs.core.deref.call(null,g__54010__auto___54192);
});})(g__54010__auto___54192))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__54010__auto___54192){
return (function (seq54141){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54141));
});})(g__54010__auto___54192))
;


var g__54010__auto___54196 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__54010__auto___54196){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54197 = arguments.length;
var i__42692__auto___54198 = (0);
while(true){
if((i__42692__auto___54198 < len__42691__auto___54197)){
args__42698__auto__.push((arguments[i__42692__auto___54198]));

var G__54199 = (i__42692__auto___54198 + (1));
i__42692__auto___54198 = G__54199;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__54010__auto___54196))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54010__auto___54196){
return (function (args){
return cljs.core.deref.call(null,g__54010__auto___54196);
});})(g__54010__auto___54196))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__54010__auto___54196){
return (function (seq54142){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54142));
});})(g__54010__auto___54196))
;


var g__54010__auto___54200 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__54010__auto___54200){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54201 = arguments.length;
var i__42692__auto___54202 = (0);
while(true){
if((i__42692__auto___54202 < len__42691__auto___54201)){
args__42698__auto__.push((arguments[i__42692__auto___54202]));

var G__54203 = (i__42692__auto___54202 + (1));
i__42692__auto___54202 = G__54203;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__54010__auto___54200))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54010__auto___54200){
return (function (args){
return cljs.core.deref.call(null,g__54010__auto___54200);
});})(g__54010__auto___54200))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__54010__auto___54200){
return (function (seq54143){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54143));
});})(g__54010__auto___54200))
;


var g__54010__auto___54204 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__54010__auto___54204){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54205 = arguments.length;
var i__42692__auto___54206 = (0);
while(true){
if((i__42692__auto___54206 < len__42691__auto___54205)){
args__42698__auto__.push((arguments[i__42692__auto___54206]));

var G__54207 = (i__42692__auto___54206 + (1));
i__42692__auto___54206 = G__54207;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__54010__auto___54204))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54010__auto___54204){
return (function (args){
return cljs.core.deref.call(null,g__54010__auto___54204);
});})(g__54010__auto___54204))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__54010__auto___54204){
return (function (seq54144){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54144));
});})(g__54010__auto___54204))
;


var g__54010__auto___54208 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__54010__auto___54208){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54209 = arguments.length;
var i__42692__auto___54210 = (0);
while(true){
if((i__42692__auto___54210 < len__42691__auto___54209)){
args__42698__auto__.push((arguments[i__42692__auto___54210]));

var G__54211 = (i__42692__auto___54210 + (1));
i__42692__auto___54210 = G__54211;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__54010__auto___54208))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54010__auto___54208){
return (function (args){
return cljs.core.deref.call(null,g__54010__auto___54208);
});})(g__54010__auto___54208))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__54010__auto___54208){
return (function (seq54145){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54145));
});})(g__54010__auto___54208))
;


var g__54010__auto___54212 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__54010__auto___54212){
return (function cljs$spec$gen$alpha$string(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54213 = arguments.length;
var i__42692__auto___54214 = (0);
while(true){
if((i__42692__auto___54214 < len__42691__auto___54213)){
args__42698__auto__.push((arguments[i__42692__auto___54214]));

var G__54215 = (i__42692__auto___54214 + (1));
i__42692__auto___54214 = G__54215;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__54010__auto___54212))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54010__auto___54212){
return (function (args){
return cljs.core.deref.call(null,g__54010__auto___54212);
});})(g__54010__auto___54212))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__54010__auto___54212){
return (function (seq54146){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54146));
});})(g__54010__auto___54212))
;


var g__54010__auto___54216 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__54010__auto___54216){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54217 = arguments.length;
var i__42692__auto___54218 = (0);
while(true){
if((i__42692__auto___54218 < len__42691__auto___54217)){
args__42698__auto__.push((arguments[i__42692__auto___54218]));

var G__54219 = (i__42692__auto___54218 + (1));
i__42692__auto___54218 = G__54219;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__54010__auto___54216))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54010__auto___54216){
return (function (args){
return cljs.core.deref.call(null,g__54010__auto___54216);
});})(g__54010__auto___54216))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__54010__auto___54216){
return (function (seq54147){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54147));
});})(g__54010__auto___54216))
;


var g__54010__auto___54220 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__54010__auto___54220){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54221 = arguments.length;
var i__42692__auto___54222 = (0);
while(true){
if((i__42692__auto___54222 < len__42691__auto___54221)){
args__42698__auto__.push((arguments[i__42692__auto___54222]));

var G__54223 = (i__42692__auto___54222 + (1));
i__42692__auto___54222 = G__54223;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__54010__auto___54220))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54010__auto___54220){
return (function (args){
return cljs.core.deref.call(null,g__54010__auto___54220);
});})(g__54010__auto___54220))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__54010__auto___54220){
return (function (seq54148){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54148));
});})(g__54010__auto___54220))
;


var g__54010__auto___54224 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__54010__auto___54224){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54225 = arguments.length;
var i__42692__auto___54226 = (0);
while(true){
if((i__42692__auto___54226 < len__42691__auto___54225)){
args__42698__auto__.push((arguments[i__42692__auto___54226]));

var G__54227 = (i__42692__auto___54226 + (1));
i__42692__auto___54226 = G__54227;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__54010__auto___54224))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54010__auto___54224){
return (function (args){
return cljs.core.deref.call(null,g__54010__auto___54224);
});})(g__54010__auto___54224))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__54010__auto___54224){
return (function (seq54149){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54149));
});})(g__54010__auto___54224))
;


var g__54010__auto___54228 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__54010__auto___54228){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54229 = arguments.length;
var i__42692__auto___54230 = (0);
while(true){
if((i__42692__auto___54230 < len__42691__auto___54229)){
args__42698__auto__.push((arguments[i__42692__auto___54230]));

var G__54231 = (i__42692__auto___54230 + (1));
i__42692__auto___54230 = G__54231;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__54010__auto___54228))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54010__auto___54228){
return (function (args){
return cljs.core.deref.call(null,g__54010__auto___54228);
});})(g__54010__auto___54228))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__54010__auto___54228){
return (function (seq54150){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54150));
});})(g__54010__auto___54228))
;


var g__54010__auto___54232 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__54010__auto___54232){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54233 = arguments.length;
var i__42692__auto___54234 = (0);
while(true){
if((i__42692__auto___54234 < len__42691__auto___54233)){
args__42698__auto__.push((arguments[i__42692__auto___54234]));

var G__54235 = (i__42692__auto___54234 + (1));
i__42692__auto___54234 = G__54235;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});})(g__54010__auto___54232))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__54010__auto___54232){
return (function (args){
return cljs.core.deref.call(null,g__54010__auto___54232);
});})(g__54010__auto___54232))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__54010__auto___54232){
return (function (seq54151){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54151));
});})(g__54010__auto___54232))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__42698__auto__ = [];
var len__42691__auto___54238 = arguments.length;
var i__42692__auto___54239 = (0);
while(true){
if((i__42692__auto___54239 < len__42691__auto___54238)){
args__42698__auto__.push((arguments[i__42692__auto___54239]));

var G__54240 = (i__42692__auto___54239 + (1));
i__42692__auto___54239 = G__54240;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__54236_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__54236_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq54237){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54237));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__54241_SHARP_){
return (new Date(p1__54241_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1516433049489
