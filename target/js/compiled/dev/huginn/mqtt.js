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
huginn.mqtt.client_id = (function huginn$mqtt$client_id(p__44555){
var map__44556 = p__44555;
var map__44556__$1 = ((((!((map__44556 == null)))?((((map__44556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44556.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44556):map__44556);
var opts = map__44556__$1;
var projectId = cljs.core.get.call(null,map__44556__$1,new cljs.core.Keyword(null,"projectId","projectId",-1551013096));
var registryId = cljs.core.get.call(null,map__44556__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var cloudRegion = cljs.core.get.call(null,map__44556__$1,new cljs.core.Keyword(null,"cloudRegion","cloudRegion",-857757214));
var deviceId = cljs.core.get.call(null,map__44556__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["projects/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(projectId),"/locations/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cloudRegion),"/registries/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId)].join('');
});
huginn.mqtt.config_chan = (function huginn$mqtt$config_chan(p__44558){
var map__44559 = p__44558;
var map__44559__$1 = ((((!((map__44559 == null)))?((((map__44559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44559):map__44559);
var opts = map__44559__$1;
var deviceId = cljs.core.get.call(null,map__44559__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"/config"].join('');
});
huginn.mqtt.client_handlers = (function huginn$mqtt$client_handlers(success_fn,fail,send,recv){
return new cljs.core.PersistentArrayMap(null, 4, ["connect",(function (success){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connected"], null);
}),null)),null,-1845521617);

if(cljs.core.truth_(success)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection success"], null);
}),null)),null,562029156);

return success_fn.call(null);
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection failure"], null);
}),null)),null,-117124154);

return fail.call(null);
}
}),"close",(function (){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",39,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection closed"], null);
}),null)),null,-358060149);
}),"error",(function (err){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error: ",err], null);
}),null)),null,110579746);
}),"message",(function (topic,message,packet){
try{var result__44205__auto___44574 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,message,packet], null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__44205__auto___44574){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"message","message",1234475525,null),new cljs.core.Symbol(null,"packet","packet",1106973446,null)], null),"=>",result__44205__auto___44574], null);
});})(result__44205__auto___44574))
,null)),null,405675334);

}catch (e44561){if((e44561 instanceof Error)){
var e__44167__auto___44575 = e44561;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__44167__auto___44575){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__44167__auto___44575], null);
});})(e__44167__auto___44575))
,null)),null,-2021632094);

throw e__44167__auto___44575;
} else {
throw e44561;

}
}
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__){
return (function (state_44568){
var state_val_44569 = (state_44568[(1)]);
if((state_val_44569 === (1))){
var inst_44562 = [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"packet","packet",-533558081)];
var inst_44563 = [topic,message,packet];
var inst_44564 = cljs.core.PersistentHashMap.fromArrays(inst_44562,inst_44563);
var state_44568__$1 = state_44568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44568__$1,(2),recv,inst_44564);
} else {
if((state_val_44569 === (2))){
var inst_44566 = (state_44568[(2)]);
var state_44568__$1 = state_44568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44568__$1,inst_44566);
} else {
return null;
}
}
});})(c__36587__auto__))
;
return ((function (switch__36497__auto__,c__36587__auto__){
return (function() {
var huginn$mqtt$client_handlers_$_state_machine__36498__auto__ = null;
var huginn$mqtt$client_handlers_$_state_machine__36498__auto____0 = (function (){
var statearr_44570 = [null,null,null,null,null,null,null];
(statearr_44570[(0)] = huginn$mqtt$client_handlers_$_state_machine__36498__auto__);

(statearr_44570[(1)] = (1));

return statearr_44570;
});
var huginn$mqtt$client_handlers_$_state_machine__36498__auto____1 = (function (state_44568){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_44568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e44571){if((e44571 instanceof Object)){
var ex__36501__auto__ = e44571;
var statearr_44572_44576 = state_44568;
(statearr_44572_44576[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44577 = state_44568;
state_44568 = G__44577;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$client_handlers_$_state_machine__36498__auto__ = function(state_44568){
switch(arguments.length){
case 0:
return huginn$mqtt$client_handlers_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$client_handlers_$_state_machine__36498__auto____1.call(this,state_44568);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_handlers_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_handlers_$_state_machine__36498__auto____0;
huginn$mqtt$client_handlers_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_handlers_$_state_machine__36498__auto____1;
return huginn$mqtt$client_handlers_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_44573 = f__36588__auto__.call(null);
(statearr_44573[(6)] = c__36587__auto__);

return statearr_44573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
})], null);
});
huginn.mqtt.add_handlers = (function huginn$mqtt$add_handlers(client,handlers){
var seq__44578 = cljs.core.seq.call(null,handlers);
var chunk__44579 = null;
var count__44580 = (0);
var i__44581 = (0);
while(true){
if((i__44581 < count__44580)){
var vec__44582 = cljs.core._nth.call(null,chunk__44579,i__44581);
var key = cljs.core.nth.call(null,vec__44582,(0),null);
var hand = cljs.core.nth.call(null,vec__44582,(1),null);
client.on(key,hand);

var G__44588 = seq__44578;
var G__44589 = chunk__44579;
var G__44590 = count__44580;
var G__44591 = (i__44581 + (1));
seq__44578 = G__44588;
chunk__44579 = G__44589;
count__44580 = G__44590;
i__44581 = G__44591;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__44578);
if(temp__5457__auto__){
var seq__44578__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44578__$1)){
var c__31803__auto__ = cljs.core.chunk_first.call(null,seq__44578__$1);
var G__44592 = cljs.core.chunk_rest.call(null,seq__44578__$1);
var G__44593 = c__31803__auto__;
var G__44594 = cljs.core.count.call(null,c__31803__auto__);
var G__44595 = (0);
seq__44578 = G__44592;
chunk__44579 = G__44593;
count__44580 = G__44594;
i__44581 = G__44595;
continue;
} else {
var vec__44585 = cljs.core.first.call(null,seq__44578__$1);
var key = cljs.core.nth.call(null,vec__44585,(0),null);
var hand = cljs.core.nth.call(null,vec__44585,(1),null);
client.on(key,hand);

var G__44596 = cljs.core.next.call(null,seq__44578__$1);
var G__44597 = null;
var G__44598 = (0);
var G__44599 = (0);
seq__44578 = G__44596;
chunk__44579 = G__44597;
count__44580 = G__44598;
i__44581 = G__44599;
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
var map__44600 = huginn.mqtt.build_client.call(null,opts);
var map__44600__$1 = ((((!((map__44600 == null)))?((((map__44600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44600):map__44600);
var init = map__44600__$1;
var time = cljs.core.get.call(null,map__44600__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var client = cljs.core.get.call(null,map__44600__$1,new cljs.core.Keyword(null,"client","client",-1323448117));
var handlers = huginn.mqtt.client_handlers.call(null,((function (map__44600,map__44600__$1,init,time,client){
return (function (){
return resolve.call(null,client);
});})(map__44600,map__44600__$1,init,time,client))
,((function (map__44600,map__44600__$1,init,time,client){
return (function (){
return reject.call(null,new cljs.core.Keyword(null,"client-fail","client-fail",1564298304));
});})(map__44600,map__44600__$1,init,time,client))
,send,recv);
client.subscribe(huginn.mqtt.config_chan.call(null,opts));

return huginn.mqtt.add_handlers.call(null,client,handlers);
}));
});
huginn.mqtt.payload_root = (function huginn$mqtt$payload_root(p__44602){
var map__44603 = p__44602;
var map__44603__$1 = ((((!((map__44603 == null)))?((((map__44603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44603):map__44603);
var opts = map__44603__$1;
var registryId = cljs.core.get.call(null,map__44603__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var deviceId = cljs.core.get.call(null,map__44603__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"-payload"].join('');
});
/**
 * msg-type can be 'state' for state updates
 * or 'events' to publish telemetry
 */
huginn.mqtt.mqtt_topic = (function huginn$mqtt$mqtt_topic(p__44605,msg_type){
var map__44606 = p__44605;
var map__44606__$1 = ((((!((map__44606 == null)))?((((map__44606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44606.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44606):map__44606);
var opts = map__44606__$1;
var deviceId = cljs.core.get.call(null,map__44606__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
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
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [max], null),cores);
});
huginn.mqtt.stop = cljs.core.atom.call(null,false);
huginn.mqtt.publish_one = (function huginn$mqtt$publish_one(client,p__44608){
var map__44609 = p__44608;
var map__44609__$1 = ((((!((map__44609 == null)))?((((map__44609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44609.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44609):map__44609);
var p = map__44609__$1;
var topic = cljs.core.get.call(null,map__44609__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var payload = cljs.core.get.call(null,map__44609__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var qos = cljs.core.get.call(null,map__44609__$1,new cljs.core.Keyword(null,"qos","qos",-2124292319));
return client.publish(topic,payload,qos);
});
huginn.mqtt.publisher = (function huginn$mqtt$publisher(client_atom,send_chan){
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__){
return (function (state_44620){
var state_val_44621 = (state_44620[(1)]);
if((state_val_44621 === (1))){
var state_44620__$1 = state_44620;
var statearr_44622_44629 = state_44620__$1;
(statearr_44622_44629[(2)] = null);

(statearr_44622_44629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44621 === (2))){
var state_44620__$1 = state_44620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44620__$1,(4),send_chan);
} else {
if((state_val_44621 === (3))){
var inst_44618 = (state_44620[(2)]);
var state_44620__$1 = state_44620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44620__$1,inst_44618);
} else {
if((state_val_44621 === (4))){
var inst_44613 = (state_44620[(2)]);
var inst_44614 = cljs.core.deref.call(null,client_atom);
var inst_44615 = huginn.mqtt.publish_one.call(null,inst_44614,inst_44613);
var state_44620__$1 = (function (){var statearr_44623 = state_44620;
(statearr_44623[(7)] = inst_44615);

return statearr_44623;
})();
var statearr_44624_44630 = state_44620__$1;
(statearr_44624_44630[(2)] = null);

(statearr_44624_44630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__36587__auto__))
;
return ((function (switch__36497__auto__,c__36587__auto__){
return (function() {
var huginn$mqtt$publisher_$_state_machine__36498__auto__ = null;
var huginn$mqtt$publisher_$_state_machine__36498__auto____0 = (function (){
var statearr_44625 = [null,null,null,null,null,null,null,null];
(statearr_44625[(0)] = huginn$mqtt$publisher_$_state_machine__36498__auto__);

(statearr_44625[(1)] = (1));

return statearr_44625;
});
var huginn$mqtt$publisher_$_state_machine__36498__auto____1 = (function (state_44620){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_44620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e44626){if((e44626 instanceof Object)){
var ex__36501__auto__ = e44626;
var statearr_44627_44631 = state_44620;
(statearr_44627_44631[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44632 = state_44620;
state_44620 = G__44632;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$publisher_$_state_machine__36498__auto__ = function(state_44620){
switch(arguments.length){
case 0:
return huginn$mqtt$publisher_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$publisher_$_state_machine__36498__auto____1.call(this,state_44620);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$publisher_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$publisher_$_state_machine__36498__auto____0;
huginn$mqtt$publisher_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$publisher_$_state_machine__36498__auto____1;
return huginn$mqtt$publisher_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_44628 = f__36588__auto__.call(null);
(statearr_44628[(6)] = c__36587__auto__);

return statearr_44628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
});
/**
 * loops and refreshs the client atom every token experation
 */
huginn.mqtt.client_refresher = (function huginn$mqtt$client_refresher(client_atom,p__44633,send,recv){
var map__44634 = p__44633;
var map__44634__$1 = ((((!((map__44634 == null)))?((((map__44634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44634.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44634):map__44634);
var opts = map__44634__$1;
var tokenExpMins = cljs.core.get.call(null,map__44634__$1,new cljs.core.Keyword(null,"tokenExpMins","tokenExpMins",-1638711857));
var delayMs = cljs.core.get.call(null,map__44634__$1,new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168));
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__,map__44634,map__44634__$1,opts,tokenExpMins,delayMs){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__,map__44634,map__44634__$1,opts,tokenExpMins,delayMs){
return (function (state_44654){
var state_val_44655 = (state_44654[(1)]);
if((state_val_44655 === (1))){
var state_44654__$1 = state_44654;
var statearr_44656_44663 = state_44654__$1;
(statearr_44656_44663[(2)] = null);

(statearr_44656_44663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44655 === (2))){
var inst_44637 = (tokenExpMins * (1000));
var inst_44638 = (inst_44637 * (60));
var inst_44639 = cljs.core.async.timeout.call(null,inst_44638);
var state_44654__$1 = state_44654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44654__$1,(4),inst_44639);
} else {
if((state_val_44655 === (3))){
var inst_44652 = (state_44654[(2)]);
var state_44654__$1 = state_44654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44654__$1,inst_44652);
} else {
if((state_val_44655 === (4))){
var inst_44641 = (state_44654[(2)]);
var inst_44642 = (function (){var wait = inst_44641;
return ((function (wait,inst_44641,state_val_44655,c__36587__auto__,map__44634,map__44634__$1,opts,tokenExpMins,delayMs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\tRefreshing token after ",((tokenExpMins * (1000)) * (60)),"ms"], null);
});
;})(wait,inst_44641,state_val_44655,c__36587__auto__,map__44634,map__44634__$1,opts,tokenExpMins,delayMs))
})();
var inst_44643 = (new cljs.core.Delay(inst_44642,null));
var inst_44644 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",114,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_44643,null,270513725);
var inst_44645 = (function (){var wait = inst_44641;
return ((function (wait,inst_44641,inst_44642,inst_44643,inst_44644,state_val_44655,c__36587__auto__,map__44634,map__44634__$1,opts,tokenExpMins,delayMs){
return (function (resolve,reject){
return cljs.core.swap_BANG_.call(null,client_atom,((function (wait,inst_44641,inst_44642,inst_44643,inst_44644,state_val_44655,c__36587__auto__,map__44634,map__44634__$1,opts,tokenExpMins,delayMs){
return (function (c){
c.end();

return resolve.call(null);
});})(wait,inst_44641,inst_44642,inst_44643,inst_44644,state_val_44655,c__36587__auto__,map__44634,map__44634__$1,opts,tokenExpMins,delayMs))
);
});
;})(wait,inst_44641,inst_44642,inst_44643,inst_44644,state_val_44655,c__36587__auto__,map__44634,map__44634__$1,opts,tokenExpMins,delayMs))
})();
var inst_44646 = promesa.core.promise.call(null,inst_44645);
var inst_44647 = (function (){var wait = inst_44641;
return ((function (wait,inst_44641,inst_44642,inst_44643,inst_44644,inst_44645,inst_44646,state_val_44655,c__36587__auto__,map__44634,map__44634__$1,opts,tokenExpMins,delayMs){
return (function (){
return huginn.mqtt.init_client.call(null,opts,send,recv);
});
;})(wait,inst_44641,inst_44642,inst_44643,inst_44644,inst_44645,inst_44646,state_val_44655,c__36587__auto__,map__44634,map__44634__$1,opts,tokenExpMins,delayMs))
})();
var inst_44648 = (function (){var wait = inst_44641;
return ((function (wait,inst_44641,inst_44642,inst_44643,inst_44644,inst_44645,inst_44646,inst_44647,state_val_44655,c__36587__auto__,map__44634,map__44634__$1,opts,tokenExpMins,delayMs){
return (function (client){
return cljs.core.reset_BANG_.call(null,client_atom,client);
});
;})(wait,inst_44641,inst_44642,inst_44643,inst_44644,inst_44645,inst_44646,inst_44647,state_val_44655,c__36587__auto__,map__44634,map__44634__$1,opts,tokenExpMins,delayMs))
})();
var inst_44649 = promesa.core.chain.call(null,inst_44646,inst_44647,inst_44648);
var state_44654__$1 = (function (){var statearr_44657 = state_44654;
(statearr_44657[(7)] = inst_44649);

(statearr_44657[(8)] = inst_44644);

return statearr_44657;
})();
var statearr_44658_44664 = state_44654__$1;
(statearr_44658_44664[(2)] = null);

(statearr_44658_44664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__36587__auto__,map__44634,map__44634__$1,opts,tokenExpMins,delayMs))
;
return ((function (switch__36497__auto__,c__36587__auto__,map__44634,map__44634__$1,opts,tokenExpMins,delayMs){
return (function() {
var huginn$mqtt$client_refresher_$_state_machine__36498__auto__ = null;
var huginn$mqtt$client_refresher_$_state_machine__36498__auto____0 = (function (){
var statearr_44659 = [null,null,null,null,null,null,null,null,null];
(statearr_44659[(0)] = huginn$mqtt$client_refresher_$_state_machine__36498__auto__);

(statearr_44659[(1)] = (1));

return statearr_44659;
});
var huginn$mqtt$client_refresher_$_state_machine__36498__auto____1 = (function (state_44654){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_44654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e44660){if((e44660 instanceof Object)){
var ex__36501__auto__ = e44660;
var statearr_44661_44665 = state_44654;
(statearr_44661_44665[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44666 = state_44654;
state_44654 = G__44666;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$client_refresher_$_state_machine__36498__auto__ = function(state_44654){
switch(arguments.length){
case 0:
return huginn$mqtt$client_refresher_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$client_refresher_$_state_machine__36498__auto____1.call(this,state_44654);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_refresher_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_refresher_$_state_machine__36498__auto____0;
huginn$mqtt$client_refresher_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_refresher_$_state_machine__36498__auto____1;
return huginn$mqtt$client_refresher_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__,map__44634,map__44634__$1,opts,tokenExpMins,delayMs))
})();
var state__36589__auto__ = (function (){var statearr_44662 = f__36588__auto__.call(null);
(statearr_44662[(6)] = c__36587__auto__);

return statearr_44662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__,map__44634,map__44634__$1,opts,tokenExpMins,delayMs))
);

return c__36587__auto__;
});
huginn.mqtt.tele_chan = (function huginn$mqtt$tele_chan(opts){
var temp_chan = cljs.core.async.chan.call(null);
var out_chan = cljs.core.async.chan.call(null);
var c__36587__auto___44699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto___44699,temp_chan,out_chan){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto___44699,temp_chan,out_chan){
return (function (state_44680){
var state_val_44681 = (state_44680[(1)]);
if((state_val_44681 === (1))){
var state_44680__$1 = state_44680;
var statearr_44682_44700 = state_44680__$1;
(statearr_44682_44700[(2)] = null);

(statearr_44682_44700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44681 === (2))){
var inst_44668 = huginn.mqtt.node$module$systeminformation.cpuTemperature.call(null);
var inst_44669 = cljs.core.partial.call(null,huginn.mqtt.prep_temps,opts);
var inst_44670 = (function (){return ((function (inst_44668,inst_44669,state_val_44681,c__36587__auto___44699,temp_chan,out_chan){
return (function (vs){
var c__36587__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto____$1,inst_44668,inst_44669,state_val_44681,c__36587__auto___44699,temp_chan,out_chan){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto____$1,inst_44668,inst_44669,state_val_44681,c__36587__auto___44699,temp_chan,out_chan){
return (function (state_44686){
var state_val_44687 = (state_44686[(1)]);
if((state_val_44687 === (1))){
var state_44686__$1 = state_44686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44686__$1,(2),temp_chan,vs);
} else {
if((state_val_44687 === (2))){
var inst_44684 = (state_44686[(2)]);
var state_44686__$1 = state_44686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44686__$1,inst_44684);
} else {
return null;
}
}
});})(c__36587__auto____$1,inst_44668,inst_44669,state_val_44681,c__36587__auto___44699,temp_chan,out_chan))
;
return ((function (switch__36497__auto__,c__36587__auto____$1,inst_44668,inst_44669,state_val_44681,c__36587__auto___44699,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__36498__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__36498__auto____0 = (function (){
var statearr_44688 = [null,null,null,null,null,null,null];
(statearr_44688[(0)] = huginn$mqtt$tele_chan_$_state_machine__36498__auto__);

(statearr_44688[(1)] = (1));

return statearr_44688;
});
var huginn$mqtt$tele_chan_$_state_machine__36498__auto____1 = (function (state_44686){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_44686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e44689){if((e44689 instanceof Object)){
var ex__36501__auto__ = e44689;
var statearr_44690_44701 = state_44686;
(statearr_44690_44701[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44702 = state_44686;
state_44686 = G__44702;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__36498__auto__ = function(state_44686){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__36498__auto____1.call(this,state_44686);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__36498__auto____0;
huginn$mqtt$tele_chan_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__36498__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto____$1,inst_44668,inst_44669,state_val_44681,c__36587__auto___44699,temp_chan,out_chan))
})();
var state__36589__auto__ = (function (){var statearr_44691 = f__36588__auto__.call(null);
(statearr_44691[(6)] = c__36587__auto____$1);

return statearr_44691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto____$1,inst_44668,inst_44669,state_val_44681,c__36587__auto___44699,temp_chan,out_chan))
);

return c__36587__auto____$1;
});
;})(inst_44668,inst_44669,state_val_44681,c__36587__auto___44699,temp_chan,out_chan))
})();
var inst_44671 = promesa.core.chain.call(null,inst_44668,inst_44669,inst_44670);
var state_44680__$1 = (function (){var statearr_44692 = state_44680;
(statearr_44692[(7)] = inst_44671);

return statearr_44692;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44680__$1,(4),temp_chan);
} else {
if((state_val_44681 === (3))){
var inst_44678 = (state_44680[(2)]);
var state_44680__$1 = state_44680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44680__$1,inst_44678);
} else {
if((state_val_44681 === (4))){
var inst_44673 = (state_44680[(2)]);
var state_44680__$1 = state_44680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44680__$1,(5),out_chan,inst_44673);
} else {
if((state_val_44681 === (5))){
var inst_44675 = (state_44680[(2)]);
var state_44680__$1 = (function (){var statearr_44693 = state_44680;
(statearr_44693[(8)] = inst_44675);

return statearr_44693;
})();
var statearr_44694_44703 = state_44680__$1;
(statearr_44694_44703[(2)] = null);

(statearr_44694_44703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__36587__auto___44699,temp_chan,out_chan))
;
return ((function (switch__36497__auto__,c__36587__auto___44699,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__36498__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__36498__auto____0 = (function (){
var statearr_44695 = [null,null,null,null,null,null,null,null,null];
(statearr_44695[(0)] = huginn$mqtt$tele_chan_$_state_machine__36498__auto__);

(statearr_44695[(1)] = (1));

return statearr_44695;
});
var huginn$mqtt$tele_chan_$_state_machine__36498__auto____1 = (function (state_44680){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_44680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e44696){if((e44696 instanceof Object)){
var ex__36501__auto__ = e44696;
var statearr_44697_44704 = state_44680;
(statearr_44697_44704[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44705 = state_44680;
state_44680 = G__44705;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__36498__auto__ = function(state_44680){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__36498__auto____1.call(this,state_44680);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__36498__auto____0;
huginn$mqtt$tele_chan_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__36498__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto___44699,temp_chan,out_chan))
})();
var state__36589__auto__ = (function (){var statearr_44698 = f__36588__auto__.call(null);
(statearr_44698[(6)] = c__36587__auto___44699);

return statearr_44698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto___44699,temp_chan,out_chan))
);


return out_chan;
});
huginn.mqtt.sender = (function huginn$mqtt$sender(topic_name,opts,send,t_chan){
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__){
return (function (state_44729){
var state_val_44730 = (state_44729[(1)]);
if((state_val_44730 === (1))){
var state_44729__$1 = state_44729;
var statearr_44731_44744 = state_44729__$1;
(statearr_44731_44744[(2)] = null);

(statearr_44731_44744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (2))){
var state_44729__$1 = state_44729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44729__$1,(4),t_chan);
} else {
if((state_val_44730 === (3))){
var inst_44727 = (state_44729[(2)]);
var state_44729__$1 = state_44729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44729__$1,inst_44727);
} else {
if((state_val_44730 === (4))){
var inst_44708 = (state_44729[(2)]);
var inst_44709 = huginn.mqtt.mqtt_topic.call(null,opts,topic_name);
var inst_44710 = cljs.core._EQ_.call(null,"state",topic_name);
var state_44729__$1 = (function (){var statearr_44732 = state_44729;
(statearr_44732[(7)] = inst_44708);

(statearr_44732[(8)] = inst_44709);

return statearr_44732;
})();
if(inst_44710){
var statearr_44733_44745 = state_44729__$1;
(statearr_44733_44745[(1)] = (5));

} else {
var statearr_44734_44746 = state_44729__$1;
(statearr_44734_44746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (5))){
var inst_44708 = (state_44729[(7)]);
var inst_44709 = (state_44729[(8)]);
var inst_44712 = (function (){var teles = inst_44708;
var topic = inst_44709;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_44708,inst_44709,state_val_44730,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pushing state",topic], null);
});
;})(teles,topic,qos,inst_44708,inst_44709,state_val_44730,c__36587__auto__))
})();
var inst_44713 = (new cljs.core.Delay(inst_44712,null));
var inst_44714 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",147,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_44713,null,-1556920031);
var state_44729__$1 = state_44729;
var statearr_44735_44747 = state_44729__$1;
(statearr_44735_44747[(2)] = inst_44714);

(statearr_44735_44747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (6))){
var state_44729__$1 = state_44729;
var statearr_44736_44748 = state_44729__$1;
(statearr_44736_44748[(2)] = null);

(statearr_44736_44748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44730 === (7))){
var inst_44708 = (state_44729[(7)]);
var inst_44709 = (state_44729[(8)]);
var inst_44717 = (state_44729[(2)]);
var inst_44718 = (function (){var teles = inst_44708;
var topic = inst_44709;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_44708,inst_44709,inst_44717,state_val_44730,c__36587__auto__){
return (function (t){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"topic","topic",-1960480691),topic),new cljs.core.Keyword(null,"qos","qos",-2124292319),qos);
});
;})(teles,topic,qos,inst_44708,inst_44709,inst_44717,state_val_44730,c__36587__auto__))
})();
var inst_44719 = cljs.core.map.call(null,inst_44718,inst_44708);
var inst_44720 = cljs.core.async.onto_chan.call(null,send,inst_44719,false);
var inst_44721 = new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168).cljs$core$IFn$_invoke$arity$1(opts);
var inst_44722 = cljs.core.async.timeout.call(null,inst_44721);
var state_44729__$1 = (function (){var statearr_44737 = state_44729;
(statearr_44737[(9)] = inst_44717);

(statearr_44737[(10)] = inst_44720);

return statearr_44737;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44729__$1,(8),inst_44722);
} else {
if((state_val_44730 === (8))){
var inst_44724 = (state_44729[(2)]);
var state_44729__$1 = (function (){var statearr_44738 = state_44729;
(statearr_44738[(11)] = inst_44724);

return statearr_44738;
})();
var statearr_44739_44749 = state_44729__$1;
(statearr_44739_44749[(2)] = null);

(statearr_44739_44749[(1)] = (2));


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
});})(c__36587__auto__))
;
return ((function (switch__36497__auto__,c__36587__auto__){
return (function() {
var huginn$mqtt$sender_$_state_machine__36498__auto__ = null;
var huginn$mqtt$sender_$_state_machine__36498__auto____0 = (function (){
var statearr_44740 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44740[(0)] = huginn$mqtt$sender_$_state_machine__36498__auto__);

(statearr_44740[(1)] = (1));

return statearr_44740;
});
var huginn$mqtt$sender_$_state_machine__36498__auto____1 = (function (state_44729){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_44729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e44741){if((e44741 instanceof Object)){
var ex__36501__auto__ = e44741;
var statearr_44742_44750 = state_44729;
(statearr_44742_44750[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44751 = state_44729;
state_44729 = G__44751;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$sender_$_state_machine__36498__auto__ = function(state_44729){
switch(arguments.length){
case 0:
return huginn$mqtt$sender_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$sender_$_state_machine__36498__auto____1.call(this,state_44729);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$sender_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$sender_$_state_machine__36498__auto____0;
huginn$mqtt$sender_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$sender_$_state_machine__36498__auto____1;
return huginn$mqtt$sender_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_44743 = f__36588__auto__.call(null);
(statearr_44743[(6)] = c__36587__auto__);

return statearr_44743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
});
huginn.mqtt.state_send = cljs.core.partial.call(null,huginn.mqtt.sender,"state");
huginn.mqtt.tele_send = cljs.core.partial.call(null,huginn.mqtt.sender,"events");
huginn.mqtt.clean_up = (function huginn$mqtt$clean_up(p__44752){
var map__44753 = p__44752;
var map__44753__$1 = ((((!((map__44753 == null)))?((((map__44753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44753):map__44753);
var system = map__44753__$1;
var send_chan = cljs.core.get.call(null,map__44753__$1,new cljs.core.Keyword(null,"send-chan","send-chan",1681189602));
var recv_chan = cljs.core.get.call(null,map__44753__$1,new cljs.core.Keyword(null,"recv-chan","recv-chan",869238850));
var telemetry_chan = cljs.core.get.call(null,map__44753__$1,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503));
var state_chan = cljs.core.get.call(null,map__44753__$1,new cljs.core.Keyword(null,"state-chan","state-chan",-1042477017));
var client_atom = cljs.core.get.call(null,map__44753__$1,new cljs.core.Keyword(null,"client-atom","client-atom",-1733084110));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,"Killing system","huginn.mqtt","/tmp/form-init1252977175527440591.clj",166,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__44753,map__44753__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(map__44753,map__44753__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
,null)),null,455132698);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__44753,map__44753__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (c){
return cljs.core.async.close_BANG_.call(null,c);
});})(map__44753,map__44753__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [send_chan,recv_chan,state_chan,telemetry_chan], null)));

return cljs.core.deref.call(null,client_atom).end();
});
/**
 * the heart of the system lies here.
 *   This function takes options (config/default-options works well)
 *   It returns a map
 *   This map has
 *   :send-chan A channel you can use to directly send messages of mqtt, must be of the
 *   form {:payload string? :qos #js {:qos #{0 1 2}} :topic (topics can be built with mqtt-topic)}
 *   :recv-chan has items in the form of {:topic string? :message string? :packet buffer?}
 *   :state-chan, send things of the form (coll-of {:payload string?}), onto the state channel
 *   (google publishes these values to a differnt pubsub channel then device telemetry)
 *   :telemetry-chan, sends (coll-of {:payload string?}), all the events in the collections
 *   are sent in the same batch, the same is true for stat-chan.
 *   :client-atom, contains the current version of the mqtt client. This is an atom so
 *   that the client-refersher can refresh the authentication token and swap it.
 *   this pattern also ensures only one client
 * 
 *   payloads must be prefixed with a string describing where the data came (payload-root opts) will generate this for you
 */
huginn.mqtt.system_function = (function huginn$mqtt$system_function(opts){
var send = cljs.core.async.chan.call(null);
var recv = cljs.core.async.chan.call(null);
var kill = cljs.core.atom.call(null,false);
var client_promise = huginn.mqtt.init_client.call(null,opts,send,recv);
var client_atom = cljs.core.atom.call(null,null);
var t_chan = huginn.mqtt.tele_chan.call(null,opts);
var state_chan = cljs.core.async.chan.call(null,cljs.core.async.buffer.call(null,(1)));
return promesa.core.then.call(null,client_promise,((function (send,recv,kill,client_promise,client_atom,t_chan,state_chan){
return (function (client){
cljs.core.reset_BANG_.call(null,client_atom,client);

huginn.mqtt.client_refresher.call(null,client_atom,opts,send,recv);

huginn.mqtt.publisher.call(null,client_atom,send);

huginn.mqtt.tele_send.call(null,opts,send,t_chan);

huginn.mqtt.state_send.call(null,opts,send,state_chan);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"send-chan","send-chan",1681189602),send,new cljs.core.Keyword(null,"recv-chan","recv-chan",869238850),recv,new cljs.core.Keyword(null,"state-chan","state-chan",-1042477017),state_chan,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503),t_chan,new cljs.core.Keyword(null,"client-atom","client-atom",-1733084110),client_atom], null);
});})(send,recv,kill,client_promise,client_atom,t_chan,state_chan))
);
});
/**
 * Feed the system promise to this and it will kill it
 */
huginn.mqtt.kill_it = (function huginn$mqtt$kill_it(system_promise){
return promesa.core.then.call(null,system_promise,huginn.mqtt.clean_up);
});

//# sourceMappingURL=mqtt.js.map
