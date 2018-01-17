// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('huginn.core');
goog.require('cljs.core');
goog.require('promesa.core');
goog.require('cljs_node_io.core');
huginn.core.node$module$mqtt = require('mqtt');
huginn.core.node$module$systeminformation = require('systeminformation');
huginn.core.node$module$jsonwebtoken = require('jsonwebtoken');
huginn.core.default_options = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"messageType","messageType",1748163586),new cljs.core.Keyword(null,"cloudRegion","cloudRegion",-857757214),new cljs.core.Keyword(null,"algorithm","algorithm",739262820),new cljs.core.Keyword(null,"mqttBridgeHostname","mqttBridgeHostname",1814277029),new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168),new cljs.core.Keyword(null,"deviceId","deviceId",1909987208),new cljs.core.Keyword(null,"registryId","registryId",-1767694006),new cljs.core.Keyword(null,"tokenExpMins","tokenExpMins",-1638711857),new cljs.core.Keyword(null,"projectId","projectId",-1551013096),new cljs.core.Keyword(null,"privateKeyFile","privateKeyFile",2040006267),new cljs.core.Keyword(null,"mqttBridgePort","mqttBridgePort",1181584124)],["events","us-central1","RS256","mqtt.googleapis.com",((1000) * (60)),(function (){var or__19889__auto__ = process.env.DEVICE_ID;
if(cljs.core.truth_(or__19889__auto__)){
return or__19889__auto__;
} else {
return "test-device";
}
})(),(function (){var or__19889__auto__ = process.env.REGISTRY_ID;
if(cljs.core.truth_(or__19889__auto__)){
return or__19889__auto__;
} else {
return "nomes";
}
})(),(20),(function (){var or__19889__auto__ = process.env.GCLOUD_PROJECT;
if(cljs.core.truth_(or__19889__auto__)){
return or__19889__auto__;
} else {
var or__19889__auto____$1 = process.env.GCLOUD_PROJECT;
if(cljs.core.truth_(or__19889__auto____$1)){
return or__19889__auto____$1;
} else {
return "grownome";
}
}
})(),(function (){var or__19889__auto__ = process.env.PRIVATE_KEY_FILE;
if(cljs.core.truth_(or__19889__auto__)){
return or__19889__auto__;
} else {
return "rsa_private.pem";
}
})(),(8883)]);
huginn.core.client_id = (function huginn$core$client_id(p__23668){
var map__23669 = p__23668;
var map__23669__$1 = ((((!((map__23669 == null)))?((((map__23669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23669):map__23669);
var opts = map__23669__$1;
var projectId = cljs.core.get.call(null,map__23669__$1,new cljs.core.Keyword(null,"projectId","projectId",-1551013096));
var registryId = cljs.core.get.call(null,map__23669__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var cloudRegion = cljs.core.get.call(null,map__23669__$1,new cljs.core.Keyword(null,"cloudRegion","cloudRegion",-857757214));
var deviceId = cljs.core.get.call(null,map__23669__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["projects/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(projectId),"/locations/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cloudRegion),"/registries/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId)].join('');
});
huginn.core.round_now = (function huginn$core$round_now(){
return ((Date.now() / (1000)) | (0));
});
huginn.core.create_jwt = (function huginn$core$create_jwt(p__23671){
var map__23672 = p__23671;
var map__23672__$1 = ((((!((map__23672 == null)))?((((map__23672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23672):map__23672);
var opts = map__23672__$1;
var projectId = cljs.core.get.call(null,map__23672__$1,new cljs.core.Keyword(null,"projectId","projectId",-1551013096));
var tokenExpMins = cljs.core.get.call(null,map__23672__$1,new cljs.core.Keyword(null,"tokenExpMins","tokenExpMins",-1638711857));
var privateKeyFile = cljs.core.get.call(null,map__23672__$1,new cljs.core.Keyword(null,"privateKeyFile","privateKeyFile",2040006267));
var algorithm = cljs.core.get.call(null,map__23672__$1,new cljs.core.Keyword(null,"algorithm","algorithm",739262820));
var token = ({"iat": huginn.core.round_now.call(null), "exp": ((tokenExpMins * (60)) + huginn.core.round_now.call(null)), "aud": projectId});
var privKey = cljs_node_io.core.slurp.call(null,privateKeyFile);
return huginn.core.node$module$jsonwebtoken.sign.call(null,token,privKey,({"algorithm": algorithm}));
});
huginn.core.connection_args = (function huginn$core$connection_args(p__23674){
var map__23675 = p__23674;
var map__23675__$1 = ((((!((map__23675 == null)))?((((map__23675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23675.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23675):map__23675);
var opts = map__23675__$1;
var mqttBridgeHostname = cljs.core.get.call(null,map__23675__$1,new cljs.core.Keyword(null,"mqttBridgeHostname","mqttBridgeHostname",1814277029));
var mqttBridgePort = cljs.core.get.call(null,map__23675__$1,new cljs.core.Keyword(null,"mqttBridgePort","mqttBridgePort",1181584124));
var projectId = cljs.core.get.call(null,map__23675__$1,new cljs.core.Keyword(null,"projectId","projectId",-1551013096));
var privateKeyFile = cljs.core.get.call(null,map__23675__$1,new cljs.core.Keyword(null,"privateKeyFile","privateKeyFile",2040006267));
var algorithm = cljs.core.get.call(null,map__23675__$1,new cljs.core.Keyword(null,"algorithm","algorithm",739262820));
return ({"host": mqttBridgeHostname, "port": mqttBridgePort, "clientId": huginn.core.client_id.call(null,opts), "username": "unused", "password": huginn.core.create_jwt.call(null,opts), "protocol": "mqtts", "secureProtocol": "TLSv1_2_method"});
});
huginn.core.client_handlers = (function huginn$core$client_handlers(main_loop){
return new cljs.core.PersistentArrayMap(null, 4, ["connect",(function (success){
cljs.core.println.call(null,"connected");

if(cljs.core.truth_(success)){
return main_loop.call(null);
} else {
return cljs.core.println.call(null,"client not connected");
}
}),"close",(function (){
return cljs.core.println.call(null,"closed");
}),"error",(function (err){
return cljs.core.println.call(null,["error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join(''));
}),"message",(function (topic,message,packet){
return cljs.core.println.call(null,"got message");
})], null);
});
huginn.core.add_handlers = (function huginn$core$add_handlers(client,handlers){
var seq__23677 = cljs.core.seq.call(null,handlers);
var chunk__23678 = null;
var count__23679 = (0);
var i__23680 = (0);
while(true){
if((i__23680 < count__23679)){
var vec__23681 = cljs.core._nth.call(null,chunk__23678,i__23680);
var key = cljs.core.nth.call(null,vec__23681,(0),null);
var hand = cljs.core.nth.call(null,vec__23681,(1),null);
client.on(key,hand);

var G__23687 = seq__23677;
var G__23688 = chunk__23678;
var G__23689 = count__23679;
var G__23690 = (i__23680 + (1));
seq__23677 = G__23687;
chunk__23678 = G__23688;
count__23679 = G__23689;
i__23680 = G__23690;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23677);
if(temp__5457__auto__){
var seq__23677__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23677__$1)){
var c__20820__auto__ = cljs.core.chunk_first.call(null,seq__23677__$1);
var G__23691 = cljs.core.chunk_rest.call(null,seq__23677__$1);
var G__23692 = c__20820__auto__;
var G__23693 = cljs.core.count.call(null,c__20820__auto__);
var G__23694 = (0);
seq__23677 = G__23691;
chunk__23678 = G__23692;
count__23679 = G__23693;
i__23680 = G__23694;
continue;
} else {
var vec__23684 = cljs.core.first.call(null,seq__23677__$1);
var key = cljs.core.nth.call(null,vec__23684,(0),null);
var hand = cljs.core.nth.call(null,vec__23684,(1),null);
client.on(key,hand);

var G__23695 = cljs.core.next.call(null,seq__23677__$1);
var G__23696 = null;
var G__23697 = (0);
var G__23698 = (0);
seq__23677 = G__23695;
chunk__23678 = G__23696;
count__23679 = G__23697;
i__23680 = G__23698;
continue;
}
} else {
return null;
}
}
break;
}
});
huginn.core.build_client = (function huginn$core$build_client(opts){
var conn_args = huginn.core.connection_args.call(null,opts);
var client = huginn.core.node$module$mqtt.connect.call(null,conn_args);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),huginn.core.node$module$mqtt.connect.call(null,conn_args),new cljs.core.Keyword(null,"iat-time","iat-time",111865064),huginn.core.round_now.call(null)], null);
});
huginn.core.init_client = (function huginn$core$init_client(opts){
var map__23699 = huginn.core.build_client.call(null,opts);
var map__23699__$1 = ((((!((map__23699 == null)))?((((map__23699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23699):map__23699);
var init = map__23699__$1;
var time = cljs.core.get.call(null,map__23699__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var client = cljs.core.get.call(null,map__23699__$1,new cljs.core.Keyword(null,"client","client",-1323448117));
var handlers = huginn.core.client_handlers.call(null,((function (map__23699,map__23699__$1,init,time,client){
return (function (){
return huginn.core.publish_async.call(null,init,opts);
});})(map__23699,map__23699__$1,init,time,client))
);
huginn.core.add_handlers.call(null,client,handlers);

return init;
});
huginn.core.topic_root = (function huginn$core$topic_root(p__23701){
var map__23702 = p__23701;
var map__23702__$1 = ((((!((map__23702 == null)))?((((map__23702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23702):map__23702);
var opts = map__23702__$1;
var registryId = cljs.core.get.call(null,map__23702__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var deviceId = cljs.core.get.call(null,map__23702__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"-payload"].join('');
});
/**
 * msg-type can be 'state' for state updates
 * or 'events' to publish telemetry
 */
huginn.core.mqtt_topic = (function huginn$core$mqtt_topic(p__23704,msg_type){
var map__23705 = p__23704;
var map__23705__$1 = ((((!((map__23705 == null)))?((((map__23705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23705.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23705):map__23705);
var opts = map__23705__$1;
var deviceId = cljs.core.get.call(null,map__23705__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_type)].join('');
});
huginn.core.sleep_promise = (function huginn$core$sleep_promise(wait){
return promesa.core.promise.call(null,(function (resolve,reject){
return promesa.core.schedule.call(null,wait,(function (){
return resolve.call(null,wait);
}));
}));
});
huginn.core.publish_cpu_data = (function huginn$core$publish_cpu_data(client,topic,qos,data){
var vec__23707 = cljs.core.js__GT_clj.call(null,data.cores);
var c1 = cljs.core.nth.call(null,vec__23707,(0),null);
var c2 = cljs.core.nth.call(null,vec__23707,(1),null);
client.publish([cljs.core.str.cljs$core$IFn$_invoke$arity$1(topic),"-core-1"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1)].join(''),qos);

return client.publish([cljs.core.str.cljs$core$IFn$_invoke$arity$1(topic),"-core-2"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join(''),qos);
});
huginn.core.stop = cljs.core.atom.call(null,false);
huginn.core.publish_async = (function huginn$core$publish_async(p__23710,p__23711){
var map__23712 = p__23710;
var map__23712__$1 = ((((!((map__23712 == null)))?((((map__23712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23712.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23712):map__23712);
var cconfig = map__23712__$1;
var client = cljs.core.get.call(null,map__23712__$1,new cljs.core.Keyword(null,"client","client",-1323448117));
var iat_time = cljs.core.get.call(null,map__23712__$1,new cljs.core.Keyword(null,"iat-time","iat-time",111865064));
var map__23713 = p__23711;
var map__23713__$1 = ((((!((map__23713 == null)))?((((map__23713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23713):map__23713);
var opts = map__23713__$1;
var tokenExpMins = cljs.core.get.call(null,map__23713__$1,new cljs.core.Keyword(null,"tokenExpMins","tokenExpMins",-1638711857));
var delayMs = cljs.core.get.call(null,map__23713__$1,new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168));
if(cljs.core.truth_(cljs.core.deref.call(null,huginn.core.stop))){
return client.end();
} else {
var topic_23716 = huginn.core.mqtt_topic.call(null,opts,"events");
var qos_23717 = ({"qos": (1)});
cljs.core.println.call(null,"Publishing message: ");

promesa.core.then.call(null,huginn.core.node$module$systeminformation.cpuTemperature.call(null),cljs.core.partial.call(null,huginn.core.publish_cpu_data,client,topic_23716,qos_23717));

return promesa.core.then.call(null,huginn.core.sleep_promise.call(null,delayMs),((function (map__23712,map__23712__$1,cconfig,client,iat_time,map__23713,map__23713__$1,opts,tokenExpMins,delayMs){
return (function (){
var secs_from_issue = huginn.core.round_now.call(null);
if((secs_from_issue > (tokenExpMins * (60)))){
cljs.core.println.call(null,["\tRefreshing token after ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((60))," seconds"].join(''));

client.end();

if(cljs.core.truth_(cljs.core.deref.call(null,huginn.core.stop))){
return null;
} else {
return huginn.core.init_client.call(null,opts);
}
} else {
return huginn.core.publish_async.call(null,cconfig,opts);
}
});})(map__23712,map__23712__$1,cconfig,client,iat_time,map__23713,map__23713__$1,opts,tokenExpMins,delayMs))
);
}
});
huginn.core.c = huginn.core.init_client.call(null,huginn.core.default_options);

//# sourceMappingURL=core.js.map
