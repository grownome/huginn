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
huginn.mqtt.client_id = (function huginn$mqtt$client_id(p__39989){
var map__39990 = p__39989;
var map__39990__$1 = ((((!((map__39990 == null)))?((((map__39990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39990):map__39990);
var opts = map__39990__$1;
var projectId = cljs.core.get.call(null,map__39990__$1,new cljs.core.Keyword(null,"projectId","projectId",-1551013096));
var registryId = cljs.core.get.call(null,map__39990__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var cloudRegion = cljs.core.get.call(null,map__39990__$1,new cljs.core.Keyword(null,"cloudRegion","cloudRegion",-857757214));
var deviceId = cljs.core.get.call(null,map__39990__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["projects/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(projectId),"/locations/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cloudRegion),"/registries/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId)].join('');
});
huginn.mqtt.config_chan = (function huginn$mqtt$config_chan(p__39992){
var map__39993 = p__39992;
var map__39993__$1 = ((((!((map__39993 == null)))?((((map__39993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39993):map__39993);
var opts = map__39993__$1;
var deviceId = cljs.core.get.call(null,map__39993__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"/config"].join('');
});
huginn.mqtt.client_handlers = (function huginn$mqtt$client_handlers(success_fn,fail,send,recv){
return new cljs.core.PersistentArrayMap(null, 4, ["connect",(function (success){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init3351303088126891041.clj",31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connected"], null);
}),null)),null,-1986450291);

if(cljs.core.truth_(success)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init3351303088126891041.clj",34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection success"], null);
}),null)),null,-983724420);

return success_fn.call(null);
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init3351303088126891041.clj",37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection failure"], null);
}),null)),null,960082572);

return fail.call(null);
}
}),"close",(function (){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init3351303088126891041.clj",39,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection closed"], null);
}),null)),null,1703029540);
}),"error",(function (err){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init3351303088126891041.clj",40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error: ",err], null);
}),null)),null,215886240);
}),"message",(function (topic,message,packet){
var c__17681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto__){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto__){
return (function (state_40001){
var state_val_40002 = (state_40001[(1)]);
if((state_val_40002 === (1))){
var inst_39995 = [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"packet","packet",-533558081)];
var inst_39996 = [topic,message,packet];
var inst_39997 = cljs.core.PersistentHashMap.fromArrays(inst_39995,inst_39996);
var state_40001__$1 = state_40001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40001__$1,(2),recv,inst_39997);
} else {
if((state_val_40002 === (2))){
var inst_39999 = (state_40001[(2)]);
var state_40001__$1 = state_40001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40001__$1,inst_39999);
} else {
return null;
}
}
});})(c__17681__auto__))
;
return ((function (switch__17591__auto__,c__17681__auto__){
return (function() {
var huginn$mqtt$client_handlers_$_state_machine__17592__auto__ = null;
var huginn$mqtt$client_handlers_$_state_machine__17592__auto____0 = (function (){
var statearr_40003 = [null,null,null,null,null,null,null];
(statearr_40003[(0)] = huginn$mqtt$client_handlers_$_state_machine__17592__auto__);

(statearr_40003[(1)] = (1));

return statearr_40003;
});
var huginn$mqtt$client_handlers_$_state_machine__17592__auto____1 = (function (state_40001){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_40001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e40004){if((e40004 instanceof Object)){
var ex__17595__auto__ = e40004;
var statearr_40005_40007 = state_40001;
(statearr_40005_40007[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40008 = state_40001;
state_40001 = G__40008;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
huginn$mqtt$client_handlers_$_state_machine__17592__auto__ = function(state_40001){
switch(arguments.length){
case 0:
return huginn$mqtt$client_handlers_$_state_machine__17592__auto____0.call(this);
case 1:
return huginn$mqtt$client_handlers_$_state_machine__17592__auto____1.call(this,state_40001);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_handlers_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_handlers_$_state_machine__17592__auto____0;
huginn$mqtt$client_handlers_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_handlers_$_state_machine__17592__auto____1;
return huginn$mqtt$client_handlers_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__))
})();
var state__17683__auto__ = (function (){var statearr_40006 = f__17682__auto__.call(null);
(statearr_40006[(6)] = c__17681__auto__);

return statearr_40006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto__))
);

return c__17681__auto__;
})], null);
});
huginn.mqtt.add_handlers = (function huginn$mqtt$add_handlers(client,handlers){
var seq__40009 = cljs.core.seq.call(null,handlers);
var chunk__40010 = null;
var count__40011 = (0);
var i__40012 = (0);
while(true){
if((i__40012 < count__40011)){
var vec__40013 = cljs.core._nth.call(null,chunk__40010,i__40012);
var key = cljs.core.nth.call(null,vec__40013,(0),null);
var hand = cljs.core.nth.call(null,vec__40013,(1),null);
client.on(key,hand);

var G__40019 = seq__40009;
var G__40020 = chunk__40010;
var G__40021 = count__40011;
var G__40022 = (i__40012 + (1));
seq__40009 = G__40019;
chunk__40010 = G__40020;
count__40011 = G__40021;
i__40012 = G__40022;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__40009);
if(temp__5457__auto__){
var seq__40009__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40009__$1)){
var c__9857__auto__ = cljs.core.chunk_first.call(null,seq__40009__$1);
var G__40023 = cljs.core.chunk_rest.call(null,seq__40009__$1);
var G__40024 = c__9857__auto__;
var G__40025 = cljs.core.count.call(null,c__9857__auto__);
var G__40026 = (0);
seq__40009 = G__40023;
chunk__40010 = G__40024;
count__40011 = G__40025;
i__40012 = G__40026;
continue;
} else {
var vec__40016 = cljs.core.first.call(null,seq__40009__$1);
var key = cljs.core.nth.call(null,vec__40016,(0),null);
var hand = cljs.core.nth.call(null,vec__40016,(1),null);
client.on(key,hand);

var G__40027 = cljs.core.next.call(null,seq__40009__$1);
var G__40028 = null;
var G__40029 = (0);
var G__40030 = (0);
seq__40009 = G__40027;
chunk__40010 = G__40028;
count__40011 = G__40029;
i__40012 = G__40030;
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
var map__40031 = huginn.mqtt.build_client.call(null,opts);
var map__40031__$1 = ((((!((map__40031 == null)))?((((map__40031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40031):map__40031);
var init = map__40031__$1;
var time = cljs.core.get.call(null,map__40031__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var client = cljs.core.get.call(null,map__40031__$1,new cljs.core.Keyword(null,"client","client",-1323448117));
var handlers = huginn.mqtt.client_handlers.call(null,((function (map__40031,map__40031__$1,init,time,client){
return (function (){
return resolve.call(null,client);
});})(map__40031,map__40031__$1,init,time,client))
,((function (map__40031,map__40031__$1,init,time,client){
return (function (){
return reject.call(null,new cljs.core.Keyword(null,"client-fail","client-fail",1564298304));
});})(map__40031,map__40031__$1,init,time,client))
,send,recv);
client.subscribe(huginn.mqtt.config_chan.call(null,opts));

return huginn.mqtt.add_handlers.call(null,client,handlers);
}));
});
huginn.mqtt.payload_root = (function huginn$mqtt$payload_root(p__40033){
var map__40034 = p__40033;
var map__40034__$1 = ((((!((map__40034 == null)))?((((map__40034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40034):map__40034);
var opts = map__40034__$1;
var registryId = cljs.core.get.call(null,map__40034__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var deviceId = cljs.core.get.call(null,map__40034__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"-payload"].join('');
});
/**
 * msg-type can be 'state' for state updates
 * or 'events' to publish telemetry
 */
huginn.mqtt.mqtt_topic = (function huginn$mqtt$mqtt_topic(p__40036,msg_type){
var map__40037 = p__40036;
var map__40037__$1 = ((((!((map__40037 == null)))?((((map__40037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40037):map__40037);
var opts = map__40037__$1;
var deviceId = cljs.core.get.call(null,map__40037__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
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
huginn.mqtt.publish_one = (function huginn$mqtt$publish_one(client,p__40039){
var map__40040 = p__40039;
var map__40040__$1 = ((((!((map__40040 == null)))?((((map__40040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40040.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40040):map__40040);
var p = map__40040__$1;
var topic = cljs.core.get.call(null,map__40040__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var payload = cljs.core.get.call(null,map__40040__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var qos = cljs.core.get.call(null,map__40040__$1,new cljs.core.Keyword(null,"qos","qos",-2124292319));
return client.publish(topic,payload,qos);
});
huginn.mqtt.publisher = (function huginn$mqtt$publisher(client_atom,send_chan){
var c__17681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto__){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto__){
return (function (state_40051){
var state_val_40052 = (state_40051[(1)]);
if((state_val_40052 === (1))){
var state_40051__$1 = state_40051;
var statearr_40053_40060 = state_40051__$1;
(statearr_40053_40060[(2)] = null);

(statearr_40053_40060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40052 === (2))){
var state_40051__$1 = state_40051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40051__$1,(4),send_chan);
} else {
if((state_val_40052 === (3))){
var inst_40049 = (state_40051[(2)]);
var state_40051__$1 = state_40051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40051__$1,inst_40049);
} else {
if((state_val_40052 === (4))){
var inst_40044 = (state_40051[(2)]);
var inst_40045 = cljs.core.deref.call(null,client_atom);
var inst_40046 = huginn.mqtt.publish_one.call(null,inst_40045,inst_40044);
var state_40051__$1 = (function (){var statearr_40054 = state_40051;
(statearr_40054[(7)] = inst_40046);

return statearr_40054;
})();
var statearr_40055_40061 = state_40051__$1;
(statearr_40055_40061[(2)] = null);

(statearr_40055_40061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__17681__auto__))
;
return ((function (switch__17591__auto__,c__17681__auto__){
return (function() {
var huginn$mqtt$publisher_$_state_machine__17592__auto__ = null;
var huginn$mqtt$publisher_$_state_machine__17592__auto____0 = (function (){
var statearr_40056 = [null,null,null,null,null,null,null,null];
(statearr_40056[(0)] = huginn$mqtt$publisher_$_state_machine__17592__auto__);

(statearr_40056[(1)] = (1));

return statearr_40056;
});
var huginn$mqtt$publisher_$_state_machine__17592__auto____1 = (function (state_40051){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_40051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e40057){if((e40057 instanceof Object)){
var ex__17595__auto__ = e40057;
var statearr_40058_40062 = state_40051;
(statearr_40058_40062[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40063 = state_40051;
state_40051 = G__40063;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
huginn$mqtt$publisher_$_state_machine__17592__auto__ = function(state_40051){
switch(arguments.length){
case 0:
return huginn$mqtt$publisher_$_state_machine__17592__auto____0.call(this);
case 1:
return huginn$mqtt$publisher_$_state_machine__17592__auto____1.call(this,state_40051);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$publisher_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$publisher_$_state_machine__17592__auto____0;
huginn$mqtt$publisher_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$publisher_$_state_machine__17592__auto____1;
return huginn$mqtt$publisher_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__))
})();
var state__17683__auto__ = (function (){var statearr_40059 = f__17682__auto__.call(null);
(statearr_40059[(6)] = c__17681__auto__);

return statearr_40059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto__))
);

return c__17681__auto__;
});
/**
 * loops and refreshs the client atom every token experation
 */
huginn.mqtt.client_refresher = (function huginn$mqtt$client_refresher(client_atom,p__40064,send,recv){
var map__40065 = p__40064;
var map__40065__$1 = ((((!((map__40065 == null)))?((((map__40065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40065):map__40065);
var opts = map__40065__$1;
var tokenExpMins = cljs.core.get.call(null,map__40065__$1,new cljs.core.Keyword(null,"tokenExpMins","tokenExpMins",-1638711857));
var delayMs = cljs.core.get.call(null,map__40065__$1,new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168));
var c__17681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto__,map__40065,map__40065__$1,opts,tokenExpMins,delayMs){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto__,map__40065,map__40065__$1,opts,tokenExpMins,delayMs){
return (function (state_40085){
var state_val_40086 = (state_40085[(1)]);
if((state_val_40086 === (1))){
var state_40085__$1 = state_40085;
var statearr_40087_40094 = state_40085__$1;
(statearr_40087_40094[(2)] = null);

(statearr_40087_40094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40086 === (2))){
var inst_40068 = (tokenExpMins * (1000));
var inst_40069 = (inst_40068 * (60));
var inst_40070 = cljs.core.async.timeout.call(null,inst_40069);
var state_40085__$1 = state_40085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40085__$1,(4),inst_40070);
} else {
if((state_val_40086 === (3))){
var inst_40083 = (state_40085[(2)]);
var state_40085__$1 = state_40085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40085__$1,inst_40083);
} else {
if((state_val_40086 === (4))){
var inst_40072 = (state_40085[(2)]);
var inst_40073 = (function (){var wait = inst_40072;
return ((function (wait,inst_40072,state_val_40086,c__17681__auto__,map__40065,map__40065__$1,opts,tokenExpMins,delayMs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\tRefreshing token after ",((tokenExpMins * (1000)) * (60)),"ms"], null);
});
;})(wait,inst_40072,state_val_40086,c__17681__auto__,map__40065,map__40065__$1,opts,tokenExpMins,delayMs))
})();
var inst_40074 = (new cljs.core.Delay(inst_40073,null));
var inst_40075 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init3351303088126891041.clj",116,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_40074,null,-1426684828);
var inst_40076 = (function (){var wait = inst_40072;
return ((function (wait,inst_40072,inst_40073,inst_40074,inst_40075,state_val_40086,c__17681__auto__,map__40065,map__40065__$1,opts,tokenExpMins,delayMs){
return (function (resolve,reject){
return cljs.core.swap_BANG_.call(null,client_atom,((function (wait,inst_40072,inst_40073,inst_40074,inst_40075,state_val_40086,c__17681__auto__,map__40065,map__40065__$1,opts,tokenExpMins,delayMs){
return (function (c){
c.end();

return resolve.call(null);
});})(wait,inst_40072,inst_40073,inst_40074,inst_40075,state_val_40086,c__17681__auto__,map__40065,map__40065__$1,opts,tokenExpMins,delayMs))
);
});
;})(wait,inst_40072,inst_40073,inst_40074,inst_40075,state_val_40086,c__17681__auto__,map__40065,map__40065__$1,opts,tokenExpMins,delayMs))
})();
var inst_40077 = promesa.core.promise.call(null,inst_40076);
var inst_40078 = (function (){var wait = inst_40072;
return ((function (wait,inst_40072,inst_40073,inst_40074,inst_40075,inst_40076,inst_40077,state_val_40086,c__17681__auto__,map__40065,map__40065__$1,opts,tokenExpMins,delayMs){
return (function (){
return huginn.mqtt.init_client.call(null,opts,send,recv);
});
;})(wait,inst_40072,inst_40073,inst_40074,inst_40075,inst_40076,inst_40077,state_val_40086,c__17681__auto__,map__40065,map__40065__$1,opts,tokenExpMins,delayMs))
})();
var inst_40079 = (function (){var wait = inst_40072;
return ((function (wait,inst_40072,inst_40073,inst_40074,inst_40075,inst_40076,inst_40077,inst_40078,state_val_40086,c__17681__auto__,map__40065,map__40065__$1,opts,tokenExpMins,delayMs){
return (function (client){
return cljs.core.reset_BANG_.call(null,client_atom,client);
});
;})(wait,inst_40072,inst_40073,inst_40074,inst_40075,inst_40076,inst_40077,inst_40078,state_val_40086,c__17681__auto__,map__40065,map__40065__$1,opts,tokenExpMins,delayMs))
})();
var inst_40080 = promesa.core.chain.call(null,inst_40077,inst_40078,inst_40079);
var state_40085__$1 = (function (){var statearr_40088 = state_40085;
(statearr_40088[(7)] = inst_40075);

(statearr_40088[(8)] = inst_40080);

return statearr_40088;
})();
var statearr_40089_40095 = state_40085__$1;
(statearr_40089_40095[(2)] = null);

(statearr_40089_40095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__17681__auto__,map__40065,map__40065__$1,opts,tokenExpMins,delayMs))
;
return ((function (switch__17591__auto__,c__17681__auto__,map__40065,map__40065__$1,opts,tokenExpMins,delayMs){
return (function() {
var huginn$mqtt$client_refresher_$_state_machine__17592__auto__ = null;
var huginn$mqtt$client_refresher_$_state_machine__17592__auto____0 = (function (){
var statearr_40090 = [null,null,null,null,null,null,null,null,null];
(statearr_40090[(0)] = huginn$mqtt$client_refresher_$_state_machine__17592__auto__);

(statearr_40090[(1)] = (1));

return statearr_40090;
});
var huginn$mqtt$client_refresher_$_state_machine__17592__auto____1 = (function (state_40085){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_40085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e40091){if((e40091 instanceof Object)){
var ex__17595__auto__ = e40091;
var statearr_40092_40096 = state_40085;
(statearr_40092_40096[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40097 = state_40085;
state_40085 = G__40097;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
huginn$mqtt$client_refresher_$_state_machine__17592__auto__ = function(state_40085){
switch(arguments.length){
case 0:
return huginn$mqtt$client_refresher_$_state_machine__17592__auto____0.call(this);
case 1:
return huginn$mqtt$client_refresher_$_state_machine__17592__auto____1.call(this,state_40085);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_refresher_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_refresher_$_state_machine__17592__auto____0;
huginn$mqtt$client_refresher_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_refresher_$_state_machine__17592__auto____1;
return huginn$mqtt$client_refresher_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__,map__40065,map__40065__$1,opts,tokenExpMins,delayMs))
})();
var state__17683__auto__ = (function (){var statearr_40093 = f__17682__auto__.call(null);
(statearr_40093[(6)] = c__17681__auto__);

return statearr_40093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto__,map__40065,map__40065__$1,opts,tokenExpMins,delayMs))
);

return c__17681__auto__;
});
huginn.mqtt.tele_chan = (function huginn$mqtt$tele_chan(opts){
var temp_chan = cljs.core.async.chan.call(null);
var out_chan = cljs.core.async.chan.call(null);
var c__17681__auto___40130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___40130,temp_chan,out_chan){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___40130,temp_chan,out_chan){
return (function (state_40111){
var state_val_40112 = (state_40111[(1)]);
if((state_val_40112 === (1))){
var state_40111__$1 = state_40111;
var statearr_40113_40131 = state_40111__$1;
(statearr_40113_40131[(2)] = null);

(statearr_40113_40131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40112 === (2))){
var inst_40099 = huginn.mqtt.node$module$systeminformation.cpuTemperature.call(null);
var inst_40100 = cljs.core.partial.call(null,huginn.mqtt.prep_temps,opts);
var inst_40101 = (function (){return ((function (inst_40099,inst_40100,state_val_40112,c__17681__auto___40130,temp_chan,out_chan){
return (function (vs){
var c__17681__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto____$1,inst_40099,inst_40100,state_val_40112,c__17681__auto___40130,temp_chan,out_chan){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto____$1,inst_40099,inst_40100,state_val_40112,c__17681__auto___40130,temp_chan,out_chan){
return (function (state_40117){
var state_val_40118 = (state_40117[(1)]);
if((state_val_40118 === (1))){
var state_40117__$1 = state_40117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40117__$1,(2),temp_chan,vs);
} else {
if((state_val_40118 === (2))){
var inst_40115 = (state_40117[(2)]);
var state_40117__$1 = state_40117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40117__$1,inst_40115);
} else {
return null;
}
}
});})(c__17681__auto____$1,inst_40099,inst_40100,state_val_40112,c__17681__auto___40130,temp_chan,out_chan))
;
return ((function (switch__17591__auto__,c__17681__auto____$1,inst_40099,inst_40100,state_val_40112,c__17681__auto___40130,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__17592__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__17592__auto____0 = (function (){
var statearr_40119 = [null,null,null,null,null,null,null];
(statearr_40119[(0)] = huginn$mqtt$tele_chan_$_state_machine__17592__auto__);

(statearr_40119[(1)] = (1));

return statearr_40119;
});
var huginn$mqtt$tele_chan_$_state_machine__17592__auto____1 = (function (state_40117){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_40117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e40120){if((e40120 instanceof Object)){
var ex__17595__auto__ = e40120;
var statearr_40121_40132 = state_40117;
(statearr_40121_40132[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40133 = state_40117;
state_40117 = G__40133;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__17592__auto__ = function(state_40117){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__17592__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__17592__auto____1.call(this,state_40117);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__17592__auto____0;
huginn$mqtt$tele_chan_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__17592__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto____$1,inst_40099,inst_40100,state_val_40112,c__17681__auto___40130,temp_chan,out_chan))
})();
var state__17683__auto__ = (function (){var statearr_40122 = f__17682__auto__.call(null);
(statearr_40122[(6)] = c__17681__auto____$1);

return statearr_40122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto____$1,inst_40099,inst_40100,state_val_40112,c__17681__auto___40130,temp_chan,out_chan))
);

return c__17681__auto____$1;
});
;})(inst_40099,inst_40100,state_val_40112,c__17681__auto___40130,temp_chan,out_chan))
})();
var inst_40102 = promesa.core.chain.call(null,inst_40099,inst_40100,inst_40101);
var state_40111__$1 = (function (){var statearr_40123 = state_40111;
(statearr_40123[(7)] = inst_40102);

return statearr_40123;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40111__$1,(4),temp_chan);
} else {
if((state_val_40112 === (3))){
var inst_40109 = (state_40111[(2)]);
var state_40111__$1 = state_40111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40111__$1,inst_40109);
} else {
if((state_val_40112 === (4))){
var inst_40104 = (state_40111[(2)]);
var state_40111__$1 = state_40111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40111__$1,(5),out_chan,inst_40104);
} else {
if((state_val_40112 === (5))){
var inst_40106 = (state_40111[(2)]);
var state_40111__$1 = (function (){var statearr_40124 = state_40111;
(statearr_40124[(8)] = inst_40106);

return statearr_40124;
})();
var statearr_40125_40134 = state_40111__$1;
(statearr_40125_40134[(2)] = null);

(statearr_40125_40134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__17681__auto___40130,temp_chan,out_chan))
;
return ((function (switch__17591__auto__,c__17681__auto___40130,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__17592__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__17592__auto____0 = (function (){
var statearr_40126 = [null,null,null,null,null,null,null,null,null];
(statearr_40126[(0)] = huginn$mqtt$tele_chan_$_state_machine__17592__auto__);

(statearr_40126[(1)] = (1));

return statearr_40126;
});
var huginn$mqtt$tele_chan_$_state_machine__17592__auto____1 = (function (state_40111){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_40111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e40127){if((e40127 instanceof Object)){
var ex__17595__auto__ = e40127;
var statearr_40128_40135 = state_40111;
(statearr_40128_40135[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40136 = state_40111;
state_40111 = G__40136;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__17592__auto__ = function(state_40111){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__17592__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__17592__auto____1.call(this,state_40111);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__17592__auto____0;
huginn$mqtt$tele_chan_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__17592__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___40130,temp_chan,out_chan))
})();
var state__17683__auto__ = (function (){var statearr_40129 = f__17682__auto__.call(null);
(statearr_40129[(6)] = c__17681__auto___40130);

return statearr_40129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___40130,temp_chan,out_chan))
);


return out_chan;
});
huginn.mqtt.sender = (function huginn$mqtt$sender(topic_name,opts,send,t_chan){
var c__17681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto__){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto__){
return (function (state_40178){
var state_val_40179 = (state_40178[(1)]);
if((state_val_40179 === (7))){
var inst_40139 = (state_40178[(7)]);
var inst_40140 = (state_40178[(8)]);
var inst_40165 = (state_40178[(2)]);
var inst_40167 = (function (){var teles = inst_40139;
var topic = inst_40140;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_40139,inst_40140,inst_40165,state_val_40179,c__17681__auto__){
return (function (p__40166){
var map__40180 = p__40166;
var map__40180__$1 = ((((!((map__40180 == null)))?((((map__40180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40180):map__40180);
var t = map__40180__$1;
var subfolder = cljs.core.get.call(null,map__40180__$1,new cljs.core.Keyword(null,"subfolder","subfolder",1044158439));
var my_topic = (cljs.core.truth_(subfolder)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(topic),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(subfolder)].join(''):topic);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"topic","topic",-1960480691),my_topic),new cljs.core.Keyword(null,"qos","qos",-2124292319),qos);
});
;})(teles,topic,qos,inst_40139,inst_40140,inst_40165,state_val_40179,c__17681__auto__))
})();
var inst_40168 = cljs.core.map.call(null,inst_40167,inst_40139);
var inst_40169 = cljs.core.async.onto_chan.call(null,send,inst_40168,false);
var inst_40170 = new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168).cljs$core$IFn$_invoke$arity$1(opts);
var inst_40171 = cljs.core.async.timeout.call(null,inst_40170);
var state_40178__$1 = (function (){var statearr_40182 = state_40178;
(statearr_40182[(9)] = inst_40169);

(statearr_40182[(10)] = inst_40165);

return statearr_40182;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40178__$1,(11),inst_40171);
} else {
if((state_val_40179 === (1))){
var state_40178__$1 = state_40178;
var statearr_40183_40201 = state_40178__$1;
(statearr_40183_40201[(2)] = null);

(statearr_40183_40201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40179 === (4))){
var inst_40139 = (state_40178[(2)]);
var inst_40140 = huginn.mqtt.mqtt_topic.call(null,opts,topic_name);
var inst_40141 = cljs.core._EQ_.call(null,"state",topic_name);
var state_40178__$1 = (function (){var statearr_40184 = state_40178;
(statearr_40184[(7)] = inst_40139);

(statearr_40184[(8)] = inst_40140);

return statearr_40184;
})();
if(inst_40141){
var statearr_40185_40202 = state_40178__$1;
(statearr_40185_40202[(1)] = (5));

} else {
var statearr_40186_40203 = state_40178__$1;
(statearr_40186_40203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40179 === (6))){
var state_40178__$1 = state_40178;
var statearr_40187_40204 = state_40178__$1;
(statearr_40187_40204[(2)] = null);

(statearr_40187_40204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40179 === (3))){
var inst_40176 = (state_40178[(2)]);
var state_40178__$1 = state_40178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40178__$1,inst_40176);
} else {
if((state_val_40179 === (2))){
var state_40178__$1 = state_40178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40178__$1,(4),t_chan);
} else {
if((state_val_40179 === (11))){
var inst_40173 = (state_40178[(2)]);
var state_40178__$1 = (function (){var statearr_40188 = state_40178;
(statearr_40188[(11)] = inst_40173);

return statearr_40188;
})();
var statearr_40189_40205 = state_40178__$1;
(statearr_40189_40205[(2)] = null);

(statearr_40189_40205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40179 === (9))){
var inst_40139 = (state_40178[(7)]);
var inst_40140 = (state_40178[(8)]);
var inst_40146 = (state_40178[(2)]);
var inst_40147 = (function (){var teles = inst_40139;
var topic = inst_40140;
var qos = ({"qos": (1)});
var e__32811__auto__ = inst_40146;
return ((function (teles,topic,qos,e__32811__auto__,inst_40139,inst_40140,inst_40146,state_val_40179,c__17681__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__32811__auto__], null);
});
;})(teles,topic,qos,e__32811__auto__,inst_40139,inst_40140,inst_40146,state_val_40179,c__17681__auto__))
})();
var inst_40148 = (new cljs.core.Delay(inst_40147,null));
var inst_40149 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init3351303088126891041.clj",150,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_40148,null,-1667872821);
var inst_40150 = (function(){throw inst_40146})();
var state_40178__$1 = (function (){var statearr_40190 = state_40178;
(statearr_40190[(12)] = inst_40149);

return statearr_40190;
})();
var statearr_40191_40206 = state_40178__$1;
(statearr_40191_40206[(2)] = inst_40150);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40178__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40179 === (5))){
var inst_40139 = (state_40178[(7)]);
var inst_40140 = (state_40178[(8)]);
var inst_40143 = (function (){var teles = inst_40139;
var topic = inst_40140;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_40139,inst_40140,state_val_40179,c__17681__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pushing state",topic], null);
});
;})(teles,topic,qos,inst_40139,inst_40140,state_val_40179,c__17681__auto__))
})();
var inst_40144 = (new cljs.core.Delay(inst_40143,null));
var inst_40145 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init3351303088126891041.clj",149,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_40144,null,615191820);
var state_40178__$1 = (function (){var statearr_40192 = state_40178;
(statearr_40192[(13)] = inst_40145);

return statearr_40192;
})();
var statearr_40193_40207 = state_40178__$1;
(statearr_40193_40207[(2)] = null);

(statearr_40193_40207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40179 === (10))){
var inst_40139 = (state_40178[(7)]);
var inst_40140 = (state_40178[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40178,(9),Error,null,(8));
var inst_40154 = cljs.core.PersistentVector.EMPTY;
var inst_40155 = cljs.core.comp.call(null,cljs.core.type,new cljs.core.Keyword(null,"payload","payload",-383036092));
var inst_40156 = cljs.core.map.call(null,inst_40155);
var inst_40157 = cljs.core.into.call(null,inst_40154,inst_40156,inst_40139);
var inst_40158 = (function (){var teles = inst_40139;
var topic = inst_40140;
var qos = ({"qos": (1)});
var result__32849__auto__ = inst_40157;
return ((function (teles,topic,qos,result__32849__auto__,inst_40139,inst_40140,_,inst_40154,inst_40155,inst_40156,inst_40157,state_val_40179,c__17681__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Keyword(null,"payload","payload",-383036092))),new cljs.core.Symbol(null,"teles","teles",1601787367,null)),"=>",result__32849__auto__], null);
});
;})(teles,topic,qos,result__32849__auto__,inst_40139,inst_40140,_,inst_40154,inst_40155,inst_40156,inst_40157,state_val_40179,c__17681__auto__))
})();
var inst_40159 = (new cljs.core.Delay(inst_40158,null));
var inst_40160 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init3351303088126891041.clj",150,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_40159,null,1626019039);
var state_40178__$1 = (function (){var statearr_40194 = state_40178;
(statearr_40194[(14)] = inst_40160);

return statearr_40194;
})();
var statearr_40195_40208 = state_40178__$1;
(statearr_40195_40208[(2)] = inst_40157);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40178__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40179 === (8))){
var inst_40162 = (state_40178[(2)]);
var state_40178__$1 = state_40178;
var statearr_40196_40209 = state_40178__$1;
(statearr_40196_40209[(2)] = inst_40162);

(statearr_40196_40209[(1)] = (7));


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
});})(c__17681__auto__))
;
return ((function (switch__17591__auto__,c__17681__auto__){
return (function() {
var huginn$mqtt$sender_$_state_machine__17592__auto__ = null;
var huginn$mqtt$sender_$_state_machine__17592__auto____0 = (function (){
var statearr_40197 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40197[(0)] = huginn$mqtt$sender_$_state_machine__17592__auto__);

(statearr_40197[(1)] = (1));

return statearr_40197;
});
var huginn$mqtt$sender_$_state_machine__17592__auto____1 = (function (state_40178){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_40178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e40198){if((e40198 instanceof Object)){
var ex__17595__auto__ = e40198;
var statearr_40199_40210 = state_40178;
(statearr_40199_40210[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40211 = state_40178;
state_40178 = G__40211;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
huginn$mqtt$sender_$_state_machine__17592__auto__ = function(state_40178){
switch(arguments.length){
case 0:
return huginn$mqtt$sender_$_state_machine__17592__auto____0.call(this);
case 1:
return huginn$mqtt$sender_$_state_machine__17592__auto____1.call(this,state_40178);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$sender_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$sender_$_state_machine__17592__auto____0;
huginn$mqtt$sender_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$sender_$_state_machine__17592__auto____1;
return huginn$mqtt$sender_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__))
})();
var state__17683__auto__ = (function (){var statearr_40200 = f__17682__auto__.call(null);
(statearr_40200[(6)] = c__17681__auto__);

return statearr_40200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto__))
);

return c__17681__auto__;
});
huginn.mqtt.state_send = cljs.core.partial.call(null,huginn.mqtt.sender,"state");
huginn.mqtt.tele_send = cljs.core.partial.call(null,huginn.mqtt.sender,"events");
huginn.mqtt.clean_up = (function huginn$mqtt$clean_up(p__40212){
var map__40213 = p__40212;
var map__40213__$1 = ((((!((map__40213 == null)))?((((map__40213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40213):map__40213);
var system = map__40213__$1;
var send_chan = cljs.core.get.call(null,map__40213__$1,new cljs.core.Keyword(null,"send-chan","send-chan",1681189602));
var recv_chan = cljs.core.get.call(null,map__40213__$1,new cljs.core.Keyword(null,"recv-chan","recv-chan",869238850));
var telemetry_chan = cljs.core.get.call(null,map__40213__$1,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503));
var state_chan = cljs.core.get.call(null,map__40213__$1,new cljs.core.Keyword(null,"state-chan","state-chan",-1042477017));
var client_atom = cljs.core.get.call(null,map__40213__$1,new cljs.core.Keyword(null,"client-atom","client-atom",-1733084110));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,"Killing system","huginn.mqtt","/tmp/form-init3351303088126891041.clj",170,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__40213,map__40213__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(map__40213,map__40213__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
,null)),null,-773559088);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__40213,map__40213__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (c){
return cljs.core.async.close_BANG_.call(null,c);
});})(map__40213,map__40213__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
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
