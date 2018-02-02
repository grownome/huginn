// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('huginn.sensors');
goog.require('cljs.core');
goog.require('promesa.core');
goog.require('taoensso.timbre');
goog.require('cljs.core.async');
huginn.sensors.s = require("node-dht-sensor");
huginn.sensors.build_sensor_packet = (function huginn$sensors$build_sensor_packet(sensor_name,sensor_reading){
try{var result__32849__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),sensor_reading,new cljs.core.Keyword(null,"subfolder","subfolder",1044158439),["metrics/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sensor_name)].join('')], null)], null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.sensors","/tmp/form-init3351303088126891041.clj",14,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__32849__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Symbol(null,"sensor-reading","sensor-reading",1514517376,null),new cljs.core.Keyword(null,"subfolder","subfolder",1044158439),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"metrics/",new cljs.core.Symbol(null,"sensor-name","sensor-name",-817206841,null))], null)], null),"=>",result__32849__auto__], null);
});})(result__32849__auto__))
,null)),null,152319954);

return result__32849__auto__;
}catch (e39314){if((e39314 instanceof Error)){
var e__32811__auto__ = e39314;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.sensors","/tmp/form-init3351303088126891041.clj",14,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__32811__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__32811__auto__], null);
});})(e__32811__auto__))
,null)),null,2005747175);

throw e__32811__auto__;
} else {
throw e39314;

}
}});
/**
 * this creates a channel with sensor readings from a given gpio channel
 *   Use
 *   Please note that there are two different and confusing ways to reference a channel; either using the Raspberry Pi or the BCM/SoC naming schema (sadly, neither of which match the physical pins!). This module supports both schemas, with Raspberry Pi being the default. Please see this page for more details.
 * 
 *   taken from rpi-gpio readem 
 */
huginn.sensors.sensor_chan = (function huginn$sensors$sensor_chan(gpio_channel){
var out_chan = cljs.core.async.chan.call(null);
var c__17681__auto___39331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___39331,out_chan){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___39331,out_chan){
return (function (state_39322){
var state_val_39323 = (state_39322[(1)]);
if((state_val_39323 === (1))){
var state_39322__$1 = state_39322;
var statearr_39324_39332 = state_39322__$1;
(statearr_39324_39332[(2)] = null);

(statearr_39324_39332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39323 === (2))){
var inst_39316 = (function (){return ((function (state_val_39323,c__17681__auto___39331,out_chan){
return (function (err,temp,humidity){
if(cljs.core.truth_(err)){
throw err;
} else {
return cljs.core.async._GT__BANG_.call(null,out_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),temp,new cljs.core.Keyword(null,"subfolder","subfolder",1044158439),"metrics/temprature"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),humidity,new cljs.core.Keyword(null,"subfolder","subfolder",1044158439),"metrics/humidity"], null)], null));
}
});
;})(state_val_39323,c__17681__auto___39331,out_chan))
})();
var inst_39317 = huginn.sensors.s.read((11),gpio_channel,inst_39316);
var state_39322__$1 = (function (){var statearr_39325 = state_39322;
(statearr_39325[(7)] = inst_39317);

return statearr_39325;
})();
var statearr_39326_39333 = state_39322__$1;
(statearr_39326_39333[(2)] = null);

(statearr_39326_39333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39323 === (3))){
var inst_39320 = (state_39322[(2)]);
var state_39322__$1 = state_39322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39322__$1,inst_39320);
} else {
return null;
}
}
}
});})(c__17681__auto___39331,out_chan))
;
return ((function (switch__17591__auto__,c__17681__auto___39331,out_chan){
return (function() {
var huginn$sensors$sensor_chan_$_state_machine__17592__auto__ = null;
var huginn$sensors$sensor_chan_$_state_machine__17592__auto____0 = (function (){
var statearr_39327 = [null,null,null,null,null,null,null,null];
(statearr_39327[(0)] = huginn$sensors$sensor_chan_$_state_machine__17592__auto__);

(statearr_39327[(1)] = (1));

return statearr_39327;
});
var huginn$sensors$sensor_chan_$_state_machine__17592__auto____1 = (function (state_39322){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_39322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e39328){if((e39328 instanceof Object)){
var ex__17595__auto__ = e39328;
var statearr_39329_39334 = state_39322;
(statearr_39329_39334[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39335 = state_39322;
state_39322 = G__39335;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
huginn$sensors$sensor_chan_$_state_machine__17592__auto__ = function(state_39322){
switch(arguments.length){
case 0:
return huginn$sensors$sensor_chan_$_state_machine__17592__auto____0.call(this);
case 1:
return huginn$sensors$sensor_chan_$_state_machine__17592__auto____1.call(this,state_39322);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$sensors$sensor_chan_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$sensors$sensor_chan_$_state_machine__17592__auto____0;
huginn$sensors$sensor_chan_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$sensors$sensor_chan_$_state_machine__17592__auto____1;
return huginn$sensors$sensor_chan_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___39331,out_chan))
})();
var state__17683__auto__ = (function (){var statearr_39330 = f__17682__auto__.call(null);
(statearr_39330[(6)] = c__17681__auto___39331);

return statearr_39330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___39331,out_chan))
);


return out_chan;
});
huginn.sensors.cleanup_sensor = (function huginn$sensors$cleanup_sensor(p__39336){
var map__39337 = p__39336;
var map__39337__$1 = ((((!((map__39337 == null)))?((((map__39337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39337):map__39337);
var system = map__39337__$1;
var sensor_chan = cljs.core.get.call(null,map__39337__$1,new cljs.core.Keyword(null,"sensor-chan","sensor-chan",-1323578869));
cljs.core.async.close_BANG_.call(null,sensor_chan);

return cljs.core.dissoc.call(null,system,new cljs.core.Keyword(null,"sensor-chan","sensor-chan",-1323578869));
});
huginn.sensors._start_mix_sensor = (function huginn$sensors$_start_mix_sensor(sensor_gpio,p__39339){
var map__39340 = p__39339;
var map__39340__$1 = ((((!((map__39340 == null)))?((((map__39340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39340):map__39340);
var system = map__39340__$1;
var telemetry_chan = cljs.core.get.call(null,map__39340__$1,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503));
var s_chan = huginn.sensors.sensor_chan.call(null,sensor_gpio);
var mixer = cljs.core.async.mix.call(null,telemetry_chan);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.sensors","/tmp/form-init3351303088126891041.clj",51,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (s_chan,mixer,map__39340,map__39340__$1,system,telemetry_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["connecting sensor to mixer"], null);
});})(s_chan,mixer,map__39340,map__39340__$1,system,telemetry_chan))
,null)),null,853622656);

cljs.core.async.admix.call(null,mixer,s_chan);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,cljs.core.assoc.call(null,system,new cljs.core.Keyword(null,"mixer","mixer",-120313315),mixer),new cljs.core.Keyword(null,"sensor-chan","sensor-chan",-1323578869),s_chan)], null);
});
huginn.sensors.start_mix_sensor = (function huginn$sensors$start_mix_sensor(system_promise,sensor_gpio){
return promesa.core.then.call(null,system_promise,cljs.core.partial.call(null,huginn.sensors._start_mix_sensor,sensor_gpio));
});

//# sourceMappingURL=sensors.js.map
