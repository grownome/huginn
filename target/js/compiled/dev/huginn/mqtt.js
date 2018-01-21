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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init12150694373145304318.clj",31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connected"], null);
}),null)),null,-1958536282);

if(cljs.core.truth_(success)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init12150694373145304318.clj",34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection success"], null);
}),null)),null,1178243448);

return success_fn.call(null);
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init12150694373145304318.clj",37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection failure"], null);
}),null)),null,276227872);

return fail.call(null);
}
}),"close",(function (){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init12150694373145304318.clj",39,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection closed"], null);
}),null)),null,-100146270);
}),"error",(function (err){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init12150694373145304318.clj",40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error: ",err], null);
}),null)),null,-1537370467);
}),"message",(function (topic,message,packet){
var c__36917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto__){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto__){
return (function (state_37242){
var state_val_37243 = (state_37242[(1)]);
if((state_val_37243 === (1))){
var inst_37236 = [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"packet","packet",-533558081)];
var inst_37237 = [topic,message,packet];
var inst_37238 = cljs.core.PersistentHashMap.fromArrays(inst_37236,inst_37237);
var state_37242__$1 = state_37242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37242__$1,(2),recv,inst_37238);
} else {
if((state_val_37243 === (2))){
var inst_37240 = (state_37242[(2)]);
var state_37242__$1 = state_37242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37242__$1,inst_37240);
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
var statearr_37244 = [null,null,null,null,null,null,null];
(statearr_37244[(0)] = huginn$mqtt$client_handlers_$_state_machine__36895__auto__);

(statearr_37244[(1)] = (1));

return statearr_37244;
});
var huginn$mqtt$client_handlers_$_state_machine__36895__auto____1 = (function (state_37242){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37245){if((e37245 instanceof Object)){
var ex__36898__auto__ = e37245;
var statearr_37246_37248 = state_37242;
(statearr_37246_37248[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37249 = state_37242;
state_37242 = G__37249;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$client_handlers_$_state_machine__36895__auto__ = function(state_37242){
switch(arguments.length){
case 0:
return huginn$mqtt$client_handlers_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$client_handlers_$_state_machine__36895__auto____1.call(this,state_37242);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_handlers_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_handlers_$_state_machine__36895__auto____0;
huginn$mqtt$client_handlers_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_handlers_$_state_machine__36895__auto____1;
return huginn$mqtt$client_handlers_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto__))
})();
var state__36919__auto__ = (function (){var statearr_37247 = f__36918__auto__.call(null);
(statearr_37247[(6)] = c__36917__auto__);

return statearr_37247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto__))
);

return c__36917__auto__;
})], null);
});
huginn.mqtt.add_handlers = (function huginn$mqtt$add_handlers(client,handlers){
var seq__37250 = cljs.core.seq.call(null,handlers);
var chunk__37251 = null;
var count__37252 = (0);
var i__37253 = (0);
while(true){
if((i__37253 < count__37252)){
var vec__37254 = cljs.core._nth.call(null,chunk__37251,i__37253);
var key = cljs.core.nth.call(null,vec__37254,(0),null);
var hand = cljs.core.nth.call(null,vec__37254,(1),null);
client.on(key,hand);

var G__37260 = seq__37250;
var G__37261 = chunk__37251;
var G__37262 = count__37252;
var G__37263 = (i__37253 + (1));
seq__37250 = G__37260;
chunk__37251 = G__37261;
count__37252 = G__37262;
i__37253 = G__37263;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37250);
if(temp__5457__auto__){
var seq__37250__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37250__$1)){
var c__31803__auto__ = cljs.core.chunk_first.call(null,seq__37250__$1);
var G__37264 = cljs.core.chunk_rest.call(null,seq__37250__$1);
var G__37265 = c__31803__auto__;
var G__37266 = cljs.core.count.call(null,c__31803__auto__);
var G__37267 = (0);
seq__37250 = G__37264;
chunk__37251 = G__37265;
count__37252 = G__37266;
i__37253 = G__37267;
continue;
} else {
var vec__37257 = cljs.core.first.call(null,seq__37250__$1);
var key = cljs.core.nth.call(null,vec__37257,(0),null);
var hand = cljs.core.nth.call(null,vec__37257,(1),null);
client.on(key,hand);

var G__37268 = cljs.core.next.call(null,seq__37250__$1);
var G__37269 = null;
var G__37270 = (0);
var G__37271 = (0);
seq__37250 = G__37268;
chunk__37251 = G__37269;
count__37252 = G__37270;
i__37253 = G__37271;
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
var map__37272 = huginn.mqtt.build_client.call(null,opts);
var map__37272__$1 = ((((!((map__37272 == null)))?((((map__37272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37272):map__37272);
var init = map__37272__$1;
var time = cljs.core.get.call(null,map__37272__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var client = cljs.core.get.call(null,map__37272__$1,new cljs.core.Keyword(null,"client","client",-1323448117));
var handlers = huginn.mqtt.client_handlers.call(null,((function (map__37272,map__37272__$1,init,time,client){
return (function (){
return resolve.call(null,client);
});})(map__37272,map__37272__$1,init,time,client))
,((function (map__37272,map__37272__$1,init,time,client){
return (function (){
return reject.call(null,new cljs.core.Keyword(null,"client-fail","client-fail",1564298304));
});})(map__37272,map__37272__$1,init,time,client))
,send,recv);
client.subscribe(huginn.mqtt.config_chan.call(null,opts));

return huginn.mqtt.add_handlers.call(null,client,handlers);
}));
});
huginn.mqtt.payload_root = (function huginn$mqtt$payload_root(p__37274){
var map__37275 = p__37274;
var map__37275__$1 = ((((!((map__37275 == null)))?((((map__37275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37275):map__37275);
var opts = map__37275__$1;
var registryId = cljs.core.get.call(null,map__37275__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var deviceId = cljs.core.get.call(null,map__37275__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"-payload"].join('');
});
/**
 * msg-type can be 'state' for state updates
 * or 'events' to publish telemetry
 */
huginn.mqtt.mqtt_topic = (function huginn$mqtt$mqtt_topic(p__37277,msg_type){
var map__37278 = p__37277;
var map__37278__$1 = ((((!((map__37278 == null)))?((((map__37278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37278.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37278):map__37278);
var opts = map__37278__$1;
var deviceId = cljs.core.get.call(null,map__37278__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
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
huginn.mqtt.publish_one = (function huginn$mqtt$publish_one(client,p__37280){
var map__37281 = p__37280;
var map__37281__$1 = ((((!((map__37281 == null)))?((((map__37281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37281.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37281):map__37281);
var p = map__37281__$1;
var topic = cljs.core.get.call(null,map__37281__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var payload = cljs.core.get.call(null,map__37281__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var qos = cljs.core.get.call(null,map__37281__$1,new cljs.core.Keyword(null,"qos","qos",-2124292319));
return client.publish(topic,payload,qos);
});
huginn.mqtt.publisher = (function huginn$mqtt$publisher(client_atom,send_chan){
var c__36917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto__){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto__){
return (function (state_37292){
var state_val_37293 = (state_37292[(1)]);
if((state_val_37293 === (1))){
var state_37292__$1 = state_37292;
var statearr_37294_37301 = state_37292__$1;
(statearr_37294_37301[(2)] = null);

(statearr_37294_37301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (2))){
var state_37292__$1 = state_37292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37292__$1,(4),send_chan);
} else {
if((state_val_37293 === (3))){
var inst_37290 = (state_37292[(2)]);
var state_37292__$1 = state_37292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37292__$1,inst_37290);
} else {
if((state_val_37293 === (4))){
var inst_37285 = (state_37292[(2)]);
var inst_37286 = cljs.core.deref.call(null,client_atom);
var inst_37287 = huginn.mqtt.publish_one.call(null,inst_37286,inst_37285);
var state_37292__$1 = (function (){var statearr_37295 = state_37292;
(statearr_37295[(7)] = inst_37287);

return statearr_37295;
})();
var statearr_37296_37302 = state_37292__$1;
(statearr_37296_37302[(2)] = null);

(statearr_37296_37302[(1)] = (2));


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
var statearr_37297 = [null,null,null,null,null,null,null,null];
(statearr_37297[(0)] = huginn$mqtt$publisher_$_state_machine__36895__auto__);

(statearr_37297[(1)] = (1));

return statearr_37297;
});
var huginn$mqtt$publisher_$_state_machine__36895__auto____1 = (function (state_37292){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37298){if((e37298 instanceof Object)){
var ex__36898__auto__ = e37298;
var statearr_37299_37303 = state_37292;
(statearr_37299_37303[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37304 = state_37292;
state_37292 = G__37304;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$publisher_$_state_machine__36895__auto__ = function(state_37292){
switch(arguments.length){
case 0:
return huginn$mqtt$publisher_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$publisher_$_state_machine__36895__auto____1.call(this,state_37292);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$publisher_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$publisher_$_state_machine__36895__auto____0;
huginn$mqtt$publisher_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$publisher_$_state_machine__36895__auto____1;
return huginn$mqtt$publisher_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto__))
})();
var state__36919__auto__ = (function (){var statearr_37300 = f__36918__auto__.call(null);
(statearr_37300[(6)] = c__36917__auto__);

return statearr_37300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto__))
);

return c__36917__auto__;
});
/**
 * loops and refreshs the client atom every token experation
 */
huginn.mqtt.client_refresher = (function huginn$mqtt$client_refresher(client_atom,p__37305,send,recv){
var map__37306 = p__37305;
var map__37306__$1 = ((((!((map__37306 == null)))?((((map__37306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37306):map__37306);
var opts = map__37306__$1;
var tokenExpMins = cljs.core.get.call(null,map__37306__$1,new cljs.core.Keyword(null,"tokenExpMins","tokenExpMins",-1638711857));
var delayMs = cljs.core.get.call(null,map__37306__$1,new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168));
var c__36917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto__,map__37306,map__37306__$1,opts,tokenExpMins,delayMs){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto__,map__37306,map__37306__$1,opts,tokenExpMins,delayMs){
return (function (state_37326){
var state_val_37327 = (state_37326[(1)]);
if((state_val_37327 === (1))){
var state_37326__$1 = state_37326;
var statearr_37328_37335 = state_37326__$1;
(statearr_37328_37335[(2)] = null);

(statearr_37328_37335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37327 === (2))){
var inst_37309 = (tokenExpMins * (1000));
var inst_37310 = (inst_37309 * (60));
var inst_37311 = cljs.core.async.timeout.call(null,inst_37310);
var state_37326__$1 = state_37326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37326__$1,(4),inst_37311);
} else {
if((state_val_37327 === (3))){
var inst_37324 = (state_37326[(2)]);
var state_37326__$1 = state_37326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37326__$1,inst_37324);
} else {
if((state_val_37327 === (4))){
var inst_37313 = (state_37326[(2)]);
var inst_37314 = (function (){var wait = inst_37313;
return ((function (wait,inst_37313,state_val_37327,c__36917__auto__,map__37306,map__37306__$1,opts,tokenExpMins,delayMs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\tRefreshing token after ",((tokenExpMins * (1000)) * (60)),"ms"], null);
});
;})(wait,inst_37313,state_val_37327,c__36917__auto__,map__37306,map__37306__$1,opts,tokenExpMins,delayMs))
})();
var inst_37315 = (new cljs.core.Delay(inst_37314,null));
var inst_37316 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init12150694373145304318.clj",116,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37315,null,-1862654668);
var inst_37317 = (function (){var wait = inst_37313;
return ((function (wait,inst_37313,inst_37314,inst_37315,inst_37316,state_val_37327,c__36917__auto__,map__37306,map__37306__$1,opts,tokenExpMins,delayMs){
return (function (resolve,reject){
return cljs.core.swap_BANG_.call(null,client_atom,((function (wait,inst_37313,inst_37314,inst_37315,inst_37316,state_val_37327,c__36917__auto__,map__37306,map__37306__$1,opts,tokenExpMins,delayMs){
return (function (c){
c.end();

return resolve.call(null);
});})(wait,inst_37313,inst_37314,inst_37315,inst_37316,state_val_37327,c__36917__auto__,map__37306,map__37306__$1,opts,tokenExpMins,delayMs))
);
});
;})(wait,inst_37313,inst_37314,inst_37315,inst_37316,state_val_37327,c__36917__auto__,map__37306,map__37306__$1,opts,tokenExpMins,delayMs))
})();
var inst_37318 = promesa.core.promise.call(null,inst_37317);
var inst_37319 = (function (){var wait = inst_37313;
return ((function (wait,inst_37313,inst_37314,inst_37315,inst_37316,inst_37317,inst_37318,state_val_37327,c__36917__auto__,map__37306,map__37306__$1,opts,tokenExpMins,delayMs){
return (function (){
return huginn.mqtt.init_client.call(null,opts,send,recv);
});
;})(wait,inst_37313,inst_37314,inst_37315,inst_37316,inst_37317,inst_37318,state_val_37327,c__36917__auto__,map__37306,map__37306__$1,opts,tokenExpMins,delayMs))
})();
var inst_37320 = (function (){var wait = inst_37313;
return ((function (wait,inst_37313,inst_37314,inst_37315,inst_37316,inst_37317,inst_37318,inst_37319,state_val_37327,c__36917__auto__,map__37306,map__37306__$1,opts,tokenExpMins,delayMs){
return (function (client){
return cljs.core.reset_BANG_.call(null,client_atom,client);
});
;})(wait,inst_37313,inst_37314,inst_37315,inst_37316,inst_37317,inst_37318,inst_37319,state_val_37327,c__36917__auto__,map__37306,map__37306__$1,opts,tokenExpMins,delayMs))
})();
var inst_37321 = promesa.core.chain.call(null,inst_37318,inst_37319,inst_37320);
var state_37326__$1 = (function (){var statearr_37329 = state_37326;
(statearr_37329[(7)] = inst_37316);

(statearr_37329[(8)] = inst_37321);

return statearr_37329;
})();
var statearr_37330_37336 = state_37326__$1;
(statearr_37330_37336[(2)] = null);

(statearr_37330_37336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__36917__auto__,map__37306,map__37306__$1,opts,tokenExpMins,delayMs))
;
return ((function (switch__36894__auto__,c__36917__auto__,map__37306,map__37306__$1,opts,tokenExpMins,delayMs){
return (function() {
var huginn$mqtt$client_refresher_$_state_machine__36895__auto__ = null;
var huginn$mqtt$client_refresher_$_state_machine__36895__auto____0 = (function (){
var statearr_37331 = [null,null,null,null,null,null,null,null,null];
(statearr_37331[(0)] = huginn$mqtt$client_refresher_$_state_machine__36895__auto__);

(statearr_37331[(1)] = (1));

return statearr_37331;
});
var huginn$mqtt$client_refresher_$_state_machine__36895__auto____1 = (function (state_37326){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37332){if((e37332 instanceof Object)){
var ex__36898__auto__ = e37332;
var statearr_37333_37337 = state_37326;
(statearr_37333_37337[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37338 = state_37326;
state_37326 = G__37338;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$client_refresher_$_state_machine__36895__auto__ = function(state_37326){
switch(arguments.length){
case 0:
return huginn$mqtt$client_refresher_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$client_refresher_$_state_machine__36895__auto____1.call(this,state_37326);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_refresher_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_refresher_$_state_machine__36895__auto____0;
huginn$mqtt$client_refresher_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_refresher_$_state_machine__36895__auto____1;
return huginn$mqtt$client_refresher_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto__,map__37306,map__37306__$1,opts,tokenExpMins,delayMs))
})();
var state__36919__auto__ = (function (){var statearr_37334 = f__36918__auto__.call(null);
(statearr_37334[(6)] = c__36917__auto__);

return statearr_37334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto__,map__37306,map__37306__$1,opts,tokenExpMins,delayMs))
);

return c__36917__auto__;
});
huginn.mqtt.tele_chan = (function huginn$mqtt$tele_chan(opts){
var temp_chan = cljs.core.async.chan.call(null);
var out_chan = cljs.core.async.chan.call(null);
var c__36917__auto___37371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto___37371,temp_chan,out_chan){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto___37371,temp_chan,out_chan){
return (function (state_37352){
var state_val_37353 = (state_37352[(1)]);
if((state_val_37353 === (1))){
var state_37352__$1 = state_37352;
var statearr_37354_37372 = state_37352__$1;
(statearr_37354_37372[(2)] = null);

(statearr_37354_37372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37353 === (2))){
var inst_37340 = huginn.mqtt.node$module$systeminformation.cpuTemperature.call(null);
var inst_37341 = cljs.core.partial.call(null,huginn.mqtt.prep_temps,opts);
var inst_37342 = (function (){return ((function (inst_37340,inst_37341,state_val_37353,c__36917__auto___37371,temp_chan,out_chan){
return (function (vs){
var c__36917__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto____$1,inst_37340,inst_37341,state_val_37353,c__36917__auto___37371,temp_chan,out_chan){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto____$1,inst_37340,inst_37341,state_val_37353,c__36917__auto___37371,temp_chan,out_chan){
return (function (state_37358){
var state_val_37359 = (state_37358[(1)]);
if((state_val_37359 === (1))){
var state_37358__$1 = state_37358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37358__$1,(2),temp_chan,vs);
} else {
if((state_val_37359 === (2))){
var inst_37356 = (state_37358[(2)]);
var state_37358__$1 = state_37358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37358__$1,inst_37356);
} else {
return null;
}
}
});})(c__36917__auto____$1,inst_37340,inst_37341,state_val_37353,c__36917__auto___37371,temp_chan,out_chan))
;
return ((function (switch__36894__auto__,c__36917__auto____$1,inst_37340,inst_37341,state_val_37353,c__36917__auto___37371,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__36895__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__36895__auto____0 = (function (){
var statearr_37360 = [null,null,null,null,null,null,null];
(statearr_37360[(0)] = huginn$mqtt$tele_chan_$_state_machine__36895__auto__);

(statearr_37360[(1)] = (1));

return statearr_37360;
});
var huginn$mqtt$tele_chan_$_state_machine__36895__auto____1 = (function (state_37358){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37361){if((e37361 instanceof Object)){
var ex__36898__auto__ = e37361;
var statearr_37362_37373 = state_37358;
(statearr_37362_37373[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37374 = state_37358;
state_37358 = G__37374;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__36895__auto__ = function(state_37358){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__36895__auto____1.call(this,state_37358);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__36895__auto____0;
huginn$mqtt$tele_chan_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__36895__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto____$1,inst_37340,inst_37341,state_val_37353,c__36917__auto___37371,temp_chan,out_chan))
})();
var state__36919__auto__ = (function (){var statearr_37363 = f__36918__auto__.call(null);
(statearr_37363[(6)] = c__36917__auto____$1);

return statearr_37363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto____$1,inst_37340,inst_37341,state_val_37353,c__36917__auto___37371,temp_chan,out_chan))
);

return c__36917__auto____$1;
});
;})(inst_37340,inst_37341,state_val_37353,c__36917__auto___37371,temp_chan,out_chan))
})();
var inst_37343 = promesa.core.chain.call(null,inst_37340,inst_37341,inst_37342);
var state_37352__$1 = (function (){var statearr_37364 = state_37352;
(statearr_37364[(7)] = inst_37343);

return statearr_37364;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37352__$1,(4),temp_chan);
} else {
if((state_val_37353 === (3))){
var inst_37350 = (state_37352[(2)]);
var state_37352__$1 = state_37352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37352__$1,inst_37350);
} else {
if((state_val_37353 === (4))){
var inst_37345 = (state_37352[(2)]);
var state_37352__$1 = state_37352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37352__$1,(5),out_chan,inst_37345);
} else {
if((state_val_37353 === (5))){
var inst_37347 = (state_37352[(2)]);
var state_37352__$1 = (function (){var statearr_37365 = state_37352;
(statearr_37365[(8)] = inst_37347);

return statearr_37365;
})();
var statearr_37366_37375 = state_37352__$1;
(statearr_37366_37375[(2)] = null);

(statearr_37366_37375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__36917__auto___37371,temp_chan,out_chan))
;
return ((function (switch__36894__auto__,c__36917__auto___37371,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__36895__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__36895__auto____0 = (function (){
var statearr_37367 = [null,null,null,null,null,null,null,null,null];
(statearr_37367[(0)] = huginn$mqtt$tele_chan_$_state_machine__36895__auto__);

(statearr_37367[(1)] = (1));

return statearr_37367;
});
var huginn$mqtt$tele_chan_$_state_machine__36895__auto____1 = (function (state_37352){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37368){if((e37368 instanceof Object)){
var ex__36898__auto__ = e37368;
var statearr_37369_37376 = state_37352;
(statearr_37369_37376[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37377 = state_37352;
state_37352 = G__37377;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__36895__auto__ = function(state_37352){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__36895__auto____1.call(this,state_37352);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__36895__auto____0;
huginn$mqtt$tele_chan_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__36895__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto___37371,temp_chan,out_chan))
})();
var state__36919__auto__ = (function (){var statearr_37370 = f__36918__auto__.call(null);
(statearr_37370[(6)] = c__36917__auto___37371);

return statearr_37370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto___37371,temp_chan,out_chan))
);


return out_chan;
});
huginn.mqtt.sender = (function huginn$mqtt$sender(topic_name,opts,send,t_chan){
var c__36917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto__){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto__){
return (function (state_37419){
var state_val_37420 = (state_37419[(1)]);
if((state_val_37420 === (7))){
var inst_37380 = (state_37419[(7)]);
var inst_37381 = (state_37419[(8)]);
var inst_37406 = (state_37419[(2)]);
var inst_37408 = (function (){var teles = inst_37380;
var topic = inst_37381;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_37380,inst_37381,inst_37406,state_val_37420,c__36917__auto__){
return (function (p__37407){
var map__37421 = p__37407;
var map__37421__$1 = ((((!((map__37421 == null)))?((((map__37421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37421):map__37421);
var t = map__37421__$1;
var subfolder = cljs.core.get.call(null,map__37421__$1,new cljs.core.Keyword(null,"subfolder","subfolder",1044158439));
var my_topic = (cljs.core.truth_(subfolder)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(topic),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(subfolder)].join(''):topic);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"topic","topic",-1960480691),my_topic),new cljs.core.Keyword(null,"qos","qos",-2124292319),qos);
});
;})(teles,topic,qos,inst_37380,inst_37381,inst_37406,state_val_37420,c__36917__auto__))
})();
var inst_37409 = cljs.core.map.call(null,inst_37408,inst_37380);
var inst_37410 = cljs.core.async.onto_chan.call(null,send,inst_37409,false);
var inst_37411 = new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168).cljs$core$IFn$_invoke$arity$1(opts);
var inst_37412 = cljs.core.async.timeout.call(null,inst_37411);
var state_37419__$1 = (function (){var statearr_37423 = state_37419;
(statearr_37423[(9)] = inst_37406);

(statearr_37423[(10)] = inst_37410);

return statearr_37423;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37419__$1,(11),inst_37412);
} else {
if((state_val_37420 === (1))){
var state_37419__$1 = state_37419;
var statearr_37424_37442 = state_37419__$1;
(statearr_37424_37442[(2)] = null);

(statearr_37424_37442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37420 === (4))){
var inst_37380 = (state_37419[(2)]);
var inst_37381 = huginn.mqtt.mqtt_topic.call(null,opts,topic_name);
var inst_37382 = cljs.core._EQ_.call(null,"state",topic_name);
var state_37419__$1 = (function (){var statearr_37425 = state_37419;
(statearr_37425[(7)] = inst_37380);

(statearr_37425[(8)] = inst_37381);

return statearr_37425;
})();
if(inst_37382){
var statearr_37426_37443 = state_37419__$1;
(statearr_37426_37443[(1)] = (5));

} else {
var statearr_37427_37444 = state_37419__$1;
(statearr_37427_37444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37420 === (6))){
var state_37419__$1 = state_37419;
var statearr_37428_37445 = state_37419__$1;
(statearr_37428_37445[(2)] = null);

(statearr_37428_37445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37420 === (3))){
var inst_37417 = (state_37419[(2)]);
var state_37419__$1 = state_37419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37419__$1,inst_37417);
} else {
if((state_val_37420 === (2))){
var state_37419__$1 = state_37419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37419__$1,(4),t_chan);
} else {
if((state_val_37420 === (11))){
var inst_37414 = (state_37419[(2)]);
var state_37419__$1 = (function (){var statearr_37429 = state_37419;
(statearr_37429[(11)] = inst_37414);

return statearr_37429;
})();
var statearr_37430_37446 = state_37419__$1;
(statearr_37430_37446[(2)] = null);

(statearr_37430_37446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37420 === (9))){
var inst_37380 = (state_37419[(7)]);
var inst_37381 = (state_37419[(8)]);
var inst_37387 = (state_37419[(2)]);
var inst_37388 = (function (){var teles = inst_37380;
var topic = inst_37381;
var qos = ({"qos": (1)});
var e__35547__auto__ = inst_37387;
return ((function (teles,topic,qos,e__35547__auto__,inst_37380,inst_37381,inst_37387,state_val_37420,c__36917__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__35547__auto__], null);
});
;})(teles,topic,qos,e__35547__auto__,inst_37380,inst_37381,inst_37387,state_val_37420,c__36917__auto__))
})();
var inst_37389 = (new cljs.core.Delay(inst_37388,null));
var inst_37390 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init12150694373145304318.clj",150,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37389,null,217147184);
var inst_37391 = (function(){throw inst_37387})();
var state_37419__$1 = (function (){var statearr_37431 = state_37419;
(statearr_37431[(12)] = inst_37390);

return statearr_37431;
})();
var statearr_37432_37447 = state_37419__$1;
(statearr_37432_37447[(2)] = inst_37391);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37419__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37420 === (5))){
var inst_37380 = (state_37419[(7)]);
var inst_37381 = (state_37419[(8)]);
var inst_37384 = (function (){var teles = inst_37380;
var topic = inst_37381;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_37380,inst_37381,state_val_37420,c__36917__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pushing state",topic], null);
});
;})(teles,topic,qos,inst_37380,inst_37381,state_val_37420,c__36917__auto__))
})();
var inst_37385 = (new cljs.core.Delay(inst_37384,null));
var inst_37386 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init12150694373145304318.clj",149,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37385,null,-1317460641);
var state_37419__$1 = (function (){var statearr_37433 = state_37419;
(statearr_37433[(13)] = inst_37386);

return statearr_37433;
})();
var statearr_37434_37448 = state_37419__$1;
(statearr_37434_37448[(2)] = null);

(statearr_37434_37448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37420 === (10))){
var inst_37380 = (state_37419[(7)]);
var inst_37381 = (state_37419[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37419,(9),Error,null,(8));
var inst_37395 = cljs.core.PersistentVector.EMPTY;
var inst_37396 = cljs.core.comp.call(null,cljs.core.type,new cljs.core.Keyword(null,"payload","payload",-383036092));
var inst_37397 = cljs.core.map.call(null,inst_37396);
var inst_37398 = cljs.core.into.call(null,inst_37395,inst_37397,inst_37380);
var inst_37399 = (function (){var teles = inst_37380;
var topic = inst_37381;
var qos = ({"qos": (1)});
var result__35585__auto__ = inst_37398;
return ((function (teles,topic,qos,result__35585__auto__,inst_37380,inst_37381,_,inst_37395,inst_37396,inst_37397,inst_37398,state_val_37420,c__36917__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Keyword(null,"payload","payload",-383036092))),new cljs.core.Symbol(null,"teles","teles",1601787367,null)),"=>",result__35585__auto__], null);
});
;})(teles,topic,qos,result__35585__auto__,inst_37380,inst_37381,_,inst_37395,inst_37396,inst_37397,inst_37398,state_val_37420,c__36917__auto__))
})();
var inst_37400 = (new cljs.core.Delay(inst_37399,null));
var inst_37401 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init12150694373145304318.clj",150,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37400,null,1229282501);
var state_37419__$1 = (function (){var statearr_37435 = state_37419;
(statearr_37435[(14)] = inst_37401);

return statearr_37435;
})();
var statearr_37436_37449 = state_37419__$1;
(statearr_37436_37449[(2)] = inst_37398);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37419__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37420 === (8))){
var inst_37403 = (state_37419[(2)]);
var state_37419__$1 = state_37419;
var statearr_37437_37450 = state_37419__$1;
(statearr_37437_37450[(2)] = inst_37403);

(statearr_37437_37450[(1)] = (7));


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
});})(c__36917__auto__))
;
return ((function (switch__36894__auto__,c__36917__auto__){
return (function() {
var huginn$mqtt$sender_$_state_machine__36895__auto__ = null;
var huginn$mqtt$sender_$_state_machine__36895__auto____0 = (function (){
var statearr_37438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37438[(0)] = huginn$mqtt$sender_$_state_machine__36895__auto__);

(statearr_37438[(1)] = (1));

return statearr_37438;
});
var huginn$mqtt$sender_$_state_machine__36895__auto____1 = (function (state_37419){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37439){if((e37439 instanceof Object)){
var ex__36898__auto__ = e37439;
var statearr_37440_37451 = state_37419;
(statearr_37440_37451[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37452 = state_37419;
state_37419 = G__37452;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$sender_$_state_machine__36895__auto__ = function(state_37419){
switch(arguments.length){
case 0:
return huginn$mqtt$sender_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$sender_$_state_machine__36895__auto____1.call(this,state_37419);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$sender_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$sender_$_state_machine__36895__auto____0;
huginn$mqtt$sender_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$sender_$_state_machine__36895__auto____1;
return huginn$mqtt$sender_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto__))
})();
var state__36919__auto__ = (function (){var statearr_37441 = f__36918__auto__.call(null);
(statearr_37441[(6)] = c__36917__auto__);

return statearr_37441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto__))
);

return c__36917__auto__;
});
huginn.mqtt.state_send = cljs.core.partial.call(null,huginn.mqtt.sender,"state");
huginn.mqtt.tele_send = cljs.core.partial.call(null,huginn.mqtt.sender,"events");
huginn.mqtt.clean_up = (function huginn$mqtt$clean_up(p__37453){
var map__37454 = p__37453;
var map__37454__$1 = ((((!((map__37454 == null)))?((((map__37454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37454):map__37454);
var system = map__37454__$1;
var send_chan = cljs.core.get.call(null,map__37454__$1,new cljs.core.Keyword(null,"send-chan","send-chan",1681189602));
var recv_chan = cljs.core.get.call(null,map__37454__$1,new cljs.core.Keyword(null,"recv-chan","recv-chan",869238850));
var telemetry_chan = cljs.core.get.call(null,map__37454__$1,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503));
var state_chan = cljs.core.get.call(null,map__37454__$1,new cljs.core.Keyword(null,"state-chan","state-chan",-1042477017));
var client_atom = cljs.core.get.call(null,map__37454__$1,new cljs.core.Keyword(null,"client-atom","client-atom",-1733084110));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,"Killing system","huginn.mqtt","/tmp/form-init12150694373145304318.clj",170,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__37454,map__37454__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(map__37454,map__37454__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
,null)),null,-1716272987);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__37454,map__37454__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (c){
return cljs.core.async.close_BANG_.call(null,c);
});})(map__37454,map__37454__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
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
