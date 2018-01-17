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
var G__29669 = arguments.length;
switch (G__29669) {
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
if(typeof cljs.core.async.t_cljs$core$async29670 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29670 = (function (f,blockable,meta29671){
this.f = f;
this.blockable = blockable;
this.meta29671 = meta29671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29672,meta29671__$1){
var self__ = this;
var _29672__$1 = this;
return (new cljs.core.async.t_cljs$core$async29670(self__.f,self__.blockable,meta29671__$1));
});

cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29672){
var self__ = this;
var _29672__$1 = this;
return self__.meta29671;
});

cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29670.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29671","meta29671",-664441123,null)], null);
});

cljs.core.async.t_cljs$core$async29670.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29670";

cljs.core.async.t_cljs$core$async29670.cljs$lang$ctorPrWriter = (function (this__21872__auto__,writer__21873__auto__,opt__21874__auto__){
return cljs.core._write.call(null,writer__21873__auto__,"cljs.core.async/t_cljs$core$async29670");
});

cljs.core.async.__GT_t_cljs$core$async29670 = (function cljs$core$async$__GT_t_cljs$core$async29670(f__$1,blockable__$1,meta29671){
return (new cljs.core.async.t_cljs$core$async29670(f__$1,blockable__$1,meta29671));
});

}

return (new cljs.core.async.t_cljs$core$async29670(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29676 = arguments.length;
switch (G__29676) {
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
var G__29679 = arguments.length;
switch (G__29679) {
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
var G__29682 = arguments.length;
switch (G__29682) {
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
var val_29684 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29684);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29684,ret){
return (function (){
return fn1.call(null,val_29684);
});})(val_29684,ret))
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
var G__29686 = arguments.length;
switch (G__29686) {
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
var n__22246__auto___29688 = n;
var x_29689 = (0);
while(true){
if((x_29689 < n__22246__auto___29688)){
(a[x_29689] = (0));

var G__29690 = (x_29689 + (1));
x_29689 = G__29690;
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

var G__29691 = (i + (1));
i = G__29691;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29692 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29692 = (function (flag,meta29693){
this.flag = flag;
this.meta29693 = meta29693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29694,meta29693__$1){
var self__ = this;
var _29694__$1 = this;
return (new cljs.core.async.t_cljs$core$async29692(self__.flag,meta29693__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29692.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29694){
var self__ = this;
var _29694__$1 = this;
return self__.meta29693;
});})(flag))
;

cljs.core.async.t_cljs$core$async29692.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29692.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29692.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29693","meta29693",1436998975,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29692.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29692";

cljs.core.async.t_cljs$core$async29692.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__21872__auto__,writer__21873__auto__,opt__21874__auto__){
return cljs.core._write.call(null,writer__21873__auto__,"cljs.core.async/t_cljs$core$async29692");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29692 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29692(flag__$1,meta29693){
return (new cljs.core.async.t_cljs$core$async29692(flag__$1,meta29693));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29692(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29695 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29695 = (function (flag,cb,meta29696){
this.flag = flag;
this.cb = cb;
this.meta29696 = meta29696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29697,meta29696__$1){
var self__ = this;
var _29697__$1 = this;
return (new cljs.core.async.t_cljs$core$async29695(self__.flag,self__.cb,meta29696__$1));
});

cljs.core.async.t_cljs$core$async29695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29697){
var self__ = this;
var _29697__$1 = this;
return self__.meta29696;
});

cljs.core.async.t_cljs$core$async29695.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29695.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29695.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29695.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29695.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29696","meta29696",1262410316,null)], null);
});

cljs.core.async.t_cljs$core$async29695.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29695";

cljs.core.async.t_cljs$core$async29695.cljs$lang$ctorPrWriter = (function (this__21872__auto__,writer__21873__auto__,opt__21874__auto__){
return cljs.core._write.call(null,writer__21873__auto__,"cljs.core.async/t_cljs$core$async29695");
});

cljs.core.async.__GT_t_cljs$core$async29695 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29695(flag__$1,cb__$1,meta29696){
return (new cljs.core.async.t_cljs$core$async29695(flag__$1,cb__$1,meta29696));
});

}

return (new cljs.core.async.t_cljs$core$async29695(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29698_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29698_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29699_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29699_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21201__auto__ = wport;
if(cljs.core.truth_(or__21201__auto__)){
return or__21201__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29700 = (i + (1));
i = G__29700;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21201__auto__ = ret;
if(cljs.core.truth_(or__21201__auto__)){
return or__21201__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__21189__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21189__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21189__auto__;
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
var args__22487__auto__ = [];
var len__22480__auto___29706 = arguments.length;
var i__22481__auto___29707 = (0);
while(true){
if((i__22481__auto___29707 < len__22480__auto___29706)){
args__22487__auto__.push((arguments[i__22481__auto___29707]));

var G__29708 = (i__22481__auto___29707 + (1));
i__22481__auto___29707 = G__29708;
continue;
} else {
}
break;
}

var argseq__22488__auto__ = ((((1) < args__22487__auto__.length))?(new cljs.core.IndexedSeq(args__22487__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22488__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29703){
var map__29704 = p__29703;
var map__29704__$1 = ((((!((map__29704 == null)))?((((map__29704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29704):map__29704);
var opts = map__29704__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29701){
var G__29702 = cljs.core.first.call(null,seq29701);
var seq29701__$1 = cljs.core.next.call(null,seq29701);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29702,seq29701__$1);
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
var G__29710 = arguments.length;
switch (G__29710) {
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
var c__26077__auto___29756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26077__auto___29756){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (c__26077__auto___29756){
return (function (state_29734){
var state_val_29735 = (state_29734[(1)]);
if((state_val_29735 === (7))){
var inst_29730 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
var statearr_29736_29757 = state_29734__$1;
(statearr_29736_29757[(2)] = inst_29730);

(statearr_29736_29757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (1))){
var state_29734__$1 = state_29734;
var statearr_29737_29758 = state_29734__$1;
(statearr_29737_29758[(2)] = null);

(statearr_29737_29758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (4))){
var inst_29713 = (state_29734[(7)]);
var inst_29713__$1 = (state_29734[(2)]);
var inst_29714 = (inst_29713__$1 == null);
var state_29734__$1 = (function (){var statearr_29738 = state_29734;
(statearr_29738[(7)] = inst_29713__$1);

return statearr_29738;
})();
if(cljs.core.truth_(inst_29714)){
var statearr_29739_29759 = state_29734__$1;
(statearr_29739_29759[(1)] = (5));

} else {
var statearr_29740_29760 = state_29734__$1;
(statearr_29740_29760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (13))){
var state_29734__$1 = state_29734;
var statearr_29741_29761 = state_29734__$1;
(statearr_29741_29761[(2)] = null);

(statearr_29741_29761[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (6))){
var inst_29713 = (state_29734[(7)]);
var state_29734__$1 = state_29734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29734__$1,(11),to,inst_29713);
} else {
if((state_val_29735 === (3))){
var inst_29732 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29734__$1,inst_29732);
} else {
if((state_val_29735 === (12))){
var state_29734__$1 = state_29734;
var statearr_29742_29762 = state_29734__$1;
(statearr_29742_29762[(2)] = null);

(statearr_29742_29762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (2))){
var state_29734__$1 = state_29734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29734__$1,(4),from);
} else {
if((state_val_29735 === (11))){
var inst_29723 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
if(cljs.core.truth_(inst_29723)){
var statearr_29743_29763 = state_29734__$1;
(statearr_29743_29763[(1)] = (12));

} else {
var statearr_29744_29764 = state_29734__$1;
(statearr_29744_29764[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (9))){
var state_29734__$1 = state_29734;
var statearr_29745_29765 = state_29734__$1;
(statearr_29745_29765[(2)] = null);

(statearr_29745_29765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (5))){
var state_29734__$1 = state_29734;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29746_29766 = state_29734__$1;
(statearr_29746_29766[(1)] = (8));

} else {
var statearr_29747_29767 = state_29734__$1;
(statearr_29747_29767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (14))){
var inst_29728 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
var statearr_29748_29768 = state_29734__$1;
(statearr_29748_29768[(2)] = inst_29728);

(statearr_29748_29768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (10))){
var inst_29720 = (state_29734[(2)]);
var state_29734__$1 = state_29734;
var statearr_29749_29769 = state_29734__$1;
(statearr_29749_29769[(2)] = inst_29720);

(statearr_29749_29769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29735 === (8))){
var inst_29717 = cljs.core.async.close_BANG_.call(null,to);
var state_29734__$1 = state_29734;
var statearr_29750_29770 = state_29734__$1;
(statearr_29750_29770[(2)] = inst_29717);

(statearr_29750_29770[(1)] = (10));


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
});})(c__26077__auto___29756))
;
return ((function (switch__25897__auto__,c__26077__auto___29756){
return (function() {
var cljs$core$async$state_machine__25898__auto__ = null;
var cljs$core$async$state_machine__25898__auto____0 = (function (){
var statearr_29751 = [null,null,null,null,null,null,null,null];
(statearr_29751[(0)] = cljs$core$async$state_machine__25898__auto__);

(statearr_29751[(1)] = (1));

return statearr_29751;
});
var cljs$core$async$state_machine__25898__auto____1 = (function (state_29734){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_29734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e29752){if((e29752 instanceof Object)){
var ex__25901__auto__ = e29752;
var statearr_29753_29771 = state_29734;
(statearr_29753_29771[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29772 = state_29734;
state_29734 = G__29772;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs$core$async$state_machine__25898__auto__ = function(state_29734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25898__auto____1.call(this,state_29734);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25898__auto____0;
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25898__auto____1;
return cljs$core$async$state_machine__25898__auto__;
})()
;})(switch__25897__auto__,c__26077__auto___29756))
})();
var state__26079__auto__ = (function (){var statearr_29754 = f__26078__auto__.call(null);
(statearr_29754[(6)] = c__26077__auto___29756);

return statearr_29754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(c__26077__auto___29756))
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
return (function (p__29773){
var vec__29774 = p__29773;
var v = cljs.core.nth.call(null,vec__29774,(0),null);
var p = cljs.core.nth.call(null,vec__29774,(1),null);
var job = vec__29774;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26077__auto___29945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26077__auto___29945,res,vec__29774,v,p,job,jobs,results){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (c__26077__auto___29945,res,vec__29774,v,p,job,jobs,results){
return (function (state_29781){
var state_val_29782 = (state_29781[(1)]);
if((state_val_29782 === (1))){
var state_29781__$1 = state_29781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29781__$1,(2),res,v);
} else {
if((state_val_29782 === (2))){
var inst_29778 = (state_29781[(2)]);
var inst_29779 = cljs.core.async.close_BANG_.call(null,res);
var state_29781__$1 = (function (){var statearr_29783 = state_29781;
(statearr_29783[(7)] = inst_29778);

return statearr_29783;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29781__$1,inst_29779);
} else {
return null;
}
}
});})(c__26077__auto___29945,res,vec__29774,v,p,job,jobs,results))
;
return ((function (switch__25897__auto__,c__26077__auto___29945,res,vec__29774,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____0 = (function (){
var statearr_29784 = [null,null,null,null,null,null,null,null];
(statearr_29784[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__);

(statearr_29784[(1)] = (1));

return statearr_29784;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____1 = (function (state_29781){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_29781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e29785){if((e29785 instanceof Object)){
var ex__25901__auto__ = e29785;
var statearr_29786_29946 = state_29781;
(statearr_29786_29946[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29947 = state_29781;
state_29781 = G__29947;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__ = function(state_29781){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____1.call(this,state_29781);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__;
})()
;})(switch__25897__auto__,c__26077__auto___29945,res,vec__29774,v,p,job,jobs,results))
})();
var state__26079__auto__ = (function (){var statearr_29787 = f__26078__auto__.call(null);
(statearr_29787[(6)] = c__26077__auto___29945);

return statearr_29787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(c__26077__auto___29945,res,vec__29774,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29788){
var vec__29789 = p__29788;
var v = cljs.core.nth.call(null,vec__29789,(0),null);
var p = cljs.core.nth.call(null,vec__29789,(1),null);
var job = vec__29789;
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
var n__22246__auto___29948 = n;
var __29949 = (0);
while(true){
if((__29949 < n__22246__auto___29948)){
var G__29792_29950 = type;
var G__29792_29951__$1 = (((G__29792_29950 instanceof cljs.core.Keyword))?G__29792_29950.fqn:null);
switch (G__29792_29951__$1) {
case "compute":
var c__26077__auto___29953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29949,c__26077__auto___29953,G__29792_29950,G__29792_29951__$1,n__22246__auto___29948,jobs,results,process,async){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (__29949,c__26077__auto___29953,G__29792_29950,G__29792_29951__$1,n__22246__auto___29948,jobs,results,process,async){
return (function (state_29805){
var state_val_29806 = (state_29805[(1)]);
if((state_val_29806 === (1))){
var state_29805__$1 = state_29805;
var statearr_29807_29954 = state_29805__$1;
(statearr_29807_29954[(2)] = null);

(statearr_29807_29954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (2))){
var state_29805__$1 = state_29805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29805__$1,(4),jobs);
} else {
if((state_val_29806 === (3))){
var inst_29803 = (state_29805[(2)]);
var state_29805__$1 = state_29805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29805__$1,inst_29803);
} else {
if((state_val_29806 === (4))){
var inst_29795 = (state_29805[(2)]);
var inst_29796 = process.call(null,inst_29795);
var state_29805__$1 = state_29805;
if(cljs.core.truth_(inst_29796)){
var statearr_29808_29955 = state_29805__$1;
(statearr_29808_29955[(1)] = (5));

} else {
var statearr_29809_29956 = state_29805__$1;
(statearr_29809_29956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (5))){
var state_29805__$1 = state_29805;
var statearr_29810_29957 = state_29805__$1;
(statearr_29810_29957[(2)] = null);

(statearr_29810_29957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (6))){
var state_29805__$1 = state_29805;
var statearr_29811_29958 = state_29805__$1;
(statearr_29811_29958[(2)] = null);

(statearr_29811_29958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29806 === (7))){
var inst_29801 = (state_29805[(2)]);
var state_29805__$1 = state_29805;
var statearr_29812_29959 = state_29805__$1;
(statearr_29812_29959[(2)] = inst_29801);

(statearr_29812_29959[(1)] = (3));


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
});})(__29949,c__26077__auto___29953,G__29792_29950,G__29792_29951__$1,n__22246__auto___29948,jobs,results,process,async))
;
return ((function (__29949,switch__25897__auto__,c__26077__auto___29953,G__29792_29950,G__29792_29951__$1,n__22246__auto___29948,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____0 = (function (){
var statearr_29813 = [null,null,null,null,null,null,null];
(statearr_29813[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__);

(statearr_29813[(1)] = (1));

return statearr_29813;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____1 = (function (state_29805){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_29805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e29814){if((e29814 instanceof Object)){
var ex__25901__auto__ = e29814;
var statearr_29815_29960 = state_29805;
(statearr_29815_29960[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29961 = state_29805;
state_29805 = G__29961;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__ = function(state_29805){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____1.call(this,state_29805);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__;
})()
;})(__29949,switch__25897__auto__,c__26077__auto___29953,G__29792_29950,G__29792_29951__$1,n__22246__auto___29948,jobs,results,process,async))
})();
var state__26079__auto__ = (function (){var statearr_29816 = f__26078__auto__.call(null);
(statearr_29816[(6)] = c__26077__auto___29953);

return statearr_29816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(__29949,c__26077__auto___29953,G__29792_29950,G__29792_29951__$1,n__22246__auto___29948,jobs,results,process,async))
);


break;
case "async":
var c__26077__auto___29962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29949,c__26077__auto___29962,G__29792_29950,G__29792_29951__$1,n__22246__auto___29948,jobs,results,process,async){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (__29949,c__26077__auto___29962,G__29792_29950,G__29792_29951__$1,n__22246__auto___29948,jobs,results,process,async){
return (function (state_29829){
var state_val_29830 = (state_29829[(1)]);
if((state_val_29830 === (1))){
var state_29829__$1 = state_29829;
var statearr_29831_29963 = state_29829__$1;
(statearr_29831_29963[(2)] = null);

(statearr_29831_29963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29830 === (2))){
var state_29829__$1 = state_29829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29829__$1,(4),jobs);
} else {
if((state_val_29830 === (3))){
var inst_29827 = (state_29829[(2)]);
var state_29829__$1 = state_29829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29829__$1,inst_29827);
} else {
if((state_val_29830 === (4))){
var inst_29819 = (state_29829[(2)]);
var inst_29820 = async.call(null,inst_29819);
var state_29829__$1 = state_29829;
if(cljs.core.truth_(inst_29820)){
var statearr_29832_29964 = state_29829__$1;
(statearr_29832_29964[(1)] = (5));

} else {
var statearr_29833_29965 = state_29829__$1;
(statearr_29833_29965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29830 === (5))){
var state_29829__$1 = state_29829;
var statearr_29834_29966 = state_29829__$1;
(statearr_29834_29966[(2)] = null);

(statearr_29834_29966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29830 === (6))){
var state_29829__$1 = state_29829;
var statearr_29835_29967 = state_29829__$1;
(statearr_29835_29967[(2)] = null);

(statearr_29835_29967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29830 === (7))){
var inst_29825 = (state_29829[(2)]);
var state_29829__$1 = state_29829;
var statearr_29836_29968 = state_29829__$1;
(statearr_29836_29968[(2)] = inst_29825);

(statearr_29836_29968[(1)] = (3));


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
});})(__29949,c__26077__auto___29962,G__29792_29950,G__29792_29951__$1,n__22246__auto___29948,jobs,results,process,async))
;
return ((function (__29949,switch__25897__auto__,c__26077__auto___29962,G__29792_29950,G__29792_29951__$1,n__22246__auto___29948,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____0 = (function (){
var statearr_29837 = [null,null,null,null,null,null,null];
(statearr_29837[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__);

(statearr_29837[(1)] = (1));

return statearr_29837;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____1 = (function (state_29829){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_29829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e29838){if((e29838 instanceof Object)){
var ex__25901__auto__ = e29838;
var statearr_29839_29969 = state_29829;
(statearr_29839_29969[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29970 = state_29829;
state_29829 = G__29970;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__ = function(state_29829){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____1.call(this,state_29829);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__;
})()
;})(__29949,switch__25897__auto__,c__26077__auto___29962,G__29792_29950,G__29792_29951__$1,n__22246__auto___29948,jobs,results,process,async))
})();
var state__26079__auto__ = (function (){var statearr_29840 = f__26078__auto__.call(null);
(statearr_29840[(6)] = c__26077__auto___29962);

return statearr_29840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(__29949,c__26077__auto___29962,G__29792_29950,G__29792_29951__$1,n__22246__auto___29948,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29792_29951__$1)].join('')));

}

var G__29971 = (__29949 + (1));
__29949 = G__29971;
continue;
} else {
}
break;
}

var c__26077__auto___29972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26077__auto___29972,jobs,results,process,async){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (c__26077__auto___29972,jobs,results,process,async){
return (function (state_29862){
var state_val_29863 = (state_29862[(1)]);
if((state_val_29863 === (1))){
var state_29862__$1 = state_29862;
var statearr_29864_29973 = state_29862__$1;
(statearr_29864_29973[(2)] = null);

(statearr_29864_29973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29863 === (2))){
var state_29862__$1 = state_29862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29862__$1,(4),from);
} else {
if((state_val_29863 === (3))){
var inst_29860 = (state_29862[(2)]);
var state_29862__$1 = state_29862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29862__$1,inst_29860);
} else {
if((state_val_29863 === (4))){
var inst_29843 = (state_29862[(7)]);
var inst_29843__$1 = (state_29862[(2)]);
var inst_29844 = (inst_29843__$1 == null);
var state_29862__$1 = (function (){var statearr_29865 = state_29862;
(statearr_29865[(7)] = inst_29843__$1);

return statearr_29865;
})();
if(cljs.core.truth_(inst_29844)){
var statearr_29866_29974 = state_29862__$1;
(statearr_29866_29974[(1)] = (5));

} else {
var statearr_29867_29975 = state_29862__$1;
(statearr_29867_29975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29863 === (5))){
var inst_29846 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29862__$1 = state_29862;
var statearr_29868_29976 = state_29862__$1;
(statearr_29868_29976[(2)] = inst_29846);

(statearr_29868_29976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29863 === (6))){
var inst_29848 = (state_29862[(8)]);
var inst_29843 = (state_29862[(7)]);
var inst_29848__$1 = cljs.core.async.chan.call(null,(1));
var inst_29849 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29850 = [inst_29843,inst_29848__$1];
var inst_29851 = (new cljs.core.PersistentVector(null,2,(5),inst_29849,inst_29850,null));
var state_29862__$1 = (function (){var statearr_29869 = state_29862;
(statearr_29869[(8)] = inst_29848__$1);

return statearr_29869;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29862__$1,(8),jobs,inst_29851);
} else {
if((state_val_29863 === (7))){
var inst_29858 = (state_29862[(2)]);
var state_29862__$1 = state_29862;
var statearr_29870_29977 = state_29862__$1;
(statearr_29870_29977[(2)] = inst_29858);

(statearr_29870_29977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29863 === (8))){
var inst_29848 = (state_29862[(8)]);
var inst_29853 = (state_29862[(2)]);
var state_29862__$1 = (function (){var statearr_29871 = state_29862;
(statearr_29871[(9)] = inst_29853);

return statearr_29871;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29862__$1,(9),results,inst_29848);
} else {
if((state_val_29863 === (9))){
var inst_29855 = (state_29862[(2)]);
var state_29862__$1 = (function (){var statearr_29872 = state_29862;
(statearr_29872[(10)] = inst_29855);

return statearr_29872;
})();
var statearr_29873_29978 = state_29862__$1;
(statearr_29873_29978[(2)] = null);

(statearr_29873_29978[(1)] = (2));


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
});})(c__26077__auto___29972,jobs,results,process,async))
;
return ((function (switch__25897__auto__,c__26077__auto___29972,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____0 = (function (){
var statearr_29874 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29874[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__);

(statearr_29874[(1)] = (1));

return statearr_29874;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____1 = (function (state_29862){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_29862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e29875){if((e29875 instanceof Object)){
var ex__25901__auto__ = e29875;
var statearr_29876_29979 = state_29862;
(statearr_29876_29979[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29980 = state_29862;
state_29862 = G__29980;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__ = function(state_29862){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____1.call(this,state_29862);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__;
})()
;})(switch__25897__auto__,c__26077__auto___29972,jobs,results,process,async))
})();
var state__26079__auto__ = (function (){var statearr_29877 = f__26078__auto__.call(null);
(statearr_29877[(6)] = c__26077__auto___29972);

return statearr_29877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(c__26077__auto___29972,jobs,results,process,async))
);


var c__26077__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26077__auto__,jobs,results,process,async){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (c__26077__auto__,jobs,results,process,async){
return (function (state_29915){
var state_val_29916 = (state_29915[(1)]);
if((state_val_29916 === (7))){
var inst_29911 = (state_29915[(2)]);
var state_29915__$1 = state_29915;
var statearr_29917_29981 = state_29915__$1;
(statearr_29917_29981[(2)] = inst_29911);

(statearr_29917_29981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (20))){
var state_29915__$1 = state_29915;
var statearr_29918_29982 = state_29915__$1;
(statearr_29918_29982[(2)] = null);

(statearr_29918_29982[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (1))){
var state_29915__$1 = state_29915;
var statearr_29919_29983 = state_29915__$1;
(statearr_29919_29983[(2)] = null);

(statearr_29919_29983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (4))){
var inst_29880 = (state_29915[(7)]);
var inst_29880__$1 = (state_29915[(2)]);
var inst_29881 = (inst_29880__$1 == null);
var state_29915__$1 = (function (){var statearr_29920 = state_29915;
(statearr_29920[(7)] = inst_29880__$1);

return statearr_29920;
})();
if(cljs.core.truth_(inst_29881)){
var statearr_29921_29984 = state_29915__$1;
(statearr_29921_29984[(1)] = (5));

} else {
var statearr_29922_29985 = state_29915__$1;
(statearr_29922_29985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (15))){
var inst_29893 = (state_29915[(8)]);
var state_29915__$1 = state_29915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29915__$1,(18),to,inst_29893);
} else {
if((state_val_29916 === (21))){
var inst_29906 = (state_29915[(2)]);
var state_29915__$1 = state_29915;
var statearr_29923_29986 = state_29915__$1;
(statearr_29923_29986[(2)] = inst_29906);

(statearr_29923_29986[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (13))){
var inst_29908 = (state_29915[(2)]);
var state_29915__$1 = (function (){var statearr_29924 = state_29915;
(statearr_29924[(9)] = inst_29908);

return statearr_29924;
})();
var statearr_29925_29987 = state_29915__$1;
(statearr_29925_29987[(2)] = null);

(statearr_29925_29987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (6))){
var inst_29880 = (state_29915[(7)]);
var state_29915__$1 = state_29915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29915__$1,(11),inst_29880);
} else {
if((state_val_29916 === (17))){
var inst_29901 = (state_29915[(2)]);
var state_29915__$1 = state_29915;
if(cljs.core.truth_(inst_29901)){
var statearr_29926_29988 = state_29915__$1;
(statearr_29926_29988[(1)] = (19));

} else {
var statearr_29927_29989 = state_29915__$1;
(statearr_29927_29989[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (3))){
var inst_29913 = (state_29915[(2)]);
var state_29915__$1 = state_29915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29915__$1,inst_29913);
} else {
if((state_val_29916 === (12))){
var inst_29890 = (state_29915[(10)]);
var state_29915__$1 = state_29915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29915__$1,(14),inst_29890);
} else {
if((state_val_29916 === (2))){
var state_29915__$1 = state_29915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29915__$1,(4),results);
} else {
if((state_val_29916 === (19))){
var state_29915__$1 = state_29915;
var statearr_29928_29990 = state_29915__$1;
(statearr_29928_29990[(2)] = null);

(statearr_29928_29990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (11))){
var inst_29890 = (state_29915[(2)]);
var state_29915__$1 = (function (){var statearr_29929 = state_29915;
(statearr_29929[(10)] = inst_29890);

return statearr_29929;
})();
var statearr_29930_29991 = state_29915__$1;
(statearr_29930_29991[(2)] = null);

(statearr_29930_29991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (9))){
var state_29915__$1 = state_29915;
var statearr_29931_29992 = state_29915__$1;
(statearr_29931_29992[(2)] = null);

(statearr_29931_29992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (5))){
var state_29915__$1 = state_29915;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29932_29993 = state_29915__$1;
(statearr_29932_29993[(1)] = (8));

} else {
var statearr_29933_29994 = state_29915__$1;
(statearr_29933_29994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (14))){
var inst_29893 = (state_29915[(8)]);
var inst_29895 = (state_29915[(11)]);
var inst_29893__$1 = (state_29915[(2)]);
var inst_29894 = (inst_29893__$1 == null);
var inst_29895__$1 = cljs.core.not.call(null,inst_29894);
var state_29915__$1 = (function (){var statearr_29934 = state_29915;
(statearr_29934[(8)] = inst_29893__$1);

(statearr_29934[(11)] = inst_29895__$1);

return statearr_29934;
})();
if(inst_29895__$1){
var statearr_29935_29995 = state_29915__$1;
(statearr_29935_29995[(1)] = (15));

} else {
var statearr_29936_29996 = state_29915__$1;
(statearr_29936_29996[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (16))){
var inst_29895 = (state_29915[(11)]);
var state_29915__$1 = state_29915;
var statearr_29937_29997 = state_29915__$1;
(statearr_29937_29997[(2)] = inst_29895);

(statearr_29937_29997[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (10))){
var inst_29887 = (state_29915[(2)]);
var state_29915__$1 = state_29915;
var statearr_29938_29998 = state_29915__$1;
(statearr_29938_29998[(2)] = inst_29887);

(statearr_29938_29998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (18))){
var inst_29898 = (state_29915[(2)]);
var state_29915__$1 = state_29915;
var statearr_29939_29999 = state_29915__$1;
(statearr_29939_29999[(2)] = inst_29898);

(statearr_29939_29999[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (8))){
var inst_29884 = cljs.core.async.close_BANG_.call(null,to);
var state_29915__$1 = state_29915;
var statearr_29940_30000 = state_29915__$1;
(statearr_29940_30000[(2)] = inst_29884);

(statearr_29940_30000[(1)] = (10));


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
});})(c__26077__auto__,jobs,results,process,async))
;
return ((function (switch__25897__auto__,c__26077__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____0 = (function (){
var statearr_29941 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29941[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__);

(statearr_29941[(1)] = (1));

return statearr_29941;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____1 = (function (state_29915){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_29915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e29942){if((e29942 instanceof Object)){
var ex__25901__auto__ = e29942;
var statearr_29943_30001 = state_29915;
(statearr_29943_30001[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30002 = state_29915;
state_29915 = G__30002;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__ = function(state_29915){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____1.call(this,state_29915);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25898__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25898__auto__;
})()
;})(switch__25897__auto__,c__26077__auto__,jobs,results,process,async))
})();
var state__26079__auto__ = (function (){var statearr_29944 = f__26078__auto__.call(null);
(statearr_29944[(6)] = c__26077__auto__);

return statearr_29944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(c__26077__auto__,jobs,results,process,async))
);

return c__26077__auto__;
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
var G__30004 = arguments.length;
switch (G__30004) {
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
var G__30007 = arguments.length;
switch (G__30007) {
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
var G__30010 = arguments.length;
switch (G__30010) {
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
var c__26077__auto___30059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26077__auto___30059,tc,fc){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (c__26077__auto___30059,tc,fc){
return (function (state_30036){
var state_val_30037 = (state_30036[(1)]);
if((state_val_30037 === (7))){
var inst_30032 = (state_30036[(2)]);
var state_30036__$1 = state_30036;
var statearr_30038_30060 = state_30036__$1;
(statearr_30038_30060[(2)] = inst_30032);

(statearr_30038_30060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30037 === (1))){
var state_30036__$1 = state_30036;
var statearr_30039_30061 = state_30036__$1;
(statearr_30039_30061[(2)] = null);

(statearr_30039_30061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30037 === (4))){
var inst_30013 = (state_30036[(7)]);
var inst_30013__$1 = (state_30036[(2)]);
var inst_30014 = (inst_30013__$1 == null);
var state_30036__$1 = (function (){var statearr_30040 = state_30036;
(statearr_30040[(7)] = inst_30013__$1);

return statearr_30040;
})();
if(cljs.core.truth_(inst_30014)){
var statearr_30041_30062 = state_30036__$1;
(statearr_30041_30062[(1)] = (5));

} else {
var statearr_30042_30063 = state_30036__$1;
(statearr_30042_30063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30037 === (13))){
var state_30036__$1 = state_30036;
var statearr_30043_30064 = state_30036__$1;
(statearr_30043_30064[(2)] = null);

(statearr_30043_30064[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30037 === (6))){
var inst_30013 = (state_30036[(7)]);
var inst_30019 = p.call(null,inst_30013);
var state_30036__$1 = state_30036;
if(cljs.core.truth_(inst_30019)){
var statearr_30044_30065 = state_30036__$1;
(statearr_30044_30065[(1)] = (9));

} else {
var statearr_30045_30066 = state_30036__$1;
(statearr_30045_30066[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30037 === (3))){
var inst_30034 = (state_30036[(2)]);
var state_30036__$1 = state_30036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30036__$1,inst_30034);
} else {
if((state_val_30037 === (12))){
var state_30036__$1 = state_30036;
var statearr_30046_30067 = state_30036__$1;
(statearr_30046_30067[(2)] = null);

(statearr_30046_30067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30037 === (2))){
var state_30036__$1 = state_30036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30036__$1,(4),ch);
} else {
if((state_val_30037 === (11))){
var inst_30013 = (state_30036[(7)]);
var inst_30023 = (state_30036[(2)]);
var state_30036__$1 = state_30036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30036__$1,(8),inst_30023,inst_30013);
} else {
if((state_val_30037 === (9))){
var state_30036__$1 = state_30036;
var statearr_30047_30068 = state_30036__$1;
(statearr_30047_30068[(2)] = tc);

(statearr_30047_30068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30037 === (5))){
var inst_30016 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30017 = cljs.core.async.close_BANG_.call(null,fc);
var state_30036__$1 = (function (){var statearr_30048 = state_30036;
(statearr_30048[(8)] = inst_30016);

return statearr_30048;
})();
var statearr_30049_30069 = state_30036__$1;
(statearr_30049_30069[(2)] = inst_30017);

(statearr_30049_30069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30037 === (14))){
var inst_30030 = (state_30036[(2)]);
var state_30036__$1 = state_30036;
var statearr_30050_30070 = state_30036__$1;
(statearr_30050_30070[(2)] = inst_30030);

(statearr_30050_30070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30037 === (10))){
var state_30036__$1 = state_30036;
var statearr_30051_30071 = state_30036__$1;
(statearr_30051_30071[(2)] = fc);

(statearr_30051_30071[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30037 === (8))){
var inst_30025 = (state_30036[(2)]);
var state_30036__$1 = state_30036;
if(cljs.core.truth_(inst_30025)){
var statearr_30052_30072 = state_30036__$1;
(statearr_30052_30072[(1)] = (12));

} else {
var statearr_30053_30073 = state_30036__$1;
(statearr_30053_30073[(1)] = (13));

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
});})(c__26077__auto___30059,tc,fc))
;
return ((function (switch__25897__auto__,c__26077__auto___30059,tc,fc){
return (function() {
var cljs$core$async$state_machine__25898__auto__ = null;
var cljs$core$async$state_machine__25898__auto____0 = (function (){
var statearr_30054 = [null,null,null,null,null,null,null,null,null];
(statearr_30054[(0)] = cljs$core$async$state_machine__25898__auto__);

(statearr_30054[(1)] = (1));

return statearr_30054;
});
var cljs$core$async$state_machine__25898__auto____1 = (function (state_30036){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_30036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e30055){if((e30055 instanceof Object)){
var ex__25901__auto__ = e30055;
var statearr_30056_30074 = state_30036;
(statearr_30056_30074[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30075 = state_30036;
state_30036 = G__30075;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs$core$async$state_machine__25898__auto__ = function(state_30036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25898__auto____1.call(this,state_30036);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25898__auto____0;
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25898__auto____1;
return cljs$core$async$state_machine__25898__auto__;
})()
;})(switch__25897__auto__,c__26077__auto___30059,tc,fc))
})();
var state__26079__auto__ = (function (){var statearr_30057 = f__26078__auto__.call(null);
(statearr_30057[(6)] = c__26077__auto___30059);

return statearr_30057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(c__26077__auto___30059,tc,fc))
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
var c__26077__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26077__auto__){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (c__26077__auto__){
return (function (state_30096){
var state_val_30097 = (state_30096[(1)]);
if((state_val_30097 === (7))){
var inst_30092 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30098_30116 = state_30096__$1;
(statearr_30098_30116[(2)] = inst_30092);

(statearr_30098_30116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (1))){
var inst_30076 = init;
var state_30096__$1 = (function (){var statearr_30099 = state_30096;
(statearr_30099[(7)] = inst_30076);

return statearr_30099;
})();
var statearr_30100_30117 = state_30096__$1;
(statearr_30100_30117[(2)] = null);

(statearr_30100_30117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (4))){
var inst_30079 = (state_30096[(8)]);
var inst_30079__$1 = (state_30096[(2)]);
var inst_30080 = (inst_30079__$1 == null);
var state_30096__$1 = (function (){var statearr_30101 = state_30096;
(statearr_30101[(8)] = inst_30079__$1);

return statearr_30101;
})();
if(cljs.core.truth_(inst_30080)){
var statearr_30102_30118 = state_30096__$1;
(statearr_30102_30118[(1)] = (5));

} else {
var statearr_30103_30119 = state_30096__$1;
(statearr_30103_30119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (6))){
var inst_30083 = (state_30096[(9)]);
var inst_30076 = (state_30096[(7)]);
var inst_30079 = (state_30096[(8)]);
var inst_30083__$1 = f.call(null,inst_30076,inst_30079);
var inst_30084 = cljs.core.reduced_QMARK_.call(null,inst_30083__$1);
var state_30096__$1 = (function (){var statearr_30104 = state_30096;
(statearr_30104[(9)] = inst_30083__$1);

return statearr_30104;
})();
if(inst_30084){
var statearr_30105_30120 = state_30096__$1;
(statearr_30105_30120[(1)] = (8));

} else {
var statearr_30106_30121 = state_30096__$1;
(statearr_30106_30121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (3))){
var inst_30094 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30096__$1,inst_30094);
} else {
if((state_val_30097 === (2))){
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30096__$1,(4),ch);
} else {
if((state_val_30097 === (9))){
var inst_30083 = (state_30096[(9)]);
var inst_30076 = inst_30083;
var state_30096__$1 = (function (){var statearr_30107 = state_30096;
(statearr_30107[(7)] = inst_30076);

return statearr_30107;
})();
var statearr_30108_30122 = state_30096__$1;
(statearr_30108_30122[(2)] = null);

(statearr_30108_30122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (5))){
var inst_30076 = (state_30096[(7)]);
var state_30096__$1 = state_30096;
var statearr_30109_30123 = state_30096__$1;
(statearr_30109_30123[(2)] = inst_30076);

(statearr_30109_30123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (10))){
var inst_30090 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30110_30124 = state_30096__$1;
(statearr_30110_30124[(2)] = inst_30090);

(statearr_30110_30124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (8))){
var inst_30083 = (state_30096[(9)]);
var inst_30086 = cljs.core.deref.call(null,inst_30083);
var state_30096__$1 = state_30096;
var statearr_30111_30125 = state_30096__$1;
(statearr_30111_30125[(2)] = inst_30086);

(statearr_30111_30125[(1)] = (10));


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
});})(c__26077__auto__))
;
return ((function (switch__25897__auto__,c__26077__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25898__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25898__auto____0 = (function (){
var statearr_30112 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30112[(0)] = cljs$core$async$reduce_$_state_machine__25898__auto__);

(statearr_30112[(1)] = (1));

return statearr_30112;
});
var cljs$core$async$reduce_$_state_machine__25898__auto____1 = (function (state_30096){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_30096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e30113){if((e30113 instanceof Object)){
var ex__25901__auto__ = e30113;
var statearr_30114_30126 = state_30096;
(statearr_30114_30126[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30127 = state_30096;
state_30096 = G__30127;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25898__auto__ = function(state_30096){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25898__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25898__auto____1.call(this,state_30096);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25898__auto____0;
cljs$core$async$reduce_$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25898__auto____1;
return cljs$core$async$reduce_$_state_machine__25898__auto__;
})()
;})(switch__25897__auto__,c__26077__auto__))
})();
var state__26079__auto__ = (function (){var statearr_30115 = f__26078__auto__.call(null);
(statearr_30115[(6)] = c__26077__auto__);

return statearr_30115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(c__26077__auto__))
);

return c__26077__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26077__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26077__auto__,f__$1){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (c__26077__auto__,f__$1){
return (function (state_30133){
var state_val_30134 = (state_30133[(1)]);
if((state_val_30134 === (1))){
var inst_30128 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30133__$1 = state_30133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30133__$1,(2),inst_30128);
} else {
if((state_val_30134 === (2))){
var inst_30130 = (state_30133[(2)]);
var inst_30131 = f__$1.call(null,inst_30130);
var state_30133__$1 = state_30133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30133__$1,inst_30131);
} else {
return null;
}
}
});})(c__26077__auto__,f__$1))
;
return ((function (switch__25897__auto__,c__26077__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25898__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25898__auto____0 = (function (){
var statearr_30135 = [null,null,null,null,null,null,null];
(statearr_30135[(0)] = cljs$core$async$transduce_$_state_machine__25898__auto__);

(statearr_30135[(1)] = (1));

return statearr_30135;
});
var cljs$core$async$transduce_$_state_machine__25898__auto____1 = (function (state_30133){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_30133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e30136){if((e30136 instanceof Object)){
var ex__25901__auto__ = e30136;
var statearr_30137_30139 = state_30133;
(statearr_30137_30139[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30140 = state_30133;
state_30133 = G__30140;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25898__auto__ = function(state_30133){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25898__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25898__auto____1.call(this,state_30133);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25898__auto____0;
cljs$core$async$transduce_$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25898__auto____1;
return cljs$core$async$transduce_$_state_machine__25898__auto__;
})()
;})(switch__25897__auto__,c__26077__auto__,f__$1))
})();
var state__26079__auto__ = (function (){var statearr_30138 = f__26078__auto__.call(null);
(statearr_30138[(6)] = c__26077__auto__);

return statearr_30138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(c__26077__auto__,f__$1))
);

return c__26077__auto__;
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
var G__30142 = arguments.length;
switch (G__30142) {
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
var c__26077__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26077__auto__){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (c__26077__auto__){
return (function (state_30167){
var state_val_30168 = (state_30167[(1)]);
if((state_val_30168 === (7))){
var inst_30149 = (state_30167[(2)]);
var state_30167__$1 = state_30167;
var statearr_30169_30190 = state_30167__$1;
(statearr_30169_30190[(2)] = inst_30149);

(statearr_30169_30190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30168 === (1))){
var inst_30143 = cljs.core.seq.call(null,coll);
var inst_30144 = inst_30143;
var state_30167__$1 = (function (){var statearr_30170 = state_30167;
(statearr_30170[(7)] = inst_30144);

return statearr_30170;
})();
var statearr_30171_30191 = state_30167__$1;
(statearr_30171_30191[(2)] = null);

(statearr_30171_30191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30168 === (4))){
var inst_30144 = (state_30167[(7)]);
var inst_30147 = cljs.core.first.call(null,inst_30144);
var state_30167__$1 = state_30167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30167__$1,(7),ch,inst_30147);
} else {
if((state_val_30168 === (13))){
var inst_30161 = (state_30167[(2)]);
var state_30167__$1 = state_30167;
var statearr_30172_30192 = state_30167__$1;
(statearr_30172_30192[(2)] = inst_30161);

(statearr_30172_30192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30168 === (6))){
var inst_30152 = (state_30167[(2)]);
var state_30167__$1 = state_30167;
if(cljs.core.truth_(inst_30152)){
var statearr_30173_30193 = state_30167__$1;
(statearr_30173_30193[(1)] = (8));

} else {
var statearr_30174_30194 = state_30167__$1;
(statearr_30174_30194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30168 === (3))){
var inst_30165 = (state_30167[(2)]);
var state_30167__$1 = state_30167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30167__$1,inst_30165);
} else {
if((state_val_30168 === (12))){
var state_30167__$1 = state_30167;
var statearr_30175_30195 = state_30167__$1;
(statearr_30175_30195[(2)] = null);

(statearr_30175_30195[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30168 === (2))){
var inst_30144 = (state_30167[(7)]);
var state_30167__$1 = state_30167;
if(cljs.core.truth_(inst_30144)){
var statearr_30176_30196 = state_30167__$1;
(statearr_30176_30196[(1)] = (4));

} else {
var statearr_30177_30197 = state_30167__$1;
(statearr_30177_30197[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30168 === (11))){
var inst_30158 = cljs.core.async.close_BANG_.call(null,ch);
var state_30167__$1 = state_30167;
var statearr_30178_30198 = state_30167__$1;
(statearr_30178_30198[(2)] = inst_30158);

(statearr_30178_30198[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30168 === (9))){
var state_30167__$1 = state_30167;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30179_30199 = state_30167__$1;
(statearr_30179_30199[(1)] = (11));

} else {
var statearr_30180_30200 = state_30167__$1;
(statearr_30180_30200[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30168 === (5))){
var inst_30144 = (state_30167[(7)]);
var state_30167__$1 = state_30167;
var statearr_30181_30201 = state_30167__$1;
(statearr_30181_30201[(2)] = inst_30144);

(statearr_30181_30201[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30168 === (10))){
var inst_30163 = (state_30167[(2)]);
var state_30167__$1 = state_30167;
var statearr_30182_30202 = state_30167__$1;
(statearr_30182_30202[(2)] = inst_30163);

(statearr_30182_30202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30168 === (8))){
var inst_30144 = (state_30167[(7)]);
var inst_30154 = cljs.core.next.call(null,inst_30144);
var inst_30144__$1 = inst_30154;
var state_30167__$1 = (function (){var statearr_30183 = state_30167;
(statearr_30183[(7)] = inst_30144__$1);

return statearr_30183;
})();
var statearr_30184_30203 = state_30167__$1;
(statearr_30184_30203[(2)] = null);

(statearr_30184_30203[(1)] = (2));


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
});})(c__26077__auto__))
;
return ((function (switch__25897__auto__,c__26077__auto__){
return (function() {
var cljs$core$async$state_machine__25898__auto__ = null;
var cljs$core$async$state_machine__25898__auto____0 = (function (){
var statearr_30185 = [null,null,null,null,null,null,null,null];
(statearr_30185[(0)] = cljs$core$async$state_machine__25898__auto__);

(statearr_30185[(1)] = (1));

return statearr_30185;
});
var cljs$core$async$state_machine__25898__auto____1 = (function (state_30167){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_30167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e30186){if((e30186 instanceof Object)){
var ex__25901__auto__ = e30186;
var statearr_30187_30204 = state_30167;
(statearr_30187_30204[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30205 = state_30167;
state_30167 = G__30205;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs$core$async$state_machine__25898__auto__ = function(state_30167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25898__auto____1.call(this,state_30167);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25898__auto____0;
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25898__auto____1;
return cljs$core$async$state_machine__25898__auto__;
})()
;})(switch__25897__auto__,c__26077__auto__))
})();
var state__26079__auto__ = (function (){var statearr_30188 = f__26078__auto__.call(null);
(statearr_30188[(6)] = c__26077__auto__);

return statearr_30188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(c__26077__auto__))
);

return c__26077__auto__;
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
var x__21934__auto__ = (((_ == null))?null:_);
var m__21935__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__21934__auto__)]);
if(!((m__21935__auto__ == null))){
return m__21935__auto__.call(null,_);
} else {
var m__21935__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__21935__auto____$1 == null))){
return m__21935__auto____$1.call(null,_);
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
var x__21934__auto__ = (((m == null))?null:m);
var m__21935__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__21934__auto__)]);
if(!((m__21935__auto__ == null))){
return m__21935__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__21935__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__21935__auto____$1 == null))){
return m__21935__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__21934__auto__ = (((m == null))?null:m);
var m__21935__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__21934__auto__)]);
if(!((m__21935__auto__ == null))){
return m__21935__auto__.call(null,m,ch);
} else {
var m__21935__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__21935__auto____$1 == null))){
return m__21935__auto____$1.call(null,m,ch);
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
var x__21934__auto__ = (((m == null))?null:m);
var m__21935__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__21934__auto__)]);
if(!((m__21935__auto__ == null))){
return m__21935__auto__.call(null,m);
} else {
var m__21935__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__21935__auto____$1 == null))){
return m__21935__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async30206 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30206 = (function (ch,cs,meta30207){
this.ch = ch;
this.cs = cs;
this.meta30207 = meta30207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30208,meta30207__$1){
var self__ = this;
var _30208__$1 = this;
return (new cljs.core.async.t_cljs$core$async30206(self__.ch,self__.cs,meta30207__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30206.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30208){
var self__ = this;
var _30208__$1 = this;
return self__.meta30207;
});})(cs))
;

cljs.core.async.t_cljs$core$async30206.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30206.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30206.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30206.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30206.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30206.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30206.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30207","meta30207",548479421,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30206.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30206";

cljs.core.async.t_cljs$core$async30206.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__21872__auto__,writer__21873__auto__,opt__21874__auto__){
return cljs.core._write.call(null,writer__21873__auto__,"cljs.core.async/t_cljs$core$async30206");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30206 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30206(ch__$1,cs__$1,meta30207){
return (new cljs.core.async.t_cljs$core$async30206(ch__$1,cs__$1,meta30207));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30206(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26077__auto___30428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26077__auto___30428,cs,m,dchan,dctr,done){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (c__26077__auto___30428,cs,m,dchan,dctr,done){
return (function (state_30343){
var state_val_30344 = (state_30343[(1)]);
if((state_val_30344 === (7))){
var inst_30339 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
var statearr_30345_30429 = state_30343__$1;
(statearr_30345_30429[(2)] = inst_30339);

(statearr_30345_30429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (20))){
var inst_30242 = (state_30343[(7)]);
var inst_30254 = cljs.core.first.call(null,inst_30242);
var inst_30255 = cljs.core.nth.call(null,inst_30254,(0),null);
var inst_30256 = cljs.core.nth.call(null,inst_30254,(1),null);
var state_30343__$1 = (function (){var statearr_30346 = state_30343;
(statearr_30346[(8)] = inst_30255);

return statearr_30346;
})();
if(cljs.core.truth_(inst_30256)){
var statearr_30347_30430 = state_30343__$1;
(statearr_30347_30430[(1)] = (22));

} else {
var statearr_30348_30431 = state_30343__$1;
(statearr_30348_30431[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (27))){
var inst_30211 = (state_30343[(9)]);
var inst_30286 = (state_30343[(10)]);
var inst_30291 = (state_30343[(11)]);
var inst_30284 = (state_30343[(12)]);
var inst_30291__$1 = cljs.core._nth.call(null,inst_30284,inst_30286);
var inst_30292 = cljs.core.async.put_BANG_.call(null,inst_30291__$1,inst_30211,done);
var state_30343__$1 = (function (){var statearr_30349 = state_30343;
(statearr_30349[(11)] = inst_30291__$1);

return statearr_30349;
})();
if(cljs.core.truth_(inst_30292)){
var statearr_30350_30432 = state_30343__$1;
(statearr_30350_30432[(1)] = (30));

} else {
var statearr_30351_30433 = state_30343__$1;
(statearr_30351_30433[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (1))){
var state_30343__$1 = state_30343;
var statearr_30352_30434 = state_30343__$1;
(statearr_30352_30434[(2)] = null);

(statearr_30352_30434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (24))){
var inst_30242 = (state_30343[(7)]);
var inst_30261 = (state_30343[(2)]);
var inst_30262 = cljs.core.next.call(null,inst_30242);
var inst_30220 = inst_30262;
var inst_30221 = null;
var inst_30222 = (0);
var inst_30223 = (0);
var state_30343__$1 = (function (){var statearr_30353 = state_30343;
(statearr_30353[(13)] = inst_30221);

(statearr_30353[(14)] = inst_30222);

(statearr_30353[(15)] = inst_30223);

(statearr_30353[(16)] = inst_30261);

(statearr_30353[(17)] = inst_30220);

return statearr_30353;
})();
var statearr_30354_30435 = state_30343__$1;
(statearr_30354_30435[(2)] = null);

(statearr_30354_30435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (39))){
var state_30343__$1 = state_30343;
var statearr_30358_30436 = state_30343__$1;
(statearr_30358_30436[(2)] = null);

(statearr_30358_30436[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (4))){
var inst_30211 = (state_30343[(9)]);
var inst_30211__$1 = (state_30343[(2)]);
var inst_30212 = (inst_30211__$1 == null);
var state_30343__$1 = (function (){var statearr_30359 = state_30343;
(statearr_30359[(9)] = inst_30211__$1);

return statearr_30359;
})();
if(cljs.core.truth_(inst_30212)){
var statearr_30360_30437 = state_30343__$1;
(statearr_30360_30437[(1)] = (5));

} else {
var statearr_30361_30438 = state_30343__$1;
(statearr_30361_30438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (15))){
var inst_30221 = (state_30343[(13)]);
var inst_30222 = (state_30343[(14)]);
var inst_30223 = (state_30343[(15)]);
var inst_30220 = (state_30343[(17)]);
var inst_30238 = (state_30343[(2)]);
var inst_30239 = (inst_30223 + (1));
var tmp30355 = inst_30221;
var tmp30356 = inst_30222;
var tmp30357 = inst_30220;
var inst_30220__$1 = tmp30357;
var inst_30221__$1 = tmp30355;
var inst_30222__$1 = tmp30356;
var inst_30223__$1 = inst_30239;
var state_30343__$1 = (function (){var statearr_30362 = state_30343;
(statearr_30362[(18)] = inst_30238);

(statearr_30362[(13)] = inst_30221__$1);

(statearr_30362[(14)] = inst_30222__$1);

(statearr_30362[(15)] = inst_30223__$1);

(statearr_30362[(17)] = inst_30220__$1);

return statearr_30362;
})();
var statearr_30363_30439 = state_30343__$1;
(statearr_30363_30439[(2)] = null);

(statearr_30363_30439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (21))){
var inst_30265 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
var statearr_30367_30440 = state_30343__$1;
(statearr_30367_30440[(2)] = inst_30265);

(statearr_30367_30440[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (31))){
var inst_30291 = (state_30343[(11)]);
var inst_30295 = done.call(null,null);
var inst_30296 = cljs.core.async.untap_STAR_.call(null,m,inst_30291);
var state_30343__$1 = (function (){var statearr_30368 = state_30343;
(statearr_30368[(19)] = inst_30295);

return statearr_30368;
})();
var statearr_30369_30441 = state_30343__$1;
(statearr_30369_30441[(2)] = inst_30296);

(statearr_30369_30441[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (32))){
var inst_30285 = (state_30343[(20)]);
var inst_30286 = (state_30343[(10)]);
var inst_30283 = (state_30343[(21)]);
var inst_30284 = (state_30343[(12)]);
var inst_30298 = (state_30343[(2)]);
var inst_30299 = (inst_30286 + (1));
var tmp30364 = inst_30285;
var tmp30365 = inst_30283;
var tmp30366 = inst_30284;
var inst_30283__$1 = tmp30365;
var inst_30284__$1 = tmp30366;
var inst_30285__$1 = tmp30364;
var inst_30286__$1 = inst_30299;
var state_30343__$1 = (function (){var statearr_30370 = state_30343;
(statearr_30370[(20)] = inst_30285__$1);

(statearr_30370[(10)] = inst_30286__$1);

(statearr_30370[(21)] = inst_30283__$1);

(statearr_30370[(12)] = inst_30284__$1);

(statearr_30370[(22)] = inst_30298);

return statearr_30370;
})();
var statearr_30371_30442 = state_30343__$1;
(statearr_30371_30442[(2)] = null);

(statearr_30371_30442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (40))){
var inst_30311 = (state_30343[(23)]);
var inst_30315 = done.call(null,null);
var inst_30316 = cljs.core.async.untap_STAR_.call(null,m,inst_30311);
var state_30343__$1 = (function (){var statearr_30372 = state_30343;
(statearr_30372[(24)] = inst_30315);

return statearr_30372;
})();
var statearr_30373_30443 = state_30343__$1;
(statearr_30373_30443[(2)] = inst_30316);

(statearr_30373_30443[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (33))){
var inst_30302 = (state_30343[(25)]);
var inst_30304 = cljs.core.chunked_seq_QMARK_.call(null,inst_30302);
var state_30343__$1 = state_30343;
if(inst_30304){
var statearr_30374_30444 = state_30343__$1;
(statearr_30374_30444[(1)] = (36));

} else {
var statearr_30375_30445 = state_30343__$1;
(statearr_30375_30445[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (13))){
var inst_30232 = (state_30343[(26)]);
var inst_30235 = cljs.core.async.close_BANG_.call(null,inst_30232);
var state_30343__$1 = state_30343;
var statearr_30376_30446 = state_30343__$1;
(statearr_30376_30446[(2)] = inst_30235);

(statearr_30376_30446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (22))){
var inst_30255 = (state_30343[(8)]);
var inst_30258 = cljs.core.async.close_BANG_.call(null,inst_30255);
var state_30343__$1 = state_30343;
var statearr_30377_30447 = state_30343__$1;
(statearr_30377_30447[(2)] = inst_30258);

(statearr_30377_30447[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (36))){
var inst_30302 = (state_30343[(25)]);
var inst_30306 = cljs.core.chunk_first.call(null,inst_30302);
var inst_30307 = cljs.core.chunk_rest.call(null,inst_30302);
var inst_30308 = cljs.core.count.call(null,inst_30306);
var inst_30283 = inst_30307;
var inst_30284 = inst_30306;
var inst_30285 = inst_30308;
var inst_30286 = (0);
var state_30343__$1 = (function (){var statearr_30378 = state_30343;
(statearr_30378[(20)] = inst_30285);

(statearr_30378[(10)] = inst_30286);

(statearr_30378[(21)] = inst_30283);

(statearr_30378[(12)] = inst_30284);

return statearr_30378;
})();
var statearr_30379_30448 = state_30343__$1;
(statearr_30379_30448[(2)] = null);

(statearr_30379_30448[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (41))){
var inst_30302 = (state_30343[(25)]);
var inst_30318 = (state_30343[(2)]);
var inst_30319 = cljs.core.next.call(null,inst_30302);
var inst_30283 = inst_30319;
var inst_30284 = null;
var inst_30285 = (0);
var inst_30286 = (0);
var state_30343__$1 = (function (){var statearr_30380 = state_30343;
(statearr_30380[(20)] = inst_30285);

(statearr_30380[(10)] = inst_30286);

(statearr_30380[(27)] = inst_30318);

(statearr_30380[(21)] = inst_30283);

(statearr_30380[(12)] = inst_30284);

return statearr_30380;
})();
var statearr_30381_30449 = state_30343__$1;
(statearr_30381_30449[(2)] = null);

(statearr_30381_30449[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (43))){
var state_30343__$1 = state_30343;
var statearr_30382_30450 = state_30343__$1;
(statearr_30382_30450[(2)] = null);

(statearr_30382_30450[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (29))){
var inst_30327 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
var statearr_30383_30451 = state_30343__$1;
(statearr_30383_30451[(2)] = inst_30327);

(statearr_30383_30451[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (44))){
var inst_30336 = (state_30343[(2)]);
var state_30343__$1 = (function (){var statearr_30384 = state_30343;
(statearr_30384[(28)] = inst_30336);

return statearr_30384;
})();
var statearr_30385_30452 = state_30343__$1;
(statearr_30385_30452[(2)] = null);

(statearr_30385_30452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (6))){
var inst_30275 = (state_30343[(29)]);
var inst_30274 = cljs.core.deref.call(null,cs);
var inst_30275__$1 = cljs.core.keys.call(null,inst_30274);
var inst_30276 = cljs.core.count.call(null,inst_30275__$1);
var inst_30277 = cljs.core.reset_BANG_.call(null,dctr,inst_30276);
var inst_30282 = cljs.core.seq.call(null,inst_30275__$1);
var inst_30283 = inst_30282;
var inst_30284 = null;
var inst_30285 = (0);
var inst_30286 = (0);
var state_30343__$1 = (function (){var statearr_30386 = state_30343;
(statearr_30386[(30)] = inst_30277);

(statearr_30386[(20)] = inst_30285);

(statearr_30386[(29)] = inst_30275__$1);

(statearr_30386[(10)] = inst_30286);

(statearr_30386[(21)] = inst_30283);

(statearr_30386[(12)] = inst_30284);

return statearr_30386;
})();
var statearr_30387_30453 = state_30343__$1;
(statearr_30387_30453[(2)] = null);

(statearr_30387_30453[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (28))){
var inst_30302 = (state_30343[(25)]);
var inst_30283 = (state_30343[(21)]);
var inst_30302__$1 = cljs.core.seq.call(null,inst_30283);
var state_30343__$1 = (function (){var statearr_30388 = state_30343;
(statearr_30388[(25)] = inst_30302__$1);

return statearr_30388;
})();
if(inst_30302__$1){
var statearr_30389_30454 = state_30343__$1;
(statearr_30389_30454[(1)] = (33));

} else {
var statearr_30390_30455 = state_30343__$1;
(statearr_30390_30455[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (25))){
var inst_30285 = (state_30343[(20)]);
var inst_30286 = (state_30343[(10)]);
var inst_30288 = (inst_30286 < inst_30285);
var inst_30289 = inst_30288;
var state_30343__$1 = state_30343;
if(cljs.core.truth_(inst_30289)){
var statearr_30391_30456 = state_30343__$1;
(statearr_30391_30456[(1)] = (27));

} else {
var statearr_30392_30457 = state_30343__$1;
(statearr_30392_30457[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (34))){
var state_30343__$1 = state_30343;
var statearr_30393_30458 = state_30343__$1;
(statearr_30393_30458[(2)] = null);

(statearr_30393_30458[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (17))){
var state_30343__$1 = state_30343;
var statearr_30394_30459 = state_30343__$1;
(statearr_30394_30459[(2)] = null);

(statearr_30394_30459[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (3))){
var inst_30341 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30343__$1,inst_30341);
} else {
if((state_val_30344 === (12))){
var inst_30270 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
var statearr_30395_30460 = state_30343__$1;
(statearr_30395_30460[(2)] = inst_30270);

(statearr_30395_30460[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (2))){
var state_30343__$1 = state_30343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30343__$1,(4),ch);
} else {
if((state_val_30344 === (23))){
var state_30343__$1 = state_30343;
var statearr_30396_30461 = state_30343__$1;
(statearr_30396_30461[(2)] = null);

(statearr_30396_30461[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (35))){
var inst_30325 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
var statearr_30397_30462 = state_30343__$1;
(statearr_30397_30462[(2)] = inst_30325);

(statearr_30397_30462[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (19))){
var inst_30242 = (state_30343[(7)]);
var inst_30246 = cljs.core.chunk_first.call(null,inst_30242);
var inst_30247 = cljs.core.chunk_rest.call(null,inst_30242);
var inst_30248 = cljs.core.count.call(null,inst_30246);
var inst_30220 = inst_30247;
var inst_30221 = inst_30246;
var inst_30222 = inst_30248;
var inst_30223 = (0);
var state_30343__$1 = (function (){var statearr_30398 = state_30343;
(statearr_30398[(13)] = inst_30221);

(statearr_30398[(14)] = inst_30222);

(statearr_30398[(15)] = inst_30223);

(statearr_30398[(17)] = inst_30220);

return statearr_30398;
})();
var statearr_30399_30463 = state_30343__$1;
(statearr_30399_30463[(2)] = null);

(statearr_30399_30463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (11))){
var inst_30242 = (state_30343[(7)]);
var inst_30220 = (state_30343[(17)]);
var inst_30242__$1 = cljs.core.seq.call(null,inst_30220);
var state_30343__$1 = (function (){var statearr_30400 = state_30343;
(statearr_30400[(7)] = inst_30242__$1);

return statearr_30400;
})();
if(inst_30242__$1){
var statearr_30401_30464 = state_30343__$1;
(statearr_30401_30464[(1)] = (16));

} else {
var statearr_30402_30465 = state_30343__$1;
(statearr_30402_30465[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (9))){
var inst_30272 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
var statearr_30403_30466 = state_30343__$1;
(statearr_30403_30466[(2)] = inst_30272);

(statearr_30403_30466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (5))){
var inst_30218 = cljs.core.deref.call(null,cs);
var inst_30219 = cljs.core.seq.call(null,inst_30218);
var inst_30220 = inst_30219;
var inst_30221 = null;
var inst_30222 = (0);
var inst_30223 = (0);
var state_30343__$1 = (function (){var statearr_30404 = state_30343;
(statearr_30404[(13)] = inst_30221);

(statearr_30404[(14)] = inst_30222);

(statearr_30404[(15)] = inst_30223);

(statearr_30404[(17)] = inst_30220);

return statearr_30404;
})();
var statearr_30405_30467 = state_30343__$1;
(statearr_30405_30467[(2)] = null);

(statearr_30405_30467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (14))){
var state_30343__$1 = state_30343;
var statearr_30406_30468 = state_30343__$1;
(statearr_30406_30468[(2)] = null);

(statearr_30406_30468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (45))){
var inst_30333 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
var statearr_30407_30469 = state_30343__$1;
(statearr_30407_30469[(2)] = inst_30333);

(statearr_30407_30469[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (26))){
var inst_30275 = (state_30343[(29)]);
var inst_30329 = (state_30343[(2)]);
var inst_30330 = cljs.core.seq.call(null,inst_30275);
var state_30343__$1 = (function (){var statearr_30408 = state_30343;
(statearr_30408[(31)] = inst_30329);

return statearr_30408;
})();
if(inst_30330){
var statearr_30409_30470 = state_30343__$1;
(statearr_30409_30470[(1)] = (42));

} else {
var statearr_30410_30471 = state_30343__$1;
(statearr_30410_30471[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (16))){
var inst_30242 = (state_30343[(7)]);
var inst_30244 = cljs.core.chunked_seq_QMARK_.call(null,inst_30242);
var state_30343__$1 = state_30343;
if(inst_30244){
var statearr_30411_30472 = state_30343__$1;
(statearr_30411_30472[(1)] = (19));

} else {
var statearr_30412_30473 = state_30343__$1;
(statearr_30412_30473[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (38))){
var inst_30322 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
var statearr_30413_30474 = state_30343__$1;
(statearr_30413_30474[(2)] = inst_30322);

(statearr_30413_30474[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (30))){
var state_30343__$1 = state_30343;
var statearr_30414_30475 = state_30343__$1;
(statearr_30414_30475[(2)] = null);

(statearr_30414_30475[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (10))){
var inst_30221 = (state_30343[(13)]);
var inst_30223 = (state_30343[(15)]);
var inst_30231 = cljs.core._nth.call(null,inst_30221,inst_30223);
var inst_30232 = cljs.core.nth.call(null,inst_30231,(0),null);
var inst_30233 = cljs.core.nth.call(null,inst_30231,(1),null);
var state_30343__$1 = (function (){var statearr_30415 = state_30343;
(statearr_30415[(26)] = inst_30232);

return statearr_30415;
})();
if(cljs.core.truth_(inst_30233)){
var statearr_30416_30476 = state_30343__$1;
(statearr_30416_30476[(1)] = (13));

} else {
var statearr_30417_30477 = state_30343__$1;
(statearr_30417_30477[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (18))){
var inst_30268 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
var statearr_30418_30478 = state_30343__$1;
(statearr_30418_30478[(2)] = inst_30268);

(statearr_30418_30478[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (42))){
var state_30343__$1 = state_30343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30343__$1,(45),dchan);
} else {
if((state_val_30344 === (37))){
var inst_30211 = (state_30343[(9)]);
var inst_30311 = (state_30343[(23)]);
var inst_30302 = (state_30343[(25)]);
var inst_30311__$1 = cljs.core.first.call(null,inst_30302);
var inst_30312 = cljs.core.async.put_BANG_.call(null,inst_30311__$1,inst_30211,done);
var state_30343__$1 = (function (){var statearr_30419 = state_30343;
(statearr_30419[(23)] = inst_30311__$1);

return statearr_30419;
})();
if(cljs.core.truth_(inst_30312)){
var statearr_30420_30479 = state_30343__$1;
(statearr_30420_30479[(1)] = (39));

} else {
var statearr_30421_30480 = state_30343__$1;
(statearr_30421_30480[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (8))){
var inst_30222 = (state_30343[(14)]);
var inst_30223 = (state_30343[(15)]);
var inst_30225 = (inst_30223 < inst_30222);
var inst_30226 = inst_30225;
var state_30343__$1 = state_30343;
if(cljs.core.truth_(inst_30226)){
var statearr_30422_30481 = state_30343__$1;
(statearr_30422_30481[(1)] = (10));

} else {
var statearr_30423_30482 = state_30343__$1;
(statearr_30423_30482[(1)] = (11));

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
});})(c__26077__auto___30428,cs,m,dchan,dctr,done))
;
return ((function (switch__25897__auto__,c__26077__auto___30428,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25898__auto__ = null;
var cljs$core$async$mult_$_state_machine__25898__auto____0 = (function (){
var statearr_30424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30424[(0)] = cljs$core$async$mult_$_state_machine__25898__auto__);

(statearr_30424[(1)] = (1));

return statearr_30424;
});
var cljs$core$async$mult_$_state_machine__25898__auto____1 = (function (state_30343){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_30343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e30425){if((e30425 instanceof Object)){
var ex__25901__auto__ = e30425;
var statearr_30426_30483 = state_30343;
(statearr_30426_30483[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30484 = state_30343;
state_30343 = G__30484;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25898__auto__ = function(state_30343){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25898__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25898__auto____1.call(this,state_30343);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25898__auto____0;
cljs$core$async$mult_$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25898__auto____1;
return cljs$core$async$mult_$_state_machine__25898__auto__;
})()
;})(switch__25897__auto__,c__26077__auto___30428,cs,m,dchan,dctr,done))
})();
var state__26079__auto__ = (function (){var statearr_30427 = f__26078__auto__.call(null);
(statearr_30427[(6)] = c__26077__auto___30428);

return statearr_30427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(c__26077__auto___30428,cs,m,dchan,dctr,done))
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
var G__30486 = arguments.length;
switch (G__30486) {
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
var x__21934__auto__ = (((m == null))?null:m);
var m__21935__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__21934__auto__)]);
if(!((m__21935__auto__ == null))){
return m__21935__auto__.call(null,m,ch);
} else {
var m__21935__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__21935__auto____$1 == null))){
return m__21935__auto____$1.call(null,m,ch);
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
var x__21934__auto__ = (((m == null))?null:m);
var m__21935__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__21934__auto__)]);
if(!((m__21935__auto__ == null))){
return m__21935__auto__.call(null,m,ch);
} else {
var m__21935__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__21935__auto____$1 == null))){
return m__21935__auto____$1.call(null,m,ch);
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
var x__21934__auto__ = (((m == null))?null:m);
var m__21935__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__21934__auto__)]);
if(!((m__21935__auto__ == null))){
return m__21935__auto__.call(null,m);
} else {
var m__21935__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__21935__auto____$1 == null))){
return m__21935__auto____$1.call(null,m);
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
var x__21934__auto__ = (((m == null))?null:m);
var m__21935__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__21934__auto__)]);
if(!((m__21935__auto__ == null))){
return m__21935__auto__.call(null,m,state_map);
} else {
var m__21935__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__21935__auto____$1 == null))){
return m__21935__auto____$1.call(null,m,state_map);
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
var x__21934__auto__ = (((m == null))?null:m);
var m__21935__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__21934__auto__)]);
if(!((m__21935__auto__ == null))){
return m__21935__auto__.call(null,m,mode);
} else {
var m__21935__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__21935__auto____$1 == null))){
return m__21935__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22487__auto__ = [];
var len__22480__auto___30498 = arguments.length;
var i__22481__auto___30499 = (0);
while(true){
if((i__22481__auto___30499 < len__22480__auto___30498)){
args__22487__auto__.push((arguments[i__22481__auto___30499]));

var G__30500 = (i__22481__auto___30499 + (1));
i__22481__auto___30499 = G__30500;
continue;
} else {
}
break;
}

var argseq__22488__auto__ = ((((3) < args__22487__auto__.length))?(new cljs.core.IndexedSeq(args__22487__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22488__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30492){
var map__30493 = p__30492;
var map__30493__$1 = ((((!((map__30493 == null)))?((((map__30493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30493):map__30493);
var opts = map__30493__$1;
var statearr_30495_30501 = state;
(statearr_30495_30501[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__30493,map__30493__$1,opts){
return (function (val){
var statearr_30496_30502 = state;
(statearr_30496_30502[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__30493,map__30493__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_30497_30503 = state;
(statearr_30497_30503[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30488){
var G__30489 = cljs.core.first.call(null,seq30488);
var seq30488__$1 = cljs.core.next.call(null,seq30488);
var G__30490 = cljs.core.first.call(null,seq30488__$1);
var seq30488__$2 = cljs.core.next.call(null,seq30488__$1);
var G__30491 = cljs.core.first.call(null,seq30488__$2);
var seq30488__$3 = cljs.core.next.call(null,seq30488__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30489,G__30490,G__30491,seq30488__$3);
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
if(typeof cljs.core.async.t_cljs$core$async30504 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30504 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta30505){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta30505 = meta30505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30506,meta30505__$1){
var self__ = this;
var _30506__$1 = this;
return (new cljs.core.async.t_cljs$core$async30504(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta30505__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30504.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30506){
var self__ = this;
var _30506__$1 = this;
return self__.meta30505;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30504.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30504.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30504.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30504.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30504.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30504.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30504.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30504.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async30504.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta30505","meta30505",-983956821,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async30504.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30504.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30504";

cljs.core.async.t_cljs$core$async30504.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__21872__auto__,writer__21873__auto__,opt__21874__auto__){
return cljs.core._write.call(null,writer__21873__auto__,"cljs.core.async/t_cljs$core$async30504");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async30504 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async30504(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30505){
return (new cljs.core.async.t_cljs$core$async30504(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta30505));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async30504(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26077__auto___30668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26077__auto___30668,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (c__26077__auto___30668,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_30608){
var state_val_30609 = (state_30608[(1)]);
if((state_val_30609 === (7))){
var inst_30523 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
var statearr_30610_30669 = state_30608__$1;
(statearr_30610_30669[(2)] = inst_30523);

(statearr_30610_30669[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (20))){
var inst_30535 = (state_30608[(7)]);
var state_30608__$1 = state_30608;
var statearr_30611_30670 = state_30608__$1;
(statearr_30611_30670[(2)] = inst_30535);

(statearr_30611_30670[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (27))){
var state_30608__$1 = state_30608;
var statearr_30612_30671 = state_30608__$1;
(statearr_30612_30671[(2)] = null);

(statearr_30612_30671[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (1))){
var inst_30510 = (state_30608[(8)]);
var inst_30510__$1 = calc_state.call(null);
var inst_30512 = (inst_30510__$1 == null);
var inst_30513 = cljs.core.not.call(null,inst_30512);
var state_30608__$1 = (function (){var statearr_30613 = state_30608;
(statearr_30613[(8)] = inst_30510__$1);

return statearr_30613;
})();
if(inst_30513){
var statearr_30614_30672 = state_30608__$1;
(statearr_30614_30672[(1)] = (2));

} else {
var statearr_30615_30673 = state_30608__$1;
(statearr_30615_30673[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (24))){
var inst_30582 = (state_30608[(9)]);
var inst_30559 = (state_30608[(10)]);
var inst_30568 = (state_30608[(11)]);
var inst_30582__$1 = inst_30559.call(null,inst_30568);
var state_30608__$1 = (function (){var statearr_30616 = state_30608;
(statearr_30616[(9)] = inst_30582__$1);

return statearr_30616;
})();
if(cljs.core.truth_(inst_30582__$1)){
var statearr_30617_30674 = state_30608__$1;
(statearr_30617_30674[(1)] = (29));

} else {
var statearr_30618_30675 = state_30608__$1;
(statearr_30618_30675[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (4))){
var inst_30526 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
if(cljs.core.truth_(inst_30526)){
var statearr_30619_30676 = state_30608__$1;
(statearr_30619_30676[(1)] = (8));

} else {
var statearr_30620_30677 = state_30608__$1;
(statearr_30620_30677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (15))){
var inst_30553 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
if(cljs.core.truth_(inst_30553)){
var statearr_30621_30678 = state_30608__$1;
(statearr_30621_30678[(1)] = (19));

} else {
var statearr_30622_30679 = state_30608__$1;
(statearr_30622_30679[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (21))){
var inst_30558 = (state_30608[(12)]);
var inst_30558__$1 = (state_30608[(2)]);
var inst_30559 = cljs.core.get.call(null,inst_30558__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30560 = cljs.core.get.call(null,inst_30558__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30561 = cljs.core.get.call(null,inst_30558__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30608__$1 = (function (){var statearr_30623 = state_30608;
(statearr_30623[(10)] = inst_30559);

(statearr_30623[(13)] = inst_30560);

(statearr_30623[(12)] = inst_30558__$1);

return statearr_30623;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_30608__$1,(22),inst_30561);
} else {
if((state_val_30609 === (31))){
var inst_30590 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
if(cljs.core.truth_(inst_30590)){
var statearr_30624_30680 = state_30608__$1;
(statearr_30624_30680[(1)] = (32));

} else {
var statearr_30625_30681 = state_30608__$1;
(statearr_30625_30681[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (32))){
var inst_30567 = (state_30608[(14)]);
var state_30608__$1 = state_30608;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30608__$1,(35),out,inst_30567);
} else {
if((state_val_30609 === (33))){
var inst_30558 = (state_30608[(12)]);
var inst_30535 = inst_30558;
var state_30608__$1 = (function (){var statearr_30626 = state_30608;
(statearr_30626[(7)] = inst_30535);

return statearr_30626;
})();
var statearr_30627_30682 = state_30608__$1;
(statearr_30627_30682[(2)] = null);

(statearr_30627_30682[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (13))){
var inst_30535 = (state_30608[(7)]);
var inst_30542 = inst_30535.cljs$lang$protocol_mask$partition0$;
var inst_30543 = (inst_30542 & (64));
var inst_30544 = inst_30535.cljs$core$ISeq$;
var inst_30545 = (cljs.core.PROTOCOL_SENTINEL === inst_30544);
var inst_30546 = (inst_30543) || (inst_30545);
var state_30608__$1 = state_30608;
if(cljs.core.truth_(inst_30546)){
var statearr_30628_30683 = state_30608__$1;
(statearr_30628_30683[(1)] = (16));

} else {
var statearr_30629_30684 = state_30608__$1;
(statearr_30629_30684[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (22))){
var inst_30567 = (state_30608[(14)]);
var inst_30568 = (state_30608[(11)]);
var inst_30566 = (state_30608[(2)]);
var inst_30567__$1 = cljs.core.nth.call(null,inst_30566,(0),null);
var inst_30568__$1 = cljs.core.nth.call(null,inst_30566,(1),null);
var inst_30569 = (inst_30567__$1 == null);
var inst_30570 = cljs.core._EQ_.call(null,inst_30568__$1,change);
var inst_30571 = (inst_30569) || (inst_30570);
var state_30608__$1 = (function (){var statearr_30630 = state_30608;
(statearr_30630[(14)] = inst_30567__$1);

(statearr_30630[(11)] = inst_30568__$1);

return statearr_30630;
})();
if(cljs.core.truth_(inst_30571)){
var statearr_30631_30685 = state_30608__$1;
(statearr_30631_30685[(1)] = (23));

} else {
var statearr_30632_30686 = state_30608__$1;
(statearr_30632_30686[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (36))){
var inst_30558 = (state_30608[(12)]);
var inst_30535 = inst_30558;
var state_30608__$1 = (function (){var statearr_30633 = state_30608;
(statearr_30633[(7)] = inst_30535);

return statearr_30633;
})();
var statearr_30634_30687 = state_30608__$1;
(statearr_30634_30687[(2)] = null);

(statearr_30634_30687[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (29))){
var inst_30582 = (state_30608[(9)]);
var state_30608__$1 = state_30608;
var statearr_30635_30688 = state_30608__$1;
(statearr_30635_30688[(2)] = inst_30582);

(statearr_30635_30688[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (6))){
var state_30608__$1 = state_30608;
var statearr_30636_30689 = state_30608__$1;
(statearr_30636_30689[(2)] = false);

(statearr_30636_30689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (28))){
var inst_30578 = (state_30608[(2)]);
var inst_30579 = calc_state.call(null);
var inst_30535 = inst_30579;
var state_30608__$1 = (function (){var statearr_30637 = state_30608;
(statearr_30637[(7)] = inst_30535);

(statearr_30637[(15)] = inst_30578);

return statearr_30637;
})();
var statearr_30638_30690 = state_30608__$1;
(statearr_30638_30690[(2)] = null);

(statearr_30638_30690[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (25))){
var inst_30604 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
var statearr_30639_30691 = state_30608__$1;
(statearr_30639_30691[(2)] = inst_30604);

(statearr_30639_30691[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (34))){
var inst_30602 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
var statearr_30640_30692 = state_30608__$1;
(statearr_30640_30692[(2)] = inst_30602);

(statearr_30640_30692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (17))){
var state_30608__$1 = state_30608;
var statearr_30641_30693 = state_30608__$1;
(statearr_30641_30693[(2)] = false);

(statearr_30641_30693[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (3))){
var state_30608__$1 = state_30608;
var statearr_30642_30694 = state_30608__$1;
(statearr_30642_30694[(2)] = false);

(statearr_30642_30694[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (12))){
var inst_30606 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30608__$1,inst_30606);
} else {
if((state_val_30609 === (2))){
var inst_30510 = (state_30608[(8)]);
var inst_30515 = inst_30510.cljs$lang$protocol_mask$partition0$;
var inst_30516 = (inst_30515 & (64));
var inst_30517 = inst_30510.cljs$core$ISeq$;
var inst_30518 = (cljs.core.PROTOCOL_SENTINEL === inst_30517);
var inst_30519 = (inst_30516) || (inst_30518);
var state_30608__$1 = state_30608;
if(cljs.core.truth_(inst_30519)){
var statearr_30643_30695 = state_30608__$1;
(statearr_30643_30695[(1)] = (5));

} else {
var statearr_30644_30696 = state_30608__$1;
(statearr_30644_30696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (23))){
var inst_30567 = (state_30608[(14)]);
var inst_30573 = (inst_30567 == null);
var state_30608__$1 = state_30608;
if(cljs.core.truth_(inst_30573)){
var statearr_30645_30697 = state_30608__$1;
(statearr_30645_30697[(1)] = (26));

} else {
var statearr_30646_30698 = state_30608__$1;
(statearr_30646_30698[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (35))){
var inst_30593 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
if(cljs.core.truth_(inst_30593)){
var statearr_30647_30699 = state_30608__$1;
(statearr_30647_30699[(1)] = (36));

} else {
var statearr_30648_30700 = state_30608__$1;
(statearr_30648_30700[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (19))){
var inst_30535 = (state_30608[(7)]);
var inst_30555 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30535);
var state_30608__$1 = state_30608;
var statearr_30649_30701 = state_30608__$1;
(statearr_30649_30701[(2)] = inst_30555);

(statearr_30649_30701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (11))){
var inst_30535 = (state_30608[(7)]);
var inst_30539 = (inst_30535 == null);
var inst_30540 = cljs.core.not.call(null,inst_30539);
var state_30608__$1 = state_30608;
if(inst_30540){
var statearr_30650_30702 = state_30608__$1;
(statearr_30650_30702[(1)] = (13));

} else {
var statearr_30651_30703 = state_30608__$1;
(statearr_30651_30703[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (9))){
var inst_30510 = (state_30608[(8)]);
var state_30608__$1 = state_30608;
var statearr_30652_30704 = state_30608__$1;
(statearr_30652_30704[(2)] = inst_30510);

(statearr_30652_30704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (5))){
var state_30608__$1 = state_30608;
var statearr_30653_30705 = state_30608__$1;
(statearr_30653_30705[(2)] = true);

(statearr_30653_30705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (14))){
var state_30608__$1 = state_30608;
var statearr_30654_30706 = state_30608__$1;
(statearr_30654_30706[(2)] = false);

(statearr_30654_30706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (26))){
var inst_30568 = (state_30608[(11)]);
var inst_30575 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30568);
var state_30608__$1 = state_30608;
var statearr_30655_30707 = state_30608__$1;
(statearr_30655_30707[(2)] = inst_30575);

(statearr_30655_30707[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (16))){
var state_30608__$1 = state_30608;
var statearr_30656_30708 = state_30608__$1;
(statearr_30656_30708[(2)] = true);

(statearr_30656_30708[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (38))){
var inst_30598 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
var statearr_30657_30709 = state_30608__$1;
(statearr_30657_30709[(2)] = inst_30598);

(statearr_30657_30709[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (30))){
var inst_30559 = (state_30608[(10)]);
var inst_30560 = (state_30608[(13)]);
var inst_30568 = (state_30608[(11)]);
var inst_30585 = cljs.core.empty_QMARK_.call(null,inst_30559);
var inst_30586 = inst_30560.call(null,inst_30568);
var inst_30587 = cljs.core.not.call(null,inst_30586);
var inst_30588 = (inst_30585) && (inst_30587);
var state_30608__$1 = state_30608;
var statearr_30658_30710 = state_30608__$1;
(statearr_30658_30710[(2)] = inst_30588);

(statearr_30658_30710[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (10))){
var inst_30510 = (state_30608[(8)]);
var inst_30531 = (state_30608[(2)]);
var inst_30532 = cljs.core.get.call(null,inst_30531,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30533 = cljs.core.get.call(null,inst_30531,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30534 = cljs.core.get.call(null,inst_30531,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30535 = inst_30510;
var state_30608__$1 = (function (){var statearr_30659 = state_30608;
(statearr_30659[(7)] = inst_30535);

(statearr_30659[(16)] = inst_30534);

(statearr_30659[(17)] = inst_30533);

(statearr_30659[(18)] = inst_30532);

return statearr_30659;
})();
var statearr_30660_30711 = state_30608__$1;
(statearr_30660_30711[(2)] = null);

(statearr_30660_30711[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (18))){
var inst_30550 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
var statearr_30661_30712 = state_30608__$1;
(statearr_30661_30712[(2)] = inst_30550);

(statearr_30661_30712[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (37))){
var state_30608__$1 = state_30608;
var statearr_30662_30713 = state_30608__$1;
(statearr_30662_30713[(2)] = null);

(statearr_30662_30713[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (8))){
var inst_30510 = (state_30608[(8)]);
var inst_30528 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30510);
var state_30608__$1 = state_30608;
var statearr_30663_30714 = state_30608__$1;
(statearr_30663_30714[(2)] = inst_30528);

(statearr_30663_30714[(1)] = (10));


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
});})(c__26077__auto___30668,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25897__auto__,c__26077__auto___30668,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25898__auto__ = null;
var cljs$core$async$mix_$_state_machine__25898__auto____0 = (function (){
var statearr_30664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30664[(0)] = cljs$core$async$mix_$_state_machine__25898__auto__);

(statearr_30664[(1)] = (1));

return statearr_30664;
});
var cljs$core$async$mix_$_state_machine__25898__auto____1 = (function (state_30608){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_30608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e30665){if((e30665 instanceof Object)){
var ex__25901__auto__ = e30665;
var statearr_30666_30715 = state_30608;
(statearr_30666_30715[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30716 = state_30608;
state_30608 = G__30716;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25898__auto__ = function(state_30608){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25898__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25898__auto____1.call(this,state_30608);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25898__auto____0;
cljs$core$async$mix_$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25898__auto____1;
return cljs$core$async$mix_$_state_machine__25898__auto__;
})()
;})(switch__25897__auto__,c__26077__auto___30668,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26079__auto__ = (function (){var statearr_30667 = f__26078__auto__.call(null);
(statearr_30667[(6)] = c__26077__auto___30668);

return statearr_30667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(c__26077__auto___30668,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__21934__auto__ = (((p == null))?null:p);
var m__21935__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__21934__auto__)]);
if(!((m__21935__auto__ == null))){
return m__21935__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__21935__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__21935__auto____$1 == null))){
return m__21935__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__21934__auto__ = (((p == null))?null:p);
var m__21935__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__21934__auto__)]);
if(!((m__21935__auto__ == null))){
return m__21935__auto__.call(null,p,v,ch);
} else {
var m__21935__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__21935__auto____$1 == null))){
return m__21935__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30718 = arguments.length;
switch (G__30718) {
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
var x__21934__auto__ = (((p == null))?null:p);
var m__21935__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21934__auto__)]);
if(!((m__21935__auto__ == null))){
return m__21935__auto__.call(null,p);
} else {
var m__21935__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21935__auto____$1 == null))){
return m__21935__auto____$1.call(null,p);
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
var x__21934__auto__ = (((p == null))?null:p);
var m__21935__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21934__auto__)]);
if(!((m__21935__auto__ == null))){
return m__21935__auto__.call(null,p,v);
} else {
var m__21935__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21935__auto____$1 == null))){
return m__21935__auto____$1.call(null,p,v);
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
var G__30722 = arguments.length;
switch (G__30722) {
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
var or__21201__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21201__auto__)){
return or__21201__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21201__auto__,mults){
return (function (p1__30720_SHARP_){
if(cljs.core.truth_(p1__30720_SHARP_.call(null,topic))){
return p1__30720_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30720_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21201__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30723 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30723 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30724){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30724 = meta30724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30725,meta30724__$1){
var self__ = this;
var _30725__$1 = this;
return (new cljs.core.async.t_cljs$core$async30723(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30724__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30725){
var self__ = this;
var _30725__$1 = this;
return self__.meta30724;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30723.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30723.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30724","meta30724",-74672895,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30723.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30723.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30723";

cljs.core.async.t_cljs$core$async30723.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__21872__auto__,writer__21873__auto__,opt__21874__auto__){
return cljs.core._write.call(null,writer__21873__auto__,"cljs.core.async/t_cljs$core$async30723");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30723 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30723(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30724){
return (new cljs.core.async.t_cljs$core$async30723(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30724));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30723(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26077__auto___30843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26077__auto___30843,mults,ensure_mult,p){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (c__26077__auto___30843,mults,ensure_mult,p){
return (function (state_30797){
var state_val_30798 = (state_30797[(1)]);
if((state_val_30798 === (7))){
var inst_30793 = (state_30797[(2)]);
var state_30797__$1 = state_30797;
var statearr_30799_30844 = state_30797__$1;
(statearr_30799_30844[(2)] = inst_30793);

(statearr_30799_30844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (20))){
var state_30797__$1 = state_30797;
var statearr_30800_30845 = state_30797__$1;
(statearr_30800_30845[(2)] = null);

(statearr_30800_30845[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (1))){
var state_30797__$1 = state_30797;
var statearr_30801_30846 = state_30797__$1;
(statearr_30801_30846[(2)] = null);

(statearr_30801_30846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (24))){
var inst_30776 = (state_30797[(7)]);
var inst_30785 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30776);
var state_30797__$1 = state_30797;
var statearr_30802_30847 = state_30797__$1;
(statearr_30802_30847[(2)] = inst_30785);

(statearr_30802_30847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (4))){
var inst_30728 = (state_30797[(8)]);
var inst_30728__$1 = (state_30797[(2)]);
var inst_30729 = (inst_30728__$1 == null);
var state_30797__$1 = (function (){var statearr_30803 = state_30797;
(statearr_30803[(8)] = inst_30728__$1);

return statearr_30803;
})();
if(cljs.core.truth_(inst_30729)){
var statearr_30804_30848 = state_30797__$1;
(statearr_30804_30848[(1)] = (5));

} else {
var statearr_30805_30849 = state_30797__$1;
(statearr_30805_30849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (15))){
var inst_30770 = (state_30797[(2)]);
var state_30797__$1 = state_30797;
var statearr_30806_30850 = state_30797__$1;
(statearr_30806_30850[(2)] = inst_30770);

(statearr_30806_30850[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (21))){
var inst_30790 = (state_30797[(2)]);
var state_30797__$1 = (function (){var statearr_30807 = state_30797;
(statearr_30807[(9)] = inst_30790);

return statearr_30807;
})();
var statearr_30808_30851 = state_30797__$1;
(statearr_30808_30851[(2)] = null);

(statearr_30808_30851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (13))){
var inst_30752 = (state_30797[(10)]);
var inst_30754 = cljs.core.chunked_seq_QMARK_.call(null,inst_30752);
var state_30797__$1 = state_30797;
if(inst_30754){
var statearr_30809_30852 = state_30797__$1;
(statearr_30809_30852[(1)] = (16));

} else {
var statearr_30810_30853 = state_30797__$1;
(statearr_30810_30853[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (22))){
var inst_30782 = (state_30797[(2)]);
var state_30797__$1 = state_30797;
if(cljs.core.truth_(inst_30782)){
var statearr_30811_30854 = state_30797__$1;
(statearr_30811_30854[(1)] = (23));

} else {
var statearr_30812_30855 = state_30797__$1;
(statearr_30812_30855[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (6))){
var inst_30728 = (state_30797[(8)]);
var inst_30778 = (state_30797[(11)]);
var inst_30776 = (state_30797[(7)]);
var inst_30776__$1 = topic_fn.call(null,inst_30728);
var inst_30777 = cljs.core.deref.call(null,mults);
var inst_30778__$1 = cljs.core.get.call(null,inst_30777,inst_30776__$1);
var state_30797__$1 = (function (){var statearr_30813 = state_30797;
(statearr_30813[(11)] = inst_30778__$1);

(statearr_30813[(7)] = inst_30776__$1);

return statearr_30813;
})();
if(cljs.core.truth_(inst_30778__$1)){
var statearr_30814_30856 = state_30797__$1;
(statearr_30814_30856[(1)] = (19));

} else {
var statearr_30815_30857 = state_30797__$1;
(statearr_30815_30857[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (25))){
var inst_30787 = (state_30797[(2)]);
var state_30797__$1 = state_30797;
var statearr_30816_30858 = state_30797__$1;
(statearr_30816_30858[(2)] = inst_30787);

(statearr_30816_30858[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (17))){
var inst_30752 = (state_30797[(10)]);
var inst_30761 = cljs.core.first.call(null,inst_30752);
var inst_30762 = cljs.core.async.muxch_STAR_.call(null,inst_30761);
var inst_30763 = cljs.core.async.close_BANG_.call(null,inst_30762);
var inst_30764 = cljs.core.next.call(null,inst_30752);
var inst_30738 = inst_30764;
var inst_30739 = null;
var inst_30740 = (0);
var inst_30741 = (0);
var state_30797__$1 = (function (){var statearr_30817 = state_30797;
(statearr_30817[(12)] = inst_30740);

(statearr_30817[(13)] = inst_30763);

(statearr_30817[(14)] = inst_30741);

(statearr_30817[(15)] = inst_30739);

(statearr_30817[(16)] = inst_30738);

return statearr_30817;
})();
var statearr_30818_30859 = state_30797__$1;
(statearr_30818_30859[(2)] = null);

(statearr_30818_30859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (3))){
var inst_30795 = (state_30797[(2)]);
var state_30797__$1 = state_30797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30797__$1,inst_30795);
} else {
if((state_val_30798 === (12))){
var inst_30772 = (state_30797[(2)]);
var state_30797__$1 = state_30797;
var statearr_30819_30860 = state_30797__$1;
(statearr_30819_30860[(2)] = inst_30772);

(statearr_30819_30860[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (2))){
var state_30797__$1 = state_30797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30797__$1,(4),ch);
} else {
if((state_val_30798 === (23))){
var state_30797__$1 = state_30797;
var statearr_30820_30861 = state_30797__$1;
(statearr_30820_30861[(2)] = null);

(statearr_30820_30861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (19))){
var inst_30728 = (state_30797[(8)]);
var inst_30778 = (state_30797[(11)]);
var inst_30780 = cljs.core.async.muxch_STAR_.call(null,inst_30778);
var state_30797__$1 = state_30797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30797__$1,(22),inst_30780,inst_30728);
} else {
if((state_val_30798 === (11))){
var inst_30752 = (state_30797[(10)]);
var inst_30738 = (state_30797[(16)]);
var inst_30752__$1 = cljs.core.seq.call(null,inst_30738);
var state_30797__$1 = (function (){var statearr_30821 = state_30797;
(statearr_30821[(10)] = inst_30752__$1);

return statearr_30821;
})();
if(inst_30752__$1){
var statearr_30822_30862 = state_30797__$1;
(statearr_30822_30862[(1)] = (13));

} else {
var statearr_30823_30863 = state_30797__$1;
(statearr_30823_30863[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (9))){
var inst_30774 = (state_30797[(2)]);
var state_30797__$1 = state_30797;
var statearr_30824_30864 = state_30797__$1;
(statearr_30824_30864[(2)] = inst_30774);

(statearr_30824_30864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (5))){
var inst_30735 = cljs.core.deref.call(null,mults);
var inst_30736 = cljs.core.vals.call(null,inst_30735);
var inst_30737 = cljs.core.seq.call(null,inst_30736);
var inst_30738 = inst_30737;
var inst_30739 = null;
var inst_30740 = (0);
var inst_30741 = (0);
var state_30797__$1 = (function (){var statearr_30825 = state_30797;
(statearr_30825[(12)] = inst_30740);

(statearr_30825[(14)] = inst_30741);

(statearr_30825[(15)] = inst_30739);

(statearr_30825[(16)] = inst_30738);

return statearr_30825;
})();
var statearr_30826_30865 = state_30797__$1;
(statearr_30826_30865[(2)] = null);

(statearr_30826_30865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (14))){
var state_30797__$1 = state_30797;
var statearr_30830_30866 = state_30797__$1;
(statearr_30830_30866[(2)] = null);

(statearr_30830_30866[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (16))){
var inst_30752 = (state_30797[(10)]);
var inst_30756 = cljs.core.chunk_first.call(null,inst_30752);
var inst_30757 = cljs.core.chunk_rest.call(null,inst_30752);
var inst_30758 = cljs.core.count.call(null,inst_30756);
var inst_30738 = inst_30757;
var inst_30739 = inst_30756;
var inst_30740 = inst_30758;
var inst_30741 = (0);
var state_30797__$1 = (function (){var statearr_30831 = state_30797;
(statearr_30831[(12)] = inst_30740);

(statearr_30831[(14)] = inst_30741);

(statearr_30831[(15)] = inst_30739);

(statearr_30831[(16)] = inst_30738);

return statearr_30831;
})();
var statearr_30832_30867 = state_30797__$1;
(statearr_30832_30867[(2)] = null);

(statearr_30832_30867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (10))){
var inst_30740 = (state_30797[(12)]);
var inst_30741 = (state_30797[(14)]);
var inst_30739 = (state_30797[(15)]);
var inst_30738 = (state_30797[(16)]);
var inst_30746 = cljs.core._nth.call(null,inst_30739,inst_30741);
var inst_30747 = cljs.core.async.muxch_STAR_.call(null,inst_30746);
var inst_30748 = cljs.core.async.close_BANG_.call(null,inst_30747);
var inst_30749 = (inst_30741 + (1));
var tmp30827 = inst_30740;
var tmp30828 = inst_30739;
var tmp30829 = inst_30738;
var inst_30738__$1 = tmp30829;
var inst_30739__$1 = tmp30828;
var inst_30740__$1 = tmp30827;
var inst_30741__$1 = inst_30749;
var state_30797__$1 = (function (){var statearr_30833 = state_30797;
(statearr_30833[(12)] = inst_30740__$1);

(statearr_30833[(17)] = inst_30748);

(statearr_30833[(14)] = inst_30741__$1);

(statearr_30833[(15)] = inst_30739__$1);

(statearr_30833[(16)] = inst_30738__$1);

return statearr_30833;
})();
var statearr_30834_30868 = state_30797__$1;
(statearr_30834_30868[(2)] = null);

(statearr_30834_30868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (18))){
var inst_30767 = (state_30797[(2)]);
var state_30797__$1 = state_30797;
var statearr_30835_30869 = state_30797__$1;
(statearr_30835_30869[(2)] = inst_30767);

(statearr_30835_30869[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30798 === (8))){
var inst_30740 = (state_30797[(12)]);
var inst_30741 = (state_30797[(14)]);
var inst_30743 = (inst_30741 < inst_30740);
var inst_30744 = inst_30743;
var state_30797__$1 = state_30797;
if(cljs.core.truth_(inst_30744)){
var statearr_30836_30870 = state_30797__$1;
(statearr_30836_30870[(1)] = (10));

} else {
var statearr_30837_30871 = state_30797__$1;
(statearr_30837_30871[(1)] = (11));

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
});})(c__26077__auto___30843,mults,ensure_mult,p))
;
return ((function (switch__25897__auto__,c__26077__auto___30843,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25898__auto__ = null;
var cljs$core$async$state_machine__25898__auto____0 = (function (){
var statearr_30838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30838[(0)] = cljs$core$async$state_machine__25898__auto__);

(statearr_30838[(1)] = (1));

return statearr_30838;
});
var cljs$core$async$state_machine__25898__auto____1 = (function (state_30797){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_30797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e30839){if((e30839 instanceof Object)){
var ex__25901__auto__ = e30839;
var statearr_30840_30872 = state_30797;
(statearr_30840_30872[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30873 = state_30797;
state_30797 = G__30873;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs$core$async$state_machine__25898__auto__ = function(state_30797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25898__auto____1.call(this,state_30797);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25898__auto____0;
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25898__auto____1;
return cljs$core$async$state_machine__25898__auto__;
})()
;})(switch__25897__auto__,c__26077__auto___30843,mults,ensure_mult,p))
})();
var state__26079__auto__ = (function (){var statearr_30841 = f__26078__auto__.call(null);
(statearr_30841[(6)] = c__26077__auto___30843);

return statearr_30841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(c__26077__auto___30843,mults,ensure_mult,p))
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
var G__30875 = arguments.length;
switch (G__30875) {
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
var G__30878 = arguments.length;
switch (G__30878) {
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
var G__30881 = arguments.length;
switch (G__30881) {
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
var c__26077__auto___30948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26077__auto___30948,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (c__26077__auto___30948,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30920){
var state_val_30921 = (state_30920[(1)]);
if((state_val_30921 === (7))){
var state_30920__$1 = state_30920;
var statearr_30922_30949 = state_30920__$1;
(statearr_30922_30949[(2)] = null);

(statearr_30922_30949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (1))){
var state_30920__$1 = state_30920;
var statearr_30923_30950 = state_30920__$1;
(statearr_30923_30950[(2)] = null);

(statearr_30923_30950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (4))){
var inst_30884 = (state_30920[(7)]);
var inst_30886 = (inst_30884 < cnt);
var state_30920__$1 = state_30920;
if(cljs.core.truth_(inst_30886)){
var statearr_30924_30951 = state_30920__$1;
(statearr_30924_30951[(1)] = (6));

} else {
var statearr_30925_30952 = state_30920__$1;
(statearr_30925_30952[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (15))){
var inst_30916 = (state_30920[(2)]);
var state_30920__$1 = state_30920;
var statearr_30926_30953 = state_30920__$1;
(statearr_30926_30953[(2)] = inst_30916);

(statearr_30926_30953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (13))){
var inst_30909 = cljs.core.async.close_BANG_.call(null,out);
var state_30920__$1 = state_30920;
var statearr_30927_30954 = state_30920__$1;
(statearr_30927_30954[(2)] = inst_30909);

(statearr_30927_30954[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (6))){
var state_30920__$1 = state_30920;
var statearr_30928_30955 = state_30920__$1;
(statearr_30928_30955[(2)] = null);

(statearr_30928_30955[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (3))){
var inst_30918 = (state_30920[(2)]);
var state_30920__$1 = state_30920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30920__$1,inst_30918);
} else {
if((state_val_30921 === (12))){
var inst_30906 = (state_30920[(8)]);
var inst_30906__$1 = (state_30920[(2)]);
var inst_30907 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30906__$1);
var state_30920__$1 = (function (){var statearr_30929 = state_30920;
(statearr_30929[(8)] = inst_30906__$1);

return statearr_30929;
})();
if(cljs.core.truth_(inst_30907)){
var statearr_30930_30956 = state_30920__$1;
(statearr_30930_30956[(1)] = (13));

} else {
var statearr_30931_30957 = state_30920__$1;
(statearr_30931_30957[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (2))){
var inst_30883 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30884 = (0);
var state_30920__$1 = (function (){var statearr_30932 = state_30920;
(statearr_30932[(7)] = inst_30884);

(statearr_30932[(9)] = inst_30883);

return statearr_30932;
})();
var statearr_30933_30958 = state_30920__$1;
(statearr_30933_30958[(2)] = null);

(statearr_30933_30958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (11))){
var inst_30884 = (state_30920[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30920,(10),Object,null,(9));
var inst_30893 = chs__$1.call(null,inst_30884);
var inst_30894 = done.call(null,inst_30884);
var inst_30895 = cljs.core.async.take_BANG_.call(null,inst_30893,inst_30894);
var state_30920__$1 = state_30920;
var statearr_30934_30959 = state_30920__$1;
(statearr_30934_30959[(2)] = inst_30895);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30920__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (9))){
var inst_30884 = (state_30920[(7)]);
var inst_30897 = (state_30920[(2)]);
var inst_30898 = (inst_30884 + (1));
var inst_30884__$1 = inst_30898;
var state_30920__$1 = (function (){var statearr_30935 = state_30920;
(statearr_30935[(10)] = inst_30897);

(statearr_30935[(7)] = inst_30884__$1);

return statearr_30935;
})();
var statearr_30936_30960 = state_30920__$1;
(statearr_30936_30960[(2)] = null);

(statearr_30936_30960[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (5))){
var inst_30904 = (state_30920[(2)]);
var state_30920__$1 = (function (){var statearr_30937 = state_30920;
(statearr_30937[(11)] = inst_30904);

return statearr_30937;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30920__$1,(12),dchan);
} else {
if((state_val_30921 === (14))){
var inst_30906 = (state_30920[(8)]);
var inst_30911 = cljs.core.apply.call(null,f,inst_30906);
var state_30920__$1 = state_30920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30920__$1,(16),out,inst_30911);
} else {
if((state_val_30921 === (16))){
var inst_30913 = (state_30920[(2)]);
var state_30920__$1 = (function (){var statearr_30938 = state_30920;
(statearr_30938[(12)] = inst_30913);

return statearr_30938;
})();
var statearr_30939_30961 = state_30920__$1;
(statearr_30939_30961[(2)] = null);

(statearr_30939_30961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (10))){
var inst_30888 = (state_30920[(2)]);
var inst_30889 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30920__$1 = (function (){var statearr_30940 = state_30920;
(statearr_30940[(13)] = inst_30888);

return statearr_30940;
})();
var statearr_30941_30962 = state_30920__$1;
(statearr_30941_30962[(2)] = inst_30889);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30920__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30921 === (8))){
var inst_30902 = (state_30920[(2)]);
var state_30920__$1 = state_30920;
var statearr_30942_30963 = state_30920__$1;
(statearr_30942_30963[(2)] = inst_30902);

(statearr_30942_30963[(1)] = (5));


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
});})(c__26077__auto___30948,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25897__auto__,c__26077__auto___30948,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25898__auto__ = null;
var cljs$core$async$state_machine__25898__auto____0 = (function (){
var statearr_30943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30943[(0)] = cljs$core$async$state_machine__25898__auto__);

(statearr_30943[(1)] = (1));

return statearr_30943;
});
var cljs$core$async$state_machine__25898__auto____1 = (function (state_30920){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_30920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e30944){if((e30944 instanceof Object)){
var ex__25901__auto__ = e30944;
var statearr_30945_30964 = state_30920;
(statearr_30945_30964[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30965 = state_30920;
state_30920 = G__30965;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs$core$async$state_machine__25898__auto__ = function(state_30920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25898__auto____1.call(this,state_30920);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25898__auto____0;
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25898__auto____1;
return cljs$core$async$state_machine__25898__auto__;
})()
;})(switch__25897__auto__,c__26077__auto___30948,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26079__auto__ = (function (){var statearr_30946 = f__26078__auto__.call(null);
(statearr_30946[(6)] = c__26077__auto___30948);

return statearr_30946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(c__26077__auto___30948,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__30968 = arguments.length;
switch (G__30968) {
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
var c__26077__auto___31022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26077__auto___31022,out){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (c__26077__auto___31022,out){
return (function (state_31000){
var state_val_31001 = (state_31000[(1)]);
if((state_val_31001 === (7))){
var inst_30980 = (state_31000[(7)]);
var inst_30979 = (state_31000[(8)]);
var inst_30979__$1 = (state_31000[(2)]);
var inst_30980__$1 = cljs.core.nth.call(null,inst_30979__$1,(0),null);
var inst_30981 = cljs.core.nth.call(null,inst_30979__$1,(1),null);
var inst_30982 = (inst_30980__$1 == null);
var state_31000__$1 = (function (){var statearr_31002 = state_31000;
(statearr_31002[(9)] = inst_30981);

(statearr_31002[(7)] = inst_30980__$1);

(statearr_31002[(8)] = inst_30979__$1);

return statearr_31002;
})();
if(cljs.core.truth_(inst_30982)){
var statearr_31003_31023 = state_31000__$1;
(statearr_31003_31023[(1)] = (8));

} else {
var statearr_31004_31024 = state_31000__$1;
(statearr_31004_31024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (1))){
var inst_30969 = cljs.core.vec.call(null,chs);
var inst_30970 = inst_30969;
var state_31000__$1 = (function (){var statearr_31005 = state_31000;
(statearr_31005[(10)] = inst_30970);

return statearr_31005;
})();
var statearr_31006_31025 = state_31000__$1;
(statearr_31006_31025[(2)] = null);

(statearr_31006_31025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (4))){
var inst_30970 = (state_31000[(10)]);
var state_31000__$1 = state_31000;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31000__$1,(7),inst_30970);
} else {
if((state_val_31001 === (6))){
var inst_30996 = (state_31000[(2)]);
var state_31000__$1 = state_31000;
var statearr_31007_31026 = state_31000__$1;
(statearr_31007_31026[(2)] = inst_30996);

(statearr_31007_31026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (3))){
var inst_30998 = (state_31000[(2)]);
var state_31000__$1 = state_31000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31000__$1,inst_30998);
} else {
if((state_val_31001 === (2))){
var inst_30970 = (state_31000[(10)]);
var inst_30972 = cljs.core.count.call(null,inst_30970);
var inst_30973 = (inst_30972 > (0));
var state_31000__$1 = state_31000;
if(cljs.core.truth_(inst_30973)){
var statearr_31009_31027 = state_31000__$1;
(statearr_31009_31027[(1)] = (4));

} else {
var statearr_31010_31028 = state_31000__$1;
(statearr_31010_31028[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (11))){
var inst_30970 = (state_31000[(10)]);
var inst_30989 = (state_31000[(2)]);
var tmp31008 = inst_30970;
var inst_30970__$1 = tmp31008;
var state_31000__$1 = (function (){var statearr_31011 = state_31000;
(statearr_31011[(11)] = inst_30989);

(statearr_31011[(10)] = inst_30970__$1);

return statearr_31011;
})();
var statearr_31012_31029 = state_31000__$1;
(statearr_31012_31029[(2)] = null);

(statearr_31012_31029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (9))){
var inst_30980 = (state_31000[(7)]);
var state_31000__$1 = state_31000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31000__$1,(11),out,inst_30980);
} else {
if((state_val_31001 === (5))){
var inst_30994 = cljs.core.async.close_BANG_.call(null,out);
var state_31000__$1 = state_31000;
var statearr_31013_31030 = state_31000__$1;
(statearr_31013_31030[(2)] = inst_30994);

(statearr_31013_31030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (10))){
var inst_30992 = (state_31000[(2)]);
var state_31000__$1 = state_31000;
var statearr_31014_31031 = state_31000__$1;
(statearr_31014_31031[(2)] = inst_30992);

(statearr_31014_31031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (8))){
var inst_30981 = (state_31000[(9)]);
var inst_30980 = (state_31000[(7)]);
var inst_30979 = (state_31000[(8)]);
var inst_30970 = (state_31000[(10)]);
var inst_30984 = (function (){var cs = inst_30970;
var vec__30975 = inst_30979;
var v = inst_30980;
var c = inst_30981;
return ((function (cs,vec__30975,v,c,inst_30981,inst_30980,inst_30979,inst_30970,state_val_31001,c__26077__auto___31022,out){
return (function (p1__30966_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30966_SHARP_);
});
;})(cs,vec__30975,v,c,inst_30981,inst_30980,inst_30979,inst_30970,state_val_31001,c__26077__auto___31022,out))
})();
var inst_30985 = cljs.core.filterv.call(null,inst_30984,inst_30970);
var inst_30970__$1 = inst_30985;
var state_31000__$1 = (function (){var statearr_31015 = state_31000;
(statearr_31015[(10)] = inst_30970__$1);

return statearr_31015;
})();
var statearr_31016_31032 = state_31000__$1;
(statearr_31016_31032[(2)] = null);

(statearr_31016_31032[(1)] = (2));


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
});})(c__26077__auto___31022,out))
;
return ((function (switch__25897__auto__,c__26077__auto___31022,out){
return (function() {
var cljs$core$async$state_machine__25898__auto__ = null;
var cljs$core$async$state_machine__25898__auto____0 = (function (){
var statearr_31017 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31017[(0)] = cljs$core$async$state_machine__25898__auto__);

(statearr_31017[(1)] = (1));

return statearr_31017;
});
var cljs$core$async$state_machine__25898__auto____1 = (function (state_31000){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_31000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e31018){if((e31018 instanceof Object)){
var ex__25901__auto__ = e31018;
var statearr_31019_31033 = state_31000;
(statearr_31019_31033[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31034 = state_31000;
state_31000 = G__31034;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs$core$async$state_machine__25898__auto__ = function(state_31000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25898__auto____1.call(this,state_31000);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25898__auto____0;
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25898__auto____1;
return cljs$core$async$state_machine__25898__auto__;
})()
;})(switch__25897__auto__,c__26077__auto___31022,out))
})();
var state__26079__auto__ = (function (){var statearr_31020 = f__26078__auto__.call(null);
(statearr_31020[(6)] = c__26077__auto___31022);

return statearr_31020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(c__26077__auto___31022,out))
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
var G__31036 = arguments.length;
switch (G__31036) {
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
var c__26077__auto___31081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26077__auto___31081,out){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (c__26077__auto___31081,out){
return (function (state_31060){
var state_val_31061 = (state_31060[(1)]);
if((state_val_31061 === (7))){
var inst_31042 = (state_31060[(7)]);
var inst_31042__$1 = (state_31060[(2)]);
var inst_31043 = (inst_31042__$1 == null);
var inst_31044 = cljs.core.not.call(null,inst_31043);
var state_31060__$1 = (function (){var statearr_31062 = state_31060;
(statearr_31062[(7)] = inst_31042__$1);

return statearr_31062;
})();
if(inst_31044){
var statearr_31063_31082 = state_31060__$1;
(statearr_31063_31082[(1)] = (8));

} else {
var statearr_31064_31083 = state_31060__$1;
(statearr_31064_31083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (1))){
var inst_31037 = (0);
var state_31060__$1 = (function (){var statearr_31065 = state_31060;
(statearr_31065[(8)] = inst_31037);

return statearr_31065;
})();
var statearr_31066_31084 = state_31060__$1;
(statearr_31066_31084[(2)] = null);

(statearr_31066_31084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (4))){
var state_31060__$1 = state_31060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31060__$1,(7),ch);
} else {
if((state_val_31061 === (6))){
var inst_31055 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31067_31085 = state_31060__$1;
(statearr_31067_31085[(2)] = inst_31055);

(statearr_31067_31085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (3))){
var inst_31057 = (state_31060[(2)]);
var inst_31058 = cljs.core.async.close_BANG_.call(null,out);
var state_31060__$1 = (function (){var statearr_31068 = state_31060;
(statearr_31068[(9)] = inst_31057);

return statearr_31068;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31060__$1,inst_31058);
} else {
if((state_val_31061 === (2))){
var inst_31037 = (state_31060[(8)]);
var inst_31039 = (inst_31037 < n);
var state_31060__$1 = state_31060;
if(cljs.core.truth_(inst_31039)){
var statearr_31069_31086 = state_31060__$1;
(statearr_31069_31086[(1)] = (4));

} else {
var statearr_31070_31087 = state_31060__$1;
(statearr_31070_31087[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (11))){
var inst_31037 = (state_31060[(8)]);
var inst_31047 = (state_31060[(2)]);
var inst_31048 = (inst_31037 + (1));
var inst_31037__$1 = inst_31048;
var state_31060__$1 = (function (){var statearr_31071 = state_31060;
(statearr_31071[(10)] = inst_31047);

(statearr_31071[(8)] = inst_31037__$1);

return statearr_31071;
})();
var statearr_31072_31088 = state_31060__$1;
(statearr_31072_31088[(2)] = null);

(statearr_31072_31088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (9))){
var state_31060__$1 = state_31060;
var statearr_31073_31089 = state_31060__$1;
(statearr_31073_31089[(2)] = null);

(statearr_31073_31089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (5))){
var state_31060__$1 = state_31060;
var statearr_31074_31090 = state_31060__$1;
(statearr_31074_31090[(2)] = null);

(statearr_31074_31090[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (10))){
var inst_31052 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31075_31091 = state_31060__$1;
(statearr_31075_31091[(2)] = inst_31052);

(statearr_31075_31091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (8))){
var inst_31042 = (state_31060[(7)]);
var state_31060__$1 = state_31060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31060__$1,(11),out,inst_31042);
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
});})(c__26077__auto___31081,out))
;
return ((function (switch__25897__auto__,c__26077__auto___31081,out){
return (function() {
var cljs$core$async$state_machine__25898__auto__ = null;
var cljs$core$async$state_machine__25898__auto____0 = (function (){
var statearr_31076 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31076[(0)] = cljs$core$async$state_machine__25898__auto__);

(statearr_31076[(1)] = (1));

return statearr_31076;
});
var cljs$core$async$state_machine__25898__auto____1 = (function (state_31060){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_31060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e31077){if((e31077 instanceof Object)){
var ex__25901__auto__ = e31077;
var statearr_31078_31092 = state_31060;
(statearr_31078_31092[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31093 = state_31060;
state_31060 = G__31093;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs$core$async$state_machine__25898__auto__ = function(state_31060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25898__auto____1.call(this,state_31060);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25898__auto____0;
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25898__auto____1;
return cljs$core$async$state_machine__25898__auto__;
})()
;})(switch__25897__auto__,c__26077__auto___31081,out))
})();
var state__26079__auto__ = (function (){var statearr_31079 = f__26078__auto__.call(null);
(statearr_31079[(6)] = c__26077__auto___31081);

return statearr_31079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(c__26077__auto___31081,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31095 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31095 = (function (f,ch,meta31096){
this.f = f;
this.ch = ch;
this.meta31096 = meta31096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31097,meta31096__$1){
var self__ = this;
var _31097__$1 = this;
return (new cljs.core.async.t_cljs$core$async31095(self__.f,self__.ch,meta31096__$1));
});

cljs.core.async.t_cljs$core$async31095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31097){
var self__ = this;
var _31097__$1 = this;
return self__.meta31096;
});

cljs.core.async.t_cljs$core$async31095.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31095.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31095.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31095.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31095.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31098 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31098 = (function (f,ch,meta31096,_,fn1,meta31099){
this.f = f;
this.ch = ch;
this.meta31096 = meta31096;
this._ = _;
this.fn1 = fn1;
this.meta31099 = meta31099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31100,meta31099__$1){
var self__ = this;
var _31100__$1 = this;
return (new cljs.core.async.t_cljs$core$async31098(self__.f,self__.ch,self__.meta31096,self__._,self__.fn1,meta31099__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31098.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31100){
var self__ = this;
var _31100__$1 = this;
return self__.meta31099;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31098.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31098.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31098.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31098.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31094_SHARP_){
return f1.call(null,(((p1__31094_SHARP_ == null))?null:self__.f.call(null,p1__31094_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31098.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31096","meta31096",-1791090408,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31095","cljs.core.async/t_cljs$core$async31095",371928628,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31099","meta31099",311324001,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31098.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31098";

cljs.core.async.t_cljs$core$async31098.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__21872__auto__,writer__21873__auto__,opt__21874__auto__){
return cljs.core._write.call(null,writer__21873__auto__,"cljs.core.async/t_cljs$core$async31098");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31098 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31098(f__$1,ch__$1,meta31096__$1,___$2,fn1__$1,meta31099){
return (new cljs.core.async.t_cljs$core$async31098(f__$1,ch__$1,meta31096__$1,___$2,fn1__$1,meta31099));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31098(self__.f,self__.ch,self__.meta31096,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21189__auto__ = ret;
if(cljs.core.truth_(and__21189__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21189__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31095.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31095.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31095.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31096","meta31096",-1791090408,null)], null);
});

cljs.core.async.t_cljs$core$async31095.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31095";

cljs.core.async.t_cljs$core$async31095.cljs$lang$ctorPrWriter = (function (this__21872__auto__,writer__21873__auto__,opt__21874__auto__){
return cljs.core._write.call(null,writer__21873__auto__,"cljs.core.async/t_cljs$core$async31095");
});

cljs.core.async.__GT_t_cljs$core$async31095 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31095(f__$1,ch__$1,meta31096){
return (new cljs.core.async.t_cljs$core$async31095(f__$1,ch__$1,meta31096));
});

}

return (new cljs.core.async.t_cljs$core$async31095(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31101 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31101 = (function (f,ch,meta31102){
this.f = f;
this.ch = ch;
this.meta31102 = meta31102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31103,meta31102__$1){
var self__ = this;
var _31103__$1 = this;
return (new cljs.core.async.t_cljs$core$async31101(self__.f,self__.ch,meta31102__$1));
});

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31103){
var self__ = this;
var _31103__$1 = this;
return self__.meta31102;
});

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31101.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31102","meta31102",-706429532,null)], null);
});

cljs.core.async.t_cljs$core$async31101.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31101";

cljs.core.async.t_cljs$core$async31101.cljs$lang$ctorPrWriter = (function (this__21872__auto__,writer__21873__auto__,opt__21874__auto__){
return cljs.core._write.call(null,writer__21873__auto__,"cljs.core.async/t_cljs$core$async31101");
});

cljs.core.async.__GT_t_cljs$core$async31101 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31101(f__$1,ch__$1,meta31102){
return (new cljs.core.async.t_cljs$core$async31101(f__$1,ch__$1,meta31102));
});

}

return (new cljs.core.async.t_cljs$core$async31101(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async31104 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31104 = (function (p,ch,meta31105){
this.p = p;
this.ch = ch;
this.meta31105 = meta31105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31106,meta31105__$1){
var self__ = this;
var _31106__$1 = this;
return (new cljs.core.async.t_cljs$core$async31104(self__.p,self__.ch,meta31105__$1));
});

cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31106){
var self__ = this;
var _31106__$1 = this;
return self__.meta31105;
});

cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31104.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async31104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31105","meta31105",1740122376,null)], null);
});

cljs.core.async.t_cljs$core$async31104.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31104";

cljs.core.async.t_cljs$core$async31104.cljs$lang$ctorPrWriter = (function (this__21872__auto__,writer__21873__auto__,opt__21874__auto__){
return cljs.core._write.call(null,writer__21873__auto__,"cljs.core.async/t_cljs$core$async31104");
});

cljs.core.async.__GT_t_cljs$core$async31104 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31104(p__$1,ch__$1,meta31105){
return (new cljs.core.async.t_cljs$core$async31104(p__$1,ch__$1,meta31105));
});

}

return (new cljs.core.async.t_cljs$core$async31104(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31108 = arguments.length;
switch (G__31108) {
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
var c__26077__auto___31148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26077__auto___31148,out){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (c__26077__auto___31148,out){
return (function (state_31129){
var state_val_31130 = (state_31129[(1)]);
if((state_val_31130 === (7))){
var inst_31125 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
var statearr_31131_31149 = state_31129__$1;
(statearr_31131_31149[(2)] = inst_31125);

(statearr_31131_31149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (1))){
var state_31129__$1 = state_31129;
var statearr_31132_31150 = state_31129__$1;
(statearr_31132_31150[(2)] = null);

(statearr_31132_31150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (4))){
var inst_31111 = (state_31129[(7)]);
var inst_31111__$1 = (state_31129[(2)]);
var inst_31112 = (inst_31111__$1 == null);
var state_31129__$1 = (function (){var statearr_31133 = state_31129;
(statearr_31133[(7)] = inst_31111__$1);

return statearr_31133;
})();
if(cljs.core.truth_(inst_31112)){
var statearr_31134_31151 = state_31129__$1;
(statearr_31134_31151[(1)] = (5));

} else {
var statearr_31135_31152 = state_31129__$1;
(statearr_31135_31152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (6))){
var inst_31111 = (state_31129[(7)]);
var inst_31116 = p.call(null,inst_31111);
var state_31129__$1 = state_31129;
if(cljs.core.truth_(inst_31116)){
var statearr_31136_31153 = state_31129__$1;
(statearr_31136_31153[(1)] = (8));

} else {
var statearr_31137_31154 = state_31129__$1;
(statearr_31137_31154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (3))){
var inst_31127 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31129__$1,inst_31127);
} else {
if((state_val_31130 === (2))){
var state_31129__$1 = state_31129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31129__$1,(4),ch);
} else {
if((state_val_31130 === (11))){
var inst_31119 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
var statearr_31138_31155 = state_31129__$1;
(statearr_31138_31155[(2)] = inst_31119);

(statearr_31138_31155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (9))){
var state_31129__$1 = state_31129;
var statearr_31139_31156 = state_31129__$1;
(statearr_31139_31156[(2)] = null);

(statearr_31139_31156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (5))){
var inst_31114 = cljs.core.async.close_BANG_.call(null,out);
var state_31129__$1 = state_31129;
var statearr_31140_31157 = state_31129__$1;
(statearr_31140_31157[(2)] = inst_31114);

(statearr_31140_31157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (10))){
var inst_31122 = (state_31129[(2)]);
var state_31129__$1 = (function (){var statearr_31141 = state_31129;
(statearr_31141[(8)] = inst_31122);

return statearr_31141;
})();
var statearr_31142_31158 = state_31129__$1;
(statearr_31142_31158[(2)] = null);

(statearr_31142_31158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (8))){
var inst_31111 = (state_31129[(7)]);
var state_31129__$1 = state_31129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31129__$1,(11),out,inst_31111);
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
});})(c__26077__auto___31148,out))
;
return ((function (switch__25897__auto__,c__26077__auto___31148,out){
return (function() {
var cljs$core$async$state_machine__25898__auto__ = null;
var cljs$core$async$state_machine__25898__auto____0 = (function (){
var statearr_31143 = [null,null,null,null,null,null,null,null,null];
(statearr_31143[(0)] = cljs$core$async$state_machine__25898__auto__);

(statearr_31143[(1)] = (1));

return statearr_31143;
});
var cljs$core$async$state_machine__25898__auto____1 = (function (state_31129){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_31129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e31144){if((e31144 instanceof Object)){
var ex__25901__auto__ = e31144;
var statearr_31145_31159 = state_31129;
(statearr_31145_31159[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31160 = state_31129;
state_31129 = G__31160;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs$core$async$state_machine__25898__auto__ = function(state_31129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25898__auto____1.call(this,state_31129);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25898__auto____0;
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25898__auto____1;
return cljs$core$async$state_machine__25898__auto__;
})()
;})(switch__25897__auto__,c__26077__auto___31148,out))
})();
var state__26079__auto__ = (function (){var statearr_31146 = f__26078__auto__.call(null);
(statearr_31146[(6)] = c__26077__auto___31148);

return statearr_31146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(c__26077__auto___31148,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31162 = arguments.length;
switch (G__31162) {
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
var c__26077__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26077__auto__){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (c__26077__auto__){
return (function (state_31225){
var state_val_31226 = (state_31225[(1)]);
if((state_val_31226 === (7))){
var inst_31221 = (state_31225[(2)]);
var state_31225__$1 = state_31225;
var statearr_31227_31265 = state_31225__$1;
(statearr_31227_31265[(2)] = inst_31221);

(statearr_31227_31265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (20))){
var inst_31191 = (state_31225[(7)]);
var inst_31202 = (state_31225[(2)]);
var inst_31203 = cljs.core.next.call(null,inst_31191);
var inst_31177 = inst_31203;
var inst_31178 = null;
var inst_31179 = (0);
var inst_31180 = (0);
var state_31225__$1 = (function (){var statearr_31228 = state_31225;
(statearr_31228[(8)] = inst_31177);

(statearr_31228[(9)] = inst_31179);

(statearr_31228[(10)] = inst_31202);

(statearr_31228[(11)] = inst_31180);

(statearr_31228[(12)] = inst_31178);

return statearr_31228;
})();
var statearr_31229_31266 = state_31225__$1;
(statearr_31229_31266[(2)] = null);

(statearr_31229_31266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (1))){
var state_31225__$1 = state_31225;
var statearr_31230_31267 = state_31225__$1;
(statearr_31230_31267[(2)] = null);

(statearr_31230_31267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (4))){
var inst_31166 = (state_31225[(13)]);
var inst_31166__$1 = (state_31225[(2)]);
var inst_31167 = (inst_31166__$1 == null);
var state_31225__$1 = (function (){var statearr_31231 = state_31225;
(statearr_31231[(13)] = inst_31166__$1);

return statearr_31231;
})();
if(cljs.core.truth_(inst_31167)){
var statearr_31232_31268 = state_31225__$1;
(statearr_31232_31268[(1)] = (5));

} else {
var statearr_31233_31269 = state_31225__$1;
(statearr_31233_31269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (15))){
var state_31225__$1 = state_31225;
var statearr_31237_31270 = state_31225__$1;
(statearr_31237_31270[(2)] = null);

(statearr_31237_31270[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (21))){
var state_31225__$1 = state_31225;
var statearr_31238_31271 = state_31225__$1;
(statearr_31238_31271[(2)] = null);

(statearr_31238_31271[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (13))){
var inst_31177 = (state_31225[(8)]);
var inst_31179 = (state_31225[(9)]);
var inst_31180 = (state_31225[(11)]);
var inst_31178 = (state_31225[(12)]);
var inst_31187 = (state_31225[(2)]);
var inst_31188 = (inst_31180 + (1));
var tmp31234 = inst_31177;
var tmp31235 = inst_31179;
var tmp31236 = inst_31178;
var inst_31177__$1 = tmp31234;
var inst_31178__$1 = tmp31236;
var inst_31179__$1 = tmp31235;
var inst_31180__$1 = inst_31188;
var state_31225__$1 = (function (){var statearr_31239 = state_31225;
(statearr_31239[(14)] = inst_31187);

(statearr_31239[(8)] = inst_31177__$1);

(statearr_31239[(9)] = inst_31179__$1);

(statearr_31239[(11)] = inst_31180__$1);

(statearr_31239[(12)] = inst_31178__$1);

return statearr_31239;
})();
var statearr_31240_31272 = state_31225__$1;
(statearr_31240_31272[(2)] = null);

(statearr_31240_31272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (22))){
var state_31225__$1 = state_31225;
var statearr_31241_31273 = state_31225__$1;
(statearr_31241_31273[(2)] = null);

(statearr_31241_31273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (6))){
var inst_31166 = (state_31225[(13)]);
var inst_31175 = f.call(null,inst_31166);
var inst_31176 = cljs.core.seq.call(null,inst_31175);
var inst_31177 = inst_31176;
var inst_31178 = null;
var inst_31179 = (0);
var inst_31180 = (0);
var state_31225__$1 = (function (){var statearr_31242 = state_31225;
(statearr_31242[(8)] = inst_31177);

(statearr_31242[(9)] = inst_31179);

(statearr_31242[(11)] = inst_31180);

(statearr_31242[(12)] = inst_31178);

return statearr_31242;
})();
var statearr_31243_31274 = state_31225__$1;
(statearr_31243_31274[(2)] = null);

(statearr_31243_31274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (17))){
var inst_31191 = (state_31225[(7)]);
var inst_31195 = cljs.core.chunk_first.call(null,inst_31191);
var inst_31196 = cljs.core.chunk_rest.call(null,inst_31191);
var inst_31197 = cljs.core.count.call(null,inst_31195);
var inst_31177 = inst_31196;
var inst_31178 = inst_31195;
var inst_31179 = inst_31197;
var inst_31180 = (0);
var state_31225__$1 = (function (){var statearr_31244 = state_31225;
(statearr_31244[(8)] = inst_31177);

(statearr_31244[(9)] = inst_31179);

(statearr_31244[(11)] = inst_31180);

(statearr_31244[(12)] = inst_31178);

return statearr_31244;
})();
var statearr_31245_31275 = state_31225__$1;
(statearr_31245_31275[(2)] = null);

(statearr_31245_31275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (3))){
var inst_31223 = (state_31225[(2)]);
var state_31225__$1 = state_31225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31225__$1,inst_31223);
} else {
if((state_val_31226 === (12))){
var inst_31211 = (state_31225[(2)]);
var state_31225__$1 = state_31225;
var statearr_31246_31276 = state_31225__$1;
(statearr_31246_31276[(2)] = inst_31211);

(statearr_31246_31276[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (2))){
var state_31225__$1 = state_31225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31225__$1,(4),in$);
} else {
if((state_val_31226 === (23))){
var inst_31219 = (state_31225[(2)]);
var state_31225__$1 = state_31225;
var statearr_31247_31277 = state_31225__$1;
(statearr_31247_31277[(2)] = inst_31219);

(statearr_31247_31277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (19))){
var inst_31206 = (state_31225[(2)]);
var state_31225__$1 = state_31225;
var statearr_31248_31278 = state_31225__$1;
(statearr_31248_31278[(2)] = inst_31206);

(statearr_31248_31278[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (11))){
var inst_31177 = (state_31225[(8)]);
var inst_31191 = (state_31225[(7)]);
var inst_31191__$1 = cljs.core.seq.call(null,inst_31177);
var state_31225__$1 = (function (){var statearr_31249 = state_31225;
(statearr_31249[(7)] = inst_31191__$1);

return statearr_31249;
})();
if(inst_31191__$1){
var statearr_31250_31279 = state_31225__$1;
(statearr_31250_31279[(1)] = (14));

} else {
var statearr_31251_31280 = state_31225__$1;
(statearr_31251_31280[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (9))){
var inst_31213 = (state_31225[(2)]);
var inst_31214 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_31225__$1 = (function (){var statearr_31252 = state_31225;
(statearr_31252[(15)] = inst_31213);

return statearr_31252;
})();
if(cljs.core.truth_(inst_31214)){
var statearr_31253_31281 = state_31225__$1;
(statearr_31253_31281[(1)] = (21));

} else {
var statearr_31254_31282 = state_31225__$1;
(statearr_31254_31282[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (5))){
var inst_31169 = cljs.core.async.close_BANG_.call(null,out);
var state_31225__$1 = state_31225;
var statearr_31255_31283 = state_31225__$1;
(statearr_31255_31283[(2)] = inst_31169);

(statearr_31255_31283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (14))){
var inst_31191 = (state_31225[(7)]);
var inst_31193 = cljs.core.chunked_seq_QMARK_.call(null,inst_31191);
var state_31225__$1 = state_31225;
if(inst_31193){
var statearr_31256_31284 = state_31225__$1;
(statearr_31256_31284[(1)] = (17));

} else {
var statearr_31257_31285 = state_31225__$1;
(statearr_31257_31285[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (16))){
var inst_31209 = (state_31225[(2)]);
var state_31225__$1 = state_31225;
var statearr_31258_31286 = state_31225__$1;
(statearr_31258_31286[(2)] = inst_31209);

(statearr_31258_31286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31226 === (10))){
var inst_31180 = (state_31225[(11)]);
var inst_31178 = (state_31225[(12)]);
var inst_31185 = cljs.core._nth.call(null,inst_31178,inst_31180);
var state_31225__$1 = state_31225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31225__$1,(13),out,inst_31185);
} else {
if((state_val_31226 === (18))){
var inst_31191 = (state_31225[(7)]);
var inst_31200 = cljs.core.first.call(null,inst_31191);
var state_31225__$1 = state_31225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31225__$1,(20),out,inst_31200);
} else {
if((state_val_31226 === (8))){
var inst_31179 = (state_31225[(9)]);
var inst_31180 = (state_31225[(11)]);
var inst_31182 = (inst_31180 < inst_31179);
var inst_31183 = inst_31182;
var state_31225__$1 = state_31225;
if(cljs.core.truth_(inst_31183)){
var statearr_31259_31287 = state_31225__$1;
(statearr_31259_31287[(1)] = (10));

} else {
var statearr_31260_31288 = state_31225__$1;
(statearr_31260_31288[(1)] = (11));

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
});})(c__26077__auto__))
;
return ((function (switch__25897__auto__,c__26077__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25898__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25898__auto____0 = (function (){
var statearr_31261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31261[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25898__auto__);

(statearr_31261[(1)] = (1));

return statearr_31261;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25898__auto____1 = (function (state_31225){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_31225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e31262){if((e31262 instanceof Object)){
var ex__25901__auto__ = e31262;
var statearr_31263_31289 = state_31225;
(statearr_31263_31289[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31290 = state_31225;
state_31225 = G__31290;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25898__auto__ = function(state_31225){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25898__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25898__auto____1.call(this,state_31225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25898__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25898__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25898__auto__;
})()
;})(switch__25897__auto__,c__26077__auto__))
})();
var state__26079__auto__ = (function (){var statearr_31264 = f__26078__auto__.call(null);
(statearr_31264[(6)] = c__26077__auto__);

return statearr_31264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(c__26077__auto__))
);

return c__26077__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31292 = arguments.length;
switch (G__31292) {
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
var G__31295 = arguments.length;
switch (G__31295) {
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
var G__31298 = arguments.length;
switch (G__31298) {
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
var c__26077__auto___31345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26077__auto___31345,out){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (c__26077__auto___31345,out){
return (function (state_31322){
var state_val_31323 = (state_31322[(1)]);
if((state_val_31323 === (7))){
var inst_31317 = (state_31322[(2)]);
var state_31322__$1 = state_31322;
var statearr_31324_31346 = state_31322__$1;
(statearr_31324_31346[(2)] = inst_31317);

(statearr_31324_31346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (1))){
var inst_31299 = null;
var state_31322__$1 = (function (){var statearr_31325 = state_31322;
(statearr_31325[(7)] = inst_31299);

return statearr_31325;
})();
var statearr_31326_31347 = state_31322__$1;
(statearr_31326_31347[(2)] = null);

(statearr_31326_31347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (4))){
var inst_31302 = (state_31322[(8)]);
var inst_31302__$1 = (state_31322[(2)]);
var inst_31303 = (inst_31302__$1 == null);
var inst_31304 = cljs.core.not.call(null,inst_31303);
var state_31322__$1 = (function (){var statearr_31327 = state_31322;
(statearr_31327[(8)] = inst_31302__$1);

return statearr_31327;
})();
if(inst_31304){
var statearr_31328_31348 = state_31322__$1;
(statearr_31328_31348[(1)] = (5));

} else {
var statearr_31329_31349 = state_31322__$1;
(statearr_31329_31349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (6))){
var state_31322__$1 = state_31322;
var statearr_31330_31350 = state_31322__$1;
(statearr_31330_31350[(2)] = null);

(statearr_31330_31350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (3))){
var inst_31319 = (state_31322[(2)]);
var inst_31320 = cljs.core.async.close_BANG_.call(null,out);
var state_31322__$1 = (function (){var statearr_31331 = state_31322;
(statearr_31331[(9)] = inst_31319);

return statearr_31331;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31322__$1,inst_31320);
} else {
if((state_val_31323 === (2))){
var state_31322__$1 = state_31322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31322__$1,(4),ch);
} else {
if((state_val_31323 === (11))){
var inst_31302 = (state_31322[(8)]);
var inst_31311 = (state_31322[(2)]);
var inst_31299 = inst_31302;
var state_31322__$1 = (function (){var statearr_31332 = state_31322;
(statearr_31332[(7)] = inst_31299);

(statearr_31332[(10)] = inst_31311);

return statearr_31332;
})();
var statearr_31333_31351 = state_31322__$1;
(statearr_31333_31351[(2)] = null);

(statearr_31333_31351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (9))){
var inst_31302 = (state_31322[(8)]);
var state_31322__$1 = state_31322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31322__$1,(11),out,inst_31302);
} else {
if((state_val_31323 === (5))){
var inst_31302 = (state_31322[(8)]);
var inst_31299 = (state_31322[(7)]);
var inst_31306 = cljs.core._EQ_.call(null,inst_31302,inst_31299);
var state_31322__$1 = state_31322;
if(inst_31306){
var statearr_31335_31352 = state_31322__$1;
(statearr_31335_31352[(1)] = (8));

} else {
var statearr_31336_31353 = state_31322__$1;
(statearr_31336_31353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (10))){
var inst_31314 = (state_31322[(2)]);
var state_31322__$1 = state_31322;
var statearr_31337_31354 = state_31322__$1;
(statearr_31337_31354[(2)] = inst_31314);

(statearr_31337_31354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31323 === (8))){
var inst_31299 = (state_31322[(7)]);
var tmp31334 = inst_31299;
var inst_31299__$1 = tmp31334;
var state_31322__$1 = (function (){var statearr_31338 = state_31322;
(statearr_31338[(7)] = inst_31299__$1);

return statearr_31338;
})();
var statearr_31339_31355 = state_31322__$1;
(statearr_31339_31355[(2)] = null);

(statearr_31339_31355[(1)] = (2));


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
});})(c__26077__auto___31345,out))
;
return ((function (switch__25897__auto__,c__26077__auto___31345,out){
return (function() {
var cljs$core$async$state_machine__25898__auto__ = null;
var cljs$core$async$state_machine__25898__auto____0 = (function (){
var statearr_31340 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31340[(0)] = cljs$core$async$state_machine__25898__auto__);

(statearr_31340[(1)] = (1));

return statearr_31340;
});
var cljs$core$async$state_machine__25898__auto____1 = (function (state_31322){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_31322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e31341){if((e31341 instanceof Object)){
var ex__25901__auto__ = e31341;
var statearr_31342_31356 = state_31322;
(statearr_31342_31356[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31357 = state_31322;
state_31322 = G__31357;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs$core$async$state_machine__25898__auto__ = function(state_31322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25898__auto____1.call(this,state_31322);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25898__auto____0;
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25898__auto____1;
return cljs$core$async$state_machine__25898__auto__;
})()
;})(switch__25897__auto__,c__26077__auto___31345,out))
})();
var state__26079__auto__ = (function (){var statearr_31343 = f__26078__auto__.call(null);
(statearr_31343[(6)] = c__26077__auto___31345);

return statearr_31343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(c__26077__auto___31345,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31359 = arguments.length;
switch (G__31359) {
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
var c__26077__auto___31425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26077__auto___31425,out){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (c__26077__auto___31425,out){
return (function (state_31397){
var state_val_31398 = (state_31397[(1)]);
if((state_val_31398 === (7))){
var inst_31393 = (state_31397[(2)]);
var state_31397__$1 = state_31397;
var statearr_31399_31426 = state_31397__$1;
(statearr_31399_31426[(2)] = inst_31393);

(statearr_31399_31426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (1))){
var inst_31360 = (new Array(n));
var inst_31361 = inst_31360;
var inst_31362 = (0);
var state_31397__$1 = (function (){var statearr_31400 = state_31397;
(statearr_31400[(7)] = inst_31362);

(statearr_31400[(8)] = inst_31361);

return statearr_31400;
})();
var statearr_31401_31427 = state_31397__$1;
(statearr_31401_31427[(2)] = null);

(statearr_31401_31427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (4))){
var inst_31365 = (state_31397[(9)]);
var inst_31365__$1 = (state_31397[(2)]);
var inst_31366 = (inst_31365__$1 == null);
var inst_31367 = cljs.core.not.call(null,inst_31366);
var state_31397__$1 = (function (){var statearr_31402 = state_31397;
(statearr_31402[(9)] = inst_31365__$1);

return statearr_31402;
})();
if(inst_31367){
var statearr_31403_31428 = state_31397__$1;
(statearr_31403_31428[(1)] = (5));

} else {
var statearr_31404_31429 = state_31397__$1;
(statearr_31404_31429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (15))){
var inst_31387 = (state_31397[(2)]);
var state_31397__$1 = state_31397;
var statearr_31405_31430 = state_31397__$1;
(statearr_31405_31430[(2)] = inst_31387);

(statearr_31405_31430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (13))){
var state_31397__$1 = state_31397;
var statearr_31406_31431 = state_31397__$1;
(statearr_31406_31431[(2)] = null);

(statearr_31406_31431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (6))){
var inst_31362 = (state_31397[(7)]);
var inst_31383 = (inst_31362 > (0));
var state_31397__$1 = state_31397;
if(cljs.core.truth_(inst_31383)){
var statearr_31407_31432 = state_31397__$1;
(statearr_31407_31432[(1)] = (12));

} else {
var statearr_31408_31433 = state_31397__$1;
(statearr_31408_31433[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (3))){
var inst_31395 = (state_31397[(2)]);
var state_31397__$1 = state_31397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31397__$1,inst_31395);
} else {
if((state_val_31398 === (12))){
var inst_31361 = (state_31397[(8)]);
var inst_31385 = cljs.core.vec.call(null,inst_31361);
var state_31397__$1 = state_31397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31397__$1,(15),out,inst_31385);
} else {
if((state_val_31398 === (2))){
var state_31397__$1 = state_31397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31397__$1,(4),ch);
} else {
if((state_val_31398 === (11))){
var inst_31377 = (state_31397[(2)]);
var inst_31378 = (new Array(n));
var inst_31361 = inst_31378;
var inst_31362 = (0);
var state_31397__$1 = (function (){var statearr_31409 = state_31397;
(statearr_31409[(7)] = inst_31362);

(statearr_31409[(8)] = inst_31361);

(statearr_31409[(10)] = inst_31377);

return statearr_31409;
})();
var statearr_31410_31434 = state_31397__$1;
(statearr_31410_31434[(2)] = null);

(statearr_31410_31434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (9))){
var inst_31361 = (state_31397[(8)]);
var inst_31375 = cljs.core.vec.call(null,inst_31361);
var state_31397__$1 = state_31397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31397__$1,(11),out,inst_31375);
} else {
if((state_val_31398 === (5))){
var inst_31370 = (state_31397[(11)]);
var inst_31365 = (state_31397[(9)]);
var inst_31362 = (state_31397[(7)]);
var inst_31361 = (state_31397[(8)]);
var inst_31369 = (inst_31361[inst_31362] = inst_31365);
var inst_31370__$1 = (inst_31362 + (1));
var inst_31371 = (inst_31370__$1 < n);
var state_31397__$1 = (function (){var statearr_31411 = state_31397;
(statearr_31411[(11)] = inst_31370__$1);

(statearr_31411[(12)] = inst_31369);

return statearr_31411;
})();
if(cljs.core.truth_(inst_31371)){
var statearr_31412_31435 = state_31397__$1;
(statearr_31412_31435[(1)] = (8));

} else {
var statearr_31413_31436 = state_31397__$1;
(statearr_31413_31436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (14))){
var inst_31390 = (state_31397[(2)]);
var inst_31391 = cljs.core.async.close_BANG_.call(null,out);
var state_31397__$1 = (function (){var statearr_31415 = state_31397;
(statearr_31415[(13)] = inst_31390);

return statearr_31415;
})();
var statearr_31416_31437 = state_31397__$1;
(statearr_31416_31437[(2)] = inst_31391);

(statearr_31416_31437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (10))){
var inst_31381 = (state_31397[(2)]);
var state_31397__$1 = state_31397;
var statearr_31417_31438 = state_31397__$1;
(statearr_31417_31438[(2)] = inst_31381);

(statearr_31417_31438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31398 === (8))){
var inst_31370 = (state_31397[(11)]);
var inst_31361 = (state_31397[(8)]);
var tmp31414 = inst_31361;
var inst_31361__$1 = tmp31414;
var inst_31362 = inst_31370;
var state_31397__$1 = (function (){var statearr_31418 = state_31397;
(statearr_31418[(7)] = inst_31362);

(statearr_31418[(8)] = inst_31361__$1);

return statearr_31418;
})();
var statearr_31419_31439 = state_31397__$1;
(statearr_31419_31439[(2)] = null);

(statearr_31419_31439[(1)] = (2));


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
});})(c__26077__auto___31425,out))
;
return ((function (switch__25897__auto__,c__26077__auto___31425,out){
return (function() {
var cljs$core$async$state_machine__25898__auto__ = null;
var cljs$core$async$state_machine__25898__auto____0 = (function (){
var statearr_31420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31420[(0)] = cljs$core$async$state_machine__25898__auto__);

(statearr_31420[(1)] = (1));

return statearr_31420;
});
var cljs$core$async$state_machine__25898__auto____1 = (function (state_31397){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_31397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e31421){if((e31421 instanceof Object)){
var ex__25901__auto__ = e31421;
var statearr_31422_31440 = state_31397;
(statearr_31422_31440[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31441 = state_31397;
state_31397 = G__31441;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs$core$async$state_machine__25898__auto__ = function(state_31397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25898__auto____1.call(this,state_31397);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25898__auto____0;
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25898__auto____1;
return cljs$core$async$state_machine__25898__auto__;
})()
;})(switch__25897__auto__,c__26077__auto___31425,out))
})();
var state__26079__auto__ = (function (){var statearr_31423 = f__26078__auto__.call(null);
(statearr_31423[(6)] = c__26077__auto___31425);

return statearr_31423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(c__26077__auto___31425,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31443 = arguments.length;
switch (G__31443) {
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
var c__26077__auto___31513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26077__auto___31513,out){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (c__26077__auto___31513,out){
return (function (state_31485){
var state_val_31486 = (state_31485[(1)]);
if((state_val_31486 === (7))){
var inst_31481 = (state_31485[(2)]);
var state_31485__$1 = state_31485;
var statearr_31487_31514 = state_31485__$1;
(statearr_31487_31514[(2)] = inst_31481);

(statearr_31487_31514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (1))){
var inst_31444 = [];
var inst_31445 = inst_31444;
var inst_31446 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31485__$1 = (function (){var statearr_31488 = state_31485;
(statearr_31488[(7)] = inst_31446);

(statearr_31488[(8)] = inst_31445);

return statearr_31488;
})();
var statearr_31489_31515 = state_31485__$1;
(statearr_31489_31515[(2)] = null);

(statearr_31489_31515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (4))){
var inst_31449 = (state_31485[(9)]);
var inst_31449__$1 = (state_31485[(2)]);
var inst_31450 = (inst_31449__$1 == null);
var inst_31451 = cljs.core.not.call(null,inst_31450);
var state_31485__$1 = (function (){var statearr_31490 = state_31485;
(statearr_31490[(9)] = inst_31449__$1);

return statearr_31490;
})();
if(inst_31451){
var statearr_31491_31516 = state_31485__$1;
(statearr_31491_31516[(1)] = (5));

} else {
var statearr_31492_31517 = state_31485__$1;
(statearr_31492_31517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (15))){
var inst_31475 = (state_31485[(2)]);
var state_31485__$1 = state_31485;
var statearr_31493_31518 = state_31485__$1;
(statearr_31493_31518[(2)] = inst_31475);

(statearr_31493_31518[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (13))){
var state_31485__$1 = state_31485;
var statearr_31494_31519 = state_31485__$1;
(statearr_31494_31519[(2)] = null);

(statearr_31494_31519[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (6))){
var inst_31445 = (state_31485[(8)]);
var inst_31470 = inst_31445.length;
var inst_31471 = (inst_31470 > (0));
var state_31485__$1 = state_31485;
if(cljs.core.truth_(inst_31471)){
var statearr_31495_31520 = state_31485__$1;
(statearr_31495_31520[(1)] = (12));

} else {
var statearr_31496_31521 = state_31485__$1;
(statearr_31496_31521[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (3))){
var inst_31483 = (state_31485[(2)]);
var state_31485__$1 = state_31485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31485__$1,inst_31483);
} else {
if((state_val_31486 === (12))){
var inst_31445 = (state_31485[(8)]);
var inst_31473 = cljs.core.vec.call(null,inst_31445);
var state_31485__$1 = state_31485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31485__$1,(15),out,inst_31473);
} else {
if((state_val_31486 === (2))){
var state_31485__$1 = state_31485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31485__$1,(4),ch);
} else {
if((state_val_31486 === (11))){
var inst_31453 = (state_31485[(10)]);
var inst_31449 = (state_31485[(9)]);
var inst_31463 = (state_31485[(2)]);
var inst_31464 = [];
var inst_31465 = inst_31464.push(inst_31449);
var inst_31445 = inst_31464;
var inst_31446 = inst_31453;
var state_31485__$1 = (function (){var statearr_31497 = state_31485;
(statearr_31497[(7)] = inst_31446);

(statearr_31497[(8)] = inst_31445);

(statearr_31497[(11)] = inst_31463);

(statearr_31497[(12)] = inst_31465);

return statearr_31497;
})();
var statearr_31498_31522 = state_31485__$1;
(statearr_31498_31522[(2)] = null);

(statearr_31498_31522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (9))){
var inst_31445 = (state_31485[(8)]);
var inst_31461 = cljs.core.vec.call(null,inst_31445);
var state_31485__$1 = state_31485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31485__$1,(11),out,inst_31461);
} else {
if((state_val_31486 === (5))){
var inst_31453 = (state_31485[(10)]);
var inst_31446 = (state_31485[(7)]);
var inst_31449 = (state_31485[(9)]);
var inst_31453__$1 = f.call(null,inst_31449);
var inst_31454 = cljs.core._EQ_.call(null,inst_31453__$1,inst_31446);
var inst_31455 = cljs.core.keyword_identical_QMARK_.call(null,inst_31446,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31456 = (inst_31454) || (inst_31455);
var state_31485__$1 = (function (){var statearr_31499 = state_31485;
(statearr_31499[(10)] = inst_31453__$1);

return statearr_31499;
})();
if(cljs.core.truth_(inst_31456)){
var statearr_31500_31523 = state_31485__$1;
(statearr_31500_31523[(1)] = (8));

} else {
var statearr_31501_31524 = state_31485__$1;
(statearr_31501_31524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (14))){
var inst_31478 = (state_31485[(2)]);
var inst_31479 = cljs.core.async.close_BANG_.call(null,out);
var state_31485__$1 = (function (){var statearr_31503 = state_31485;
(statearr_31503[(13)] = inst_31478);

return statearr_31503;
})();
var statearr_31504_31525 = state_31485__$1;
(statearr_31504_31525[(2)] = inst_31479);

(statearr_31504_31525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (10))){
var inst_31468 = (state_31485[(2)]);
var state_31485__$1 = state_31485;
var statearr_31505_31526 = state_31485__$1;
(statearr_31505_31526[(2)] = inst_31468);

(statearr_31505_31526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31486 === (8))){
var inst_31453 = (state_31485[(10)]);
var inst_31445 = (state_31485[(8)]);
var inst_31449 = (state_31485[(9)]);
var inst_31458 = inst_31445.push(inst_31449);
var tmp31502 = inst_31445;
var inst_31445__$1 = tmp31502;
var inst_31446 = inst_31453;
var state_31485__$1 = (function (){var statearr_31506 = state_31485;
(statearr_31506[(14)] = inst_31458);

(statearr_31506[(7)] = inst_31446);

(statearr_31506[(8)] = inst_31445__$1);

return statearr_31506;
})();
var statearr_31507_31527 = state_31485__$1;
(statearr_31507_31527[(2)] = null);

(statearr_31507_31527[(1)] = (2));


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
});})(c__26077__auto___31513,out))
;
return ((function (switch__25897__auto__,c__26077__auto___31513,out){
return (function() {
var cljs$core$async$state_machine__25898__auto__ = null;
var cljs$core$async$state_machine__25898__auto____0 = (function (){
var statearr_31508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31508[(0)] = cljs$core$async$state_machine__25898__auto__);

(statearr_31508[(1)] = (1));

return statearr_31508;
});
var cljs$core$async$state_machine__25898__auto____1 = (function (state_31485){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_31485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e31509){if((e31509 instanceof Object)){
var ex__25901__auto__ = e31509;
var statearr_31510_31528 = state_31485;
(statearr_31510_31528[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31529 = state_31485;
state_31485 = G__31529;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs$core$async$state_machine__25898__auto__ = function(state_31485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25898__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25898__auto____1.call(this,state_31485);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25898__auto____0;
cljs$core$async$state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25898__auto____1;
return cljs$core$async$state_machine__25898__auto__;
})()
;})(switch__25897__auto__,c__26077__auto___31513,out))
})();
var state__26079__auto__ = (function (){var statearr_31511 = f__26078__auto__.call(null);
(statearr_31511[(6)] = c__26077__auto___31513);

return statearr_31511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(c__26077__auto___31513,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
