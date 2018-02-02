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
huginn.mqtt.client_id = (function huginn$mqtt$client_id(p__46269){
var map__46270 = p__46269;
var map__46270__$1 = ((((!((map__46270 == null)))?((((map__46270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46270.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46270):map__46270);
var opts = map__46270__$1;
var projectId = cljs.core.get.call(null,map__46270__$1,new cljs.core.Keyword(null,"projectId","projectId",-1551013096));
var registryId = cljs.core.get.call(null,map__46270__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var cloudRegion = cljs.core.get.call(null,map__46270__$1,new cljs.core.Keyword(null,"cloudRegion","cloudRegion",-857757214));
var deviceId = cljs.core.get.call(null,map__46270__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["projects/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(projectId),"/locations/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cloudRegion),"/registries/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId)].join('');
});
huginn.mqtt.config_chan = (function huginn$mqtt$config_chan(p__46272){
var map__46273 = p__46272;
var map__46273__$1 = ((((!((map__46273 == null)))?((((map__46273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46273):map__46273);
var opts = map__46273__$1;
var deviceId = cljs.core.get.call(null,map__46273__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"/config"].join('');
});
huginn.mqtt.client_handlers = (function huginn$mqtt$client_handlers(success_fn,fail,send,recv){
return new cljs.core.PersistentArrayMap(null, 4, ["connect",(function (success){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init3351303088126891041.clj",31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connected"], null);
}),null)),null,-965674696);

if(cljs.core.truth_(success)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init3351303088126891041.clj",34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection success"], null);
}),null)),null,-28257653);

return success_fn.call(null);
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init3351303088126891041.clj",37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection failure"], null);
}),null)),null,254881482);

return fail.call(null);
}
}),"close",(function (){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init3351303088126891041.clj",39,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection closed"], null);
}),null)),null,1116367410);
}),"error",(function (err){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init3351303088126891041.clj",40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error: ",err], null);
}),null)),null,1592701055);
}),"message",(function (topic,message,packet){
var c__17681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto__){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto__){
return (function (state_46281){
var state_val_46282 = (state_46281[(1)]);
if((state_val_46282 === (1))){
var inst_46275 = [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"packet","packet",-533558081)];
var inst_46276 = [topic,message,packet];
var inst_46277 = cljs.core.PersistentHashMap.fromArrays(inst_46275,inst_46276);
var state_46281__$1 = state_46281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46281__$1,(2),recv,inst_46277);
} else {
if((state_val_46282 === (2))){
var inst_46279 = (state_46281[(2)]);
var state_46281__$1 = state_46281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46281__$1,inst_46279);
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
var statearr_46283 = [null,null,null,null,null,null,null];
(statearr_46283[(0)] = huginn$mqtt$client_handlers_$_state_machine__17592__auto__);

(statearr_46283[(1)] = (1));

return statearr_46283;
});
var huginn$mqtt$client_handlers_$_state_machine__17592__auto____1 = (function (state_46281){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_46281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e46284){if((e46284 instanceof Object)){
var ex__17595__auto__ = e46284;
var statearr_46285_46287 = state_46281;
(statearr_46285_46287[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46288 = state_46281;
state_46281 = G__46288;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
huginn$mqtt$client_handlers_$_state_machine__17592__auto__ = function(state_46281){
switch(arguments.length){
case 0:
return huginn$mqtt$client_handlers_$_state_machine__17592__auto____0.call(this);
case 1:
return huginn$mqtt$client_handlers_$_state_machine__17592__auto____1.call(this,state_46281);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_handlers_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_handlers_$_state_machine__17592__auto____0;
huginn$mqtt$client_handlers_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_handlers_$_state_machine__17592__auto____1;
return huginn$mqtt$client_handlers_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__))
})();
var state__17683__auto__ = (function (){var statearr_46286 = f__17682__auto__.call(null);
(statearr_46286[(6)] = c__17681__auto__);

return statearr_46286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto__))
);

return c__17681__auto__;
})], null);
});
huginn.mqtt.add_handlers = (function huginn$mqtt$add_handlers(client,handlers){
var seq__46289 = cljs.core.seq.call(null,handlers);
var chunk__46290 = null;
var count__46291 = (0);
var i__46292 = (0);
while(true){
if((i__46292 < count__46291)){
var vec__46293 = cljs.core._nth.call(null,chunk__46290,i__46292);
var key = cljs.core.nth.call(null,vec__46293,(0),null);
var hand = cljs.core.nth.call(null,vec__46293,(1),null);
client.on(key,hand);

var G__46299 = seq__46289;
var G__46300 = chunk__46290;
var G__46301 = count__46291;
var G__46302 = (i__46292 + (1));
seq__46289 = G__46299;
chunk__46290 = G__46300;
count__46291 = G__46301;
i__46292 = G__46302;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__46289);
if(temp__5457__auto__){
var seq__46289__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46289__$1)){
var c__9857__auto__ = cljs.core.chunk_first.call(null,seq__46289__$1);
var G__46303 = cljs.core.chunk_rest.call(null,seq__46289__$1);
var G__46304 = c__9857__auto__;
var G__46305 = cljs.core.count.call(null,c__9857__auto__);
var G__46306 = (0);
seq__46289 = G__46303;
chunk__46290 = G__46304;
count__46291 = G__46305;
i__46292 = G__46306;
continue;
} else {
var vec__46296 = cljs.core.first.call(null,seq__46289__$1);
var key = cljs.core.nth.call(null,vec__46296,(0),null);
var hand = cljs.core.nth.call(null,vec__46296,(1),null);
client.on(key,hand);

var G__46307 = cljs.core.next.call(null,seq__46289__$1);
var G__46308 = null;
var G__46309 = (0);
var G__46310 = (0);
seq__46289 = G__46307;
chunk__46290 = G__46308;
count__46291 = G__46309;
i__46292 = G__46310;
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
var map__46311 = huginn.mqtt.build_client.call(null,opts);
var map__46311__$1 = ((((!((map__46311 == null)))?((((map__46311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46311):map__46311);
var init = map__46311__$1;
var time = cljs.core.get.call(null,map__46311__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var client = cljs.core.get.call(null,map__46311__$1,new cljs.core.Keyword(null,"client","client",-1323448117));
var handlers = huginn.mqtt.client_handlers.call(null,((function (map__46311,map__46311__$1,init,time,client){
return (function (){
return resolve.call(null,client);
});})(map__46311,map__46311__$1,init,time,client))
,((function (map__46311,map__46311__$1,init,time,client){
return (function (){
return reject.call(null,new cljs.core.Keyword(null,"client-fail","client-fail",1564298304));
});})(map__46311,map__46311__$1,init,time,client))
,send,recv);
client.subscribe(huginn.mqtt.config_chan.call(null,opts));

return huginn.mqtt.add_handlers.call(null,client,handlers);
}));
});
huginn.mqtt.payload_root = (function huginn$mqtt$payload_root(p__46313){
var map__46314 = p__46313;
var map__46314__$1 = ((((!((map__46314 == null)))?((((map__46314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46314):map__46314);
var opts = map__46314__$1;
var registryId = cljs.core.get.call(null,map__46314__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var deviceId = cljs.core.get.call(null,map__46314__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"-payload"].join('');
});
/**
 * msg-type can be 'state' for state updates
 * or 'events' to publish telemetry
 */
huginn.mqtt.mqtt_topic = (function huginn$mqtt$mqtt_topic(p__46316,msg_type){
var map__46317 = p__46316;
var map__46317__$1 = ((((!((map__46317 == null)))?((((map__46317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46317):map__46317);
var opts = map__46317__$1;
var deviceId = cljs.core.get.call(null,map__46317__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
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
huginn.mqtt.publish_one = (function huginn$mqtt$publish_one(client,p__46319){
var map__46320 = p__46319;
var map__46320__$1 = ((((!((map__46320 == null)))?((((map__46320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46320.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46320):map__46320);
var p = map__46320__$1;
var topic = cljs.core.get.call(null,map__46320__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var payload = cljs.core.get.call(null,map__46320__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var qos = cljs.core.get.call(null,map__46320__$1,new cljs.core.Keyword(null,"qos","qos",-2124292319));
return client.publish(topic,payload,qos);
});
huginn.mqtt.publisher = (function huginn$mqtt$publisher(client_atom,send_chan){
var c__17681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto__){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto__){
return (function (state_46331){
var state_val_46332 = (state_46331[(1)]);
if((state_val_46332 === (1))){
var state_46331__$1 = state_46331;
var statearr_46333_46340 = state_46331__$1;
(statearr_46333_46340[(2)] = null);

(statearr_46333_46340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46332 === (2))){
var state_46331__$1 = state_46331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46331__$1,(4),send_chan);
} else {
if((state_val_46332 === (3))){
var inst_46329 = (state_46331[(2)]);
var state_46331__$1 = state_46331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46331__$1,inst_46329);
} else {
if((state_val_46332 === (4))){
var inst_46324 = (state_46331[(2)]);
var inst_46325 = cljs.core.deref.call(null,client_atom);
var inst_46326 = huginn.mqtt.publish_one.call(null,inst_46325,inst_46324);
var state_46331__$1 = (function (){var statearr_46334 = state_46331;
(statearr_46334[(7)] = inst_46326);

return statearr_46334;
})();
var statearr_46335_46341 = state_46331__$1;
(statearr_46335_46341[(2)] = null);

(statearr_46335_46341[(1)] = (2));


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
var statearr_46336 = [null,null,null,null,null,null,null,null];
(statearr_46336[(0)] = huginn$mqtt$publisher_$_state_machine__17592__auto__);

(statearr_46336[(1)] = (1));

return statearr_46336;
});
var huginn$mqtt$publisher_$_state_machine__17592__auto____1 = (function (state_46331){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_46331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e46337){if((e46337 instanceof Object)){
var ex__17595__auto__ = e46337;
var statearr_46338_46342 = state_46331;
(statearr_46338_46342[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46343 = state_46331;
state_46331 = G__46343;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
huginn$mqtt$publisher_$_state_machine__17592__auto__ = function(state_46331){
switch(arguments.length){
case 0:
return huginn$mqtt$publisher_$_state_machine__17592__auto____0.call(this);
case 1:
return huginn$mqtt$publisher_$_state_machine__17592__auto____1.call(this,state_46331);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$publisher_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$publisher_$_state_machine__17592__auto____0;
huginn$mqtt$publisher_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$publisher_$_state_machine__17592__auto____1;
return huginn$mqtt$publisher_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__))
})();
var state__17683__auto__ = (function (){var statearr_46339 = f__17682__auto__.call(null);
(statearr_46339[(6)] = c__17681__auto__);

return statearr_46339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto__))
);

return c__17681__auto__;
});
/**
 * loops and refreshs the client atom every token experation
 */
huginn.mqtt.client_refresher = (function huginn$mqtt$client_refresher(client_atom,p__46344,send,recv){
var map__46345 = p__46344;
var map__46345__$1 = ((((!((map__46345 == null)))?((((map__46345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46345.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46345):map__46345);
var opts = map__46345__$1;
var tokenExpMins = cljs.core.get.call(null,map__46345__$1,new cljs.core.Keyword(null,"tokenExpMins","tokenExpMins",-1638711857));
var delayMs = cljs.core.get.call(null,map__46345__$1,new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168));
var c__17681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto__,map__46345,map__46345__$1,opts,tokenExpMins,delayMs){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto__,map__46345,map__46345__$1,opts,tokenExpMins,delayMs){
return (function (state_46365){
var state_val_46366 = (state_46365[(1)]);
if((state_val_46366 === (1))){
var state_46365__$1 = state_46365;
var statearr_46367_46374 = state_46365__$1;
(statearr_46367_46374[(2)] = null);

(statearr_46367_46374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46366 === (2))){
var inst_46348 = (tokenExpMins * (1000));
var inst_46349 = (inst_46348 * (60));
var inst_46350 = cljs.core.async.timeout.call(null,inst_46349);
var state_46365__$1 = state_46365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46365__$1,(4),inst_46350);
} else {
if((state_val_46366 === (3))){
var inst_46363 = (state_46365[(2)]);
var state_46365__$1 = state_46365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46365__$1,inst_46363);
} else {
if((state_val_46366 === (4))){
var inst_46352 = (state_46365[(2)]);
var inst_46353 = (function (){var wait = inst_46352;
return ((function (wait,inst_46352,state_val_46366,c__17681__auto__,map__46345,map__46345__$1,opts,tokenExpMins,delayMs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\tRefreshing token after ",((tokenExpMins * (1000)) * (60)),"ms"], null);
});
;})(wait,inst_46352,state_val_46366,c__17681__auto__,map__46345,map__46345__$1,opts,tokenExpMins,delayMs))
})();
var inst_46354 = (new cljs.core.Delay(inst_46353,null));
var inst_46355 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init3351303088126891041.clj",116,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_46354,null,-754113420);
var inst_46356 = (function (){var wait = inst_46352;
return ((function (wait,inst_46352,inst_46353,inst_46354,inst_46355,state_val_46366,c__17681__auto__,map__46345,map__46345__$1,opts,tokenExpMins,delayMs){
return (function (resolve,reject){
return cljs.core.swap_BANG_.call(null,client_atom,((function (wait,inst_46352,inst_46353,inst_46354,inst_46355,state_val_46366,c__17681__auto__,map__46345,map__46345__$1,opts,tokenExpMins,delayMs){
return (function (c){
c.end();

return resolve.call(null);
});})(wait,inst_46352,inst_46353,inst_46354,inst_46355,state_val_46366,c__17681__auto__,map__46345,map__46345__$1,opts,tokenExpMins,delayMs))
);
});
;})(wait,inst_46352,inst_46353,inst_46354,inst_46355,state_val_46366,c__17681__auto__,map__46345,map__46345__$1,opts,tokenExpMins,delayMs))
})();
var inst_46357 = promesa.core.promise.call(null,inst_46356);
var inst_46358 = (function (){var wait = inst_46352;
return ((function (wait,inst_46352,inst_46353,inst_46354,inst_46355,inst_46356,inst_46357,state_val_46366,c__17681__auto__,map__46345,map__46345__$1,opts,tokenExpMins,delayMs){
return (function (){
return huginn.mqtt.init_client.call(null,opts,send,recv);
});
;})(wait,inst_46352,inst_46353,inst_46354,inst_46355,inst_46356,inst_46357,state_val_46366,c__17681__auto__,map__46345,map__46345__$1,opts,tokenExpMins,delayMs))
})();
var inst_46359 = (function (){var wait = inst_46352;
return ((function (wait,inst_46352,inst_46353,inst_46354,inst_46355,inst_46356,inst_46357,inst_46358,state_val_46366,c__17681__auto__,map__46345,map__46345__$1,opts,tokenExpMins,delayMs){
return (function (client){
return cljs.core.reset_BANG_.call(null,client_atom,client);
});
;})(wait,inst_46352,inst_46353,inst_46354,inst_46355,inst_46356,inst_46357,inst_46358,state_val_46366,c__17681__auto__,map__46345,map__46345__$1,opts,tokenExpMins,delayMs))
})();
var inst_46360 = promesa.core.chain.call(null,inst_46357,inst_46358,inst_46359);
var state_46365__$1 = (function (){var statearr_46368 = state_46365;
(statearr_46368[(7)] = inst_46360);

(statearr_46368[(8)] = inst_46355);

return statearr_46368;
})();
var statearr_46369_46375 = state_46365__$1;
(statearr_46369_46375[(2)] = null);

(statearr_46369_46375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__17681__auto__,map__46345,map__46345__$1,opts,tokenExpMins,delayMs))
;
return ((function (switch__17591__auto__,c__17681__auto__,map__46345,map__46345__$1,opts,tokenExpMins,delayMs){
return (function() {
var huginn$mqtt$client_refresher_$_state_machine__17592__auto__ = null;
var huginn$mqtt$client_refresher_$_state_machine__17592__auto____0 = (function (){
var statearr_46370 = [null,null,null,null,null,null,null,null,null];
(statearr_46370[(0)] = huginn$mqtt$client_refresher_$_state_machine__17592__auto__);

(statearr_46370[(1)] = (1));

return statearr_46370;
});
var huginn$mqtt$client_refresher_$_state_machine__17592__auto____1 = (function (state_46365){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_46365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e46371){if((e46371 instanceof Object)){
var ex__17595__auto__ = e46371;
var statearr_46372_46376 = state_46365;
(statearr_46372_46376[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46377 = state_46365;
state_46365 = G__46377;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
huginn$mqtt$client_refresher_$_state_machine__17592__auto__ = function(state_46365){
switch(arguments.length){
case 0:
return huginn$mqtt$client_refresher_$_state_machine__17592__auto____0.call(this);
case 1:
return huginn$mqtt$client_refresher_$_state_machine__17592__auto____1.call(this,state_46365);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_refresher_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_refresher_$_state_machine__17592__auto____0;
huginn$mqtt$client_refresher_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_refresher_$_state_machine__17592__auto____1;
return huginn$mqtt$client_refresher_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__,map__46345,map__46345__$1,opts,tokenExpMins,delayMs))
})();
var state__17683__auto__ = (function (){var statearr_46373 = f__17682__auto__.call(null);
(statearr_46373[(6)] = c__17681__auto__);

return statearr_46373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto__,map__46345,map__46345__$1,opts,tokenExpMins,delayMs))
);

return c__17681__auto__;
});
huginn.mqtt.tele_chan = (function huginn$mqtt$tele_chan(opts){
var temp_chan = cljs.core.async.chan.call(null);
var out_chan = cljs.core.async.chan.call(null);
var c__17681__auto___46410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___46410,temp_chan,out_chan){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___46410,temp_chan,out_chan){
return (function (state_46391){
var state_val_46392 = (state_46391[(1)]);
if((state_val_46392 === (1))){
var state_46391__$1 = state_46391;
var statearr_46393_46411 = state_46391__$1;
(statearr_46393_46411[(2)] = null);

(statearr_46393_46411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46392 === (2))){
var inst_46379 = huginn.mqtt.node$module$systeminformation.cpuTemperature.call(null);
var inst_46380 = cljs.core.partial.call(null,huginn.mqtt.prep_temps,opts);
var inst_46381 = (function (){return ((function (inst_46379,inst_46380,state_val_46392,c__17681__auto___46410,temp_chan,out_chan){
return (function (vs){
var c__17681__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto____$1,inst_46379,inst_46380,state_val_46392,c__17681__auto___46410,temp_chan,out_chan){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto____$1,inst_46379,inst_46380,state_val_46392,c__17681__auto___46410,temp_chan,out_chan){
return (function (state_46397){
var state_val_46398 = (state_46397[(1)]);
if((state_val_46398 === (1))){
var state_46397__$1 = state_46397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46397__$1,(2),temp_chan,vs);
} else {
if((state_val_46398 === (2))){
var inst_46395 = (state_46397[(2)]);
var state_46397__$1 = state_46397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46397__$1,inst_46395);
} else {
return null;
}
}
});})(c__17681__auto____$1,inst_46379,inst_46380,state_val_46392,c__17681__auto___46410,temp_chan,out_chan))
;
return ((function (switch__17591__auto__,c__17681__auto____$1,inst_46379,inst_46380,state_val_46392,c__17681__auto___46410,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__17592__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__17592__auto____0 = (function (){
var statearr_46399 = [null,null,null,null,null,null,null];
(statearr_46399[(0)] = huginn$mqtt$tele_chan_$_state_machine__17592__auto__);

(statearr_46399[(1)] = (1));

return statearr_46399;
});
var huginn$mqtt$tele_chan_$_state_machine__17592__auto____1 = (function (state_46397){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_46397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e46400){if((e46400 instanceof Object)){
var ex__17595__auto__ = e46400;
var statearr_46401_46412 = state_46397;
(statearr_46401_46412[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46413 = state_46397;
state_46397 = G__46413;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__17592__auto__ = function(state_46397){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__17592__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__17592__auto____1.call(this,state_46397);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__17592__auto____0;
huginn$mqtt$tele_chan_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__17592__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto____$1,inst_46379,inst_46380,state_val_46392,c__17681__auto___46410,temp_chan,out_chan))
})();
var state__17683__auto__ = (function (){var statearr_46402 = f__17682__auto__.call(null);
(statearr_46402[(6)] = c__17681__auto____$1);

return statearr_46402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto____$1,inst_46379,inst_46380,state_val_46392,c__17681__auto___46410,temp_chan,out_chan))
);

return c__17681__auto____$1;
});
;})(inst_46379,inst_46380,state_val_46392,c__17681__auto___46410,temp_chan,out_chan))
})();
var inst_46382 = promesa.core.chain.call(null,inst_46379,inst_46380,inst_46381);
var state_46391__$1 = (function (){var statearr_46403 = state_46391;
(statearr_46403[(7)] = inst_46382);

return statearr_46403;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46391__$1,(4),temp_chan);
} else {
if((state_val_46392 === (3))){
var inst_46389 = (state_46391[(2)]);
var state_46391__$1 = state_46391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46391__$1,inst_46389);
} else {
if((state_val_46392 === (4))){
var inst_46384 = (state_46391[(2)]);
var state_46391__$1 = state_46391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46391__$1,(5),out_chan,inst_46384);
} else {
if((state_val_46392 === (5))){
var inst_46386 = (state_46391[(2)]);
var state_46391__$1 = (function (){var statearr_46404 = state_46391;
(statearr_46404[(8)] = inst_46386);

return statearr_46404;
})();
var statearr_46405_46414 = state_46391__$1;
(statearr_46405_46414[(2)] = null);

(statearr_46405_46414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__17681__auto___46410,temp_chan,out_chan))
;
return ((function (switch__17591__auto__,c__17681__auto___46410,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__17592__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__17592__auto____0 = (function (){
var statearr_46406 = [null,null,null,null,null,null,null,null,null];
(statearr_46406[(0)] = huginn$mqtt$tele_chan_$_state_machine__17592__auto__);

(statearr_46406[(1)] = (1));

return statearr_46406;
});
var huginn$mqtt$tele_chan_$_state_machine__17592__auto____1 = (function (state_46391){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_46391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e46407){if((e46407 instanceof Object)){
var ex__17595__auto__ = e46407;
var statearr_46408_46415 = state_46391;
(statearr_46408_46415[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46416 = state_46391;
state_46391 = G__46416;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__17592__auto__ = function(state_46391){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__17592__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__17592__auto____1.call(this,state_46391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__17592__auto____0;
huginn$mqtt$tele_chan_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__17592__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___46410,temp_chan,out_chan))
})();
var state__17683__auto__ = (function (){var statearr_46409 = f__17682__auto__.call(null);
(statearr_46409[(6)] = c__17681__auto___46410);

return statearr_46409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___46410,temp_chan,out_chan))
);


return out_chan;
});
huginn.mqtt.sender = (function huginn$mqtt$sender(topic_name,opts,send,t_chan){
var c__17681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto__){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto__){
return (function (state_46458){
var state_val_46459 = (state_46458[(1)]);
if((state_val_46459 === (7))){
var inst_46420 = (state_46458[(7)]);
var inst_46419 = (state_46458[(8)]);
var inst_46445 = (state_46458[(2)]);
var inst_46447 = (function (){var teles = inst_46419;
var topic = inst_46420;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_46420,inst_46419,inst_46445,state_val_46459,c__17681__auto__){
return (function (p__46446){
var map__46460 = p__46446;
var map__46460__$1 = ((((!((map__46460 == null)))?((((map__46460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46460):map__46460);
var t = map__46460__$1;
var subfolder = cljs.core.get.call(null,map__46460__$1,new cljs.core.Keyword(null,"subfolder","subfolder",1044158439));
var my_topic = (cljs.core.truth_(subfolder)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(topic),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(subfolder)].join(''):topic);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"topic","topic",-1960480691),my_topic),new cljs.core.Keyword(null,"qos","qos",-2124292319),qos);
});
;})(teles,topic,qos,inst_46420,inst_46419,inst_46445,state_val_46459,c__17681__auto__))
})();
var inst_46448 = cljs.core.map.call(null,inst_46447,inst_46419);
var inst_46449 = cljs.core.async.onto_chan.call(null,send,inst_46448,false);
var inst_46450 = new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168).cljs$core$IFn$_invoke$arity$1(opts);
var inst_46451 = cljs.core.async.timeout.call(null,inst_46450);
var state_46458__$1 = (function (){var statearr_46462 = state_46458;
(statearr_46462[(9)] = inst_46445);

(statearr_46462[(10)] = inst_46449);

return statearr_46462;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46458__$1,(11),inst_46451);
} else {
if((state_val_46459 === (1))){
var state_46458__$1 = state_46458;
var statearr_46463_46481 = state_46458__$1;
(statearr_46463_46481[(2)] = null);

(statearr_46463_46481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (4))){
var inst_46419 = (state_46458[(2)]);
var inst_46420 = huginn.mqtt.mqtt_topic.call(null,opts,topic_name);
var inst_46421 = cljs.core._EQ_.call(null,"state",topic_name);
var state_46458__$1 = (function (){var statearr_46464 = state_46458;
(statearr_46464[(7)] = inst_46420);

(statearr_46464[(8)] = inst_46419);

return statearr_46464;
})();
if(inst_46421){
var statearr_46465_46482 = state_46458__$1;
(statearr_46465_46482[(1)] = (5));

} else {
var statearr_46466_46483 = state_46458__$1;
(statearr_46466_46483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (6))){
var state_46458__$1 = state_46458;
var statearr_46467_46484 = state_46458__$1;
(statearr_46467_46484[(2)] = null);

(statearr_46467_46484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (3))){
var inst_46456 = (state_46458[(2)]);
var state_46458__$1 = state_46458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46458__$1,inst_46456);
} else {
if((state_val_46459 === (2))){
var state_46458__$1 = state_46458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46458__$1,(4),t_chan);
} else {
if((state_val_46459 === (11))){
var inst_46453 = (state_46458[(2)]);
var state_46458__$1 = (function (){var statearr_46468 = state_46458;
(statearr_46468[(11)] = inst_46453);

return statearr_46468;
})();
var statearr_46469_46485 = state_46458__$1;
(statearr_46469_46485[(2)] = null);

(statearr_46469_46485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (9))){
var inst_46420 = (state_46458[(7)]);
var inst_46419 = (state_46458[(8)]);
var inst_46426 = (state_46458[(2)]);
var inst_46427 = (function (){var teles = inst_46419;
var topic = inst_46420;
var qos = ({"qos": (1)});
var e__32811__auto__ = inst_46426;
return ((function (teles,topic,qos,e__32811__auto__,inst_46420,inst_46419,inst_46426,state_val_46459,c__17681__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__32811__auto__], null);
});
;})(teles,topic,qos,e__32811__auto__,inst_46420,inst_46419,inst_46426,state_val_46459,c__17681__auto__))
})();
var inst_46428 = (new cljs.core.Delay(inst_46427,null));
var inst_46429 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init3351303088126891041.clj",150,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_46428,null,-322838816);
var inst_46430 = (function(){throw inst_46426})();
var state_46458__$1 = (function (){var statearr_46470 = state_46458;
(statearr_46470[(12)] = inst_46429);

return statearr_46470;
})();
var statearr_46471_46486 = state_46458__$1;
(statearr_46471_46486[(2)] = inst_46430);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46458__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (5))){
var inst_46420 = (state_46458[(7)]);
var inst_46419 = (state_46458[(8)]);
var inst_46423 = (function (){var teles = inst_46419;
var topic = inst_46420;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_46420,inst_46419,state_val_46459,c__17681__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pushing state",topic], null);
});
;})(teles,topic,qos,inst_46420,inst_46419,state_val_46459,c__17681__auto__))
})();
var inst_46424 = (new cljs.core.Delay(inst_46423,null));
var inst_46425 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init3351303088126891041.clj",149,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_46424,null,-709335377);
var state_46458__$1 = (function (){var statearr_46472 = state_46458;
(statearr_46472[(13)] = inst_46425);

return statearr_46472;
})();
var statearr_46473_46487 = state_46458__$1;
(statearr_46473_46487[(2)] = null);

(statearr_46473_46487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (10))){
var inst_46420 = (state_46458[(7)]);
var inst_46419 = (state_46458[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46458,(9),Error,null,(8));
var inst_46434 = cljs.core.PersistentVector.EMPTY;
var inst_46435 = cljs.core.comp.call(null,cljs.core.type,new cljs.core.Keyword(null,"payload","payload",-383036092));
var inst_46436 = cljs.core.map.call(null,inst_46435);
var inst_46437 = cljs.core.into.call(null,inst_46434,inst_46436,inst_46419);
var inst_46438 = (function (){var teles = inst_46419;
var topic = inst_46420;
var qos = ({"qos": (1)});
var result__32849__auto__ = inst_46437;
return ((function (teles,topic,qos,result__32849__auto__,inst_46420,inst_46419,_,inst_46434,inst_46435,inst_46436,inst_46437,state_val_46459,c__17681__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Keyword(null,"payload","payload",-383036092))),new cljs.core.Symbol(null,"teles","teles",1601787367,null)),"=>",result__32849__auto__], null);
});
;})(teles,topic,qos,result__32849__auto__,inst_46420,inst_46419,_,inst_46434,inst_46435,inst_46436,inst_46437,state_val_46459,c__17681__auto__))
})();
var inst_46439 = (new cljs.core.Delay(inst_46438,null));
var inst_46440 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init3351303088126891041.clj",150,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_46439,null,1459164921);
var state_46458__$1 = (function (){var statearr_46474 = state_46458;
(statearr_46474[(14)] = inst_46440);

return statearr_46474;
})();
var statearr_46475_46488 = state_46458__$1;
(statearr_46475_46488[(2)] = inst_46437);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46458__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46459 === (8))){
var inst_46442 = (state_46458[(2)]);
var state_46458__$1 = state_46458;
var statearr_46476_46489 = state_46458__$1;
(statearr_46476_46489[(2)] = inst_46442);

(statearr_46476_46489[(1)] = (7));


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
var statearr_46477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46477[(0)] = huginn$mqtt$sender_$_state_machine__17592__auto__);

(statearr_46477[(1)] = (1));

return statearr_46477;
});
var huginn$mqtt$sender_$_state_machine__17592__auto____1 = (function (state_46458){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_46458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e46478){if((e46478 instanceof Object)){
var ex__17595__auto__ = e46478;
var statearr_46479_46490 = state_46458;
(statearr_46479_46490[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46491 = state_46458;
state_46458 = G__46491;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
huginn$mqtt$sender_$_state_machine__17592__auto__ = function(state_46458){
switch(arguments.length){
case 0:
return huginn$mqtt$sender_$_state_machine__17592__auto____0.call(this);
case 1:
return huginn$mqtt$sender_$_state_machine__17592__auto____1.call(this,state_46458);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$sender_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$sender_$_state_machine__17592__auto____0;
huginn$mqtt$sender_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$sender_$_state_machine__17592__auto____1;
return huginn$mqtt$sender_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__))
})();
var state__17683__auto__ = (function (){var statearr_46480 = f__17682__auto__.call(null);
(statearr_46480[(6)] = c__17681__auto__);

return statearr_46480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto__))
);

return c__17681__auto__;
});
huginn.mqtt.state_send = cljs.core.partial.call(null,huginn.mqtt.sender,"state");
huginn.mqtt.tele_send = cljs.core.partial.call(null,huginn.mqtt.sender,"events");
huginn.mqtt.clean_up = (function huginn$mqtt$clean_up(p__46492){
var map__46493 = p__46492;
var map__46493__$1 = ((((!((map__46493 == null)))?((((map__46493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46493):map__46493);
var system = map__46493__$1;
var send_chan = cljs.core.get.call(null,map__46493__$1,new cljs.core.Keyword(null,"send-chan","send-chan",1681189602));
var recv_chan = cljs.core.get.call(null,map__46493__$1,new cljs.core.Keyword(null,"recv-chan","recv-chan",869238850));
var telemetry_chan = cljs.core.get.call(null,map__46493__$1,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503));
var state_chan = cljs.core.get.call(null,map__46493__$1,new cljs.core.Keyword(null,"state-chan","state-chan",-1042477017));
var client_atom = cljs.core.get.call(null,map__46493__$1,new cljs.core.Keyword(null,"client-atom","client-atom",-1733084110));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,"Killing system","huginn.mqtt","/tmp/form-init3351303088126891041.clj",170,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__46493,map__46493__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(map__46493,map__46493__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
,null)),null,604203232);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__46493,map__46493__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (c){
return cljs.core.async.close_BANG_.call(null,c);
});})(map__46493,map__46493__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
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
