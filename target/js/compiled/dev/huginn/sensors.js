// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('huginn.sensors');
goog.require('cljs.core');
goog.require('promesa.core');
goog.require('taoensso.timbre');
goog.require('cljs.core.async');
huginn.sensors.node$module$rpi_gpio = require('rpi-gpio');
huginn.sensors.build_sensor_packet = (function huginn$sensors$build_sensor_packet(sensor_name,sensor_reading){
try{var result__35585__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),sensor_reading,new cljs.core.Keyword(null,"subfolder","subfolder",1044158439),["metrics/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sensor_name)].join('')], null)], null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.sensors","/tmp/form-init9089973338414648577.clj",13,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__35585__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Symbol(null,"sensor-reading","sensor-reading",1514517376,null),new cljs.core.Keyword(null,"subfolder","subfolder",1044158439),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"metrics/",new cljs.core.Symbol(null,"sensor-name","sensor-name",-817206841,null))], null)], null),"=>",result__35585__auto__], null);
});})(result__35585__auto__))
,null)),null,2118561337);

return result__35585__auto__;
}catch (e36976){if((e36976 instanceof Error)){
var e__35547__auto__ = e36976;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.sensors","/tmp/form-init9089973338414648577.clj",13,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__35547__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__35547__auto__], null);
});})(e__35547__auto__))
,null)),null,1268628108);

throw e__35547__auto__;
} else {
throw e36976;

}
}});
/**
 * this creates a channel with sensor readings from a given gpio channel
 *   Use
 *   Please note that there are two different and confusing ways to reference a channel; either using the Raspberry Pi or the BCM/SoC naming schema (sadly, neither of which match the physical pins!). This module supports both schemas, with Raspberry Pi being the default. Please see this page for more details.
 * 
 *   taken from rpi-gpio readem 
 */
huginn.sensors.sensor_chan = (function huginn$sensors$sensor_chan(sensor_name,gpio_channel){
var temp_chan = cljs.core.async.chan.call(null);
var out_chan = cljs.core.async.chan.call(null,cljs.core.map.call(null,huginn.sensors.build_sensor_packet));
var c__36917__auto___37013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto___37013,temp_chan,out_chan){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto___37013,temp_chan,out_chan){
return (function (state_36992){
var state_val_36993 = (state_36992[(1)]);
if((state_val_36993 === (1))){
var state_36992__$1 = state_36992;
var statearr_36994_37014 = state_36992__$1;
(statearr_36994_37014[(2)] = null);

(statearr_36994_37014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (2))){
var inst_36978 = (function (){return ((function (state_val_36993,c__36917__auto___37013,temp_chan,out_chan){
return (function (resolve,reject){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.sensors","/tmp/form-init9089973338414648577.clj",29,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (state_val_36993,c__36917__auto___37013,temp_chan,out_chan){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["setting up sensor port ",sensor_name," ",gpio_channel], null);
});})(state_val_36993,c__36917__auto___37013,temp_chan,out_chan))
,null)),null,-1276008645);

huginn.sensors.node$module$rpi_gpio.setup.call(null,gpio_channel,huginn.sensors.node$module$rpi_gpio.DIR_IN,((function (state_val_36993,c__36917__auto___37013,temp_chan,out_chan){
return (function (err){
if(cljs.core.truth_((function (){try{var result__35585__auto__ = err;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.sensors","/tmp/form-init9089973338414648577.clj",30,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__35585__auto__,state_val_36993,c__36917__auto___37013,temp_chan,out_chan){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"err","err",-448925678,null),"=>",result__35585__auto__], null);
});})(result__35585__auto__,state_val_36993,c__36917__auto___37013,temp_chan,out_chan))
,null)),null,275982476);

return result__35585__auto__;
}catch (e36995){if((e36995 instanceof Error)){
var e__35547__auto__ = e36995;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.sensors","/tmp/form-init9089973338414648577.clj",30,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__35547__auto__,state_val_36993,c__36917__auto___37013,temp_chan,out_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__35547__auto__], null);
});})(e__35547__auto__,state_val_36993,c__36917__auto___37013,temp_chan,out_chan))
,null)),null,1863622711);

throw e__35547__auto__;
} else {
throw e36995;

}
}})())){
return reject.call(null,err);
} else {
return null;
}
});})(state_val_36993,c__36917__auto___37013,temp_chan,out_chan))
);

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.sensors","/tmp/form-init9089973338414648577.clj",31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (state_val_36993,c__36917__auto___37013,temp_chan,out_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["probably done setting up sensor"], null);
});})(state_val_36993,c__36917__auto___37013,temp_chan,out_chan))
,null)),null,-1916104262);

return resolve.call(null,null);
});
;})(state_val_36993,c__36917__auto___37013,temp_chan,out_chan))
})();
var inst_36979 = promesa.core.promise.call(null,inst_36978);
var inst_36980 = (function (){return ((function (inst_36978,inst_36979,state_val_36993,c__36917__auto___37013,temp_chan,out_chan){
return (function (resolve,reject){
return huginn.sensors.node$module$rpi_gpio.read.call(null,gpio_channel,((function (inst_36978,inst_36979,state_val_36993,c__36917__auto___37013,temp_chan,out_chan){
return (function (err,value){
try{var result__35585__auto___37015 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err,value], null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.sensors","/tmp/form-init9089973338414648577.clj",36,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__35585__auto___37015,inst_36978,inst_36979,state_val_36993,c__36917__auto___37013,temp_chan,out_chan){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null),"=>",result__35585__auto___37015], null);
});})(result__35585__auto___37015,inst_36978,inst_36979,state_val_36993,c__36917__auto___37013,temp_chan,out_chan))
,null)),null,-2097930325);

}catch (e36996){if((e36996 instanceof Error)){
var e__35547__auto___37016 = e36996;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.sensors","/tmp/form-init9089973338414648577.clj",36,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__35547__auto___37016,inst_36978,inst_36979,state_val_36993,c__36917__auto___37013,temp_chan,out_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__35547__auto___37016], null);
});})(e__35547__auto___37016,inst_36978,inst_36979,state_val_36993,c__36917__auto___37013,temp_chan,out_chan))
,null)),null,752735823);

throw e__35547__auto___37016;
} else {
throw e36996;

}
}
if(cljs.core.truth_(err)){
return reject.call(null,err);
} else {
return resolve.call(null,value);
}
});})(inst_36978,inst_36979,state_val_36993,c__36917__auto___37013,temp_chan,out_chan))
);
});
;})(inst_36978,inst_36979,state_val_36993,c__36917__auto___37013,temp_chan,out_chan))
})();
var inst_36981 = promesa.core.promise.call(null,inst_36980);
var inst_36982 = (function (){return ((function (inst_36978,inst_36979,inst_36980,inst_36981,state_val_36993,c__36917__auto___37013,temp_chan,out_chan){
return (function (vs){
var c__36917__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto____$1,inst_36978,inst_36979,inst_36980,inst_36981,state_val_36993,c__36917__auto___37013,temp_chan,out_chan){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto____$1,inst_36978,inst_36979,inst_36980,inst_36981,state_val_36993,c__36917__auto___37013,temp_chan,out_chan){
return (function (state_37000){
var state_val_37001 = (state_37000[(1)]);
if((state_val_37001 === (1))){
var state_37000__$1 = state_37000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37000__$1,(2),temp_chan,vs);
} else {
if((state_val_37001 === (2))){
var inst_36998 = (state_37000[(2)]);
var state_37000__$1 = state_37000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37000__$1,inst_36998);
} else {
return null;
}
}
});})(c__36917__auto____$1,inst_36978,inst_36979,inst_36980,inst_36981,state_val_36993,c__36917__auto___37013,temp_chan,out_chan))
;
return ((function (switch__36894__auto__,c__36917__auto____$1,inst_36978,inst_36979,inst_36980,inst_36981,state_val_36993,c__36917__auto___37013,temp_chan,out_chan){
return (function() {
var huginn$sensors$sensor_chan_$_state_machine__36895__auto__ = null;
var huginn$sensors$sensor_chan_$_state_machine__36895__auto____0 = (function (){
var statearr_37002 = [null,null,null,null,null,null,null];
(statearr_37002[(0)] = huginn$sensors$sensor_chan_$_state_machine__36895__auto__);

(statearr_37002[(1)] = (1));

return statearr_37002;
});
var huginn$sensors$sensor_chan_$_state_machine__36895__auto____1 = (function (state_37000){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37003){if((e37003 instanceof Object)){
var ex__36898__auto__ = e37003;
var statearr_37004_37017 = state_37000;
(statearr_37004_37017[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37018 = state_37000;
state_37000 = G__37018;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$sensors$sensor_chan_$_state_machine__36895__auto__ = function(state_37000){
switch(arguments.length){
case 0:
return huginn$sensors$sensor_chan_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$sensors$sensor_chan_$_state_machine__36895__auto____1.call(this,state_37000);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$sensors$sensor_chan_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$sensors$sensor_chan_$_state_machine__36895__auto____0;
huginn$sensors$sensor_chan_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$sensors$sensor_chan_$_state_machine__36895__auto____1;
return huginn$sensors$sensor_chan_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto____$1,inst_36978,inst_36979,inst_36980,inst_36981,state_val_36993,c__36917__auto___37013,temp_chan,out_chan))
})();
var state__36919__auto__ = (function (){var statearr_37005 = f__36918__auto__.call(null);
(statearr_37005[(6)] = c__36917__auto____$1);

return statearr_37005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto____$1,inst_36978,inst_36979,inst_36980,inst_36981,state_val_36993,c__36917__auto___37013,temp_chan,out_chan))
);

return c__36917__auto____$1;
});
;})(inst_36978,inst_36979,inst_36980,inst_36981,state_val_36993,c__36917__auto___37013,temp_chan,out_chan))
})();
var inst_36983 = promesa.core.chain.call(null,inst_36979,inst_36981,inst_36982);
var state_36992__$1 = (function (){var statearr_37006 = state_36992;
(statearr_37006[(7)] = inst_36983);

return statearr_37006;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36992__$1,(4),temp_chan);
} else {
if((state_val_36993 === (3))){
var inst_36990 = (state_36992[(2)]);
var state_36992__$1 = state_36992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36992__$1,inst_36990);
} else {
if((state_val_36993 === (4))){
var inst_36985 = (state_36992[(2)]);
var state_36992__$1 = state_36992;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36992__$1,(5),out_chan,inst_36985);
} else {
if((state_val_36993 === (5))){
var inst_36987 = (state_36992[(2)]);
var state_36992__$1 = (function (){var statearr_37007 = state_36992;
(statearr_37007[(8)] = inst_36987);

return statearr_37007;
})();
var statearr_37008_37019 = state_36992__$1;
(statearr_37008_37019[(2)] = null);

(statearr_37008_37019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__36917__auto___37013,temp_chan,out_chan))
;
return ((function (switch__36894__auto__,c__36917__auto___37013,temp_chan,out_chan){
return (function() {
var huginn$sensors$sensor_chan_$_state_machine__36895__auto__ = null;
var huginn$sensors$sensor_chan_$_state_machine__36895__auto____0 = (function (){
var statearr_37009 = [null,null,null,null,null,null,null,null,null];
(statearr_37009[(0)] = huginn$sensors$sensor_chan_$_state_machine__36895__auto__);

(statearr_37009[(1)] = (1));

return statearr_37009;
});
var huginn$sensors$sensor_chan_$_state_machine__36895__auto____1 = (function (state_36992){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_36992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37010){if((e37010 instanceof Object)){
var ex__36898__auto__ = e37010;
var statearr_37011_37020 = state_36992;
(statearr_37011_37020[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37021 = state_36992;
state_36992 = G__37021;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$sensors$sensor_chan_$_state_machine__36895__auto__ = function(state_36992){
switch(arguments.length){
case 0:
return huginn$sensors$sensor_chan_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$sensors$sensor_chan_$_state_machine__36895__auto____1.call(this,state_36992);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$sensors$sensor_chan_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$sensors$sensor_chan_$_state_machine__36895__auto____0;
huginn$sensors$sensor_chan_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$sensors$sensor_chan_$_state_machine__36895__auto____1;
return huginn$sensors$sensor_chan_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto___37013,temp_chan,out_chan))
})();
var state__36919__auto__ = (function (){var statearr_37012 = f__36918__auto__.call(null);
(statearr_37012[(6)] = c__36917__auto___37013);

return statearr_37012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto___37013,temp_chan,out_chan))
);


return out_chan;
});
huginn.sensors.cleanup_sensor = (function huginn$sensors$cleanup_sensor(p__37022){
var map__37023 = p__37022;
var map__37023__$1 = ((((!((map__37023 == null)))?((((map__37023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37023.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37023):map__37023);
var system = map__37023__$1;
var sensor_chan = cljs.core.get.call(null,map__37023__$1,new cljs.core.Keyword(null,"sensor-chan","sensor-chan",-1323578869));
cljs.core.async.close_BANG_.call(null,sensor_chan);

return cljs.core.dissoc.call(null,system,new cljs.core.Keyword(null,"sensor-chan","sensor-chan",-1323578869));
});
huginn.sensors._start_mix_sensor = (function huginn$sensors$_start_mix_sensor(sensor_name,sensor_gpio,p__37025){
var map__37026 = p__37025;
var map__37026__$1 = ((((!((map__37026 == null)))?((((map__37026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37026.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37026):map__37026);
var system = map__37026__$1;
var telemetry_chan = cljs.core.get.call(null,map__37026__$1,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503));
var sensor_chan = huginn.sensors.sensor_chan.call(null,sensor_name,sensor_gpio);
var mixer = cljs.core.async.mix.call(null,telemetry_chan);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.sensors","/tmp/form-init9089973338414648577.clj",57,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sensor_chan,mixer,map__37026,map__37026__$1,system,telemetry_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["connecting sensor to mixer"], null);
});})(sensor_chan,mixer,map__37026,map__37026__$1,system,telemetry_chan))
,null)),null,-1690525624);

cljs.core.async.admix.call(null,mixer,sensor_chan);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,cljs.core.assoc.call(null,system,new cljs.core.Keyword(null,"mixer","mixer",-120313315),mixer),new cljs.core.Keyword(null,"sensor-chan","sensor-chan",-1323578869),sensor_chan)], null);
});
huginn.sensors.start_mix_sensor = (function huginn$sensors$start_mix_sensor(system_promise,sensor_name,sensor_gpio){
return promesa.core.then.call(null,system_promise,cljs.core.partial.call(null,huginn.sensors._start_mix_sensor,sensor_name,sensor_gpio));
});

//# sourceMappingURL=sensors.js.map
