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
var G__35219 = arguments.length;
switch (G__35219) {
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
if(typeof cljs.core.async.t_cljs$core$async35220 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35220 = (function (f,blockable,meta35221){
this.f = f;
this.blockable = blockable;
this.meta35221 = meta35221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35222,meta35221__$1){
var self__ = this;
var _35222__$1 = this;
return (new cljs.core.async.t_cljs$core$async35220(self__.f,self__.blockable,meta35221__$1));
});

cljs.core.async.t_cljs$core$async35220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35222){
var self__ = this;
var _35222__$1 = this;
return self__.meta35221;
});

cljs.core.async.t_cljs$core$async35220.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35220.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35220.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async35220.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35220.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35221","meta35221",1352133137,null)], null);
});

cljs.core.async.t_cljs$core$async35220.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35220.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35220";

cljs.core.async.t_cljs$core$async35220.cljs$lang$ctorPrWriter = (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async/t_cljs$core$async35220");
});

cljs.core.async.__GT_t_cljs$core$async35220 = (function cljs$core$async$__GT_t_cljs$core$async35220(f__$1,blockable__$1,meta35221){
return (new cljs.core.async.t_cljs$core$async35220(f__$1,blockable__$1,meta35221));
});

}

return (new cljs.core.async.t_cljs$core$async35220(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35226 = arguments.length;
switch (G__35226) {
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
var G__35229 = arguments.length;
switch (G__35229) {
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
var G__35232 = arguments.length;
switch (G__35232) {
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
var val_35234 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35234);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35234,ret){
return (function (){
return fn1.call(null,val_35234);
});})(val_35234,ret))
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
var G__35236 = arguments.length;
switch (G__35236) {
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
var n__9971__auto___35238 = n;
var x_35239 = (0);
while(true){
if((x_35239 < n__9971__auto___35238)){
(a[x_35239] = (0));

var G__35240 = (x_35239 + (1));
x_35239 = G__35240;
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

var G__35241 = (i + (1));
i = G__35241;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async35242 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35242 = (function (flag,meta35243){
this.flag = flag;
this.meta35243 = meta35243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35244,meta35243__$1){
var self__ = this;
var _35244__$1 = this;
return (new cljs.core.async.t_cljs$core$async35242(self__.flag,meta35243__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35242.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35244){
var self__ = this;
var _35244__$1 = this;
return self__.meta35243;
});})(flag))
;

cljs.core.async.t_cljs$core$async35242.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35242.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35242.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35242.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35242.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35243","meta35243",-879372618,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35242.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35242";

cljs.core.async.t_cljs$core$async35242.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async/t_cljs$core$async35242");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async35242 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35242(flag__$1,meta35243){
return (new cljs.core.async.t_cljs$core$async35242(flag__$1,meta35243));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35242(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async35245 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35245 = (function (flag,cb,meta35246){
this.flag = flag;
this.cb = cb;
this.meta35246 = meta35246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35247,meta35246__$1){
var self__ = this;
var _35247__$1 = this;
return (new cljs.core.async.t_cljs$core$async35245(self__.flag,self__.cb,meta35246__$1));
});

cljs.core.async.t_cljs$core$async35245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35247){
var self__ = this;
var _35247__$1 = this;
return self__.meta35246;
});

cljs.core.async.t_cljs$core$async35245.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35245.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35245.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35245.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35246","meta35246",-1970438764,null)], null);
});

cljs.core.async.t_cljs$core$async35245.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35245";

cljs.core.async.t_cljs$core$async35245.cljs$lang$ctorPrWriter = (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async/t_cljs$core$async35245");
});

cljs.core.async.__GT_t_cljs$core$async35245 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35245(flag__$1,cb__$1,meta35246){
return (new cljs.core.async.t_cljs$core$async35245(flag__$1,cb__$1,meta35246));
});

}

return (new cljs.core.async.t_cljs$core$async35245(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__35248_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35248_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35249_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35249_SHARP_,port], null));
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
var G__35250 = (i + (1));
i = G__35250;
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
var len__10205__auto___35256 = arguments.length;
var i__10206__auto___35257 = (0);
while(true){
if((i__10206__auto___35257 < len__10205__auto___35256)){
args__10212__auto__.push((arguments[i__10206__auto___35257]));

var G__35258 = (i__10206__auto___35257 + (1));
i__10206__auto___35257 = G__35258;
continue;
} else {
}
break;
}

var argseq__10213__auto__ = ((((1) < args__10212__auto__.length))?(new cljs.core.IndexedSeq(args__10212__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10213__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35253){
var map__35254 = p__35253;
var map__35254__$1 = ((((!((map__35254 == null)))?((((map__35254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35254):map__35254);
var opts = map__35254__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35251){
var G__35252 = cljs.core.first.call(null,seq35251);
var seq35251__$1 = cljs.core.next.call(null,seq35251);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35252,seq35251__$1);
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
var G__35260 = arguments.length;
switch (G__35260) {
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
var c__17681__auto___35306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___35306){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___35306){
return (function (state_35284){
var state_val_35285 = (state_35284[(1)]);
if((state_val_35285 === (7))){
var inst_35280 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
var statearr_35286_35307 = state_35284__$1;
(statearr_35286_35307[(2)] = inst_35280);

(statearr_35286_35307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (1))){
var state_35284__$1 = state_35284;
var statearr_35287_35308 = state_35284__$1;
(statearr_35287_35308[(2)] = null);

(statearr_35287_35308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (4))){
var inst_35263 = (state_35284[(7)]);
var inst_35263__$1 = (state_35284[(2)]);
var inst_35264 = (inst_35263__$1 == null);
var state_35284__$1 = (function (){var statearr_35288 = state_35284;
(statearr_35288[(7)] = inst_35263__$1);

return statearr_35288;
})();
if(cljs.core.truth_(inst_35264)){
var statearr_35289_35309 = state_35284__$1;
(statearr_35289_35309[(1)] = (5));

} else {
var statearr_35290_35310 = state_35284__$1;
(statearr_35290_35310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (13))){
var state_35284__$1 = state_35284;
var statearr_35291_35311 = state_35284__$1;
(statearr_35291_35311[(2)] = null);

(statearr_35291_35311[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (6))){
var inst_35263 = (state_35284[(7)]);
var state_35284__$1 = state_35284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35284__$1,(11),to,inst_35263);
} else {
if((state_val_35285 === (3))){
var inst_35282 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35284__$1,inst_35282);
} else {
if((state_val_35285 === (12))){
var state_35284__$1 = state_35284;
var statearr_35292_35312 = state_35284__$1;
(statearr_35292_35312[(2)] = null);

(statearr_35292_35312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (2))){
var state_35284__$1 = state_35284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35284__$1,(4),from);
} else {
if((state_val_35285 === (11))){
var inst_35273 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
if(cljs.core.truth_(inst_35273)){
var statearr_35293_35313 = state_35284__$1;
(statearr_35293_35313[(1)] = (12));

} else {
var statearr_35294_35314 = state_35284__$1;
(statearr_35294_35314[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (9))){
var state_35284__$1 = state_35284;
var statearr_35295_35315 = state_35284__$1;
(statearr_35295_35315[(2)] = null);

(statearr_35295_35315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (5))){
var state_35284__$1 = state_35284;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35296_35316 = state_35284__$1;
(statearr_35296_35316[(1)] = (8));

} else {
var statearr_35297_35317 = state_35284__$1;
(statearr_35297_35317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (14))){
var inst_35278 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
var statearr_35298_35318 = state_35284__$1;
(statearr_35298_35318[(2)] = inst_35278);

(statearr_35298_35318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (10))){
var inst_35270 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
var statearr_35299_35319 = state_35284__$1;
(statearr_35299_35319[(2)] = inst_35270);

(statearr_35299_35319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (8))){
var inst_35267 = cljs.core.async.close_BANG_.call(null,to);
var state_35284__$1 = state_35284;
var statearr_35300_35320 = state_35284__$1;
(statearr_35300_35320[(2)] = inst_35267);

(statearr_35300_35320[(1)] = (10));


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
});})(c__17681__auto___35306))
;
return ((function (switch__17591__auto__,c__17681__auto___35306){
return (function() {
var cljs$core$async$state_machine__17592__auto__ = null;
var cljs$core$async$state_machine__17592__auto____0 = (function (){
var statearr_35301 = [null,null,null,null,null,null,null,null];
(statearr_35301[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_35301[(1)] = (1));

return statearr_35301;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_35284){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_35284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e35302){if((e35302 instanceof Object)){
var ex__17595__auto__ = e35302;
var statearr_35303_35321 = state_35284;
(statearr_35303_35321[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35322 = state_35284;
state_35284 = G__35322;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_35284){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_35284);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___35306))
})();
var state__17683__auto__ = (function (){var statearr_35304 = f__17682__auto__.call(null);
(statearr_35304[(6)] = c__17681__auto___35306);

return statearr_35304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___35306))
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
return (function (p__35323){
var vec__35324 = p__35323;
var v = cljs.core.nth.call(null,vec__35324,(0),null);
var p = cljs.core.nth.call(null,vec__35324,(1),null);
var job = vec__35324;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__17681__auto___35495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___35495,res,vec__35324,v,p,job,jobs,results){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___35495,res,vec__35324,v,p,job,jobs,results){
return (function (state_35331){
var state_val_35332 = (state_35331[(1)]);
if((state_val_35332 === (1))){
var state_35331__$1 = state_35331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35331__$1,(2),res,v);
} else {
if((state_val_35332 === (2))){
var inst_35328 = (state_35331[(2)]);
var inst_35329 = cljs.core.async.close_BANG_.call(null,res);
var state_35331__$1 = (function (){var statearr_35333 = state_35331;
(statearr_35333[(7)] = inst_35328);

return statearr_35333;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35331__$1,inst_35329);
} else {
return null;
}
}
});})(c__17681__auto___35495,res,vec__35324,v,p,job,jobs,results))
;
return ((function (switch__17591__auto__,c__17681__auto___35495,res,vec__35324,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0 = (function (){
var statearr_35334 = [null,null,null,null,null,null,null,null];
(statearr_35334[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__);

(statearr_35334[(1)] = (1));

return statearr_35334;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1 = (function (state_35331){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_35331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e35335){if((e35335 instanceof Object)){
var ex__17595__auto__ = e35335;
var statearr_35336_35496 = state_35331;
(statearr_35336_35496[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35497 = state_35331;
state_35331 = G__35497;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__ = function(state_35331){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1.call(this,state_35331);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___35495,res,vec__35324,v,p,job,jobs,results))
})();
var state__17683__auto__ = (function (){var statearr_35337 = f__17682__auto__.call(null);
(statearr_35337[(6)] = c__17681__auto___35495);

return statearr_35337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___35495,res,vec__35324,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__35338){
var vec__35339 = p__35338;
var v = cljs.core.nth.call(null,vec__35339,(0),null);
var p = cljs.core.nth.call(null,vec__35339,(1),null);
var job = vec__35339;
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
var n__9971__auto___35498 = n;
var __35499 = (0);
while(true){
if((__35499 < n__9971__auto___35498)){
var G__35342_35500 = type;
var G__35342_35501__$1 = (((G__35342_35500 instanceof cljs.core.Keyword))?G__35342_35500.fqn:null);
switch (G__35342_35501__$1) {
case "compute":
var c__17681__auto___35503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35499,c__17681__auto___35503,G__35342_35500,G__35342_35501__$1,n__9971__auto___35498,jobs,results,process,async){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (__35499,c__17681__auto___35503,G__35342_35500,G__35342_35501__$1,n__9971__auto___35498,jobs,results,process,async){
return (function (state_35355){
var state_val_35356 = (state_35355[(1)]);
if((state_val_35356 === (1))){
var state_35355__$1 = state_35355;
var statearr_35357_35504 = state_35355__$1;
(statearr_35357_35504[(2)] = null);

(statearr_35357_35504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35356 === (2))){
var state_35355__$1 = state_35355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35355__$1,(4),jobs);
} else {
if((state_val_35356 === (3))){
var inst_35353 = (state_35355[(2)]);
var state_35355__$1 = state_35355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35355__$1,inst_35353);
} else {
if((state_val_35356 === (4))){
var inst_35345 = (state_35355[(2)]);
var inst_35346 = process.call(null,inst_35345);
var state_35355__$1 = state_35355;
if(cljs.core.truth_(inst_35346)){
var statearr_35358_35505 = state_35355__$1;
(statearr_35358_35505[(1)] = (5));

} else {
var statearr_35359_35506 = state_35355__$1;
(statearr_35359_35506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35356 === (5))){
var state_35355__$1 = state_35355;
var statearr_35360_35507 = state_35355__$1;
(statearr_35360_35507[(2)] = null);

(statearr_35360_35507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35356 === (6))){
var state_35355__$1 = state_35355;
var statearr_35361_35508 = state_35355__$1;
(statearr_35361_35508[(2)] = null);

(statearr_35361_35508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35356 === (7))){
var inst_35351 = (state_35355[(2)]);
var state_35355__$1 = state_35355;
var statearr_35362_35509 = state_35355__$1;
(statearr_35362_35509[(2)] = inst_35351);

(statearr_35362_35509[(1)] = (3));


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
});})(__35499,c__17681__auto___35503,G__35342_35500,G__35342_35501__$1,n__9971__auto___35498,jobs,results,process,async))
;
return ((function (__35499,switch__17591__auto__,c__17681__auto___35503,G__35342_35500,G__35342_35501__$1,n__9971__auto___35498,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0 = (function (){
var statearr_35363 = [null,null,null,null,null,null,null];
(statearr_35363[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__);

(statearr_35363[(1)] = (1));

return statearr_35363;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1 = (function (state_35355){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_35355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e35364){if((e35364 instanceof Object)){
var ex__17595__auto__ = e35364;
var statearr_35365_35510 = state_35355;
(statearr_35365_35510[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35511 = state_35355;
state_35355 = G__35511;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__ = function(state_35355){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1.call(this,state_35355);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__;
})()
;})(__35499,switch__17591__auto__,c__17681__auto___35503,G__35342_35500,G__35342_35501__$1,n__9971__auto___35498,jobs,results,process,async))
})();
var state__17683__auto__ = (function (){var statearr_35366 = f__17682__auto__.call(null);
(statearr_35366[(6)] = c__17681__auto___35503);

return statearr_35366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(__35499,c__17681__auto___35503,G__35342_35500,G__35342_35501__$1,n__9971__auto___35498,jobs,results,process,async))
);


break;
case "async":
var c__17681__auto___35512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35499,c__17681__auto___35512,G__35342_35500,G__35342_35501__$1,n__9971__auto___35498,jobs,results,process,async){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (__35499,c__17681__auto___35512,G__35342_35500,G__35342_35501__$1,n__9971__auto___35498,jobs,results,process,async){
return (function (state_35379){
var state_val_35380 = (state_35379[(1)]);
if((state_val_35380 === (1))){
var state_35379__$1 = state_35379;
var statearr_35381_35513 = state_35379__$1;
(statearr_35381_35513[(2)] = null);

(statearr_35381_35513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (2))){
var state_35379__$1 = state_35379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35379__$1,(4),jobs);
} else {
if((state_val_35380 === (3))){
var inst_35377 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35379__$1,inst_35377);
} else {
if((state_val_35380 === (4))){
var inst_35369 = (state_35379[(2)]);
var inst_35370 = async.call(null,inst_35369);
var state_35379__$1 = state_35379;
if(cljs.core.truth_(inst_35370)){
var statearr_35382_35514 = state_35379__$1;
(statearr_35382_35514[(1)] = (5));

} else {
var statearr_35383_35515 = state_35379__$1;
(statearr_35383_35515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (5))){
var state_35379__$1 = state_35379;
var statearr_35384_35516 = state_35379__$1;
(statearr_35384_35516[(2)] = null);

(statearr_35384_35516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (6))){
var state_35379__$1 = state_35379;
var statearr_35385_35517 = state_35379__$1;
(statearr_35385_35517[(2)] = null);

(statearr_35385_35517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35380 === (7))){
var inst_35375 = (state_35379[(2)]);
var state_35379__$1 = state_35379;
var statearr_35386_35518 = state_35379__$1;
(statearr_35386_35518[(2)] = inst_35375);

(statearr_35386_35518[(1)] = (3));


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
});})(__35499,c__17681__auto___35512,G__35342_35500,G__35342_35501__$1,n__9971__auto___35498,jobs,results,process,async))
;
return ((function (__35499,switch__17591__auto__,c__17681__auto___35512,G__35342_35500,G__35342_35501__$1,n__9971__auto___35498,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0 = (function (){
var statearr_35387 = [null,null,null,null,null,null,null];
(statearr_35387[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__);

(statearr_35387[(1)] = (1));

return statearr_35387;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1 = (function (state_35379){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_35379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e35388){if((e35388 instanceof Object)){
var ex__17595__auto__ = e35388;
var statearr_35389_35519 = state_35379;
(statearr_35389_35519[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35520 = state_35379;
state_35379 = G__35520;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__ = function(state_35379){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1.call(this,state_35379);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__;
})()
;})(__35499,switch__17591__auto__,c__17681__auto___35512,G__35342_35500,G__35342_35501__$1,n__9971__auto___35498,jobs,results,process,async))
})();
var state__17683__auto__ = (function (){var statearr_35390 = f__17682__auto__.call(null);
(statearr_35390[(6)] = c__17681__auto___35512);

return statearr_35390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(__35499,c__17681__auto___35512,G__35342_35500,G__35342_35501__$1,n__9971__auto___35498,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35342_35501__$1)].join('')));

}

var G__35521 = (__35499 + (1));
__35499 = G__35521;
continue;
} else {
}
break;
}

var c__17681__auto___35522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___35522,jobs,results,process,async){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___35522,jobs,results,process,async){
return (function (state_35412){
var state_val_35413 = (state_35412[(1)]);
if((state_val_35413 === (1))){
var state_35412__$1 = state_35412;
var statearr_35414_35523 = state_35412__$1;
(statearr_35414_35523[(2)] = null);

(statearr_35414_35523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (2))){
var state_35412__$1 = state_35412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35412__$1,(4),from);
} else {
if((state_val_35413 === (3))){
var inst_35410 = (state_35412[(2)]);
var state_35412__$1 = state_35412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35412__$1,inst_35410);
} else {
if((state_val_35413 === (4))){
var inst_35393 = (state_35412[(7)]);
var inst_35393__$1 = (state_35412[(2)]);
var inst_35394 = (inst_35393__$1 == null);
var state_35412__$1 = (function (){var statearr_35415 = state_35412;
(statearr_35415[(7)] = inst_35393__$1);

return statearr_35415;
})();
if(cljs.core.truth_(inst_35394)){
var statearr_35416_35524 = state_35412__$1;
(statearr_35416_35524[(1)] = (5));

} else {
var statearr_35417_35525 = state_35412__$1;
(statearr_35417_35525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (5))){
var inst_35396 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35412__$1 = state_35412;
var statearr_35418_35526 = state_35412__$1;
(statearr_35418_35526[(2)] = inst_35396);

(statearr_35418_35526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (6))){
var inst_35398 = (state_35412[(8)]);
var inst_35393 = (state_35412[(7)]);
var inst_35398__$1 = cljs.core.async.chan.call(null,(1));
var inst_35399 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35400 = [inst_35393,inst_35398__$1];
var inst_35401 = (new cljs.core.PersistentVector(null,2,(5),inst_35399,inst_35400,null));
var state_35412__$1 = (function (){var statearr_35419 = state_35412;
(statearr_35419[(8)] = inst_35398__$1);

return statearr_35419;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35412__$1,(8),jobs,inst_35401);
} else {
if((state_val_35413 === (7))){
var inst_35408 = (state_35412[(2)]);
var state_35412__$1 = state_35412;
var statearr_35420_35527 = state_35412__$1;
(statearr_35420_35527[(2)] = inst_35408);

(statearr_35420_35527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35413 === (8))){
var inst_35398 = (state_35412[(8)]);
var inst_35403 = (state_35412[(2)]);
var state_35412__$1 = (function (){var statearr_35421 = state_35412;
(statearr_35421[(9)] = inst_35403);

return statearr_35421;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35412__$1,(9),results,inst_35398);
} else {
if((state_val_35413 === (9))){
var inst_35405 = (state_35412[(2)]);
var state_35412__$1 = (function (){var statearr_35422 = state_35412;
(statearr_35422[(10)] = inst_35405);

return statearr_35422;
})();
var statearr_35423_35528 = state_35412__$1;
(statearr_35423_35528[(2)] = null);

(statearr_35423_35528[(1)] = (2));


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
});})(c__17681__auto___35522,jobs,results,process,async))
;
return ((function (switch__17591__auto__,c__17681__auto___35522,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0 = (function (){
var statearr_35424 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35424[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__);

(statearr_35424[(1)] = (1));

return statearr_35424;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1 = (function (state_35412){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_35412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e35425){if((e35425 instanceof Object)){
var ex__17595__auto__ = e35425;
var statearr_35426_35529 = state_35412;
(statearr_35426_35529[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35530 = state_35412;
state_35412 = G__35530;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__ = function(state_35412){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1.call(this,state_35412);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___35522,jobs,results,process,async))
})();
var state__17683__auto__ = (function (){var statearr_35427 = f__17682__auto__.call(null);
(statearr_35427[(6)] = c__17681__auto___35522);

return statearr_35427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___35522,jobs,results,process,async))
);


var c__17681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto__,jobs,results,process,async){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto__,jobs,results,process,async){
return (function (state_35465){
var state_val_35466 = (state_35465[(1)]);
if((state_val_35466 === (7))){
var inst_35461 = (state_35465[(2)]);
var state_35465__$1 = state_35465;
var statearr_35467_35531 = state_35465__$1;
(statearr_35467_35531[(2)] = inst_35461);

(statearr_35467_35531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (20))){
var state_35465__$1 = state_35465;
var statearr_35468_35532 = state_35465__$1;
(statearr_35468_35532[(2)] = null);

(statearr_35468_35532[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (1))){
var state_35465__$1 = state_35465;
var statearr_35469_35533 = state_35465__$1;
(statearr_35469_35533[(2)] = null);

(statearr_35469_35533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (4))){
var inst_35430 = (state_35465[(7)]);
var inst_35430__$1 = (state_35465[(2)]);
var inst_35431 = (inst_35430__$1 == null);
var state_35465__$1 = (function (){var statearr_35470 = state_35465;
(statearr_35470[(7)] = inst_35430__$1);

return statearr_35470;
})();
if(cljs.core.truth_(inst_35431)){
var statearr_35471_35534 = state_35465__$1;
(statearr_35471_35534[(1)] = (5));

} else {
var statearr_35472_35535 = state_35465__$1;
(statearr_35472_35535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (15))){
var inst_35443 = (state_35465[(8)]);
var state_35465__$1 = state_35465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35465__$1,(18),to,inst_35443);
} else {
if((state_val_35466 === (21))){
var inst_35456 = (state_35465[(2)]);
var state_35465__$1 = state_35465;
var statearr_35473_35536 = state_35465__$1;
(statearr_35473_35536[(2)] = inst_35456);

(statearr_35473_35536[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (13))){
var inst_35458 = (state_35465[(2)]);
var state_35465__$1 = (function (){var statearr_35474 = state_35465;
(statearr_35474[(9)] = inst_35458);

return statearr_35474;
})();
var statearr_35475_35537 = state_35465__$1;
(statearr_35475_35537[(2)] = null);

(statearr_35475_35537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (6))){
var inst_35430 = (state_35465[(7)]);
var state_35465__$1 = state_35465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35465__$1,(11),inst_35430);
} else {
if((state_val_35466 === (17))){
var inst_35451 = (state_35465[(2)]);
var state_35465__$1 = state_35465;
if(cljs.core.truth_(inst_35451)){
var statearr_35476_35538 = state_35465__$1;
(statearr_35476_35538[(1)] = (19));

} else {
var statearr_35477_35539 = state_35465__$1;
(statearr_35477_35539[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (3))){
var inst_35463 = (state_35465[(2)]);
var state_35465__$1 = state_35465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35465__$1,inst_35463);
} else {
if((state_val_35466 === (12))){
var inst_35440 = (state_35465[(10)]);
var state_35465__$1 = state_35465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35465__$1,(14),inst_35440);
} else {
if((state_val_35466 === (2))){
var state_35465__$1 = state_35465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35465__$1,(4),results);
} else {
if((state_val_35466 === (19))){
var state_35465__$1 = state_35465;
var statearr_35478_35540 = state_35465__$1;
(statearr_35478_35540[(2)] = null);

(statearr_35478_35540[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (11))){
var inst_35440 = (state_35465[(2)]);
var state_35465__$1 = (function (){var statearr_35479 = state_35465;
(statearr_35479[(10)] = inst_35440);

return statearr_35479;
})();
var statearr_35480_35541 = state_35465__$1;
(statearr_35480_35541[(2)] = null);

(statearr_35480_35541[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (9))){
var state_35465__$1 = state_35465;
var statearr_35481_35542 = state_35465__$1;
(statearr_35481_35542[(2)] = null);

(statearr_35481_35542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (5))){
var state_35465__$1 = state_35465;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35482_35543 = state_35465__$1;
(statearr_35482_35543[(1)] = (8));

} else {
var statearr_35483_35544 = state_35465__$1;
(statearr_35483_35544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (14))){
var inst_35445 = (state_35465[(11)]);
var inst_35443 = (state_35465[(8)]);
var inst_35443__$1 = (state_35465[(2)]);
var inst_35444 = (inst_35443__$1 == null);
var inst_35445__$1 = cljs.core.not.call(null,inst_35444);
var state_35465__$1 = (function (){var statearr_35484 = state_35465;
(statearr_35484[(11)] = inst_35445__$1);

(statearr_35484[(8)] = inst_35443__$1);

return statearr_35484;
})();
if(inst_35445__$1){
var statearr_35485_35545 = state_35465__$1;
(statearr_35485_35545[(1)] = (15));

} else {
var statearr_35486_35546 = state_35465__$1;
(statearr_35486_35546[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (16))){
var inst_35445 = (state_35465[(11)]);
var state_35465__$1 = state_35465;
var statearr_35487_35547 = state_35465__$1;
(statearr_35487_35547[(2)] = inst_35445);

(statearr_35487_35547[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (10))){
var inst_35437 = (state_35465[(2)]);
var state_35465__$1 = state_35465;
var statearr_35488_35548 = state_35465__$1;
(statearr_35488_35548[(2)] = inst_35437);

(statearr_35488_35548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (18))){
var inst_35448 = (state_35465[(2)]);
var state_35465__$1 = state_35465;
var statearr_35489_35549 = state_35465__$1;
(statearr_35489_35549[(2)] = inst_35448);

(statearr_35489_35549[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35466 === (8))){
var inst_35434 = cljs.core.async.close_BANG_.call(null,to);
var state_35465__$1 = state_35465;
var statearr_35490_35550 = state_35465__$1;
(statearr_35490_35550[(2)] = inst_35434);

(statearr_35490_35550[(1)] = (10));


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
var statearr_35491 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35491[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__);

(statearr_35491[(1)] = (1));

return statearr_35491;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1 = (function (state_35465){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_35465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e35492){if((e35492 instanceof Object)){
var ex__17595__auto__ = e35492;
var statearr_35493_35551 = state_35465;
(statearr_35493_35551[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35552 = state_35465;
state_35465 = G__35552;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__ = function(state_35465){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1.call(this,state_35465);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17592__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__,jobs,results,process,async))
})();
var state__17683__auto__ = (function (){var statearr_35494 = f__17682__auto__.call(null);
(statearr_35494[(6)] = c__17681__auto__);

return statearr_35494;
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
var G__35554 = arguments.length;
switch (G__35554) {
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
var G__35557 = arguments.length;
switch (G__35557) {
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
var G__35560 = arguments.length;
switch (G__35560) {
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
var c__17681__auto___35609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___35609,tc,fc){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___35609,tc,fc){
return (function (state_35586){
var state_val_35587 = (state_35586[(1)]);
if((state_val_35587 === (7))){
var inst_35582 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35588_35610 = state_35586__$1;
(statearr_35588_35610[(2)] = inst_35582);

(statearr_35588_35610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (1))){
var state_35586__$1 = state_35586;
var statearr_35589_35611 = state_35586__$1;
(statearr_35589_35611[(2)] = null);

(statearr_35589_35611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (4))){
var inst_35563 = (state_35586[(7)]);
var inst_35563__$1 = (state_35586[(2)]);
var inst_35564 = (inst_35563__$1 == null);
var state_35586__$1 = (function (){var statearr_35590 = state_35586;
(statearr_35590[(7)] = inst_35563__$1);

return statearr_35590;
})();
if(cljs.core.truth_(inst_35564)){
var statearr_35591_35612 = state_35586__$1;
(statearr_35591_35612[(1)] = (5));

} else {
var statearr_35592_35613 = state_35586__$1;
(statearr_35592_35613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (13))){
var state_35586__$1 = state_35586;
var statearr_35593_35614 = state_35586__$1;
(statearr_35593_35614[(2)] = null);

(statearr_35593_35614[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (6))){
var inst_35563 = (state_35586[(7)]);
var inst_35569 = p.call(null,inst_35563);
var state_35586__$1 = state_35586;
if(cljs.core.truth_(inst_35569)){
var statearr_35594_35615 = state_35586__$1;
(statearr_35594_35615[(1)] = (9));

} else {
var statearr_35595_35616 = state_35586__$1;
(statearr_35595_35616[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (3))){
var inst_35584 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35586__$1,inst_35584);
} else {
if((state_val_35587 === (12))){
var state_35586__$1 = state_35586;
var statearr_35596_35617 = state_35586__$1;
(statearr_35596_35617[(2)] = null);

(statearr_35596_35617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (2))){
var state_35586__$1 = state_35586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35586__$1,(4),ch);
} else {
if((state_val_35587 === (11))){
var inst_35563 = (state_35586[(7)]);
var inst_35573 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35586__$1,(8),inst_35573,inst_35563);
} else {
if((state_val_35587 === (9))){
var state_35586__$1 = state_35586;
var statearr_35597_35618 = state_35586__$1;
(statearr_35597_35618[(2)] = tc);

(statearr_35597_35618[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (5))){
var inst_35566 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35567 = cljs.core.async.close_BANG_.call(null,fc);
var state_35586__$1 = (function (){var statearr_35598 = state_35586;
(statearr_35598[(8)] = inst_35566);

return statearr_35598;
})();
var statearr_35599_35619 = state_35586__$1;
(statearr_35599_35619[(2)] = inst_35567);

(statearr_35599_35619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (14))){
var inst_35580 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
var statearr_35600_35620 = state_35586__$1;
(statearr_35600_35620[(2)] = inst_35580);

(statearr_35600_35620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (10))){
var state_35586__$1 = state_35586;
var statearr_35601_35621 = state_35586__$1;
(statearr_35601_35621[(2)] = fc);

(statearr_35601_35621[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35587 === (8))){
var inst_35575 = (state_35586[(2)]);
var state_35586__$1 = state_35586;
if(cljs.core.truth_(inst_35575)){
var statearr_35602_35622 = state_35586__$1;
(statearr_35602_35622[(1)] = (12));

} else {
var statearr_35603_35623 = state_35586__$1;
(statearr_35603_35623[(1)] = (13));

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
});})(c__17681__auto___35609,tc,fc))
;
return ((function (switch__17591__auto__,c__17681__auto___35609,tc,fc){
return (function() {
var cljs$core$async$state_machine__17592__auto__ = null;
var cljs$core$async$state_machine__17592__auto____0 = (function (){
var statearr_35604 = [null,null,null,null,null,null,null,null,null];
(statearr_35604[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_35604[(1)] = (1));

return statearr_35604;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_35586){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_35586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e35605){if((e35605 instanceof Object)){
var ex__17595__auto__ = e35605;
var statearr_35606_35624 = state_35586;
(statearr_35606_35624[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35625 = state_35586;
state_35586 = G__35625;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_35586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_35586);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___35609,tc,fc))
})();
var state__17683__auto__ = (function (){var statearr_35607 = f__17682__auto__.call(null);
(statearr_35607[(6)] = c__17681__auto___35609);

return statearr_35607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___35609,tc,fc))
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
return (function (state_35646){
var state_val_35647 = (state_35646[(1)]);
if((state_val_35647 === (7))){
var inst_35642 = (state_35646[(2)]);
var state_35646__$1 = state_35646;
var statearr_35648_35666 = state_35646__$1;
(statearr_35648_35666[(2)] = inst_35642);

(statearr_35648_35666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (1))){
var inst_35626 = init;
var state_35646__$1 = (function (){var statearr_35649 = state_35646;
(statearr_35649[(7)] = inst_35626);

return statearr_35649;
})();
var statearr_35650_35667 = state_35646__$1;
(statearr_35650_35667[(2)] = null);

(statearr_35650_35667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (4))){
var inst_35629 = (state_35646[(8)]);
var inst_35629__$1 = (state_35646[(2)]);
var inst_35630 = (inst_35629__$1 == null);
var state_35646__$1 = (function (){var statearr_35651 = state_35646;
(statearr_35651[(8)] = inst_35629__$1);

return statearr_35651;
})();
if(cljs.core.truth_(inst_35630)){
var statearr_35652_35668 = state_35646__$1;
(statearr_35652_35668[(1)] = (5));

} else {
var statearr_35653_35669 = state_35646__$1;
(statearr_35653_35669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (6))){
var inst_35629 = (state_35646[(8)]);
var inst_35626 = (state_35646[(7)]);
var inst_35633 = (state_35646[(9)]);
var inst_35633__$1 = f.call(null,inst_35626,inst_35629);
var inst_35634 = cljs.core.reduced_QMARK_.call(null,inst_35633__$1);
var state_35646__$1 = (function (){var statearr_35654 = state_35646;
(statearr_35654[(9)] = inst_35633__$1);

return statearr_35654;
})();
if(inst_35634){
var statearr_35655_35670 = state_35646__$1;
(statearr_35655_35670[(1)] = (8));

} else {
var statearr_35656_35671 = state_35646__$1;
(statearr_35656_35671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (3))){
var inst_35644 = (state_35646[(2)]);
var state_35646__$1 = state_35646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35646__$1,inst_35644);
} else {
if((state_val_35647 === (2))){
var state_35646__$1 = state_35646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35646__$1,(4),ch);
} else {
if((state_val_35647 === (9))){
var inst_35633 = (state_35646[(9)]);
var inst_35626 = inst_35633;
var state_35646__$1 = (function (){var statearr_35657 = state_35646;
(statearr_35657[(7)] = inst_35626);

return statearr_35657;
})();
var statearr_35658_35672 = state_35646__$1;
(statearr_35658_35672[(2)] = null);

(statearr_35658_35672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (5))){
var inst_35626 = (state_35646[(7)]);
var state_35646__$1 = state_35646;
var statearr_35659_35673 = state_35646__$1;
(statearr_35659_35673[(2)] = inst_35626);

(statearr_35659_35673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (10))){
var inst_35640 = (state_35646[(2)]);
var state_35646__$1 = state_35646;
var statearr_35660_35674 = state_35646__$1;
(statearr_35660_35674[(2)] = inst_35640);

(statearr_35660_35674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35647 === (8))){
var inst_35633 = (state_35646[(9)]);
var inst_35636 = cljs.core.deref.call(null,inst_35633);
var state_35646__$1 = state_35646;
var statearr_35661_35675 = state_35646__$1;
(statearr_35661_35675[(2)] = inst_35636);

(statearr_35661_35675[(1)] = (10));


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
var statearr_35662 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35662[(0)] = cljs$core$async$reduce_$_state_machine__17592__auto__);

(statearr_35662[(1)] = (1));

return statearr_35662;
});
var cljs$core$async$reduce_$_state_machine__17592__auto____1 = (function (state_35646){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_35646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e35663){if((e35663 instanceof Object)){
var ex__17595__auto__ = e35663;
var statearr_35664_35676 = state_35646;
(statearr_35664_35676[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35677 = state_35646;
state_35646 = G__35677;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17592__auto__ = function(state_35646){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17592__auto____1.call(this,state_35646);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17592__auto____0;
cljs$core$async$reduce_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17592__auto____1;
return cljs$core$async$reduce_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__))
})();
var state__17683__auto__ = (function (){var statearr_35665 = f__17682__auto__.call(null);
(statearr_35665[(6)] = c__17681__auto__);

return statearr_35665;
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
return (function (state_35683){
var state_val_35684 = (state_35683[(1)]);
if((state_val_35684 === (1))){
var inst_35678 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_35683__$1 = state_35683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35683__$1,(2),inst_35678);
} else {
if((state_val_35684 === (2))){
var inst_35680 = (state_35683[(2)]);
var inst_35681 = f__$1.call(null,inst_35680);
var state_35683__$1 = state_35683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35683__$1,inst_35681);
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
var statearr_35685 = [null,null,null,null,null,null,null];
(statearr_35685[(0)] = cljs$core$async$transduce_$_state_machine__17592__auto__);

(statearr_35685[(1)] = (1));

return statearr_35685;
});
var cljs$core$async$transduce_$_state_machine__17592__auto____1 = (function (state_35683){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_35683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e35686){if((e35686 instanceof Object)){
var ex__17595__auto__ = e35686;
var statearr_35687_35689 = state_35683;
(statearr_35687_35689[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35690 = state_35683;
state_35683 = G__35690;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17592__auto__ = function(state_35683){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17592__auto____1.call(this,state_35683);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17592__auto____0;
cljs$core$async$transduce_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17592__auto____1;
return cljs$core$async$transduce_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__,f__$1))
})();
var state__17683__auto__ = (function (){var statearr_35688 = f__17682__auto__.call(null);
(statearr_35688[(6)] = c__17681__auto__);

return statearr_35688;
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
var G__35692 = arguments.length;
switch (G__35692) {
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
return (function (state_35717){
var state_val_35718 = (state_35717[(1)]);
if((state_val_35718 === (7))){
var inst_35699 = (state_35717[(2)]);
var state_35717__$1 = state_35717;
var statearr_35719_35740 = state_35717__$1;
(statearr_35719_35740[(2)] = inst_35699);

(statearr_35719_35740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (1))){
var inst_35693 = cljs.core.seq.call(null,coll);
var inst_35694 = inst_35693;
var state_35717__$1 = (function (){var statearr_35720 = state_35717;
(statearr_35720[(7)] = inst_35694);

return statearr_35720;
})();
var statearr_35721_35741 = state_35717__$1;
(statearr_35721_35741[(2)] = null);

(statearr_35721_35741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (4))){
var inst_35694 = (state_35717[(7)]);
var inst_35697 = cljs.core.first.call(null,inst_35694);
var state_35717__$1 = state_35717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35717__$1,(7),ch,inst_35697);
} else {
if((state_val_35718 === (13))){
var inst_35711 = (state_35717[(2)]);
var state_35717__$1 = state_35717;
var statearr_35722_35742 = state_35717__$1;
(statearr_35722_35742[(2)] = inst_35711);

(statearr_35722_35742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (6))){
var inst_35702 = (state_35717[(2)]);
var state_35717__$1 = state_35717;
if(cljs.core.truth_(inst_35702)){
var statearr_35723_35743 = state_35717__$1;
(statearr_35723_35743[(1)] = (8));

} else {
var statearr_35724_35744 = state_35717__$1;
(statearr_35724_35744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (3))){
var inst_35715 = (state_35717[(2)]);
var state_35717__$1 = state_35717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35717__$1,inst_35715);
} else {
if((state_val_35718 === (12))){
var state_35717__$1 = state_35717;
var statearr_35725_35745 = state_35717__$1;
(statearr_35725_35745[(2)] = null);

(statearr_35725_35745[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (2))){
var inst_35694 = (state_35717[(7)]);
var state_35717__$1 = state_35717;
if(cljs.core.truth_(inst_35694)){
var statearr_35726_35746 = state_35717__$1;
(statearr_35726_35746[(1)] = (4));

} else {
var statearr_35727_35747 = state_35717__$1;
(statearr_35727_35747[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (11))){
var inst_35708 = cljs.core.async.close_BANG_.call(null,ch);
var state_35717__$1 = state_35717;
var statearr_35728_35748 = state_35717__$1;
(statearr_35728_35748[(2)] = inst_35708);

(statearr_35728_35748[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (9))){
var state_35717__$1 = state_35717;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35729_35749 = state_35717__$1;
(statearr_35729_35749[(1)] = (11));

} else {
var statearr_35730_35750 = state_35717__$1;
(statearr_35730_35750[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (5))){
var inst_35694 = (state_35717[(7)]);
var state_35717__$1 = state_35717;
var statearr_35731_35751 = state_35717__$1;
(statearr_35731_35751[(2)] = inst_35694);

(statearr_35731_35751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (10))){
var inst_35713 = (state_35717[(2)]);
var state_35717__$1 = state_35717;
var statearr_35732_35752 = state_35717__$1;
(statearr_35732_35752[(2)] = inst_35713);

(statearr_35732_35752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35718 === (8))){
var inst_35694 = (state_35717[(7)]);
var inst_35704 = cljs.core.next.call(null,inst_35694);
var inst_35694__$1 = inst_35704;
var state_35717__$1 = (function (){var statearr_35733 = state_35717;
(statearr_35733[(7)] = inst_35694__$1);

return statearr_35733;
})();
var statearr_35734_35753 = state_35717__$1;
(statearr_35734_35753[(2)] = null);

(statearr_35734_35753[(1)] = (2));


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
var statearr_35735 = [null,null,null,null,null,null,null,null];
(statearr_35735[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_35735[(1)] = (1));

return statearr_35735;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_35717){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_35717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e35736){if((e35736 instanceof Object)){
var ex__17595__auto__ = e35736;
var statearr_35737_35754 = state_35717;
(statearr_35737_35754[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35755 = state_35717;
state_35717 = G__35755;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_35717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_35717);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__))
})();
var state__17683__auto__ = (function (){var statearr_35738 = f__17682__auto__.call(null);
(statearr_35738[(6)] = c__17681__auto__);

return statearr_35738;
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
if(typeof cljs.core.async.t_cljs$core$async35756 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35756 = (function (ch,cs,meta35757){
this.ch = ch;
this.cs = cs;
this.meta35757 = meta35757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35758,meta35757__$1){
var self__ = this;
var _35758__$1 = this;
return (new cljs.core.async.t_cljs$core$async35756(self__.ch,self__.cs,meta35757__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35756.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35758){
var self__ = this;
var _35758__$1 = this;
return self__.meta35757;
});})(cs))
;

cljs.core.async.t_cljs$core$async35756.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35756.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35756.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35756.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35756.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35756.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35756.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35757","meta35757",1493370852,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35756";

cljs.core.async.t_cljs$core$async35756.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async/t_cljs$core$async35756");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35756 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35756(ch__$1,cs__$1,meta35757){
return (new cljs.core.async.t_cljs$core$async35756(ch__$1,cs__$1,meta35757));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35756(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__17681__auto___35978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___35978,cs,m,dchan,dctr,done){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___35978,cs,m,dchan,dctr,done){
return (function (state_35893){
var state_val_35894 = (state_35893[(1)]);
if((state_val_35894 === (7))){
var inst_35889 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35895_35979 = state_35893__$1;
(statearr_35895_35979[(2)] = inst_35889);

(statearr_35895_35979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (20))){
var inst_35792 = (state_35893[(7)]);
var inst_35804 = cljs.core.first.call(null,inst_35792);
var inst_35805 = cljs.core.nth.call(null,inst_35804,(0),null);
var inst_35806 = cljs.core.nth.call(null,inst_35804,(1),null);
var state_35893__$1 = (function (){var statearr_35896 = state_35893;
(statearr_35896[(8)] = inst_35805);

return statearr_35896;
})();
if(cljs.core.truth_(inst_35806)){
var statearr_35897_35980 = state_35893__$1;
(statearr_35897_35980[(1)] = (22));

} else {
var statearr_35898_35981 = state_35893__$1;
(statearr_35898_35981[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (27))){
var inst_35761 = (state_35893[(9)]);
var inst_35834 = (state_35893[(10)]);
var inst_35841 = (state_35893[(11)]);
var inst_35836 = (state_35893[(12)]);
var inst_35841__$1 = cljs.core._nth.call(null,inst_35834,inst_35836);
var inst_35842 = cljs.core.async.put_BANG_.call(null,inst_35841__$1,inst_35761,done);
var state_35893__$1 = (function (){var statearr_35899 = state_35893;
(statearr_35899[(11)] = inst_35841__$1);

return statearr_35899;
})();
if(cljs.core.truth_(inst_35842)){
var statearr_35900_35982 = state_35893__$1;
(statearr_35900_35982[(1)] = (30));

} else {
var statearr_35901_35983 = state_35893__$1;
(statearr_35901_35983[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (1))){
var state_35893__$1 = state_35893;
var statearr_35902_35984 = state_35893__$1;
(statearr_35902_35984[(2)] = null);

(statearr_35902_35984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (24))){
var inst_35792 = (state_35893[(7)]);
var inst_35811 = (state_35893[(2)]);
var inst_35812 = cljs.core.next.call(null,inst_35792);
var inst_35770 = inst_35812;
var inst_35771 = null;
var inst_35772 = (0);
var inst_35773 = (0);
var state_35893__$1 = (function (){var statearr_35903 = state_35893;
(statearr_35903[(13)] = inst_35771);

(statearr_35903[(14)] = inst_35773);

(statearr_35903[(15)] = inst_35772);

(statearr_35903[(16)] = inst_35811);

(statearr_35903[(17)] = inst_35770);

return statearr_35903;
})();
var statearr_35904_35985 = state_35893__$1;
(statearr_35904_35985[(2)] = null);

(statearr_35904_35985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (39))){
var state_35893__$1 = state_35893;
var statearr_35908_35986 = state_35893__$1;
(statearr_35908_35986[(2)] = null);

(statearr_35908_35986[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (4))){
var inst_35761 = (state_35893[(9)]);
var inst_35761__$1 = (state_35893[(2)]);
var inst_35762 = (inst_35761__$1 == null);
var state_35893__$1 = (function (){var statearr_35909 = state_35893;
(statearr_35909[(9)] = inst_35761__$1);

return statearr_35909;
})();
if(cljs.core.truth_(inst_35762)){
var statearr_35910_35987 = state_35893__$1;
(statearr_35910_35987[(1)] = (5));

} else {
var statearr_35911_35988 = state_35893__$1;
(statearr_35911_35988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (15))){
var inst_35771 = (state_35893[(13)]);
var inst_35773 = (state_35893[(14)]);
var inst_35772 = (state_35893[(15)]);
var inst_35770 = (state_35893[(17)]);
var inst_35788 = (state_35893[(2)]);
var inst_35789 = (inst_35773 + (1));
var tmp35905 = inst_35771;
var tmp35906 = inst_35772;
var tmp35907 = inst_35770;
var inst_35770__$1 = tmp35907;
var inst_35771__$1 = tmp35905;
var inst_35772__$1 = tmp35906;
var inst_35773__$1 = inst_35789;
var state_35893__$1 = (function (){var statearr_35912 = state_35893;
(statearr_35912[(13)] = inst_35771__$1);

(statearr_35912[(14)] = inst_35773__$1);

(statearr_35912[(15)] = inst_35772__$1);

(statearr_35912[(18)] = inst_35788);

(statearr_35912[(17)] = inst_35770__$1);

return statearr_35912;
})();
var statearr_35913_35989 = state_35893__$1;
(statearr_35913_35989[(2)] = null);

(statearr_35913_35989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (21))){
var inst_35815 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35917_35990 = state_35893__$1;
(statearr_35917_35990[(2)] = inst_35815);

(statearr_35917_35990[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (31))){
var inst_35841 = (state_35893[(11)]);
var inst_35845 = done.call(null,null);
var inst_35846 = cljs.core.async.untap_STAR_.call(null,m,inst_35841);
var state_35893__$1 = (function (){var statearr_35918 = state_35893;
(statearr_35918[(19)] = inst_35845);

return statearr_35918;
})();
var statearr_35919_35991 = state_35893__$1;
(statearr_35919_35991[(2)] = inst_35846);

(statearr_35919_35991[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (32))){
var inst_35835 = (state_35893[(20)]);
var inst_35834 = (state_35893[(10)]);
var inst_35833 = (state_35893[(21)]);
var inst_35836 = (state_35893[(12)]);
var inst_35848 = (state_35893[(2)]);
var inst_35849 = (inst_35836 + (1));
var tmp35914 = inst_35835;
var tmp35915 = inst_35834;
var tmp35916 = inst_35833;
var inst_35833__$1 = tmp35916;
var inst_35834__$1 = tmp35915;
var inst_35835__$1 = tmp35914;
var inst_35836__$1 = inst_35849;
var state_35893__$1 = (function (){var statearr_35920 = state_35893;
(statearr_35920[(20)] = inst_35835__$1);

(statearr_35920[(10)] = inst_35834__$1);

(statearr_35920[(21)] = inst_35833__$1);

(statearr_35920[(22)] = inst_35848);

(statearr_35920[(12)] = inst_35836__$1);

return statearr_35920;
})();
var statearr_35921_35992 = state_35893__$1;
(statearr_35921_35992[(2)] = null);

(statearr_35921_35992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (40))){
var inst_35861 = (state_35893[(23)]);
var inst_35865 = done.call(null,null);
var inst_35866 = cljs.core.async.untap_STAR_.call(null,m,inst_35861);
var state_35893__$1 = (function (){var statearr_35922 = state_35893;
(statearr_35922[(24)] = inst_35865);

return statearr_35922;
})();
var statearr_35923_35993 = state_35893__$1;
(statearr_35923_35993[(2)] = inst_35866);

(statearr_35923_35993[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (33))){
var inst_35852 = (state_35893[(25)]);
var inst_35854 = cljs.core.chunked_seq_QMARK_.call(null,inst_35852);
var state_35893__$1 = state_35893;
if(inst_35854){
var statearr_35924_35994 = state_35893__$1;
(statearr_35924_35994[(1)] = (36));

} else {
var statearr_35925_35995 = state_35893__$1;
(statearr_35925_35995[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (13))){
var inst_35782 = (state_35893[(26)]);
var inst_35785 = cljs.core.async.close_BANG_.call(null,inst_35782);
var state_35893__$1 = state_35893;
var statearr_35926_35996 = state_35893__$1;
(statearr_35926_35996[(2)] = inst_35785);

(statearr_35926_35996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (22))){
var inst_35805 = (state_35893[(8)]);
var inst_35808 = cljs.core.async.close_BANG_.call(null,inst_35805);
var state_35893__$1 = state_35893;
var statearr_35927_35997 = state_35893__$1;
(statearr_35927_35997[(2)] = inst_35808);

(statearr_35927_35997[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (36))){
var inst_35852 = (state_35893[(25)]);
var inst_35856 = cljs.core.chunk_first.call(null,inst_35852);
var inst_35857 = cljs.core.chunk_rest.call(null,inst_35852);
var inst_35858 = cljs.core.count.call(null,inst_35856);
var inst_35833 = inst_35857;
var inst_35834 = inst_35856;
var inst_35835 = inst_35858;
var inst_35836 = (0);
var state_35893__$1 = (function (){var statearr_35928 = state_35893;
(statearr_35928[(20)] = inst_35835);

(statearr_35928[(10)] = inst_35834);

(statearr_35928[(21)] = inst_35833);

(statearr_35928[(12)] = inst_35836);

return statearr_35928;
})();
var statearr_35929_35998 = state_35893__$1;
(statearr_35929_35998[(2)] = null);

(statearr_35929_35998[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (41))){
var inst_35852 = (state_35893[(25)]);
var inst_35868 = (state_35893[(2)]);
var inst_35869 = cljs.core.next.call(null,inst_35852);
var inst_35833 = inst_35869;
var inst_35834 = null;
var inst_35835 = (0);
var inst_35836 = (0);
var state_35893__$1 = (function (){var statearr_35930 = state_35893;
(statearr_35930[(20)] = inst_35835);

(statearr_35930[(10)] = inst_35834);

(statearr_35930[(27)] = inst_35868);

(statearr_35930[(21)] = inst_35833);

(statearr_35930[(12)] = inst_35836);

return statearr_35930;
})();
var statearr_35931_35999 = state_35893__$1;
(statearr_35931_35999[(2)] = null);

(statearr_35931_35999[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (43))){
var state_35893__$1 = state_35893;
var statearr_35932_36000 = state_35893__$1;
(statearr_35932_36000[(2)] = null);

(statearr_35932_36000[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (29))){
var inst_35877 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35933_36001 = state_35893__$1;
(statearr_35933_36001[(2)] = inst_35877);

(statearr_35933_36001[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (44))){
var inst_35886 = (state_35893[(2)]);
var state_35893__$1 = (function (){var statearr_35934 = state_35893;
(statearr_35934[(28)] = inst_35886);

return statearr_35934;
})();
var statearr_35935_36002 = state_35893__$1;
(statearr_35935_36002[(2)] = null);

(statearr_35935_36002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (6))){
var inst_35825 = (state_35893[(29)]);
var inst_35824 = cljs.core.deref.call(null,cs);
var inst_35825__$1 = cljs.core.keys.call(null,inst_35824);
var inst_35826 = cljs.core.count.call(null,inst_35825__$1);
var inst_35827 = cljs.core.reset_BANG_.call(null,dctr,inst_35826);
var inst_35832 = cljs.core.seq.call(null,inst_35825__$1);
var inst_35833 = inst_35832;
var inst_35834 = null;
var inst_35835 = (0);
var inst_35836 = (0);
var state_35893__$1 = (function (){var statearr_35936 = state_35893;
(statearr_35936[(20)] = inst_35835);

(statearr_35936[(10)] = inst_35834);

(statearr_35936[(29)] = inst_35825__$1);

(statearr_35936[(30)] = inst_35827);

(statearr_35936[(21)] = inst_35833);

(statearr_35936[(12)] = inst_35836);

return statearr_35936;
})();
var statearr_35937_36003 = state_35893__$1;
(statearr_35937_36003[(2)] = null);

(statearr_35937_36003[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (28))){
var inst_35852 = (state_35893[(25)]);
var inst_35833 = (state_35893[(21)]);
var inst_35852__$1 = cljs.core.seq.call(null,inst_35833);
var state_35893__$1 = (function (){var statearr_35938 = state_35893;
(statearr_35938[(25)] = inst_35852__$1);

return statearr_35938;
})();
if(inst_35852__$1){
var statearr_35939_36004 = state_35893__$1;
(statearr_35939_36004[(1)] = (33));

} else {
var statearr_35940_36005 = state_35893__$1;
(statearr_35940_36005[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (25))){
var inst_35835 = (state_35893[(20)]);
var inst_35836 = (state_35893[(12)]);
var inst_35838 = (inst_35836 < inst_35835);
var inst_35839 = inst_35838;
var state_35893__$1 = state_35893;
if(cljs.core.truth_(inst_35839)){
var statearr_35941_36006 = state_35893__$1;
(statearr_35941_36006[(1)] = (27));

} else {
var statearr_35942_36007 = state_35893__$1;
(statearr_35942_36007[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (34))){
var state_35893__$1 = state_35893;
var statearr_35943_36008 = state_35893__$1;
(statearr_35943_36008[(2)] = null);

(statearr_35943_36008[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (17))){
var state_35893__$1 = state_35893;
var statearr_35944_36009 = state_35893__$1;
(statearr_35944_36009[(2)] = null);

(statearr_35944_36009[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (3))){
var inst_35891 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35893__$1,inst_35891);
} else {
if((state_val_35894 === (12))){
var inst_35820 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35945_36010 = state_35893__$1;
(statearr_35945_36010[(2)] = inst_35820);

(statearr_35945_36010[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (2))){
var state_35893__$1 = state_35893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35893__$1,(4),ch);
} else {
if((state_val_35894 === (23))){
var state_35893__$1 = state_35893;
var statearr_35946_36011 = state_35893__$1;
(statearr_35946_36011[(2)] = null);

(statearr_35946_36011[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (35))){
var inst_35875 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35947_36012 = state_35893__$1;
(statearr_35947_36012[(2)] = inst_35875);

(statearr_35947_36012[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (19))){
var inst_35792 = (state_35893[(7)]);
var inst_35796 = cljs.core.chunk_first.call(null,inst_35792);
var inst_35797 = cljs.core.chunk_rest.call(null,inst_35792);
var inst_35798 = cljs.core.count.call(null,inst_35796);
var inst_35770 = inst_35797;
var inst_35771 = inst_35796;
var inst_35772 = inst_35798;
var inst_35773 = (0);
var state_35893__$1 = (function (){var statearr_35948 = state_35893;
(statearr_35948[(13)] = inst_35771);

(statearr_35948[(14)] = inst_35773);

(statearr_35948[(15)] = inst_35772);

(statearr_35948[(17)] = inst_35770);

return statearr_35948;
})();
var statearr_35949_36013 = state_35893__$1;
(statearr_35949_36013[(2)] = null);

(statearr_35949_36013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (11))){
var inst_35792 = (state_35893[(7)]);
var inst_35770 = (state_35893[(17)]);
var inst_35792__$1 = cljs.core.seq.call(null,inst_35770);
var state_35893__$1 = (function (){var statearr_35950 = state_35893;
(statearr_35950[(7)] = inst_35792__$1);

return statearr_35950;
})();
if(inst_35792__$1){
var statearr_35951_36014 = state_35893__$1;
(statearr_35951_36014[(1)] = (16));

} else {
var statearr_35952_36015 = state_35893__$1;
(statearr_35952_36015[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (9))){
var inst_35822 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35953_36016 = state_35893__$1;
(statearr_35953_36016[(2)] = inst_35822);

(statearr_35953_36016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (5))){
var inst_35768 = cljs.core.deref.call(null,cs);
var inst_35769 = cljs.core.seq.call(null,inst_35768);
var inst_35770 = inst_35769;
var inst_35771 = null;
var inst_35772 = (0);
var inst_35773 = (0);
var state_35893__$1 = (function (){var statearr_35954 = state_35893;
(statearr_35954[(13)] = inst_35771);

(statearr_35954[(14)] = inst_35773);

(statearr_35954[(15)] = inst_35772);

(statearr_35954[(17)] = inst_35770);

return statearr_35954;
})();
var statearr_35955_36017 = state_35893__$1;
(statearr_35955_36017[(2)] = null);

(statearr_35955_36017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (14))){
var state_35893__$1 = state_35893;
var statearr_35956_36018 = state_35893__$1;
(statearr_35956_36018[(2)] = null);

(statearr_35956_36018[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (45))){
var inst_35883 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35957_36019 = state_35893__$1;
(statearr_35957_36019[(2)] = inst_35883);

(statearr_35957_36019[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (26))){
var inst_35825 = (state_35893[(29)]);
var inst_35879 = (state_35893[(2)]);
var inst_35880 = cljs.core.seq.call(null,inst_35825);
var state_35893__$1 = (function (){var statearr_35958 = state_35893;
(statearr_35958[(31)] = inst_35879);

return statearr_35958;
})();
if(inst_35880){
var statearr_35959_36020 = state_35893__$1;
(statearr_35959_36020[(1)] = (42));

} else {
var statearr_35960_36021 = state_35893__$1;
(statearr_35960_36021[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (16))){
var inst_35792 = (state_35893[(7)]);
var inst_35794 = cljs.core.chunked_seq_QMARK_.call(null,inst_35792);
var state_35893__$1 = state_35893;
if(inst_35794){
var statearr_35961_36022 = state_35893__$1;
(statearr_35961_36022[(1)] = (19));

} else {
var statearr_35962_36023 = state_35893__$1;
(statearr_35962_36023[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (38))){
var inst_35872 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35963_36024 = state_35893__$1;
(statearr_35963_36024[(2)] = inst_35872);

(statearr_35963_36024[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (30))){
var state_35893__$1 = state_35893;
var statearr_35964_36025 = state_35893__$1;
(statearr_35964_36025[(2)] = null);

(statearr_35964_36025[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (10))){
var inst_35771 = (state_35893[(13)]);
var inst_35773 = (state_35893[(14)]);
var inst_35781 = cljs.core._nth.call(null,inst_35771,inst_35773);
var inst_35782 = cljs.core.nth.call(null,inst_35781,(0),null);
var inst_35783 = cljs.core.nth.call(null,inst_35781,(1),null);
var state_35893__$1 = (function (){var statearr_35965 = state_35893;
(statearr_35965[(26)] = inst_35782);

return statearr_35965;
})();
if(cljs.core.truth_(inst_35783)){
var statearr_35966_36026 = state_35893__$1;
(statearr_35966_36026[(1)] = (13));

} else {
var statearr_35967_36027 = state_35893__$1;
(statearr_35967_36027[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (18))){
var inst_35818 = (state_35893[(2)]);
var state_35893__$1 = state_35893;
var statearr_35968_36028 = state_35893__$1;
(statearr_35968_36028[(2)] = inst_35818);

(statearr_35968_36028[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (42))){
var state_35893__$1 = state_35893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35893__$1,(45),dchan);
} else {
if((state_val_35894 === (37))){
var inst_35861 = (state_35893[(23)]);
var inst_35761 = (state_35893[(9)]);
var inst_35852 = (state_35893[(25)]);
var inst_35861__$1 = cljs.core.first.call(null,inst_35852);
var inst_35862 = cljs.core.async.put_BANG_.call(null,inst_35861__$1,inst_35761,done);
var state_35893__$1 = (function (){var statearr_35969 = state_35893;
(statearr_35969[(23)] = inst_35861__$1);

return statearr_35969;
})();
if(cljs.core.truth_(inst_35862)){
var statearr_35970_36029 = state_35893__$1;
(statearr_35970_36029[(1)] = (39));

} else {
var statearr_35971_36030 = state_35893__$1;
(statearr_35971_36030[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35894 === (8))){
var inst_35773 = (state_35893[(14)]);
var inst_35772 = (state_35893[(15)]);
var inst_35775 = (inst_35773 < inst_35772);
var inst_35776 = inst_35775;
var state_35893__$1 = state_35893;
if(cljs.core.truth_(inst_35776)){
var statearr_35972_36031 = state_35893__$1;
(statearr_35972_36031[(1)] = (10));

} else {
var statearr_35973_36032 = state_35893__$1;
(statearr_35973_36032[(1)] = (11));

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
});})(c__17681__auto___35978,cs,m,dchan,dctr,done))
;
return ((function (switch__17591__auto__,c__17681__auto___35978,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17592__auto__ = null;
var cljs$core$async$mult_$_state_machine__17592__auto____0 = (function (){
var statearr_35974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35974[(0)] = cljs$core$async$mult_$_state_machine__17592__auto__);

(statearr_35974[(1)] = (1));

return statearr_35974;
});
var cljs$core$async$mult_$_state_machine__17592__auto____1 = (function (state_35893){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_35893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e35975){if((e35975 instanceof Object)){
var ex__17595__auto__ = e35975;
var statearr_35976_36033 = state_35893;
(statearr_35976_36033[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36034 = state_35893;
state_35893 = G__36034;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17592__auto__ = function(state_35893){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17592__auto____1.call(this,state_35893);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17592__auto____0;
cljs$core$async$mult_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17592__auto____1;
return cljs$core$async$mult_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___35978,cs,m,dchan,dctr,done))
})();
var state__17683__auto__ = (function (){var statearr_35977 = f__17682__auto__.call(null);
(statearr_35977[(6)] = c__17681__auto___35978);

return statearr_35977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___35978,cs,m,dchan,dctr,done))
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
var G__36036 = arguments.length;
switch (G__36036) {
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
var len__10205__auto___36048 = arguments.length;
var i__10206__auto___36049 = (0);
while(true){
if((i__10206__auto___36049 < len__10205__auto___36048)){
args__10212__auto__.push((arguments[i__10206__auto___36049]));

var G__36050 = (i__10206__auto___36049 + (1));
i__10206__auto___36049 = G__36050;
continue;
} else {
}
break;
}

var argseq__10213__auto__ = ((((3) < args__10212__auto__.length))?(new cljs.core.IndexedSeq(args__10212__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10213__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36042){
var map__36043 = p__36042;
var map__36043__$1 = ((((!((map__36043 == null)))?((((map__36043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36043.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36043):map__36043);
var opts = map__36043__$1;
var statearr_36045_36051 = state;
(statearr_36045_36051[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__36043,map__36043__$1,opts){
return (function (val){
var statearr_36046_36052 = state;
(statearr_36046_36052[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36043,map__36043__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_36047_36053 = state;
(statearr_36047_36053[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36038){
var G__36039 = cljs.core.first.call(null,seq36038);
var seq36038__$1 = cljs.core.next.call(null,seq36038);
var G__36040 = cljs.core.first.call(null,seq36038__$1);
var seq36038__$2 = cljs.core.next.call(null,seq36038__$1);
var G__36041 = cljs.core.first.call(null,seq36038__$2);
var seq36038__$3 = cljs.core.next.call(null,seq36038__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36039,G__36040,G__36041,seq36038__$3);
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
if(typeof cljs.core.async.t_cljs$core$async36054 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36054 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta36055){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta36055 = meta36055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36056,meta36055__$1){
var self__ = this;
var _36056__$1 = this;
return (new cljs.core.async.t_cljs$core$async36054(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta36055__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36054.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36056){
var self__ = this;
var _36056__$1 = this;
return self__.meta36055;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36054.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36054.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36054.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36054.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36054.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36054.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36054.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36054.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async36054.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta36055","meta36055",-1823852268,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36054.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36054.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36054";

cljs.core.async.t_cljs$core$async36054.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async/t_cljs$core$async36054");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async36054 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async36054(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36055){
return (new cljs.core.async.t_cljs$core$async36054(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36055));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async36054(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17681__auto___36218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___36218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___36218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36158){
var state_val_36159 = (state_36158[(1)]);
if((state_val_36159 === (7))){
var inst_36073 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
var statearr_36160_36219 = state_36158__$1;
(statearr_36160_36219[(2)] = inst_36073);

(statearr_36160_36219[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (20))){
var inst_36085 = (state_36158[(7)]);
var state_36158__$1 = state_36158;
var statearr_36161_36220 = state_36158__$1;
(statearr_36161_36220[(2)] = inst_36085);

(statearr_36161_36220[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (27))){
var state_36158__$1 = state_36158;
var statearr_36162_36221 = state_36158__$1;
(statearr_36162_36221[(2)] = null);

(statearr_36162_36221[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (1))){
var inst_36060 = (state_36158[(8)]);
var inst_36060__$1 = calc_state.call(null);
var inst_36062 = (inst_36060__$1 == null);
var inst_36063 = cljs.core.not.call(null,inst_36062);
var state_36158__$1 = (function (){var statearr_36163 = state_36158;
(statearr_36163[(8)] = inst_36060__$1);

return statearr_36163;
})();
if(inst_36063){
var statearr_36164_36222 = state_36158__$1;
(statearr_36164_36222[(1)] = (2));

} else {
var statearr_36165_36223 = state_36158__$1;
(statearr_36165_36223[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (24))){
var inst_36109 = (state_36158[(9)]);
var inst_36132 = (state_36158[(10)]);
var inst_36118 = (state_36158[(11)]);
var inst_36132__$1 = inst_36109.call(null,inst_36118);
var state_36158__$1 = (function (){var statearr_36166 = state_36158;
(statearr_36166[(10)] = inst_36132__$1);

return statearr_36166;
})();
if(cljs.core.truth_(inst_36132__$1)){
var statearr_36167_36224 = state_36158__$1;
(statearr_36167_36224[(1)] = (29));

} else {
var statearr_36168_36225 = state_36158__$1;
(statearr_36168_36225[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (4))){
var inst_36076 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
if(cljs.core.truth_(inst_36076)){
var statearr_36169_36226 = state_36158__$1;
(statearr_36169_36226[(1)] = (8));

} else {
var statearr_36170_36227 = state_36158__$1;
(statearr_36170_36227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (15))){
var inst_36103 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
if(cljs.core.truth_(inst_36103)){
var statearr_36171_36228 = state_36158__$1;
(statearr_36171_36228[(1)] = (19));

} else {
var statearr_36172_36229 = state_36158__$1;
(statearr_36172_36229[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (21))){
var inst_36108 = (state_36158[(12)]);
var inst_36108__$1 = (state_36158[(2)]);
var inst_36109 = cljs.core.get.call(null,inst_36108__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36110 = cljs.core.get.call(null,inst_36108__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36111 = cljs.core.get.call(null,inst_36108__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36158__$1 = (function (){var statearr_36173 = state_36158;
(statearr_36173[(9)] = inst_36109);

(statearr_36173[(13)] = inst_36110);

(statearr_36173[(12)] = inst_36108__$1);

return statearr_36173;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36158__$1,(22),inst_36111);
} else {
if((state_val_36159 === (31))){
var inst_36140 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
if(cljs.core.truth_(inst_36140)){
var statearr_36174_36230 = state_36158__$1;
(statearr_36174_36230[(1)] = (32));

} else {
var statearr_36175_36231 = state_36158__$1;
(statearr_36175_36231[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (32))){
var inst_36117 = (state_36158[(14)]);
var state_36158__$1 = state_36158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36158__$1,(35),out,inst_36117);
} else {
if((state_val_36159 === (33))){
var inst_36108 = (state_36158[(12)]);
var inst_36085 = inst_36108;
var state_36158__$1 = (function (){var statearr_36176 = state_36158;
(statearr_36176[(7)] = inst_36085);

return statearr_36176;
})();
var statearr_36177_36232 = state_36158__$1;
(statearr_36177_36232[(2)] = null);

(statearr_36177_36232[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (13))){
var inst_36085 = (state_36158[(7)]);
var inst_36092 = inst_36085.cljs$lang$protocol_mask$partition0$;
var inst_36093 = (inst_36092 & (64));
var inst_36094 = inst_36085.cljs$core$ISeq$;
var inst_36095 = (cljs.core.PROTOCOL_SENTINEL === inst_36094);
var inst_36096 = (inst_36093) || (inst_36095);
var state_36158__$1 = state_36158;
if(cljs.core.truth_(inst_36096)){
var statearr_36178_36233 = state_36158__$1;
(statearr_36178_36233[(1)] = (16));

} else {
var statearr_36179_36234 = state_36158__$1;
(statearr_36179_36234[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (22))){
var inst_36117 = (state_36158[(14)]);
var inst_36118 = (state_36158[(11)]);
var inst_36116 = (state_36158[(2)]);
var inst_36117__$1 = cljs.core.nth.call(null,inst_36116,(0),null);
var inst_36118__$1 = cljs.core.nth.call(null,inst_36116,(1),null);
var inst_36119 = (inst_36117__$1 == null);
var inst_36120 = cljs.core._EQ_.call(null,inst_36118__$1,change);
var inst_36121 = (inst_36119) || (inst_36120);
var state_36158__$1 = (function (){var statearr_36180 = state_36158;
(statearr_36180[(14)] = inst_36117__$1);

(statearr_36180[(11)] = inst_36118__$1);

return statearr_36180;
})();
if(cljs.core.truth_(inst_36121)){
var statearr_36181_36235 = state_36158__$1;
(statearr_36181_36235[(1)] = (23));

} else {
var statearr_36182_36236 = state_36158__$1;
(statearr_36182_36236[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (36))){
var inst_36108 = (state_36158[(12)]);
var inst_36085 = inst_36108;
var state_36158__$1 = (function (){var statearr_36183 = state_36158;
(statearr_36183[(7)] = inst_36085);

return statearr_36183;
})();
var statearr_36184_36237 = state_36158__$1;
(statearr_36184_36237[(2)] = null);

(statearr_36184_36237[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (29))){
var inst_36132 = (state_36158[(10)]);
var state_36158__$1 = state_36158;
var statearr_36185_36238 = state_36158__$1;
(statearr_36185_36238[(2)] = inst_36132);

(statearr_36185_36238[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (6))){
var state_36158__$1 = state_36158;
var statearr_36186_36239 = state_36158__$1;
(statearr_36186_36239[(2)] = false);

(statearr_36186_36239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (28))){
var inst_36128 = (state_36158[(2)]);
var inst_36129 = calc_state.call(null);
var inst_36085 = inst_36129;
var state_36158__$1 = (function (){var statearr_36187 = state_36158;
(statearr_36187[(15)] = inst_36128);

(statearr_36187[(7)] = inst_36085);

return statearr_36187;
})();
var statearr_36188_36240 = state_36158__$1;
(statearr_36188_36240[(2)] = null);

(statearr_36188_36240[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (25))){
var inst_36154 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
var statearr_36189_36241 = state_36158__$1;
(statearr_36189_36241[(2)] = inst_36154);

(statearr_36189_36241[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (34))){
var inst_36152 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
var statearr_36190_36242 = state_36158__$1;
(statearr_36190_36242[(2)] = inst_36152);

(statearr_36190_36242[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (17))){
var state_36158__$1 = state_36158;
var statearr_36191_36243 = state_36158__$1;
(statearr_36191_36243[(2)] = false);

(statearr_36191_36243[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (3))){
var state_36158__$1 = state_36158;
var statearr_36192_36244 = state_36158__$1;
(statearr_36192_36244[(2)] = false);

(statearr_36192_36244[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (12))){
var inst_36156 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36158__$1,inst_36156);
} else {
if((state_val_36159 === (2))){
var inst_36060 = (state_36158[(8)]);
var inst_36065 = inst_36060.cljs$lang$protocol_mask$partition0$;
var inst_36066 = (inst_36065 & (64));
var inst_36067 = inst_36060.cljs$core$ISeq$;
var inst_36068 = (cljs.core.PROTOCOL_SENTINEL === inst_36067);
var inst_36069 = (inst_36066) || (inst_36068);
var state_36158__$1 = state_36158;
if(cljs.core.truth_(inst_36069)){
var statearr_36193_36245 = state_36158__$1;
(statearr_36193_36245[(1)] = (5));

} else {
var statearr_36194_36246 = state_36158__$1;
(statearr_36194_36246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (23))){
var inst_36117 = (state_36158[(14)]);
var inst_36123 = (inst_36117 == null);
var state_36158__$1 = state_36158;
if(cljs.core.truth_(inst_36123)){
var statearr_36195_36247 = state_36158__$1;
(statearr_36195_36247[(1)] = (26));

} else {
var statearr_36196_36248 = state_36158__$1;
(statearr_36196_36248[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (35))){
var inst_36143 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
if(cljs.core.truth_(inst_36143)){
var statearr_36197_36249 = state_36158__$1;
(statearr_36197_36249[(1)] = (36));

} else {
var statearr_36198_36250 = state_36158__$1;
(statearr_36198_36250[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (19))){
var inst_36085 = (state_36158[(7)]);
var inst_36105 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36085);
var state_36158__$1 = state_36158;
var statearr_36199_36251 = state_36158__$1;
(statearr_36199_36251[(2)] = inst_36105);

(statearr_36199_36251[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (11))){
var inst_36085 = (state_36158[(7)]);
var inst_36089 = (inst_36085 == null);
var inst_36090 = cljs.core.not.call(null,inst_36089);
var state_36158__$1 = state_36158;
if(inst_36090){
var statearr_36200_36252 = state_36158__$1;
(statearr_36200_36252[(1)] = (13));

} else {
var statearr_36201_36253 = state_36158__$1;
(statearr_36201_36253[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (9))){
var inst_36060 = (state_36158[(8)]);
var state_36158__$1 = state_36158;
var statearr_36202_36254 = state_36158__$1;
(statearr_36202_36254[(2)] = inst_36060);

(statearr_36202_36254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (5))){
var state_36158__$1 = state_36158;
var statearr_36203_36255 = state_36158__$1;
(statearr_36203_36255[(2)] = true);

(statearr_36203_36255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (14))){
var state_36158__$1 = state_36158;
var statearr_36204_36256 = state_36158__$1;
(statearr_36204_36256[(2)] = false);

(statearr_36204_36256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (26))){
var inst_36118 = (state_36158[(11)]);
var inst_36125 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36118);
var state_36158__$1 = state_36158;
var statearr_36205_36257 = state_36158__$1;
(statearr_36205_36257[(2)] = inst_36125);

(statearr_36205_36257[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (16))){
var state_36158__$1 = state_36158;
var statearr_36206_36258 = state_36158__$1;
(statearr_36206_36258[(2)] = true);

(statearr_36206_36258[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (38))){
var inst_36148 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
var statearr_36207_36259 = state_36158__$1;
(statearr_36207_36259[(2)] = inst_36148);

(statearr_36207_36259[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (30))){
var inst_36109 = (state_36158[(9)]);
var inst_36110 = (state_36158[(13)]);
var inst_36118 = (state_36158[(11)]);
var inst_36135 = cljs.core.empty_QMARK_.call(null,inst_36109);
var inst_36136 = inst_36110.call(null,inst_36118);
var inst_36137 = cljs.core.not.call(null,inst_36136);
var inst_36138 = (inst_36135) && (inst_36137);
var state_36158__$1 = state_36158;
var statearr_36208_36260 = state_36158__$1;
(statearr_36208_36260[(2)] = inst_36138);

(statearr_36208_36260[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (10))){
var inst_36060 = (state_36158[(8)]);
var inst_36081 = (state_36158[(2)]);
var inst_36082 = cljs.core.get.call(null,inst_36081,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36083 = cljs.core.get.call(null,inst_36081,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36084 = cljs.core.get.call(null,inst_36081,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36085 = inst_36060;
var state_36158__$1 = (function (){var statearr_36209 = state_36158;
(statearr_36209[(16)] = inst_36083);

(statearr_36209[(17)] = inst_36084);

(statearr_36209[(18)] = inst_36082);

(statearr_36209[(7)] = inst_36085);

return statearr_36209;
})();
var statearr_36210_36261 = state_36158__$1;
(statearr_36210_36261[(2)] = null);

(statearr_36210_36261[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (18))){
var inst_36100 = (state_36158[(2)]);
var state_36158__$1 = state_36158;
var statearr_36211_36262 = state_36158__$1;
(statearr_36211_36262[(2)] = inst_36100);

(statearr_36211_36262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (37))){
var state_36158__$1 = state_36158;
var statearr_36212_36263 = state_36158__$1;
(statearr_36212_36263[(2)] = null);

(statearr_36212_36263[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36159 === (8))){
var inst_36060 = (state_36158[(8)]);
var inst_36078 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36060);
var state_36158__$1 = state_36158;
var statearr_36213_36264 = state_36158__$1;
(statearr_36213_36264[(2)] = inst_36078);

(statearr_36213_36264[(1)] = (10));


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
});})(c__17681__auto___36218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17591__auto__,c__17681__auto___36218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17592__auto__ = null;
var cljs$core$async$mix_$_state_machine__17592__auto____0 = (function (){
var statearr_36214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36214[(0)] = cljs$core$async$mix_$_state_machine__17592__auto__);

(statearr_36214[(1)] = (1));

return statearr_36214;
});
var cljs$core$async$mix_$_state_machine__17592__auto____1 = (function (state_36158){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_36158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e36215){if((e36215 instanceof Object)){
var ex__17595__auto__ = e36215;
var statearr_36216_36265 = state_36158;
(statearr_36216_36265[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36266 = state_36158;
state_36158 = G__36266;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17592__auto__ = function(state_36158){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17592__auto____1.call(this,state_36158);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17592__auto____0;
cljs$core$async$mix_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17592__auto____1;
return cljs$core$async$mix_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___36218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__17683__auto__ = (function (){var statearr_36217 = f__17682__auto__.call(null);
(statearr_36217[(6)] = c__17681__auto___36218);

return statearr_36217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___36218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__36268 = arguments.length;
switch (G__36268) {
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
var G__36272 = arguments.length;
switch (G__36272) {
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
return (function (p1__36270_SHARP_){
if(cljs.core.truth_(p1__36270_SHARP_.call(null,topic))){
return p1__36270_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36270_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8926__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async36273 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36273 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36274){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36274 = meta36274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36275,meta36274__$1){
var self__ = this;
var _36275__$1 = this;
return (new cljs.core.async.t_cljs$core$async36273(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36274__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36275){
var self__ = this;
var _36275__$1 = this;
return self__.meta36274;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36273.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36273.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36273.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36273.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36273.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async36273.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36273.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36273.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36274","meta36274",579413488,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36273.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36273";

cljs.core.async.t_cljs$core$async36273.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async/t_cljs$core$async36273");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async36273 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async36273(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36274){
return (new cljs.core.async.t_cljs$core$async36273(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36274));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async36273(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17681__auto___36393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___36393,mults,ensure_mult,p){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___36393,mults,ensure_mult,p){
return (function (state_36347){
var state_val_36348 = (state_36347[(1)]);
if((state_val_36348 === (7))){
var inst_36343 = (state_36347[(2)]);
var state_36347__$1 = state_36347;
var statearr_36349_36394 = state_36347__$1;
(statearr_36349_36394[(2)] = inst_36343);

(statearr_36349_36394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (20))){
var state_36347__$1 = state_36347;
var statearr_36350_36395 = state_36347__$1;
(statearr_36350_36395[(2)] = null);

(statearr_36350_36395[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (1))){
var state_36347__$1 = state_36347;
var statearr_36351_36396 = state_36347__$1;
(statearr_36351_36396[(2)] = null);

(statearr_36351_36396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (24))){
var inst_36326 = (state_36347[(7)]);
var inst_36335 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36326);
var state_36347__$1 = state_36347;
var statearr_36352_36397 = state_36347__$1;
(statearr_36352_36397[(2)] = inst_36335);

(statearr_36352_36397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (4))){
var inst_36278 = (state_36347[(8)]);
var inst_36278__$1 = (state_36347[(2)]);
var inst_36279 = (inst_36278__$1 == null);
var state_36347__$1 = (function (){var statearr_36353 = state_36347;
(statearr_36353[(8)] = inst_36278__$1);

return statearr_36353;
})();
if(cljs.core.truth_(inst_36279)){
var statearr_36354_36398 = state_36347__$1;
(statearr_36354_36398[(1)] = (5));

} else {
var statearr_36355_36399 = state_36347__$1;
(statearr_36355_36399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (15))){
var inst_36320 = (state_36347[(2)]);
var state_36347__$1 = state_36347;
var statearr_36356_36400 = state_36347__$1;
(statearr_36356_36400[(2)] = inst_36320);

(statearr_36356_36400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (21))){
var inst_36340 = (state_36347[(2)]);
var state_36347__$1 = (function (){var statearr_36357 = state_36347;
(statearr_36357[(9)] = inst_36340);

return statearr_36357;
})();
var statearr_36358_36401 = state_36347__$1;
(statearr_36358_36401[(2)] = null);

(statearr_36358_36401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (13))){
var inst_36302 = (state_36347[(10)]);
var inst_36304 = cljs.core.chunked_seq_QMARK_.call(null,inst_36302);
var state_36347__$1 = state_36347;
if(inst_36304){
var statearr_36359_36402 = state_36347__$1;
(statearr_36359_36402[(1)] = (16));

} else {
var statearr_36360_36403 = state_36347__$1;
(statearr_36360_36403[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (22))){
var inst_36332 = (state_36347[(2)]);
var state_36347__$1 = state_36347;
if(cljs.core.truth_(inst_36332)){
var statearr_36361_36404 = state_36347__$1;
(statearr_36361_36404[(1)] = (23));

} else {
var statearr_36362_36405 = state_36347__$1;
(statearr_36362_36405[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (6))){
var inst_36328 = (state_36347[(11)]);
var inst_36278 = (state_36347[(8)]);
var inst_36326 = (state_36347[(7)]);
var inst_36326__$1 = topic_fn.call(null,inst_36278);
var inst_36327 = cljs.core.deref.call(null,mults);
var inst_36328__$1 = cljs.core.get.call(null,inst_36327,inst_36326__$1);
var state_36347__$1 = (function (){var statearr_36363 = state_36347;
(statearr_36363[(11)] = inst_36328__$1);

(statearr_36363[(7)] = inst_36326__$1);

return statearr_36363;
})();
if(cljs.core.truth_(inst_36328__$1)){
var statearr_36364_36406 = state_36347__$1;
(statearr_36364_36406[(1)] = (19));

} else {
var statearr_36365_36407 = state_36347__$1;
(statearr_36365_36407[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (25))){
var inst_36337 = (state_36347[(2)]);
var state_36347__$1 = state_36347;
var statearr_36366_36408 = state_36347__$1;
(statearr_36366_36408[(2)] = inst_36337);

(statearr_36366_36408[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (17))){
var inst_36302 = (state_36347[(10)]);
var inst_36311 = cljs.core.first.call(null,inst_36302);
var inst_36312 = cljs.core.async.muxch_STAR_.call(null,inst_36311);
var inst_36313 = cljs.core.async.close_BANG_.call(null,inst_36312);
var inst_36314 = cljs.core.next.call(null,inst_36302);
var inst_36288 = inst_36314;
var inst_36289 = null;
var inst_36290 = (0);
var inst_36291 = (0);
var state_36347__$1 = (function (){var statearr_36367 = state_36347;
(statearr_36367[(12)] = inst_36290);

(statearr_36367[(13)] = inst_36291);

(statearr_36367[(14)] = inst_36289);

(statearr_36367[(15)] = inst_36288);

(statearr_36367[(16)] = inst_36313);

return statearr_36367;
})();
var statearr_36368_36409 = state_36347__$1;
(statearr_36368_36409[(2)] = null);

(statearr_36368_36409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (3))){
var inst_36345 = (state_36347[(2)]);
var state_36347__$1 = state_36347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36347__$1,inst_36345);
} else {
if((state_val_36348 === (12))){
var inst_36322 = (state_36347[(2)]);
var state_36347__$1 = state_36347;
var statearr_36369_36410 = state_36347__$1;
(statearr_36369_36410[(2)] = inst_36322);

(statearr_36369_36410[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (2))){
var state_36347__$1 = state_36347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36347__$1,(4),ch);
} else {
if((state_val_36348 === (23))){
var state_36347__$1 = state_36347;
var statearr_36370_36411 = state_36347__$1;
(statearr_36370_36411[(2)] = null);

(statearr_36370_36411[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (19))){
var inst_36328 = (state_36347[(11)]);
var inst_36278 = (state_36347[(8)]);
var inst_36330 = cljs.core.async.muxch_STAR_.call(null,inst_36328);
var state_36347__$1 = state_36347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36347__$1,(22),inst_36330,inst_36278);
} else {
if((state_val_36348 === (11))){
var inst_36302 = (state_36347[(10)]);
var inst_36288 = (state_36347[(15)]);
var inst_36302__$1 = cljs.core.seq.call(null,inst_36288);
var state_36347__$1 = (function (){var statearr_36371 = state_36347;
(statearr_36371[(10)] = inst_36302__$1);

return statearr_36371;
})();
if(inst_36302__$1){
var statearr_36372_36412 = state_36347__$1;
(statearr_36372_36412[(1)] = (13));

} else {
var statearr_36373_36413 = state_36347__$1;
(statearr_36373_36413[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (9))){
var inst_36324 = (state_36347[(2)]);
var state_36347__$1 = state_36347;
var statearr_36374_36414 = state_36347__$1;
(statearr_36374_36414[(2)] = inst_36324);

(statearr_36374_36414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (5))){
var inst_36285 = cljs.core.deref.call(null,mults);
var inst_36286 = cljs.core.vals.call(null,inst_36285);
var inst_36287 = cljs.core.seq.call(null,inst_36286);
var inst_36288 = inst_36287;
var inst_36289 = null;
var inst_36290 = (0);
var inst_36291 = (0);
var state_36347__$1 = (function (){var statearr_36375 = state_36347;
(statearr_36375[(12)] = inst_36290);

(statearr_36375[(13)] = inst_36291);

(statearr_36375[(14)] = inst_36289);

(statearr_36375[(15)] = inst_36288);

return statearr_36375;
})();
var statearr_36376_36415 = state_36347__$1;
(statearr_36376_36415[(2)] = null);

(statearr_36376_36415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (14))){
var state_36347__$1 = state_36347;
var statearr_36380_36416 = state_36347__$1;
(statearr_36380_36416[(2)] = null);

(statearr_36380_36416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (16))){
var inst_36302 = (state_36347[(10)]);
var inst_36306 = cljs.core.chunk_first.call(null,inst_36302);
var inst_36307 = cljs.core.chunk_rest.call(null,inst_36302);
var inst_36308 = cljs.core.count.call(null,inst_36306);
var inst_36288 = inst_36307;
var inst_36289 = inst_36306;
var inst_36290 = inst_36308;
var inst_36291 = (0);
var state_36347__$1 = (function (){var statearr_36381 = state_36347;
(statearr_36381[(12)] = inst_36290);

(statearr_36381[(13)] = inst_36291);

(statearr_36381[(14)] = inst_36289);

(statearr_36381[(15)] = inst_36288);

return statearr_36381;
})();
var statearr_36382_36417 = state_36347__$1;
(statearr_36382_36417[(2)] = null);

(statearr_36382_36417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (10))){
var inst_36290 = (state_36347[(12)]);
var inst_36291 = (state_36347[(13)]);
var inst_36289 = (state_36347[(14)]);
var inst_36288 = (state_36347[(15)]);
var inst_36296 = cljs.core._nth.call(null,inst_36289,inst_36291);
var inst_36297 = cljs.core.async.muxch_STAR_.call(null,inst_36296);
var inst_36298 = cljs.core.async.close_BANG_.call(null,inst_36297);
var inst_36299 = (inst_36291 + (1));
var tmp36377 = inst_36290;
var tmp36378 = inst_36289;
var tmp36379 = inst_36288;
var inst_36288__$1 = tmp36379;
var inst_36289__$1 = tmp36378;
var inst_36290__$1 = tmp36377;
var inst_36291__$1 = inst_36299;
var state_36347__$1 = (function (){var statearr_36383 = state_36347;
(statearr_36383[(17)] = inst_36298);

(statearr_36383[(12)] = inst_36290__$1);

(statearr_36383[(13)] = inst_36291__$1);

(statearr_36383[(14)] = inst_36289__$1);

(statearr_36383[(15)] = inst_36288__$1);

return statearr_36383;
})();
var statearr_36384_36418 = state_36347__$1;
(statearr_36384_36418[(2)] = null);

(statearr_36384_36418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (18))){
var inst_36317 = (state_36347[(2)]);
var state_36347__$1 = state_36347;
var statearr_36385_36419 = state_36347__$1;
(statearr_36385_36419[(2)] = inst_36317);

(statearr_36385_36419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (8))){
var inst_36290 = (state_36347[(12)]);
var inst_36291 = (state_36347[(13)]);
var inst_36293 = (inst_36291 < inst_36290);
var inst_36294 = inst_36293;
var state_36347__$1 = state_36347;
if(cljs.core.truth_(inst_36294)){
var statearr_36386_36420 = state_36347__$1;
(statearr_36386_36420[(1)] = (10));

} else {
var statearr_36387_36421 = state_36347__$1;
(statearr_36387_36421[(1)] = (11));

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
});})(c__17681__auto___36393,mults,ensure_mult,p))
;
return ((function (switch__17591__auto__,c__17681__auto___36393,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17592__auto__ = null;
var cljs$core$async$state_machine__17592__auto____0 = (function (){
var statearr_36388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36388[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_36388[(1)] = (1));

return statearr_36388;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_36347){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_36347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e36389){if((e36389 instanceof Object)){
var ex__17595__auto__ = e36389;
var statearr_36390_36422 = state_36347;
(statearr_36390_36422[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36423 = state_36347;
state_36347 = G__36423;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_36347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_36347);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___36393,mults,ensure_mult,p))
})();
var state__17683__auto__ = (function (){var statearr_36391 = f__17682__auto__.call(null);
(statearr_36391[(6)] = c__17681__auto___36393);

return statearr_36391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___36393,mults,ensure_mult,p))
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
var G__36425 = arguments.length;
switch (G__36425) {
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
var G__36428 = arguments.length;
switch (G__36428) {
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
var G__36431 = arguments.length;
switch (G__36431) {
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
var c__17681__auto___36498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___36498,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___36498,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36470){
var state_val_36471 = (state_36470[(1)]);
if((state_val_36471 === (7))){
var state_36470__$1 = state_36470;
var statearr_36472_36499 = state_36470__$1;
(statearr_36472_36499[(2)] = null);

(statearr_36472_36499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (1))){
var state_36470__$1 = state_36470;
var statearr_36473_36500 = state_36470__$1;
(statearr_36473_36500[(2)] = null);

(statearr_36473_36500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (4))){
var inst_36434 = (state_36470[(7)]);
var inst_36436 = (inst_36434 < cnt);
var state_36470__$1 = state_36470;
if(cljs.core.truth_(inst_36436)){
var statearr_36474_36501 = state_36470__$1;
(statearr_36474_36501[(1)] = (6));

} else {
var statearr_36475_36502 = state_36470__$1;
(statearr_36475_36502[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (15))){
var inst_36466 = (state_36470[(2)]);
var state_36470__$1 = state_36470;
var statearr_36476_36503 = state_36470__$1;
(statearr_36476_36503[(2)] = inst_36466);

(statearr_36476_36503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (13))){
var inst_36459 = cljs.core.async.close_BANG_.call(null,out);
var state_36470__$1 = state_36470;
var statearr_36477_36504 = state_36470__$1;
(statearr_36477_36504[(2)] = inst_36459);

(statearr_36477_36504[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (6))){
var state_36470__$1 = state_36470;
var statearr_36478_36505 = state_36470__$1;
(statearr_36478_36505[(2)] = null);

(statearr_36478_36505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (3))){
var inst_36468 = (state_36470[(2)]);
var state_36470__$1 = state_36470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36470__$1,inst_36468);
} else {
if((state_val_36471 === (12))){
var inst_36456 = (state_36470[(8)]);
var inst_36456__$1 = (state_36470[(2)]);
var inst_36457 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36456__$1);
var state_36470__$1 = (function (){var statearr_36479 = state_36470;
(statearr_36479[(8)] = inst_36456__$1);

return statearr_36479;
})();
if(cljs.core.truth_(inst_36457)){
var statearr_36480_36506 = state_36470__$1;
(statearr_36480_36506[(1)] = (13));

} else {
var statearr_36481_36507 = state_36470__$1;
(statearr_36481_36507[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (2))){
var inst_36433 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36434 = (0);
var state_36470__$1 = (function (){var statearr_36482 = state_36470;
(statearr_36482[(9)] = inst_36433);

(statearr_36482[(7)] = inst_36434);

return statearr_36482;
})();
var statearr_36483_36508 = state_36470__$1;
(statearr_36483_36508[(2)] = null);

(statearr_36483_36508[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (11))){
var inst_36434 = (state_36470[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36470,(10),Object,null,(9));
var inst_36443 = chs__$1.call(null,inst_36434);
var inst_36444 = done.call(null,inst_36434);
var inst_36445 = cljs.core.async.take_BANG_.call(null,inst_36443,inst_36444);
var state_36470__$1 = state_36470;
var statearr_36484_36509 = state_36470__$1;
(statearr_36484_36509[(2)] = inst_36445);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36470__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (9))){
var inst_36434 = (state_36470[(7)]);
var inst_36447 = (state_36470[(2)]);
var inst_36448 = (inst_36434 + (1));
var inst_36434__$1 = inst_36448;
var state_36470__$1 = (function (){var statearr_36485 = state_36470;
(statearr_36485[(10)] = inst_36447);

(statearr_36485[(7)] = inst_36434__$1);

return statearr_36485;
})();
var statearr_36486_36510 = state_36470__$1;
(statearr_36486_36510[(2)] = null);

(statearr_36486_36510[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (5))){
var inst_36454 = (state_36470[(2)]);
var state_36470__$1 = (function (){var statearr_36487 = state_36470;
(statearr_36487[(11)] = inst_36454);

return statearr_36487;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36470__$1,(12),dchan);
} else {
if((state_val_36471 === (14))){
var inst_36456 = (state_36470[(8)]);
var inst_36461 = cljs.core.apply.call(null,f,inst_36456);
var state_36470__$1 = state_36470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36470__$1,(16),out,inst_36461);
} else {
if((state_val_36471 === (16))){
var inst_36463 = (state_36470[(2)]);
var state_36470__$1 = (function (){var statearr_36488 = state_36470;
(statearr_36488[(12)] = inst_36463);

return statearr_36488;
})();
var statearr_36489_36511 = state_36470__$1;
(statearr_36489_36511[(2)] = null);

(statearr_36489_36511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (10))){
var inst_36438 = (state_36470[(2)]);
var inst_36439 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36470__$1 = (function (){var statearr_36490 = state_36470;
(statearr_36490[(13)] = inst_36438);

return statearr_36490;
})();
var statearr_36491_36512 = state_36470__$1;
(statearr_36491_36512[(2)] = inst_36439);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36470__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36471 === (8))){
var inst_36452 = (state_36470[(2)]);
var state_36470__$1 = state_36470;
var statearr_36492_36513 = state_36470__$1;
(statearr_36492_36513[(2)] = inst_36452);

(statearr_36492_36513[(1)] = (5));


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
});})(c__17681__auto___36498,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17591__auto__,c__17681__auto___36498,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17592__auto__ = null;
var cljs$core$async$state_machine__17592__auto____0 = (function (){
var statearr_36493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36493[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_36493[(1)] = (1));

return statearr_36493;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_36470){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_36470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e36494){if((e36494 instanceof Object)){
var ex__17595__auto__ = e36494;
var statearr_36495_36514 = state_36470;
(statearr_36495_36514[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36515 = state_36470;
state_36470 = G__36515;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_36470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_36470);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___36498,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__17683__auto__ = (function (){var statearr_36496 = f__17682__auto__.call(null);
(statearr_36496[(6)] = c__17681__auto___36498);

return statearr_36496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___36498,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__36518 = arguments.length;
switch (G__36518) {
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
var c__17681__auto___36572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___36572,out){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___36572,out){
return (function (state_36550){
var state_val_36551 = (state_36550[(1)]);
if((state_val_36551 === (7))){
var inst_36530 = (state_36550[(7)]);
var inst_36529 = (state_36550[(8)]);
var inst_36529__$1 = (state_36550[(2)]);
var inst_36530__$1 = cljs.core.nth.call(null,inst_36529__$1,(0),null);
var inst_36531 = cljs.core.nth.call(null,inst_36529__$1,(1),null);
var inst_36532 = (inst_36530__$1 == null);
var state_36550__$1 = (function (){var statearr_36552 = state_36550;
(statearr_36552[(7)] = inst_36530__$1);

(statearr_36552[(9)] = inst_36531);

(statearr_36552[(8)] = inst_36529__$1);

return statearr_36552;
})();
if(cljs.core.truth_(inst_36532)){
var statearr_36553_36573 = state_36550__$1;
(statearr_36553_36573[(1)] = (8));

} else {
var statearr_36554_36574 = state_36550__$1;
(statearr_36554_36574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (1))){
var inst_36519 = cljs.core.vec.call(null,chs);
var inst_36520 = inst_36519;
var state_36550__$1 = (function (){var statearr_36555 = state_36550;
(statearr_36555[(10)] = inst_36520);

return statearr_36555;
})();
var statearr_36556_36575 = state_36550__$1;
(statearr_36556_36575[(2)] = null);

(statearr_36556_36575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (4))){
var inst_36520 = (state_36550[(10)]);
var state_36550__$1 = state_36550;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36550__$1,(7),inst_36520);
} else {
if((state_val_36551 === (6))){
var inst_36546 = (state_36550[(2)]);
var state_36550__$1 = state_36550;
var statearr_36557_36576 = state_36550__$1;
(statearr_36557_36576[(2)] = inst_36546);

(statearr_36557_36576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (3))){
var inst_36548 = (state_36550[(2)]);
var state_36550__$1 = state_36550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36550__$1,inst_36548);
} else {
if((state_val_36551 === (2))){
var inst_36520 = (state_36550[(10)]);
var inst_36522 = cljs.core.count.call(null,inst_36520);
var inst_36523 = (inst_36522 > (0));
var state_36550__$1 = state_36550;
if(cljs.core.truth_(inst_36523)){
var statearr_36559_36577 = state_36550__$1;
(statearr_36559_36577[(1)] = (4));

} else {
var statearr_36560_36578 = state_36550__$1;
(statearr_36560_36578[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (11))){
var inst_36520 = (state_36550[(10)]);
var inst_36539 = (state_36550[(2)]);
var tmp36558 = inst_36520;
var inst_36520__$1 = tmp36558;
var state_36550__$1 = (function (){var statearr_36561 = state_36550;
(statearr_36561[(11)] = inst_36539);

(statearr_36561[(10)] = inst_36520__$1);

return statearr_36561;
})();
var statearr_36562_36579 = state_36550__$1;
(statearr_36562_36579[(2)] = null);

(statearr_36562_36579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (9))){
var inst_36530 = (state_36550[(7)]);
var state_36550__$1 = state_36550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36550__$1,(11),out,inst_36530);
} else {
if((state_val_36551 === (5))){
var inst_36544 = cljs.core.async.close_BANG_.call(null,out);
var state_36550__$1 = state_36550;
var statearr_36563_36580 = state_36550__$1;
(statearr_36563_36580[(2)] = inst_36544);

(statearr_36563_36580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (10))){
var inst_36542 = (state_36550[(2)]);
var state_36550__$1 = state_36550;
var statearr_36564_36581 = state_36550__$1;
(statearr_36564_36581[(2)] = inst_36542);

(statearr_36564_36581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (8))){
var inst_36530 = (state_36550[(7)]);
var inst_36531 = (state_36550[(9)]);
var inst_36529 = (state_36550[(8)]);
var inst_36520 = (state_36550[(10)]);
var inst_36534 = (function (){var cs = inst_36520;
var vec__36525 = inst_36529;
var v = inst_36530;
var c = inst_36531;
return ((function (cs,vec__36525,v,c,inst_36530,inst_36531,inst_36529,inst_36520,state_val_36551,c__17681__auto___36572,out){
return (function (p1__36516_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36516_SHARP_);
});
;})(cs,vec__36525,v,c,inst_36530,inst_36531,inst_36529,inst_36520,state_val_36551,c__17681__auto___36572,out))
})();
var inst_36535 = cljs.core.filterv.call(null,inst_36534,inst_36520);
var inst_36520__$1 = inst_36535;
var state_36550__$1 = (function (){var statearr_36565 = state_36550;
(statearr_36565[(10)] = inst_36520__$1);

return statearr_36565;
})();
var statearr_36566_36582 = state_36550__$1;
(statearr_36566_36582[(2)] = null);

(statearr_36566_36582[(1)] = (2));


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
});})(c__17681__auto___36572,out))
;
return ((function (switch__17591__auto__,c__17681__auto___36572,out){
return (function() {
var cljs$core$async$state_machine__17592__auto__ = null;
var cljs$core$async$state_machine__17592__auto____0 = (function (){
var statearr_36567 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36567[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_36567[(1)] = (1));

return statearr_36567;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_36550){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_36550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e36568){if((e36568 instanceof Object)){
var ex__17595__auto__ = e36568;
var statearr_36569_36583 = state_36550;
(statearr_36569_36583[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36584 = state_36550;
state_36550 = G__36584;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_36550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_36550);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___36572,out))
})();
var state__17683__auto__ = (function (){var statearr_36570 = f__17682__auto__.call(null);
(statearr_36570[(6)] = c__17681__auto___36572);

return statearr_36570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___36572,out))
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
var G__36586 = arguments.length;
switch (G__36586) {
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
var c__17681__auto___36631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___36631,out){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___36631,out){
return (function (state_36610){
var state_val_36611 = (state_36610[(1)]);
if((state_val_36611 === (7))){
var inst_36592 = (state_36610[(7)]);
var inst_36592__$1 = (state_36610[(2)]);
var inst_36593 = (inst_36592__$1 == null);
var inst_36594 = cljs.core.not.call(null,inst_36593);
var state_36610__$1 = (function (){var statearr_36612 = state_36610;
(statearr_36612[(7)] = inst_36592__$1);

return statearr_36612;
})();
if(inst_36594){
var statearr_36613_36632 = state_36610__$1;
(statearr_36613_36632[(1)] = (8));

} else {
var statearr_36614_36633 = state_36610__$1;
(statearr_36614_36633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36611 === (1))){
var inst_36587 = (0);
var state_36610__$1 = (function (){var statearr_36615 = state_36610;
(statearr_36615[(8)] = inst_36587);

return statearr_36615;
})();
var statearr_36616_36634 = state_36610__$1;
(statearr_36616_36634[(2)] = null);

(statearr_36616_36634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36611 === (4))){
var state_36610__$1 = state_36610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36610__$1,(7),ch);
} else {
if((state_val_36611 === (6))){
var inst_36605 = (state_36610[(2)]);
var state_36610__$1 = state_36610;
var statearr_36617_36635 = state_36610__$1;
(statearr_36617_36635[(2)] = inst_36605);

(statearr_36617_36635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36611 === (3))){
var inst_36607 = (state_36610[(2)]);
var inst_36608 = cljs.core.async.close_BANG_.call(null,out);
var state_36610__$1 = (function (){var statearr_36618 = state_36610;
(statearr_36618[(9)] = inst_36607);

return statearr_36618;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36610__$1,inst_36608);
} else {
if((state_val_36611 === (2))){
var inst_36587 = (state_36610[(8)]);
var inst_36589 = (inst_36587 < n);
var state_36610__$1 = state_36610;
if(cljs.core.truth_(inst_36589)){
var statearr_36619_36636 = state_36610__$1;
(statearr_36619_36636[(1)] = (4));

} else {
var statearr_36620_36637 = state_36610__$1;
(statearr_36620_36637[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36611 === (11))){
var inst_36587 = (state_36610[(8)]);
var inst_36597 = (state_36610[(2)]);
var inst_36598 = (inst_36587 + (1));
var inst_36587__$1 = inst_36598;
var state_36610__$1 = (function (){var statearr_36621 = state_36610;
(statearr_36621[(10)] = inst_36597);

(statearr_36621[(8)] = inst_36587__$1);

return statearr_36621;
})();
var statearr_36622_36638 = state_36610__$1;
(statearr_36622_36638[(2)] = null);

(statearr_36622_36638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36611 === (9))){
var state_36610__$1 = state_36610;
var statearr_36623_36639 = state_36610__$1;
(statearr_36623_36639[(2)] = null);

(statearr_36623_36639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36611 === (5))){
var state_36610__$1 = state_36610;
var statearr_36624_36640 = state_36610__$1;
(statearr_36624_36640[(2)] = null);

(statearr_36624_36640[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36611 === (10))){
var inst_36602 = (state_36610[(2)]);
var state_36610__$1 = state_36610;
var statearr_36625_36641 = state_36610__$1;
(statearr_36625_36641[(2)] = inst_36602);

(statearr_36625_36641[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36611 === (8))){
var inst_36592 = (state_36610[(7)]);
var state_36610__$1 = state_36610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36610__$1,(11),out,inst_36592);
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
});})(c__17681__auto___36631,out))
;
return ((function (switch__17591__auto__,c__17681__auto___36631,out){
return (function() {
var cljs$core$async$state_machine__17592__auto__ = null;
var cljs$core$async$state_machine__17592__auto____0 = (function (){
var statearr_36626 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36626[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_36626[(1)] = (1));

return statearr_36626;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_36610){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_36610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e36627){if((e36627 instanceof Object)){
var ex__17595__auto__ = e36627;
var statearr_36628_36642 = state_36610;
(statearr_36628_36642[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36643 = state_36610;
state_36610 = G__36643;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_36610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_36610);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___36631,out))
})();
var state__17683__auto__ = (function (){var statearr_36629 = f__17682__auto__.call(null);
(statearr_36629[(6)] = c__17681__auto___36631);

return statearr_36629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___36631,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36645 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36645 = (function (f,ch,meta36646){
this.f = f;
this.ch = ch;
this.meta36646 = meta36646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36647,meta36646__$1){
var self__ = this;
var _36647__$1 = this;
return (new cljs.core.async.t_cljs$core$async36645(self__.f,self__.ch,meta36646__$1));
});

cljs.core.async.t_cljs$core$async36645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36647){
var self__ = this;
var _36647__$1 = this;
return self__.meta36646;
});

cljs.core.async.t_cljs$core$async36645.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36645.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36645.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36645.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36645.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36648 = (function (f,ch,meta36646,_,fn1,meta36649){
this.f = f;
this.ch = ch;
this.meta36646 = meta36646;
this._ = _;
this.fn1 = fn1;
this.meta36649 = meta36649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36650,meta36649__$1){
var self__ = this;
var _36650__$1 = this;
return (new cljs.core.async.t_cljs$core$async36648(self__.f,self__.ch,self__.meta36646,self__._,self__.fn1,meta36649__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36650){
var self__ = this;
var _36650__$1 = this;
return self__.meta36649;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36644_SHARP_){
return f1.call(null,(((p1__36644_SHARP_ == null))?null:self__.f.call(null,p1__36644_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36648.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36646","meta36646",1934259015,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36645","cljs.core.async/t_cljs$core$async36645",-171174115,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36649","meta36649",-1228257503,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36648";

cljs.core.async.t_cljs$core$async36648.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async/t_cljs$core$async36648");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36648 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36648(f__$1,ch__$1,meta36646__$1,___$2,fn1__$1,meta36649){
return (new cljs.core.async.t_cljs$core$async36648(f__$1,ch__$1,meta36646__$1,___$2,fn1__$1,meta36649));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36648(self__.f,self__.ch,self__.meta36646,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async36645.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36645.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36646","meta36646",1934259015,null)], null);
});

cljs.core.async.t_cljs$core$async36645.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36645";

cljs.core.async.t_cljs$core$async36645.cljs$lang$ctorPrWriter = (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async/t_cljs$core$async36645");
});

cljs.core.async.__GT_t_cljs$core$async36645 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36645(f__$1,ch__$1,meta36646){
return (new cljs.core.async.t_cljs$core$async36645(f__$1,ch__$1,meta36646));
});

}

return (new cljs.core.async.t_cljs$core$async36645(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36651 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36651 = (function (f,ch,meta36652){
this.f = f;
this.ch = ch;
this.meta36652 = meta36652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36653,meta36652__$1){
var self__ = this;
var _36653__$1 = this;
return (new cljs.core.async.t_cljs$core$async36651(self__.f,self__.ch,meta36652__$1));
});

cljs.core.async.t_cljs$core$async36651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36653){
var self__ = this;
var _36653__$1 = this;
return self__.meta36652;
});

cljs.core.async.t_cljs$core$async36651.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36651.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36651.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36651.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36651.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36651.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36652","meta36652",-1257872893,null)], null);
});

cljs.core.async.t_cljs$core$async36651.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36651";

cljs.core.async.t_cljs$core$async36651.cljs$lang$ctorPrWriter = (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async/t_cljs$core$async36651");
});

cljs.core.async.__GT_t_cljs$core$async36651 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36651(f__$1,ch__$1,meta36652){
return (new cljs.core.async.t_cljs$core$async36651(f__$1,ch__$1,meta36652));
});

}

return (new cljs.core.async.t_cljs$core$async36651(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36654 = (function (p,ch,meta36655){
this.p = p;
this.ch = ch;
this.meta36655 = meta36655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36656,meta36655__$1){
var self__ = this;
var _36656__$1 = this;
return (new cljs.core.async.t_cljs$core$async36654(self__.p,self__.ch,meta36655__$1));
});

cljs.core.async.t_cljs$core$async36654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36656){
var self__ = this;
var _36656__$1 = this;
return self__.meta36655;
});

cljs.core.async.t_cljs$core$async36654.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36654.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36654.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36654.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36654.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36654.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36654.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36655","meta36655",-1812031929,null)], null);
});

cljs.core.async.t_cljs$core$async36654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36654";

cljs.core.async.t_cljs$core$async36654.cljs$lang$ctorPrWriter = (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async/t_cljs$core$async36654");
});

cljs.core.async.__GT_t_cljs$core$async36654 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36654(p__$1,ch__$1,meta36655){
return (new cljs.core.async.t_cljs$core$async36654(p__$1,ch__$1,meta36655));
});

}

return (new cljs.core.async.t_cljs$core$async36654(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36658 = arguments.length;
switch (G__36658) {
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
var c__17681__auto___36698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___36698,out){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___36698,out){
return (function (state_36679){
var state_val_36680 = (state_36679[(1)]);
if((state_val_36680 === (7))){
var inst_36675 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36681_36699 = state_36679__$1;
(statearr_36681_36699[(2)] = inst_36675);

(statearr_36681_36699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (1))){
var state_36679__$1 = state_36679;
var statearr_36682_36700 = state_36679__$1;
(statearr_36682_36700[(2)] = null);

(statearr_36682_36700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (4))){
var inst_36661 = (state_36679[(7)]);
var inst_36661__$1 = (state_36679[(2)]);
var inst_36662 = (inst_36661__$1 == null);
var state_36679__$1 = (function (){var statearr_36683 = state_36679;
(statearr_36683[(7)] = inst_36661__$1);

return statearr_36683;
})();
if(cljs.core.truth_(inst_36662)){
var statearr_36684_36701 = state_36679__$1;
(statearr_36684_36701[(1)] = (5));

} else {
var statearr_36685_36702 = state_36679__$1;
(statearr_36685_36702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (6))){
var inst_36661 = (state_36679[(7)]);
var inst_36666 = p.call(null,inst_36661);
var state_36679__$1 = state_36679;
if(cljs.core.truth_(inst_36666)){
var statearr_36686_36703 = state_36679__$1;
(statearr_36686_36703[(1)] = (8));

} else {
var statearr_36687_36704 = state_36679__$1;
(statearr_36687_36704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (3))){
var inst_36677 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36679__$1,inst_36677);
} else {
if((state_val_36680 === (2))){
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36679__$1,(4),ch);
} else {
if((state_val_36680 === (11))){
var inst_36669 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36688_36705 = state_36679__$1;
(statearr_36688_36705[(2)] = inst_36669);

(statearr_36688_36705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (9))){
var state_36679__$1 = state_36679;
var statearr_36689_36706 = state_36679__$1;
(statearr_36689_36706[(2)] = null);

(statearr_36689_36706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (5))){
var inst_36664 = cljs.core.async.close_BANG_.call(null,out);
var state_36679__$1 = state_36679;
var statearr_36690_36707 = state_36679__$1;
(statearr_36690_36707[(2)] = inst_36664);

(statearr_36690_36707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (10))){
var inst_36672 = (state_36679[(2)]);
var state_36679__$1 = (function (){var statearr_36691 = state_36679;
(statearr_36691[(8)] = inst_36672);

return statearr_36691;
})();
var statearr_36692_36708 = state_36679__$1;
(statearr_36692_36708[(2)] = null);

(statearr_36692_36708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (8))){
var inst_36661 = (state_36679[(7)]);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36679__$1,(11),out,inst_36661);
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
});})(c__17681__auto___36698,out))
;
return ((function (switch__17591__auto__,c__17681__auto___36698,out){
return (function() {
var cljs$core$async$state_machine__17592__auto__ = null;
var cljs$core$async$state_machine__17592__auto____0 = (function (){
var statearr_36693 = [null,null,null,null,null,null,null,null,null];
(statearr_36693[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_36693[(1)] = (1));

return statearr_36693;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_36679){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_36679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e36694){if((e36694 instanceof Object)){
var ex__17595__auto__ = e36694;
var statearr_36695_36709 = state_36679;
(statearr_36695_36709[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36710 = state_36679;
state_36679 = G__36710;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_36679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_36679);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___36698,out))
})();
var state__17683__auto__ = (function (){var statearr_36696 = f__17682__auto__.call(null);
(statearr_36696[(6)] = c__17681__auto___36698);

return statearr_36696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___36698,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36712 = arguments.length;
switch (G__36712) {
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
return (function (state_36775){
var state_val_36776 = (state_36775[(1)]);
if((state_val_36776 === (7))){
var inst_36771 = (state_36775[(2)]);
var state_36775__$1 = state_36775;
var statearr_36777_36815 = state_36775__$1;
(statearr_36777_36815[(2)] = inst_36771);

(statearr_36777_36815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (20))){
var inst_36741 = (state_36775[(7)]);
var inst_36752 = (state_36775[(2)]);
var inst_36753 = cljs.core.next.call(null,inst_36741);
var inst_36727 = inst_36753;
var inst_36728 = null;
var inst_36729 = (0);
var inst_36730 = (0);
var state_36775__$1 = (function (){var statearr_36778 = state_36775;
(statearr_36778[(8)] = inst_36730);

(statearr_36778[(9)] = inst_36727);

(statearr_36778[(10)] = inst_36729);

(statearr_36778[(11)] = inst_36728);

(statearr_36778[(12)] = inst_36752);

return statearr_36778;
})();
var statearr_36779_36816 = state_36775__$1;
(statearr_36779_36816[(2)] = null);

(statearr_36779_36816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (1))){
var state_36775__$1 = state_36775;
var statearr_36780_36817 = state_36775__$1;
(statearr_36780_36817[(2)] = null);

(statearr_36780_36817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (4))){
var inst_36716 = (state_36775[(13)]);
var inst_36716__$1 = (state_36775[(2)]);
var inst_36717 = (inst_36716__$1 == null);
var state_36775__$1 = (function (){var statearr_36781 = state_36775;
(statearr_36781[(13)] = inst_36716__$1);

return statearr_36781;
})();
if(cljs.core.truth_(inst_36717)){
var statearr_36782_36818 = state_36775__$1;
(statearr_36782_36818[(1)] = (5));

} else {
var statearr_36783_36819 = state_36775__$1;
(statearr_36783_36819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (15))){
var state_36775__$1 = state_36775;
var statearr_36787_36820 = state_36775__$1;
(statearr_36787_36820[(2)] = null);

(statearr_36787_36820[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (21))){
var state_36775__$1 = state_36775;
var statearr_36788_36821 = state_36775__$1;
(statearr_36788_36821[(2)] = null);

(statearr_36788_36821[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (13))){
var inst_36730 = (state_36775[(8)]);
var inst_36727 = (state_36775[(9)]);
var inst_36729 = (state_36775[(10)]);
var inst_36728 = (state_36775[(11)]);
var inst_36737 = (state_36775[(2)]);
var inst_36738 = (inst_36730 + (1));
var tmp36784 = inst_36727;
var tmp36785 = inst_36729;
var tmp36786 = inst_36728;
var inst_36727__$1 = tmp36784;
var inst_36728__$1 = tmp36786;
var inst_36729__$1 = tmp36785;
var inst_36730__$1 = inst_36738;
var state_36775__$1 = (function (){var statearr_36789 = state_36775;
(statearr_36789[(8)] = inst_36730__$1);

(statearr_36789[(14)] = inst_36737);

(statearr_36789[(9)] = inst_36727__$1);

(statearr_36789[(10)] = inst_36729__$1);

(statearr_36789[(11)] = inst_36728__$1);

return statearr_36789;
})();
var statearr_36790_36822 = state_36775__$1;
(statearr_36790_36822[(2)] = null);

(statearr_36790_36822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (22))){
var state_36775__$1 = state_36775;
var statearr_36791_36823 = state_36775__$1;
(statearr_36791_36823[(2)] = null);

(statearr_36791_36823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (6))){
var inst_36716 = (state_36775[(13)]);
var inst_36725 = f.call(null,inst_36716);
var inst_36726 = cljs.core.seq.call(null,inst_36725);
var inst_36727 = inst_36726;
var inst_36728 = null;
var inst_36729 = (0);
var inst_36730 = (0);
var state_36775__$1 = (function (){var statearr_36792 = state_36775;
(statearr_36792[(8)] = inst_36730);

(statearr_36792[(9)] = inst_36727);

(statearr_36792[(10)] = inst_36729);

(statearr_36792[(11)] = inst_36728);

return statearr_36792;
})();
var statearr_36793_36824 = state_36775__$1;
(statearr_36793_36824[(2)] = null);

(statearr_36793_36824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (17))){
var inst_36741 = (state_36775[(7)]);
var inst_36745 = cljs.core.chunk_first.call(null,inst_36741);
var inst_36746 = cljs.core.chunk_rest.call(null,inst_36741);
var inst_36747 = cljs.core.count.call(null,inst_36745);
var inst_36727 = inst_36746;
var inst_36728 = inst_36745;
var inst_36729 = inst_36747;
var inst_36730 = (0);
var state_36775__$1 = (function (){var statearr_36794 = state_36775;
(statearr_36794[(8)] = inst_36730);

(statearr_36794[(9)] = inst_36727);

(statearr_36794[(10)] = inst_36729);

(statearr_36794[(11)] = inst_36728);

return statearr_36794;
})();
var statearr_36795_36825 = state_36775__$1;
(statearr_36795_36825[(2)] = null);

(statearr_36795_36825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (3))){
var inst_36773 = (state_36775[(2)]);
var state_36775__$1 = state_36775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36775__$1,inst_36773);
} else {
if((state_val_36776 === (12))){
var inst_36761 = (state_36775[(2)]);
var state_36775__$1 = state_36775;
var statearr_36796_36826 = state_36775__$1;
(statearr_36796_36826[(2)] = inst_36761);

(statearr_36796_36826[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (2))){
var state_36775__$1 = state_36775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36775__$1,(4),in$);
} else {
if((state_val_36776 === (23))){
var inst_36769 = (state_36775[(2)]);
var state_36775__$1 = state_36775;
var statearr_36797_36827 = state_36775__$1;
(statearr_36797_36827[(2)] = inst_36769);

(statearr_36797_36827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (19))){
var inst_36756 = (state_36775[(2)]);
var state_36775__$1 = state_36775;
var statearr_36798_36828 = state_36775__$1;
(statearr_36798_36828[(2)] = inst_36756);

(statearr_36798_36828[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (11))){
var inst_36727 = (state_36775[(9)]);
var inst_36741 = (state_36775[(7)]);
var inst_36741__$1 = cljs.core.seq.call(null,inst_36727);
var state_36775__$1 = (function (){var statearr_36799 = state_36775;
(statearr_36799[(7)] = inst_36741__$1);

return statearr_36799;
})();
if(inst_36741__$1){
var statearr_36800_36829 = state_36775__$1;
(statearr_36800_36829[(1)] = (14));

} else {
var statearr_36801_36830 = state_36775__$1;
(statearr_36801_36830[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (9))){
var inst_36763 = (state_36775[(2)]);
var inst_36764 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36775__$1 = (function (){var statearr_36802 = state_36775;
(statearr_36802[(15)] = inst_36763);

return statearr_36802;
})();
if(cljs.core.truth_(inst_36764)){
var statearr_36803_36831 = state_36775__$1;
(statearr_36803_36831[(1)] = (21));

} else {
var statearr_36804_36832 = state_36775__$1;
(statearr_36804_36832[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (5))){
var inst_36719 = cljs.core.async.close_BANG_.call(null,out);
var state_36775__$1 = state_36775;
var statearr_36805_36833 = state_36775__$1;
(statearr_36805_36833[(2)] = inst_36719);

(statearr_36805_36833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (14))){
var inst_36741 = (state_36775[(7)]);
var inst_36743 = cljs.core.chunked_seq_QMARK_.call(null,inst_36741);
var state_36775__$1 = state_36775;
if(inst_36743){
var statearr_36806_36834 = state_36775__$1;
(statearr_36806_36834[(1)] = (17));

} else {
var statearr_36807_36835 = state_36775__$1;
(statearr_36807_36835[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (16))){
var inst_36759 = (state_36775[(2)]);
var state_36775__$1 = state_36775;
var statearr_36808_36836 = state_36775__$1;
(statearr_36808_36836[(2)] = inst_36759);

(statearr_36808_36836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36776 === (10))){
var inst_36730 = (state_36775[(8)]);
var inst_36728 = (state_36775[(11)]);
var inst_36735 = cljs.core._nth.call(null,inst_36728,inst_36730);
var state_36775__$1 = state_36775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36775__$1,(13),out,inst_36735);
} else {
if((state_val_36776 === (18))){
var inst_36741 = (state_36775[(7)]);
var inst_36750 = cljs.core.first.call(null,inst_36741);
var state_36775__$1 = state_36775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36775__$1,(20),out,inst_36750);
} else {
if((state_val_36776 === (8))){
var inst_36730 = (state_36775[(8)]);
var inst_36729 = (state_36775[(10)]);
var inst_36732 = (inst_36730 < inst_36729);
var inst_36733 = inst_36732;
var state_36775__$1 = state_36775;
if(cljs.core.truth_(inst_36733)){
var statearr_36809_36837 = state_36775__$1;
(statearr_36809_36837[(1)] = (10));

} else {
var statearr_36810_36838 = state_36775__$1;
(statearr_36810_36838[(1)] = (11));

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
var statearr_36811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36811[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17592__auto__);

(statearr_36811[(1)] = (1));

return statearr_36811;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17592__auto____1 = (function (state_36775){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_36775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e36812){if((e36812 instanceof Object)){
var ex__17595__auto__ = e36812;
var statearr_36813_36839 = state_36775;
(statearr_36813_36839[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36840 = state_36775;
state_36775 = G__36840;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17592__auto__ = function(state_36775){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17592__auto____1.call(this,state_36775);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17592__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17592__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__))
})();
var state__17683__auto__ = (function (){var statearr_36814 = f__17682__auto__.call(null);
(statearr_36814[(6)] = c__17681__auto__);

return statearr_36814;
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
var G__36842 = arguments.length;
switch (G__36842) {
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
var G__36845 = arguments.length;
switch (G__36845) {
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
var G__36848 = arguments.length;
switch (G__36848) {
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
var c__17681__auto___36895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___36895,out){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___36895,out){
return (function (state_36872){
var state_val_36873 = (state_36872[(1)]);
if((state_val_36873 === (7))){
var inst_36867 = (state_36872[(2)]);
var state_36872__$1 = state_36872;
var statearr_36874_36896 = state_36872__$1;
(statearr_36874_36896[(2)] = inst_36867);

(statearr_36874_36896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36873 === (1))){
var inst_36849 = null;
var state_36872__$1 = (function (){var statearr_36875 = state_36872;
(statearr_36875[(7)] = inst_36849);

return statearr_36875;
})();
var statearr_36876_36897 = state_36872__$1;
(statearr_36876_36897[(2)] = null);

(statearr_36876_36897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36873 === (4))){
var inst_36852 = (state_36872[(8)]);
var inst_36852__$1 = (state_36872[(2)]);
var inst_36853 = (inst_36852__$1 == null);
var inst_36854 = cljs.core.not.call(null,inst_36853);
var state_36872__$1 = (function (){var statearr_36877 = state_36872;
(statearr_36877[(8)] = inst_36852__$1);

return statearr_36877;
})();
if(inst_36854){
var statearr_36878_36898 = state_36872__$1;
(statearr_36878_36898[(1)] = (5));

} else {
var statearr_36879_36899 = state_36872__$1;
(statearr_36879_36899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36873 === (6))){
var state_36872__$1 = state_36872;
var statearr_36880_36900 = state_36872__$1;
(statearr_36880_36900[(2)] = null);

(statearr_36880_36900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36873 === (3))){
var inst_36869 = (state_36872[(2)]);
var inst_36870 = cljs.core.async.close_BANG_.call(null,out);
var state_36872__$1 = (function (){var statearr_36881 = state_36872;
(statearr_36881[(9)] = inst_36869);

return statearr_36881;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36872__$1,inst_36870);
} else {
if((state_val_36873 === (2))){
var state_36872__$1 = state_36872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36872__$1,(4),ch);
} else {
if((state_val_36873 === (11))){
var inst_36852 = (state_36872[(8)]);
var inst_36861 = (state_36872[(2)]);
var inst_36849 = inst_36852;
var state_36872__$1 = (function (){var statearr_36882 = state_36872;
(statearr_36882[(7)] = inst_36849);

(statearr_36882[(10)] = inst_36861);

return statearr_36882;
})();
var statearr_36883_36901 = state_36872__$1;
(statearr_36883_36901[(2)] = null);

(statearr_36883_36901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36873 === (9))){
var inst_36852 = (state_36872[(8)]);
var state_36872__$1 = state_36872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36872__$1,(11),out,inst_36852);
} else {
if((state_val_36873 === (5))){
var inst_36849 = (state_36872[(7)]);
var inst_36852 = (state_36872[(8)]);
var inst_36856 = cljs.core._EQ_.call(null,inst_36852,inst_36849);
var state_36872__$1 = state_36872;
if(inst_36856){
var statearr_36885_36902 = state_36872__$1;
(statearr_36885_36902[(1)] = (8));

} else {
var statearr_36886_36903 = state_36872__$1;
(statearr_36886_36903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36873 === (10))){
var inst_36864 = (state_36872[(2)]);
var state_36872__$1 = state_36872;
var statearr_36887_36904 = state_36872__$1;
(statearr_36887_36904[(2)] = inst_36864);

(statearr_36887_36904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36873 === (8))){
var inst_36849 = (state_36872[(7)]);
var tmp36884 = inst_36849;
var inst_36849__$1 = tmp36884;
var state_36872__$1 = (function (){var statearr_36888 = state_36872;
(statearr_36888[(7)] = inst_36849__$1);

return statearr_36888;
})();
var statearr_36889_36905 = state_36872__$1;
(statearr_36889_36905[(2)] = null);

(statearr_36889_36905[(1)] = (2));


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
});})(c__17681__auto___36895,out))
;
return ((function (switch__17591__auto__,c__17681__auto___36895,out){
return (function() {
var cljs$core$async$state_machine__17592__auto__ = null;
var cljs$core$async$state_machine__17592__auto____0 = (function (){
var statearr_36890 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36890[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_36890[(1)] = (1));

return statearr_36890;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_36872){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_36872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e36891){if((e36891 instanceof Object)){
var ex__17595__auto__ = e36891;
var statearr_36892_36906 = state_36872;
(statearr_36892_36906[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36907 = state_36872;
state_36872 = G__36907;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_36872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_36872);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___36895,out))
})();
var state__17683__auto__ = (function (){var statearr_36893 = f__17682__auto__.call(null);
(statearr_36893[(6)] = c__17681__auto___36895);

return statearr_36893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___36895,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36909 = arguments.length;
switch (G__36909) {
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
var c__17681__auto___36975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___36975,out){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___36975,out){
return (function (state_36947){
var state_val_36948 = (state_36947[(1)]);
if((state_val_36948 === (7))){
var inst_36943 = (state_36947[(2)]);
var state_36947__$1 = state_36947;
var statearr_36949_36976 = state_36947__$1;
(statearr_36949_36976[(2)] = inst_36943);

(statearr_36949_36976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (1))){
var inst_36910 = (new Array(n));
var inst_36911 = inst_36910;
var inst_36912 = (0);
var state_36947__$1 = (function (){var statearr_36950 = state_36947;
(statearr_36950[(7)] = inst_36911);

(statearr_36950[(8)] = inst_36912);

return statearr_36950;
})();
var statearr_36951_36977 = state_36947__$1;
(statearr_36951_36977[(2)] = null);

(statearr_36951_36977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (4))){
var inst_36915 = (state_36947[(9)]);
var inst_36915__$1 = (state_36947[(2)]);
var inst_36916 = (inst_36915__$1 == null);
var inst_36917 = cljs.core.not.call(null,inst_36916);
var state_36947__$1 = (function (){var statearr_36952 = state_36947;
(statearr_36952[(9)] = inst_36915__$1);

return statearr_36952;
})();
if(inst_36917){
var statearr_36953_36978 = state_36947__$1;
(statearr_36953_36978[(1)] = (5));

} else {
var statearr_36954_36979 = state_36947__$1;
(statearr_36954_36979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (15))){
var inst_36937 = (state_36947[(2)]);
var state_36947__$1 = state_36947;
var statearr_36955_36980 = state_36947__$1;
(statearr_36955_36980[(2)] = inst_36937);

(statearr_36955_36980[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (13))){
var state_36947__$1 = state_36947;
var statearr_36956_36981 = state_36947__$1;
(statearr_36956_36981[(2)] = null);

(statearr_36956_36981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (6))){
var inst_36912 = (state_36947[(8)]);
var inst_36933 = (inst_36912 > (0));
var state_36947__$1 = state_36947;
if(cljs.core.truth_(inst_36933)){
var statearr_36957_36982 = state_36947__$1;
(statearr_36957_36982[(1)] = (12));

} else {
var statearr_36958_36983 = state_36947__$1;
(statearr_36958_36983[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (3))){
var inst_36945 = (state_36947[(2)]);
var state_36947__$1 = state_36947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36947__$1,inst_36945);
} else {
if((state_val_36948 === (12))){
var inst_36911 = (state_36947[(7)]);
var inst_36935 = cljs.core.vec.call(null,inst_36911);
var state_36947__$1 = state_36947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36947__$1,(15),out,inst_36935);
} else {
if((state_val_36948 === (2))){
var state_36947__$1 = state_36947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36947__$1,(4),ch);
} else {
if((state_val_36948 === (11))){
var inst_36927 = (state_36947[(2)]);
var inst_36928 = (new Array(n));
var inst_36911 = inst_36928;
var inst_36912 = (0);
var state_36947__$1 = (function (){var statearr_36959 = state_36947;
(statearr_36959[(7)] = inst_36911);

(statearr_36959[(8)] = inst_36912);

(statearr_36959[(10)] = inst_36927);

return statearr_36959;
})();
var statearr_36960_36984 = state_36947__$1;
(statearr_36960_36984[(2)] = null);

(statearr_36960_36984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (9))){
var inst_36911 = (state_36947[(7)]);
var inst_36925 = cljs.core.vec.call(null,inst_36911);
var state_36947__$1 = state_36947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36947__$1,(11),out,inst_36925);
} else {
if((state_val_36948 === (5))){
var inst_36911 = (state_36947[(7)]);
var inst_36912 = (state_36947[(8)]);
var inst_36915 = (state_36947[(9)]);
var inst_36920 = (state_36947[(11)]);
var inst_36919 = (inst_36911[inst_36912] = inst_36915);
var inst_36920__$1 = (inst_36912 + (1));
var inst_36921 = (inst_36920__$1 < n);
var state_36947__$1 = (function (){var statearr_36961 = state_36947;
(statearr_36961[(12)] = inst_36919);

(statearr_36961[(11)] = inst_36920__$1);

return statearr_36961;
})();
if(cljs.core.truth_(inst_36921)){
var statearr_36962_36985 = state_36947__$1;
(statearr_36962_36985[(1)] = (8));

} else {
var statearr_36963_36986 = state_36947__$1;
(statearr_36963_36986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (14))){
var inst_36940 = (state_36947[(2)]);
var inst_36941 = cljs.core.async.close_BANG_.call(null,out);
var state_36947__$1 = (function (){var statearr_36965 = state_36947;
(statearr_36965[(13)] = inst_36940);

return statearr_36965;
})();
var statearr_36966_36987 = state_36947__$1;
(statearr_36966_36987[(2)] = inst_36941);

(statearr_36966_36987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (10))){
var inst_36931 = (state_36947[(2)]);
var state_36947__$1 = state_36947;
var statearr_36967_36988 = state_36947__$1;
(statearr_36967_36988[(2)] = inst_36931);

(statearr_36967_36988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (8))){
var inst_36911 = (state_36947[(7)]);
var inst_36920 = (state_36947[(11)]);
var tmp36964 = inst_36911;
var inst_36911__$1 = tmp36964;
var inst_36912 = inst_36920;
var state_36947__$1 = (function (){var statearr_36968 = state_36947;
(statearr_36968[(7)] = inst_36911__$1);

(statearr_36968[(8)] = inst_36912);

return statearr_36968;
})();
var statearr_36969_36989 = state_36947__$1;
(statearr_36969_36989[(2)] = null);

(statearr_36969_36989[(1)] = (2));


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
});})(c__17681__auto___36975,out))
;
return ((function (switch__17591__auto__,c__17681__auto___36975,out){
return (function() {
var cljs$core$async$state_machine__17592__auto__ = null;
var cljs$core$async$state_machine__17592__auto____0 = (function (){
var statearr_36970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36970[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_36970[(1)] = (1));

return statearr_36970;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_36947){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_36947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e36971){if((e36971 instanceof Object)){
var ex__17595__auto__ = e36971;
var statearr_36972_36990 = state_36947;
(statearr_36972_36990[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36991 = state_36947;
state_36947 = G__36991;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_36947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_36947);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___36975,out))
})();
var state__17683__auto__ = (function (){var statearr_36973 = f__17682__auto__.call(null);
(statearr_36973[(6)] = c__17681__auto___36975);

return statearr_36973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___36975,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36993 = arguments.length;
switch (G__36993) {
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
var c__17681__auto___37063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___37063,out){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___37063,out){
return (function (state_37035){
var state_val_37036 = (state_37035[(1)]);
if((state_val_37036 === (7))){
var inst_37031 = (state_37035[(2)]);
var state_37035__$1 = state_37035;
var statearr_37037_37064 = state_37035__$1;
(statearr_37037_37064[(2)] = inst_37031);

(statearr_37037_37064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37036 === (1))){
var inst_36994 = [];
var inst_36995 = inst_36994;
var inst_36996 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37035__$1 = (function (){var statearr_37038 = state_37035;
(statearr_37038[(7)] = inst_36995);

(statearr_37038[(8)] = inst_36996);

return statearr_37038;
})();
var statearr_37039_37065 = state_37035__$1;
(statearr_37039_37065[(2)] = null);

(statearr_37039_37065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37036 === (4))){
var inst_36999 = (state_37035[(9)]);
var inst_36999__$1 = (state_37035[(2)]);
var inst_37000 = (inst_36999__$1 == null);
var inst_37001 = cljs.core.not.call(null,inst_37000);
var state_37035__$1 = (function (){var statearr_37040 = state_37035;
(statearr_37040[(9)] = inst_36999__$1);

return statearr_37040;
})();
if(inst_37001){
var statearr_37041_37066 = state_37035__$1;
(statearr_37041_37066[(1)] = (5));

} else {
var statearr_37042_37067 = state_37035__$1;
(statearr_37042_37067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37036 === (15))){
var inst_37025 = (state_37035[(2)]);
var state_37035__$1 = state_37035;
var statearr_37043_37068 = state_37035__$1;
(statearr_37043_37068[(2)] = inst_37025);

(statearr_37043_37068[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37036 === (13))){
var state_37035__$1 = state_37035;
var statearr_37044_37069 = state_37035__$1;
(statearr_37044_37069[(2)] = null);

(statearr_37044_37069[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37036 === (6))){
var inst_36995 = (state_37035[(7)]);
var inst_37020 = inst_36995.length;
var inst_37021 = (inst_37020 > (0));
var state_37035__$1 = state_37035;
if(cljs.core.truth_(inst_37021)){
var statearr_37045_37070 = state_37035__$1;
(statearr_37045_37070[(1)] = (12));

} else {
var statearr_37046_37071 = state_37035__$1;
(statearr_37046_37071[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37036 === (3))){
var inst_37033 = (state_37035[(2)]);
var state_37035__$1 = state_37035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37035__$1,inst_37033);
} else {
if((state_val_37036 === (12))){
var inst_36995 = (state_37035[(7)]);
var inst_37023 = cljs.core.vec.call(null,inst_36995);
var state_37035__$1 = state_37035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37035__$1,(15),out,inst_37023);
} else {
if((state_val_37036 === (2))){
var state_37035__$1 = state_37035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37035__$1,(4),ch);
} else {
if((state_val_37036 === (11))){
var inst_36999 = (state_37035[(9)]);
var inst_37003 = (state_37035[(10)]);
var inst_37013 = (state_37035[(2)]);
var inst_37014 = [];
var inst_37015 = inst_37014.push(inst_36999);
var inst_36995 = inst_37014;
var inst_36996 = inst_37003;
var state_37035__$1 = (function (){var statearr_37047 = state_37035;
(statearr_37047[(7)] = inst_36995);

(statearr_37047[(11)] = inst_37013);

(statearr_37047[(8)] = inst_36996);

(statearr_37047[(12)] = inst_37015);

return statearr_37047;
})();
var statearr_37048_37072 = state_37035__$1;
(statearr_37048_37072[(2)] = null);

(statearr_37048_37072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37036 === (9))){
var inst_36995 = (state_37035[(7)]);
var inst_37011 = cljs.core.vec.call(null,inst_36995);
var state_37035__$1 = state_37035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37035__$1,(11),out,inst_37011);
} else {
if((state_val_37036 === (5))){
var inst_36996 = (state_37035[(8)]);
var inst_36999 = (state_37035[(9)]);
var inst_37003 = (state_37035[(10)]);
var inst_37003__$1 = f.call(null,inst_36999);
var inst_37004 = cljs.core._EQ_.call(null,inst_37003__$1,inst_36996);
var inst_37005 = cljs.core.keyword_identical_QMARK_.call(null,inst_36996,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37006 = (inst_37004) || (inst_37005);
var state_37035__$1 = (function (){var statearr_37049 = state_37035;
(statearr_37049[(10)] = inst_37003__$1);

return statearr_37049;
})();
if(cljs.core.truth_(inst_37006)){
var statearr_37050_37073 = state_37035__$1;
(statearr_37050_37073[(1)] = (8));

} else {
var statearr_37051_37074 = state_37035__$1;
(statearr_37051_37074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37036 === (14))){
var inst_37028 = (state_37035[(2)]);
var inst_37029 = cljs.core.async.close_BANG_.call(null,out);
var state_37035__$1 = (function (){var statearr_37053 = state_37035;
(statearr_37053[(13)] = inst_37028);

return statearr_37053;
})();
var statearr_37054_37075 = state_37035__$1;
(statearr_37054_37075[(2)] = inst_37029);

(statearr_37054_37075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37036 === (10))){
var inst_37018 = (state_37035[(2)]);
var state_37035__$1 = state_37035;
var statearr_37055_37076 = state_37035__$1;
(statearr_37055_37076[(2)] = inst_37018);

(statearr_37055_37076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37036 === (8))){
var inst_36995 = (state_37035[(7)]);
var inst_36999 = (state_37035[(9)]);
var inst_37003 = (state_37035[(10)]);
var inst_37008 = inst_36995.push(inst_36999);
var tmp37052 = inst_36995;
var inst_36995__$1 = tmp37052;
var inst_36996 = inst_37003;
var state_37035__$1 = (function (){var statearr_37056 = state_37035;
(statearr_37056[(14)] = inst_37008);

(statearr_37056[(7)] = inst_36995__$1);

(statearr_37056[(8)] = inst_36996);

return statearr_37056;
})();
var statearr_37057_37077 = state_37035__$1;
(statearr_37057_37077[(2)] = null);

(statearr_37057_37077[(1)] = (2));


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
});})(c__17681__auto___37063,out))
;
return ((function (switch__17591__auto__,c__17681__auto___37063,out){
return (function() {
var cljs$core$async$state_machine__17592__auto__ = null;
var cljs$core$async$state_machine__17592__auto____0 = (function (){
var statearr_37058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37058[(0)] = cljs$core$async$state_machine__17592__auto__);

(statearr_37058[(1)] = (1));

return statearr_37058;
});
var cljs$core$async$state_machine__17592__auto____1 = (function (state_37035){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_37035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e37059){if((e37059 instanceof Object)){
var ex__17595__auto__ = e37059;
var statearr_37060_37078 = state_37035;
(statearr_37060_37078[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37079 = state_37035;
state_37035 = G__37079;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs$core$async$state_machine__17592__auto__ = function(state_37035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17592__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17592__auto____1.call(this,state_37035);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17592__auto____0;
cljs$core$async$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17592__auto____1;
return cljs$core$async$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___37063,out))
})();
var state__17683__auto__ = (function (){var statearr_37061 = f__17682__auto__.call(null);
(statearr_37061[(6)] = c__17681__auto___37063);

return statearr_37061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___37063,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
