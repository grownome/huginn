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
huginn.mqtt.client_id = (function huginn$mqtt$client_id(p__37049){
var map__37050 = p__37049;
var map__37050__$1 = ((((!((map__37050 == null)))?((((map__37050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37050.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37050):map__37050);
var opts = map__37050__$1;
var projectId = cljs.core.get.call(null,map__37050__$1,new cljs.core.Keyword(null,"projectId","projectId",-1551013096));
var registryId = cljs.core.get.call(null,map__37050__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var cloudRegion = cljs.core.get.call(null,map__37050__$1,new cljs.core.Keyword(null,"cloudRegion","cloudRegion",-857757214));
var deviceId = cljs.core.get.call(null,map__37050__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["projects/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(projectId),"/locations/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cloudRegion),"/registries/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId)].join('');
});
huginn.mqtt.config_chan = (function huginn$mqtt$config_chan(p__37052){
var map__37053 = p__37052;
var map__37053__$1 = ((((!((map__37053 == null)))?((((map__37053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37053):map__37053);
var opts = map__37053__$1;
var deviceId = cljs.core.get.call(null,map__37053__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"/config"].join('');
});
huginn.mqtt.client_handlers = (function huginn$mqtt$client_handlers(success_fn,fail,send,recv){
return new cljs.core.PersistentArrayMap(null, 4, ["connect",(function (success){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init6268311506155170577.clj",31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connected"], null);
}),null)),null,690217838);

if(cljs.core.truth_(success)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init6268311506155170577.clj",34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection success"], null);
}),null)),null,611339672);

return success_fn.call(null);
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init6268311506155170577.clj",37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection failure"], null);
}),null)),null,-1629159164);

return fail.call(null);
}
}),"close",(function (){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init6268311506155170577.clj",39,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection closed"], null);
}),null)),null,729232005);
}),"error",(function (err){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init6268311506155170577.clj",40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error: ",err], null);
}),null)),null,796299591);
}),"message",(function (topic,message,packet){
var c__33809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33809__auto__){
return (function (){
var f__33810__auto__ = (function (){var switch__33786__auto__ = ((function (c__33809__auto__){
return (function (state_37061){
var state_val_37062 = (state_37061[(1)]);
if((state_val_37062 === (1))){
var inst_37055 = [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"packet","packet",-533558081)];
var inst_37056 = [topic,message,packet];
var inst_37057 = cljs.core.PersistentHashMap.fromArrays(inst_37055,inst_37056);
var state_37061__$1 = state_37061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37061__$1,(2),recv,inst_37057);
} else {
if((state_val_37062 === (2))){
var inst_37059 = (state_37061[(2)]);
var state_37061__$1 = state_37061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37061__$1,inst_37059);
} else {
return null;
}
}
});})(c__33809__auto__))
;
return ((function (switch__33786__auto__,c__33809__auto__){
return (function() {
var huginn$mqtt$client_handlers_$_state_machine__33787__auto__ = null;
var huginn$mqtt$client_handlers_$_state_machine__33787__auto____0 = (function (){
var statearr_37063 = [null,null,null,null,null,null,null];
(statearr_37063[(0)] = huginn$mqtt$client_handlers_$_state_machine__33787__auto__);

(statearr_37063[(1)] = (1));

return statearr_37063;
});
var huginn$mqtt$client_handlers_$_state_machine__33787__auto____1 = (function (state_37061){
while(true){
var ret_value__33788__auto__ = (function (){try{while(true){
var result__33789__auto__ = switch__33786__auto__.call(null,state_37061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33789__auto__;
}
break;
}
}catch (e37064){if((e37064 instanceof Object)){
var ex__33790__auto__ = e37064;
var statearr_37065_37067 = state_37061;
(statearr_37065_37067[(5)] = ex__33790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37068 = state_37061;
state_37061 = G__37068;
continue;
} else {
return ret_value__33788__auto__;
}
break;
}
});
huginn$mqtt$client_handlers_$_state_machine__33787__auto__ = function(state_37061){
switch(arguments.length){
case 0:
return huginn$mqtt$client_handlers_$_state_machine__33787__auto____0.call(this);
case 1:
return huginn$mqtt$client_handlers_$_state_machine__33787__auto____1.call(this,state_37061);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_handlers_$_state_machine__33787__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_handlers_$_state_machine__33787__auto____0;
huginn$mqtt$client_handlers_$_state_machine__33787__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_handlers_$_state_machine__33787__auto____1;
return huginn$mqtt$client_handlers_$_state_machine__33787__auto__;
})()
;})(switch__33786__auto__,c__33809__auto__))
})();
var state__33811__auto__ = (function (){var statearr_37066 = f__33810__auto__.call(null);
(statearr_37066[(6)] = c__33809__auto__);

return statearr_37066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33811__auto__);
});})(c__33809__auto__))
);

return c__33809__auto__;
})], null);
});
huginn.mqtt.add_handlers = (function huginn$mqtt$add_handlers(client,handlers){
var seq__37069 = cljs.core.seq.call(null,handlers);
var chunk__37070 = null;
var count__37071 = (0);
var i__37072 = (0);
while(true){
if((i__37072 < count__37071)){
var vec__37073 = cljs.core._nth.call(null,chunk__37070,i__37072);
var key = cljs.core.nth.call(null,vec__37073,(0),null);
var hand = cljs.core.nth.call(null,vec__37073,(1),null);
client.on(key,hand);

var G__37079 = seq__37069;
var G__37080 = chunk__37070;
var G__37081 = count__37071;
var G__37082 = (i__37072 + (1));
seq__37069 = G__37079;
chunk__37070 = G__37080;
count__37071 = G__37081;
i__37072 = G__37082;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37069);
if(temp__5457__auto__){
var seq__37069__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37069__$1)){
var c__31803__auto__ = cljs.core.chunk_first.call(null,seq__37069__$1);
var G__37083 = cljs.core.chunk_rest.call(null,seq__37069__$1);
var G__37084 = c__31803__auto__;
var G__37085 = cljs.core.count.call(null,c__31803__auto__);
var G__37086 = (0);
seq__37069 = G__37083;
chunk__37070 = G__37084;
count__37071 = G__37085;
i__37072 = G__37086;
continue;
} else {
var vec__37076 = cljs.core.first.call(null,seq__37069__$1);
var key = cljs.core.nth.call(null,vec__37076,(0),null);
var hand = cljs.core.nth.call(null,vec__37076,(1),null);
client.on(key,hand);

var G__37087 = cljs.core.next.call(null,seq__37069__$1);
var G__37088 = null;
var G__37089 = (0);
var G__37090 = (0);
seq__37069 = G__37087;
chunk__37070 = G__37088;
count__37071 = G__37089;
i__37072 = G__37090;
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
var map__37091 = huginn.mqtt.build_client.call(null,opts);
var map__37091__$1 = ((((!((map__37091 == null)))?((((map__37091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37091):map__37091);
var init = map__37091__$1;
var time = cljs.core.get.call(null,map__37091__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var client = cljs.core.get.call(null,map__37091__$1,new cljs.core.Keyword(null,"client","client",-1323448117));
var handlers = huginn.mqtt.client_handlers.call(null,((function (map__37091,map__37091__$1,init,time,client){
return (function (){
return resolve.call(null,client);
});})(map__37091,map__37091__$1,init,time,client))
,((function (map__37091,map__37091__$1,init,time,client){
return (function (){
return reject.call(null,new cljs.core.Keyword(null,"client-fail","client-fail",1564298304));
});})(map__37091,map__37091__$1,init,time,client))
,send,recv);
client.subscribe(huginn.mqtt.config_chan.call(null,opts));

return huginn.mqtt.add_handlers.call(null,client,handlers);
}));
});
huginn.mqtt.payload_root = (function huginn$mqtt$payload_root(p__37093){
var map__37094 = p__37093;
var map__37094__$1 = ((((!((map__37094 == null)))?((((map__37094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37094.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37094):map__37094);
var opts = map__37094__$1;
var registryId = cljs.core.get.call(null,map__37094__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var deviceId = cljs.core.get.call(null,map__37094__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"-payload"].join('');
});
/**
 * msg-type can be 'state' for state updates
 * or 'events' to publish telemetry
 */
huginn.mqtt.mqtt_topic = (function huginn$mqtt$mqtt_topic(p__37096,msg_type){
var map__37097 = p__37096;
var map__37097__$1 = ((((!((map__37097 == null)))?((((map__37097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37097):map__37097);
var opts = map__37097__$1;
var deviceId = cljs.core.get.call(null,map__37097__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
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
huginn.mqtt.publish_one = (function huginn$mqtt$publish_one(client,p__37099){
var map__37100 = p__37099;
var map__37100__$1 = ((((!((map__37100 == null)))?((((map__37100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37100):map__37100);
var p = map__37100__$1;
var topic = cljs.core.get.call(null,map__37100__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var payload = cljs.core.get.call(null,map__37100__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var qos = cljs.core.get.call(null,map__37100__$1,new cljs.core.Keyword(null,"qos","qos",-2124292319));
return client.publish(topic,payload,qos);
});
huginn.mqtt.publisher = (function huginn$mqtt$publisher(client_atom,send_chan){
var c__33809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33809__auto__){
return (function (){
var f__33810__auto__ = (function (){var switch__33786__auto__ = ((function (c__33809__auto__){
return (function (state_37111){
var state_val_37112 = (state_37111[(1)]);
if((state_val_37112 === (1))){
var state_37111__$1 = state_37111;
var statearr_37113_37120 = state_37111__$1;
(statearr_37113_37120[(2)] = null);

(statearr_37113_37120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37112 === (2))){
var state_37111__$1 = state_37111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37111__$1,(4),send_chan);
} else {
if((state_val_37112 === (3))){
var inst_37109 = (state_37111[(2)]);
var state_37111__$1 = state_37111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37111__$1,inst_37109);
} else {
if((state_val_37112 === (4))){
var inst_37104 = (state_37111[(2)]);
var inst_37105 = cljs.core.deref.call(null,client_atom);
var inst_37106 = huginn.mqtt.publish_one.call(null,inst_37105,inst_37104);
var state_37111__$1 = (function (){var statearr_37114 = state_37111;
(statearr_37114[(7)] = inst_37106);

return statearr_37114;
})();
var statearr_37115_37121 = state_37111__$1;
(statearr_37115_37121[(2)] = null);

(statearr_37115_37121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__33809__auto__))
;
return ((function (switch__33786__auto__,c__33809__auto__){
return (function() {
var huginn$mqtt$publisher_$_state_machine__33787__auto__ = null;
var huginn$mqtt$publisher_$_state_machine__33787__auto____0 = (function (){
var statearr_37116 = [null,null,null,null,null,null,null,null];
(statearr_37116[(0)] = huginn$mqtt$publisher_$_state_machine__33787__auto__);

(statearr_37116[(1)] = (1));

return statearr_37116;
});
var huginn$mqtt$publisher_$_state_machine__33787__auto____1 = (function (state_37111){
while(true){
var ret_value__33788__auto__ = (function (){try{while(true){
var result__33789__auto__ = switch__33786__auto__.call(null,state_37111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33789__auto__;
}
break;
}
}catch (e37117){if((e37117 instanceof Object)){
var ex__33790__auto__ = e37117;
var statearr_37118_37122 = state_37111;
(statearr_37118_37122[(5)] = ex__33790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37123 = state_37111;
state_37111 = G__37123;
continue;
} else {
return ret_value__33788__auto__;
}
break;
}
});
huginn$mqtt$publisher_$_state_machine__33787__auto__ = function(state_37111){
switch(arguments.length){
case 0:
return huginn$mqtt$publisher_$_state_machine__33787__auto____0.call(this);
case 1:
return huginn$mqtt$publisher_$_state_machine__33787__auto____1.call(this,state_37111);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$publisher_$_state_machine__33787__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$publisher_$_state_machine__33787__auto____0;
huginn$mqtt$publisher_$_state_machine__33787__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$publisher_$_state_machine__33787__auto____1;
return huginn$mqtt$publisher_$_state_machine__33787__auto__;
})()
;})(switch__33786__auto__,c__33809__auto__))
})();
var state__33811__auto__ = (function (){var statearr_37119 = f__33810__auto__.call(null);
(statearr_37119[(6)] = c__33809__auto__);

return statearr_37119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33811__auto__);
});})(c__33809__auto__))
);

return c__33809__auto__;
});
/**
 * loops and refreshs the client atom every token experation
 */
huginn.mqtt.client_refresher = (function huginn$mqtt$client_refresher(client_atom,p__37124,send,recv){
var map__37125 = p__37124;
var map__37125__$1 = ((((!((map__37125 == null)))?((((map__37125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37125):map__37125);
var opts = map__37125__$1;
var tokenExpMins = cljs.core.get.call(null,map__37125__$1,new cljs.core.Keyword(null,"tokenExpMins","tokenExpMins",-1638711857));
var delayMs = cljs.core.get.call(null,map__37125__$1,new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168));
var c__33809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33809__auto__,map__37125,map__37125__$1,opts,tokenExpMins,delayMs){
return (function (){
var f__33810__auto__ = (function (){var switch__33786__auto__ = ((function (c__33809__auto__,map__37125,map__37125__$1,opts,tokenExpMins,delayMs){
return (function (state_37145){
var state_val_37146 = (state_37145[(1)]);
if((state_val_37146 === (1))){
var state_37145__$1 = state_37145;
var statearr_37147_37154 = state_37145__$1;
(statearr_37147_37154[(2)] = null);

(statearr_37147_37154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37146 === (2))){
var inst_37128 = (tokenExpMins * (1000));
var inst_37129 = (inst_37128 * (60));
var inst_37130 = cljs.core.async.timeout.call(null,inst_37129);
var state_37145__$1 = state_37145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37145__$1,(4),inst_37130);
} else {
if((state_val_37146 === (3))){
var inst_37143 = (state_37145[(2)]);
var state_37145__$1 = state_37145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37145__$1,inst_37143);
} else {
if((state_val_37146 === (4))){
var inst_37132 = (state_37145[(2)]);
var inst_37133 = (function (){var wait = inst_37132;
return ((function (wait,inst_37132,state_val_37146,c__33809__auto__,map__37125,map__37125__$1,opts,tokenExpMins,delayMs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\tRefreshing token after ",((tokenExpMins * (1000)) * (60)),"ms"], null);
});
;})(wait,inst_37132,state_val_37146,c__33809__auto__,map__37125,map__37125__$1,opts,tokenExpMins,delayMs))
})();
var inst_37134 = (new cljs.core.Delay(inst_37133,null));
var inst_37135 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init6268311506155170577.clj",116,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37134,null,-223085682);
var inst_37136 = (function (){var wait = inst_37132;
return ((function (wait,inst_37132,inst_37133,inst_37134,inst_37135,state_val_37146,c__33809__auto__,map__37125,map__37125__$1,opts,tokenExpMins,delayMs){
return (function (resolve,reject){
return cljs.core.swap_BANG_.call(null,client_atom,((function (wait,inst_37132,inst_37133,inst_37134,inst_37135,state_val_37146,c__33809__auto__,map__37125,map__37125__$1,opts,tokenExpMins,delayMs){
return (function (c){
c.end();

return resolve.call(null);
});})(wait,inst_37132,inst_37133,inst_37134,inst_37135,state_val_37146,c__33809__auto__,map__37125,map__37125__$1,opts,tokenExpMins,delayMs))
);
});
;})(wait,inst_37132,inst_37133,inst_37134,inst_37135,state_val_37146,c__33809__auto__,map__37125,map__37125__$1,opts,tokenExpMins,delayMs))
})();
var inst_37137 = promesa.core.promise.call(null,inst_37136);
var inst_37138 = (function (){var wait = inst_37132;
return ((function (wait,inst_37132,inst_37133,inst_37134,inst_37135,inst_37136,inst_37137,state_val_37146,c__33809__auto__,map__37125,map__37125__$1,opts,tokenExpMins,delayMs){
return (function (){
return huginn.mqtt.init_client.call(null,opts,send,recv);
});
;})(wait,inst_37132,inst_37133,inst_37134,inst_37135,inst_37136,inst_37137,state_val_37146,c__33809__auto__,map__37125,map__37125__$1,opts,tokenExpMins,delayMs))
})();
var inst_37139 = (function (){var wait = inst_37132;
return ((function (wait,inst_37132,inst_37133,inst_37134,inst_37135,inst_37136,inst_37137,inst_37138,state_val_37146,c__33809__auto__,map__37125,map__37125__$1,opts,tokenExpMins,delayMs){
return (function (client){
return cljs.core.reset_BANG_.call(null,client_atom,client);
});
;})(wait,inst_37132,inst_37133,inst_37134,inst_37135,inst_37136,inst_37137,inst_37138,state_val_37146,c__33809__auto__,map__37125,map__37125__$1,opts,tokenExpMins,delayMs))
})();
var inst_37140 = promesa.core.chain.call(null,inst_37137,inst_37138,inst_37139);
var state_37145__$1 = (function (){var statearr_37148 = state_37145;
(statearr_37148[(7)] = inst_37135);

(statearr_37148[(8)] = inst_37140);

return statearr_37148;
})();
var statearr_37149_37155 = state_37145__$1;
(statearr_37149_37155[(2)] = null);

(statearr_37149_37155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__33809__auto__,map__37125,map__37125__$1,opts,tokenExpMins,delayMs))
;
return ((function (switch__33786__auto__,c__33809__auto__,map__37125,map__37125__$1,opts,tokenExpMins,delayMs){
return (function() {
var huginn$mqtt$client_refresher_$_state_machine__33787__auto__ = null;
var huginn$mqtt$client_refresher_$_state_machine__33787__auto____0 = (function (){
var statearr_37150 = [null,null,null,null,null,null,null,null,null];
(statearr_37150[(0)] = huginn$mqtt$client_refresher_$_state_machine__33787__auto__);

(statearr_37150[(1)] = (1));

return statearr_37150;
});
var huginn$mqtt$client_refresher_$_state_machine__33787__auto____1 = (function (state_37145){
while(true){
var ret_value__33788__auto__ = (function (){try{while(true){
var result__33789__auto__ = switch__33786__auto__.call(null,state_37145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33789__auto__;
}
break;
}
}catch (e37151){if((e37151 instanceof Object)){
var ex__33790__auto__ = e37151;
var statearr_37152_37156 = state_37145;
(statearr_37152_37156[(5)] = ex__33790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37157 = state_37145;
state_37145 = G__37157;
continue;
} else {
return ret_value__33788__auto__;
}
break;
}
});
huginn$mqtt$client_refresher_$_state_machine__33787__auto__ = function(state_37145){
switch(arguments.length){
case 0:
return huginn$mqtt$client_refresher_$_state_machine__33787__auto____0.call(this);
case 1:
return huginn$mqtt$client_refresher_$_state_machine__33787__auto____1.call(this,state_37145);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_refresher_$_state_machine__33787__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_refresher_$_state_machine__33787__auto____0;
huginn$mqtt$client_refresher_$_state_machine__33787__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_refresher_$_state_machine__33787__auto____1;
return huginn$mqtt$client_refresher_$_state_machine__33787__auto__;
})()
;})(switch__33786__auto__,c__33809__auto__,map__37125,map__37125__$1,opts,tokenExpMins,delayMs))
})();
var state__33811__auto__ = (function (){var statearr_37153 = f__33810__auto__.call(null);
(statearr_37153[(6)] = c__33809__auto__);

return statearr_37153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33811__auto__);
});})(c__33809__auto__,map__37125,map__37125__$1,opts,tokenExpMins,delayMs))
);

return c__33809__auto__;
});
huginn.mqtt.tele_chan = (function huginn$mqtt$tele_chan(opts){
var temp_chan = cljs.core.async.chan.call(null);
var out_chan = cljs.core.async.chan.call(null);
var c__33809__auto___37190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33809__auto___37190,temp_chan,out_chan){
return (function (){
var f__33810__auto__ = (function (){var switch__33786__auto__ = ((function (c__33809__auto___37190,temp_chan,out_chan){
return (function (state_37171){
var state_val_37172 = (state_37171[(1)]);
if((state_val_37172 === (1))){
var state_37171__$1 = state_37171;
var statearr_37173_37191 = state_37171__$1;
(statearr_37173_37191[(2)] = null);

(statearr_37173_37191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37172 === (2))){
var inst_37159 = huginn.mqtt.node$module$systeminformation.cpuTemperature.call(null);
var inst_37160 = cljs.core.partial.call(null,huginn.mqtt.prep_temps,opts);
var inst_37161 = (function (){return ((function (inst_37159,inst_37160,state_val_37172,c__33809__auto___37190,temp_chan,out_chan){
return (function (vs){
var c__33809__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33809__auto____$1,inst_37159,inst_37160,state_val_37172,c__33809__auto___37190,temp_chan,out_chan){
return (function (){
var f__33810__auto__ = (function (){var switch__33786__auto__ = ((function (c__33809__auto____$1,inst_37159,inst_37160,state_val_37172,c__33809__auto___37190,temp_chan,out_chan){
return (function (state_37177){
var state_val_37178 = (state_37177[(1)]);
if((state_val_37178 === (1))){
var state_37177__$1 = state_37177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37177__$1,(2),temp_chan,vs);
} else {
if((state_val_37178 === (2))){
var inst_37175 = (state_37177[(2)]);
var state_37177__$1 = state_37177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37177__$1,inst_37175);
} else {
return null;
}
}
});})(c__33809__auto____$1,inst_37159,inst_37160,state_val_37172,c__33809__auto___37190,temp_chan,out_chan))
;
return ((function (switch__33786__auto__,c__33809__auto____$1,inst_37159,inst_37160,state_val_37172,c__33809__auto___37190,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__33787__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__33787__auto____0 = (function (){
var statearr_37179 = [null,null,null,null,null,null,null];
(statearr_37179[(0)] = huginn$mqtt$tele_chan_$_state_machine__33787__auto__);

(statearr_37179[(1)] = (1));

return statearr_37179;
});
var huginn$mqtt$tele_chan_$_state_machine__33787__auto____1 = (function (state_37177){
while(true){
var ret_value__33788__auto__ = (function (){try{while(true){
var result__33789__auto__ = switch__33786__auto__.call(null,state_37177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33789__auto__;
}
break;
}
}catch (e37180){if((e37180 instanceof Object)){
var ex__33790__auto__ = e37180;
var statearr_37181_37192 = state_37177;
(statearr_37181_37192[(5)] = ex__33790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37193 = state_37177;
state_37177 = G__37193;
continue;
} else {
return ret_value__33788__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__33787__auto__ = function(state_37177){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__33787__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__33787__auto____1.call(this,state_37177);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__33787__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__33787__auto____0;
huginn$mqtt$tele_chan_$_state_machine__33787__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__33787__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__33787__auto__;
})()
;})(switch__33786__auto__,c__33809__auto____$1,inst_37159,inst_37160,state_val_37172,c__33809__auto___37190,temp_chan,out_chan))
})();
var state__33811__auto__ = (function (){var statearr_37182 = f__33810__auto__.call(null);
(statearr_37182[(6)] = c__33809__auto____$1);

return statearr_37182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33811__auto__);
});})(c__33809__auto____$1,inst_37159,inst_37160,state_val_37172,c__33809__auto___37190,temp_chan,out_chan))
);

return c__33809__auto____$1;
});
;})(inst_37159,inst_37160,state_val_37172,c__33809__auto___37190,temp_chan,out_chan))
})();
var inst_37162 = promesa.core.chain.call(null,inst_37159,inst_37160,inst_37161);
var state_37171__$1 = (function (){var statearr_37183 = state_37171;
(statearr_37183[(7)] = inst_37162);

return statearr_37183;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37171__$1,(4),temp_chan);
} else {
if((state_val_37172 === (3))){
var inst_37169 = (state_37171[(2)]);
var state_37171__$1 = state_37171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37171__$1,inst_37169);
} else {
if((state_val_37172 === (4))){
var inst_37164 = (state_37171[(2)]);
var state_37171__$1 = state_37171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37171__$1,(5),out_chan,inst_37164);
} else {
if((state_val_37172 === (5))){
var inst_37166 = (state_37171[(2)]);
var state_37171__$1 = (function (){var statearr_37184 = state_37171;
(statearr_37184[(8)] = inst_37166);

return statearr_37184;
})();
var statearr_37185_37194 = state_37171__$1;
(statearr_37185_37194[(2)] = null);

(statearr_37185_37194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__33809__auto___37190,temp_chan,out_chan))
;
return ((function (switch__33786__auto__,c__33809__auto___37190,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__33787__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__33787__auto____0 = (function (){
var statearr_37186 = [null,null,null,null,null,null,null,null,null];
(statearr_37186[(0)] = huginn$mqtt$tele_chan_$_state_machine__33787__auto__);

(statearr_37186[(1)] = (1));

return statearr_37186;
});
var huginn$mqtt$tele_chan_$_state_machine__33787__auto____1 = (function (state_37171){
while(true){
var ret_value__33788__auto__ = (function (){try{while(true){
var result__33789__auto__ = switch__33786__auto__.call(null,state_37171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33789__auto__;
}
break;
}
}catch (e37187){if((e37187 instanceof Object)){
var ex__33790__auto__ = e37187;
var statearr_37188_37195 = state_37171;
(statearr_37188_37195[(5)] = ex__33790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37196 = state_37171;
state_37171 = G__37196;
continue;
} else {
return ret_value__33788__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__33787__auto__ = function(state_37171){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__33787__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__33787__auto____1.call(this,state_37171);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__33787__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__33787__auto____0;
huginn$mqtt$tele_chan_$_state_machine__33787__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__33787__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__33787__auto__;
})()
;})(switch__33786__auto__,c__33809__auto___37190,temp_chan,out_chan))
})();
var state__33811__auto__ = (function (){var statearr_37189 = f__33810__auto__.call(null);
(statearr_37189[(6)] = c__33809__auto___37190);

return statearr_37189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33811__auto__);
});})(c__33809__auto___37190,temp_chan,out_chan))
);


return out_chan;
});
huginn.mqtt.sender = (function huginn$mqtt$sender(topic_name,opts,send,t_chan){
var c__33809__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33809__auto__){
return (function (){
var f__33810__auto__ = (function (){var switch__33786__auto__ = ((function (c__33809__auto__){
return (function (state_37238){
var state_val_37239 = (state_37238[(1)]);
if((state_val_37239 === (7))){
var inst_37199 = (state_37238[(7)]);
var inst_37200 = (state_37238[(8)]);
var inst_37225 = (state_37238[(2)]);
var inst_37227 = (function (){var teles = inst_37199;
var topic = inst_37200;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_37199,inst_37200,inst_37225,state_val_37239,c__33809__auto__){
return (function (p__37226){
var map__37240 = p__37226;
var map__37240__$1 = ((((!((map__37240 == null)))?((((map__37240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37240.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37240):map__37240);
var t = map__37240__$1;
var subfolder = cljs.core.get.call(null,map__37240__$1,new cljs.core.Keyword(null,"subfolder","subfolder",1044158439));
var my_topic = (cljs.core.truth_(subfolder)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(topic),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(subfolder)].join(''):topic);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"topic","topic",-1960480691),my_topic),new cljs.core.Keyword(null,"qos","qos",-2124292319),qos);
});
;})(teles,topic,qos,inst_37199,inst_37200,inst_37225,state_val_37239,c__33809__auto__))
})();
var inst_37228 = cljs.core.map.call(null,inst_37227,inst_37199);
var inst_37229 = cljs.core.async.onto_chan.call(null,send,inst_37228,false);
var inst_37230 = new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168).cljs$core$IFn$_invoke$arity$1(opts);
var inst_37231 = cljs.core.async.timeout.call(null,inst_37230);
var state_37238__$1 = (function (){var statearr_37242 = state_37238;
(statearr_37242[(9)] = inst_37229);

(statearr_37242[(10)] = inst_37225);

return statearr_37242;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37238__$1,(11),inst_37231);
} else {
if((state_val_37239 === (1))){
var state_37238__$1 = state_37238;
var statearr_37243_37261 = state_37238__$1;
(statearr_37243_37261[(2)] = null);

(statearr_37243_37261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37239 === (4))){
var inst_37199 = (state_37238[(2)]);
var inst_37200 = huginn.mqtt.mqtt_topic.call(null,opts,topic_name);
var inst_37201 = cljs.core._EQ_.call(null,"state",topic_name);
var state_37238__$1 = (function (){var statearr_37244 = state_37238;
(statearr_37244[(7)] = inst_37199);

(statearr_37244[(8)] = inst_37200);

return statearr_37244;
})();
if(inst_37201){
var statearr_37245_37262 = state_37238__$1;
(statearr_37245_37262[(1)] = (5));

} else {
var statearr_37246_37263 = state_37238__$1;
(statearr_37246_37263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37239 === (6))){
var state_37238__$1 = state_37238;
var statearr_37247_37264 = state_37238__$1;
(statearr_37247_37264[(2)] = null);

(statearr_37247_37264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37239 === (3))){
var inst_37236 = (state_37238[(2)]);
var state_37238__$1 = state_37238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37238__$1,inst_37236);
} else {
if((state_val_37239 === (2))){
var state_37238__$1 = state_37238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37238__$1,(4),t_chan);
} else {
if((state_val_37239 === (11))){
var inst_37233 = (state_37238[(2)]);
var state_37238__$1 = (function (){var statearr_37248 = state_37238;
(statearr_37248[(11)] = inst_37233);

return statearr_37248;
})();
var statearr_37249_37265 = state_37238__$1;
(statearr_37249_37265[(2)] = null);

(statearr_37249_37265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37239 === (9))){
var inst_37199 = (state_37238[(7)]);
var inst_37200 = (state_37238[(8)]);
var inst_37206 = (state_37238[(2)]);
var inst_37207 = (function (){var teles = inst_37199;
var topic = inst_37200;
var qos = ({"qos": (1)});
var e__36942__auto__ = inst_37206;
return ((function (teles,topic,qos,e__36942__auto__,inst_37199,inst_37200,inst_37206,state_val_37239,c__33809__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__36942__auto__], null);
});
;})(teles,topic,qos,e__36942__auto__,inst_37199,inst_37200,inst_37206,state_val_37239,c__33809__auto__))
})();
var inst_37208 = (new cljs.core.Delay(inst_37207,null));
var inst_37209 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init6268311506155170577.clj",150,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37208,null,328765319);
var inst_37210 = (function(){throw inst_37206})();
var state_37238__$1 = (function (){var statearr_37250 = state_37238;
(statearr_37250[(12)] = inst_37209);

return statearr_37250;
})();
var statearr_37251_37266 = state_37238__$1;
(statearr_37251_37266[(2)] = inst_37210);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37238__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37239 === (5))){
var inst_37199 = (state_37238[(7)]);
var inst_37200 = (state_37238[(8)]);
var inst_37203 = (function (){var teles = inst_37199;
var topic = inst_37200;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_37199,inst_37200,state_val_37239,c__33809__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pushing state",topic], null);
});
;})(teles,topic,qos,inst_37199,inst_37200,state_val_37239,c__33809__auto__))
})();
var inst_37204 = (new cljs.core.Delay(inst_37203,null));
var inst_37205 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init6268311506155170577.clj",149,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37204,null,-274980934);
var state_37238__$1 = (function (){var statearr_37252 = state_37238;
(statearr_37252[(13)] = inst_37205);

return statearr_37252;
})();
var statearr_37253_37267 = state_37238__$1;
(statearr_37253_37267[(2)] = null);

(statearr_37253_37267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37239 === (10))){
var inst_37199 = (state_37238[(7)]);
var inst_37200 = (state_37238[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37238,(9),Error,null,(8));
var inst_37214 = cljs.core.PersistentVector.EMPTY;
var inst_37215 = cljs.core.comp.call(null,cljs.core.type,new cljs.core.Keyword(null,"payload","payload",-383036092));
var inst_37216 = cljs.core.map.call(null,inst_37215);
var inst_37217 = cljs.core.into.call(null,inst_37214,inst_37216,inst_37199);
var inst_37218 = (function (){var teles = inst_37199;
var topic = inst_37200;
var qos = ({"qos": (1)});
var result__36980__auto__ = inst_37217;
return ((function (teles,topic,qos,result__36980__auto__,inst_37199,inst_37200,_,inst_37214,inst_37215,inst_37216,inst_37217,state_val_37239,c__33809__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Keyword(null,"payload","payload",-383036092))),new cljs.core.Symbol(null,"teles","teles",1601787367,null)),"=>",result__36980__auto__], null);
});
;})(teles,topic,qos,result__36980__auto__,inst_37199,inst_37200,_,inst_37214,inst_37215,inst_37216,inst_37217,state_val_37239,c__33809__auto__))
})();
var inst_37219 = (new cljs.core.Delay(inst_37218,null));
var inst_37220 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init6268311506155170577.clj",150,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37219,null,1305369252);
var state_37238__$1 = (function (){var statearr_37254 = state_37238;
(statearr_37254[(14)] = inst_37220);

return statearr_37254;
})();
var statearr_37255_37268 = state_37238__$1;
(statearr_37255_37268[(2)] = inst_37217);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37238__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37239 === (8))){
var inst_37222 = (state_37238[(2)]);
var state_37238__$1 = state_37238;
var statearr_37256_37269 = state_37238__$1;
(statearr_37256_37269[(2)] = inst_37222);

(statearr_37256_37269[(1)] = (7));


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
});})(c__33809__auto__))
;
return ((function (switch__33786__auto__,c__33809__auto__){
return (function() {
var huginn$mqtt$sender_$_state_machine__33787__auto__ = null;
var huginn$mqtt$sender_$_state_machine__33787__auto____0 = (function (){
var statearr_37257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37257[(0)] = huginn$mqtt$sender_$_state_machine__33787__auto__);

(statearr_37257[(1)] = (1));

return statearr_37257;
});
var huginn$mqtt$sender_$_state_machine__33787__auto____1 = (function (state_37238){
while(true){
var ret_value__33788__auto__ = (function (){try{while(true){
var result__33789__auto__ = switch__33786__auto__.call(null,state_37238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33789__auto__;
}
break;
}
}catch (e37258){if((e37258 instanceof Object)){
var ex__33790__auto__ = e37258;
var statearr_37259_37270 = state_37238;
(statearr_37259_37270[(5)] = ex__33790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37271 = state_37238;
state_37238 = G__37271;
continue;
} else {
return ret_value__33788__auto__;
}
break;
}
});
huginn$mqtt$sender_$_state_machine__33787__auto__ = function(state_37238){
switch(arguments.length){
case 0:
return huginn$mqtt$sender_$_state_machine__33787__auto____0.call(this);
case 1:
return huginn$mqtt$sender_$_state_machine__33787__auto____1.call(this,state_37238);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$sender_$_state_machine__33787__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$sender_$_state_machine__33787__auto____0;
huginn$mqtt$sender_$_state_machine__33787__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$sender_$_state_machine__33787__auto____1;
return huginn$mqtt$sender_$_state_machine__33787__auto__;
})()
;})(switch__33786__auto__,c__33809__auto__))
})();
var state__33811__auto__ = (function (){var statearr_37260 = f__33810__auto__.call(null);
(statearr_37260[(6)] = c__33809__auto__);

return statearr_37260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33811__auto__);
});})(c__33809__auto__))
);

return c__33809__auto__;
});
huginn.mqtt.state_send = cljs.core.partial.call(null,huginn.mqtt.sender,"state");
huginn.mqtt.tele_send = cljs.core.partial.call(null,huginn.mqtt.sender,"events");
huginn.mqtt.clean_up = (function huginn$mqtt$clean_up(p__37272){
var map__37273 = p__37272;
var map__37273__$1 = ((((!((map__37273 == null)))?((((map__37273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37273):map__37273);
var system = map__37273__$1;
var send_chan = cljs.core.get.call(null,map__37273__$1,new cljs.core.Keyword(null,"send-chan","send-chan",1681189602));
var recv_chan = cljs.core.get.call(null,map__37273__$1,new cljs.core.Keyword(null,"recv-chan","recv-chan",869238850));
var telemetry_chan = cljs.core.get.call(null,map__37273__$1,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503));
var state_chan = cljs.core.get.call(null,map__37273__$1,new cljs.core.Keyword(null,"state-chan","state-chan",-1042477017));
var client_atom = cljs.core.get.call(null,map__37273__$1,new cljs.core.Keyword(null,"client-atom","client-atom",-1733084110));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,"Killing system","huginn.mqtt","/tmp/form-init6268311506155170577.clj",170,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__37273,map__37273__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(map__37273,map__37273__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
,null)),null,-650417335);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__37273,map__37273__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (c){
return cljs.core.async.close_BANG_.call(null,c);
});})(map__37273,map__37273__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
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
