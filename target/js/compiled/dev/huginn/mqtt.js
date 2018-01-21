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
huginn.mqtt.client_id = (function huginn$mqtt$client_id(p__45468){
var map__45469 = p__45468;
var map__45469__$1 = ((((!((map__45469 == null)))?((((map__45469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45469):map__45469);
var opts = map__45469__$1;
var projectId = cljs.core.get.call(null,map__45469__$1,new cljs.core.Keyword(null,"projectId","projectId",-1551013096));
var registryId = cljs.core.get.call(null,map__45469__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var cloudRegion = cljs.core.get.call(null,map__45469__$1,new cljs.core.Keyword(null,"cloudRegion","cloudRegion",-857757214));
var deviceId = cljs.core.get.call(null,map__45469__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["projects/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(projectId),"/locations/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cloudRegion),"/registries/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId)].join('');
});
huginn.mqtt.config_chan = (function huginn$mqtt$config_chan(p__45471){
var map__45472 = p__45471;
var map__45472__$1 = ((((!((map__45472 == null)))?((((map__45472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45472):map__45472);
var opts = map__45472__$1;
var deviceId = cljs.core.get.call(null,map__45472__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"/config"].join('');
});
huginn.mqtt.client_handlers = (function huginn$mqtt$client_handlers(success_fn,fail,send,recv){
return new cljs.core.PersistentArrayMap(null, 4, ["connect",(function (success){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connected"], null);
}),null)),null,923223498);

if(cljs.core.truth_(success)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection success"], null);
}),null)),null,-827739941);

return success_fn.call(null);
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection failure"], null);
}),null)),null,916882284);

return fail.call(null);
}
}),"close",(function (){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",39,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection closed"], null);
}),null)),null,921252450);
}),"error",(function (err){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error: ",err], null);
}),null)),null,1603134839);
}),"message",(function (topic,message,packet){
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__){
return (function (state_45480){
var state_val_45481 = (state_45480[(1)]);
if((state_val_45481 === (1))){
var inst_45474 = [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"packet","packet",-533558081)];
var inst_45475 = [topic,message,packet];
var inst_45476 = cljs.core.PersistentHashMap.fromArrays(inst_45474,inst_45475);
var state_45480__$1 = state_45480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45480__$1,(2),recv,inst_45476);
} else {
if((state_val_45481 === (2))){
var inst_45478 = (state_45480[(2)]);
var state_45480__$1 = state_45480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45480__$1,inst_45478);
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
var statearr_45482 = [null,null,null,null,null,null,null];
(statearr_45482[(0)] = huginn$mqtt$client_handlers_$_state_machine__36498__auto__);

(statearr_45482[(1)] = (1));

return statearr_45482;
});
var huginn$mqtt$client_handlers_$_state_machine__36498__auto____1 = (function (state_45480){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_45480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e45483){if((e45483 instanceof Object)){
var ex__36501__auto__ = e45483;
var statearr_45484_45486 = state_45480;
(statearr_45484_45486[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45487 = state_45480;
state_45480 = G__45487;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$client_handlers_$_state_machine__36498__auto__ = function(state_45480){
switch(arguments.length){
case 0:
return huginn$mqtt$client_handlers_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$client_handlers_$_state_machine__36498__auto____1.call(this,state_45480);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_handlers_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_handlers_$_state_machine__36498__auto____0;
huginn$mqtt$client_handlers_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_handlers_$_state_machine__36498__auto____1;
return huginn$mqtt$client_handlers_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_45485 = f__36588__auto__.call(null);
(statearr_45485[(6)] = c__36587__auto__);

return statearr_45485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
})], null);
});
huginn.mqtt.add_handlers = (function huginn$mqtt$add_handlers(client,handlers){
var seq__45488 = cljs.core.seq.call(null,handlers);
var chunk__45489 = null;
var count__45490 = (0);
var i__45491 = (0);
while(true){
if((i__45491 < count__45490)){
var vec__45492 = cljs.core._nth.call(null,chunk__45489,i__45491);
var key = cljs.core.nth.call(null,vec__45492,(0),null);
var hand = cljs.core.nth.call(null,vec__45492,(1),null);
client.on(key,hand);

var G__45498 = seq__45488;
var G__45499 = chunk__45489;
var G__45500 = count__45490;
var G__45501 = (i__45491 + (1));
seq__45488 = G__45498;
chunk__45489 = G__45499;
count__45490 = G__45500;
i__45491 = G__45501;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__45488);
if(temp__5457__auto__){
var seq__45488__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45488__$1)){
var c__31803__auto__ = cljs.core.chunk_first.call(null,seq__45488__$1);
var G__45502 = cljs.core.chunk_rest.call(null,seq__45488__$1);
var G__45503 = c__31803__auto__;
var G__45504 = cljs.core.count.call(null,c__31803__auto__);
var G__45505 = (0);
seq__45488 = G__45502;
chunk__45489 = G__45503;
count__45490 = G__45504;
i__45491 = G__45505;
continue;
} else {
var vec__45495 = cljs.core.first.call(null,seq__45488__$1);
var key = cljs.core.nth.call(null,vec__45495,(0),null);
var hand = cljs.core.nth.call(null,vec__45495,(1),null);
client.on(key,hand);

var G__45506 = cljs.core.next.call(null,seq__45488__$1);
var G__45507 = null;
var G__45508 = (0);
var G__45509 = (0);
seq__45488 = G__45506;
chunk__45489 = G__45507;
count__45490 = G__45508;
i__45491 = G__45509;
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
var map__45510 = huginn.mqtt.build_client.call(null,opts);
var map__45510__$1 = ((((!((map__45510 == null)))?((((map__45510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45510):map__45510);
var init = map__45510__$1;
var time = cljs.core.get.call(null,map__45510__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var client = cljs.core.get.call(null,map__45510__$1,new cljs.core.Keyword(null,"client","client",-1323448117));
var handlers = huginn.mqtt.client_handlers.call(null,((function (map__45510,map__45510__$1,init,time,client){
return (function (){
return resolve.call(null,client);
});})(map__45510,map__45510__$1,init,time,client))
,((function (map__45510,map__45510__$1,init,time,client){
return (function (){
return reject.call(null,new cljs.core.Keyword(null,"client-fail","client-fail",1564298304));
});})(map__45510,map__45510__$1,init,time,client))
,send,recv);
client.subscribe(huginn.mqtt.config_chan.call(null,opts));

return huginn.mqtt.add_handlers.call(null,client,handlers);
}));
});
huginn.mqtt.payload_root = (function huginn$mqtt$payload_root(p__45512){
var map__45513 = p__45512;
var map__45513__$1 = ((((!((map__45513 == null)))?((((map__45513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45513):map__45513);
var opts = map__45513__$1;
var registryId = cljs.core.get.call(null,map__45513__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var deviceId = cljs.core.get.call(null,map__45513__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"-payload"].join('');
});
/**
 * msg-type can be 'state' for state updates
 * or 'events' to publish telemetry
 */
huginn.mqtt.mqtt_topic = (function huginn$mqtt$mqtt_topic(p__45515,msg_type){
var map__45516 = p__45515;
var map__45516__$1 = ((((!((map__45516 == null)))?((((map__45516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45516):map__45516);
var opts = map__45516__$1;
var deviceId = cljs.core.get.call(null,map__45516__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
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
huginn.mqtt.publish_one = (function huginn$mqtt$publish_one(client,p__45518){
var map__45519 = p__45518;
var map__45519__$1 = ((((!((map__45519 == null)))?((((map__45519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45519.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45519):map__45519);
var p = map__45519__$1;
var topic = cljs.core.get.call(null,map__45519__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var payload = cljs.core.get.call(null,map__45519__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var qos = cljs.core.get.call(null,map__45519__$1,new cljs.core.Keyword(null,"qos","qos",-2124292319));
return client.publish(topic,payload,qos);
});
huginn.mqtt.publisher = (function huginn$mqtt$publisher(client_atom,send_chan){
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__){
return (function (state_45530){
var state_val_45531 = (state_45530[(1)]);
if((state_val_45531 === (1))){
var state_45530__$1 = state_45530;
var statearr_45532_45539 = state_45530__$1;
(statearr_45532_45539[(2)] = null);

(statearr_45532_45539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45531 === (2))){
var state_45530__$1 = state_45530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45530__$1,(4),send_chan);
} else {
if((state_val_45531 === (3))){
var inst_45528 = (state_45530[(2)]);
var state_45530__$1 = state_45530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45530__$1,inst_45528);
} else {
if((state_val_45531 === (4))){
var inst_45523 = (state_45530[(2)]);
var inst_45524 = cljs.core.deref.call(null,client_atom);
var inst_45525 = huginn.mqtt.publish_one.call(null,inst_45524,inst_45523);
var state_45530__$1 = (function (){var statearr_45533 = state_45530;
(statearr_45533[(7)] = inst_45525);

return statearr_45533;
})();
var statearr_45534_45540 = state_45530__$1;
(statearr_45534_45540[(2)] = null);

(statearr_45534_45540[(1)] = (2));


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
var statearr_45535 = [null,null,null,null,null,null,null,null];
(statearr_45535[(0)] = huginn$mqtt$publisher_$_state_machine__36498__auto__);

(statearr_45535[(1)] = (1));

return statearr_45535;
});
var huginn$mqtt$publisher_$_state_machine__36498__auto____1 = (function (state_45530){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_45530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e45536){if((e45536 instanceof Object)){
var ex__36501__auto__ = e45536;
var statearr_45537_45541 = state_45530;
(statearr_45537_45541[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45542 = state_45530;
state_45530 = G__45542;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$publisher_$_state_machine__36498__auto__ = function(state_45530){
switch(arguments.length){
case 0:
return huginn$mqtt$publisher_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$publisher_$_state_machine__36498__auto____1.call(this,state_45530);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$publisher_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$publisher_$_state_machine__36498__auto____0;
huginn$mqtt$publisher_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$publisher_$_state_machine__36498__auto____1;
return huginn$mqtt$publisher_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_45538 = f__36588__auto__.call(null);
(statearr_45538[(6)] = c__36587__auto__);

return statearr_45538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
});
/**
 * loops and refreshs the client atom every token experation
 */
huginn.mqtt.client_refresher = (function huginn$mqtt$client_refresher(client_atom,p__45543,send,recv){
var map__45544 = p__45543;
var map__45544__$1 = ((((!((map__45544 == null)))?((((map__45544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45544):map__45544);
var opts = map__45544__$1;
var tokenExpMins = cljs.core.get.call(null,map__45544__$1,new cljs.core.Keyword(null,"tokenExpMins","tokenExpMins",-1638711857));
var delayMs = cljs.core.get.call(null,map__45544__$1,new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168));
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__,map__45544,map__45544__$1,opts,tokenExpMins,delayMs){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__,map__45544,map__45544__$1,opts,tokenExpMins,delayMs){
return (function (state_45564){
var state_val_45565 = (state_45564[(1)]);
if((state_val_45565 === (1))){
var state_45564__$1 = state_45564;
var statearr_45566_45573 = state_45564__$1;
(statearr_45566_45573[(2)] = null);

(statearr_45566_45573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45565 === (2))){
var inst_45547 = (tokenExpMins * (1000));
var inst_45548 = (inst_45547 * (60));
var inst_45549 = cljs.core.async.timeout.call(null,inst_45548);
var state_45564__$1 = state_45564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45564__$1,(4),inst_45549);
} else {
if((state_val_45565 === (3))){
var inst_45562 = (state_45564[(2)]);
var state_45564__$1 = state_45564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45564__$1,inst_45562);
} else {
if((state_val_45565 === (4))){
var inst_45551 = (state_45564[(2)]);
var inst_45552 = (function (){var wait = inst_45551;
return ((function (wait,inst_45551,state_val_45565,c__36587__auto__,map__45544,map__45544__$1,opts,tokenExpMins,delayMs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\tRefreshing token after ",((tokenExpMins * (1000)) * (60)),"ms"], null);
});
;})(wait,inst_45551,state_val_45565,c__36587__auto__,map__45544,map__45544__$1,opts,tokenExpMins,delayMs))
})();
var inst_45553 = (new cljs.core.Delay(inst_45552,null));
var inst_45554 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",113,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_45553,null,-108296053);
var inst_45555 = (function (){var wait = inst_45551;
return ((function (wait,inst_45551,inst_45552,inst_45553,inst_45554,state_val_45565,c__36587__auto__,map__45544,map__45544__$1,opts,tokenExpMins,delayMs){
return (function (resolve,reject){
return cljs.core.swap_BANG_.call(null,client_atom,((function (wait,inst_45551,inst_45552,inst_45553,inst_45554,state_val_45565,c__36587__auto__,map__45544,map__45544__$1,opts,tokenExpMins,delayMs){
return (function (c){
c.end();

return resolve.call(null);
});})(wait,inst_45551,inst_45552,inst_45553,inst_45554,state_val_45565,c__36587__auto__,map__45544,map__45544__$1,opts,tokenExpMins,delayMs))
);
});
;})(wait,inst_45551,inst_45552,inst_45553,inst_45554,state_val_45565,c__36587__auto__,map__45544,map__45544__$1,opts,tokenExpMins,delayMs))
})();
var inst_45556 = promesa.core.promise.call(null,inst_45555);
var inst_45557 = (function (){var wait = inst_45551;
return ((function (wait,inst_45551,inst_45552,inst_45553,inst_45554,inst_45555,inst_45556,state_val_45565,c__36587__auto__,map__45544,map__45544__$1,opts,tokenExpMins,delayMs){
return (function (){
return huginn.mqtt.init_client.call(null,opts,send,recv);
});
;})(wait,inst_45551,inst_45552,inst_45553,inst_45554,inst_45555,inst_45556,state_val_45565,c__36587__auto__,map__45544,map__45544__$1,opts,tokenExpMins,delayMs))
})();
var inst_45558 = (function (){var wait = inst_45551;
return ((function (wait,inst_45551,inst_45552,inst_45553,inst_45554,inst_45555,inst_45556,inst_45557,state_val_45565,c__36587__auto__,map__45544,map__45544__$1,opts,tokenExpMins,delayMs){
return (function (client){
return cljs.core.reset_BANG_.call(null,client_atom,client);
});
;})(wait,inst_45551,inst_45552,inst_45553,inst_45554,inst_45555,inst_45556,inst_45557,state_val_45565,c__36587__auto__,map__45544,map__45544__$1,opts,tokenExpMins,delayMs))
})();
var inst_45559 = promesa.core.chain.call(null,inst_45556,inst_45557,inst_45558);
var state_45564__$1 = (function (){var statearr_45567 = state_45564;
(statearr_45567[(7)] = inst_45554);

(statearr_45567[(8)] = inst_45559);

return statearr_45567;
})();
var statearr_45568_45574 = state_45564__$1;
(statearr_45568_45574[(2)] = null);

(statearr_45568_45574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__36587__auto__,map__45544,map__45544__$1,opts,tokenExpMins,delayMs))
;
return ((function (switch__36497__auto__,c__36587__auto__,map__45544,map__45544__$1,opts,tokenExpMins,delayMs){
return (function() {
var huginn$mqtt$client_refresher_$_state_machine__36498__auto__ = null;
var huginn$mqtt$client_refresher_$_state_machine__36498__auto____0 = (function (){
var statearr_45569 = [null,null,null,null,null,null,null,null,null];
(statearr_45569[(0)] = huginn$mqtt$client_refresher_$_state_machine__36498__auto__);

(statearr_45569[(1)] = (1));

return statearr_45569;
});
var huginn$mqtt$client_refresher_$_state_machine__36498__auto____1 = (function (state_45564){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_45564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e45570){if((e45570 instanceof Object)){
var ex__36501__auto__ = e45570;
var statearr_45571_45575 = state_45564;
(statearr_45571_45575[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45576 = state_45564;
state_45564 = G__45576;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$client_refresher_$_state_machine__36498__auto__ = function(state_45564){
switch(arguments.length){
case 0:
return huginn$mqtt$client_refresher_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$client_refresher_$_state_machine__36498__auto____1.call(this,state_45564);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_refresher_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_refresher_$_state_machine__36498__auto____0;
huginn$mqtt$client_refresher_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_refresher_$_state_machine__36498__auto____1;
return huginn$mqtt$client_refresher_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__,map__45544,map__45544__$1,opts,tokenExpMins,delayMs))
})();
var state__36589__auto__ = (function (){var statearr_45572 = f__36588__auto__.call(null);
(statearr_45572[(6)] = c__36587__auto__);

return statearr_45572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__,map__45544,map__45544__$1,opts,tokenExpMins,delayMs))
);

return c__36587__auto__;
});
huginn.mqtt.tele_chan = (function huginn$mqtt$tele_chan(opts){
var temp_chan = cljs.core.async.chan.call(null);
var out_chan = cljs.core.async.chan.call(null);
var c__36587__auto___45609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto___45609,temp_chan,out_chan){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto___45609,temp_chan,out_chan){
return (function (state_45590){
var state_val_45591 = (state_45590[(1)]);
if((state_val_45591 === (1))){
var state_45590__$1 = state_45590;
var statearr_45592_45610 = state_45590__$1;
(statearr_45592_45610[(2)] = null);

(statearr_45592_45610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45591 === (2))){
var inst_45578 = huginn.mqtt.node$module$systeminformation.cpuTemperature.call(null);
var inst_45579 = cljs.core.partial.call(null,huginn.mqtt.prep_temps,opts);
var inst_45580 = (function (){return ((function (inst_45578,inst_45579,state_val_45591,c__36587__auto___45609,temp_chan,out_chan){
return (function (vs){
var c__36587__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto____$1,inst_45578,inst_45579,state_val_45591,c__36587__auto___45609,temp_chan,out_chan){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto____$1,inst_45578,inst_45579,state_val_45591,c__36587__auto___45609,temp_chan,out_chan){
return (function (state_45596){
var state_val_45597 = (state_45596[(1)]);
if((state_val_45597 === (1))){
var state_45596__$1 = state_45596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45596__$1,(2),temp_chan,vs);
} else {
if((state_val_45597 === (2))){
var inst_45594 = (state_45596[(2)]);
var state_45596__$1 = state_45596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45596__$1,inst_45594);
} else {
return null;
}
}
});})(c__36587__auto____$1,inst_45578,inst_45579,state_val_45591,c__36587__auto___45609,temp_chan,out_chan))
;
return ((function (switch__36497__auto__,c__36587__auto____$1,inst_45578,inst_45579,state_val_45591,c__36587__auto___45609,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__36498__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__36498__auto____0 = (function (){
var statearr_45598 = [null,null,null,null,null,null,null];
(statearr_45598[(0)] = huginn$mqtt$tele_chan_$_state_machine__36498__auto__);

(statearr_45598[(1)] = (1));

return statearr_45598;
});
var huginn$mqtt$tele_chan_$_state_machine__36498__auto____1 = (function (state_45596){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_45596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e45599){if((e45599 instanceof Object)){
var ex__36501__auto__ = e45599;
var statearr_45600_45611 = state_45596;
(statearr_45600_45611[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45612 = state_45596;
state_45596 = G__45612;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__36498__auto__ = function(state_45596){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__36498__auto____1.call(this,state_45596);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__36498__auto____0;
huginn$mqtt$tele_chan_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__36498__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto____$1,inst_45578,inst_45579,state_val_45591,c__36587__auto___45609,temp_chan,out_chan))
})();
var state__36589__auto__ = (function (){var statearr_45601 = f__36588__auto__.call(null);
(statearr_45601[(6)] = c__36587__auto____$1);

return statearr_45601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto____$1,inst_45578,inst_45579,state_val_45591,c__36587__auto___45609,temp_chan,out_chan))
);

return c__36587__auto____$1;
});
;})(inst_45578,inst_45579,state_val_45591,c__36587__auto___45609,temp_chan,out_chan))
})();
var inst_45581 = promesa.core.chain.call(null,inst_45578,inst_45579,inst_45580);
var state_45590__$1 = (function (){var statearr_45602 = state_45590;
(statearr_45602[(7)] = inst_45581);

return statearr_45602;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45590__$1,(4),temp_chan);
} else {
if((state_val_45591 === (3))){
var inst_45588 = (state_45590[(2)]);
var state_45590__$1 = state_45590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45590__$1,inst_45588);
} else {
if((state_val_45591 === (4))){
var inst_45583 = (state_45590[(2)]);
var state_45590__$1 = state_45590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45590__$1,(5),out_chan,inst_45583);
} else {
if((state_val_45591 === (5))){
var inst_45585 = (state_45590[(2)]);
var state_45590__$1 = (function (){var statearr_45603 = state_45590;
(statearr_45603[(8)] = inst_45585);

return statearr_45603;
})();
var statearr_45604_45613 = state_45590__$1;
(statearr_45604_45613[(2)] = null);

(statearr_45604_45613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__36587__auto___45609,temp_chan,out_chan))
;
return ((function (switch__36497__auto__,c__36587__auto___45609,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__36498__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__36498__auto____0 = (function (){
var statearr_45605 = [null,null,null,null,null,null,null,null,null];
(statearr_45605[(0)] = huginn$mqtt$tele_chan_$_state_machine__36498__auto__);

(statearr_45605[(1)] = (1));

return statearr_45605;
});
var huginn$mqtt$tele_chan_$_state_machine__36498__auto____1 = (function (state_45590){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_45590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e45606){if((e45606 instanceof Object)){
var ex__36501__auto__ = e45606;
var statearr_45607_45614 = state_45590;
(statearr_45607_45614[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45615 = state_45590;
state_45590 = G__45615;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__36498__auto__ = function(state_45590){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__36498__auto____1.call(this,state_45590);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__36498__auto____0;
huginn$mqtt$tele_chan_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__36498__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto___45609,temp_chan,out_chan))
})();
var state__36589__auto__ = (function (){var statearr_45608 = f__36588__auto__.call(null);
(statearr_45608[(6)] = c__36587__auto___45609);

return statearr_45608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto___45609,temp_chan,out_chan))
);


return out_chan;
});
huginn.mqtt.sender = (function huginn$mqtt$sender(topic_name,opts,send,t_chan){
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__){
return (function (state_45656){
var state_val_45657 = (state_45656[(1)]);
if((state_val_45657 === (7))){
var inst_45618 = (state_45656[(7)]);
var inst_45619 = (state_45656[(8)]);
var inst_45644 = (state_45656[(2)]);
var inst_45645 = (function (){var teles = inst_45618;
var topic = inst_45619;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_45618,inst_45619,inst_45644,state_val_45657,c__36587__auto__){
return (function (t){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"topic","topic",-1960480691),topic),new cljs.core.Keyword(null,"qos","qos",-2124292319),qos);
});
;})(teles,topic,qos,inst_45618,inst_45619,inst_45644,state_val_45657,c__36587__auto__))
})();
var inst_45646 = cljs.core.map.call(null,inst_45645,inst_45618);
var inst_45647 = cljs.core.async.onto_chan.call(null,send,inst_45646,false);
var inst_45648 = new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168).cljs$core$IFn$_invoke$arity$1(opts);
var inst_45649 = cljs.core.async.timeout.call(null,inst_45648);
var state_45656__$1 = (function (){var statearr_45658 = state_45656;
(statearr_45658[(9)] = inst_45647);

(statearr_45658[(10)] = inst_45644);

return statearr_45658;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45656__$1,(11),inst_45649);
} else {
if((state_val_45657 === (1))){
var state_45656__$1 = state_45656;
var statearr_45659_45677 = state_45656__$1;
(statearr_45659_45677[(2)] = null);

(statearr_45659_45677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45657 === (4))){
var inst_45618 = (state_45656[(2)]);
var inst_45619 = huginn.mqtt.mqtt_topic.call(null,opts,topic_name);
var inst_45620 = cljs.core._EQ_.call(null,"state",topic_name);
var state_45656__$1 = (function (){var statearr_45660 = state_45656;
(statearr_45660[(7)] = inst_45618);

(statearr_45660[(8)] = inst_45619);

return statearr_45660;
})();
if(inst_45620){
var statearr_45661_45678 = state_45656__$1;
(statearr_45661_45678[(1)] = (5));

} else {
var statearr_45662_45679 = state_45656__$1;
(statearr_45662_45679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45657 === (6))){
var state_45656__$1 = state_45656;
var statearr_45663_45680 = state_45656__$1;
(statearr_45663_45680[(2)] = null);

(statearr_45663_45680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45657 === (3))){
var inst_45654 = (state_45656[(2)]);
var state_45656__$1 = state_45656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45656__$1,inst_45654);
} else {
if((state_val_45657 === (2))){
var state_45656__$1 = state_45656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45656__$1,(4),t_chan);
} else {
if((state_val_45657 === (11))){
var inst_45651 = (state_45656[(2)]);
var state_45656__$1 = (function (){var statearr_45664 = state_45656;
(statearr_45664[(11)] = inst_45651);

return statearr_45664;
})();
var statearr_45665_45681 = state_45656__$1;
(statearr_45665_45681[(2)] = null);

(statearr_45665_45681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45657 === (9))){
var inst_45618 = (state_45656[(7)]);
var inst_45619 = (state_45656[(8)]);
var inst_45625 = (state_45656[(2)]);
var inst_45626 = (function (){var teles = inst_45618;
var topic = inst_45619;
var qos = ({"qos": (1)});
var e__44167__auto__ = inst_45625;
return ((function (teles,topic,qos,e__44167__auto__,inst_45618,inst_45619,inst_45625,state_val_45657,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__44167__auto__], null);
});
;})(teles,topic,qos,e__44167__auto__,inst_45618,inst_45619,inst_45625,state_val_45657,c__36587__auto__))
})();
var inst_45627 = (new cljs.core.Delay(inst_45626,null));
var inst_45628 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",147,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_45627,null,614529430);
var inst_45629 = (function(){throw inst_45625})();
var state_45656__$1 = (function (){var statearr_45666 = state_45656;
(statearr_45666[(12)] = inst_45628);

return statearr_45666;
})();
var statearr_45667_45682 = state_45656__$1;
(statearr_45667_45682[(2)] = inst_45629);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45656__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45657 === (5))){
var inst_45618 = (state_45656[(7)]);
var inst_45619 = (state_45656[(8)]);
var inst_45622 = (function (){var teles = inst_45618;
var topic = inst_45619;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_45618,inst_45619,state_val_45657,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pushing state",topic], null);
});
;})(teles,topic,qos,inst_45618,inst_45619,state_val_45657,c__36587__auto__))
})();
var inst_45623 = (new cljs.core.Delay(inst_45622,null));
var inst_45624 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_45623,null,-2088583067);
var state_45656__$1 = (function (){var statearr_45668 = state_45656;
(statearr_45668[(13)] = inst_45624);

return statearr_45668;
})();
var statearr_45669_45683 = state_45656__$1;
(statearr_45669_45683[(2)] = null);

(statearr_45669_45683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45657 === (10))){
var inst_45618 = (state_45656[(7)]);
var inst_45619 = (state_45656[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45656,(9),Error,null,(8));
var inst_45633 = cljs.core.PersistentVector.EMPTY;
var inst_45634 = cljs.core.comp.call(null,cljs.core.type,new cljs.core.Keyword(null,"payload","payload",-383036092));
var inst_45635 = cljs.core.map.call(null,inst_45634);
var inst_45636 = cljs.core.into.call(null,inst_45633,inst_45635,inst_45618);
var inst_45637 = (function (){var teles = inst_45618;
var topic = inst_45619;
var qos = ({"qos": (1)});
var result__44205__auto__ = inst_45636;
return ((function (teles,topic,qos,result__44205__auto__,inst_45618,inst_45619,_,inst_45633,inst_45634,inst_45635,inst_45636,state_val_45657,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Keyword(null,"payload","payload",-383036092))),new cljs.core.Symbol(null,"teles","teles",1601787367,null)),"=>",result__44205__auto__], null);
});
;})(teles,topic,qos,result__44205__auto__,inst_45618,inst_45619,_,inst_45633,inst_45634,inst_45635,inst_45636,state_val_45657,c__36587__auto__))
})();
var inst_45638 = (new cljs.core.Delay(inst_45637,null));
var inst_45639 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",147,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_45638,null,-1292772313);
var state_45656__$1 = (function (){var statearr_45670 = state_45656;
(statearr_45670[(14)] = inst_45639);

return statearr_45670;
})();
var statearr_45671_45684 = state_45656__$1;
(statearr_45671_45684[(2)] = inst_45636);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45656__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45657 === (8))){
var inst_45641 = (state_45656[(2)]);
var state_45656__$1 = state_45656;
var statearr_45672_45685 = state_45656__$1;
(statearr_45672_45685[(2)] = inst_45641);

(statearr_45672_45685[(1)] = (7));


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
var statearr_45673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45673[(0)] = huginn$mqtt$sender_$_state_machine__36498__auto__);

(statearr_45673[(1)] = (1));

return statearr_45673;
});
var huginn$mqtt$sender_$_state_machine__36498__auto____1 = (function (state_45656){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_45656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e45674){if((e45674 instanceof Object)){
var ex__36501__auto__ = e45674;
var statearr_45675_45686 = state_45656;
(statearr_45675_45686[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45687 = state_45656;
state_45656 = G__45687;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$sender_$_state_machine__36498__auto__ = function(state_45656){
switch(arguments.length){
case 0:
return huginn$mqtt$sender_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$sender_$_state_machine__36498__auto____1.call(this,state_45656);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$sender_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$sender_$_state_machine__36498__auto____0;
huginn$mqtt$sender_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$sender_$_state_machine__36498__auto____1;
return huginn$mqtt$sender_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_45676 = f__36588__auto__.call(null);
(statearr_45676[(6)] = c__36587__auto__);

return statearr_45676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
});
huginn.mqtt.state_send = cljs.core.partial.call(null,huginn.mqtt.sender,"state");
huginn.mqtt.tele_send = cljs.core.partial.call(null,huginn.mqtt.sender,"events");
huginn.mqtt.clean_up = (function huginn$mqtt$clean_up(p__45688){
var map__45689 = p__45688;
var map__45689__$1 = ((((!((map__45689 == null)))?((((map__45689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45689):map__45689);
var system = map__45689__$1;
var send_chan = cljs.core.get.call(null,map__45689__$1,new cljs.core.Keyword(null,"send-chan","send-chan",1681189602));
var recv_chan = cljs.core.get.call(null,map__45689__$1,new cljs.core.Keyword(null,"recv-chan","recv-chan",869238850));
var telemetry_chan = cljs.core.get.call(null,map__45689__$1,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503));
var state_chan = cljs.core.get.call(null,map__45689__$1,new cljs.core.Keyword(null,"state-chan","state-chan",-1042477017));
var client_atom = cljs.core.get.call(null,map__45689__$1,new cljs.core.Keyword(null,"client-atom","client-atom",-1733084110));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,"Killing system","huginn.mqtt","/tmp/form-init1252977175527440591.clj",166,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__45689,map__45689__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(map__45689,map__45689__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
,null)),null,-230977255);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__45689,map__45689__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (c){
return cljs.core.async.close_BANG_.call(null,c);
});})(map__45689,map__45689__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
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
