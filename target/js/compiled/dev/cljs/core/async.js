// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45352 = arguments.length;
switch (G__45352) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async45353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45353 = (function (f,blockable,meta45354){
this.f = f;
this.blockable = blockable;
this.meta45354 = meta45354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45355,meta45354__$1){
var self__ = this;
var _45355__$1 = this;
return (new cljs.core.async.t_cljs$core$async45353(self__.f,self__.blockable,meta45354__$1));
});

cljs.core.async.t_cljs$core$async45353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45355){
var self__ = this;
var _45355__$1 = this;
return self__.meta45354;
});

cljs.core.async.t_cljs$core$async45353.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45353.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async45353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async45353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45354","meta45354",1531787444,null)], null);
});

cljs.core.async.t_cljs$core$async45353.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45353";

cljs.core.async.t_cljs$core$async45353.cljs$lang$ctorPrWriter = (function (this__42083__auto__,writer__42084__auto__,opt__42085__auto__){
return cljs.core._write.call(null,writer__42084__auto__,"cljs.core.async/t_cljs$core$async45353");
});

cljs.core.async.__GT_t_cljs$core$async45353 = (function cljs$core$async$__GT_t_cljs$core$async45353(f__$1,blockable__$1,meta45354){
return (new cljs.core.async.t_cljs$core$async45353(f__$1,blockable__$1,meta45354));
});

}

return (new cljs.core.async.t_cljs$core$async45353(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__45359 = arguments.length;
switch (G__45359) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__45362 = arguments.length;
switch (G__45362) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__45365 = arguments.length;
switch (G__45365) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_45367 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_45367);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_45367,ret){
return (function (){
return fn1.call(null,val_45367);
});})(val_45367,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__45369 = arguments.length;
switch (G__45369) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__42457__auto___45371 = n;
var x_45372 = (0);
while(true){
if((x_45372 < n__42457__auto___45371)){
(a[x_45372] = (0));

var G__45373 = (x_45372 + (1));
x_45372 = G__45373;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__45374 = (i + (1));
i = G__45374;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async45375 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45375 = (function (flag,meta45376){
this.flag = flag;
this.meta45376 = meta45376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_45377,meta45376__$1){
var self__ = this;
var _45377__$1 = this;
return (new cljs.core.async.t_cljs$core$async45375(self__.flag,meta45376__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async45375.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_45377){
var self__ = this;
var _45377__$1 = this;
return self__.meta45376;
});})(flag))
;

cljs.core.async.t_cljs$core$async45375.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45375.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async45375.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45375.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45375.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45376","meta45376",-286919142,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async45375.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45375";

cljs.core.async.t_cljs$core$async45375.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__42083__auto__,writer__42084__auto__,opt__42085__auto__){
return cljs.core._write.call(null,writer__42084__auto__,"cljs.core.async/t_cljs$core$async45375");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async45375 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45375(flag__$1,meta45376){
return (new cljs.core.async.t_cljs$core$async45375(flag__$1,meta45376));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async45375(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async45378 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45378 = (function (flag,cb,meta45379){
this.flag = flag;
this.cb = cb;
this.meta45379 = meta45379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45380,meta45379__$1){
var self__ = this;
var _45380__$1 = this;
return (new cljs.core.async.t_cljs$core$async45378(self__.flag,self__.cb,meta45379__$1));
});

cljs.core.async.t_cljs$core$async45378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45380){
var self__ = this;
var _45380__$1 = this;
return self__.meta45379;
});

cljs.core.async.t_cljs$core$async45378.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45378.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async45378.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45378.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async45378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45379","meta45379",-1549439586,null)], null);
});

cljs.core.async.t_cljs$core$async45378.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45378";

cljs.core.async.t_cljs$core$async45378.cljs$lang$ctorPrWriter = (function (this__42083__auto__,writer__42084__auto__,opt__42085__auto__){
return cljs.core._write.call(null,writer__42084__auto__,"cljs.core.async/t_cljs$core$async45378");
});

cljs.core.async.__GT_t_cljs$core$async45378 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45378(flag__$1,cb__$1,meta45379){
return (new cljs.core.async.t_cljs$core$async45378(flag__$1,cb__$1,meta45379));
});

}

return (new cljs.core.async.t_cljs$core$async45378(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45381_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45381_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45382_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45382_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__41412__auto__ = wport;
if(cljs.core.truth_(or__41412__auto__)){
return or__41412__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45383 = (i + (1));
i = G__45383;
continue;
}
} else {
return null;
}
break;
}
})();
var or__41412__auto__ = ret;
if(cljs.core.truth_(or__41412__auto__)){
return or__41412__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__41400__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__41400__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__41400__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__42698__auto__ = [];
var len__42691__auto___45389 = arguments.length;
var i__42692__auto___45390 = (0);
while(true){
if((i__42692__auto___45390 < len__42691__auto___45389)){
args__42698__auto__.push((arguments[i__42692__auto___45390]));

var G__45391 = (i__42692__auto___45390 + (1));
i__42692__auto___45390 = G__45391;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((1) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42699__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45386){
var map__45387 = p__45386;
var map__45387__$1 = ((((!((map__45387 == null)))?((((map__45387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45387):map__45387);
var opts = map__45387__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45384){
var G__45385 = cljs.core.first.call(null,seq45384);
var seq45384__$1 = cljs.core.next.call(null,seq45384);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45385,seq45384__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__45393 = arguments.length;
switch (G__45393) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__45292__auto___45439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto___45439){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto___45439){
return (function (state_45417){
var state_val_45418 = (state_45417[(1)]);
if((state_val_45418 === (7))){
var inst_45413 = (state_45417[(2)]);
var state_45417__$1 = state_45417;
var statearr_45419_45440 = state_45417__$1;
(statearr_45419_45440[(2)] = inst_45413);

(statearr_45419_45440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45418 === (1))){
var state_45417__$1 = state_45417;
var statearr_45420_45441 = state_45417__$1;
(statearr_45420_45441[(2)] = null);

(statearr_45420_45441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45418 === (4))){
var inst_45396 = (state_45417[(7)]);
var inst_45396__$1 = (state_45417[(2)]);
var inst_45397 = (inst_45396__$1 == null);
var state_45417__$1 = (function (){var statearr_45421 = state_45417;
(statearr_45421[(7)] = inst_45396__$1);

return statearr_45421;
})();
if(cljs.core.truth_(inst_45397)){
var statearr_45422_45442 = state_45417__$1;
(statearr_45422_45442[(1)] = (5));

} else {
var statearr_45423_45443 = state_45417__$1;
(statearr_45423_45443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45418 === (13))){
var state_45417__$1 = state_45417;
var statearr_45424_45444 = state_45417__$1;
(statearr_45424_45444[(2)] = null);

(statearr_45424_45444[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45418 === (6))){
var inst_45396 = (state_45417[(7)]);
var state_45417__$1 = state_45417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45417__$1,(11),to,inst_45396);
} else {
if((state_val_45418 === (3))){
var inst_45415 = (state_45417[(2)]);
var state_45417__$1 = state_45417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45417__$1,inst_45415);
} else {
if((state_val_45418 === (12))){
var state_45417__$1 = state_45417;
var statearr_45425_45445 = state_45417__$1;
(statearr_45425_45445[(2)] = null);

(statearr_45425_45445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45418 === (2))){
var state_45417__$1 = state_45417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45417__$1,(4),from);
} else {
if((state_val_45418 === (11))){
var inst_45406 = (state_45417[(2)]);
var state_45417__$1 = state_45417;
if(cljs.core.truth_(inst_45406)){
var statearr_45426_45446 = state_45417__$1;
(statearr_45426_45446[(1)] = (12));

} else {
var statearr_45427_45447 = state_45417__$1;
(statearr_45427_45447[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45418 === (9))){
var state_45417__$1 = state_45417;
var statearr_45428_45448 = state_45417__$1;
(statearr_45428_45448[(2)] = null);

(statearr_45428_45448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45418 === (5))){
var state_45417__$1 = state_45417;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45429_45449 = state_45417__$1;
(statearr_45429_45449[(1)] = (8));

} else {
var statearr_45430_45450 = state_45417__$1;
(statearr_45430_45450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45418 === (14))){
var inst_45411 = (state_45417[(2)]);
var state_45417__$1 = state_45417;
var statearr_45431_45451 = state_45417__$1;
(statearr_45431_45451[(2)] = inst_45411);

(statearr_45431_45451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45418 === (10))){
var inst_45403 = (state_45417[(2)]);
var state_45417__$1 = state_45417;
var statearr_45432_45452 = state_45417__$1;
(statearr_45432_45452[(2)] = inst_45403);

(statearr_45432_45452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45418 === (8))){
var inst_45400 = cljs.core.async.close_BANG_.call(null,to);
var state_45417__$1 = state_45417;
var statearr_45433_45453 = state_45417__$1;
(statearr_45433_45453[(2)] = inst_45400);

(statearr_45433_45453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45292__auto___45439))
;
return ((function (switch__45202__auto__,c__45292__auto___45439){
return (function() {
var cljs$core$async$state_machine__45203__auto__ = null;
var cljs$core$async$state_machine__45203__auto____0 = (function (){
var statearr_45434 = [null,null,null,null,null,null,null,null];
(statearr_45434[(0)] = cljs$core$async$state_machine__45203__auto__);

(statearr_45434[(1)] = (1));

return statearr_45434;
});
var cljs$core$async$state_machine__45203__auto____1 = (function (state_45417){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_45417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e45435){if((e45435 instanceof Object)){
var ex__45206__auto__ = e45435;
var statearr_45436_45454 = state_45417;
(statearr_45436_45454[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45455 = state_45417;
state_45417 = G__45455;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs$core$async$state_machine__45203__auto__ = function(state_45417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45203__auto____1.call(this,state_45417);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45203__auto____0;
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45203__auto____1;
return cljs$core$async$state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto___45439))
})();
var state__45294__auto__ = (function (){var statearr_45437 = f__45293__auto__.call(null);
(statearr_45437[(6)] = c__45292__auto___45439);

return statearr_45437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto___45439))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__45456){
var vec__45457 = p__45456;
var v = cljs.core.nth.call(null,vec__45457,(0),null);
var p = cljs.core.nth.call(null,vec__45457,(1),null);
var job = vec__45457;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__45292__auto___45628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto___45628,res,vec__45457,v,p,job,jobs,results){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto___45628,res,vec__45457,v,p,job,jobs,results){
return (function (state_45464){
var state_val_45465 = (state_45464[(1)]);
if((state_val_45465 === (1))){
var state_45464__$1 = state_45464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45464__$1,(2),res,v);
} else {
if((state_val_45465 === (2))){
var inst_45461 = (state_45464[(2)]);
var inst_45462 = cljs.core.async.close_BANG_.call(null,res);
var state_45464__$1 = (function (){var statearr_45466 = state_45464;
(statearr_45466[(7)] = inst_45461);

return statearr_45466;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45464__$1,inst_45462);
} else {
return null;
}
}
});})(c__45292__auto___45628,res,vec__45457,v,p,job,jobs,results))
;
return ((function (switch__45202__auto__,c__45292__auto___45628,res,vec__45457,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____0 = (function (){
var statearr_45467 = [null,null,null,null,null,null,null,null];
(statearr_45467[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__);

(statearr_45467[(1)] = (1));

return statearr_45467;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____1 = (function (state_45464){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_45464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e45468){if((e45468 instanceof Object)){
var ex__45206__auto__ = e45468;
var statearr_45469_45629 = state_45464;
(statearr_45469_45629[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45630 = state_45464;
state_45464 = G__45630;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__ = function(state_45464){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____1.call(this,state_45464);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto___45628,res,vec__45457,v,p,job,jobs,results))
})();
var state__45294__auto__ = (function (){var statearr_45470 = f__45293__auto__.call(null);
(statearr_45470[(6)] = c__45292__auto___45628);

return statearr_45470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto___45628,res,vec__45457,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__45471){
var vec__45472 = p__45471;
var v = cljs.core.nth.call(null,vec__45472,(0),null);
var p = cljs.core.nth.call(null,vec__45472,(1),null);
var job = vec__45472;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__42457__auto___45631 = n;
var __45632 = (0);
while(true){
if((__45632 < n__42457__auto___45631)){
var G__45475_45633 = type;
var G__45475_45634__$1 = (((G__45475_45633 instanceof cljs.core.Keyword))?G__45475_45633.fqn:null);
switch (G__45475_45634__$1) {
case "compute":
var c__45292__auto___45636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45632,c__45292__auto___45636,G__45475_45633,G__45475_45634__$1,n__42457__auto___45631,jobs,results,process,async){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (__45632,c__45292__auto___45636,G__45475_45633,G__45475_45634__$1,n__42457__auto___45631,jobs,results,process,async){
return (function (state_45488){
var state_val_45489 = (state_45488[(1)]);
if((state_val_45489 === (1))){
var state_45488__$1 = state_45488;
var statearr_45490_45637 = state_45488__$1;
(statearr_45490_45637[(2)] = null);

(statearr_45490_45637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (2))){
var state_45488__$1 = state_45488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45488__$1,(4),jobs);
} else {
if((state_val_45489 === (3))){
var inst_45486 = (state_45488[(2)]);
var state_45488__$1 = state_45488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45488__$1,inst_45486);
} else {
if((state_val_45489 === (4))){
var inst_45478 = (state_45488[(2)]);
var inst_45479 = process.call(null,inst_45478);
var state_45488__$1 = state_45488;
if(cljs.core.truth_(inst_45479)){
var statearr_45491_45638 = state_45488__$1;
(statearr_45491_45638[(1)] = (5));

} else {
var statearr_45492_45639 = state_45488__$1;
(statearr_45492_45639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (5))){
var state_45488__$1 = state_45488;
var statearr_45493_45640 = state_45488__$1;
(statearr_45493_45640[(2)] = null);

(statearr_45493_45640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (6))){
var state_45488__$1 = state_45488;
var statearr_45494_45641 = state_45488__$1;
(statearr_45494_45641[(2)] = null);

(statearr_45494_45641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45489 === (7))){
var inst_45484 = (state_45488[(2)]);
var state_45488__$1 = state_45488;
var statearr_45495_45642 = state_45488__$1;
(statearr_45495_45642[(2)] = inst_45484);

(statearr_45495_45642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45632,c__45292__auto___45636,G__45475_45633,G__45475_45634__$1,n__42457__auto___45631,jobs,results,process,async))
;
return ((function (__45632,switch__45202__auto__,c__45292__auto___45636,G__45475_45633,G__45475_45634__$1,n__42457__auto___45631,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____0 = (function (){
var statearr_45496 = [null,null,null,null,null,null,null];
(statearr_45496[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__);

(statearr_45496[(1)] = (1));

return statearr_45496;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____1 = (function (state_45488){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_45488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e45497){if((e45497 instanceof Object)){
var ex__45206__auto__ = e45497;
var statearr_45498_45643 = state_45488;
(statearr_45498_45643[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45644 = state_45488;
state_45488 = G__45644;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__ = function(state_45488){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____1.call(this,state_45488);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__;
})()
;})(__45632,switch__45202__auto__,c__45292__auto___45636,G__45475_45633,G__45475_45634__$1,n__42457__auto___45631,jobs,results,process,async))
})();
var state__45294__auto__ = (function (){var statearr_45499 = f__45293__auto__.call(null);
(statearr_45499[(6)] = c__45292__auto___45636);

return statearr_45499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(__45632,c__45292__auto___45636,G__45475_45633,G__45475_45634__$1,n__42457__auto___45631,jobs,results,process,async))
);


break;
case "async":
var c__45292__auto___45645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45632,c__45292__auto___45645,G__45475_45633,G__45475_45634__$1,n__42457__auto___45631,jobs,results,process,async){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (__45632,c__45292__auto___45645,G__45475_45633,G__45475_45634__$1,n__42457__auto___45631,jobs,results,process,async){
return (function (state_45512){
var state_val_45513 = (state_45512[(1)]);
if((state_val_45513 === (1))){
var state_45512__$1 = state_45512;
var statearr_45514_45646 = state_45512__$1;
(statearr_45514_45646[(2)] = null);

(statearr_45514_45646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45513 === (2))){
var state_45512__$1 = state_45512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45512__$1,(4),jobs);
} else {
if((state_val_45513 === (3))){
var inst_45510 = (state_45512[(2)]);
var state_45512__$1 = state_45512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45512__$1,inst_45510);
} else {
if((state_val_45513 === (4))){
var inst_45502 = (state_45512[(2)]);
var inst_45503 = async.call(null,inst_45502);
var state_45512__$1 = state_45512;
if(cljs.core.truth_(inst_45503)){
var statearr_45515_45647 = state_45512__$1;
(statearr_45515_45647[(1)] = (5));

} else {
var statearr_45516_45648 = state_45512__$1;
(statearr_45516_45648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45513 === (5))){
var state_45512__$1 = state_45512;
var statearr_45517_45649 = state_45512__$1;
(statearr_45517_45649[(2)] = null);

(statearr_45517_45649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45513 === (6))){
var state_45512__$1 = state_45512;
var statearr_45518_45650 = state_45512__$1;
(statearr_45518_45650[(2)] = null);

(statearr_45518_45650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45513 === (7))){
var inst_45508 = (state_45512[(2)]);
var state_45512__$1 = state_45512;
var statearr_45519_45651 = state_45512__$1;
(statearr_45519_45651[(2)] = inst_45508);

(statearr_45519_45651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45632,c__45292__auto___45645,G__45475_45633,G__45475_45634__$1,n__42457__auto___45631,jobs,results,process,async))
;
return ((function (__45632,switch__45202__auto__,c__45292__auto___45645,G__45475_45633,G__45475_45634__$1,n__42457__auto___45631,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____0 = (function (){
var statearr_45520 = [null,null,null,null,null,null,null];
(statearr_45520[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__);

(statearr_45520[(1)] = (1));

return statearr_45520;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____1 = (function (state_45512){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_45512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e45521){if((e45521 instanceof Object)){
var ex__45206__auto__ = e45521;
var statearr_45522_45652 = state_45512;
(statearr_45522_45652[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45653 = state_45512;
state_45512 = G__45653;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__ = function(state_45512){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____1.call(this,state_45512);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__;
})()
;})(__45632,switch__45202__auto__,c__45292__auto___45645,G__45475_45633,G__45475_45634__$1,n__42457__auto___45631,jobs,results,process,async))
})();
var state__45294__auto__ = (function (){var statearr_45523 = f__45293__auto__.call(null);
(statearr_45523[(6)] = c__45292__auto___45645);

return statearr_45523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(__45632,c__45292__auto___45645,G__45475_45633,G__45475_45634__$1,n__42457__auto___45631,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45475_45634__$1)].join('')));

}

var G__45654 = (__45632 + (1));
__45632 = G__45654;
continue;
} else {
}
break;
}

var c__45292__auto___45655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto___45655,jobs,results,process,async){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto___45655,jobs,results,process,async){
return (function (state_45545){
var state_val_45546 = (state_45545[(1)]);
if((state_val_45546 === (1))){
var state_45545__$1 = state_45545;
var statearr_45547_45656 = state_45545__$1;
(statearr_45547_45656[(2)] = null);

(statearr_45547_45656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45546 === (2))){
var state_45545__$1 = state_45545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45545__$1,(4),from);
} else {
if((state_val_45546 === (3))){
var inst_45543 = (state_45545[(2)]);
var state_45545__$1 = state_45545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45545__$1,inst_45543);
} else {
if((state_val_45546 === (4))){
var inst_45526 = (state_45545[(7)]);
var inst_45526__$1 = (state_45545[(2)]);
var inst_45527 = (inst_45526__$1 == null);
var state_45545__$1 = (function (){var statearr_45548 = state_45545;
(statearr_45548[(7)] = inst_45526__$1);

return statearr_45548;
})();
if(cljs.core.truth_(inst_45527)){
var statearr_45549_45657 = state_45545__$1;
(statearr_45549_45657[(1)] = (5));

} else {
var statearr_45550_45658 = state_45545__$1;
(statearr_45550_45658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45546 === (5))){
var inst_45529 = cljs.core.async.close_BANG_.call(null,jobs);
var state_45545__$1 = state_45545;
var statearr_45551_45659 = state_45545__$1;
(statearr_45551_45659[(2)] = inst_45529);

(statearr_45551_45659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45546 === (6))){
var inst_45531 = (state_45545[(8)]);
var inst_45526 = (state_45545[(7)]);
var inst_45531__$1 = cljs.core.async.chan.call(null,(1));
var inst_45532 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45533 = [inst_45526,inst_45531__$1];
var inst_45534 = (new cljs.core.PersistentVector(null,2,(5),inst_45532,inst_45533,null));
var state_45545__$1 = (function (){var statearr_45552 = state_45545;
(statearr_45552[(8)] = inst_45531__$1);

return statearr_45552;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45545__$1,(8),jobs,inst_45534);
} else {
if((state_val_45546 === (7))){
var inst_45541 = (state_45545[(2)]);
var state_45545__$1 = state_45545;
var statearr_45553_45660 = state_45545__$1;
(statearr_45553_45660[(2)] = inst_45541);

(statearr_45553_45660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45546 === (8))){
var inst_45531 = (state_45545[(8)]);
var inst_45536 = (state_45545[(2)]);
var state_45545__$1 = (function (){var statearr_45554 = state_45545;
(statearr_45554[(9)] = inst_45536);

return statearr_45554;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45545__$1,(9),results,inst_45531);
} else {
if((state_val_45546 === (9))){
var inst_45538 = (state_45545[(2)]);
var state_45545__$1 = (function (){var statearr_45555 = state_45545;
(statearr_45555[(10)] = inst_45538);

return statearr_45555;
})();
var statearr_45556_45661 = state_45545__$1;
(statearr_45556_45661[(2)] = null);

(statearr_45556_45661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__45292__auto___45655,jobs,results,process,async))
;
return ((function (switch__45202__auto__,c__45292__auto___45655,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____0 = (function (){
var statearr_45557 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45557[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__);

(statearr_45557[(1)] = (1));

return statearr_45557;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____1 = (function (state_45545){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_45545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e45558){if((e45558 instanceof Object)){
var ex__45206__auto__ = e45558;
var statearr_45559_45662 = state_45545;
(statearr_45559_45662[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45663 = state_45545;
state_45545 = G__45663;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__ = function(state_45545){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____1.call(this,state_45545);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto___45655,jobs,results,process,async))
})();
var state__45294__auto__ = (function (){var statearr_45560 = f__45293__auto__.call(null);
(statearr_45560[(6)] = c__45292__auto___45655);

return statearr_45560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto___45655,jobs,results,process,async))
);


var c__45292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto__,jobs,results,process,async){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto__,jobs,results,process,async){
return (function (state_45598){
var state_val_45599 = (state_45598[(1)]);
if((state_val_45599 === (7))){
var inst_45594 = (state_45598[(2)]);
var state_45598__$1 = state_45598;
var statearr_45600_45664 = state_45598__$1;
(statearr_45600_45664[(2)] = inst_45594);

(statearr_45600_45664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (20))){
var state_45598__$1 = state_45598;
var statearr_45601_45665 = state_45598__$1;
(statearr_45601_45665[(2)] = null);

(statearr_45601_45665[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (1))){
var state_45598__$1 = state_45598;
var statearr_45602_45666 = state_45598__$1;
(statearr_45602_45666[(2)] = null);

(statearr_45602_45666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (4))){
var inst_45563 = (state_45598[(7)]);
var inst_45563__$1 = (state_45598[(2)]);
var inst_45564 = (inst_45563__$1 == null);
var state_45598__$1 = (function (){var statearr_45603 = state_45598;
(statearr_45603[(7)] = inst_45563__$1);

return statearr_45603;
})();
if(cljs.core.truth_(inst_45564)){
var statearr_45604_45667 = state_45598__$1;
(statearr_45604_45667[(1)] = (5));

} else {
var statearr_45605_45668 = state_45598__$1;
(statearr_45605_45668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (15))){
var inst_45576 = (state_45598[(8)]);
var state_45598__$1 = state_45598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45598__$1,(18),to,inst_45576);
} else {
if((state_val_45599 === (21))){
var inst_45589 = (state_45598[(2)]);
var state_45598__$1 = state_45598;
var statearr_45606_45669 = state_45598__$1;
(statearr_45606_45669[(2)] = inst_45589);

(statearr_45606_45669[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (13))){
var inst_45591 = (state_45598[(2)]);
var state_45598__$1 = (function (){var statearr_45607 = state_45598;
(statearr_45607[(9)] = inst_45591);

return statearr_45607;
})();
var statearr_45608_45670 = state_45598__$1;
(statearr_45608_45670[(2)] = null);

(statearr_45608_45670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (6))){
var inst_45563 = (state_45598[(7)]);
var state_45598__$1 = state_45598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45598__$1,(11),inst_45563);
} else {
if((state_val_45599 === (17))){
var inst_45584 = (state_45598[(2)]);
var state_45598__$1 = state_45598;
if(cljs.core.truth_(inst_45584)){
var statearr_45609_45671 = state_45598__$1;
(statearr_45609_45671[(1)] = (19));

} else {
var statearr_45610_45672 = state_45598__$1;
(statearr_45610_45672[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (3))){
var inst_45596 = (state_45598[(2)]);
var state_45598__$1 = state_45598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45598__$1,inst_45596);
} else {
if((state_val_45599 === (12))){
var inst_45573 = (state_45598[(10)]);
var state_45598__$1 = state_45598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45598__$1,(14),inst_45573);
} else {
if((state_val_45599 === (2))){
var state_45598__$1 = state_45598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45598__$1,(4),results);
} else {
if((state_val_45599 === (19))){
var state_45598__$1 = state_45598;
var statearr_45611_45673 = state_45598__$1;
(statearr_45611_45673[(2)] = null);

(statearr_45611_45673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (11))){
var inst_45573 = (state_45598[(2)]);
var state_45598__$1 = (function (){var statearr_45612 = state_45598;
(statearr_45612[(10)] = inst_45573);

return statearr_45612;
})();
var statearr_45613_45674 = state_45598__$1;
(statearr_45613_45674[(2)] = null);

(statearr_45613_45674[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (9))){
var state_45598__$1 = state_45598;
var statearr_45614_45675 = state_45598__$1;
(statearr_45614_45675[(2)] = null);

(statearr_45614_45675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (5))){
var state_45598__$1 = state_45598;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45615_45676 = state_45598__$1;
(statearr_45615_45676[(1)] = (8));

} else {
var statearr_45616_45677 = state_45598__$1;
(statearr_45616_45677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (14))){
var inst_45578 = (state_45598[(11)]);
var inst_45576 = (state_45598[(8)]);
var inst_45576__$1 = (state_45598[(2)]);
var inst_45577 = (inst_45576__$1 == null);
var inst_45578__$1 = cljs.core.not.call(null,inst_45577);
var state_45598__$1 = (function (){var statearr_45617 = state_45598;
(statearr_45617[(11)] = inst_45578__$1);

(statearr_45617[(8)] = inst_45576__$1);

return statearr_45617;
})();
if(inst_45578__$1){
var statearr_45618_45678 = state_45598__$1;
(statearr_45618_45678[(1)] = (15));

} else {
var statearr_45619_45679 = state_45598__$1;
(statearr_45619_45679[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (16))){
var inst_45578 = (state_45598[(11)]);
var state_45598__$1 = state_45598;
var statearr_45620_45680 = state_45598__$1;
(statearr_45620_45680[(2)] = inst_45578);

(statearr_45620_45680[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (10))){
var inst_45570 = (state_45598[(2)]);
var state_45598__$1 = state_45598;
var statearr_45621_45681 = state_45598__$1;
(statearr_45621_45681[(2)] = inst_45570);

(statearr_45621_45681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (18))){
var inst_45581 = (state_45598[(2)]);
var state_45598__$1 = state_45598;
var statearr_45622_45682 = state_45598__$1;
(statearr_45622_45682[(2)] = inst_45581);

(statearr_45622_45682[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45599 === (8))){
var inst_45567 = cljs.core.async.close_BANG_.call(null,to);
var state_45598__$1 = state_45598;
var statearr_45623_45683 = state_45598__$1;
(statearr_45623_45683[(2)] = inst_45567);

(statearr_45623_45683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45292__auto__,jobs,results,process,async))
;
return ((function (switch__45202__auto__,c__45292__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____0 = (function (){
var statearr_45624 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45624[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__);

(statearr_45624[(1)] = (1));

return statearr_45624;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____1 = (function (state_45598){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_45598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e45625){if((e45625 instanceof Object)){
var ex__45206__auto__ = e45625;
var statearr_45626_45684 = state_45598;
(statearr_45626_45684[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45685 = state_45598;
state_45598 = G__45685;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__ = function(state_45598){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____1.call(this,state_45598);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45203__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto__,jobs,results,process,async))
})();
var state__45294__auto__ = (function (){var statearr_45627 = f__45293__auto__.call(null);
(statearr_45627[(6)] = c__45292__auto__);

return statearr_45627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto__,jobs,results,process,async))
);

return c__45292__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__45687 = arguments.length;
switch (G__45687) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__45690 = arguments.length;
switch (G__45690) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__45693 = arguments.length;
switch (G__45693) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__45292__auto___45742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto___45742,tc,fc){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto___45742,tc,fc){
return (function (state_45719){
var state_val_45720 = (state_45719[(1)]);
if((state_val_45720 === (7))){
var inst_45715 = (state_45719[(2)]);
var state_45719__$1 = state_45719;
var statearr_45721_45743 = state_45719__$1;
(statearr_45721_45743[(2)] = inst_45715);

(statearr_45721_45743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45720 === (1))){
var state_45719__$1 = state_45719;
var statearr_45722_45744 = state_45719__$1;
(statearr_45722_45744[(2)] = null);

(statearr_45722_45744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45720 === (4))){
var inst_45696 = (state_45719[(7)]);
var inst_45696__$1 = (state_45719[(2)]);
var inst_45697 = (inst_45696__$1 == null);
var state_45719__$1 = (function (){var statearr_45723 = state_45719;
(statearr_45723[(7)] = inst_45696__$1);

return statearr_45723;
})();
if(cljs.core.truth_(inst_45697)){
var statearr_45724_45745 = state_45719__$1;
(statearr_45724_45745[(1)] = (5));

} else {
var statearr_45725_45746 = state_45719__$1;
(statearr_45725_45746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45720 === (13))){
var state_45719__$1 = state_45719;
var statearr_45726_45747 = state_45719__$1;
(statearr_45726_45747[(2)] = null);

(statearr_45726_45747[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45720 === (6))){
var inst_45696 = (state_45719[(7)]);
var inst_45702 = p.call(null,inst_45696);
var state_45719__$1 = state_45719;
if(cljs.core.truth_(inst_45702)){
var statearr_45727_45748 = state_45719__$1;
(statearr_45727_45748[(1)] = (9));

} else {
var statearr_45728_45749 = state_45719__$1;
(statearr_45728_45749[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45720 === (3))){
var inst_45717 = (state_45719[(2)]);
var state_45719__$1 = state_45719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45719__$1,inst_45717);
} else {
if((state_val_45720 === (12))){
var state_45719__$1 = state_45719;
var statearr_45729_45750 = state_45719__$1;
(statearr_45729_45750[(2)] = null);

(statearr_45729_45750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45720 === (2))){
var state_45719__$1 = state_45719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45719__$1,(4),ch);
} else {
if((state_val_45720 === (11))){
var inst_45696 = (state_45719[(7)]);
var inst_45706 = (state_45719[(2)]);
var state_45719__$1 = state_45719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45719__$1,(8),inst_45706,inst_45696);
} else {
if((state_val_45720 === (9))){
var state_45719__$1 = state_45719;
var statearr_45730_45751 = state_45719__$1;
(statearr_45730_45751[(2)] = tc);

(statearr_45730_45751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45720 === (5))){
var inst_45699 = cljs.core.async.close_BANG_.call(null,tc);
var inst_45700 = cljs.core.async.close_BANG_.call(null,fc);
var state_45719__$1 = (function (){var statearr_45731 = state_45719;
(statearr_45731[(8)] = inst_45699);

return statearr_45731;
})();
var statearr_45732_45752 = state_45719__$1;
(statearr_45732_45752[(2)] = inst_45700);

(statearr_45732_45752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45720 === (14))){
var inst_45713 = (state_45719[(2)]);
var state_45719__$1 = state_45719;
var statearr_45733_45753 = state_45719__$1;
(statearr_45733_45753[(2)] = inst_45713);

(statearr_45733_45753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45720 === (10))){
var state_45719__$1 = state_45719;
var statearr_45734_45754 = state_45719__$1;
(statearr_45734_45754[(2)] = fc);

(statearr_45734_45754[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45720 === (8))){
var inst_45708 = (state_45719[(2)]);
var state_45719__$1 = state_45719;
if(cljs.core.truth_(inst_45708)){
var statearr_45735_45755 = state_45719__$1;
(statearr_45735_45755[(1)] = (12));

} else {
var statearr_45736_45756 = state_45719__$1;
(statearr_45736_45756[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45292__auto___45742,tc,fc))
;
return ((function (switch__45202__auto__,c__45292__auto___45742,tc,fc){
return (function() {
var cljs$core$async$state_machine__45203__auto__ = null;
var cljs$core$async$state_machine__45203__auto____0 = (function (){
var statearr_45737 = [null,null,null,null,null,null,null,null,null];
(statearr_45737[(0)] = cljs$core$async$state_machine__45203__auto__);

(statearr_45737[(1)] = (1));

return statearr_45737;
});
var cljs$core$async$state_machine__45203__auto____1 = (function (state_45719){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_45719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e45738){if((e45738 instanceof Object)){
var ex__45206__auto__ = e45738;
var statearr_45739_45757 = state_45719;
(statearr_45739_45757[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45758 = state_45719;
state_45719 = G__45758;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs$core$async$state_machine__45203__auto__ = function(state_45719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45203__auto____1.call(this,state_45719);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45203__auto____0;
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45203__auto____1;
return cljs$core$async$state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto___45742,tc,fc))
})();
var state__45294__auto__ = (function (){var statearr_45740 = f__45293__auto__.call(null);
(statearr_45740[(6)] = c__45292__auto___45742);

return statearr_45740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto___45742,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__45292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto__){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto__){
return (function (state_45779){
var state_val_45780 = (state_45779[(1)]);
if((state_val_45780 === (7))){
var inst_45775 = (state_45779[(2)]);
var state_45779__$1 = state_45779;
var statearr_45781_45799 = state_45779__$1;
(statearr_45781_45799[(2)] = inst_45775);

(statearr_45781_45799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45780 === (1))){
var inst_45759 = init;
var state_45779__$1 = (function (){var statearr_45782 = state_45779;
(statearr_45782[(7)] = inst_45759);

return statearr_45782;
})();
var statearr_45783_45800 = state_45779__$1;
(statearr_45783_45800[(2)] = null);

(statearr_45783_45800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45780 === (4))){
var inst_45762 = (state_45779[(8)]);
var inst_45762__$1 = (state_45779[(2)]);
var inst_45763 = (inst_45762__$1 == null);
var state_45779__$1 = (function (){var statearr_45784 = state_45779;
(statearr_45784[(8)] = inst_45762__$1);

return statearr_45784;
})();
if(cljs.core.truth_(inst_45763)){
var statearr_45785_45801 = state_45779__$1;
(statearr_45785_45801[(1)] = (5));

} else {
var statearr_45786_45802 = state_45779__$1;
(statearr_45786_45802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45780 === (6))){
var inst_45762 = (state_45779[(8)]);
var inst_45766 = (state_45779[(9)]);
var inst_45759 = (state_45779[(7)]);
var inst_45766__$1 = f.call(null,inst_45759,inst_45762);
var inst_45767 = cljs.core.reduced_QMARK_.call(null,inst_45766__$1);
var state_45779__$1 = (function (){var statearr_45787 = state_45779;
(statearr_45787[(9)] = inst_45766__$1);

return statearr_45787;
})();
if(inst_45767){
var statearr_45788_45803 = state_45779__$1;
(statearr_45788_45803[(1)] = (8));

} else {
var statearr_45789_45804 = state_45779__$1;
(statearr_45789_45804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45780 === (3))){
var inst_45777 = (state_45779[(2)]);
var state_45779__$1 = state_45779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45779__$1,inst_45777);
} else {
if((state_val_45780 === (2))){
var state_45779__$1 = state_45779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45779__$1,(4),ch);
} else {
if((state_val_45780 === (9))){
var inst_45766 = (state_45779[(9)]);
var inst_45759 = inst_45766;
var state_45779__$1 = (function (){var statearr_45790 = state_45779;
(statearr_45790[(7)] = inst_45759);

return statearr_45790;
})();
var statearr_45791_45805 = state_45779__$1;
(statearr_45791_45805[(2)] = null);

(statearr_45791_45805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45780 === (5))){
var inst_45759 = (state_45779[(7)]);
var state_45779__$1 = state_45779;
var statearr_45792_45806 = state_45779__$1;
(statearr_45792_45806[(2)] = inst_45759);

(statearr_45792_45806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45780 === (10))){
var inst_45773 = (state_45779[(2)]);
var state_45779__$1 = state_45779;
var statearr_45793_45807 = state_45779__$1;
(statearr_45793_45807[(2)] = inst_45773);

(statearr_45793_45807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45780 === (8))){
var inst_45766 = (state_45779[(9)]);
var inst_45769 = cljs.core.deref.call(null,inst_45766);
var state_45779__$1 = state_45779;
var statearr_45794_45808 = state_45779__$1;
(statearr_45794_45808[(2)] = inst_45769);

(statearr_45794_45808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__45292__auto__))
;
return ((function (switch__45202__auto__,c__45292__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__45203__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45203__auto____0 = (function (){
var statearr_45795 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45795[(0)] = cljs$core$async$reduce_$_state_machine__45203__auto__);

(statearr_45795[(1)] = (1));

return statearr_45795;
});
var cljs$core$async$reduce_$_state_machine__45203__auto____1 = (function (state_45779){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_45779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e45796){if((e45796 instanceof Object)){
var ex__45206__auto__ = e45796;
var statearr_45797_45809 = state_45779;
(statearr_45797_45809[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45810 = state_45779;
state_45779 = G__45810;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45203__auto__ = function(state_45779){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45203__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45203__auto____1.call(this,state_45779);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45203__auto____0;
cljs$core$async$reduce_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45203__auto____1;
return cljs$core$async$reduce_$_state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto__))
})();
var state__45294__auto__ = (function (){var statearr_45798 = f__45293__auto__.call(null);
(statearr_45798[(6)] = c__45292__auto__);

return statearr_45798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto__))
);

return c__45292__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__45292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto__,f__$1){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto__,f__$1){
return (function (state_45816){
var state_val_45817 = (state_45816[(1)]);
if((state_val_45817 === (1))){
var inst_45811 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_45816__$1 = state_45816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45816__$1,(2),inst_45811);
} else {
if((state_val_45817 === (2))){
var inst_45813 = (state_45816[(2)]);
var inst_45814 = f__$1.call(null,inst_45813);
var state_45816__$1 = state_45816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45816__$1,inst_45814);
} else {
return null;
}
}
});})(c__45292__auto__,f__$1))
;
return ((function (switch__45202__auto__,c__45292__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__45203__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45203__auto____0 = (function (){
var statearr_45818 = [null,null,null,null,null,null,null];
(statearr_45818[(0)] = cljs$core$async$transduce_$_state_machine__45203__auto__);

(statearr_45818[(1)] = (1));

return statearr_45818;
});
var cljs$core$async$transduce_$_state_machine__45203__auto____1 = (function (state_45816){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_45816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e45819){if((e45819 instanceof Object)){
var ex__45206__auto__ = e45819;
var statearr_45820_45822 = state_45816;
(statearr_45820_45822[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45823 = state_45816;
state_45816 = G__45823;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45203__auto__ = function(state_45816){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45203__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45203__auto____1.call(this,state_45816);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45203__auto____0;
cljs$core$async$transduce_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45203__auto____1;
return cljs$core$async$transduce_$_state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto__,f__$1))
})();
var state__45294__auto__ = (function (){var statearr_45821 = f__45293__auto__.call(null);
(statearr_45821[(6)] = c__45292__auto__);

return statearr_45821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto__,f__$1))
);

return c__45292__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__45825 = arguments.length;
switch (G__45825) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto__){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto__){
return (function (state_45850){
var state_val_45851 = (state_45850[(1)]);
if((state_val_45851 === (7))){
var inst_45832 = (state_45850[(2)]);
var state_45850__$1 = state_45850;
var statearr_45852_45873 = state_45850__$1;
(statearr_45852_45873[(2)] = inst_45832);

(statearr_45852_45873[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45851 === (1))){
var inst_45826 = cljs.core.seq.call(null,coll);
var inst_45827 = inst_45826;
var state_45850__$1 = (function (){var statearr_45853 = state_45850;
(statearr_45853[(7)] = inst_45827);

return statearr_45853;
})();
var statearr_45854_45874 = state_45850__$1;
(statearr_45854_45874[(2)] = null);

(statearr_45854_45874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45851 === (4))){
var inst_45827 = (state_45850[(7)]);
var inst_45830 = cljs.core.first.call(null,inst_45827);
var state_45850__$1 = state_45850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45850__$1,(7),ch,inst_45830);
} else {
if((state_val_45851 === (13))){
var inst_45844 = (state_45850[(2)]);
var state_45850__$1 = state_45850;
var statearr_45855_45875 = state_45850__$1;
(statearr_45855_45875[(2)] = inst_45844);

(statearr_45855_45875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45851 === (6))){
var inst_45835 = (state_45850[(2)]);
var state_45850__$1 = state_45850;
if(cljs.core.truth_(inst_45835)){
var statearr_45856_45876 = state_45850__$1;
(statearr_45856_45876[(1)] = (8));

} else {
var statearr_45857_45877 = state_45850__$1;
(statearr_45857_45877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45851 === (3))){
var inst_45848 = (state_45850[(2)]);
var state_45850__$1 = state_45850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45850__$1,inst_45848);
} else {
if((state_val_45851 === (12))){
var state_45850__$1 = state_45850;
var statearr_45858_45878 = state_45850__$1;
(statearr_45858_45878[(2)] = null);

(statearr_45858_45878[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45851 === (2))){
var inst_45827 = (state_45850[(7)]);
var state_45850__$1 = state_45850;
if(cljs.core.truth_(inst_45827)){
var statearr_45859_45879 = state_45850__$1;
(statearr_45859_45879[(1)] = (4));

} else {
var statearr_45860_45880 = state_45850__$1;
(statearr_45860_45880[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45851 === (11))){
var inst_45841 = cljs.core.async.close_BANG_.call(null,ch);
var state_45850__$1 = state_45850;
var statearr_45861_45881 = state_45850__$1;
(statearr_45861_45881[(2)] = inst_45841);

(statearr_45861_45881[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45851 === (9))){
var state_45850__$1 = state_45850;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45862_45882 = state_45850__$1;
(statearr_45862_45882[(1)] = (11));

} else {
var statearr_45863_45883 = state_45850__$1;
(statearr_45863_45883[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45851 === (5))){
var inst_45827 = (state_45850[(7)]);
var state_45850__$1 = state_45850;
var statearr_45864_45884 = state_45850__$1;
(statearr_45864_45884[(2)] = inst_45827);

(statearr_45864_45884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45851 === (10))){
var inst_45846 = (state_45850[(2)]);
var state_45850__$1 = state_45850;
var statearr_45865_45885 = state_45850__$1;
(statearr_45865_45885[(2)] = inst_45846);

(statearr_45865_45885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45851 === (8))){
var inst_45827 = (state_45850[(7)]);
var inst_45837 = cljs.core.next.call(null,inst_45827);
var inst_45827__$1 = inst_45837;
var state_45850__$1 = (function (){var statearr_45866 = state_45850;
(statearr_45866[(7)] = inst_45827__$1);

return statearr_45866;
})();
var statearr_45867_45886 = state_45850__$1;
(statearr_45867_45886[(2)] = null);

(statearr_45867_45886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45292__auto__))
;
return ((function (switch__45202__auto__,c__45292__auto__){
return (function() {
var cljs$core$async$state_machine__45203__auto__ = null;
var cljs$core$async$state_machine__45203__auto____0 = (function (){
var statearr_45868 = [null,null,null,null,null,null,null,null];
(statearr_45868[(0)] = cljs$core$async$state_machine__45203__auto__);

(statearr_45868[(1)] = (1));

return statearr_45868;
});
var cljs$core$async$state_machine__45203__auto____1 = (function (state_45850){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_45850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e45869){if((e45869 instanceof Object)){
var ex__45206__auto__ = e45869;
var statearr_45870_45887 = state_45850;
(statearr_45870_45887[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45888 = state_45850;
state_45850 = G__45888;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs$core$async$state_machine__45203__auto__ = function(state_45850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45203__auto____1.call(this,state_45850);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45203__auto____0;
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45203__auto____1;
return cljs$core$async$state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto__))
})();
var state__45294__auto__ = (function (){var statearr_45871 = f__45293__auto__.call(null);
(statearr_45871[(6)] = c__45292__auto__);

return statearr_45871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto__))
);

return c__45292__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__42145__auto__ = (((_ == null))?null:_);
var m__42146__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__42145__auto__)]);
if(!((m__42146__auto__ == null))){
return m__42146__auto__.call(null,_);
} else {
var m__42146__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__42146__auto____$1 == null))){
return m__42146__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__42145__auto__ = (((m == null))?null:m);
var m__42146__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__42145__auto__)]);
if(!((m__42146__auto__ == null))){
return m__42146__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__42146__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__42146__auto____$1 == null))){
return m__42146__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__42145__auto__ = (((m == null))?null:m);
var m__42146__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__42145__auto__)]);
if(!((m__42146__auto__ == null))){
return m__42146__auto__.call(null,m,ch);
} else {
var m__42146__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__42146__auto____$1 == null))){
return m__42146__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__42145__auto__ = (((m == null))?null:m);
var m__42146__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__42145__auto__)]);
if(!((m__42146__auto__ == null))){
return m__42146__auto__.call(null,m);
} else {
var m__42146__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__42146__auto____$1 == null))){
return m__42146__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async45889 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45889 = (function (ch,cs,meta45890){
this.ch = ch;
this.cs = cs;
this.meta45890 = meta45890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45891,meta45890__$1){
var self__ = this;
var _45891__$1 = this;
return (new cljs.core.async.t_cljs$core$async45889(self__.ch,self__.cs,meta45890__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45889.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45891){
var self__ = this;
var _45891__$1 = this;
return self__.meta45890;
});})(cs))
;

cljs.core.async.t_cljs$core$async45889.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45889.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45889.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45889.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45889.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45889.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45889.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45890","meta45890",1102233788,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45889.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45889";

cljs.core.async.t_cljs$core$async45889.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__42083__auto__,writer__42084__auto__,opt__42085__auto__){
return cljs.core._write.call(null,writer__42084__auto__,"cljs.core.async/t_cljs$core$async45889");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async45889 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45889(ch__$1,cs__$1,meta45890){
return (new cljs.core.async.t_cljs$core$async45889(ch__$1,cs__$1,meta45890));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45889(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__45292__auto___46111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto___46111,cs,m,dchan,dctr,done){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto___46111,cs,m,dchan,dctr,done){
return (function (state_46026){
var state_val_46027 = (state_46026[(1)]);
if((state_val_46027 === (7))){
var inst_46022 = (state_46026[(2)]);
var state_46026__$1 = state_46026;
var statearr_46028_46112 = state_46026__$1;
(statearr_46028_46112[(2)] = inst_46022);

(statearr_46028_46112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (20))){
var inst_45925 = (state_46026[(7)]);
var inst_45937 = cljs.core.first.call(null,inst_45925);
var inst_45938 = cljs.core.nth.call(null,inst_45937,(0),null);
var inst_45939 = cljs.core.nth.call(null,inst_45937,(1),null);
var state_46026__$1 = (function (){var statearr_46029 = state_46026;
(statearr_46029[(8)] = inst_45938);

return statearr_46029;
})();
if(cljs.core.truth_(inst_45939)){
var statearr_46030_46113 = state_46026__$1;
(statearr_46030_46113[(1)] = (22));

} else {
var statearr_46031_46114 = state_46026__$1;
(statearr_46031_46114[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (27))){
var inst_45967 = (state_46026[(9)]);
var inst_45894 = (state_46026[(10)]);
var inst_45974 = (state_46026[(11)]);
var inst_45969 = (state_46026[(12)]);
var inst_45974__$1 = cljs.core._nth.call(null,inst_45967,inst_45969);
var inst_45975 = cljs.core.async.put_BANG_.call(null,inst_45974__$1,inst_45894,done);
var state_46026__$1 = (function (){var statearr_46032 = state_46026;
(statearr_46032[(11)] = inst_45974__$1);

return statearr_46032;
})();
if(cljs.core.truth_(inst_45975)){
var statearr_46033_46115 = state_46026__$1;
(statearr_46033_46115[(1)] = (30));

} else {
var statearr_46034_46116 = state_46026__$1;
(statearr_46034_46116[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (1))){
var state_46026__$1 = state_46026;
var statearr_46035_46117 = state_46026__$1;
(statearr_46035_46117[(2)] = null);

(statearr_46035_46117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (24))){
var inst_45925 = (state_46026[(7)]);
var inst_45944 = (state_46026[(2)]);
var inst_45945 = cljs.core.next.call(null,inst_45925);
var inst_45903 = inst_45945;
var inst_45904 = null;
var inst_45905 = (0);
var inst_45906 = (0);
var state_46026__$1 = (function (){var statearr_46036 = state_46026;
(statearr_46036[(13)] = inst_45906);

(statearr_46036[(14)] = inst_45904);

(statearr_46036[(15)] = inst_45944);

(statearr_46036[(16)] = inst_45905);

(statearr_46036[(17)] = inst_45903);

return statearr_46036;
})();
var statearr_46037_46118 = state_46026__$1;
(statearr_46037_46118[(2)] = null);

(statearr_46037_46118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (39))){
var state_46026__$1 = state_46026;
var statearr_46041_46119 = state_46026__$1;
(statearr_46041_46119[(2)] = null);

(statearr_46041_46119[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (4))){
var inst_45894 = (state_46026[(10)]);
var inst_45894__$1 = (state_46026[(2)]);
var inst_45895 = (inst_45894__$1 == null);
var state_46026__$1 = (function (){var statearr_46042 = state_46026;
(statearr_46042[(10)] = inst_45894__$1);

return statearr_46042;
})();
if(cljs.core.truth_(inst_45895)){
var statearr_46043_46120 = state_46026__$1;
(statearr_46043_46120[(1)] = (5));

} else {
var statearr_46044_46121 = state_46026__$1;
(statearr_46044_46121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (15))){
var inst_45906 = (state_46026[(13)]);
var inst_45904 = (state_46026[(14)]);
var inst_45905 = (state_46026[(16)]);
var inst_45903 = (state_46026[(17)]);
var inst_45921 = (state_46026[(2)]);
var inst_45922 = (inst_45906 + (1));
var tmp46038 = inst_45904;
var tmp46039 = inst_45905;
var tmp46040 = inst_45903;
var inst_45903__$1 = tmp46040;
var inst_45904__$1 = tmp46038;
var inst_45905__$1 = tmp46039;
var inst_45906__$1 = inst_45922;
var state_46026__$1 = (function (){var statearr_46045 = state_46026;
(statearr_46045[(13)] = inst_45906__$1);

(statearr_46045[(14)] = inst_45904__$1);

(statearr_46045[(16)] = inst_45905__$1);

(statearr_46045[(17)] = inst_45903__$1);

(statearr_46045[(18)] = inst_45921);

return statearr_46045;
})();
var statearr_46046_46122 = state_46026__$1;
(statearr_46046_46122[(2)] = null);

(statearr_46046_46122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (21))){
var inst_45948 = (state_46026[(2)]);
var state_46026__$1 = state_46026;
var statearr_46050_46123 = state_46026__$1;
(statearr_46050_46123[(2)] = inst_45948);

(statearr_46050_46123[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (31))){
var inst_45974 = (state_46026[(11)]);
var inst_45978 = done.call(null,null);
var inst_45979 = cljs.core.async.untap_STAR_.call(null,m,inst_45974);
var state_46026__$1 = (function (){var statearr_46051 = state_46026;
(statearr_46051[(19)] = inst_45978);

return statearr_46051;
})();
var statearr_46052_46124 = state_46026__$1;
(statearr_46052_46124[(2)] = inst_45979);

(statearr_46052_46124[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (32))){
var inst_45967 = (state_46026[(9)]);
var inst_45966 = (state_46026[(20)]);
var inst_45968 = (state_46026[(21)]);
var inst_45969 = (state_46026[(12)]);
var inst_45981 = (state_46026[(2)]);
var inst_45982 = (inst_45969 + (1));
var tmp46047 = inst_45967;
var tmp46048 = inst_45966;
var tmp46049 = inst_45968;
var inst_45966__$1 = tmp46048;
var inst_45967__$1 = tmp46047;
var inst_45968__$1 = tmp46049;
var inst_45969__$1 = inst_45982;
var state_46026__$1 = (function (){var statearr_46053 = state_46026;
(statearr_46053[(22)] = inst_45981);

(statearr_46053[(9)] = inst_45967__$1);

(statearr_46053[(20)] = inst_45966__$1);

(statearr_46053[(21)] = inst_45968__$1);

(statearr_46053[(12)] = inst_45969__$1);

return statearr_46053;
})();
var statearr_46054_46125 = state_46026__$1;
(statearr_46054_46125[(2)] = null);

(statearr_46054_46125[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (40))){
var inst_45994 = (state_46026[(23)]);
var inst_45998 = done.call(null,null);
var inst_45999 = cljs.core.async.untap_STAR_.call(null,m,inst_45994);
var state_46026__$1 = (function (){var statearr_46055 = state_46026;
(statearr_46055[(24)] = inst_45998);

return statearr_46055;
})();
var statearr_46056_46126 = state_46026__$1;
(statearr_46056_46126[(2)] = inst_45999);

(statearr_46056_46126[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (33))){
var inst_45985 = (state_46026[(25)]);
var inst_45987 = cljs.core.chunked_seq_QMARK_.call(null,inst_45985);
var state_46026__$1 = state_46026;
if(inst_45987){
var statearr_46057_46127 = state_46026__$1;
(statearr_46057_46127[(1)] = (36));

} else {
var statearr_46058_46128 = state_46026__$1;
(statearr_46058_46128[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (13))){
var inst_45915 = (state_46026[(26)]);
var inst_45918 = cljs.core.async.close_BANG_.call(null,inst_45915);
var state_46026__$1 = state_46026;
var statearr_46059_46129 = state_46026__$1;
(statearr_46059_46129[(2)] = inst_45918);

(statearr_46059_46129[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (22))){
var inst_45938 = (state_46026[(8)]);
var inst_45941 = cljs.core.async.close_BANG_.call(null,inst_45938);
var state_46026__$1 = state_46026;
var statearr_46060_46130 = state_46026__$1;
(statearr_46060_46130[(2)] = inst_45941);

(statearr_46060_46130[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (36))){
var inst_45985 = (state_46026[(25)]);
var inst_45989 = cljs.core.chunk_first.call(null,inst_45985);
var inst_45990 = cljs.core.chunk_rest.call(null,inst_45985);
var inst_45991 = cljs.core.count.call(null,inst_45989);
var inst_45966 = inst_45990;
var inst_45967 = inst_45989;
var inst_45968 = inst_45991;
var inst_45969 = (0);
var state_46026__$1 = (function (){var statearr_46061 = state_46026;
(statearr_46061[(9)] = inst_45967);

(statearr_46061[(20)] = inst_45966);

(statearr_46061[(21)] = inst_45968);

(statearr_46061[(12)] = inst_45969);

return statearr_46061;
})();
var statearr_46062_46131 = state_46026__$1;
(statearr_46062_46131[(2)] = null);

(statearr_46062_46131[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (41))){
var inst_45985 = (state_46026[(25)]);
var inst_46001 = (state_46026[(2)]);
var inst_46002 = cljs.core.next.call(null,inst_45985);
var inst_45966 = inst_46002;
var inst_45967 = null;
var inst_45968 = (0);
var inst_45969 = (0);
var state_46026__$1 = (function (){var statearr_46063 = state_46026;
(statearr_46063[(9)] = inst_45967);

(statearr_46063[(20)] = inst_45966);

(statearr_46063[(27)] = inst_46001);

(statearr_46063[(21)] = inst_45968);

(statearr_46063[(12)] = inst_45969);

return statearr_46063;
})();
var statearr_46064_46132 = state_46026__$1;
(statearr_46064_46132[(2)] = null);

(statearr_46064_46132[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (43))){
var state_46026__$1 = state_46026;
var statearr_46065_46133 = state_46026__$1;
(statearr_46065_46133[(2)] = null);

(statearr_46065_46133[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (29))){
var inst_46010 = (state_46026[(2)]);
var state_46026__$1 = state_46026;
var statearr_46066_46134 = state_46026__$1;
(statearr_46066_46134[(2)] = inst_46010);

(statearr_46066_46134[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (44))){
var inst_46019 = (state_46026[(2)]);
var state_46026__$1 = (function (){var statearr_46067 = state_46026;
(statearr_46067[(28)] = inst_46019);

return statearr_46067;
})();
var statearr_46068_46135 = state_46026__$1;
(statearr_46068_46135[(2)] = null);

(statearr_46068_46135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (6))){
var inst_45958 = (state_46026[(29)]);
var inst_45957 = cljs.core.deref.call(null,cs);
var inst_45958__$1 = cljs.core.keys.call(null,inst_45957);
var inst_45959 = cljs.core.count.call(null,inst_45958__$1);
var inst_45960 = cljs.core.reset_BANG_.call(null,dctr,inst_45959);
var inst_45965 = cljs.core.seq.call(null,inst_45958__$1);
var inst_45966 = inst_45965;
var inst_45967 = null;
var inst_45968 = (0);
var inst_45969 = (0);
var state_46026__$1 = (function (){var statearr_46069 = state_46026;
(statearr_46069[(30)] = inst_45960);

(statearr_46069[(9)] = inst_45967);

(statearr_46069[(29)] = inst_45958__$1);

(statearr_46069[(20)] = inst_45966);

(statearr_46069[(21)] = inst_45968);

(statearr_46069[(12)] = inst_45969);

return statearr_46069;
})();
var statearr_46070_46136 = state_46026__$1;
(statearr_46070_46136[(2)] = null);

(statearr_46070_46136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (28))){
var inst_45985 = (state_46026[(25)]);
var inst_45966 = (state_46026[(20)]);
var inst_45985__$1 = cljs.core.seq.call(null,inst_45966);
var state_46026__$1 = (function (){var statearr_46071 = state_46026;
(statearr_46071[(25)] = inst_45985__$1);

return statearr_46071;
})();
if(inst_45985__$1){
var statearr_46072_46137 = state_46026__$1;
(statearr_46072_46137[(1)] = (33));

} else {
var statearr_46073_46138 = state_46026__$1;
(statearr_46073_46138[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (25))){
var inst_45968 = (state_46026[(21)]);
var inst_45969 = (state_46026[(12)]);
var inst_45971 = (inst_45969 < inst_45968);
var inst_45972 = inst_45971;
var state_46026__$1 = state_46026;
if(cljs.core.truth_(inst_45972)){
var statearr_46074_46139 = state_46026__$1;
(statearr_46074_46139[(1)] = (27));

} else {
var statearr_46075_46140 = state_46026__$1;
(statearr_46075_46140[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (34))){
var state_46026__$1 = state_46026;
var statearr_46076_46141 = state_46026__$1;
(statearr_46076_46141[(2)] = null);

(statearr_46076_46141[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (17))){
var state_46026__$1 = state_46026;
var statearr_46077_46142 = state_46026__$1;
(statearr_46077_46142[(2)] = null);

(statearr_46077_46142[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (3))){
var inst_46024 = (state_46026[(2)]);
var state_46026__$1 = state_46026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46026__$1,inst_46024);
} else {
if((state_val_46027 === (12))){
var inst_45953 = (state_46026[(2)]);
var state_46026__$1 = state_46026;
var statearr_46078_46143 = state_46026__$1;
(statearr_46078_46143[(2)] = inst_45953);

(statearr_46078_46143[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (2))){
var state_46026__$1 = state_46026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46026__$1,(4),ch);
} else {
if((state_val_46027 === (23))){
var state_46026__$1 = state_46026;
var statearr_46079_46144 = state_46026__$1;
(statearr_46079_46144[(2)] = null);

(statearr_46079_46144[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (35))){
var inst_46008 = (state_46026[(2)]);
var state_46026__$1 = state_46026;
var statearr_46080_46145 = state_46026__$1;
(statearr_46080_46145[(2)] = inst_46008);

(statearr_46080_46145[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (19))){
var inst_45925 = (state_46026[(7)]);
var inst_45929 = cljs.core.chunk_first.call(null,inst_45925);
var inst_45930 = cljs.core.chunk_rest.call(null,inst_45925);
var inst_45931 = cljs.core.count.call(null,inst_45929);
var inst_45903 = inst_45930;
var inst_45904 = inst_45929;
var inst_45905 = inst_45931;
var inst_45906 = (0);
var state_46026__$1 = (function (){var statearr_46081 = state_46026;
(statearr_46081[(13)] = inst_45906);

(statearr_46081[(14)] = inst_45904);

(statearr_46081[(16)] = inst_45905);

(statearr_46081[(17)] = inst_45903);

return statearr_46081;
})();
var statearr_46082_46146 = state_46026__$1;
(statearr_46082_46146[(2)] = null);

(statearr_46082_46146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (11))){
var inst_45925 = (state_46026[(7)]);
var inst_45903 = (state_46026[(17)]);
var inst_45925__$1 = cljs.core.seq.call(null,inst_45903);
var state_46026__$1 = (function (){var statearr_46083 = state_46026;
(statearr_46083[(7)] = inst_45925__$1);

return statearr_46083;
})();
if(inst_45925__$1){
var statearr_46084_46147 = state_46026__$1;
(statearr_46084_46147[(1)] = (16));

} else {
var statearr_46085_46148 = state_46026__$1;
(statearr_46085_46148[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (9))){
var inst_45955 = (state_46026[(2)]);
var state_46026__$1 = state_46026;
var statearr_46086_46149 = state_46026__$1;
(statearr_46086_46149[(2)] = inst_45955);

(statearr_46086_46149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (5))){
var inst_45901 = cljs.core.deref.call(null,cs);
var inst_45902 = cljs.core.seq.call(null,inst_45901);
var inst_45903 = inst_45902;
var inst_45904 = null;
var inst_45905 = (0);
var inst_45906 = (0);
var state_46026__$1 = (function (){var statearr_46087 = state_46026;
(statearr_46087[(13)] = inst_45906);

(statearr_46087[(14)] = inst_45904);

(statearr_46087[(16)] = inst_45905);

(statearr_46087[(17)] = inst_45903);

return statearr_46087;
})();
var statearr_46088_46150 = state_46026__$1;
(statearr_46088_46150[(2)] = null);

(statearr_46088_46150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (14))){
var state_46026__$1 = state_46026;
var statearr_46089_46151 = state_46026__$1;
(statearr_46089_46151[(2)] = null);

(statearr_46089_46151[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (45))){
var inst_46016 = (state_46026[(2)]);
var state_46026__$1 = state_46026;
var statearr_46090_46152 = state_46026__$1;
(statearr_46090_46152[(2)] = inst_46016);

(statearr_46090_46152[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (26))){
var inst_45958 = (state_46026[(29)]);
var inst_46012 = (state_46026[(2)]);
var inst_46013 = cljs.core.seq.call(null,inst_45958);
var state_46026__$1 = (function (){var statearr_46091 = state_46026;
(statearr_46091[(31)] = inst_46012);

return statearr_46091;
})();
if(inst_46013){
var statearr_46092_46153 = state_46026__$1;
(statearr_46092_46153[(1)] = (42));

} else {
var statearr_46093_46154 = state_46026__$1;
(statearr_46093_46154[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (16))){
var inst_45925 = (state_46026[(7)]);
var inst_45927 = cljs.core.chunked_seq_QMARK_.call(null,inst_45925);
var state_46026__$1 = state_46026;
if(inst_45927){
var statearr_46094_46155 = state_46026__$1;
(statearr_46094_46155[(1)] = (19));

} else {
var statearr_46095_46156 = state_46026__$1;
(statearr_46095_46156[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (38))){
var inst_46005 = (state_46026[(2)]);
var state_46026__$1 = state_46026;
var statearr_46096_46157 = state_46026__$1;
(statearr_46096_46157[(2)] = inst_46005);

(statearr_46096_46157[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (30))){
var state_46026__$1 = state_46026;
var statearr_46097_46158 = state_46026__$1;
(statearr_46097_46158[(2)] = null);

(statearr_46097_46158[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (10))){
var inst_45906 = (state_46026[(13)]);
var inst_45904 = (state_46026[(14)]);
var inst_45914 = cljs.core._nth.call(null,inst_45904,inst_45906);
var inst_45915 = cljs.core.nth.call(null,inst_45914,(0),null);
var inst_45916 = cljs.core.nth.call(null,inst_45914,(1),null);
var state_46026__$1 = (function (){var statearr_46098 = state_46026;
(statearr_46098[(26)] = inst_45915);

return statearr_46098;
})();
if(cljs.core.truth_(inst_45916)){
var statearr_46099_46159 = state_46026__$1;
(statearr_46099_46159[(1)] = (13));

} else {
var statearr_46100_46160 = state_46026__$1;
(statearr_46100_46160[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (18))){
var inst_45951 = (state_46026[(2)]);
var state_46026__$1 = state_46026;
var statearr_46101_46161 = state_46026__$1;
(statearr_46101_46161[(2)] = inst_45951);

(statearr_46101_46161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (42))){
var state_46026__$1 = state_46026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46026__$1,(45),dchan);
} else {
if((state_val_46027 === (37))){
var inst_45985 = (state_46026[(25)]);
var inst_45994 = (state_46026[(23)]);
var inst_45894 = (state_46026[(10)]);
var inst_45994__$1 = cljs.core.first.call(null,inst_45985);
var inst_45995 = cljs.core.async.put_BANG_.call(null,inst_45994__$1,inst_45894,done);
var state_46026__$1 = (function (){var statearr_46102 = state_46026;
(statearr_46102[(23)] = inst_45994__$1);

return statearr_46102;
})();
if(cljs.core.truth_(inst_45995)){
var statearr_46103_46162 = state_46026__$1;
(statearr_46103_46162[(1)] = (39));

} else {
var statearr_46104_46163 = state_46026__$1;
(statearr_46104_46163[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46027 === (8))){
var inst_45906 = (state_46026[(13)]);
var inst_45905 = (state_46026[(16)]);
var inst_45908 = (inst_45906 < inst_45905);
var inst_45909 = inst_45908;
var state_46026__$1 = state_46026;
if(cljs.core.truth_(inst_45909)){
var statearr_46105_46164 = state_46026__$1;
(statearr_46105_46164[(1)] = (10));

} else {
var statearr_46106_46165 = state_46026__$1;
(statearr_46106_46165[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45292__auto___46111,cs,m,dchan,dctr,done))
;
return ((function (switch__45202__auto__,c__45292__auto___46111,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__45203__auto__ = null;
var cljs$core$async$mult_$_state_machine__45203__auto____0 = (function (){
var statearr_46107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46107[(0)] = cljs$core$async$mult_$_state_machine__45203__auto__);

(statearr_46107[(1)] = (1));

return statearr_46107;
});
var cljs$core$async$mult_$_state_machine__45203__auto____1 = (function (state_46026){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_46026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e46108){if((e46108 instanceof Object)){
var ex__45206__auto__ = e46108;
var statearr_46109_46166 = state_46026;
(statearr_46109_46166[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46167 = state_46026;
state_46026 = G__46167;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45203__auto__ = function(state_46026){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45203__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45203__auto____1.call(this,state_46026);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45203__auto____0;
cljs$core$async$mult_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45203__auto____1;
return cljs$core$async$mult_$_state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto___46111,cs,m,dchan,dctr,done))
})();
var state__45294__auto__ = (function (){var statearr_46110 = f__45293__auto__.call(null);
(statearr_46110[(6)] = c__45292__auto___46111);

return statearr_46110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto___46111,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__46169 = arguments.length;
switch (G__46169) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__42145__auto__ = (((m == null))?null:m);
var m__42146__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__42145__auto__)]);
if(!((m__42146__auto__ == null))){
return m__42146__auto__.call(null,m,ch);
} else {
var m__42146__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__42146__auto____$1 == null))){
return m__42146__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__42145__auto__ = (((m == null))?null:m);
var m__42146__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__42145__auto__)]);
if(!((m__42146__auto__ == null))){
return m__42146__auto__.call(null,m,ch);
} else {
var m__42146__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__42146__auto____$1 == null))){
return m__42146__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__42145__auto__ = (((m == null))?null:m);
var m__42146__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__42145__auto__)]);
if(!((m__42146__auto__ == null))){
return m__42146__auto__.call(null,m);
} else {
var m__42146__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__42146__auto____$1 == null))){
return m__42146__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__42145__auto__ = (((m == null))?null:m);
var m__42146__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__42145__auto__)]);
if(!((m__42146__auto__ == null))){
return m__42146__auto__.call(null,m,state_map);
} else {
var m__42146__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__42146__auto____$1 == null))){
return m__42146__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__42145__auto__ = (((m == null))?null:m);
var m__42146__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__42145__auto__)]);
if(!((m__42146__auto__ == null))){
return m__42146__auto__.call(null,m,mode);
} else {
var m__42146__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__42146__auto____$1 == null))){
return m__42146__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__42698__auto__ = [];
var len__42691__auto___46181 = arguments.length;
var i__42692__auto___46182 = (0);
while(true){
if((i__42692__auto___46182 < len__42691__auto___46181)){
args__42698__auto__.push((arguments[i__42692__auto___46182]));

var G__46183 = (i__42692__auto___46182 + (1));
i__42692__auto___46182 = G__46183;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((3) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42699__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46175){
var map__46176 = p__46175;
var map__46176__$1 = ((((!((map__46176 == null)))?((((map__46176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46176.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46176):map__46176);
var opts = map__46176__$1;
var statearr_46178_46184 = state;
(statearr_46178_46184[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__46176,map__46176__$1,opts){
return (function (val){
var statearr_46179_46185 = state;
(statearr_46179_46185[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__46176,map__46176__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_46180_46186 = state;
(statearr_46180_46186[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46171){
var G__46172 = cljs.core.first.call(null,seq46171);
var seq46171__$1 = cljs.core.next.call(null,seq46171);
var G__46173 = cljs.core.first.call(null,seq46171__$1);
var seq46171__$2 = cljs.core.next.call(null,seq46171__$1);
var G__46174 = cljs.core.first.call(null,seq46171__$2);
var seq46171__$3 = cljs.core.next.call(null,seq46171__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46172,G__46173,G__46174,seq46171__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async46187 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46187 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta46188){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta46188 = meta46188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46189,meta46188__$1){
var self__ = this;
var _46189__$1 = this;
return (new cljs.core.async.t_cljs$core$async46187(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta46188__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46187.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46189){
var self__ = this;
var _46189__$1 = this;
return self__.meta46188;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46187.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46187.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46187.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46187.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46187.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46187.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46187.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46187.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46187.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta46188","meta46188",-1858128904,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46187.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46187";

cljs.core.async.t_cljs$core$async46187.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__42083__auto__,writer__42084__auto__,opt__42085__auto__){
return cljs.core._write.call(null,writer__42084__auto__,"cljs.core.async/t_cljs$core$async46187");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async46187 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46187(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta46188){
return (new cljs.core.async.t_cljs$core$async46187(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta46188));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46187(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45292__auto___46351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto___46351,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto___46351,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46291){
var state_val_46292 = (state_46291[(1)]);
if((state_val_46292 === (7))){
var inst_46206 = (state_46291[(2)]);
var state_46291__$1 = state_46291;
var statearr_46293_46352 = state_46291__$1;
(statearr_46293_46352[(2)] = inst_46206);

(statearr_46293_46352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (20))){
var inst_46218 = (state_46291[(7)]);
var state_46291__$1 = state_46291;
var statearr_46294_46353 = state_46291__$1;
(statearr_46294_46353[(2)] = inst_46218);

(statearr_46294_46353[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (27))){
var state_46291__$1 = state_46291;
var statearr_46295_46354 = state_46291__$1;
(statearr_46295_46354[(2)] = null);

(statearr_46295_46354[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (1))){
var inst_46193 = (state_46291[(8)]);
var inst_46193__$1 = calc_state.call(null);
var inst_46195 = (inst_46193__$1 == null);
var inst_46196 = cljs.core.not.call(null,inst_46195);
var state_46291__$1 = (function (){var statearr_46296 = state_46291;
(statearr_46296[(8)] = inst_46193__$1);

return statearr_46296;
})();
if(inst_46196){
var statearr_46297_46355 = state_46291__$1;
(statearr_46297_46355[(1)] = (2));

} else {
var statearr_46298_46356 = state_46291__$1;
(statearr_46298_46356[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (24))){
var inst_46242 = (state_46291[(9)]);
var inst_46265 = (state_46291[(10)]);
var inst_46251 = (state_46291[(11)]);
var inst_46265__$1 = inst_46242.call(null,inst_46251);
var state_46291__$1 = (function (){var statearr_46299 = state_46291;
(statearr_46299[(10)] = inst_46265__$1);

return statearr_46299;
})();
if(cljs.core.truth_(inst_46265__$1)){
var statearr_46300_46357 = state_46291__$1;
(statearr_46300_46357[(1)] = (29));

} else {
var statearr_46301_46358 = state_46291__$1;
(statearr_46301_46358[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (4))){
var inst_46209 = (state_46291[(2)]);
var state_46291__$1 = state_46291;
if(cljs.core.truth_(inst_46209)){
var statearr_46302_46359 = state_46291__$1;
(statearr_46302_46359[(1)] = (8));

} else {
var statearr_46303_46360 = state_46291__$1;
(statearr_46303_46360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (15))){
var inst_46236 = (state_46291[(2)]);
var state_46291__$1 = state_46291;
if(cljs.core.truth_(inst_46236)){
var statearr_46304_46361 = state_46291__$1;
(statearr_46304_46361[(1)] = (19));

} else {
var statearr_46305_46362 = state_46291__$1;
(statearr_46305_46362[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (21))){
var inst_46241 = (state_46291[(12)]);
var inst_46241__$1 = (state_46291[(2)]);
var inst_46242 = cljs.core.get.call(null,inst_46241__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46243 = cljs.core.get.call(null,inst_46241__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46244 = cljs.core.get.call(null,inst_46241__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46291__$1 = (function (){var statearr_46306 = state_46291;
(statearr_46306[(9)] = inst_46242);

(statearr_46306[(12)] = inst_46241__$1);

(statearr_46306[(13)] = inst_46243);

return statearr_46306;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46291__$1,(22),inst_46244);
} else {
if((state_val_46292 === (31))){
var inst_46273 = (state_46291[(2)]);
var state_46291__$1 = state_46291;
if(cljs.core.truth_(inst_46273)){
var statearr_46307_46363 = state_46291__$1;
(statearr_46307_46363[(1)] = (32));

} else {
var statearr_46308_46364 = state_46291__$1;
(statearr_46308_46364[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (32))){
var inst_46250 = (state_46291[(14)]);
var state_46291__$1 = state_46291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46291__$1,(35),out,inst_46250);
} else {
if((state_val_46292 === (33))){
var inst_46241 = (state_46291[(12)]);
var inst_46218 = inst_46241;
var state_46291__$1 = (function (){var statearr_46309 = state_46291;
(statearr_46309[(7)] = inst_46218);

return statearr_46309;
})();
var statearr_46310_46365 = state_46291__$1;
(statearr_46310_46365[(2)] = null);

(statearr_46310_46365[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (13))){
var inst_46218 = (state_46291[(7)]);
var inst_46225 = inst_46218.cljs$lang$protocol_mask$partition0$;
var inst_46226 = (inst_46225 & (64));
var inst_46227 = inst_46218.cljs$core$ISeq$;
var inst_46228 = (cljs.core.PROTOCOL_SENTINEL === inst_46227);
var inst_46229 = (inst_46226) || (inst_46228);
var state_46291__$1 = state_46291;
if(cljs.core.truth_(inst_46229)){
var statearr_46311_46366 = state_46291__$1;
(statearr_46311_46366[(1)] = (16));

} else {
var statearr_46312_46367 = state_46291__$1;
(statearr_46312_46367[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (22))){
var inst_46250 = (state_46291[(14)]);
var inst_46251 = (state_46291[(11)]);
var inst_46249 = (state_46291[(2)]);
var inst_46250__$1 = cljs.core.nth.call(null,inst_46249,(0),null);
var inst_46251__$1 = cljs.core.nth.call(null,inst_46249,(1),null);
var inst_46252 = (inst_46250__$1 == null);
var inst_46253 = cljs.core._EQ_.call(null,inst_46251__$1,change);
var inst_46254 = (inst_46252) || (inst_46253);
var state_46291__$1 = (function (){var statearr_46313 = state_46291;
(statearr_46313[(14)] = inst_46250__$1);

(statearr_46313[(11)] = inst_46251__$1);

return statearr_46313;
})();
if(cljs.core.truth_(inst_46254)){
var statearr_46314_46368 = state_46291__$1;
(statearr_46314_46368[(1)] = (23));

} else {
var statearr_46315_46369 = state_46291__$1;
(statearr_46315_46369[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (36))){
var inst_46241 = (state_46291[(12)]);
var inst_46218 = inst_46241;
var state_46291__$1 = (function (){var statearr_46316 = state_46291;
(statearr_46316[(7)] = inst_46218);

return statearr_46316;
})();
var statearr_46317_46370 = state_46291__$1;
(statearr_46317_46370[(2)] = null);

(statearr_46317_46370[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (29))){
var inst_46265 = (state_46291[(10)]);
var state_46291__$1 = state_46291;
var statearr_46318_46371 = state_46291__$1;
(statearr_46318_46371[(2)] = inst_46265);

(statearr_46318_46371[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (6))){
var state_46291__$1 = state_46291;
var statearr_46319_46372 = state_46291__$1;
(statearr_46319_46372[(2)] = false);

(statearr_46319_46372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (28))){
var inst_46261 = (state_46291[(2)]);
var inst_46262 = calc_state.call(null);
var inst_46218 = inst_46262;
var state_46291__$1 = (function (){var statearr_46320 = state_46291;
(statearr_46320[(15)] = inst_46261);

(statearr_46320[(7)] = inst_46218);

return statearr_46320;
})();
var statearr_46321_46373 = state_46291__$1;
(statearr_46321_46373[(2)] = null);

(statearr_46321_46373[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (25))){
var inst_46287 = (state_46291[(2)]);
var state_46291__$1 = state_46291;
var statearr_46322_46374 = state_46291__$1;
(statearr_46322_46374[(2)] = inst_46287);

(statearr_46322_46374[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (34))){
var inst_46285 = (state_46291[(2)]);
var state_46291__$1 = state_46291;
var statearr_46323_46375 = state_46291__$1;
(statearr_46323_46375[(2)] = inst_46285);

(statearr_46323_46375[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (17))){
var state_46291__$1 = state_46291;
var statearr_46324_46376 = state_46291__$1;
(statearr_46324_46376[(2)] = false);

(statearr_46324_46376[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (3))){
var state_46291__$1 = state_46291;
var statearr_46325_46377 = state_46291__$1;
(statearr_46325_46377[(2)] = false);

(statearr_46325_46377[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (12))){
var inst_46289 = (state_46291[(2)]);
var state_46291__$1 = state_46291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46291__$1,inst_46289);
} else {
if((state_val_46292 === (2))){
var inst_46193 = (state_46291[(8)]);
var inst_46198 = inst_46193.cljs$lang$protocol_mask$partition0$;
var inst_46199 = (inst_46198 & (64));
var inst_46200 = inst_46193.cljs$core$ISeq$;
var inst_46201 = (cljs.core.PROTOCOL_SENTINEL === inst_46200);
var inst_46202 = (inst_46199) || (inst_46201);
var state_46291__$1 = state_46291;
if(cljs.core.truth_(inst_46202)){
var statearr_46326_46378 = state_46291__$1;
(statearr_46326_46378[(1)] = (5));

} else {
var statearr_46327_46379 = state_46291__$1;
(statearr_46327_46379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (23))){
var inst_46250 = (state_46291[(14)]);
var inst_46256 = (inst_46250 == null);
var state_46291__$1 = state_46291;
if(cljs.core.truth_(inst_46256)){
var statearr_46328_46380 = state_46291__$1;
(statearr_46328_46380[(1)] = (26));

} else {
var statearr_46329_46381 = state_46291__$1;
(statearr_46329_46381[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (35))){
var inst_46276 = (state_46291[(2)]);
var state_46291__$1 = state_46291;
if(cljs.core.truth_(inst_46276)){
var statearr_46330_46382 = state_46291__$1;
(statearr_46330_46382[(1)] = (36));

} else {
var statearr_46331_46383 = state_46291__$1;
(statearr_46331_46383[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (19))){
var inst_46218 = (state_46291[(7)]);
var inst_46238 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46218);
var state_46291__$1 = state_46291;
var statearr_46332_46384 = state_46291__$1;
(statearr_46332_46384[(2)] = inst_46238);

(statearr_46332_46384[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (11))){
var inst_46218 = (state_46291[(7)]);
var inst_46222 = (inst_46218 == null);
var inst_46223 = cljs.core.not.call(null,inst_46222);
var state_46291__$1 = state_46291;
if(inst_46223){
var statearr_46333_46385 = state_46291__$1;
(statearr_46333_46385[(1)] = (13));

} else {
var statearr_46334_46386 = state_46291__$1;
(statearr_46334_46386[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (9))){
var inst_46193 = (state_46291[(8)]);
var state_46291__$1 = state_46291;
var statearr_46335_46387 = state_46291__$1;
(statearr_46335_46387[(2)] = inst_46193);

(statearr_46335_46387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (5))){
var state_46291__$1 = state_46291;
var statearr_46336_46388 = state_46291__$1;
(statearr_46336_46388[(2)] = true);

(statearr_46336_46388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (14))){
var state_46291__$1 = state_46291;
var statearr_46337_46389 = state_46291__$1;
(statearr_46337_46389[(2)] = false);

(statearr_46337_46389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (26))){
var inst_46251 = (state_46291[(11)]);
var inst_46258 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46251);
var state_46291__$1 = state_46291;
var statearr_46338_46390 = state_46291__$1;
(statearr_46338_46390[(2)] = inst_46258);

(statearr_46338_46390[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (16))){
var state_46291__$1 = state_46291;
var statearr_46339_46391 = state_46291__$1;
(statearr_46339_46391[(2)] = true);

(statearr_46339_46391[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (38))){
var inst_46281 = (state_46291[(2)]);
var state_46291__$1 = state_46291;
var statearr_46340_46392 = state_46291__$1;
(statearr_46340_46392[(2)] = inst_46281);

(statearr_46340_46392[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (30))){
var inst_46242 = (state_46291[(9)]);
var inst_46243 = (state_46291[(13)]);
var inst_46251 = (state_46291[(11)]);
var inst_46268 = cljs.core.empty_QMARK_.call(null,inst_46242);
var inst_46269 = inst_46243.call(null,inst_46251);
var inst_46270 = cljs.core.not.call(null,inst_46269);
var inst_46271 = (inst_46268) && (inst_46270);
var state_46291__$1 = state_46291;
var statearr_46341_46393 = state_46291__$1;
(statearr_46341_46393[(2)] = inst_46271);

(statearr_46341_46393[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (10))){
var inst_46193 = (state_46291[(8)]);
var inst_46214 = (state_46291[(2)]);
var inst_46215 = cljs.core.get.call(null,inst_46214,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46216 = cljs.core.get.call(null,inst_46214,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46217 = cljs.core.get.call(null,inst_46214,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46218 = inst_46193;
var state_46291__$1 = (function (){var statearr_46342 = state_46291;
(statearr_46342[(16)] = inst_46216);

(statearr_46342[(7)] = inst_46218);

(statearr_46342[(17)] = inst_46215);

(statearr_46342[(18)] = inst_46217);

return statearr_46342;
})();
var statearr_46343_46394 = state_46291__$1;
(statearr_46343_46394[(2)] = null);

(statearr_46343_46394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (18))){
var inst_46233 = (state_46291[(2)]);
var state_46291__$1 = state_46291;
var statearr_46344_46395 = state_46291__$1;
(statearr_46344_46395[(2)] = inst_46233);

(statearr_46344_46395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (37))){
var state_46291__$1 = state_46291;
var statearr_46345_46396 = state_46291__$1;
(statearr_46345_46396[(2)] = null);

(statearr_46345_46396[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46292 === (8))){
var inst_46193 = (state_46291[(8)]);
var inst_46211 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46193);
var state_46291__$1 = state_46291;
var statearr_46346_46397 = state_46291__$1;
(statearr_46346_46397[(2)] = inst_46211);

(statearr_46346_46397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45292__auto___46351,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__45202__auto__,c__45292__auto___46351,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__45203__auto__ = null;
var cljs$core$async$mix_$_state_machine__45203__auto____0 = (function (){
var statearr_46347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46347[(0)] = cljs$core$async$mix_$_state_machine__45203__auto__);

(statearr_46347[(1)] = (1));

return statearr_46347;
});
var cljs$core$async$mix_$_state_machine__45203__auto____1 = (function (state_46291){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_46291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e46348){if((e46348 instanceof Object)){
var ex__45206__auto__ = e46348;
var statearr_46349_46398 = state_46291;
(statearr_46349_46398[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46399 = state_46291;
state_46291 = G__46399;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45203__auto__ = function(state_46291){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45203__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45203__auto____1.call(this,state_46291);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45203__auto____0;
cljs$core$async$mix_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45203__auto____1;
return cljs$core$async$mix_$_state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto___46351,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__45294__auto__ = (function (){var statearr_46350 = f__45293__auto__.call(null);
(statearr_46350[(6)] = c__45292__auto___46351);

return statearr_46350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto___46351,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__42145__auto__ = (((p == null))?null:p);
var m__42146__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__42145__auto__)]);
if(!((m__42146__auto__ == null))){
return m__42146__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__42146__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__42146__auto____$1 == null))){
return m__42146__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__42145__auto__ = (((p == null))?null:p);
var m__42146__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__42145__auto__)]);
if(!((m__42146__auto__ == null))){
return m__42146__auto__.call(null,p,v,ch);
} else {
var m__42146__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__42146__auto____$1 == null))){
return m__42146__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46401 = arguments.length;
switch (G__46401) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__42145__auto__ = (((p == null))?null:p);
var m__42146__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__42145__auto__)]);
if(!((m__42146__auto__ == null))){
return m__42146__auto__.call(null,p);
} else {
var m__42146__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__42146__auto____$1 == null))){
return m__42146__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__42145__auto__ = (((p == null))?null:p);
var m__42146__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__42145__auto__)]);
if(!((m__42146__auto__ == null))){
return m__42146__auto__.call(null,p,v);
} else {
var m__42146__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__42146__auto____$1 == null))){
return m__42146__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__46405 = arguments.length;
switch (G__46405) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__41412__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__41412__auto__)){
return or__41412__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__41412__auto__,mults){
return (function (p1__46403_SHARP_){
if(cljs.core.truth_(p1__46403_SHARP_.call(null,topic))){
return p1__46403_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__46403_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__41412__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async46406 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46406 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46407){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46407 = meta46407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46408,meta46407__$1){
var self__ = this;
var _46408__$1 = this;
return (new cljs.core.async.t_cljs$core$async46406(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46407__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46406.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46408){
var self__ = this;
var _46408__$1 = this;
return self__.meta46407;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46406.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46406.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46406.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46406.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46406.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46406.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46406.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46406.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46407","meta46407",1297927584,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46406.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46406.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46406";

cljs.core.async.t_cljs$core$async46406.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__42083__auto__,writer__42084__auto__,opt__42085__auto__){
return cljs.core._write.call(null,writer__42084__auto__,"cljs.core.async/t_cljs$core$async46406");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async46406 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46406(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46407){
return (new cljs.core.async.t_cljs$core$async46406(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46407));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46406(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45292__auto___46526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto___46526,mults,ensure_mult,p){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto___46526,mults,ensure_mult,p){
return (function (state_46480){
var state_val_46481 = (state_46480[(1)]);
if((state_val_46481 === (7))){
var inst_46476 = (state_46480[(2)]);
var state_46480__$1 = state_46480;
var statearr_46482_46527 = state_46480__$1;
(statearr_46482_46527[(2)] = inst_46476);

(statearr_46482_46527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46481 === (20))){
var state_46480__$1 = state_46480;
var statearr_46483_46528 = state_46480__$1;
(statearr_46483_46528[(2)] = null);

(statearr_46483_46528[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46481 === (1))){
var state_46480__$1 = state_46480;
var statearr_46484_46529 = state_46480__$1;
(statearr_46484_46529[(2)] = null);

(statearr_46484_46529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46481 === (24))){
var inst_46459 = (state_46480[(7)]);
var inst_46468 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46459);
var state_46480__$1 = state_46480;
var statearr_46485_46530 = state_46480__$1;
(statearr_46485_46530[(2)] = inst_46468);

(statearr_46485_46530[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46481 === (4))){
var inst_46411 = (state_46480[(8)]);
var inst_46411__$1 = (state_46480[(2)]);
var inst_46412 = (inst_46411__$1 == null);
var state_46480__$1 = (function (){var statearr_46486 = state_46480;
(statearr_46486[(8)] = inst_46411__$1);

return statearr_46486;
})();
if(cljs.core.truth_(inst_46412)){
var statearr_46487_46531 = state_46480__$1;
(statearr_46487_46531[(1)] = (5));

} else {
var statearr_46488_46532 = state_46480__$1;
(statearr_46488_46532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46481 === (15))){
var inst_46453 = (state_46480[(2)]);
var state_46480__$1 = state_46480;
var statearr_46489_46533 = state_46480__$1;
(statearr_46489_46533[(2)] = inst_46453);

(statearr_46489_46533[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46481 === (21))){
var inst_46473 = (state_46480[(2)]);
var state_46480__$1 = (function (){var statearr_46490 = state_46480;
(statearr_46490[(9)] = inst_46473);

return statearr_46490;
})();
var statearr_46491_46534 = state_46480__$1;
(statearr_46491_46534[(2)] = null);

(statearr_46491_46534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46481 === (13))){
var inst_46435 = (state_46480[(10)]);
var inst_46437 = cljs.core.chunked_seq_QMARK_.call(null,inst_46435);
var state_46480__$1 = state_46480;
if(inst_46437){
var statearr_46492_46535 = state_46480__$1;
(statearr_46492_46535[(1)] = (16));

} else {
var statearr_46493_46536 = state_46480__$1;
(statearr_46493_46536[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46481 === (22))){
var inst_46465 = (state_46480[(2)]);
var state_46480__$1 = state_46480;
if(cljs.core.truth_(inst_46465)){
var statearr_46494_46537 = state_46480__$1;
(statearr_46494_46537[(1)] = (23));

} else {
var statearr_46495_46538 = state_46480__$1;
(statearr_46495_46538[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46481 === (6))){
var inst_46461 = (state_46480[(11)]);
var inst_46459 = (state_46480[(7)]);
var inst_46411 = (state_46480[(8)]);
var inst_46459__$1 = topic_fn.call(null,inst_46411);
var inst_46460 = cljs.core.deref.call(null,mults);
var inst_46461__$1 = cljs.core.get.call(null,inst_46460,inst_46459__$1);
var state_46480__$1 = (function (){var statearr_46496 = state_46480;
(statearr_46496[(11)] = inst_46461__$1);

(statearr_46496[(7)] = inst_46459__$1);

return statearr_46496;
})();
if(cljs.core.truth_(inst_46461__$1)){
var statearr_46497_46539 = state_46480__$1;
(statearr_46497_46539[(1)] = (19));

} else {
var statearr_46498_46540 = state_46480__$1;
(statearr_46498_46540[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46481 === (25))){
var inst_46470 = (state_46480[(2)]);
var state_46480__$1 = state_46480;
var statearr_46499_46541 = state_46480__$1;
(statearr_46499_46541[(2)] = inst_46470);

(statearr_46499_46541[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46481 === (17))){
var inst_46435 = (state_46480[(10)]);
var inst_46444 = cljs.core.first.call(null,inst_46435);
var inst_46445 = cljs.core.async.muxch_STAR_.call(null,inst_46444);
var inst_46446 = cljs.core.async.close_BANG_.call(null,inst_46445);
var inst_46447 = cljs.core.next.call(null,inst_46435);
var inst_46421 = inst_46447;
var inst_46422 = null;
var inst_46423 = (0);
var inst_46424 = (0);
var state_46480__$1 = (function (){var statearr_46500 = state_46480;
(statearr_46500[(12)] = inst_46446);

(statearr_46500[(13)] = inst_46423);

(statearr_46500[(14)] = inst_46421);

(statearr_46500[(15)] = inst_46422);

(statearr_46500[(16)] = inst_46424);

return statearr_46500;
})();
var statearr_46501_46542 = state_46480__$1;
(statearr_46501_46542[(2)] = null);

(statearr_46501_46542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46481 === (3))){
var inst_46478 = (state_46480[(2)]);
var state_46480__$1 = state_46480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46480__$1,inst_46478);
} else {
if((state_val_46481 === (12))){
var inst_46455 = (state_46480[(2)]);
var state_46480__$1 = state_46480;
var statearr_46502_46543 = state_46480__$1;
(statearr_46502_46543[(2)] = inst_46455);

(statearr_46502_46543[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46481 === (2))){
var state_46480__$1 = state_46480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46480__$1,(4),ch);
} else {
if((state_val_46481 === (23))){
var state_46480__$1 = state_46480;
var statearr_46503_46544 = state_46480__$1;
(statearr_46503_46544[(2)] = null);

(statearr_46503_46544[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46481 === (19))){
var inst_46461 = (state_46480[(11)]);
var inst_46411 = (state_46480[(8)]);
var inst_46463 = cljs.core.async.muxch_STAR_.call(null,inst_46461);
var state_46480__$1 = state_46480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46480__$1,(22),inst_46463,inst_46411);
} else {
if((state_val_46481 === (11))){
var inst_46435 = (state_46480[(10)]);
var inst_46421 = (state_46480[(14)]);
var inst_46435__$1 = cljs.core.seq.call(null,inst_46421);
var state_46480__$1 = (function (){var statearr_46504 = state_46480;
(statearr_46504[(10)] = inst_46435__$1);

return statearr_46504;
})();
if(inst_46435__$1){
var statearr_46505_46545 = state_46480__$1;
(statearr_46505_46545[(1)] = (13));

} else {
var statearr_46506_46546 = state_46480__$1;
(statearr_46506_46546[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46481 === (9))){
var inst_46457 = (state_46480[(2)]);
var state_46480__$1 = state_46480;
var statearr_46507_46547 = state_46480__$1;
(statearr_46507_46547[(2)] = inst_46457);

(statearr_46507_46547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46481 === (5))){
var inst_46418 = cljs.core.deref.call(null,mults);
var inst_46419 = cljs.core.vals.call(null,inst_46418);
var inst_46420 = cljs.core.seq.call(null,inst_46419);
var inst_46421 = inst_46420;
var inst_46422 = null;
var inst_46423 = (0);
var inst_46424 = (0);
var state_46480__$1 = (function (){var statearr_46508 = state_46480;
(statearr_46508[(13)] = inst_46423);

(statearr_46508[(14)] = inst_46421);

(statearr_46508[(15)] = inst_46422);

(statearr_46508[(16)] = inst_46424);

return statearr_46508;
})();
var statearr_46509_46548 = state_46480__$1;
(statearr_46509_46548[(2)] = null);

(statearr_46509_46548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46481 === (14))){
var state_46480__$1 = state_46480;
var statearr_46513_46549 = state_46480__$1;
(statearr_46513_46549[(2)] = null);

(statearr_46513_46549[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46481 === (16))){
var inst_46435 = (state_46480[(10)]);
var inst_46439 = cljs.core.chunk_first.call(null,inst_46435);
var inst_46440 = cljs.core.chunk_rest.call(null,inst_46435);
var inst_46441 = cljs.core.count.call(null,inst_46439);
var inst_46421 = inst_46440;
var inst_46422 = inst_46439;
var inst_46423 = inst_46441;
var inst_46424 = (0);
var state_46480__$1 = (function (){var statearr_46514 = state_46480;
(statearr_46514[(13)] = inst_46423);

(statearr_46514[(14)] = inst_46421);

(statearr_46514[(15)] = inst_46422);

(statearr_46514[(16)] = inst_46424);

return statearr_46514;
})();
var statearr_46515_46550 = state_46480__$1;
(statearr_46515_46550[(2)] = null);

(statearr_46515_46550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46481 === (10))){
var inst_46423 = (state_46480[(13)]);
var inst_46421 = (state_46480[(14)]);
var inst_46422 = (state_46480[(15)]);
var inst_46424 = (state_46480[(16)]);
var inst_46429 = cljs.core._nth.call(null,inst_46422,inst_46424);
var inst_46430 = cljs.core.async.muxch_STAR_.call(null,inst_46429);
var inst_46431 = cljs.core.async.close_BANG_.call(null,inst_46430);
var inst_46432 = (inst_46424 + (1));
var tmp46510 = inst_46423;
var tmp46511 = inst_46421;
var tmp46512 = inst_46422;
var inst_46421__$1 = tmp46511;
var inst_46422__$1 = tmp46512;
var inst_46423__$1 = tmp46510;
var inst_46424__$1 = inst_46432;
var state_46480__$1 = (function (){var statearr_46516 = state_46480;
(statearr_46516[(17)] = inst_46431);

(statearr_46516[(13)] = inst_46423__$1);

(statearr_46516[(14)] = inst_46421__$1);

(statearr_46516[(15)] = inst_46422__$1);

(statearr_46516[(16)] = inst_46424__$1);

return statearr_46516;
})();
var statearr_46517_46551 = state_46480__$1;
(statearr_46517_46551[(2)] = null);

(statearr_46517_46551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46481 === (18))){
var inst_46450 = (state_46480[(2)]);
var state_46480__$1 = state_46480;
var statearr_46518_46552 = state_46480__$1;
(statearr_46518_46552[(2)] = inst_46450);

(statearr_46518_46552[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46481 === (8))){
var inst_46423 = (state_46480[(13)]);
var inst_46424 = (state_46480[(16)]);
var inst_46426 = (inst_46424 < inst_46423);
var inst_46427 = inst_46426;
var state_46480__$1 = state_46480;
if(cljs.core.truth_(inst_46427)){
var statearr_46519_46553 = state_46480__$1;
(statearr_46519_46553[(1)] = (10));

} else {
var statearr_46520_46554 = state_46480__$1;
(statearr_46520_46554[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45292__auto___46526,mults,ensure_mult,p))
;
return ((function (switch__45202__auto__,c__45292__auto___46526,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__45203__auto__ = null;
var cljs$core$async$state_machine__45203__auto____0 = (function (){
var statearr_46521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46521[(0)] = cljs$core$async$state_machine__45203__auto__);

(statearr_46521[(1)] = (1));

return statearr_46521;
});
var cljs$core$async$state_machine__45203__auto____1 = (function (state_46480){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_46480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e46522){if((e46522 instanceof Object)){
var ex__45206__auto__ = e46522;
var statearr_46523_46555 = state_46480;
(statearr_46523_46555[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46556 = state_46480;
state_46480 = G__46556;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs$core$async$state_machine__45203__auto__ = function(state_46480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45203__auto____1.call(this,state_46480);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45203__auto____0;
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45203__auto____1;
return cljs$core$async$state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto___46526,mults,ensure_mult,p))
})();
var state__45294__auto__ = (function (){var statearr_46524 = f__45293__auto__.call(null);
(statearr_46524[(6)] = c__45292__auto___46526);

return statearr_46524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto___46526,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__46558 = arguments.length;
switch (G__46558) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__46561 = arguments.length;
switch (G__46561) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__46564 = arguments.length;
switch (G__46564) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__45292__auto___46631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto___46631,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto___46631,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46603){
var state_val_46604 = (state_46603[(1)]);
if((state_val_46604 === (7))){
var state_46603__$1 = state_46603;
var statearr_46605_46632 = state_46603__$1;
(statearr_46605_46632[(2)] = null);

(statearr_46605_46632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46604 === (1))){
var state_46603__$1 = state_46603;
var statearr_46606_46633 = state_46603__$1;
(statearr_46606_46633[(2)] = null);

(statearr_46606_46633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46604 === (4))){
var inst_46567 = (state_46603[(7)]);
var inst_46569 = (inst_46567 < cnt);
var state_46603__$1 = state_46603;
if(cljs.core.truth_(inst_46569)){
var statearr_46607_46634 = state_46603__$1;
(statearr_46607_46634[(1)] = (6));

} else {
var statearr_46608_46635 = state_46603__$1;
(statearr_46608_46635[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46604 === (15))){
var inst_46599 = (state_46603[(2)]);
var state_46603__$1 = state_46603;
var statearr_46609_46636 = state_46603__$1;
(statearr_46609_46636[(2)] = inst_46599);

(statearr_46609_46636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46604 === (13))){
var inst_46592 = cljs.core.async.close_BANG_.call(null,out);
var state_46603__$1 = state_46603;
var statearr_46610_46637 = state_46603__$1;
(statearr_46610_46637[(2)] = inst_46592);

(statearr_46610_46637[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46604 === (6))){
var state_46603__$1 = state_46603;
var statearr_46611_46638 = state_46603__$1;
(statearr_46611_46638[(2)] = null);

(statearr_46611_46638[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46604 === (3))){
var inst_46601 = (state_46603[(2)]);
var state_46603__$1 = state_46603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46603__$1,inst_46601);
} else {
if((state_val_46604 === (12))){
var inst_46589 = (state_46603[(8)]);
var inst_46589__$1 = (state_46603[(2)]);
var inst_46590 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46589__$1);
var state_46603__$1 = (function (){var statearr_46612 = state_46603;
(statearr_46612[(8)] = inst_46589__$1);

return statearr_46612;
})();
if(cljs.core.truth_(inst_46590)){
var statearr_46613_46639 = state_46603__$1;
(statearr_46613_46639[(1)] = (13));

} else {
var statearr_46614_46640 = state_46603__$1;
(statearr_46614_46640[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46604 === (2))){
var inst_46566 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_46567 = (0);
var state_46603__$1 = (function (){var statearr_46615 = state_46603;
(statearr_46615[(9)] = inst_46566);

(statearr_46615[(7)] = inst_46567);

return statearr_46615;
})();
var statearr_46616_46641 = state_46603__$1;
(statearr_46616_46641[(2)] = null);

(statearr_46616_46641[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46604 === (11))){
var inst_46567 = (state_46603[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46603,(10),Object,null,(9));
var inst_46576 = chs__$1.call(null,inst_46567);
var inst_46577 = done.call(null,inst_46567);
var inst_46578 = cljs.core.async.take_BANG_.call(null,inst_46576,inst_46577);
var state_46603__$1 = state_46603;
var statearr_46617_46642 = state_46603__$1;
(statearr_46617_46642[(2)] = inst_46578);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46603__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46604 === (9))){
var inst_46567 = (state_46603[(7)]);
var inst_46580 = (state_46603[(2)]);
var inst_46581 = (inst_46567 + (1));
var inst_46567__$1 = inst_46581;
var state_46603__$1 = (function (){var statearr_46618 = state_46603;
(statearr_46618[(10)] = inst_46580);

(statearr_46618[(7)] = inst_46567__$1);

return statearr_46618;
})();
var statearr_46619_46643 = state_46603__$1;
(statearr_46619_46643[(2)] = null);

(statearr_46619_46643[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46604 === (5))){
var inst_46587 = (state_46603[(2)]);
var state_46603__$1 = (function (){var statearr_46620 = state_46603;
(statearr_46620[(11)] = inst_46587);

return statearr_46620;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46603__$1,(12),dchan);
} else {
if((state_val_46604 === (14))){
var inst_46589 = (state_46603[(8)]);
var inst_46594 = cljs.core.apply.call(null,f,inst_46589);
var state_46603__$1 = state_46603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46603__$1,(16),out,inst_46594);
} else {
if((state_val_46604 === (16))){
var inst_46596 = (state_46603[(2)]);
var state_46603__$1 = (function (){var statearr_46621 = state_46603;
(statearr_46621[(12)] = inst_46596);

return statearr_46621;
})();
var statearr_46622_46644 = state_46603__$1;
(statearr_46622_46644[(2)] = null);

(statearr_46622_46644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46604 === (10))){
var inst_46571 = (state_46603[(2)]);
var inst_46572 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_46603__$1 = (function (){var statearr_46623 = state_46603;
(statearr_46623[(13)] = inst_46571);

return statearr_46623;
})();
var statearr_46624_46645 = state_46603__$1;
(statearr_46624_46645[(2)] = inst_46572);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46603__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46604 === (8))){
var inst_46585 = (state_46603[(2)]);
var state_46603__$1 = state_46603;
var statearr_46625_46646 = state_46603__$1;
(statearr_46625_46646[(2)] = inst_46585);

(statearr_46625_46646[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45292__auto___46631,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__45202__auto__,c__45292__auto___46631,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__45203__auto__ = null;
var cljs$core$async$state_machine__45203__auto____0 = (function (){
var statearr_46626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46626[(0)] = cljs$core$async$state_machine__45203__auto__);

(statearr_46626[(1)] = (1));

return statearr_46626;
});
var cljs$core$async$state_machine__45203__auto____1 = (function (state_46603){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_46603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e46627){if((e46627 instanceof Object)){
var ex__45206__auto__ = e46627;
var statearr_46628_46647 = state_46603;
(statearr_46628_46647[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46648 = state_46603;
state_46603 = G__46648;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs$core$async$state_machine__45203__auto__ = function(state_46603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45203__auto____1.call(this,state_46603);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45203__auto____0;
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45203__auto____1;
return cljs$core$async$state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto___46631,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__45294__auto__ = (function (){var statearr_46629 = f__45293__auto__.call(null);
(statearr_46629[(6)] = c__45292__auto___46631);

return statearr_46629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto___46631,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46651 = arguments.length;
switch (G__46651) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45292__auto___46705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto___46705,out){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto___46705,out){
return (function (state_46683){
var state_val_46684 = (state_46683[(1)]);
if((state_val_46684 === (7))){
var inst_46662 = (state_46683[(7)]);
var inst_46663 = (state_46683[(8)]);
var inst_46662__$1 = (state_46683[(2)]);
var inst_46663__$1 = cljs.core.nth.call(null,inst_46662__$1,(0),null);
var inst_46664 = cljs.core.nth.call(null,inst_46662__$1,(1),null);
var inst_46665 = (inst_46663__$1 == null);
var state_46683__$1 = (function (){var statearr_46685 = state_46683;
(statearr_46685[(7)] = inst_46662__$1);

(statearr_46685[(8)] = inst_46663__$1);

(statearr_46685[(9)] = inst_46664);

return statearr_46685;
})();
if(cljs.core.truth_(inst_46665)){
var statearr_46686_46706 = state_46683__$1;
(statearr_46686_46706[(1)] = (8));

} else {
var statearr_46687_46707 = state_46683__$1;
(statearr_46687_46707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46684 === (1))){
var inst_46652 = cljs.core.vec.call(null,chs);
var inst_46653 = inst_46652;
var state_46683__$1 = (function (){var statearr_46688 = state_46683;
(statearr_46688[(10)] = inst_46653);

return statearr_46688;
})();
var statearr_46689_46708 = state_46683__$1;
(statearr_46689_46708[(2)] = null);

(statearr_46689_46708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46684 === (4))){
var inst_46653 = (state_46683[(10)]);
var state_46683__$1 = state_46683;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46683__$1,(7),inst_46653);
} else {
if((state_val_46684 === (6))){
var inst_46679 = (state_46683[(2)]);
var state_46683__$1 = state_46683;
var statearr_46690_46709 = state_46683__$1;
(statearr_46690_46709[(2)] = inst_46679);

(statearr_46690_46709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46684 === (3))){
var inst_46681 = (state_46683[(2)]);
var state_46683__$1 = state_46683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46683__$1,inst_46681);
} else {
if((state_val_46684 === (2))){
var inst_46653 = (state_46683[(10)]);
var inst_46655 = cljs.core.count.call(null,inst_46653);
var inst_46656 = (inst_46655 > (0));
var state_46683__$1 = state_46683;
if(cljs.core.truth_(inst_46656)){
var statearr_46692_46710 = state_46683__$1;
(statearr_46692_46710[(1)] = (4));

} else {
var statearr_46693_46711 = state_46683__$1;
(statearr_46693_46711[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46684 === (11))){
var inst_46653 = (state_46683[(10)]);
var inst_46672 = (state_46683[(2)]);
var tmp46691 = inst_46653;
var inst_46653__$1 = tmp46691;
var state_46683__$1 = (function (){var statearr_46694 = state_46683;
(statearr_46694[(11)] = inst_46672);

(statearr_46694[(10)] = inst_46653__$1);

return statearr_46694;
})();
var statearr_46695_46712 = state_46683__$1;
(statearr_46695_46712[(2)] = null);

(statearr_46695_46712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46684 === (9))){
var inst_46663 = (state_46683[(8)]);
var state_46683__$1 = state_46683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46683__$1,(11),out,inst_46663);
} else {
if((state_val_46684 === (5))){
var inst_46677 = cljs.core.async.close_BANG_.call(null,out);
var state_46683__$1 = state_46683;
var statearr_46696_46713 = state_46683__$1;
(statearr_46696_46713[(2)] = inst_46677);

(statearr_46696_46713[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46684 === (10))){
var inst_46675 = (state_46683[(2)]);
var state_46683__$1 = state_46683;
var statearr_46697_46714 = state_46683__$1;
(statearr_46697_46714[(2)] = inst_46675);

(statearr_46697_46714[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46684 === (8))){
var inst_46662 = (state_46683[(7)]);
var inst_46653 = (state_46683[(10)]);
var inst_46663 = (state_46683[(8)]);
var inst_46664 = (state_46683[(9)]);
var inst_46667 = (function (){var cs = inst_46653;
var vec__46658 = inst_46662;
var v = inst_46663;
var c = inst_46664;
return ((function (cs,vec__46658,v,c,inst_46662,inst_46653,inst_46663,inst_46664,state_val_46684,c__45292__auto___46705,out){
return (function (p1__46649_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46649_SHARP_);
});
;})(cs,vec__46658,v,c,inst_46662,inst_46653,inst_46663,inst_46664,state_val_46684,c__45292__auto___46705,out))
})();
var inst_46668 = cljs.core.filterv.call(null,inst_46667,inst_46653);
var inst_46653__$1 = inst_46668;
var state_46683__$1 = (function (){var statearr_46698 = state_46683;
(statearr_46698[(10)] = inst_46653__$1);

return statearr_46698;
})();
var statearr_46699_46715 = state_46683__$1;
(statearr_46699_46715[(2)] = null);

(statearr_46699_46715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__45292__auto___46705,out))
;
return ((function (switch__45202__auto__,c__45292__auto___46705,out){
return (function() {
var cljs$core$async$state_machine__45203__auto__ = null;
var cljs$core$async$state_machine__45203__auto____0 = (function (){
var statearr_46700 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46700[(0)] = cljs$core$async$state_machine__45203__auto__);

(statearr_46700[(1)] = (1));

return statearr_46700;
});
var cljs$core$async$state_machine__45203__auto____1 = (function (state_46683){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_46683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e46701){if((e46701 instanceof Object)){
var ex__45206__auto__ = e46701;
var statearr_46702_46716 = state_46683;
(statearr_46702_46716[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46717 = state_46683;
state_46683 = G__46717;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs$core$async$state_machine__45203__auto__ = function(state_46683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45203__auto____1.call(this,state_46683);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45203__auto____0;
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45203__auto____1;
return cljs$core$async$state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto___46705,out))
})();
var state__45294__auto__ = (function (){var statearr_46703 = f__45293__auto__.call(null);
(statearr_46703[(6)] = c__45292__auto___46705);

return statearr_46703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto___46705,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46719 = arguments.length;
switch (G__46719) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45292__auto___46764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto___46764,out){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto___46764,out){
return (function (state_46743){
var state_val_46744 = (state_46743[(1)]);
if((state_val_46744 === (7))){
var inst_46725 = (state_46743[(7)]);
var inst_46725__$1 = (state_46743[(2)]);
var inst_46726 = (inst_46725__$1 == null);
var inst_46727 = cljs.core.not.call(null,inst_46726);
var state_46743__$1 = (function (){var statearr_46745 = state_46743;
(statearr_46745[(7)] = inst_46725__$1);

return statearr_46745;
})();
if(inst_46727){
var statearr_46746_46765 = state_46743__$1;
(statearr_46746_46765[(1)] = (8));

} else {
var statearr_46747_46766 = state_46743__$1;
(statearr_46747_46766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (1))){
var inst_46720 = (0);
var state_46743__$1 = (function (){var statearr_46748 = state_46743;
(statearr_46748[(8)] = inst_46720);

return statearr_46748;
})();
var statearr_46749_46767 = state_46743__$1;
(statearr_46749_46767[(2)] = null);

(statearr_46749_46767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (4))){
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46743__$1,(7),ch);
} else {
if((state_val_46744 === (6))){
var inst_46738 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
var statearr_46750_46768 = state_46743__$1;
(statearr_46750_46768[(2)] = inst_46738);

(statearr_46750_46768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (3))){
var inst_46740 = (state_46743[(2)]);
var inst_46741 = cljs.core.async.close_BANG_.call(null,out);
var state_46743__$1 = (function (){var statearr_46751 = state_46743;
(statearr_46751[(9)] = inst_46740);

return statearr_46751;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46743__$1,inst_46741);
} else {
if((state_val_46744 === (2))){
var inst_46720 = (state_46743[(8)]);
var inst_46722 = (inst_46720 < n);
var state_46743__$1 = state_46743;
if(cljs.core.truth_(inst_46722)){
var statearr_46752_46769 = state_46743__$1;
(statearr_46752_46769[(1)] = (4));

} else {
var statearr_46753_46770 = state_46743__$1;
(statearr_46753_46770[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (11))){
var inst_46720 = (state_46743[(8)]);
var inst_46730 = (state_46743[(2)]);
var inst_46731 = (inst_46720 + (1));
var inst_46720__$1 = inst_46731;
var state_46743__$1 = (function (){var statearr_46754 = state_46743;
(statearr_46754[(10)] = inst_46730);

(statearr_46754[(8)] = inst_46720__$1);

return statearr_46754;
})();
var statearr_46755_46771 = state_46743__$1;
(statearr_46755_46771[(2)] = null);

(statearr_46755_46771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (9))){
var state_46743__$1 = state_46743;
var statearr_46756_46772 = state_46743__$1;
(statearr_46756_46772[(2)] = null);

(statearr_46756_46772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (5))){
var state_46743__$1 = state_46743;
var statearr_46757_46773 = state_46743__$1;
(statearr_46757_46773[(2)] = null);

(statearr_46757_46773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (10))){
var inst_46735 = (state_46743[(2)]);
var state_46743__$1 = state_46743;
var statearr_46758_46774 = state_46743__$1;
(statearr_46758_46774[(2)] = inst_46735);

(statearr_46758_46774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46744 === (8))){
var inst_46725 = (state_46743[(7)]);
var state_46743__$1 = state_46743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46743__$1,(11),out,inst_46725);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__45292__auto___46764,out))
;
return ((function (switch__45202__auto__,c__45292__auto___46764,out){
return (function() {
var cljs$core$async$state_machine__45203__auto__ = null;
var cljs$core$async$state_machine__45203__auto____0 = (function (){
var statearr_46759 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46759[(0)] = cljs$core$async$state_machine__45203__auto__);

(statearr_46759[(1)] = (1));

return statearr_46759;
});
var cljs$core$async$state_machine__45203__auto____1 = (function (state_46743){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_46743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e46760){if((e46760 instanceof Object)){
var ex__45206__auto__ = e46760;
var statearr_46761_46775 = state_46743;
(statearr_46761_46775[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46776 = state_46743;
state_46743 = G__46776;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs$core$async$state_machine__45203__auto__ = function(state_46743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45203__auto____1.call(this,state_46743);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45203__auto____0;
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45203__auto____1;
return cljs$core$async$state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto___46764,out))
})();
var state__45294__auto__ = (function (){var statearr_46762 = f__45293__auto__.call(null);
(statearr_46762[(6)] = c__45292__auto___46764);

return statearr_46762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto___46764,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46778 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46778 = (function (f,ch,meta46779){
this.f = f;
this.ch = ch;
this.meta46779 = meta46779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46780,meta46779__$1){
var self__ = this;
var _46780__$1 = this;
return (new cljs.core.async.t_cljs$core$async46778(self__.f,self__.ch,meta46779__$1));
});

cljs.core.async.t_cljs$core$async46778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46780){
var self__ = this;
var _46780__$1 = this;
return self__.meta46779;
});

cljs.core.async.t_cljs$core$async46778.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46778.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46778.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46778.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46778.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async46781 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46781 = (function (f,ch,meta46779,_,fn1,meta46782){
this.f = f;
this.ch = ch;
this.meta46779 = meta46779;
this._ = _;
this.fn1 = fn1;
this.meta46782 = meta46782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_46783,meta46782__$1){
var self__ = this;
var _46783__$1 = this;
return (new cljs.core.async.t_cljs$core$async46781(self__.f,self__.ch,self__.meta46779,self__._,self__.fn1,meta46782__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async46781.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_46783){
var self__ = this;
var _46783__$1 = this;
return self__.meta46782;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46781.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46781.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46781.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46781.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__46777_SHARP_){
return f1.call(null,(((p1__46777_SHARP_ == null))?null:self__.f.call(null,p1__46777_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async46781.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46779","meta46779",162004883,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46778","cljs.core.async/t_cljs$core$async46778",743329344,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46782","meta46782",1389206441,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46781.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46781";

cljs.core.async.t_cljs$core$async46781.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__42083__auto__,writer__42084__auto__,opt__42085__auto__){
return cljs.core._write.call(null,writer__42084__auto__,"cljs.core.async/t_cljs$core$async46781");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async46781 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46781(f__$1,ch__$1,meta46779__$1,___$2,fn1__$1,meta46782){
return (new cljs.core.async.t_cljs$core$async46781(f__$1,ch__$1,meta46779__$1,___$2,fn1__$1,meta46782));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async46781(self__.f,self__.ch,self__.meta46779,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__41400__auto__ = ret;
if(cljs.core.truth_(and__41400__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__41400__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async46778.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46778.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async46778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46779","meta46779",162004883,null)], null);
});

cljs.core.async.t_cljs$core$async46778.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46778";

cljs.core.async.t_cljs$core$async46778.cljs$lang$ctorPrWriter = (function (this__42083__auto__,writer__42084__auto__,opt__42085__auto__){
return cljs.core._write.call(null,writer__42084__auto__,"cljs.core.async/t_cljs$core$async46778");
});

cljs.core.async.__GT_t_cljs$core$async46778 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46778(f__$1,ch__$1,meta46779){
return (new cljs.core.async.t_cljs$core$async46778(f__$1,ch__$1,meta46779));
});

}

return (new cljs.core.async.t_cljs$core$async46778(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46784 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46784 = (function (f,ch,meta46785){
this.f = f;
this.ch = ch;
this.meta46785 = meta46785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46786,meta46785__$1){
var self__ = this;
var _46786__$1 = this;
return (new cljs.core.async.t_cljs$core$async46784(self__.f,self__.ch,meta46785__$1));
});

cljs.core.async.t_cljs$core$async46784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46786){
var self__ = this;
var _46786__$1 = this;
return self__.meta46785;
});

cljs.core.async.t_cljs$core$async46784.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46784.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46784.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46784.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46784.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46784.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async46784.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46785","meta46785",283575283,null)], null);
});

cljs.core.async.t_cljs$core$async46784.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46784";

cljs.core.async.t_cljs$core$async46784.cljs$lang$ctorPrWriter = (function (this__42083__auto__,writer__42084__auto__,opt__42085__auto__){
return cljs.core._write.call(null,writer__42084__auto__,"cljs.core.async/t_cljs$core$async46784");
});

cljs.core.async.__GT_t_cljs$core$async46784 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46784(f__$1,ch__$1,meta46785){
return (new cljs.core.async.t_cljs$core$async46784(f__$1,ch__$1,meta46785));
});

}

return (new cljs.core.async.t_cljs$core$async46784(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async46787 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46787 = (function (p,ch,meta46788){
this.p = p;
this.ch = ch;
this.meta46788 = meta46788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46789,meta46788__$1){
var self__ = this;
var _46789__$1 = this;
return (new cljs.core.async.t_cljs$core$async46787(self__.p,self__.ch,meta46788__$1));
});

cljs.core.async.t_cljs$core$async46787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46789){
var self__ = this;
var _46789__$1 = this;
return self__.meta46788;
});

cljs.core.async.t_cljs$core$async46787.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46787.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46787.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46787.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46787.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46787.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46787.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async46787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46788","meta46788",104870071,null)], null);
});

cljs.core.async.t_cljs$core$async46787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46787";

cljs.core.async.t_cljs$core$async46787.cljs$lang$ctorPrWriter = (function (this__42083__auto__,writer__42084__auto__,opt__42085__auto__){
return cljs.core._write.call(null,writer__42084__auto__,"cljs.core.async/t_cljs$core$async46787");
});

cljs.core.async.__GT_t_cljs$core$async46787 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46787(p__$1,ch__$1,meta46788){
return (new cljs.core.async.t_cljs$core$async46787(p__$1,ch__$1,meta46788));
});

}

return (new cljs.core.async.t_cljs$core$async46787(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46791 = arguments.length;
switch (G__46791) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45292__auto___46831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto___46831,out){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto___46831,out){
return (function (state_46812){
var state_val_46813 = (state_46812[(1)]);
if((state_val_46813 === (7))){
var inst_46808 = (state_46812[(2)]);
var state_46812__$1 = state_46812;
var statearr_46814_46832 = state_46812__$1;
(statearr_46814_46832[(2)] = inst_46808);

(statearr_46814_46832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (1))){
var state_46812__$1 = state_46812;
var statearr_46815_46833 = state_46812__$1;
(statearr_46815_46833[(2)] = null);

(statearr_46815_46833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (4))){
var inst_46794 = (state_46812[(7)]);
var inst_46794__$1 = (state_46812[(2)]);
var inst_46795 = (inst_46794__$1 == null);
var state_46812__$1 = (function (){var statearr_46816 = state_46812;
(statearr_46816[(7)] = inst_46794__$1);

return statearr_46816;
})();
if(cljs.core.truth_(inst_46795)){
var statearr_46817_46834 = state_46812__$1;
(statearr_46817_46834[(1)] = (5));

} else {
var statearr_46818_46835 = state_46812__$1;
(statearr_46818_46835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (6))){
var inst_46794 = (state_46812[(7)]);
var inst_46799 = p.call(null,inst_46794);
var state_46812__$1 = state_46812;
if(cljs.core.truth_(inst_46799)){
var statearr_46819_46836 = state_46812__$1;
(statearr_46819_46836[(1)] = (8));

} else {
var statearr_46820_46837 = state_46812__$1;
(statearr_46820_46837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (3))){
var inst_46810 = (state_46812[(2)]);
var state_46812__$1 = state_46812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46812__$1,inst_46810);
} else {
if((state_val_46813 === (2))){
var state_46812__$1 = state_46812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46812__$1,(4),ch);
} else {
if((state_val_46813 === (11))){
var inst_46802 = (state_46812[(2)]);
var state_46812__$1 = state_46812;
var statearr_46821_46838 = state_46812__$1;
(statearr_46821_46838[(2)] = inst_46802);

(statearr_46821_46838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (9))){
var state_46812__$1 = state_46812;
var statearr_46822_46839 = state_46812__$1;
(statearr_46822_46839[(2)] = null);

(statearr_46822_46839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (5))){
var inst_46797 = cljs.core.async.close_BANG_.call(null,out);
var state_46812__$1 = state_46812;
var statearr_46823_46840 = state_46812__$1;
(statearr_46823_46840[(2)] = inst_46797);

(statearr_46823_46840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (10))){
var inst_46805 = (state_46812[(2)]);
var state_46812__$1 = (function (){var statearr_46824 = state_46812;
(statearr_46824[(8)] = inst_46805);

return statearr_46824;
})();
var statearr_46825_46841 = state_46812__$1;
(statearr_46825_46841[(2)] = null);

(statearr_46825_46841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (8))){
var inst_46794 = (state_46812[(7)]);
var state_46812__$1 = state_46812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46812__$1,(11),out,inst_46794);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__45292__auto___46831,out))
;
return ((function (switch__45202__auto__,c__45292__auto___46831,out){
return (function() {
var cljs$core$async$state_machine__45203__auto__ = null;
var cljs$core$async$state_machine__45203__auto____0 = (function (){
var statearr_46826 = [null,null,null,null,null,null,null,null,null];
(statearr_46826[(0)] = cljs$core$async$state_machine__45203__auto__);

(statearr_46826[(1)] = (1));

return statearr_46826;
});
var cljs$core$async$state_machine__45203__auto____1 = (function (state_46812){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_46812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e46827){if((e46827 instanceof Object)){
var ex__45206__auto__ = e46827;
var statearr_46828_46842 = state_46812;
(statearr_46828_46842[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46843 = state_46812;
state_46812 = G__46843;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs$core$async$state_machine__45203__auto__ = function(state_46812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45203__auto____1.call(this,state_46812);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45203__auto____0;
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45203__auto____1;
return cljs$core$async$state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto___46831,out))
})();
var state__45294__auto__ = (function (){var statearr_46829 = f__45293__auto__.call(null);
(statearr_46829[(6)] = c__45292__auto___46831);

return statearr_46829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto___46831,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46845 = arguments.length;
switch (G__46845) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__45292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto__){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto__){
return (function (state_46908){
var state_val_46909 = (state_46908[(1)]);
if((state_val_46909 === (7))){
var inst_46904 = (state_46908[(2)]);
var state_46908__$1 = state_46908;
var statearr_46910_46948 = state_46908__$1;
(statearr_46910_46948[(2)] = inst_46904);

(statearr_46910_46948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46909 === (20))){
var inst_46874 = (state_46908[(7)]);
var inst_46885 = (state_46908[(2)]);
var inst_46886 = cljs.core.next.call(null,inst_46874);
var inst_46860 = inst_46886;
var inst_46861 = null;
var inst_46862 = (0);
var inst_46863 = (0);
var state_46908__$1 = (function (){var statearr_46911 = state_46908;
(statearr_46911[(8)] = inst_46863);

(statearr_46911[(9)] = inst_46885);

(statearr_46911[(10)] = inst_46860);

(statearr_46911[(11)] = inst_46862);

(statearr_46911[(12)] = inst_46861);

return statearr_46911;
})();
var statearr_46912_46949 = state_46908__$1;
(statearr_46912_46949[(2)] = null);

(statearr_46912_46949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46909 === (1))){
var state_46908__$1 = state_46908;
var statearr_46913_46950 = state_46908__$1;
(statearr_46913_46950[(2)] = null);

(statearr_46913_46950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46909 === (4))){
var inst_46849 = (state_46908[(13)]);
var inst_46849__$1 = (state_46908[(2)]);
var inst_46850 = (inst_46849__$1 == null);
var state_46908__$1 = (function (){var statearr_46914 = state_46908;
(statearr_46914[(13)] = inst_46849__$1);

return statearr_46914;
})();
if(cljs.core.truth_(inst_46850)){
var statearr_46915_46951 = state_46908__$1;
(statearr_46915_46951[(1)] = (5));

} else {
var statearr_46916_46952 = state_46908__$1;
(statearr_46916_46952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46909 === (15))){
var state_46908__$1 = state_46908;
var statearr_46920_46953 = state_46908__$1;
(statearr_46920_46953[(2)] = null);

(statearr_46920_46953[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46909 === (21))){
var state_46908__$1 = state_46908;
var statearr_46921_46954 = state_46908__$1;
(statearr_46921_46954[(2)] = null);

(statearr_46921_46954[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46909 === (13))){
var inst_46863 = (state_46908[(8)]);
var inst_46860 = (state_46908[(10)]);
var inst_46862 = (state_46908[(11)]);
var inst_46861 = (state_46908[(12)]);
var inst_46870 = (state_46908[(2)]);
var inst_46871 = (inst_46863 + (1));
var tmp46917 = inst_46860;
var tmp46918 = inst_46862;
var tmp46919 = inst_46861;
var inst_46860__$1 = tmp46917;
var inst_46861__$1 = tmp46919;
var inst_46862__$1 = tmp46918;
var inst_46863__$1 = inst_46871;
var state_46908__$1 = (function (){var statearr_46922 = state_46908;
(statearr_46922[(8)] = inst_46863__$1);

(statearr_46922[(10)] = inst_46860__$1);

(statearr_46922[(14)] = inst_46870);

(statearr_46922[(11)] = inst_46862__$1);

(statearr_46922[(12)] = inst_46861__$1);

return statearr_46922;
})();
var statearr_46923_46955 = state_46908__$1;
(statearr_46923_46955[(2)] = null);

(statearr_46923_46955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46909 === (22))){
var state_46908__$1 = state_46908;
var statearr_46924_46956 = state_46908__$1;
(statearr_46924_46956[(2)] = null);

(statearr_46924_46956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46909 === (6))){
var inst_46849 = (state_46908[(13)]);
var inst_46858 = f.call(null,inst_46849);
var inst_46859 = cljs.core.seq.call(null,inst_46858);
var inst_46860 = inst_46859;
var inst_46861 = null;
var inst_46862 = (0);
var inst_46863 = (0);
var state_46908__$1 = (function (){var statearr_46925 = state_46908;
(statearr_46925[(8)] = inst_46863);

(statearr_46925[(10)] = inst_46860);

(statearr_46925[(11)] = inst_46862);

(statearr_46925[(12)] = inst_46861);

return statearr_46925;
})();
var statearr_46926_46957 = state_46908__$1;
(statearr_46926_46957[(2)] = null);

(statearr_46926_46957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46909 === (17))){
var inst_46874 = (state_46908[(7)]);
var inst_46878 = cljs.core.chunk_first.call(null,inst_46874);
var inst_46879 = cljs.core.chunk_rest.call(null,inst_46874);
var inst_46880 = cljs.core.count.call(null,inst_46878);
var inst_46860 = inst_46879;
var inst_46861 = inst_46878;
var inst_46862 = inst_46880;
var inst_46863 = (0);
var state_46908__$1 = (function (){var statearr_46927 = state_46908;
(statearr_46927[(8)] = inst_46863);

(statearr_46927[(10)] = inst_46860);

(statearr_46927[(11)] = inst_46862);

(statearr_46927[(12)] = inst_46861);

return statearr_46927;
})();
var statearr_46928_46958 = state_46908__$1;
(statearr_46928_46958[(2)] = null);

(statearr_46928_46958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46909 === (3))){
var inst_46906 = (state_46908[(2)]);
var state_46908__$1 = state_46908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46908__$1,inst_46906);
} else {
if((state_val_46909 === (12))){
var inst_46894 = (state_46908[(2)]);
var state_46908__$1 = state_46908;
var statearr_46929_46959 = state_46908__$1;
(statearr_46929_46959[(2)] = inst_46894);

(statearr_46929_46959[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46909 === (2))){
var state_46908__$1 = state_46908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46908__$1,(4),in$);
} else {
if((state_val_46909 === (23))){
var inst_46902 = (state_46908[(2)]);
var state_46908__$1 = state_46908;
var statearr_46930_46960 = state_46908__$1;
(statearr_46930_46960[(2)] = inst_46902);

(statearr_46930_46960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46909 === (19))){
var inst_46889 = (state_46908[(2)]);
var state_46908__$1 = state_46908;
var statearr_46931_46961 = state_46908__$1;
(statearr_46931_46961[(2)] = inst_46889);

(statearr_46931_46961[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46909 === (11))){
var inst_46860 = (state_46908[(10)]);
var inst_46874 = (state_46908[(7)]);
var inst_46874__$1 = cljs.core.seq.call(null,inst_46860);
var state_46908__$1 = (function (){var statearr_46932 = state_46908;
(statearr_46932[(7)] = inst_46874__$1);

return statearr_46932;
})();
if(inst_46874__$1){
var statearr_46933_46962 = state_46908__$1;
(statearr_46933_46962[(1)] = (14));

} else {
var statearr_46934_46963 = state_46908__$1;
(statearr_46934_46963[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46909 === (9))){
var inst_46896 = (state_46908[(2)]);
var inst_46897 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_46908__$1 = (function (){var statearr_46935 = state_46908;
(statearr_46935[(15)] = inst_46896);

return statearr_46935;
})();
if(cljs.core.truth_(inst_46897)){
var statearr_46936_46964 = state_46908__$1;
(statearr_46936_46964[(1)] = (21));

} else {
var statearr_46937_46965 = state_46908__$1;
(statearr_46937_46965[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46909 === (5))){
var inst_46852 = cljs.core.async.close_BANG_.call(null,out);
var state_46908__$1 = state_46908;
var statearr_46938_46966 = state_46908__$1;
(statearr_46938_46966[(2)] = inst_46852);

(statearr_46938_46966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46909 === (14))){
var inst_46874 = (state_46908[(7)]);
var inst_46876 = cljs.core.chunked_seq_QMARK_.call(null,inst_46874);
var state_46908__$1 = state_46908;
if(inst_46876){
var statearr_46939_46967 = state_46908__$1;
(statearr_46939_46967[(1)] = (17));

} else {
var statearr_46940_46968 = state_46908__$1;
(statearr_46940_46968[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46909 === (16))){
var inst_46892 = (state_46908[(2)]);
var state_46908__$1 = state_46908;
var statearr_46941_46969 = state_46908__$1;
(statearr_46941_46969[(2)] = inst_46892);

(statearr_46941_46969[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46909 === (10))){
var inst_46863 = (state_46908[(8)]);
var inst_46861 = (state_46908[(12)]);
var inst_46868 = cljs.core._nth.call(null,inst_46861,inst_46863);
var state_46908__$1 = state_46908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46908__$1,(13),out,inst_46868);
} else {
if((state_val_46909 === (18))){
var inst_46874 = (state_46908[(7)]);
var inst_46883 = cljs.core.first.call(null,inst_46874);
var state_46908__$1 = state_46908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46908__$1,(20),out,inst_46883);
} else {
if((state_val_46909 === (8))){
var inst_46863 = (state_46908[(8)]);
var inst_46862 = (state_46908[(11)]);
var inst_46865 = (inst_46863 < inst_46862);
var inst_46866 = inst_46865;
var state_46908__$1 = state_46908;
if(cljs.core.truth_(inst_46866)){
var statearr_46942_46970 = state_46908__$1;
(statearr_46942_46970[(1)] = (10));

} else {
var statearr_46943_46971 = state_46908__$1;
(statearr_46943_46971[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45292__auto__))
;
return ((function (switch__45202__auto__,c__45292__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45203__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45203__auto____0 = (function (){
var statearr_46944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46944[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45203__auto__);

(statearr_46944[(1)] = (1));

return statearr_46944;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45203__auto____1 = (function (state_46908){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_46908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e46945){if((e46945 instanceof Object)){
var ex__45206__auto__ = e46945;
var statearr_46946_46972 = state_46908;
(statearr_46946_46972[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46973 = state_46908;
state_46908 = G__46973;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45203__auto__ = function(state_46908){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45203__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45203__auto____1.call(this,state_46908);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45203__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45203__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto__))
})();
var state__45294__auto__ = (function (){var statearr_46947 = f__45293__auto__.call(null);
(statearr_46947[(6)] = c__45292__auto__);

return statearr_46947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto__))
);

return c__45292__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46975 = arguments.length;
switch (G__46975) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46978 = arguments.length;
switch (G__46978) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46981 = arguments.length;
switch (G__46981) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45292__auto___47028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto___47028,out){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto___47028,out){
return (function (state_47005){
var state_val_47006 = (state_47005[(1)]);
if((state_val_47006 === (7))){
var inst_47000 = (state_47005[(2)]);
var state_47005__$1 = state_47005;
var statearr_47007_47029 = state_47005__$1;
(statearr_47007_47029[(2)] = inst_47000);

(statearr_47007_47029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (1))){
var inst_46982 = null;
var state_47005__$1 = (function (){var statearr_47008 = state_47005;
(statearr_47008[(7)] = inst_46982);

return statearr_47008;
})();
var statearr_47009_47030 = state_47005__$1;
(statearr_47009_47030[(2)] = null);

(statearr_47009_47030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (4))){
var inst_46985 = (state_47005[(8)]);
var inst_46985__$1 = (state_47005[(2)]);
var inst_46986 = (inst_46985__$1 == null);
var inst_46987 = cljs.core.not.call(null,inst_46986);
var state_47005__$1 = (function (){var statearr_47010 = state_47005;
(statearr_47010[(8)] = inst_46985__$1);

return statearr_47010;
})();
if(inst_46987){
var statearr_47011_47031 = state_47005__$1;
(statearr_47011_47031[(1)] = (5));

} else {
var statearr_47012_47032 = state_47005__$1;
(statearr_47012_47032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (6))){
var state_47005__$1 = state_47005;
var statearr_47013_47033 = state_47005__$1;
(statearr_47013_47033[(2)] = null);

(statearr_47013_47033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (3))){
var inst_47002 = (state_47005[(2)]);
var inst_47003 = cljs.core.async.close_BANG_.call(null,out);
var state_47005__$1 = (function (){var statearr_47014 = state_47005;
(statearr_47014[(9)] = inst_47002);

return statearr_47014;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47005__$1,inst_47003);
} else {
if((state_val_47006 === (2))){
var state_47005__$1 = state_47005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47005__$1,(4),ch);
} else {
if((state_val_47006 === (11))){
var inst_46985 = (state_47005[(8)]);
var inst_46994 = (state_47005[(2)]);
var inst_46982 = inst_46985;
var state_47005__$1 = (function (){var statearr_47015 = state_47005;
(statearr_47015[(10)] = inst_46994);

(statearr_47015[(7)] = inst_46982);

return statearr_47015;
})();
var statearr_47016_47034 = state_47005__$1;
(statearr_47016_47034[(2)] = null);

(statearr_47016_47034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (9))){
var inst_46985 = (state_47005[(8)]);
var state_47005__$1 = state_47005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47005__$1,(11),out,inst_46985);
} else {
if((state_val_47006 === (5))){
var inst_46982 = (state_47005[(7)]);
var inst_46985 = (state_47005[(8)]);
var inst_46989 = cljs.core._EQ_.call(null,inst_46985,inst_46982);
var state_47005__$1 = state_47005;
if(inst_46989){
var statearr_47018_47035 = state_47005__$1;
(statearr_47018_47035[(1)] = (8));

} else {
var statearr_47019_47036 = state_47005__$1;
(statearr_47019_47036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (10))){
var inst_46997 = (state_47005[(2)]);
var state_47005__$1 = state_47005;
var statearr_47020_47037 = state_47005__$1;
(statearr_47020_47037[(2)] = inst_46997);

(statearr_47020_47037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47006 === (8))){
var inst_46982 = (state_47005[(7)]);
var tmp47017 = inst_46982;
var inst_46982__$1 = tmp47017;
var state_47005__$1 = (function (){var statearr_47021 = state_47005;
(statearr_47021[(7)] = inst_46982__$1);

return statearr_47021;
})();
var statearr_47022_47038 = state_47005__$1;
(statearr_47022_47038[(2)] = null);

(statearr_47022_47038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__45292__auto___47028,out))
;
return ((function (switch__45202__auto__,c__45292__auto___47028,out){
return (function() {
var cljs$core$async$state_machine__45203__auto__ = null;
var cljs$core$async$state_machine__45203__auto____0 = (function (){
var statearr_47023 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47023[(0)] = cljs$core$async$state_machine__45203__auto__);

(statearr_47023[(1)] = (1));

return statearr_47023;
});
var cljs$core$async$state_machine__45203__auto____1 = (function (state_47005){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_47005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e47024){if((e47024 instanceof Object)){
var ex__45206__auto__ = e47024;
var statearr_47025_47039 = state_47005;
(statearr_47025_47039[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47040 = state_47005;
state_47005 = G__47040;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs$core$async$state_machine__45203__auto__ = function(state_47005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45203__auto____1.call(this,state_47005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45203__auto____0;
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45203__auto____1;
return cljs$core$async$state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto___47028,out))
})();
var state__45294__auto__ = (function (){var statearr_47026 = f__45293__auto__.call(null);
(statearr_47026[(6)] = c__45292__auto___47028);

return statearr_47026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto___47028,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47042 = arguments.length;
switch (G__47042) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45292__auto___47108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto___47108,out){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto___47108,out){
return (function (state_47080){
var state_val_47081 = (state_47080[(1)]);
if((state_val_47081 === (7))){
var inst_47076 = (state_47080[(2)]);
var state_47080__$1 = state_47080;
var statearr_47082_47109 = state_47080__$1;
(statearr_47082_47109[(2)] = inst_47076);

(statearr_47082_47109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47081 === (1))){
var inst_47043 = (new Array(n));
var inst_47044 = inst_47043;
var inst_47045 = (0);
var state_47080__$1 = (function (){var statearr_47083 = state_47080;
(statearr_47083[(7)] = inst_47044);

(statearr_47083[(8)] = inst_47045);

return statearr_47083;
})();
var statearr_47084_47110 = state_47080__$1;
(statearr_47084_47110[(2)] = null);

(statearr_47084_47110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47081 === (4))){
var inst_47048 = (state_47080[(9)]);
var inst_47048__$1 = (state_47080[(2)]);
var inst_47049 = (inst_47048__$1 == null);
var inst_47050 = cljs.core.not.call(null,inst_47049);
var state_47080__$1 = (function (){var statearr_47085 = state_47080;
(statearr_47085[(9)] = inst_47048__$1);

return statearr_47085;
})();
if(inst_47050){
var statearr_47086_47111 = state_47080__$1;
(statearr_47086_47111[(1)] = (5));

} else {
var statearr_47087_47112 = state_47080__$1;
(statearr_47087_47112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47081 === (15))){
var inst_47070 = (state_47080[(2)]);
var state_47080__$1 = state_47080;
var statearr_47088_47113 = state_47080__$1;
(statearr_47088_47113[(2)] = inst_47070);

(statearr_47088_47113[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47081 === (13))){
var state_47080__$1 = state_47080;
var statearr_47089_47114 = state_47080__$1;
(statearr_47089_47114[(2)] = null);

(statearr_47089_47114[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47081 === (6))){
var inst_47045 = (state_47080[(8)]);
var inst_47066 = (inst_47045 > (0));
var state_47080__$1 = state_47080;
if(cljs.core.truth_(inst_47066)){
var statearr_47090_47115 = state_47080__$1;
(statearr_47090_47115[(1)] = (12));

} else {
var statearr_47091_47116 = state_47080__$1;
(statearr_47091_47116[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47081 === (3))){
var inst_47078 = (state_47080[(2)]);
var state_47080__$1 = state_47080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47080__$1,inst_47078);
} else {
if((state_val_47081 === (12))){
var inst_47044 = (state_47080[(7)]);
var inst_47068 = cljs.core.vec.call(null,inst_47044);
var state_47080__$1 = state_47080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47080__$1,(15),out,inst_47068);
} else {
if((state_val_47081 === (2))){
var state_47080__$1 = state_47080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47080__$1,(4),ch);
} else {
if((state_val_47081 === (11))){
var inst_47060 = (state_47080[(2)]);
var inst_47061 = (new Array(n));
var inst_47044 = inst_47061;
var inst_47045 = (0);
var state_47080__$1 = (function (){var statearr_47092 = state_47080;
(statearr_47092[(7)] = inst_47044);

(statearr_47092[(10)] = inst_47060);

(statearr_47092[(8)] = inst_47045);

return statearr_47092;
})();
var statearr_47093_47117 = state_47080__$1;
(statearr_47093_47117[(2)] = null);

(statearr_47093_47117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47081 === (9))){
var inst_47044 = (state_47080[(7)]);
var inst_47058 = cljs.core.vec.call(null,inst_47044);
var state_47080__$1 = state_47080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47080__$1,(11),out,inst_47058);
} else {
if((state_val_47081 === (5))){
var inst_47044 = (state_47080[(7)]);
var inst_47048 = (state_47080[(9)]);
var inst_47045 = (state_47080[(8)]);
var inst_47053 = (state_47080[(11)]);
var inst_47052 = (inst_47044[inst_47045] = inst_47048);
var inst_47053__$1 = (inst_47045 + (1));
var inst_47054 = (inst_47053__$1 < n);
var state_47080__$1 = (function (){var statearr_47094 = state_47080;
(statearr_47094[(12)] = inst_47052);

(statearr_47094[(11)] = inst_47053__$1);

return statearr_47094;
})();
if(cljs.core.truth_(inst_47054)){
var statearr_47095_47118 = state_47080__$1;
(statearr_47095_47118[(1)] = (8));

} else {
var statearr_47096_47119 = state_47080__$1;
(statearr_47096_47119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47081 === (14))){
var inst_47073 = (state_47080[(2)]);
var inst_47074 = cljs.core.async.close_BANG_.call(null,out);
var state_47080__$1 = (function (){var statearr_47098 = state_47080;
(statearr_47098[(13)] = inst_47073);

return statearr_47098;
})();
var statearr_47099_47120 = state_47080__$1;
(statearr_47099_47120[(2)] = inst_47074);

(statearr_47099_47120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47081 === (10))){
var inst_47064 = (state_47080[(2)]);
var state_47080__$1 = state_47080;
var statearr_47100_47121 = state_47080__$1;
(statearr_47100_47121[(2)] = inst_47064);

(statearr_47100_47121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47081 === (8))){
var inst_47044 = (state_47080[(7)]);
var inst_47053 = (state_47080[(11)]);
var tmp47097 = inst_47044;
var inst_47044__$1 = tmp47097;
var inst_47045 = inst_47053;
var state_47080__$1 = (function (){var statearr_47101 = state_47080;
(statearr_47101[(7)] = inst_47044__$1);

(statearr_47101[(8)] = inst_47045);

return statearr_47101;
})();
var statearr_47102_47122 = state_47080__$1;
(statearr_47102_47122[(2)] = null);

(statearr_47102_47122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45292__auto___47108,out))
;
return ((function (switch__45202__auto__,c__45292__auto___47108,out){
return (function() {
var cljs$core$async$state_machine__45203__auto__ = null;
var cljs$core$async$state_machine__45203__auto____0 = (function (){
var statearr_47103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47103[(0)] = cljs$core$async$state_machine__45203__auto__);

(statearr_47103[(1)] = (1));

return statearr_47103;
});
var cljs$core$async$state_machine__45203__auto____1 = (function (state_47080){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_47080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e47104){if((e47104 instanceof Object)){
var ex__45206__auto__ = e47104;
var statearr_47105_47123 = state_47080;
(statearr_47105_47123[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47124 = state_47080;
state_47080 = G__47124;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs$core$async$state_machine__45203__auto__ = function(state_47080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45203__auto____1.call(this,state_47080);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45203__auto____0;
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45203__auto____1;
return cljs$core$async$state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto___47108,out))
})();
var state__45294__auto__ = (function (){var statearr_47106 = f__45293__auto__.call(null);
(statearr_47106[(6)] = c__45292__auto___47108);

return statearr_47106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto___47108,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47126 = arguments.length;
switch (G__47126) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__45292__auto___47196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto___47196,out){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto___47196,out){
return (function (state_47168){
var state_val_47169 = (state_47168[(1)]);
if((state_val_47169 === (7))){
var inst_47164 = (state_47168[(2)]);
var state_47168__$1 = state_47168;
var statearr_47170_47197 = state_47168__$1;
(statearr_47170_47197[(2)] = inst_47164);

(statearr_47170_47197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47169 === (1))){
var inst_47127 = [];
var inst_47128 = inst_47127;
var inst_47129 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47168__$1 = (function (){var statearr_47171 = state_47168;
(statearr_47171[(7)] = inst_47129);

(statearr_47171[(8)] = inst_47128);

return statearr_47171;
})();
var statearr_47172_47198 = state_47168__$1;
(statearr_47172_47198[(2)] = null);

(statearr_47172_47198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47169 === (4))){
var inst_47132 = (state_47168[(9)]);
var inst_47132__$1 = (state_47168[(2)]);
var inst_47133 = (inst_47132__$1 == null);
var inst_47134 = cljs.core.not.call(null,inst_47133);
var state_47168__$1 = (function (){var statearr_47173 = state_47168;
(statearr_47173[(9)] = inst_47132__$1);

return statearr_47173;
})();
if(inst_47134){
var statearr_47174_47199 = state_47168__$1;
(statearr_47174_47199[(1)] = (5));

} else {
var statearr_47175_47200 = state_47168__$1;
(statearr_47175_47200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47169 === (15))){
var inst_47158 = (state_47168[(2)]);
var state_47168__$1 = state_47168;
var statearr_47176_47201 = state_47168__$1;
(statearr_47176_47201[(2)] = inst_47158);

(statearr_47176_47201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47169 === (13))){
var state_47168__$1 = state_47168;
var statearr_47177_47202 = state_47168__$1;
(statearr_47177_47202[(2)] = null);

(statearr_47177_47202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47169 === (6))){
var inst_47128 = (state_47168[(8)]);
var inst_47153 = inst_47128.length;
var inst_47154 = (inst_47153 > (0));
var state_47168__$1 = state_47168;
if(cljs.core.truth_(inst_47154)){
var statearr_47178_47203 = state_47168__$1;
(statearr_47178_47203[(1)] = (12));

} else {
var statearr_47179_47204 = state_47168__$1;
(statearr_47179_47204[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47169 === (3))){
var inst_47166 = (state_47168[(2)]);
var state_47168__$1 = state_47168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47168__$1,inst_47166);
} else {
if((state_val_47169 === (12))){
var inst_47128 = (state_47168[(8)]);
var inst_47156 = cljs.core.vec.call(null,inst_47128);
var state_47168__$1 = state_47168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47168__$1,(15),out,inst_47156);
} else {
if((state_val_47169 === (2))){
var state_47168__$1 = state_47168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47168__$1,(4),ch);
} else {
if((state_val_47169 === (11))){
var inst_47132 = (state_47168[(9)]);
var inst_47136 = (state_47168[(10)]);
var inst_47146 = (state_47168[(2)]);
var inst_47147 = [];
var inst_47148 = inst_47147.push(inst_47132);
var inst_47128 = inst_47147;
var inst_47129 = inst_47136;
var state_47168__$1 = (function (){var statearr_47180 = state_47168;
(statearr_47180[(7)] = inst_47129);

(statearr_47180[(11)] = inst_47146);

(statearr_47180[(8)] = inst_47128);

(statearr_47180[(12)] = inst_47148);

return statearr_47180;
})();
var statearr_47181_47205 = state_47168__$1;
(statearr_47181_47205[(2)] = null);

(statearr_47181_47205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47169 === (9))){
var inst_47128 = (state_47168[(8)]);
var inst_47144 = cljs.core.vec.call(null,inst_47128);
var state_47168__$1 = state_47168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47168__$1,(11),out,inst_47144);
} else {
if((state_val_47169 === (5))){
var inst_47129 = (state_47168[(7)]);
var inst_47132 = (state_47168[(9)]);
var inst_47136 = (state_47168[(10)]);
var inst_47136__$1 = f.call(null,inst_47132);
var inst_47137 = cljs.core._EQ_.call(null,inst_47136__$1,inst_47129);
var inst_47138 = cljs.core.keyword_identical_QMARK_.call(null,inst_47129,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47139 = (inst_47137) || (inst_47138);
var state_47168__$1 = (function (){var statearr_47182 = state_47168;
(statearr_47182[(10)] = inst_47136__$1);

return statearr_47182;
})();
if(cljs.core.truth_(inst_47139)){
var statearr_47183_47206 = state_47168__$1;
(statearr_47183_47206[(1)] = (8));

} else {
var statearr_47184_47207 = state_47168__$1;
(statearr_47184_47207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47169 === (14))){
var inst_47161 = (state_47168[(2)]);
var inst_47162 = cljs.core.async.close_BANG_.call(null,out);
var state_47168__$1 = (function (){var statearr_47186 = state_47168;
(statearr_47186[(13)] = inst_47161);

return statearr_47186;
})();
var statearr_47187_47208 = state_47168__$1;
(statearr_47187_47208[(2)] = inst_47162);

(statearr_47187_47208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47169 === (10))){
var inst_47151 = (state_47168[(2)]);
var state_47168__$1 = state_47168;
var statearr_47188_47209 = state_47168__$1;
(statearr_47188_47209[(2)] = inst_47151);

(statearr_47188_47209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47169 === (8))){
var inst_47132 = (state_47168[(9)]);
var inst_47128 = (state_47168[(8)]);
var inst_47136 = (state_47168[(10)]);
var inst_47141 = inst_47128.push(inst_47132);
var tmp47185 = inst_47128;
var inst_47128__$1 = tmp47185;
var inst_47129 = inst_47136;
var state_47168__$1 = (function (){var statearr_47189 = state_47168;
(statearr_47189[(7)] = inst_47129);

(statearr_47189[(14)] = inst_47141);

(statearr_47189[(8)] = inst_47128__$1);

return statearr_47189;
})();
var statearr_47190_47210 = state_47168__$1;
(statearr_47190_47210[(2)] = null);

(statearr_47190_47210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__45292__auto___47196,out))
;
return ((function (switch__45202__auto__,c__45292__auto___47196,out){
return (function() {
var cljs$core$async$state_machine__45203__auto__ = null;
var cljs$core$async$state_machine__45203__auto____0 = (function (){
var statearr_47191 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47191[(0)] = cljs$core$async$state_machine__45203__auto__);

(statearr_47191[(1)] = (1));

return statearr_47191;
});
var cljs$core$async$state_machine__45203__auto____1 = (function (state_47168){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_47168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e47192){if((e47192 instanceof Object)){
var ex__45206__auto__ = e47192;
var statearr_47193_47211 = state_47168;
(statearr_47193_47211[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47212 = state_47168;
state_47168 = G__47212;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs$core$async$state_machine__45203__auto__ = function(state_47168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45203__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45203__auto____1.call(this,state_47168);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45203__auto____0;
cljs$core$async$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45203__auto____1;
return cljs$core$async$state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto___47196,out))
})();
var state__45294__auto__ = (function (){var statearr_47194 = f__45293__auto__.call(null);
(statearr_47194[(6)] = c__45292__auto___47196);

return statearr_47194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto___47196,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1516433043358
