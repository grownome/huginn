// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('huginn.mqtt');
goog.require('cljs.core');
goog.require('promesa.core');
goog.require('clojure.string');
goog.require('huginn.jwt');
goog.require('huginn.config');
goog.require('taoensso.timbre');
goog.require('cljs.core.async');
goog.require('cljs.nodejs');
huginn.mqtt.node$module$mqtt = require('mqtt');
huginn.mqtt.node$module$systeminformation = require('systeminformation');
huginn.mqtt.client_id = (function huginn$mqtt$client_id(p__63602){
var map__63603 = p__63602;
var map__63603__$1 = ((((!((map__63603 == null)))?((((map__63603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63603):map__63603);
var opts = map__63603__$1;
var projectId = cljs.core.get.call(null,map__63603__$1,new cljs.core.Keyword(null,"projectId","projectId",-1551013096));
var registryId = cljs.core.get.call(null,map__63603__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var cloudRegion = cljs.core.get.call(null,map__63603__$1,new cljs.core.Keyword(null,"cloudRegion","cloudRegion",-857757214));
var deviceId = cljs.core.get.call(null,map__63603__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["projects/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(projectId),"/locations/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cloudRegion),"/registries/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId)].join('');
});
huginn.mqtt.client_handlers = (function huginn$mqtt$client_handlers(success_fn,fail,send,recv){
return new cljs.core.PersistentArrayMap(null, 4, ["connect",(function (success){
cljs.core.println.call(null,"connected");

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","*cider-repl huginn*",28,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connected"], null);
}),null)),null,-1780149070);

if(cljs.core.truth_(success)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","*cider-repl huginn*",31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection success"], null);
}),null)),null,623223901);

return success_fn.call(null);
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","*cider-repl huginn*",34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection failure"], null);
}),null)),null,2056252601);

return fail.call(null);
}
}),"close",(function (){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","*cider-repl huginn*",36,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection closed"], null);
}),null)),null,1472307483);
}),"error",(function (err){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","*cider-repl huginn*",37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error: ",err], null);
}),null)),null,1671631910);
}),"message",(function (topic,message,packet){
try{var result__63471__auto___63606 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,message,packet], null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","*cider-repl huginn*",39,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__63471__auto___63606){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"message","message",1234475525,null),new cljs.core.Symbol(null,"packet","packet",1106973446,null)], null),"=>",result__63471__auto___63606], null);
});})(result__63471__auto___63606))
,null)),null,-2132069482);

}catch (e63605){if((e63605 instanceof Error)){
var e__63433__auto___63607 = e63605;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","*cider-repl huginn*",39,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__63433__auto___63607){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__63433__auto___63607], null);
});})(e__63433__auto___63607))
,null)),null,1083943675);

throw e__63433__auto___63607;
} else {
throw e63605;

}
}
return cljs.core.async._GT__BANG_.call(null,recv,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"topic","topic",-1960480691),topic,new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"packet","packet",-533558081),packet], null));
})], null);
});
huginn.mqtt.add_handlers = (function huginn$mqtt$add_handlers(client,handlers){
var seq__63608 = cljs.core.seq.call(null,handlers);
var chunk__63609 = null;
var count__63610 = (0);
var i__63611 = (0);
while(true){
if((i__63611 < count__63610)){
var vec__63612 = cljs.core._nth.call(null,chunk__63609,i__63611);
var key = cljs.core.nth.call(null,vec__63612,(0),null);
var hand = cljs.core.nth.call(null,vec__63612,(1),null);
client.on(key,hand);

var G__63618 = seq__63608;
var G__63619 = chunk__63609;
var G__63620 = count__63610;
var G__63621 = (i__63611 + (1));
seq__63608 = G__63618;
chunk__63609 = G__63619;
count__63610 = G__63620;
i__63611 = G__63621;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__63608);
if(temp__5457__auto__){
var seq__63608__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63608__$1)){
var c__22133__auto__ = cljs.core.chunk_first.call(null,seq__63608__$1);
var G__63622 = cljs.core.chunk_rest.call(null,seq__63608__$1);
var G__63623 = c__22133__auto__;
var G__63624 = cljs.core.count.call(null,c__22133__auto__);
var G__63625 = (0);
seq__63608 = G__63622;
chunk__63609 = G__63623;
count__63610 = G__63624;
i__63611 = G__63625;
continue;
} else {
var vec__63615 = cljs.core.first.call(null,seq__63608__$1);
var key = cljs.core.nth.call(null,vec__63615,(0),null);
var hand = cljs.core.nth.call(null,vec__63615,(1),null);
client.on(key,hand);

var G__63626 = cljs.core.next.call(null,seq__63608__$1);
var G__63627 = null;
var G__63628 = (0);
var G__63629 = (0);
seq__63608 = G__63626;
chunk__63609 = G__63627;
count__63610 = G__63628;
i__63611 = G__63629;
continue;
}
} else {
return null;
}
}
break;
}
});
huginn.mqtt.build_client = (function huginn$mqtt$build_client(opts){
var conn_args = huginn.jwt.connection_args.call(null,opts);
var client = huginn.mqtt.node$module$mqtt.connect.call(null,conn_args);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),huginn.mqtt.node$module$mqtt.connect.call(null,conn_args),new cljs.core.Keyword(null,"iat-time","iat-time",111865064),huginn.jwt.round_now.call(null)], null);
});
huginn.mqtt.init_client = (function huginn$mqtt$init_client(opts,send,recv){
return promesa.core.promise.call(null,(function (resolve,reject){
var map__63630 = huginn.mqtt.build_client.call(null,opts);
var map__63630__$1 = ((((!((map__63630 == null)))?((((map__63630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63630.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63630):map__63630);
var init = map__63630__$1;
var time = cljs.core.get.call(null,map__63630__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var client = cljs.core.get.call(null,map__63630__$1,new cljs.core.Keyword(null,"client","client",-1323448117));
var handlers = huginn.mqtt.client_handlers.call(null,((function (map__63630,map__63630__$1,init,time,client){
return (function (){
return resolve.call(null,client);
});})(map__63630,map__63630__$1,init,time,client))
,((function (map__63630,map__63630__$1,init,time,client){
return (function (){
return reject.call(null,new cljs.core.Keyword(null,"client-fail","client-fail",1564298304));
});})(map__63630,map__63630__$1,init,time,client))
,send,recv);
return huginn.mqtt.add_handlers.call(null,client,handlers);
}));
});
huginn.mqtt.payload_root = (function huginn$mqtt$payload_root(p__63632){
var map__63633 = p__63632;
var map__63633__$1 = ((((!((map__63633 == null)))?((((map__63633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63633):map__63633);
var opts = map__63633__$1;
var registryId = cljs.core.get.call(null,map__63633__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var deviceId = cljs.core.get.call(null,map__63633__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"-payload"].join('');
});
/**
 * msg-type can be 'state' for state updates
 * or 'events' to publish telemetry
 */
huginn.mqtt.mqtt_topic = (function huginn$mqtt$mqtt_topic(p__63635,msg_type){
var map__63636 = p__63635;
var map__63636__$1 = ((((!((map__63636 == null)))?((((map__63636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63636.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63636):map__63636);
var opts = map__63636__$1;
var deviceId = cljs.core.get.call(null,map__63636__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_type)].join('');
});
huginn.mqtt.prep_temps = (function huginn$mqtt$prep_temps(opts,data){
var pr = huginn.mqtt.payload_root.call(null,opts);
var cores_raw = cljs.core.js__GT_clj.call(null,data.cores);
var cores = cljs.core.map_indexed.call(null,((function (pr,cores_raw){
return (function (index,value){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pr),"-core-temp-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''))].join(''),new cljs.core.Keyword(null,"ts","ts",1617209904),huginn.jwt.round_now.call(null)], null);
});})(pr,cores_raw))
,cores_raw);
var main = (cljs.core.truth_(data.main)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pr),"-core-temp-main/",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(data.main)].join(''))].join(''),new cljs.core.Keyword(null,"ts","ts",1617209904),huginn.jwt.round_now.call(null)], null):null);
var max = (cljs.core.truth_(data.max)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pr),"-core-temp-max/",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(data.max)].join(''))].join(''),new cljs.core.Keyword(null,"ts","ts",1617209904),huginn.jwt.round_now.call(null)], null):null);
return cljs.core.apply.call(null,cljs.core.concat,main,max,cores);
});
huginn.mqtt.stop = cljs.core.atom.call(null,false);
huginn.mqtt.publish_one = (function huginn$mqtt$publish_one(client_atom,p__63638){
var map__63639 = p__63638;
var map__63639__$1 = ((((!((map__63639 == null)))?((((map__63639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63639):map__63639);
var topic = cljs.core.get.call(null,map__63639__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var payload = cljs.core.get.call(null,map__63639__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var qos = cljs.core.get.call(null,map__63639__$1,new cljs.core.Keyword(null,"qos","qos",-2124292319));
return client_atom.publish(topic,payload,qos);
});
huginn.mqtt.publisher = (function huginn$mqtt$publisher(client_atom,send_chan){
var c__38078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto__){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto__){
return (function (state_63650){
var state_val_63651 = (state_63650[(1)]);
if((state_val_63651 === (1))){
var state_63650__$1 = state_63650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63650__$1,(2),send_chan);
} else {
if((state_val_63651 === (2))){
var inst_63642 = (state_63650[(2)]);
var inst_63643 = inst_63642;
var state_63650__$1 = (function (){var statearr_63652 = state_63650;
(statearr_63652[(7)] = inst_63643);

return statearr_63652;
})();
var statearr_63653_63659 = state_63650__$1;
(statearr_63653_63659[(2)] = null);

(statearr_63653_63659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (3))){
var inst_63643 = (state_63650[(7)]);
var inst_63645 = cljs.core.deref.call(null,client_atom);
var inst_63646 = huginn.mqtt.publish_one.call(null,inst_63645,inst_63643);
var state_63650__$1 = state_63650;
var statearr_63654_63660 = state_63650__$1;
(statearr_63654_63660[(2)] = inst_63646);

(statearr_63654_63660[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63651 === (4))){
var inst_63648 = (state_63650[(2)]);
var state_63650__$1 = state_63650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63650__$1,inst_63648);
} else {
return null;
}
}
}
}
});})(c__38078__auto__))
;
return ((function (switch__37921__auto__,c__38078__auto__){
return (function() {
var huginn$mqtt$publisher_$_state_machine__37922__auto__ = null;
var huginn$mqtt$publisher_$_state_machine__37922__auto____0 = (function (){
var statearr_63655 = [null,null,null,null,null,null,null,null];
(statearr_63655[(0)] = huginn$mqtt$publisher_$_state_machine__37922__auto__);

(statearr_63655[(1)] = (1));

return statearr_63655;
});
var huginn$mqtt$publisher_$_state_machine__37922__auto____1 = (function (state_63650){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_63650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e63656){if((e63656 instanceof Object)){
var ex__37925__auto__ = e63656;
var statearr_63657_63661 = state_63650;
(statearr_63657_63661[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63662 = state_63650;
state_63650 = G__63662;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
huginn$mqtt$publisher_$_state_machine__37922__auto__ = function(state_63650){
switch(arguments.length){
case 0:
return huginn$mqtt$publisher_$_state_machine__37922__auto____0.call(this);
case 1:
return huginn$mqtt$publisher_$_state_machine__37922__auto____1.call(this,state_63650);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$publisher_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$publisher_$_state_machine__37922__auto____0;
huginn$mqtt$publisher_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$publisher_$_state_machine__37922__auto____1;
return huginn$mqtt$publisher_$_state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto__))
})();
var state__38080__auto__ = (function (){var statearr_63658 = f__38079__auto__.call(null);
(statearr_63658[(6)] = c__38078__auto__);

return statearr_63658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto__))
);

return c__38078__auto__;
});
/**
 * loops and refreshs the client atom every token experation
 */
huginn.mqtt.client_refresher = (function huginn$mqtt$client_refresher(client_atom,p__63663,send,recv){
var map__63664 = p__63663;
var map__63664__$1 = ((((!((map__63664 == null)))?((((map__63664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63664.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63664):map__63664);
var opts = map__63664__$1;
var tokenExpMins = cljs.core.get.call(null,map__63664__$1,new cljs.core.Keyword(null,"tokenExpMins","tokenExpMins",-1638711857));
var delayMs = cljs.core.get.call(null,map__63664__$1,new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168));
var c__38078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto__,map__63664,map__63664__$1,opts,tokenExpMins,delayMs){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto__,map__63664,map__63664__$1,opts,tokenExpMins,delayMs){
return (function (state_63683){
var state_val_63684 = (state_63683[(1)]);
if((state_val_63684 === (1))){
var inst_63666 = (tokenExpMins * (60));
var inst_63667 = cljs.core.async.timeout.call(null,inst_63666);
var state_63683__$1 = state_63683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63683__$1,(2),inst_63667);
} else {
if((state_val_63684 === (2))){
var inst_63669 = (state_63683[(2)]);
var inst_63670 = inst_63669;
var state_63683__$1 = (function (){var statearr_63685 = state_63683;
(statearr_63685[(7)] = inst_63670);

return statearr_63685;
})();
var statearr_63686_63693 = state_63683__$1;
(statearr_63686_63693[(2)] = null);

(statearr_63686_63693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63684 === (3))){
var inst_63670 = (state_63683[(7)]);
var inst_63672 = (tokenExpMins * (60));
var inst_63673 = ["\tRefreshing token after ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_63672)," seconds"].join('');
var inst_63674 = cljs.core.println.call(null,inst_63673);
var inst_63675 = cljs.core.deref.call(null,client_atom);
var inst_63676 = inst_63675.end();
var inst_63677 = huginn.mqtt.init_client.call(null,opts,send,recv);
var inst_63678 = (function (){var wait = inst_63670;
return ((function (wait,inst_63670,inst_63672,inst_63673,inst_63674,inst_63675,inst_63676,inst_63677,state_val_63684,c__38078__auto__,map__63664,map__63664__$1,opts,tokenExpMins,delayMs){
return (function (client){
return cljs.core.reset_BANG_.call(null,client_atom,client);
});
;})(wait,inst_63670,inst_63672,inst_63673,inst_63674,inst_63675,inst_63676,inst_63677,state_val_63684,c__38078__auto__,map__63664,map__63664__$1,opts,tokenExpMins,delayMs))
})();
var inst_63679 = promesa.core.then.call(null,inst_63677,inst_63678);
var state_63683__$1 = (function (){var statearr_63687 = state_63683;
(statearr_63687[(8)] = inst_63674);

(statearr_63687[(9)] = inst_63676);

return statearr_63687;
})();
var statearr_63688_63694 = state_63683__$1;
(statearr_63688_63694[(2)] = inst_63679);

(statearr_63688_63694[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63684 === (4))){
var inst_63681 = (state_63683[(2)]);
var state_63683__$1 = state_63683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63683__$1,inst_63681);
} else {
return null;
}
}
}
}
});})(c__38078__auto__,map__63664,map__63664__$1,opts,tokenExpMins,delayMs))
;
return ((function (switch__37921__auto__,c__38078__auto__,map__63664,map__63664__$1,opts,tokenExpMins,delayMs){
return (function() {
var huginn$mqtt$client_refresher_$_state_machine__37922__auto__ = null;
var huginn$mqtt$client_refresher_$_state_machine__37922__auto____0 = (function (){
var statearr_63689 = [null,null,null,null,null,null,null,null,null,null];
(statearr_63689[(0)] = huginn$mqtt$client_refresher_$_state_machine__37922__auto__);

(statearr_63689[(1)] = (1));

return statearr_63689;
});
var huginn$mqtt$client_refresher_$_state_machine__37922__auto____1 = (function (state_63683){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_63683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e63690){if((e63690 instanceof Object)){
var ex__37925__auto__ = e63690;
var statearr_63691_63695 = state_63683;
(statearr_63691_63695[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63696 = state_63683;
state_63683 = G__63696;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
huginn$mqtt$client_refresher_$_state_machine__37922__auto__ = function(state_63683){
switch(arguments.length){
case 0:
return huginn$mqtt$client_refresher_$_state_machine__37922__auto____0.call(this);
case 1:
return huginn$mqtt$client_refresher_$_state_machine__37922__auto____1.call(this,state_63683);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_refresher_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_refresher_$_state_machine__37922__auto____0;
huginn$mqtt$client_refresher_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_refresher_$_state_machine__37922__auto____1;
return huginn$mqtt$client_refresher_$_state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto__,map__63664,map__63664__$1,opts,tokenExpMins,delayMs))
})();
var state__38080__auto__ = (function (){var statearr_63692 = f__38079__auto__.call(null);
(statearr_63692[(6)] = c__38078__auto__);

return statearr_63692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto__,map__63664,map__63664__$1,opts,tokenExpMins,delayMs))
);

return c__38078__auto__;
});
huginn.mqtt.tele_chan = (function huginn$mqtt$tele_chan(opts){
var temp_chan = cljs.core.async.chan.call(null);
var out_chan = cljs.core.async.chan.call(null);
var c__38078__auto___63729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto___63729,temp_chan,out_chan){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto___63729,temp_chan,out_chan){
return (function (state_63710){
var state_val_63711 = (state_63710[(1)]);
if((state_val_63711 === (1))){
var state_63710__$1 = state_63710;
var statearr_63712_63730 = state_63710__$1;
(statearr_63712_63730[(2)] = null);

(statearr_63712_63730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63711 === (2))){
var inst_63698 = huginn.mqtt.node$module$systeminformation.cpuTemperature.call(null);
var inst_63699 = cljs.core.partial.call(null,huginn.mqtt.prep_temps,opts);
var inst_63700 = (function (){return ((function (inst_63698,inst_63699,state_val_63711,c__38078__auto___63729,temp_chan,out_chan){
return (function (vs){
var c__38078__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto____$1,inst_63698,inst_63699,state_val_63711,c__38078__auto___63729,temp_chan,out_chan){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto____$1,inst_63698,inst_63699,state_val_63711,c__38078__auto___63729,temp_chan,out_chan){
return (function (state_63716){
var state_val_63717 = (state_63716[(1)]);
if((state_val_63717 === (1))){
var state_63716__$1 = state_63716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63716__$1,(2),temp_chan,vs);
} else {
if((state_val_63717 === (2))){
var inst_63714 = (state_63716[(2)]);
var state_63716__$1 = state_63716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63716__$1,inst_63714);
} else {
return null;
}
}
});})(c__38078__auto____$1,inst_63698,inst_63699,state_val_63711,c__38078__auto___63729,temp_chan,out_chan))
;
return ((function (switch__37921__auto__,c__38078__auto____$1,inst_63698,inst_63699,state_val_63711,c__38078__auto___63729,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__37922__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__37922__auto____0 = (function (){
var statearr_63718 = [null,null,null,null,null,null,null];
(statearr_63718[(0)] = huginn$mqtt$tele_chan_$_state_machine__37922__auto__);

(statearr_63718[(1)] = (1));

return statearr_63718;
});
var huginn$mqtt$tele_chan_$_state_machine__37922__auto____1 = (function (state_63716){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_63716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e63719){if((e63719 instanceof Object)){
var ex__37925__auto__ = e63719;
var statearr_63720_63731 = state_63716;
(statearr_63720_63731[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63732 = state_63716;
state_63716 = G__63732;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__37922__auto__ = function(state_63716){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__37922__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__37922__auto____1.call(this,state_63716);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__37922__auto____0;
huginn$mqtt$tele_chan_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__37922__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto____$1,inst_63698,inst_63699,state_val_63711,c__38078__auto___63729,temp_chan,out_chan))
})();
var state__38080__auto__ = (function (){var statearr_63721 = f__38079__auto__.call(null);
(statearr_63721[(6)] = c__38078__auto____$1);

return statearr_63721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto____$1,inst_63698,inst_63699,state_val_63711,c__38078__auto___63729,temp_chan,out_chan))
);

return c__38078__auto____$1;
});
;})(inst_63698,inst_63699,state_val_63711,c__38078__auto___63729,temp_chan,out_chan))
})();
var inst_63701 = promesa.core.chain.call(null,inst_63698,inst_63699,inst_63700);
var state_63710__$1 = (function (){var statearr_63722 = state_63710;
(statearr_63722[(7)] = inst_63701);

return statearr_63722;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63710__$1,(4),temp_chan);
} else {
if((state_val_63711 === (3))){
var inst_63708 = (state_63710[(2)]);
var state_63710__$1 = state_63710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63710__$1,inst_63708);
} else {
if((state_val_63711 === (4))){
var inst_63703 = (state_63710[(2)]);
var state_63710__$1 = state_63710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63710__$1,(5),out_chan,inst_63703);
} else {
if((state_val_63711 === (5))){
var inst_63705 = (state_63710[(2)]);
var state_63710__$1 = (function (){var statearr_63723 = state_63710;
(statearr_63723[(8)] = inst_63705);

return statearr_63723;
})();
var statearr_63724_63733 = state_63710__$1;
(statearr_63724_63733[(2)] = null);

(statearr_63724_63733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__38078__auto___63729,temp_chan,out_chan))
;
return ((function (switch__37921__auto__,c__38078__auto___63729,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__37922__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__37922__auto____0 = (function (){
var statearr_63725 = [null,null,null,null,null,null,null,null,null];
(statearr_63725[(0)] = huginn$mqtt$tele_chan_$_state_machine__37922__auto__);

(statearr_63725[(1)] = (1));

return statearr_63725;
});
var huginn$mqtt$tele_chan_$_state_machine__37922__auto____1 = (function (state_63710){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_63710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e63726){if((e63726 instanceof Object)){
var ex__37925__auto__ = e63726;
var statearr_63727_63734 = state_63710;
(statearr_63727_63734[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63735 = state_63710;
state_63710 = G__63735;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__37922__auto__ = function(state_63710){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__37922__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__37922__auto____1.call(this,state_63710);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__37922__auto____0;
huginn$mqtt$tele_chan_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__37922__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto___63729,temp_chan,out_chan))
})();
var state__38080__auto__ = (function (){var statearr_63728 = f__38079__auto__.call(null);
(statearr_63728[(6)] = c__38078__auto___63729);

return statearr_63728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto___63729,temp_chan,out_chan))
);


return out_chan;
});
huginn.mqtt.tele_send = (function huginn$mqtt$tele_send(opts,send,t_chan){
var c__38078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto__){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto__){
return (function (state_63764){
var state_val_63765 = (state_63764[(1)]);
if((state_val_63765 === (1))){
var state_63764__$1 = state_63764;
var statearr_63766_63779 = state_63764__$1;
(statearr_63766_63779[(2)] = null);

(statearr_63766_63779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63765 === (2))){
var state_63764__$1 = state_63764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63764__$1,(4),t_chan);
} else {
if((state_val_63765 === (3))){
var inst_63762 = (state_63764[(2)]);
var state_63764__$1 = state_63764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63764__$1,inst_63762);
} else {
if((state_val_63765 === (4))){
var inst_63739 = (state_63764[(7)]);
var inst_63738 = (state_63764[(8)]);
var inst_63738__$1 = (state_63764[(2)]);
var inst_63739__$1 = huginn.mqtt.mqtt_topic.call(null,opts,"events");
var inst_63740 = (function (){var teles = inst_63738__$1;
var topic = inst_63739__$1;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_63739,inst_63738,inst_63738__$1,inst_63739__$1,state_val_63765,c__38078__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Preparing to send telemetry"], null);
});
;})(teles,topic,qos,inst_63739,inst_63738,inst_63738__$1,inst_63739__$1,state_val_63765,c__38078__auto__))
})();
var inst_63741 = (new cljs.core.Delay(inst_63740,null));
var inst_63742 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","*cider-repl huginn*",133,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_63741,null,-219388846);
var state_63764__$1 = (function (){var statearr_63767 = state_63764;
(statearr_63767[(7)] = inst_63739__$1);

(statearr_63767[(9)] = inst_63742);

(statearr_63767[(8)] = inst_63738__$1);

return statearr_63767;
})();
var statearr_63768_63780 = state_63764__$1;
(statearr_63768_63780[(2)] = null);

(statearr_63768_63780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63765 === (5))){
var inst_63739 = (state_63764[(7)]);
var inst_63738 = (state_63764[(8)]);
var inst_63755 = (state_63764[(2)]);
var inst_63756 = (function (){var teles = inst_63738;
var topic = inst_63739;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_63739,inst_63738,inst_63755,state_val_63765,c__38078__auto__){
return (function (t){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,teles,new cljs.core.Keyword(null,"topic","topic",-1960480691),topic),new cljs.core.Keyword(null,"qos","qos",-2124292319),qos);
});
;})(teles,topic,qos,inst_63739,inst_63738,inst_63755,state_val_63765,c__38078__auto__))
})();
var inst_63757 = cljs.core.mapcat.call(null,inst_63756);
var inst_63758 = cljs.core.into.call(null,send,inst_63757,inst_63738);
var inst_63759 = cljs.core.doall.call(null,inst_63758);
var state_63764__$1 = (function (){var statearr_63769 = state_63764;
(statearr_63769[(10)] = inst_63759);

(statearr_63769[(11)] = inst_63755);

return statearr_63769;
})();
var statearr_63770_63781 = state_63764__$1;
(statearr_63770_63781[(2)] = null);

(statearr_63770_63781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63765 === (6))){
var inst_63739 = (state_63764[(7)]);
var inst_63738 = (state_63764[(8)]);
var inst_63743 = (state_63764[(2)]);
var inst_63744 = (function (){var teles = inst_63738;
var topic = inst_63739;
var qos = ({"qos": (1)});
var e__63433__auto__ = inst_63743;
return ((function (teles,topic,qos,e__63433__auto__,inst_63739,inst_63738,inst_63743,state_val_63765,c__38078__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__63433__auto__], null);
});
;})(teles,topic,qos,e__63433__auto__,inst_63739,inst_63738,inst_63743,state_val_63765,c__38078__auto__))
})();
var inst_63745 = (new cljs.core.Delay(inst_63744,null));
var inst_63746 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","*cider-repl huginn*",134,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_63745,null,309088615);
var inst_63747 = (function(){throw inst_63743})();
var state_63764__$1 = (function (){var statearr_63771 = state_63764;
(statearr_63771[(12)] = inst_63746);

return statearr_63771;
})();
var statearr_63772_63782 = state_63764__$1;
(statearr_63772_63782[(2)] = inst_63747);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63764__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63765 === (7))){
var inst_63739 = (state_63764[(7)]);
var inst_63738 = (state_63764[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_63764,(6),Error,null,(5));
var inst_63751 = (function (){var teles = inst_63738;
var topic = inst_63739;
var qos = ({"qos": (1)});
var result__63471__auto__ = inst_63738;
return ((function (teles,topic,qos,result__63471__auto__,inst_63739,inst_63738,_,state_val_63765,c__38078__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"teles","teles",1601787367,null),"=>",result__63471__auto__], null);
});
;})(teles,topic,qos,result__63471__auto__,inst_63739,inst_63738,_,state_val_63765,c__38078__auto__))
})();
var inst_63752 = (new cljs.core.Delay(inst_63751,null));
var inst_63753 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","*cider-repl huginn*",134,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_63752,null,-170260517);
var state_63764__$1 = (function (){var statearr_63773 = state_63764;
(statearr_63773[(13)] = inst_63753);

return statearr_63773;
})();
var statearr_63774_63783 = state_63764__$1;
(statearr_63774_63783[(2)] = inst_63738);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63764__$1);

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
});})(c__38078__auto__))
;
return ((function (switch__37921__auto__,c__38078__auto__){
return (function() {
var huginn$mqtt$tele_send_$_state_machine__37922__auto__ = null;
var huginn$mqtt$tele_send_$_state_machine__37922__auto____0 = (function (){
var statearr_63775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63775[(0)] = huginn$mqtt$tele_send_$_state_machine__37922__auto__);

(statearr_63775[(1)] = (1));

return statearr_63775;
});
var huginn$mqtt$tele_send_$_state_machine__37922__auto____1 = (function (state_63764){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_63764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e63776){if((e63776 instanceof Object)){
var ex__37925__auto__ = e63776;
var statearr_63777_63784 = state_63764;
(statearr_63777_63784[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63785 = state_63764;
state_63764 = G__63785;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
huginn$mqtt$tele_send_$_state_machine__37922__auto__ = function(state_63764){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_send_$_state_machine__37922__auto____0.call(this);
case 1:
return huginn$mqtt$tele_send_$_state_machine__37922__auto____1.call(this,state_63764);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_send_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_send_$_state_machine__37922__auto____0;
huginn$mqtt$tele_send_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_send_$_state_machine__37922__auto____1;
return huginn$mqtt$tele_send_$_state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto__))
})();
var state__38080__auto__ = (function (){var statearr_63778 = f__38079__auto__.call(null);
(statearr_63778[(6)] = c__38078__auto__);

return statearr_63778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto__))
);

return c__38078__auto__;
});
huginn.mqtt.watcher = (function huginn$mqtt$watcher(kill_atom,kill_fn){
var c__38078__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto__){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto__){
return (function (state_63800){
var state_val_63801 = (state_63800[(1)]);
if((state_val_63801 === (1))){
var state_63800__$1 = state_63800;
var statearr_63802_63813 = state_63800__$1;
(statearr_63802_63813[(2)] = null);

(statearr_63802_63813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63801 === (2))){
var inst_63787 = cljs.core.deref.call(null,kill_atom);
var state_63800__$1 = state_63800;
if(cljs.core.truth_(inst_63787)){
var statearr_63803_63814 = state_63800__$1;
(statearr_63803_63814[(1)] = (4));

} else {
var statearr_63804_63815 = state_63800__$1;
(statearr_63804_63815[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63801 === (3))){
var inst_63798 = (state_63800[(2)]);
var state_63800__$1 = state_63800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63800__$1,inst_63798);
} else {
if((state_val_63801 === (4))){
var inst_63789 = kill_fn.call(null);
var state_63800__$1 = state_63800;
var statearr_63805_63816 = state_63800__$1;
(statearr_63805_63816[(2)] = inst_63789);

(statearr_63805_63816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63801 === (5))){
var inst_63791 = cljs.core.async.timeout.call(null,(100));
var state_63800__$1 = state_63800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63800__$1,(7),inst_63791);
} else {
if((state_val_63801 === (6))){
var inst_63796 = (state_63800[(2)]);
var state_63800__$1 = state_63800;
var statearr_63806_63817 = state_63800__$1;
(statearr_63806_63817[(2)] = inst_63796);

(statearr_63806_63817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63801 === (7))){
var inst_63793 = (state_63800[(2)]);
var state_63800__$1 = (function (){var statearr_63807 = state_63800;
(statearr_63807[(7)] = inst_63793);

return statearr_63807;
})();
var statearr_63808_63818 = state_63800__$1;
(statearr_63808_63818[(2)] = null);

(statearr_63808_63818[(1)] = (2));


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
});})(c__38078__auto__))
;
return ((function (switch__37921__auto__,c__38078__auto__){
return (function() {
var huginn$mqtt$watcher_$_state_machine__37922__auto__ = null;
var huginn$mqtt$watcher_$_state_machine__37922__auto____0 = (function (){
var statearr_63809 = [null,null,null,null,null,null,null,null];
(statearr_63809[(0)] = huginn$mqtt$watcher_$_state_machine__37922__auto__);

(statearr_63809[(1)] = (1));

return statearr_63809;
});
var huginn$mqtt$watcher_$_state_machine__37922__auto____1 = (function (state_63800){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_63800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e63810){if((e63810 instanceof Object)){
var ex__37925__auto__ = e63810;
var statearr_63811_63819 = state_63800;
(statearr_63811_63819[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63820 = state_63800;
state_63800 = G__63820;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
huginn$mqtt$watcher_$_state_machine__37922__auto__ = function(state_63800){
switch(arguments.length){
case 0:
return huginn$mqtt$watcher_$_state_machine__37922__auto____0.call(this);
case 1:
return huginn$mqtt$watcher_$_state_machine__37922__auto____1.call(this,state_63800);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$watcher_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$watcher_$_state_machine__37922__auto____0;
huginn$mqtt$watcher_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$watcher_$_state_machine__37922__auto____1;
return huginn$mqtt$watcher_$_state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto__))
})();
var state__38080__auto__ = (function (){var statearr_63812 = f__38079__auto__.call(null);
(statearr_63812[(6)] = c__38078__auto__);

return statearr_63812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto__))
);

return c__38078__auto__;
});
huginn.mqtt.clean_up = (function huginn$mqtt$clean_up(p__63821){
var map__63822 = p__63821;
var map__63822__$1 = ((((!((map__63822 == null)))?((((map__63822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63822):map__63822);
var system = map__63822__$1;
var send_chan = cljs.core.get.call(null,map__63822__$1,new cljs.core.Keyword(null,"send-chan","send-chan",1681189602));
var recv_chan = cljs.core.get.call(null,map__63822__$1,new cljs.core.Keyword(null,"recv-chan","recv-chan",869238850));
var telemetry_chan = cljs.core.get.call(null,map__63822__$1,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503));
var client_atom = cljs.core.get.call(null,map__63822__$1,new cljs.core.Keyword(null,"client-atom","client-atom",-1733084110));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,"Killing system","huginn.mqtt","*cider-repl huginn*",155,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__63822,map__63822__$1,system,send_chan,recv_chan,telemetry_chan,client_atom){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(map__63822,map__63822__$1,system,send_chan,recv_chan,telemetry_chan,client_atom))
,null)),null,-1955029624);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__63822,map__63822__$1,system,send_chan,recv_chan,telemetry_chan,client_atom){
return (function (c){
return cljs.core.async.close_BANG_.call(null,c);
});})(map__63822,map__63822__$1,system,send_chan,recv_chan,telemetry_chan,client_atom))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [send_chan,recv_chan,telemetry_chan], null)));

return cljs.core.deref.call(null,client_atom).close();
});
huginn.mqtt.system_function = (function huginn$mqtt$system_function(opts){
var send = cljs.core.async.chan.call(null,cljs.core.async.buffer.call(null,(20)));
var recv = cljs.core.async.chan.call(null,cljs.core.async.buffer.call(null,(20)));
var kill = cljs.core.atom.call(null,false);
var client_promise = huginn.mqtt.init_client.call(null,opts,send,recv);
var client_atom = cljs.core.atom.call(null,null);
var t_chan = huginn.mqtt.tele_chan.call(null,opts);
return promesa.core.then.call(null,client_promise,((function (send,recv,kill,client_promise,client_atom,t_chan){
return (function (client){
cljs.core.reset_BANG_.call(null,client_atom,client);

huginn.mqtt.client_refresher.call(null,client_atom,opts,send,recv);

huginn.mqtt.publisher.call(null,client_atom,send);

huginn.mqtt.tele_send.call(null,opts,send,t_chan);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"send-chan","send-chan",1681189602),send,new cljs.core.Keyword(null,"recv-chan","recv-chan",869238850),recv,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503),t_chan,new cljs.core.Keyword(null,"client-atom","client-atom",-1733084110),client_atom], null);
});})(send,recv,kill,client_promise,client_atom,t_chan))
);
});
huginn.mqtt.kill_it = (function huginn$mqtt$kill_it(system_promise){
return promesa.core.then.call(null,system_promise,huginn.mqtt.clean_up);
});
