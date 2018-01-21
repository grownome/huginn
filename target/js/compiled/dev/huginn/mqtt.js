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
huginn.mqtt.client_id = (function huginn$mqtt$client_id(p__45711){
var map__45712 = p__45711;
var map__45712__$1 = ((((!((map__45712 == null)))?((((map__45712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45712.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45712):map__45712);
var opts = map__45712__$1;
var projectId = cljs.core.get.call(null,map__45712__$1,new cljs.core.Keyword(null,"projectId","projectId",-1551013096));
var registryId = cljs.core.get.call(null,map__45712__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var cloudRegion = cljs.core.get.call(null,map__45712__$1,new cljs.core.Keyword(null,"cloudRegion","cloudRegion",-857757214));
var deviceId = cljs.core.get.call(null,map__45712__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["projects/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(projectId),"/locations/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cloudRegion),"/registries/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId)].join('');
});
huginn.mqtt.config_chan = (function huginn$mqtt$config_chan(p__45714){
var map__45715 = p__45714;
var map__45715__$1 = ((((!((map__45715 == null)))?((((map__45715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45715.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45715):map__45715);
var opts = map__45715__$1;
var deviceId = cljs.core.get.call(null,map__45715__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"/config"].join('');
});
huginn.mqtt.client_handlers = (function huginn$mqtt$client_handlers(success_fn,fail,send,recv){
return new cljs.core.PersistentArrayMap(null, 4, ["connect",(function (success){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connected"], null);
}),null)),null,-1332403527);

if(cljs.core.truth_(success)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection success"], null);
}),null)),null,-149852883);

return success_fn.call(null);
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection failure"], null);
}),null)),null,1055698169);

return fail.call(null);
}
}),"close",(function (){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",39,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["client connection closed"], null);
}),null)),null,547639385);
}),"error",(function (err){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",40,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error: ",err], null);
}),null)),null,1970824947);
}),"message",(function (topic,message,packet){
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__){
return (function (state_45723){
var state_val_45724 = (state_45723[(1)]);
if((state_val_45724 === (1))){
var inst_45717 = [new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"packet","packet",-533558081)];
var inst_45718 = [topic,message,packet];
var inst_45719 = cljs.core.PersistentHashMap.fromArrays(inst_45717,inst_45718);
var state_45723__$1 = state_45723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45723__$1,(2),recv,inst_45719);
} else {
if((state_val_45724 === (2))){
var inst_45721 = (state_45723[(2)]);
var state_45723__$1 = state_45723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45723__$1,inst_45721);
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
var statearr_45725 = [null,null,null,null,null,null,null];
(statearr_45725[(0)] = huginn$mqtt$client_handlers_$_state_machine__36498__auto__);

(statearr_45725[(1)] = (1));

return statearr_45725;
});
var huginn$mqtt$client_handlers_$_state_machine__36498__auto____1 = (function (state_45723){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_45723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e45726){if((e45726 instanceof Object)){
var ex__36501__auto__ = e45726;
var statearr_45727_45729 = state_45723;
(statearr_45727_45729[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45730 = state_45723;
state_45723 = G__45730;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$client_handlers_$_state_machine__36498__auto__ = function(state_45723){
switch(arguments.length){
case 0:
return huginn$mqtt$client_handlers_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$client_handlers_$_state_machine__36498__auto____1.call(this,state_45723);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_handlers_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_handlers_$_state_machine__36498__auto____0;
huginn$mqtt$client_handlers_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_handlers_$_state_machine__36498__auto____1;
return huginn$mqtt$client_handlers_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_45728 = f__36588__auto__.call(null);
(statearr_45728[(6)] = c__36587__auto__);

return statearr_45728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
})], null);
});
huginn.mqtt.add_handlers = (function huginn$mqtt$add_handlers(client,handlers){
var seq__45731 = cljs.core.seq.call(null,handlers);
var chunk__45732 = null;
var count__45733 = (0);
var i__45734 = (0);
while(true){
if((i__45734 < count__45733)){
var vec__45735 = cljs.core._nth.call(null,chunk__45732,i__45734);
var key = cljs.core.nth.call(null,vec__45735,(0),null);
var hand = cljs.core.nth.call(null,vec__45735,(1),null);
client.on(key,hand);

var G__45741 = seq__45731;
var G__45742 = chunk__45732;
var G__45743 = count__45733;
var G__45744 = (i__45734 + (1));
seq__45731 = G__45741;
chunk__45732 = G__45742;
count__45733 = G__45743;
i__45734 = G__45744;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__45731);
if(temp__5457__auto__){
var seq__45731__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45731__$1)){
var c__31803__auto__ = cljs.core.chunk_first.call(null,seq__45731__$1);
var G__45745 = cljs.core.chunk_rest.call(null,seq__45731__$1);
var G__45746 = c__31803__auto__;
var G__45747 = cljs.core.count.call(null,c__31803__auto__);
var G__45748 = (0);
seq__45731 = G__45745;
chunk__45732 = G__45746;
count__45733 = G__45747;
i__45734 = G__45748;
continue;
} else {
var vec__45738 = cljs.core.first.call(null,seq__45731__$1);
var key = cljs.core.nth.call(null,vec__45738,(0),null);
var hand = cljs.core.nth.call(null,vec__45738,(1),null);
client.on(key,hand);

var G__45749 = cljs.core.next.call(null,seq__45731__$1);
var G__45750 = null;
var G__45751 = (0);
var G__45752 = (0);
seq__45731 = G__45749;
chunk__45732 = G__45750;
count__45733 = G__45751;
i__45734 = G__45752;
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
var map__45753 = huginn.mqtt.build_client.call(null,opts);
var map__45753__$1 = ((((!((map__45753 == null)))?((((map__45753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45753):map__45753);
var init = map__45753__$1;
var time = cljs.core.get.call(null,map__45753__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var client = cljs.core.get.call(null,map__45753__$1,new cljs.core.Keyword(null,"client","client",-1323448117));
var handlers = huginn.mqtt.client_handlers.call(null,((function (map__45753,map__45753__$1,init,time,client){
return (function (){
return resolve.call(null,client);
});})(map__45753,map__45753__$1,init,time,client))
,((function (map__45753,map__45753__$1,init,time,client){
return (function (){
return reject.call(null,new cljs.core.Keyword(null,"client-fail","client-fail",1564298304));
});})(map__45753,map__45753__$1,init,time,client))
,send,recv);
client.subscribe(huginn.mqtt.config_chan.call(null,opts));

return huginn.mqtt.add_handlers.call(null,client,handlers);
}));
});
huginn.mqtt.payload_root = (function huginn$mqtt$payload_root(p__45755){
var map__45756 = p__45755;
var map__45756__$1 = ((((!((map__45756 == null)))?((((map__45756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45756):map__45756);
var opts = map__45756__$1;
var registryId = cljs.core.get.call(null,map__45756__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var deviceId = cljs.core.get.call(null,map__45756__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"-payload"].join('');
});
/**
 * msg-type can be 'state' for state updates
 * or 'events' to publish telemetry
 */
huginn.mqtt.mqtt_topic = (function huginn$mqtt$mqtt_topic(p__45758,msg_type){
var map__45759 = p__45758;
var map__45759__$1 = ((((!((map__45759 == null)))?((((map__45759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45759):map__45759);
var opts = map__45759__$1;
var deviceId = cljs.core.get.call(null,map__45759__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
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
huginn.mqtt.publish_one = (function huginn$mqtt$publish_one(client,p__45761){
var map__45762 = p__45761;
var map__45762__$1 = ((((!((map__45762 == null)))?((((map__45762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45762):map__45762);
var p = map__45762__$1;
var topic = cljs.core.get.call(null,map__45762__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
var payload = cljs.core.get.call(null,map__45762__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
var qos = cljs.core.get.call(null,map__45762__$1,new cljs.core.Keyword(null,"qos","qos",-2124292319));
return client.publish(topic,payload,qos);
});
huginn.mqtt.publisher = (function huginn$mqtt$publisher(client_atom,send_chan){
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__){
return (function (state_45773){
var state_val_45774 = (state_45773[(1)]);
if((state_val_45774 === (1))){
var state_45773__$1 = state_45773;
var statearr_45775_45782 = state_45773__$1;
(statearr_45775_45782[(2)] = null);

(statearr_45775_45782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45774 === (2))){
var state_45773__$1 = state_45773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45773__$1,(4),send_chan);
} else {
if((state_val_45774 === (3))){
var inst_45771 = (state_45773[(2)]);
var state_45773__$1 = state_45773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45773__$1,inst_45771);
} else {
if((state_val_45774 === (4))){
var inst_45766 = (state_45773[(2)]);
var inst_45767 = cljs.core.deref.call(null,client_atom);
var inst_45768 = huginn.mqtt.publish_one.call(null,inst_45767,inst_45766);
var state_45773__$1 = (function (){var statearr_45776 = state_45773;
(statearr_45776[(7)] = inst_45768);

return statearr_45776;
})();
var statearr_45777_45783 = state_45773__$1;
(statearr_45777_45783[(2)] = null);

(statearr_45777_45783[(1)] = (2));


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
var statearr_45778 = [null,null,null,null,null,null,null,null];
(statearr_45778[(0)] = huginn$mqtt$publisher_$_state_machine__36498__auto__);

(statearr_45778[(1)] = (1));

return statearr_45778;
});
var huginn$mqtt$publisher_$_state_machine__36498__auto____1 = (function (state_45773){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_45773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e45779){if((e45779 instanceof Object)){
var ex__36501__auto__ = e45779;
var statearr_45780_45784 = state_45773;
(statearr_45780_45784[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45785 = state_45773;
state_45773 = G__45785;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$publisher_$_state_machine__36498__auto__ = function(state_45773){
switch(arguments.length){
case 0:
return huginn$mqtt$publisher_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$publisher_$_state_machine__36498__auto____1.call(this,state_45773);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$publisher_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$publisher_$_state_machine__36498__auto____0;
huginn$mqtt$publisher_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$publisher_$_state_machine__36498__auto____1;
return huginn$mqtt$publisher_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_45781 = f__36588__auto__.call(null);
(statearr_45781[(6)] = c__36587__auto__);

return statearr_45781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
});
/**
 * loops and refreshs the client atom every token experation
 */
huginn.mqtt.client_refresher = (function huginn$mqtt$client_refresher(client_atom,p__45786,send,recv){
var map__45787 = p__45786;
var map__45787__$1 = ((((!((map__45787 == null)))?((((map__45787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45787.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45787):map__45787);
var opts = map__45787__$1;
var tokenExpMins = cljs.core.get.call(null,map__45787__$1,new cljs.core.Keyword(null,"tokenExpMins","tokenExpMins",-1638711857));
var delayMs = cljs.core.get.call(null,map__45787__$1,new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168));
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__,map__45787,map__45787__$1,opts,tokenExpMins,delayMs){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__,map__45787,map__45787__$1,opts,tokenExpMins,delayMs){
return (function (state_45807){
var state_val_45808 = (state_45807[(1)]);
if((state_val_45808 === (1))){
var state_45807__$1 = state_45807;
var statearr_45809_45816 = state_45807__$1;
(statearr_45809_45816[(2)] = null);

(statearr_45809_45816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (2))){
var inst_45790 = (tokenExpMins * (1000));
var inst_45791 = (inst_45790 * (60));
var inst_45792 = cljs.core.async.timeout.call(null,inst_45791);
var state_45807__$1 = state_45807;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45807__$1,(4),inst_45792);
} else {
if((state_val_45808 === (3))){
var inst_45805 = (state_45807[(2)]);
var state_45807__$1 = state_45807;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45807__$1,inst_45805);
} else {
if((state_val_45808 === (4))){
var inst_45794 = (state_45807[(2)]);
var inst_45795 = (function (){var wait = inst_45794;
return ((function (wait,inst_45794,state_val_45808,c__36587__auto__,map__45787,map__45787__$1,opts,tokenExpMins,delayMs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\tRefreshing token after ",((tokenExpMins * (1000)) * (60)),"ms"], null);
});
;})(wait,inst_45794,state_val_45808,c__36587__auto__,map__45787,map__45787__$1,opts,tokenExpMins,delayMs))
})();
var inst_45796 = (new cljs.core.Delay(inst_45795,null));
var inst_45797 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",113,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_45796,null,1987915413);
var inst_45798 = (function (){var wait = inst_45794;
return ((function (wait,inst_45794,inst_45795,inst_45796,inst_45797,state_val_45808,c__36587__auto__,map__45787,map__45787__$1,opts,tokenExpMins,delayMs){
return (function (resolve,reject){
return cljs.core.swap_BANG_.call(null,client_atom,((function (wait,inst_45794,inst_45795,inst_45796,inst_45797,state_val_45808,c__36587__auto__,map__45787,map__45787__$1,opts,tokenExpMins,delayMs){
return (function (c){
c.end();

return resolve.call(null);
});})(wait,inst_45794,inst_45795,inst_45796,inst_45797,state_val_45808,c__36587__auto__,map__45787,map__45787__$1,opts,tokenExpMins,delayMs))
);
});
;})(wait,inst_45794,inst_45795,inst_45796,inst_45797,state_val_45808,c__36587__auto__,map__45787,map__45787__$1,opts,tokenExpMins,delayMs))
})();
var inst_45799 = promesa.core.promise.call(null,inst_45798);
var inst_45800 = (function (){var wait = inst_45794;
return ((function (wait,inst_45794,inst_45795,inst_45796,inst_45797,inst_45798,inst_45799,state_val_45808,c__36587__auto__,map__45787,map__45787__$1,opts,tokenExpMins,delayMs){
return (function (){
return huginn.mqtt.init_client.call(null,opts,send,recv);
});
;})(wait,inst_45794,inst_45795,inst_45796,inst_45797,inst_45798,inst_45799,state_val_45808,c__36587__auto__,map__45787,map__45787__$1,opts,tokenExpMins,delayMs))
})();
var inst_45801 = (function (){var wait = inst_45794;
return ((function (wait,inst_45794,inst_45795,inst_45796,inst_45797,inst_45798,inst_45799,inst_45800,state_val_45808,c__36587__auto__,map__45787,map__45787__$1,opts,tokenExpMins,delayMs){
return (function (client){
return cljs.core.reset_BANG_.call(null,client_atom,client);
});
;})(wait,inst_45794,inst_45795,inst_45796,inst_45797,inst_45798,inst_45799,inst_45800,state_val_45808,c__36587__auto__,map__45787,map__45787__$1,opts,tokenExpMins,delayMs))
})();
var inst_45802 = promesa.core.chain.call(null,inst_45799,inst_45800,inst_45801);
var state_45807__$1 = (function (){var statearr_45810 = state_45807;
(statearr_45810[(7)] = inst_45797);

(statearr_45810[(8)] = inst_45802);

return statearr_45810;
})();
var statearr_45811_45817 = state_45807__$1;
(statearr_45811_45817[(2)] = null);

(statearr_45811_45817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__36587__auto__,map__45787,map__45787__$1,opts,tokenExpMins,delayMs))
;
return ((function (switch__36497__auto__,c__36587__auto__,map__45787,map__45787__$1,opts,tokenExpMins,delayMs){
return (function() {
var huginn$mqtt$client_refresher_$_state_machine__36498__auto__ = null;
var huginn$mqtt$client_refresher_$_state_machine__36498__auto____0 = (function (){
var statearr_45812 = [null,null,null,null,null,null,null,null,null];
(statearr_45812[(0)] = huginn$mqtt$client_refresher_$_state_machine__36498__auto__);

(statearr_45812[(1)] = (1));

return statearr_45812;
});
var huginn$mqtt$client_refresher_$_state_machine__36498__auto____1 = (function (state_45807){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_45807);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e45813){if((e45813 instanceof Object)){
var ex__36501__auto__ = e45813;
var statearr_45814_45818 = state_45807;
(statearr_45814_45818[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45819 = state_45807;
state_45807 = G__45819;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$client_refresher_$_state_machine__36498__auto__ = function(state_45807){
switch(arguments.length){
case 0:
return huginn$mqtt$client_refresher_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$client_refresher_$_state_machine__36498__auto____1.call(this,state_45807);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$client_refresher_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$client_refresher_$_state_machine__36498__auto____0;
huginn$mqtt$client_refresher_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$client_refresher_$_state_machine__36498__auto____1;
return huginn$mqtt$client_refresher_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__,map__45787,map__45787__$1,opts,tokenExpMins,delayMs))
})();
var state__36589__auto__ = (function (){var statearr_45815 = f__36588__auto__.call(null);
(statearr_45815[(6)] = c__36587__auto__);

return statearr_45815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__,map__45787,map__45787__$1,opts,tokenExpMins,delayMs))
);

return c__36587__auto__;
});
huginn.mqtt.tele_chan = (function huginn$mqtt$tele_chan(opts){
var temp_chan = cljs.core.async.chan.call(null);
var out_chan = cljs.core.async.chan.call(null);
var c__36587__auto___45852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto___45852,temp_chan,out_chan){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto___45852,temp_chan,out_chan){
return (function (state_45833){
var state_val_45834 = (state_45833[(1)]);
if((state_val_45834 === (1))){
var state_45833__$1 = state_45833;
var statearr_45835_45853 = state_45833__$1;
(statearr_45835_45853[(2)] = null);

(statearr_45835_45853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (2))){
var inst_45821 = huginn.mqtt.node$module$systeminformation.cpuTemperature.call(null);
var inst_45822 = cljs.core.partial.call(null,huginn.mqtt.prep_temps,opts);
var inst_45823 = (function (){return ((function (inst_45821,inst_45822,state_val_45834,c__36587__auto___45852,temp_chan,out_chan){
return (function (vs){
var c__36587__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto____$1,inst_45821,inst_45822,state_val_45834,c__36587__auto___45852,temp_chan,out_chan){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto____$1,inst_45821,inst_45822,state_val_45834,c__36587__auto___45852,temp_chan,out_chan){
return (function (state_45839){
var state_val_45840 = (state_45839[(1)]);
if((state_val_45840 === (1))){
var state_45839__$1 = state_45839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45839__$1,(2),temp_chan,vs);
} else {
if((state_val_45840 === (2))){
var inst_45837 = (state_45839[(2)]);
var state_45839__$1 = state_45839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45839__$1,inst_45837);
} else {
return null;
}
}
});})(c__36587__auto____$1,inst_45821,inst_45822,state_val_45834,c__36587__auto___45852,temp_chan,out_chan))
;
return ((function (switch__36497__auto__,c__36587__auto____$1,inst_45821,inst_45822,state_val_45834,c__36587__auto___45852,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__36498__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__36498__auto____0 = (function (){
var statearr_45841 = [null,null,null,null,null,null,null];
(statearr_45841[(0)] = huginn$mqtt$tele_chan_$_state_machine__36498__auto__);

(statearr_45841[(1)] = (1));

return statearr_45841;
});
var huginn$mqtt$tele_chan_$_state_machine__36498__auto____1 = (function (state_45839){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_45839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e45842){if((e45842 instanceof Object)){
var ex__36501__auto__ = e45842;
var statearr_45843_45854 = state_45839;
(statearr_45843_45854[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45855 = state_45839;
state_45839 = G__45855;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__36498__auto__ = function(state_45839){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__36498__auto____1.call(this,state_45839);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__36498__auto____0;
huginn$mqtt$tele_chan_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__36498__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto____$1,inst_45821,inst_45822,state_val_45834,c__36587__auto___45852,temp_chan,out_chan))
})();
var state__36589__auto__ = (function (){var statearr_45844 = f__36588__auto__.call(null);
(statearr_45844[(6)] = c__36587__auto____$1);

return statearr_45844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto____$1,inst_45821,inst_45822,state_val_45834,c__36587__auto___45852,temp_chan,out_chan))
);

return c__36587__auto____$1;
});
;})(inst_45821,inst_45822,state_val_45834,c__36587__auto___45852,temp_chan,out_chan))
})();
var inst_45824 = promesa.core.chain.call(null,inst_45821,inst_45822,inst_45823);
var state_45833__$1 = (function (){var statearr_45845 = state_45833;
(statearr_45845[(7)] = inst_45824);

return statearr_45845;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45833__$1,(4),temp_chan);
} else {
if((state_val_45834 === (3))){
var inst_45831 = (state_45833[(2)]);
var state_45833__$1 = state_45833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45833__$1,inst_45831);
} else {
if((state_val_45834 === (4))){
var inst_45826 = (state_45833[(2)]);
var state_45833__$1 = state_45833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45833__$1,(5),out_chan,inst_45826);
} else {
if((state_val_45834 === (5))){
var inst_45828 = (state_45833[(2)]);
var state_45833__$1 = (function (){var statearr_45846 = state_45833;
(statearr_45846[(8)] = inst_45828);

return statearr_45846;
})();
var statearr_45847_45856 = state_45833__$1;
(statearr_45847_45856[(2)] = null);

(statearr_45847_45856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__36587__auto___45852,temp_chan,out_chan))
;
return ((function (switch__36497__auto__,c__36587__auto___45852,temp_chan,out_chan){
return (function() {
var huginn$mqtt$tele_chan_$_state_machine__36498__auto__ = null;
var huginn$mqtt$tele_chan_$_state_machine__36498__auto____0 = (function (){
var statearr_45848 = [null,null,null,null,null,null,null,null,null];
(statearr_45848[(0)] = huginn$mqtt$tele_chan_$_state_machine__36498__auto__);

(statearr_45848[(1)] = (1));

return statearr_45848;
});
var huginn$mqtt$tele_chan_$_state_machine__36498__auto____1 = (function (state_45833){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_45833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e45849){if((e45849 instanceof Object)){
var ex__36501__auto__ = e45849;
var statearr_45850_45857 = state_45833;
(statearr_45850_45857[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45858 = state_45833;
state_45833 = G__45858;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$tele_chan_$_state_machine__36498__auto__ = function(state_45833){
switch(arguments.length){
case 0:
return huginn$mqtt$tele_chan_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$tele_chan_$_state_machine__36498__auto____1.call(this,state_45833);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$tele_chan_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$tele_chan_$_state_machine__36498__auto____0;
huginn$mqtt$tele_chan_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$tele_chan_$_state_machine__36498__auto____1;
return huginn$mqtt$tele_chan_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto___45852,temp_chan,out_chan))
})();
var state__36589__auto__ = (function (){var statearr_45851 = f__36588__auto__.call(null);
(statearr_45851[(6)] = c__36587__auto___45852);

return statearr_45851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto___45852,temp_chan,out_chan))
);


return out_chan;
});
huginn.mqtt.sender = (function huginn$mqtt$sender(topic_name,opts,send,t_chan){
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__){
return (function (state_45899){
var state_val_45900 = (state_45899[(1)]);
if((state_val_45900 === (7))){
var inst_45861 = (state_45899[(7)]);
var inst_45862 = (state_45899[(8)]);
var inst_45887 = (state_45899[(2)]);
var inst_45888 = (function (){var teles = inst_45861;
var topic = inst_45862;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_45861,inst_45862,inst_45887,state_val_45900,c__36587__auto__){
return (function (t){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"topic","topic",-1960480691),topic),new cljs.core.Keyword(null,"qos","qos",-2124292319),qos);
});
;})(teles,topic,qos,inst_45861,inst_45862,inst_45887,state_val_45900,c__36587__auto__))
})();
var inst_45889 = cljs.core.map.call(null,inst_45888,inst_45861);
var inst_45890 = cljs.core.async.onto_chan.call(null,send,inst_45889,false);
var inst_45891 = new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168).cljs$core$IFn$_invoke$arity$1(opts);
var inst_45892 = cljs.core.async.timeout.call(null,inst_45891);
var state_45899__$1 = (function (){var statearr_45901 = state_45899;
(statearr_45901[(9)] = inst_45887);

(statearr_45901[(10)] = inst_45890);

return statearr_45901;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45899__$1,(11),inst_45892);
} else {
if((state_val_45900 === (1))){
var state_45899__$1 = state_45899;
var statearr_45902_45920 = state_45899__$1;
(statearr_45902_45920[(2)] = null);

(statearr_45902_45920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45900 === (4))){
var inst_45861 = (state_45899[(2)]);
var inst_45862 = huginn.mqtt.mqtt_topic.call(null,opts,topic_name);
var inst_45863 = cljs.core._EQ_.call(null,"state",topic_name);
var state_45899__$1 = (function (){var statearr_45903 = state_45899;
(statearr_45903[(7)] = inst_45861);

(statearr_45903[(8)] = inst_45862);

return statearr_45903;
})();
if(inst_45863){
var statearr_45904_45921 = state_45899__$1;
(statearr_45904_45921[(1)] = (5));

} else {
var statearr_45905_45922 = state_45899__$1;
(statearr_45905_45922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45900 === (6))){
var state_45899__$1 = state_45899;
var statearr_45906_45923 = state_45899__$1;
(statearr_45906_45923[(2)] = null);

(statearr_45906_45923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45900 === (3))){
var inst_45897 = (state_45899[(2)]);
var state_45899__$1 = state_45899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45899__$1,inst_45897);
} else {
if((state_val_45900 === (2))){
var state_45899__$1 = state_45899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45899__$1,(4),t_chan);
} else {
if((state_val_45900 === (11))){
var inst_45894 = (state_45899[(2)]);
var state_45899__$1 = (function (){var statearr_45907 = state_45899;
(statearr_45907[(11)] = inst_45894);

return statearr_45907;
})();
var statearr_45908_45924 = state_45899__$1;
(statearr_45908_45924[(2)] = null);

(statearr_45908_45924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45900 === (9))){
var inst_45861 = (state_45899[(7)]);
var inst_45862 = (state_45899[(8)]);
var inst_45868 = (state_45899[(2)]);
var inst_45869 = (function (){var teles = inst_45861;
var topic = inst_45862;
var qos = ({"qos": (1)});
var e__44167__auto__ = inst_45868;
return ((function (teles,topic,qos,e__44167__auto__,inst_45861,inst_45862,inst_45868,state_val_45900,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__44167__auto__], null);
});
;})(teles,topic,qos,e__44167__auto__,inst_45861,inst_45862,inst_45868,state_val_45900,c__36587__auto__))
})();
var inst_45870 = (new cljs.core.Delay(inst_45869,null));
var inst_45871 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",147,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_45870,null,968981597);
var inst_45872 = (function(){throw inst_45868})();
var state_45899__$1 = (function (){var statearr_45909 = state_45899;
(statearr_45909[(12)] = inst_45871);

return statearr_45909;
})();
var statearr_45910_45925 = state_45899__$1;
(statearr_45910_45925[(2)] = inst_45872);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45899__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45900 === (5))){
var inst_45861 = (state_45899[(7)]);
var inst_45862 = (state_45899[(8)]);
var inst_45865 = (function (){var teles = inst_45861;
var topic = inst_45862;
var qos = ({"qos": (1)});
return ((function (teles,topic,qos,inst_45861,inst_45862,state_val_45900,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pushing state",topic], null);
});
;})(teles,topic,qos,inst_45861,inst_45862,state_val_45900,c__36587__auto__))
})();
var inst_45866 = (new cljs.core.Delay(inst_45865,null));
var inst_45867 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",146,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_45866,null,-1675366125);
var state_45899__$1 = (function (){var statearr_45911 = state_45899;
(statearr_45911[(13)] = inst_45867);

return statearr_45911;
})();
var statearr_45912_45926 = state_45899__$1;
(statearr_45912_45926[(2)] = null);

(statearr_45912_45926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45900 === (10))){
var inst_45861 = (state_45899[(7)]);
var inst_45862 = (state_45899[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45899,(9),Error,null,(8));
var inst_45876 = cljs.core.PersistentVector.EMPTY;
var inst_45877 = cljs.core.comp.call(null,cljs.core.type,new cljs.core.Keyword(null,"payload","payload",-383036092));
var inst_45878 = cljs.core.map.call(null,inst_45877);
var inst_45879 = cljs.core.into.call(null,inst_45876,inst_45878,inst_45861);
var inst_45880 = (function (){var teles = inst_45861;
var topic = inst_45862;
var qos = ({"qos": (1)});
var result__44205__auto__ = inst_45879;
return ((function (teles,topic,qos,result__44205__auto__,inst_45861,inst_45862,_,inst_45876,inst_45877,inst_45878,inst_45879,state_val_45900,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Keyword(null,"payload","payload",-383036092))),new cljs.core.Symbol(null,"teles","teles",1601787367,null)),"=>",result__44205__auto__], null);
});
;})(teles,topic,qos,result__44205__auto__,inst_45861,inst_45862,_,inst_45876,inst_45877,inst_45878,inst_45879,state_val_45900,c__36587__auto__))
})();
var inst_45881 = (new cljs.core.Delay(inst_45880,null));
var inst_45882 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.mqtt","/tmp/form-init1252977175527440591.clj",147,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_45881,null,-722143666);
var state_45899__$1 = (function (){var statearr_45913 = state_45899;
(statearr_45913[(14)] = inst_45882);

return statearr_45913;
})();
var statearr_45914_45927 = state_45899__$1;
(statearr_45914_45927[(2)] = inst_45879);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45899__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45900 === (8))){
var inst_45884 = (state_45899[(2)]);
var state_45899__$1 = state_45899;
var statearr_45915_45928 = state_45899__$1;
(statearr_45915_45928[(2)] = inst_45884);

(statearr_45915_45928[(1)] = (7));


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
var statearr_45916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45916[(0)] = huginn$mqtt$sender_$_state_machine__36498__auto__);

(statearr_45916[(1)] = (1));

return statearr_45916;
});
var huginn$mqtt$sender_$_state_machine__36498__auto____1 = (function (state_45899){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_45899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e45917){if((e45917 instanceof Object)){
var ex__36501__auto__ = e45917;
var statearr_45918_45929 = state_45899;
(statearr_45918_45929[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45930 = state_45899;
state_45899 = G__45930;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$mqtt$sender_$_state_machine__36498__auto__ = function(state_45899){
switch(arguments.length){
case 0:
return huginn$mqtt$sender_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$mqtt$sender_$_state_machine__36498__auto____1.call(this,state_45899);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt$sender_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt$sender_$_state_machine__36498__auto____0;
huginn$mqtt$sender_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt$sender_$_state_machine__36498__auto____1;
return huginn$mqtt$sender_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_45919 = f__36588__auto__.call(null);
(statearr_45919[(6)] = c__36587__auto__);

return statearr_45919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
});
huginn.mqtt.state_send = cljs.core.partial.call(null,huginn.mqtt.sender,"state");
huginn.mqtt.tele_send = cljs.core.partial.call(null,huginn.mqtt.sender,"events");
huginn.mqtt.clean_up = (function huginn$mqtt$clean_up(p__45931){
var map__45932 = p__45931;
var map__45932__$1 = ((((!((map__45932 == null)))?((((map__45932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45932):map__45932);
var system = map__45932__$1;
var send_chan = cljs.core.get.call(null,map__45932__$1,new cljs.core.Keyword(null,"send-chan","send-chan",1681189602));
var recv_chan = cljs.core.get.call(null,map__45932__$1,new cljs.core.Keyword(null,"recv-chan","recv-chan",869238850));
var telemetry_chan = cljs.core.get.call(null,map__45932__$1,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503));
var state_chan = cljs.core.get.call(null,map__45932__$1,new cljs.core.Keyword(null,"state-chan","state-chan",-1042477017));
var client_atom = cljs.core.get.call(null,map__45932__$1,new cljs.core.Keyword(null,"client-atom","client-atom",-1733084110));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,"Killing system","huginn.mqtt","/tmp/form-init1252977175527440591.clj",166,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__45932,map__45932__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (){
return cljs.core.PersistentVector.EMPTY;
});})(map__45932,map__45932__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
,null)),null,-506488923);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (map__45932,map__45932__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom){
return (function (c){
return cljs.core.async.close_BANG_.call(null,c);
});})(map__45932,map__45932__$1,system,send_chan,recv_chan,telemetry_chan,state_chan,client_atom))
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
