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
var G__36647 = arguments.length;
switch (G__36647) {
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
if(typeof cljs.core.async.t_cljs$core$async36648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36648 = (function (f,blockable,meta36649){
this.f = f;
this.blockable = blockable;
this.meta36649 = meta36649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36650,meta36649__$1){
var self__ = this;
var _36650__$1 = this;
return (new cljs.core.async.t_cljs$core$async36648(self__.f,self__.blockable,meta36649__$1));
});

cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36650){
var self__ = this;
var _36650__$1 = this;
return self__.meta36649;
});

cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async36648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36649","meta36649",-1228257503,null)], null);
});

cljs.core.async.t_cljs$core$async36648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36648";

cljs.core.async.t_cljs$core$async36648.cljs$lang$ctorPrWriter = (function (this__31543__auto__,writer__31544__auto__,opt__31545__auto__){
return cljs.core._write.call(null,writer__31544__auto__,"cljs.core.async/t_cljs$core$async36648");
});

cljs.core.async.__GT_t_cljs$core$async36648 = (function cljs$core$async$__GT_t_cljs$core$async36648(f__$1,blockable__$1,meta36649){
return (new cljs.core.async.t_cljs$core$async36648(f__$1,blockable__$1,meta36649));
});

}

return (new cljs.core.async.t_cljs$core$async36648(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36654 = arguments.length;
switch (G__36654) {
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
var G__36657 = arguments.length;
switch (G__36657) {
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
var G__36660 = arguments.length;
switch (G__36660) {
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
var val_36662 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36662);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36662,ret){
return (function (){
return fn1.call(null,val_36662);
});})(val_36662,ret))
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
var G__36664 = arguments.length;
switch (G__36664) {
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
var n__31917__auto___36666 = n;
var x_36667 = (0);
while(true){
if((x_36667 < n__31917__auto___36666)){
(a[x_36667] = (0));

var G__36668 = (x_36667 + (1));
x_36667 = G__36668;
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

var G__36669 = (i + (1));
i = G__36669;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async36670 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36670 = (function (flag,meta36671){
this.flag = flag;
this.meta36671 = meta36671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36672,meta36671__$1){
var self__ = this;
var _36672__$1 = this;
return (new cljs.core.async.t_cljs$core$async36670(self__.flag,meta36671__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async36670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36672){
var self__ = this;
var _36672__$1 = this;
return self__.meta36671;
});})(flag))
;

cljs.core.async.t_cljs$core$async36670.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36670.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async36670.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36670.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36670.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36671","meta36671",-1309035657,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async36670.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36670";

cljs.core.async.t_cljs$core$async36670.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__31543__auto__,writer__31544__auto__,opt__31545__auto__){
return cljs.core._write.call(null,writer__31544__auto__,"cljs.core.async/t_cljs$core$async36670");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async36670 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36670(flag__$1,meta36671){
return (new cljs.core.async.t_cljs$core$async36670(flag__$1,meta36671));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async36670(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async36673 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36673 = (function (flag,cb,meta36674){
this.flag = flag;
this.cb = cb;
this.meta36674 = meta36674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36675,meta36674__$1){
var self__ = this;
var _36675__$1 = this;
return (new cljs.core.async.t_cljs$core$async36673(self__.flag,self__.cb,meta36674__$1));
});

cljs.core.async.t_cljs$core$async36673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36675){
var self__ = this;
var _36675__$1 = this;
return self__.meta36674;
});

cljs.core.async.t_cljs$core$async36673.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36673.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async36673.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36673.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async36673.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36674","meta36674",-920994689,null)], null);
});

cljs.core.async.t_cljs$core$async36673.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36673";

cljs.core.async.t_cljs$core$async36673.cljs$lang$ctorPrWriter = (function (this__31543__auto__,writer__31544__auto__,opt__31545__auto__){
return cljs.core._write.call(null,writer__31544__auto__,"cljs.core.async/t_cljs$core$async36673");
});

cljs.core.async.__GT_t_cljs$core$async36673 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36673(flag__$1,cb__$1,meta36674){
return (new cljs.core.async.t_cljs$core$async36673(flag__$1,cb__$1,meta36674));
});

}

return (new cljs.core.async.t_cljs$core$async36673(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__36676_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36676_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36677_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36677_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30872__auto__ = wport;
if(cljs.core.truth_(or__30872__auto__)){
return or__30872__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36678 = (i + (1));
i = G__36678;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30872__auto__ = ret;
if(cljs.core.truth_(or__30872__auto__)){
return or__30872__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__30860__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30860__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30860__auto__;
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
var args__32158__auto__ = [];
var len__32151__auto___36684 = arguments.length;
var i__32152__auto___36685 = (0);
while(true){
if((i__32152__auto___36685 < len__32151__auto___36684)){
args__32158__auto__.push((arguments[i__32152__auto___36685]));

var G__36686 = (i__32152__auto___36685 + (1));
i__32152__auto___36685 = G__36686;
continue;
} else {
}
break;
}

var argseq__32159__auto__ = ((((1) < args__32158__auto__.length))?(new cljs.core.IndexedSeq(args__32158__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32159__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36681){
var map__36682 = p__36681;
var map__36682__$1 = ((((!((map__36682 == null)))?((((map__36682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36682):map__36682);
var opts = map__36682__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36679){
var G__36680 = cljs.core.first.call(null,seq36679);
var seq36679__$1 = cljs.core.next.call(null,seq36679);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36680,seq36679__$1);
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
var G__36688 = arguments.length;
switch (G__36688) {
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
var c__36587__auto___36734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto___36734){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto___36734){
return (function (state_36712){
var state_val_36713 = (state_36712[(1)]);
if((state_val_36713 === (7))){
var inst_36708 = (state_36712[(2)]);
var state_36712__$1 = state_36712;
var statearr_36714_36735 = state_36712__$1;
(statearr_36714_36735[(2)] = inst_36708);

(statearr_36714_36735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (1))){
var state_36712__$1 = state_36712;
var statearr_36715_36736 = state_36712__$1;
(statearr_36715_36736[(2)] = null);

(statearr_36715_36736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (4))){
var inst_36691 = (state_36712[(7)]);
var inst_36691__$1 = (state_36712[(2)]);
var inst_36692 = (inst_36691__$1 == null);
var state_36712__$1 = (function (){var statearr_36716 = state_36712;
(statearr_36716[(7)] = inst_36691__$1);

return statearr_36716;
})();
if(cljs.core.truth_(inst_36692)){
var statearr_36717_36737 = state_36712__$1;
(statearr_36717_36737[(1)] = (5));

} else {
var statearr_36718_36738 = state_36712__$1;
(statearr_36718_36738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (13))){
var state_36712__$1 = state_36712;
var statearr_36719_36739 = state_36712__$1;
(statearr_36719_36739[(2)] = null);

(statearr_36719_36739[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (6))){
var inst_36691 = (state_36712[(7)]);
var state_36712__$1 = state_36712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36712__$1,(11),to,inst_36691);
} else {
if((state_val_36713 === (3))){
var inst_36710 = (state_36712[(2)]);
var state_36712__$1 = state_36712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36712__$1,inst_36710);
} else {
if((state_val_36713 === (12))){
var state_36712__$1 = state_36712;
var statearr_36720_36740 = state_36712__$1;
(statearr_36720_36740[(2)] = null);

(statearr_36720_36740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (2))){
var state_36712__$1 = state_36712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36712__$1,(4),from);
} else {
if((state_val_36713 === (11))){
var inst_36701 = (state_36712[(2)]);
var state_36712__$1 = state_36712;
if(cljs.core.truth_(inst_36701)){
var statearr_36721_36741 = state_36712__$1;
(statearr_36721_36741[(1)] = (12));

} else {
var statearr_36722_36742 = state_36712__$1;
(statearr_36722_36742[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (9))){
var state_36712__$1 = state_36712;
var statearr_36723_36743 = state_36712__$1;
(statearr_36723_36743[(2)] = null);

(statearr_36723_36743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (5))){
var state_36712__$1 = state_36712;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36724_36744 = state_36712__$1;
(statearr_36724_36744[(1)] = (8));

} else {
var statearr_36725_36745 = state_36712__$1;
(statearr_36725_36745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (14))){
var inst_36706 = (state_36712[(2)]);
var state_36712__$1 = state_36712;
var statearr_36726_36746 = state_36712__$1;
(statearr_36726_36746[(2)] = inst_36706);

(statearr_36726_36746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (10))){
var inst_36698 = (state_36712[(2)]);
var state_36712__$1 = state_36712;
var statearr_36727_36747 = state_36712__$1;
(statearr_36727_36747[(2)] = inst_36698);

(statearr_36727_36747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (8))){
var inst_36695 = cljs.core.async.close_BANG_.call(null,to);
var state_36712__$1 = state_36712;
var statearr_36728_36748 = state_36712__$1;
(statearr_36728_36748[(2)] = inst_36695);

(statearr_36728_36748[(1)] = (10));


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
});})(c__36587__auto___36734))
;
return ((function (switch__36497__auto__,c__36587__auto___36734){
return (function() {
var cljs$core$async$state_machine__36498__auto__ = null;
var cljs$core$async$state_machine__36498__auto____0 = (function (){
var statearr_36729 = [null,null,null,null,null,null,null,null];
(statearr_36729[(0)] = cljs$core$async$state_machine__36498__auto__);

(statearr_36729[(1)] = (1));

return statearr_36729;
});
var cljs$core$async$state_machine__36498__auto____1 = (function (state_36712){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_36712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e36730){if((e36730 instanceof Object)){
var ex__36501__auto__ = e36730;
var statearr_36731_36749 = state_36712;
(statearr_36731_36749[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36750 = state_36712;
state_36712 = G__36750;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs$core$async$state_machine__36498__auto__ = function(state_36712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36498__auto____1.call(this,state_36712);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36498__auto____0;
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36498__auto____1;
return cljs$core$async$state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto___36734))
})();
var state__36589__auto__ = (function (){var statearr_36732 = f__36588__auto__.call(null);
(statearr_36732[(6)] = c__36587__auto___36734);

return statearr_36732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto___36734))
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
return (function (p__36751){
var vec__36752 = p__36751;
var v = cljs.core.nth.call(null,vec__36752,(0),null);
var p = cljs.core.nth.call(null,vec__36752,(1),null);
var job = vec__36752;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__36587__auto___36923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto___36923,res,vec__36752,v,p,job,jobs,results){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto___36923,res,vec__36752,v,p,job,jobs,results){
return (function (state_36759){
var state_val_36760 = (state_36759[(1)]);
if((state_val_36760 === (1))){
var state_36759__$1 = state_36759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36759__$1,(2),res,v);
} else {
if((state_val_36760 === (2))){
var inst_36756 = (state_36759[(2)]);
var inst_36757 = cljs.core.async.close_BANG_.call(null,res);
var state_36759__$1 = (function (){var statearr_36761 = state_36759;
(statearr_36761[(7)] = inst_36756);

return statearr_36761;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36759__$1,inst_36757);
} else {
return null;
}
}
});})(c__36587__auto___36923,res,vec__36752,v,p,job,jobs,results))
;
return ((function (switch__36497__auto__,c__36587__auto___36923,res,vec__36752,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____0 = (function (){
var statearr_36762 = [null,null,null,null,null,null,null,null];
(statearr_36762[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__);

(statearr_36762[(1)] = (1));

return statearr_36762;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____1 = (function (state_36759){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_36759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e36763){if((e36763 instanceof Object)){
var ex__36501__auto__ = e36763;
var statearr_36764_36924 = state_36759;
(statearr_36764_36924[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36925 = state_36759;
state_36759 = G__36925;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__ = function(state_36759){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____1.call(this,state_36759);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto___36923,res,vec__36752,v,p,job,jobs,results))
})();
var state__36589__auto__ = (function (){var statearr_36765 = f__36588__auto__.call(null);
(statearr_36765[(6)] = c__36587__auto___36923);

return statearr_36765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto___36923,res,vec__36752,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36766){
var vec__36767 = p__36766;
var v = cljs.core.nth.call(null,vec__36767,(0),null);
var p = cljs.core.nth.call(null,vec__36767,(1),null);
var job = vec__36767;
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
var n__31917__auto___36926 = n;
var __36927 = (0);
while(true){
if((__36927 < n__31917__auto___36926)){
var G__36770_36928 = type;
var G__36770_36929__$1 = (((G__36770_36928 instanceof cljs.core.Keyword))?G__36770_36928.fqn:null);
switch (G__36770_36929__$1) {
case "compute":
var c__36587__auto___36931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36927,c__36587__auto___36931,G__36770_36928,G__36770_36929__$1,n__31917__auto___36926,jobs,results,process,async){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (__36927,c__36587__auto___36931,G__36770_36928,G__36770_36929__$1,n__31917__auto___36926,jobs,results,process,async){
return (function (state_36783){
var state_val_36784 = (state_36783[(1)]);
if((state_val_36784 === (1))){
var state_36783__$1 = state_36783;
var statearr_36785_36932 = state_36783__$1;
(statearr_36785_36932[(2)] = null);

(statearr_36785_36932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36784 === (2))){
var state_36783__$1 = state_36783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36783__$1,(4),jobs);
} else {
if((state_val_36784 === (3))){
var inst_36781 = (state_36783[(2)]);
var state_36783__$1 = state_36783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36783__$1,inst_36781);
} else {
if((state_val_36784 === (4))){
var inst_36773 = (state_36783[(2)]);
var inst_36774 = process.call(null,inst_36773);
var state_36783__$1 = state_36783;
if(cljs.core.truth_(inst_36774)){
var statearr_36786_36933 = state_36783__$1;
(statearr_36786_36933[(1)] = (5));

} else {
var statearr_36787_36934 = state_36783__$1;
(statearr_36787_36934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36784 === (5))){
var state_36783__$1 = state_36783;
var statearr_36788_36935 = state_36783__$1;
(statearr_36788_36935[(2)] = null);

(statearr_36788_36935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36784 === (6))){
var state_36783__$1 = state_36783;
var statearr_36789_36936 = state_36783__$1;
(statearr_36789_36936[(2)] = null);

(statearr_36789_36936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36784 === (7))){
var inst_36779 = (state_36783[(2)]);
var state_36783__$1 = state_36783;
var statearr_36790_36937 = state_36783__$1;
(statearr_36790_36937[(2)] = inst_36779);

(statearr_36790_36937[(1)] = (3));


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
});})(__36927,c__36587__auto___36931,G__36770_36928,G__36770_36929__$1,n__31917__auto___36926,jobs,results,process,async))
;
return ((function (__36927,switch__36497__auto__,c__36587__auto___36931,G__36770_36928,G__36770_36929__$1,n__31917__auto___36926,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____0 = (function (){
var statearr_36791 = [null,null,null,null,null,null,null];
(statearr_36791[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__);

(statearr_36791[(1)] = (1));

return statearr_36791;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____1 = (function (state_36783){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_36783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e36792){if((e36792 instanceof Object)){
var ex__36501__auto__ = e36792;
var statearr_36793_36938 = state_36783;
(statearr_36793_36938[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36939 = state_36783;
state_36783 = G__36939;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__ = function(state_36783){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____1.call(this,state_36783);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__;
})()
;})(__36927,switch__36497__auto__,c__36587__auto___36931,G__36770_36928,G__36770_36929__$1,n__31917__auto___36926,jobs,results,process,async))
})();
var state__36589__auto__ = (function (){var statearr_36794 = f__36588__auto__.call(null);
(statearr_36794[(6)] = c__36587__auto___36931);

return statearr_36794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(__36927,c__36587__auto___36931,G__36770_36928,G__36770_36929__$1,n__31917__auto___36926,jobs,results,process,async))
);


break;
case "async":
var c__36587__auto___36940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36927,c__36587__auto___36940,G__36770_36928,G__36770_36929__$1,n__31917__auto___36926,jobs,results,process,async){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (__36927,c__36587__auto___36940,G__36770_36928,G__36770_36929__$1,n__31917__auto___36926,jobs,results,process,async){
return (function (state_36807){
var state_val_36808 = (state_36807[(1)]);
if((state_val_36808 === (1))){
var state_36807__$1 = state_36807;
var statearr_36809_36941 = state_36807__$1;
(statearr_36809_36941[(2)] = null);

(statearr_36809_36941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36808 === (2))){
var state_36807__$1 = state_36807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36807__$1,(4),jobs);
} else {
if((state_val_36808 === (3))){
var inst_36805 = (state_36807[(2)]);
var state_36807__$1 = state_36807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36807__$1,inst_36805);
} else {
if((state_val_36808 === (4))){
var inst_36797 = (state_36807[(2)]);
var inst_36798 = async.call(null,inst_36797);
var state_36807__$1 = state_36807;
if(cljs.core.truth_(inst_36798)){
var statearr_36810_36942 = state_36807__$1;
(statearr_36810_36942[(1)] = (5));

} else {
var statearr_36811_36943 = state_36807__$1;
(statearr_36811_36943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36808 === (5))){
var state_36807__$1 = state_36807;
var statearr_36812_36944 = state_36807__$1;
(statearr_36812_36944[(2)] = null);

(statearr_36812_36944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36808 === (6))){
var state_36807__$1 = state_36807;
var statearr_36813_36945 = state_36807__$1;
(statearr_36813_36945[(2)] = null);

(statearr_36813_36945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36808 === (7))){
var inst_36803 = (state_36807[(2)]);
var state_36807__$1 = state_36807;
var statearr_36814_36946 = state_36807__$1;
(statearr_36814_36946[(2)] = inst_36803);

(statearr_36814_36946[(1)] = (3));


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
});})(__36927,c__36587__auto___36940,G__36770_36928,G__36770_36929__$1,n__31917__auto___36926,jobs,results,process,async))
;
return ((function (__36927,switch__36497__auto__,c__36587__auto___36940,G__36770_36928,G__36770_36929__$1,n__31917__auto___36926,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____0 = (function (){
var statearr_36815 = [null,null,null,null,null,null,null];
(statearr_36815[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__);

(statearr_36815[(1)] = (1));

return statearr_36815;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____1 = (function (state_36807){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_36807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e36816){if((e36816 instanceof Object)){
var ex__36501__auto__ = e36816;
var statearr_36817_36947 = state_36807;
(statearr_36817_36947[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36948 = state_36807;
state_36807 = G__36948;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__ = function(state_36807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____1.call(this,state_36807);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__;
})()
;})(__36927,switch__36497__auto__,c__36587__auto___36940,G__36770_36928,G__36770_36929__$1,n__31917__auto___36926,jobs,results,process,async))
})();
var state__36589__auto__ = (function (){var statearr_36818 = f__36588__auto__.call(null);
(statearr_36818[(6)] = c__36587__auto___36940);

return statearr_36818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(__36927,c__36587__auto___36940,G__36770_36928,G__36770_36929__$1,n__31917__auto___36926,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36770_36929__$1)].join('')));

}

var G__36949 = (__36927 + (1));
__36927 = G__36949;
continue;
} else {
}
break;
}

var c__36587__auto___36950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto___36950,jobs,results,process,async){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto___36950,jobs,results,process,async){
return (function (state_36840){
var state_val_36841 = (state_36840[(1)]);
if((state_val_36841 === (1))){
var state_36840__$1 = state_36840;
var statearr_36842_36951 = state_36840__$1;
(statearr_36842_36951[(2)] = null);

(statearr_36842_36951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36841 === (2))){
var state_36840__$1 = state_36840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36840__$1,(4),from);
} else {
if((state_val_36841 === (3))){
var inst_36838 = (state_36840[(2)]);
var state_36840__$1 = state_36840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36840__$1,inst_36838);
} else {
if((state_val_36841 === (4))){
var inst_36821 = (state_36840[(7)]);
var inst_36821__$1 = (state_36840[(2)]);
var inst_36822 = (inst_36821__$1 == null);
var state_36840__$1 = (function (){var statearr_36843 = state_36840;
(statearr_36843[(7)] = inst_36821__$1);

return statearr_36843;
})();
if(cljs.core.truth_(inst_36822)){
var statearr_36844_36952 = state_36840__$1;
(statearr_36844_36952[(1)] = (5));

} else {
var statearr_36845_36953 = state_36840__$1;
(statearr_36845_36953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36841 === (5))){
var inst_36824 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36840__$1 = state_36840;
var statearr_36846_36954 = state_36840__$1;
(statearr_36846_36954[(2)] = inst_36824);

(statearr_36846_36954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36841 === (6))){
var inst_36821 = (state_36840[(7)]);
var inst_36826 = (state_36840[(8)]);
var inst_36826__$1 = cljs.core.async.chan.call(null,(1));
var inst_36827 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36828 = [inst_36821,inst_36826__$1];
var inst_36829 = (new cljs.core.PersistentVector(null,2,(5),inst_36827,inst_36828,null));
var state_36840__$1 = (function (){var statearr_36847 = state_36840;
(statearr_36847[(8)] = inst_36826__$1);

return statearr_36847;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36840__$1,(8),jobs,inst_36829);
} else {
if((state_val_36841 === (7))){
var inst_36836 = (state_36840[(2)]);
var state_36840__$1 = state_36840;
var statearr_36848_36955 = state_36840__$1;
(statearr_36848_36955[(2)] = inst_36836);

(statearr_36848_36955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36841 === (8))){
var inst_36826 = (state_36840[(8)]);
var inst_36831 = (state_36840[(2)]);
var state_36840__$1 = (function (){var statearr_36849 = state_36840;
(statearr_36849[(9)] = inst_36831);

return statearr_36849;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36840__$1,(9),results,inst_36826);
} else {
if((state_val_36841 === (9))){
var inst_36833 = (state_36840[(2)]);
var state_36840__$1 = (function (){var statearr_36850 = state_36840;
(statearr_36850[(10)] = inst_36833);

return statearr_36850;
})();
var statearr_36851_36956 = state_36840__$1;
(statearr_36851_36956[(2)] = null);

(statearr_36851_36956[(1)] = (2));


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
});})(c__36587__auto___36950,jobs,results,process,async))
;
return ((function (switch__36497__auto__,c__36587__auto___36950,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____0 = (function (){
var statearr_36852 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36852[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__);

(statearr_36852[(1)] = (1));

return statearr_36852;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____1 = (function (state_36840){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_36840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e36853){if((e36853 instanceof Object)){
var ex__36501__auto__ = e36853;
var statearr_36854_36957 = state_36840;
(statearr_36854_36957[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36958 = state_36840;
state_36840 = G__36958;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__ = function(state_36840){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____1.call(this,state_36840);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto___36950,jobs,results,process,async))
})();
var state__36589__auto__ = (function (){var statearr_36855 = f__36588__auto__.call(null);
(statearr_36855[(6)] = c__36587__auto___36950);

return statearr_36855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto___36950,jobs,results,process,async))
);


var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__,jobs,results,process,async){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__,jobs,results,process,async){
return (function (state_36893){
var state_val_36894 = (state_36893[(1)]);
if((state_val_36894 === (7))){
var inst_36889 = (state_36893[(2)]);
var state_36893__$1 = state_36893;
var statearr_36895_36959 = state_36893__$1;
(statearr_36895_36959[(2)] = inst_36889);

(statearr_36895_36959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (20))){
var state_36893__$1 = state_36893;
var statearr_36896_36960 = state_36893__$1;
(statearr_36896_36960[(2)] = null);

(statearr_36896_36960[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (1))){
var state_36893__$1 = state_36893;
var statearr_36897_36961 = state_36893__$1;
(statearr_36897_36961[(2)] = null);

(statearr_36897_36961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (4))){
var inst_36858 = (state_36893[(7)]);
var inst_36858__$1 = (state_36893[(2)]);
var inst_36859 = (inst_36858__$1 == null);
var state_36893__$1 = (function (){var statearr_36898 = state_36893;
(statearr_36898[(7)] = inst_36858__$1);

return statearr_36898;
})();
if(cljs.core.truth_(inst_36859)){
var statearr_36899_36962 = state_36893__$1;
(statearr_36899_36962[(1)] = (5));

} else {
var statearr_36900_36963 = state_36893__$1;
(statearr_36900_36963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (15))){
var inst_36871 = (state_36893[(8)]);
var state_36893__$1 = state_36893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36893__$1,(18),to,inst_36871);
} else {
if((state_val_36894 === (21))){
var inst_36884 = (state_36893[(2)]);
var state_36893__$1 = state_36893;
var statearr_36901_36964 = state_36893__$1;
(statearr_36901_36964[(2)] = inst_36884);

(statearr_36901_36964[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (13))){
var inst_36886 = (state_36893[(2)]);
var state_36893__$1 = (function (){var statearr_36902 = state_36893;
(statearr_36902[(9)] = inst_36886);

return statearr_36902;
})();
var statearr_36903_36965 = state_36893__$1;
(statearr_36903_36965[(2)] = null);

(statearr_36903_36965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (6))){
var inst_36858 = (state_36893[(7)]);
var state_36893__$1 = state_36893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36893__$1,(11),inst_36858);
} else {
if((state_val_36894 === (17))){
var inst_36879 = (state_36893[(2)]);
var state_36893__$1 = state_36893;
if(cljs.core.truth_(inst_36879)){
var statearr_36904_36966 = state_36893__$1;
(statearr_36904_36966[(1)] = (19));

} else {
var statearr_36905_36967 = state_36893__$1;
(statearr_36905_36967[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (3))){
var inst_36891 = (state_36893[(2)]);
var state_36893__$1 = state_36893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36893__$1,inst_36891);
} else {
if((state_val_36894 === (12))){
var inst_36868 = (state_36893[(10)]);
var state_36893__$1 = state_36893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36893__$1,(14),inst_36868);
} else {
if((state_val_36894 === (2))){
var state_36893__$1 = state_36893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36893__$1,(4),results);
} else {
if((state_val_36894 === (19))){
var state_36893__$1 = state_36893;
var statearr_36906_36968 = state_36893__$1;
(statearr_36906_36968[(2)] = null);

(statearr_36906_36968[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (11))){
var inst_36868 = (state_36893[(2)]);
var state_36893__$1 = (function (){var statearr_36907 = state_36893;
(statearr_36907[(10)] = inst_36868);

return statearr_36907;
})();
var statearr_36908_36969 = state_36893__$1;
(statearr_36908_36969[(2)] = null);

(statearr_36908_36969[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (9))){
var state_36893__$1 = state_36893;
var statearr_36909_36970 = state_36893__$1;
(statearr_36909_36970[(2)] = null);

(statearr_36909_36970[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (5))){
var state_36893__$1 = state_36893;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36910_36971 = state_36893__$1;
(statearr_36910_36971[(1)] = (8));

} else {
var statearr_36911_36972 = state_36893__$1;
(statearr_36911_36972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (14))){
var inst_36873 = (state_36893[(11)]);
var inst_36871 = (state_36893[(8)]);
var inst_36871__$1 = (state_36893[(2)]);
var inst_36872 = (inst_36871__$1 == null);
var inst_36873__$1 = cljs.core.not.call(null,inst_36872);
var state_36893__$1 = (function (){var statearr_36912 = state_36893;
(statearr_36912[(11)] = inst_36873__$1);

(statearr_36912[(8)] = inst_36871__$1);

return statearr_36912;
})();
if(inst_36873__$1){
var statearr_36913_36973 = state_36893__$1;
(statearr_36913_36973[(1)] = (15));

} else {
var statearr_36914_36974 = state_36893__$1;
(statearr_36914_36974[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (16))){
var inst_36873 = (state_36893[(11)]);
var state_36893__$1 = state_36893;
var statearr_36915_36975 = state_36893__$1;
(statearr_36915_36975[(2)] = inst_36873);

(statearr_36915_36975[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (10))){
var inst_36865 = (state_36893[(2)]);
var state_36893__$1 = state_36893;
var statearr_36916_36976 = state_36893__$1;
(statearr_36916_36976[(2)] = inst_36865);

(statearr_36916_36976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (18))){
var inst_36876 = (state_36893[(2)]);
var state_36893__$1 = state_36893;
var statearr_36917_36977 = state_36893__$1;
(statearr_36917_36977[(2)] = inst_36876);

(statearr_36917_36977[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36894 === (8))){
var inst_36862 = cljs.core.async.close_BANG_.call(null,to);
var state_36893__$1 = state_36893;
var statearr_36918_36978 = state_36893__$1;
(statearr_36918_36978[(2)] = inst_36862);

(statearr_36918_36978[(1)] = (10));


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
});})(c__36587__auto__,jobs,results,process,async))
;
return ((function (switch__36497__auto__,c__36587__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____0 = (function (){
var statearr_36919 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36919[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__);

(statearr_36919[(1)] = (1));

return statearr_36919;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____1 = (function (state_36893){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_36893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e36920){if((e36920 instanceof Object)){
var ex__36501__auto__ = e36920;
var statearr_36921_36979 = state_36893;
(statearr_36921_36979[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36980 = state_36893;
state_36893 = G__36980;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__ = function(state_36893){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____1.call(this,state_36893);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36498__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__,jobs,results,process,async))
})();
var state__36589__auto__ = (function (){var statearr_36922 = f__36588__auto__.call(null);
(statearr_36922[(6)] = c__36587__auto__);

return statearr_36922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__,jobs,results,process,async))
);

return c__36587__auto__;
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
var G__36982 = arguments.length;
switch (G__36982) {
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
var G__36985 = arguments.length;
switch (G__36985) {
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
var G__36988 = arguments.length;
switch (G__36988) {
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
var c__36587__auto___37037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto___37037,tc,fc){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto___37037,tc,fc){
return (function (state_37014){
var state_val_37015 = (state_37014[(1)]);
if((state_val_37015 === (7))){
var inst_37010 = (state_37014[(2)]);
var state_37014__$1 = state_37014;
var statearr_37016_37038 = state_37014__$1;
(statearr_37016_37038[(2)] = inst_37010);

(statearr_37016_37038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (1))){
var state_37014__$1 = state_37014;
var statearr_37017_37039 = state_37014__$1;
(statearr_37017_37039[(2)] = null);

(statearr_37017_37039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (4))){
var inst_36991 = (state_37014[(7)]);
var inst_36991__$1 = (state_37014[(2)]);
var inst_36992 = (inst_36991__$1 == null);
var state_37014__$1 = (function (){var statearr_37018 = state_37014;
(statearr_37018[(7)] = inst_36991__$1);

return statearr_37018;
})();
if(cljs.core.truth_(inst_36992)){
var statearr_37019_37040 = state_37014__$1;
(statearr_37019_37040[(1)] = (5));

} else {
var statearr_37020_37041 = state_37014__$1;
(statearr_37020_37041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (13))){
var state_37014__$1 = state_37014;
var statearr_37021_37042 = state_37014__$1;
(statearr_37021_37042[(2)] = null);

(statearr_37021_37042[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (6))){
var inst_36991 = (state_37014[(7)]);
var inst_36997 = p.call(null,inst_36991);
var state_37014__$1 = state_37014;
if(cljs.core.truth_(inst_36997)){
var statearr_37022_37043 = state_37014__$1;
(statearr_37022_37043[(1)] = (9));

} else {
var statearr_37023_37044 = state_37014__$1;
(statearr_37023_37044[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (3))){
var inst_37012 = (state_37014[(2)]);
var state_37014__$1 = state_37014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37014__$1,inst_37012);
} else {
if((state_val_37015 === (12))){
var state_37014__$1 = state_37014;
var statearr_37024_37045 = state_37014__$1;
(statearr_37024_37045[(2)] = null);

(statearr_37024_37045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (2))){
var state_37014__$1 = state_37014;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37014__$1,(4),ch);
} else {
if((state_val_37015 === (11))){
var inst_36991 = (state_37014[(7)]);
var inst_37001 = (state_37014[(2)]);
var state_37014__$1 = state_37014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37014__$1,(8),inst_37001,inst_36991);
} else {
if((state_val_37015 === (9))){
var state_37014__$1 = state_37014;
var statearr_37025_37046 = state_37014__$1;
(statearr_37025_37046[(2)] = tc);

(statearr_37025_37046[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (5))){
var inst_36994 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36995 = cljs.core.async.close_BANG_.call(null,fc);
var state_37014__$1 = (function (){var statearr_37026 = state_37014;
(statearr_37026[(8)] = inst_36994);

return statearr_37026;
})();
var statearr_37027_37047 = state_37014__$1;
(statearr_37027_37047[(2)] = inst_36995);

(statearr_37027_37047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (14))){
var inst_37008 = (state_37014[(2)]);
var state_37014__$1 = state_37014;
var statearr_37028_37048 = state_37014__$1;
(statearr_37028_37048[(2)] = inst_37008);

(statearr_37028_37048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (10))){
var state_37014__$1 = state_37014;
var statearr_37029_37049 = state_37014__$1;
(statearr_37029_37049[(2)] = fc);

(statearr_37029_37049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37015 === (8))){
var inst_37003 = (state_37014[(2)]);
var state_37014__$1 = state_37014;
if(cljs.core.truth_(inst_37003)){
var statearr_37030_37050 = state_37014__$1;
(statearr_37030_37050[(1)] = (12));

} else {
var statearr_37031_37051 = state_37014__$1;
(statearr_37031_37051[(1)] = (13));

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
});})(c__36587__auto___37037,tc,fc))
;
return ((function (switch__36497__auto__,c__36587__auto___37037,tc,fc){
return (function() {
var cljs$core$async$state_machine__36498__auto__ = null;
var cljs$core$async$state_machine__36498__auto____0 = (function (){
var statearr_37032 = [null,null,null,null,null,null,null,null,null];
(statearr_37032[(0)] = cljs$core$async$state_machine__36498__auto__);

(statearr_37032[(1)] = (1));

return statearr_37032;
});
var cljs$core$async$state_machine__36498__auto____1 = (function (state_37014){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_37014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e37033){if((e37033 instanceof Object)){
var ex__36501__auto__ = e37033;
var statearr_37034_37052 = state_37014;
(statearr_37034_37052[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37053 = state_37014;
state_37014 = G__37053;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs$core$async$state_machine__36498__auto__ = function(state_37014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36498__auto____1.call(this,state_37014);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36498__auto____0;
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36498__auto____1;
return cljs$core$async$state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto___37037,tc,fc))
})();
var state__36589__auto__ = (function (){var statearr_37035 = f__36588__auto__.call(null);
(statearr_37035[(6)] = c__36587__auto___37037);

return statearr_37035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto___37037,tc,fc))
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
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__){
return (function (state_37074){
var state_val_37075 = (state_37074[(1)]);
if((state_val_37075 === (7))){
var inst_37070 = (state_37074[(2)]);
var state_37074__$1 = state_37074;
var statearr_37076_37094 = state_37074__$1;
(statearr_37076_37094[(2)] = inst_37070);

(statearr_37076_37094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (1))){
var inst_37054 = init;
var state_37074__$1 = (function (){var statearr_37077 = state_37074;
(statearr_37077[(7)] = inst_37054);

return statearr_37077;
})();
var statearr_37078_37095 = state_37074__$1;
(statearr_37078_37095[(2)] = null);

(statearr_37078_37095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (4))){
var inst_37057 = (state_37074[(8)]);
var inst_37057__$1 = (state_37074[(2)]);
var inst_37058 = (inst_37057__$1 == null);
var state_37074__$1 = (function (){var statearr_37079 = state_37074;
(statearr_37079[(8)] = inst_37057__$1);

return statearr_37079;
})();
if(cljs.core.truth_(inst_37058)){
var statearr_37080_37096 = state_37074__$1;
(statearr_37080_37096[(1)] = (5));

} else {
var statearr_37081_37097 = state_37074__$1;
(statearr_37081_37097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (6))){
var inst_37057 = (state_37074[(8)]);
var inst_37054 = (state_37074[(7)]);
var inst_37061 = (state_37074[(9)]);
var inst_37061__$1 = f.call(null,inst_37054,inst_37057);
var inst_37062 = cljs.core.reduced_QMARK_.call(null,inst_37061__$1);
var state_37074__$1 = (function (){var statearr_37082 = state_37074;
(statearr_37082[(9)] = inst_37061__$1);

return statearr_37082;
})();
if(inst_37062){
var statearr_37083_37098 = state_37074__$1;
(statearr_37083_37098[(1)] = (8));

} else {
var statearr_37084_37099 = state_37074__$1;
(statearr_37084_37099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (3))){
var inst_37072 = (state_37074[(2)]);
var state_37074__$1 = state_37074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37074__$1,inst_37072);
} else {
if((state_val_37075 === (2))){
var state_37074__$1 = state_37074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37074__$1,(4),ch);
} else {
if((state_val_37075 === (9))){
var inst_37061 = (state_37074[(9)]);
var inst_37054 = inst_37061;
var state_37074__$1 = (function (){var statearr_37085 = state_37074;
(statearr_37085[(7)] = inst_37054);

return statearr_37085;
})();
var statearr_37086_37100 = state_37074__$1;
(statearr_37086_37100[(2)] = null);

(statearr_37086_37100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (5))){
var inst_37054 = (state_37074[(7)]);
var state_37074__$1 = state_37074;
var statearr_37087_37101 = state_37074__$1;
(statearr_37087_37101[(2)] = inst_37054);

(statearr_37087_37101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (10))){
var inst_37068 = (state_37074[(2)]);
var state_37074__$1 = state_37074;
var statearr_37088_37102 = state_37074__$1;
(statearr_37088_37102[(2)] = inst_37068);

(statearr_37088_37102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37075 === (8))){
var inst_37061 = (state_37074[(9)]);
var inst_37064 = cljs.core.deref.call(null,inst_37061);
var state_37074__$1 = state_37074;
var statearr_37089_37103 = state_37074__$1;
(statearr_37089_37103[(2)] = inst_37064);

(statearr_37089_37103[(1)] = (10));


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
});})(c__36587__auto__))
;
return ((function (switch__36497__auto__,c__36587__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__36498__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36498__auto____0 = (function (){
var statearr_37090 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37090[(0)] = cljs$core$async$reduce_$_state_machine__36498__auto__);

(statearr_37090[(1)] = (1));

return statearr_37090;
});
var cljs$core$async$reduce_$_state_machine__36498__auto____1 = (function (state_37074){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_37074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e37091){if((e37091 instanceof Object)){
var ex__36501__auto__ = e37091;
var statearr_37092_37104 = state_37074;
(statearr_37092_37104[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37105 = state_37074;
state_37074 = G__37105;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36498__auto__ = function(state_37074){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36498__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36498__auto____1.call(this,state_37074);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36498__auto____0;
cljs$core$async$reduce_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36498__auto____1;
return cljs$core$async$reduce_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_37093 = f__36588__auto__.call(null);
(statearr_37093[(6)] = c__36587__auto__);

return statearr_37093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__,f__$1){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__,f__$1){
return (function (state_37111){
var state_val_37112 = (state_37111[(1)]);
if((state_val_37112 === (1))){
var inst_37106 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_37111__$1 = state_37111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37111__$1,(2),inst_37106);
} else {
if((state_val_37112 === (2))){
var inst_37108 = (state_37111[(2)]);
var inst_37109 = f__$1.call(null,inst_37108);
var state_37111__$1 = state_37111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37111__$1,inst_37109);
} else {
return null;
}
}
});})(c__36587__auto__,f__$1))
;
return ((function (switch__36497__auto__,c__36587__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__36498__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36498__auto____0 = (function (){
var statearr_37113 = [null,null,null,null,null,null,null];
(statearr_37113[(0)] = cljs$core$async$transduce_$_state_machine__36498__auto__);

(statearr_37113[(1)] = (1));

return statearr_37113;
});
var cljs$core$async$transduce_$_state_machine__36498__auto____1 = (function (state_37111){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_37111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e37114){if((e37114 instanceof Object)){
var ex__36501__auto__ = e37114;
var statearr_37115_37117 = state_37111;
(statearr_37115_37117[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37118 = state_37111;
state_37111 = G__37118;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36498__auto__ = function(state_37111){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36498__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36498__auto____1.call(this,state_37111);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36498__auto____0;
cljs$core$async$transduce_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36498__auto____1;
return cljs$core$async$transduce_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__,f__$1))
})();
var state__36589__auto__ = (function (){var statearr_37116 = f__36588__auto__.call(null);
(statearr_37116[(6)] = c__36587__auto__);

return statearr_37116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__,f__$1))
);

return c__36587__auto__;
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
var G__37120 = arguments.length;
switch (G__37120) {
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
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__){
return (function (state_37145){
var state_val_37146 = (state_37145[(1)]);
if((state_val_37146 === (7))){
var inst_37127 = (state_37145[(2)]);
var state_37145__$1 = state_37145;
var statearr_37147_37168 = state_37145__$1;
(statearr_37147_37168[(2)] = inst_37127);

(statearr_37147_37168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37146 === (1))){
var inst_37121 = cljs.core.seq.call(null,coll);
var inst_37122 = inst_37121;
var state_37145__$1 = (function (){var statearr_37148 = state_37145;
(statearr_37148[(7)] = inst_37122);

return statearr_37148;
})();
var statearr_37149_37169 = state_37145__$1;
(statearr_37149_37169[(2)] = null);

(statearr_37149_37169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37146 === (4))){
var inst_37122 = (state_37145[(7)]);
var inst_37125 = cljs.core.first.call(null,inst_37122);
var state_37145__$1 = state_37145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37145__$1,(7),ch,inst_37125);
} else {
if((state_val_37146 === (13))){
var inst_37139 = (state_37145[(2)]);
var state_37145__$1 = state_37145;
var statearr_37150_37170 = state_37145__$1;
(statearr_37150_37170[(2)] = inst_37139);

(statearr_37150_37170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37146 === (6))){
var inst_37130 = (state_37145[(2)]);
var state_37145__$1 = state_37145;
if(cljs.core.truth_(inst_37130)){
var statearr_37151_37171 = state_37145__$1;
(statearr_37151_37171[(1)] = (8));

} else {
var statearr_37152_37172 = state_37145__$1;
(statearr_37152_37172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37146 === (3))){
var inst_37143 = (state_37145[(2)]);
var state_37145__$1 = state_37145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37145__$1,inst_37143);
} else {
if((state_val_37146 === (12))){
var state_37145__$1 = state_37145;
var statearr_37153_37173 = state_37145__$1;
(statearr_37153_37173[(2)] = null);

(statearr_37153_37173[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37146 === (2))){
var inst_37122 = (state_37145[(7)]);
var state_37145__$1 = state_37145;
if(cljs.core.truth_(inst_37122)){
var statearr_37154_37174 = state_37145__$1;
(statearr_37154_37174[(1)] = (4));

} else {
var statearr_37155_37175 = state_37145__$1;
(statearr_37155_37175[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37146 === (11))){
var inst_37136 = cljs.core.async.close_BANG_.call(null,ch);
var state_37145__$1 = state_37145;
var statearr_37156_37176 = state_37145__$1;
(statearr_37156_37176[(2)] = inst_37136);

(statearr_37156_37176[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37146 === (9))){
var state_37145__$1 = state_37145;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37157_37177 = state_37145__$1;
(statearr_37157_37177[(1)] = (11));

} else {
var statearr_37158_37178 = state_37145__$1;
(statearr_37158_37178[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37146 === (5))){
var inst_37122 = (state_37145[(7)]);
var state_37145__$1 = state_37145;
var statearr_37159_37179 = state_37145__$1;
(statearr_37159_37179[(2)] = inst_37122);

(statearr_37159_37179[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37146 === (10))){
var inst_37141 = (state_37145[(2)]);
var state_37145__$1 = state_37145;
var statearr_37160_37180 = state_37145__$1;
(statearr_37160_37180[(2)] = inst_37141);

(statearr_37160_37180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37146 === (8))){
var inst_37122 = (state_37145[(7)]);
var inst_37132 = cljs.core.next.call(null,inst_37122);
var inst_37122__$1 = inst_37132;
var state_37145__$1 = (function (){var statearr_37161 = state_37145;
(statearr_37161[(7)] = inst_37122__$1);

return statearr_37161;
})();
var statearr_37162_37181 = state_37145__$1;
(statearr_37162_37181[(2)] = null);

(statearr_37162_37181[(1)] = (2));


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
});})(c__36587__auto__))
;
return ((function (switch__36497__auto__,c__36587__auto__){
return (function() {
var cljs$core$async$state_machine__36498__auto__ = null;
var cljs$core$async$state_machine__36498__auto____0 = (function (){
var statearr_37163 = [null,null,null,null,null,null,null,null];
(statearr_37163[(0)] = cljs$core$async$state_machine__36498__auto__);

(statearr_37163[(1)] = (1));

return statearr_37163;
});
var cljs$core$async$state_machine__36498__auto____1 = (function (state_37145){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_37145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e37164){if((e37164 instanceof Object)){
var ex__36501__auto__ = e37164;
var statearr_37165_37182 = state_37145;
(statearr_37165_37182[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37183 = state_37145;
state_37145 = G__37183;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs$core$async$state_machine__36498__auto__ = function(state_37145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36498__auto____1.call(this,state_37145);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36498__auto____0;
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36498__auto____1;
return cljs$core$async$state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_37166 = f__36588__auto__.call(null);
(statearr_37166[(6)] = c__36587__auto__);

return statearr_37166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
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
var x__31605__auto__ = (((_ == null))?null:_);
var m__31606__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__31605__auto__)]);
if(!((m__31606__auto__ == null))){
return m__31606__auto__.call(null,_);
} else {
var m__31606__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__31606__auto____$1 == null))){
return m__31606__auto____$1.call(null,_);
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
var x__31605__auto__ = (((m == null))?null:m);
var m__31606__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__31605__auto__)]);
if(!((m__31606__auto__ == null))){
return m__31606__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__31606__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__31606__auto____$1 == null))){
return m__31606__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__31605__auto__ = (((m == null))?null:m);
var m__31606__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__31605__auto__)]);
if(!((m__31606__auto__ == null))){
return m__31606__auto__.call(null,m,ch);
} else {
var m__31606__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__31606__auto____$1 == null))){
return m__31606__auto____$1.call(null,m,ch);
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
var x__31605__auto__ = (((m == null))?null:m);
var m__31606__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__31605__auto__)]);
if(!((m__31606__auto__ == null))){
return m__31606__auto__.call(null,m);
} else {
var m__31606__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__31606__auto____$1 == null))){
return m__31606__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async37184 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37184 = (function (ch,cs,meta37185){
this.ch = ch;
this.cs = cs;
this.meta37185 = meta37185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37186,meta37185__$1){
var self__ = this;
var _37186__$1 = this;
return (new cljs.core.async.t_cljs$core$async37184(self__.ch,self__.cs,meta37185__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async37184.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37186){
var self__ = this;
var _37186__$1 = this;
return self__.meta37185;
});})(cs))
;

cljs.core.async.t_cljs$core$async37184.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37184.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async37184.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37184.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37184.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37184.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37184.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37185","meta37185",-1563004725,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async37184.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37184";

cljs.core.async.t_cljs$core$async37184.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__31543__auto__,writer__31544__auto__,opt__31545__auto__){
return cljs.core._write.call(null,writer__31544__auto__,"cljs.core.async/t_cljs$core$async37184");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async37184 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async37184(ch__$1,cs__$1,meta37185){
return (new cljs.core.async.t_cljs$core$async37184(ch__$1,cs__$1,meta37185));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async37184(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__36587__auto___37406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto___37406,cs,m,dchan,dctr,done){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto___37406,cs,m,dchan,dctr,done){
return (function (state_37321){
var state_val_37322 = (state_37321[(1)]);
if((state_val_37322 === (7))){
var inst_37317 = (state_37321[(2)]);
var state_37321__$1 = state_37321;
var statearr_37323_37407 = state_37321__$1;
(statearr_37323_37407[(2)] = inst_37317);

(statearr_37323_37407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (20))){
var inst_37220 = (state_37321[(7)]);
var inst_37232 = cljs.core.first.call(null,inst_37220);
var inst_37233 = cljs.core.nth.call(null,inst_37232,(0),null);
var inst_37234 = cljs.core.nth.call(null,inst_37232,(1),null);
var state_37321__$1 = (function (){var statearr_37324 = state_37321;
(statearr_37324[(8)] = inst_37233);

return statearr_37324;
})();
if(cljs.core.truth_(inst_37234)){
var statearr_37325_37408 = state_37321__$1;
(statearr_37325_37408[(1)] = (22));

} else {
var statearr_37326_37409 = state_37321__$1;
(statearr_37326_37409[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (27))){
var inst_37262 = (state_37321[(9)]);
var inst_37264 = (state_37321[(10)]);
var inst_37269 = (state_37321[(11)]);
var inst_37189 = (state_37321[(12)]);
var inst_37269__$1 = cljs.core._nth.call(null,inst_37262,inst_37264);
var inst_37270 = cljs.core.async.put_BANG_.call(null,inst_37269__$1,inst_37189,done);
var state_37321__$1 = (function (){var statearr_37327 = state_37321;
(statearr_37327[(11)] = inst_37269__$1);

return statearr_37327;
})();
if(cljs.core.truth_(inst_37270)){
var statearr_37328_37410 = state_37321__$1;
(statearr_37328_37410[(1)] = (30));

} else {
var statearr_37329_37411 = state_37321__$1;
(statearr_37329_37411[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (1))){
var state_37321__$1 = state_37321;
var statearr_37330_37412 = state_37321__$1;
(statearr_37330_37412[(2)] = null);

(statearr_37330_37412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (24))){
var inst_37220 = (state_37321[(7)]);
var inst_37239 = (state_37321[(2)]);
var inst_37240 = cljs.core.next.call(null,inst_37220);
var inst_37198 = inst_37240;
var inst_37199 = null;
var inst_37200 = (0);
var inst_37201 = (0);
var state_37321__$1 = (function (){var statearr_37331 = state_37321;
(statearr_37331[(13)] = inst_37239);

(statearr_37331[(14)] = inst_37198);

(statearr_37331[(15)] = inst_37201);

(statearr_37331[(16)] = inst_37199);

(statearr_37331[(17)] = inst_37200);

return statearr_37331;
})();
var statearr_37332_37413 = state_37321__$1;
(statearr_37332_37413[(2)] = null);

(statearr_37332_37413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (39))){
var state_37321__$1 = state_37321;
var statearr_37336_37414 = state_37321__$1;
(statearr_37336_37414[(2)] = null);

(statearr_37336_37414[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (4))){
var inst_37189 = (state_37321[(12)]);
var inst_37189__$1 = (state_37321[(2)]);
var inst_37190 = (inst_37189__$1 == null);
var state_37321__$1 = (function (){var statearr_37337 = state_37321;
(statearr_37337[(12)] = inst_37189__$1);

return statearr_37337;
})();
if(cljs.core.truth_(inst_37190)){
var statearr_37338_37415 = state_37321__$1;
(statearr_37338_37415[(1)] = (5));

} else {
var statearr_37339_37416 = state_37321__$1;
(statearr_37339_37416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (15))){
var inst_37198 = (state_37321[(14)]);
var inst_37201 = (state_37321[(15)]);
var inst_37199 = (state_37321[(16)]);
var inst_37200 = (state_37321[(17)]);
var inst_37216 = (state_37321[(2)]);
var inst_37217 = (inst_37201 + (1));
var tmp37333 = inst_37198;
var tmp37334 = inst_37199;
var tmp37335 = inst_37200;
var inst_37198__$1 = tmp37333;
var inst_37199__$1 = tmp37334;
var inst_37200__$1 = tmp37335;
var inst_37201__$1 = inst_37217;
var state_37321__$1 = (function (){var statearr_37340 = state_37321;
(statearr_37340[(14)] = inst_37198__$1);

(statearr_37340[(18)] = inst_37216);

(statearr_37340[(15)] = inst_37201__$1);

(statearr_37340[(16)] = inst_37199__$1);

(statearr_37340[(17)] = inst_37200__$1);

return statearr_37340;
})();
var statearr_37341_37417 = state_37321__$1;
(statearr_37341_37417[(2)] = null);

(statearr_37341_37417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (21))){
var inst_37243 = (state_37321[(2)]);
var state_37321__$1 = state_37321;
var statearr_37345_37418 = state_37321__$1;
(statearr_37345_37418[(2)] = inst_37243);

(statearr_37345_37418[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (31))){
var inst_37269 = (state_37321[(11)]);
var inst_37273 = done.call(null,null);
var inst_37274 = cljs.core.async.untap_STAR_.call(null,m,inst_37269);
var state_37321__$1 = (function (){var statearr_37346 = state_37321;
(statearr_37346[(19)] = inst_37273);

return statearr_37346;
})();
var statearr_37347_37419 = state_37321__$1;
(statearr_37347_37419[(2)] = inst_37274);

(statearr_37347_37419[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (32))){
var inst_37262 = (state_37321[(9)]);
var inst_37261 = (state_37321[(20)]);
var inst_37263 = (state_37321[(21)]);
var inst_37264 = (state_37321[(10)]);
var inst_37276 = (state_37321[(2)]);
var inst_37277 = (inst_37264 + (1));
var tmp37342 = inst_37262;
var tmp37343 = inst_37261;
var tmp37344 = inst_37263;
var inst_37261__$1 = tmp37343;
var inst_37262__$1 = tmp37342;
var inst_37263__$1 = tmp37344;
var inst_37264__$1 = inst_37277;
var state_37321__$1 = (function (){var statearr_37348 = state_37321;
(statearr_37348[(22)] = inst_37276);

(statearr_37348[(9)] = inst_37262__$1);

(statearr_37348[(20)] = inst_37261__$1);

(statearr_37348[(21)] = inst_37263__$1);

(statearr_37348[(10)] = inst_37264__$1);

return statearr_37348;
})();
var statearr_37349_37420 = state_37321__$1;
(statearr_37349_37420[(2)] = null);

(statearr_37349_37420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (40))){
var inst_37289 = (state_37321[(23)]);
var inst_37293 = done.call(null,null);
var inst_37294 = cljs.core.async.untap_STAR_.call(null,m,inst_37289);
var state_37321__$1 = (function (){var statearr_37350 = state_37321;
(statearr_37350[(24)] = inst_37293);

return statearr_37350;
})();
var statearr_37351_37421 = state_37321__$1;
(statearr_37351_37421[(2)] = inst_37294);

(statearr_37351_37421[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (33))){
var inst_37280 = (state_37321[(25)]);
var inst_37282 = cljs.core.chunked_seq_QMARK_.call(null,inst_37280);
var state_37321__$1 = state_37321;
if(inst_37282){
var statearr_37352_37422 = state_37321__$1;
(statearr_37352_37422[(1)] = (36));

} else {
var statearr_37353_37423 = state_37321__$1;
(statearr_37353_37423[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (13))){
var inst_37210 = (state_37321[(26)]);
var inst_37213 = cljs.core.async.close_BANG_.call(null,inst_37210);
var state_37321__$1 = state_37321;
var statearr_37354_37424 = state_37321__$1;
(statearr_37354_37424[(2)] = inst_37213);

(statearr_37354_37424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (22))){
var inst_37233 = (state_37321[(8)]);
var inst_37236 = cljs.core.async.close_BANG_.call(null,inst_37233);
var state_37321__$1 = state_37321;
var statearr_37355_37425 = state_37321__$1;
(statearr_37355_37425[(2)] = inst_37236);

(statearr_37355_37425[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (36))){
var inst_37280 = (state_37321[(25)]);
var inst_37284 = cljs.core.chunk_first.call(null,inst_37280);
var inst_37285 = cljs.core.chunk_rest.call(null,inst_37280);
var inst_37286 = cljs.core.count.call(null,inst_37284);
var inst_37261 = inst_37285;
var inst_37262 = inst_37284;
var inst_37263 = inst_37286;
var inst_37264 = (0);
var state_37321__$1 = (function (){var statearr_37356 = state_37321;
(statearr_37356[(9)] = inst_37262);

(statearr_37356[(20)] = inst_37261);

(statearr_37356[(21)] = inst_37263);

(statearr_37356[(10)] = inst_37264);

return statearr_37356;
})();
var statearr_37357_37426 = state_37321__$1;
(statearr_37357_37426[(2)] = null);

(statearr_37357_37426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (41))){
var inst_37280 = (state_37321[(25)]);
var inst_37296 = (state_37321[(2)]);
var inst_37297 = cljs.core.next.call(null,inst_37280);
var inst_37261 = inst_37297;
var inst_37262 = null;
var inst_37263 = (0);
var inst_37264 = (0);
var state_37321__$1 = (function (){var statearr_37358 = state_37321;
(statearr_37358[(9)] = inst_37262);

(statearr_37358[(27)] = inst_37296);

(statearr_37358[(20)] = inst_37261);

(statearr_37358[(21)] = inst_37263);

(statearr_37358[(10)] = inst_37264);

return statearr_37358;
})();
var statearr_37359_37427 = state_37321__$1;
(statearr_37359_37427[(2)] = null);

(statearr_37359_37427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (43))){
var state_37321__$1 = state_37321;
var statearr_37360_37428 = state_37321__$1;
(statearr_37360_37428[(2)] = null);

(statearr_37360_37428[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (29))){
var inst_37305 = (state_37321[(2)]);
var state_37321__$1 = state_37321;
var statearr_37361_37429 = state_37321__$1;
(statearr_37361_37429[(2)] = inst_37305);

(statearr_37361_37429[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (44))){
var inst_37314 = (state_37321[(2)]);
var state_37321__$1 = (function (){var statearr_37362 = state_37321;
(statearr_37362[(28)] = inst_37314);

return statearr_37362;
})();
var statearr_37363_37430 = state_37321__$1;
(statearr_37363_37430[(2)] = null);

(statearr_37363_37430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (6))){
var inst_37253 = (state_37321[(29)]);
var inst_37252 = cljs.core.deref.call(null,cs);
var inst_37253__$1 = cljs.core.keys.call(null,inst_37252);
var inst_37254 = cljs.core.count.call(null,inst_37253__$1);
var inst_37255 = cljs.core.reset_BANG_.call(null,dctr,inst_37254);
var inst_37260 = cljs.core.seq.call(null,inst_37253__$1);
var inst_37261 = inst_37260;
var inst_37262 = null;
var inst_37263 = (0);
var inst_37264 = (0);
var state_37321__$1 = (function (){var statearr_37364 = state_37321;
(statearr_37364[(9)] = inst_37262);

(statearr_37364[(20)] = inst_37261);

(statearr_37364[(21)] = inst_37263);

(statearr_37364[(10)] = inst_37264);

(statearr_37364[(30)] = inst_37255);

(statearr_37364[(29)] = inst_37253__$1);

return statearr_37364;
})();
var statearr_37365_37431 = state_37321__$1;
(statearr_37365_37431[(2)] = null);

(statearr_37365_37431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (28))){
var inst_37261 = (state_37321[(20)]);
var inst_37280 = (state_37321[(25)]);
var inst_37280__$1 = cljs.core.seq.call(null,inst_37261);
var state_37321__$1 = (function (){var statearr_37366 = state_37321;
(statearr_37366[(25)] = inst_37280__$1);

return statearr_37366;
})();
if(inst_37280__$1){
var statearr_37367_37432 = state_37321__$1;
(statearr_37367_37432[(1)] = (33));

} else {
var statearr_37368_37433 = state_37321__$1;
(statearr_37368_37433[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (25))){
var inst_37263 = (state_37321[(21)]);
var inst_37264 = (state_37321[(10)]);
var inst_37266 = (inst_37264 < inst_37263);
var inst_37267 = inst_37266;
var state_37321__$1 = state_37321;
if(cljs.core.truth_(inst_37267)){
var statearr_37369_37434 = state_37321__$1;
(statearr_37369_37434[(1)] = (27));

} else {
var statearr_37370_37435 = state_37321__$1;
(statearr_37370_37435[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (34))){
var state_37321__$1 = state_37321;
var statearr_37371_37436 = state_37321__$1;
(statearr_37371_37436[(2)] = null);

(statearr_37371_37436[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (17))){
var state_37321__$1 = state_37321;
var statearr_37372_37437 = state_37321__$1;
(statearr_37372_37437[(2)] = null);

(statearr_37372_37437[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (3))){
var inst_37319 = (state_37321[(2)]);
var state_37321__$1 = state_37321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37321__$1,inst_37319);
} else {
if((state_val_37322 === (12))){
var inst_37248 = (state_37321[(2)]);
var state_37321__$1 = state_37321;
var statearr_37373_37438 = state_37321__$1;
(statearr_37373_37438[(2)] = inst_37248);

(statearr_37373_37438[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (2))){
var state_37321__$1 = state_37321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37321__$1,(4),ch);
} else {
if((state_val_37322 === (23))){
var state_37321__$1 = state_37321;
var statearr_37374_37439 = state_37321__$1;
(statearr_37374_37439[(2)] = null);

(statearr_37374_37439[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (35))){
var inst_37303 = (state_37321[(2)]);
var state_37321__$1 = state_37321;
var statearr_37375_37440 = state_37321__$1;
(statearr_37375_37440[(2)] = inst_37303);

(statearr_37375_37440[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (19))){
var inst_37220 = (state_37321[(7)]);
var inst_37224 = cljs.core.chunk_first.call(null,inst_37220);
var inst_37225 = cljs.core.chunk_rest.call(null,inst_37220);
var inst_37226 = cljs.core.count.call(null,inst_37224);
var inst_37198 = inst_37225;
var inst_37199 = inst_37224;
var inst_37200 = inst_37226;
var inst_37201 = (0);
var state_37321__$1 = (function (){var statearr_37376 = state_37321;
(statearr_37376[(14)] = inst_37198);

(statearr_37376[(15)] = inst_37201);

(statearr_37376[(16)] = inst_37199);

(statearr_37376[(17)] = inst_37200);

return statearr_37376;
})();
var statearr_37377_37441 = state_37321__$1;
(statearr_37377_37441[(2)] = null);

(statearr_37377_37441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (11))){
var inst_37198 = (state_37321[(14)]);
var inst_37220 = (state_37321[(7)]);
var inst_37220__$1 = cljs.core.seq.call(null,inst_37198);
var state_37321__$1 = (function (){var statearr_37378 = state_37321;
(statearr_37378[(7)] = inst_37220__$1);

return statearr_37378;
})();
if(inst_37220__$1){
var statearr_37379_37442 = state_37321__$1;
(statearr_37379_37442[(1)] = (16));

} else {
var statearr_37380_37443 = state_37321__$1;
(statearr_37380_37443[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (9))){
var inst_37250 = (state_37321[(2)]);
var state_37321__$1 = state_37321;
var statearr_37381_37444 = state_37321__$1;
(statearr_37381_37444[(2)] = inst_37250);

(statearr_37381_37444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (5))){
var inst_37196 = cljs.core.deref.call(null,cs);
var inst_37197 = cljs.core.seq.call(null,inst_37196);
var inst_37198 = inst_37197;
var inst_37199 = null;
var inst_37200 = (0);
var inst_37201 = (0);
var state_37321__$1 = (function (){var statearr_37382 = state_37321;
(statearr_37382[(14)] = inst_37198);

(statearr_37382[(15)] = inst_37201);

(statearr_37382[(16)] = inst_37199);

(statearr_37382[(17)] = inst_37200);

return statearr_37382;
})();
var statearr_37383_37445 = state_37321__$1;
(statearr_37383_37445[(2)] = null);

(statearr_37383_37445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (14))){
var state_37321__$1 = state_37321;
var statearr_37384_37446 = state_37321__$1;
(statearr_37384_37446[(2)] = null);

(statearr_37384_37446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (45))){
var inst_37311 = (state_37321[(2)]);
var state_37321__$1 = state_37321;
var statearr_37385_37447 = state_37321__$1;
(statearr_37385_37447[(2)] = inst_37311);

(statearr_37385_37447[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (26))){
var inst_37253 = (state_37321[(29)]);
var inst_37307 = (state_37321[(2)]);
var inst_37308 = cljs.core.seq.call(null,inst_37253);
var state_37321__$1 = (function (){var statearr_37386 = state_37321;
(statearr_37386[(31)] = inst_37307);

return statearr_37386;
})();
if(inst_37308){
var statearr_37387_37448 = state_37321__$1;
(statearr_37387_37448[(1)] = (42));

} else {
var statearr_37388_37449 = state_37321__$1;
(statearr_37388_37449[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (16))){
var inst_37220 = (state_37321[(7)]);
var inst_37222 = cljs.core.chunked_seq_QMARK_.call(null,inst_37220);
var state_37321__$1 = state_37321;
if(inst_37222){
var statearr_37389_37450 = state_37321__$1;
(statearr_37389_37450[(1)] = (19));

} else {
var statearr_37390_37451 = state_37321__$1;
(statearr_37390_37451[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (38))){
var inst_37300 = (state_37321[(2)]);
var state_37321__$1 = state_37321;
var statearr_37391_37452 = state_37321__$1;
(statearr_37391_37452[(2)] = inst_37300);

(statearr_37391_37452[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (30))){
var state_37321__$1 = state_37321;
var statearr_37392_37453 = state_37321__$1;
(statearr_37392_37453[(2)] = null);

(statearr_37392_37453[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (10))){
var inst_37201 = (state_37321[(15)]);
var inst_37199 = (state_37321[(16)]);
var inst_37209 = cljs.core._nth.call(null,inst_37199,inst_37201);
var inst_37210 = cljs.core.nth.call(null,inst_37209,(0),null);
var inst_37211 = cljs.core.nth.call(null,inst_37209,(1),null);
var state_37321__$1 = (function (){var statearr_37393 = state_37321;
(statearr_37393[(26)] = inst_37210);

return statearr_37393;
})();
if(cljs.core.truth_(inst_37211)){
var statearr_37394_37454 = state_37321__$1;
(statearr_37394_37454[(1)] = (13));

} else {
var statearr_37395_37455 = state_37321__$1;
(statearr_37395_37455[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (18))){
var inst_37246 = (state_37321[(2)]);
var state_37321__$1 = state_37321;
var statearr_37396_37456 = state_37321__$1;
(statearr_37396_37456[(2)] = inst_37246);

(statearr_37396_37456[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (42))){
var state_37321__$1 = state_37321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37321__$1,(45),dchan);
} else {
if((state_val_37322 === (37))){
var inst_37289 = (state_37321[(23)]);
var inst_37280 = (state_37321[(25)]);
var inst_37189 = (state_37321[(12)]);
var inst_37289__$1 = cljs.core.first.call(null,inst_37280);
var inst_37290 = cljs.core.async.put_BANG_.call(null,inst_37289__$1,inst_37189,done);
var state_37321__$1 = (function (){var statearr_37397 = state_37321;
(statearr_37397[(23)] = inst_37289__$1);

return statearr_37397;
})();
if(cljs.core.truth_(inst_37290)){
var statearr_37398_37457 = state_37321__$1;
(statearr_37398_37457[(1)] = (39));

} else {
var statearr_37399_37458 = state_37321__$1;
(statearr_37399_37458[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37322 === (8))){
var inst_37201 = (state_37321[(15)]);
var inst_37200 = (state_37321[(17)]);
var inst_37203 = (inst_37201 < inst_37200);
var inst_37204 = inst_37203;
var state_37321__$1 = state_37321;
if(cljs.core.truth_(inst_37204)){
var statearr_37400_37459 = state_37321__$1;
(statearr_37400_37459[(1)] = (10));

} else {
var statearr_37401_37460 = state_37321__$1;
(statearr_37401_37460[(1)] = (11));

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
});})(c__36587__auto___37406,cs,m,dchan,dctr,done))
;
return ((function (switch__36497__auto__,c__36587__auto___37406,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__36498__auto__ = null;
var cljs$core$async$mult_$_state_machine__36498__auto____0 = (function (){
var statearr_37402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37402[(0)] = cljs$core$async$mult_$_state_machine__36498__auto__);

(statearr_37402[(1)] = (1));

return statearr_37402;
});
var cljs$core$async$mult_$_state_machine__36498__auto____1 = (function (state_37321){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_37321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e37403){if((e37403 instanceof Object)){
var ex__36501__auto__ = e37403;
var statearr_37404_37461 = state_37321;
(statearr_37404_37461[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37462 = state_37321;
state_37321 = G__37462;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36498__auto__ = function(state_37321){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36498__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36498__auto____1.call(this,state_37321);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36498__auto____0;
cljs$core$async$mult_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36498__auto____1;
return cljs$core$async$mult_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto___37406,cs,m,dchan,dctr,done))
})();
var state__36589__auto__ = (function (){var statearr_37405 = f__36588__auto__.call(null);
(statearr_37405[(6)] = c__36587__auto___37406);

return statearr_37405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto___37406,cs,m,dchan,dctr,done))
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
var G__37464 = arguments.length;
switch (G__37464) {
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
var x__31605__auto__ = (((m == null))?null:m);
var m__31606__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__31605__auto__)]);
if(!((m__31606__auto__ == null))){
return m__31606__auto__.call(null,m,ch);
} else {
var m__31606__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__31606__auto____$1 == null))){
return m__31606__auto____$1.call(null,m,ch);
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
var x__31605__auto__ = (((m == null))?null:m);
var m__31606__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__31605__auto__)]);
if(!((m__31606__auto__ == null))){
return m__31606__auto__.call(null,m,ch);
} else {
var m__31606__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__31606__auto____$1 == null))){
return m__31606__auto____$1.call(null,m,ch);
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
var x__31605__auto__ = (((m == null))?null:m);
var m__31606__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__31605__auto__)]);
if(!((m__31606__auto__ == null))){
return m__31606__auto__.call(null,m);
} else {
var m__31606__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__31606__auto____$1 == null))){
return m__31606__auto____$1.call(null,m);
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
var x__31605__auto__ = (((m == null))?null:m);
var m__31606__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__31605__auto__)]);
if(!((m__31606__auto__ == null))){
return m__31606__auto__.call(null,m,state_map);
} else {
var m__31606__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__31606__auto____$1 == null))){
return m__31606__auto____$1.call(null,m,state_map);
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
var x__31605__auto__ = (((m == null))?null:m);
var m__31606__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__31605__auto__)]);
if(!((m__31606__auto__ == null))){
return m__31606__auto__.call(null,m,mode);
} else {
var m__31606__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__31606__auto____$1 == null))){
return m__31606__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__32158__auto__ = [];
var len__32151__auto___37476 = arguments.length;
var i__32152__auto___37477 = (0);
while(true){
if((i__32152__auto___37477 < len__32151__auto___37476)){
args__32158__auto__.push((arguments[i__32152__auto___37477]));

var G__37478 = (i__32152__auto___37477 + (1));
i__32152__auto___37477 = G__37478;
continue;
} else {
}
break;
}

var argseq__32159__auto__ = ((((3) < args__32158__auto__.length))?(new cljs.core.IndexedSeq(args__32158__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32159__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37470){
var map__37471 = p__37470;
var map__37471__$1 = ((((!((map__37471 == null)))?((((map__37471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37471.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37471):map__37471);
var opts = map__37471__$1;
var statearr_37473_37479 = state;
(statearr_37473_37479[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__37471,map__37471__$1,opts){
return (function (val){
var statearr_37474_37480 = state;
(statearr_37474_37480[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37471,map__37471__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_37475_37481 = state;
(statearr_37475_37481[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37466){
var G__37467 = cljs.core.first.call(null,seq37466);
var seq37466__$1 = cljs.core.next.call(null,seq37466);
var G__37468 = cljs.core.first.call(null,seq37466__$1);
var seq37466__$2 = cljs.core.next.call(null,seq37466__$1);
var G__37469 = cljs.core.first.call(null,seq37466__$2);
var seq37466__$3 = cljs.core.next.call(null,seq37466__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37467,G__37468,G__37469,seq37466__$3);
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
if(typeof cljs.core.async.t_cljs$core$async37482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37482 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta37483){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta37483 = meta37483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37484,meta37483__$1){
var self__ = this;
var _37484__$1 = this;
return (new cljs.core.async.t_cljs$core$async37482(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta37483__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37482.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37484){
var self__ = this;
var _37484__$1 = this;
return self__.meta37483;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37482.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37482.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37482.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37482.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37482.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37482.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37482.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37482.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async37482.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta37483","meta37483",-57470659,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37482";

cljs.core.async.t_cljs$core$async37482.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__31543__auto__,writer__31544__auto__,opt__31545__auto__){
return cljs.core._write.call(null,writer__31544__auto__,"cljs.core.async/t_cljs$core$async37482");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async37482 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async37482(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta37483){
return (new cljs.core.async.t_cljs$core$async37482(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta37483));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async37482(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36587__auto___37646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto___37646,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto___37646,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37586){
var state_val_37587 = (state_37586[(1)]);
if((state_val_37587 === (7))){
var inst_37501 = (state_37586[(2)]);
var state_37586__$1 = state_37586;
var statearr_37588_37647 = state_37586__$1;
(statearr_37588_37647[(2)] = inst_37501);

(statearr_37588_37647[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (20))){
var inst_37513 = (state_37586[(7)]);
var state_37586__$1 = state_37586;
var statearr_37589_37648 = state_37586__$1;
(statearr_37589_37648[(2)] = inst_37513);

(statearr_37589_37648[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (27))){
var state_37586__$1 = state_37586;
var statearr_37590_37649 = state_37586__$1;
(statearr_37590_37649[(2)] = null);

(statearr_37590_37649[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (1))){
var inst_37488 = (state_37586[(8)]);
var inst_37488__$1 = calc_state.call(null);
var inst_37490 = (inst_37488__$1 == null);
var inst_37491 = cljs.core.not.call(null,inst_37490);
var state_37586__$1 = (function (){var statearr_37591 = state_37586;
(statearr_37591[(8)] = inst_37488__$1);

return statearr_37591;
})();
if(inst_37491){
var statearr_37592_37650 = state_37586__$1;
(statearr_37592_37650[(1)] = (2));

} else {
var statearr_37593_37651 = state_37586__$1;
(statearr_37593_37651[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (24))){
var inst_37560 = (state_37586[(9)]);
var inst_37546 = (state_37586[(10)]);
var inst_37537 = (state_37586[(11)]);
var inst_37560__$1 = inst_37537.call(null,inst_37546);
var state_37586__$1 = (function (){var statearr_37594 = state_37586;
(statearr_37594[(9)] = inst_37560__$1);

return statearr_37594;
})();
if(cljs.core.truth_(inst_37560__$1)){
var statearr_37595_37652 = state_37586__$1;
(statearr_37595_37652[(1)] = (29));

} else {
var statearr_37596_37653 = state_37586__$1;
(statearr_37596_37653[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (4))){
var inst_37504 = (state_37586[(2)]);
var state_37586__$1 = state_37586;
if(cljs.core.truth_(inst_37504)){
var statearr_37597_37654 = state_37586__$1;
(statearr_37597_37654[(1)] = (8));

} else {
var statearr_37598_37655 = state_37586__$1;
(statearr_37598_37655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (15))){
var inst_37531 = (state_37586[(2)]);
var state_37586__$1 = state_37586;
if(cljs.core.truth_(inst_37531)){
var statearr_37599_37656 = state_37586__$1;
(statearr_37599_37656[(1)] = (19));

} else {
var statearr_37600_37657 = state_37586__$1;
(statearr_37600_37657[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (21))){
var inst_37536 = (state_37586[(12)]);
var inst_37536__$1 = (state_37586[(2)]);
var inst_37537 = cljs.core.get.call(null,inst_37536__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37538 = cljs.core.get.call(null,inst_37536__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37539 = cljs.core.get.call(null,inst_37536__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37586__$1 = (function (){var statearr_37601 = state_37586;
(statearr_37601[(11)] = inst_37537);

(statearr_37601[(12)] = inst_37536__$1);

(statearr_37601[(13)] = inst_37538);

return statearr_37601;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37586__$1,(22),inst_37539);
} else {
if((state_val_37587 === (31))){
var inst_37568 = (state_37586[(2)]);
var state_37586__$1 = state_37586;
if(cljs.core.truth_(inst_37568)){
var statearr_37602_37658 = state_37586__$1;
(statearr_37602_37658[(1)] = (32));

} else {
var statearr_37603_37659 = state_37586__$1;
(statearr_37603_37659[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (32))){
var inst_37545 = (state_37586[(14)]);
var state_37586__$1 = state_37586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37586__$1,(35),out,inst_37545);
} else {
if((state_val_37587 === (33))){
var inst_37536 = (state_37586[(12)]);
var inst_37513 = inst_37536;
var state_37586__$1 = (function (){var statearr_37604 = state_37586;
(statearr_37604[(7)] = inst_37513);

return statearr_37604;
})();
var statearr_37605_37660 = state_37586__$1;
(statearr_37605_37660[(2)] = null);

(statearr_37605_37660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (13))){
var inst_37513 = (state_37586[(7)]);
var inst_37520 = inst_37513.cljs$lang$protocol_mask$partition0$;
var inst_37521 = (inst_37520 & (64));
var inst_37522 = inst_37513.cljs$core$ISeq$;
var inst_37523 = (cljs.core.PROTOCOL_SENTINEL === inst_37522);
var inst_37524 = (inst_37521) || (inst_37523);
var state_37586__$1 = state_37586;
if(cljs.core.truth_(inst_37524)){
var statearr_37606_37661 = state_37586__$1;
(statearr_37606_37661[(1)] = (16));

} else {
var statearr_37607_37662 = state_37586__$1;
(statearr_37607_37662[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (22))){
var inst_37546 = (state_37586[(10)]);
var inst_37545 = (state_37586[(14)]);
var inst_37544 = (state_37586[(2)]);
var inst_37545__$1 = cljs.core.nth.call(null,inst_37544,(0),null);
var inst_37546__$1 = cljs.core.nth.call(null,inst_37544,(1),null);
var inst_37547 = (inst_37545__$1 == null);
var inst_37548 = cljs.core._EQ_.call(null,inst_37546__$1,change);
var inst_37549 = (inst_37547) || (inst_37548);
var state_37586__$1 = (function (){var statearr_37608 = state_37586;
(statearr_37608[(10)] = inst_37546__$1);

(statearr_37608[(14)] = inst_37545__$1);

return statearr_37608;
})();
if(cljs.core.truth_(inst_37549)){
var statearr_37609_37663 = state_37586__$1;
(statearr_37609_37663[(1)] = (23));

} else {
var statearr_37610_37664 = state_37586__$1;
(statearr_37610_37664[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (36))){
var inst_37536 = (state_37586[(12)]);
var inst_37513 = inst_37536;
var state_37586__$1 = (function (){var statearr_37611 = state_37586;
(statearr_37611[(7)] = inst_37513);

return statearr_37611;
})();
var statearr_37612_37665 = state_37586__$1;
(statearr_37612_37665[(2)] = null);

(statearr_37612_37665[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (29))){
var inst_37560 = (state_37586[(9)]);
var state_37586__$1 = state_37586;
var statearr_37613_37666 = state_37586__$1;
(statearr_37613_37666[(2)] = inst_37560);

(statearr_37613_37666[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (6))){
var state_37586__$1 = state_37586;
var statearr_37614_37667 = state_37586__$1;
(statearr_37614_37667[(2)] = false);

(statearr_37614_37667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (28))){
var inst_37556 = (state_37586[(2)]);
var inst_37557 = calc_state.call(null);
var inst_37513 = inst_37557;
var state_37586__$1 = (function (){var statearr_37615 = state_37586;
(statearr_37615[(7)] = inst_37513);

(statearr_37615[(15)] = inst_37556);

return statearr_37615;
})();
var statearr_37616_37668 = state_37586__$1;
(statearr_37616_37668[(2)] = null);

(statearr_37616_37668[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (25))){
var inst_37582 = (state_37586[(2)]);
var state_37586__$1 = state_37586;
var statearr_37617_37669 = state_37586__$1;
(statearr_37617_37669[(2)] = inst_37582);

(statearr_37617_37669[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (34))){
var inst_37580 = (state_37586[(2)]);
var state_37586__$1 = state_37586;
var statearr_37618_37670 = state_37586__$1;
(statearr_37618_37670[(2)] = inst_37580);

(statearr_37618_37670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (17))){
var state_37586__$1 = state_37586;
var statearr_37619_37671 = state_37586__$1;
(statearr_37619_37671[(2)] = false);

(statearr_37619_37671[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (3))){
var state_37586__$1 = state_37586;
var statearr_37620_37672 = state_37586__$1;
(statearr_37620_37672[(2)] = false);

(statearr_37620_37672[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (12))){
var inst_37584 = (state_37586[(2)]);
var state_37586__$1 = state_37586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37586__$1,inst_37584);
} else {
if((state_val_37587 === (2))){
var inst_37488 = (state_37586[(8)]);
var inst_37493 = inst_37488.cljs$lang$protocol_mask$partition0$;
var inst_37494 = (inst_37493 & (64));
var inst_37495 = inst_37488.cljs$core$ISeq$;
var inst_37496 = (cljs.core.PROTOCOL_SENTINEL === inst_37495);
var inst_37497 = (inst_37494) || (inst_37496);
var state_37586__$1 = state_37586;
if(cljs.core.truth_(inst_37497)){
var statearr_37621_37673 = state_37586__$1;
(statearr_37621_37673[(1)] = (5));

} else {
var statearr_37622_37674 = state_37586__$1;
(statearr_37622_37674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (23))){
var inst_37545 = (state_37586[(14)]);
var inst_37551 = (inst_37545 == null);
var state_37586__$1 = state_37586;
if(cljs.core.truth_(inst_37551)){
var statearr_37623_37675 = state_37586__$1;
(statearr_37623_37675[(1)] = (26));

} else {
var statearr_37624_37676 = state_37586__$1;
(statearr_37624_37676[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (35))){
var inst_37571 = (state_37586[(2)]);
var state_37586__$1 = state_37586;
if(cljs.core.truth_(inst_37571)){
var statearr_37625_37677 = state_37586__$1;
(statearr_37625_37677[(1)] = (36));

} else {
var statearr_37626_37678 = state_37586__$1;
(statearr_37626_37678[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (19))){
var inst_37513 = (state_37586[(7)]);
var inst_37533 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37513);
var state_37586__$1 = state_37586;
var statearr_37627_37679 = state_37586__$1;
(statearr_37627_37679[(2)] = inst_37533);

(statearr_37627_37679[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (11))){
var inst_37513 = (state_37586[(7)]);
var inst_37517 = (inst_37513 == null);
var inst_37518 = cljs.core.not.call(null,inst_37517);
var state_37586__$1 = state_37586;
if(inst_37518){
var statearr_37628_37680 = state_37586__$1;
(statearr_37628_37680[(1)] = (13));

} else {
var statearr_37629_37681 = state_37586__$1;
(statearr_37629_37681[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (9))){
var inst_37488 = (state_37586[(8)]);
var state_37586__$1 = state_37586;
var statearr_37630_37682 = state_37586__$1;
(statearr_37630_37682[(2)] = inst_37488);

(statearr_37630_37682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (5))){
var state_37586__$1 = state_37586;
var statearr_37631_37683 = state_37586__$1;
(statearr_37631_37683[(2)] = true);

(statearr_37631_37683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (14))){
var state_37586__$1 = state_37586;
var statearr_37632_37684 = state_37586__$1;
(statearr_37632_37684[(2)] = false);

(statearr_37632_37684[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (26))){
var inst_37546 = (state_37586[(10)]);
var inst_37553 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37546);
var state_37586__$1 = state_37586;
var statearr_37633_37685 = state_37586__$1;
(statearr_37633_37685[(2)] = inst_37553);

(statearr_37633_37685[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (16))){
var state_37586__$1 = state_37586;
var statearr_37634_37686 = state_37586__$1;
(statearr_37634_37686[(2)] = true);

(statearr_37634_37686[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (38))){
var inst_37576 = (state_37586[(2)]);
var state_37586__$1 = state_37586;
var statearr_37635_37687 = state_37586__$1;
(statearr_37635_37687[(2)] = inst_37576);

(statearr_37635_37687[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (30))){
var inst_37546 = (state_37586[(10)]);
var inst_37537 = (state_37586[(11)]);
var inst_37538 = (state_37586[(13)]);
var inst_37563 = cljs.core.empty_QMARK_.call(null,inst_37537);
var inst_37564 = inst_37538.call(null,inst_37546);
var inst_37565 = cljs.core.not.call(null,inst_37564);
var inst_37566 = (inst_37563) && (inst_37565);
var state_37586__$1 = state_37586;
var statearr_37636_37688 = state_37586__$1;
(statearr_37636_37688[(2)] = inst_37566);

(statearr_37636_37688[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (10))){
var inst_37488 = (state_37586[(8)]);
var inst_37509 = (state_37586[(2)]);
var inst_37510 = cljs.core.get.call(null,inst_37509,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37511 = cljs.core.get.call(null,inst_37509,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37512 = cljs.core.get.call(null,inst_37509,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37513 = inst_37488;
var state_37586__$1 = (function (){var statearr_37637 = state_37586;
(statearr_37637[(7)] = inst_37513);

(statearr_37637[(16)] = inst_37512);

(statearr_37637[(17)] = inst_37511);

(statearr_37637[(18)] = inst_37510);

return statearr_37637;
})();
var statearr_37638_37689 = state_37586__$1;
(statearr_37638_37689[(2)] = null);

(statearr_37638_37689[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (18))){
var inst_37528 = (state_37586[(2)]);
var state_37586__$1 = state_37586;
var statearr_37639_37690 = state_37586__$1;
(statearr_37639_37690[(2)] = inst_37528);

(statearr_37639_37690[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (37))){
var state_37586__$1 = state_37586;
var statearr_37640_37691 = state_37586__$1;
(statearr_37640_37691[(2)] = null);

(statearr_37640_37691[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37587 === (8))){
var inst_37488 = (state_37586[(8)]);
var inst_37506 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37488);
var state_37586__$1 = state_37586;
var statearr_37641_37692 = state_37586__$1;
(statearr_37641_37692[(2)] = inst_37506);

(statearr_37641_37692[(1)] = (10));


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
});})(c__36587__auto___37646,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__36497__auto__,c__36587__auto___37646,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__36498__auto__ = null;
var cljs$core$async$mix_$_state_machine__36498__auto____0 = (function (){
var statearr_37642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37642[(0)] = cljs$core$async$mix_$_state_machine__36498__auto__);

(statearr_37642[(1)] = (1));

return statearr_37642;
});
var cljs$core$async$mix_$_state_machine__36498__auto____1 = (function (state_37586){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_37586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e37643){if((e37643 instanceof Object)){
var ex__36501__auto__ = e37643;
var statearr_37644_37693 = state_37586;
(statearr_37644_37693[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37694 = state_37586;
state_37586 = G__37694;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36498__auto__ = function(state_37586){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36498__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36498__auto____1.call(this,state_37586);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36498__auto____0;
cljs$core$async$mix_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36498__auto____1;
return cljs$core$async$mix_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto___37646,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__36589__auto__ = (function (){var statearr_37645 = f__36588__auto__.call(null);
(statearr_37645[(6)] = c__36587__auto___37646);

return statearr_37645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto___37646,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__31605__auto__ = (((p == null))?null:p);
var m__31606__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__31605__auto__)]);
if(!((m__31606__auto__ == null))){
return m__31606__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__31606__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__31606__auto____$1 == null))){
return m__31606__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__31605__auto__ = (((p == null))?null:p);
var m__31606__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__31605__auto__)]);
if(!((m__31606__auto__ == null))){
return m__31606__auto__.call(null,p,v,ch);
} else {
var m__31606__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__31606__auto____$1 == null))){
return m__31606__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37696 = arguments.length;
switch (G__37696) {
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
var x__31605__auto__ = (((p == null))?null:p);
var m__31606__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31605__auto__)]);
if(!((m__31606__auto__ == null))){
return m__31606__auto__.call(null,p);
} else {
var m__31606__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31606__auto____$1 == null))){
return m__31606__auto____$1.call(null,p);
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
var x__31605__auto__ = (((p == null))?null:p);
var m__31606__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31605__auto__)]);
if(!((m__31606__auto__ == null))){
return m__31606__auto__.call(null,p,v);
} else {
var m__31606__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31606__auto____$1 == null))){
return m__31606__auto____$1.call(null,p,v);
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
var G__37700 = arguments.length;
switch (G__37700) {
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
var or__30872__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30872__auto__)){
return or__30872__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30872__auto__,mults){
return (function (p1__37698_SHARP_){
if(cljs.core.truth_(p1__37698_SHARP_.call(null,topic))){
return p1__37698_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37698_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30872__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async37701 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37701 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37702){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37702 = meta37702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37703,meta37702__$1){
var self__ = this;
var _37703__$1 = this;
return (new cljs.core.async.t_cljs$core$async37701(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37702__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37701.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37703){
var self__ = this;
var _37703__$1 = this;
return self__.meta37702;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37701.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37701.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37701.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37701.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37701.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async37701.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37701.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37701.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37702","meta37702",-583000548,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37701.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37701";

cljs.core.async.t_cljs$core$async37701.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__31543__auto__,writer__31544__auto__,opt__31545__auto__){
return cljs.core._write.call(null,writer__31544__auto__,"cljs.core.async/t_cljs$core$async37701");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async37701 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async37701(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37702){
return (new cljs.core.async.t_cljs$core$async37701(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37702));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async37701(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36587__auto___37821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto___37821,mults,ensure_mult,p){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto___37821,mults,ensure_mult,p){
return (function (state_37775){
var state_val_37776 = (state_37775[(1)]);
if((state_val_37776 === (7))){
var inst_37771 = (state_37775[(2)]);
var state_37775__$1 = state_37775;
var statearr_37777_37822 = state_37775__$1;
(statearr_37777_37822[(2)] = inst_37771);

(statearr_37777_37822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (20))){
var state_37775__$1 = state_37775;
var statearr_37778_37823 = state_37775__$1;
(statearr_37778_37823[(2)] = null);

(statearr_37778_37823[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (1))){
var state_37775__$1 = state_37775;
var statearr_37779_37824 = state_37775__$1;
(statearr_37779_37824[(2)] = null);

(statearr_37779_37824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (24))){
var inst_37754 = (state_37775[(7)]);
var inst_37763 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37754);
var state_37775__$1 = state_37775;
var statearr_37780_37825 = state_37775__$1;
(statearr_37780_37825[(2)] = inst_37763);

(statearr_37780_37825[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (4))){
var inst_37706 = (state_37775[(8)]);
var inst_37706__$1 = (state_37775[(2)]);
var inst_37707 = (inst_37706__$1 == null);
var state_37775__$1 = (function (){var statearr_37781 = state_37775;
(statearr_37781[(8)] = inst_37706__$1);

return statearr_37781;
})();
if(cljs.core.truth_(inst_37707)){
var statearr_37782_37826 = state_37775__$1;
(statearr_37782_37826[(1)] = (5));

} else {
var statearr_37783_37827 = state_37775__$1;
(statearr_37783_37827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (15))){
var inst_37748 = (state_37775[(2)]);
var state_37775__$1 = state_37775;
var statearr_37784_37828 = state_37775__$1;
(statearr_37784_37828[(2)] = inst_37748);

(statearr_37784_37828[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (21))){
var inst_37768 = (state_37775[(2)]);
var state_37775__$1 = (function (){var statearr_37785 = state_37775;
(statearr_37785[(9)] = inst_37768);

return statearr_37785;
})();
var statearr_37786_37829 = state_37775__$1;
(statearr_37786_37829[(2)] = null);

(statearr_37786_37829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (13))){
var inst_37730 = (state_37775[(10)]);
var inst_37732 = cljs.core.chunked_seq_QMARK_.call(null,inst_37730);
var state_37775__$1 = state_37775;
if(inst_37732){
var statearr_37787_37830 = state_37775__$1;
(statearr_37787_37830[(1)] = (16));

} else {
var statearr_37788_37831 = state_37775__$1;
(statearr_37788_37831[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (22))){
var inst_37760 = (state_37775[(2)]);
var state_37775__$1 = state_37775;
if(cljs.core.truth_(inst_37760)){
var statearr_37789_37832 = state_37775__$1;
(statearr_37789_37832[(1)] = (23));

} else {
var statearr_37790_37833 = state_37775__$1;
(statearr_37790_37833[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (6))){
var inst_37706 = (state_37775[(8)]);
var inst_37754 = (state_37775[(7)]);
var inst_37756 = (state_37775[(11)]);
var inst_37754__$1 = topic_fn.call(null,inst_37706);
var inst_37755 = cljs.core.deref.call(null,mults);
var inst_37756__$1 = cljs.core.get.call(null,inst_37755,inst_37754__$1);
var state_37775__$1 = (function (){var statearr_37791 = state_37775;
(statearr_37791[(7)] = inst_37754__$1);

(statearr_37791[(11)] = inst_37756__$1);

return statearr_37791;
})();
if(cljs.core.truth_(inst_37756__$1)){
var statearr_37792_37834 = state_37775__$1;
(statearr_37792_37834[(1)] = (19));

} else {
var statearr_37793_37835 = state_37775__$1;
(statearr_37793_37835[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (25))){
var inst_37765 = (state_37775[(2)]);
var state_37775__$1 = state_37775;
var statearr_37794_37836 = state_37775__$1;
(statearr_37794_37836[(2)] = inst_37765);

(statearr_37794_37836[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (17))){
var inst_37730 = (state_37775[(10)]);
var inst_37739 = cljs.core.first.call(null,inst_37730);
var inst_37740 = cljs.core.async.muxch_STAR_.call(null,inst_37739);
var inst_37741 = cljs.core.async.close_BANG_.call(null,inst_37740);
var inst_37742 = cljs.core.next.call(null,inst_37730);
var inst_37716 = inst_37742;
var inst_37717 = null;
var inst_37718 = (0);
var inst_37719 = (0);
var state_37775__$1 = (function (){var statearr_37795 = state_37775;
(statearr_37795[(12)] = inst_37717);

(statearr_37795[(13)] = inst_37716);

(statearr_37795[(14)] = inst_37718);

(statearr_37795[(15)] = inst_37719);

(statearr_37795[(16)] = inst_37741);

return statearr_37795;
})();
var statearr_37796_37837 = state_37775__$1;
(statearr_37796_37837[(2)] = null);

(statearr_37796_37837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (3))){
var inst_37773 = (state_37775[(2)]);
var state_37775__$1 = state_37775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37775__$1,inst_37773);
} else {
if((state_val_37776 === (12))){
var inst_37750 = (state_37775[(2)]);
var state_37775__$1 = state_37775;
var statearr_37797_37838 = state_37775__$1;
(statearr_37797_37838[(2)] = inst_37750);

(statearr_37797_37838[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (2))){
var state_37775__$1 = state_37775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37775__$1,(4),ch);
} else {
if((state_val_37776 === (23))){
var state_37775__$1 = state_37775;
var statearr_37798_37839 = state_37775__$1;
(statearr_37798_37839[(2)] = null);

(statearr_37798_37839[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (19))){
var inst_37706 = (state_37775[(8)]);
var inst_37756 = (state_37775[(11)]);
var inst_37758 = cljs.core.async.muxch_STAR_.call(null,inst_37756);
var state_37775__$1 = state_37775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37775__$1,(22),inst_37758,inst_37706);
} else {
if((state_val_37776 === (11))){
var inst_37716 = (state_37775[(13)]);
var inst_37730 = (state_37775[(10)]);
var inst_37730__$1 = cljs.core.seq.call(null,inst_37716);
var state_37775__$1 = (function (){var statearr_37799 = state_37775;
(statearr_37799[(10)] = inst_37730__$1);

return statearr_37799;
})();
if(inst_37730__$1){
var statearr_37800_37840 = state_37775__$1;
(statearr_37800_37840[(1)] = (13));

} else {
var statearr_37801_37841 = state_37775__$1;
(statearr_37801_37841[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (9))){
var inst_37752 = (state_37775[(2)]);
var state_37775__$1 = state_37775;
var statearr_37802_37842 = state_37775__$1;
(statearr_37802_37842[(2)] = inst_37752);

(statearr_37802_37842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (5))){
var inst_37713 = cljs.core.deref.call(null,mults);
var inst_37714 = cljs.core.vals.call(null,inst_37713);
var inst_37715 = cljs.core.seq.call(null,inst_37714);
var inst_37716 = inst_37715;
var inst_37717 = null;
var inst_37718 = (0);
var inst_37719 = (0);
var state_37775__$1 = (function (){var statearr_37803 = state_37775;
(statearr_37803[(12)] = inst_37717);

(statearr_37803[(13)] = inst_37716);

(statearr_37803[(14)] = inst_37718);

(statearr_37803[(15)] = inst_37719);

return statearr_37803;
})();
var statearr_37804_37843 = state_37775__$1;
(statearr_37804_37843[(2)] = null);

(statearr_37804_37843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (14))){
var state_37775__$1 = state_37775;
var statearr_37808_37844 = state_37775__$1;
(statearr_37808_37844[(2)] = null);

(statearr_37808_37844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (16))){
var inst_37730 = (state_37775[(10)]);
var inst_37734 = cljs.core.chunk_first.call(null,inst_37730);
var inst_37735 = cljs.core.chunk_rest.call(null,inst_37730);
var inst_37736 = cljs.core.count.call(null,inst_37734);
var inst_37716 = inst_37735;
var inst_37717 = inst_37734;
var inst_37718 = inst_37736;
var inst_37719 = (0);
var state_37775__$1 = (function (){var statearr_37809 = state_37775;
(statearr_37809[(12)] = inst_37717);

(statearr_37809[(13)] = inst_37716);

(statearr_37809[(14)] = inst_37718);

(statearr_37809[(15)] = inst_37719);

return statearr_37809;
})();
var statearr_37810_37845 = state_37775__$1;
(statearr_37810_37845[(2)] = null);

(statearr_37810_37845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (10))){
var inst_37717 = (state_37775[(12)]);
var inst_37716 = (state_37775[(13)]);
var inst_37718 = (state_37775[(14)]);
var inst_37719 = (state_37775[(15)]);
var inst_37724 = cljs.core._nth.call(null,inst_37717,inst_37719);
var inst_37725 = cljs.core.async.muxch_STAR_.call(null,inst_37724);
var inst_37726 = cljs.core.async.close_BANG_.call(null,inst_37725);
var inst_37727 = (inst_37719 + (1));
var tmp37805 = inst_37717;
var tmp37806 = inst_37716;
var tmp37807 = inst_37718;
var inst_37716__$1 = tmp37806;
var inst_37717__$1 = tmp37805;
var inst_37718__$1 = tmp37807;
var inst_37719__$1 = inst_37727;
var state_37775__$1 = (function (){var statearr_37811 = state_37775;
(statearr_37811[(12)] = inst_37717__$1);

(statearr_37811[(13)] = inst_37716__$1);

(statearr_37811[(17)] = inst_37726);

(statearr_37811[(14)] = inst_37718__$1);

(statearr_37811[(15)] = inst_37719__$1);

return statearr_37811;
})();
var statearr_37812_37846 = state_37775__$1;
(statearr_37812_37846[(2)] = null);

(statearr_37812_37846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (18))){
var inst_37745 = (state_37775[(2)]);
var state_37775__$1 = state_37775;
var statearr_37813_37847 = state_37775__$1;
(statearr_37813_37847[(2)] = inst_37745);

(statearr_37813_37847[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37776 === (8))){
var inst_37718 = (state_37775[(14)]);
var inst_37719 = (state_37775[(15)]);
var inst_37721 = (inst_37719 < inst_37718);
var inst_37722 = inst_37721;
var state_37775__$1 = state_37775;
if(cljs.core.truth_(inst_37722)){
var statearr_37814_37848 = state_37775__$1;
(statearr_37814_37848[(1)] = (10));

} else {
var statearr_37815_37849 = state_37775__$1;
(statearr_37815_37849[(1)] = (11));

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
});})(c__36587__auto___37821,mults,ensure_mult,p))
;
return ((function (switch__36497__auto__,c__36587__auto___37821,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__36498__auto__ = null;
var cljs$core$async$state_machine__36498__auto____0 = (function (){
var statearr_37816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37816[(0)] = cljs$core$async$state_machine__36498__auto__);

(statearr_37816[(1)] = (1));

return statearr_37816;
});
var cljs$core$async$state_machine__36498__auto____1 = (function (state_37775){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_37775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e37817){if((e37817 instanceof Object)){
var ex__36501__auto__ = e37817;
var statearr_37818_37850 = state_37775;
(statearr_37818_37850[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37851 = state_37775;
state_37775 = G__37851;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs$core$async$state_machine__36498__auto__ = function(state_37775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36498__auto____1.call(this,state_37775);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36498__auto____0;
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36498__auto____1;
return cljs$core$async$state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto___37821,mults,ensure_mult,p))
})();
var state__36589__auto__ = (function (){var statearr_37819 = f__36588__auto__.call(null);
(statearr_37819[(6)] = c__36587__auto___37821);

return statearr_37819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto___37821,mults,ensure_mult,p))
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
var G__37853 = arguments.length;
switch (G__37853) {
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
var G__37856 = arguments.length;
switch (G__37856) {
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
var G__37859 = arguments.length;
switch (G__37859) {
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
var c__36587__auto___37926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto___37926,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto___37926,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37898){
var state_val_37899 = (state_37898[(1)]);
if((state_val_37899 === (7))){
var state_37898__$1 = state_37898;
var statearr_37900_37927 = state_37898__$1;
(statearr_37900_37927[(2)] = null);

(statearr_37900_37927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (1))){
var state_37898__$1 = state_37898;
var statearr_37901_37928 = state_37898__$1;
(statearr_37901_37928[(2)] = null);

(statearr_37901_37928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (4))){
var inst_37862 = (state_37898[(7)]);
var inst_37864 = (inst_37862 < cnt);
var state_37898__$1 = state_37898;
if(cljs.core.truth_(inst_37864)){
var statearr_37902_37929 = state_37898__$1;
(statearr_37902_37929[(1)] = (6));

} else {
var statearr_37903_37930 = state_37898__$1;
(statearr_37903_37930[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (15))){
var inst_37894 = (state_37898[(2)]);
var state_37898__$1 = state_37898;
var statearr_37904_37931 = state_37898__$1;
(statearr_37904_37931[(2)] = inst_37894);

(statearr_37904_37931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (13))){
var inst_37887 = cljs.core.async.close_BANG_.call(null,out);
var state_37898__$1 = state_37898;
var statearr_37905_37932 = state_37898__$1;
(statearr_37905_37932[(2)] = inst_37887);

(statearr_37905_37932[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (6))){
var state_37898__$1 = state_37898;
var statearr_37906_37933 = state_37898__$1;
(statearr_37906_37933[(2)] = null);

(statearr_37906_37933[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (3))){
var inst_37896 = (state_37898[(2)]);
var state_37898__$1 = state_37898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37898__$1,inst_37896);
} else {
if((state_val_37899 === (12))){
var inst_37884 = (state_37898[(8)]);
var inst_37884__$1 = (state_37898[(2)]);
var inst_37885 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37884__$1);
var state_37898__$1 = (function (){var statearr_37907 = state_37898;
(statearr_37907[(8)] = inst_37884__$1);

return statearr_37907;
})();
if(cljs.core.truth_(inst_37885)){
var statearr_37908_37934 = state_37898__$1;
(statearr_37908_37934[(1)] = (13));

} else {
var statearr_37909_37935 = state_37898__$1;
(statearr_37909_37935[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (2))){
var inst_37861 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37862 = (0);
var state_37898__$1 = (function (){var statearr_37910 = state_37898;
(statearr_37910[(9)] = inst_37861);

(statearr_37910[(7)] = inst_37862);

return statearr_37910;
})();
var statearr_37911_37936 = state_37898__$1;
(statearr_37911_37936[(2)] = null);

(statearr_37911_37936[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (11))){
var inst_37862 = (state_37898[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37898,(10),Object,null,(9));
var inst_37871 = chs__$1.call(null,inst_37862);
var inst_37872 = done.call(null,inst_37862);
var inst_37873 = cljs.core.async.take_BANG_.call(null,inst_37871,inst_37872);
var state_37898__$1 = state_37898;
var statearr_37912_37937 = state_37898__$1;
(statearr_37912_37937[(2)] = inst_37873);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37898__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (9))){
var inst_37862 = (state_37898[(7)]);
var inst_37875 = (state_37898[(2)]);
var inst_37876 = (inst_37862 + (1));
var inst_37862__$1 = inst_37876;
var state_37898__$1 = (function (){var statearr_37913 = state_37898;
(statearr_37913[(10)] = inst_37875);

(statearr_37913[(7)] = inst_37862__$1);

return statearr_37913;
})();
var statearr_37914_37938 = state_37898__$1;
(statearr_37914_37938[(2)] = null);

(statearr_37914_37938[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (5))){
var inst_37882 = (state_37898[(2)]);
var state_37898__$1 = (function (){var statearr_37915 = state_37898;
(statearr_37915[(11)] = inst_37882);

return statearr_37915;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37898__$1,(12),dchan);
} else {
if((state_val_37899 === (14))){
var inst_37884 = (state_37898[(8)]);
var inst_37889 = cljs.core.apply.call(null,f,inst_37884);
var state_37898__$1 = state_37898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37898__$1,(16),out,inst_37889);
} else {
if((state_val_37899 === (16))){
var inst_37891 = (state_37898[(2)]);
var state_37898__$1 = (function (){var statearr_37916 = state_37898;
(statearr_37916[(12)] = inst_37891);

return statearr_37916;
})();
var statearr_37917_37939 = state_37898__$1;
(statearr_37917_37939[(2)] = null);

(statearr_37917_37939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (10))){
var inst_37866 = (state_37898[(2)]);
var inst_37867 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37898__$1 = (function (){var statearr_37918 = state_37898;
(statearr_37918[(13)] = inst_37866);

return statearr_37918;
})();
var statearr_37919_37940 = state_37898__$1;
(statearr_37919_37940[(2)] = inst_37867);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37898__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37899 === (8))){
var inst_37880 = (state_37898[(2)]);
var state_37898__$1 = state_37898;
var statearr_37920_37941 = state_37898__$1;
(statearr_37920_37941[(2)] = inst_37880);

(statearr_37920_37941[(1)] = (5));


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
});})(c__36587__auto___37926,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__36497__auto__,c__36587__auto___37926,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__36498__auto__ = null;
var cljs$core$async$state_machine__36498__auto____0 = (function (){
var statearr_37921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37921[(0)] = cljs$core$async$state_machine__36498__auto__);

(statearr_37921[(1)] = (1));

return statearr_37921;
});
var cljs$core$async$state_machine__36498__auto____1 = (function (state_37898){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_37898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e37922){if((e37922 instanceof Object)){
var ex__36501__auto__ = e37922;
var statearr_37923_37942 = state_37898;
(statearr_37923_37942[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37943 = state_37898;
state_37898 = G__37943;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs$core$async$state_machine__36498__auto__ = function(state_37898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36498__auto____1.call(this,state_37898);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36498__auto____0;
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36498__auto____1;
return cljs$core$async$state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto___37926,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__36589__auto__ = (function (){var statearr_37924 = f__36588__auto__.call(null);
(statearr_37924[(6)] = c__36587__auto___37926);

return statearr_37924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto___37926,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__37946 = arguments.length;
switch (G__37946) {
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
var c__36587__auto___38000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto___38000,out){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto___38000,out){
return (function (state_37978){
var state_val_37979 = (state_37978[(1)]);
if((state_val_37979 === (7))){
var inst_37958 = (state_37978[(7)]);
var inst_37957 = (state_37978[(8)]);
var inst_37957__$1 = (state_37978[(2)]);
var inst_37958__$1 = cljs.core.nth.call(null,inst_37957__$1,(0),null);
var inst_37959 = cljs.core.nth.call(null,inst_37957__$1,(1),null);
var inst_37960 = (inst_37958__$1 == null);
var state_37978__$1 = (function (){var statearr_37980 = state_37978;
(statearr_37980[(7)] = inst_37958__$1);

(statearr_37980[(9)] = inst_37959);

(statearr_37980[(8)] = inst_37957__$1);

return statearr_37980;
})();
if(cljs.core.truth_(inst_37960)){
var statearr_37981_38001 = state_37978__$1;
(statearr_37981_38001[(1)] = (8));

} else {
var statearr_37982_38002 = state_37978__$1;
(statearr_37982_38002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37979 === (1))){
var inst_37947 = cljs.core.vec.call(null,chs);
var inst_37948 = inst_37947;
var state_37978__$1 = (function (){var statearr_37983 = state_37978;
(statearr_37983[(10)] = inst_37948);

return statearr_37983;
})();
var statearr_37984_38003 = state_37978__$1;
(statearr_37984_38003[(2)] = null);

(statearr_37984_38003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37979 === (4))){
var inst_37948 = (state_37978[(10)]);
var state_37978__$1 = state_37978;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37978__$1,(7),inst_37948);
} else {
if((state_val_37979 === (6))){
var inst_37974 = (state_37978[(2)]);
var state_37978__$1 = state_37978;
var statearr_37985_38004 = state_37978__$1;
(statearr_37985_38004[(2)] = inst_37974);

(statearr_37985_38004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37979 === (3))){
var inst_37976 = (state_37978[(2)]);
var state_37978__$1 = state_37978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37978__$1,inst_37976);
} else {
if((state_val_37979 === (2))){
var inst_37948 = (state_37978[(10)]);
var inst_37950 = cljs.core.count.call(null,inst_37948);
var inst_37951 = (inst_37950 > (0));
var state_37978__$1 = state_37978;
if(cljs.core.truth_(inst_37951)){
var statearr_37987_38005 = state_37978__$1;
(statearr_37987_38005[(1)] = (4));

} else {
var statearr_37988_38006 = state_37978__$1;
(statearr_37988_38006[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37979 === (11))){
var inst_37948 = (state_37978[(10)]);
var inst_37967 = (state_37978[(2)]);
var tmp37986 = inst_37948;
var inst_37948__$1 = tmp37986;
var state_37978__$1 = (function (){var statearr_37989 = state_37978;
(statearr_37989[(11)] = inst_37967);

(statearr_37989[(10)] = inst_37948__$1);

return statearr_37989;
})();
var statearr_37990_38007 = state_37978__$1;
(statearr_37990_38007[(2)] = null);

(statearr_37990_38007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37979 === (9))){
var inst_37958 = (state_37978[(7)]);
var state_37978__$1 = state_37978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37978__$1,(11),out,inst_37958);
} else {
if((state_val_37979 === (5))){
var inst_37972 = cljs.core.async.close_BANG_.call(null,out);
var state_37978__$1 = state_37978;
var statearr_37991_38008 = state_37978__$1;
(statearr_37991_38008[(2)] = inst_37972);

(statearr_37991_38008[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37979 === (10))){
var inst_37970 = (state_37978[(2)]);
var state_37978__$1 = state_37978;
var statearr_37992_38009 = state_37978__$1;
(statearr_37992_38009[(2)] = inst_37970);

(statearr_37992_38009[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37979 === (8))){
var inst_37958 = (state_37978[(7)]);
var inst_37948 = (state_37978[(10)]);
var inst_37959 = (state_37978[(9)]);
var inst_37957 = (state_37978[(8)]);
var inst_37962 = (function (){var cs = inst_37948;
var vec__37953 = inst_37957;
var v = inst_37958;
var c = inst_37959;
return ((function (cs,vec__37953,v,c,inst_37958,inst_37948,inst_37959,inst_37957,state_val_37979,c__36587__auto___38000,out){
return (function (p1__37944_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37944_SHARP_);
});
;})(cs,vec__37953,v,c,inst_37958,inst_37948,inst_37959,inst_37957,state_val_37979,c__36587__auto___38000,out))
})();
var inst_37963 = cljs.core.filterv.call(null,inst_37962,inst_37948);
var inst_37948__$1 = inst_37963;
var state_37978__$1 = (function (){var statearr_37993 = state_37978;
(statearr_37993[(10)] = inst_37948__$1);

return statearr_37993;
})();
var statearr_37994_38010 = state_37978__$1;
(statearr_37994_38010[(2)] = null);

(statearr_37994_38010[(1)] = (2));


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
});})(c__36587__auto___38000,out))
;
return ((function (switch__36497__auto__,c__36587__auto___38000,out){
return (function() {
var cljs$core$async$state_machine__36498__auto__ = null;
var cljs$core$async$state_machine__36498__auto____0 = (function (){
var statearr_37995 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37995[(0)] = cljs$core$async$state_machine__36498__auto__);

(statearr_37995[(1)] = (1));

return statearr_37995;
});
var cljs$core$async$state_machine__36498__auto____1 = (function (state_37978){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_37978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e37996){if((e37996 instanceof Object)){
var ex__36501__auto__ = e37996;
var statearr_37997_38011 = state_37978;
(statearr_37997_38011[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38012 = state_37978;
state_37978 = G__38012;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs$core$async$state_machine__36498__auto__ = function(state_37978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36498__auto____1.call(this,state_37978);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36498__auto____0;
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36498__auto____1;
return cljs$core$async$state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto___38000,out))
})();
var state__36589__auto__ = (function (){var statearr_37998 = f__36588__auto__.call(null);
(statearr_37998[(6)] = c__36587__auto___38000);

return statearr_37998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto___38000,out))
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
var G__38014 = arguments.length;
switch (G__38014) {
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
var c__36587__auto___38059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto___38059,out){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto___38059,out){
return (function (state_38038){
var state_val_38039 = (state_38038[(1)]);
if((state_val_38039 === (7))){
var inst_38020 = (state_38038[(7)]);
var inst_38020__$1 = (state_38038[(2)]);
var inst_38021 = (inst_38020__$1 == null);
var inst_38022 = cljs.core.not.call(null,inst_38021);
var state_38038__$1 = (function (){var statearr_38040 = state_38038;
(statearr_38040[(7)] = inst_38020__$1);

return statearr_38040;
})();
if(inst_38022){
var statearr_38041_38060 = state_38038__$1;
(statearr_38041_38060[(1)] = (8));

} else {
var statearr_38042_38061 = state_38038__$1;
(statearr_38042_38061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38039 === (1))){
var inst_38015 = (0);
var state_38038__$1 = (function (){var statearr_38043 = state_38038;
(statearr_38043[(8)] = inst_38015);

return statearr_38043;
})();
var statearr_38044_38062 = state_38038__$1;
(statearr_38044_38062[(2)] = null);

(statearr_38044_38062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38039 === (4))){
var state_38038__$1 = state_38038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38038__$1,(7),ch);
} else {
if((state_val_38039 === (6))){
var inst_38033 = (state_38038[(2)]);
var state_38038__$1 = state_38038;
var statearr_38045_38063 = state_38038__$1;
(statearr_38045_38063[(2)] = inst_38033);

(statearr_38045_38063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38039 === (3))){
var inst_38035 = (state_38038[(2)]);
var inst_38036 = cljs.core.async.close_BANG_.call(null,out);
var state_38038__$1 = (function (){var statearr_38046 = state_38038;
(statearr_38046[(9)] = inst_38035);

return statearr_38046;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38038__$1,inst_38036);
} else {
if((state_val_38039 === (2))){
var inst_38015 = (state_38038[(8)]);
var inst_38017 = (inst_38015 < n);
var state_38038__$1 = state_38038;
if(cljs.core.truth_(inst_38017)){
var statearr_38047_38064 = state_38038__$1;
(statearr_38047_38064[(1)] = (4));

} else {
var statearr_38048_38065 = state_38038__$1;
(statearr_38048_38065[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38039 === (11))){
var inst_38015 = (state_38038[(8)]);
var inst_38025 = (state_38038[(2)]);
var inst_38026 = (inst_38015 + (1));
var inst_38015__$1 = inst_38026;
var state_38038__$1 = (function (){var statearr_38049 = state_38038;
(statearr_38049[(8)] = inst_38015__$1);

(statearr_38049[(10)] = inst_38025);

return statearr_38049;
})();
var statearr_38050_38066 = state_38038__$1;
(statearr_38050_38066[(2)] = null);

(statearr_38050_38066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38039 === (9))){
var state_38038__$1 = state_38038;
var statearr_38051_38067 = state_38038__$1;
(statearr_38051_38067[(2)] = null);

(statearr_38051_38067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38039 === (5))){
var state_38038__$1 = state_38038;
var statearr_38052_38068 = state_38038__$1;
(statearr_38052_38068[(2)] = null);

(statearr_38052_38068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38039 === (10))){
var inst_38030 = (state_38038[(2)]);
var state_38038__$1 = state_38038;
var statearr_38053_38069 = state_38038__$1;
(statearr_38053_38069[(2)] = inst_38030);

(statearr_38053_38069[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38039 === (8))){
var inst_38020 = (state_38038[(7)]);
var state_38038__$1 = state_38038;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38038__$1,(11),out,inst_38020);
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
});})(c__36587__auto___38059,out))
;
return ((function (switch__36497__auto__,c__36587__auto___38059,out){
return (function() {
var cljs$core$async$state_machine__36498__auto__ = null;
var cljs$core$async$state_machine__36498__auto____0 = (function (){
var statearr_38054 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38054[(0)] = cljs$core$async$state_machine__36498__auto__);

(statearr_38054[(1)] = (1));

return statearr_38054;
});
var cljs$core$async$state_machine__36498__auto____1 = (function (state_38038){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_38038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e38055){if((e38055 instanceof Object)){
var ex__36501__auto__ = e38055;
var statearr_38056_38070 = state_38038;
(statearr_38056_38070[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38071 = state_38038;
state_38038 = G__38071;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs$core$async$state_machine__36498__auto__ = function(state_38038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36498__auto____1.call(this,state_38038);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36498__auto____0;
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36498__auto____1;
return cljs$core$async$state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto___38059,out))
})();
var state__36589__auto__ = (function (){var statearr_38057 = f__36588__auto__.call(null);
(statearr_38057[(6)] = c__36587__auto___38059);

return statearr_38057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto___38059,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38073 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38073 = (function (f,ch,meta38074){
this.f = f;
this.ch = ch;
this.meta38074 = meta38074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38075,meta38074__$1){
var self__ = this;
var _38075__$1 = this;
return (new cljs.core.async.t_cljs$core$async38073(self__.f,self__.ch,meta38074__$1));
});

cljs.core.async.t_cljs$core$async38073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38075){
var self__ = this;
var _38075__$1 = this;
return self__.meta38074;
});

cljs.core.async.t_cljs$core$async38073.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38073.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38073.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38073.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38073.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async38076 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38076 = (function (f,ch,meta38074,_,fn1,meta38077){
this.f = f;
this.ch = ch;
this.meta38074 = meta38074;
this._ = _;
this.fn1 = fn1;
this.meta38077 = meta38077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38078,meta38077__$1){
var self__ = this;
var _38078__$1 = this;
return (new cljs.core.async.t_cljs$core$async38076(self__.f,self__.ch,self__.meta38074,self__._,self__.fn1,meta38077__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async38076.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38078){
var self__ = this;
var _38078__$1 = this;
return self__.meta38077;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38076.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38076.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38076.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38076.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38072_SHARP_){
return f1.call(null,(((p1__38072_SHARP_ == null))?null:self__.f.call(null,p1__38072_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async38076.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38074","meta38074",-325779295,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38073","cljs.core.async/t_cljs$core$async38073",-480736737,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38077","meta38077",-118991218,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38076.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38076";

cljs.core.async.t_cljs$core$async38076.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__31543__auto__,writer__31544__auto__,opt__31545__auto__){
return cljs.core._write.call(null,writer__31544__auto__,"cljs.core.async/t_cljs$core$async38076");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async38076 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38076(f__$1,ch__$1,meta38074__$1,___$2,fn1__$1,meta38077){
return (new cljs.core.async.t_cljs$core$async38076(f__$1,ch__$1,meta38074__$1,___$2,fn1__$1,meta38077));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async38076(self__.f,self__.ch,self__.meta38074,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30860__auto__ = ret;
if(cljs.core.truth_(and__30860__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30860__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async38073.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38073.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async38073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38074","meta38074",-325779295,null)], null);
});

cljs.core.async.t_cljs$core$async38073.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38073";

cljs.core.async.t_cljs$core$async38073.cljs$lang$ctorPrWriter = (function (this__31543__auto__,writer__31544__auto__,opt__31545__auto__){
return cljs.core._write.call(null,writer__31544__auto__,"cljs.core.async/t_cljs$core$async38073");
});

cljs.core.async.__GT_t_cljs$core$async38073 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38073(f__$1,ch__$1,meta38074){
return (new cljs.core.async.t_cljs$core$async38073(f__$1,ch__$1,meta38074));
});

}

return (new cljs.core.async.t_cljs$core$async38073(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async38079 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38079 = (function (f,ch,meta38080){
this.f = f;
this.ch = ch;
this.meta38080 = meta38080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38081,meta38080__$1){
var self__ = this;
var _38081__$1 = this;
return (new cljs.core.async.t_cljs$core$async38079(self__.f,self__.ch,meta38080__$1));
});

cljs.core.async.t_cljs$core$async38079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38081){
var self__ = this;
var _38081__$1 = this;
return self__.meta38080;
});

cljs.core.async.t_cljs$core$async38079.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38079.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38079.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38079.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38079.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38079.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async38079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38080","meta38080",1622741199,null)], null);
});

cljs.core.async.t_cljs$core$async38079.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38079";

cljs.core.async.t_cljs$core$async38079.cljs$lang$ctorPrWriter = (function (this__31543__auto__,writer__31544__auto__,opt__31545__auto__){
return cljs.core._write.call(null,writer__31544__auto__,"cljs.core.async/t_cljs$core$async38079");
});

cljs.core.async.__GT_t_cljs$core$async38079 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38079(f__$1,ch__$1,meta38080){
return (new cljs.core.async.t_cljs$core$async38079(f__$1,ch__$1,meta38080));
});

}

return (new cljs.core.async.t_cljs$core$async38079(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async38082 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38082 = (function (p,ch,meta38083){
this.p = p;
this.ch = ch;
this.meta38083 = meta38083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38084,meta38083__$1){
var self__ = this;
var _38084__$1 = this;
return (new cljs.core.async.t_cljs$core$async38082(self__.p,self__.ch,meta38083__$1));
});

cljs.core.async.t_cljs$core$async38082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38084){
var self__ = this;
var _38084__$1 = this;
return self__.meta38083;
});

cljs.core.async.t_cljs$core$async38082.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38082.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38082.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38082.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38082.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38082.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38082.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async38082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38083","meta38083",-816361511,null)], null);
});

cljs.core.async.t_cljs$core$async38082.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38082";

cljs.core.async.t_cljs$core$async38082.cljs$lang$ctorPrWriter = (function (this__31543__auto__,writer__31544__auto__,opt__31545__auto__){
return cljs.core._write.call(null,writer__31544__auto__,"cljs.core.async/t_cljs$core$async38082");
});

cljs.core.async.__GT_t_cljs$core$async38082 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38082(p__$1,ch__$1,meta38083){
return (new cljs.core.async.t_cljs$core$async38082(p__$1,ch__$1,meta38083));
});

}

return (new cljs.core.async.t_cljs$core$async38082(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38086 = arguments.length;
switch (G__38086) {
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
var c__36587__auto___38126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto___38126,out){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto___38126,out){
return (function (state_38107){
var state_val_38108 = (state_38107[(1)]);
if((state_val_38108 === (7))){
var inst_38103 = (state_38107[(2)]);
var state_38107__$1 = state_38107;
var statearr_38109_38127 = state_38107__$1;
(statearr_38109_38127[(2)] = inst_38103);

(statearr_38109_38127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (1))){
var state_38107__$1 = state_38107;
var statearr_38110_38128 = state_38107__$1;
(statearr_38110_38128[(2)] = null);

(statearr_38110_38128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (4))){
var inst_38089 = (state_38107[(7)]);
var inst_38089__$1 = (state_38107[(2)]);
var inst_38090 = (inst_38089__$1 == null);
var state_38107__$1 = (function (){var statearr_38111 = state_38107;
(statearr_38111[(7)] = inst_38089__$1);

return statearr_38111;
})();
if(cljs.core.truth_(inst_38090)){
var statearr_38112_38129 = state_38107__$1;
(statearr_38112_38129[(1)] = (5));

} else {
var statearr_38113_38130 = state_38107__$1;
(statearr_38113_38130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (6))){
var inst_38089 = (state_38107[(7)]);
var inst_38094 = p.call(null,inst_38089);
var state_38107__$1 = state_38107;
if(cljs.core.truth_(inst_38094)){
var statearr_38114_38131 = state_38107__$1;
(statearr_38114_38131[(1)] = (8));

} else {
var statearr_38115_38132 = state_38107__$1;
(statearr_38115_38132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (3))){
var inst_38105 = (state_38107[(2)]);
var state_38107__$1 = state_38107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38107__$1,inst_38105);
} else {
if((state_val_38108 === (2))){
var state_38107__$1 = state_38107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38107__$1,(4),ch);
} else {
if((state_val_38108 === (11))){
var inst_38097 = (state_38107[(2)]);
var state_38107__$1 = state_38107;
var statearr_38116_38133 = state_38107__$1;
(statearr_38116_38133[(2)] = inst_38097);

(statearr_38116_38133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (9))){
var state_38107__$1 = state_38107;
var statearr_38117_38134 = state_38107__$1;
(statearr_38117_38134[(2)] = null);

(statearr_38117_38134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (5))){
var inst_38092 = cljs.core.async.close_BANG_.call(null,out);
var state_38107__$1 = state_38107;
var statearr_38118_38135 = state_38107__$1;
(statearr_38118_38135[(2)] = inst_38092);

(statearr_38118_38135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (10))){
var inst_38100 = (state_38107[(2)]);
var state_38107__$1 = (function (){var statearr_38119 = state_38107;
(statearr_38119[(8)] = inst_38100);

return statearr_38119;
})();
var statearr_38120_38136 = state_38107__$1;
(statearr_38120_38136[(2)] = null);

(statearr_38120_38136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38108 === (8))){
var inst_38089 = (state_38107[(7)]);
var state_38107__$1 = state_38107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38107__$1,(11),out,inst_38089);
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
});})(c__36587__auto___38126,out))
;
return ((function (switch__36497__auto__,c__36587__auto___38126,out){
return (function() {
var cljs$core$async$state_machine__36498__auto__ = null;
var cljs$core$async$state_machine__36498__auto____0 = (function (){
var statearr_38121 = [null,null,null,null,null,null,null,null,null];
(statearr_38121[(0)] = cljs$core$async$state_machine__36498__auto__);

(statearr_38121[(1)] = (1));

return statearr_38121;
});
var cljs$core$async$state_machine__36498__auto____1 = (function (state_38107){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_38107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e38122){if((e38122 instanceof Object)){
var ex__36501__auto__ = e38122;
var statearr_38123_38137 = state_38107;
(statearr_38123_38137[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38138 = state_38107;
state_38107 = G__38138;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs$core$async$state_machine__36498__auto__ = function(state_38107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36498__auto____1.call(this,state_38107);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36498__auto____0;
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36498__auto____1;
return cljs$core$async$state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto___38126,out))
})();
var state__36589__auto__ = (function (){var statearr_38124 = f__36588__auto__.call(null);
(statearr_38124[(6)] = c__36587__auto___38126);

return statearr_38124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto___38126,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38140 = arguments.length;
switch (G__38140) {
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
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__){
return (function (state_38203){
var state_val_38204 = (state_38203[(1)]);
if((state_val_38204 === (7))){
var inst_38199 = (state_38203[(2)]);
var state_38203__$1 = state_38203;
var statearr_38205_38243 = state_38203__$1;
(statearr_38205_38243[(2)] = inst_38199);

(statearr_38205_38243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (20))){
var inst_38169 = (state_38203[(7)]);
var inst_38180 = (state_38203[(2)]);
var inst_38181 = cljs.core.next.call(null,inst_38169);
var inst_38155 = inst_38181;
var inst_38156 = null;
var inst_38157 = (0);
var inst_38158 = (0);
var state_38203__$1 = (function (){var statearr_38206 = state_38203;
(statearr_38206[(8)] = inst_38158);

(statearr_38206[(9)] = inst_38180);

(statearr_38206[(10)] = inst_38157);

(statearr_38206[(11)] = inst_38156);

(statearr_38206[(12)] = inst_38155);

return statearr_38206;
})();
var statearr_38207_38244 = state_38203__$1;
(statearr_38207_38244[(2)] = null);

(statearr_38207_38244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (1))){
var state_38203__$1 = state_38203;
var statearr_38208_38245 = state_38203__$1;
(statearr_38208_38245[(2)] = null);

(statearr_38208_38245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (4))){
var inst_38144 = (state_38203[(13)]);
var inst_38144__$1 = (state_38203[(2)]);
var inst_38145 = (inst_38144__$1 == null);
var state_38203__$1 = (function (){var statearr_38209 = state_38203;
(statearr_38209[(13)] = inst_38144__$1);

return statearr_38209;
})();
if(cljs.core.truth_(inst_38145)){
var statearr_38210_38246 = state_38203__$1;
(statearr_38210_38246[(1)] = (5));

} else {
var statearr_38211_38247 = state_38203__$1;
(statearr_38211_38247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (15))){
var state_38203__$1 = state_38203;
var statearr_38215_38248 = state_38203__$1;
(statearr_38215_38248[(2)] = null);

(statearr_38215_38248[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (21))){
var state_38203__$1 = state_38203;
var statearr_38216_38249 = state_38203__$1;
(statearr_38216_38249[(2)] = null);

(statearr_38216_38249[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (13))){
var inst_38158 = (state_38203[(8)]);
var inst_38157 = (state_38203[(10)]);
var inst_38156 = (state_38203[(11)]);
var inst_38155 = (state_38203[(12)]);
var inst_38165 = (state_38203[(2)]);
var inst_38166 = (inst_38158 + (1));
var tmp38212 = inst_38157;
var tmp38213 = inst_38156;
var tmp38214 = inst_38155;
var inst_38155__$1 = tmp38214;
var inst_38156__$1 = tmp38213;
var inst_38157__$1 = tmp38212;
var inst_38158__$1 = inst_38166;
var state_38203__$1 = (function (){var statearr_38217 = state_38203;
(statearr_38217[(8)] = inst_38158__$1);

(statearr_38217[(10)] = inst_38157__$1);

(statearr_38217[(11)] = inst_38156__$1);

(statearr_38217[(12)] = inst_38155__$1);

(statearr_38217[(14)] = inst_38165);

return statearr_38217;
})();
var statearr_38218_38250 = state_38203__$1;
(statearr_38218_38250[(2)] = null);

(statearr_38218_38250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (22))){
var state_38203__$1 = state_38203;
var statearr_38219_38251 = state_38203__$1;
(statearr_38219_38251[(2)] = null);

(statearr_38219_38251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (6))){
var inst_38144 = (state_38203[(13)]);
var inst_38153 = f.call(null,inst_38144);
var inst_38154 = cljs.core.seq.call(null,inst_38153);
var inst_38155 = inst_38154;
var inst_38156 = null;
var inst_38157 = (0);
var inst_38158 = (0);
var state_38203__$1 = (function (){var statearr_38220 = state_38203;
(statearr_38220[(8)] = inst_38158);

(statearr_38220[(10)] = inst_38157);

(statearr_38220[(11)] = inst_38156);

(statearr_38220[(12)] = inst_38155);

return statearr_38220;
})();
var statearr_38221_38252 = state_38203__$1;
(statearr_38221_38252[(2)] = null);

(statearr_38221_38252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (17))){
var inst_38169 = (state_38203[(7)]);
var inst_38173 = cljs.core.chunk_first.call(null,inst_38169);
var inst_38174 = cljs.core.chunk_rest.call(null,inst_38169);
var inst_38175 = cljs.core.count.call(null,inst_38173);
var inst_38155 = inst_38174;
var inst_38156 = inst_38173;
var inst_38157 = inst_38175;
var inst_38158 = (0);
var state_38203__$1 = (function (){var statearr_38222 = state_38203;
(statearr_38222[(8)] = inst_38158);

(statearr_38222[(10)] = inst_38157);

(statearr_38222[(11)] = inst_38156);

(statearr_38222[(12)] = inst_38155);

return statearr_38222;
})();
var statearr_38223_38253 = state_38203__$1;
(statearr_38223_38253[(2)] = null);

(statearr_38223_38253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (3))){
var inst_38201 = (state_38203[(2)]);
var state_38203__$1 = state_38203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38203__$1,inst_38201);
} else {
if((state_val_38204 === (12))){
var inst_38189 = (state_38203[(2)]);
var state_38203__$1 = state_38203;
var statearr_38224_38254 = state_38203__$1;
(statearr_38224_38254[(2)] = inst_38189);

(statearr_38224_38254[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (2))){
var state_38203__$1 = state_38203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38203__$1,(4),in$);
} else {
if((state_val_38204 === (23))){
var inst_38197 = (state_38203[(2)]);
var state_38203__$1 = state_38203;
var statearr_38225_38255 = state_38203__$1;
(statearr_38225_38255[(2)] = inst_38197);

(statearr_38225_38255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (19))){
var inst_38184 = (state_38203[(2)]);
var state_38203__$1 = state_38203;
var statearr_38226_38256 = state_38203__$1;
(statearr_38226_38256[(2)] = inst_38184);

(statearr_38226_38256[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (11))){
var inst_38169 = (state_38203[(7)]);
var inst_38155 = (state_38203[(12)]);
var inst_38169__$1 = cljs.core.seq.call(null,inst_38155);
var state_38203__$1 = (function (){var statearr_38227 = state_38203;
(statearr_38227[(7)] = inst_38169__$1);

return statearr_38227;
})();
if(inst_38169__$1){
var statearr_38228_38257 = state_38203__$1;
(statearr_38228_38257[(1)] = (14));

} else {
var statearr_38229_38258 = state_38203__$1;
(statearr_38229_38258[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (9))){
var inst_38191 = (state_38203[(2)]);
var inst_38192 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38203__$1 = (function (){var statearr_38230 = state_38203;
(statearr_38230[(15)] = inst_38191);

return statearr_38230;
})();
if(cljs.core.truth_(inst_38192)){
var statearr_38231_38259 = state_38203__$1;
(statearr_38231_38259[(1)] = (21));

} else {
var statearr_38232_38260 = state_38203__$1;
(statearr_38232_38260[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (5))){
var inst_38147 = cljs.core.async.close_BANG_.call(null,out);
var state_38203__$1 = state_38203;
var statearr_38233_38261 = state_38203__$1;
(statearr_38233_38261[(2)] = inst_38147);

(statearr_38233_38261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (14))){
var inst_38169 = (state_38203[(7)]);
var inst_38171 = cljs.core.chunked_seq_QMARK_.call(null,inst_38169);
var state_38203__$1 = state_38203;
if(inst_38171){
var statearr_38234_38262 = state_38203__$1;
(statearr_38234_38262[(1)] = (17));

} else {
var statearr_38235_38263 = state_38203__$1;
(statearr_38235_38263[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (16))){
var inst_38187 = (state_38203[(2)]);
var state_38203__$1 = state_38203;
var statearr_38236_38264 = state_38203__$1;
(statearr_38236_38264[(2)] = inst_38187);

(statearr_38236_38264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (10))){
var inst_38158 = (state_38203[(8)]);
var inst_38156 = (state_38203[(11)]);
var inst_38163 = cljs.core._nth.call(null,inst_38156,inst_38158);
var state_38203__$1 = state_38203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38203__$1,(13),out,inst_38163);
} else {
if((state_val_38204 === (18))){
var inst_38169 = (state_38203[(7)]);
var inst_38178 = cljs.core.first.call(null,inst_38169);
var state_38203__$1 = state_38203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38203__$1,(20),out,inst_38178);
} else {
if((state_val_38204 === (8))){
var inst_38158 = (state_38203[(8)]);
var inst_38157 = (state_38203[(10)]);
var inst_38160 = (inst_38158 < inst_38157);
var inst_38161 = inst_38160;
var state_38203__$1 = state_38203;
if(cljs.core.truth_(inst_38161)){
var statearr_38237_38265 = state_38203__$1;
(statearr_38237_38265[(1)] = (10));

} else {
var statearr_38238_38266 = state_38203__$1;
(statearr_38238_38266[(1)] = (11));

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
});})(c__36587__auto__))
;
return ((function (switch__36497__auto__,c__36587__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36498__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36498__auto____0 = (function (){
var statearr_38239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38239[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36498__auto__);

(statearr_38239[(1)] = (1));

return statearr_38239;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36498__auto____1 = (function (state_38203){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_38203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e38240){if((e38240 instanceof Object)){
var ex__36501__auto__ = e38240;
var statearr_38241_38267 = state_38203;
(statearr_38241_38267[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38268 = state_38203;
state_38203 = G__38268;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36498__auto__ = function(state_38203){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36498__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36498__auto____1.call(this,state_38203);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36498__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36498__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_38242 = f__36588__auto__.call(null);
(statearr_38242[(6)] = c__36587__auto__);

return statearr_38242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38270 = arguments.length;
switch (G__38270) {
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
var G__38273 = arguments.length;
switch (G__38273) {
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
var G__38276 = arguments.length;
switch (G__38276) {
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
var c__36587__auto___38323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto___38323,out){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto___38323,out){
return (function (state_38300){
var state_val_38301 = (state_38300[(1)]);
if((state_val_38301 === (7))){
var inst_38295 = (state_38300[(2)]);
var state_38300__$1 = state_38300;
var statearr_38302_38324 = state_38300__$1;
(statearr_38302_38324[(2)] = inst_38295);

(statearr_38302_38324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38301 === (1))){
var inst_38277 = null;
var state_38300__$1 = (function (){var statearr_38303 = state_38300;
(statearr_38303[(7)] = inst_38277);

return statearr_38303;
})();
var statearr_38304_38325 = state_38300__$1;
(statearr_38304_38325[(2)] = null);

(statearr_38304_38325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38301 === (4))){
var inst_38280 = (state_38300[(8)]);
var inst_38280__$1 = (state_38300[(2)]);
var inst_38281 = (inst_38280__$1 == null);
var inst_38282 = cljs.core.not.call(null,inst_38281);
var state_38300__$1 = (function (){var statearr_38305 = state_38300;
(statearr_38305[(8)] = inst_38280__$1);

return statearr_38305;
})();
if(inst_38282){
var statearr_38306_38326 = state_38300__$1;
(statearr_38306_38326[(1)] = (5));

} else {
var statearr_38307_38327 = state_38300__$1;
(statearr_38307_38327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38301 === (6))){
var state_38300__$1 = state_38300;
var statearr_38308_38328 = state_38300__$1;
(statearr_38308_38328[(2)] = null);

(statearr_38308_38328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38301 === (3))){
var inst_38297 = (state_38300[(2)]);
var inst_38298 = cljs.core.async.close_BANG_.call(null,out);
var state_38300__$1 = (function (){var statearr_38309 = state_38300;
(statearr_38309[(9)] = inst_38297);

return statearr_38309;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38300__$1,inst_38298);
} else {
if((state_val_38301 === (2))){
var state_38300__$1 = state_38300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38300__$1,(4),ch);
} else {
if((state_val_38301 === (11))){
var inst_38280 = (state_38300[(8)]);
var inst_38289 = (state_38300[(2)]);
var inst_38277 = inst_38280;
var state_38300__$1 = (function (){var statearr_38310 = state_38300;
(statearr_38310[(7)] = inst_38277);

(statearr_38310[(10)] = inst_38289);

return statearr_38310;
})();
var statearr_38311_38329 = state_38300__$1;
(statearr_38311_38329[(2)] = null);

(statearr_38311_38329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38301 === (9))){
var inst_38280 = (state_38300[(8)]);
var state_38300__$1 = state_38300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38300__$1,(11),out,inst_38280);
} else {
if((state_val_38301 === (5))){
var inst_38277 = (state_38300[(7)]);
var inst_38280 = (state_38300[(8)]);
var inst_38284 = cljs.core._EQ_.call(null,inst_38280,inst_38277);
var state_38300__$1 = state_38300;
if(inst_38284){
var statearr_38313_38330 = state_38300__$1;
(statearr_38313_38330[(1)] = (8));

} else {
var statearr_38314_38331 = state_38300__$1;
(statearr_38314_38331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38301 === (10))){
var inst_38292 = (state_38300[(2)]);
var state_38300__$1 = state_38300;
var statearr_38315_38332 = state_38300__$1;
(statearr_38315_38332[(2)] = inst_38292);

(statearr_38315_38332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38301 === (8))){
var inst_38277 = (state_38300[(7)]);
var tmp38312 = inst_38277;
var inst_38277__$1 = tmp38312;
var state_38300__$1 = (function (){var statearr_38316 = state_38300;
(statearr_38316[(7)] = inst_38277__$1);

return statearr_38316;
})();
var statearr_38317_38333 = state_38300__$1;
(statearr_38317_38333[(2)] = null);

(statearr_38317_38333[(1)] = (2));


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
});})(c__36587__auto___38323,out))
;
return ((function (switch__36497__auto__,c__36587__auto___38323,out){
return (function() {
var cljs$core$async$state_machine__36498__auto__ = null;
var cljs$core$async$state_machine__36498__auto____0 = (function (){
var statearr_38318 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38318[(0)] = cljs$core$async$state_machine__36498__auto__);

(statearr_38318[(1)] = (1));

return statearr_38318;
});
var cljs$core$async$state_machine__36498__auto____1 = (function (state_38300){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_38300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e38319){if((e38319 instanceof Object)){
var ex__36501__auto__ = e38319;
var statearr_38320_38334 = state_38300;
(statearr_38320_38334[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38335 = state_38300;
state_38300 = G__38335;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs$core$async$state_machine__36498__auto__ = function(state_38300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36498__auto____1.call(this,state_38300);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36498__auto____0;
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36498__auto____1;
return cljs$core$async$state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto___38323,out))
})();
var state__36589__auto__ = (function (){var statearr_38321 = f__36588__auto__.call(null);
(statearr_38321[(6)] = c__36587__auto___38323);

return statearr_38321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto___38323,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38337 = arguments.length;
switch (G__38337) {
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
var c__36587__auto___38403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto___38403,out){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto___38403,out){
return (function (state_38375){
var state_val_38376 = (state_38375[(1)]);
if((state_val_38376 === (7))){
var inst_38371 = (state_38375[(2)]);
var state_38375__$1 = state_38375;
var statearr_38377_38404 = state_38375__$1;
(statearr_38377_38404[(2)] = inst_38371);

(statearr_38377_38404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (1))){
var inst_38338 = (new Array(n));
var inst_38339 = inst_38338;
var inst_38340 = (0);
var state_38375__$1 = (function (){var statearr_38378 = state_38375;
(statearr_38378[(7)] = inst_38339);

(statearr_38378[(8)] = inst_38340);

return statearr_38378;
})();
var statearr_38379_38405 = state_38375__$1;
(statearr_38379_38405[(2)] = null);

(statearr_38379_38405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (4))){
var inst_38343 = (state_38375[(9)]);
var inst_38343__$1 = (state_38375[(2)]);
var inst_38344 = (inst_38343__$1 == null);
var inst_38345 = cljs.core.not.call(null,inst_38344);
var state_38375__$1 = (function (){var statearr_38380 = state_38375;
(statearr_38380[(9)] = inst_38343__$1);

return statearr_38380;
})();
if(inst_38345){
var statearr_38381_38406 = state_38375__$1;
(statearr_38381_38406[(1)] = (5));

} else {
var statearr_38382_38407 = state_38375__$1;
(statearr_38382_38407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (15))){
var inst_38365 = (state_38375[(2)]);
var state_38375__$1 = state_38375;
var statearr_38383_38408 = state_38375__$1;
(statearr_38383_38408[(2)] = inst_38365);

(statearr_38383_38408[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (13))){
var state_38375__$1 = state_38375;
var statearr_38384_38409 = state_38375__$1;
(statearr_38384_38409[(2)] = null);

(statearr_38384_38409[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (6))){
var inst_38340 = (state_38375[(8)]);
var inst_38361 = (inst_38340 > (0));
var state_38375__$1 = state_38375;
if(cljs.core.truth_(inst_38361)){
var statearr_38385_38410 = state_38375__$1;
(statearr_38385_38410[(1)] = (12));

} else {
var statearr_38386_38411 = state_38375__$1;
(statearr_38386_38411[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (3))){
var inst_38373 = (state_38375[(2)]);
var state_38375__$1 = state_38375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38375__$1,inst_38373);
} else {
if((state_val_38376 === (12))){
var inst_38339 = (state_38375[(7)]);
var inst_38363 = cljs.core.vec.call(null,inst_38339);
var state_38375__$1 = state_38375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38375__$1,(15),out,inst_38363);
} else {
if((state_val_38376 === (2))){
var state_38375__$1 = state_38375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38375__$1,(4),ch);
} else {
if((state_val_38376 === (11))){
var inst_38355 = (state_38375[(2)]);
var inst_38356 = (new Array(n));
var inst_38339 = inst_38356;
var inst_38340 = (0);
var state_38375__$1 = (function (){var statearr_38387 = state_38375;
(statearr_38387[(7)] = inst_38339);

(statearr_38387[(10)] = inst_38355);

(statearr_38387[(8)] = inst_38340);

return statearr_38387;
})();
var statearr_38388_38412 = state_38375__$1;
(statearr_38388_38412[(2)] = null);

(statearr_38388_38412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (9))){
var inst_38339 = (state_38375[(7)]);
var inst_38353 = cljs.core.vec.call(null,inst_38339);
var state_38375__$1 = state_38375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38375__$1,(11),out,inst_38353);
} else {
if((state_val_38376 === (5))){
var inst_38339 = (state_38375[(7)]);
var inst_38348 = (state_38375[(11)]);
var inst_38343 = (state_38375[(9)]);
var inst_38340 = (state_38375[(8)]);
var inst_38347 = (inst_38339[inst_38340] = inst_38343);
var inst_38348__$1 = (inst_38340 + (1));
var inst_38349 = (inst_38348__$1 < n);
var state_38375__$1 = (function (){var statearr_38389 = state_38375;
(statearr_38389[(12)] = inst_38347);

(statearr_38389[(11)] = inst_38348__$1);

return statearr_38389;
})();
if(cljs.core.truth_(inst_38349)){
var statearr_38390_38413 = state_38375__$1;
(statearr_38390_38413[(1)] = (8));

} else {
var statearr_38391_38414 = state_38375__$1;
(statearr_38391_38414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (14))){
var inst_38368 = (state_38375[(2)]);
var inst_38369 = cljs.core.async.close_BANG_.call(null,out);
var state_38375__$1 = (function (){var statearr_38393 = state_38375;
(statearr_38393[(13)] = inst_38368);

return statearr_38393;
})();
var statearr_38394_38415 = state_38375__$1;
(statearr_38394_38415[(2)] = inst_38369);

(statearr_38394_38415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (10))){
var inst_38359 = (state_38375[(2)]);
var state_38375__$1 = state_38375;
var statearr_38395_38416 = state_38375__$1;
(statearr_38395_38416[(2)] = inst_38359);

(statearr_38395_38416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38376 === (8))){
var inst_38339 = (state_38375[(7)]);
var inst_38348 = (state_38375[(11)]);
var tmp38392 = inst_38339;
var inst_38339__$1 = tmp38392;
var inst_38340 = inst_38348;
var state_38375__$1 = (function (){var statearr_38396 = state_38375;
(statearr_38396[(7)] = inst_38339__$1);

(statearr_38396[(8)] = inst_38340);

return statearr_38396;
})();
var statearr_38397_38417 = state_38375__$1;
(statearr_38397_38417[(2)] = null);

(statearr_38397_38417[(1)] = (2));


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
});})(c__36587__auto___38403,out))
;
return ((function (switch__36497__auto__,c__36587__auto___38403,out){
return (function() {
var cljs$core$async$state_machine__36498__auto__ = null;
var cljs$core$async$state_machine__36498__auto____0 = (function (){
var statearr_38398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38398[(0)] = cljs$core$async$state_machine__36498__auto__);

(statearr_38398[(1)] = (1));

return statearr_38398;
});
var cljs$core$async$state_machine__36498__auto____1 = (function (state_38375){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_38375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e38399){if((e38399 instanceof Object)){
var ex__36501__auto__ = e38399;
var statearr_38400_38418 = state_38375;
(statearr_38400_38418[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38419 = state_38375;
state_38375 = G__38419;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs$core$async$state_machine__36498__auto__ = function(state_38375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36498__auto____1.call(this,state_38375);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36498__auto____0;
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36498__auto____1;
return cljs$core$async$state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto___38403,out))
})();
var state__36589__auto__ = (function (){var statearr_38401 = f__36588__auto__.call(null);
(statearr_38401[(6)] = c__36587__auto___38403);

return statearr_38401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto___38403,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38421 = arguments.length;
switch (G__38421) {
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
var c__36587__auto___38491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto___38491,out){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto___38491,out){
return (function (state_38463){
var state_val_38464 = (state_38463[(1)]);
if((state_val_38464 === (7))){
var inst_38459 = (state_38463[(2)]);
var state_38463__$1 = state_38463;
var statearr_38465_38492 = state_38463__$1;
(statearr_38465_38492[(2)] = inst_38459);

(statearr_38465_38492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38464 === (1))){
var inst_38422 = [];
var inst_38423 = inst_38422;
var inst_38424 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38463__$1 = (function (){var statearr_38466 = state_38463;
(statearr_38466[(7)] = inst_38424);

(statearr_38466[(8)] = inst_38423);

return statearr_38466;
})();
var statearr_38467_38493 = state_38463__$1;
(statearr_38467_38493[(2)] = null);

(statearr_38467_38493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38464 === (4))){
var inst_38427 = (state_38463[(9)]);
var inst_38427__$1 = (state_38463[(2)]);
var inst_38428 = (inst_38427__$1 == null);
var inst_38429 = cljs.core.not.call(null,inst_38428);
var state_38463__$1 = (function (){var statearr_38468 = state_38463;
(statearr_38468[(9)] = inst_38427__$1);

return statearr_38468;
})();
if(inst_38429){
var statearr_38469_38494 = state_38463__$1;
(statearr_38469_38494[(1)] = (5));

} else {
var statearr_38470_38495 = state_38463__$1;
(statearr_38470_38495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38464 === (15))){
var inst_38453 = (state_38463[(2)]);
var state_38463__$1 = state_38463;
var statearr_38471_38496 = state_38463__$1;
(statearr_38471_38496[(2)] = inst_38453);

(statearr_38471_38496[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38464 === (13))){
var state_38463__$1 = state_38463;
var statearr_38472_38497 = state_38463__$1;
(statearr_38472_38497[(2)] = null);

(statearr_38472_38497[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38464 === (6))){
var inst_38423 = (state_38463[(8)]);
var inst_38448 = inst_38423.length;
var inst_38449 = (inst_38448 > (0));
var state_38463__$1 = state_38463;
if(cljs.core.truth_(inst_38449)){
var statearr_38473_38498 = state_38463__$1;
(statearr_38473_38498[(1)] = (12));

} else {
var statearr_38474_38499 = state_38463__$1;
(statearr_38474_38499[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38464 === (3))){
var inst_38461 = (state_38463[(2)]);
var state_38463__$1 = state_38463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38463__$1,inst_38461);
} else {
if((state_val_38464 === (12))){
var inst_38423 = (state_38463[(8)]);
var inst_38451 = cljs.core.vec.call(null,inst_38423);
var state_38463__$1 = state_38463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38463__$1,(15),out,inst_38451);
} else {
if((state_val_38464 === (2))){
var state_38463__$1 = state_38463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38463__$1,(4),ch);
} else {
if((state_val_38464 === (11))){
var inst_38427 = (state_38463[(9)]);
var inst_38431 = (state_38463[(10)]);
var inst_38441 = (state_38463[(2)]);
var inst_38442 = [];
var inst_38443 = inst_38442.push(inst_38427);
var inst_38423 = inst_38442;
var inst_38424 = inst_38431;
var state_38463__$1 = (function (){var statearr_38475 = state_38463;
(statearr_38475[(11)] = inst_38443);

(statearr_38475[(12)] = inst_38441);

(statearr_38475[(7)] = inst_38424);

(statearr_38475[(8)] = inst_38423);

return statearr_38475;
})();
var statearr_38476_38500 = state_38463__$1;
(statearr_38476_38500[(2)] = null);

(statearr_38476_38500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38464 === (9))){
var inst_38423 = (state_38463[(8)]);
var inst_38439 = cljs.core.vec.call(null,inst_38423);
var state_38463__$1 = state_38463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38463__$1,(11),out,inst_38439);
} else {
if((state_val_38464 === (5))){
var inst_38427 = (state_38463[(9)]);
var inst_38424 = (state_38463[(7)]);
var inst_38431 = (state_38463[(10)]);
var inst_38431__$1 = f.call(null,inst_38427);
var inst_38432 = cljs.core._EQ_.call(null,inst_38431__$1,inst_38424);
var inst_38433 = cljs.core.keyword_identical_QMARK_.call(null,inst_38424,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38434 = (inst_38432) || (inst_38433);
var state_38463__$1 = (function (){var statearr_38477 = state_38463;
(statearr_38477[(10)] = inst_38431__$1);

return statearr_38477;
})();
if(cljs.core.truth_(inst_38434)){
var statearr_38478_38501 = state_38463__$1;
(statearr_38478_38501[(1)] = (8));

} else {
var statearr_38479_38502 = state_38463__$1;
(statearr_38479_38502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38464 === (14))){
var inst_38456 = (state_38463[(2)]);
var inst_38457 = cljs.core.async.close_BANG_.call(null,out);
var state_38463__$1 = (function (){var statearr_38481 = state_38463;
(statearr_38481[(13)] = inst_38456);

return statearr_38481;
})();
var statearr_38482_38503 = state_38463__$1;
(statearr_38482_38503[(2)] = inst_38457);

(statearr_38482_38503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38464 === (10))){
var inst_38446 = (state_38463[(2)]);
var state_38463__$1 = state_38463;
var statearr_38483_38504 = state_38463__$1;
(statearr_38483_38504[(2)] = inst_38446);

(statearr_38483_38504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38464 === (8))){
var inst_38427 = (state_38463[(9)]);
var inst_38431 = (state_38463[(10)]);
var inst_38423 = (state_38463[(8)]);
var inst_38436 = inst_38423.push(inst_38427);
var tmp38480 = inst_38423;
var inst_38423__$1 = tmp38480;
var inst_38424 = inst_38431;
var state_38463__$1 = (function (){var statearr_38484 = state_38463;
(statearr_38484[(7)] = inst_38424);

(statearr_38484[(14)] = inst_38436);

(statearr_38484[(8)] = inst_38423__$1);

return statearr_38484;
})();
var statearr_38485_38505 = state_38463__$1;
(statearr_38485_38505[(2)] = null);

(statearr_38485_38505[(1)] = (2));


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
});})(c__36587__auto___38491,out))
;
return ((function (switch__36497__auto__,c__36587__auto___38491,out){
return (function() {
var cljs$core$async$state_machine__36498__auto__ = null;
var cljs$core$async$state_machine__36498__auto____0 = (function (){
var statearr_38486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38486[(0)] = cljs$core$async$state_machine__36498__auto__);

(statearr_38486[(1)] = (1));

return statearr_38486;
});
var cljs$core$async$state_machine__36498__auto____1 = (function (state_38463){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_38463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e38487){if((e38487 instanceof Object)){
var ex__36501__auto__ = e38487;
var statearr_38488_38506 = state_38463;
(statearr_38488_38506[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38507 = state_38463;
state_38463 = G__38507;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs$core$async$state_machine__36498__auto__ = function(state_38463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36498__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36498__auto____1.call(this,state_38463);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36498__auto____0;
cljs$core$async$state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36498__auto____1;
return cljs$core$async$state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto___38491,out))
})();
var state__36589__auto__ = (function (){var statearr_38489 = f__36588__auto__.call(null);
(statearr_38489[(6)] = c__36587__auto___38491);

return statearr_38489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto___38491,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
