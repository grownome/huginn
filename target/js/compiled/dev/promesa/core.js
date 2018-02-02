// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('promesa.core');
goog.require('cljs.core');
goog.require('promesa.protocols');
goog.require('promesa.impl');
goog.require('promesa.impl.scheduler');
promesa.core.Promise = promesa.impl.Promise;
/**
 * Schedule a callable to be executed after the `ms` delay
 *   is reached.
 * 
 *   In JVM it uses a scheduled executor service and in JS
 *   it uses the `setTimeout` function.
 */
promesa.core.schedule = (function promesa$core$schedule(ms,func){
return promesa.impl.scheduler.schedule.call(null,ms,func);
});
/**
 * Return a resolved promise with provided value.
 */
promesa.core.resolved = (function promesa$core$resolved(v){
return promesa.impl.resolved.call(null,v);
});
/**
 * Return a rejected promise with provided reason.
 */
promesa.core.rejected = (function promesa$core$rejected(v){
return promesa.impl.rejected.call(null,v);
});
/**
 * The promise constructor.
 */
promesa.core.promise = (function promesa$core$promise(v){
return promesa.protocols._promise.call(null,v);
});
/**
 * Return true if `v` is a promise instance.
 */
promesa.core.promise_QMARK_ = (function promesa$core$promise_QMARK_(v){
return (v instanceof promesa.core.Promise);
});
/**
 * Returns true if promise `p` is already fulfilled.
 */
promesa.core.resolved_QMARK_ = (function promesa$core$resolved_QMARK_(p){
return promesa.protocols._resolved_QMARK_.call(null,p);
});
/**
 * Returns true if promise `p` is already rejected.
 */
promesa.core.rejected_QMARK_ = (function promesa$core$rejected_QMARK_(p){
return promesa.protocols._rejected_QMARK_.call(null,p);
});
/**
 * Returns true if promise `p` is stil pending.
 */
promesa.core.pending_QMARK_ = (function promesa$core$pending_QMARK_(p){
return promesa.protocols._pending_QMARK_.call(null,p);
});
/**
 * Returns the current promise value.
 */
promesa.core.extract = (function promesa$core$extract(p){
return promesa.protocols._extract.call(null,p);
});
/**
 * Returns true if promise `p` is already done.
 */
promesa.core.done_QMARK_ = cljs.core.complement.call(null,promesa.core.pending_QMARK_);
/**
 * Apply a function to the promise value and
 *   return a new promise with the result.
 */
promesa.core.map = (function promesa$core$map(f,p){
return promesa.protocols._map.call(null,p,f);
});
/**
 * Same as `map` but removes one level of
 *   promise neesting. Useful when the map function
 *   returns a promise instead of value.
 * 
 *   In JS environment this function is analogous
 *   to `map` because the promise abstraction overloads
 *   the `map` operator.
 */
promesa.core.mapcat = (function promesa$core$mapcat(f,p){
return promesa.protocols._bind.call(null,p,f);
});
/**
 * A chain helper for promises.
 */
promesa.core.bind = (function promesa$core$bind(p,f){
return promesa.protocols._bind.call(null,p,f);
});
/**
 * Similar to `map` but with parameters inverted
 *   for convenience and for familiarity with
 *   javascript's promises `.then` operator.
 * 
 *   Unlike Clojure's `map`, will resolve any promises
 *   returned  by `f`.
 */
promesa.core.then = (function promesa$core$then(p,f){
return promesa.protocols._map.call(null,p,f);
});
/**
 * Like then but accepts multiple parameters.
 */
promesa.core.chain = (function promesa$core$chain(var_args){
var args__10212__auto__ = [];
var len__10205__auto___35125 = arguments.length;
var i__10206__auto___35126 = (0);
while(true){
if((i__10206__auto___35126 < len__10205__auto___35125)){
args__10212__auto__.push((arguments[i__10206__auto___35126]));

var G__35127 = (i__10206__auto___35126 + (1));
i__10206__auto___35126 = G__35127;
continue;
} else {
}
break;
}

var argseq__10213__auto__ = ((((1) < args__10212__auto__.length))?(new cljs.core.IndexedSeq(args__10212__auto__.slice((1)),(0),null)):null);
return promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10213__auto__);
});

promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic = (function (p,funcs){
return cljs.core.reduce.call(null,(function (p1__35121_SHARP_,p2__35122_SHARP_){
return promesa.core.then.call(null,p1__35121_SHARP_,p2__35122_SHARP_);
}),p,funcs);
});

promesa.core.chain.cljs$lang$maxFixedArity = (1);

promesa.core.chain.cljs$lang$applyTo = (function (seq35123){
var G__35124 = cljs.core.first.call(null,seq35123);
var seq35123__$1 = cljs.core.next.call(null,seq35123);
return promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic(G__35124,seq35123__$1);
});

promesa.core.branch = (function promesa$core$branch(p,success,failure){
return promesa.protocols._catch.call(null,promesa.protocols._map.call(null,p,success),failure);
});
/**
 * Catch all promise chain helper.
 */
promesa.core.catch$ = (function promesa$core$catch(var_args){
var G__35130 = arguments.length;
switch (G__35130) {
case 2:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

promesa.core.catch$.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.protocols._catch.call(null,p,f);
});

promesa.core.catch$.cljs$core$IFn$_invoke$arity$3 = (function (p,pred_or_type,f){
var accept_QMARK_ = ((cljs.core.ifn_QMARK_.call(null,pred_or_type))?pred_or_type:(function (p1__35128_SHARP_){
return (p1__35128_SHARP_ instanceof pred_or_type);
}));
return promesa.protocols._catch.call(null,p,((function (accept_QMARK_){
return (function (e){
if(cljs.core.truth_(accept_QMARK_.call(null,e))){
return f.call(null,e);
} else {
return promesa.impl.rejected.call(null,e);
}
});})(accept_QMARK_))
);
});

promesa.core.catch$.cljs$lang$maxFixedArity = 3;

/**
 * Same as `catch` but with parameters inverted.
 */
promesa.core.error = (function promesa$core$error(var_args){
var G__35133 = arguments.length;
switch (G__35133) {
case 2:
return promesa.core.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

promesa.core.error.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.core.catch$.call(null,p,f);
});

promesa.core.error.cljs$core$IFn$_invoke$arity$3 = (function (f,type,p){
return promesa.core.catch$.call(null,p,type,f);
});

promesa.core.error.cljs$lang$maxFixedArity = 3;

/**
 * A short alias for `error` function.
 */
promesa.core.err = promesa.core.error;
/**
 * Attach handler to promise that will be
 *   executed independently if promise is
 *   resolved or rejected.
 */
promesa.core.finally$ = (function promesa$core$finally(p,callback){
return p.lastly(callback);
});
/**
 * Given an array of promises, return a promise
 *   that is fulfilled  when all the items in the
 *   array are fulfilled.
 * 
 *   Example:
 * 
 *   (-> (all [(promise :first-promise)
 *          (promise :second-promise)]
 *    (then (fn [[first-result second-result]]))
 *     (println (str first-result ", " second-result)
 * 
 *   Will print out
 *   :first-promise, :second-promise.
 * 
 *   If at least one of the promises is rejected, the resulting promise will be
 *   rejected.
 */
promesa.core.all = (function promesa$core$all(promises){
return promesa.core.then.call(null,promesa.core.Promise.all(cljs.core.into_array.call(null,promises)),cljs.core.vec);
});
/**
 * Given an array of promises, return a promise
 *   that is fulfilled when first one item in the
 *   array is fulfilled.
 */
promesa.core.any = (function promesa$core$any(promises){
return promesa.core.Promise.any(cljs.core.into_array.call(null,promises));
});
/**
 * Cancel the promise.
 */
promesa.core.cancel_BANG_ = (function promesa$core$cancel_BANG_(p){
promesa.protocols._cancel.call(null,p);

return p;
});
/**
 * Return true if `v` is a cancelled promise.
 */
promesa.core.cancelled_QMARK_ = (function promesa$core$cancelled_QMARK_(v){
return promesa.protocols._cancelled_QMARK_.call(null,v);
});
/**
 * Given a function that accepts a callback as the last argument return other
 *   function that returns a promise. Callback is expected to take single
 *   parameter (result of a computation).
 */
promesa.core.promisify = (function promesa$core$promisify(callable){
return (function() { 
var G__35136__delegate = function (args){
return promesa.core.promise.call(null,(function (resolve,reject){
var args__$1 = cljs.core.conj.call(null,cljs.core.vec.call(null,args),resolve);
try{return cljs.core.apply.call(null,callable,args__$1);
}catch (e35135){if((e35135 instanceof Error)){
var e = e35135;
return reject.call(null,e);
} else {
throw e35135;

}
}}));
};
var G__35136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35137__i = 0, G__35137__a = new Array(arguments.length -  0);
while (G__35137__i < G__35137__a.length) {G__35137__a[G__35137__i] = arguments[G__35137__i + 0]; ++G__35137__i;}
  args = new cljs.core.IndexedSeq(G__35137__a,0,null);
} 
return G__35136__delegate.call(this,args);};
G__35136.cljs$lang$maxFixedArity = 0;
G__35136.cljs$lang$applyTo = (function (arglist__35138){
var args = cljs.core.seq(arglist__35138);
return G__35136__delegate(args);
});
G__35136.cljs$core$IFn$_invoke$arity$variadic = G__35136__delegate;
return G__35136;
})()
;
});
/**
 * Returns a cancellable promise that will be fulfilled
 *   with this promise's fulfillment value or rejection reason.
 *   However, if this promise is not fulfilled or rejected
 *   within `ms` milliseconds, the returned promise is cancelled
 *   with a TimeoutError
 */
promesa.core.timeout = (function promesa$core$timeout(var_args){
var G__35140 = arguments.length;
switch (G__35140) {
case 2:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

promesa.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (p,t){
return p.timeout(t);
});

promesa.core.timeout.cljs$core$IFn$_invoke$arity$3 = (function (p,t,v){
return p.timeout(t,v);
});

promesa.core.timeout.cljs$lang$maxFixedArity = 3;

/**
 * Given a timeout in miliseconds and optional
 *   value, returns a promise that will fulfilled
 *   with provided value (or nil) after the
 *   time is reached.
 */
promesa.core.delay = (function promesa$core$delay(var_args){
var G__35143 = arguments.length;
switch (G__35143) {
case 1:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

promesa.core.delay.cljs$core$IFn$_invoke$arity$1 = (function (t){
return promesa.core.delay.call(null,t,null);
});

promesa.core.delay.cljs$core$IFn$_invoke$arity$2 = (function (t,v){
return promesa.core.promise.call(null,(function (resolve,reject){
return promesa.core.schedule.call(null,t,(function (){
return resolve.call(null,v);
}));
}));
});

promesa.core.delay.cljs$lang$maxFixedArity = 2;

/**
 * A helper for start promise chain without worry about
 *   synchronous or asynchronous exceptions. Returns a promise
 *   resolved with the return value of the callback.
 */
promesa.core.attempt = (function promesa$core$attempt(callback){
return promesa.core.promise.call(null,(function (resolve){
return resolve.call(null,callback.call(null));
}));
});
promesa.core.await$ = (function promesa$core$await(var_args){
var args__10212__auto__ = [];
var len__10205__auto___35146 = arguments.length;
var i__10206__auto___35147 = (0);
while(true){
if((i__10206__auto___35147 < len__10205__auto___35146)){
args__10212__auto__.push((arguments[i__10206__auto___35147]));

var G__35148 = (i__10206__auto___35147 + (1));
i__10206__auto___35147 = G__35148;
continue;
} else {
}
break;
}

var argseq__10213__auto__ = ((((0) < args__10212__auto__.length))?(new cljs.core.IndexedSeq(args__10212__auto__.slice((0)),(0),null)):null);
return promesa.core.await$.cljs$core$IFn$_invoke$arity$variadic(argseq__10213__auto__);
});

promesa.core.await$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw cljs.core.ex_info.call(null,"Should be only used in alet macro.",cljs.core.PersistentArrayMap.EMPTY);
});

promesa.core.await$.cljs$lang$maxFixedArity = (0);

promesa.core.await$.cljs$lang$applyTo = (function (seq35145){
return promesa.core.await$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35145));
});


//# sourceMappingURL=core.js.map
