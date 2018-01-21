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
huginn.mqtt.client_id = (function huginn$mqtt$client_id(p__37230){
var map__37231 = p__37230;
var map__37231__$1 = ((((!((map__37231 == null)))?((((map__37231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37231):map__37231);
var opts = map__37231__$1;
var projectId = cljs.core.get.call(null,map__37231__$1,new cljs.core.Keyword(null,"projectId","projectId",-1551013096));
var registryId = cljs.core.get.call(null,map__37231__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var cloudRegion = cljs.core.get.call(null,map__37231__$1,new cljs.core.Keyword(null,"cloudRegion","cloudRegion",-857757214));
var deviceId = cljs.core.get.call(null,map__37231__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["projects/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(projectId),"/locations/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cloudRegion),"/registries/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId)].join('');
});
huginn.mqtt.config_chan = (function huginn$mqtt$config_chan(p__37233){
var map__37234 = p__37233;
var map__37234__$1 = ((((!((map__37234 == null)))?((((map__37234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37234):map__37234);
var opts = map__37234__$1;
var deviceId = cljs.core.get.call(null,map__37234__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"/config"].join('');
});
huginn.mqtt.client_handlers = (function huginn$mqtt$client_handlers(success_fn,fail,send,recv){
return new cljs.core.PersistentArrayMap(null, 4, ["connect",(function (success){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init5194013314517424909.clj",31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connected"], null);
}),null)),null,-1919566647);

if(cljs.core.truth_(success)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init5194013314517424909.clj",34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection success"], null);
}),null)),null,2032027045);

return success_fn.call(null);
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init5194013314517424909.clj",37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection failure"], null);
}),null)),null,-1173700613);

return fail.call(null);
}
}),"close",(function (){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init5194013314517424909.clj",39,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection closed"], null);
}),null)),null,-1837560328);
}),"error",(function (err){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init5194013314517424909.clj",40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error: ",err], null);
}),null)),null,3690197);
}),"message",(function (topic,message,packet){
try{var result__35585__auto___37249 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,message,packet], null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init5194013314517424909.clj",42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__35585__auto___37249){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"message","message",1234475525,null),new cljs.core.Symbol(null,"packet","packet",1106973446,null)], null),"=>",result__35585__auto___37249], null);
});})(result__35585__auto___37249))
,null)),null,-618162846);

}catch (e37236){if((e37236 instanceof Error)){
var e__35547__auto___37250 = e37236;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init5194013314517424909.clj",42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__35547__auto___37250){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__35547__auto___37250], null);
});})(e__35547__auto___37250))
,null)),null,-410738150);

throw e__35547__auto___37250;
} else {
throw e37236;

}
}
var c__36917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto__){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto__){
return (function (state_37243){
var state_val_37244 = (state_37243[(1)]);
if((state_val_37244 === (1))){
var inst_37237 = [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"packet","packet",-533558081)];
var inst_37238 = [topic,message,packet];
var inst_37239 = cljs.core.PersistentHashMap.fromArrays(inst_37237,inst_37238);
var state_37243__$1 = state_37243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37243__$1,(2),recv,inst_37239);
} else {
if((state_val_37244 === (2))){
var inst_37241 = (state_37243[(2)]);
var state_37243__$1 = state_37243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37243__$1,inst_37241);
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
var statearr_37245 = [null,null,null,null,null,null,null];
(statearr_37245[(0)] = huginn$mqtt$client_handlers_$_state_machine__36895__auto__);

(statearr_37245[(1)] = (1));

return statearr_37245;
});
var huginn$mqtt$client_handlers_$_state_machine__36895__auto____1 = (function (state_37243){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37246){if((e37246 instanceof Object)){
var ex__36898__auto__ = e37246;
var statearr_37247_37251 = state_37243;
(statearr_37247_37251[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37252 = state_37243;
state_37243 = G__37252;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$client_handlers_$_state_machine__36895__auto__ = function(state_37243){
switch(arguments.length){
case 0:
return huginn$mqtt$client_handlers_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$client_handlers_$_state_machine__36895__auto____1.call(this,state_37243);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_handlers_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_handlers_$_state_machine__36895__auto____0;
huginn$mqtt$client_handlers_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_handlers_$_state_machine__36895__auto____1;
return huginn$mqtt$client_handlers_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto__))
})();
var state__36919__auto__ = (function (){var statearr_37248 = f__36918__auto__.call(null);
(statearr_37248[(6)] = c__36917__auto__);

return statearr_37248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto__))
);

return c__36917__auto__;
})], null);
});
huginn.mqtt.add_handlers = (function huginn$mqtt$add_handlers(client,handlers){
var seq__37253 = cljs.core.seq.call(null,handlers);
var chunk__37254 = null;
var count__37255 = (0);
var i__37256 = (0);
while(true){
if((i__37256 < count__37255)){
var vec__37257 = cljs.core._nth.call(null,chunk__37254,i__37256);
var key = cljs.core.nth.call(null,vec__37257,(0),null);
var hand = cljs.core.nth.call(null,vec__37257,(1),null);
client.on(key,hand);

var G__37263 = seq__37253;
var G__37264 = chunk__37254;
var G__37265 = count__37255;
var G__37266 = (i__37256 + (1));
seq__37253 = G__37263;
chunk__37254 = G__37264;
count__37255 = G__37265;
i__37256 = G__37266;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37253);
if(temp__5457__auto__){
var seq__37253__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37253__$1)){
var c__31803__auto__ = cljs.core.chunk_first.call(null,seq__37253__$1);
var G__37267 = cljs.core.chunk_rest.call(null,seq__37253__$1);
var G__37268 = c__31803__auto__;
var G__37269 = cljs.core.count.call(null,c__31803__auto__);
var G__37270 = (0);
seq__37253 = G__37267;
chunk__37254 = G__37268;
count__37255 = G__37269;
i__37256 = G__37270;
continue;
} else {
var vec__37260 = cljs.core.first.call(null,seq__37253__$1);
var key = cljs.core.nth.call(null,vec__37260,(0),null);
var hand = cljs.core.nth.call(null,vec__37260,(1),null);
client.on(key,hand);

var G__37271 = cljs.core.next.call(null,seq__37253__$1);
var G__37272 = null;
var G__37273 = (0);
var G__37274 = (0);
seq__37253 = G__37271;
chunk__37254 = G__37272;
count__37255 = G__37273;
i__37256 = G__37274;
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
var map__37275 = huginn.mqtt.build_client.call(null,opts);
var map__37275__$1 = ((((!((map__37275 == null)))?((((map__37275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37275):map__37275);
var init = map__37275__$1;
var time = cljs.core.get.call(null,map__37275__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var client = cljs.core.get.call(null,map__37275__$1,new cljs.core.Keyword(null,"client","client",-1323448117));
var handlers = huginn.mqtt.client_handlers.call(null,((function (map__37275,map__37275__$1,init,time,client){
return (function (){
return resolve.call(null,client);
});})(map__37275,map__37275__$1,init,time,client))
,((function (map__37275,map__37275__$1,init,time,client){
return (function (){
return reject.call(null,new cljs.core.Keyword(null,"client-fail","client-fail",1564298304));
});})(map__37275,map__37275__$1,init,time,client))
,send,recv);
client.subscribe(huginn.mqtt.config_chan.call(null,opts));

return huginn.mqtt.add_handlers.call(null,client,handlers);
}));
});
huginn.mqtt.payload_root = (function huginn$mqtt$payload_root(p__37277){
var map__37278 = p__37277;
var map__37278__$1 = ((((!((map__37278 == null)))?((((map__37278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37278.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37278):map__37278);
var opts = map__37278__$1;
var registryId = cljs.core.get.call(null,map__37278__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var deviceId = cljs.core.get.call(null,map__37278__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"-payload"].join('');
});
/**
 * msg-type can be 'state' for state updates
 * or 'events' to publish telemetry
 */
huginn.mqtt.mqtt_topic = (function huginn$mqtt$mqtt_topic(p__37280,msg_type){
var map__37281 = p__37280;
var map__37281__$1 = ((((!((map__37281 == null)))?((((map__37281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37281.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37281):map__37281);
var opts = map__37281__$1;
var deviceId = cljs.core.get.call(null,map__37281__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
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
huginn.mqtt.publish_one = (function huginn$mqtt$publish_one(client,p__37283){
var map__37284 = p__37283;
var map__37284__$1 = ((((!((map__37284 == null)))?((((map__37284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37284):map__37284);
var p = map__37284__$1;
var topic = cljs.core.get.call(null,map__37284__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var payload = cljs.core.get.call(null,map__37284__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var qos = cljs.core.get.call(null,map__37284__$1,new cljs.core.Keyword(null,"qos","qos",-2124292319));
return client.publish(topic,payload,qos);
});
huginn.mqtt.publisher = (function huginn$mqtt$publisher(client_atom,send_chan){
var c__36917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto__){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto__){
return (function (state_37295){
var state_val_37296 = (state_37295[(1)]);
if((state_val_37296 === (1))){
var state_37295__$1 = state_37295;
var statearr_37297_37304 = state_37295__$1;
(statearr_37297_37304[(2)] = null);

(statearr_37297_37304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37296 === (2))){
var state_37295__$1 = state_37295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37295__$1,(4),send_chan);
} else {
if((state_val_37296 === (3))){
var inst_37293 = (state_37295[(2)]);
var state_37295__$1 = state_37295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37295__$1,inst_37293);
} else {
if((state_val_37296 === (4))){
var inst_37288 = (state_37295[(2)]);
var inst_37289 = cljs.core.deref.call(null,client_atom);
var inst_37290 = huginn.mqtt.publish_one.call(null,inst_37289,inst_37288);
var state_37295__$1 = (function (){var statearr_37298 = state_37295;
(statearr_37298[(7)] = inst_37290);

return statearr_37298;
})();
var statearr_37299_37305 = state_37295__$1;
(statearr_37299_37305[(2)] = null);

(statearr_37299_37305[(1)] = (2));


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
var statearr_37300 = [null,null,null,null,null,null,null,null];
(statearr_37300[(0)] = huginn$mqtt$publisher_$_state_machine__36895__auto__);

(statearr_37300[(1)] = (1));

return statearr_37300;
});
var huginn$mqtt$publisher_$_state_machine__36895__auto____1 = (function (state_37295){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37301){if((e37301 instanceof Object)){
var ex__36898__auto__ = e37301;
var statearr_37302_37306 = state_37295;
(statearr_37302_37306[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37307 = state_37295;
state_37295 = G__37307;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$publisher_$_state_machine__36895__auto__ = function(state_37295){
switch(arguments.length){
case 0:
return huginn$mqtt$publisher_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$publisher_$_state_machine__36895__auto____1.call(this,state_37295);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$publisher_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$publisher_$_state_machine__36895__auto____0;
huginn$mqtt$publisher_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$publisher_$_state_machine__36895__auto____1;
return huginn$mqtt$publisher_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto__))
})();
var state__36919__auto__ = (function (){var statearr_37303 = f__36918__auto__.call(null);
(statearr_37303[(6)] = c__36917__auto__);

return statearr_37303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto__))
);

return c__36917__auto__;
});
/**
 * loops and refreshs the client atom every token experation
 */
huginn.mqtt.client_refresher = (function huginn$mqtt$client_refresher(client_atom,p__37308,send,recv){
var map__37309 = p__37308;
var map__37309__$1 = ((((!((map__37309 == null)))?((((map__37309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37309):map__37309);
var opts = map__37309__$1;
var tokenExpMins = cljs.core.get.call(null,map__37309__$1,new cljs.core.Keyword(null,"tokenExpMins","tokenExpMins",-1638711857));
var delayMs = cljs.core.get.call(null,map__37309__$1,new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168));
var c__36917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto__,map__37309,map__37309__$1,opts,tokenExpMins,delayMs){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto__,map__37309,map__37309__$1,opts,tokenExpMins,delayMs){
return (function (state_37329){
var state_val_37330 = (state_37329[(1)]);
if((state_val_37330 === (1))){
var state_37329__$1 = state_37329;
var statearr_37331_37338 = state_37329__$1;
(statearr_37331_37338[(2)] = null);

(statearr_37331_37338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37330 === (2))){
var inst_37312 = (tokenExpMins * (1000));
var inst_37313 = (inst_37312 * (60));
var inst_37314 = cljs.core.async.timeout.call(null,inst_37313);
var state_37329__$1 = state_37329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37329__$1,(4),inst_37314);
} else {
if((state_val_37330 === (3))){
var inst_37327 = (state_37329[(2)]);
var state_37329__$1 = state_37329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37329__$1,inst_37327);
} else {
if((state_val_37330 === (4))){
var inst_37316 = (state_37329[(2)]);
var inst_37317 = (function (){var wait = inst_37316;
return ((function (wait,inst_37316,state_val_37330,c__36917__auto__,map__37309,map__37309__$1,opts,tokenExpMins,delayMs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\tRefreshing token after ",((tokenExpMins * (1000)) * (60)),"ms"], null);
});
;})(wait,inst_37316,state_val_37330,c__36917__auto__,map__37309,map__37309__$1,opts,tokenExpMins,delayMs))
})();
var inst_37318 = (new cljs.core.Delay(inst_37317,null));
var inst_37319 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init5194013314517424909.clj",114,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37318,null,-1008476841);
var inst_37320 = (function (){var wait = inst_37316;
return ((function (wait,inst_37316,inst_37317,inst_37318,inst_37319,state_val_37330,c__36917__auto__,map__37309,map__37309__$1,opts,tokenExpMins,delayMs){
return (function (resolve,reject){
return cljs.core.swap_BANG_.call(null,client_atom,((function (wait,inst_37316,inst_37317,inst_37318,inst_37319,state_val_37330,c__36917__auto__,map__37309,map__37309__$1,opts,tokenExpMins,delayMs){
return (function (c){
c.end();

return resolve.call(null);
});})(wait,inst_37316,inst_37317,inst_37318,inst_37319,state_val_37330,c__36917__auto__,map__37309,map__37309__$1,opts,tokenExpMins,delayMs))
);
});
;})(wait,inst_37316,inst_37317,inst_37318,inst_37319,state_val_37330,c__36917__auto__,map__37309,map__37309__$1,opts,tokenExpMins,delayMs))
})();
var inst_37321 = promesa.core.promise.call(null,inst_37320);
var inst_37322 = (function (){var wait = inst_37316;
return ((function (wait,inst_37316,inst_37317,inst_37318,inst_37319,inst_37320,inst_37321,state_val_37330,c__36917__auto__,map__37309,map__37309__$1,opts,tokenExpMins,delayMs){
return (function (){
return huginn.mqtt.init_client.call(null,opts,send,recv);
});
;})(wait,inst_37316,inst_37317,inst_37318,inst_37319,inst_37320,inst_37321,state_val_37330,c__36917__auto__,map__37309,map__37309__$1,opts,tokenExpMins,delayMs))
})();
var inst_37323 = (function (){var wait = inst_37316;
return ((function (wait,inst_37316,inst_37317,inst_37318,inst_37319,inst_37320,inst_37321,inst_37322,state_val_37330,c__36917__auto__,map__37309,map__37309__$1,opts,tokenExpMins,delayMs){
return (function (client){
return cljs.core.reset_BANG_.call(null,client_atom,client);
});
;})(wait,inst_37316,inst_37317,inst_37318,inst_37319,inst_37320,inst_37321,inst_37322,state_val_37330,c__36917__auto__,map__37309,map__37309__$1,opts,tokenExpMins,delayMs))
})();
var inst_37324 = promesa.core.chain.call(null,inst_37321,inst_37322,inst_37323);
var state_37329__$1 = (function (){var statearr_37332 = state_37329;
(statearr_37332[(7)] = inst_37324);

(statearr_37332[(8)] = inst_37319);

return statearr_37332;
})();
var statearr_37333_37339 = state_37329__$1;
(statearr_37333_37339[(2)] = null);

(statearr_37333_37339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__36917__auto__,map__37309,map__37309__$1,opts,tokenExpMins,delayMs))
;
return ((function (switch__36894__auto__,c__36917__auto__,map__37309,map__37309__$1,opts,tokenExpMins,delayMs){
return (function() {
var huginn$mqtt$client_refresher_$_state_machine__36895__auto__ = null;
var huginn$mqtt$client_refresher_$_state_machine__36895__auto____0 = (function (){
var statearr_37334 = [null,null,null,null,null,null,null,null,null];
(statearr_37334[(0)] = huginn$mqtt$client_refresher_$_state_machine__36895__auto__);

(statearr_37334[(1)] = (1));

return statearr_37334;
});
var huginn$mqtt$client_refresher_$_state_machine__36895__auto____1 = (function (state_37329){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37335){if((e37335 instanceof Object)){
var ex__36898__auto__ = e37335;
var statearr_37336_37340 = state_37329;
(statearr_37336_37340[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37341 = state_37329;
state_37329 = G__37341;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$client_refresher_$_state_machine__36895__auto__ = function(state_37329){
switch(arguments.length){
case 0:
return huginn$mqtt$client_refresher_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$client_refresher_$_state_machine__36895__auto____1.call(this,state_37329);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_refresher_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_refresher_$_state_machine__36895__auto____0;
huginn$mqtt$client_refresher_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_refresher_$_state_machine__36895__auto____1;
return huginn$mqtt$client_refresher_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto__,map__37309,map__37309__$1,opts,tokenExpMins,delayMs))
})();
var state__36919__auto__ = (function (){var statearr_37337 = f__36918__auto__.call(null);
(statearr_37337[(6)] = c__36917__auto__);

return statearr_37337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto__,map__37309,map__37309__$1,opts,tokenExpMins,delayMs))
);

return c__36917__auto__;
});
huginn.mqtt.tele_chan = (function huginn$mqtt$tele_chan(opts){
var temp_chan = cljs.core.async.chan.call(null);
var out_chan = cljs.core.async.chan.call(null);
var c__36917__auto___37374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto___37374,temp_chan,out_chan){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto___37374,temp_chan,out_chan){
return (function (state_37355){
var state_val_37356 = (state_37355[(1)]);
if((state_val_37356 === (1))){
var state_37355__$1 = state_37355;
var statearr_37357_37375 = state_37355__$1;
(statearr_37357_37375[(2)] = null);

(statearr_37357_37375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37356 === (2))){
var inst_37343 = huginn.mqtt.node$module$systeminformation.cpuTemperature.call(null);
var inst_37344 = cljs.core.partial.call(null,huginn.mqtt.prep_temps,opts);
var inst_37345 = (function (){return ((function (inst_37343,inst_37344,state_val_37356,c__36917__auto___37374,temp_chan,out_chan){
return (function (vs){
var c__36917__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto____$1,inst_37343,inst_37344,state_val_37356,c__36917__auto___37374,temp_chan,out_chan){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto____$1,inst_37343,inst_37344,state_val_37356,c__36917__auto___37374,temp_chan,out_chan){
return (function (state_37361){
var state_val_37362 = (state_37361[(1)]);
if((state_val_37362 === (1))){
var state_37361__$1 = state_37361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37361__$1,(2),temp_chan,vs);
} else {
if((state_val_37362 === (2))){
var inst_37359 = (state_37361[(2)]);
var state_37361__$1 = state_37361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37361__$1,inst_37359);
} else {
return null;
}
}
});})(c__36917__auto____$1,inst_37343,inst_37344,state_val_37356,c__36917__auto___37374,temp_chan,out_chan))
;
return ((function (switch__36894__auto__,c__36917__auto____$1,inst_37343,inst_37344,state_val_37356,c__36917__auto___37374,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__36895__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__36895__auto____0 = (function (){
var statearr_37363 = [null,null,null,null,null,null,null];
(statearr_37363[(0)] = huginn$mqtt$tele_chan_$_state_machine__36895__auto__);

(statearr_37363[(1)] = (1));

return statearr_37363;
});
var huginn$mqtt$tele_chan_$_state_machine__36895__auto____1 = (function (state_37361){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37364){if((e37364 instanceof Object)){
var ex__36898__auto__ = e37364;
var statearr_37365_37376 = state_37361;
(statearr_37365_37376[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37377 = state_37361;
state_37361 = G__37377;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__36895__auto__ = function(state_37361){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__36895__auto____1.call(this,state_37361);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__36895__auto____0;
huginn$mqtt$tele_chan_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__36895__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto____$1,inst_37343,inst_37344,state_val_37356,c__36917__auto___37374,temp_chan,out_chan))
})();
var state__36919__auto__ = (function (){var statearr_37366 = f__36918__auto__.call(null);
(statearr_37366[(6)] = c__36917__auto____$1);

return statearr_37366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto____$1,inst_37343,inst_37344,state_val_37356,c__36917__auto___37374,temp_chan,out_chan))
);

return c__36917__auto____$1;
});
;})(inst_37343,inst_37344,state_val_37356,c__36917__auto___37374,temp_chan,out_chan))
})();
var inst_37346 = promesa.core.chain.call(null,inst_37343,inst_37344,inst_37345);
var state_37355__$1 = (function (){var statearr_37367 = state_37355;
(statearr_37367[(7)] = inst_37346);

return statearr_37367;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37355__$1,(4),temp_chan);
} else {
if((state_val_37356 === (3))){
var inst_37353 = (state_37355[(2)]);
var state_37355__$1 = state_37355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37355__$1,inst_37353);
} else {
if((state_val_37356 === (4))){
var inst_37348 = (state_37355[(2)]);
var state_37355__$1 = state_37355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37355__$1,(5),out_chan,inst_37348);
} else {
if((state_val_37356 === (5))){
var inst_37350 = (state_37355[(2)]);
var state_37355__$1 = (function (){var statearr_37368 = state_37355;
(statearr_37368[(8)] = inst_37350);

return statearr_37368;
})();
var statearr_37369_37378 = state_37355__$1;
(statearr_37369_37378[(2)] = null);

(statearr_37369_37378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__36917__auto___37374,temp_chan,out_chan))
;
return ((function (switch__36894__auto__,c__36917__auto___37374,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__36895__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__36895__auto____0 = (function (){
var statearr_37370 = [null,null,null,null,null,null,null,null,null];
(statearr_37370[(0)] = huginn$mqtt$tele_chan_$_state_machine__36895__auto__);

(statearr_37370[(1)] = (1));

return statearr_37370;
});
var huginn$mqtt$tele_chan_$_state_machine__36895__auto____1 = (function (state_37355){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37371){if((e37371 instanceof Object)){
var ex__36898__auto__ = e37371;
var statearr_37372_37379 = state_37355;
(statearr_37372_37379[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37380 = state_37355;
state_37355 = G__37380;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__36895__auto__ = function(state_37355){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__36895__auto____1.call(this,state_37355);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__36895__auto____0;
huginn$mqtt$tele_chan_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__36895__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto___37374,temp_chan,out_chan))
})();
var state__36919__auto__ = (function (){var statearr_37373 = f__36918__auto__.call(null);
(statearr_37373[(6)] = c__36917__auto___37374);

return statearr_37373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto___37374,temp_chan,out_chan))
);


return out_chan;
});
huginn.mqtt.sender = (function huginn$mqtt$sender(topic_name,opts,send,t_chan){
var c__36917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto__){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto__){
return (function (state_37404){
var state_val_37405 = (state_37404[(1)]);
if((state_val_37405 === (1))){
var state_37404__$1 = state_37404;
var statearr_37406_37419 = state_37404__$1;
(statearr_37406_37419[(2)] = null);

(statearr_37406_37419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (2))){
var state_37404__$1 = state_37404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37404__$1,(4),t_chan);
} else {
if((state_val_37405 === (3))){
var inst_37402 = (state_37404[(2)]);
var state_37404__$1 = state_37404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37404__$1,inst_37402);
} else {
if((state_val_37405 === (4))){
var inst_37383 = (state_37404[(2)]);
var inst_37384 = huginn.mqtt.mqtt_topic.call(null,opts,topic_name);
var inst_37385 = cljs.core._EQ_.call(null,"state",topic_name);
var state_37404__$1 = (function (){var statearr_37407 = state_37404;
(statearr_37407[(7)] = inst_37383);

(statearr_37407[(8)] = inst_37384);

return statearr_37407;
})();
if(inst_37385){
var statearr_37408_37420 = state_37404__$1;
(statearr_37408_37420[(1)] = (5));

} else {
var statearr_37409_37421 = state_37404__$1;
(statearr_37409_37421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (5))){
var inst_37383 = (state_37404[(7)]);
var inst_37384 = (state_37404[(8)]);
var inst_37387 = (function (){var teles = inst_37383;
var topic = inst_37384;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_37383,inst_37384,state_val_37405,c__36917__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pushing state",topic], null);
});
;})(teles,topic,qos,inst_37383,inst_37384,state_val_37405,c__36917__auto__))
})();
var inst_37388 = (new cljs.core.Delay(inst_37387,null));
var inst_37389 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init5194013314517424909.clj",148,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37388,null,299198630);
var state_37404__$1 = state_37404;
var statearr_37410_37422 = state_37404__$1;
(statearr_37410_37422[(2)] = inst_37389);

(statearr_37410_37422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (6))){
var state_37404__$1 = state_37404;
var statearr_37411_37423 = state_37404__$1;
(statearr_37411_37423[(2)] = null);

(statearr_37411_37423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37405 === (7))){
var inst_37383 = (state_37404[(7)]);
var inst_37384 = (state_37404[(8)]);
var inst_37392 = (state_37404[(2)]);
var inst_37393 = (function (){var teles = inst_37383;
var topic = inst_37384;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_37383,inst_37384,inst_37392,state_val_37405,c__36917__auto__){
return (function (t){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"topic","topic",-1960480691),topic),new cljs.core.Keyword(null,"qos","qos",-2124292319),qos);
});
;})(teles,topic,qos,inst_37383,inst_37384,inst_37392,state_val_37405,c__36917__auto__))
})();
var inst_37394 = cljs.core.map.call(null,inst_37393,inst_37383);
var inst_37395 = cljs.core.async.onto_chan.call(null,send,inst_37394,false);
var inst_37396 = new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168).cljs$core$IFn$_invoke$arity$1(opts);
var inst_37397 = cljs.core.async.timeout.call(null,inst_37396);
var state_37404__$1 = (function (){var statearr_37412 = state_37404;
(statearr_37412[(9)] = inst_37395);

(statearr_37412[(10)] = inst_37392);

return statearr_37412;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37404__$1,(8),inst_37397);
} else {
if((state_val_37405 === (8))){
var inst_37399 = (state_37404[(2)]);
var state_37404__$1 = (function (){var statearr_37413 = state_37404;
(statearr_37413[(11)] = inst_37399);

return statearr_37413;
})();
var statearr_37414_37424 = state_37404__$1;
(statearr_37414_37424[(2)] = null);

(statearr_37414_37424[(1)] = (2));


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
var statearr_37415 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37415[(0)] = huginn$mqtt$sender_$_state_machine__36895__auto__);

(statearr_37415[(1)] = (1));

return statearr_37415;
});
var huginn$mqtt$sender_$_state_machine__36895__auto____1 = (function (state_37404){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37416){if((e37416 instanceof Object)){
var ex__36898__auto__ = e37416;
var statearr_37417_37425 = state_37404;
(statearr_37417_37425[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37426 = state_37404;
state_37404 = G__37426;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$sender_$_state_machine__36895__auto__ = function(state_37404){
switch(arguments.length){
case 0:
return huginn$mqtt$sender_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$sender_$_state_machine__36895__auto____1.call(this,state_37404);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$sender_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$sender_$_state_machine__36895__auto____0;
huginn$mqtt$sender_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$sender_$_state_machine__36895__auto____1;
return huginn$mqtt$sender_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto__))
})();
var state__36919__auto__ = (function (){var statearr_37418 = f__36918__auto__.call(null);
(statearr_37418[(6)] = c__36917__auto__);

return statearr_37418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto__))
);

return c__36917__auto__;
});
huginn.mqtt.state_send = cljs.core.partial.call(null,huginn.mqtt.sender,"state");
huginn.mqtt.tele_send = cljs.core.partial.call(null,huginn.mqtt.sender,"events");
huginn.mqtt.clean_up = (function huginn$mqtt$clean_up(p__37427){
var map__37428 = p__37427;
var map__37428__$1 = ((((!((map__37428 == null)))?((((map__37428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37428):map__37428);
var system = map__37428__$1;
var send_chan = cljs.core.get.call(null,map__37428__$1,new cljs.core.Keyword(null,"send-chan","send-chan",1681189602));
var recv_chan = cljs.core.get.call(null,map__37428__$1,new cljs.core.Keyword(null,"recv-chan","recv-chan",869238850));
var telemetry_chan = cljs.core.get.call(null,map__37428__$1,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503));
var state_chan = cljs.core.get.call(null,map__37428__$1,new cljs.core.Keyword(null,"state-chan","state-chan",-1042477017));
var client_atom = cljs.core.get.call(null,map__37428__$1,new cljs.core.Keyword(null,"client-atom","client-atom",-1733084110));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,"Killing system","huginn.mqtt","/tmp/form-init5194013314517424909.clj",167,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__37428,map__37428__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(map__37428,map__37428__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
,null)),null,-936796168);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__37428,map__37428__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (c){
return cljs.core.async.close_BANG_.call(null,c);
});})(map__37428,map__37428__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
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
