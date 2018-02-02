// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35030 = (function (val,meta35031){
this.val = val;
this.meta35031 = meta35031;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35032,meta35031__$1){
var self__ = this;
var _35032__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35030(self__.val,meta35031__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35032){
var self__ = this;
var _35032__$1 = this;
return self__.meta35031;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35030.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta35031","meta35031",-1923957227,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35030.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35030.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels35030";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35030.cljs$lang$ctorPrWriter = (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels35030");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels35030 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels35030(val__$1,meta35031){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35030(val__$1,meta35031));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels35030(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__9659__auto__ = (((this$ == null))?null:this$);
var m__9660__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__9659__auto__)]);
if(!((m__9660__auto__ == null))){
return m__9660__auto__.call(null,this$);
} else {
var m__9660__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__9660__auto____$1 == null))){
return m__9660__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_35044 = self__.puts.pop();
if((putter_35044 == null)){
} else {
var put_handler_35045 = putter_35044.handler;
var val_35046 = putter_35044.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_35045)){
var put_cb_35047 = cljs.core.async.impl.protocols.commit.call(null,put_handler_35045);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_35047,put_handler_35045,val_35046,putter_35044,this$__$1){
return (function (){
return put_cb_35047.call(null,true);
});})(put_cb_35047,put_handler_35045,val_35046,putter_35044,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__8914__auto__ = self__.buf;
if(cljs.core.truth_(and__8914__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__8914__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__35048 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__35048;
continue;
} else {
var G__35049 = takers;
takers = G__35049;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__35033_35050 = cljs.core.seq.call(null,take_cbs);
var chunk__35034_35051 = null;
var count__35035_35052 = (0);
var i__35036_35053 = (0);
while(true){
if((i__35036_35053 < count__35035_35052)){
var f_35054 = cljs.core._nth.call(null,chunk__35034_35051,i__35036_35053);
cljs.core.async.impl.dispatch.run.call(null,f_35054);

var G__35055 = seq__35033_35050;
var G__35056 = chunk__35034_35051;
var G__35057 = count__35035_35052;
var G__35058 = (i__35036_35053 + (1));
seq__35033_35050 = G__35055;
chunk__35034_35051 = G__35056;
count__35035_35052 = G__35057;
i__35036_35053 = G__35058;
continue;
} else {
var temp__5457__auto___35059 = cljs.core.seq.call(null,seq__35033_35050);
if(temp__5457__auto___35059){
var seq__35033_35060__$1 = temp__5457__auto___35059;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35033_35060__$1)){
var c__9857__auto___35061 = cljs.core.chunk_first.call(null,seq__35033_35060__$1);
var G__35062 = cljs.core.chunk_rest.call(null,seq__35033_35060__$1);
var G__35063 = c__9857__auto___35061;
var G__35064 = cljs.core.count.call(null,c__9857__auto___35061);
var G__35065 = (0);
seq__35033_35050 = G__35062;
chunk__35034_35051 = G__35063;
count__35035_35052 = G__35064;
i__35036_35053 = G__35065;
continue;
} else {
var f_35066 = cljs.core.first.call(null,seq__35033_35060__$1);
cljs.core.async.impl.dispatch.run.call(null,f_35066);

var G__35067 = cljs.core.next.call(null,seq__35033_35060__$1);
var G__35068 = null;
var G__35069 = (0);
var G__35070 = (0);
seq__35033_35050 = G__35067;
chunk__35034_35051 = G__35068;
count__35035_35052 = G__35069;
i__35036_35053 = G__35070;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join('')),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var temp__5455__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5455__auto__)){
var take_cb = temp__5455__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__35037 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__8914__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__8914__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__8914__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))){
var G__35071 = cbs__$1;
cbs = G__35071;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__35037,(0),null);
var cbs = cljs.core.nth.call(null,vec__35037,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__35040_35072 = cljs.core.seq.call(null,cbs);
var chunk__35041_35073 = null;
var count__35042_35074 = (0);
var i__35043_35075 = (0);
while(true){
if((i__35043_35075 < count__35042_35074)){
var cb_35076 = cljs.core._nth.call(null,chunk__35041_35073,i__35043_35075);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__35040_35072,chunk__35041_35073,count__35042_35074,i__35043_35075,cb_35076,val,vec__35037,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return cb_35076.call(null,true);
});})(seq__35040_35072,chunk__35041_35073,count__35042_35074,i__35043_35075,cb_35076,val,vec__35037,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__35077 = seq__35040_35072;
var G__35078 = chunk__35041_35073;
var G__35079 = count__35042_35074;
var G__35080 = (i__35043_35075 + (1));
seq__35040_35072 = G__35077;
chunk__35041_35073 = G__35078;
count__35042_35074 = G__35079;
i__35043_35075 = G__35080;
continue;
} else {
var temp__5457__auto___35081 = cljs.core.seq.call(null,seq__35040_35072);
if(temp__5457__auto___35081){
var seq__35040_35082__$1 = temp__5457__auto___35081;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35040_35082__$1)){
var c__9857__auto___35083 = cljs.core.chunk_first.call(null,seq__35040_35082__$1);
var G__35084 = cljs.core.chunk_rest.call(null,seq__35040_35082__$1);
var G__35085 = c__9857__auto___35083;
var G__35086 = cljs.core.count.call(null,c__9857__auto___35083);
var G__35087 = (0);
seq__35040_35072 = G__35084;
chunk__35041_35073 = G__35085;
count__35042_35074 = G__35086;
i__35043_35075 = G__35087;
continue;
} else {
var cb_35088 = cljs.core.first.call(null,seq__35040_35082__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__35040_35072,chunk__35041_35073,count__35042_35074,i__35043_35075,cb_35088,seq__35040_35082__$1,temp__5457__auto___35081,val,vec__35037,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return cb_35088.call(null,true);
});})(seq__35040_35072,chunk__35041_35073,count__35042_35074,i__35043_35075,cb_35088,seq__35040_35082__$1,temp__5457__auto___35081,val,vec__35037,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__35089 = cljs.core.next.call(null,seq__35040_35082__$1);
var G__35090 = null;
var G__35091 = (0);
var G__35092 = (0);
seq__35040_35072 = G__35089;
chunk__35041_35073 = G__35090;
count__35042_35074 = G__35091;
i__35043_35075 = G__35092;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__8914__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__8914__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__8914__auto__;
}
})())){
var has_val = (function (){var and__8914__auto__ = self__.buf;
if(cljs.core.truth_(and__8914__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__8914__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join('')),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__8914__auto__ = self__.buf;
if(cljs.core.truth_(and__8914__auto__)){
return (self__.puts.length === (0));
} else {
return and__8914__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_35093 = self__.takes.pop();
if((taker_35093 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_35093)){
var take_cb_35094 = cljs.core.async.impl.protocols.commit.call(null,taker_35093);
var val_35095 = (cljs.core.truth_((function (){var and__8914__auto__ = self__.buf;
if(cljs.core.truth_(and__8914__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__8914__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_35094,val_35095,taker_35093,this$__$1){
return (function (){
return take_cb_35094.call(null,val_35095);
});})(take_cb_35094,val_35095,taker_35093,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__8926__auto__ = exh;
if(cljs.core.truth_(or__8926__auto__)){
return or__8926__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__35097 = arguments.length;
switch (G__35097) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__35101 = null;
var G__35101__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e35098){var t = e35098;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__35101__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e35099){var t = e35099;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__35101 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__35101__1.call(this,buf__$1);
case 2:
return G__35101__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__35101.cljs$core$IFn$_invoke$arity$1 = G__35101__1;
G__35101.cljs$core$IFn$_invoke$arity$2 = G__35101__2;
return G__35101;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map
