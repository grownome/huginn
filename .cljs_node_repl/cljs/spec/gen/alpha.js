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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__21595__auto__,writer__21596__auto__,opt__21597__auto__){
return cljs.core._write.call(null,writer__21596__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__22210__auto__ = [];
var len__22203__auto___23748 = arguments.length;
var i__22204__auto___23749 = (0);
while(true){
if((i__22204__auto___23749 < len__22203__auto___23748)){
args__22210__auto__.push((arguments[i__22204__auto___23749]));

var G__23750 = (i__22204__auto___23749 + (1));
i__22204__auto___23749 = G__23750;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq23747){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23747));
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
var args__22210__auto__ = [];
var len__22203__auto___23752 = arguments.length;
var i__22204__auto___23753 = (0);
while(true){
if((i__22204__auto___23753 < len__22203__auto___23752)){
args__22210__auto__.push((arguments[i__22204__auto___23753]));

var G__23754 = (i__22204__auto___23753 + (1));
i__22204__auto___23753 = G__23754;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq23751){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23751));
});

var g_QMARK__23755 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_23756 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__23755){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__23755))
,null));
var mkg_23757 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__23755,g_23756){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__23755,g_23756))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__23755,g_23756,mkg_23757){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__23755).call(null,x);
});})(g_QMARK__23755,g_23756,mkg_23757))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__23755,g_23756,mkg_23757){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_23757).call(null,gfn);
});})(g_QMARK__23755,g_23756,mkg_23757))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__23755,g_23756,mkg_23757){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_23756).call(null,generator);
});})(g_QMARK__23755,g_23756,mkg_23757))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__22306__auto___23777 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__22306__auto___23777){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23778 = arguments.length;
var i__22204__auto___23779 = (0);
while(true){
if((i__22204__auto___23779 < len__22203__auto___23778)){
args__22210__auto__.push((arguments[i__22204__auto___23779]));

var G__23780 = (i__22204__auto___23779 + (1));
i__22204__auto___23779 = G__23780;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22306__auto___23777))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22306__auto___23777){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22306__auto___23777),args);
});})(g__22306__auto___23777))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__22306__auto___23777){
return (function (seq23758){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23758));
});})(g__22306__auto___23777))
;


var g__22306__auto___23781 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__22306__auto___23781){
return (function cljs$spec$gen$alpha$list(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23782 = arguments.length;
var i__22204__auto___23783 = (0);
while(true){
if((i__22204__auto___23783 < len__22203__auto___23782)){
args__22210__auto__.push((arguments[i__22204__auto___23783]));

var G__23784 = (i__22204__auto___23783 + (1));
i__22204__auto___23783 = G__23784;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22306__auto___23781))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22306__auto___23781){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22306__auto___23781),args);
});})(g__22306__auto___23781))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__22306__auto___23781){
return (function (seq23759){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23759));
});})(g__22306__auto___23781))
;


var g__22306__auto___23785 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__22306__auto___23785){
return (function cljs$spec$gen$alpha$map(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23786 = arguments.length;
var i__22204__auto___23787 = (0);
while(true){
if((i__22204__auto___23787 < len__22203__auto___23786)){
args__22210__auto__.push((arguments[i__22204__auto___23787]));

var G__23788 = (i__22204__auto___23787 + (1));
i__22204__auto___23787 = G__23788;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22306__auto___23785))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22306__auto___23785){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22306__auto___23785),args);
});})(g__22306__auto___23785))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__22306__auto___23785){
return (function (seq23760){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23760));
});})(g__22306__auto___23785))
;


var g__22306__auto___23789 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__22306__auto___23789){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23790 = arguments.length;
var i__22204__auto___23791 = (0);
while(true){
if((i__22204__auto___23791 < len__22203__auto___23790)){
args__22210__auto__.push((arguments[i__22204__auto___23791]));

var G__23792 = (i__22204__auto___23791 + (1));
i__22204__auto___23791 = G__23792;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22306__auto___23789))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22306__auto___23789){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22306__auto___23789),args);
});})(g__22306__auto___23789))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__22306__auto___23789){
return (function (seq23761){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23761));
});})(g__22306__auto___23789))
;


var g__22306__auto___23793 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__22306__auto___23793){
return (function cljs$spec$gen$alpha$set(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23794 = arguments.length;
var i__22204__auto___23795 = (0);
while(true){
if((i__22204__auto___23795 < len__22203__auto___23794)){
args__22210__auto__.push((arguments[i__22204__auto___23795]));

var G__23796 = (i__22204__auto___23795 + (1));
i__22204__auto___23795 = G__23796;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22306__auto___23793))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22306__auto___23793){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22306__auto___23793),args);
});})(g__22306__auto___23793))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__22306__auto___23793){
return (function (seq23762){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23762));
});})(g__22306__auto___23793))
;


var g__22306__auto___23797 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__22306__auto___23797){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23798 = arguments.length;
var i__22204__auto___23799 = (0);
while(true){
if((i__22204__auto___23799 < len__22203__auto___23798)){
args__22210__auto__.push((arguments[i__22204__auto___23799]));

var G__23800 = (i__22204__auto___23799 + (1));
i__22204__auto___23799 = G__23800;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22306__auto___23797))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22306__auto___23797){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22306__auto___23797),args);
});})(g__22306__auto___23797))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__22306__auto___23797){
return (function (seq23763){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23763));
});})(g__22306__auto___23797))
;


var g__22306__auto___23801 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__22306__auto___23801){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23802 = arguments.length;
var i__22204__auto___23803 = (0);
while(true){
if((i__22204__auto___23803 < len__22203__auto___23802)){
args__22210__auto__.push((arguments[i__22204__auto___23803]));

var G__23804 = (i__22204__auto___23803 + (1));
i__22204__auto___23803 = G__23804;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22306__auto___23801))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22306__auto___23801){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22306__auto___23801),args);
});})(g__22306__auto___23801))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__22306__auto___23801){
return (function (seq23764){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23764));
});})(g__22306__auto___23801))
;


var g__22306__auto___23805 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__22306__auto___23805){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23806 = arguments.length;
var i__22204__auto___23807 = (0);
while(true){
if((i__22204__auto___23807 < len__22203__auto___23806)){
args__22210__auto__.push((arguments[i__22204__auto___23807]));

var G__23808 = (i__22204__auto___23807 + (1));
i__22204__auto___23807 = G__23808;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22306__auto___23805))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22306__auto___23805){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22306__auto___23805),args);
});})(g__22306__auto___23805))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__22306__auto___23805){
return (function (seq23765){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23765));
});})(g__22306__auto___23805))
;


var g__22306__auto___23809 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__22306__auto___23809){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23810 = arguments.length;
var i__22204__auto___23811 = (0);
while(true){
if((i__22204__auto___23811 < len__22203__auto___23810)){
args__22210__auto__.push((arguments[i__22204__auto___23811]));

var G__23812 = (i__22204__auto___23811 + (1));
i__22204__auto___23811 = G__23812;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22306__auto___23809))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22306__auto___23809){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22306__auto___23809),args);
});})(g__22306__auto___23809))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__22306__auto___23809){
return (function (seq23766){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23766));
});})(g__22306__auto___23809))
;


var g__22306__auto___23813 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__22306__auto___23813){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23814 = arguments.length;
var i__22204__auto___23815 = (0);
while(true){
if((i__22204__auto___23815 < len__22203__auto___23814)){
args__22210__auto__.push((arguments[i__22204__auto___23815]));

var G__23816 = (i__22204__auto___23815 + (1));
i__22204__auto___23815 = G__23816;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22306__auto___23813))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22306__auto___23813){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22306__auto___23813),args);
});})(g__22306__auto___23813))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__22306__auto___23813){
return (function (seq23767){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23767));
});})(g__22306__auto___23813))
;


var g__22306__auto___23817 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__22306__auto___23817){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23818 = arguments.length;
var i__22204__auto___23819 = (0);
while(true){
if((i__22204__auto___23819 < len__22203__auto___23818)){
args__22210__auto__.push((arguments[i__22204__auto___23819]));

var G__23820 = (i__22204__auto___23819 + (1));
i__22204__auto___23819 = G__23820;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22306__auto___23817))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22306__auto___23817){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22306__auto___23817),args);
});})(g__22306__auto___23817))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__22306__auto___23817){
return (function (seq23768){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23768));
});})(g__22306__auto___23817))
;


var g__22306__auto___23821 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__22306__auto___23821){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23822 = arguments.length;
var i__22204__auto___23823 = (0);
while(true){
if((i__22204__auto___23823 < len__22203__auto___23822)){
args__22210__auto__.push((arguments[i__22204__auto___23823]));

var G__23824 = (i__22204__auto___23823 + (1));
i__22204__auto___23823 = G__23824;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22306__auto___23821))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22306__auto___23821){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22306__auto___23821),args);
});})(g__22306__auto___23821))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__22306__auto___23821){
return (function (seq23769){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23769));
});})(g__22306__auto___23821))
;


var g__22306__auto___23825 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__22306__auto___23825){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23826 = arguments.length;
var i__22204__auto___23827 = (0);
while(true){
if((i__22204__auto___23827 < len__22203__auto___23826)){
args__22210__auto__.push((arguments[i__22204__auto___23827]));

var G__23828 = (i__22204__auto___23827 + (1));
i__22204__auto___23827 = G__23828;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22306__auto___23825))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22306__auto___23825){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22306__auto___23825),args);
});})(g__22306__auto___23825))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__22306__auto___23825){
return (function (seq23770){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23770));
});})(g__22306__auto___23825))
;


var g__22306__auto___23829 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__22306__auto___23829){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23830 = arguments.length;
var i__22204__auto___23831 = (0);
while(true){
if((i__22204__auto___23831 < len__22203__auto___23830)){
args__22210__auto__.push((arguments[i__22204__auto___23831]));

var G__23832 = (i__22204__auto___23831 + (1));
i__22204__auto___23831 = G__23832;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22306__auto___23829))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22306__auto___23829){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22306__auto___23829),args);
});})(g__22306__auto___23829))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__22306__auto___23829){
return (function (seq23771){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23771));
});})(g__22306__auto___23829))
;


var g__22306__auto___23833 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__22306__auto___23833){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23834 = arguments.length;
var i__22204__auto___23835 = (0);
while(true){
if((i__22204__auto___23835 < len__22203__auto___23834)){
args__22210__auto__.push((arguments[i__22204__auto___23835]));

var G__23836 = (i__22204__auto___23835 + (1));
i__22204__auto___23835 = G__23836;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22306__auto___23833))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22306__auto___23833){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22306__auto___23833),args);
});})(g__22306__auto___23833))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__22306__auto___23833){
return (function (seq23772){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23772));
});})(g__22306__auto___23833))
;


var g__22306__auto___23837 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__22306__auto___23837){
return (function cljs$spec$gen$alpha$return(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23838 = arguments.length;
var i__22204__auto___23839 = (0);
while(true){
if((i__22204__auto___23839 < len__22203__auto___23838)){
args__22210__auto__.push((arguments[i__22204__auto___23839]));

var G__23840 = (i__22204__auto___23839 + (1));
i__22204__auto___23839 = G__23840;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22306__auto___23837))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22306__auto___23837){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22306__auto___23837),args);
});})(g__22306__auto___23837))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__22306__auto___23837){
return (function (seq23773){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23773));
});})(g__22306__auto___23837))
;


var g__22306__auto___23841 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__22306__auto___23841){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23842 = arguments.length;
var i__22204__auto___23843 = (0);
while(true){
if((i__22204__auto___23843 < len__22203__auto___23842)){
args__22210__auto__.push((arguments[i__22204__auto___23843]));

var G__23844 = (i__22204__auto___23843 + (1));
i__22204__auto___23843 = G__23844;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22306__auto___23841))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22306__auto___23841){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22306__auto___23841),args);
});})(g__22306__auto___23841))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__22306__auto___23841){
return (function (seq23774){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23774));
});})(g__22306__auto___23841))
;


var g__22306__auto___23845 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__22306__auto___23845){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23846 = arguments.length;
var i__22204__auto___23847 = (0);
while(true){
if((i__22204__auto___23847 < len__22203__auto___23846)){
args__22210__auto__.push((arguments[i__22204__auto___23847]));

var G__23848 = (i__22204__auto___23847 + (1));
i__22204__auto___23847 = G__23848;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22306__auto___23845))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22306__auto___23845){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22306__auto___23845),args);
});})(g__22306__auto___23845))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__22306__auto___23845){
return (function (seq23775){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23775));
});})(g__22306__auto___23845))
;


var g__22306__auto___23849 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__22306__auto___23849){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23850 = arguments.length;
var i__22204__auto___23851 = (0);
while(true){
if((i__22204__auto___23851 < len__22203__auto___23850)){
args__22210__auto__.push((arguments[i__22204__auto___23851]));

var G__23852 = (i__22204__auto___23851 + (1));
i__22204__auto___23851 = G__23852;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22306__auto___23849))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22306__auto___23849){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22306__auto___23849),args);
});})(g__22306__auto___23849))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__22306__auto___23849){
return (function (seq23776){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23776));
});})(g__22306__auto___23849))
;

var g__22319__auto___23874 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__22319__auto___23874){
return (function cljs$spec$gen$alpha$any(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23875 = arguments.length;
var i__22204__auto___23876 = (0);
while(true){
if((i__22204__auto___23876 < len__22203__auto___23875)){
args__22210__auto__.push((arguments[i__22204__auto___23876]));

var G__23877 = (i__22204__auto___23876 + (1));
i__22204__auto___23876 = G__23877;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22319__auto___23874))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22319__auto___23874){
return (function (args){
return cljs.core.deref.call(null,g__22319__auto___23874);
});})(g__22319__auto___23874))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__22319__auto___23874){
return (function (seq23853){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23853));
});})(g__22319__auto___23874))
;


var g__22319__auto___23878 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__22319__auto___23878){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23879 = arguments.length;
var i__22204__auto___23880 = (0);
while(true){
if((i__22204__auto___23880 < len__22203__auto___23879)){
args__22210__auto__.push((arguments[i__22204__auto___23880]));

var G__23881 = (i__22204__auto___23880 + (1));
i__22204__auto___23880 = G__23881;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22319__auto___23878))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22319__auto___23878){
return (function (args){
return cljs.core.deref.call(null,g__22319__auto___23878);
});})(g__22319__auto___23878))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__22319__auto___23878){
return (function (seq23854){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23854));
});})(g__22319__auto___23878))
;


var g__22319__auto___23882 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__22319__auto___23882){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23883 = arguments.length;
var i__22204__auto___23884 = (0);
while(true){
if((i__22204__auto___23884 < len__22203__auto___23883)){
args__22210__auto__.push((arguments[i__22204__auto___23884]));

var G__23885 = (i__22204__auto___23884 + (1));
i__22204__auto___23884 = G__23885;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22319__auto___23882))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22319__auto___23882){
return (function (args){
return cljs.core.deref.call(null,g__22319__auto___23882);
});})(g__22319__auto___23882))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__22319__auto___23882){
return (function (seq23855){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23855));
});})(g__22319__auto___23882))
;


var g__22319__auto___23886 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__22319__auto___23886){
return (function cljs$spec$gen$alpha$char(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23887 = arguments.length;
var i__22204__auto___23888 = (0);
while(true){
if((i__22204__auto___23888 < len__22203__auto___23887)){
args__22210__auto__.push((arguments[i__22204__auto___23888]));

var G__23889 = (i__22204__auto___23888 + (1));
i__22204__auto___23888 = G__23889;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22319__auto___23886))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22319__auto___23886){
return (function (args){
return cljs.core.deref.call(null,g__22319__auto___23886);
});})(g__22319__auto___23886))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__22319__auto___23886){
return (function (seq23856){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23856));
});})(g__22319__auto___23886))
;


var g__22319__auto___23890 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__22319__auto___23890){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23891 = arguments.length;
var i__22204__auto___23892 = (0);
while(true){
if((i__22204__auto___23892 < len__22203__auto___23891)){
args__22210__auto__.push((arguments[i__22204__auto___23892]));

var G__23893 = (i__22204__auto___23892 + (1));
i__22204__auto___23892 = G__23893;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22319__auto___23890))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22319__auto___23890){
return (function (args){
return cljs.core.deref.call(null,g__22319__auto___23890);
});})(g__22319__auto___23890))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__22319__auto___23890){
return (function (seq23857){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23857));
});})(g__22319__auto___23890))
;


var g__22319__auto___23894 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__22319__auto___23894){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23895 = arguments.length;
var i__22204__auto___23896 = (0);
while(true){
if((i__22204__auto___23896 < len__22203__auto___23895)){
args__22210__auto__.push((arguments[i__22204__auto___23896]));

var G__23897 = (i__22204__auto___23896 + (1));
i__22204__auto___23896 = G__23897;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22319__auto___23894))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22319__auto___23894){
return (function (args){
return cljs.core.deref.call(null,g__22319__auto___23894);
});})(g__22319__auto___23894))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__22319__auto___23894){
return (function (seq23858){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23858));
});})(g__22319__auto___23894))
;


var g__22319__auto___23898 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__22319__auto___23898){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23899 = arguments.length;
var i__22204__auto___23900 = (0);
while(true){
if((i__22204__auto___23900 < len__22203__auto___23899)){
args__22210__auto__.push((arguments[i__22204__auto___23900]));

var G__23901 = (i__22204__auto___23900 + (1));
i__22204__auto___23900 = G__23901;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22319__auto___23898))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22319__auto___23898){
return (function (args){
return cljs.core.deref.call(null,g__22319__auto___23898);
});})(g__22319__auto___23898))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__22319__auto___23898){
return (function (seq23859){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23859));
});})(g__22319__auto___23898))
;


var g__22319__auto___23902 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__22319__auto___23902){
return (function cljs$spec$gen$alpha$double(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23903 = arguments.length;
var i__22204__auto___23904 = (0);
while(true){
if((i__22204__auto___23904 < len__22203__auto___23903)){
args__22210__auto__.push((arguments[i__22204__auto___23904]));

var G__23905 = (i__22204__auto___23904 + (1));
i__22204__auto___23904 = G__23905;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22319__auto___23902))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22319__auto___23902){
return (function (args){
return cljs.core.deref.call(null,g__22319__auto___23902);
});})(g__22319__auto___23902))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__22319__auto___23902){
return (function (seq23860){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23860));
});})(g__22319__auto___23902))
;


var g__22319__auto___23906 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__22319__auto___23906){
return (function cljs$spec$gen$alpha$int(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23907 = arguments.length;
var i__22204__auto___23908 = (0);
while(true){
if((i__22204__auto___23908 < len__22203__auto___23907)){
args__22210__auto__.push((arguments[i__22204__auto___23908]));

var G__23909 = (i__22204__auto___23908 + (1));
i__22204__auto___23908 = G__23909;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22319__auto___23906))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22319__auto___23906){
return (function (args){
return cljs.core.deref.call(null,g__22319__auto___23906);
});})(g__22319__auto___23906))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__22319__auto___23906){
return (function (seq23861){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23861));
});})(g__22319__auto___23906))
;


var g__22319__auto___23910 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__22319__auto___23910){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23911 = arguments.length;
var i__22204__auto___23912 = (0);
while(true){
if((i__22204__auto___23912 < len__22203__auto___23911)){
args__22210__auto__.push((arguments[i__22204__auto___23912]));

var G__23913 = (i__22204__auto___23912 + (1));
i__22204__auto___23912 = G__23913;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22319__auto___23910))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22319__auto___23910){
return (function (args){
return cljs.core.deref.call(null,g__22319__auto___23910);
});})(g__22319__auto___23910))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__22319__auto___23910){
return (function (seq23862){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23862));
});})(g__22319__auto___23910))
;


var g__22319__auto___23914 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__22319__auto___23914){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23915 = arguments.length;
var i__22204__auto___23916 = (0);
while(true){
if((i__22204__auto___23916 < len__22203__auto___23915)){
args__22210__auto__.push((arguments[i__22204__auto___23916]));

var G__23917 = (i__22204__auto___23916 + (1));
i__22204__auto___23916 = G__23917;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22319__auto___23914))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22319__auto___23914){
return (function (args){
return cljs.core.deref.call(null,g__22319__auto___23914);
});})(g__22319__auto___23914))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__22319__auto___23914){
return (function (seq23863){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23863));
});})(g__22319__auto___23914))
;


var g__22319__auto___23918 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__22319__auto___23918){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23919 = arguments.length;
var i__22204__auto___23920 = (0);
while(true){
if((i__22204__auto___23920 < len__22203__auto___23919)){
args__22210__auto__.push((arguments[i__22204__auto___23920]));

var G__23921 = (i__22204__auto___23920 + (1));
i__22204__auto___23920 = G__23921;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22319__auto___23918))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22319__auto___23918){
return (function (args){
return cljs.core.deref.call(null,g__22319__auto___23918);
});})(g__22319__auto___23918))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__22319__auto___23918){
return (function (seq23864){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23864));
});})(g__22319__auto___23918))
;


var g__22319__auto___23922 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__22319__auto___23922){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23923 = arguments.length;
var i__22204__auto___23924 = (0);
while(true){
if((i__22204__auto___23924 < len__22203__auto___23923)){
args__22210__auto__.push((arguments[i__22204__auto___23924]));

var G__23925 = (i__22204__auto___23924 + (1));
i__22204__auto___23924 = G__23925;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22319__auto___23922))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22319__auto___23922){
return (function (args){
return cljs.core.deref.call(null,g__22319__auto___23922);
});})(g__22319__auto___23922))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__22319__auto___23922){
return (function (seq23865){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23865));
});})(g__22319__auto___23922))
;


var g__22319__auto___23926 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__22319__auto___23926){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23927 = arguments.length;
var i__22204__auto___23928 = (0);
while(true){
if((i__22204__auto___23928 < len__22203__auto___23927)){
args__22210__auto__.push((arguments[i__22204__auto___23928]));

var G__23929 = (i__22204__auto___23928 + (1));
i__22204__auto___23928 = G__23929;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22319__auto___23926))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22319__auto___23926){
return (function (args){
return cljs.core.deref.call(null,g__22319__auto___23926);
});})(g__22319__auto___23926))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__22319__auto___23926){
return (function (seq23866){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23866));
});})(g__22319__auto___23926))
;


var g__22319__auto___23930 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__22319__auto___23930){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23931 = arguments.length;
var i__22204__auto___23932 = (0);
while(true){
if((i__22204__auto___23932 < len__22203__auto___23931)){
args__22210__auto__.push((arguments[i__22204__auto___23932]));

var G__23933 = (i__22204__auto___23932 + (1));
i__22204__auto___23932 = G__23933;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22319__auto___23930))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22319__auto___23930){
return (function (args){
return cljs.core.deref.call(null,g__22319__auto___23930);
});})(g__22319__auto___23930))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__22319__auto___23930){
return (function (seq23867){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23867));
});})(g__22319__auto___23930))
;


var g__22319__auto___23934 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__22319__auto___23934){
return (function cljs$spec$gen$alpha$string(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23935 = arguments.length;
var i__22204__auto___23936 = (0);
while(true){
if((i__22204__auto___23936 < len__22203__auto___23935)){
args__22210__auto__.push((arguments[i__22204__auto___23936]));

var G__23937 = (i__22204__auto___23936 + (1));
i__22204__auto___23936 = G__23937;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22319__auto___23934))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22319__auto___23934){
return (function (args){
return cljs.core.deref.call(null,g__22319__auto___23934);
});})(g__22319__auto___23934))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__22319__auto___23934){
return (function (seq23868){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23868));
});})(g__22319__auto___23934))
;


var g__22319__auto___23938 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__22319__auto___23938){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23939 = arguments.length;
var i__22204__auto___23940 = (0);
while(true){
if((i__22204__auto___23940 < len__22203__auto___23939)){
args__22210__auto__.push((arguments[i__22204__auto___23940]));

var G__23941 = (i__22204__auto___23940 + (1));
i__22204__auto___23940 = G__23941;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22319__auto___23938))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22319__auto___23938){
return (function (args){
return cljs.core.deref.call(null,g__22319__auto___23938);
});})(g__22319__auto___23938))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__22319__auto___23938){
return (function (seq23869){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23869));
});})(g__22319__auto___23938))
;


var g__22319__auto___23942 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__22319__auto___23942){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23943 = arguments.length;
var i__22204__auto___23944 = (0);
while(true){
if((i__22204__auto___23944 < len__22203__auto___23943)){
args__22210__auto__.push((arguments[i__22204__auto___23944]));

var G__23945 = (i__22204__auto___23944 + (1));
i__22204__auto___23944 = G__23945;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22319__auto___23942))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22319__auto___23942){
return (function (args){
return cljs.core.deref.call(null,g__22319__auto___23942);
});})(g__22319__auto___23942))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__22319__auto___23942){
return (function (seq23870){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23870));
});})(g__22319__auto___23942))
;


var g__22319__auto___23946 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__22319__auto___23946){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23947 = arguments.length;
var i__22204__auto___23948 = (0);
while(true){
if((i__22204__auto___23948 < len__22203__auto___23947)){
args__22210__auto__.push((arguments[i__22204__auto___23948]));

var G__23949 = (i__22204__auto___23948 + (1));
i__22204__auto___23948 = G__23949;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22319__auto___23946))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22319__auto___23946){
return (function (args){
return cljs.core.deref.call(null,g__22319__auto___23946);
});})(g__22319__auto___23946))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__22319__auto___23946){
return (function (seq23871){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23871));
});})(g__22319__auto___23946))
;


var g__22319__auto___23950 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__22319__auto___23950){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23951 = arguments.length;
var i__22204__auto___23952 = (0);
while(true){
if((i__22204__auto___23952 < len__22203__auto___23951)){
args__22210__auto__.push((arguments[i__22204__auto___23952]));

var G__23953 = (i__22204__auto___23952 + (1));
i__22204__auto___23952 = G__23953;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22319__auto___23950))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22319__auto___23950){
return (function (args){
return cljs.core.deref.call(null,g__22319__auto___23950);
});})(g__22319__auto___23950))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__22319__auto___23950){
return (function (seq23872){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23872));
});})(g__22319__auto___23950))
;


var g__22319__auto___23954 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__22319__auto___23954){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23955 = arguments.length;
var i__22204__auto___23956 = (0);
while(true){
if((i__22204__auto___23956 < len__22203__auto___23955)){
args__22210__auto__.push((arguments[i__22204__auto___23956]));

var G__23957 = (i__22204__auto___23956 + (1));
i__22204__auto___23956 = G__23957;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});})(g__22319__auto___23954))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22319__auto___23954){
return (function (args){
return cljs.core.deref.call(null,g__22319__auto___23954);
});})(g__22319__auto___23954))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__22319__auto___23954){
return (function (seq23873){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23873));
});})(g__22319__auto___23954))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__22210__auto__ = [];
var len__22203__auto___23960 = arguments.length;
var i__22204__auto___23961 = (0);
while(true){
if((i__22204__auto___23961 < len__22203__auto___23960)){
args__22210__auto__.push((arguments[i__22204__auto___23961]));

var G__23962 = (i__22204__auto___23961 + (1));
i__22204__auto___23961 = G__23962;
continue;
} else {
}
break;
}

var argseq__22211__auto__ = ((((0) < args__22210__auto__.length))?(new cljs.core.IndexedSeq(args__22210__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__22211__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__23958_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__23958_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq23959){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23959));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__23963_SHARP_){
return (new Date(p1__23963_SHARP_));
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
