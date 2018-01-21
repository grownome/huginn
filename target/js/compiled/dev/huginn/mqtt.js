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
huginn.mqtt.client_id = (function huginn$mqtt$client_id(p__37450){
var map__37451 = p__37450;
var map__37451__$1 = ((((!((map__37451 == null)))?((((map__37451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37451):map__37451);
var opts = map__37451__$1;
var projectId = cljs.core.get.call(null,map__37451__$1,new cljs.core.Keyword(null,"projectId","projectId",-1551013096));
var registryId = cljs.core.get.call(null,map__37451__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var cloudRegion = cljs.core.get.call(null,map__37451__$1,new cljs.core.Keyword(null,"cloudRegion","cloudRegion",-857757214));
var deviceId = cljs.core.get.call(null,map__37451__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["projects/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(projectId),"/locations/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cloudRegion),"/registries/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId)].join('');
});
huginn.mqtt.config_chan = (function huginn$mqtt$config_chan(p__37453){
var map__37454 = p__37453;
var map__37454__$1 = ((((!((map__37454 == null)))?((((map__37454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37454):map__37454);
var opts = map__37454__$1;
var deviceId = cljs.core.get.call(null,map__37454__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"/config"].join('');
});
huginn.mqtt.client_handlers = (function huginn$mqtt$client_handlers(success_fn,fail,send,recv){
return new cljs.core.PersistentArrayMap(null, 4, ["connect",(function (success){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init5194013314517424909.clj",31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connected"], null);
}),null)),null,1260144721);

if(cljs.core.truth_(success)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init5194013314517424909.clj",34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection success"], null);
}),null)),null,-1833277139);

return success_fn.call(null);
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init5194013314517424909.clj",37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection failure"], null);
}),null)),null,271061757);

return fail.call(null);
}
}),"close",(function (){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init5194013314517424909.clj",39,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection closed"], null);
}),null)),null,1762471633);
}),"error",(function (err){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init5194013314517424909.clj",40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error: ",err], null);
}),null)),null,2017026696);
}),"message",(function (topic,message,packet){
try{var result__35585__auto___37469 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,message,packet], null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init5194013314517424909.clj",42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__35585__auto___37469){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"message","message",1234475525,null),new cljs.core.Symbol(null,"packet","packet",1106973446,null)], null),"=>",result__35585__auto___37469], null);
});})(result__35585__auto___37469))
,null)),null,-946821164);

}catch (e37456){if((e37456 instanceof Error)){
var e__35547__auto___37470 = e37456;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init5194013314517424909.clj",42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__35547__auto___37470){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__35547__auto___37470], null);
});})(e__35547__auto___37470))
,null)),null,950377994);

throw e__35547__auto___37470;
} else {
throw e37456;

}
}
var c__36917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto__){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto__){
return (function (state_37463){
var state_val_37464 = (state_37463[(1)]);
if((state_val_37464 === (1))){
var inst_37457 = [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"packet","packet",-533558081)];
var inst_37458 = [topic,message,packet];
var inst_37459 = cljs.core.PersistentHashMap.fromArrays(inst_37457,inst_37458);
var state_37463__$1 = state_37463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37463__$1,(2),recv,inst_37459);
} else {
if((state_val_37464 === (2))){
var inst_37461 = (state_37463[(2)]);
var state_37463__$1 = state_37463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37463__$1,inst_37461);
} else {
return null;
}
}
});})(c__36917__auto__))
;
return ((function (switch__36894__auto__,c__36917__auto__){
return (function() {
var huginn$mqtt$client_handlers_$_state_machine__36895__auto__ = null;
var huginn$mqtt$client_handlers_$_state_machine__36895__auto____0 = (function (){
var statearr_37465 = [null,null,null,null,null,null,null];
(statearr_37465[(0)] = huginn$mqtt$client_handlers_$_state_machine__36895__auto__);

(statearr_37465[(1)] = (1));

return statearr_37465;
});
var huginn$mqtt$client_handlers_$_state_machine__36895__auto____1 = (function (state_37463){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37466){if((e37466 instanceof Object)){
var ex__36898__auto__ = e37466;
var statearr_37467_37471 = state_37463;
(statearr_37467_37471[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37472 = state_37463;
state_37463 = G__37472;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$client_handlers_$_state_machine__36895__auto__ = function(state_37463){
switch(arguments.length){
case 0:
return huginn$mqtt$client_handlers_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$client_handlers_$_state_machine__36895__auto____1.call(this,state_37463);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_handlers_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_handlers_$_state_machine__36895__auto____0;
huginn$mqtt$client_handlers_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_handlers_$_state_machine__36895__auto____1;
return huginn$mqtt$client_handlers_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto__))
})();
var state__36919__auto__ = (function (){var statearr_37468 = f__36918__auto__.call(null);
(statearr_37468[(6)] = c__36917__auto__);

return statearr_37468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto__))
);

return c__36917__auto__;
})], null);
});
huginn.mqtt.add_handlers = (function huginn$mqtt$add_handlers(client,handlers){
var seq__37473 = cljs.core.seq.call(null,handlers);
var chunk__37474 = null;
var count__37475 = (0);
var i__37476 = (0);
while(true){
if((i__37476 < count__37475)){
var vec__37477 = cljs.core._nth.call(null,chunk__37474,i__37476);
var key = cljs.core.nth.call(null,vec__37477,(0),null);
var hand = cljs.core.nth.call(null,vec__37477,(1),null);
client.on(key,hand);

var G__37483 = seq__37473;
var G__37484 = chunk__37474;
var G__37485 = count__37475;
var G__37486 = (i__37476 + (1));
seq__37473 = G__37483;
chunk__37474 = G__37484;
count__37475 = G__37485;
i__37476 = G__37486;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37473);
if(temp__5457__auto__){
var seq__37473__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37473__$1)){
var c__31803__auto__ = cljs.core.chunk_first.call(null,seq__37473__$1);
var G__37487 = cljs.core.chunk_rest.call(null,seq__37473__$1);
var G__37488 = c__31803__auto__;
var G__37489 = cljs.core.count.call(null,c__31803__auto__);
var G__37490 = (0);
seq__37473 = G__37487;
chunk__37474 = G__37488;
count__37475 = G__37489;
i__37476 = G__37490;
continue;
} else {
var vec__37480 = cljs.core.first.call(null,seq__37473__$1);
var key = cljs.core.nth.call(null,vec__37480,(0),null);
var hand = cljs.core.nth.call(null,vec__37480,(1),null);
client.on(key,hand);

var G__37491 = cljs.core.next.call(null,seq__37473__$1);
var G__37492 = null;
var G__37493 = (0);
var G__37494 = (0);
seq__37473 = G__37491;
chunk__37474 = G__37492;
count__37475 = G__37493;
i__37476 = G__37494;
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
var map__37495 = huginn.mqtt.build_client.call(null,opts);
var map__37495__$1 = ((((!((map__37495 == null)))?((((map__37495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37495):map__37495);
var init = map__37495__$1;
var time = cljs.core.get.call(null,map__37495__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var client = cljs.core.get.call(null,map__37495__$1,new cljs.core.Keyword(null,"client","client",-1323448117));
var handlers = huginn.mqtt.client_handlers.call(null,((function (map__37495,map__37495__$1,init,time,client){
return (function (){
return resolve.call(null,client);
});})(map__37495,map__37495__$1,init,time,client))
,((function (map__37495,map__37495__$1,init,time,client){
return (function (){
return reject.call(null,new cljs.core.Keyword(null,"client-fail","client-fail",1564298304));
});})(map__37495,map__37495__$1,init,time,client))
,send,recv);
client.subscribe(huginn.mqtt.config_chan.call(null,opts));

return huginn.mqtt.add_handlers.call(null,client,handlers);
}));
});
huginn.mqtt.payload_root = (function huginn$mqtt$payload_root(p__37497){
var map__37498 = p__37497;
var map__37498__$1 = ((((!((map__37498 == null)))?((((map__37498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37498.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37498):map__37498);
var opts = map__37498__$1;
var registryId = cljs.core.get.call(null,map__37498__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var deviceId = cljs.core.get.call(null,map__37498__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"-payload"].join('');
});
/**
 * msg-type can be 'state' for state updates
 * or 'events' to publish telemetry
 */
huginn.mqtt.mqtt_topic = (function huginn$mqtt$mqtt_topic(p__37500,msg_type){
var map__37501 = p__37500;
var map__37501__$1 = ((((!((map__37501 == null)))?((((map__37501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37501):map__37501);
var opts = map__37501__$1;
var deviceId = cljs.core.get.call(null,map__37501__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
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
huginn.mqtt.publish_one = (function huginn$mqtt$publish_one(client,p__37503){
var map__37504 = p__37503;
var map__37504__$1 = ((((!((map__37504 == null)))?((((map__37504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37504):map__37504);
var p = map__37504__$1;
var topic = cljs.core.get.call(null,map__37504__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var payload = cljs.core.get.call(null,map__37504__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var qos = cljs.core.get.call(null,map__37504__$1,new cljs.core.Keyword(null,"qos","qos",-2124292319));
return client.publish(topic,payload,qos);
});
huginn.mqtt.publisher = (function huginn$mqtt$publisher(client_atom,send_chan){
var c__36917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto__){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto__){
return (function (state_37515){
var state_val_37516 = (state_37515[(1)]);
if((state_val_37516 === (1))){
var state_37515__$1 = state_37515;
var statearr_37517_37524 = state_37515__$1;
(statearr_37517_37524[(2)] = null);

(statearr_37517_37524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37516 === (2))){
var state_37515__$1 = state_37515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37515__$1,(4),send_chan);
} else {
if((state_val_37516 === (3))){
var inst_37513 = (state_37515[(2)]);
var state_37515__$1 = state_37515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37515__$1,inst_37513);
} else {
if((state_val_37516 === (4))){
var inst_37508 = (state_37515[(2)]);
var inst_37509 = cljs.core.deref.call(null,client_atom);
var inst_37510 = huginn.mqtt.publish_one.call(null,inst_37509,inst_37508);
var state_37515__$1 = (function (){var statearr_37518 = state_37515;
(statearr_37518[(7)] = inst_37510);

return statearr_37518;
})();
var statearr_37519_37525 = state_37515__$1;
(statearr_37519_37525[(2)] = null);

(statearr_37519_37525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__36917__auto__))
;
return ((function (switch__36894__auto__,c__36917__auto__){
return (function() {
var huginn$mqtt$publisher_$_state_machine__36895__auto__ = null;
var huginn$mqtt$publisher_$_state_machine__36895__auto____0 = (function (){
var statearr_37520 = [null,null,null,null,null,null,null,null];
(statearr_37520[(0)] = huginn$mqtt$publisher_$_state_machine__36895__auto__);

(statearr_37520[(1)] = (1));

return statearr_37520;
});
var huginn$mqtt$publisher_$_state_machine__36895__auto____1 = (function (state_37515){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37521){if((e37521 instanceof Object)){
var ex__36898__auto__ = e37521;
var statearr_37522_37526 = state_37515;
(statearr_37522_37526[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37527 = state_37515;
state_37515 = G__37527;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$publisher_$_state_machine__36895__auto__ = function(state_37515){
switch(arguments.length){
case 0:
return huginn$mqtt$publisher_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$publisher_$_state_machine__36895__auto____1.call(this,state_37515);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$publisher_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$publisher_$_state_machine__36895__auto____0;
huginn$mqtt$publisher_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$publisher_$_state_machine__36895__auto____1;
return huginn$mqtt$publisher_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto__))
})();
var state__36919__auto__ = (function (){var statearr_37523 = f__36918__auto__.call(null);
(statearr_37523[(6)] = c__36917__auto__);

return statearr_37523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto__))
);

return c__36917__auto__;
});
/**
 * loops and refreshs the client atom every token experation
 */
huginn.mqtt.client_refresher = (function huginn$mqtt$client_refresher(client_atom,p__37528,send,recv){
var map__37529 = p__37528;
var map__37529__$1 = ((((!((map__37529 == null)))?((((map__37529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37529):map__37529);
var opts = map__37529__$1;
var tokenExpMins = cljs.core.get.call(null,map__37529__$1,new cljs.core.Keyword(null,"tokenExpMins","tokenExpMins",-1638711857));
var delayMs = cljs.core.get.call(null,map__37529__$1,new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168));
var c__36917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto__,map__37529,map__37529__$1,opts,tokenExpMins,delayMs){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto__,map__37529,map__37529__$1,opts,tokenExpMins,delayMs){
return (function (state_37549){
var state_val_37550 = (state_37549[(1)]);
if((state_val_37550 === (1))){
var state_37549__$1 = state_37549;
var statearr_37551_37558 = state_37549__$1;
(statearr_37551_37558[(2)] = null);

(statearr_37551_37558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37550 === (2))){
var inst_37532 = (tokenExpMins * (1000));
var inst_37533 = (inst_37532 * (60));
var inst_37534 = cljs.core.async.timeout.call(null,inst_37533);
var state_37549__$1 = state_37549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37549__$1,(4),inst_37534);
} else {
if((state_val_37550 === (3))){
var inst_37547 = (state_37549[(2)]);
var state_37549__$1 = state_37549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37549__$1,inst_37547);
} else {
if((state_val_37550 === (4))){
var inst_37536 = (state_37549[(2)]);
var inst_37537 = (function (){var wait = inst_37536;
return ((function (wait,inst_37536,state_val_37550,c__36917__auto__,map__37529,map__37529__$1,opts,tokenExpMins,delayMs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\tRefreshing token after ",((tokenExpMins * (1000)) * (60)),"ms"], null);
});
;})(wait,inst_37536,state_val_37550,c__36917__auto__,map__37529,map__37529__$1,opts,tokenExpMins,delayMs))
})();
var inst_37538 = (new cljs.core.Delay(inst_37537,null));
var inst_37539 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init5194013314517424909.clj",114,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37538,null,-768523944);
var inst_37540 = (function (){var wait = inst_37536;
return ((function (wait,inst_37536,inst_37537,inst_37538,inst_37539,state_val_37550,c__36917__auto__,map__37529,map__37529__$1,opts,tokenExpMins,delayMs){
return (function (resolve,reject){
return cljs.core.swap_BANG_.call(null,client_atom,((function (wait,inst_37536,inst_37537,inst_37538,inst_37539,state_val_37550,c__36917__auto__,map__37529,map__37529__$1,opts,tokenExpMins,delayMs){
return (function (c){
c.end();

return resolve.call(null);
});})(wait,inst_37536,inst_37537,inst_37538,inst_37539,state_val_37550,c__36917__auto__,map__37529,map__37529__$1,opts,tokenExpMins,delayMs))
);
});
;})(wait,inst_37536,inst_37537,inst_37538,inst_37539,state_val_37550,c__36917__auto__,map__37529,map__37529__$1,opts,tokenExpMins,delayMs))
})();
var inst_37541 = promesa.core.promise.call(null,inst_37540);
var inst_37542 = (function (){var wait = inst_37536;
return ((function (wait,inst_37536,inst_37537,inst_37538,inst_37539,inst_37540,inst_37541,state_val_37550,c__36917__auto__,map__37529,map__37529__$1,opts,tokenExpMins,delayMs){
return (function (){
return huginn.mqtt.init_client.call(null,opts,send,recv);
});
;})(wait,inst_37536,inst_37537,inst_37538,inst_37539,inst_37540,inst_37541,state_val_37550,c__36917__auto__,map__37529,map__37529__$1,opts,tokenExpMins,delayMs))
})();
var inst_37543 = (function (){var wait = inst_37536;
return ((function (wait,inst_37536,inst_37537,inst_37538,inst_37539,inst_37540,inst_37541,inst_37542,state_val_37550,c__36917__auto__,map__37529,map__37529__$1,opts,tokenExpMins,delayMs){
return (function (client){
return cljs.core.reset_BANG_.call(null,client_atom,client);
});
;})(wait,inst_37536,inst_37537,inst_37538,inst_37539,inst_37540,inst_37541,inst_37542,state_val_37550,c__36917__auto__,map__37529,map__37529__$1,opts,tokenExpMins,delayMs))
})();
var inst_37544 = promesa.core.chain.call(null,inst_37541,inst_37542,inst_37543);
var state_37549__$1 = (function (){var statearr_37552 = state_37549;
(statearr_37552[(7)] = inst_37539);

(statearr_37552[(8)] = inst_37544);

return statearr_37552;
})();
var statearr_37553_37559 = state_37549__$1;
(statearr_37553_37559[(2)] = null);

(statearr_37553_37559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__36917__auto__,map__37529,map__37529__$1,opts,tokenExpMins,delayMs))
;
return ((function (switch__36894__auto__,c__36917__auto__,map__37529,map__37529__$1,opts,tokenExpMins,delayMs){
return (function() {
var huginn$mqtt$client_refresher_$_state_machine__36895__auto__ = null;
var huginn$mqtt$client_refresher_$_state_machine__36895__auto____0 = (function (){
var statearr_37554 = [null,null,null,null,null,null,null,null,null];
(statearr_37554[(0)] = huginn$mqtt$client_refresher_$_state_machine__36895__auto__);

(statearr_37554[(1)] = (1));

return statearr_37554;
});
var huginn$mqtt$client_refresher_$_state_machine__36895__auto____1 = (function (state_37549){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37555){if((e37555 instanceof Object)){
var ex__36898__auto__ = e37555;
var statearr_37556_37560 = state_37549;
(statearr_37556_37560[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37561 = state_37549;
state_37549 = G__37561;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$client_refresher_$_state_machine__36895__auto__ = function(state_37549){
switch(arguments.length){
case 0:
return huginn$mqtt$client_refresher_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$client_refresher_$_state_machine__36895__auto____1.call(this,state_37549);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_refresher_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_refresher_$_state_machine__36895__auto____0;
huginn$mqtt$client_refresher_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_refresher_$_state_machine__36895__auto____1;
return huginn$mqtt$client_refresher_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto__,map__37529,map__37529__$1,opts,tokenExpMins,delayMs))
})();
var state__36919__auto__ = (function (){var statearr_37557 = f__36918__auto__.call(null);
(statearr_37557[(6)] = c__36917__auto__);

return statearr_37557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto__,map__37529,map__37529__$1,opts,tokenExpMins,delayMs))
);

return c__36917__auto__;
});
huginn.mqtt.tele_chan = (function huginn$mqtt$tele_chan(opts){
var temp_chan = cljs.core.async.chan.call(null);
var out_chan = cljs.core.async.chan.call(null);
var c__36917__auto___37594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto___37594,temp_chan,out_chan){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto___37594,temp_chan,out_chan){
return (function (state_37575){
var state_val_37576 = (state_37575[(1)]);
if((state_val_37576 === (1))){
var state_37575__$1 = state_37575;
var statearr_37577_37595 = state_37575__$1;
(statearr_37577_37595[(2)] = null);

(statearr_37577_37595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37576 === (2))){
var inst_37563 = huginn.mqtt.node$module$systeminformation.cpuTemperature.call(null);
var inst_37564 = cljs.core.partial.call(null,huginn.mqtt.prep_temps,opts);
var inst_37565 = (function (){return ((function (inst_37563,inst_37564,state_val_37576,c__36917__auto___37594,temp_chan,out_chan){
return (function (vs){
var c__36917__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto____$1,inst_37563,inst_37564,state_val_37576,c__36917__auto___37594,temp_chan,out_chan){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto____$1,inst_37563,inst_37564,state_val_37576,c__36917__auto___37594,temp_chan,out_chan){
return (function (state_37581){
var state_val_37582 = (state_37581[(1)]);
if((state_val_37582 === (1))){
var state_37581__$1 = state_37581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37581__$1,(2),temp_chan,vs);
} else {
if((state_val_37582 === (2))){
var inst_37579 = (state_37581[(2)]);
var state_37581__$1 = state_37581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37581__$1,inst_37579);
} else {
return null;
}
}
});})(c__36917__auto____$1,inst_37563,inst_37564,state_val_37576,c__36917__auto___37594,temp_chan,out_chan))
;
return ((function (switch__36894__auto__,c__36917__auto____$1,inst_37563,inst_37564,state_val_37576,c__36917__auto___37594,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__36895__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__36895__auto____0 = (function (){
var statearr_37583 = [null,null,null,null,null,null,null];
(statearr_37583[(0)] = huginn$mqtt$tele_chan_$_state_machine__36895__auto__);

(statearr_37583[(1)] = (1));

return statearr_37583;
});
var huginn$mqtt$tele_chan_$_state_machine__36895__auto____1 = (function (state_37581){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37584){if((e37584 instanceof Object)){
var ex__36898__auto__ = e37584;
var statearr_37585_37596 = state_37581;
(statearr_37585_37596[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37597 = state_37581;
state_37581 = G__37597;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__36895__auto__ = function(state_37581){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__36895__auto____1.call(this,state_37581);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__36895__auto____0;
huginn$mqtt$tele_chan_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__36895__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto____$1,inst_37563,inst_37564,state_val_37576,c__36917__auto___37594,temp_chan,out_chan))
})();
var state__36919__auto__ = (function (){var statearr_37586 = f__36918__auto__.call(null);
(statearr_37586[(6)] = c__36917__auto____$1);

return statearr_37586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto____$1,inst_37563,inst_37564,state_val_37576,c__36917__auto___37594,temp_chan,out_chan))
);

return c__36917__auto____$1;
});
;})(inst_37563,inst_37564,state_val_37576,c__36917__auto___37594,temp_chan,out_chan))
})();
var inst_37566 = promesa.core.chain.call(null,inst_37563,inst_37564,inst_37565);
var state_37575__$1 = (function (){var statearr_37587 = state_37575;
(statearr_37587[(7)] = inst_37566);

return statearr_37587;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37575__$1,(4),temp_chan);
} else {
if((state_val_37576 === (3))){
var inst_37573 = (state_37575[(2)]);
var state_37575__$1 = state_37575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37575__$1,inst_37573);
} else {
if((state_val_37576 === (4))){
var inst_37568 = (state_37575[(2)]);
var state_37575__$1 = state_37575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37575__$1,(5),out_chan,inst_37568);
} else {
if((state_val_37576 === (5))){
var inst_37570 = (state_37575[(2)]);
var state_37575__$1 = (function (){var statearr_37588 = state_37575;
(statearr_37588[(8)] = inst_37570);

return statearr_37588;
})();
var statearr_37589_37598 = state_37575__$1;
(statearr_37589_37598[(2)] = null);

(statearr_37589_37598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__36917__auto___37594,temp_chan,out_chan))
;
return ((function (switch__36894__auto__,c__36917__auto___37594,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__36895__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__36895__auto____0 = (function (){
var statearr_37590 = [null,null,null,null,null,null,null,null,null];
(statearr_37590[(0)] = huginn$mqtt$tele_chan_$_state_machine__36895__auto__);

(statearr_37590[(1)] = (1));

return statearr_37590;
});
var huginn$mqtt$tele_chan_$_state_machine__36895__auto____1 = (function (state_37575){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37591){if((e37591 instanceof Object)){
var ex__36898__auto__ = e37591;
var statearr_37592_37599 = state_37575;
(statearr_37592_37599[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37600 = state_37575;
state_37575 = G__37600;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__36895__auto__ = function(state_37575){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__36895__auto____1.call(this,state_37575);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__36895__auto____0;
huginn$mqtt$tele_chan_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__36895__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto___37594,temp_chan,out_chan))
})();
var state__36919__auto__ = (function (){var statearr_37593 = f__36918__auto__.call(null);
(statearr_37593[(6)] = c__36917__auto___37594);

return statearr_37593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto___37594,temp_chan,out_chan))
);


return out_chan;
});
huginn.mqtt.sender = (function huginn$mqtt$sender(topic_name,opts,send,t_chan){
var c__36917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto__){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto__){
return (function (state_37624){
var state_val_37625 = (state_37624[(1)]);
if((state_val_37625 === (1))){
var state_37624__$1 = state_37624;
var statearr_37626_37639 = state_37624__$1;
(statearr_37626_37639[(2)] = null);

(statearr_37626_37639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37625 === (2))){
var state_37624__$1 = state_37624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37624__$1,(4),t_chan);
} else {
if((state_val_37625 === (3))){
var inst_37622 = (state_37624[(2)]);
var state_37624__$1 = state_37624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37624__$1,inst_37622);
} else {
if((state_val_37625 === (4))){
var inst_37603 = (state_37624[(2)]);
var inst_37604 = huginn.mqtt.mqtt_topic.call(null,opts,topic_name);
var inst_37605 = cljs.core._EQ_.call(null,"state",topic_name);
var state_37624__$1 = (function (){var statearr_37627 = state_37624;
(statearr_37627[(7)] = inst_37603);

(statearr_37627[(8)] = inst_37604);

return statearr_37627;
})();
if(inst_37605){
var statearr_37628_37640 = state_37624__$1;
(statearr_37628_37640[(1)] = (5));

} else {
var statearr_37629_37641 = state_37624__$1;
(statearr_37629_37641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37625 === (5))){
var inst_37603 = (state_37624[(7)]);
var inst_37604 = (state_37624[(8)]);
var inst_37607 = (function (){var teles = inst_37603;
var topic = inst_37604;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_37603,inst_37604,state_val_37625,c__36917__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pushing state",topic], null);
});
;})(teles,topic,qos,inst_37603,inst_37604,state_val_37625,c__36917__auto__))
})();
var inst_37608 = (new cljs.core.Delay(inst_37607,null));
var inst_37609 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init5194013314517424909.clj",147,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37608,null,797198651);
var state_37624__$1 = state_37624;
var statearr_37630_37642 = state_37624__$1;
(statearr_37630_37642[(2)] = inst_37609);

(statearr_37630_37642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37625 === (6))){
var state_37624__$1 = state_37624;
var statearr_37631_37643 = state_37624__$1;
(statearr_37631_37643[(2)] = null);

(statearr_37631_37643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37625 === (7))){
var inst_37603 = (state_37624[(7)]);
var inst_37604 = (state_37624[(8)]);
var inst_37612 = (state_37624[(2)]);
var inst_37613 = (function (){var teles = inst_37603;
var topic = inst_37604;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_37603,inst_37604,inst_37612,state_val_37625,c__36917__auto__){
return (function (t){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"topic","topic",-1960480691),topic),new cljs.core.Keyword(null,"qos","qos",-2124292319),qos);
});
;})(teles,topic,qos,inst_37603,inst_37604,inst_37612,state_val_37625,c__36917__auto__))
})();
var inst_37614 = cljs.core.map.call(null,inst_37613,inst_37603);
var inst_37615 = cljs.core.async.onto_chan.call(null,send,inst_37614,false);
var inst_37616 = new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168).cljs$core$IFn$_invoke$arity$1(opts);
var inst_37617 = cljs.core.async.timeout.call(null,inst_37616);
var state_37624__$1 = (function (){var statearr_37632 = state_37624;
(statearr_37632[(9)] = inst_37615);

(statearr_37632[(10)] = inst_37612);

return statearr_37632;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37624__$1,(8),inst_37617);
} else {
if((state_val_37625 === (8))){
var inst_37619 = (state_37624[(2)]);
var state_37624__$1 = (function (){var statearr_37633 = state_37624;
(statearr_37633[(11)] = inst_37619);

return statearr_37633;
})();
var statearr_37634_37644 = state_37624__$1;
(statearr_37634_37644[(2)] = null);

(statearr_37634_37644[(1)] = (2));


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
});})(c__36917__auto__))
;
return ((function (switch__36894__auto__,c__36917__auto__){
return (function() {
var huginn$mqtt$sender_$_state_machine__36895__auto__ = null;
var huginn$mqtt$sender_$_state_machine__36895__auto____0 = (function (){
var statearr_37635 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37635[(0)] = huginn$mqtt$sender_$_state_machine__36895__auto__);

(statearr_37635[(1)] = (1));

return statearr_37635;
});
var huginn$mqtt$sender_$_state_machine__36895__auto____1 = (function (state_37624){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37636){if((e37636 instanceof Object)){
var ex__36898__auto__ = e37636;
var statearr_37637_37645 = state_37624;
(statearr_37637_37645[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37646 = state_37624;
state_37624 = G__37646;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$sender_$_state_machine__36895__auto__ = function(state_37624){
switch(arguments.length){
case 0:
return huginn$mqtt$sender_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$sender_$_state_machine__36895__auto____1.call(this,state_37624);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$sender_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$sender_$_state_machine__36895__auto____0;
huginn$mqtt$sender_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$sender_$_state_machine__36895__auto____1;
return huginn$mqtt$sender_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto__))
})();
var state__36919__auto__ = (function (){var statearr_37638 = f__36918__auto__.call(null);
(statearr_37638[(6)] = c__36917__auto__);

return statearr_37638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto__))
);

return c__36917__auto__;
});
huginn.mqtt.state_send = cljs.core.partial.call(null,huginn.mqtt.sender,"state");
huginn.mqtt.tele_send = cljs.core.partial.call(null,huginn.mqtt.sender,"events");
huginn.mqtt.clean_up = (function huginn$mqtt$clean_up(p__37647){
var map__37648 = p__37647;
var map__37648__$1 = ((((!((map__37648 == null)))?((((map__37648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37648.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37648):map__37648);
var system = map__37648__$1;
var send_chan = cljs.core.get.call(null,map__37648__$1,new cljs.core.Keyword(null,"send-chan","send-chan",1681189602));
var recv_chan = cljs.core.get.call(null,map__37648__$1,new cljs.core.Keyword(null,"recv-chan","recv-chan",869238850));
var telemetry_chan = cljs.core.get.call(null,map__37648__$1,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503));
var state_chan = cljs.core.get.call(null,map__37648__$1,new cljs.core.Keyword(null,"state-chan","state-chan",-1042477017));
var client_atom = cljs.core.get.call(null,map__37648__$1,new cljs.core.Keyword(null,"client-atom","client-atom",-1733084110));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,"Killing system","huginn.mqtt","/tmp/form-init5194013314517424909.clj",166,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__37648,map__37648__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(map__37648,map__37648__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
,null)),null,265707331);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__37648,map__37648__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (c){
return cljs.core.async.close_BANG_.call(null,c);
});})(map__37648,map__37648__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
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
