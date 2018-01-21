// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('huginn.config');
goog.require('cljs.core');
huginn.config.default_options = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"messageType","messageType",1748163586),new cljs.core.Keyword(null,"cloudRegion","cloudRegion",-857757214),new cljs.core.Keyword(null,"algorithm","algorithm",739262820),new cljs.core.Keyword(null,"mqttBridgeHostname","mqttBridgeHostname",1814277029),new cljs.core.Keyword(null,"delayMs","delayMs",-1017330168),new cljs.core.Keyword(null,"deviceId","deviceId",1909987208),new cljs.core.Keyword(null,"privateKey","privateKey",1845961641),new cljs.core.Keyword(null,"registryId","registryId",-1767694006),new cljs.core.Keyword(null,"tokenExpMins","tokenExpMins",-1638711857),new cljs.core.Keyword(null,"projectId","projectId",-1551013096),new cljs.core.Keyword(null,"privateKeyFile","privateKeyFile",2040006267),new cljs.core.Keyword(null,"mqttBridgePort","mqttBridgePort",1181584124)],["events","us-central1","RS256","mqtt.googleapis.com",((1000) * (30)),(function (){var or__30872__auto__ = process.env.DEVICE_ID;
if(cljs.core.truth_(or__30872__auto__)){
return or__30872__auto__;
} else {
return "test-device";
}
})(),process.env.PRIVATE_KEY,(function (){var or__30872__auto__ = process.env.REGISTRY_ID;
if(cljs.core.truth_(or__30872__auto__)){
return or__30872__auto__;
} else {
return "nomes";
}
})(),(20),(function (){var or__30872__auto__ = process.env.GCLOUD_PROJECT;
if(cljs.core.truth_(or__30872__auto__)){
return or__30872__auto__;
} else {
var or__30872__auto____$1 = process.env.GCLOUD_PROJECT;
if(cljs.core.truth_(or__30872__auto____$1)){
return or__30872__auto____$1;
} else {
return "grownome";
}
}
})(),(function (){var or__30872__auto__ = process.env.PRIVATE_KEY_FILE;
if(cljs.core.truth_(or__30872__auto__)){
return or__30872__auto__;
} else {
return "rsa_private.pem";
}
})(),(8883)]);

//# sourceMappingURL=config.js.map
