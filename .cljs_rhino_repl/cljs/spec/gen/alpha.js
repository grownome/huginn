// Compiled by ClojureScript 1.9.946 {}
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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__20564__auto__,writer__20565__auto__,opt__20566__auto__){
return cljs.core._write.call(null,writer__20565__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__21179__auto__ = [];
var len__21172__auto___23629 = arguments.length;
var i__21173__auto___23630 = (0);
while(true){
if((i__21173__auto___23630 < len__21172__auto___23629)){
args__21179__auto__.push((arguments[i__21173__auto___23630]));

var G__23631 = (i__21173__auto___23630 + (1));
i__21173__auto___23630 = G__23631;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq23628){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23628));
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
var args__21179__auto__ = [];
var len__21172__auto___23633 = arguments.length;
var i__21173__auto___23634 = (0);
while(true){
if((i__21173__auto___23634 < len__21172__auto___23633)){
args__21179__auto__.push((arguments[i__21173__auto___23634]));

var G__23635 = (i__21173__auto___23634 + (1));
i__21173__auto___23634 = G__23635;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq23632){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23632));
});

var g_QMARK__23636 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_23637 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__23636){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__23636))
,null));
var mkg_23638 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__23636,g_23637){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__23636,g_23637))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__23636,g_23637,mkg_23638){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__23636).call(null,x);
});})(g_QMARK__23636,g_23637,mkg_23638))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__23636,g_23637,mkg_23638){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_23638).call(null,gfn);
});})(g_QMARK__23636,g_23637,mkg_23638))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__23636,g_23637,mkg_23638){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_23637).call(null,generator);
});})(g_QMARK__23636,g_23637,mkg_23638))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__22190__auto___23658 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__22190__auto___23658){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23659 = arguments.length;
var i__21173__auto___23660 = (0);
while(true){
if((i__21173__auto___23660 < len__21172__auto___23659)){
args__21179__auto__.push((arguments[i__21173__auto___23660]));

var G__23661 = (i__21173__auto___23660 + (1));
i__21173__auto___23660 = G__23661;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22190__auto___23658))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22190__auto___23658){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22190__auto___23658),args);
});})(g__22190__auto___23658))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__22190__auto___23658){
return (function (seq23639){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23639));
});})(g__22190__auto___23658))
;


var g__22190__auto___23662 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__22190__auto___23662){
return (function cljs$spec$gen$alpha$list(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23663 = arguments.length;
var i__21173__auto___23664 = (0);
while(true){
if((i__21173__auto___23664 < len__21172__auto___23663)){
args__21179__auto__.push((arguments[i__21173__auto___23664]));

var G__23665 = (i__21173__auto___23664 + (1));
i__21173__auto___23664 = G__23665;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22190__auto___23662))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22190__auto___23662){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22190__auto___23662),args);
});})(g__22190__auto___23662))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__22190__auto___23662){
return (function (seq23640){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23640));
});})(g__22190__auto___23662))
;


var g__22190__auto___23666 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__22190__auto___23666){
return (function cljs$spec$gen$alpha$map(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23667 = arguments.length;
var i__21173__auto___23668 = (0);
while(true){
if((i__21173__auto___23668 < len__21172__auto___23667)){
args__21179__auto__.push((arguments[i__21173__auto___23668]));

var G__23669 = (i__21173__auto___23668 + (1));
i__21173__auto___23668 = G__23669;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22190__auto___23666))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22190__auto___23666){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22190__auto___23666),args);
});})(g__22190__auto___23666))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__22190__auto___23666){
return (function (seq23641){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23641));
});})(g__22190__auto___23666))
;


var g__22190__auto___23670 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__22190__auto___23670){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23671 = arguments.length;
var i__21173__auto___23672 = (0);
while(true){
if((i__21173__auto___23672 < len__21172__auto___23671)){
args__21179__auto__.push((arguments[i__21173__auto___23672]));

var G__23673 = (i__21173__auto___23672 + (1));
i__21173__auto___23672 = G__23673;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22190__auto___23670))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22190__auto___23670){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22190__auto___23670),args);
});})(g__22190__auto___23670))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__22190__auto___23670){
return (function (seq23642){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23642));
});})(g__22190__auto___23670))
;


var g__22190__auto___23674 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__22190__auto___23674){
return (function cljs$spec$gen$alpha$set(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23675 = arguments.length;
var i__21173__auto___23676 = (0);
while(true){
if((i__21173__auto___23676 < len__21172__auto___23675)){
args__21179__auto__.push((arguments[i__21173__auto___23676]));

var G__23677 = (i__21173__auto___23676 + (1));
i__21173__auto___23676 = G__23677;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22190__auto___23674))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22190__auto___23674){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22190__auto___23674),args);
});})(g__22190__auto___23674))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__22190__auto___23674){
return (function (seq23643){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23643));
});})(g__22190__auto___23674))
;


var g__22190__auto___23678 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__22190__auto___23678){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23679 = arguments.length;
var i__21173__auto___23680 = (0);
while(true){
if((i__21173__auto___23680 < len__21172__auto___23679)){
args__21179__auto__.push((arguments[i__21173__auto___23680]));

var G__23681 = (i__21173__auto___23680 + (1));
i__21173__auto___23680 = G__23681;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22190__auto___23678))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22190__auto___23678){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22190__auto___23678),args);
});})(g__22190__auto___23678))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__22190__auto___23678){
return (function (seq23644){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23644));
});})(g__22190__auto___23678))
;


var g__22190__auto___23682 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__22190__auto___23682){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23683 = arguments.length;
var i__21173__auto___23684 = (0);
while(true){
if((i__21173__auto___23684 < len__21172__auto___23683)){
args__21179__auto__.push((arguments[i__21173__auto___23684]));

var G__23685 = (i__21173__auto___23684 + (1));
i__21173__auto___23684 = G__23685;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22190__auto___23682))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22190__auto___23682){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22190__auto___23682),args);
});})(g__22190__auto___23682))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__22190__auto___23682){
return (function (seq23645){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23645));
});})(g__22190__auto___23682))
;


var g__22190__auto___23686 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__22190__auto___23686){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23687 = arguments.length;
var i__21173__auto___23688 = (0);
while(true){
if((i__21173__auto___23688 < len__21172__auto___23687)){
args__21179__auto__.push((arguments[i__21173__auto___23688]));

var G__23689 = (i__21173__auto___23688 + (1));
i__21173__auto___23688 = G__23689;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22190__auto___23686))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22190__auto___23686){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22190__auto___23686),args);
});})(g__22190__auto___23686))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__22190__auto___23686){
return (function (seq23646){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23646));
});})(g__22190__auto___23686))
;


var g__22190__auto___23690 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__22190__auto___23690){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23691 = arguments.length;
var i__21173__auto___23692 = (0);
while(true){
if((i__21173__auto___23692 < len__21172__auto___23691)){
args__21179__auto__.push((arguments[i__21173__auto___23692]));

var G__23693 = (i__21173__auto___23692 + (1));
i__21173__auto___23692 = G__23693;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22190__auto___23690))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22190__auto___23690){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22190__auto___23690),args);
});})(g__22190__auto___23690))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__22190__auto___23690){
return (function (seq23647){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23647));
});})(g__22190__auto___23690))
;


var g__22190__auto___23694 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__22190__auto___23694){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23695 = arguments.length;
var i__21173__auto___23696 = (0);
while(true){
if((i__21173__auto___23696 < len__21172__auto___23695)){
args__21179__auto__.push((arguments[i__21173__auto___23696]));

var G__23697 = (i__21173__auto___23696 + (1));
i__21173__auto___23696 = G__23697;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22190__auto___23694))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22190__auto___23694){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22190__auto___23694),args);
});})(g__22190__auto___23694))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__22190__auto___23694){
return (function (seq23648){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23648));
});})(g__22190__auto___23694))
;


var g__22190__auto___23698 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__22190__auto___23698){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23699 = arguments.length;
var i__21173__auto___23700 = (0);
while(true){
if((i__21173__auto___23700 < len__21172__auto___23699)){
args__21179__auto__.push((arguments[i__21173__auto___23700]));

var G__23701 = (i__21173__auto___23700 + (1));
i__21173__auto___23700 = G__23701;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22190__auto___23698))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22190__auto___23698){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22190__auto___23698),args);
});})(g__22190__auto___23698))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__22190__auto___23698){
return (function (seq23649){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23649));
});})(g__22190__auto___23698))
;


var g__22190__auto___23702 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__22190__auto___23702){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23703 = arguments.length;
var i__21173__auto___23704 = (0);
while(true){
if((i__21173__auto___23704 < len__21172__auto___23703)){
args__21179__auto__.push((arguments[i__21173__auto___23704]));

var G__23705 = (i__21173__auto___23704 + (1));
i__21173__auto___23704 = G__23705;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22190__auto___23702))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22190__auto___23702){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22190__auto___23702),args);
});})(g__22190__auto___23702))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__22190__auto___23702){
return (function (seq23650){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23650));
});})(g__22190__auto___23702))
;


var g__22190__auto___23706 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__22190__auto___23706){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23707 = arguments.length;
var i__21173__auto___23708 = (0);
while(true){
if((i__21173__auto___23708 < len__21172__auto___23707)){
args__21179__auto__.push((arguments[i__21173__auto___23708]));

var G__23709 = (i__21173__auto___23708 + (1));
i__21173__auto___23708 = G__23709;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22190__auto___23706))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22190__auto___23706){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22190__auto___23706),args);
});})(g__22190__auto___23706))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__22190__auto___23706){
return (function (seq23651){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23651));
});})(g__22190__auto___23706))
;


var g__22190__auto___23710 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__22190__auto___23710){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23711 = arguments.length;
var i__21173__auto___23712 = (0);
while(true){
if((i__21173__auto___23712 < len__21172__auto___23711)){
args__21179__auto__.push((arguments[i__21173__auto___23712]));

var G__23713 = (i__21173__auto___23712 + (1));
i__21173__auto___23712 = G__23713;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22190__auto___23710))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22190__auto___23710){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22190__auto___23710),args);
});})(g__22190__auto___23710))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__22190__auto___23710){
return (function (seq23652){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23652));
});})(g__22190__auto___23710))
;


var g__22190__auto___23714 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__22190__auto___23714){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23715 = arguments.length;
var i__21173__auto___23716 = (0);
while(true){
if((i__21173__auto___23716 < len__21172__auto___23715)){
args__21179__auto__.push((arguments[i__21173__auto___23716]));

var G__23717 = (i__21173__auto___23716 + (1));
i__21173__auto___23716 = G__23717;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22190__auto___23714))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22190__auto___23714){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22190__auto___23714),args);
});})(g__22190__auto___23714))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__22190__auto___23714){
return (function (seq23653){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23653));
});})(g__22190__auto___23714))
;


var g__22190__auto___23718 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__22190__auto___23718){
return (function cljs$spec$gen$alpha$return(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23719 = arguments.length;
var i__21173__auto___23720 = (0);
while(true){
if((i__21173__auto___23720 < len__21172__auto___23719)){
args__21179__auto__.push((arguments[i__21173__auto___23720]));

var G__23721 = (i__21173__auto___23720 + (1));
i__21173__auto___23720 = G__23721;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22190__auto___23718))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22190__auto___23718){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22190__auto___23718),args);
});})(g__22190__auto___23718))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__22190__auto___23718){
return (function (seq23654){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23654));
});})(g__22190__auto___23718))
;


var g__22190__auto___23722 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__22190__auto___23722){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23723 = arguments.length;
var i__21173__auto___23724 = (0);
while(true){
if((i__21173__auto___23724 < len__21172__auto___23723)){
args__21179__auto__.push((arguments[i__21173__auto___23724]));

var G__23725 = (i__21173__auto___23724 + (1));
i__21173__auto___23724 = G__23725;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22190__auto___23722))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22190__auto___23722){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22190__auto___23722),args);
});})(g__22190__auto___23722))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__22190__auto___23722){
return (function (seq23655){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23655));
});})(g__22190__auto___23722))
;


var g__22190__auto___23726 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__22190__auto___23726){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23727 = arguments.length;
var i__21173__auto___23728 = (0);
while(true){
if((i__21173__auto___23728 < len__21172__auto___23727)){
args__21179__auto__.push((arguments[i__21173__auto___23728]));

var G__23729 = (i__21173__auto___23728 + (1));
i__21173__auto___23728 = G__23729;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22190__auto___23726))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22190__auto___23726){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22190__auto___23726),args);
});})(g__22190__auto___23726))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__22190__auto___23726){
return (function (seq23656){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23656));
});})(g__22190__auto___23726))
;


var g__22190__auto___23730 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__22190__auto___23730){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23731 = arguments.length;
var i__21173__auto___23732 = (0);
while(true){
if((i__21173__auto___23732 < len__21172__auto___23731)){
args__21179__auto__.push((arguments[i__21173__auto___23732]));

var G__23733 = (i__21173__auto___23732 + (1));
i__21173__auto___23732 = G__23733;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22190__auto___23730))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22190__auto___23730){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22190__auto___23730),args);
});})(g__22190__auto___23730))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__22190__auto___23730){
return (function (seq23657){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23657));
});})(g__22190__auto___23730))
;

var g__22203__auto___23755 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__22203__auto___23755){
return (function cljs$spec$gen$alpha$any(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23756 = arguments.length;
var i__21173__auto___23757 = (0);
while(true){
if((i__21173__auto___23757 < len__21172__auto___23756)){
args__21179__auto__.push((arguments[i__21173__auto___23757]));

var G__23758 = (i__21173__auto___23757 + (1));
i__21173__auto___23757 = G__23758;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22203__auto___23755))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22203__auto___23755){
return (function (args){
return cljs.core.deref.call(null,g__22203__auto___23755);
});})(g__22203__auto___23755))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__22203__auto___23755){
return (function (seq23734){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23734));
});})(g__22203__auto___23755))
;


var g__22203__auto___23759 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__22203__auto___23759){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23760 = arguments.length;
var i__21173__auto___23761 = (0);
while(true){
if((i__21173__auto___23761 < len__21172__auto___23760)){
args__21179__auto__.push((arguments[i__21173__auto___23761]));

var G__23762 = (i__21173__auto___23761 + (1));
i__21173__auto___23761 = G__23762;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22203__auto___23759))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22203__auto___23759){
return (function (args){
return cljs.core.deref.call(null,g__22203__auto___23759);
});})(g__22203__auto___23759))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__22203__auto___23759){
return (function (seq23735){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23735));
});})(g__22203__auto___23759))
;


var g__22203__auto___23763 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__22203__auto___23763){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23764 = arguments.length;
var i__21173__auto___23765 = (0);
while(true){
if((i__21173__auto___23765 < len__21172__auto___23764)){
args__21179__auto__.push((arguments[i__21173__auto___23765]));

var G__23766 = (i__21173__auto___23765 + (1));
i__21173__auto___23765 = G__23766;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22203__auto___23763))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22203__auto___23763){
return (function (args){
return cljs.core.deref.call(null,g__22203__auto___23763);
});})(g__22203__auto___23763))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__22203__auto___23763){
return (function (seq23736){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23736));
});})(g__22203__auto___23763))
;


var g__22203__auto___23767 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__22203__auto___23767){
return (function cljs$spec$gen$alpha$char(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23768 = arguments.length;
var i__21173__auto___23769 = (0);
while(true){
if((i__21173__auto___23769 < len__21172__auto___23768)){
args__21179__auto__.push((arguments[i__21173__auto___23769]));

var G__23770 = (i__21173__auto___23769 + (1));
i__21173__auto___23769 = G__23770;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22203__auto___23767))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22203__auto___23767){
return (function (args){
return cljs.core.deref.call(null,g__22203__auto___23767);
});})(g__22203__auto___23767))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__22203__auto___23767){
return (function (seq23737){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23737));
});})(g__22203__auto___23767))
;


var g__22203__auto___23771 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__22203__auto___23771){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23772 = arguments.length;
var i__21173__auto___23773 = (0);
while(true){
if((i__21173__auto___23773 < len__21172__auto___23772)){
args__21179__auto__.push((arguments[i__21173__auto___23773]));

var G__23774 = (i__21173__auto___23773 + (1));
i__21173__auto___23773 = G__23774;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22203__auto___23771))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22203__auto___23771){
return (function (args){
return cljs.core.deref.call(null,g__22203__auto___23771);
});})(g__22203__auto___23771))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__22203__auto___23771){
return (function (seq23738){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23738));
});})(g__22203__auto___23771))
;


var g__22203__auto___23775 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__22203__auto___23775){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23776 = arguments.length;
var i__21173__auto___23777 = (0);
while(true){
if((i__21173__auto___23777 < len__21172__auto___23776)){
args__21179__auto__.push((arguments[i__21173__auto___23777]));

var G__23778 = (i__21173__auto___23777 + (1));
i__21173__auto___23777 = G__23778;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22203__auto___23775))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22203__auto___23775){
return (function (args){
return cljs.core.deref.call(null,g__22203__auto___23775);
});})(g__22203__auto___23775))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__22203__auto___23775){
return (function (seq23739){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23739));
});})(g__22203__auto___23775))
;


var g__22203__auto___23779 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__22203__auto___23779){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23780 = arguments.length;
var i__21173__auto___23781 = (0);
while(true){
if((i__21173__auto___23781 < len__21172__auto___23780)){
args__21179__auto__.push((arguments[i__21173__auto___23781]));

var G__23782 = (i__21173__auto___23781 + (1));
i__21173__auto___23781 = G__23782;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22203__auto___23779))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22203__auto___23779){
return (function (args){
return cljs.core.deref.call(null,g__22203__auto___23779);
});})(g__22203__auto___23779))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__22203__auto___23779){
return (function (seq23740){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23740));
});})(g__22203__auto___23779))
;


var g__22203__auto___23783 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__22203__auto___23783){
return (function cljs$spec$gen$alpha$double(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23784 = arguments.length;
var i__21173__auto___23785 = (0);
while(true){
if((i__21173__auto___23785 < len__21172__auto___23784)){
args__21179__auto__.push((arguments[i__21173__auto___23785]));

var G__23786 = (i__21173__auto___23785 + (1));
i__21173__auto___23785 = G__23786;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22203__auto___23783))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22203__auto___23783){
return (function (args){
return cljs.core.deref.call(null,g__22203__auto___23783);
});})(g__22203__auto___23783))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__22203__auto___23783){
return (function (seq23741){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23741));
});})(g__22203__auto___23783))
;


var g__22203__auto___23787 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__22203__auto___23787){
return (function cljs$spec$gen$alpha$int(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23788 = arguments.length;
var i__21173__auto___23789 = (0);
while(true){
if((i__21173__auto___23789 < len__21172__auto___23788)){
args__21179__auto__.push((arguments[i__21173__auto___23789]));

var G__23790 = (i__21173__auto___23789 + (1));
i__21173__auto___23789 = G__23790;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22203__auto___23787))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22203__auto___23787){
return (function (args){
return cljs.core.deref.call(null,g__22203__auto___23787);
});})(g__22203__auto___23787))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__22203__auto___23787){
return (function (seq23742){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23742));
});})(g__22203__auto___23787))
;


var g__22203__auto___23791 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__22203__auto___23791){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23792 = arguments.length;
var i__21173__auto___23793 = (0);
while(true){
if((i__21173__auto___23793 < len__21172__auto___23792)){
args__21179__auto__.push((arguments[i__21173__auto___23793]));

var G__23794 = (i__21173__auto___23793 + (1));
i__21173__auto___23793 = G__23794;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22203__auto___23791))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22203__auto___23791){
return (function (args){
return cljs.core.deref.call(null,g__22203__auto___23791);
});})(g__22203__auto___23791))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__22203__auto___23791){
return (function (seq23743){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23743));
});})(g__22203__auto___23791))
;


var g__22203__auto___23795 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__22203__auto___23795){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23796 = arguments.length;
var i__21173__auto___23797 = (0);
while(true){
if((i__21173__auto___23797 < len__21172__auto___23796)){
args__21179__auto__.push((arguments[i__21173__auto___23797]));

var G__23798 = (i__21173__auto___23797 + (1));
i__21173__auto___23797 = G__23798;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22203__auto___23795))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22203__auto___23795){
return (function (args){
return cljs.core.deref.call(null,g__22203__auto___23795);
});})(g__22203__auto___23795))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__22203__auto___23795){
return (function (seq23744){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23744));
});})(g__22203__auto___23795))
;


var g__22203__auto___23799 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__22203__auto___23799){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23800 = arguments.length;
var i__21173__auto___23801 = (0);
while(true){
if((i__21173__auto___23801 < len__21172__auto___23800)){
args__21179__auto__.push((arguments[i__21173__auto___23801]));

var G__23802 = (i__21173__auto___23801 + (1));
i__21173__auto___23801 = G__23802;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22203__auto___23799))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22203__auto___23799){
return (function (args){
return cljs.core.deref.call(null,g__22203__auto___23799);
});})(g__22203__auto___23799))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__22203__auto___23799){
return (function (seq23745){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23745));
});})(g__22203__auto___23799))
;


var g__22203__auto___23803 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__22203__auto___23803){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23804 = arguments.length;
var i__21173__auto___23805 = (0);
while(true){
if((i__21173__auto___23805 < len__21172__auto___23804)){
args__21179__auto__.push((arguments[i__21173__auto___23805]));

var G__23806 = (i__21173__auto___23805 + (1));
i__21173__auto___23805 = G__23806;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22203__auto___23803))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22203__auto___23803){
return (function (args){
return cljs.core.deref.call(null,g__22203__auto___23803);
});})(g__22203__auto___23803))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__22203__auto___23803){
return (function (seq23746){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23746));
});})(g__22203__auto___23803))
;


var g__22203__auto___23807 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__22203__auto___23807){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23808 = arguments.length;
var i__21173__auto___23809 = (0);
while(true){
if((i__21173__auto___23809 < len__21172__auto___23808)){
args__21179__auto__.push((arguments[i__21173__auto___23809]));

var G__23810 = (i__21173__auto___23809 + (1));
i__21173__auto___23809 = G__23810;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22203__auto___23807))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22203__auto___23807){
return (function (args){
return cljs.core.deref.call(null,g__22203__auto___23807);
});})(g__22203__auto___23807))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__22203__auto___23807){
return (function (seq23747){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23747));
});})(g__22203__auto___23807))
;


var g__22203__auto___23811 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__22203__auto___23811){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23812 = arguments.length;
var i__21173__auto___23813 = (0);
while(true){
if((i__21173__auto___23813 < len__21172__auto___23812)){
args__21179__auto__.push((arguments[i__21173__auto___23813]));

var G__23814 = (i__21173__auto___23813 + (1));
i__21173__auto___23813 = G__23814;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22203__auto___23811))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22203__auto___23811){
return (function (args){
return cljs.core.deref.call(null,g__22203__auto___23811);
});})(g__22203__auto___23811))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__22203__auto___23811){
return (function (seq23748){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23748));
});})(g__22203__auto___23811))
;


var g__22203__auto___23815 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__22203__auto___23815){
return (function cljs$spec$gen$alpha$string(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23816 = arguments.length;
var i__21173__auto___23817 = (0);
while(true){
if((i__21173__auto___23817 < len__21172__auto___23816)){
args__21179__auto__.push((arguments[i__21173__auto___23817]));

var G__23818 = (i__21173__auto___23817 + (1));
i__21173__auto___23817 = G__23818;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22203__auto___23815))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22203__auto___23815){
return (function (args){
return cljs.core.deref.call(null,g__22203__auto___23815);
});})(g__22203__auto___23815))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__22203__auto___23815){
return (function (seq23749){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23749));
});})(g__22203__auto___23815))
;


var g__22203__auto___23819 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__22203__auto___23819){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23820 = arguments.length;
var i__21173__auto___23821 = (0);
while(true){
if((i__21173__auto___23821 < len__21172__auto___23820)){
args__21179__auto__.push((arguments[i__21173__auto___23821]));

var G__23822 = (i__21173__auto___23821 + (1));
i__21173__auto___23821 = G__23822;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22203__auto___23819))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22203__auto___23819){
return (function (args){
return cljs.core.deref.call(null,g__22203__auto___23819);
});})(g__22203__auto___23819))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__22203__auto___23819){
return (function (seq23750){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23750));
});})(g__22203__auto___23819))
;


var g__22203__auto___23823 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__22203__auto___23823){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23824 = arguments.length;
var i__21173__auto___23825 = (0);
while(true){
if((i__21173__auto___23825 < len__21172__auto___23824)){
args__21179__auto__.push((arguments[i__21173__auto___23825]));

var G__23826 = (i__21173__auto___23825 + (1));
i__21173__auto___23825 = G__23826;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22203__auto___23823))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22203__auto___23823){
return (function (args){
return cljs.core.deref.call(null,g__22203__auto___23823);
});})(g__22203__auto___23823))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__22203__auto___23823){
return (function (seq23751){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23751));
});})(g__22203__auto___23823))
;


var g__22203__auto___23827 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__22203__auto___23827){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23828 = arguments.length;
var i__21173__auto___23829 = (0);
while(true){
if((i__21173__auto___23829 < len__21172__auto___23828)){
args__21179__auto__.push((arguments[i__21173__auto___23829]));

var G__23830 = (i__21173__auto___23829 + (1));
i__21173__auto___23829 = G__23830;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22203__auto___23827))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22203__auto___23827){
return (function (args){
return cljs.core.deref.call(null,g__22203__auto___23827);
});})(g__22203__auto___23827))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__22203__auto___23827){
return (function (seq23752){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23752));
});})(g__22203__auto___23827))
;


var g__22203__auto___23831 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__22203__auto___23831){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23832 = arguments.length;
var i__21173__auto___23833 = (0);
while(true){
if((i__21173__auto___23833 < len__21172__auto___23832)){
args__21179__auto__.push((arguments[i__21173__auto___23833]));

var G__23834 = (i__21173__auto___23833 + (1));
i__21173__auto___23833 = G__23834;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22203__auto___23831))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22203__auto___23831){
return (function (args){
return cljs.core.deref.call(null,g__22203__auto___23831);
});})(g__22203__auto___23831))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__22203__auto___23831){
return (function (seq23753){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23753));
});})(g__22203__auto___23831))
;


var g__22203__auto___23835 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__22203__auto___23835){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23836 = arguments.length;
var i__21173__auto___23837 = (0);
while(true){
if((i__21173__auto___23837 < len__21172__auto___23836)){
args__21179__auto__.push((arguments[i__21173__auto___23837]));

var G__23838 = (i__21173__auto___23837 + (1));
i__21173__auto___23837 = G__23838;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});})(g__22203__auto___23835))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22203__auto___23835){
return (function (args){
return cljs.core.deref.call(null,g__22203__auto___23835);
});})(g__22203__auto___23835))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__22203__auto___23835){
return (function (seq23754){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23754));
});})(g__22203__auto___23835))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__21179__auto__ = [];
var len__21172__auto___23841 = arguments.length;
var i__21173__auto___23842 = (0);
while(true){
if((i__21173__auto___23842 < len__21172__auto___23841)){
args__21179__auto__.push((arguments[i__21173__auto___23842]));

var G__23843 = (i__21173__auto___23842 + (1));
i__21173__auto___23842 = G__23843;
continue;
} else {
}
break;
}

var argseq__21180__auto__ = ((((0) < args__21179__auto__.length))?(new cljs.core.IndexedSeq(args__21179__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__21180__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__23839_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__23839_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq23840){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23840));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__23844_SHARP_){
return (new Date(p1__23844_SHARP_));
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
