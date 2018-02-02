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
var G__41499 = arguments.length;
switch (G__41499) {
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
if(typeof cljs.core.async.t_cljs$core$async41500 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41500 = (function (f,blockable,meta41501){
this.f = f;
this.blockable = blockable;
this.meta41501 = meta41501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41502,meta41501__$1){
var self__ = this;
var _41502__$1 = this;
return (new cljs.core.async.t_cljs$core$async41500(self__.f,self__.blockable,meta41501__$1));
});

cljs.core.async.t_cljs$core$async41500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41502){
var self__ = this;
var _41502__$1 = this;
return self__.meta41501;
});

cljs.core.async.t_cljs$core$async41500.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41500.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41500.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async41500.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async41500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta41501","meta41501",-573605374,null)], null);
});

cljs.core.async.t_cljs$core$async41500.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41500";

cljs.core.async.t_cljs$core$async41500.cljs$lang$ctorPrWriter = (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async/t_cljs$core$async41500");
});

cljs.core.async.__GT_t_cljs$core$async41500 = (function cljs$core$async$__GT_t_cljs$core$async41500(f__$1,blockable__$1,meta41501){
return (new cljs.core.async.t_cljs$core$async41500(f__$1,blockable__$1,meta41501));
});

}

return (new cljs.core.async.t_cljs$core$async41500(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__41506 = arguments.length;
switch (G__41506) {
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
var G__41509 = arguments.length;
switch (G__41509) {
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
var G__41512 = arguments.length;
switch (G__41512) {
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
var val_41514 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_41514);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_41514,ret){
return (function (){
return fn1.call(null,val_41514);
});})(val_41514,ret))
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
var G__41516 = arguments.length;
switch (G__41516) {
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
var n__9971__auto___41518 = n;
var x_41519 = (0);
while(true){
if((x_41519 < n__9971__auto___41518)){
(a[x_41519] = (0));

var G__41520 = (x_41519 + (1));
x_41519 = G__41520;
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

var G__41521 = (i + (1));
i = G__41521;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async41522 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41522 = (function (flag,meta41523){
this.flag = flag;
this.meta41523 = meta41523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_41524,meta41523__$1){
var self__ = this;
var _41524__$1 = this;
return (new cljs.core.async.t_cljs$core$async41522(self__.flag,meta41523__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async41522.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_41524){
var self__ = this;
var _41524__$1 = this;
return self__.meta41523;
});})(flag))
;

cljs.core.async.t_cljs$core$async41522.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41522.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async41522.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41522.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41522.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta41523","meta41523",1228348357,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async41522.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41522";

cljs.core.async.t_cljs$core$async41522.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async/t_cljs$core$async41522");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async41522 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async41522(flag__$1,meta41523){
return (new cljs.core.async.t_cljs$core$async41522(flag__$1,meta41523));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async41522(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async41525 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41525 = (function (flag,cb,meta41526){
this.flag = flag;
this.cb = cb;
this.meta41526 = meta41526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41527,meta41526__$1){
var self__ = this;
var _41527__$1 = this;
return (new cljs.core.async.t_cljs$core$async41525(self__.flag,self__.cb,meta41526__$1));
});

cljs.core.async.t_cljs$core$async41525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41527){
var self__ = this;
var _41527__$1 = this;
return self__.meta41526;
});

cljs.core.async.t_cljs$core$async41525.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41525.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async41525.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41525.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async41525.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta41526","meta41526",-595691013,null)], null);
});

cljs.core.async.t_cljs$core$async41525.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41525.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41525";

cljs.core.async.t_cljs$core$async41525.cljs$lang$ctorPrWriter = (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async/t_cljs$core$async41525");
});

cljs.core.async.__GT_t_cljs$core$async41525 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async41525(flag__$1,cb__$1,meta41526){
return (new cljs.core.async.t_cljs$core$async41525(flag__$1,cb__$1,meta41526));
});

}

return (new cljs.core.async.t_cljs$core$async41525(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__41528_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41528_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41529_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41529_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8926__auto__ = wport;
if(cljs.core.truth_(or__8926__auto__)){
return or__8926__auto__;
} else {
return port;
}
})()], null));
} else {
var G__41530 = (i + (1));
i = G__41530;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8926__auto__ = ret;
if(cljs.core.truth_(or__8926__auto__)){
return or__8926__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__8914__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__8914__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__8914__auto__;
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
var args__10212__auto__ = [];
var len__10205__auto___41536 = arguments.length;
var i__10206__auto___41537 = (0);
while(true){
if((i__10206__auto___41537 < len__10205__auto___41536)){
args__10212__auto__.push((arguments[i__10206__auto___41537]));

var G__41538 = (i__10206__auto___41537 + (1));
i__10206__auto___41537 = G__41538;
continue;
} else {
}
break;
}

var argseq__10213__auto__ = ((((1) < args__10212__auto__.length))?(new cljs.core.IndexedSeq(args__10212__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10213__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__41533){
var map__41534 = p__41533;
var map__41534__$1 = ((((!((map__41534 == null)))?((((map__41534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41534):map__41534);
var opts = map__41534__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq41531){
var G__41532 = cljs.core.first.call(null,seq41531);
var seq41531__$1 = cljs.core.next.call(null,seq41531);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41532,seq41531__$1);
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
var G__41540 = arguments.length;
switch (G__41540) {
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
var c__17681__auto___41586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___41586){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___41586){
return (function (state_41564){
var state_val_41565 = (state_41564[(1)]);
if((state_val_41565 === (7))){
var inst_41560 = (state_41564[(2)]);
var state_41564__$1 = state_41564;
var statearr_41566_41587 = state_41564__$1;
(statearr_41566_41587[(2)] = inst_41560);

(statearr_41566_41587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41565 === (1))){
var state_41564__$1 = state_41564;
var statearr_41567_41588 = state_41564__$1;
(statearr_41567_41588[(2)] = null);

(statearr_41567_41588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41565 === (4))){
var inst_41543 = (state_41564[(7)]);
var inst_41543__$1 = (state_41564[(2)]);
var inst_41544 = (inst_41543__$1 == null);
var state_41564__$1 = (function (){var statearr_41568 = state_41564;
(statearr_41568[(7)] = inst_41543__$1);

return statearr_41568;
})();
if(cljs.core.truth_(inst_41544)){
var statearr_41569_41589 = state_41564__$1;
(statearr_41569_41589[(1)] = (5));

} else {
var statearr_41570_41590 = state_41564__$1;
(statearr_41570_41590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41565 === (13))){
var state_41564__$1 = state_41564;
var statearr_41571_41591 = state_41564__$1;
(statearr_41571_41591[(2)] = null);

(statearr_41571_41591[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41565 === (6))){
var inst_41543 = (state_41564[(7)]);
var state_41564__$1 = state_41564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41564__$1,(11),to,inst_41543);
} else {
if((state_val_41565 === (3))){
var inst_41562 = (state_41564[(2)]);
var state_41564__$1 = state_41564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41564__$1,inst_41562);
} else {
if((state_val_41565 === (12))){
var state_41564__$1 = state_41564;
var statearr_41572_41592 = state_41564__$1;
(statearr_41572_41592[(2)] = null);

(statearr_41572_41592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41565 === (2))){
var state_41564__$1 = state_41564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41564__$1,(4),from);
} else {
if((state_val_41565 === (11))){
var inst_41553 = (state_41564[(2)]);
var state_41564__$1 = state_41564;
if(cljs.core.truth_(inst_41553)){
var statearr_41573_41593 = state_41564__$1;
(statearr_41573_41593[(1)] = (12));

} else {
var statearr_41574_41594 = state_41564__$1;
(statearr_41574_41594[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41565 === (9))){
var state_41564__$1 = state_41564;
var statearr_41575_41595 = state_41564__$1;
(statearr_41575_41595[(2)] = null);

(statearr_41575_41595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41565 === (5))){
var state_41564__$1 = state_41564;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41576_41596 = state_41564__$1;
(statearr_41576_41596[(1)] = (8));

} else {
var statearr_41577_41597 = state_41564__$1;
(statearr_41577_41597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41565 === (14))){
var inst_41558 = (state_41564[(2)]);
var state_41564__$1 = state_41564;
var statearr_41578_41598 = state_41564__$1;
(statearr_41578_41598[(2)] = inst_41558);

(statearr_41578_41598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41565 === (10))){
var inst_41550 = (state_41564[(2)]);
var state_41564__$1 = state_41564;
var statearr_41579_41599 = state_41564__$1;
(statearr_41579_41599[(2)] = inst_41550);

(statearr_41579_41599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41565 === (8))){
var inst_41547 = cljs.core.async.close_BANG_.call(null,to);
var state_41564__$1 = state_41564;
var statearr_41580_41600 = state_41564__$1;
(statearr_41580_41600[(2)] = inst_41547);

(statearr_41580_41600[(1)] = (10));


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
});})(c__17681__auto___41586))
;
return ((function (switch__17591__auto__,c__17681__auto___41586){
return (function() {
var cljs$core$async$state_machine__17592__auto__ = null;
var cljs$core$async$state_machine__17592__auto____0 = (function (){
var statearr_41581 = [null,null,null,null,null,null,null,null];
(statearr_41581[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_41581[(1)] = (1));

return statearr_41581;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_41564){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_41564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e41582){if((e41582 instanceof Object)){
var ex__17595__auto__ = e41582;
var statearr_41583_41601 = state_41564;
(statearr_41583_41601[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41602 = state_41564;
state_41564 = G__41602;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_41564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_41564);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___41586))
})();
var state__17683__auto__ = (function (){var statearr_41584 = f__17682__auto__.call(null);
(statearr_41584[(6)] = c__17681__auto___41586);

return statearr_41584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___41586))
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
return (function (p__41603){
var vec__41604 = p__41603;
var v = cljs.core.nth.call(null,vec__41604,(0),null);
var p = cljs.core.nth.call(null,vec__41604,(1),null);
var job = vec__41604;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17681__auto___41775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___41775,res,vec__41604,v,p,job,jobs,results){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___41775,res,vec__41604,v,p,job,jobs,results){
return (function (state_41611){
var state_val_41612 = (state_41611[(1)]);
if((state_val_41612 === (1))){
var state_41611__$1 = state_41611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41611__$1,(2),res,v);
} else {
if((state_val_41612 === (2))){
var inst_41608 = (state_41611[(2)]);
var inst_41609 = cljs.core.async.close_BANG_.call(null,res);
var state_41611__$1 = (function (){var statearr_41613 = state_41611;
(statearr_41613[(7)] = inst_41608);

return statearr_41613;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41611__$1,inst_41609);
} else {
return null;
}
}
});})(c__17681__auto___41775,res,vec__41604,v,p,job,jobs,results))
;
return ((function (switch__17591__auto__,c__17681__auto___41775,res,vec__41604,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0 = (function (){
var statearr_41614 = [null,null,null,null,null,null,null,null];
(statearr_41614[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__);

(statearr_41614[(1)] = (1));

return statearr_41614;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1 = (function (state_41611){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_41611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e41615){if((e41615 instanceof Object)){
var ex__17595__auto__ = e41615;
var statearr_41616_41776 = state_41611;
(statearr_41616_41776[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41777 = state_41611;
state_41611 = G__41777;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__ = function(state_41611){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1.call(this,state_41611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___41775,res,vec__41604,v,p,job,jobs,results))
})();
var state__17683__auto__ = (function (){var statearr_41617 = f__17682__auto__.call(null);
(statearr_41617[(6)] = c__17681__auto___41775);

return statearr_41617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___41775,res,vec__41604,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41618){
var vec__41619 = p__41618;
var v = cljs.core.nth.call(null,vec__41619,(0),null);
var p = cljs.core.nth.call(null,vec__41619,(1),null);
var job = vec__41619;
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
var n__9971__auto___41778 = n;
var __41779 = (0);
while(true){
if((__41779 < n__9971__auto___41778)){
var G__41622_41780 = type;
var G__41622_41781__$1 = (((G__41622_41780 instanceof cljs.core.Keyword))?G__41622_41780.fqn:null);
switch (G__41622_41781__$1) {
case "compute":
var c__17681__auto___41783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41779,c__17681__auto___41783,G__41622_41780,G__41622_41781__$1,n__9971__auto___41778,jobs,results,process,async){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (__41779,c__17681__auto___41783,G__41622_41780,G__41622_41781__$1,n__9971__auto___41778,jobs,results,process,async){
return (function (state_41635){
var state_val_41636 = (state_41635[(1)]);
if((state_val_41636 === (1))){
var state_41635__$1 = state_41635;
var statearr_41637_41784 = state_41635__$1;
(statearr_41637_41784[(2)] = null);

(statearr_41637_41784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41636 === (2))){
var state_41635__$1 = state_41635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41635__$1,(4),jobs);
} else {
if((state_val_41636 === (3))){
var inst_41633 = (state_41635[(2)]);
var state_41635__$1 = state_41635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41635__$1,inst_41633);
} else {
if((state_val_41636 === (4))){
var inst_41625 = (state_41635[(2)]);
var inst_41626 = process.call(null,inst_41625);
var state_41635__$1 = state_41635;
if(cljs.core.truth_(inst_41626)){
var statearr_41638_41785 = state_41635__$1;
(statearr_41638_41785[(1)] = (5));

} else {
var statearr_41639_41786 = state_41635__$1;
(statearr_41639_41786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41636 === (5))){
var state_41635__$1 = state_41635;
var statearr_41640_41787 = state_41635__$1;
(statearr_41640_41787[(2)] = null);

(statearr_41640_41787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41636 === (6))){
var state_41635__$1 = state_41635;
var statearr_41641_41788 = state_41635__$1;
(statearr_41641_41788[(2)] = null);

(statearr_41641_41788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41636 === (7))){
var inst_41631 = (state_41635[(2)]);
var state_41635__$1 = state_41635;
var statearr_41642_41789 = state_41635__$1;
(statearr_41642_41789[(2)] = inst_41631);

(statearr_41642_41789[(1)] = (3));


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
});})(__41779,c__17681__auto___41783,G__41622_41780,G__41622_41781__$1,n__9971__auto___41778,jobs,results,process,async))
;
return ((function (__41779,switch__17591__auto__,c__17681__auto___41783,G__41622_41780,G__41622_41781__$1,n__9971__auto___41778,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0 = (function (){
var statearr_41643 = [null,null,null,null,null,null,null];
(statearr_41643[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__);

(statearr_41643[(1)] = (1));

return statearr_41643;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1 = (function (state_41635){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_41635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e41644){if((e41644 instanceof Object)){
var ex__17595__auto__ = e41644;
var statearr_41645_41790 = state_41635;
(statearr_41645_41790[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41791 = state_41635;
state_41635 = G__41791;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__ = function(state_41635){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1.call(this,state_41635);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__;
})()
;})(__41779,switch__17591__auto__,c__17681__auto___41783,G__41622_41780,G__41622_41781__$1,n__9971__auto___41778,jobs,results,process,async))
})();
var state__17683__auto__ = (function (){var statearr_41646 = f__17682__auto__.call(null);
(statearr_41646[(6)] = c__17681__auto___41783);

return statearr_41646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(__41779,c__17681__auto___41783,G__41622_41780,G__41622_41781__$1,n__9971__auto___41778,jobs,results,process,async))
);


break;
case "async":
var c__17681__auto___41792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41779,c__17681__auto___41792,G__41622_41780,G__41622_41781__$1,n__9971__auto___41778,jobs,results,process,async){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (__41779,c__17681__auto___41792,G__41622_41780,G__41622_41781__$1,n__9971__auto___41778,jobs,results,process,async){
return (function (state_41659){
var state_val_41660 = (state_41659[(1)]);
if((state_val_41660 === (1))){
var state_41659__$1 = state_41659;
var statearr_41661_41793 = state_41659__$1;
(statearr_41661_41793[(2)] = null);

(statearr_41661_41793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41660 === (2))){
var state_41659__$1 = state_41659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41659__$1,(4),jobs);
} else {
if((state_val_41660 === (3))){
var inst_41657 = (state_41659[(2)]);
var state_41659__$1 = state_41659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41659__$1,inst_41657);
} else {
if((state_val_41660 === (4))){
var inst_41649 = (state_41659[(2)]);
var inst_41650 = async.call(null,inst_41649);
var state_41659__$1 = state_41659;
if(cljs.core.truth_(inst_41650)){
var statearr_41662_41794 = state_41659__$1;
(statearr_41662_41794[(1)] = (5));

} else {
var statearr_41663_41795 = state_41659__$1;
(statearr_41663_41795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41660 === (5))){
var state_41659__$1 = state_41659;
var statearr_41664_41796 = state_41659__$1;
(statearr_41664_41796[(2)] = null);

(statearr_41664_41796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41660 === (6))){
var state_41659__$1 = state_41659;
var statearr_41665_41797 = state_41659__$1;
(statearr_41665_41797[(2)] = null);

(statearr_41665_41797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41660 === (7))){
var inst_41655 = (state_41659[(2)]);
var state_41659__$1 = state_41659;
var statearr_41666_41798 = state_41659__$1;
(statearr_41666_41798[(2)] = inst_41655);

(statearr_41666_41798[(1)] = (3));


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
});})(__41779,c__17681__auto___41792,G__41622_41780,G__41622_41781__$1,n__9971__auto___41778,jobs,results,process,async))
;
return ((function (__41779,switch__17591__auto__,c__17681__auto___41792,G__41622_41780,G__41622_41781__$1,n__9971__auto___41778,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0 = (function (){
var statearr_41667 = [null,null,null,null,null,null,null];
(statearr_41667[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__);

(statearr_41667[(1)] = (1));

return statearr_41667;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1 = (function (state_41659){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_41659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e41668){if((e41668 instanceof Object)){
var ex__17595__auto__ = e41668;
var statearr_41669_41799 = state_41659;
(statearr_41669_41799[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41800 = state_41659;
state_41659 = G__41800;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__ = function(state_41659){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1.call(this,state_41659);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__;
})()
;})(__41779,switch__17591__auto__,c__17681__auto___41792,G__41622_41780,G__41622_41781__$1,n__9971__auto___41778,jobs,results,process,async))
})();
var state__17683__auto__ = (function (){var statearr_41670 = f__17682__auto__.call(null);
(statearr_41670[(6)] = c__17681__auto___41792);

return statearr_41670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(__41779,c__17681__auto___41792,G__41622_41780,G__41622_41781__$1,n__9971__auto___41778,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41622_41781__$1)].join('')));

}

var G__41801 = (__41779 + (1));
__41779 = G__41801;
continue;
} else {
}
break;
}

var c__17681__auto___41802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___41802,jobs,results,process,async){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___41802,jobs,results,process,async){
return (function (state_41692){
var state_val_41693 = (state_41692[(1)]);
if((state_val_41693 === (1))){
var state_41692__$1 = state_41692;
var statearr_41694_41803 = state_41692__$1;
(statearr_41694_41803[(2)] = null);

(statearr_41694_41803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41693 === (2))){
var state_41692__$1 = state_41692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41692__$1,(4),from);
} else {
if((state_val_41693 === (3))){
var inst_41690 = (state_41692[(2)]);
var state_41692__$1 = state_41692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41692__$1,inst_41690);
} else {
if((state_val_41693 === (4))){
var inst_41673 = (state_41692[(7)]);
var inst_41673__$1 = (state_41692[(2)]);
var inst_41674 = (inst_41673__$1 == null);
var state_41692__$1 = (function (){var statearr_41695 = state_41692;
(statearr_41695[(7)] = inst_41673__$1);

return statearr_41695;
})();
if(cljs.core.truth_(inst_41674)){
var statearr_41696_41804 = state_41692__$1;
(statearr_41696_41804[(1)] = (5));

} else {
var statearr_41697_41805 = state_41692__$1;
(statearr_41697_41805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41693 === (5))){
var inst_41676 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41692__$1 = state_41692;
var statearr_41698_41806 = state_41692__$1;
(statearr_41698_41806[(2)] = inst_41676);

(statearr_41698_41806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41693 === (6))){
var inst_41673 = (state_41692[(7)]);
var inst_41678 = (state_41692[(8)]);
var inst_41678__$1 = cljs.core.async.chan.call(null,(1));
var inst_41679 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41680 = [inst_41673,inst_41678__$1];
var inst_41681 = (new cljs.core.PersistentVector(null,2,(5),inst_41679,inst_41680,null));
var state_41692__$1 = (function (){var statearr_41699 = state_41692;
(statearr_41699[(8)] = inst_41678__$1);

return statearr_41699;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41692__$1,(8),jobs,inst_41681);
} else {
if((state_val_41693 === (7))){
var inst_41688 = (state_41692[(2)]);
var state_41692__$1 = state_41692;
var statearr_41700_41807 = state_41692__$1;
(statearr_41700_41807[(2)] = inst_41688);

(statearr_41700_41807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41693 === (8))){
var inst_41678 = (state_41692[(8)]);
var inst_41683 = (state_41692[(2)]);
var state_41692__$1 = (function (){var statearr_41701 = state_41692;
(statearr_41701[(9)] = inst_41683);

return statearr_41701;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41692__$1,(9),results,inst_41678);
} else {
if((state_val_41693 === (9))){
var inst_41685 = (state_41692[(2)]);
var state_41692__$1 = (function (){var statearr_41702 = state_41692;
(statearr_41702[(10)] = inst_41685);

return statearr_41702;
})();
var statearr_41703_41808 = state_41692__$1;
(statearr_41703_41808[(2)] = null);

(statearr_41703_41808[(1)] = (2));


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
});})(c__17681__auto___41802,jobs,results,process,async))
;
return ((function (switch__17591__auto__,c__17681__auto___41802,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0 = (function (){
var statearr_41704 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41704[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__);

(statearr_41704[(1)] = (1));

return statearr_41704;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1 = (function (state_41692){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_41692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e41705){if((e41705 instanceof Object)){
var ex__17595__auto__ = e41705;
var statearr_41706_41809 = state_41692;
(statearr_41706_41809[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41810 = state_41692;
state_41692 = G__41810;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__ = function(state_41692){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1.call(this,state_41692);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___41802,jobs,results,process,async))
})();
var state__17683__auto__ = (function (){var statearr_41707 = f__17682__auto__.call(null);
(statearr_41707[(6)] = c__17681__auto___41802);

return statearr_41707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___41802,jobs,results,process,async))
);


var c__17681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto__,jobs,results,process,async){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto__,jobs,results,process,async){
return (function (state_41745){
var state_val_41746 = (state_41745[(1)]);
if((state_val_41746 === (7))){
var inst_41741 = (state_41745[(2)]);
var state_41745__$1 = state_41745;
var statearr_41747_41811 = state_41745__$1;
(statearr_41747_41811[(2)] = inst_41741);

(statearr_41747_41811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41746 === (20))){
var state_41745__$1 = state_41745;
var statearr_41748_41812 = state_41745__$1;
(statearr_41748_41812[(2)] = null);

(statearr_41748_41812[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41746 === (1))){
var state_41745__$1 = state_41745;
var statearr_41749_41813 = state_41745__$1;
(statearr_41749_41813[(2)] = null);

(statearr_41749_41813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41746 === (4))){
var inst_41710 = (state_41745[(7)]);
var inst_41710__$1 = (state_41745[(2)]);
var inst_41711 = (inst_41710__$1 == null);
var state_41745__$1 = (function (){var statearr_41750 = state_41745;
(statearr_41750[(7)] = inst_41710__$1);

return statearr_41750;
})();
if(cljs.core.truth_(inst_41711)){
var statearr_41751_41814 = state_41745__$1;
(statearr_41751_41814[(1)] = (5));

} else {
var statearr_41752_41815 = state_41745__$1;
(statearr_41752_41815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41746 === (15))){
var inst_41723 = (state_41745[(8)]);
var state_41745__$1 = state_41745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41745__$1,(18),to,inst_41723);
} else {
if((state_val_41746 === (21))){
var inst_41736 = (state_41745[(2)]);
var state_41745__$1 = state_41745;
var statearr_41753_41816 = state_41745__$1;
(statearr_41753_41816[(2)] = inst_41736);

(statearr_41753_41816[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41746 === (13))){
var inst_41738 = (state_41745[(2)]);
var state_41745__$1 = (function (){var statearr_41754 = state_41745;
(statearr_41754[(9)] = inst_41738);

return statearr_41754;
})();
var statearr_41755_41817 = state_41745__$1;
(statearr_41755_41817[(2)] = null);

(statearr_41755_41817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41746 === (6))){
var inst_41710 = (state_41745[(7)]);
var state_41745__$1 = state_41745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41745__$1,(11),inst_41710);
} else {
if((state_val_41746 === (17))){
var inst_41731 = (state_41745[(2)]);
var state_41745__$1 = state_41745;
if(cljs.core.truth_(inst_41731)){
var statearr_41756_41818 = state_41745__$1;
(statearr_41756_41818[(1)] = (19));

} else {
var statearr_41757_41819 = state_41745__$1;
(statearr_41757_41819[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41746 === (3))){
var inst_41743 = (state_41745[(2)]);
var state_41745__$1 = state_41745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41745__$1,inst_41743);
} else {
if((state_val_41746 === (12))){
var inst_41720 = (state_41745[(10)]);
var state_41745__$1 = state_41745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41745__$1,(14),inst_41720);
} else {
if((state_val_41746 === (2))){
var state_41745__$1 = state_41745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41745__$1,(4),results);
} else {
if((state_val_41746 === (19))){
var state_41745__$1 = state_41745;
var statearr_41758_41820 = state_41745__$1;
(statearr_41758_41820[(2)] = null);

(statearr_41758_41820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41746 === (11))){
var inst_41720 = (state_41745[(2)]);
var state_41745__$1 = (function (){var statearr_41759 = state_41745;
(statearr_41759[(10)] = inst_41720);

return statearr_41759;
})();
var statearr_41760_41821 = state_41745__$1;
(statearr_41760_41821[(2)] = null);

(statearr_41760_41821[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41746 === (9))){
var state_41745__$1 = state_41745;
var statearr_41761_41822 = state_41745__$1;
(statearr_41761_41822[(2)] = null);

(statearr_41761_41822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41746 === (5))){
var state_41745__$1 = state_41745;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41762_41823 = state_41745__$1;
(statearr_41762_41823[(1)] = (8));

} else {
var statearr_41763_41824 = state_41745__$1;
(statearr_41763_41824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41746 === (14))){
var inst_41725 = (state_41745[(11)]);
var inst_41723 = (state_41745[(8)]);
var inst_41723__$1 = (state_41745[(2)]);
var inst_41724 = (inst_41723__$1 == null);
var inst_41725__$1 = cljs.core.not.call(null,inst_41724);
var state_41745__$1 = (function (){var statearr_41764 = state_41745;
(statearr_41764[(11)] = inst_41725__$1);

(statearr_41764[(8)] = inst_41723__$1);

return statearr_41764;
})();
if(inst_41725__$1){
var statearr_41765_41825 = state_41745__$1;
(statearr_41765_41825[(1)] = (15));

} else {
var statearr_41766_41826 = state_41745__$1;
(statearr_41766_41826[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41746 === (16))){
var inst_41725 = (state_41745[(11)]);
var state_41745__$1 = state_41745;
var statearr_41767_41827 = state_41745__$1;
(statearr_41767_41827[(2)] = inst_41725);

(statearr_41767_41827[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41746 === (10))){
var inst_41717 = (state_41745[(2)]);
var state_41745__$1 = state_41745;
var statearr_41768_41828 = state_41745__$1;
(statearr_41768_41828[(2)] = inst_41717);

(statearr_41768_41828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41746 === (18))){
var inst_41728 = (state_41745[(2)]);
var state_41745__$1 = state_41745;
var statearr_41769_41829 = state_41745__$1;
(statearr_41769_41829[(2)] = inst_41728);

(statearr_41769_41829[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41746 === (8))){
var inst_41714 = cljs.core.async.close_BANG_.call(null,to);
var state_41745__$1 = state_41745;
var statearr_41770_41830 = state_41745__$1;
(statearr_41770_41830[(2)] = inst_41714);

(statearr_41770_41830[(1)] = (10));


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
});})(c__17681__auto__,jobs,results,process,async))
;
return ((function (switch__17591__auto__,c__17681__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0 = (function (){
var statearr_41771 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41771[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__);

(statearr_41771[(1)] = (1));

return statearr_41771;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1 = (function (state_41745){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_41745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e41772){if((e41772 instanceof Object)){
var ex__17595__auto__ = e41772;
var statearr_41773_41831 = state_41745;
(statearr_41773_41831[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41832 = state_41745;
state_41745 = G__41832;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__ = function(state_41745){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1.call(this,state_41745);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__,jobs,results,process,async))
})();
var state__17683__auto__ = (function (){var statearr_41774 = f__17682__auto__.call(null);
(statearr_41774[(6)] = c__17681__auto__);

return statearr_41774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto__,jobs,results,process,async))
);

return c__17681__auto__;
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
var G__41834 = arguments.length;
switch (G__41834) {
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
var G__41837 = arguments.length;
switch (G__41837) {
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
var G__41840 = arguments.length;
switch (G__41840) {
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
var c__17681__auto___41889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___41889,tc,fc){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___41889,tc,fc){
return (function (state_41866){
var state_val_41867 = (state_41866[(1)]);
if((state_val_41867 === (7))){
var inst_41862 = (state_41866[(2)]);
var state_41866__$1 = state_41866;
var statearr_41868_41890 = state_41866__$1;
(statearr_41868_41890[(2)] = inst_41862);

(statearr_41868_41890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41867 === (1))){
var state_41866__$1 = state_41866;
var statearr_41869_41891 = state_41866__$1;
(statearr_41869_41891[(2)] = null);

(statearr_41869_41891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41867 === (4))){
var inst_41843 = (state_41866[(7)]);
var inst_41843__$1 = (state_41866[(2)]);
var inst_41844 = (inst_41843__$1 == null);
var state_41866__$1 = (function (){var statearr_41870 = state_41866;
(statearr_41870[(7)] = inst_41843__$1);

return statearr_41870;
})();
if(cljs.core.truth_(inst_41844)){
var statearr_41871_41892 = state_41866__$1;
(statearr_41871_41892[(1)] = (5));

} else {
var statearr_41872_41893 = state_41866__$1;
(statearr_41872_41893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41867 === (13))){
var state_41866__$1 = state_41866;
var statearr_41873_41894 = state_41866__$1;
(statearr_41873_41894[(2)] = null);

(statearr_41873_41894[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41867 === (6))){
var inst_41843 = (state_41866[(7)]);
var inst_41849 = p.call(null,inst_41843);
var state_41866__$1 = state_41866;
if(cljs.core.truth_(inst_41849)){
var statearr_41874_41895 = state_41866__$1;
(statearr_41874_41895[(1)] = (9));

} else {
var statearr_41875_41896 = state_41866__$1;
(statearr_41875_41896[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41867 === (3))){
var inst_41864 = (state_41866[(2)]);
var state_41866__$1 = state_41866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41866__$1,inst_41864);
} else {
if((state_val_41867 === (12))){
var state_41866__$1 = state_41866;
var statearr_41876_41897 = state_41866__$1;
(statearr_41876_41897[(2)] = null);

(statearr_41876_41897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41867 === (2))){
var state_41866__$1 = state_41866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41866__$1,(4),ch);
} else {
if((state_val_41867 === (11))){
var inst_41843 = (state_41866[(7)]);
var inst_41853 = (state_41866[(2)]);
var state_41866__$1 = state_41866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41866__$1,(8),inst_41853,inst_41843);
} else {
if((state_val_41867 === (9))){
var state_41866__$1 = state_41866;
var statearr_41877_41898 = state_41866__$1;
(statearr_41877_41898[(2)] = tc);

(statearr_41877_41898[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41867 === (5))){
var inst_41846 = cljs.core.async.close_BANG_.call(null,tc);
var inst_41847 = cljs.core.async.close_BANG_.call(null,fc);
var state_41866__$1 = (function (){var statearr_41878 = state_41866;
(statearr_41878[(8)] = inst_41846);

return statearr_41878;
})();
var statearr_41879_41899 = state_41866__$1;
(statearr_41879_41899[(2)] = inst_41847);

(statearr_41879_41899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41867 === (14))){
var inst_41860 = (state_41866[(2)]);
var state_41866__$1 = state_41866;
var statearr_41880_41900 = state_41866__$1;
(statearr_41880_41900[(2)] = inst_41860);

(statearr_41880_41900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41867 === (10))){
var state_41866__$1 = state_41866;
var statearr_41881_41901 = state_41866__$1;
(statearr_41881_41901[(2)] = fc);

(statearr_41881_41901[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41867 === (8))){
var inst_41855 = (state_41866[(2)]);
var state_41866__$1 = state_41866;
if(cljs.core.truth_(inst_41855)){
var statearr_41882_41902 = state_41866__$1;
(statearr_41882_41902[(1)] = (12));

} else {
var statearr_41883_41903 = state_41866__$1;
(statearr_41883_41903[(1)] = (13));

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
});})(c__17681__auto___41889,tc,fc))
;
return ((function (switch__17591__auto__,c__17681__auto___41889,tc,fc){
return (function() {
var cljs$core$async$state_machine__17592__auto__ = null;
var cljs$core$async$state_machine__17592__auto____0 = (function (){
var statearr_41884 = [null,null,null,null,null,null,null,null,null];
(statearr_41884[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_41884[(1)] = (1));

return statearr_41884;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_41866){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_41866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e41885){if((e41885 instanceof Object)){
var ex__17595__auto__ = e41885;
var statearr_41886_41904 = state_41866;
(statearr_41886_41904[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41905 = state_41866;
state_41866 = G__41905;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_41866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_41866);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___41889,tc,fc))
})();
var state__17683__auto__ = (function (){var statearr_41887 = f__17682__auto__.call(null);
(statearr_41887[(6)] = c__17681__auto___41889);

return statearr_41887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___41889,tc,fc))
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
var c__17681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto__){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto__){
return (function (state_41926){
var state_val_41927 = (state_41926[(1)]);
if((state_val_41927 === (7))){
var inst_41922 = (state_41926[(2)]);
var state_41926__$1 = state_41926;
var statearr_41928_41946 = state_41926__$1;
(statearr_41928_41946[(2)] = inst_41922);

(statearr_41928_41946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (1))){
var inst_41906 = init;
var state_41926__$1 = (function (){var statearr_41929 = state_41926;
(statearr_41929[(7)] = inst_41906);

return statearr_41929;
})();
var statearr_41930_41947 = state_41926__$1;
(statearr_41930_41947[(2)] = null);

(statearr_41930_41947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (4))){
var inst_41909 = (state_41926[(8)]);
var inst_41909__$1 = (state_41926[(2)]);
var inst_41910 = (inst_41909__$1 == null);
var state_41926__$1 = (function (){var statearr_41931 = state_41926;
(statearr_41931[(8)] = inst_41909__$1);

return statearr_41931;
})();
if(cljs.core.truth_(inst_41910)){
var statearr_41932_41948 = state_41926__$1;
(statearr_41932_41948[(1)] = (5));

} else {
var statearr_41933_41949 = state_41926__$1;
(statearr_41933_41949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (6))){
var inst_41909 = (state_41926[(8)]);
var inst_41906 = (state_41926[(7)]);
var inst_41913 = (state_41926[(9)]);
var inst_41913__$1 = f.call(null,inst_41906,inst_41909);
var inst_41914 = cljs.core.reduced_QMARK_.call(null,inst_41913__$1);
var state_41926__$1 = (function (){var statearr_41934 = state_41926;
(statearr_41934[(9)] = inst_41913__$1);

return statearr_41934;
})();
if(inst_41914){
var statearr_41935_41950 = state_41926__$1;
(statearr_41935_41950[(1)] = (8));

} else {
var statearr_41936_41951 = state_41926__$1;
(statearr_41936_41951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (3))){
var inst_41924 = (state_41926[(2)]);
var state_41926__$1 = state_41926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41926__$1,inst_41924);
} else {
if((state_val_41927 === (2))){
var state_41926__$1 = state_41926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41926__$1,(4),ch);
} else {
if((state_val_41927 === (9))){
var inst_41913 = (state_41926[(9)]);
var inst_41906 = inst_41913;
var state_41926__$1 = (function (){var statearr_41937 = state_41926;
(statearr_41937[(7)] = inst_41906);

return statearr_41937;
})();
var statearr_41938_41952 = state_41926__$1;
(statearr_41938_41952[(2)] = null);

(statearr_41938_41952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (5))){
var inst_41906 = (state_41926[(7)]);
var state_41926__$1 = state_41926;
var statearr_41939_41953 = state_41926__$1;
(statearr_41939_41953[(2)] = inst_41906);

(statearr_41939_41953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (10))){
var inst_41920 = (state_41926[(2)]);
var state_41926__$1 = state_41926;
var statearr_41940_41954 = state_41926__$1;
(statearr_41940_41954[(2)] = inst_41920);

(statearr_41940_41954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41927 === (8))){
var inst_41913 = (state_41926[(9)]);
var inst_41916 = cljs.core.deref.call(null,inst_41913);
var state_41926__$1 = state_41926;
var statearr_41941_41955 = state_41926__$1;
(statearr_41941_41955[(2)] = inst_41916);

(statearr_41941_41955[(1)] = (10));


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
});})(c__17681__auto__))
;
return ((function (switch__17591__auto__,c__17681__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17592__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17592__auto____0 = (function (){
var statearr_41942 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41942[(0)] = cljs$core$async$reduce_$_state_machine__17592__auto__);

(statearr_41942[(1)] = (1));

return statearr_41942;
});
var cljs$core$async$reduce_$_state_machine__17592__auto____1 = (function (state_41926){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_41926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e41943){if((e41943 instanceof Object)){
var ex__17595__auto__ = e41943;
var statearr_41944_41956 = state_41926;
(statearr_41944_41956[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41957 = state_41926;
state_41926 = G__41957;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17592__auto__ = function(state_41926){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17592__auto____1.call(this,state_41926);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17592__auto____0;
cljs$core$async$reduce_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17592__auto____1;
return cljs$core$async$reduce_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__))
})();
var state__17683__auto__ = (function (){var statearr_41945 = f__17682__auto__.call(null);
(statearr_41945[(6)] = c__17681__auto__);

return statearr_41945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto__))
);

return c__17681__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__17681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto__,f__$1){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto__,f__$1){
return (function (state_41963){
var state_val_41964 = (state_41963[(1)]);
if((state_val_41964 === (1))){
var inst_41958 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_41963__$1 = state_41963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41963__$1,(2),inst_41958);
} else {
if((state_val_41964 === (2))){
var inst_41960 = (state_41963[(2)]);
var inst_41961 = f__$1.call(null,inst_41960);
var state_41963__$1 = state_41963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41963__$1,inst_41961);
} else {
return null;
}
}
});})(c__17681__auto__,f__$1))
;
return ((function (switch__17591__auto__,c__17681__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__17592__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17592__auto____0 = (function (){
var statearr_41965 = [null,null,null,null,null,null,null];
(statearr_41965[(0)] = cljs$core$async$transduce_$_state_machine__17592__auto__);

(statearr_41965[(1)] = (1));

return statearr_41965;
});
var cljs$core$async$transduce_$_state_machine__17592__auto____1 = (function (state_41963){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_41963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e41966){if((e41966 instanceof Object)){
var ex__17595__auto__ = e41966;
var statearr_41967_41969 = state_41963;
(statearr_41967_41969[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41970 = state_41963;
state_41963 = G__41970;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17592__auto__ = function(state_41963){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17592__auto____1.call(this,state_41963);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17592__auto____0;
cljs$core$async$transduce_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17592__auto____1;
return cljs$core$async$transduce_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__,f__$1))
})();
var state__17683__auto__ = (function (){var statearr_41968 = f__17682__auto__.call(null);
(statearr_41968[(6)] = c__17681__auto__);

return statearr_41968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto__,f__$1))
);

return c__17681__auto__;
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
var G__41972 = arguments.length;
switch (G__41972) {
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
var c__17681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto__){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto__){
return (function (state_41997){
var state_val_41998 = (state_41997[(1)]);
if((state_val_41998 === (7))){
var inst_41979 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_41999_42020 = state_41997__$1;
(statearr_41999_42020[(2)] = inst_41979);

(statearr_41999_42020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (1))){
var inst_41973 = cljs.core.seq.call(null,coll);
var inst_41974 = inst_41973;
var state_41997__$1 = (function (){var statearr_42000 = state_41997;
(statearr_42000[(7)] = inst_41974);

return statearr_42000;
})();
var statearr_42001_42021 = state_41997__$1;
(statearr_42001_42021[(2)] = null);

(statearr_42001_42021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (4))){
var inst_41974 = (state_41997[(7)]);
var inst_41977 = cljs.core.first.call(null,inst_41974);
var state_41997__$1 = state_41997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41997__$1,(7),ch,inst_41977);
} else {
if((state_val_41998 === (13))){
var inst_41991 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42002_42022 = state_41997__$1;
(statearr_42002_42022[(2)] = inst_41991);

(statearr_42002_42022[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (6))){
var inst_41982 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
if(cljs.core.truth_(inst_41982)){
var statearr_42003_42023 = state_41997__$1;
(statearr_42003_42023[(1)] = (8));

} else {
var statearr_42004_42024 = state_41997__$1;
(statearr_42004_42024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (3))){
var inst_41995 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41997__$1,inst_41995);
} else {
if((state_val_41998 === (12))){
var state_41997__$1 = state_41997;
var statearr_42005_42025 = state_41997__$1;
(statearr_42005_42025[(2)] = null);

(statearr_42005_42025[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (2))){
var inst_41974 = (state_41997[(7)]);
var state_41997__$1 = state_41997;
if(cljs.core.truth_(inst_41974)){
var statearr_42006_42026 = state_41997__$1;
(statearr_42006_42026[(1)] = (4));

} else {
var statearr_42007_42027 = state_41997__$1;
(statearr_42007_42027[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (11))){
var inst_41988 = cljs.core.async.close_BANG_.call(null,ch);
var state_41997__$1 = state_41997;
var statearr_42008_42028 = state_41997__$1;
(statearr_42008_42028[(2)] = inst_41988);

(statearr_42008_42028[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (9))){
var state_41997__$1 = state_41997;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42009_42029 = state_41997__$1;
(statearr_42009_42029[(1)] = (11));

} else {
var statearr_42010_42030 = state_41997__$1;
(statearr_42010_42030[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (5))){
var inst_41974 = (state_41997[(7)]);
var state_41997__$1 = state_41997;
var statearr_42011_42031 = state_41997__$1;
(statearr_42011_42031[(2)] = inst_41974);

(statearr_42011_42031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (10))){
var inst_41993 = (state_41997[(2)]);
var state_41997__$1 = state_41997;
var statearr_42012_42032 = state_41997__$1;
(statearr_42012_42032[(2)] = inst_41993);

(statearr_42012_42032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41998 === (8))){
var inst_41974 = (state_41997[(7)]);
var inst_41984 = cljs.core.next.call(null,inst_41974);
var inst_41974__$1 = inst_41984;
var state_41997__$1 = (function (){var statearr_42013 = state_41997;
(statearr_42013[(7)] = inst_41974__$1);

return statearr_42013;
})();
var statearr_42014_42033 = state_41997__$1;
(statearr_42014_42033[(2)] = null);

(statearr_42014_42033[(1)] = (2));


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
});})(c__17681__auto__))
;
return ((function (switch__17591__auto__,c__17681__auto__){
return (function() {
var cljs$core$async$state_machine__17592__auto__ = null;
var cljs$core$async$state_machine__17592__auto____0 = (function (){
var statearr_42015 = [null,null,null,null,null,null,null,null];
(statearr_42015[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_42015[(1)] = (1));

return statearr_42015;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_41997){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_41997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e42016){if((e42016 instanceof Object)){
var ex__17595__auto__ = e42016;
var statearr_42017_42034 = state_41997;
(statearr_42017_42034[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42035 = state_41997;
state_41997 = G__42035;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_41997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_41997);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__))
})();
var state__17683__auto__ = (function (){var statearr_42018 = f__17682__auto__.call(null);
(statearr_42018[(6)] = c__17681__auto__);

return statearr_42018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto__))
);

return c__17681__auto__;
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
var x__9659__auto__ = (((_ == null))?null:_);
var m__9660__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9659__auto__)]);
if(!((m__9660__auto__ == null))){
return m__9660__auto__.call(null,_);
} else {
var m__9660__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__9660__auto____$1 == null))){
return m__9660__auto____$1.call(null,_);
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
var x__9659__auto__ = (((m == null))?null:m);
var m__9660__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9659__auto__)]);
if(!((m__9660__auto__ == null))){
return m__9660__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__9660__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__9660__auto____$1 == null))){
return m__9660__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__9659__auto__ = (((m == null))?null:m);
var m__9660__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9659__auto__)]);
if(!((m__9660__auto__ == null))){
return m__9660__auto__.call(null,m,ch);
} else {
var m__9660__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__9660__auto____$1 == null))){
return m__9660__auto____$1.call(null,m,ch);
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
var x__9659__auto__ = (((m == null))?null:m);
var m__9660__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9659__auto__)]);
if(!((m__9660__auto__ == null))){
return m__9660__auto__.call(null,m);
} else {
var m__9660__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__9660__auto____$1 == null))){
return m__9660__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async42036 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42036 = (function (ch,cs,meta42037){
this.ch = ch;
this.cs = cs;
this.meta42037 = meta42037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42038,meta42037__$1){
var self__ = this;
var _42038__$1 = this;
return (new cljs.core.async.t_cljs$core$async42036(self__.ch,self__.cs,meta42037__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42036.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42038){
var self__ = this;
var _42038__$1 = this;
return self__.meta42037;
});})(cs))
;

cljs.core.async.t_cljs$core$async42036.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42036.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42036.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42036.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42036.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42036.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42036.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42037","meta42037",-1928071612,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42036.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42036";

cljs.core.async.t_cljs$core$async42036.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async/t_cljs$core$async42036");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async42036 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42036(ch__$1,cs__$1,meta42037){
return (new cljs.core.async.t_cljs$core$async42036(ch__$1,cs__$1,meta42037));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42036(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17681__auto___42258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___42258,cs,m,dchan,dctr,done){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___42258,cs,m,dchan,dctr,done){
return (function (state_42173){
var state_val_42174 = (state_42173[(1)]);
if((state_val_42174 === (7))){
var inst_42169 = (state_42173[(2)]);
var state_42173__$1 = state_42173;
var statearr_42175_42259 = state_42173__$1;
(statearr_42175_42259[(2)] = inst_42169);

(statearr_42175_42259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (20))){
var inst_42072 = (state_42173[(7)]);
var inst_42084 = cljs.core.first.call(null,inst_42072);
var inst_42085 = cljs.core.nth.call(null,inst_42084,(0),null);
var inst_42086 = cljs.core.nth.call(null,inst_42084,(1),null);
var state_42173__$1 = (function (){var statearr_42176 = state_42173;
(statearr_42176[(8)] = inst_42085);

return statearr_42176;
})();
if(cljs.core.truth_(inst_42086)){
var statearr_42177_42260 = state_42173__$1;
(statearr_42177_42260[(1)] = (22));

} else {
var statearr_42178_42261 = state_42173__$1;
(statearr_42178_42261[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (27))){
var inst_42114 = (state_42173[(9)]);
var inst_42116 = (state_42173[(10)]);
var inst_42041 = (state_42173[(11)]);
var inst_42121 = (state_42173[(12)]);
var inst_42121__$1 = cljs.core._nth.call(null,inst_42114,inst_42116);
var inst_42122 = cljs.core.async.put_BANG_.call(null,inst_42121__$1,inst_42041,done);
var state_42173__$1 = (function (){var statearr_42179 = state_42173;
(statearr_42179[(12)] = inst_42121__$1);

return statearr_42179;
})();
if(cljs.core.truth_(inst_42122)){
var statearr_42180_42262 = state_42173__$1;
(statearr_42180_42262[(1)] = (30));

} else {
var statearr_42181_42263 = state_42173__$1;
(statearr_42181_42263[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (1))){
var state_42173__$1 = state_42173;
var statearr_42182_42264 = state_42173__$1;
(statearr_42182_42264[(2)] = null);

(statearr_42182_42264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (24))){
var inst_42072 = (state_42173[(7)]);
var inst_42091 = (state_42173[(2)]);
var inst_42092 = cljs.core.next.call(null,inst_42072);
var inst_42050 = inst_42092;
var inst_42051 = null;
var inst_42052 = (0);
var inst_42053 = (0);
var state_42173__$1 = (function (){var statearr_42183 = state_42173;
(statearr_42183[(13)] = inst_42052);

(statearr_42183[(14)] = inst_42050);

(statearr_42183[(15)] = inst_42091);

(statearr_42183[(16)] = inst_42051);

(statearr_42183[(17)] = inst_42053);

return statearr_42183;
})();
var statearr_42184_42265 = state_42173__$1;
(statearr_42184_42265[(2)] = null);

(statearr_42184_42265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (39))){
var state_42173__$1 = state_42173;
var statearr_42188_42266 = state_42173__$1;
(statearr_42188_42266[(2)] = null);

(statearr_42188_42266[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (4))){
var inst_42041 = (state_42173[(11)]);
var inst_42041__$1 = (state_42173[(2)]);
var inst_42042 = (inst_42041__$1 == null);
var state_42173__$1 = (function (){var statearr_42189 = state_42173;
(statearr_42189[(11)] = inst_42041__$1);

return statearr_42189;
})();
if(cljs.core.truth_(inst_42042)){
var statearr_42190_42267 = state_42173__$1;
(statearr_42190_42267[(1)] = (5));

} else {
var statearr_42191_42268 = state_42173__$1;
(statearr_42191_42268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (15))){
var inst_42052 = (state_42173[(13)]);
var inst_42050 = (state_42173[(14)]);
var inst_42051 = (state_42173[(16)]);
var inst_42053 = (state_42173[(17)]);
var inst_42068 = (state_42173[(2)]);
var inst_42069 = (inst_42053 + (1));
var tmp42185 = inst_42052;
var tmp42186 = inst_42050;
var tmp42187 = inst_42051;
var inst_42050__$1 = tmp42186;
var inst_42051__$1 = tmp42187;
var inst_42052__$1 = tmp42185;
var inst_42053__$1 = inst_42069;
var state_42173__$1 = (function (){var statearr_42192 = state_42173;
(statearr_42192[(13)] = inst_42052__$1);

(statearr_42192[(14)] = inst_42050__$1);

(statearr_42192[(16)] = inst_42051__$1);

(statearr_42192[(18)] = inst_42068);

(statearr_42192[(17)] = inst_42053__$1);

return statearr_42192;
})();
var statearr_42193_42269 = state_42173__$1;
(statearr_42193_42269[(2)] = null);

(statearr_42193_42269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (21))){
var inst_42095 = (state_42173[(2)]);
var state_42173__$1 = state_42173;
var statearr_42197_42270 = state_42173__$1;
(statearr_42197_42270[(2)] = inst_42095);

(statearr_42197_42270[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (31))){
var inst_42121 = (state_42173[(12)]);
var inst_42125 = done.call(null,null);
var inst_42126 = cljs.core.async.untap_STAR_.call(null,m,inst_42121);
var state_42173__$1 = (function (){var statearr_42198 = state_42173;
(statearr_42198[(19)] = inst_42125);

return statearr_42198;
})();
var statearr_42199_42271 = state_42173__$1;
(statearr_42199_42271[(2)] = inst_42126);

(statearr_42199_42271[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (32))){
var inst_42114 = (state_42173[(9)]);
var inst_42116 = (state_42173[(10)]);
var inst_42115 = (state_42173[(20)]);
var inst_42113 = (state_42173[(21)]);
var inst_42128 = (state_42173[(2)]);
var inst_42129 = (inst_42116 + (1));
var tmp42194 = inst_42114;
var tmp42195 = inst_42115;
var tmp42196 = inst_42113;
var inst_42113__$1 = tmp42196;
var inst_42114__$1 = tmp42194;
var inst_42115__$1 = tmp42195;
var inst_42116__$1 = inst_42129;
var state_42173__$1 = (function (){var statearr_42200 = state_42173;
(statearr_42200[(9)] = inst_42114__$1);

(statearr_42200[(10)] = inst_42116__$1);

(statearr_42200[(20)] = inst_42115__$1);

(statearr_42200[(21)] = inst_42113__$1);

(statearr_42200[(22)] = inst_42128);

return statearr_42200;
})();
var statearr_42201_42272 = state_42173__$1;
(statearr_42201_42272[(2)] = null);

(statearr_42201_42272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (40))){
var inst_42141 = (state_42173[(23)]);
var inst_42145 = done.call(null,null);
var inst_42146 = cljs.core.async.untap_STAR_.call(null,m,inst_42141);
var state_42173__$1 = (function (){var statearr_42202 = state_42173;
(statearr_42202[(24)] = inst_42145);

return statearr_42202;
})();
var statearr_42203_42273 = state_42173__$1;
(statearr_42203_42273[(2)] = inst_42146);

(statearr_42203_42273[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (33))){
var inst_42132 = (state_42173[(25)]);
var inst_42134 = cljs.core.chunked_seq_QMARK_.call(null,inst_42132);
var state_42173__$1 = state_42173;
if(inst_42134){
var statearr_42204_42274 = state_42173__$1;
(statearr_42204_42274[(1)] = (36));

} else {
var statearr_42205_42275 = state_42173__$1;
(statearr_42205_42275[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (13))){
var inst_42062 = (state_42173[(26)]);
var inst_42065 = cljs.core.async.close_BANG_.call(null,inst_42062);
var state_42173__$1 = state_42173;
var statearr_42206_42276 = state_42173__$1;
(statearr_42206_42276[(2)] = inst_42065);

(statearr_42206_42276[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (22))){
var inst_42085 = (state_42173[(8)]);
var inst_42088 = cljs.core.async.close_BANG_.call(null,inst_42085);
var state_42173__$1 = state_42173;
var statearr_42207_42277 = state_42173__$1;
(statearr_42207_42277[(2)] = inst_42088);

(statearr_42207_42277[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (36))){
var inst_42132 = (state_42173[(25)]);
var inst_42136 = cljs.core.chunk_first.call(null,inst_42132);
var inst_42137 = cljs.core.chunk_rest.call(null,inst_42132);
var inst_42138 = cljs.core.count.call(null,inst_42136);
var inst_42113 = inst_42137;
var inst_42114 = inst_42136;
var inst_42115 = inst_42138;
var inst_42116 = (0);
var state_42173__$1 = (function (){var statearr_42208 = state_42173;
(statearr_42208[(9)] = inst_42114);

(statearr_42208[(10)] = inst_42116);

(statearr_42208[(20)] = inst_42115);

(statearr_42208[(21)] = inst_42113);

return statearr_42208;
})();
var statearr_42209_42278 = state_42173__$1;
(statearr_42209_42278[(2)] = null);

(statearr_42209_42278[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (41))){
var inst_42132 = (state_42173[(25)]);
var inst_42148 = (state_42173[(2)]);
var inst_42149 = cljs.core.next.call(null,inst_42132);
var inst_42113 = inst_42149;
var inst_42114 = null;
var inst_42115 = (0);
var inst_42116 = (0);
var state_42173__$1 = (function (){var statearr_42210 = state_42173;
(statearr_42210[(9)] = inst_42114);

(statearr_42210[(10)] = inst_42116);

(statearr_42210[(20)] = inst_42115);

(statearr_42210[(21)] = inst_42113);

(statearr_42210[(27)] = inst_42148);

return statearr_42210;
})();
var statearr_42211_42279 = state_42173__$1;
(statearr_42211_42279[(2)] = null);

(statearr_42211_42279[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (43))){
var state_42173__$1 = state_42173;
var statearr_42212_42280 = state_42173__$1;
(statearr_42212_42280[(2)] = null);

(statearr_42212_42280[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (29))){
var inst_42157 = (state_42173[(2)]);
var state_42173__$1 = state_42173;
var statearr_42213_42281 = state_42173__$1;
(statearr_42213_42281[(2)] = inst_42157);

(statearr_42213_42281[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (44))){
var inst_42166 = (state_42173[(2)]);
var state_42173__$1 = (function (){var statearr_42214 = state_42173;
(statearr_42214[(28)] = inst_42166);

return statearr_42214;
})();
var statearr_42215_42282 = state_42173__$1;
(statearr_42215_42282[(2)] = null);

(statearr_42215_42282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (6))){
var inst_42105 = (state_42173[(29)]);
var inst_42104 = cljs.core.deref.call(null,cs);
var inst_42105__$1 = cljs.core.keys.call(null,inst_42104);
var inst_42106 = cljs.core.count.call(null,inst_42105__$1);
var inst_42107 = cljs.core.reset_BANG_.call(null,dctr,inst_42106);
var inst_42112 = cljs.core.seq.call(null,inst_42105__$1);
var inst_42113 = inst_42112;
var inst_42114 = null;
var inst_42115 = (0);
var inst_42116 = (0);
var state_42173__$1 = (function (){var statearr_42216 = state_42173;
(statearr_42216[(9)] = inst_42114);

(statearr_42216[(10)] = inst_42116);

(statearr_42216[(30)] = inst_42107);

(statearr_42216[(20)] = inst_42115);

(statearr_42216[(21)] = inst_42113);

(statearr_42216[(29)] = inst_42105__$1);

return statearr_42216;
})();
var statearr_42217_42283 = state_42173__$1;
(statearr_42217_42283[(2)] = null);

(statearr_42217_42283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (28))){
var inst_42132 = (state_42173[(25)]);
var inst_42113 = (state_42173[(21)]);
var inst_42132__$1 = cljs.core.seq.call(null,inst_42113);
var state_42173__$1 = (function (){var statearr_42218 = state_42173;
(statearr_42218[(25)] = inst_42132__$1);

return statearr_42218;
})();
if(inst_42132__$1){
var statearr_42219_42284 = state_42173__$1;
(statearr_42219_42284[(1)] = (33));

} else {
var statearr_42220_42285 = state_42173__$1;
(statearr_42220_42285[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (25))){
var inst_42116 = (state_42173[(10)]);
var inst_42115 = (state_42173[(20)]);
var inst_42118 = (inst_42116 < inst_42115);
var inst_42119 = inst_42118;
var state_42173__$1 = state_42173;
if(cljs.core.truth_(inst_42119)){
var statearr_42221_42286 = state_42173__$1;
(statearr_42221_42286[(1)] = (27));

} else {
var statearr_42222_42287 = state_42173__$1;
(statearr_42222_42287[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (34))){
var state_42173__$1 = state_42173;
var statearr_42223_42288 = state_42173__$1;
(statearr_42223_42288[(2)] = null);

(statearr_42223_42288[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (17))){
var state_42173__$1 = state_42173;
var statearr_42224_42289 = state_42173__$1;
(statearr_42224_42289[(2)] = null);

(statearr_42224_42289[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (3))){
var inst_42171 = (state_42173[(2)]);
var state_42173__$1 = state_42173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42173__$1,inst_42171);
} else {
if((state_val_42174 === (12))){
var inst_42100 = (state_42173[(2)]);
var state_42173__$1 = state_42173;
var statearr_42225_42290 = state_42173__$1;
(statearr_42225_42290[(2)] = inst_42100);

(statearr_42225_42290[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (2))){
var state_42173__$1 = state_42173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42173__$1,(4),ch);
} else {
if((state_val_42174 === (23))){
var state_42173__$1 = state_42173;
var statearr_42226_42291 = state_42173__$1;
(statearr_42226_42291[(2)] = null);

(statearr_42226_42291[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (35))){
var inst_42155 = (state_42173[(2)]);
var state_42173__$1 = state_42173;
var statearr_42227_42292 = state_42173__$1;
(statearr_42227_42292[(2)] = inst_42155);

(statearr_42227_42292[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (19))){
var inst_42072 = (state_42173[(7)]);
var inst_42076 = cljs.core.chunk_first.call(null,inst_42072);
var inst_42077 = cljs.core.chunk_rest.call(null,inst_42072);
var inst_42078 = cljs.core.count.call(null,inst_42076);
var inst_42050 = inst_42077;
var inst_42051 = inst_42076;
var inst_42052 = inst_42078;
var inst_42053 = (0);
var state_42173__$1 = (function (){var statearr_42228 = state_42173;
(statearr_42228[(13)] = inst_42052);

(statearr_42228[(14)] = inst_42050);

(statearr_42228[(16)] = inst_42051);

(statearr_42228[(17)] = inst_42053);

return statearr_42228;
})();
var statearr_42229_42293 = state_42173__$1;
(statearr_42229_42293[(2)] = null);

(statearr_42229_42293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (11))){
var inst_42050 = (state_42173[(14)]);
var inst_42072 = (state_42173[(7)]);
var inst_42072__$1 = cljs.core.seq.call(null,inst_42050);
var state_42173__$1 = (function (){var statearr_42230 = state_42173;
(statearr_42230[(7)] = inst_42072__$1);

return statearr_42230;
})();
if(inst_42072__$1){
var statearr_42231_42294 = state_42173__$1;
(statearr_42231_42294[(1)] = (16));

} else {
var statearr_42232_42295 = state_42173__$1;
(statearr_42232_42295[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (9))){
var inst_42102 = (state_42173[(2)]);
var state_42173__$1 = state_42173;
var statearr_42233_42296 = state_42173__$1;
(statearr_42233_42296[(2)] = inst_42102);

(statearr_42233_42296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (5))){
var inst_42048 = cljs.core.deref.call(null,cs);
var inst_42049 = cljs.core.seq.call(null,inst_42048);
var inst_42050 = inst_42049;
var inst_42051 = null;
var inst_42052 = (0);
var inst_42053 = (0);
var state_42173__$1 = (function (){var statearr_42234 = state_42173;
(statearr_42234[(13)] = inst_42052);

(statearr_42234[(14)] = inst_42050);

(statearr_42234[(16)] = inst_42051);

(statearr_42234[(17)] = inst_42053);

return statearr_42234;
})();
var statearr_42235_42297 = state_42173__$1;
(statearr_42235_42297[(2)] = null);

(statearr_42235_42297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (14))){
var state_42173__$1 = state_42173;
var statearr_42236_42298 = state_42173__$1;
(statearr_42236_42298[(2)] = null);

(statearr_42236_42298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (45))){
var inst_42163 = (state_42173[(2)]);
var state_42173__$1 = state_42173;
var statearr_42237_42299 = state_42173__$1;
(statearr_42237_42299[(2)] = inst_42163);

(statearr_42237_42299[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (26))){
var inst_42105 = (state_42173[(29)]);
var inst_42159 = (state_42173[(2)]);
var inst_42160 = cljs.core.seq.call(null,inst_42105);
var state_42173__$1 = (function (){var statearr_42238 = state_42173;
(statearr_42238[(31)] = inst_42159);

return statearr_42238;
})();
if(inst_42160){
var statearr_42239_42300 = state_42173__$1;
(statearr_42239_42300[(1)] = (42));

} else {
var statearr_42240_42301 = state_42173__$1;
(statearr_42240_42301[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (16))){
var inst_42072 = (state_42173[(7)]);
var inst_42074 = cljs.core.chunked_seq_QMARK_.call(null,inst_42072);
var state_42173__$1 = state_42173;
if(inst_42074){
var statearr_42241_42302 = state_42173__$1;
(statearr_42241_42302[(1)] = (19));

} else {
var statearr_42242_42303 = state_42173__$1;
(statearr_42242_42303[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (38))){
var inst_42152 = (state_42173[(2)]);
var state_42173__$1 = state_42173;
var statearr_42243_42304 = state_42173__$1;
(statearr_42243_42304[(2)] = inst_42152);

(statearr_42243_42304[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (30))){
var state_42173__$1 = state_42173;
var statearr_42244_42305 = state_42173__$1;
(statearr_42244_42305[(2)] = null);

(statearr_42244_42305[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (10))){
var inst_42051 = (state_42173[(16)]);
var inst_42053 = (state_42173[(17)]);
var inst_42061 = cljs.core._nth.call(null,inst_42051,inst_42053);
var inst_42062 = cljs.core.nth.call(null,inst_42061,(0),null);
var inst_42063 = cljs.core.nth.call(null,inst_42061,(1),null);
var state_42173__$1 = (function (){var statearr_42245 = state_42173;
(statearr_42245[(26)] = inst_42062);

return statearr_42245;
})();
if(cljs.core.truth_(inst_42063)){
var statearr_42246_42306 = state_42173__$1;
(statearr_42246_42306[(1)] = (13));

} else {
var statearr_42247_42307 = state_42173__$1;
(statearr_42247_42307[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (18))){
var inst_42098 = (state_42173[(2)]);
var state_42173__$1 = state_42173;
var statearr_42248_42308 = state_42173__$1;
(statearr_42248_42308[(2)] = inst_42098);

(statearr_42248_42308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (42))){
var state_42173__$1 = state_42173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42173__$1,(45),dchan);
} else {
if((state_val_42174 === (37))){
var inst_42132 = (state_42173[(25)]);
var inst_42041 = (state_42173[(11)]);
var inst_42141 = (state_42173[(23)]);
var inst_42141__$1 = cljs.core.first.call(null,inst_42132);
var inst_42142 = cljs.core.async.put_BANG_.call(null,inst_42141__$1,inst_42041,done);
var state_42173__$1 = (function (){var statearr_42249 = state_42173;
(statearr_42249[(23)] = inst_42141__$1);

return statearr_42249;
})();
if(cljs.core.truth_(inst_42142)){
var statearr_42250_42309 = state_42173__$1;
(statearr_42250_42309[(1)] = (39));

} else {
var statearr_42251_42310 = state_42173__$1;
(statearr_42251_42310[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42174 === (8))){
var inst_42052 = (state_42173[(13)]);
var inst_42053 = (state_42173[(17)]);
var inst_42055 = (inst_42053 < inst_42052);
var inst_42056 = inst_42055;
var state_42173__$1 = state_42173;
if(cljs.core.truth_(inst_42056)){
var statearr_42252_42311 = state_42173__$1;
(statearr_42252_42311[(1)] = (10));

} else {
var statearr_42253_42312 = state_42173__$1;
(statearr_42253_42312[(1)] = (11));

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
});})(c__17681__auto___42258,cs,m,dchan,dctr,done))
;
return ((function (switch__17591__auto__,c__17681__auto___42258,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17592__auto__ = null;
var cljs$core$async$mult_$_state_machine__17592__auto____0 = (function (){
var statearr_42254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42254[(0)] = cljs$core$async$mult_$_state_machine__17592__auto__);

(statearr_42254[(1)] = (1));

return statearr_42254;
});
var cljs$core$async$mult_$_state_machine__17592__auto____1 = (function (state_42173){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_42173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e42255){if((e42255 instanceof Object)){
var ex__17595__auto__ = e42255;
var statearr_42256_42313 = state_42173;
(statearr_42256_42313[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42314 = state_42173;
state_42173 = G__42314;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17592__auto__ = function(state_42173){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17592__auto____1.call(this,state_42173);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17592__auto____0;
cljs$core$async$mult_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17592__auto____1;
return cljs$core$async$mult_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___42258,cs,m,dchan,dctr,done))
})();
var state__17683__auto__ = (function (){var statearr_42257 = f__17682__auto__.call(null);
(statearr_42257[(6)] = c__17681__auto___42258);

return statearr_42257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___42258,cs,m,dchan,dctr,done))
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
var G__42316 = arguments.length;
switch (G__42316) {
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
var x__9659__auto__ = (((m == null))?null:m);
var m__9660__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9659__auto__)]);
if(!((m__9660__auto__ == null))){
return m__9660__auto__.call(null,m,ch);
} else {
var m__9660__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__9660__auto____$1 == null))){
return m__9660__auto____$1.call(null,m,ch);
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
var x__9659__auto__ = (((m == null))?null:m);
var m__9660__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9659__auto__)]);
if(!((m__9660__auto__ == null))){
return m__9660__auto__.call(null,m,ch);
} else {
var m__9660__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__9660__auto____$1 == null))){
return m__9660__auto____$1.call(null,m,ch);
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
var x__9659__auto__ = (((m == null))?null:m);
var m__9660__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9659__auto__)]);
if(!((m__9660__auto__ == null))){
return m__9660__auto__.call(null,m);
} else {
var m__9660__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__9660__auto____$1 == null))){
return m__9660__auto____$1.call(null,m);
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
var x__9659__auto__ = (((m == null))?null:m);
var m__9660__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9659__auto__)]);
if(!((m__9660__auto__ == null))){
return m__9660__auto__.call(null,m,state_map);
} else {
var m__9660__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__9660__auto____$1 == null))){
return m__9660__auto____$1.call(null,m,state_map);
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
var x__9659__auto__ = (((m == null))?null:m);
var m__9660__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9659__auto__)]);
if(!((m__9660__auto__ == null))){
return m__9660__auto__.call(null,m,mode);
} else {
var m__9660__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__9660__auto____$1 == null))){
return m__9660__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__10212__auto__ = [];
var len__10205__auto___42328 = arguments.length;
var i__10206__auto___42329 = (0);
while(true){
if((i__10206__auto___42329 < len__10205__auto___42328)){
args__10212__auto__.push((arguments[i__10206__auto___42329]));

var G__42330 = (i__10206__auto___42329 + (1));
i__10206__auto___42329 = G__42330;
continue;
} else {
}
break;
}

var argseq__10213__auto__ = ((((3) < args__10212__auto__.length))?(new cljs.core.IndexedSeq(args__10212__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10213__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42322){
var map__42323 = p__42322;
var map__42323__$1 = ((((!((map__42323 == null)))?((((map__42323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42323.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42323):map__42323);
var opts = map__42323__$1;
var statearr_42325_42331 = state;
(statearr_42325_42331[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__42323,map__42323__$1,opts){
return (function (val){
var statearr_42326_42332 = state;
(statearr_42326_42332[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__42323,map__42323__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_42327_42333 = state;
(statearr_42327_42333[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42318){
var G__42319 = cljs.core.first.call(null,seq42318);
var seq42318__$1 = cljs.core.next.call(null,seq42318);
var G__42320 = cljs.core.first.call(null,seq42318__$1);
var seq42318__$2 = cljs.core.next.call(null,seq42318__$1);
var G__42321 = cljs.core.first.call(null,seq42318__$2);
var seq42318__$3 = cljs.core.next.call(null,seq42318__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42319,G__42320,G__42321,seq42318__$3);
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
if(typeof cljs.core.async.t_cljs$core$async42334 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42334 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta42335){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta42335 = meta42335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42336,meta42335__$1){
var self__ = this;
var _42336__$1 = this;
return (new cljs.core.async.t_cljs$core$async42334(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta42335__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42334.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42336){
var self__ = this;
var _42336__$1 = this;
return self__.meta42335;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42334.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42334.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42334.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42334.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42334.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42334.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42334.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42334.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async42334.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta42335","meta42335",1509449585,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42334.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42334";

cljs.core.async.t_cljs$core$async42334.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async/t_cljs$core$async42334");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async42334 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42334(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42335){
return (new cljs.core.async.t_cljs$core$async42334(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42335));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42334(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17681__auto___42498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___42498,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___42498,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42438){
var state_val_42439 = (state_42438[(1)]);
if((state_val_42439 === (7))){
var inst_42353 = (state_42438[(2)]);
var state_42438__$1 = state_42438;
var statearr_42440_42499 = state_42438__$1;
(statearr_42440_42499[(2)] = inst_42353);

(statearr_42440_42499[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (20))){
var inst_42365 = (state_42438[(7)]);
var state_42438__$1 = state_42438;
var statearr_42441_42500 = state_42438__$1;
(statearr_42441_42500[(2)] = inst_42365);

(statearr_42441_42500[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (27))){
var state_42438__$1 = state_42438;
var statearr_42442_42501 = state_42438__$1;
(statearr_42442_42501[(2)] = null);

(statearr_42442_42501[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (1))){
var inst_42340 = (state_42438[(8)]);
var inst_42340__$1 = calc_state.call(null);
var inst_42342 = (inst_42340__$1 == null);
var inst_42343 = cljs.core.not.call(null,inst_42342);
var state_42438__$1 = (function (){var statearr_42443 = state_42438;
(statearr_42443[(8)] = inst_42340__$1);

return statearr_42443;
})();
if(inst_42343){
var statearr_42444_42502 = state_42438__$1;
(statearr_42444_42502[(1)] = (2));

} else {
var statearr_42445_42503 = state_42438__$1;
(statearr_42445_42503[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (24))){
var inst_42412 = (state_42438[(9)]);
var inst_42389 = (state_42438[(10)]);
var inst_42398 = (state_42438[(11)]);
var inst_42412__$1 = inst_42389.call(null,inst_42398);
var state_42438__$1 = (function (){var statearr_42446 = state_42438;
(statearr_42446[(9)] = inst_42412__$1);

return statearr_42446;
})();
if(cljs.core.truth_(inst_42412__$1)){
var statearr_42447_42504 = state_42438__$1;
(statearr_42447_42504[(1)] = (29));

} else {
var statearr_42448_42505 = state_42438__$1;
(statearr_42448_42505[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (4))){
var inst_42356 = (state_42438[(2)]);
var state_42438__$1 = state_42438;
if(cljs.core.truth_(inst_42356)){
var statearr_42449_42506 = state_42438__$1;
(statearr_42449_42506[(1)] = (8));

} else {
var statearr_42450_42507 = state_42438__$1;
(statearr_42450_42507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (15))){
var inst_42383 = (state_42438[(2)]);
var state_42438__$1 = state_42438;
if(cljs.core.truth_(inst_42383)){
var statearr_42451_42508 = state_42438__$1;
(statearr_42451_42508[(1)] = (19));

} else {
var statearr_42452_42509 = state_42438__$1;
(statearr_42452_42509[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (21))){
var inst_42388 = (state_42438[(12)]);
var inst_42388__$1 = (state_42438[(2)]);
var inst_42389 = cljs.core.get.call(null,inst_42388__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42390 = cljs.core.get.call(null,inst_42388__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42391 = cljs.core.get.call(null,inst_42388__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42438__$1 = (function (){var statearr_42453 = state_42438;
(statearr_42453[(10)] = inst_42389);

(statearr_42453[(13)] = inst_42390);

(statearr_42453[(12)] = inst_42388__$1);

return statearr_42453;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42438__$1,(22),inst_42391);
} else {
if((state_val_42439 === (31))){
var inst_42420 = (state_42438[(2)]);
var state_42438__$1 = state_42438;
if(cljs.core.truth_(inst_42420)){
var statearr_42454_42510 = state_42438__$1;
(statearr_42454_42510[(1)] = (32));

} else {
var statearr_42455_42511 = state_42438__$1;
(statearr_42455_42511[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (32))){
var inst_42397 = (state_42438[(14)]);
var state_42438__$1 = state_42438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42438__$1,(35),out,inst_42397);
} else {
if((state_val_42439 === (33))){
var inst_42388 = (state_42438[(12)]);
var inst_42365 = inst_42388;
var state_42438__$1 = (function (){var statearr_42456 = state_42438;
(statearr_42456[(7)] = inst_42365);

return statearr_42456;
})();
var statearr_42457_42512 = state_42438__$1;
(statearr_42457_42512[(2)] = null);

(statearr_42457_42512[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (13))){
var inst_42365 = (state_42438[(7)]);
var inst_42372 = inst_42365.cljs$lang$protocol_mask$partition0$;
var inst_42373 = (inst_42372 & (64));
var inst_42374 = inst_42365.cljs$core$ISeq$;
var inst_42375 = (cljs.core.PROTOCOL_SENTINEL === inst_42374);
var inst_42376 = (inst_42373) || (inst_42375);
var state_42438__$1 = state_42438;
if(cljs.core.truth_(inst_42376)){
var statearr_42458_42513 = state_42438__$1;
(statearr_42458_42513[(1)] = (16));

} else {
var statearr_42459_42514 = state_42438__$1;
(statearr_42459_42514[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (22))){
var inst_42398 = (state_42438[(11)]);
var inst_42397 = (state_42438[(14)]);
var inst_42396 = (state_42438[(2)]);
var inst_42397__$1 = cljs.core.nth.call(null,inst_42396,(0),null);
var inst_42398__$1 = cljs.core.nth.call(null,inst_42396,(1),null);
var inst_42399 = (inst_42397__$1 == null);
var inst_42400 = cljs.core._EQ_.call(null,inst_42398__$1,change);
var inst_42401 = (inst_42399) || (inst_42400);
var state_42438__$1 = (function (){var statearr_42460 = state_42438;
(statearr_42460[(11)] = inst_42398__$1);

(statearr_42460[(14)] = inst_42397__$1);

return statearr_42460;
})();
if(cljs.core.truth_(inst_42401)){
var statearr_42461_42515 = state_42438__$1;
(statearr_42461_42515[(1)] = (23));

} else {
var statearr_42462_42516 = state_42438__$1;
(statearr_42462_42516[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (36))){
var inst_42388 = (state_42438[(12)]);
var inst_42365 = inst_42388;
var state_42438__$1 = (function (){var statearr_42463 = state_42438;
(statearr_42463[(7)] = inst_42365);

return statearr_42463;
})();
var statearr_42464_42517 = state_42438__$1;
(statearr_42464_42517[(2)] = null);

(statearr_42464_42517[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (29))){
var inst_42412 = (state_42438[(9)]);
var state_42438__$1 = state_42438;
var statearr_42465_42518 = state_42438__$1;
(statearr_42465_42518[(2)] = inst_42412);

(statearr_42465_42518[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (6))){
var state_42438__$1 = state_42438;
var statearr_42466_42519 = state_42438__$1;
(statearr_42466_42519[(2)] = false);

(statearr_42466_42519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (28))){
var inst_42408 = (state_42438[(2)]);
var inst_42409 = calc_state.call(null);
var inst_42365 = inst_42409;
var state_42438__$1 = (function (){var statearr_42467 = state_42438;
(statearr_42467[(7)] = inst_42365);

(statearr_42467[(15)] = inst_42408);

return statearr_42467;
})();
var statearr_42468_42520 = state_42438__$1;
(statearr_42468_42520[(2)] = null);

(statearr_42468_42520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (25))){
var inst_42434 = (state_42438[(2)]);
var state_42438__$1 = state_42438;
var statearr_42469_42521 = state_42438__$1;
(statearr_42469_42521[(2)] = inst_42434);

(statearr_42469_42521[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (34))){
var inst_42432 = (state_42438[(2)]);
var state_42438__$1 = state_42438;
var statearr_42470_42522 = state_42438__$1;
(statearr_42470_42522[(2)] = inst_42432);

(statearr_42470_42522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (17))){
var state_42438__$1 = state_42438;
var statearr_42471_42523 = state_42438__$1;
(statearr_42471_42523[(2)] = false);

(statearr_42471_42523[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (3))){
var state_42438__$1 = state_42438;
var statearr_42472_42524 = state_42438__$1;
(statearr_42472_42524[(2)] = false);

(statearr_42472_42524[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (12))){
var inst_42436 = (state_42438[(2)]);
var state_42438__$1 = state_42438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42438__$1,inst_42436);
} else {
if((state_val_42439 === (2))){
var inst_42340 = (state_42438[(8)]);
var inst_42345 = inst_42340.cljs$lang$protocol_mask$partition0$;
var inst_42346 = (inst_42345 & (64));
var inst_42347 = inst_42340.cljs$core$ISeq$;
var inst_42348 = (cljs.core.PROTOCOL_SENTINEL === inst_42347);
var inst_42349 = (inst_42346) || (inst_42348);
var state_42438__$1 = state_42438;
if(cljs.core.truth_(inst_42349)){
var statearr_42473_42525 = state_42438__$1;
(statearr_42473_42525[(1)] = (5));

} else {
var statearr_42474_42526 = state_42438__$1;
(statearr_42474_42526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (23))){
var inst_42397 = (state_42438[(14)]);
var inst_42403 = (inst_42397 == null);
var state_42438__$1 = state_42438;
if(cljs.core.truth_(inst_42403)){
var statearr_42475_42527 = state_42438__$1;
(statearr_42475_42527[(1)] = (26));

} else {
var statearr_42476_42528 = state_42438__$1;
(statearr_42476_42528[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (35))){
var inst_42423 = (state_42438[(2)]);
var state_42438__$1 = state_42438;
if(cljs.core.truth_(inst_42423)){
var statearr_42477_42529 = state_42438__$1;
(statearr_42477_42529[(1)] = (36));

} else {
var statearr_42478_42530 = state_42438__$1;
(statearr_42478_42530[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (19))){
var inst_42365 = (state_42438[(7)]);
var inst_42385 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42365);
var state_42438__$1 = state_42438;
var statearr_42479_42531 = state_42438__$1;
(statearr_42479_42531[(2)] = inst_42385);

(statearr_42479_42531[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (11))){
var inst_42365 = (state_42438[(7)]);
var inst_42369 = (inst_42365 == null);
var inst_42370 = cljs.core.not.call(null,inst_42369);
var state_42438__$1 = state_42438;
if(inst_42370){
var statearr_42480_42532 = state_42438__$1;
(statearr_42480_42532[(1)] = (13));

} else {
var statearr_42481_42533 = state_42438__$1;
(statearr_42481_42533[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (9))){
var inst_42340 = (state_42438[(8)]);
var state_42438__$1 = state_42438;
var statearr_42482_42534 = state_42438__$1;
(statearr_42482_42534[(2)] = inst_42340);

(statearr_42482_42534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (5))){
var state_42438__$1 = state_42438;
var statearr_42483_42535 = state_42438__$1;
(statearr_42483_42535[(2)] = true);

(statearr_42483_42535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (14))){
var state_42438__$1 = state_42438;
var statearr_42484_42536 = state_42438__$1;
(statearr_42484_42536[(2)] = false);

(statearr_42484_42536[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (26))){
var inst_42398 = (state_42438[(11)]);
var inst_42405 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42398);
var state_42438__$1 = state_42438;
var statearr_42485_42537 = state_42438__$1;
(statearr_42485_42537[(2)] = inst_42405);

(statearr_42485_42537[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (16))){
var state_42438__$1 = state_42438;
var statearr_42486_42538 = state_42438__$1;
(statearr_42486_42538[(2)] = true);

(statearr_42486_42538[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (38))){
var inst_42428 = (state_42438[(2)]);
var state_42438__$1 = state_42438;
var statearr_42487_42539 = state_42438__$1;
(statearr_42487_42539[(2)] = inst_42428);

(statearr_42487_42539[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (30))){
var inst_42389 = (state_42438[(10)]);
var inst_42398 = (state_42438[(11)]);
var inst_42390 = (state_42438[(13)]);
var inst_42415 = cljs.core.empty_QMARK_.call(null,inst_42389);
var inst_42416 = inst_42390.call(null,inst_42398);
var inst_42417 = cljs.core.not.call(null,inst_42416);
var inst_42418 = (inst_42415) && (inst_42417);
var state_42438__$1 = state_42438;
var statearr_42488_42540 = state_42438__$1;
(statearr_42488_42540[(2)] = inst_42418);

(statearr_42488_42540[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (10))){
var inst_42340 = (state_42438[(8)]);
var inst_42361 = (state_42438[(2)]);
var inst_42362 = cljs.core.get.call(null,inst_42361,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42363 = cljs.core.get.call(null,inst_42361,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42364 = cljs.core.get.call(null,inst_42361,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42365 = inst_42340;
var state_42438__$1 = (function (){var statearr_42489 = state_42438;
(statearr_42489[(16)] = inst_42364);

(statearr_42489[(17)] = inst_42363);

(statearr_42489[(7)] = inst_42365);

(statearr_42489[(18)] = inst_42362);

return statearr_42489;
})();
var statearr_42490_42541 = state_42438__$1;
(statearr_42490_42541[(2)] = null);

(statearr_42490_42541[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (18))){
var inst_42380 = (state_42438[(2)]);
var state_42438__$1 = state_42438;
var statearr_42491_42542 = state_42438__$1;
(statearr_42491_42542[(2)] = inst_42380);

(statearr_42491_42542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (37))){
var state_42438__$1 = state_42438;
var statearr_42492_42543 = state_42438__$1;
(statearr_42492_42543[(2)] = null);

(statearr_42492_42543[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42439 === (8))){
var inst_42340 = (state_42438[(8)]);
var inst_42358 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42340);
var state_42438__$1 = state_42438;
var statearr_42493_42544 = state_42438__$1;
(statearr_42493_42544[(2)] = inst_42358);

(statearr_42493_42544[(1)] = (10));


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
});})(c__17681__auto___42498,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17591__auto__,c__17681__auto___42498,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17592__auto__ = null;
var cljs$core$async$mix_$_state_machine__17592__auto____0 = (function (){
var statearr_42494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42494[(0)] = cljs$core$async$mix_$_state_machine__17592__auto__);

(statearr_42494[(1)] = (1));

return statearr_42494;
});
var cljs$core$async$mix_$_state_machine__17592__auto____1 = (function (state_42438){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_42438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e42495){if((e42495 instanceof Object)){
var ex__17595__auto__ = e42495;
var statearr_42496_42545 = state_42438;
(statearr_42496_42545[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42546 = state_42438;
state_42438 = G__42546;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17592__auto__ = function(state_42438){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17592__auto____1.call(this,state_42438);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17592__auto____0;
cljs$core$async$mix_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17592__auto____1;
return cljs$core$async$mix_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___42498,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17683__auto__ = (function (){var statearr_42497 = f__17682__auto__.call(null);
(statearr_42497[(6)] = c__17681__auto___42498);

return statearr_42497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___42498,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__9659__auto__ = (((p == null))?null:p);
var m__9660__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9659__auto__)]);
if(!((m__9660__auto__ == null))){
return m__9660__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__9660__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__9660__auto____$1 == null))){
return m__9660__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__9659__auto__ = (((p == null))?null:p);
var m__9660__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9659__auto__)]);
if(!((m__9660__auto__ == null))){
return m__9660__auto__.call(null,p,v,ch);
} else {
var m__9660__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__9660__auto____$1 == null))){
return m__9660__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__42548 = arguments.length;
switch (G__42548) {
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
var x__9659__auto__ = (((p == null))?null:p);
var m__9660__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9659__auto__)]);
if(!((m__9660__auto__ == null))){
return m__9660__auto__.call(null,p);
} else {
var m__9660__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9660__auto____$1 == null))){
return m__9660__auto____$1.call(null,p);
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
var x__9659__auto__ = (((p == null))?null:p);
var m__9660__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9659__auto__)]);
if(!((m__9660__auto__ == null))){
return m__9660__auto__.call(null,p,v);
} else {
var m__9660__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9660__auto____$1 == null))){
return m__9660__auto____$1.call(null,p,v);
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
var G__42552 = arguments.length;
switch (G__42552) {
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
var or__8926__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__8926__auto__)){
return or__8926__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8926__auto__,mults){
return (function (p1__42550_SHARP_){
if(cljs.core.truth_(p1__42550_SHARP_.call(null,topic))){
return p1__42550_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42550_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8926__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async42553 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42553 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42554){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42554 = meta42554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42555,meta42554__$1){
var self__ = this;
var _42555__$1 = this;
return (new cljs.core.async.t_cljs$core$async42553(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42554__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42553.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42555){
var self__ = this;
var _42555__$1 = this;
return self__.meta42554;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42553.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42553.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42553.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42553.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42553.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async42553.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42553.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42553.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42554","meta42554",-1824051050,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42553.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42553";

cljs.core.async.t_cljs$core$async42553.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async/t_cljs$core$async42553");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async42553 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42553(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42554){
return (new cljs.core.async.t_cljs$core$async42553(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42554));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42553(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17681__auto___42673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___42673,mults,ensure_mult,p){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___42673,mults,ensure_mult,p){
return (function (state_42627){
var state_val_42628 = (state_42627[(1)]);
if((state_val_42628 === (7))){
var inst_42623 = (state_42627[(2)]);
var state_42627__$1 = state_42627;
var statearr_42629_42674 = state_42627__$1;
(statearr_42629_42674[(2)] = inst_42623);

(statearr_42629_42674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42628 === (20))){
var state_42627__$1 = state_42627;
var statearr_42630_42675 = state_42627__$1;
(statearr_42630_42675[(2)] = null);

(statearr_42630_42675[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42628 === (1))){
var state_42627__$1 = state_42627;
var statearr_42631_42676 = state_42627__$1;
(statearr_42631_42676[(2)] = null);

(statearr_42631_42676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42628 === (24))){
var inst_42606 = (state_42627[(7)]);
var inst_42615 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42606);
var state_42627__$1 = state_42627;
var statearr_42632_42677 = state_42627__$1;
(statearr_42632_42677[(2)] = inst_42615);

(statearr_42632_42677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42628 === (4))){
var inst_42558 = (state_42627[(8)]);
var inst_42558__$1 = (state_42627[(2)]);
var inst_42559 = (inst_42558__$1 == null);
var state_42627__$1 = (function (){var statearr_42633 = state_42627;
(statearr_42633[(8)] = inst_42558__$1);

return statearr_42633;
})();
if(cljs.core.truth_(inst_42559)){
var statearr_42634_42678 = state_42627__$1;
(statearr_42634_42678[(1)] = (5));

} else {
var statearr_42635_42679 = state_42627__$1;
(statearr_42635_42679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42628 === (15))){
var inst_42600 = (state_42627[(2)]);
var state_42627__$1 = state_42627;
var statearr_42636_42680 = state_42627__$1;
(statearr_42636_42680[(2)] = inst_42600);

(statearr_42636_42680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42628 === (21))){
var inst_42620 = (state_42627[(2)]);
var state_42627__$1 = (function (){var statearr_42637 = state_42627;
(statearr_42637[(9)] = inst_42620);

return statearr_42637;
})();
var statearr_42638_42681 = state_42627__$1;
(statearr_42638_42681[(2)] = null);

(statearr_42638_42681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42628 === (13))){
var inst_42582 = (state_42627[(10)]);
var inst_42584 = cljs.core.chunked_seq_QMARK_.call(null,inst_42582);
var state_42627__$1 = state_42627;
if(inst_42584){
var statearr_42639_42682 = state_42627__$1;
(statearr_42639_42682[(1)] = (16));

} else {
var statearr_42640_42683 = state_42627__$1;
(statearr_42640_42683[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42628 === (22))){
var inst_42612 = (state_42627[(2)]);
var state_42627__$1 = state_42627;
if(cljs.core.truth_(inst_42612)){
var statearr_42641_42684 = state_42627__$1;
(statearr_42641_42684[(1)] = (23));

} else {
var statearr_42642_42685 = state_42627__$1;
(statearr_42642_42685[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42628 === (6))){
var inst_42606 = (state_42627[(7)]);
var inst_42608 = (state_42627[(11)]);
var inst_42558 = (state_42627[(8)]);
var inst_42606__$1 = topic_fn.call(null,inst_42558);
var inst_42607 = cljs.core.deref.call(null,mults);
var inst_42608__$1 = cljs.core.get.call(null,inst_42607,inst_42606__$1);
var state_42627__$1 = (function (){var statearr_42643 = state_42627;
(statearr_42643[(7)] = inst_42606__$1);

(statearr_42643[(11)] = inst_42608__$1);

return statearr_42643;
})();
if(cljs.core.truth_(inst_42608__$1)){
var statearr_42644_42686 = state_42627__$1;
(statearr_42644_42686[(1)] = (19));

} else {
var statearr_42645_42687 = state_42627__$1;
(statearr_42645_42687[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42628 === (25))){
var inst_42617 = (state_42627[(2)]);
var state_42627__$1 = state_42627;
var statearr_42646_42688 = state_42627__$1;
(statearr_42646_42688[(2)] = inst_42617);

(statearr_42646_42688[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42628 === (17))){
var inst_42582 = (state_42627[(10)]);
var inst_42591 = cljs.core.first.call(null,inst_42582);
var inst_42592 = cljs.core.async.muxch_STAR_.call(null,inst_42591);
var inst_42593 = cljs.core.async.close_BANG_.call(null,inst_42592);
var inst_42594 = cljs.core.next.call(null,inst_42582);
var inst_42568 = inst_42594;
var inst_42569 = null;
var inst_42570 = (0);
var inst_42571 = (0);
var state_42627__$1 = (function (){var statearr_42647 = state_42627;
(statearr_42647[(12)] = inst_42571);

(statearr_42647[(13)] = inst_42593);

(statearr_42647[(14)] = inst_42568);

(statearr_42647[(15)] = inst_42570);

(statearr_42647[(16)] = inst_42569);

return statearr_42647;
})();
var statearr_42648_42689 = state_42627__$1;
(statearr_42648_42689[(2)] = null);

(statearr_42648_42689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42628 === (3))){
var inst_42625 = (state_42627[(2)]);
var state_42627__$1 = state_42627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42627__$1,inst_42625);
} else {
if((state_val_42628 === (12))){
var inst_42602 = (state_42627[(2)]);
var state_42627__$1 = state_42627;
var statearr_42649_42690 = state_42627__$1;
(statearr_42649_42690[(2)] = inst_42602);

(statearr_42649_42690[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42628 === (2))){
var state_42627__$1 = state_42627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42627__$1,(4),ch);
} else {
if((state_val_42628 === (23))){
var state_42627__$1 = state_42627;
var statearr_42650_42691 = state_42627__$1;
(statearr_42650_42691[(2)] = null);

(statearr_42650_42691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42628 === (19))){
var inst_42608 = (state_42627[(11)]);
var inst_42558 = (state_42627[(8)]);
var inst_42610 = cljs.core.async.muxch_STAR_.call(null,inst_42608);
var state_42627__$1 = state_42627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42627__$1,(22),inst_42610,inst_42558);
} else {
if((state_val_42628 === (11))){
var inst_42568 = (state_42627[(14)]);
var inst_42582 = (state_42627[(10)]);
var inst_42582__$1 = cljs.core.seq.call(null,inst_42568);
var state_42627__$1 = (function (){var statearr_42651 = state_42627;
(statearr_42651[(10)] = inst_42582__$1);

return statearr_42651;
})();
if(inst_42582__$1){
var statearr_42652_42692 = state_42627__$1;
(statearr_42652_42692[(1)] = (13));

} else {
var statearr_42653_42693 = state_42627__$1;
(statearr_42653_42693[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42628 === (9))){
var inst_42604 = (state_42627[(2)]);
var state_42627__$1 = state_42627;
var statearr_42654_42694 = state_42627__$1;
(statearr_42654_42694[(2)] = inst_42604);

(statearr_42654_42694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42628 === (5))){
var inst_42565 = cljs.core.deref.call(null,mults);
var inst_42566 = cljs.core.vals.call(null,inst_42565);
var inst_42567 = cljs.core.seq.call(null,inst_42566);
var inst_42568 = inst_42567;
var inst_42569 = null;
var inst_42570 = (0);
var inst_42571 = (0);
var state_42627__$1 = (function (){var statearr_42655 = state_42627;
(statearr_42655[(12)] = inst_42571);

(statearr_42655[(14)] = inst_42568);

(statearr_42655[(15)] = inst_42570);

(statearr_42655[(16)] = inst_42569);

return statearr_42655;
})();
var statearr_42656_42695 = state_42627__$1;
(statearr_42656_42695[(2)] = null);

(statearr_42656_42695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42628 === (14))){
var state_42627__$1 = state_42627;
var statearr_42660_42696 = state_42627__$1;
(statearr_42660_42696[(2)] = null);

(statearr_42660_42696[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42628 === (16))){
var inst_42582 = (state_42627[(10)]);
var inst_42586 = cljs.core.chunk_first.call(null,inst_42582);
var inst_42587 = cljs.core.chunk_rest.call(null,inst_42582);
var inst_42588 = cljs.core.count.call(null,inst_42586);
var inst_42568 = inst_42587;
var inst_42569 = inst_42586;
var inst_42570 = inst_42588;
var inst_42571 = (0);
var state_42627__$1 = (function (){var statearr_42661 = state_42627;
(statearr_42661[(12)] = inst_42571);

(statearr_42661[(14)] = inst_42568);

(statearr_42661[(15)] = inst_42570);

(statearr_42661[(16)] = inst_42569);

return statearr_42661;
})();
var statearr_42662_42697 = state_42627__$1;
(statearr_42662_42697[(2)] = null);

(statearr_42662_42697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42628 === (10))){
var inst_42571 = (state_42627[(12)]);
var inst_42568 = (state_42627[(14)]);
var inst_42570 = (state_42627[(15)]);
var inst_42569 = (state_42627[(16)]);
var inst_42576 = cljs.core._nth.call(null,inst_42569,inst_42571);
var inst_42577 = cljs.core.async.muxch_STAR_.call(null,inst_42576);
var inst_42578 = cljs.core.async.close_BANG_.call(null,inst_42577);
var inst_42579 = (inst_42571 + (1));
var tmp42657 = inst_42568;
var tmp42658 = inst_42570;
var tmp42659 = inst_42569;
var inst_42568__$1 = tmp42657;
var inst_42569__$1 = tmp42659;
var inst_42570__$1 = tmp42658;
var inst_42571__$1 = inst_42579;
var state_42627__$1 = (function (){var statearr_42663 = state_42627;
(statearr_42663[(12)] = inst_42571__$1);

(statearr_42663[(14)] = inst_42568__$1);

(statearr_42663[(15)] = inst_42570__$1);

(statearr_42663[(16)] = inst_42569__$1);

(statearr_42663[(17)] = inst_42578);

return statearr_42663;
})();
var statearr_42664_42698 = state_42627__$1;
(statearr_42664_42698[(2)] = null);

(statearr_42664_42698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42628 === (18))){
var inst_42597 = (state_42627[(2)]);
var state_42627__$1 = state_42627;
var statearr_42665_42699 = state_42627__$1;
(statearr_42665_42699[(2)] = inst_42597);

(statearr_42665_42699[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42628 === (8))){
var inst_42571 = (state_42627[(12)]);
var inst_42570 = (state_42627[(15)]);
var inst_42573 = (inst_42571 < inst_42570);
var inst_42574 = inst_42573;
var state_42627__$1 = state_42627;
if(cljs.core.truth_(inst_42574)){
var statearr_42666_42700 = state_42627__$1;
(statearr_42666_42700[(1)] = (10));

} else {
var statearr_42667_42701 = state_42627__$1;
(statearr_42667_42701[(1)] = (11));

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
});})(c__17681__auto___42673,mults,ensure_mult,p))
;
return ((function (switch__17591__auto__,c__17681__auto___42673,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17592__auto__ = null;
var cljs$core$async$state_machine__17592__auto____0 = (function (){
var statearr_42668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42668[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_42668[(1)] = (1));

return statearr_42668;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_42627){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_42627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e42669){if((e42669 instanceof Object)){
var ex__17595__auto__ = e42669;
var statearr_42670_42702 = state_42627;
(statearr_42670_42702[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42703 = state_42627;
state_42627 = G__42703;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_42627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_42627);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___42673,mults,ensure_mult,p))
})();
var state__17683__auto__ = (function (){var statearr_42671 = f__17682__auto__.call(null);
(statearr_42671[(6)] = c__17681__auto___42673);

return statearr_42671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___42673,mults,ensure_mult,p))
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
var G__42705 = arguments.length;
switch (G__42705) {
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
var G__42708 = arguments.length;
switch (G__42708) {
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
var G__42711 = arguments.length;
switch (G__42711) {
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
var c__17681__auto___42778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___42778,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___42778,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42750){
var state_val_42751 = (state_42750[(1)]);
if((state_val_42751 === (7))){
var state_42750__$1 = state_42750;
var statearr_42752_42779 = state_42750__$1;
(statearr_42752_42779[(2)] = null);

(statearr_42752_42779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42751 === (1))){
var state_42750__$1 = state_42750;
var statearr_42753_42780 = state_42750__$1;
(statearr_42753_42780[(2)] = null);

(statearr_42753_42780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42751 === (4))){
var inst_42714 = (state_42750[(7)]);
var inst_42716 = (inst_42714 < cnt);
var state_42750__$1 = state_42750;
if(cljs.core.truth_(inst_42716)){
var statearr_42754_42781 = state_42750__$1;
(statearr_42754_42781[(1)] = (6));

} else {
var statearr_42755_42782 = state_42750__$1;
(statearr_42755_42782[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42751 === (15))){
var inst_42746 = (state_42750[(2)]);
var state_42750__$1 = state_42750;
var statearr_42756_42783 = state_42750__$1;
(statearr_42756_42783[(2)] = inst_42746);

(statearr_42756_42783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42751 === (13))){
var inst_42739 = cljs.core.async.close_BANG_.call(null,out);
var state_42750__$1 = state_42750;
var statearr_42757_42784 = state_42750__$1;
(statearr_42757_42784[(2)] = inst_42739);

(statearr_42757_42784[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42751 === (6))){
var state_42750__$1 = state_42750;
var statearr_42758_42785 = state_42750__$1;
(statearr_42758_42785[(2)] = null);

(statearr_42758_42785[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42751 === (3))){
var inst_42748 = (state_42750[(2)]);
var state_42750__$1 = state_42750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42750__$1,inst_42748);
} else {
if((state_val_42751 === (12))){
var inst_42736 = (state_42750[(8)]);
var inst_42736__$1 = (state_42750[(2)]);
var inst_42737 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42736__$1);
var state_42750__$1 = (function (){var statearr_42759 = state_42750;
(statearr_42759[(8)] = inst_42736__$1);

return statearr_42759;
})();
if(cljs.core.truth_(inst_42737)){
var statearr_42760_42786 = state_42750__$1;
(statearr_42760_42786[(1)] = (13));

} else {
var statearr_42761_42787 = state_42750__$1;
(statearr_42761_42787[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42751 === (2))){
var inst_42713 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42714 = (0);
var state_42750__$1 = (function (){var statearr_42762 = state_42750;
(statearr_42762[(7)] = inst_42714);

(statearr_42762[(9)] = inst_42713);

return statearr_42762;
})();
var statearr_42763_42788 = state_42750__$1;
(statearr_42763_42788[(2)] = null);

(statearr_42763_42788[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42751 === (11))){
var inst_42714 = (state_42750[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42750,(10),Object,null,(9));
var inst_42723 = chs__$1.call(null,inst_42714);
var inst_42724 = done.call(null,inst_42714);
var inst_42725 = cljs.core.async.take_BANG_.call(null,inst_42723,inst_42724);
var state_42750__$1 = state_42750;
var statearr_42764_42789 = state_42750__$1;
(statearr_42764_42789[(2)] = inst_42725);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42750__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42751 === (9))){
var inst_42714 = (state_42750[(7)]);
var inst_42727 = (state_42750[(2)]);
var inst_42728 = (inst_42714 + (1));
var inst_42714__$1 = inst_42728;
var state_42750__$1 = (function (){var statearr_42765 = state_42750;
(statearr_42765[(7)] = inst_42714__$1);

(statearr_42765[(10)] = inst_42727);

return statearr_42765;
})();
var statearr_42766_42790 = state_42750__$1;
(statearr_42766_42790[(2)] = null);

(statearr_42766_42790[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42751 === (5))){
var inst_42734 = (state_42750[(2)]);
var state_42750__$1 = (function (){var statearr_42767 = state_42750;
(statearr_42767[(11)] = inst_42734);

return statearr_42767;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42750__$1,(12),dchan);
} else {
if((state_val_42751 === (14))){
var inst_42736 = (state_42750[(8)]);
var inst_42741 = cljs.core.apply.call(null,f,inst_42736);
var state_42750__$1 = state_42750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42750__$1,(16),out,inst_42741);
} else {
if((state_val_42751 === (16))){
var inst_42743 = (state_42750[(2)]);
var state_42750__$1 = (function (){var statearr_42768 = state_42750;
(statearr_42768[(12)] = inst_42743);

return statearr_42768;
})();
var statearr_42769_42791 = state_42750__$1;
(statearr_42769_42791[(2)] = null);

(statearr_42769_42791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42751 === (10))){
var inst_42718 = (state_42750[(2)]);
var inst_42719 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42750__$1 = (function (){var statearr_42770 = state_42750;
(statearr_42770[(13)] = inst_42718);

return statearr_42770;
})();
var statearr_42771_42792 = state_42750__$1;
(statearr_42771_42792[(2)] = inst_42719);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42750__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42751 === (8))){
var inst_42732 = (state_42750[(2)]);
var state_42750__$1 = state_42750;
var statearr_42772_42793 = state_42750__$1;
(statearr_42772_42793[(2)] = inst_42732);

(statearr_42772_42793[(1)] = (5));


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
});})(c__17681__auto___42778,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17591__auto__,c__17681__auto___42778,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17592__auto__ = null;
var cljs$core$async$state_machine__17592__auto____0 = (function (){
var statearr_42773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42773[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_42773[(1)] = (1));

return statearr_42773;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_42750){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_42750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e42774){if((e42774 instanceof Object)){
var ex__17595__auto__ = e42774;
var statearr_42775_42794 = state_42750;
(statearr_42775_42794[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42795 = state_42750;
state_42750 = G__42795;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_42750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_42750);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___42778,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17683__auto__ = (function (){var statearr_42776 = f__17682__auto__.call(null);
(statearr_42776[(6)] = c__17681__auto___42778);

return statearr_42776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___42778,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__42798 = arguments.length;
switch (G__42798) {
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
var c__17681__auto___42852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___42852,out){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___42852,out){
return (function (state_42830){
var state_val_42831 = (state_42830[(1)]);
if((state_val_42831 === (7))){
var inst_42810 = (state_42830[(7)]);
var inst_42809 = (state_42830[(8)]);
var inst_42809__$1 = (state_42830[(2)]);
var inst_42810__$1 = cljs.core.nth.call(null,inst_42809__$1,(0),null);
var inst_42811 = cljs.core.nth.call(null,inst_42809__$1,(1),null);
var inst_42812 = (inst_42810__$1 == null);
var state_42830__$1 = (function (){var statearr_42832 = state_42830;
(statearr_42832[(9)] = inst_42811);

(statearr_42832[(7)] = inst_42810__$1);

(statearr_42832[(8)] = inst_42809__$1);

return statearr_42832;
})();
if(cljs.core.truth_(inst_42812)){
var statearr_42833_42853 = state_42830__$1;
(statearr_42833_42853[(1)] = (8));

} else {
var statearr_42834_42854 = state_42830__$1;
(statearr_42834_42854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (1))){
var inst_42799 = cljs.core.vec.call(null,chs);
var inst_42800 = inst_42799;
var state_42830__$1 = (function (){var statearr_42835 = state_42830;
(statearr_42835[(10)] = inst_42800);

return statearr_42835;
})();
var statearr_42836_42855 = state_42830__$1;
(statearr_42836_42855[(2)] = null);

(statearr_42836_42855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (4))){
var inst_42800 = (state_42830[(10)]);
var state_42830__$1 = state_42830;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42830__$1,(7),inst_42800);
} else {
if((state_val_42831 === (6))){
var inst_42826 = (state_42830[(2)]);
var state_42830__$1 = state_42830;
var statearr_42837_42856 = state_42830__$1;
(statearr_42837_42856[(2)] = inst_42826);

(statearr_42837_42856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (3))){
var inst_42828 = (state_42830[(2)]);
var state_42830__$1 = state_42830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42830__$1,inst_42828);
} else {
if((state_val_42831 === (2))){
var inst_42800 = (state_42830[(10)]);
var inst_42802 = cljs.core.count.call(null,inst_42800);
var inst_42803 = (inst_42802 > (0));
var state_42830__$1 = state_42830;
if(cljs.core.truth_(inst_42803)){
var statearr_42839_42857 = state_42830__$1;
(statearr_42839_42857[(1)] = (4));

} else {
var statearr_42840_42858 = state_42830__$1;
(statearr_42840_42858[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (11))){
var inst_42800 = (state_42830[(10)]);
var inst_42819 = (state_42830[(2)]);
var tmp42838 = inst_42800;
var inst_42800__$1 = tmp42838;
var state_42830__$1 = (function (){var statearr_42841 = state_42830;
(statearr_42841[(11)] = inst_42819);

(statearr_42841[(10)] = inst_42800__$1);

return statearr_42841;
})();
var statearr_42842_42859 = state_42830__$1;
(statearr_42842_42859[(2)] = null);

(statearr_42842_42859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (9))){
var inst_42810 = (state_42830[(7)]);
var state_42830__$1 = state_42830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42830__$1,(11),out,inst_42810);
} else {
if((state_val_42831 === (5))){
var inst_42824 = cljs.core.async.close_BANG_.call(null,out);
var state_42830__$1 = state_42830;
var statearr_42843_42860 = state_42830__$1;
(statearr_42843_42860[(2)] = inst_42824);

(statearr_42843_42860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (10))){
var inst_42822 = (state_42830[(2)]);
var state_42830__$1 = state_42830;
var statearr_42844_42861 = state_42830__$1;
(statearr_42844_42861[(2)] = inst_42822);

(statearr_42844_42861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (8))){
var inst_42811 = (state_42830[(9)]);
var inst_42810 = (state_42830[(7)]);
var inst_42809 = (state_42830[(8)]);
var inst_42800 = (state_42830[(10)]);
var inst_42814 = (function (){var cs = inst_42800;
var vec__42805 = inst_42809;
var v = inst_42810;
var c = inst_42811;
return ((function (cs,vec__42805,v,c,inst_42811,inst_42810,inst_42809,inst_42800,state_val_42831,c__17681__auto___42852,out){
return (function (p1__42796_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42796_SHARP_);
});
;})(cs,vec__42805,v,c,inst_42811,inst_42810,inst_42809,inst_42800,state_val_42831,c__17681__auto___42852,out))
})();
var inst_42815 = cljs.core.filterv.call(null,inst_42814,inst_42800);
var inst_42800__$1 = inst_42815;
var state_42830__$1 = (function (){var statearr_42845 = state_42830;
(statearr_42845[(10)] = inst_42800__$1);

return statearr_42845;
})();
var statearr_42846_42862 = state_42830__$1;
(statearr_42846_42862[(2)] = null);

(statearr_42846_42862[(1)] = (2));


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
});})(c__17681__auto___42852,out))
;
return ((function (switch__17591__auto__,c__17681__auto___42852,out){
return (function() {
var cljs$core$async$state_machine__17592__auto__ = null;
var cljs$core$async$state_machine__17592__auto____0 = (function (){
var statearr_42847 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42847[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_42847[(1)] = (1));

return statearr_42847;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_42830){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_42830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e42848){if((e42848 instanceof Object)){
var ex__17595__auto__ = e42848;
var statearr_42849_42863 = state_42830;
(statearr_42849_42863[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42864 = state_42830;
state_42830 = G__42864;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_42830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_42830);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___42852,out))
})();
var state__17683__auto__ = (function (){var statearr_42850 = f__17682__auto__.call(null);
(statearr_42850[(6)] = c__17681__auto___42852);

return statearr_42850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___42852,out))
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
var G__42866 = arguments.length;
switch (G__42866) {
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
var c__17681__auto___42911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___42911,out){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___42911,out){
return (function (state_42890){
var state_val_42891 = (state_42890[(1)]);
if((state_val_42891 === (7))){
var inst_42872 = (state_42890[(7)]);
var inst_42872__$1 = (state_42890[(2)]);
var inst_42873 = (inst_42872__$1 == null);
var inst_42874 = cljs.core.not.call(null,inst_42873);
var state_42890__$1 = (function (){var statearr_42892 = state_42890;
(statearr_42892[(7)] = inst_42872__$1);

return statearr_42892;
})();
if(inst_42874){
var statearr_42893_42912 = state_42890__$1;
(statearr_42893_42912[(1)] = (8));

} else {
var statearr_42894_42913 = state_42890__$1;
(statearr_42894_42913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42891 === (1))){
var inst_42867 = (0);
var state_42890__$1 = (function (){var statearr_42895 = state_42890;
(statearr_42895[(8)] = inst_42867);

return statearr_42895;
})();
var statearr_42896_42914 = state_42890__$1;
(statearr_42896_42914[(2)] = null);

(statearr_42896_42914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42891 === (4))){
var state_42890__$1 = state_42890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42890__$1,(7),ch);
} else {
if((state_val_42891 === (6))){
var inst_42885 = (state_42890[(2)]);
var state_42890__$1 = state_42890;
var statearr_42897_42915 = state_42890__$1;
(statearr_42897_42915[(2)] = inst_42885);

(statearr_42897_42915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42891 === (3))){
var inst_42887 = (state_42890[(2)]);
var inst_42888 = cljs.core.async.close_BANG_.call(null,out);
var state_42890__$1 = (function (){var statearr_42898 = state_42890;
(statearr_42898[(9)] = inst_42887);

return statearr_42898;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42890__$1,inst_42888);
} else {
if((state_val_42891 === (2))){
var inst_42867 = (state_42890[(8)]);
var inst_42869 = (inst_42867 < n);
var state_42890__$1 = state_42890;
if(cljs.core.truth_(inst_42869)){
var statearr_42899_42916 = state_42890__$1;
(statearr_42899_42916[(1)] = (4));

} else {
var statearr_42900_42917 = state_42890__$1;
(statearr_42900_42917[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42891 === (11))){
var inst_42867 = (state_42890[(8)]);
var inst_42877 = (state_42890[(2)]);
var inst_42878 = (inst_42867 + (1));
var inst_42867__$1 = inst_42878;
var state_42890__$1 = (function (){var statearr_42901 = state_42890;
(statearr_42901[(10)] = inst_42877);

(statearr_42901[(8)] = inst_42867__$1);

return statearr_42901;
})();
var statearr_42902_42918 = state_42890__$1;
(statearr_42902_42918[(2)] = null);

(statearr_42902_42918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42891 === (9))){
var state_42890__$1 = state_42890;
var statearr_42903_42919 = state_42890__$1;
(statearr_42903_42919[(2)] = null);

(statearr_42903_42919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42891 === (5))){
var state_42890__$1 = state_42890;
var statearr_42904_42920 = state_42890__$1;
(statearr_42904_42920[(2)] = null);

(statearr_42904_42920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42891 === (10))){
var inst_42882 = (state_42890[(2)]);
var state_42890__$1 = state_42890;
var statearr_42905_42921 = state_42890__$1;
(statearr_42905_42921[(2)] = inst_42882);

(statearr_42905_42921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42891 === (8))){
var inst_42872 = (state_42890[(7)]);
var state_42890__$1 = state_42890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42890__$1,(11),out,inst_42872);
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
});})(c__17681__auto___42911,out))
;
return ((function (switch__17591__auto__,c__17681__auto___42911,out){
return (function() {
var cljs$core$async$state_machine__17592__auto__ = null;
var cljs$core$async$state_machine__17592__auto____0 = (function (){
var statearr_42906 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42906[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_42906[(1)] = (1));

return statearr_42906;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_42890){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_42890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e42907){if((e42907 instanceof Object)){
var ex__17595__auto__ = e42907;
var statearr_42908_42922 = state_42890;
(statearr_42908_42922[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42923 = state_42890;
state_42890 = G__42923;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_42890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_42890);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___42911,out))
})();
var state__17683__auto__ = (function (){var statearr_42909 = f__17682__auto__.call(null);
(statearr_42909[(6)] = c__17681__auto___42911);

return statearr_42909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___42911,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42925 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42925 = (function (f,ch,meta42926){
this.f = f;
this.ch = ch;
this.meta42926 = meta42926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42927,meta42926__$1){
var self__ = this;
var _42927__$1 = this;
return (new cljs.core.async.t_cljs$core$async42925(self__.f,self__.ch,meta42926__$1));
});

cljs.core.async.t_cljs$core$async42925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42927){
var self__ = this;
var _42927__$1 = this;
return self__.meta42926;
});

cljs.core.async.t_cljs$core$async42925.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42925.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42925.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42925.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42925.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async42928 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42928 = (function (f,ch,meta42926,_,fn1,meta42929){
this.f = f;
this.ch = ch;
this.meta42926 = meta42926;
this._ = _;
this.fn1 = fn1;
this.meta42929 = meta42929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42930,meta42929__$1){
var self__ = this;
var _42930__$1 = this;
return (new cljs.core.async.t_cljs$core$async42928(self__.f,self__.ch,self__.meta42926,self__._,self__.fn1,meta42929__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42928.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42930){
var self__ = this;
var _42930__$1 = this;
return self__.meta42929;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42928.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42928.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42928.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42928.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42924_SHARP_){
return f1.call(null,(((p1__42924_SHARP_ == null))?null:self__.f.call(null,p1__42924_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42928.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42926","meta42926",1309369060,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42925","cljs.core.async/t_cljs$core$async42925",489718394,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42929","meta42929",694345892,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42928.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42928.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42928";

cljs.core.async.t_cljs$core$async42928.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async/t_cljs$core$async42928");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async42928 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42928(f__$1,ch__$1,meta42926__$1,___$2,fn1__$1,meta42929){
return (new cljs.core.async.t_cljs$core$async42928(f__$1,ch__$1,meta42926__$1,___$2,fn1__$1,meta42929));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42928(self__.f,self__.ch,self__.meta42926,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8914__auto__ = ret;
if(cljs.core.truth_(and__8914__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__8914__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async42925.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42925.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42926","meta42926",1309369060,null)], null);
});

cljs.core.async.t_cljs$core$async42925.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42925";

cljs.core.async.t_cljs$core$async42925.cljs$lang$ctorPrWriter = (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async/t_cljs$core$async42925");
});

cljs.core.async.__GT_t_cljs$core$async42925 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42925(f__$1,ch__$1,meta42926){
return (new cljs.core.async.t_cljs$core$async42925(f__$1,ch__$1,meta42926));
});

}

return (new cljs.core.async.t_cljs$core$async42925(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42931 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42931 = (function (f,ch,meta42932){
this.f = f;
this.ch = ch;
this.meta42932 = meta42932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42933,meta42932__$1){
var self__ = this;
var _42933__$1 = this;
return (new cljs.core.async.t_cljs$core$async42931(self__.f,self__.ch,meta42932__$1));
});

cljs.core.async.t_cljs$core$async42931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42933){
var self__ = this;
var _42933__$1 = this;
return self__.meta42932;
});

cljs.core.async.t_cljs$core$async42931.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42931.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42931.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42931.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42931.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42931.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async42931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42932","meta42932",-1258722412,null)], null);
});

cljs.core.async.t_cljs$core$async42931.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42931";

cljs.core.async.t_cljs$core$async42931.cljs$lang$ctorPrWriter = (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async/t_cljs$core$async42931");
});

cljs.core.async.__GT_t_cljs$core$async42931 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42931(f__$1,ch__$1,meta42932){
return (new cljs.core.async.t_cljs$core$async42931(f__$1,ch__$1,meta42932));
});

}

return (new cljs.core.async.t_cljs$core$async42931(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async42934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42934 = (function (p,ch,meta42935){
this.p = p;
this.ch = ch;
this.meta42935 = meta42935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42936,meta42935__$1){
var self__ = this;
var _42936__$1 = this;
return (new cljs.core.async.t_cljs$core$async42934(self__.p,self__.ch,meta42935__$1));
});

cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42936){
var self__ = this;
var _42936__$1 = this;
return self__.meta42935;
});

cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42935","meta42935",1008613526,null)], null);
});

cljs.core.async.t_cljs$core$async42934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42934";

cljs.core.async.t_cljs$core$async42934.cljs$lang$ctorPrWriter = (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async/t_cljs$core$async42934");
});

cljs.core.async.__GT_t_cljs$core$async42934 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42934(p__$1,ch__$1,meta42935){
return (new cljs.core.async.t_cljs$core$async42934(p__$1,ch__$1,meta42935));
});

}

return (new cljs.core.async.t_cljs$core$async42934(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42938 = arguments.length;
switch (G__42938) {
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
var c__17681__auto___42978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___42978,out){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___42978,out){
return (function (state_42959){
var state_val_42960 = (state_42959[(1)]);
if((state_val_42960 === (7))){
var inst_42955 = (state_42959[(2)]);
var state_42959__$1 = state_42959;
var statearr_42961_42979 = state_42959__$1;
(statearr_42961_42979[(2)] = inst_42955);

(statearr_42961_42979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42960 === (1))){
var state_42959__$1 = state_42959;
var statearr_42962_42980 = state_42959__$1;
(statearr_42962_42980[(2)] = null);

(statearr_42962_42980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42960 === (4))){
var inst_42941 = (state_42959[(7)]);
var inst_42941__$1 = (state_42959[(2)]);
var inst_42942 = (inst_42941__$1 == null);
var state_42959__$1 = (function (){var statearr_42963 = state_42959;
(statearr_42963[(7)] = inst_42941__$1);

return statearr_42963;
})();
if(cljs.core.truth_(inst_42942)){
var statearr_42964_42981 = state_42959__$1;
(statearr_42964_42981[(1)] = (5));

} else {
var statearr_42965_42982 = state_42959__$1;
(statearr_42965_42982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42960 === (6))){
var inst_42941 = (state_42959[(7)]);
var inst_42946 = p.call(null,inst_42941);
var state_42959__$1 = state_42959;
if(cljs.core.truth_(inst_42946)){
var statearr_42966_42983 = state_42959__$1;
(statearr_42966_42983[(1)] = (8));

} else {
var statearr_42967_42984 = state_42959__$1;
(statearr_42967_42984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42960 === (3))){
var inst_42957 = (state_42959[(2)]);
var state_42959__$1 = state_42959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42959__$1,inst_42957);
} else {
if((state_val_42960 === (2))){
var state_42959__$1 = state_42959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42959__$1,(4),ch);
} else {
if((state_val_42960 === (11))){
var inst_42949 = (state_42959[(2)]);
var state_42959__$1 = state_42959;
var statearr_42968_42985 = state_42959__$1;
(statearr_42968_42985[(2)] = inst_42949);

(statearr_42968_42985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42960 === (9))){
var state_42959__$1 = state_42959;
var statearr_42969_42986 = state_42959__$1;
(statearr_42969_42986[(2)] = null);

(statearr_42969_42986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42960 === (5))){
var inst_42944 = cljs.core.async.close_BANG_.call(null,out);
var state_42959__$1 = state_42959;
var statearr_42970_42987 = state_42959__$1;
(statearr_42970_42987[(2)] = inst_42944);

(statearr_42970_42987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42960 === (10))){
var inst_42952 = (state_42959[(2)]);
var state_42959__$1 = (function (){var statearr_42971 = state_42959;
(statearr_42971[(8)] = inst_42952);

return statearr_42971;
})();
var statearr_42972_42988 = state_42959__$1;
(statearr_42972_42988[(2)] = null);

(statearr_42972_42988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42960 === (8))){
var inst_42941 = (state_42959[(7)]);
var state_42959__$1 = state_42959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42959__$1,(11),out,inst_42941);
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
});})(c__17681__auto___42978,out))
;
return ((function (switch__17591__auto__,c__17681__auto___42978,out){
return (function() {
var cljs$core$async$state_machine__17592__auto__ = null;
var cljs$core$async$state_machine__17592__auto____0 = (function (){
var statearr_42973 = [null,null,null,null,null,null,null,null,null];
(statearr_42973[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_42973[(1)] = (1));

return statearr_42973;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_42959){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_42959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e42974){if((e42974 instanceof Object)){
var ex__17595__auto__ = e42974;
var statearr_42975_42989 = state_42959;
(statearr_42975_42989[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42990 = state_42959;
state_42959 = G__42990;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_42959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_42959);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___42978,out))
})();
var state__17683__auto__ = (function (){var statearr_42976 = f__17682__auto__.call(null);
(statearr_42976[(6)] = c__17681__auto___42978);

return statearr_42976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___42978,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__42992 = arguments.length;
switch (G__42992) {
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
var c__17681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto__){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto__){
return (function (state_43055){
var state_val_43056 = (state_43055[(1)]);
if((state_val_43056 === (7))){
var inst_43051 = (state_43055[(2)]);
var state_43055__$1 = state_43055;
var statearr_43057_43095 = state_43055__$1;
(statearr_43057_43095[(2)] = inst_43051);

(statearr_43057_43095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (20))){
var inst_43021 = (state_43055[(7)]);
var inst_43032 = (state_43055[(2)]);
var inst_43033 = cljs.core.next.call(null,inst_43021);
var inst_43007 = inst_43033;
var inst_43008 = null;
var inst_43009 = (0);
var inst_43010 = (0);
var state_43055__$1 = (function (){var statearr_43058 = state_43055;
(statearr_43058[(8)] = inst_43009);

(statearr_43058[(9)] = inst_43007);

(statearr_43058[(10)] = inst_43010);

(statearr_43058[(11)] = inst_43008);

(statearr_43058[(12)] = inst_43032);

return statearr_43058;
})();
var statearr_43059_43096 = state_43055__$1;
(statearr_43059_43096[(2)] = null);

(statearr_43059_43096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (1))){
var state_43055__$1 = state_43055;
var statearr_43060_43097 = state_43055__$1;
(statearr_43060_43097[(2)] = null);

(statearr_43060_43097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (4))){
var inst_42996 = (state_43055[(13)]);
var inst_42996__$1 = (state_43055[(2)]);
var inst_42997 = (inst_42996__$1 == null);
var state_43055__$1 = (function (){var statearr_43061 = state_43055;
(statearr_43061[(13)] = inst_42996__$1);

return statearr_43061;
})();
if(cljs.core.truth_(inst_42997)){
var statearr_43062_43098 = state_43055__$1;
(statearr_43062_43098[(1)] = (5));

} else {
var statearr_43063_43099 = state_43055__$1;
(statearr_43063_43099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (15))){
var state_43055__$1 = state_43055;
var statearr_43067_43100 = state_43055__$1;
(statearr_43067_43100[(2)] = null);

(statearr_43067_43100[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (21))){
var state_43055__$1 = state_43055;
var statearr_43068_43101 = state_43055__$1;
(statearr_43068_43101[(2)] = null);

(statearr_43068_43101[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (13))){
var inst_43009 = (state_43055[(8)]);
var inst_43007 = (state_43055[(9)]);
var inst_43010 = (state_43055[(10)]);
var inst_43008 = (state_43055[(11)]);
var inst_43017 = (state_43055[(2)]);
var inst_43018 = (inst_43010 + (1));
var tmp43064 = inst_43009;
var tmp43065 = inst_43007;
var tmp43066 = inst_43008;
var inst_43007__$1 = tmp43065;
var inst_43008__$1 = tmp43066;
var inst_43009__$1 = tmp43064;
var inst_43010__$1 = inst_43018;
var state_43055__$1 = (function (){var statearr_43069 = state_43055;
(statearr_43069[(8)] = inst_43009__$1);

(statearr_43069[(14)] = inst_43017);

(statearr_43069[(9)] = inst_43007__$1);

(statearr_43069[(10)] = inst_43010__$1);

(statearr_43069[(11)] = inst_43008__$1);

return statearr_43069;
})();
var statearr_43070_43102 = state_43055__$1;
(statearr_43070_43102[(2)] = null);

(statearr_43070_43102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (22))){
var state_43055__$1 = state_43055;
var statearr_43071_43103 = state_43055__$1;
(statearr_43071_43103[(2)] = null);

(statearr_43071_43103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (6))){
var inst_42996 = (state_43055[(13)]);
var inst_43005 = f.call(null,inst_42996);
var inst_43006 = cljs.core.seq.call(null,inst_43005);
var inst_43007 = inst_43006;
var inst_43008 = null;
var inst_43009 = (0);
var inst_43010 = (0);
var state_43055__$1 = (function (){var statearr_43072 = state_43055;
(statearr_43072[(8)] = inst_43009);

(statearr_43072[(9)] = inst_43007);

(statearr_43072[(10)] = inst_43010);

(statearr_43072[(11)] = inst_43008);

return statearr_43072;
})();
var statearr_43073_43104 = state_43055__$1;
(statearr_43073_43104[(2)] = null);

(statearr_43073_43104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (17))){
var inst_43021 = (state_43055[(7)]);
var inst_43025 = cljs.core.chunk_first.call(null,inst_43021);
var inst_43026 = cljs.core.chunk_rest.call(null,inst_43021);
var inst_43027 = cljs.core.count.call(null,inst_43025);
var inst_43007 = inst_43026;
var inst_43008 = inst_43025;
var inst_43009 = inst_43027;
var inst_43010 = (0);
var state_43055__$1 = (function (){var statearr_43074 = state_43055;
(statearr_43074[(8)] = inst_43009);

(statearr_43074[(9)] = inst_43007);

(statearr_43074[(10)] = inst_43010);

(statearr_43074[(11)] = inst_43008);

return statearr_43074;
})();
var statearr_43075_43105 = state_43055__$1;
(statearr_43075_43105[(2)] = null);

(statearr_43075_43105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (3))){
var inst_43053 = (state_43055[(2)]);
var state_43055__$1 = state_43055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43055__$1,inst_43053);
} else {
if((state_val_43056 === (12))){
var inst_43041 = (state_43055[(2)]);
var state_43055__$1 = state_43055;
var statearr_43076_43106 = state_43055__$1;
(statearr_43076_43106[(2)] = inst_43041);

(statearr_43076_43106[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (2))){
var state_43055__$1 = state_43055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43055__$1,(4),in$);
} else {
if((state_val_43056 === (23))){
var inst_43049 = (state_43055[(2)]);
var state_43055__$1 = state_43055;
var statearr_43077_43107 = state_43055__$1;
(statearr_43077_43107[(2)] = inst_43049);

(statearr_43077_43107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (19))){
var inst_43036 = (state_43055[(2)]);
var state_43055__$1 = state_43055;
var statearr_43078_43108 = state_43055__$1;
(statearr_43078_43108[(2)] = inst_43036);

(statearr_43078_43108[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (11))){
var inst_43007 = (state_43055[(9)]);
var inst_43021 = (state_43055[(7)]);
var inst_43021__$1 = cljs.core.seq.call(null,inst_43007);
var state_43055__$1 = (function (){var statearr_43079 = state_43055;
(statearr_43079[(7)] = inst_43021__$1);

return statearr_43079;
})();
if(inst_43021__$1){
var statearr_43080_43109 = state_43055__$1;
(statearr_43080_43109[(1)] = (14));

} else {
var statearr_43081_43110 = state_43055__$1;
(statearr_43081_43110[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (9))){
var inst_43043 = (state_43055[(2)]);
var inst_43044 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43055__$1 = (function (){var statearr_43082 = state_43055;
(statearr_43082[(15)] = inst_43043);

return statearr_43082;
})();
if(cljs.core.truth_(inst_43044)){
var statearr_43083_43111 = state_43055__$1;
(statearr_43083_43111[(1)] = (21));

} else {
var statearr_43084_43112 = state_43055__$1;
(statearr_43084_43112[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (5))){
var inst_42999 = cljs.core.async.close_BANG_.call(null,out);
var state_43055__$1 = state_43055;
var statearr_43085_43113 = state_43055__$1;
(statearr_43085_43113[(2)] = inst_42999);

(statearr_43085_43113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (14))){
var inst_43021 = (state_43055[(7)]);
var inst_43023 = cljs.core.chunked_seq_QMARK_.call(null,inst_43021);
var state_43055__$1 = state_43055;
if(inst_43023){
var statearr_43086_43114 = state_43055__$1;
(statearr_43086_43114[(1)] = (17));

} else {
var statearr_43087_43115 = state_43055__$1;
(statearr_43087_43115[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (16))){
var inst_43039 = (state_43055[(2)]);
var state_43055__$1 = state_43055;
var statearr_43088_43116 = state_43055__$1;
(statearr_43088_43116[(2)] = inst_43039);

(statearr_43088_43116[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43056 === (10))){
var inst_43010 = (state_43055[(10)]);
var inst_43008 = (state_43055[(11)]);
var inst_43015 = cljs.core._nth.call(null,inst_43008,inst_43010);
var state_43055__$1 = state_43055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43055__$1,(13),out,inst_43015);
} else {
if((state_val_43056 === (18))){
var inst_43021 = (state_43055[(7)]);
var inst_43030 = cljs.core.first.call(null,inst_43021);
var state_43055__$1 = state_43055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43055__$1,(20),out,inst_43030);
} else {
if((state_val_43056 === (8))){
var inst_43009 = (state_43055[(8)]);
var inst_43010 = (state_43055[(10)]);
var inst_43012 = (inst_43010 < inst_43009);
var inst_43013 = inst_43012;
var state_43055__$1 = state_43055;
if(cljs.core.truth_(inst_43013)){
var statearr_43089_43117 = state_43055__$1;
(statearr_43089_43117[(1)] = (10));

} else {
var statearr_43090_43118 = state_43055__$1;
(statearr_43090_43118[(1)] = (11));

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
});})(c__17681__auto__))
;
return ((function (switch__17591__auto__,c__17681__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17592__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17592__auto____0 = (function (){
var statearr_43091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43091[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17592__auto__);

(statearr_43091[(1)] = (1));

return statearr_43091;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17592__auto____1 = (function (state_43055){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_43055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e43092){if((e43092 instanceof Object)){
var ex__17595__auto__ = e43092;
var statearr_43093_43119 = state_43055;
(statearr_43093_43119[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43120 = state_43055;
state_43055 = G__43120;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17592__auto__ = function(state_43055){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17592__auto____1.call(this,state_43055);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17592__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17592__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__))
})();
var state__17683__auto__ = (function (){var statearr_43094 = f__17682__auto__.call(null);
(statearr_43094[(6)] = c__17681__auto__);

return statearr_43094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto__))
);

return c__17681__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43122 = arguments.length;
switch (G__43122) {
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
var G__43125 = arguments.length;
switch (G__43125) {
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
var G__43128 = arguments.length;
switch (G__43128) {
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
var c__17681__auto___43175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___43175,out){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___43175,out){
return (function (state_43152){
var state_val_43153 = (state_43152[(1)]);
if((state_val_43153 === (7))){
var inst_43147 = (state_43152[(2)]);
var state_43152__$1 = state_43152;
var statearr_43154_43176 = state_43152__$1;
(statearr_43154_43176[(2)] = inst_43147);

(statearr_43154_43176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43153 === (1))){
var inst_43129 = null;
var state_43152__$1 = (function (){var statearr_43155 = state_43152;
(statearr_43155[(7)] = inst_43129);

return statearr_43155;
})();
var statearr_43156_43177 = state_43152__$1;
(statearr_43156_43177[(2)] = null);

(statearr_43156_43177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43153 === (4))){
var inst_43132 = (state_43152[(8)]);
var inst_43132__$1 = (state_43152[(2)]);
var inst_43133 = (inst_43132__$1 == null);
var inst_43134 = cljs.core.not.call(null,inst_43133);
var state_43152__$1 = (function (){var statearr_43157 = state_43152;
(statearr_43157[(8)] = inst_43132__$1);

return statearr_43157;
})();
if(inst_43134){
var statearr_43158_43178 = state_43152__$1;
(statearr_43158_43178[(1)] = (5));

} else {
var statearr_43159_43179 = state_43152__$1;
(statearr_43159_43179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43153 === (6))){
var state_43152__$1 = state_43152;
var statearr_43160_43180 = state_43152__$1;
(statearr_43160_43180[(2)] = null);

(statearr_43160_43180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43153 === (3))){
var inst_43149 = (state_43152[(2)]);
var inst_43150 = cljs.core.async.close_BANG_.call(null,out);
var state_43152__$1 = (function (){var statearr_43161 = state_43152;
(statearr_43161[(9)] = inst_43149);

return statearr_43161;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43152__$1,inst_43150);
} else {
if((state_val_43153 === (2))){
var state_43152__$1 = state_43152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43152__$1,(4),ch);
} else {
if((state_val_43153 === (11))){
var inst_43132 = (state_43152[(8)]);
var inst_43141 = (state_43152[(2)]);
var inst_43129 = inst_43132;
var state_43152__$1 = (function (){var statearr_43162 = state_43152;
(statearr_43162[(10)] = inst_43141);

(statearr_43162[(7)] = inst_43129);

return statearr_43162;
})();
var statearr_43163_43181 = state_43152__$1;
(statearr_43163_43181[(2)] = null);

(statearr_43163_43181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43153 === (9))){
var inst_43132 = (state_43152[(8)]);
var state_43152__$1 = state_43152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43152__$1,(11),out,inst_43132);
} else {
if((state_val_43153 === (5))){
var inst_43132 = (state_43152[(8)]);
var inst_43129 = (state_43152[(7)]);
var inst_43136 = cljs.core._EQ_.call(null,inst_43132,inst_43129);
var state_43152__$1 = state_43152;
if(inst_43136){
var statearr_43165_43182 = state_43152__$1;
(statearr_43165_43182[(1)] = (8));

} else {
var statearr_43166_43183 = state_43152__$1;
(statearr_43166_43183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43153 === (10))){
var inst_43144 = (state_43152[(2)]);
var state_43152__$1 = state_43152;
var statearr_43167_43184 = state_43152__$1;
(statearr_43167_43184[(2)] = inst_43144);

(statearr_43167_43184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43153 === (8))){
var inst_43129 = (state_43152[(7)]);
var tmp43164 = inst_43129;
var inst_43129__$1 = tmp43164;
var state_43152__$1 = (function (){var statearr_43168 = state_43152;
(statearr_43168[(7)] = inst_43129__$1);

return statearr_43168;
})();
var statearr_43169_43185 = state_43152__$1;
(statearr_43169_43185[(2)] = null);

(statearr_43169_43185[(1)] = (2));


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
});})(c__17681__auto___43175,out))
;
return ((function (switch__17591__auto__,c__17681__auto___43175,out){
return (function() {
var cljs$core$async$state_machine__17592__auto__ = null;
var cljs$core$async$state_machine__17592__auto____0 = (function (){
var statearr_43170 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43170[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_43170[(1)] = (1));

return statearr_43170;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_43152){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_43152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e43171){if((e43171 instanceof Object)){
var ex__17595__auto__ = e43171;
var statearr_43172_43186 = state_43152;
(statearr_43172_43186[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43187 = state_43152;
state_43152 = G__43187;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_43152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_43152);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___43175,out))
})();
var state__17683__auto__ = (function (){var statearr_43173 = f__17682__auto__.call(null);
(statearr_43173[(6)] = c__17681__auto___43175);

return statearr_43173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___43175,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43189 = arguments.length;
switch (G__43189) {
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
var c__17681__auto___43255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___43255,out){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___43255,out){
return (function (state_43227){
var state_val_43228 = (state_43227[(1)]);
if((state_val_43228 === (7))){
var inst_43223 = (state_43227[(2)]);
var state_43227__$1 = state_43227;
var statearr_43229_43256 = state_43227__$1;
(statearr_43229_43256[(2)] = inst_43223);

(statearr_43229_43256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43228 === (1))){
var inst_43190 = (new Array(n));
var inst_43191 = inst_43190;
var inst_43192 = (0);
var state_43227__$1 = (function (){var statearr_43230 = state_43227;
(statearr_43230[(7)] = inst_43192);

(statearr_43230[(8)] = inst_43191);

return statearr_43230;
})();
var statearr_43231_43257 = state_43227__$1;
(statearr_43231_43257[(2)] = null);

(statearr_43231_43257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43228 === (4))){
var inst_43195 = (state_43227[(9)]);
var inst_43195__$1 = (state_43227[(2)]);
var inst_43196 = (inst_43195__$1 == null);
var inst_43197 = cljs.core.not.call(null,inst_43196);
var state_43227__$1 = (function (){var statearr_43232 = state_43227;
(statearr_43232[(9)] = inst_43195__$1);

return statearr_43232;
})();
if(inst_43197){
var statearr_43233_43258 = state_43227__$1;
(statearr_43233_43258[(1)] = (5));

} else {
var statearr_43234_43259 = state_43227__$1;
(statearr_43234_43259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43228 === (15))){
var inst_43217 = (state_43227[(2)]);
var state_43227__$1 = state_43227;
var statearr_43235_43260 = state_43227__$1;
(statearr_43235_43260[(2)] = inst_43217);

(statearr_43235_43260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43228 === (13))){
var state_43227__$1 = state_43227;
var statearr_43236_43261 = state_43227__$1;
(statearr_43236_43261[(2)] = null);

(statearr_43236_43261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43228 === (6))){
var inst_43192 = (state_43227[(7)]);
var inst_43213 = (inst_43192 > (0));
var state_43227__$1 = state_43227;
if(cljs.core.truth_(inst_43213)){
var statearr_43237_43262 = state_43227__$1;
(statearr_43237_43262[(1)] = (12));

} else {
var statearr_43238_43263 = state_43227__$1;
(statearr_43238_43263[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43228 === (3))){
var inst_43225 = (state_43227[(2)]);
var state_43227__$1 = state_43227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43227__$1,inst_43225);
} else {
if((state_val_43228 === (12))){
var inst_43191 = (state_43227[(8)]);
var inst_43215 = cljs.core.vec.call(null,inst_43191);
var state_43227__$1 = state_43227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43227__$1,(15),out,inst_43215);
} else {
if((state_val_43228 === (2))){
var state_43227__$1 = state_43227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43227__$1,(4),ch);
} else {
if((state_val_43228 === (11))){
var inst_43207 = (state_43227[(2)]);
var inst_43208 = (new Array(n));
var inst_43191 = inst_43208;
var inst_43192 = (0);
var state_43227__$1 = (function (){var statearr_43239 = state_43227;
(statearr_43239[(10)] = inst_43207);

(statearr_43239[(7)] = inst_43192);

(statearr_43239[(8)] = inst_43191);

return statearr_43239;
})();
var statearr_43240_43264 = state_43227__$1;
(statearr_43240_43264[(2)] = null);

(statearr_43240_43264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43228 === (9))){
var inst_43191 = (state_43227[(8)]);
var inst_43205 = cljs.core.vec.call(null,inst_43191);
var state_43227__$1 = state_43227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43227__$1,(11),out,inst_43205);
} else {
if((state_val_43228 === (5))){
var inst_43195 = (state_43227[(9)]);
var inst_43192 = (state_43227[(7)]);
var inst_43191 = (state_43227[(8)]);
var inst_43200 = (state_43227[(11)]);
var inst_43199 = (inst_43191[inst_43192] = inst_43195);
var inst_43200__$1 = (inst_43192 + (1));
var inst_43201 = (inst_43200__$1 < n);
var state_43227__$1 = (function (){var statearr_43241 = state_43227;
(statearr_43241[(12)] = inst_43199);

(statearr_43241[(11)] = inst_43200__$1);

return statearr_43241;
})();
if(cljs.core.truth_(inst_43201)){
var statearr_43242_43265 = state_43227__$1;
(statearr_43242_43265[(1)] = (8));

} else {
var statearr_43243_43266 = state_43227__$1;
(statearr_43243_43266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43228 === (14))){
var inst_43220 = (state_43227[(2)]);
var inst_43221 = cljs.core.async.close_BANG_.call(null,out);
var state_43227__$1 = (function (){var statearr_43245 = state_43227;
(statearr_43245[(13)] = inst_43220);

return statearr_43245;
})();
var statearr_43246_43267 = state_43227__$1;
(statearr_43246_43267[(2)] = inst_43221);

(statearr_43246_43267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43228 === (10))){
var inst_43211 = (state_43227[(2)]);
var state_43227__$1 = state_43227;
var statearr_43247_43268 = state_43227__$1;
(statearr_43247_43268[(2)] = inst_43211);

(statearr_43247_43268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43228 === (8))){
var inst_43191 = (state_43227[(8)]);
var inst_43200 = (state_43227[(11)]);
var tmp43244 = inst_43191;
var inst_43191__$1 = tmp43244;
var inst_43192 = inst_43200;
var state_43227__$1 = (function (){var statearr_43248 = state_43227;
(statearr_43248[(7)] = inst_43192);

(statearr_43248[(8)] = inst_43191__$1);

return statearr_43248;
})();
var statearr_43249_43269 = state_43227__$1;
(statearr_43249_43269[(2)] = null);

(statearr_43249_43269[(1)] = (2));


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
});})(c__17681__auto___43255,out))
;
return ((function (switch__17591__auto__,c__17681__auto___43255,out){
return (function() {
var cljs$core$async$state_machine__17592__auto__ = null;
var cljs$core$async$state_machine__17592__auto____0 = (function (){
var statearr_43250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43250[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_43250[(1)] = (1));

return statearr_43250;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_43227){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_43227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e43251){if((e43251 instanceof Object)){
var ex__17595__auto__ = e43251;
var statearr_43252_43270 = state_43227;
(statearr_43252_43270[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43271 = state_43227;
state_43227 = G__43271;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_43227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_43227);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___43255,out))
})();
var state__17683__auto__ = (function (){var statearr_43253 = f__17682__auto__.call(null);
(statearr_43253[(6)] = c__17681__auto___43255);

return statearr_43253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___43255,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43273 = arguments.length;
switch (G__43273) {
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
var c__17681__auto___43343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___43343,out){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___43343,out){
return (function (state_43315){
var state_val_43316 = (state_43315[(1)]);
if((state_val_43316 === (7))){
var inst_43311 = (state_43315[(2)]);
var state_43315__$1 = state_43315;
var statearr_43317_43344 = state_43315__$1;
(statearr_43317_43344[(2)] = inst_43311);

(statearr_43317_43344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43316 === (1))){
var inst_43274 = [];
var inst_43275 = inst_43274;
var inst_43276 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43315__$1 = (function (){var statearr_43318 = state_43315;
(statearr_43318[(7)] = inst_43275);

(statearr_43318[(8)] = inst_43276);

return statearr_43318;
})();
var statearr_43319_43345 = state_43315__$1;
(statearr_43319_43345[(2)] = null);

(statearr_43319_43345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43316 === (4))){
var inst_43279 = (state_43315[(9)]);
var inst_43279__$1 = (state_43315[(2)]);
var inst_43280 = (inst_43279__$1 == null);
var inst_43281 = cljs.core.not.call(null,inst_43280);
var state_43315__$1 = (function (){var statearr_43320 = state_43315;
(statearr_43320[(9)] = inst_43279__$1);

return statearr_43320;
})();
if(inst_43281){
var statearr_43321_43346 = state_43315__$1;
(statearr_43321_43346[(1)] = (5));

} else {
var statearr_43322_43347 = state_43315__$1;
(statearr_43322_43347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43316 === (15))){
var inst_43305 = (state_43315[(2)]);
var state_43315__$1 = state_43315;
var statearr_43323_43348 = state_43315__$1;
(statearr_43323_43348[(2)] = inst_43305);

(statearr_43323_43348[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43316 === (13))){
var state_43315__$1 = state_43315;
var statearr_43324_43349 = state_43315__$1;
(statearr_43324_43349[(2)] = null);

(statearr_43324_43349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43316 === (6))){
var inst_43275 = (state_43315[(7)]);
var inst_43300 = inst_43275.length;
var inst_43301 = (inst_43300 > (0));
var state_43315__$1 = state_43315;
if(cljs.core.truth_(inst_43301)){
var statearr_43325_43350 = state_43315__$1;
(statearr_43325_43350[(1)] = (12));

} else {
var statearr_43326_43351 = state_43315__$1;
(statearr_43326_43351[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43316 === (3))){
var inst_43313 = (state_43315[(2)]);
var state_43315__$1 = state_43315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43315__$1,inst_43313);
} else {
if((state_val_43316 === (12))){
var inst_43275 = (state_43315[(7)]);
var inst_43303 = cljs.core.vec.call(null,inst_43275);
var state_43315__$1 = state_43315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43315__$1,(15),out,inst_43303);
} else {
if((state_val_43316 === (2))){
var state_43315__$1 = state_43315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43315__$1,(4),ch);
} else {
if((state_val_43316 === (11))){
var inst_43283 = (state_43315[(10)]);
var inst_43279 = (state_43315[(9)]);
var inst_43293 = (state_43315[(2)]);
var inst_43294 = [];
var inst_43295 = inst_43294.push(inst_43279);
var inst_43275 = inst_43294;
var inst_43276 = inst_43283;
var state_43315__$1 = (function (){var statearr_43327 = state_43315;
(statearr_43327[(11)] = inst_43293);

(statearr_43327[(7)] = inst_43275);

(statearr_43327[(12)] = inst_43295);

(statearr_43327[(8)] = inst_43276);

return statearr_43327;
})();
var statearr_43328_43352 = state_43315__$1;
(statearr_43328_43352[(2)] = null);

(statearr_43328_43352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43316 === (9))){
var inst_43275 = (state_43315[(7)]);
var inst_43291 = cljs.core.vec.call(null,inst_43275);
var state_43315__$1 = state_43315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43315__$1,(11),out,inst_43291);
} else {
if((state_val_43316 === (5))){
var inst_43283 = (state_43315[(10)]);
var inst_43276 = (state_43315[(8)]);
var inst_43279 = (state_43315[(9)]);
var inst_43283__$1 = f.call(null,inst_43279);
var inst_43284 = cljs.core._EQ_.call(null,inst_43283__$1,inst_43276);
var inst_43285 = cljs.core.keyword_identical_QMARK_.call(null,inst_43276,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43286 = (inst_43284) || (inst_43285);
var state_43315__$1 = (function (){var statearr_43329 = state_43315;
(statearr_43329[(10)] = inst_43283__$1);

return statearr_43329;
})();
if(cljs.core.truth_(inst_43286)){
var statearr_43330_43353 = state_43315__$1;
(statearr_43330_43353[(1)] = (8));

} else {
var statearr_43331_43354 = state_43315__$1;
(statearr_43331_43354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43316 === (14))){
var inst_43308 = (state_43315[(2)]);
var inst_43309 = cljs.core.async.close_BANG_.call(null,out);
var state_43315__$1 = (function (){var statearr_43333 = state_43315;
(statearr_43333[(13)] = inst_43308);

return statearr_43333;
})();
var statearr_43334_43355 = state_43315__$1;
(statearr_43334_43355[(2)] = inst_43309);

(statearr_43334_43355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43316 === (10))){
var inst_43298 = (state_43315[(2)]);
var state_43315__$1 = state_43315;
var statearr_43335_43356 = state_43315__$1;
(statearr_43335_43356[(2)] = inst_43298);

(statearr_43335_43356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43316 === (8))){
var inst_43275 = (state_43315[(7)]);
var inst_43283 = (state_43315[(10)]);
var inst_43279 = (state_43315[(9)]);
var inst_43288 = inst_43275.push(inst_43279);
var tmp43332 = inst_43275;
var inst_43275__$1 = tmp43332;
var inst_43276 = inst_43283;
var state_43315__$1 = (function (){var statearr_43336 = state_43315;
(statearr_43336[(14)] = inst_43288);

(statearr_43336[(7)] = inst_43275__$1);

(statearr_43336[(8)] = inst_43276);

return statearr_43336;
})();
var statearr_43337_43357 = state_43315__$1;
(statearr_43337_43357[(2)] = null);

(statearr_43337_43357[(1)] = (2));


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
});})(c__17681__auto___43343,out))
;
return ((function (switch__17591__auto__,c__17681__auto___43343,out){
return (function() {
var cljs$core$async$state_machine__17592__auto__ = null;
var cljs$core$async$state_machine__17592__auto____0 = (function (){
var statearr_43338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43338[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_43338[(1)] = (1));

return statearr_43338;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_43315){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_43315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e43339){if((e43339 instanceof Object)){
var ex__17595__auto__ = e43339;
var statearr_43340_43358 = state_43315;
(statearr_43340_43358[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43359 = state_43315;
state_43315 = G__43359;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_43315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_43315);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___43343,out))
})();
var state__17683__auto__ = (function (){var statearr_43341 = f__17682__auto__.call(null);
(statearr_43341[(6)] = c__17681__auto___43343);

return statearr_43341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___43343,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
