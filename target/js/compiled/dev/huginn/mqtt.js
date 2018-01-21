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
huginn.mqtt.client_id = (function huginn$mqtt$client_id(p__44786){
var map__44787 = p__44786;
var map__44787__$1 = ((((!((map__44787 == null)))?((((map__44787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44787):map__44787);
var opts = map__44787__$1;
var projectId = cljs.core.get.call(null,map__44787__$1,new cljs.core.Keyword(null,"projectId","projectId",-1551013096));
var registryId = cljs.core.get.call(null,map__44787__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var cloudRegion = cljs.core.get.call(null,map__44787__$1,new cljs.core.Keyword(null,"cloudRegion","cloudRegion",-857757214));
var deviceId = cljs.core.get.call(null,map__44787__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["projects/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(projectId),"/locations/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cloudRegion),"/registries/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId)].join('');
});
huginn.mqtt.config_chan = (function huginn$mqtt$config_chan(p__44789){
var map__44790 = p__44789;
var map__44790__$1 = ((((!((map__44790 == null)))?((((map__44790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44790):map__44790);
var opts = map__44790__$1;
var deviceId = cljs.core.get.call(null,map__44790__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"/config"].join('');
});
huginn.mqtt.client_handlers = (function huginn$mqtt$client_handlers(success_fn,fail,send,recv){
return new cljs.core.PersistentArrayMap(null, 4, ["connect",(function (success){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connected"], null);
}),null)),null,1011455165);

if(cljs.core.truth_(success)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection success"], null);
}),null)),null,-1489509384);

return success_fn.call(null);
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection failure"], null);
}),null)),null,-1480534503);

return fail.call(null);
}
}),"close",(function (){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",39,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection closed"], null);
}),null)),null,-916235599);
}),"error",(function (err){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error: ",err], null);
}),null)),null,-669743603);
}),"message",(function (topic,message,packet){
try{var result__44205__auto___44805 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,message,packet], null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__44205__auto___44805){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"message","message",1234475525,null),new cljs.core.Symbol(null,"packet","packet",1106973446,null)], null),"=>",result__44205__auto___44805], null);
});})(result__44205__auto___44805))
,null)),null,2064302304);

}catch (e44792){if((e44792 instanceof Error)){
var e__44167__auto___44806 = e44792;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__44167__auto___44806){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__44167__auto___44806], null);
});})(e__44167__auto___44806))
,null)),null,-2094674746);

throw e__44167__auto___44806;
} else {
throw e44792;

}
}
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__){
return (function (state_44799){
var state_val_44800 = (state_44799[(1)]);
if((state_val_44800 === (1))){
var inst_44793 = [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"packet","packet",-533558081)];
var inst_44794 = [topic,message,packet];
var inst_44795 = cljs.core.PersistentHashMap.fromArrays(inst_44793,inst_44794);
var state_44799__$1 = state_44799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44799__$1,(2),recv,inst_44795);
} else {
if((state_val_44800 === (2))){
var inst_44797 = (state_44799[(2)]);
var state_44799__$1 = state_44799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44799__$1,inst_44797);
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
var statearr_44801 = [null,null,null,null,null,null,null];
(statearr_44801[(0)] = huginn$mqtt$client_handlers_$_state_machine__36498__auto__);

(statearr_44801[(1)] = (1));

return statearr_44801;
});
var huginn$mqtt$client_handlers_$_state_machine__36498__auto____1 = (function (state_44799){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_44799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e44802){if((e44802 instanceof Object)){
var ex__36501__auto__ = e44802;
var statearr_44803_44807 = state_44799;
(statearr_44803_44807[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44808 = state_44799;
state_44799 = G__44808;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$client_handlers_$_state_machine__36498__auto__ = function(state_44799){
switch(arguments.length){
case 0:
return huginn$mqtt$client_handlers_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$client_handlers_$_state_machine__36498__auto____1.call(this,state_44799);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_handlers_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_handlers_$_state_machine__36498__auto____0;
huginn$mqtt$client_handlers_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_handlers_$_state_machine__36498__auto____1;
return huginn$mqtt$client_handlers_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_44804 = f__36588__auto__.call(null);
(statearr_44804[(6)] = c__36587__auto__);

return statearr_44804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
})], null);
});
huginn.mqtt.add_handlers = (function huginn$mqtt$add_handlers(client,handlers){
var seq__44809 = cljs.core.seq.call(null,handlers);
var chunk__44810 = null;
var count__44811 = (0);
var i__44812 = (0);
while(true){
if((i__44812 < count__44811)){
var vec__44813 = cljs.core._nth.call(null,chunk__44810,i__44812);
var key = cljs.core.nth.call(null,vec__44813,(0),null);
var hand = cljs.core.nth.call(null,vec__44813,(1),null);
client.on(key,hand);

var G__44819 = seq__44809;
var G__44820 = chunk__44810;
var G__44821 = count__44811;
var G__44822 = (i__44812 + (1));
seq__44809 = G__44819;
chunk__44810 = G__44820;
count__44811 = G__44821;
i__44812 = G__44822;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__44809);
if(temp__5457__auto__){
var seq__44809__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44809__$1)){
var c__31803__auto__ = cljs.core.chunk_first.call(null,seq__44809__$1);
var G__44823 = cljs.core.chunk_rest.call(null,seq__44809__$1);
var G__44824 = c__31803__auto__;
var G__44825 = cljs.core.count.call(null,c__31803__auto__);
var G__44826 = (0);
seq__44809 = G__44823;
chunk__44810 = G__44824;
count__44811 = G__44825;
i__44812 = G__44826;
continue;
} else {
var vec__44816 = cljs.core.first.call(null,seq__44809__$1);
var key = cljs.core.nth.call(null,vec__44816,(0),null);
var hand = cljs.core.nth.call(null,vec__44816,(1),null);
client.on(key,hand);

var G__44827 = cljs.core.next.call(null,seq__44809__$1);
var G__44828 = null;
var G__44829 = (0);
var G__44830 = (0);
seq__44809 = G__44827;
chunk__44810 = G__44828;
count__44811 = G__44829;
i__44812 = G__44830;
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
var map__44831 = huginn.mqtt.build_client.call(null,opts);
var map__44831__$1 = ((((!((map__44831 == null)))?((((map__44831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44831):map__44831);
var init = map__44831__$1;
var time = cljs.core.get.call(null,map__44831__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var client = cljs.core.get.call(null,map__44831__$1,new cljs.core.Keyword(null,"client","client",-1323448117));
var handlers = huginn.mqtt.client_handlers.call(null,((function (map__44831,map__44831__$1,init,time,client){
return (function (){
return resolve.call(null,client);
});})(map__44831,map__44831__$1,init,time,client))
,((function (map__44831,map__44831__$1,init,time,client){
return (function (){
return reject.call(null,new cljs.core.Keyword(null,"client-fail","client-fail",1564298304));
});})(map__44831,map__44831__$1,init,time,client))
,send,recv);
client.subscribe(huginn.mqtt.config_chan.call(null,opts));

return huginn.mqtt.add_handlers.call(null,client,handlers);
}));
});
huginn.mqtt.payload_root = (function huginn$mqtt$payload_root(p__44833){
var map__44834 = p__44833;
var map__44834__$1 = ((((!((map__44834 == null)))?((((map__44834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44834):map__44834);
var opts = map__44834__$1;
var registryId = cljs.core.get.call(null,map__44834__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var deviceId = cljs.core.get.call(null,map__44834__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"-payload"].join('');
});
/**
 * msg-type can be 'state' for state updates
 * or 'events' to publish telemetry
 */
huginn.mqtt.mqtt_topic = (function huginn$mqtt$mqtt_topic(p__44836,msg_type){
var map__44837 = p__44836;
var map__44837__$1 = ((((!((map__44837 == null)))?((((map__44837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44837):map__44837);
var opts = map__44837__$1;
var deviceId = cljs.core.get.call(null,map__44837__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
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
huginn.mqtt.publish_one = (function huginn$mqtt$publish_one(client,p__44839){
var map__44840 = p__44839;
var map__44840__$1 = ((((!((map__44840 == null)))?((((map__44840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44840):map__44840);
var p = map__44840__$1;
var topic = cljs.core.get.call(null,map__44840__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var payload = cljs.core.get.call(null,map__44840__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var qos = cljs.core.get.call(null,map__44840__$1,new cljs.core.Keyword(null,"qos","qos",-2124292319));
return client.publish(topic,payload,qos);
});
huginn.mqtt.publisher = (function huginn$mqtt$publisher(client_atom,send_chan){
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__){
return (function (state_44851){
var state_val_44852 = (state_44851[(1)]);
if((state_val_44852 === (1))){
var state_44851__$1 = state_44851;
var statearr_44853_44860 = state_44851__$1;
(statearr_44853_44860[(2)] = null);

(statearr_44853_44860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44852 === (2))){
var state_44851__$1 = state_44851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44851__$1,(4),send_chan);
} else {
if((state_val_44852 === (3))){
var inst_44849 = (state_44851[(2)]);
var state_44851__$1 = state_44851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44851__$1,inst_44849);
} else {
if((state_val_44852 === (4))){
var inst_44844 = (state_44851[(2)]);
var inst_44845 = cljs.core.deref.call(null,client_atom);
var inst_44846 = huginn.mqtt.publish_one.call(null,inst_44845,inst_44844);
var state_44851__$1 = (function (){var statearr_44854 = state_44851;
(statearr_44854[(7)] = inst_44846);

return statearr_44854;
})();
var statearr_44855_44861 = state_44851__$1;
(statearr_44855_44861[(2)] = null);

(statearr_44855_44861[(1)] = (2));


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
var statearr_44856 = [null,null,null,null,null,null,null,null];
(statearr_44856[(0)] = huginn$mqtt$publisher_$_state_machine__36498__auto__);

(statearr_44856[(1)] = (1));

return statearr_44856;
});
var huginn$mqtt$publisher_$_state_machine__36498__auto____1 = (function (state_44851){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_44851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e44857){if((e44857 instanceof Object)){
var ex__36501__auto__ = e44857;
var statearr_44858_44862 = state_44851;
(statearr_44858_44862[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44863 = state_44851;
state_44851 = G__44863;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$publisher_$_state_machine__36498__auto__ = function(state_44851){
switch(arguments.length){
case 0:
return huginn$mqtt$publisher_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$publisher_$_state_machine__36498__auto____1.call(this,state_44851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$publisher_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$publisher_$_state_machine__36498__auto____0;
huginn$mqtt$publisher_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$publisher_$_state_machine__36498__auto____1;
return huginn$mqtt$publisher_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_44859 = f__36588__auto__.call(null);
(statearr_44859[(6)] = c__36587__auto__);

return statearr_44859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
});
/**
 * loops and refreshs the client atom every token experation
 */
huginn.mqtt.client_refresher = (function huginn$mqtt$client_refresher(client_atom,p__44864,send,recv){
var map__44865 = p__44864;
var map__44865__$1 = ((((!((map__44865 == null)))?((((map__44865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44865):map__44865);
var opts = map__44865__$1;
var tokenExpMins = cljs.core.get.call(null,map__44865__$1,new cljs.core.Keyword(null,"tokenExpMins","tokenExpMins",-1638711857));
var delayMs = cljs.core.get.call(null,map__44865__$1,new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168));
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__,map__44865,map__44865__$1,opts,tokenExpMins,delayMs){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__,map__44865,map__44865__$1,opts,tokenExpMins,delayMs){
return (function (state_44885){
var state_val_44886 = (state_44885[(1)]);
if((state_val_44886 === (1))){
var state_44885__$1 = state_44885;
var statearr_44887_44894 = state_44885__$1;
(statearr_44887_44894[(2)] = null);

(statearr_44887_44894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44886 === (2))){
var inst_44868 = (tokenExpMins * (1000));
var inst_44869 = (inst_44868 * (60));
var inst_44870 = cljs.core.async.timeout.call(null,inst_44869);
var state_44885__$1 = state_44885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44885__$1,(4),inst_44870);
} else {
if((state_val_44886 === (3))){
var inst_44883 = (state_44885[(2)]);
var state_44885__$1 = state_44885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44885__$1,inst_44883);
} else {
if((state_val_44886 === (4))){
var inst_44872 = (state_44885[(2)]);
var inst_44873 = (function (){var wait = inst_44872;
return ((function (wait,inst_44872,state_val_44886,c__36587__auto__,map__44865,map__44865__$1,opts,tokenExpMins,delayMs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\tRefreshing token after ",((tokenExpMins * (1000)) * (60)),"ms"], null);
});
;})(wait,inst_44872,state_val_44886,c__36587__auto__,map__44865,map__44865__$1,opts,tokenExpMins,delayMs))
})();
var inst_44874 = (new cljs.core.Delay(inst_44873,null));
var inst_44875 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",114,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_44874,null,-1956196062);
var inst_44876 = (function (){var wait = inst_44872;
return ((function (wait,inst_44872,inst_44873,inst_44874,inst_44875,state_val_44886,c__36587__auto__,map__44865,map__44865__$1,opts,tokenExpMins,delayMs){
return (function (resolve,reject){
return cljs.core.swap_BANG_.call(null,client_atom,((function (wait,inst_44872,inst_44873,inst_44874,inst_44875,state_val_44886,c__36587__auto__,map__44865,map__44865__$1,opts,tokenExpMins,delayMs){
return (function (c){
c.end();

return resolve.call(null);
});})(wait,inst_44872,inst_44873,inst_44874,inst_44875,state_val_44886,c__36587__auto__,map__44865,map__44865__$1,opts,tokenExpMins,delayMs))
);
});
;})(wait,inst_44872,inst_44873,inst_44874,inst_44875,state_val_44886,c__36587__auto__,map__44865,map__44865__$1,opts,tokenExpMins,delayMs))
})();
var inst_44877 = promesa.core.promise.call(null,inst_44876);
var inst_44878 = (function (){var wait = inst_44872;
return ((function (wait,inst_44872,inst_44873,inst_44874,inst_44875,inst_44876,inst_44877,state_val_44886,c__36587__auto__,map__44865,map__44865__$1,opts,tokenExpMins,delayMs){
return (function (){
return huginn.mqtt.init_client.call(null,opts,send,recv);
});
;})(wait,inst_44872,inst_44873,inst_44874,inst_44875,inst_44876,inst_44877,state_val_44886,c__36587__auto__,map__44865,map__44865__$1,opts,tokenExpMins,delayMs))
})();
var inst_44879 = (function (){var wait = inst_44872;
return ((function (wait,inst_44872,inst_44873,inst_44874,inst_44875,inst_44876,inst_44877,inst_44878,state_val_44886,c__36587__auto__,map__44865,map__44865__$1,opts,tokenExpMins,delayMs){
return (function (client){
return cljs.core.reset_BANG_.call(null,client_atom,client);
});
;})(wait,inst_44872,inst_44873,inst_44874,inst_44875,inst_44876,inst_44877,inst_44878,state_val_44886,c__36587__auto__,map__44865,map__44865__$1,opts,tokenExpMins,delayMs))
})();
var inst_44880 = promesa.core.chain.call(null,inst_44877,inst_44878,inst_44879);
var state_44885__$1 = (function (){var statearr_44888 = state_44885;
(statearr_44888[(7)] = inst_44875);

(statearr_44888[(8)] = inst_44880);

return statearr_44888;
})();
var statearr_44889_44895 = state_44885__$1;
(statearr_44889_44895[(2)] = null);

(statearr_44889_44895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__36587__auto__,map__44865,map__44865__$1,opts,tokenExpMins,delayMs))
;
return ((function (switch__36497__auto__,c__36587__auto__,map__44865,map__44865__$1,opts,tokenExpMins,delayMs){
return (function() {
var huginn$mqtt$client_refresher_$_state_machine__36498__auto__ = null;
var huginn$mqtt$client_refresher_$_state_machine__36498__auto____0 = (function (){
var statearr_44890 = [null,null,null,null,null,null,null,null,null];
(statearr_44890[(0)] = huginn$mqtt$client_refresher_$_state_machine__36498__auto__);

(statearr_44890[(1)] = (1));

return statearr_44890;
});
var huginn$mqtt$client_refresher_$_state_machine__36498__auto____1 = (function (state_44885){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_44885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e44891){if((e44891 instanceof Object)){
var ex__36501__auto__ = e44891;
var statearr_44892_44896 = state_44885;
(statearr_44892_44896[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44897 = state_44885;
state_44885 = G__44897;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$client_refresher_$_state_machine__36498__auto__ = function(state_44885){
switch(arguments.length){
case 0:
return huginn$mqtt$client_refresher_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$client_refresher_$_state_machine__36498__auto____1.call(this,state_44885);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_refresher_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_refresher_$_state_machine__36498__auto____0;
huginn$mqtt$client_refresher_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_refresher_$_state_machine__36498__auto____1;
return huginn$mqtt$client_refresher_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__,map__44865,map__44865__$1,opts,tokenExpMins,delayMs))
})();
var state__36589__auto__ = (function (){var statearr_44893 = f__36588__auto__.call(null);
(statearr_44893[(6)] = c__36587__auto__);

return statearr_44893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__,map__44865,map__44865__$1,opts,tokenExpMins,delayMs))
);

return c__36587__auto__;
});
huginn.mqtt.tele_chan = (function huginn$mqtt$tele_chan(opts){
var temp_chan = cljs.core.async.chan.call(null);
var out_chan = cljs.core.async.chan.call(null);
var c__36587__auto___44930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto___44930,temp_chan,out_chan){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto___44930,temp_chan,out_chan){
return (function (state_44911){
var state_val_44912 = (state_44911[(1)]);
if((state_val_44912 === (1))){
var state_44911__$1 = state_44911;
var statearr_44913_44931 = state_44911__$1;
(statearr_44913_44931[(2)] = null);

(statearr_44913_44931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44912 === (2))){
var inst_44899 = huginn.mqtt.node$module$systeminformation.cpuTemperature.call(null);
var inst_44900 = cljs.core.partial.call(null,huginn.mqtt.prep_temps,opts);
var inst_44901 = (function (){return ((function (inst_44899,inst_44900,state_val_44912,c__36587__auto___44930,temp_chan,out_chan){
return (function (vs){
var c__36587__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto____$1,inst_44899,inst_44900,state_val_44912,c__36587__auto___44930,temp_chan,out_chan){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto____$1,inst_44899,inst_44900,state_val_44912,c__36587__auto___44930,temp_chan,out_chan){
return (function (state_44917){
var state_val_44918 = (state_44917[(1)]);
if((state_val_44918 === (1))){
var state_44917__$1 = state_44917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44917__$1,(2),temp_chan,vs);
} else {
if((state_val_44918 === (2))){
var inst_44915 = (state_44917[(2)]);
var state_44917__$1 = state_44917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44917__$1,inst_44915);
} else {
return null;
}
}
});})(c__36587__auto____$1,inst_44899,inst_44900,state_val_44912,c__36587__auto___44930,temp_chan,out_chan))
;
return ((function (switch__36497__auto__,c__36587__auto____$1,inst_44899,inst_44900,state_val_44912,c__36587__auto___44930,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__36498__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__36498__auto____0 = (function (){
var statearr_44919 = [null,null,null,null,null,null,null];
(statearr_44919[(0)] = huginn$mqtt$tele_chan_$_state_machine__36498__auto__);

(statearr_44919[(1)] = (1));

return statearr_44919;
});
var huginn$mqtt$tele_chan_$_state_machine__36498__auto____1 = (function (state_44917){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_44917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e44920){if((e44920 instanceof Object)){
var ex__36501__auto__ = e44920;
var statearr_44921_44932 = state_44917;
(statearr_44921_44932[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44933 = state_44917;
state_44917 = G__44933;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__36498__auto__ = function(state_44917){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__36498__auto____1.call(this,state_44917);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__36498__auto____0;
huginn$mqtt$tele_chan_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__36498__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto____$1,inst_44899,inst_44900,state_val_44912,c__36587__auto___44930,temp_chan,out_chan))
})();
var state__36589__auto__ = (function (){var statearr_44922 = f__36588__auto__.call(null);
(statearr_44922[(6)] = c__36587__auto____$1);

return statearr_44922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto____$1,inst_44899,inst_44900,state_val_44912,c__36587__auto___44930,temp_chan,out_chan))
);

return c__36587__auto____$1;
});
;})(inst_44899,inst_44900,state_val_44912,c__36587__auto___44930,temp_chan,out_chan))
})();
var inst_44902 = promesa.core.chain.call(null,inst_44899,inst_44900,inst_44901);
var state_44911__$1 = (function (){var statearr_44923 = state_44911;
(statearr_44923[(7)] = inst_44902);

return statearr_44923;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44911__$1,(4),temp_chan);
} else {
if((state_val_44912 === (3))){
var inst_44909 = (state_44911[(2)]);
var state_44911__$1 = state_44911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44911__$1,inst_44909);
} else {
if((state_val_44912 === (4))){
var inst_44904 = (state_44911[(2)]);
var state_44911__$1 = state_44911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44911__$1,(5),out_chan,inst_44904);
} else {
if((state_val_44912 === (5))){
var inst_44906 = (state_44911[(2)]);
var state_44911__$1 = (function (){var statearr_44924 = state_44911;
(statearr_44924[(8)] = inst_44906);

return statearr_44924;
})();
var statearr_44925_44934 = state_44911__$1;
(statearr_44925_44934[(2)] = null);

(statearr_44925_44934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__36587__auto___44930,temp_chan,out_chan))
;
return ((function (switch__36497__auto__,c__36587__auto___44930,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__36498__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__36498__auto____0 = (function (){
var statearr_44926 = [null,null,null,null,null,null,null,null,null];
(statearr_44926[(0)] = huginn$mqtt$tele_chan_$_state_machine__36498__auto__);

(statearr_44926[(1)] = (1));

return statearr_44926;
});
var huginn$mqtt$tele_chan_$_state_machine__36498__auto____1 = (function (state_44911){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_44911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e44927){if((e44927 instanceof Object)){
var ex__36501__auto__ = e44927;
var statearr_44928_44935 = state_44911;
(statearr_44928_44935[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44936 = state_44911;
state_44911 = G__44936;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__36498__auto__ = function(state_44911){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__36498__auto____1.call(this,state_44911);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__36498__auto____0;
huginn$mqtt$tele_chan_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__36498__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto___44930,temp_chan,out_chan))
})();
var state__36589__auto__ = (function (){var statearr_44929 = f__36588__auto__.call(null);
(statearr_44929[(6)] = c__36587__auto___44930);

return statearr_44929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto___44930,temp_chan,out_chan))
);


return out_chan;
});
huginn.mqtt.sender = (function huginn$mqtt$sender(topic_name,opts,send,t_chan){
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__){
return (function (state_44977){
var state_val_44978 = (state_44977[(1)]);
if((state_val_44978 === (7))){
var inst_44940 = (state_44977[(7)]);
var inst_44939 = (state_44977[(8)]);
var inst_44965 = (state_44977[(2)]);
var inst_44966 = (function (){var teles = inst_44939;
var topic = inst_44940;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_44940,inst_44939,inst_44965,state_val_44978,c__36587__auto__){
return (function (t){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"topic","topic",-1960480691),topic),new cljs.core.Keyword(null,"qos","qos",-2124292319),qos);
});
;})(teles,topic,qos,inst_44940,inst_44939,inst_44965,state_val_44978,c__36587__auto__))
})();
var inst_44967 = cljs.core.map.call(null,inst_44966,inst_44939);
var inst_44968 = cljs.core.async.onto_chan.call(null,send,inst_44967,false);
var inst_44969 = new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168).cljs$core$IFn$_invoke$arity$1(opts);
var inst_44970 = cljs.core.async.timeout.call(null,inst_44969);
var state_44977__$1 = (function (){var statearr_44979 = state_44977;
(statearr_44979[(9)] = inst_44968);

(statearr_44979[(10)] = inst_44965);

return statearr_44979;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44977__$1,(11),inst_44970);
} else {
if((state_val_44978 === (1))){
var state_44977__$1 = state_44977;
var statearr_44980_44998 = state_44977__$1;
(statearr_44980_44998[(2)] = null);

(statearr_44980_44998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44978 === (4))){
var inst_44939 = (state_44977[(2)]);
var inst_44940 = huginn.mqtt.mqtt_topic.call(null,opts,topic_name);
var inst_44941 = cljs.core._EQ_.call(null,"state",topic_name);
var state_44977__$1 = (function (){var statearr_44981 = state_44977;
(statearr_44981[(7)] = inst_44940);

(statearr_44981[(8)] = inst_44939);

return statearr_44981;
})();
if(inst_44941){
var statearr_44982_44999 = state_44977__$1;
(statearr_44982_44999[(1)] = (5));

} else {
var statearr_44983_45000 = state_44977__$1;
(statearr_44983_45000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44978 === (6))){
var state_44977__$1 = state_44977;
var statearr_44984_45001 = state_44977__$1;
(statearr_44984_45001[(2)] = null);

(statearr_44984_45001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44978 === (3))){
var inst_44975 = (state_44977[(2)]);
var state_44977__$1 = state_44977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44977__$1,inst_44975);
} else {
if((state_val_44978 === (2))){
var state_44977__$1 = state_44977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44977__$1,(4),t_chan);
} else {
if((state_val_44978 === (11))){
var inst_44972 = (state_44977[(2)]);
var state_44977__$1 = (function (){var statearr_44985 = state_44977;
(statearr_44985[(11)] = inst_44972);

return statearr_44985;
})();
var statearr_44986_45002 = state_44977__$1;
(statearr_44986_45002[(2)] = null);

(statearr_44986_45002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44978 === (9))){
var inst_44940 = (state_44977[(7)]);
var inst_44939 = (state_44977[(8)]);
var inst_44946 = (state_44977[(2)]);
var inst_44947 = (function (){var teles = inst_44939;
var topic = inst_44940;
var qos = ({"qos": (1)});
var e__44167__auto__ = inst_44946;
return ((function (teles,topic,qos,e__44167__auto__,inst_44940,inst_44939,inst_44946,state_val_44978,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__44167__auto__], null);
});
;})(teles,topic,qos,e__44167__auto__,inst_44940,inst_44939,inst_44946,state_val_44978,c__36587__auto__))
})();
var inst_44948 = (new cljs.core.Delay(inst_44947,null));
var inst_44949 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",148,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_44948,null,-1995932601);
var inst_44950 = (function(){throw inst_44946})();
var state_44977__$1 = (function (){var statearr_44987 = state_44977;
(statearr_44987[(12)] = inst_44949);

return statearr_44987;
})();
var statearr_44988_45003 = state_44977__$1;
(statearr_44988_45003[(2)] = inst_44950);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44977__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44978 === (5))){
var inst_44940 = (state_44977[(7)]);
var inst_44939 = (state_44977[(8)]);
var inst_44943 = (function (){var teles = inst_44939;
var topic = inst_44940;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_44940,inst_44939,state_val_44978,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pushing state",topic], null);
});
;})(teles,topic,qos,inst_44940,inst_44939,state_val_44978,c__36587__auto__))
})();
var inst_44944 = (new cljs.core.Delay(inst_44943,null));
var inst_44945 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",147,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_44944,null,410486323);
var state_44977__$1 = (function (){var statearr_44989 = state_44977;
(statearr_44989[(13)] = inst_44945);

return statearr_44989;
})();
var statearr_44990_45004 = state_44977__$1;
(statearr_44990_45004[(2)] = null);

(statearr_44990_45004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44978 === (10))){
var inst_44940 = (state_44977[(7)]);
var inst_44939 = (state_44977[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44977,(9),Error,null,(8));
var inst_44954 = cljs.core.PersistentVector.EMPTY;
var inst_44955 = cljs.core.comp.call(null,cljs.core.type,new cljs.core.Keyword(null,"payload","payload",-383036092));
var inst_44956 = cljs.core.map.call(null,inst_44955);
var inst_44957 = cljs.core.into.call(null,inst_44954,inst_44956,inst_44939);
var inst_44958 = (function (){var teles = inst_44939;
var topic = inst_44940;
var qos = ({"qos": (1)});
var result__44205__auto__ = inst_44957;
return ((function (teles,topic,qos,result__44205__auto__,inst_44940,inst_44939,_,inst_44954,inst_44955,inst_44956,inst_44957,state_val_44978,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Keyword(null,"payload","payload",-383036092))),new cljs.core.Symbol(null,"teles","teles",1601787367,null)),"=>",result__44205__auto__], null);
});
;})(teles,topic,qos,result__44205__auto__,inst_44940,inst_44939,_,inst_44954,inst_44955,inst_44956,inst_44957,state_val_44978,c__36587__auto__))
})();
var inst_44959 = (new cljs.core.Delay(inst_44958,null));
var inst_44960 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",148,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_44959,null,-2121771644);
var state_44977__$1 = (function (){var statearr_44991 = state_44977;
(statearr_44991[(14)] = inst_44960);

return statearr_44991;
})();
var statearr_44992_45005 = state_44977__$1;
(statearr_44992_45005[(2)] = inst_44957);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44977__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44978 === (8))){
var inst_44962 = (state_44977[(2)]);
var state_44977__$1 = state_44977;
var statearr_44993_45006 = state_44977__$1;
(statearr_44993_45006[(2)] = inst_44962);

(statearr_44993_45006[(1)] = (7));


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
var statearr_44994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44994[(0)] = huginn$mqtt$sender_$_state_machine__36498__auto__);

(statearr_44994[(1)] = (1));

return statearr_44994;
});
var huginn$mqtt$sender_$_state_machine__36498__auto____1 = (function (state_44977){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_44977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e44995){if((e44995 instanceof Object)){
var ex__36501__auto__ = e44995;
var statearr_44996_45007 = state_44977;
(statearr_44996_45007[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45008 = state_44977;
state_44977 = G__45008;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$sender_$_state_machine__36498__auto__ = function(state_44977){
switch(arguments.length){
case 0:
return huginn$mqtt$sender_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$sender_$_state_machine__36498__auto____1.call(this,state_44977);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$sender_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$sender_$_state_machine__36498__auto____0;
huginn$mqtt$sender_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$sender_$_state_machine__36498__auto____1;
return huginn$mqtt$sender_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_44997 = f__36588__auto__.call(null);
(statearr_44997[(6)] = c__36587__auto__);

return statearr_44997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
});
huginn.mqtt.state_send = cljs.core.partial.call(null,huginn.mqtt.sender,"state");
huginn.mqtt.tele_send = cljs.core.partial.call(null,huginn.mqtt.sender,"events");
huginn.mqtt.clean_up = (function huginn$mqtt$clean_up(p__45009){
var map__45010 = p__45009;
var map__45010__$1 = ((((!((map__45010 == null)))?((((map__45010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45010):map__45010);
var system = map__45010__$1;
var send_chan = cljs.core.get.call(null,map__45010__$1,new cljs.core.Keyword(null,"send-chan","send-chan",1681189602));
var recv_chan = cljs.core.get.call(null,map__45010__$1,new cljs.core.Keyword(null,"recv-chan","recv-chan",869238850));
var telemetry_chan = cljs.core.get.call(null,map__45010__$1,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503));
var state_chan = cljs.core.get.call(null,map__45010__$1,new cljs.core.Keyword(null,"state-chan","state-chan",-1042477017));
var client_atom = cljs.core.get.call(null,map__45010__$1,new cljs.core.Keyword(null,"client-atom","client-atom",-1733084110));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,"Killing system","huginn.mqtt","/tmp/form-init1252977175527440591.clj",169,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__45010,map__45010__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(map__45010,map__45010__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
,null)),null,854225444);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__45010,map__45010__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (c){
return cljs.core.async.close_BANG_.call(null,c);
});})(map__45010,map__45010__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
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
