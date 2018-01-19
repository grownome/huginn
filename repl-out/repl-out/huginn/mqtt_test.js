// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('huginn.mqtt_test');
goog.require('cljs.core');
goog.require('huginn.mqtt');
goog.require('cljs.test');
huginn.mqtt_test.tele_chan = (function huginn$mqtt_test$tele_chan(){
return cljs.test.test_var.call(null,huginn.mqtt_test.tele_chan.cljs$lang$var);
});
huginn.mqtt_test.tele_chan.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"telemetry channel should have data on it");

try{if(typeof huginn.mqtt_test.t_huginn$mqtt_test67891 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
huginn.mqtt_test.t_huginn$mqtt_test67891 = (function (meta67892){
this.meta67892 = meta67892;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
huginn.mqtt_test.t_huginn$mqtt_test67891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67893,meta67892__$1){
var self__ = this;
var _67893__$1 = this;
return (new huginn.mqtt_test.t_huginn$mqtt_test67891(meta67892__$1));
});

huginn.mqtt_test.t_huginn$mqtt_test67891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67893){
var self__ = this;
var _67893__$1 = this;
return self__.meta67892;
});

huginn.mqtt_test.t_huginn$mqtt_test67891.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

huginn.mqtt_test.t_huginn$mqtt_test67891.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___55460__auto__ = self____$1;
var c = huginn.mqtt.tele_chan.call(null);
return huginn.mqtt_test.is.call(null,!(cljs.core._EQ_.call(null,null,a._LT__BANG_(c))));
});

huginn.mqtt_test.t_huginn$mqtt_test67891.prototype.apply = (function (self__,args67894){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args67894)));
});

huginn.mqtt_test.t_huginn$mqtt_test67891.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___55460__auto__ = this;
var c = huginn.mqtt.tele_chan.call(null);
return huginn.mqtt_test.is.call(null,!(cljs.core._EQ_.call(null,null,a._LT__BANG_(c))));
});

huginn.mqtt_test.t_huginn$mqtt_test67891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta67892","meta67892",-182614768,null)], null);
});

huginn.mqtt_test.t_huginn$mqtt_test67891.cljs$lang$type = true;

huginn.mqtt_test.t_huginn$mqtt_test67891.cljs$lang$ctorStr = "huginn.mqtt-test/t_huginn$mqtt_test67891";

huginn.mqtt_test.t_huginn$mqtt_test67891.cljs$lang$ctorPrWriter = (function (this__21883__auto__,writer__21884__auto__,opt__21885__auto__){
return cljs.core._write.call(null,writer__21884__auto__,"huginn.mqtt-test/t_huginn$mqtt_test67891");
});

huginn.mqtt_test.__GT_t_huginn$mqtt_test67891 = (function huginn$mqtt_test$__GT_t_huginn$mqtt_test67891(meta67892){
return (new huginn.mqtt_test.t_huginn$mqtt_test67891(meta67892));
});

}

return (new huginn.mqtt_test.t_huginn$mqtt_test67891(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

huginn.mqtt_test.tele_chan.cljs$lang$var = new cljs.core.Var(function(){return huginn.mqtt_test.tele_chan;},new cljs.core.Symbol("huginn.mqtt-test","tele-chan","huginn.mqtt-test/tele-chan",96805973,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"huginn.mqtt-test","huginn.mqtt-test",1222891859,null),new cljs.core.Symbol(null,"tele-chan","tele-chan",1396327281,null),"/home/fode/src/huginn/test/huginn/mqtt_test.cljs",21,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(huginn.mqtt_test.tele_chan)?huginn.mqtt_test.tele_chan.cljs$lang$test:null)]));
