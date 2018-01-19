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
var G__47543 = arguments.length;
switch (G__47543) {
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
if(typeof cljs.core.async.t_cljs$core$async47545 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47545 = (function (f,blockable,meta47546){
this.f = f;
this.blockable = blockable;
this.meta47546 = meta47546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47547,meta47546__$1){
var self__ = this;
var _47547__$1 = this;
return (new cljs.core.async.t_cljs$core$async47545(self__.f,self__.blockable,meta47546__$1));
});

cljs.core.async.t_cljs$core$async47545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47547){
var self__ = this;
var _47547__$1 = this;
return self__.meta47546;
});

cljs.core.async.t_cljs$core$async47545.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47545.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47545.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async47545.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async47545.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47546","meta47546",1987862613,null)], null);
});

cljs.core.async.t_cljs$core$async47545.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47545";

cljs.core.async.t_cljs$core$async47545.cljs$lang$ctorPrWriter = (function (this__21873__auto__,writer__21874__auto__,opt__21875__auto__){
return cljs.core._write.call(null,writer__21874__auto__,"cljs.core.async/t_cljs$core$async47545");
});

cljs.core.async.__GT_t_cljs$core$async47545 = (function cljs$core$async$__GT_t_cljs$core$async47545(f__$1,blockable__$1,meta47546){
return (new cljs.core.async.t_cljs$core$async47545(f__$1,blockable__$1,meta47546));
});

}

return (new cljs.core.async.t_cljs$core$async47545(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47556 = arguments.length;
switch (G__47556) {
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
var G__47575 = arguments.length;
switch (G__47575) {
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
var G__47578 = arguments.length;
switch (G__47578) {
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
var val_47584 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_47584);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_47584,ret){
return (function (){
return fn1.call(null,val_47584);
});})(val_47584,ret))
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
var G__47588 = arguments.length;
switch (G__47588) {
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
var n__22247__auto___47600 = n;
var x_47602 = (0);
while(true){
if((x_47602 < n__22247__auto___47600)){
(a[x_47602] = (0));

var G__47603 = (x_47602 + (1));
x_47602 = G__47603;
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

var G__47604 = (i + (1));
i = G__47604;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async47605 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47605 = (function (flag,meta47606){
this.flag = flag;
this.meta47606 = meta47606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_47607,meta47606__$1){
var self__ = this;
var _47607__$1 = this;
return (new cljs.core.async.t_cljs$core$async47605(self__.flag,meta47606__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async47605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_47607){
var self__ = this;
var _47607__$1 = this;
return self__.meta47606;
});})(flag))
;

cljs.core.async.t_cljs$core$async47605.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async47605.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47605.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47606","meta47606",-1211967005,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async47605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47605";

cljs.core.async.t_cljs$core$async47605.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__21873__auto__,writer__21874__auto__,opt__21875__auto__){
return cljs.core._write.call(null,writer__21874__auto__,"cljs.core.async/t_cljs$core$async47605");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async47605 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47605(flag__$1,meta47606){
return (new cljs.core.async.t_cljs$core$async47605(flag__$1,meta47606));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async47605(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async47614 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47614 = (function (flag,cb,meta47615){
this.flag = flag;
this.cb = cb;
this.meta47615 = meta47615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47616,meta47615__$1){
var self__ = this;
var _47616__$1 = this;
return (new cljs.core.async.t_cljs$core$async47614(self__.flag,self__.cb,meta47615__$1));
});

cljs.core.async.t_cljs$core$async47614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47616){
var self__ = this;
var _47616__$1 = this;
return self__.meta47615;
});

cljs.core.async.t_cljs$core$async47614.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47614.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async47614.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47614.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async47614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47615","meta47615",1108054388,null)], null);
});

cljs.core.async.t_cljs$core$async47614.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47614";

cljs.core.async.t_cljs$core$async47614.cljs$lang$ctorPrWriter = (function (this__21873__auto__,writer__21874__auto__,opt__21875__auto__){
return cljs.core._write.call(null,writer__21874__auto__,"cljs.core.async/t_cljs$core$async47614");
});

cljs.core.async.__GT_t_cljs$core$async47614 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47614(flag__$1,cb__$1,meta47615){
return (new cljs.core.async.t_cljs$core$async47614(flag__$1,cb__$1,meta47615));
});

}

return (new cljs.core.async.t_cljs$core$async47614(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__47624_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47624_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47625_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47625_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21202__auto__ = wport;
if(cljs.core.truth_(or__21202__auto__)){
return or__21202__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47633 = (i + (1));
i = G__47633;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21202__auto__ = ret;
if(cljs.core.truth_(or__21202__auto__)){
return or__21202__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__21190__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21190__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21190__auto__;
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
var args__22488__auto__ = [];
var len__22481__auto___47639 = arguments.length;
var i__22482__auto___47640 = (0);
while(true){
if((i__22482__auto___47640 < len__22481__auto___47639)){
args__22488__auto__.push((arguments[i__22482__auto___47640]));

var G__47641 = (i__22482__auto___47640 + (1));
i__22482__auto___47640 = G__47641;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((1) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22489__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47636){
var map__47637 = p__47636;
var map__47637__$1 = ((((!((map__47637 == null)))?((((map__47637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47637):map__47637);
var opts = map__47637__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47634){
var G__47635 = cljs.core.first.call(null,seq47634);
var seq47634__$1 = cljs.core.next.call(null,seq47634);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__47635,seq47634__$1);
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
var G__47646 = arguments.length;
switch (G__47646) {
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
var c__38078__auto___47739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto___47739){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto___47739){
return (function (state_47710){
var state_val_47711 = (state_47710[(1)]);
if((state_val_47711 === (7))){
var inst_47704 = (state_47710[(2)]);
var state_47710__$1 = state_47710;
var statearr_47716_47740 = state_47710__$1;
(statearr_47716_47740[(2)] = inst_47704);

(statearr_47716_47740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (1))){
var state_47710__$1 = state_47710;
var statearr_47717_47741 = state_47710__$1;
(statearr_47717_47741[(2)] = null);

(statearr_47717_47741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (4))){
var inst_47672 = (state_47710[(7)]);
var inst_47672__$1 = (state_47710[(2)]);
var inst_47676 = (inst_47672__$1 == null);
var state_47710__$1 = (function (){var statearr_47719 = state_47710;
(statearr_47719[(7)] = inst_47672__$1);

return statearr_47719;
})();
if(cljs.core.truth_(inst_47676)){
var statearr_47720_47743 = state_47710__$1;
(statearr_47720_47743[(1)] = (5));

} else {
var statearr_47721_47744 = state_47710__$1;
(statearr_47721_47744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (13))){
var state_47710__$1 = state_47710;
var statearr_47722_47745 = state_47710__$1;
(statearr_47722_47745[(2)] = null);

(statearr_47722_47745[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (6))){
var inst_47672 = (state_47710[(7)]);
var state_47710__$1 = state_47710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47710__$1,(11),to,inst_47672);
} else {
if((state_val_47711 === (3))){
var inst_47706 = (state_47710[(2)]);
var state_47710__$1 = state_47710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47710__$1,inst_47706);
} else {
if((state_val_47711 === (12))){
var state_47710__$1 = state_47710;
var statearr_47724_47746 = state_47710__$1;
(statearr_47724_47746[(2)] = null);

(statearr_47724_47746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (2))){
var state_47710__$1 = state_47710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47710__$1,(4),from);
} else {
if((state_val_47711 === (11))){
var inst_47693 = (state_47710[(2)]);
var state_47710__$1 = state_47710;
if(cljs.core.truth_(inst_47693)){
var statearr_47726_47750 = state_47710__$1;
(statearr_47726_47750[(1)] = (12));

} else {
var statearr_47727_47751 = state_47710__$1;
(statearr_47727_47751[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (9))){
var state_47710__$1 = state_47710;
var statearr_47728_47752 = state_47710__$1;
(statearr_47728_47752[(2)] = null);

(statearr_47728_47752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (5))){
var state_47710__$1 = state_47710;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47729_47753 = state_47710__$1;
(statearr_47729_47753[(1)] = (8));

} else {
var statearr_47730_47754 = state_47710__$1;
(statearr_47730_47754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (14))){
var inst_47702 = (state_47710[(2)]);
var state_47710__$1 = state_47710;
var statearr_47731_47759 = state_47710__$1;
(statearr_47731_47759[(2)] = inst_47702);

(statearr_47731_47759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (10))){
var inst_47690 = (state_47710[(2)]);
var state_47710__$1 = state_47710;
var statearr_47732_47760 = state_47710__$1;
(statearr_47732_47760[(2)] = inst_47690);

(statearr_47732_47760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47711 === (8))){
var inst_47683 = cljs.core.async.close_BANG_.call(null,to);
var state_47710__$1 = state_47710;
var statearr_47733_47761 = state_47710__$1;
(statearr_47733_47761[(2)] = inst_47683);

(statearr_47733_47761[(1)] = (10));


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
});})(c__38078__auto___47739))
;
return ((function (switch__37921__auto__,c__38078__auto___47739){
return (function() {
var cljs$core$async$state_machine__37922__auto__ = null;
var cljs$core$async$state_machine__37922__auto____0 = (function (){
var statearr_47734 = [null,null,null,null,null,null,null,null];
(statearr_47734[(0)] = cljs$core$async$state_machine__37922__auto__);

(statearr_47734[(1)] = (1));

return statearr_47734;
});
var cljs$core$async$state_machine__37922__auto____1 = (function (state_47710){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_47710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e47735){if((e47735 instanceof Object)){
var ex__37925__auto__ = e47735;
var statearr_47736_47774 = state_47710;
(statearr_47736_47774[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47775 = state_47710;
state_47710 = G__47775;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs$core$async$state_machine__37922__auto__ = function(state_47710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37922__auto____1.call(this,state_47710);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37922__auto____0;
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37922__auto____1;
return cljs$core$async$state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto___47739))
})();
var state__38080__auto__ = (function (){var statearr_47737 = f__38079__auto__.call(null);
(statearr_47737[(6)] = c__38078__auto___47739);

return statearr_47737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto___47739))
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
return (function (p__47776){
var vec__47777 = p__47776;
var v = cljs.core.nth.call(null,vec__47777,(0),null);
var p = cljs.core.nth.call(null,vec__47777,(1),null);
var job = vec__47777;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38078__auto___48018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto___48018,res,vec__47777,v,p,job,jobs,results){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto___48018,res,vec__47777,v,p,job,jobs,results){
return (function (state_47786){
var state_val_47787 = (state_47786[(1)]);
if((state_val_47787 === (1))){
var state_47786__$1 = state_47786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47786__$1,(2),res,v);
} else {
if((state_val_47787 === (2))){
var inst_47783 = (state_47786[(2)]);
var inst_47784 = cljs.core.async.close_BANG_.call(null,res);
var state_47786__$1 = (function (){var statearr_47788 = state_47786;
(statearr_47788[(7)] = inst_47783);

return statearr_47788;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47786__$1,inst_47784);
} else {
return null;
}
}
});})(c__38078__auto___48018,res,vec__47777,v,p,job,jobs,results))
;
return ((function (switch__37921__auto__,c__38078__auto___48018,res,vec__47777,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____0 = (function (){
var statearr_47789 = [null,null,null,null,null,null,null,null];
(statearr_47789[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__);

(statearr_47789[(1)] = (1));

return statearr_47789;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____1 = (function (state_47786){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_47786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e47791){if((e47791 instanceof Object)){
var ex__37925__auto__ = e47791;
var statearr_47792_48019 = state_47786;
(statearr_47792_48019[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48020 = state_47786;
state_47786 = G__48020;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__ = function(state_47786){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____1.call(this,state_47786);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto___48018,res,vec__47777,v,p,job,jobs,results))
})();
var state__38080__auto__ = (function (){var statearr_47794 = f__38079__auto__.call(null);
(statearr_47794[(6)] = c__38078__auto___48018);

return statearr_47794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto___48018,res,vec__47777,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__47795){
var vec__47796 = p__47795;
var v = cljs.core.nth.call(null,vec__47796,(0),null);
var p = cljs.core.nth.call(null,vec__47796,(1),null);
var job = vec__47796;
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
var n__22247__auto___48021 = n;
var __48022 = (0);
while(true){
if((__48022 < n__22247__auto___48021)){
var G__47799_48023 = type;
var G__47799_48024__$1 = (((G__47799_48023 instanceof cljs.core.Keyword))?G__47799_48023.fqn:null);
switch (G__47799_48024__$1) {
case "compute":
var c__38078__auto___48026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48022,c__38078__auto___48026,G__47799_48023,G__47799_48024__$1,n__22247__auto___48021,jobs,results,process,async){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (__48022,c__38078__auto___48026,G__47799_48023,G__47799_48024__$1,n__22247__auto___48021,jobs,results,process,async){
return (function (state_47815){
var state_val_47816 = (state_47815[(1)]);
if((state_val_47816 === (1))){
var state_47815__$1 = state_47815;
var statearr_47818_48027 = state_47815__$1;
(statearr_47818_48027[(2)] = null);

(statearr_47818_48027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47816 === (2))){
var state_47815__$1 = state_47815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47815__$1,(4),jobs);
} else {
if((state_val_47816 === (3))){
var inst_47813 = (state_47815[(2)]);
var state_47815__$1 = state_47815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47815__$1,inst_47813);
} else {
if((state_val_47816 === (4))){
var inst_47805 = (state_47815[(2)]);
var inst_47806 = process.call(null,inst_47805);
var state_47815__$1 = state_47815;
if(cljs.core.truth_(inst_47806)){
var statearr_47819_48028 = state_47815__$1;
(statearr_47819_48028[(1)] = (5));

} else {
var statearr_47820_48029 = state_47815__$1;
(statearr_47820_48029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47816 === (5))){
var state_47815__$1 = state_47815;
var statearr_47821_48030 = state_47815__$1;
(statearr_47821_48030[(2)] = null);

(statearr_47821_48030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47816 === (6))){
var state_47815__$1 = state_47815;
var statearr_47824_48031 = state_47815__$1;
(statearr_47824_48031[(2)] = null);

(statearr_47824_48031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47816 === (7))){
var inst_47811 = (state_47815[(2)]);
var state_47815__$1 = state_47815;
var statearr_47826_48032 = state_47815__$1;
(statearr_47826_48032[(2)] = inst_47811);

(statearr_47826_48032[(1)] = (3));


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
});})(__48022,c__38078__auto___48026,G__47799_48023,G__47799_48024__$1,n__22247__auto___48021,jobs,results,process,async))
;
return ((function (__48022,switch__37921__auto__,c__38078__auto___48026,G__47799_48023,G__47799_48024__$1,n__22247__auto___48021,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____0 = (function (){
var statearr_47827 = [null,null,null,null,null,null,null];
(statearr_47827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__);

(statearr_47827[(1)] = (1));

return statearr_47827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____1 = (function (state_47815){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_47815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e47829){if((e47829 instanceof Object)){
var ex__37925__auto__ = e47829;
var statearr_47830_48033 = state_47815;
(statearr_47830_48033[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48034 = state_47815;
state_47815 = G__48034;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__ = function(state_47815){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____1.call(this,state_47815);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__;
})()
;})(__48022,switch__37921__auto__,c__38078__auto___48026,G__47799_48023,G__47799_48024__$1,n__22247__auto___48021,jobs,results,process,async))
})();
var state__38080__auto__ = (function (){var statearr_47831 = f__38079__auto__.call(null);
(statearr_47831[(6)] = c__38078__auto___48026);

return statearr_47831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(__48022,c__38078__auto___48026,G__47799_48023,G__47799_48024__$1,n__22247__auto___48021,jobs,results,process,async))
);


break;
case "async":
var c__38078__auto___48035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48022,c__38078__auto___48035,G__47799_48023,G__47799_48024__$1,n__22247__auto___48021,jobs,results,process,async){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (__48022,c__38078__auto___48035,G__47799_48023,G__47799_48024__$1,n__22247__auto___48021,jobs,results,process,async){
return (function (state_47846){
var state_val_47847 = (state_47846[(1)]);
if((state_val_47847 === (1))){
var state_47846__$1 = state_47846;
var statearr_47849_48036 = state_47846__$1;
(statearr_47849_48036[(2)] = null);

(statearr_47849_48036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (2))){
var state_47846__$1 = state_47846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47846__$1,(4),jobs);
} else {
if((state_val_47847 === (3))){
var inst_47842 = (state_47846[(2)]);
var state_47846__$1 = state_47846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47846__$1,inst_47842);
} else {
if((state_val_47847 === (4))){
var inst_47834 = (state_47846[(2)]);
var inst_47835 = async.call(null,inst_47834);
var state_47846__$1 = state_47846;
if(cljs.core.truth_(inst_47835)){
var statearr_47850_48037 = state_47846__$1;
(statearr_47850_48037[(1)] = (5));

} else {
var statearr_47852_48038 = state_47846__$1;
(statearr_47852_48038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (5))){
var state_47846__$1 = state_47846;
var statearr_47855_48039 = state_47846__$1;
(statearr_47855_48039[(2)] = null);

(statearr_47855_48039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (6))){
var state_47846__$1 = state_47846;
var statearr_47856_48040 = state_47846__$1;
(statearr_47856_48040[(2)] = null);

(statearr_47856_48040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47847 === (7))){
var inst_47840 = (state_47846[(2)]);
var state_47846__$1 = state_47846;
var statearr_47857_48041 = state_47846__$1;
(statearr_47857_48041[(2)] = inst_47840);

(statearr_47857_48041[(1)] = (3));


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
});})(__48022,c__38078__auto___48035,G__47799_48023,G__47799_48024__$1,n__22247__auto___48021,jobs,results,process,async))
;
return ((function (__48022,switch__37921__auto__,c__38078__auto___48035,G__47799_48023,G__47799_48024__$1,n__22247__auto___48021,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____0 = (function (){
var statearr_47858 = [null,null,null,null,null,null,null];
(statearr_47858[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__);

(statearr_47858[(1)] = (1));

return statearr_47858;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____1 = (function (state_47846){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_47846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e47859){if((e47859 instanceof Object)){
var ex__37925__auto__ = e47859;
var statearr_47860_48042 = state_47846;
(statearr_47860_48042[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48043 = state_47846;
state_47846 = G__48043;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__ = function(state_47846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____1.call(this,state_47846);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__;
})()
;})(__48022,switch__37921__auto__,c__38078__auto___48035,G__47799_48023,G__47799_48024__$1,n__22247__auto___48021,jobs,results,process,async))
})();
var state__38080__auto__ = (function (){var statearr_47864 = f__38079__auto__.call(null);
(statearr_47864[(6)] = c__38078__auto___48035);

return statearr_47864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(__48022,c__38078__auto___48035,G__47799_48023,G__47799_48024__$1,n__22247__auto___48021,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47799_48024__$1)].join('')));

}

var G__48044 = (__48022 + (1));
__48022 = G__48044;
continue;
} else {
}
break;
}

var c__38078__auto___48045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto___48045,jobs,results,process,async){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto___48045,jobs,results,process,async){
return (function (state_47890){
var state_val_47891 = (state_47890[(1)]);
if((state_val_47891 === (1))){
var state_47890__$1 = state_47890;
var statearr_47892_48046 = state_47890__$1;
(statearr_47892_48046[(2)] = null);

(statearr_47892_48046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47891 === (2))){
var state_47890__$1 = state_47890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47890__$1,(4),from);
} else {
if((state_val_47891 === (3))){
var inst_47885 = (state_47890[(2)]);
var state_47890__$1 = state_47890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47890__$1,inst_47885);
} else {
if((state_val_47891 === (4))){
var inst_47867 = (state_47890[(7)]);
var inst_47867__$1 = (state_47890[(2)]);
var inst_47869 = (inst_47867__$1 == null);
var state_47890__$1 = (function (){var statearr_47896 = state_47890;
(statearr_47896[(7)] = inst_47867__$1);

return statearr_47896;
})();
if(cljs.core.truth_(inst_47869)){
var statearr_47898_48047 = state_47890__$1;
(statearr_47898_48047[(1)] = (5));

} else {
var statearr_47899_48048 = state_47890__$1;
(statearr_47899_48048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47891 === (5))){
var inst_47871 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47890__$1 = state_47890;
var statearr_47900_48049 = state_47890__$1;
(statearr_47900_48049[(2)] = inst_47871);

(statearr_47900_48049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47891 === (6))){
var inst_47873 = (state_47890[(8)]);
var inst_47867 = (state_47890[(7)]);
var inst_47873__$1 = cljs.core.async.chan.call(null,(1));
var inst_47874 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47875 = [inst_47867,inst_47873__$1];
var inst_47876 = (new cljs.core.PersistentVector(null,2,(5),inst_47874,inst_47875,null));
var state_47890__$1 = (function (){var statearr_47902 = state_47890;
(statearr_47902[(8)] = inst_47873__$1);

return statearr_47902;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47890__$1,(8),jobs,inst_47876);
} else {
if((state_val_47891 === (7))){
var inst_47883 = (state_47890[(2)]);
var state_47890__$1 = state_47890;
var statearr_47903_48053 = state_47890__$1;
(statearr_47903_48053[(2)] = inst_47883);

(statearr_47903_48053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47891 === (8))){
var inst_47873 = (state_47890[(8)]);
var inst_47878 = (state_47890[(2)]);
var state_47890__$1 = (function (){var statearr_47904 = state_47890;
(statearr_47904[(9)] = inst_47878);

return statearr_47904;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47890__$1,(9),results,inst_47873);
} else {
if((state_val_47891 === (9))){
var inst_47880 = (state_47890[(2)]);
var state_47890__$1 = (function (){var statearr_47905 = state_47890;
(statearr_47905[(10)] = inst_47880);

return statearr_47905;
})();
var statearr_47908_48057 = state_47890__$1;
(statearr_47908_48057[(2)] = null);

(statearr_47908_48057[(1)] = (2));


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
});})(c__38078__auto___48045,jobs,results,process,async))
;
return ((function (switch__37921__auto__,c__38078__auto___48045,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____0 = (function (){
var statearr_47910 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47910[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__);

(statearr_47910[(1)] = (1));

return statearr_47910;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____1 = (function (state_47890){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_47890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e47911){if((e47911 instanceof Object)){
var ex__37925__auto__ = e47911;
var statearr_47912_48058 = state_47890;
(statearr_47912_48058[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48059 = state_47890;
state_47890 = G__48059;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__ = function(state_47890){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____1.call(this,state_47890);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto___48045,jobs,results,process,async))
})();
var state__38080__auto__ = (function (){var statearr_47913 = f__38079__auto__.call(null);
(statearr_47913[(6)] = c__38078__auto___48045);

return statearr_47913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto___48045,jobs,results,process,async))
);


var c__38078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto__,jobs,results,process,async){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto__,jobs,results,process,async){
return (function (state_47970){
var state_val_47971 = (state_47970[(1)]);
if((state_val_47971 === (7))){
var inst_47966 = (state_47970[(2)]);
var state_47970__$1 = state_47970;
var statearr_47975_48062 = state_47970__$1;
(statearr_47975_48062[(2)] = inst_47966);

(statearr_47975_48062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (20))){
var state_47970__$1 = state_47970;
var statearr_47979_48064 = state_47970__$1;
(statearr_47979_48064[(2)] = null);

(statearr_47979_48064[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (1))){
var state_47970__$1 = state_47970;
var statearr_47980_48065 = state_47970__$1;
(statearr_47980_48065[(2)] = null);

(statearr_47980_48065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (4))){
var inst_47929 = (state_47970[(7)]);
var inst_47929__$1 = (state_47970[(2)]);
var inst_47930 = (inst_47929__$1 == null);
var state_47970__$1 = (function (){var statearr_47987 = state_47970;
(statearr_47987[(7)] = inst_47929__$1);

return statearr_47987;
})();
if(cljs.core.truth_(inst_47930)){
var statearr_47988_48066 = state_47970__$1;
(statearr_47988_48066[(1)] = (5));

} else {
var statearr_47989_48067 = state_47970__$1;
(statearr_47989_48067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (15))){
var inst_47948 = (state_47970[(8)]);
var state_47970__$1 = state_47970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47970__$1,(18),to,inst_47948);
} else {
if((state_val_47971 === (21))){
var inst_47961 = (state_47970[(2)]);
var state_47970__$1 = state_47970;
var statearr_47993_48068 = state_47970__$1;
(statearr_47993_48068[(2)] = inst_47961);

(statearr_47993_48068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (13))){
var inst_47963 = (state_47970[(2)]);
var state_47970__$1 = (function (){var statearr_47994 = state_47970;
(statearr_47994[(9)] = inst_47963);

return statearr_47994;
})();
var statearr_47995_48069 = state_47970__$1;
(statearr_47995_48069[(2)] = null);

(statearr_47995_48069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (6))){
var inst_47929 = (state_47970[(7)]);
var state_47970__$1 = state_47970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47970__$1,(11),inst_47929);
} else {
if((state_val_47971 === (17))){
var inst_47956 = (state_47970[(2)]);
var state_47970__$1 = state_47970;
if(cljs.core.truth_(inst_47956)){
var statearr_47999_48070 = state_47970__$1;
(statearr_47999_48070[(1)] = (19));

} else {
var statearr_48000_48071 = state_47970__$1;
(statearr_48000_48071[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (3))){
var inst_47968 = (state_47970[(2)]);
var state_47970__$1 = state_47970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47970__$1,inst_47968);
} else {
if((state_val_47971 === (12))){
var inst_47945 = (state_47970[(10)]);
var state_47970__$1 = state_47970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47970__$1,(14),inst_47945);
} else {
if((state_val_47971 === (2))){
var state_47970__$1 = state_47970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47970__$1,(4),results);
} else {
if((state_val_47971 === (19))){
var state_47970__$1 = state_47970;
var statearr_48001_48072 = state_47970__$1;
(statearr_48001_48072[(2)] = null);

(statearr_48001_48072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (11))){
var inst_47945 = (state_47970[(2)]);
var state_47970__$1 = (function (){var statearr_48002 = state_47970;
(statearr_48002[(10)] = inst_47945);

return statearr_48002;
})();
var statearr_48003_48075 = state_47970__$1;
(statearr_48003_48075[(2)] = null);

(statearr_48003_48075[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (9))){
var state_47970__$1 = state_47970;
var statearr_48004_48076 = state_47970__$1;
(statearr_48004_48076[(2)] = null);

(statearr_48004_48076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (5))){
var state_47970__$1 = state_47970;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48005_48077 = state_47970__$1;
(statearr_48005_48077[(1)] = (8));

} else {
var statearr_48006_48078 = state_47970__$1;
(statearr_48006_48078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (14))){
var inst_47950 = (state_47970[(11)]);
var inst_47948 = (state_47970[(8)]);
var inst_47948__$1 = (state_47970[(2)]);
var inst_47949 = (inst_47948__$1 == null);
var inst_47950__$1 = cljs.core.not.call(null,inst_47949);
var state_47970__$1 = (function (){var statearr_48007 = state_47970;
(statearr_48007[(11)] = inst_47950__$1);

(statearr_48007[(8)] = inst_47948__$1);

return statearr_48007;
})();
if(inst_47950__$1){
var statearr_48008_48080 = state_47970__$1;
(statearr_48008_48080[(1)] = (15));

} else {
var statearr_48009_48082 = state_47970__$1;
(statearr_48009_48082[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (16))){
var inst_47950 = (state_47970[(11)]);
var state_47970__$1 = state_47970;
var statearr_48010_48084 = state_47970__$1;
(statearr_48010_48084[(2)] = inst_47950);

(statearr_48010_48084[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (10))){
var inst_47942 = (state_47970[(2)]);
var state_47970__$1 = state_47970;
var statearr_48011_48085 = state_47970__$1;
(statearr_48011_48085[(2)] = inst_47942);

(statearr_48011_48085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (18))){
var inst_47953 = (state_47970[(2)]);
var state_47970__$1 = state_47970;
var statearr_48012_48088 = state_47970__$1;
(statearr_48012_48088[(2)] = inst_47953);

(statearr_48012_48088[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47971 === (8))){
var inst_47939 = cljs.core.async.close_BANG_.call(null,to);
var state_47970__$1 = state_47970;
var statearr_48013_48090 = state_47970__$1;
(statearr_48013_48090[(2)] = inst_47939);

(statearr_48013_48090[(1)] = (10));


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
});})(c__38078__auto__,jobs,results,process,async))
;
return ((function (switch__37921__auto__,c__38078__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____0 = (function (){
var statearr_48014 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48014[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__);

(statearr_48014[(1)] = (1));

return statearr_48014;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____1 = (function (state_47970){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_47970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e48015){if((e48015 instanceof Object)){
var ex__37925__auto__ = e48015;
var statearr_48016_48092 = state_47970;
(statearr_48016_48092[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48094 = state_47970;
state_47970 = G__48094;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__ = function(state_47970){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____1.call(this,state_47970);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto__,jobs,results,process,async))
})();
var state__38080__auto__ = (function (){var statearr_48017 = f__38079__auto__.call(null);
(statearr_48017[(6)] = c__38078__auto__);

return statearr_48017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto__,jobs,results,process,async))
);

return c__38078__auto__;
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
var G__48097 = arguments.length;
switch (G__48097) {
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
var G__48104 = arguments.length;
switch (G__48104) {
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
var G__48108 = arguments.length;
switch (G__48108) {
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
var c__38078__auto___48169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto___48169,tc,fc){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto___48169,tc,fc){
return (function (state_48135){
var state_val_48136 = (state_48135[(1)]);
if((state_val_48136 === (7))){
var inst_48131 = (state_48135[(2)]);
var state_48135__$1 = state_48135;
var statearr_48138_48172 = state_48135__$1;
(statearr_48138_48172[(2)] = inst_48131);

(statearr_48138_48172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48136 === (1))){
var state_48135__$1 = state_48135;
var statearr_48139_48173 = state_48135__$1;
(statearr_48139_48173[(2)] = null);

(statearr_48139_48173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48136 === (4))){
var inst_48111 = (state_48135[(7)]);
var inst_48111__$1 = (state_48135[(2)]);
var inst_48112 = (inst_48111__$1 == null);
var state_48135__$1 = (function (){var statearr_48140 = state_48135;
(statearr_48140[(7)] = inst_48111__$1);

return statearr_48140;
})();
if(cljs.core.truth_(inst_48112)){
var statearr_48141_48174 = state_48135__$1;
(statearr_48141_48174[(1)] = (5));

} else {
var statearr_48142_48175 = state_48135__$1;
(statearr_48142_48175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48136 === (13))){
var state_48135__$1 = state_48135;
var statearr_48143_48176 = state_48135__$1;
(statearr_48143_48176[(2)] = null);

(statearr_48143_48176[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48136 === (6))){
var inst_48111 = (state_48135[(7)]);
var inst_48118 = p.call(null,inst_48111);
var state_48135__$1 = state_48135;
if(cljs.core.truth_(inst_48118)){
var statearr_48144_48177 = state_48135__$1;
(statearr_48144_48177[(1)] = (9));

} else {
var statearr_48145_48178 = state_48135__$1;
(statearr_48145_48178[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48136 === (3))){
var inst_48133 = (state_48135[(2)]);
var state_48135__$1 = state_48135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48135__$1,inst_48133);
} else {
if((state_val_48136 === (12))){
var state_48135__$1 = state_48135;
var statearr_48146_48179 = state_48135__$1;
(statearr_48146_48179[(2)] = null);

(statearr_48146_48179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48136 === (2))){
var state_48135__$1 = state_48135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48135__$1,(4),ch);
} else {
if((state_val_48136 === (11))){
var inst_48111 = (state_48135[(7)]);
var inst_48122 = (state_48135[(2)]);
var state_48135__$1 = state_48135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48135__$1,(8),inst_48122,inst_48111);
} else {
if((state_val_48136 === (9))){
var state_48135__$1 = state_48135;
var statearr_48147_48180 = state_48135__$1;
(statearr_48147_48180[(2)] = tc);

(statearr_48147_48180[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48136 === (5))){
var inst_48115 = cljs.core.async.close_BANG_.call(null,tc);
var inst_48116 = cljs.core.async.close_BANG_.call(null,fc);
var state_48135__$1 = (function (){var statearr_48149 = state_48135;
(statearr_48149[(8)] = inst_48115);

return statearr_48149;
})();
var statearr_48152_48181 = state_48135__$1;
(statearr_48152_48181[(2)] = inst_48116);

(statearr_48152_48181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48136 === (14))){
var inst_48129 = (state_48135[(2)]);
var state_48135__$1 = state_48135;
var statearr_48153_48182 = state_48135__$1;
(statearr_48153_48182[(2)] = inst_48129);

(statearr_48153_48182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48136 === (10))){
var state_48135__$1 = state_48135;
var statearr_48157_48183 = state_48135__$1;
(statearr_48157_48183[(2)] = fc);

(statearr_48157_48183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48136 === (8))){
var inst_48124 = (state_48135[(2)]);
var state_48135__$1 = state_48135;
if(cljs.core.truth_(inst_48124)){
var statearr_48158_48184 = state_48135__$1;
(statearr_48158_48184[(1)] = (12));

} else {
var statearr_48159_48185 = state_48135__$1;
(statearr_48159_48185[(1)] = (13));

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
});})(c__38078__auto___48169,tc,fc))
;
return ((function (switch__37921__auto__,c__38078__auto___48169,tc,fc){
return (function() {
var cljs$core$async$state_machine__37922__auto__ = null;
var cljs$core$async$state_machine__37922__auto____0 = (function (){
var statearr_48161 = [null,null,null,null,null,null,null,null,null];
(statearr_48161[(0)] = cljs$core$async$state_machine__37922__auto__);

(statearr_48161[(1)] = (1));

return statearr_48161;
});
var cljs$core$async$state_machine__37922__auto____1 = (function (state_48135){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_48135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e48162){if((e48162 instanceof Object)){
var ex__37925__auto__ = e48162;
var statearr_48163_48187 = state_48135;
(statearr_48163_48187[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48188 = state_48135;
state_48135 = G__48188;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs$core$async$state_machine__37922__auto__ = function(state_48135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37922__auto____1.call(this,state_48135);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37922__auto____0;
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37922__auto____1;
return cljs$core$async$state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto___48169,tc,fc))
})();
var state__38080__auto__ = (function (){var statearr_48164 = f__38079__auto__.call(null);
(statearr_48164[(6)] = c__38078__auto___48169);

return statearr_48164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto___48169,tc,fc))
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
var c__38078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto__){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto__){
return (function (state_48210){
var state_val_48213 = (state_48210[(1)]);
if((state_val_48213 === (7))){
var inst_48206 = (state_48210[(2)]);
var state_48210__$1 = state_48210;
var statearr_48224_48276 = state_48210__$1;
(statearr_48224_48276[(2)] = inst_48206);

(statearr_48224_48276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48213 === (1))){
var inst_48189 = init;
var state_48210__$1 = (function (){var statearr_48225 = state_48210;
(statearr_48225[(7)] = inst_48189);

return statearr_48225;
})();
var statearr_48226_48280 = state_48210__$1;
(statearr_48226_48280[(2)] = null);

(statearr_48226_48280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48213 === (4))){
var inst_48193 = (state_48210[(8)]);
var inst_48193__$1 = (state_48210[(2)]);
var inst_48194 = (inst_48193__$1 == null);
var state_48210__$1 = (function (){var statearr_48233 = state_48210;
(statearr_48233[(8)] = inst_48193__$1);

return statearr_48233;
})();
if(cljs.core.truth_(inst_48194)){
var statearr_48234_48289 = state_48210__$1;
(statearr_48234_48289[(1)] = (5));

} else {
var statearr_48235_48290 = state_48210__$1;
(statearr_48235_48290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48213 === (6))){
var inst_48197 = (state_48210[(9)]);
var inst_48189 = (state_48210[(7)]);
var inst_48193 = (state_48210[(8)]);
var inst_48197__$1 = f.call(null,inst_48189,inst_48193);
var inst_48198 = cljs.core.reduced_QMARK_.call(null,inst_48197__$1);
var state_48210__$1 = (function (){var statearr_48240 = state_48210;
(statearr_48240[(9)] = inst_48197__$1);

return statearr_48240;
})();
if(inst_48198){
var statearr_48241_48298 = state_48210__$1;
(statearr_48241_48298[(1)] = (8));

} else {
var statearr_48242_48304 = state_48210__$1;
(statearr_48242_48304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48213 === (3))){
var inst_48208 = (state_48210[(2)]);
var state_48210__$1 = state_48210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48210__$1,inst_48208);
} else {
if((state_val_48213 === (2))){
var state_48210__$1 = state_48210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48210__$1,(4),ch);
} else {
if((state_val_48213 === (9))){
var inst_48197 = (state_48210[(9)]);
var inst_48189 = inst_48197;
var state_48210__$1 = (function (){var statearr_48243 = state_48210;
(statearr_48243[(7)] = inst_48189);

return statearr_48243;
})();
var statearr_48244_48310 = state_48210__$1;
(statearr_48244_48310[(2)] = null);

(statearr_48244_48310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48213 === (5))){
var inst_48189 = (state_48210[(7)]);
var state_48210__$1 = state_48210;
var statearr_48245_48311 = state_48210__$1;
(statearr_48245_48311[(2)] = inst_48189);

(statearr_48245_48311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48213 === (10))){
var inst_48204 = (state_48210[(2)]);
var state_48210__$1 = state_48210;
var statearr_48246_48312 = state_48210__$1;
(statearr_48246_48312[(2)] = inst_48204);

(statearr_48246_48312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48213 === (8))){
var inst_48197 = (state_48210[(9)]);
var inst_48200 = cljs.core.deref.call(null,inst_48197);
var state_48210__$1 = state_48210;
var statearr_48247_48313 = state_48210__$1;
(statearr_48247_48313[(2)] = inst_48200);

(statearr_48247_48313[(1)] = (10));


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
});})(c__38078__auto__))
;
return ((function (switch__37921__auto__,c__38078__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37922__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37922__auto____0 = (function (){
var statearr_48252 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48252[(0)] = cljs$core$async$reduce_$_state_machine__37922__auto__);

(statearr_48252[(1)] = (1));

return statearr_48252;
});
var cljs$core$async$reduce_$_state_machine__37922__auto____1 = (function (state_48210){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_48210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e48253){if((e48253 instanceof Object)){
var ex__37925__auto__ = e48253;
var statearr_48257_48314 = state_48210;
(statearr_48257_48314[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48315 = state_48210;
state_48210 = G__48315;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37922__auto__ = function(state_48210){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37922__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37922__auto____1.call(this,state_48210);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37922__auto____0;
cljs$core$async$reduce_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37922__auto____1;
return cljs$core$async$reduce_$_state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto__))
})();
var state__38080__auto__ = (function (){var statearr_48261 = f__38079__auto__.call(null);
(statearr_48261[(6)] = c__38078__auto__);

return statearr_48261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto__))
);

return c__38078__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__38078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto__,f__$1){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto__,f__$1){
return (function (state_48325){
var state_val_48326 = (state_48325[(1)]);
if((state_val_48326 === (1))){
var inst_48320 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_48325__$1 = state_48325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48325__$1,(2),inst_48320);
} else {
if((state_val_48326 === (2))){
var inst_48322 = (state_48325[(2)]);
var inst_48323 = f__$1.call(null,inst_48322);
var state_48325__$1 = state_48325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48325__$1,inst_48323);
} else {
return null;
}
}
});})(c__38078__auto__,f__$1))
;
return ((function (switch__37921__auto__,c__38078__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__37922__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37922__auto____0 = (function (){
var statearr_48329 = [null,null,null,null,null,null,null];
(statearr_48329[(0)] = cljs$core$async$transduce_$_state_machine__37922__auto__);

(statearr_48329[(1)] = (1));

return statearr_48329;
});
var cljs$core$async$transduce_$_state_machine__37922__auto____1 = (function (state_48325){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_48325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e48330){if((e48330 instanceof Object)){
var ex__37925__auto__ = e48330;
var statearr_48332_48339 = state_48325;
(statearr_48332_48339[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48342 = state_48325;
state_48325 = G__48342;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37922__auto__ = function(state_48325){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37922__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37922__auto____1.call(this,state_48325);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37922__auto____0;
cljs$core$async$transduce_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37922__auto____1;
return cljs$core$async$transduce_$_state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto__,f__$1))
})();
var state__38080__auto__ = (function (){var statearr_48333 = f__38079__auto__.call(null);
(statearr_48333[(6)] = c__38078__auto__);

return statearr_48333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto__,f__$1))
);

return c__38078__auto__;
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
var G__48345 = arguments.length;
switch (G__48345) {
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
var c__38078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto__){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto__){
return (function (state_48382){
var state_val_48383 = (state_48382[(1)]);
if((state_val_48383 === (7))){
var inst_48364 = (state_48382[(2)]);
var state_48382__$1 = state_48382;
var statearr_48385_48410 = state_48382__$1;
(statearr_48385_48410[(2)] = inst_48364);

(statearr_48385_48410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48383 === (1))){
var inst_48346 = cljs.core.seq.call(null,coll);
var inst_48347 = inst_48346;
var state_48382__$1 = (function (){var statearr_48386 = state_48382;
(statearr_48386[(7)] = inst_48347);

return statearr_48386;
})();
var statearr_48388_48411 = state_48382__$1;
(statearr_48388_48411[(2)] = null);

(statearr_48388_48411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48383 === (4))){
var inst_48347 = (state_48382[(7)]);
var inst_48350 = cljs.core.first.call(null,inst_48347);
var state_48382__$1 = state_48382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48382__$1,(7),ch,inst_48350);
} else {
if((state_val_48383 === (13))){
var inst_48376 = (state_48382[(2)]);
var state_48382__$1 = state_48382;
var statearr_48390_48414 = state_48382__$1;
(statearr_48390_48414[(2)] = inst_48376);

(statearr_48390_48414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48383 === (6))){
var inst_48367 = (state_48382[(2)]);
var state_48382__$1 = state_48382;
if(cljs.core.truth_(inst_48367)){
var statearr_48391_48415 = state_48382__$1;
(statearr_48391_48415[(1)] = (8));

} else {
var statearr_48392_48416 = state_48382__$1;
(statearr_48392_48416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48383 === (3))){
var inst_48380 = (state_48382[(2)]);
var state_48382__$1 = state_48382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48382__$1,inst_48380);
} else {
if((state_val_48383 === (12))){
var state_48382__$1 = state_48382;
var statearr_48393_48417 = state_48382__$1;
(statearr_48393_48417[(2)] = null);

(statearr_48393_48417[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48383 === (2))){
var inst_48347 = (state_48382[(7)]);
var state_48382__$1 = state_48382;
if(cljs.core.truth_(inst_48347)){
var statearr_48395_48420 = state_48382__$1;
(statearr_48395_48420[(1)] = (4));

} else {
var statearr_48396_48422 = state_48382__$1;
(statearr_48396_48422[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48383 === (11))){
var inst_48373 = cljs.core.async.close_BANG_.call(null,ch);
var state_48382__$1 = state_48382;
var statearr_48397_48423 = state_48382__$1;
(statearr_48397_48423[(2)] = inst_48373);

(statearr_48397_48423[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48383 === (9))){
var state_48382__$1 = state_48382;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48398_48424 = state_48382__$1;
(statearr_48398_48424[(1)] = (11));

} else {
var statearr_48400_48425 = state_48382__$1;
(statearr_48400_48425[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48383 === (5))){
var inst_48347 = (state_48382[(7)]);
var state_48382__$1 = state_48382;
var statearr_48401_48426 = state_48382__$1;
(statearr_48401_48426[(2)] = inst_48347);

(statearr_48401_48426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48383 === (10))){
var inst_48378 = (state_48382[(2)]);
var state_48382__$1 = state_48382;
var statearr_48402_48428 = state_48382__$1;
(statearr_48402_48428[(2)] = inst_48378);

(statearr_48402_48428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48383 === (8))){
var inst_48347 = (state_48382[(7)]);
var inst_48369 = cljs.core.next.call(null,inst_48347);
var inst_48347__$1 = inst_48369;
var state_48382__$1 = (function (){var statearr_48403 = state_48382;
(statearr_48403[(7)] = inst_48347__$1);

return statearr_48403;
})();
var statearr_48404_48430 = state_48382__$1;
(statearr_48404_48430[(2)] = null);

(statearr_48404_48430[(1)] = (2));


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
});})(c__38078__auto__))
;
return ((function (switch__37921__auto__,c__38078__auto__){
return (function() {
var cljs$core$async$state_machine__37922__auto__ = null;
var cljs$core$async$state_machine__37922__auto____0 = (function (){
var statearr_48405 = [null,null,null,null,null,null,null,null];
(statearr_48405[(0)] = cljs$core$async$state_machine__37922__auto__);

(statearr_48405[(1)] = (1));

return statearr_48405;
});
var cljs$core$async$state_machine__37922__auto____1 = (function (state_48382){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_48382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e48406){if((e48406 instanceof Object)){
var ex__37925__auto__ = e48406;
var statearr_48407_48432 = state_48382;
(statearr_48407_48432[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48433 = state_48382;
state_48382 = G__48433;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs$core$async$state_machine__37922__auto__ = function(state_48382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37922__auto____1.call(this,state_48382);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37922__auto____0;
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37922__auto____1;
return cljs$core$async$state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto__))
})();
var state__38080__auto__ = (function (){var statearr_48408 = f__38079__auto__.call(null);
(statearr_48408[(6)] = c__38078__auto__);

return statearr_48408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto__))
);

return c__38078__auto__;
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
var x__21935__auto__ = (((_ == null))?null:_);
var m__21936__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__21935__auto__)]);
if(!((m__21936__auto__ == null))){
return m__21936__auto__.call(null,_);
} else {
var m__21936__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__21936__auto____$1 == null))){
return m__21936__auto____$1.call(null,_);
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
var x__21935__auto__ = (((m == null))?null:m);
var m__21936__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__21935__auto__)]);
if(!((m__21936__auto__ == null))){
return m__21936__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__21936__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__21936__auto____$1 == null))){
return m__21936__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__21935__auto__ = (((m == null))?null:m);
var m__21936__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__21935__auto__)]);
if(!((m__21936__auto__ == null))){
return m__21936__auto__.call(null,m,ch);
} else {
var m__21936__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__21936__auto____$1 == null))){
return m__21936__auto____$1.call(null,m,ch);
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
var x__21935__auto__ = (((m == null))?null:m);
var m__21936__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__21935__auto__)]);
if(!((m__21936__auto__ == null))){
return m__21936__auto__.call(null,m);
} else {
var m__21936__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__21936__auto____$1 == null))){
return m__21936__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async48441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48441 = (function (ch,cs,meta48442){
this.ch = ch;
this.cs = cs;
this.meta48442 = meta48442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_48443,meta48442__$1){
var self__ = this;
var _48443__$1 = this;
return (new cljs.core.async.t_cljs$core$async48441(self__.ch,self__.cs,meta48442__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async48441.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_48443){
var self__ = this;
var _48443__$1 = this;
return self__.meta48442;
});})(cs))
;

cljs.core.async.t_cljs$core$async48441.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48441.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async48441.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48441.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48441.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48441.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48441.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48442","meta48442",-1412889370,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async48441.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48441";

cljs.core.async.t_cljs$core$async48441.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__21873__auto__,writer__21874__auto__,opt__21875__auto__){
return cljs.core._write.call(null,writer__21874__auto__,"cljs.core.async/t_cljs$core$async48441");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async48441 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async48441(ch__$1,cs__$1,meta48442){
return (new cljs.core.async.t_cljs$core$async48441(ch__$1,cs__$1,meta48442));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async48441(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__38078__auto___48700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto___48700,cs,m,dchan,dctr,done){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto___48700,cs,m,dchan,dctr,done){
return (function (state_48587){
var state_val_48588 = (state_48587[(1)]);
if((state_val_48588 === (7))){
var inst_48583 = (state_48587[(2)]);
var state_48587__$1 = state_48587;
var statearr_48589_48701 = state_48587__$1;
(statearr_48589_48701[(2)] = inst_48583);

(statearr_48589_48701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (20))){
var inst_48482 = (state_48587[(7)]);
var inst_48495 = cljs.core.first.call(null,inst_48482);
var inst_48496 = cljs.core.nth.call(null,inst_48495,(0),null);
var inst_48497 = cljs.core.nth.call(null,inst_48495,(1),null);
var state_48587__$1 = (function (){var statearr_48590 = state_48587;
(statearr_48590[(8)] = inst_48496);

return statearr_48590;
})();
if(cljs.core.truth_(inst_48497)){
var statearr_48591_48702 = state_48587__$1;
(statearr_48591_48702[(1)] = (22));

} else {
var statearr_48592_48703 = state_48587__$1;
(statearr_48592_48703[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (27))){
var inst_48528 = (state_48587[(9)]);
var inst_48526 = (state_48587[(10)]);
var inst_48533 = (state_48587[(11)]);
var inst_48450 = (state_48587[(12)]);
var inst_48533__$1 = cljs.core._nth.call(null,inst_48526,inst_48528);
var inst_48534 = cljs.core.async.put_BANG_.call(null,inst_48533__$1,inst_48450,done);
var state_48587__$1 = (function (){var statearr_48593 = state_48587;
(statearr_48593[(11)] = inst_48533__$1);

return statearr_48593;
})();
if(cljs.core.truth_(inst_48534)){
var statearr_48594_48704 = state_48587__$1;
(statearr_48594_48704[(1)] = (30));

} else {
var statearr_48595_48705 = state_48587__$1;
(statearr_48595_48705[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (1))){
var state_48587__$1 = state_48587;
var statearr_48596_48706 = state_48587__$1;
(statearr_48596_48706[(2)] = null);

(statearr_48596_48706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (24))){
var inst_48482 = (state_48587[(7)]);
var inst_48502 = (state_48587[(2)]);
var inst_48503 = cljs.core.next.call(null,inst_48482);
var inst_48459 = inst_48503;
var inst_48460 = null;
var inst_48461 = (0);
var inst_48462 = (0);
var state_48587__$1 = (function (){var statearr_48597 = state_48587;
(statearr_48597[(13)] = inst_48459);

(statearr_48597[(14)] = inst_48461);

(statearr_48597[(15)] = inst_48462);

(statearr_48597[(16)] = inst_48502);

(statearr_48597[(17)] = inst_48460);

return statearr_48597;
})();
var statearr_48598_48707 = state_48587__$1;
(statearr_48598_48707[(2)] = null);

(statearr_48598_48707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (39))){
var state_48587__$1 = state_48587;
var statearr_48603_48708 = state_48587__$1;
(statearr_48603_48708[(2)] = null);

(statearr_48603_48708[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (4))){
var inst_48450 = (state_48587[(12)]);
var inst_48450__$1 = (state_48587[(2)]);
var inst_48451 = (inst_48450__$1 == null);
var state_48587__$1 = (function (){var statearr_48604 = state_48587;
(statearr_48604[(12)] = inst_48450__$1);

return statearr_48604;
})();
if(cljs.core.truth_(inst_48451)){
var statearr_48605_48709 = state_48587__$1;
(statearr_48605_48709[(1)] = (5));

} else {
var statearr_48606_48710 = state_48587__$1;
(statearr_48606_48710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (15))){
var inst_48459 = (state_48587[(13)]);
var inst_48461 = (state_48587[(14)]);
var inst_48462 = (state_48587[(15)]);
var inst_48460 = (state_48587[(17)]);
var inst_48477 = (state_48587[(2)]);
var inst_48478 = (inst_48462 + (1));
var tmp48600 = inst_48459;
var tmp48601 = inst_48461;
var tmp48602 = inst_48460;
var inst_48459__$1 = tmp48600;
var inst_48460__$1 = tmp48602;
var inst_48461__$1 = tmp48601;
var inst_48462__$1 = inst_48478;
var state_48587__$1 = (function (){var statearr_48607 = state_48587;
(statearr_48607[(13)] = inst_48459__$1);

(statearr_48607[(14)] = inst_48461__$1);

(statearr_48607[(15)] = inst_48462__$1);

(statearr_48607[(17)] = inst_48460__$1);

(statearr_48607[(18)] = inst_48477);

return statearr_48607;
})();
var statearr_48608_48711 = state_48587__$1;
(statearr_48608_48711[(2)] = null);

(statearr_48608_48711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (21))){
var inst_48506 = (state_48587[(2)]);
var state_48587__$1 = state_48587;
var statearr_48612_48712 = state_48587__$1;
(statearr_48612_48712[(2)] = inst_48506);

(statearr_48612_48712[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (31))){
var inst_48533 = (state_48587[(11)]);
var inst_48537 = done.call(null,null);
var inst_48538 = cljs.core.async.untap_STAR_.call(null,m,inst_48533);
var state_48587__$1 = (function (){var statearr_48613 = state_48587;
(statearr_48613[(19)] = inst_48537);

return statearr_48613;
})();
var statearr_48614_48713 = state_48587__$1;
(statearr_48614_48713[(2)] = inst_48538);

(statearr_48614_48713[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (32))){
var inst_48528 = (state_48587[(9)]);
var inst_48526 = (state_48587[(10)]);
var inst_48525 = (state_48587[(20)]);
var inst_48527 = (state_48587[(21)]);
var inst_48540 = (state_48587[(2)]);
var inst_48541 = (inst_48528 + (1));
var tmp48609 = inst_48526;
var tmp48610 = inst_48525;
var tmp48611 = inst_48527;
var inst_48525__$1 = tmp48610;
var inst_48526__$1 = tmp48609;
var inst_48527__$1 = tmp48611;
var inst_48528__$1 = inst_48541;
var state_48587__$1 = (function (){var statearr_48615 = state_48587;
(statearr_48615[(9)] = inst_48528__$1);

(statearr_48615[(10)] = inst_48526__$1);

(statearr_48615[(22)] = inst_48540);

(statearr_48615[(20)] = inst_48525__$1);

(statearr_48615[(21)] = inst_48527__$1);

return statearr_48615;
})();
var statearr_48616_48714 = state_48587__$1;
(statearr_48616_48714[(2)] = null);

(statearr_48616_48714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (40))){
var inst_48554 = (state_48587[(23)]);
var inst_48559 = done.call(null,null);
var inst_48560 = cljs.core.async.untap_STAR_.call(null,m,inst_48554);
var state_48587__$1 = (function (){var statearr_48617 = state_48587;
(statearr_48617[(24)] = inst_48559);

return statearr_48617;
})();
var statearr_48618_48715 = state_48587__$1;
(statearr_48618_48715[(2)] = inst_48560);

(statearr_48618_48715[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (33))){
var inst_48544 = (state_48587[(25)]);
var inst_48546 = cljs.core.chunked_seq_QMARK_.call(null,inst_48544);
var state_48587__$1 = state_48587;
if(inst_48546){
var statearr_48619_48716 = state_48587__$1;
(statearr_48619_48716[(1)] = (36));

} else {
var statearr_48620_48717 = state_48587__$1;
(statearr_48620_48717[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (13))){
var inst_48471 = (state_48587[(26)]);
var inst_48474 = cljs.core.async.close_BANG_.call(null,inst_48471);
var state_48587__$1 = state_48587;
var statearr_48621_48718 = state_48587__$1;
(statearr_48621_48718[(2)] = inst_48474);

(statearr_48621_48718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (22))){
var inst_48496 = (state_48587[(8)]);
var inst_48499 = cljs.core.async.close_BANG_.call(null,inst_48496);
var state_48587__$1 = state_48587;
var statearr_48622_48719 = state_48587__$1;
(statearr_48622_48719[(2)] = inst_48499);

(statearr_48622_48719[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (36))){
var inst_48544 = (state_48587[(25)]);
var inst_48548 = cljs.core.chunk_first.call(null,inst_48544);
var inst_48549 = cljs.core.chunk_rest.call(null,inst_48544);
var inst_48551 = cljs.core.count.call(null,inst_48548);
var inst_48525 = inst_48549;
var inst_48526 = inst_48548;
var inst_48527 = inst_48551;
var inst_48528 = (0);
var state_48587__$1 = (function (){var statearr_48628 = state_48587;
(statearr_48628[(9)] = inst_48528);

(statearr_48628[(10)] = inst_48526);

(statearr_48628[(20)] = inst_48525);

(statearr_48628[(21)] = inst_48527);

return statearr_48628;
})();
var statearr_48629_48720 = state_48587__$1;
(statearr_48629_48720[(2)] = null);

(statearr_48629_48720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (41))){
var inst_48544 = (state_48587[(25)]);
var inst_48562 = (state_48587[(2)]);
var inst_48563 = cljs.core.next.call(null,inst_48544);
var inst_48525 = inst_48563;
var inst_48526 = null;
var inst_48527 = (0);
var inst_48528 = (0);
var state_48587__$1 = (function (){var statearr_48630 = state_48587;
(statearr_48630[(9)] = inst_48528);

(statearr_48630[(10)] = inst_48526);

(statearr_48630[(27)] = inst_48562);

(statearr_48630[(20)] = inst_48525);

(statearr_48630[(21)] = inst_48527);

return statearr_48630;
})();
var statearr_48631_48721 = state_48587__$1;
(statearr_48631_48721[(2)] = null);

(statearr_48631_48721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (43))){
var state_48587__$1 = state_48587;
var statearr_48632_48722 = state_48587__$1;
(statearr_48632_48722[(2)] = null);

(statearr_48632_48722[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (29))){
var inst_48571 = (state_48587[(2)]);
var state_48587__$1 = state_48587;
var statearr_48633_48723 = state_48587__$1;
(statearr_48633_48723[(2)] = inst_48571);

(statearr_48633_48723[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (44))){
var inst_48580 = (state_48587[(2)]);
var state_48587__$1 = (function (){var statearr_48634 = state_48587;
(statearr_48634[(28)] = inst_48580);

return statearr_48634;
})();
var statearr_48635_48724 = state_48587__$1;
(statearr_48635_48724[(2)] = null);

(statearr_48635_48724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (6))){
var inst_48516 = (state_48587[(29)]);
var inst_48515 = cljs.core.deref.call(null,cs);
var inst_48516__$1 = cljs.core.keys.call(null,inst_48515);
var inst_48518 = cljs.core.count.call(null,inst_48516__$1);
var inst_48519 = cljs.core.reset_BANG_.call(null,dctr,inst_48518);
var inst_48524 = cljs.core.seq.call(null,inst_48516__$1);
var inst_48525 = inst_48524;
var inst_48526 = null;
var inst_48527 = (0);
var inst_48528 = (0);
var state_48587__$1 = (function (){var statearr_48637 = state_48587;
(statearr_48637[(30)] = inst_48519);

(statearr_48637[(9)] = inst_48528);

(statearr_48637[(10)] = inst_48526);

(statearr_48637[(20)] = inst_48525);

(statearr_48637[(29)] = inst_48516__$1);

(statearr_48637[(21)] = inst_48527);

return statearr_48637;
})();
var statearr_48638_48725 = state_48587__$1;
(statearr_48638_48725[(2)] = null);

(statearr_48638_48725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (28))){
var inst_48525 = (state_48587[(20)]);
var inst_48544 = (state_48587[(25)]);
var inst_48544__$1 = cljs.core.seq.call(null,inst_48525);
var state_48587__$1 = (function (){var statearr_48639 = state_48587;
(statearr_48639[(25)] = inst_48544__$1);

return statearr_48639;
})();
if(inst_48544__$1){
var statearr_48640_48726 = state_48587__$1;
(statearr_48640_48726[(1)] = (33));

} else {
var statearr_48641_48727 = state_48587__$1;
(statearr_48641_48727[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (25))){
var inst_48528 = (state_48587[(9)]);
var inst_48527 = (state_48587[(21)]);
var inst_48530 = (inst_48528 < inst_48527);
var inst_48531 = inst_48530;
var state_48587__$1 = state_48587;
if(cljs.core.truth_(inst_48531)){
var statearr_48642_48728 = state_48587__$1;
(statearr_48642_48728[(1)] = (27));

} else {
var statearr_48643_48729 = state_48587__$1;
(statearr_48643_48729[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (34))){
var state_48587__$1 = state_48587;
var statearr_48644_48730 = state_48587__$1;
(statearr_48644_48730[(2)] = null);

(statearr_48644_48730[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (17))){
var state_48587__$1 = state_48587;
var statearr_48645_48731 = state_48587__$1;
(statearr_48645_48731[(2)] = null);

(statearr_48645_48731[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (3))){
var inst_48585 = (state_48587[(2)]);
var state_48587__$1 = state_48587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48587__$1,inst_48585);
} else {
if((state_val_48588 === (12))){
var inst_48511 = (state_48587[(2)]);
var state_48587__$1 = state_48587;
var statearr_48646_48732 = state_48587__$1;
(statearr_48646_48732[(2)] = inst_48511);

(statearr_48646_48732[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (2))){
var state_48587__$1 = state_48587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48587__$1,(4),ch);
} else {
if((state_val_48588 === (23))){
var state_48587__$1 = state_48587;
var statearr_48647_48733 = state_48587__$1;
(statearr_48647_48733[(2)] = null);

(statearr_48647_48733[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (35))){
var inst_48569 = (state_48587[(2)]);
var state_48587__$1 = state_48587;
var statearr_48648_48734 = state_48587__$1;
(statearr_48648_48734[(2)] = inst_48569);

(statearr_48648_48734[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (19))){
var inst_48482 = (state_48587[(7)]);
var inst_48487 = cljs.core.chunk_first.call(null,inst_48482);
var inst_48488 = cljs.core.chunk_rest.call(null,inst_48482);
var inst_48489 = cljs.core.count.call(null,inst_48487);
var inst_48459 = inst_48488;
var inst_48460 = inst_48487;
var inst_48461 = inst_48489;
var inst_48462 = (0);
var state_48587__$1 = (function (){var statearr_48649 = state_48587;
(statearr_48649[(13)] = inst_48459);

(statearr_48649[(14)] = inst_48461);

(statearr_48649[(15)] = inst_48462);

(statearr_48649[(17)] = inst_48460);

return statearr_48649;
})();
var statearr_48650_48735 = state_48587__$1;
(statearr_48650_48735[(2)] = null);

(statearr_48650_48735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (11))){
var inst_48459 = (state_48587[(13)]);
var inst_48482 = (state_48587[(7)]);
var inst_48482__$1 = cljs.core.seq.call(null,inst_48459);
var state_48587__$1 = (function (){var statearr_48652 = state_48587;
(statearr_48652[(7)] = inst_48482__$1);

return statearr_48652;
})();
if(inst_48482__$1){
var statearr_48653_48736 = state_48587__$1;
(statearr_48653_48736[(1)] = (16));

} else {
var statearr_48654_48737 = state_48587__$1;
(statearr_48654_48737[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (9))){
var inst_48513 = (state_48587[(2)]);
var state_48587__$1 = state_48587;
var statearr_48655_48738 = state_48587__$1;
(statearr_48655_48738[(2)] = inst_48513);

(statearr_48655_48738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (5))){
var inst_48457 = cljs.core.deref.call(null,cs);
var inst_48458 = cljs.core.seq.call(null,inst_48457);
var inst_48459 = inst_48458;
var inst_48460 = null;
var inst_48461 = (0);
var inst_48462 = (0);
var state_48587__$1 = (function (){var statearr_48659 = state_48587;
(statearr_48659[(13)] = inst_48459);

(statearr_48659[(14)] = inst_48461);

(statearr_48659[(15)] = inst_48462);

(statearr_48659[(17)] = inst_48460);

return statearr_48659;
})();
var statearr_48660_48739 = state_48587__$1;
(statearr_48660_48739[(2)] = null);

(statearr_48660_48739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (14))){
var state_48587__$1 = state_48587;
var statearr_48664_48741 = state_48587__$1;
(statearr_48664_48741[(2)] = null);

(statearr_48664_48741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (45))){
var inst_48577 = (state_48587[(2)]);
var state_48587__$1 = state_48587;
var statearr_48665_48742 = state_48587__$1;
(statearr_48665_48742[(2)] = inst_48577);

(statearr_48665_48742[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (26))){
var inst_48516 = (state_48587[(29)]);
var inst_48573 = (state_48587[(2)]);
var inst_48574 = cljs.core.seq.call(null,inst_48516);
var state_48587__$1 = (function (){var statearr_48669 = state_48587;
(statearr_48669[(31)] = inst_48573);

return statearr_48669;
})();
if(inst_48574){
var statearr_48670_48743 = state_48587__$1;
(statearr_48670_48743[(1)] = (42));

} else {
var statearr_48671_48744 = state_48587__$1;
(statearr_48671_48744[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (16))){
var inst_48482 = (state_48587[(7)]);
var inst_48485 = cljs.core.chunked_seq_QMARK_.call(null,inst_48482);
var state_48587__$1 = state_48587;
if(inst_48485){
var statearr_48672_48745 = state_48587__$1;
(statearr_48672_48745[(1)] = (19));

} else {
var statearr_48676_48746 = state_48587__$1;
(statearr_48676_48746[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (38))){
var inst_48566 = (state_48587[(2)]);
var state_48587__$1 = state_48587;
var statearr_48677_48747 = state_48587__$1;
(statearr_48677_48747[(2)] = inst_48566);

(statearr_48677_48747[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (30))){
var state_48587__$1 = state_48587;
var statearr_48678_48748 = state_48587__$1;
(statearr_48678_48748[(2)] = null);

(statearr_48678_48748[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (10))){
var inst_48462 = (state_48587[(15)]);
var inst_48460 = (state_48587[(17)]);
var inst_48470 = cljs.core._nth.call(null,inst_48460,inst_48462);
var inst_48471 = cljs.core.nth.call(null,inst_48470,(0),null);
var inst_48472 = cljs.core.nth.call(null,inst_48470,(1),null);
var state_48587__$1 = (function (){var statearr_48679 = state_48587;
(statearr_48679[(26)] = inst_48471);

return statearr_48679;
})();
if(cljs.core.truth_(inst_48472)){
var statearr_48680_48749 = state_48587__$1;
(statearr_48680_48749[(1)] = (13));

} else {
var statearr_48681_48750 = state_48587__$1;
(statearr_48681_48750[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (18))){
var inst_48509 = (state_48587[(2)]);
var state_48587__$1 = state_48587;
var statearr_48682_48751 = state_48587__$1;
(statearr_48682_48751[(2)] = inst_48509);

(statearr_48682_48751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (42))){
var state_48587__$1 = state_48587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48587__$1,(45),dchan);
} else {
if((state_val_48588 === (37))){
var inst_48450 = (state_48587[(12)]);
var inst_48554 = (state_48587[(23)]);
var inst_48544 = (state_48587[(25)]);
var inst_48554__$1 = cljs.core.first.call(null,inst_48544);
var inst_48556 = cljs.core.async.put_BANG_.call(null,inst_48554__$1,inst_48450,done);
var state_48587__$1 = (function (){var statearr_48683 = state_48587;
(statearr_48683[(23)] = inst_48554__$1);

return statearr_48683;
})();
if(cljs.core.truth_(inst_48556)){
var statearr_48685_48752 = state_48587__$1;
(statearr_48685_48752[(1)] = (39));

} else {
var statearr_48686_48753 = state_48587__$1;
(statearr_48686_48753[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48588 === (8))){
var inst_48461 = (state_48587[(14)]);
var inst_48462 = (state_48587[(15)]);
var inst_48464 = (inst_48462 < inst_48461);
var inst_48465 = inst_48464;
var state_48587__$1 = state_48587;
if(cljs.core.truth_(inst_48465)){
var statearr_48687_48754 = state_48587__$1;
(statearr_48687_48754[(1)] = (10));

} else {
var statearr_48688_48755 = state_48587__$1;
(statearr_48688_48755[(1)] = (11));

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
});})(c__38078__auto___48700,cs,m,dchan,dctr,done))
;
return ((function (switch__37921__auto__,c__38078__auto___48700,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37922__auto__ = null;
var cljs$core$async$mult_$_state_machine__37922__auto____0 = (function (){
var statearr_48690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48690[(0)] = cljs$core$async$mult_$_state_machine__37922__auto__);

(statearr_48690[(1)] = (1));

return statearr_48690;
});
var cljs$core$async$mult_$_state_machine__37922__auto____1 = (function (state_48587){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_48587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e48691){if((e48691 instanceof Object)){
var ex__37925__auto__ = e48691;
var statearr_48692_48756 = state_48587;
(statearr_48692_48756[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48757 = state_48587;
state_48587 = G__48757;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37922__auto__ = function(state_48587){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37922__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37922__auto____1.call(this,state_48587);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37922__auto____0;
cljs$core$async$mult_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37922__auto____1;
return cljs$core$async$mult_$_state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto___48700,cs,m,dchan,dctr,done))
})();
var state__38080__auto__ = (function (){var statearr_48693 = f__38079__auto__.call(null);
(statearr_48693[(6)] = c__38078__auto___48700);

return statearr_48693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto___48700,cs,m,dchan,dctr,done))
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
var G__48759 = arguments.length;
switch (G__48759) {
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
var x__21935__auto__ = (((m == null))?null:m);
var m__21936__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__21935__auto__)]);
if(!((m__21936__auto__ == null))){
return m__21936__auto__.call(null,m,ch);
} else {
var m__21936__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__21936__auto____$1 == null))){
return m__21936__auto____$1.call(null,m,ch);
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
var x__21935__auto__ = (((m == null))?null:m);
var m__21936__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__21935__auto__)]);
if(!((m__21936__auto__ == null))){
return m__21936__auto__.call(null,m,ch);
} else {
var m__21936__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__21936__auto____$1 == null))){
return m__21936__auto____$1.call(null,m,ch);
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
var x__21935__auto__ = (((m == null))?null:m);
var m__21936__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__21935__auto__)]);
if(!((m__21936__auto__ == null))){
return m__21936__auto__.call(null,m);
} else {
var m__21936__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__21936__auto____$1 == null))){
return m__21936__auto____$1.call(null,m);
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
var x__21935__auto__ = (((m == null))?null:m);
var m__21936__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__21935__auto__)]);
if(!((m__21936__auto__ == null))){
return m__21936__auto__.call(null,m,state_map);
} else {
var m__21936__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__21936__auto____$1 == null))){
return m__21936__auto____$1.call(null,m,state_map);
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
var x__21935__auto__ = (((m == null))?null:m);
var m__21936__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__21935__auto__)]);
if(!((m__21936__auto__ == null))){
return m__21936__auto__.call(null,m,mode);
} else {
var m__21936__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__21936__auto____$1 == null))){
return m__21936__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22488__auto__ = [];
var len__22481__auto___48773 = arguments.length;
var i__22482__auto___48774 = (0);
while(true){
if((i__22482__auto___48774 < len__22481__auto___48773)){
args__22488__auto__.push((arguments[i__22482__auto___48774]));

var G__48775 = (i__22482__auto___48774 + (1));
i__22482__auto___48774 = G__48775;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((3) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22489__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48767){
var map__48768 = p__48767;
var map__48768__$1 = ((((!((map__48768 == null)))?((((map__48768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48768.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48768):map__48768);
var opts = map__48768__$1;
var statearr_48770_48776 = state;
(statearr_48770_48776[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__48768,map__48768__$1,opts){
return (function (val){
var statearr_48771_48777 = state;
(statearr_48771_48777[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__48768,map__48768__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_48772_48778 = state;
(statearr_48772_48778[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48763){
var G__48764 = cljs.core.first.call(null,seq48763);
var seq48763__$1 = cljs.core.next.call(null,seq48763);
var G__48765 = cljs.core.first.call(null,seq48763__$1);
var seq48763__$2 = cljs.core.next.call(null,seq48763__$1);
var G__48766 = cljs.core.first.call(null,seq48763__$2);
var seq48763__$3 = cljs.core.next.call(null,seq48763__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48764,G__48765,G__48766,seq48763__$3);
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
if(typeof cljs.core.async.t_cljs$core$async48779 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48779 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta48780){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta48780 = meta48780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48781,meta48780__$1){
var self__ = this;
var _48781__$1 = this;
return (new cljs.core.async.t_cljs$core$async48779(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta48780__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48779.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48781){
var self__ = this;
var _48781__$1 = this;
return self__.meta48780;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48779.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48779.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48779.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48779.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48779.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48779.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48779.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48779.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async48779.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta48780","meta48780",-177314568,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48779.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48779";

cljs.core.async.t_cljs$core$async48779.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__21873__auto__,writer__21874__auto__,opt__21875__auto__){
return cljs.core._write.call(null,writer__21874__auto__,"cljs.core.async/t_cljs$core$async48779");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async48779 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async48779(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48780){
return (new cljs.core.async.t_cljs$core$async48779(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48780));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async48779(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38078__auto___48943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto___48943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto___48943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_48883){
var state_val_48884 = (state_48883[(1)]);
if((state_val_48884 === (7))){
var inst_48798 = (state_48883[(2)]);
var state_48883__$1 = state_48883;
var statearr_48885_48944 = state_48883__$1;
(statearr_48885_48944[(2)] = inst_48798);

(statearr_48885_48944[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (20))){
var inst_48810 = (state_48883[(7)]);
var state_48883__$1 = state_48883;
var statearr_48886_48945 = state_48883__$1;
(statearr_48886_48945[(2)] = inst_48810);

(statearr_48886_48945[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (27))){
var state_48883__$1 = state_48883;
var statearr_48887_48946 = state_48883__$1;
(statearr_48887_48946[(2)] = null);

(statearr_48887_48946[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (1))){
var inst_48785 = (state_48883[(8)]);
var inst_48785__$1 = calc_state.call(null);
var inst_48787 = (inst_48785__$1 == null);
var inst_48788 = cljs.core.not.call(null,inst_48787);
var state_48883__$1 = (function (){var statearr_48888 = state_48883;
(statearr_48888[(8)] = inst_48785__$1);

return statearr_48888;
})();
if(inst_48788){
var statearr_48889_48947 = state_48883__$1;
(statearr_48889_48947[(1)] = (2));

} else {
var statearr_48890_48948 = state_48883__$1;
(statearr_48890_48948[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (24))){
var inst_48857 = (state_48883[(9)]);
var inst_48843 = (state_48883[(10)]);
var inst_48834 = (state_48883[(11)]);
var inst_48857__$1 = inst_48834.call(null,inst_48843);
var state_48883__$1 = (function (){var statearr_48891 = state_48883;
(statearr_48891[(9)] = inst_48857__$1);

return statearr_48891;
})();
if(cljs.core.truth_(inst_48857__$1)){
var statearr_48892_48949 = state_48883__$1;
(statearr_48892_48949[(1)] = (29));

} else {
var statearr_48893_48950 = state_48883__$1;
(statearr_48893_48950[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (4))){
var inst_48801 = (state_48883[(2)]);
var state_48883__$1 = state_48883;
if(cljs.core.truth_(inst_48801)){
var statearr_48894_48951 = state_48883__$1;
(statearr_48894_48951[(1)] = (8));

} else {
var statearr_48895_48952 = state_48883__$1;
(statearr_48895_48952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (15))){
var inst_48828 = (state_48883[(2)]);
var state_48883__$1 = state_48883;
if(cljs.core.truth_(inst_48828)){
var statearr_48896_48953 = state_48883__$1;
(statearr_48896_48953[(1)] = (19));

} else {
var statearr_48897_48954 = state_48883__$1;
(statearr_48897_48954[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (21))){
var inst_48833 = (state_48883[(12)]);
var inst_48833__$1 = (state_48883[(2)]);
var inst_48834 = cljs.core.get.call(null,inst_48833__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48835 = cljs.core.get.call(null,inst_48833__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48836 = cljs.core.get.call(null,inst_48833__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48883__$1 = (function (){var statearr_48898 = state_48883;
(statearr_48898[(12)] = inst_48833__$1);

(statearr_48898[(13)] = inst_48835);

(statearr_48898[(11)] = inst_48834);

return statearr_48898;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_48883__$1,(22),inst_48836);
} else {
if((state_val_48884 === (31))){
var inst_48865 = (state_48883[(2)]);
var state_48883__$1 = state_48883;
if(cljs.core.truth_(inst_48865)){
var statearr_48899_48955 = state_48883__$1;
(statearr_48899_48955[(1)] = (32));

} else {
var statearr_48900_48956 = state_48883__$1;
(statearr_48900_48956[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (32))){
var inst_48842 = (state_48883[(14)]);
var state_48883__$1 = state_48883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48883__$1,(35),out,inst_48842);
} else {
if((state_val_48884 === (33))){
var inst_48833 = (state_48883[(12)]);
var inst_48810 = inst_48833;
var state_48883__$1 = (function (){var statearr_48901 = state_48883;
(statearr_48901[(7)] = inst_48810);

return statearr_48901;
})();
var statearr_48902_48957 = state_48883__$1;
(statearr_48902_48957[(2)] = null);

(statearr_48902_48957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (13))){
var inst_48810 = (state_48883[(7)]);
var inst_48817 = inst_48810.cljs$lang$protocol_mask$partition0$;
var inst_48818 = (inst_48817 & (64));
var inst_48819 = inst_48810.cljs$core$ISeq$;
var inst_48820 = (cljs.core.PROTOCOL_SENTINEL === inst_48819);
var inst_48821 = (inst_48818) || (inst_48820);
var state_48883__$1 = state_48883;
if(cljs.core.truth_(inst_48821)){
var statearr_48903_48958 = state_48883__$1;
(statearr_48903_48958[(1)] = (16));

} else {
var statearr_48904_48959 = state_48883__$1;
(statearr_48904_48959[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (22))){
var inst_48842 = (state_48883[(14)]);
var inst_48843 = (state_48883[(10)]);
var inst_48841 = (state_48883[(2)]);
var inst_48842__$1 = cljs.core.nth.call(null,inst_48841,(0),null);
var inst_48843__$1 = cljs.core.nth.call(null,inst_48841,(1),null);
var inst_48844 = (inst_48842__$1 == null);
var inst_48845 = cljs.core._EQ_.call(null,inst_48843__$1,change);
var inst_48846 = (inst_48844) || (inst_48845);
var state_48883__$1 = (function (){var statearr_48905 = state_48883;
(statearr_48905[(14)] = inst_48842__$1);

(statearr_48905[(10)] = inst_48843__$1);

return statearr_48905;
})();
if(cljs.core.truth_(inst_48846)){
var statearr_48906_48960 = state_48883__$1;
(statearr_48906_48960[(1)] = (23));

} else {
var statearr_48907_48961 = state_48883__$1;
(statearr_48907_48961[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (36))){
var inst_48833 = (state_48883[(12)]);
var inst_48810 = inst_48833;
var state_48883__$1 = (function (){var statearr_48908 = state_48883;
(statearr_48908[(7)] = inst_48810);

return statearr_48908;
})();
var statearr_48909_48962 = state_48883__$1;
(statearr_48909_48962[(2)] = null);

(statearr_48909_48962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (29))){
var inst_48857 = (state_48883[(9)]);
var state_48883__$1 = state_48883;
var statearr_48910_48963 = state_48883__$1;
(statearr_48910_48963[(2)] = inst_48857);

(statearr_48910_48963[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (6))){
var state_48883__$1 = state_48883;
var statearr_48911_48964 = state_48883__$1;
(statearr_48911_48964[(2)] = false);

(statearr_48911_48964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (28))){
var inst_48853 = (state_48883[(2)]);
var inst_48854 = calc_state.call(null);
var inst_48810 = inst_48854;
var state_48883__$1 = (function (){var statearr_48912 = state_48883;
(statearr_48912[(7)] = inst_48810);

(statearr_48912[(15)] = inst_48853);

return statearr_48912;
})();
var statearr_48913_48965 = state_48883__$1;
(statearr_48913_48965[(2)] = null);

(statearr_48913_48965[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (25))){
var inst_48879 = (state_48883[(2)]);
var state_48883__$1 = state_48883;
var statearr_48914_48966 = state_48883__$1;
(statearr_48914_48966[(2)] = inst_48879);

(statearr_48914_48966[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (34))){
var inst_48877 = (state_48883[(2)]);
var state_48883__$1 = state_48883;
var statearr_48915_48967 = state_48883__$1;
(statearr_48915_48967[(2)] = inst_48877);

(statearr_48915_48967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (17))){
var state_48883__$1 = state_48883;
var statearr_48916_48968 = state_48883__$1;
(statearr_48916_48968[(2)] = false);

(statearr_48916_48968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (3))){
var state_48883__$1 = state_48883;
var statearr_48917_48969 = state_48883__$1;
(statearr_48917_48969[(2)] = false);

(statearr_48917_48969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (12))){
var inst_48881 = (state_48883[(2)]);
var state_48883__$1 = state_48883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48883__$1,inst_48881);
} else {
if((state_val_48884 === (2))){
var inst_48785 = (state_48883[(8)]);
var inst_48790 = inst_48785.cljs$lang$protocol_mask$partition0$;
var inst_48791 = (inst_48790 & (64));
var inst_48792 = inst_48785.cljs$core$ISeq$;
var inst_48793 = (cljs.core.PROTOCOL_SENTINEL === inst_48792);
var inst_48794 = (inst_48791) || (inst_48793);
var state_48883__$1 = state_48883;
if(cljs.core.truth_(inst_48794)){
var statearr_48918_48970 = state_48883__$1;
(statearr_48918_48970[(1)] = (5));

} else {
var statearr_48919_48971 = state_48883__$1;
(statearr_48919_48971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (23))){
var inst_48842 = (state_48883[(14)]);
var inst_48848 = (inst_48842 == null);
var state_48883__$1 = state_48883;
if(cljs.core.truth_(inst_48848)){
var statearr_48920_48972 = state_48883__$1;
(statearr_48920_48972[(1)] = (26));

} else {
var statearr_48921_48973 = state_48883__$1;
(statearr_48921_48973[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (35))){
var inst_48868 = (state_48883[(2)]);
var state_48883__$1 = state_48883;
if(cljs.core.truth_(inst_48868)){
var statearr_48922_48974 = state_48883__$1;
(statearr_48922_48974[(1)] = (36));

} else {
var statearr_48923_48975 = state_48883__$1;
(statearr_48923_48975[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (19))){
var inst_48810 = (state_48883[(7)]);
var inst_48830 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48810);
var state_48883__$1 = state_48883;
var statearr_48924_48976 = state_48883__$1;
(statearr_48924_48976[(2)] = inst_48830);

(statearr_48924_48976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (11))){
var inst_48810 = (state_48883[(7)]);
var inst_48814 = (inst_48810 == null);
var inst_48815 = cljs.core.not.call(null,inst_48814);
var state_48883__$1 = state_48883;
if(inst_48815){
var statearr_48925_48977 = state_48883__$1;
(statearr_48925_48977[(1)] = (13));

} else {
var statearr_48926_48978 = state_48883__$1;
(statearr_48926_48978[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (9))){
var inst_48785 = (state_48883[(8)]);
var state_48883__$1 = state_48883;
var statearr_48927_48979 = state_48883__$1;
(statearr_48927_48979[(2)] = inst_48785);

(statearr_48927_48979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (5))){
var state_48883__$1 = state_48883;
var statearr_48928_48982 = state_48883__$1;
(statearr_48928_48982[(2)] = true);

(statearr_48928_48982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (14))){
var state_48883__$1 = state_48883;
var statearr_48929_48983 = state_48883__$1;
(statearr_48929_48983[(2)] = false);

(statearr_48929_48983[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (26))){
var inst_48843 = (state_48883[(10)]);
var inst_48850 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48843);
var state_48883__$1 = state_48883;
var statearr_48930_48984 = state_48883__$1;
(statearr_48930_48984[(2)] = inst_48850);

(statearr_48930_48984[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (16))){
var state_48883__$1 = state_48883;
var statearr_48931_48985 = state_48883__$1;
(statearr_48931_48985[(2)] = true);

(statearr_48931_48985[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (38))){
var inst_48873 = (state_48883[(2)]);
var state_48883__$1 = state_48883;
var statearr_48932_48986 = state_48883__$1;
(statearr_48932_48986[(2)] = inst_48873);

(statearr_48932_48986[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (30))){
var inst_48835 = (state_48883[(13)]);
var inst_48843 = (state_48883[(10)]);
var inst_48834 = (state_48883[(11)]);
var inst_48860 = cljs.core.empty_QMARK_.call(null,inst_48834);
var inst_48861 = inst_48835.call(null,inst_48843);
var inst_48862 = cljs.core.not.call(null,inst_48861);
var inst_48863 = (inst_48860) && (inst_48862);
var state_48883__$1 = state_48883;
var statearr_48933_48987 = state_48883__$1;
(statearr_48933_48987[(2)] = inst_48863);

(statearr_48933_48987[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (10))){
var inst_48785 = (state_48883[(8)]);
var inst_48806 = (state_48883[(2)]);
var inst_48807 = cljs.core.get.call(null,inst_48806,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48808 = cljs.core.get.call(null,inst_48806,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48809 = cljs.core.get.call(null,inst_48806,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48810 = inst_48785;
var state_48883__$1 = (function (){var statearr_48934 = state_48883;
(statearr_48934[(7)] = inst_48810);

(statearr_48934[(16)] = inst_48809);

(statearr_48934[(17)] = inst_48808);

(statearr_48934[(18)] = inst_48807);

return statearr_48934;
})();
var statearr_48935_48988 = state_48883__$1;
(statearr_48935_48988[(2)] = null);

(statearr_48935_48988[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (18))){
var inst_48825 = (state_48883[(2)]);
var state_48883__$1 = state_48883;
var statearr_48936_48989 = state_48883__$1;
(statearr_48936_48989[(2)] = inst_48825);

(statearr_48936_48989[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (37))){
var state_48883__$1 = state_48883;
var statearr_48937_48990 = state_48883__$1;
(statearr_48937_48990[(2)] = null);

(statearr_48937_48990[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48884 === (8))){
var inst_48785 = (state_48883[(8)]);
var inst_48803 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48785);
var state_48883__$1 = state_48883;
var statearr_48938_48991 = state_48883__$1;
(statearr_48938_48991[(2)] = inst_48803);

(statearr_48938_48991[(1)] = (10));


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
});})(c__38078__auto___48943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37921__auto__,c__38078__auto___48943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37922__auto__ = null;
var cljs$core$async$mix_$_state_machine__37922__auto____0 = (function (){
var statearr_48939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48939[(0)] = cljs$core$async$mix_$_state_machine__37922__auto__);

(statearr_48939[(1)] = (1));

return statearr_48939;
});
var cljs$core$async$mix_$_state_machine__37922__auto____1 = (function (state_48883){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_48883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e48940){if((e48940 instanceof Object)){
var ex__37925__auto__ = e48940;
var statearr_48941_48992 = state_48883;
(statearr_48941_48992[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48993 = state_48883;
state_48883 = G__48993;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37922__auto__ = function(state_48883){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37922__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37922__auto____1.call(this,state_48883);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37922__auto____0;
cljs$core$async$mix_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37922__auto____1;
return cljs$core$async$mix_$_state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto___48943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38080__auto__ = (function (){var statearr_48942 = f__38079__auto__.call(null);
(statearr_48942[(6)] = c__38078__auto___48943);

return statearr_48942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto___48943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__21935__auto__ = (((p == null))?null:p);
var m__21936__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__21935__auto__)]);
if(!((m__21936__auto__ == null))){
return m__21936__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__21936__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__21936__auto____$1 == null))){
return m__21936__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__21935__auto__ = (((p == null))?null:p);
var m__21936__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__21935__auto__)]);
if(!((m__21936__auto__ == null))){
return m__21936__auto__.call(null,p,v,ch);
} else {
var m__21936__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__21936__auto____$1 == null))){
return m__21936__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48996 = arguments.length;
switch (G__48996) {
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
var x__21935__auto__ = (((p == null))?null:p);
var m__21936__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21935__auto__)]);
if(!((m__21936__auto__ == null))){
return m__21936__auto__.call(null,p);
} else {
var m__21936__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21936__auto____$1 == null))){
return m__21936__auto____$1.call(null,p);
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
var x__21935__auto__ = (((p == null))?null:p);
var m__21936__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__21935__auto__)]);
if(!((m__21936__auto__ == null))){
return m__21936__auto__.call(null,p,v);
} else {
var m__21936__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__21936__auto____$1 == null))){
return m__21936__auto____$1.call(null,p,v);
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
var G__49003 = arguments.length;
switch (G__49003) {
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
var or__21202__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21202__auto__)){
return or__21202__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21202__auto__,mults){
return (function (p1__49001_SHARP_){
if(cljs.core.truth_(p1__49001_SHARP_.call(null,topic))){
return p1__49001_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__49001_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21202__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async49004 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49004 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49005){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49005 = meta49005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_49006,meta49005__$1){
var self__ = this;
var _49006__$1 = this;
return (new cljs.core.async.t_cljs$core$async49004(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49005__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49004.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_49006){
var self__ = this;
var _49006__$1 = this;
return self__.meta49005;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49004.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49004.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49004.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49004.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49004.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async49004.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49004.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49004.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49005","meta49005",-1186872855,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49004.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49004";

cljs.core.async.t_cljs$core$async49004.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__21873__auto__,writer__21874__auto__,opt__21875__auto__){
return cljs.core._write.call(null,writer__21874__auto__,"cljs.core.async/t_cljs$core$async49004");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async49004 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async49004(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49005){
return (new cljs.core.async.t_cljs$core$async49004(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49005));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async49004(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38078__auto___49142 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto___49142,mults,ensure_mult,p){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto___49142,mults,ensure_mult,p){
return (function (state_49080){
var state_val_49081 = (state_49080[(1)]);
if((state_val_49081 === (7))){
var inst_49076 = (state_49080[(2)]);
var state_49080__$1 = state_49080;
var statearr_49082_49143 = state_49080__$1;
(statearr_49082_49143[(2)] = inst_49076);

(statearr_49082_49143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49081 === (20))){
var state_49080__$1 = state_49080;
var statearr_49083_49144 = state_49080__$1;
(statearr_49083_49144[(2)] = null);

(statearr_49083_49144[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49081 === (1))){
var state_49080__$1 = state_49080;
var statearr_49084_49145 = state_49080__$1;
(statearr_49084_49145[(2)] = null);

(statearr_49084_49145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49081 === (24))){
var inst_49058 = (state_49080[(7)]);
var inst_49068 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_49058);
var state_49080__$1 = state_49080;
var statearr_49085_49146 = state_49080__$1;
(statearr_49085_49146[(2)] = inst_49068);

(statearr_49085_49146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49081 === (4))){
var inst_49010 = (state_49080[(8)]);
var inst_49010__$1 = (state_49080[(2)]);
var inst_49011 = (inst_49010__$1 == null);
var state_49080__$1 = (function (){var statearr_49086 = state_49080;
(statearr_49086[(8)] = inst_49010__$1);

return statearr_49086;
})();
if(cljs.core.truth_(inst_49011)){
var statearr_49087_49147 = state_49080__$1;
(statearr_49087_49147[(1)] = (5));

} else {
var statearr_49088_49148 = state_49080__$1;
(statearr_49088_49148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49081 === (15))){
var inst_49052 = (state_49080[(2)]);
var state_49080__$1 = state_49080;
var statearr_49089_49149 = state_49080__$1;
(statearr_49089_49149[(2)] = inst_49052);

(statearr_49089_49149[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49081 === (21))){
var inst_49073 = (state_49080[(2)]);
var state_49080__$1 = (function (){var statearr_49090 = state_49080;
(statearr_49090[(9)] = inst_49073);

return statearr_49090;
})();
var statearr_49091_49150 = state_49080__$1;
(statearr_49091_49150[(2)] = null);

(statearr_49091_49150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49081 === (13))){
var inst_49034 = (state_49080[(10)]);
var inst_49036 = cljs.core.chunked_seq_QMARK_.call(null,inst_49034);
var state_49080__$1 = state_49080;
if(inst_49036){
var statearr_49094_49153 = state_49080__$1;
(statearr_49094_49153[(1)] = (16));

} else {
var statearr_49095_49154 = state_49080__$1;
(statearr_49095_49154[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49081 === (22))){
var inst_49064 = (state_49080[(2)]);
var state_49080__$1 = state_49080;
if(cljs.core.truth_(inst_49064)){
var statearr_49096_49155 = state_49080__$1;
(statearr_49096_49155[(1)] = (23));

} else {
var statearr_49097_49158 = state_49080__$1;
(statearr_49097_49158[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49081 === (6))){
var inst_49060 = (state_49080[(11)]);
var inst_49010 = (state_49080[(8)]);
var inst_49058 = (state_49080[(7)]);
var inst_49058__$1 = topic_fn.call(null,inst_49010);
var inst_49059 = cljs.core.deref.call(null,mults);
var inst_49060__$1 = cljs.core.get.call(null,inst_49059,inst_49058__$1);
var state_49080__$1 = (function (){var statearr_49098 = state_49080;
(statearr_49098[(11)] = inst_49060__$1);

(statearr_49098[(7)] = inst_49058__$1);

return statearr_49098;
})();
if(cljs.core.truth_(inst_49060__$1)){
var statearr_49099_49160 = state_49080__$1;
(statearr_49099_49160[(1)] = (19));

} else {
var statearr_49100_49161 = state_49080__$1;
(statearr_49100_49161[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49081 === (25))){
var inst_49070 = (state_49080[(2)]);
var state_49080__$1 = state_49080;
var statearr_49101_49164 = state_49080__$1;
(statearr_49101_49164[(2)] = inst_49070);

(statearr_49101_49164[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49081 === (17))){
var inst_49034 = (state_49080[(10)]);
var inst_49043 = cljs.core.first.call(null,inst_49034);
var inst_49044 = cljs.core.async.muxch_STAR_.call(null,inst_49043);
var inst_49045 = cljs.core.async.close_BANG_.call(null,inst_49044);
var inst_49046 = cljs.core.next.call(null,inst_49034);
var inst_49020 = inst_49046;
var inst_49021 = null;
var inst_49022 = (0);
var inst_49023 = (0);
var state_49080__$1 = (function (){var statearr_49102 = state_49080;
(statearr_49102[(12)] = inst_49023);

(statearr_49102[(13)] = inst_49021);

(statearr_49102[(14)] = inst_49022);

(statearr_49102[(15)] = inst_49045);

(statearr_49102[(16)] = inst_49020);

return statearr_49102;
})();
var statearr_49103_49166 = state_49080__$1;
(statearr_49103_49166[(2)] = null);

(statearr_49103_49166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49081 === (3))){
var inst_49078 = (state_49080[(2)]);
var state_49080__$1 = state_49080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49080__$1,inst_49078);
} else {
if((state_val_49081 === (12))){
var inst_49054 = (state_49080[(2)]);
var state_49080__$1 = state_49080;
var statearr_49105_49167 = state_49080__$1;
(statearr_49105_49167[(2)] = inst_49054);

(statearr_49105_49167[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49081 === (2))){
var state_49080__$1 = state_49080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49080__$1,(4),ch);
} else {
if((state_val_49081 === (23))){
var state_49080__$1 = state_49080;
var statearr_49106_49168 = state_49080__$1;
(statearr_49106_49168[(2)] = null);

(statearr_49106_49168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49081 === (19))){
var inst_49060 = (state_49080[(11)]);
var inst_49010 = (state_49080[(8)]);
var inst_49062 = cljs.core.async.muxch_STAR_.call(null,inst_49060);
var state_49080__$1 = state_49080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49080__$1,(22),inst_49062,inst_49010);
} else {
if((state_val_49081 === (11))){
var inst_49034 = (state_49080[(10)]);
var inst_49020 = (state_49080[(16)]);
var inst_49034__$1 = cljs.core.seq.call(null,inst_49020);
var state_49080__$1 = (function (){var statearr_49109 = state_49080;
(statearr_49109[(10)] = inst_49034__$1);

return statearr_49109;
})();
if(inst_49034__$1){
var statearr_49110_49169 = state_49080__$1;
(statearr_49110_49169[(1)] = (13));

} else {
var statearr_49111_49170 = state_49080__$1;
(statearr_49111_49170[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49081 === (9))){
var inst_49056 = (state_49080[(2)]);
var state_49080__$1 = state_49080;
var statearr_49112_49171 = state_49080__$1;
(statearr_49112_49171[(2)] = inst_49056);

(statearr_49112_49171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49081 === (5))){
var inst_49017 = cljs.core.deref.call(null,mults);
var inst_49018 = cljs.core.vals.call(null,inst_49017);
var inst_49019 = cljs.core.seq.call(null,inst_49018);
var inst_49020 = inst_49019;
var inst_49021 = null;
var inst_49022 = (0);
var inst_49023 = (0);
var state_49080__$1 = (function (){var statearr_49113 = state_49080;
(statearr_49113[(12)] = inst_49023);

(statearr_49113[(13)] = inst_49021);

(statearr_49113[(14)] = inst_49022);

(statearr_49113[(16)] = inst_49020);

return statearr_49113;
})();
var statearr_49114_49172 = state_49080__$1;
(statearr_49114_49172[(2)] = null);

(statearr_49114_49172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49081 === (14))){
var state_49080__$1 = state_49080;
var statearr_49118_49173 = state_49080__$1;
(statearr_49118_49173[(2)] = null);

(statearr_49118_49173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49081 === (16))){
var inst_49034 = (state_49080[(10)]);
var inst_49038 = cljs.core.chunk_first.call(null,inst_49034);
var inst_49039 = cljs.core.chunk_rest.call(null,inst_49034);
var inst_49040 = cljs.core.count.call(null,inst_49038);
var inst_49020 = inst_49039;
var inst_49021 = inst_49038;
var inst_49022 = inst_49040;
var inst_49023 = (0);
var state_49080__$1 = (function (){var statearr_49119 = state_49080;
(statearr_49119[(12)] = inst_49023);

(statearr_49119[(13)] = inst_49021);

(statearr_49119[(14)] = inst_49022);

(statearr_49119[(16)] = inst_49020);

return statearr_49119;
})();
var statearr_49123_49176 = state_49080__$1;
(statearr_49123_49176[(2)] = null);

(statearr_49123_49176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49081 === (10))){
var inst_49023 = (state_49080[(12)]);
var inst_49021 = (state_49080[(13)]);
var inst_49022 = (state_49080[(14)]);
var inst_49020 = (state_49080[(16)]);
var inst_49028 = cljs.core._nth.call(null,inst_49021,inst_49023);
var inst_49029 = cljs.core.async.muxch_STAR_.call(null,inst_49028);
var inst_49030 = cljs.core.async.close_BANG_.call(null,inst_49029);
var inst_49031 = (inst_49023 + (1));
var tmp49115 = inst_49021;
var tmp49116 = inst_49022;
var tmp49117 = inst_49020;
var inst_49020__$1 = tmp49117;
var inst_49021__$1 = tmp49115;
var inst_49022__$1 = tmp49116;
var inst_49023__$1 = inst_49031;
var state_49080__$1 = (function (){var statearr_49125 = state_49080;
(statearr_49125[(12)] = inst_49023__$1);

(statearr_49125[(13)] = inst_49021__$1);

(statearr_49125[(14)] = inst_49022__$1);

(statearr_49125[(17)] = inst_49030);

(statearr_49125[(16)] = inst_49020__$1);

return statearr_49125;
})();
var statearr_49126_49178 = state_49080__$1;
(statearr_49126_49178[(2)] = null);

(statearr_49126_49178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49081 === (18))){
var inst_49049 = (state_49080[(2)]);
var state_49080__$1 = state_49080;
var statearr_49127_49179 = state_49080__$1;
(statearr_49127_49179[(2)] = inst_49049);

(statearr_49127_49179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49081 === (8))){
var inst_49023 = (state_49080[(12)]);
var inst_49022 = (state_49080[(14)]);
var inst_49025 = (inst_49023 < inst_49022);
var inst_49026 = inst_49025;
var state_49080__$1 = state_49080;
if(cljs.core.truth_(inst_49026)){
var statearr_49128_49180 = state_49080__$1;
(statearr_49128_49180[(1)] = (10));

} else {
var statearr_49129_49181 = state_49080__$1;
(statearr_49129_49181[(1)] = (11));

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
});})(c__38078__auto___49142,mults,ensure_mult,p))
;
return ((function (switch__37921__auto__,c__38078__auto___49142,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37922__auto__ = null;
var cljs$core$async$state_machine__37922__auto____0 = (function (){
var statearr_49130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49130[(0)] = cljs$core$async$state_machine__37922__auto__);

(statearr_49130[(1)] = (1));

return statearr_49130;
});
var cljs$core$async$state_machine__37922__auto____1 = (function (state_49080){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_49080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e49131){if((e49131 instanceof Object)){
var ex__37925__auto__ = e49131;
var statearr_49132_49182 = state_49080;
(statearr_49132_49182[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49183 = state_49080;
state_49080 = G__49183;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs$core$async$state_machine__37922__auto__ = function(state_49080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37922__auto____1.call(this,state_49080);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37922__auto____0;
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37922__auto____1;
return cljs$core$async$state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto___49142,mults,ensure_mult,p))
})();
var state__38080__auto__ = (function (){var statearr_49136 = f__38079__auto__.call(null);
(statearr_49136[(6)] = c__38078__auto___49142);

return statearr_49136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto___49142,mults,ensure_mult,p))
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
var G__49185 = arguments.length;
switch (G__49185) {
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
var G__49188 = arguments.length;
switch (G__49188) {
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
var G__49191 = arguments.length;
switch (G__49191) {
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
var c__38078__auto___49258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto___49258,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto___49258,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_49230){
var state_val_49231 = (state_49230[(1)]);
if((state_val_49231 === (7))){
var state_49230__$1 = state_49230;
var statearr_49232_49259 = state_49230__$1;
(statearr_49232_49259[(2)] = null);

(statearr_49232_49259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (1))){
var state_49230__$1 = state_49230;
var statearr_49233_49260 = state_49230__$1;
(statearr_49233_49260[(2)] = null);

(statearr_49233_49260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (4))){
var inst_49194 = (state_49230[(7)]);
var inst_49196 = (inst_49194 < cnt);
var state_49230__$1 = state_49230;
if(cljs.core.truth_(inst_49196)){
var statearr_49234_49261 = state_49230__$1;
(statearr_49234_49261[(1)] = (6));

} else {
var statearr_49235_49262 = state_49230__$1;
(statearr_49235_49262[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (15))){
var inst_49226 = (state_49230[(2)]);
var state_49230__$1 = state_49230;
var statearr_49236_49263 = state_49230__$1;
(statearr_49236_49263[(2)] = inst_49226);

(statearr_49236_49263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (13))){
var inst_49219 = cljs.core.async.close_BANG_.call(null,out);
var state_49230__$1 = state_49230;
var statearr_49237_49264 = state_49230__$1;
(statearr_49237_49264[(2)] = inst_49219);

(statearr_49237_49264[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (6))){
var state_49230__$1 = state_49230;
var statearr_49238_49265 = state_49230__$1;
(statearr_49238_49265[(2)] = null);

(statearr_49238_49265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (3))){
var inst_49228 = (state_49230[(2)]);
var state_49230__$1 = state_49230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49230__$1,inst_49228);
} else {
if((state_val_49231 === (12))){
var inst_49216 = (state_49230[(8)]);
var inst_49216__$1 = (state_49230[(2)]);
var inst_49217 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_49216__$1);
var state_49230__$1 = (function (){var statearr_49239 = state_49230;
(statearr_49239[(8)] = inst_49216__$1);

return statearr_49239;
})();
if(cljs.core.truth_(inst_49217)){
var statearr_49240_49266 = state_49230__$1;
(statearr_49240_49266[(1)] = (13));

} else {
var statearr_49241_49267 = state_49230__$1;
(statearr_49241_49267[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (2))){
var inst_49193 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_49194 = (0);
var state_49230__$1 = (function (){var statearr_49242 = state_49230;
(statearr_49242[(9)] = inst_49193);

(statearr_49242[(7)] = inst_49194);

return statearr_49242;
})();
var statearr_49243_49268 = state_49230__$1;
(statearr_49243_49268[(2)] = null);

(statearr_49243_49268[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (11))){
var inst_49194 = (state_49230[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49230,(10),Object,null,(9));
var inst_49203 = chs__$1.call(null,inst_49194);
var inst_49204 = done.call(null,inst_49194);
var inst_49205 = cljs.core.async.take_BANG_.call(null,inst_49203,inst_49204);
var state_49230__$1 = state_49230;
var statearr_49244_49269 = state_49230__$1;
(statearr_49244_49269[(2)] = inst_49205);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49230__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (9))){
var inst_49194 = (state_49230[(7)]);
var inst_49207 = (state_49230[(2)]);
var inst_49208 = (inst_49194 + (1));
var inst_49194__$1 = inst_49208;
var state_49230__$1 = (function (){var statearr_49245 = state_49230;
(statearr_49245[(7)] = inst_49194__$1);

(statearr_49245[(10)] = inst_49207);

return statearr_49245;
})();
var statearr_49246_49270 = state_49230__$1;
(statearr_49246_49270[(2)] = null);

(statearr_49246_49270[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (5))){
var inst_49214 = (state_49230[(2)]);
var state_49230__$1 = (function (){var statearr_49247 = state_49230;
(statearr_49247[(11)] = inst_49214);

return statearr_49247;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49230__$1,(12),dchan);
} else {
if((state_val_49231 === (14))){
var inst_49216 = (state_49230[(8)]);
var inst_49221 = cljs.core.apply.call(null,f,inst_49216);
var state_49230__$1 = state_49230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49230__$1,(16),out,inst_49221);
} else {
if((state_val_49231 === (16))){
var inst_49223 = (state_49230[(2)]);
var state_49230__$1 = (function (){var statearr_49248 = state_49230;
(statearr_49248[(12)] = inst_49223);

return statearr_49248;
})();
var statearr_49249_49271 = state_49230__$1;
(statearr_49249_49271[(2)] = null);

(statearr_49249_49271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (10))){
var inst_49198 = (state_49230[(2)]);
var inst_49199 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_49230__$1 = (function (){var statearr_49250 = state_49230;
(statearr_49250[(13)] = inst_49198);

return statearr_49250;
})();
var statearr_49251_49272 = state_49230__$1;
(statearr_49251_49272[(2)] = inst_49199);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49230__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49231 === (8))){
var inst_49212 = (state_49230[(2)]);
var state_49230__$1 = state_49230;
var statearr_49252_49273 = state_49230__$1;
(statearr_49252_49273[(2)] = inst_49212);

(statearr_49252_49273[(1)] = (5));


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
});})(c__38078__auto___49258,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37921__auto__,c__38078__auto___49258,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37922__auto__ = null;
var cljs$core$async$state_machine__37922__auto____0 = (function (){
var statearr_49253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49253[(0)] = cljs$core$async$state_machine__37922__auto__);

(statearr_49253[(1)] = (1));

return statearr_49253;
});
var cljs$core$async$state_machine__37922__auto____1 = (function (state_49230){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_49230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e49254){if((e49254 instanceof Object)){
var ex__37925__auto__ = e49254;
var statearr_49255_49274 = state_49230;
(statearr_49255_49274[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49275 = state_49230;
state_49230 = G__49275;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs$core$async$state_machine__37922__auto__ = function(state_49230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37922__auto____1.call(this,state_49230);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37922__auto____0;
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37922__auto____1;
return cljs$core$async$state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto___49258,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38080__auto__ = (function (){var statearr_49256 = f__38079__auto__.call(null);
(statearr_49256[(6)] = c__38078__auto___49258);

return statearr_49256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto___49258,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__49278 = arguments.length;
switch (G__49278) {
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
var c__38078__auto___49332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto___49332,out){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto___49332,out){
return (function (state_49310){
var state_val_49311 = (state_49310[(1)]);
if((state_val_49311 === (7))){
var inst_49289 = (state_49310[(7)]);
var inst_49290 = (state_49310[(8)]);
var inst_49289__$1 = (state_49310[(2)]);
var inst_49290__$1 = cljs.core.nth.call(null,inst_49289__$1,(0),null);
var inst_49291 = cljs.core.nth.call(null,inst_49289__$1,(1),null);
var inst_49292 = (inst_49290__$1 == null);
var state_49310__$1 = (function (){var statearr_49312 = state_49310;
(statearr_49312[(9)] = inst_49291);

(statearr_49312[(7)] = inst_49289__$1);

(statearr_49312[(8)] = inst_49290__$1);

return statearr_49312;
})();
if(cljs.core.truth_(inst_49292)){
var statearr_49313_49333 = state_49310__$1;
(statearr_49313_49333[(1)] = (8));

} else {
var statearr_49314_49334 = state_49310__$1;
(statearr_49314_49334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49311 === (1))){
var inst_49279 = cljs.core.vec.call(null,chs);
var inst_49280 = inst_49279;
var state_49310__$1 = (function (){var statearr_49315 = state_49310;
(statearr_49315[(10)] = inst_49280);

return statearr_49315;
})();
var statearr_49316_49335 = state_49310__$1;
(statearr_49316_49335[(2)] = null);

(statearr_49316_49335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49311 === (4))){
var inst_49280 = (state_49310[(10)]);
var state_49310__$1 = state_49310;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49310__$1,(7),inst_49280);
} else {
if((state_val_49311 === (6))){
var inst_49306 = (state_49310[(2)]);
var state_49310__$1 = state_49310;
var statearr_49317_49336 = state_49310__$1;
(statearr_49317_49336[(2)] = inst_49306);

(statearr_49317_49336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49311 === (3))){
var inst_49308 = (state_49310[(2)]);
var state_49310__$1 = state_49310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49310__$1,inst_49308);
} else {
if((state_val_49311 === (2))){
var inst_49280 = (state_49310[(10)]);
var inst_49282 = cljs.core.count.call(null,inst_49280);
var inst_49283 = (inst_49282 > (0));
var state_49310__$1 = state_49310;
if(cljs.core.truth_(inst_49283)){
var statearr_49319_49337 = state_49310__$1;
(statearr_49319_49337[(1)] = (4));

} else {
var statearr_49320_49338 = state_49310__$1;
(statearr_49320_49338[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49311 === (11))){
var inst_49280 = (state_49310[(10)]);
var inst_49299 = (state_49310[(2)]);
var tmp49318 = inst_49280;
var inst_49280__$1 = tmp49318;
var state_49310__$1 = (function (){var statearr_49321 = state_49310;
(statearr_49321[(10)] = inst_49280__$1);

(statearr_49321[(11)] = inst_49299);

return statearr_49321;
})();
var statearr_49322_49339 = state_49310__$1;
(statearr_49322_49339[(2)] = null);

(statearr_49322_49339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49311 === (9))){
var inst_49290 = (state_49310[(8)]);
var state_49310__$1 = state_49310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49310__$1,(11),out,inst_49290);
} else {
if((state_val_49311 === (5))){
var inst_49304 = cljs.core.async.close_BANG_.call(null,out);
var state_49310__$1 = state_49310;
var statearr_49323_49340 = state_49310__$1;
(statearr_49323_49340[(2)] = inst_49304);

(statearr_49323_49340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49311 === (10))){
var inst_49302 = (state_49310[(2)]);
var state_49310__$1 = state_49310;
var statearr_49324_49341 = state_49310__$1;
(statearr_49324_49341[(2)] = inst_49302);

(statearr_49324_49341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49311 === (8))){
var inst_49291 = (state_49310[(9)]);
var inst_49289 = (state_49310[(7)]);
var inst_49290 = (state_49310[(8)]);
var inst_49280 = (state_49310[(10)]);
var inst_49294 = (function (){var cs = inst_49280;
var vec__49285 = inst_49289;
var v = inst_49290;
var c = inst_49291;
return ((function (cs,vec__49285,v,c,inst_49291,inst_49289,inst_49290,inst_49280,state_val_49311,c__38078__auto___49332,out){
return (function (p1__49276_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__49276_SHARP_);
});
;})(cs,vec__49285,v,c,inst_49291,inst_49289,inst_49290,inst_49280,state_val_49311,c__38078__auto___49332,out))
})();
var inst_49295 = cljs.core.filterv.call(null,inst_49294,inst_49280);
var inst_49280__$1 = inst_49295;
var state_49310__$1 = (function (){var statearr_49325 = state_49310;
(statearr_49325[(10)] = inst_49280__$1);

return statearr_49325;
})();
var statearr_49326_49342 = state_49310__$1;
(statearr_49326_49342[(2)] = null);

(statearr_49326_49342[(1)] = (2));


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
});})(c__38078__auto___49332,out))
;
return ((function (switch__37921__auto__,c__38078__auto___49332,out){
return (function() {
var cljs$core$async$state_machine__37922__auto__ = null;
var cljs$core$async$state_machine__37922__auto____0 = (function (){
var statearr_49327 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49327[(0)] = cljs$core$async$state_machine__37922__auto__);

(statearr_49327[(1)] = (1));

return statearr_49327;
});
var cljs$core$async$state_machine__37922__auto____1 = (function (state_49310){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_49310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e49328){if((e49328 instanceof Object)){
var ex__37925__auto__ = e49328;
var statearr_49329_49343 = state_49310;
(statearr_49329_49343[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49344 = state_49310;
state_49310 = G__49344;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs$core$async$state_machine__37922__auto__ = function(state_49310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37922__auto____1.call(this,state_49310);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37922__auto____0;
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37922__auto____1;
return cljs$core$async$state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto___49332,out))
})();
var state__38080__auto__ = (function (){var statearr_49330 = f__38079__auto__.call(null);
(statearr_49330[(6)] = c__38078__auto___49332);

return statearr_49330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto___49332,out))
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
var G__49346 = arguments.length;
switch (G__49346) {
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
var c__38078__auto___49391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto___49391,out){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto___49391,out){
return (function (state_49370){
var state_val_49371 = (state_49370[(1)]);
if((state_val_49371 === (7))){
var inst_49352 = (state_49370[(7)]);
var inst_49352__$1 = (state_49370[(2)]);
var inst_49353 = (inst_49352__$1 == null);
var inst_49354 = cljs.core.not.call(null,inst_49353);
var state_49370__$1 = (function (){var statearr_49372 = state_49370;
(statearr_49372[(7)] = inst_49352__$1);

return statearr_49372;
})();
if(inst_49354){
var statearr_49373_49392 = state_49370__$1;
(statearr_49373_49392[(1)] = (8));

} else {
var statearr_49374_49393 = state_49370__$1;
(statearr_49374_49393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49371 === (1))){
var inst_49347 = (0);
var state_49370__$1 = (function (){var statearr_49375 = state_49370;
(statearr_49375[(8)] = inst_49347);

return statearr_49375;
})();
var statearr_49376_49394 = state_49370__$1;
(statearr_49376_49394[(2)] = null);

(statearr_49376_49394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49371 === (4))){
var state_49370__$1 = state_49370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49370__$1,(7),ch);
} else {
if((state_val_49371 === (6))){
var inst_49365 = (state_49370[(2)]);
var state_49370__$1 = state_49370;
var statearr_49377_49395 = state_49370__$1;
(statearr_49377_49395[(2)] = inst_49365);

(statearr_49377_49395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49371 === (3))){
var inst_49367 = (state_49370[(2)]);
var inst_49368 = cljs.core.async.close_BANG_.call(null,out);
var state_49370__$1 = (function (){var statearr_49378 = state_49370;
(statearr_49378[(9)] = inst_49367);

return statearr_49378;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49370__$1,inst_49368);
} else {
if((state_val_49371 === (2))){
var inst_49347 = (state_49370[(8)]);
var inst_49349 = (inst_49347 < n);
var state_49370__$1 = state_49370;
if(cljs.core.truth_(inst_49349)){
var statearr_49379_49396 = state_49370__$1;
(statearr_49379_49396[(1)] = (4));

} else {
var statearr_49380_49397 = state_49370__$1;
(statearr_49380_49397[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49371 === (11))){
var inst_49347 = (state_49370[(8)]);
var inst_49357 = (state_49370[(2)]);
var inst_49358 = (inst_49347 + (1));
var inst_49347__$1 = inst_49358;
var state_49370__$1 = (function (){var statearr_49381 = state_49370;
(statearr_49381[(10)] = inst_49357);

(statearr_49381[(8)] = inst_49347__$1);

return statearr_49381;
})();
var statearr_49382_49398 = state_49370__$1;
(statearr_49382_49398[(2)] = null);

(statearr_49382_49398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49371 === (9))){
var state_49370__$1 = state_49370;
var statearr_49383_49399 = state_49370__$1;
(statearr_49383_49399[(2)] = null);

(statearr_49383_49399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49371 === (5))){
var state_49370__$1 = state_49370;
var statearr_49384_49400 = state_49370__$1;
(statearr_49384_49400[(2)] = null);

(statearr_49384_49400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49371 === (10))){
var inst_49362 = (state_49370[(2)]);
var state_49370__$1 = state_49370;
var statearr_49385_49401 = state_49370__$1;
(statearr_49385_49401[(2)] = inst_49362);

(statearr_49385_49401[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49371 === (8))){
var inst_49352 = (state_49370[(7)]);
var state_49370__$1 = state_49370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49370__$1,(11),out,inst_49352);
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
});})(c__38078__auto___49391,out))
;
return ((function (switch__37921__auto__,c__38078__auto___49391,out){
return (function() {
var cljs$core$async$state_machine__37922__auto__ = null;
var cljs$core$async$state_machine__37922__auto____0 = (function (){
var statearr_49386 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49386[(0)] = cljs$core$async$state_machine__37922__auto__);

(statearr_49386[(1)] = (1));

return statearr_49386;
});
var cljs$core$async$state_machine__37922__auto____1 = (function (state_49370){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_49370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e49387){if((e49387 instanceof Object)){
var ex__37925__auto__ = e49387;
var statearr_49388_49402 = state_49370;
(statearr_49388_49402[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49403 = state_49370;
state_49370 = G__49403;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs$core$async$state_machine__37922__auto__ = function(state_49370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37922__auto____1.call(this,state_49370);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37922__auto____0;
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37922__auto____1;
return cljs$core$async$state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto___49391,out))
})();
var state__38080__auto__ = (function (){var statearr_49389 = f__38079__auto__.call(null);
(statearr_49389[(6)] = c__38078__auto___49391);

return statearr_49389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto___49391,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49405 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49405 = (function (f,ch,meta49406){
this.f = f;
this.ch = ch;
this.meta49406 = meta49406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49407,meta49406__$1){
var self__ = this;
var _49407__$1 = this;
return (new cljs.core.async.t_cljs$core$async49405(self__.f,self__.ch,meta49406__$1));
});

cljs.core.async.t_cljs$core$async49405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49407){
var self__ = this;
var _49407__$1 = this;
return self__.meta49406;
});

cljs.core.async.t_cljs$core$async49405.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49405.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49405.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49405.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49405.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async49408 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49408 = (function (f,ch,meta49406,_,fn1,meta49409){
this.f = f;
this.ch = ch;
this.meta49406 = meta49406;
this._ = _;
this.fn1 = fn1;
this.meta49409 = meta49409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_49410,meta49409__$1){
var self__ = this;
var _49410__$1 = this;
return (new cljs.core.async.t_cljs$core$async49408(self__.f,self__.ch,self__.meta49406,self__._,self__.fn1,meta49409__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async49408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_49410){
var self__ = this;
var _49410__$1 = this;
return self__.meta49409;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49408.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49408.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49408.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49408.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__49404_SHARP_){
return f1.call(null,(((p1__49404_SHARP_ == null))?null:self__.f.call(null,p1__49404_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async49408.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49406","meta49406",2130924354,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49405","cljs.core.async/t_cljs$core$async49405",402962411,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49409","meta49409",-1375765597,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49408.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49408";

cljs.core.async.t_cljs$core$async49408.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__21873__auto__,writer__21874__auto__,opt__21875__auto__){
return cljs.core._write.call(null,writer__21874__auto__,"cljs.core.async/t_cljs$core$async49408");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async49408 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49408(f__$1,ch__$1,meta49406__$1,___$2,fn1__$1,meta49409){
return (new cljs.core.async.t_cljs$core$async49408(f__$1,ch__$1,meta49406__$1,___$2,fn1__$1,meta49409));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async49408(self__.f,self__.ch,self__.meta49406,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21190__auto__ = ret;
if(cljs.core.truth_(and__21190__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21190__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async49405.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49405.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async49405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49406","meta49406",2130924354,null)], null);
});

cljs.core.async.t_cljs$core$async49405.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49405";

cljs.core.async.t_cljs$core$async49405.cljs$lang$ctorPrWriter = (function (this__21873__auto__,writer__21874__auto__,opt__21875__auto__){
return cljs.core._write.call(null,writer__21874__auto__,"cljs.core.async/t_cljs$core$async49405");
});

cljs.core.async.__GT_t_cljs$core$async49405 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49405(f__$1,ch__$1,meta49406){
return (new cljs.core.async.t_cljs$core$async49405(f__$1,ch__$1,meta49406));
});

}

return (new cljs.core.async.t_cljs$core$async49405(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49411 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49411 = (function (f,ch,meta49412){
this.f = f;
this.ch = ch;
this.meta49412 = meta49412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49413,meta49412__$1){
var self__ = this;
var _49413__$1 = this;
return (new cljs.core.async.t_cljs$core$async49411(self__.f,self__.ch,meta49412__$1));
});

cljs.core.async.t_cljs$core$async49411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49413){
var self__ = this;
var _49413__$1 = this;
return self__.meta49412;
});

cljs.core.async.t_cljs$core$async49411.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49411.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49411.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49411.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49411.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49411.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async49411.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49412","meta49412",-803916956,null)], null);
});

cljs.core.async.t_cljs$core$async49411.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49411";

cljs.core.async.t_cljs$core$async49411.cljs$lang$ctorPrWriter = (function (this__21873__auto__,writer__21874__auto__,opt__21875__auto__){
return cljs.core._write.call(null,writer__21874__auto__,"cljs.core.async/t_cljs$core$async49411");
});

cljs.core.async.__GT_t_cljs$core$async49411 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49411(f__$1,ch__$1,meta49412){
return (new cljs.core.async.t_cljs$core$async49411(f__$1,ch__$1,meta49412));
});

}

return (new cljs.core.async.t_cljs$core$async49411(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async49414 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49414 = (function (p,ch,meta49415){
this.p = p;
this.ch = ch;
this.meta49415 = meta49415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49416,meta49415__$1){
var self__ = this;
var _49416__$1 = this;
return (new cljs.core.async.t_cljs$core$async49414(self__.p,self__.ch,meta49415__$1));
});

cljs.core.async.t_cljs$core$async49414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49416){
var self__ = this;
var _49416__$1 = this;
return self__.meta49415;
});

cljs.core.async.t_cljs$core$async49414.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49414.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49414.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49414.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49414.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49414.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49414.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async49414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49415","meta49415",-459733496,null)], null);
});

cljs.core.async.t_cljs$core$async49414.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49414";

cljs.core.async.t_cljs$core$async49414.cljs$lang$ctorPrWriter = (function (this__21873__auto__,writer__21874__auto__,opt__21875__auto__){
return cljs.core._write.call(null,writer__21874__auto__,"cljs.core.async/t_cljs$core$async49414");
});

cljs.core.async.__GT_t_cljs$core$async49414 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49414(p__$1,ch__$1,meta49415){
return (new cljs.core.async.t_cljs$core$async49414(p__$1,ch__$1,meta49415));
});

}

return (new cljs.core.async.t_cljs$core$async49414(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__49418 = arguments.length;
switch (G__49418) {
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
var c__38078__auto___49458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto___49458,out){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto___49458,out){
return (function (state_49439){
var state_val_49440 = (state_49439[(1)]);
if((state_val_49440 === (7))){
var inst_49435 = (state_49439[(2)]);
var state_49439__$1 = state_49439;
var statearr_49441_49459 = state_49439__$1;
(statearr_49441_49459[(2)] = inst_49435);

(statearr_49441_49459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49440 === (1))){
var state_49439__$1 = state_49439;
var statearr_49442_49460 = state_49439__$1;
(statearr_49442_49460[(2)] = null);

(statearr_49442_49460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49440 === (4))){
var inst_49421 = (state_49439[(7)]);
var inst_49421__$1 = (state_49439[(2)]);
var inst_49422 = (inst_49421__$1 == null);
var state_49439__$1 = (function (){var statearr_49443 = state_49439;
(statearr_49443[(7)] = inst_49421__$1);

return statearr_49443;
})();
if(cljs.core.truth_(inst_49422)){
var statearr_49444_49461 = state_49439__$1;
(statearr_49444_49461[(1)] = (5));

} else {
var statearr_49445_49462 = state_49439__$1;
(statearr_49445_49462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49440 === (6))){
var inst_49421 = (state_49439[(7)]);
var inst_49426 = p.call(null,inst_49421);
var state_49439__$1 = state_49439;
if(cljs.core.truth_(inst_49426)){
var statearr_49446_49463 = state_49439__$1;
(statearr_49446_49463[(1)] = (8));

} else {
var statearr_49447_49464 = state_49439__$1;
(statearr_49447_49464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49440 === (3))){
var inst_49437 = (state_49439[(2)]);
var state_49439__$1 = state_49439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49439__$1,inst_49437);
} else {
if((state_val_49440 === (2))){
var state_49439__$1 = state_49439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49439__$1,(4),ch);
} else {
if((state_val_49440 === (11))){
var inst_49429 = (state_49439[(2)]);
var state_49439__$1 = state_49439;
var statearr_49448_49465 = state_49439__$1;
(statearr_49448_49465[(2)] = inst_49429);

(statearr_49448_49465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49440 === (9))){
var state_49439__$1 = state_49439;
var statearr_49449_49466 = state_49439__$1;
(statearr_49449_49466[(2)] = null);

(statearr_49449_49466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49440 === (5))){
var inst_49424 = cljs.core.async.close_BANG_.call(null,out);
var state_49439__$1 = state_49439;
var statearr_49450_49467 = state_49439__$1;
(statearr_49450_49467[(2)] = inst_49424);

(statearr_49450_49467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49440 === (10))){
var inst_49432 = (state_49439[(2)]);
var state_49439__$1 = (function (){var statearr_49451 = state_49439;
(statearr_49451[(8)] = inst_49432);

return statearr_49451;
})();
var statearr_49452_49468 = state_49439__$1;
(statearr_49452_49468[(2)] = null);

(statearr_49452_49468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49440 === (8))){
var inst_49421 = (state_49439[(7)]);
var state_49439__$1 = state_49439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49439__$1,(11),out,inst_49421);
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
});})(c__38078__auto___49458,out))
;
return ((function (switch__37921__auto__,c__38078__auto___49458,out){
return (function() {
var cljs$core$async$state_machine__37922__auto__ = null;
var cljs$core$async$state_machine__37922__auto____0 = (function (){
var statearr_49453 = [null,null,null,null,null,null,null,null,null];
(statearr_49453[(0)] = cljs$core$async$state_machine__37922__auto__);

(statearr_49453[(1)] = (1));

return statearr_49453;
});
var cljs$core$async$state_machine__37922__auto____1 = (function (state_49439){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_49439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e49454){if((e49454 instanceof Object)){
var ex__37925__auto__ = e49454;
var statearr_49455_49469 = state_49439;
(statearr_49455_49469[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49470 = state_49439;
state_49439 = G__49470;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs$core$async$state_machine__37922__auto__ = function(state_49439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37922__auto____1.call(this,state_49439);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37922__auto____0;
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37922__auto____1;
return cljs$core$async$state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto___49458,out))
})();
var state__38080__auto__ = (function (){var statearr_49456 = f__38079__auto__.call(null);
(statearr_49456[(6)] = c__38078__auto___49458);

return statearr_49456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto___49458,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49472 = arguments.length;
switch (G__49472) {
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
var c__38078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto__){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto__){
return (function (state_49535){
var state_val_49536 = (state_49535[(1)]);
if((state_val_49536 === (7))){
var inst_49531 = (state_49535[(2)]);
var state_49535__$1 = state_49535;
var statearr_49537_49575 = state_49535__$1;
(statearr_49537_49575[(2)] = inst_49531);

(statearr_49537_49575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49536 === (20))){
var inst_49501 = (state_49535[(7)]);
var inst_49512 = (state_49535[(2)]);
var inst_49513 = cljs.core.next.call(null,inst_49501);
var inst_49487 = inst_49513;
var inst_49488 = null;
var inst_49489 = (0);
var inst_49490 = (0);
var state_49535__$1 = (function (){var statearr_49538 = state_49535;
(statearr_49538[(8)] = inst_49489);

(statearr_49538[(9)] = inst_49487);

(statearr_49538[(10)] = inst_49488);

(statearr_49538[(11)] = inst_49512);

(statearr_49538[(12)] = inst_49490);

return statearr_49538;
})();
var statearr_49539_49576 = state_49535__$1;
(statearr_49539_49576[(2)] = null);

(statearr_49539_49576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49536 === (1))){
var state_49535__$1 = state_49535;
var statearr_49540_49577 = state_49535__$1;
(statearr_49540_49577[(2)] = null);

(statearr_49540_49577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49536 === (4))){
var inst_49476 = (state_49535[(13)]);
var inst_49476__$1 = (state_49535[(2)]);
var inst_49477 = (inst_49476__$1 == null);
var state_49535__$1 = (function (){var statearr_49541 = state_49535;
(statearr_49541[(13)] = inst_49476__$1);

return statearr_49541;
})();
if(cljs.core.truth_(inst_49477)){
var statearr_49542_49578 = state_49535__$1;
(statearr_49542_49578[(1)] = (5));

} else {
var statearr_49543_49579 = state_49535__$1;
(statearr_49543_49579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49536 === (15))){
var state_49535__$1 = state_49535;
var statearr_49547_49580 = state_49535__$1;
(statearr_49547_49580[(2)] = null);

(statearr_49547_49580[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49536 === (21))){
var state_49535__$1 = state_49535;
var statearr_49548_49581 = state_49535__$1;
(statearr_49548_49581[(2)] = null);

(statearr_49548_49581[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49536 === (13))){
var inst_49489 = (state_49535[(8)]);
var inst_49487 = (state_49535[(9)]);
var inst_49488 = (state_49535[(10)]);
var inst_49490 = (state_49535[(12)]);
var inst_49497 = (state_49535[(2)]);
var inst_49498 = (inst_49490 + (1));
var tmp49544 = inst_49489;
var tmp49545 = inst_49487;
var tmp49546 = inst_49488;
var inst_49487__$1 = tmp49545;
var inst_49488__$1 = tmp49546;
var inst_49489__$1 = tmp49544;
var inst_49490__$1 = inst_49498;
var state_49535__$1 = (function (){var statearr_49549 = state_49535;
(statearr_49549[(8)] = inst_49489__$1);

(statearr_49549[(9)] = inst_49487__$1);

(statearr_49549[(10)] = inst_49488__$1);

(statearr_49549[(12)] = inst_49490__$1);

(statearr_49549[(14)] = inst_49497);

return statearr_49549;
})();
var statearr_49550_49582 = state_49535__$1;
(statearr_49550_49582[(2)] = null);

(statearr_49550_49582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49536 === (22))){
var state_49535__$1 = state_49535;
var statearr_49551_49583 = state_49535__$1;
(statearr_49551_49583[(2)] = null);

(statearr_49551_49583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49536 === (6))){
var inst_49476 = (state_49535[(13)]);
var inst_49485 = f.call(null,inst_49476);
var inst_49486 = cljs.core.seq.call(null,inst_49485);
var inst_49487 = inst_49486;
var inst_49488 = null;
var inst_49489 = (0);
var inst_49490 = (0);
var state_49535__$1 = (function (){var statearr_49552 = state_49535;
(statearr_49552[(8)] = inst_49489);

(statearr_49552[(9)] = inst_49487);

(statearr_49552[(10)] = inst_49488);

(statearr_49552[(12)] = inst_49490);

return statearr_49552;
})();
var statearr_49553_49584 = state_49535__$1;
(statearr_49553_49584[(2)] = null);

(statearr_49553_49584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49536 === (17))){
var inst_49501 = (state_49535[(7)]);
var inst_49505 = cljs.core.chunk_first.call(null,inst_49501);
var inst_49506 = cljs.core.chunk_rest.call(null,inst_49501);
var inst_49507 = cljs.core.count.call(null,inst_49505);
var inst_49487 = inst_49506;
var inst_49488 = inst_49505;
var inst_49489 = inst_49507;
var inst_49490 = (0);
var state_49535__$1 = (function (){var statearr_49554 = state_49535;
(statearr_49554[(8)] = inst_49489);

(statearr_49554[(9)] = inst_49487);

(statearr_49554[(10)] = inst_49488);

(statearr_49554[(12)] = inst_49490);

return statearr_49554;
})();
var statearr_49555_49585 = state_49535__$1;
(statearr_49555_49585[(2)] = null);

(statearr_49555_49585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49536 === (3))){
var inst_49533 = (state_49535[(2)]);
var state_49535__$1 = state_49535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49535__$1,inst_49533);
} else {
if((state_val_49536 === (12))){
var inst_49521 = (state_49535[(2)]);
var state_49535__$1 = state_49535;
var statearr_49556_49586 = state_49535__$1;
(statearr_49556_49586[(2)] = inst_49521);

(statearr_49556_49586[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49536 === (2))){
var state_49535__$1 = state_49535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49535__$1,(4),in$);
} else {
if((state_val_49536 === (23))){
var inst_49529 = (state_49535[(2)]);
var state_49535__$1 = state_49535;
var statearr_49557_49587 = state_49535__$1;
(statearr_49557_49587[(2)] = inst_49529);

(statearr_49557_49587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49536 === (19))){
var inst_49516 = (state_49535[(2)]);
var state_49535__$1 = state_49535;
var statearr_49558_49588 = state_49535__$1;
(statearr_49558_49588[(2)] = inst_49516);

(statearr_49558_49588[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49536 === (11))){
var inst_49487 = (state_49535[(9)]);
var inst_49501 = (state_49535[(7)]);
var inst_49501__$1 = cljs.core.seq.call(null,inst_49487);
var state_49535__$1 = (function (){var statearr_49559 = state_49535;
(statearr_49559[(7)] = inst_49501__$1);

return statearr_49559;
})();
if(inst_49501__$1){
var statearr_49560_49589 = state_49535__$1;
(statearr_49560_49589[(1)] = (14));

} else {
var statearr_49561_49590 = state_49535__$1;
(statearr_49561_49590[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49536 === (9))){
var inst_49523 = (state_49535[(2)]);
var inst_49524 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_49535__$1 = (function (){var statearr_49562 = state_49535;
(statearr_49562[(15)] = inst_49523);

return statearr_49562;
})();
if(cljs.core.truth_(inst_49524)){
var statearr_49563_49591 = state_49535__$1;
(statearr_49563_49591[(1)] = (21));

} else {
var statearr_49564_49592 = state_49535__$1;
(statearr_49564_49592[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49536 === (5))){
var inst_49479 = cljs.core.async.close_BANG_.call(null,out);
var state_49535__$1 = state_49535;
var statearr_49565_49593 = state_49535__$1;
(statearr_49565_49593[(2)] = inst_49479);

(statearr_49565_49593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49536 === (14))){
var inst_49501 = (state_49535[(7)]);
var inst_49503 = cljs.core.chunked_seq_QMARK_.call(null,inst_49501);
var state_49535__$1 = state_49535;
if(inst_49503){
var statearr_49566_49594 = state_49535__$1;
(statearr_49566_49594[(1)] = (17));

} else {
var statearr_49567_49595 = state_49535__$1;
(statearr_49567_49595[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49536 === (16))){
var inst_49519 = (state_49535[(2)]);
var state_49535__$1 = state_49535;
var statearr_49568_49596 = state_49535__$1;
(statearr_49568_49596[(2)] = inst_49519);

(statearr_49568_49596[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49536 === (10))){
var inst_49488 = (state_49535[(10)]);
var inst_49490 = (state_49535[(12)]);
var inst_49495 = cljs.core._nth.call(null,inst_49488,inst_49490);
var state_49535__$1 = state_49535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49535__$1,(13),out,inst_49495);
} else {
if((state_val_49536 === (18))){
var inst_49501 = (state_49535[(7)]);
var inst_49510 = cljs.core.first.call(null,inst_49501);
var state_49535__$1 = state_49535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49535__$1,(20),out,inst_49510);
} else {
if((state_val_49536 === (8))){
var inst_49489 = (state_49535[(8)]);
var inst_49490 = (state_49535[(12)]);
var inst_49492 = (inst_49490 < inst_49489);
var inst_49493 = inst_49492;
var state_49535__$1 = state_49535;
if(cljs.core.truth_(inst_49493)){
var statearr_49569_49597 = state_49535__$1;
(statearr_49569_49597[(1)] = (10));

} else {
var statearr_49570_49598 = state_49535__$1;
(statearr_49570_49598[(1)] = (11));

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
});})(c__38078__auto__))
;
return ((function (switch__37921__auto__,c__38078__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37922__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37922__auto____0 = (function (){
var statearr_49571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49571[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37922__auto__);

(statearr_49571[(1)] = (1));

return statearr_49571;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37922__auto____1 = (function (state_49535){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_49535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e49572){if((e49572 instanceof Object)){
var ex__37925__auto__ = e49572;
var statearr_49573_49599 = state_49535;
(statearr_49573_49599[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49600 = state_49535;
state_49535 = G__49600;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37922__auto__ = function(state_49535){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37922__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37922__auto____1.call(this,state_49535);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37922__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37922__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto__))
})();
var state__38080__auto__ = (function (){var statearr_49574 = f__38079__auto__.call(null);
(statearr_49574[(6)] = c__38078__auto__);

return statearr_49574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto__))
);

return c__38078__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49602 = arguments.length;
switch (G__49602) {
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
var G__49605 = arguments.length;
switch (G__49605) {
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
var G__49608 = arguments.length;
switch (G__49608) {
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
var c__38078__auto___49655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto___49655,out){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto___49655,out){
return (function (state_49632){
var state_val_49633 = (state_49632[(1)]);
if((state_val_49633 === (7))){
var inst_49627 = (state_49632[(2)]);
var state_49632__$1 = state_49632;
var statearr_49634_49656 = state_49632__$1;
(statearr_49634_49656[(2)] = inst_49627);

(statearr_49634_49656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49633 === (1))){
var inst_49609 = null;
var state_49632__$1 = (function (){var statearr_49635 = state_49632;
(statearr_49635[(7)] = inst_49609);

return statearr_49635;
})();
var statearr_49636_49657 = state_49632__$1;
(statearr_49636_49657[(2)] = null);

(statearr_49636_49657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49633 === (4))){
var inst_49612 = (state_49632[(8)]);
var inst_49612__$1 = (state_49632[(2)]);
var inst_49613 = (inst_49612__$1 == null);
var inst_49614 = cljs.core.not.call(null,inst_49613);
var state_49632__$1 = (function (){var statearr_49637 = state_49632;
(statearr_49637[(8)] = inst_49612__$1);

return statearr_49637;
})();
if(inst_49614){
var statearr_49638_49658 = state_49632__$1;
(statearr_49638_49658[(1)] = (5));

} else {
var statearr_49639_49659 = state_49632__$1;
(statearr_49639_49659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49633 === (6))){
var state_49632__$1 = state_49632;
var statearr_49640_49660 = state_49632__$1;
(statearr_49640_49660[(2)] = null);

(statearr_49640_49660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49633 === (3))){
var inst_49629 = (state_49632[(2)]);
var inst_49630 = cljs.core.async.close_BANG_.call(null,out);
var state_49632__$1 = (function (){var statearr_49641 = state_49632;
(statearr_49641[(9)] = inst_49629);

return statearr_49641;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49632__$1,inst_49630);
} else {
if((state_val_49633 === (2))){
var state_49632__$1 = state_49632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49632__$1,(4),ch);
} else {
if((state_val_49633 === (11))){
var inst_49612 = (state_49632[(8)]);
var inst_49621 = (state_49632[(2)]);
var inst_49609 = inst_49612;
var state_49632__$1 = (function (){var statearr_49642 = state_49632;
(statearr_49642[(7)] = inst_49609);

(statearr_49642[(10)] = inst_49621);

return statearr_49642;
})();
var statearr_49643_49661 = state_49632__$1;
(statearr_49643_49661[(2)] = null);

(statearr_49643_49661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49633 === (9))){
var inst_49612 = (state_49632[(8)]);
var state_49632__$1 = state_49632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49632__$1,(11),out,inst_49612);
} else {
if((state_val_49633 === (5))){
var inst_49609 = (state_49632[(7)]);
var inst_49612 = (state_49632[(8)]);
var inst_49616 = cljs.core._EQ_.call(null,inst_49612,inst_49609);
var state_49632__$1 = state_49632;
if(inst_49616){
var statearr_49645_49662 = state_49632__$1;
(statearr_49645_49662[(1)] = (8));

} else {
var statearr_49646_49663 = state_49632__$1;
(statearr_49646_49663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49633 === (10))){
var inst_49624 = (state_49632[(2)]);
var state_49632__$1 = state_49632;
var statearr_49647_49664 = state_49632__$1;
(statearr_49647_49664[(2)] = inst_49624);

(statearr_49647_49664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49633 === (8))){
var inst_49609 = (state_49632[(7)]);
var tmp49644 = inst_49609;
var inst_49609__$1 = tmp49644;
var state_49632__$1 = (function (){var statearr_49648 = state_49632;
(statearr_49648[(7)] = inst_49609__$1);

return statearr_49648;
})();
var statearr_49649_49665 = state_49632__$1;
(statearr_49649_49665[(2)] = null);

(statearr_49649_49665[(1)] = (2));


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
});})(c__38078__auto___49655,out))
;
return ((function (switch__37921__auto__,c__38078__auto___49655,out){
return (function() {
var cljs$core$async$state_machine__37922__auto__ = null;
var cljs$core$async$state_machine__37922__auto____0 = (function (){
var statearr_49650 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49650[(0)] = cljs$core$async$state_machine__37922__auto__);

(statearr_49650[(1)] = (1));

return statearr_49650;
});
var cljs$core$async$state_machine__37922__auto____1 = (function (state_49632){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_49632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e49651){if((e49651 instanceof Object)){
var ex__37925__auto__ = e49651;
var statearr_49652_49666 = state_49632;
(statearr_49652_49666[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49667 = state_49632;
state_49632 = G__49667;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs$core$async$state_machine__37922__auto__ = function(state_49632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37922__auto____1.call(this,state_49632);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37922__auto____0;
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37922__auto____1;
return cljs$core$async$state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto___49655,out))
})();
var state__38080__auto__ = (function (){var statearr_49653 = f__38079__auto__.call(null);
(statearr_49653[(6)] = c__38078__auto___49655);

return statearr_49653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto___49655,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49669 = arguments.length;
switch (G__49669) {
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
var c__38078__auto___49735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto___49735,out){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto___49735,out){
return (function (state_49707){
var state_val_49708 = (state_49707[(1)]);
if((state_val_49708 === (7))){
var inst_49703 = (state_49707[(2)]);
var state_49707__$1 = state_49707;
var statearr_49709_49736 = state_49707__$1;
(statearr_49709_49736[(2)] = inst_49703);

(statearr_49709_49736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (1))){
var inst_49670 = (new Array(n));
var inst_49671 = inst_49670;
var inst_49672 = (0);
var state_49707__$1 = (function (){var statearr_49710 = state_49707;
(statearr_49710[(7)] = inst_49672);

(statearr_49710[(8)] = inst_49671);

return statearr_49710;
})();
var statearr_49711_49737 = state_49707__$1;
(statearr_49711_49737[(2)] = null);

(statearr_49711_49737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (4))){
var inst_49675 = (state_49707[(9)]);
var inst_49675__$1 = (state_49707[(2)]);
var inst_49676 = (inst_49675__$1 == null);
var inst_49677 = cljs.core.not.call(null,inst_49676);
var state_49707__$1 = (function (){var statearr_49712 = state_49707;
(statearr_49712[(9)] = inst_49675__$1);

return statearr_49712;
})();
if(inst_49677){
var statearr_49713_49738 = state_49707__$1;
(statearr_49713_49738[(1)] = (5));

} else {
var statearr_49714_49739 = state_49707__$1;
(statearr_49714_49739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (15))){
var inst_49697 = (state_49707[(2)]);
var state_49707__$1 = state_49707;
var statearr_49715_49740 = state_49707__$1;
(statearr_49715_49740[(2)] = inst_49697);

(statearr_49715_49740[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (13))){
var state_49707__$1 = state_49707;
var statearr_49716_49741 = state_49707__$1;
(statearr_49716_49741[(2)] = null);

(statearr_49716_49741[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (6))){
var inst_49672 = (state_49707[(7)]);
var inst_49693 = (inst_49672 > (0));
var state_49707__$1 = state_49707;
if(cljs.core.truth_(inst_49693)){
var statearr_49717_49742 = state_49707__$1;
(statearr_49717_49742[(1)] = (12));

} else {
var statearr_49718_49743 = state_49707__$1;
(statearr_49718_49743[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (3))){
var inst_49705 = (state_49707[(2)]);
var state_49707__$1 = state_49707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49707__$1,inst_49705);
} else {
if((state_val_49708 === (12))){
var inst_49671 = (state_49707[(8)]);
var inst_49695 = cljs.core.vec.call(null,inst_49671);
var state_49707__$1 = state_49707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49707__$1,(15),out,inst_49695);
} else {
if((state_val_49708 === (2))){
var state_49707__$1 = state_49707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49707__$1,(4),ch);
} else {
if((state_val_49708 === (11))){
var inst_49687 = (state_49707[(2)]);
var inst_49688 = (new Array(n));
var inst_49671 = inst_49688;
var inst_49672 = (0);
var state_49707__$1 = (function (){var statearr_49719 = state_49707;
(statearr_49719[(7)] = inst_49672);

(statearr_49719[(10)] = inst_49687);

(statearr_49719[(8)] = inst_49671);

return statearr_49719;
})();
var statearr_49720_49744 = state_49707__$1;
(statearr_49720_49744[(2)] = null);

(statearr_49720_49744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (9))){
var inst_49671 = (state_49707[(8)]);
var inst_49685 = cljs.core.vec.call(null,inst_49671);
var state_49707__$1 = state_49707;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49707__$1,(11),out,inst_49685);
} else {
if((state_val_49708 === (5))){
var inst_49672 = (state_49707[(7)]);
var inst_49680 = (state_49707[(11)]);
var inst_49675 = (state_49707[(9)]);
var inst_49671 = (state_49707[(8)]);
var inst_49679 = (inst_49671[inst_49672] = inst_49675);
var inst_49680__$1 = (inst_49672 + (1));
var inst_49681 = (inst_49680__$1 < n);
var state_49707__$1 = (function (){var statearr_49721 = state_49707;
(statearr_49721[(11)] = inst_49680__$1);

(statearr_49721[(12)] = inst_49679);

return statearr_49721;
})();
if(cljs.core.truth_(inst_49681)){
var statearr_49722_49745 = state_49707__$1;
(statearr_49722_49745[(1)] = (8));

} else {
var statearr_49723_49746 = state_49707__$1;
(statearr_49723_49746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (14))){
var inst_49700 = (state_49707[(2)]);
var inst_49701 = cljs.core.async.close_BANG_.call(null,out);
var state_49707__$1 = (function (){var statearr_49725 = state_49707;
(statearr_49725[(13)] = inst_49700);

return statearr_49725;
})();
var statearr_49726_49747 = state_49707__$1;
(statearr_49726_49747[(2)] = inst_49701);

(statearr_49726_49747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (10))){
var inst_49691 = (state_49707[(2)]);
var state_49707__$1 = state_49707;
var statearr_49727_49748 = state_49707__$1;
(statearr_49727_49748[(2)] = inst_49691);

(statearr_49727_49748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49708 === (8))){
var inst_49680 = (state_49707[(11)]);
var inst_49671 = (state_49707[(8)]);
var tmp49724 = inst_49671;
var inst_49671__$1 = tmp49724;
var inst_49672 = inst_49680;
var state_49707__$1 = (function (){var statearr_49728 = state_49707;
(statearr_49728[(7)] = inst_49672);

(statearr_49728[(8)] = inst_49671__$1);

return statearr_49728;
})();
var statearr_49729_49749 = state_49707__$1;
(statearr_49729_49749[(2)] = null);

(statearr_49729_49749[(1)] = (2));


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
});})(c__38078__auto___49735,out))
;
return ((function (switch__37921__auto__,c__38078__auto___49735,out){
return (function() {
var cljs$core$async$state_machine__37922__auto__ = null;
var cljs$core$async$state_machine__37922__auto____0 = (function (){
var statearr_49730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49730[(0)] = cljs$core$async$state_machine__37922__auto__);

(statearr_49730[(1)] = (1));

return statearr_49730;
});
var cljs$core$async$state_machine__37922__auto____1 = (function (state_49707){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_49707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e49731){if((e49731 instanceof Object)){
var ex__37925__auto__ = e49731;
var statearr_49732_49750 = state_49707;
(statearr_49732_49750[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49751 = state_49707;
state_49707 = G__49751;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs$core$async$state_machine__37922__auto__ = function(state_49707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37922__auto____1.call(this,state_49707);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37922__auto____0;
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37922__auto____1;
return cljs$core$async$state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto___49735,out))
})();
var state__38080__auto__ = (function (){var statearr_49733 = f__38079__auto__.call(null);
(statearr_49733[(6)] = c__38078__auto___49735);

return statearr_49733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto___49735,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49753 = arguments.length;
switch (G__49753) {
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
var c__38078__auto___49823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto___49823,out){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto___49823,out){
return (function (state_49795){
var state_val_49796 = (state_49795[(1)]);
if((state_val_49796 === (7))){
var inst_49791 = (state_49795[(2)]);
var state_49795__$1 = state_49795;
var statearr_49797_49824 = state_49795__$1;
(statearr_49797_49824[(2)] = inst_49791);

(statearr_49797_49824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49796 === (1))){
var inst_49754 = [];
var inst_49755 = inst_49754;
var inst_49756 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49795__$1 = (function (){var statearr_49798 = state_49795;
(statearr_49798[(7)] = inst_49755);

(statearr_49798[(8)] = inst_49756);

return statearr_49798;
})();
var statearr_49799_49825 = state_49795__$1;
(statearr_49799_49825[(2)] = null);

(statearr_49799_49825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49796 === (4))){
var inst_49759 = (state_49795[(9)]);
var inst_49759__$1 = (state_49795[(2)]);
var inst_49760 = (inst_49759__$1 == null);
var inst_49761 = cljs.core.not.call(null,inst_49760);
var state_49795__$1 = (function (){var statearr_49800 = state_49795;
(statearr_49800[(9)] = inst_49759__$1);

return statearr_49800;
})();
if(inst_49761){
var statearr_49801_49826 = state_49795__$1;
(statearr_49801_49826[(1)] = (5));

} else {
var statearr_49802_49827 = state_49795__$1;
(statearr_49802_49827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49796 === (15))){
var inst_49785 = (state_49795[(2)]);
var state_49795__$1 = state_49795;
var statearr_49803_49828 = state_49795__$1;
(statearr_49803_49828[(2)] = inst_49785);

(statearr_49803_49828[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49796 === (13))){
var state_49795__$1 = state_49795;
var statearr_49804_49829 = state_49795__$1;
(statearr_49804_49829[(2)] = null);

(statearr_49804_49829[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49796 === (6))){
var inst_49755 = (state_49795[(7)]);
var inst_49780 = inst_49755.length;
var inst_49781 = (inst_49780 > (0));
var state_49795__$1 = state_49795;
if(cljs.core.truth_(inst_49781)){
var statearr_49805_49830 = state_49795__$1;
(statearr_49805_49830[(1)] = (12));

} else {
var statearr_49806_49831 = state_49795__$1;
(statearr_49806_49831[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49796 === (3))){
var inst_49793 = (state_49795[(2)]);
var state_49795__$1 = state_49795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49795__$1,inst_49793);
} else {
if((state_val_49796 === (12))){
var inst_49755 = (state_49795[(7)]);
var inst_49783 = cljs.core.vec.call(null,inst_49755);
var state_49795__$1 = state_49795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49795__$1,(15),out,inst_49783);
} else {
if((state_val_49796 === (2))){
var state_49795__$1 = state_49795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49795__$1,(4),ch);
} else {
if((state_val_49796 === (11))){
var inst_49763 = (state_49795[(10)]);
var inst_49759 = (state_49795[(9)]);
var inst_49773 = (state_49795[(2)]);
var inst_49774 = [];
var inst_49775 = inst_49774.push(inst_49759);
var inst_49755 = inst_49774;
var inst_49756 = inst_49763;
var state_49795__$1 = (function (){var statearr_49807 = state_49795;
(statearr_49807[(7)] = inst_49755);

(statearr_49807[(11)] = inst_49775);

(statearr_49807[(8)] = inst_49756);

(statearr_49807[(12)] = inst_49773);

return statearr_49807;
})();
var statearr_49808_49832 = state_49795__$1;
(statearr_49808_49832[(2)] = null);

(statearr_49808_49832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49796 === (9))){
var inst_49755 = (state_49795[(7)]);
var inst_49771 = cljs.core.vec.call(null,inst_49755);
var state_49795__$1 = state_49795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49795__$1,(11),out,inst_49771);
} else {
if((state_val_49796 === (5))){
var inst_49756 = (state_49795[(8)]);
var inst_49763 = (state_49795[(10)]);
var inst_49759 = (state_49795[(9)]);
var inst_49763__$1 = f.call(null,inst_49759);
var inst_49764 = cljs.core._EQ_.call(null,inst_49763__$1,inst_49756);
var inst_49765 = cljs.core.keyword_identical_QMARK_.call(null,inst_49756,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49766 = (inst_49764) || (inst_49765);
var state_49795__$1 = (function (){var statearr_49809 = state_49795;
(statearr_49809[(10)] = inst_49763__$1);

return statearr_49809;
})();
if(cljs.core.truth_(inst_49766)){
var statearr_49810_49833 = state_49795__$1;
(statearr_49810_49833[(1)] = (8));

} else {
var statearr_49811_49834 = state_49795__$1;
(statearr_49811_49834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49796 === (14))){
var inst_49788 = (state_49795[(2)]);
var inst_49789 = cljs.core.async.close_BANG_.call(null,out);
var state_49795__$1 = (function (){var statearr_49813 = state_49795;
(statearr_49813[(13)] = inst_49788);

return statearr_49813;
})();
var statearr_49814_49835 = state_49795__$1;
(statearr_49814_49835[(2)] = inst_49789);

(statearr_49814_49835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49796 === (10))){
var inst_49778 = (state_49795[(2)]);
var state_49795__$1 = state_49795;
var statearr_49815_49836 = state_49795__$1;
(statearr_49815_49836[(2)] = inst_49778);

(statearr_49815_49836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49796 === (8))){
var inst_49755 = (state_49795[(7)]);
var inst_49763 = (state_49795[(10)]);
var inst_49759 = (state_49795[(9)]);
var inst_49768 = inst_49755.push(inst_49759);
var tmp49812 = inst_49755;
var inst_49755__$1 = tmp49812;
var inst_49756 = inst_49763;
var state_49795__$1 = (function (){var statearr_49816 = state_49795;
(statearr_49816[(7)] = inst_49755__$1);

(statearr_49816[(8)] = inst_49756);

(statearr_49816[(14)] = inst_49768);

return statearr_49816;
})();
var statearr_49817_49837 = state_49795__$1;
(statearr_49817_49837[(2)] = null);

(statearr_49817_49837[(1)] = (2));


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
});})(c__38078__auto___49823,out))
;
return ((function (switch__37921__auto__,c__38078__auto___49823,out){
return (function() {
var cljs$core$async$state_machine__37922__auto__ = null;
var cljs$core$async$state_machine__37922__auto____0 = (function (){
var statearr_49818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49818[(0)] = cljs$core$async$state_machine__37922__auto__);

(statearr_49818[(1)] = (1));

return statearr_49818;
});
var cljs$core$async$state_machine__37922__auto____1 = (function (state_49795){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_49795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e49819){if((e49819 instanceof Object)){
var ex__37925__auto__ = e49819;
var statearr_49820_49838 = state_49795;
(statearr_49820_49838[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49839 = state_49795;
state_49795 = G__49839;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs$core$async$state_machine__37922__auto__ = function(state_49795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37922__auto____1.call(this,state_49795);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37922__auto____0;
cljs$core$async$state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37922__auto____1;
return cljs$core$async$state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto___49823,out))
})();
var state__38080__auto__ = (function (){var statearr_49821 = f__38079__auto__.call(null);
(statearr_49821[(6)] = c__38078__auto___49823);

return statearr_49821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto___49823,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

