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
huginn.mqtt.client_id = (function huginn$mqtt$client_id(p__44556){
var map__44557 = p__44556;
var map__44557__$1 = ((((!((map__44557 == null)))?((((map__44557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44557.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44557):map__44557);
var opts = map__44557__$1;
var projectId = cljs.core.get.call(null,map__44557__$1,new cljs.core.Keyword(null,"projectId","projectId",-1551013096));
var registryId = cljs.core.get.call(null,map__44557__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var cloudRegion = cljs.core.get.call(null,map__44557__$1,new cljs.core.Keyword(null,"cloudRegion","cloudRegion",-857757214));
var deviceId = cljs.core.get.call(null,map__44557__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["projects/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(projectId),"/locations/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cloudRegion),"/registries/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId)].join('');
});
huginn.mqtt.config_chan = (function huginn$mqtt$config_chan(p__44559){
var map__44560 = p__44559;
var map__44560__$1 = ((((!((map__44560 == null)))?((((map__44560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44560):map__44560);
var opts = map__44560__$1;
var deviceId = cljs.core.get.call(null,map__44560__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"/config"].join('');
});
huginn.mqtt.client_handlers = (function huginn$mqtt$client_handlers(success_fn,fail,send,recv){
return new cljs.core.PersistentArrayMap(null, 4, ["connect",(function (success){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init10702756143272110808.clj",31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connected"], null);
}),null)),null,1080523789);

if(cljs.core.truth_(success)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init10702756143272110808.clj",34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection success"], null);
}),null)),null,-292370556);

return success_fn.call(null);
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init10702756143272110808.clj",37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection failure"], null);
}),null)),null,-1793881061);

return fail.call(null);
}
}),"close",(function (){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init10702756143272110808.clj",39,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection closed"], null);
}),null)),null,-2103633887);
}),"error",(function (err){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init10702756143272110808.clj",40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error: ",err], null);
}),null)),null,-1251994726);
}),"message",(function (topic,message,packet){
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
var statearr_44572_44574 = state_44568;
(statearr_44572_44574[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44575 = state_44568;
state_44568 = G__44575;
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
var seq__44576 = cljs.core.seq.call(null,handlers);
var chunk__44577 = null;
var count__44578 = (0);
var i__44579 = (0);
while(true){
if((i__44579 < count__44578)){
var vec__44580 = cljs.core._nth.call(null,chunk__44577,i__44579);
var key = cljs.core.nth.call(null,vec__44580,(0),null);
var hand = cljs.core.nth.call(null,vec__44580,(1),null);
client.on(key,hand);

var G__44586 = seq__44576;
var G__44587 = chunk__44577;
var G__44588 = count__44578;
var G__44589 = (i__44579 + (1));
seq__44576 = G__44586;
chunk__44577 = G__44587;
count__44578 = G__44588;
i__44579 = G__44589;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__44576);
if(temp__5457__auto__){
var seq__44576__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44576__$1)){
var c__31803__auto__ = cljs.core.chunk_first.call(null,seq__44576__$1);
var G__44590 = cljs.core.chunk_rest.call(null,seq__44576__$1);
var G__44591 = c__31803__auto__;
var G__44592 = cljs.core.count.call(null,c__31803__auto__);
var G__44593 = (0);
seq__44576 = G__44590;
chunk__44577 = G__44591;
count__44578 = G__44592;
i__44579 = G__44593;
continue;
} else {
var vec__44583 = cljs.core.first.call(null,seq__44576__$1);
var key = cljs.core.nth.call(null,vec__44583,(0),null);
var hand = cljs.core.nth.call(null,vec__44583,(1),null);
client.on(key,hand);

var G__44594 = cljs.core.next.call(null,seq__44576__$1);
var G__44595 = null;
var G__44596 = (0);
var G__44597 = (0);
seq__44576 = G__44594;
chunk__44577 = G__44595;
count__44578 = G__44596;
i__44579 = G__44597;
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
var map__44598 = huginn.mqtt.build_client.call(null,opts);
var map__44598__$1 = ((((!((map__44598 == null)))?((((map__44598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44598):map__44598);
var init = map__44598__$1;
var time = cljs.core.get.call(null,map__44598__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var client = cljs.core.get.call(null,map__44598__$1,new cljs.core.Keyword(null,"client","client",-1323448117));
var handlers = huginn.mqtt.client_handlers.call(null,((function (map__44598,map__44598__$1,init,time,client){
return (function (){
return resolve.call(null,client);
});})(map__44598,map__44598__$1,init,time,client))
,((function (map__44598,map__44598__$1,init,time,client){
return (function (){
return reject.call(null,new cljs.core.Keyword(null,"client-fail","client-fail",1564298304));
});})(map__44598,map__44598__$1,init,time,client))
,send,recv);
client.subscribe(huginn.mqtt.config_chan.call(null,opts));

return huginn.mqtt.add_handlers.call(null,client,handlers);
}));
});
huginn.mqtt.payload_root = (function huginn$mqtt$payload_root(p__44600){
var map__44601 = p__44600;
var map__44601__$1 = ((((!((map__44601 == null)))?((((map__44601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44601):map__44601);
var opts = map__44601__$1;
var registryId = cljs.core.get.call(null,map__44601__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var deviceId = cljs.core.get.call(null,map__44601__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"-payload"].join('');
});
/**
 * msg-type can be 'state' for state updates
 * or 'events' to publish telemetry
 */
huginn.mqtt.mqtt_topic = (function huginn$mqtt$mqtt_topic(p__44603,msg_type){
var map__44604 = p__44603;
var map__44604__$1 = ((((!((map__44604 == null)))?((((map__44604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44604.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44604):map__44604);
var opts = map__44604__$1;
var deviceId = cljs.core.get.call(null,map__44604__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_type)].join('');
});
huginn.mqtt.prep_temps = (function huginn$mqtt$prep_temps(opts,data){
var pr = huginn.mqtt.payload_root.call(null,opts);
var cores_raw = cljs.core.js__GT_clj.call(null,data.cores);
var cores = cljs.core.map_indexed.call(null,((function (pr,cores_raw){
return (function (index,value){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"payload","payload",-383036092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pr),"-core-temp-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''))].join(''),new cljs.core.Keyword(null,"subfolder","subfolder",1044158439),["metrics/core-temp-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),new cljs.core.Keyword(null,"ts","ts",1617209904),huginn.jwt.round_now.call(null)], null);
});})(pr,cores_raw))
,cores_raw);
var main = (cljs.core.truth_(data.main)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"payload","payload",-383036092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pr),"-core-temp-main/",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(data.main)].join(''))].join(''),new cljs.core.Keyword(null,"subfolder","subfolder",1044158439),"metrics/core-temp-main",new cljs.core.Keyword(null,"ts","ts",1617209904),huginn.jwt.round_now.call(null)], null):null);
var max = (cljs.core.truth_(data.max)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"payload","payload",-383036092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pr),"-core-temp-max/",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(data.max)].join(''))].join(''),new cljs.core.Keyword(null,"subfolder","subfolder",1044158439),"metrics/core-temp-max",new cljs.core.Keyword(null,"ts","ts",1617209904),huginn.jwt.round_now.call(null)], null):null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [max], null),cores);
});
huginn.mqtt.stop = cljs.core.atom.call(null,false);
huginn.mqtt.publish_one = (function huginn$mqtt$publish_one(client,p__44606){
var map__44607 = p__44606;
var map__44607__$1 = ((((!((map__44607 == null)))?((((map__44607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44607):map__44607);
var p = map__44607__$1;
var topic = cljs.core.get.call(null,map__44607__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var payload = cljs.core.get.call(null,map__44607__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var qos = cljs.core.get.call(null,map__44607__$1,new cljs.core.Keyword(null,"qos","qos",-2124292319));
return client.publish(topic,payload,qos);
});
huginn.mqtt.publisher = (function huginn$mqtt$publisher(client_atom,send_chan){
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__){
return (function (state_44618){
var state_val_44619 = (state_44618[(1)]);
if((state_val_44619 === (1))){
var state_44618__$1 = state_44618;
var statearr_44620_44627 = state_44618__$1;
(statearr_44620_44627[(2)] = null);

(statearr_44620_44627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44619 === (2))){
var state_44618__$1 = state_44618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44618__$1,(4),send_chan);
} else {
if((state_val_44619 === (3))){
var inst_44616 = (state_44618[(2)]);
var state_44618__$1 = state_44618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44618__$1,inst_44616);
} else {
if((state_val_44619 === (4))){
var inst_44611 = (state_44618[(2)]);
var inst_44612 = cljs.core.deref.call(null,client_atom);
var inst_44613 = huginn.mqtt.publish_one.call(null,inst_44612,inst_44611);
var state_44618__$1 = (function (){var statearr_44621 = state_44618;
(statearr_44621[(7)] = inst_44613);

return statearr_44621;
})();
var statearr_44622_44628 = state_44618__$1;
(statearr_44622_44628[(2)] = null);

(statearr_44622_44628[(1)] = (2));


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
var statearr_44623 = [null,null,null,null,null,null,null,null];
(statearr_44623[(0)] = huginn$mqtt$publisher_$_state_machine__36498__auto__);

(statearr_44623[(1)] = (1));

return statearr_44623;
});
var huginn$mqtt$publisher_$_state_machine__36498__auto____1 = (function (state_44618){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_44618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e44624){if((e44624 instanceof Object)){
var ex__36501__auto__ = e44624;
var statearr_44625_44629 = state_44618;
(statearr_44625_44629[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44630 = state_44618;
state_44618 = G__44630;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$publisher_$_state_machine__36498__auto__ = function(state_44618){
switch(arguments.length){
case 0:
return huginn$mqtt$publisher_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$publisher_$_state_machine__36498__auto____1.call(this,state_44618);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$publisher_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$publisher_$_state_machine__36498__auto____0;
huginn$mqtt$publisher_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$publisher_$_state_machine__36498__auto____1;
return huginn$mqtt$publisher_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_44626 = f__36588__auto__.call(null);
(statearr_44626[(6)] = c__36587__auto__);

return statearr_44626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
});
/**
 * loops and refreshs the client atom every token experation
 */
huginn.mqtt.client_refresher = (function huginn$mqtt$client_refresher(client_atom,p__44631,send,recv){
var map__44632 = p__44631;
var map__44632__$1 = ((((!((map__44632 == null)))?((((map__44632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44632):map__44632);
var opts = map__44632__$1;
var tokenExpMins = cljs.core.get.call(null,map__44632__$1,new cljs.core.Keyword(null,"tokenExpMins","tokenExpMins",-1638711857));
var delayMs = cljs.core.get.call(null,map__44632__$1,new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168));
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__,map__44632,map__44632__$1,opts,tokenExpMins,delayMs){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__,map__44632,map__44632__$1,opts,tokenExpMins,delayMs){
return (function (state_44652){
var state_val_44653 = (state_44652[(1)]);
if((state_val_44653 === (1))){
var state_44652__$1 = state_44652;
var statearr_44654_44661 = state_44652__$1;
(statearr_44654_44661[(2)] = null);

(statearr_44654_44661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (2))){
var inst_44635 = (tokenExpMins * (1000));
var inst_44636 = (inst_44635 * (60));
var inst_44637 = cljs.core.async.timeout.call(null,inst_44636);
var state_44652__$1 = state_44652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44652__$1,(4),inst_44637);
} else {
if((state_val_44653 === (3))){
var inst_44650 = (state_44652[(2)]);
var state_44652__$1 = state_44652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44652__$1,inst_44650);
} else {
if((state_val_44653 === (4))){
var inst_44639 = (state_44652[(2)]);
var inst_44640 = (function (){var wait = inst_44639;
return ((function (wait,inst_44639,state_val_44653,c__36587__auto__,map__44632,map__44632__$1,opts,tokenExpMins,delayMs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\tRefreshing token after ",((tokenExpMins * (1000)) * (60)),"ms"], null);
});
;})(wait,inst_44639,state_val_44653,c__36587__auto__,map__44632,map__44632__$1,opts,tokenExpMins,delayMs))
})();
var inst_44641 = (new cljs.core.Delay(inst_44640,null));
var inst_44642 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init10702756143272110808.clj",116,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_44641,null,2065861585);
var inst_44643 = (function (){var wait = inst_44639;
return ((function (wait,inst_44639,inst_44640,inst_44641,inst_44642,state_val_44653,c__36587__auto__,map__44632,map__44632__$1,opts,tokenExpMins,delayMs){
return (function (resolve,reject){
return cljs.core.swap_BANG_.call(null,client_atom,((function (wait,inst_44639,inst_44640,inst_44641,inst_44642,state_val_44653,c__36587__auto__,map__44632,map__44632__$1,opts,tokenExpMins,delayMs){
return (function (c){
c.end();

return resolve.call(null);
});})(wait,inst_44639,inst_44640,inst_44641,inst_44642,state_val_44653,c__36587__auto__,map__44632,map__44632__$1,opts,tokenExpMins,delayMs))
);
});
;})(wait,inst_44639,inst_44640,inst_44641,inst_44642,state_val_44653,c__36587__auto__,map__44632,map__44632__$1,opts,tokenExpMins,delayMs))
})();
var inst_44644 = promesa.core.promise.call(null,inst_44643);
var inst_44645 = (function (){var wait = inst_44639;
return ((function (wait,inst_44639,inst_44640,inst_44641,inst_44642,inst_44643,inst_44644,state_val_44653,c__36587__auto__,map__44632,map__44632__$1,opts,tokenExpMins,delayMs){
return (function (){
return huginn.mqtt.init_client.call(null,opts,send,recv);
});
;})(wait,inst_44639,inst_44640,inst_44641,inst_44642,inst_44643,inst_44644,state_val_44653,c__36587__auto__,map__44632,map__44632__$1,opts,tokenExpMins,delayMs))
})();
var inst_44646 = (function (){var wait = inst_44639;
return ((function (wait,inst_44639,inst_44640,inst_44641,inst_44642,inst_44643,inst_44644,inst_44645,state_val_44653,c__36587__auto__,map__44632,map__44632__$1,opts,tokenExpMins,delayMs){
return (function (client){
return cljs.core.reset_BANG_.call(null,client_atom,client);
});
;})(wait,inst_44639,inst_44640,inst_44641,inst_44642,inst_44643,inst_44644,inst_44645,state_val_44653,c__36587__auto__,map__44632,map__44632__$1,opts,tokenExpMins,delayMs))
})();
var inst_44647 = promesa.core.chain.call(null,inst_44644,inst_44645,inst_44646);
var state_44652__$1 = (function (){var statearr_44655 = state_44652;
(statearr_44655[(7)] = inst_44642);

(statearr_44655[(8)] = inst_44647);

return statearr_44655;
})();
var statearr_44656_44662 = state_44652__$1;
(statearr_44656_44662[(2)] = null);

(statearr_44656_44662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__36587__auto__,map__44632,map__44632__$1,opts,tokenExpMins,delayMs))
;
return ((function (switch__36497__auto__,c__36587__auto__,map__44632,map__44632__$1,opts,tokenExpMins,delayMs){
return (function() {
var huginn$mqtt$client_refresher_$_state_machine__36498__auto__ = null;
var huginn$mqtt$client_refresher_$_state_machine__36498__auto____0 = (function (){
var statearr_44657 = [null,null,null,null,null,null,null,null,null];
(statearr_44657[(0)] = huginn$mqtt$client_refresher_$_state_machine__36498__auto__);

(statearr_44657[(1)] = (1));

return statearr_44657;
});
var huginn$mqtt$client_refresher_$_state_machine__36498__auto____1 = (function (state_44652){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_44652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e44658){if((e44658 instanceof Object)){
var ex__36501__auto__ = e44658;
var statearr_44659_44663 = state_44652;
(statearr_44659_44663[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44664 = state_44652;
state_44652 = G__44664;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$client_refresher_$_state_machine__36498__auto__ = function(state_44652){
switch(arguments.length){
case 0:
return huginn$mqtt$client_refresher_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$client_refresher_$_state_machine__36498__auto____1.call(this,state_44652);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_refresher_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_refresher_$_state_machine__36498__auto____0;
huginn$mqtt$client_refresher_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_refresher_$_state_machine__36498__auto____1;
return huginn$mqtt$client_refresher_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__,map__44632,map__44632__$1,opts,tokenExpMins,delayMs))
})();
var state__36589__auto__ = (function (){var statearr_44660 = f__36588__auto__.call(null);
(statearr_44660[(6)] = c__36587__auto__);

return statearr_44660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__,map__44632,map__44632__$1,opts,tokenExpMins,delayMs))
);

return c__36587__auto__;
});
huginn.mqtt.tele_chan = (function huginn$mqtt$tele_chan(opts){
var temp_chan = cljs.core.async.chan.call(null);
var out_chan = cljs.core.async.chan.call(null);
var c__36587__auto___44697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto___44697,temp_chan,out_chan){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto___44697,temp_chan,out_chan){
return (function (state_44678){
var state_val_44679 = (state_44678[(1)]);
if((state_val_44679 === (1))){
var state_44678__$1 = state_44678;
var statearr_44680_44698 = state_44678__$1;
(statearr_44680_44698[(2)] = null);

(statearr_44680_44698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44679 === (2))){
var inst_44666 = huginn.mqtt.node$module$systeminformation.cpuTemperature.call(null);
var inst_44667 = cljs.core.partial.call(null,huginn.mqtt.prep_temps,opts);
var inst_44668 = (function (){return ((function (inst_44666,inst_44667,state_val_44679,c__36587__auto___44697,temp_chan,out_chan){
return (function (vs){
var c__36587__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto____$1,inst_44666,inst_44667,state_val_44679,c__36587__auto___44697,temp_chan,out_chan){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto____$1,inst_44666,inst_44667,state_val_44679,c__36587__auto___44697,temp_chan,out_chan){
return (function (state_44684){
var state_val_44685 = (state_44684[(1)]);
if((state_val_44685 === (1))){
var state_44684__$1 = state_44684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44684__$1,(2),temp_chan,vs);
} else {
if((state_val_44685 === (2))){
var inst_44682 = (state_44684[(2)]);
var state_44684__$1 = state_44684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44684__$1,inst_44682);
} else {
return null;
}
}
});})(c__36587__auto____$1,inst_44666,inst_44667,state_val_44679,c__36587__auto___44697,temp_chan,out_chan))
;
return ((function (switch__36497__auto__,c__36587__auto____$1,inst_44666,inst_44667,state_val_44679,c__36587__auto___44697,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__36498__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__36498__auto____0 = (function (){
var statearr_44686 = [null,null,null,null,null,null,null];
(statearr_44686[(0)] = huginn$mqtt$tele_chan_$_state_machine__36498__auto__);

(statearr_44686[(1)] = (1));

return statearr_44686;
});
var huginn$mqtt$tele_chan_$_state_machine__36498__auto____1 = (function (state_44684){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_44684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e44687){if((e44687 instanceof Object)){
var ex__36501__auto__ = e44687;
var statearr_44688_44699 = state_44684;
(statearr_44688_44699[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44700 = state_44684;
state_44684 = G__44700;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__36498__auto__ = function(state_44684){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__36498__auto____1.call(this,state_44684);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__36498__auto____0;
huginn$mqtt$tele_chan_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__36498__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto____$1,inst_44666,inst_44667,state_val_44679,c__36587__auto___44697,temp_chan,out_chan))
})();
var state__36589__auto__ = (function (){var statearr_44689 = f__36588__auto__.call(null);
(statearr_44689[(6)] = c__36587__auto____$1);

return statearr_44689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto____$1,inst_44666,inst_44667,state_val_44679,c__36587__auto___44697,temp_chan,out_chan))
);

return c__36587__auto____$1;
});
;})(inst_44666,inst_44667,state_val_44679,c__36587__auto___44697,temp_chan,out_chan))
})();
var inst_44669 = promesa.core.chain.call(null,inst_44666,inst_44667,inst_44668);
var state_44678__$1 = (function (){var statearr_44690 = state_44678;
(statearr_44690[(7)] = inst_44669);

return statearr_44690;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44678__$1,(4),temp_chan);
} else {
if((state_val_44679 === (3))){
var inst_44676 = (state_44678[(2)]);
var state_44678__$1 = state_44678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44678__$1,inst_44676);
} else {
if((state_val_44679 === (4))){
var inst_44671 = (state_44678[(2)]);
var state_44678__$1 = state_44678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44678__$1,(5),out_chan,inst_44671);
} else {
if((state_val_44679 === (5))){
var inst_44673 = (state_44678[(2)]);
var state_44678__$1 = (function (){var statearr_44691 = state_44678;
(statearr_44691[(8)] = inst_44673);

return statearr_44691;
})();
var statearr_44692_44701 = state_44678__$1;
(statearr_44692_44701[(2)] = null);

(statearr_44692_44701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__36587__auto___44697,temp_chan,out_chan))
;
return ((function (switch__36497__auto__,c__36587__auto___44697,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__36498__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__36498__auto____0 = (function (){
var statearr_44693 = [null,null,null,null,null,null,null,null,null];
(statearr_44693[(0)] = huginn$mqtt$tele_chan_$_state_machine__36498__auto__);

(statearr_44693[(1)] = (1));

return statearr_44693;
});
var huginn$mqtt$tele_chan_$_state_machine__36498__auto____1 = (function (state_44678){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_44678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e44694){if((e44694 instanceof Object)){
var ex__36501__auto__ = e44694;
var statearr_44695_44702 = state_44678;
(statearr_44695_44702[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44703 = state_44678;
state_44678 = G__44703;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__36498__auto__ = function(state_44678){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__36498__auto____1.call(this,state_44678);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__36498__auto____0;
huginn$mqtt$tele_chan_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__36498__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto___44697,temp_chan,out_chan))
})();
var state__36589__auto__ = (function (){var statearr_44696 = f__36588__auto__.call(null);
(statearr_44696[(6)] = c__36587__auto___44697);

return statearr_44696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto___44697,temp_chan,out_chan))
);


return out_chan;
});
huginn.mqtt.sender = (function huginn$mqtt$sender(topic_name,opts,send,t_chan){
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__){
return (function (state_44745){
var state_val_44746 = (state_44745[(1)]);
if((state_val_44746 === (7))){
var inst_44706 = (state_44745[(7)]);
var inst_44707 = (state_44745[(8)]);
var inst_44732 = (state_44745[(2)]);
var inst_44734 = (function (){var teles = inst_44706;
var topic = inst_44707;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_44706,inst_44707,inst_44732,state_val_44746,c__36587__auto__){
return (function (p__44733){
var map__44747 = p__44733;
var map__44747__$1 = ((((!((map__44747 == null)))?((((map__44747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44747):map__44747);
var t = map__44747__$1;
var subfolder = cljs.core.get.call(null,map__44747__$1,new cljs.core.Keyword(null,"subfolder","subfolder",1044158439));
var my_topic = (cljs.core.truth_(subfolder)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(topic),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(subfolder)].join(''):topic);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"topic","topic",-1960480691),my_topic),new cljs.core.Keyword(null,"qos","qos",-2124292319),qos);
});
;})(teles,topic,qos,inst_44706,inst_44707,inst_44732,state_val_44746,c__36587__auto__))
})();
var inst_44735 = cljs.core.map.call(null,inst_44734,inst_44706);
var inst_44736 = cljs.core.async.onto_chan.call(null,send,inst_44735,false);
var inst_44737 = new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168).cljs$core$IFn$_invoke$arity$1(opts);
var inst_44738 = cljs.core.async.timeout.call(null,inst_44737);
var state_44745__$1 = (function (){var statearr_44749 = state_44745;
(statearr_44749[(9)] = inst_44732);

(statearr_44749[(10)] = inst_44736);

return statearr_44749;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44745__$1,(11),inst_44738);
} else {
if((state_val_44746 === (1))){
var state_44745__$1 = state_44745;
var statearr_44750_44768 = state_44745__$1;
(statearr_44750_44768[(2)] = null);

(statearr_44750_44768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44746 === (4))){
var inst_44706 = (state_44745[(2)]);
var inst_44707 = huginn.mqtt.mqtt_topic.call(null,opts,topic_name);
var inst_44708 = cljs.core._EQ_.call(null,"state",topic_name);
var state_44745__$1 = (function (){var statearr_44751 = state_44745;
(statearr_44751[(7)] = inst_44706);

(statearr_44751[(8)] = inst_44707);

return statearr_44751;
})();
if(inst_44708){
var statearr_44752_44769 = state_44745__$1;
(statearr_44752_44769[(1)] = (5));

} else {
var statearr_44753_44770 = state_44745__$1;
(statearr_44753_44770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44746 === (6))){
var state_44745__$1 = state_44745;
var statearr_44754_44771 = state_44745__$1;
(statearr_44754_44771[(2)] = null);

(statearr_44754_44771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44746 === (3))){
var inst_44743 = (state_44745[(2)]);
var state_44745__$1 = state_44745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44745__$1,inst_44743);
} else {
if((state_val_44746 === (2))){
var state_44745__$1 = state_44745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44745__$1,(4),t_chan);
} else {
if((state_val_44746 === (11))){
var inst_44740 = (state_44745[(2)]);
var state_44745__$1 = (function (){var statearr_44755 = state_44745;
(statearr_44755[(11)] = inst_44740);

return statearr_44755;
})();
var statearr_44756_44772 = state_44745__$1;
(statearr_44756_44772[(2)] = null);

(statearr_44756_44772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44746 === (9))){
var inst_44706 = (state_44745[(7)]);
var inst_44707 = (state_44745[(8)]);
var inst_44713 = (state_44745[(2)]);
var inst_44714 = (function (){var teles = inst_44706;
var topic = inst_44707;
var qos = ({"qos": (1)});
var e__44167__auto__ = inst_44713;
return ((function (teles,topic,qos,e__44167__auto__,inst_44706,inst_44707,inst_44713,state_val_44746,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__44167__auto__], null);
});
;})(teles,topic,qos,e__44167__auto__,inst_44706,inst_44707,inst_44713,state_val_44746,c__36587__auto__))
})();
var inst_44715 = (new cljs.core.Delay(inst_44714,null));
var inst_44716 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init10702756143272110808.clj",150,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_44715,null,-675601697);
var inst_44717 = (function(){throw inst_44713})();
var state_44745__$1 = (function (){var statearr_44757 = state_44745;
(statearr_44757[(12)] = inst_44716);

return statearr_44757;
})();
var statearr_44758_44773 = state_44745__$1;
(statearr_44758_44773[(2)] = inst_44717);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44745__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44746 === (5))){
var inst_44706 = (state_44745[(7)]);
var inst_44707 = (state_44745[(8)]);
var inst_44710 = (function (){var teles = inst_44706;
var topic = inst_44707;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_44706,inst_44707,state_val_44746,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pushing state",topic], null);
});
;})(teles,topic,qos,inst_44706,inst_44707,state_val_44746,c__36587__auto__))
})();
var inst_44711 = (new cljs.core.Delay(inst_44710,null));
var inst_44712 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init10702756143272110808.clj",149,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_44711,null,733573650);
var state_44745__$1 = (function (){var statearr_44759 = state_44745;
(statearr_44759[(13)] = inst_44712);

return statearr_44759;
})();
var statearr_44760_44774 = state_44745__$1;
(statearr_44760_44774[(2)] = null);

(statearr_44760_44774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44746 === (10))){
var inst_44706 = (state_44745[(7)]);
var inst_44707 = (state_44745[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44745,(9),Error,null,(8));
var inst_44721 = cljs.core.PersistentVector.EMPTY;
var inst_44722 = cljs.core.comp.call(null,cljs.core.type,new cljs.core.Keyword(null,"payload","payload",-383036092));
var inst_44723 = cljs.core.map.call(null,inst_44722);
var inst_44724 = cljs.core.into.call(null,inst_44721,inst_44723,inst_44706);
var inst_44725 = (function (){var teles = inst_44706;
var topic = inst_44707;
var qos = ({"qos": (1)});
var result__44205__auto__ = inst_44724;
return ((function (teles,topic,qos,result__44205__auto__,inst_44706,inst_44707,_,inst_44721,inst_44722,inst_44723,inst_44724,state_val_44746,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Keyword(null,"payload","payload",-383036092))),new cljs.core.Symbol(null,"teles","teles",1601787367,null)),"=>",result__44205__auto__], null);
});
;})(teles,topic,qos,result__44205__auto__,inst_44706,inst_44707,_,inst_44721,inst_44722,inst_44723,inst_44724,state_val_44746,c__36587__auto__))
})();
var inst_44726 = (new cljs.core.Delay(inst_44725,null));
var inst_44727 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init10702756143272110808.clj",150,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_44726,null,843347635);
var state_44745__$1 = (function (){var statearr_44761 = state_44745;
(statearr_44761[(14)] = inst_44727);

return statearr_44761;
})();
var statearr_44762_44775 = state_44745__$1;
(statearr_44762_44775[(2)] = inst_44724);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44745__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44746 === (8))){
var inst_44729 = (state_44745[(2)]);
var state_44745__$1 = state_44745;
var statearr_44763_44776 = state_44745__$1;
(statearr_44763_44776[(2)] = inst_44729);

(statearr_44763_44776[(1)] = (7));


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
});})(c__36587__auto__))
;
return ((function (switch__36497__auto__,c__36587__auto__){
return (function() {
var huginn$mqtt$sender_$_state_machine__36498__auto__ = null;
var huginn$mqtt$sender_$_state_machine__36498__auto____0 = (function (){
var statearr_44764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44764[(0)] = huginn$mqtt$sender_$_state_machine__36498__auto__);

(statearr_44764[(1)] = (1));

return statearr_44764;
});
var huginn$mqtt$sender_$_state_machine__36498__auto____1 = (function (state_44745){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_44745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e44765){if((e44765 instanceof Object)){
var ex__36501__auto__ = e44765;
var statearr_44766_44777 = state_44745;
(statearr_44766_44777[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44778 = state_44745;
state_44745 = G__44778;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$sender_$_state_machine__36498__auto__ = function(state_44745){
switch(arguments.length){
case 0:
return huginn$mqtt$sender_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$sender_$_state_machine__36498__auto____1.call(this,state_44745);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$sender_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$sender_$_state_machine__36498__auto____0;
huginn$mqtt$sender_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$sender_$_state_machine__36498__auto____1;
return huginn$mqtt$sender_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_44767 = f__36588__auto__.call(null);
(statearr_44767[(6)] = c__36587__auto__);

return statearr_44767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
});
huginn.mqtt.state_send = cljs.core.partial.call(null,huginn.mqtt.sender,"state");
huginn.mqtt.tele_send = cljs.core.partial.call(null,huginn.mqtt.sender,"events");
huginn.mqtt.clean_up = (function huginn$mqtt$clean_up(p__44779){
var map__44780 = p__44779;
var map__44780__$1 = ((((!((map__44780 == null)))?((((map__44780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44780):map__44780);
var system = map__44780__$1;
var send_chan = cljs.core.get.call(null,map__44780__$1,new cljs.core.Keyword(null,"send-chan","send-chan",1681189602));
var recv_chan = cljs.core.get.call(null,map__44780__$1,new cljs.core.Keyword(null,"recv-chan","recv-chan",869238850));
var telemetry_chan = cljs.core.get.call(null,map__44780__$1,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503));
var state_chan = cljs.core.get.call(null,map__44780__$1,new cljs.core.Keyword(null,"state-chan","state-chan",-1042477017));
var client_atom = cljs.core.get.call(null,map__44780__$1,new cljs.core.Keyword(null,"client-atom","client-atom",-1733084110));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,"Killing system","huginn.mqtt","/tmp/form-init10702756143272110808.clj",170,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__44780,map__44780__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(map__44780,map__44780__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
,null)),null,-884034927);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__44780,map__44780__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (c){
return cljs.core.async.close_BANG_.call(null,c);
});})(map__44780,map__44780__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
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
var state_chan = cljs.core.async.chan.call(null);
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
