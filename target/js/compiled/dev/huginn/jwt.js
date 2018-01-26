// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('huginn.jwt');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('promesa.core');
goog.require('cljs_node_io.core');
goog.require('cljs.nodejs');
huginn.jwt.node$module$jsonwebtoken = require('jsonwebtoken');
huginn.jwt.round_now = (function huginn$jwt$round_now(){
return ((Date.now() / (1000)) | (0));
});
/**
 * becuase env vars don't get assinged with newlines in resin
 */
huginn.jwt.clean_env_key = (function huginn$jwt$clean_env_key(private_key){
if(cljs.core.truth_(private_key)){
var split = clojure.string.split.call(null,private_key,/ /);
var header = clojure.string.join.call(null," ",cljs.core.take.call(null,(3),split));
var footer = clojure.string.join.call(null," ",cljs.core.take_last.call(null,(3),split));
var body = cljs.core.drop_last.call(null,(3),cljs.core.drop.call(null,(3),split));
var joined_body = clojure.string.join.call(null,"\n",body);
var joined_text = clojure.string.join.call(null,"\n",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [header,joined_body,footer], null));
return joined_text;
} else {
return null;
}
});
/**
 * Builds a jwt with an experation
 */
huginn.jwt.create_jwt = (function huginn$jwt$create_jwt(p__37092){
var map__37093 = p__37092;
var map__37093__$1 = ((((!((map__37093 == null)))?((((map__37093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37093):map__37093);
var opts = map__37093__$1;
var projectId = cljs.core.get.call(null,map__37093__$1,new cljs.core.Keyword(null,"projectId","projectId",-1551013096));
var tokenExpMins = cljs.core.get.call(null,map__37093__$1,new cljs.core.Keyword(null,"tokenExpMins","tokenExpMins",-1638711857));
var privateKey = cljs.core.get.call(null,map__37093__$1,new cljs.core.Keyword(null,"privateKey","privateKey",1845961641));
var privateKeyFile = cljs.core.get.call(null,map__37093__$1,new cljs.core.Keyword(null,"privateKeyFile","privateKeyFile",2040006267));
var algorithm = cljs.core.get.call(null,map__37093__$1,new cljs.core.Keyword(null,"algorithm","algorithm",739262820));
var token = ({"iat": huginn.jwt.round_now.call(null), "exp": ((tokenExpMins * (60)) + huginn.jwt.round_now.call(null)), "aud": projectId});
var privKey = (function (){var or__30872__auto__ = huginn.jwt.clean_env_key.call(null,privateKey);
if(cljs.core.truth_(or__30872__auto__)){
return or__30872__auto__;
} else {
return cljs_node_io.core.slurp.call(null,privateKeyFile);
}
})();
return huginn.jwt.node$module$jsonwebtoken.sign.call(null,token,privKey,({"algorithm": algorithm}));
});
huginn.jwt.client_id = (function huginn$jwt$client_id(p__37095){
var map__37096 = p__37095;
var map__37096__$1 = ((((!((map__37096 == null)))?((((map__37096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37096):map__37096);
var opts = map__37096__$1;
var projectId = cljs.core.get.call(null,map__37096__$1,new cljs.core.Keyword(null,"projectId","projectId",-1551013096));
var registryId = cljs.core.get.call(null,map__37096__$1,new cljs.core.Keyword(null,"registryId","registryId",-1767694006));
var cloudRegion = cljs.core.get.call(null,map__37096__$1,new cljs.core.Keyword(null,"cloudRegion","cloudRegion",-857757214));
var deviceId = cljs.core.get.call(null,map__37096__$1,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208));
return ["projects/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(projectId),"/locations/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cloudRegion),"/registries/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(registryId),"/devices/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(deviceId)].join('');
});
/**
 * builds connection args for connecting to mqtt
 *   The same args are used no matter what topic you
 *   are connecting too
 */
huginn.jwt.connection_args = (function huginn$jwt$connection_args(p__37098){
var map__37099 = p__37098;
var map__37099__$1 = ((((!((map__37099 == null)))?((((map__37099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37099):map__37099);
var opts = map__37099__$1;
var mqttBridgeHostname = cljs.core.get.call(null,map__37099__$1,new cljs.core.Keyword(null,"mqttBridgeHostname","mqttBridgeHostname",1814277029));
var mqttBridgePort = cljs.core.get.call(null,map__37099__$1,new cljs.core.Keyword(null,"mqttBridgePort","mqttBridgePort",1181584124));
var projectId = cljs.core.get.call(null,map__37099__$1,new cljs.core.Keyword(null,"projectId","projectId",-1551013096));
var privateKeyFile = cljs.core.get.call(null,map__37099__$1,new cljs.core.Keyword(null,"privateKeyFile","privateKeyFile",2040006267));
var algorithm = cljs.core.get.call(null,map__37099__$1,new cljs.core.Keyword(null,"algorithm","algorithm",739262820));
return ({"host": mqttBridgeHostname, "port": mqttBridgePort, "clientId": huginn.jwt.client_id.call(null,opts), "username": "unused", "password": huginn.jwt.create_jwt.call(null,opts), "protocol": "mqtts", "secureProtocol": "TLSv1_2_method"});
});

//# sourceMappingURL=jwt.js.map
