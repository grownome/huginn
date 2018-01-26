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
huginn.mqtt.client_id = (function huginn$mqtt$client_id(p__37103){
var map__37104 = p__37103;
var map__37104__$1 = ((((!((map__37104 == null)))?((((map__37104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37104.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37104):map__37104);
var opts = map__37104__$1;
var projectId = cljs.core.get.call(null,map__37104__$1,new cljs.core.Keyword(null,"projectId","projectId",-1551013096));
var registryId = cljs.core.get.call(null,map__37104__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var cloudRegion = cljs.core.get.call(null,map__37104__$1,new cljs.core.Keyword(null,"cloudRegion","cloudRegion",-857757214));
var deviceId = cljs.core.get.call(null,map__37104__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["projects/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(projectId),"/locations/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cloudRegion),"/registries/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId)].join('');
});
huginn.mqtt.config_chan = (function huginn$mqtt$config_chan(p__37106){
var map__37107 = p__37106;
var map__37107__$1 = ((((!((map__37107 == null)))?((((map__37107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37107):map__37107);
var opts = map__37107__$1;
var deviceId = cljs.core.get.call(null,map__37107__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"/config"].join('');
});
huginn.mqtt.client_handlers = (function huginn$mqtt$client_handlers(success_fn,fail,send,recv){
return new cljs.core.PersistentArrayMap(null, 4, ["connect",(function (success){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init9984232462607037143.clj",31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connected"], null);
}),null)),null,639505112);

if(cljs.core.truth_(success)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init9984232462607037143.clj",34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection success"], null);
}),null)),null,185956230);

return success_fn.call(null);
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init9984232462607037143.clj",37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection failure"], null);
}),null)),null,-361841839);

return fail.call(null);
}
}),"close",(function (){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init9984232462607037143.clj",39,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection closed"], null);
}),null)),null,302740910);
}),"error",(function (err){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init9984232462607037143.clj",40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error: ",err], null);
}),null)),null,-1607875432);
}),"message",(function (topic,message,packet){
var c__36917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto__){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto__){
return (function (state_37115){
var state_val_37116 = (state_37115[(1)]);
if((state_val_37116 === (1))){
var inst_37109 = [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"packet","packet",-533558081)];
var inst_37110 = [topic,message,packet];
var inst_37111 = cljs.core.PersistentHashMap.fromArrays(inst_37109,inst_37110);
var state_37115__$1 = state_37115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37115__$1,(2),recv,inst_37111);
} else {
if((state_val_37116 === (2))){
var inst_37113 = (state_37115[(2)]);
var state_37115__$1 = state_37115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37115__$1,inst_37113);
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
var statearr_37117 = [null,null,null,null,null,null,null];
(statearr_37117[(0)] = huginn$mqtt$client_handlers_$_state_machine__36895__auto__);

(statearr_37117[(1)] = (1));

return statearr_37117;
});
var huginn$mqtt$client_handlers_$_state_machine__36895__auto____1 = (function (state_37115){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37118){if((e37118 instanceof Object)){
var ex__36898__auto__ = e37118;
var statearr_37119_37121 = state_37115;
(statearr_37119_37121[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37122 = state_37115;
state_37115 = G__37122;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$client_handlers_$_state_machine__36895__auto__ = function(state_37115){
switch(arguments.length){
case 0:
return huginn$mqtt$client_handlers_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$client_handlers_$_state_machine__36895__auto____1.call(this,state_37115);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_handlers_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_handlers_$_state_machine__36895__auto____0;
huginn$mqtt$client_handlers_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_handlers_$_state_machine__36895__auto____1;
return huginn$mqtt$client_handlers_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto__))
})();
var state__36919__auto__ = (function (){var statearr_37120 = f__36918__auto__.call(null);
(statearr_37120[(6)] = c__36917__auto__);

return statearr_37120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto__))
);

return c__36917__auto__;
})], null);
});
huginn.mqtt.add_handlers = (function huginn$mqtt$add_handlers(client,handlers){
var seq__37123 = cljs.core.seq.call(null,handlers);
var chunk__37124 = null;
var count__37125 = (0);
var i__37126 = (0);
while(true){
if((i__37126 < count__37125)){
var vec__37127 = cljs.core._nth.call(null,chunk__37124,i__37126);
var key = cljs.core.nth.call(null,vec__37127,(0),null);
var hand = cljs.core.nth.call(null,vec__37127,(1),null);
client.on(key,hand);

var G__37133 = seq__37123;
var G__37134 = chunk__37124;
var G__37135 = count__37125;
var G__37136 = (i__37126 + (1));
seq__37123 = G__37133;
chunk__37124 = G__37134;
count__37125 = G__37135;
i__37126 = G__37136;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37123);
if(temp__5457__auto__){
var seq__37123__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37123__$1)){
var c__31803__auto__ = cljs.core.chunk_first.call(null,seq__37123__$1);
var G__37137 = cljs.core.chunk_rest.call(null,seq__37123__$1);
var G__37138 = c__31803__auto__;
var G__37139 = cljs.core.count.call(null,c__31803__auto__);
var G__37140 = (0);
seq__37123 = G__37137;
chunk__37124 = G__37138;
count__37125 = G__37139;
i__37126 = G__37140;
continue;
} else {
var vec__37130 = cljs.core.first.call(null,seq__37123__$1);
var key = cljs.core.nth.call(null,vec__37130,(0),null);
var hand = cljs.core.nth.call(null,vec__37130,(1),null);
client.on(key,hand);

var G__37141 = cljs.core.next.call(null,seq__37123__$1);
var G__37142 = null;
var G__37143 = (0);
var G__37144 = (0);
seq__37123 = G__37141;
chunk__37124 = G__37142;
count__37125 = G__37143;
i__37126 = G__37144;
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
var map__37145 = huginn.mqtt.build_client.call(null,opts);
var map__37145__$1 = ((((!((map__37145 == null)))?((((map__37145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37145):map__37145);
var init = map__37145__$1;
var time = cljs.core.get.call(null,map__37145__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var client = cljs.core.get.call(null,map__37145__$1,new cljs.core.Keyword(null,"client","client",-1323448117));
var handlers = huginn.mqtt.client_handlers.call(null,((function (map__37145,map__37145__$1,init,time,client){
return (function (){
return resolve.call(null,client);
});})(map__37145,map__37145__$1,init,time,client))
,((function (map__37145,map__37145__$1,init,time,client){
return (function (){
return reject.call(null,new cljs.core.Keyword(null,"client-fail","client-fail",1564298304));
});})(map__37145,map__37145__$1,init,time,client))
,send,recv);
client.subscribe(huginn.mqtt.config_chan.call(null,opts));

return huginn.mqtt.add_handlers.call(null,client,handlers);
}));
});
huginn.mqtt.payload_root = (function huginn$mqtt$payload_root(p__37147){
var map__37148 = p__37147;
var map__37148__$1 = ((((!((map__37148 == null)))?((((map__37148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37148):map__37148);
var opts = map__37148__$1;
var registryId = cljs.core.get.call(null,map__37148__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var deviceId = cljs.core.get.call(null,map__37148__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"-payload"].join('');
});
/**
 * msg-type can be 'state' for state updates
 * or 'events' to publish telemetry
 */
huginn.mqtt.mqtt_topic = (function huginn$mqtt$mqtt_topic(p__37150,msg_type){
var map__37151 = p__37150;
var map__37151__$1 = ((((!((map__37151 == null)))?((((map__37151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37151):map__37151);
var opts = map__37151__$1;
var deviceId = cljs.core.get.call(null,map__37151__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
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
huginn.mqtt.publish_one = (function huginn$mqtt$publish_one(client,p__37153){
var map__37154 = p__37153;
var map__37154__$1 = ((((!((map__37154 == null)))?((((map__37154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37154):map__37154);
var p = map__37154__$1;
var topic = cljs.core.get.call(null,map__37154__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var payload = cljs.core.get.call(null,map__37154__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var qos = cljs.core.get.call(null,map__37154__$1,new cljs.core.Keyword(null,"qos","qos",-2124292319));
return client.publish(topic,payload,qos);
});
huginn.mqtt.publisher = (function huginn$mqtt$publisher(client_atom,send_chan){
var c__36917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto__){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto__){
return (function (state_37165){
var state_val_37166 = (state_37165[(1)]);
if((state_val_37166 === (1))){
var state_37165__$1 = state_37165;
var statearr_37167_37174 = state_37165__$1;
(statearr_37167_37174[(2)] = null);

(statearr_37167_37174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37166 === (2))){
var state_37165__$1 = state_37165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37165__$1,(4),send_chan);
} else {
if((state_val_37166 === (3))){
var inst_37163 = (state_37165[(2)]);
var state_37165__$1 = state_37165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37165__$1,inst_37163);
} else {
if((state_val_37166 === (4))){
var inst_37158 = (state_37165[(2)]);
var inst_37159 = cljs.core.deref.call(null,client_atom);
var inst_37160 = huginn.mqtt.publish_one.call(null,inst_37159,inst_37158);
var state_37165__$1 = (function (){var statearr_37168 = state_37165;
(statearr_37168[(7)] = inst_37160);

return statearr_37168;
})();
var statearr_37169_37175 = state_37165__$1;
(statearr_37169_37175[(2)] = null);

(statearr_37169_37175[(1)] = (2));


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
var statearr_37170 = [null,null,null,null,null,null,null,null];
(statearr_37170[(0)] = huginn$mqtt$publisher_$_state_machine__36895__auto__);

(statearr_37170[(1)] = (1));

return statearr_37170;
});
var huginn$mqtt$publisher_$_state_machine__36895__auto____1 = (function (state_37165){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37171){if((e37171 instanceof Object)){
var ex__36898__auto__ = e37171;
var statearr_37172_37176 = state_37165;
(statearr_37172_37176[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37177 = state_37165;
state_37165 = G__37177;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$publisher_$_state_machine__36895__auto__ = function(state_37165){
switch(arguments.length){
case 0:
return huginn$mqtt$publisher_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$publisher_$_state_machine__36895__auto____1.call(this,state_37165);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$publisher_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$publisher_$_state_machine__36895__auto____0;
huginn$mqtt$publisher_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$publisher_$_state_machine__36895__auto____1;
return huginn$mqtt$publisher_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto__))
})();
var state__36919__auto__ = (function (){var statearr_37173 = f__36918__auto__.call(null);
(statearr_37173[(6)] = c__36917__auto__);

return statearr_37173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto__))
);

return c__36917__auto__;
});
/**
 * loops and refreshs the client atom every token experation
 */
huginn.mqtt.client_refresher = (function huginn$mqtt$client_refresher(client_atom,p__37178,send,recv){
var map__37179 = p__37178;
var map__37179__$1 = ((((!((map__37179 == null)))?((((map__37179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37179):map__37179);
var opts = map__37179__$1;
var tokenExpMins = cljs.core.get.call(null,map__37179__$1,new cljs.core.Keyword(null,"tokenExpMins","tokenExpMins",-1638711857));
var delayMs = cljs.core.get.call(null,map__37179__$1,new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168));
var c__36917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto__,map__37179,map__37179__$1,opts,tokenExpMins,delayMs){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto__,map__37179,map__37179__$1,opts,tokenExpMins,delayMs){
return (function (state_37199){
var state_val_37200 = (state_37199[(1)]);
if((state_val_37200 === (1))){
var state_37199__$1 = state_37199;
var statearr_37201_37208 = state_37199__$1;
(statearr_37201_37208[(2)] = null);

(statearr_37201_37208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37200 === (2))){
var inst_37182 = (tokenExpMins * (1000));
var inst_37183 = (inst_37182 * (60));
var inst_37184 = cljs.core.async.timeout.call(null,inst_37183);
var state_37199__$1 = state_37199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37199__$1,(4),inst_37184);
} else {
if((state_val_37200 === (3))){
var inst_37197 = (state_37199[(2)]);
var state_37199__$1 = state_37199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37199__$1,inst_37197);
} else {
if((state_val_37200 === (4))){
var inst_37186 = (state_37199[(2)]);
var inst_37187 = (function (){var wait = inst_37186;
return ((function (wait,inst_37186,state_val_37200,c__36917__auto__,map__37179,map__37179__$1,opts,tokenExpMins,delayMs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\tRefreshing token after ",((tokenExpMins * (1000)) * (60)),"ms"], null);
});
;})(wait,inst_37186,state_val_37200,c__36917__auto__,map__37179,map__37179__$1,opts,tokenExpMins,delayMs))
})();
var inst_37188 = (new cljs.core.Delay(inst_37187,null));
var inst_37189 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init9984232462607037143.clj",116,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37188,null,1074406648);
var inst_37190 = (function (){var wait = inst_37186;
return ((function (wait,inst_37186,inst_37187,inst_37188,inst_37189,state_val_37200,c__36917__auto__,map__37179,map__37179__$1,opts,tokenExpMins,delayMs){
return (function (resolve,reject){
return cljs.core.swap_BANG_.call(null,client_atom,((function (wait,inst_37186,inst_37187,inst_37188,inst_37189,state_val_37200,c__36917__auto__,map__37179,map__37179__$1,opts,tokenExpMins,delayMs){
return (function (c){
c.end();

return resolve.call(null);
});})(wait,inst_37186,inst_37187,inst_37188,inst_37189,state_val_37200,c__36917__auto__,map__37179,map__37179__$1,opts,tokenExpMins,delayMs))
);
});
;})(wait,inst_37186,inst_37187,inst_37188,inst_37189,state_val_37200,c__36917__auto__,map__37179,map__37179__$1,opts,tokenExpMins,delayMs))
})();
var inst_37191 = promesa.core.promise.call(null,inst_37190);
var inst_37192 = (function (){var wait = inst_37186;
return ((function (wait,inst_37186,inst_37187,inst_37188,inst_37189,inst_37190,inst_37191,state_val_37200,c__36917__auto__,map__37179,map__37179__$1,opts,tokenExpMins,delayMs){
return (function (){
return huginn.mqtt.init_client.call(null,opts,send,recv);
});
;})(wait,inst_37186,inst_37187,inst_37188,inst_37189,inst_37190,inst_37191,state_val_37200,c__36917__auto__,map__37179,map__37179__$1,opts,tokenExpMins,delayMs))
})();
var inst_37193 = (function (){var wait = inst_37186;
return ((function (wait,inst_37186,inst_37187,inst_37188,inst_37189,inst_37190,inst_37191,inst_37192,state_val_37200,c__36917__auto__,map__37179,map__37179__$1,opts,tokenExpMins,delayMs){
return (function (client){
return cljs.core.reset_BANG_.call(null,client_atom,client);
});
;})(wait,inst_37186,inst_37187,inst_37188,inst_37189,inst_37190,inst_37191,inst_37192,state_val_37200,c__36917__auto__,map__37179,map__37179__$1,opts,tokenExpMins,delayMs))
})();
var inst_37194 = promesa.core.chain.call(null,inst_37191,inst_37192,inst_37193);
var state_37199__$1 = (function (){var statearr_37202 = state_37199;
(statearr_37202[(7)] = inst_37194);

(statearr_37202[(8)] = inst_37189);

return statearr_37202;
})();
var statearr_37203_37209 = state_37199__$1;
(statearr_37203_37209[(2)] = null);

(statearr_37203_37209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__36917__auto__,map__37179,map__37179__$1,opts,tokenExpMins,delayMs))
;
return ((function (switch__36894__auto__,c__36917__auto__,map__37179,map__37179__$1,opts,tokenExpMins,delayMs){
return (function() {
var huginn$mqtt$client_refresher_$_state_machine__36895__auto__ = null;
var huginn$mqtt$client_refresher_$_state_machine__36895__auto____0 = (function (){
var statearr_37204 = [null,null,null,null,null,null,null,null,null];
(statearr_37204[(0)] = huginn$mqtt$client_refresher_$_state_machine__36895__auto__);

(statearr_37204[(1)] = (1));

return statearr_37204;
});
var huginn$mqtt$client_refresher_$_state_machine__36895__auto____1 = (function (state_37199){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37205){if((e37205 instanceof Object)){
var ex__36898__auto__ = e37205;
var statearr_37206_37210 = state_37199;
(statearr_37206_37210[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37211 = state_37199;
state_37199 = G__37211;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$client_refresher_$_state_machine__36895__auto__ = function(state_37199){
switch(arguments.length){
case 0:
return huginn$mqtt$client_refresher_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$client_refresher_$_state_machine__36895__auto____1.call(this,state_37199);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_refresher_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_refresher_$_state_machine__36895__auto____0;
huginn$mqtt$client_refresher_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_refresher_$_state_machine__36895__auto____1;
return huginn$mqtt$client_refresher_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto__,map__37179,map__37179__$1,opts,tokenExpMins,delayMs))
})();
var state__36919__auto__ = (function (){var statearr_37207 = f__36918__auto__.call(null);
(statearr_37207[(6)] = c__36917__auto__);

return statearr_37207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto__,map__37179,map__37179__$1,opts,tokenExpMins,delayMs))
);

return c__36917__auto__;
});
huginn.mqtt.tele_chan = (function huginn$mqtt$tele_chan(opts){
var temp_chan = cljs.core.async.chan.call(null);
var out_chan = cljs.core.async.chan.call(null);
var c__36917__auto___37244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto___37244,temp_chan,out_chan){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto___37244,temp_chan,out_chan){
return (function (state_37225){
var state_val_37226 = (state_37225[(1)]);
if((state_val_37226 === (1))){
var state_37225__$1 = state_37225;
var statearr_37227_37245 = state_37225__$1;
(statearr_37227_37245[(2)] = null);

(statearr_37227_37245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37226 === (2))){
var inst_37213 = huginn.mqtt.node$module$systeminformation.cpuTemperature.call(null);
var inst_37214 = cljs.core.partial.call(null,huginn.mqtt.prep_temps,opts);
var inst_37215 = (function (){return ((function (inst_37213,inst_37214,state_val_37226,c__36917__auto___37244,temp_chan,out_chan){
return (function (vs){
var c__36917__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto____$1,inst_37213,inst_37214,state_val_37226,c__36917__auto___37244,temp_chan,out_chan){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto____$1,inst_37213,inst_37214,state_val_37226,c__36917__auto___37244,temp_chan,out_chan){
return (function (state_37231){
var state_val_37232 = (state_37231[(1)]);
if((state_val_37232 === (1))){
var state_37231__$1 = state_37231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37231__$1,(2),temp_chan,vs);
} else {
if((state_val_37232 === (2))){
var inst_37229 = (state_37231[(2)]);
var state_37231__$1 = state_37231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37231__$1,inst_37229);
} else {
return null;
}
}
});})(c__36917__auto____$1,inst_37213,inst_37214,state_val_37226,c__36917__auto___37244,temp_chan,out_chan))
;
return ((function (switch__36894__auto__,c__36917__auto____$1,inst_37213,inst_37214,state_val_37226,c__36917__auto___37244,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__36895__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__36895__auto____0 = (function (){
var statearr_37233 = [null,null,null,null,null,null,null];
(statearr_37233[(0)] = huginn$mqtt$tele_chan_$_state_machine__36895__auto__);

(statearr_37233[(1)] = (1));

return statearr_37233;
});
var huginn$mqtt$tele_chan_$_state_machine__36895__auto____1 = (function (state_37231){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37234){if((e37234 instanceof Object)){
var ex__36898__auto__ = e37234;
var statearr_37235_37246 = state_37231;
(statearr_37235_37246[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37247 = state_37231;
state_37231 = G__37247;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__36895__auto__ = function(state_37231){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__36895__auto____1.call(this,state_37231);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__36895__auto____0;
huginn$mqtt$tele_chan_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__36895__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto____$1,inst_37213,inst_37214,state_val_37226,c__36917__auto___37244,temp_chan,out_chan))
})();
var state__36919__auto__ = (function (){var statearr_37236 = f__36918__auto__.call(null);
(statearr_37236[(6)] = c__36917__auto____$1);

return statearr_37236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto____$1,inst_37213,inst_37214,state_val_37226,c__36917__auto___37244,temp_chan,out_chan))
);

return c__36917__auto____$1;
});
;})(inst_37213,inst_37214,state_val_37226,c__36917__auto___37244,temp_chan,out_chan))
})();
var inst_37216 = promesa.core.chain.call(null,inst_37213,inst_37214,inst_37215);
var state_37225__$1 = (function (){var statearr_37237 = state_37225;
(statearr_37237[(7)] = inst_37216);

return statearr_37237;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37225__$1,(4),temp_chan);
} else {
if((state_val_37226 === (3))){
var inst_37223 = (state_37225[(2)]);
var state_37225__$1 = state_37225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37225__$1,inst_37223);
} else {
if((state_val_37226 === (4))){
var inst_37218 = (state_37225[(2)]);
var state_37225__$1 = state_37225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37225__$1,(5),out_chan,inst_37218);
} else {
if((state_val_37226 === (5))){
var inst_37220 = (state_37225[(2)]);
var state_37225__$1 = (function (){var statearr_37238 = state_37225;
(statearr_37238[(8)] = inst_37220);

return statearr_37238;
})();
var statearr_37239_37248 = state_37225__$1;
(statearr_37239_37248[(2)] = null);

(statearr_37239_37248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__36917__auto___37244,temp_chan,out_chan))
;
return ((function (switch__36894__auto__,c__36917__auto___37244,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__36895__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__36895__auto____0 = (function (){
var statearr_37240 = [null,null,null,null,null,null,null,null,null];
(statearr_37240[(0)] = huginn$mqtt$tele_chan_$_state_machine__36895__auto__);

(statearr_37240[(1)] = (1));

return statearr_37240;
});
var huginn$mqtt$tele_chan_$_state_machine__36895__auto____1 = (function (state_37225){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37241){if((e37241 instanceof Object)){
var ex__36898__auto__ = e37241;
var statearr_37242_37249 = state_37225;
(statearr_37242_37249[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37250 = state_37225;
state_37225 = G__37250;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__36895__auto__ = function(state_37225){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__36895__auto____1.call(this,state_37225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__36895__auto____0;
huginn$mqtt$tele_chan_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__36895__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto___37244,temp_chan,out_chan))
})();
var state__36919__auto__ = (function (){var statearr_37243 = f__36918__auto__.call(null);
(statearr_37243[(6)] = c__36917__auto___37244);

return statearr_37243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto___37244,temp_chan,out_chan))
);


return out_chan;
});
huginn.mqtt.sender = (function huginn$mqtt$sender(topic_name,opts,send,t_chan){
var c__36917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto__){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto__){
return (function (state_37292){
var state_val_37293 = (state_37292[(1)]);
if((state_val_37293 === (7))){
var inst_37254 = (state_37292[(7)]);
var inst_37253 = (state_37292[(8)]);
var inst_37279 = (state_37292[(2)]);
var inst_37281 = (function (){var teles = inst_37253;
var topic = inst_37254;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_37254,inst_37253,inst_37279,state_val_37293,c__36917__auto__){
return (function (p__37280){
var map__37294 = p__37280;
var map__37294__$1 = ((((!((map__37294 == null)))?((((map__37294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37294.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37294):map__37294);
var t = map__37294__$1;
var subfolder = cljs.core.get.call(null,map__37294__$1,new cljs.core.Keyword(null,"subfolder","subfolder",1044158439));
var my_topic = (cljs.core.truth_(subfolder)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(topic),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(subfolder)].join(''):topic);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"topic","topic",-1960480691),my_topic),new cljs.core.Keyword(null,"qos","qos",-2124292319),qos);
});
;})(teles,topic,qos,inst_37254,inst_37253,inst_37279,state_val_37293,c__36917__auto__))
})();
var inst_37282 = cljs.core.map.call(null,inst_37281,inst_37253);
var inst_37283 = cljs.core.async.onto_chan.call(null,send,inst_37282,false);
var inst_37284 = new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168).cljs$core$IFn$_invoke$arity$1(opts);
var inst_37285 = cljs.core.async.timeout.call(null,inst_37284);
var state_37292__$1 = (function (){var statearr_37296 = state_37292;
(statearr_37296[(9)] = inst_37283);

(statearr_37296[(10)] = inst_37279);

return statearr_37296;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37292__$1,(11),inst_37285);
} else {
if((state_val_37293 === (1))){
var state_37292__$1 = state_37292;
var statearr_37297_37315 = state_37292__$1;
(statearr_37297_37315[(2)] = null);

(statearr_37297_37315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (4))){
var inst_37253 = (state_37292[(2)]);
var inst_37254 = huginn.mqtt.mqtt_topic.call(null,opts,topic_name);
var inst_37255 = cljs.core._EQ_.call(null,"state",topic_name);
var state_37292__$1 = (function (){var statearr_37298 = state_37292;
(statearr_37298[(7)] = inst_37254);

(statearr_37298[(8)] = inst_37253);

return statearr_37298;
})();
if(inst_37255){
var statearr_37299_37316 = state_37292__$1;
(statearr_37299_37316[(1)] = (5));

} else {
var statearr_37300_37317 = state_37292__$1;
(statearr_37300_37317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (6))){
var state_37292__$1 = state_37292;
var statearr_37301_37318 = state_37292__$1;
(statearr_37301_37318[(2)] = null);

(statearr_37301_37318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (3))){
var inst_37290 = (state_37292[(2)]);
var state_37292__$1 = state_37292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37292__$1,inst_37290);
} else {
if((state_val_37293 === (2))){
var state_37292__$1 = state_37292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37292__$1,(4),t_chan);
} else {
if((state_val_37293 === (11))){
var inst_37287 = (state_37292[(2)]);
var state_37292__$1 = (function (){var statearr_37302 = state_37292;
(statearr_37302[(11)] = inst_37287);

return statearr_37302;
})();
var statearr_37303_37319 = state_37292__$1;
(statearr_37303_37319[(2)] = null);

(statearr_37303_37319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (9))){
var inst_37254 = (state_37292[(7)]);
var inst_37253 = (state_37292[(8)]);
var inst_37260 = (state_37292[(2)]);
var inst_37261 = (function (){var teles = inst_37253;
var topic = inst_37254;
var qos = ({"qos": (1)});
var e__35547__auto__ = inst_37260;
return ((function (teles,topic,qos,e__35547__auto__,inst_37254,inst_37253,inst_37260,state_val_37293,c__36917__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__35547__auto__], null);
});
;})(teles,topic,qos,e__35547__auto__,inst_37254,inst_37253,inst_37260,state_val_37293,c__36917__auto__))
})();
var inst_37262 = (new cljs.core.Delay(inst_37261,null));
var inst_37263 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init9984232462607037143.clj",150,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37262,null,-1302411821);
var inst_37264 = (function(){throw inst_37260})();
var state_37292__$1 = (function (){var statearr_37304 = state_37292;
(statearr_37304[(12)] = inst_37263);

return statearr_37304;
})();
var statearr_37305_37320 = state_37292__$1;
(statearr_37305_37320[(2)] = inst_37264);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37292__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (5))){
var inst_37254 = (state_37292[(7)]);
var inst_37253 = (state_37292[(8)]);
var inst_37257 = (function (){var teles = inst_37253;
var topic = inst_37254;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_37254,inst_37253,state_val_37293,c__36917__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pushing state",topic], null);
});
;})(teles,topic,qos,inst_37254,inst_37253,state_val_37293,c__36917__auto__))
})();
var inst_37258 = (new cljs.core.Delay(inst_37257,null));
var inst_37259 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init9984232462607037143.clj",149,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37258,null,72171757);
var state_37292__$1 = (function (){var statearr_37306 = state_37292;
(statearr_37306[(13)] = inst_37259);

return statearr_37306;
})();
var statearr_37307_37321 = state_37292__$1;
(statearr_37307_37321[(2)] = null);

(statearr_37307_37321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (10))){
var inst_37254 = (state_37292[(7)]);
var inst_37253 = (state_37292[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37292,(9),Error,null,(8));
var inst_37268 = cljs.core.PersistentVector.EMPTY;
var inst_37269 = cljs.core.comp.call(null,cljs.core.type,new cljs.core.Keyword(null,"payload","payload",-383036092));
var inst_37270 = cljs.core.map.call(null,inst_37269);
var inst_37271 = cljs.core.into.call(null,inst_37268,inst_37270,inst_37253);
var inst_37272 = (function (){var teles = inst_37253;
var topic = inst_37254;
var qos = ({"qos": (1)});
var result__35585__auto__ = inst_37271;
return ((function (teles,topic,qos,result__35585__auto__,inst_37254,inst_37253,_,inst_37268,inst_37269,inst_37270,inst_37271,state_val_37293,c__36917__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Keyword(null,"payload","payload",-383036092))),new cljs.core.Symbol(null,"teles","teles",1601787367,null)),"=>",result__35585__auto__], null);
});
;})(teles,topic,qos,result__35585__auto__,inst_37254,inst_37253,_,inst_37268,inst_37269,inst_37270,inst_37271,state_val_37293,c__36917__auto__))
})();
var inst_37273 = (new cljs.core.Delay(inst_37272,null));
var inst_37274 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init9984232462607037143.clj",150,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37273,null,-1943942624);
var state_37292__$1 = (function (){var statearr_37308 = state_37292;
(statearr_37308[(14)] = inst_37274);

return statearr_37308;
})();
var statearr_37309_37322 = state_37292__$1;
(statearr_37309_37322[(2)] = inst_37271);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37292__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37293 === (8))){
var inst_37276 = (state_37292[(2)]);
var state_37292__$1 = state_37292;
var statearr_37310_37323 = state_37292__$1;
(statearr_37310_37323[(2)] = inst_37276);

(statearr_37310_37323[(1)] = (7));


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
var statearr_37311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37311[(0)] = huginn$mqtt$sender_$_state_machine__36895__auto__);

(statearr_37311[(1)] = (1));

return statearr_37311;
});
var huginn$mqtt$sender_$_state_machine__36895__auto____1 = (function (state_37292){
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
}catch (e37312){if((e37312 instanceof Object)){
var ex__36898__auto__ = e37312;
var statearr_37313_37324 = state_37292;
(statearr_37313_37324[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37325 = state_37292;
state_37292 = G__37325;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$mqtt$sender_$_state_machine__36895__auto__ = function(state_37292){
switch(arguments.length){
case 0:
return huginn$mqtt$sender_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$mqtt$sender_$_state_machine__36895__auto____1.call(this,state_37292);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$sender_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$sender_$_state_machine__36895__auto____0;
huginn$mqtt$sender_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$sender_$_state_machine__36895__auto____1;
return huginn$mqtt$sender_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto__))
})();
var state__36919__auto__ = (function (){var statearr_37314 = f__36918__auto__.call(null);
(statearr_37314[(6)] = c__36917__auto__);

return statearr_37314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto__))
);

return c__36917__auto__;
});
huginn.mqtt.state_send = cljs.core.partial.call(null,huginn.mqtt.sender,"state");
huginn.mqtt.tele_send = cljs.core.partial.call(null,huginn.mqtt.sender,"events");
huginn.mqtt.clean_up = (function huginn$mqtt$clean_up(p__37326){
var map__37327 = p__37326;
var map__37327__$1 = ((((!((map__37327 == null)))?((((map__37327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37327.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37327):map__37327);
var system = map__37327__$1;
var send_chan = cljs.core.get.call(null,map__37327__$1,new cljs.core.Keyword(null,"send-chan","send-chan",1681189602));
var recv_chan = cljs.core.get.call(null,map__37327__$1,new cljs.core.Keyword(null,"recv-chan","recv-chan",869238850));
var telemetry_chan = cljs.core.get.call(null,map__37327__$1,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503));
var state_chan = cljs.core.get.call(null,map__37327__$1,new cljs.core.Keyword(null,"state-chan","state-chan",-1042477017));
var client_atom = cljs.core.get.call(null,map__37327__$1,new cljs.core.Keyword(null,"client-atom","client-atom",-1733084110));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,"Killing system","huginn.mqtt","/tmp/form-init9984232462607037143.clj",170,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__37327,map__37327__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(map__37327,map__37327__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
,null)),null,892106948);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__37327,map__37327__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (c){
return cljs.core.async.close_BANG_.call(null,c);
});})(map__37327,map__37327__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
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
