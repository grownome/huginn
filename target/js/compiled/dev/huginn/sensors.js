// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('huginn.sensors');
goog.require('cljs.core');
goog.require('promesa.core');
goog.require('taoensso.timbre');
goog.require('cljs.core.async');
huginn.sensors.node$module$rpi_gpio = require('rpi-gpio');
huginn.sensors.build_sensor_packet = (function huginn$sensors$build_sensor_packet(sensor_name,sensor_reading){
try{var result__36961__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),sensor_reading,new cljs.core.Keyword(null,"subfolder","subfolder",1044158439),["metrics/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sensor_name)].join('')], null)], null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.sensors","/tmp/form-init4426379521422539618.clj",13,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__36961__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Symbol(null,"sensor-reading","sensor-reading",1514517376,null),new cljs.core.Keyword(null,"subfolder","subfolder",1044158439),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"metrics/",new cljs.core.Symbol(null,"sensor-name","sensor-name",-817206841,null))], null)], null),"=>",result__36961__auto__], null);
});})(result__36961__auto__))
,null)),null,-343518204);

return result__36961__auto__;
}catch (e38775){if((e38775 instanceof Error)){
var e__36923__auto__ = e38775;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.sensors","/tmp/form-init4426379521422539618.clj",13,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__36923__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__36923__auto__], null);
});})(e__36923__auto__))
,null)),null,1632951219);

throw e__36923__auto__;
} else {
throw e38775;

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
var out_chan = cljs.core.async.chan.call(null);
var c__33801__auto___38819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33801__auto___38819,temp_chan,out_chan){
return (function (){
var f__33802__auto__ = (function (){var switch__33778__auto__ = ((function (c__33801__auto___38819,temp_chan,out_chan){
return (function (state_38796){
var state_val_38797 = (state_38796[(1)]);
if((state_val_38797 === (1))){
var state_38796__$1 = state_38796;
var statearr_38798_38820 = state_38796__$1;
(statearr_38798_38820[(2)] = null);

(statearr_38798_38820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38797 === (2))){
var inst_38777 = (function (){return ((function (state_val_38797,c__33801__auto___38819,temp_chan,out_chan){
return (function (resolve,reject){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.sensors","/tmp/form-init4426379521422539618.clj",29,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (state_val_38797,c__33801__auto___38819,temp_chan,out_chan){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["setting up sensor port ",sensor_name," ",gpio_channel], null);
});})(state_val_38797,c__33801__auto___38819,temp_chan,out_chan))
,null)),null,-1280714232);

try{var result__36961__auto___38821 = huginn.sensors.node$module$rpi_gpio.DIR_IN;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.sensors","/tmp/form-init4426379521422539618.clj",30,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__36961__auto___38821,state_val_38797,c__33801__auto___38819,temp_chan,out_chan){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","DIR_IN","s/DIR_IN",-1014588769,null),"=>",result__36961__auto___38821], null);
});})(result__36961__auto___38821,state_val_38797,c__33801__auto___38819,temp_chan,out_chan))
,null)),null,-2001576401);

}catch (e38799){if((e38799 instanceof Error)){
var e__36923__auto___38822 = e38799;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.sensors","/tmp/form-init4426379521422539618.clj",30,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__36923__auto___38822,state_val_38797,c__33801__auto___38819,temp_chan,out_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__36923__auto___38822], null);
});})(e__36923__auto___38822,state_val_38797,c__33801__auto___38819,temp_chan,out_chan))
,null)),null,248564260);

throw e__36923__auto___38822;
} else {
throw e38799;

}
}
try{var result__36961__auto___38823 = cljs.core.js_keys.call(null,huginn.sensors.node$module$rpi_gpio);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.sensors","/tmp/form-init4426379521422539618.clj",31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__36961__auto___38823,state_val_38797,c__33801__auto___38819,temp_chan,out_chan){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"js-keys","js-keys",-1388365203,null),new cljs.core.Symbol(null,"s","s",-948495851,null)),"=>",result__36961__auto___38823], null);
});})(result__36961__auto___38823,state_val_38797,c__33801__auto___38819,temp_chan,out_chan))
,null)),null,-407083412);

}catch (e38800){if((e38800 instanceof Error)){
var e__36923__auto___38824 = e38800;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.sensors","/tmp/form-init4426379521422539618.clj",31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__36923__auto___38824,state_val_38797,c__33801__auto___38819,temp_chan,out_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__36923__auto___38824], null);
});})(e__36923__auto___38824,state_val_38797,c__33801__auto___38819,temp_chan,out_chan))
,null)),null,297747608);

throw e__36923__auto___38824;
} else {
throw e38800;

}
}
huginn.sensors.node$module$rpi_gpio.on("export",((function (state_val_38797,c__33801__auto___38819,temp_chan,out_chan){
return (function (ready){
return resolve.call(null,ready);
});})(state_val_38797,c__33801__auto___38819,temp_chan,out_chan))
);

return huginn.sensors.node$module$rpi_gpio.setup.call(null,gpio_channel,((function (state_val_38797,c__33801__auto___38819,temp_chan,out_chan){
return (function (err){
if(cljs.core.truth_((function (){try{var result__36961__auto__ = err;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.sensors","/tmp/form-init4426379521422539618.clj",33,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__36961__auto__,state_val_38797,c__33801__auto___38819,temp_chan,out_chan){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"err","err",-448925678,null),"=>",result__36961__auto__], null);
});})(result__36961__auto__,state_val_38797,c__33801__auto___38819,temp_chan,out_chan))
,null)),null,-522358833);

return result__36961__auto__;
}catch (e38801){if((e38801 instanceof Error)){
var e__36923__auto__ = e38801;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.sensors","/tmp/form-init4426379521422539618.clj",33,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__36923__auto__,state_val_38797,c__33801__auto___38819,temp_chan,out_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__36923__auto__], null);
});})(e__36923__auto__,state_val_38797,c__33801__auto___38819,temp_chan,out_chan))
,null)),null,-236108649);

throw e__36923__auto__;
} else {
throw e38801;

}
}})())){
return reject.call(null,err);
} else {
return null;
}
});})(state_val_38797,c__33801__auto___38819,temp_chan,out_chan))
);
});
;})(state_val_38797,c__33801__auto___38819,temp_chan,out_chan))
})();
var inst_38778 = promesa.core.promise.call(null,inst_38777);
var inst_38779 = (function (){return ((function (inst_38777,inst_38778,state_val_38797,c__33801__auto___38819,temp_chan,out_chan){
return (function (val){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.sensors","/tmp/form-init4426379521422539618.clj",35,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (inst_38777,inst_38778,state_val_38797,c__33801__auto___38819,temp_chan,out_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["trying to read"], null);
});})(inst_38777,inst_38778,state_val_38797,c__33801__auto___38819,temp_chan,out_chan))
,null)),null,-442104142);

return huginn.sensors.node$module$rpi_gpio.read.call(null,gpio_channel,((function (inst_38777,inst_38778,state_val_38797,c__33801__auto___38819,temp_chan,out_chan){
return (function (err,value){
try{var result__36961__auto___38825 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err,value], null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.sensors","/tmp/form-init4426379521422539618.clj",37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__36961__auto___38825,inst_38777,inst_38778,state_val_38797,c__33801__auto___38819,temp_chan,out_chan){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null),"=>",result__36961__auto___38825], null);
});})(result__36961__auto___38825,inst_38777,inst_38778,state_val_38797,c__33801__auto___38819,temp_chan,out_chan))
,null)),null,1733816295);

}catch (e38802){if((e38802 instanceof Error)){
var e__36923__auto___38826 = e38802;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.sensors","/tmp/form-init4426379521422539618.clj",37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__36923__auto___38826,inst_38777,inst_38778,state_val_38797,c__33801__auto___38819,temp_chan,out_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__36923__auto___38826], null);
});})(e__36923__auto___38826,inst_38777,inst_38778,state_val_38797,c__33801__auto___38819,temp_chan,out_chan))
,null)),null,309823497);

throw e__36923__auto___38826;
} else {
throw e38802;

}
}
if(cljs.core.truth_(err)){
return promesa.core.rejected.call(null,err);
} else {
return promesa.core.resolved.call(null,value);
}
});})(inst_38777,inst_38778,state_val_38797,c__33801__auto___38819,temp_chan,out_chan))
);
});
;})(inst_38777,inst_38778,state_val_38797,c__33801__auto___38819,temp_chan,out_chan))
})();
var inst_38780 = (function (){return ((function (inst_38777,inst_38778,inst_38779,state_val_38797,c__33801__auto___38819,temp_chan,out_chan){
return (function (vs){
var c__33801__auto____$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33801__auto____$1,inst_38777,inst_38778,inst_38779,state_val_38797,c__33801__auto___38819,temp_chan,out_chan){
return (function (){
var f__33802__auto__ = (function (){var switch__33778__auto__ = ((function (c__33801__auto____$1,inst_38777,inst_38778,inst_38779,state_val_38797,c__33801__auto___38819,temp_chan,out_chan){
return (function (state_38806){
var state_val_38807 = (state_38806[(1)]);
if((state_val_38807 === (1))){
var state_38806__$1 = state_38806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38806__$1,(2),temp_chan,vs);
} else {
if((state_val_38807 === (2))){
var inst_38804 = (state_38806[(2)]);
var state_38806__$1 = state_38806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38806__$1,inst_38804);
} else {
return null;
}
}
});})(c__33801__auto____$1,inst_38777,inst_38778,inst_38779,state_val_38797,c__33801__auto___38819,temp_chan,out_chan))
;
return ((function (switch__33778__auto__,c__33801__auto____$1,inst_38777,inst_38778,inst_38779,state_val_38797,c__33801__auto___38819,temp_chan,out_chan){
return (function() {
var huginn$sensors$sensor_chan_$_state_machine__33779__auto__ = null;
var huginn$sensors$sensor_chan_$_state_machine__33779__auto____0 = (function (){
var statearr_38808 = [null,null,null,null,null,null,null];
(statearr_38808[(0)] = huginn$sensors$sensor_chan_$_state_machine__33779__auto__);

(statearr_38808[(1)] = (1));

return statearr_38808;
});
var huginn$sensors$sensor_chan_$_state_machine__33779__auto____1 = (function (state_38806){
while(true){
var ret_value__33780__auto__ = (function (){try{while(true){
var result__33781__auto__ = switch__33778__auto__.call(null,state_38806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33781__auto__;
}
break;
}
}catch (e38809){if((e38809 instanceof Object)){
var ex__33782__auto__ = e38809;
var statearr_38810_38827 = state_38806;
(statearr_38810_38827[(5)] = ex__33782__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38828 = state_38806;
state_38806 = G__38828;
continue;
} else {
return ret_value__33780__auto__;
}
break;
}
});
huginn$sensors$sensor_chan_$_state_machine__33779__auto__ = function(state_38806){
switch(arguments.length){
case 0:
return huginn$sensors$sensor_chan_$_state_machine__33779__auto____0.call(this);
case 1:
return huginn$sensors$sensor_chan_$_state_machine__33779__auto____1.call(this,state_38806);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$sensors$sensor_chan_$_state_machine__33779__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$sensors$sensor_chan_$_state_machine__33779__auto____0;
huginn$sensors$sensor_chan_$_state_machine__33779__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$sensors$sensor_chan_$_state_machine__33779__auto____1;
return huginn$sensors$sensor_chan_$_state_machine__33779__auto__;
})()
;})(switch__33778__auto__,c__33801__auto____$1,inst_38777,inst_38778,inst_38779,state_val_38797,c__33801__auto___38819,temp_chan,out_chan))
})();
var state__33803__auto__ = (function (){var statearr_38811 = f__33802__auto__.call(null);
(statearr_38811[(6)] = c__33801__auto____$1);

return statearr_38811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33803__auto__);
});})(c__33801__auto____$1,inst_38777,inst_38778,inst_38779,state_val_38797,c__33801__auto___38819,temp_chan,out_chan))
);

return c__33801__auto____$1;
});
;})(inst_38777,inst_38778,inst_38779,state_val_38797,c__33801__auto___38819,temp_chan,out_chan))
})();
var inst_38781 = promesa.core.chain.call(null,inst_38778,inst_38779,inst_38780);
var state_38796__$1 = (function (){var statearr_38812 = state_38796;
(statearr_38812[(7)] = inst_38781);

return statearr_38812;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38796__$1,(4),temp_chan);
} else {
if((state_val_38797 === (3))){
var inst_38794 = (state_38796[(2)]);
var state_38796__$1 = state_38796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38796__$1,inst_38794);
} else {
if((state_val_38797 === (4))){
var inst_38783 = (state_38796[(2)]);
var inst_38784 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38785 = [new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword(null,"subfolder","subfolder",1044158439)];
var inst_38786 = [inst_38783,sensor_name];
var inst_38787 = cljs.core.PersistentHashMap.fromArrays(inst_38785,inst_38786);
var inst_38788 = [inst_38787];
var inst_38789 = (new cljs.core.PersistentVector(null,1,(5),inst_38784,inst_38788,null));
var state_38796__$1 = state_38796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38796__$1,(5),out_chan,inst_38789);
} else {
if((state_val_38797 === (5))){
var inst_38791 = (state_38796[(2)]);
var state_38796__$1 = (function (){var statearr_38813 = state_38796;
(statearr_38813[(8)] = inst_38791);

return statearr_38813;
})();
var statearr_38814_38829 = state_38796__$1;
(statearr_38814_38829[(2)] = null);

(statearr_38814_38829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__33801__auto___38819,temp_chan,out_chan))
;
return ((function (switch__33778__auto__,c__33801__auto___38819,temp_chan,out_chan){
return (function() {
var huginn$sensors$sensor_chan_$_state_machine__33779__auto__ = null;
var huginn$sensors$sensor_chan_$_state_machine__33779__auto____0 = (function (){
var statearr_38815 = [null,null,null,null,null,null,null,null,null];
(statearr_38815[(0)] = huginn$sensors$sensor_chan_$_state_machine__33779__auto__);

(statearr_38815[(1)] = (1));

return statearr_38815;
});
var huginn$sensors$sensor_chan_$_state_machine__33779__auto____1 = (function (state_38796){
while(true){
var ret_value__33780__auto__ = (function (){try{while(true){
var result__33781__auto__ = switch__33778__auto__.call(null,state_38796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33781__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33781__auto__;
}
break;
}
}catch (e38816){if((e38816 instanceof Object)){
var ex__33782__auto__ = e38816;
var statearr_38817_38830 = state_38796;
(statearr_38817_38830[(5)] = ex__33782__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38831 = state_38796;
state_38796 = G__38831;
continue;
} else {
return ret_value__33780__auto__;
}
break;
}
});
huginn$sensors$sensor_chan_$_state_machine__33779__auto__ = function(state_38796){
switch(arguments.length){
case 0:
return huginn$sensors$sensor_chan_$_state_machine__33779__auto____0.call(this);
case 1:
return huginn$sensors$sensor_chan_$_state_machine__33779__auto____1.call(this,state_38796);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$sensors$sensor_chan_$_state_machine__33779__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$sensors$sensor_chan_$_state_machine__33779__auto____0;
huginn$sensors$sensor_chan_$_state_machine__33779__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$sensors$sensor_chan_$_state_machine__33779__auto____1;
return huginn$sensors$sensor_chan_$_state_machine__33779__auto__;
})()
;})(switch__33778__auto__,c__33801__auto___38819,temp_chan,out_chan))
})();
var state__33803__auto__ = (function (){var statearr_38818 = f__33802__auto__.call(null);
(statearr_38818[(6)] = c__33801__auto___38819);

return statearr_38818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33803__auto__);
});})(c__33801__auto___38819,temp_chan,out_chan))
);


return out_chan;
});
huginn.sensors.cleanup_sensor = (function huginn$sensors$cleanup_sensor(p__38832){
var map__38833 = p__38832;
var map__38833__$1 = ((((!((map__38833 == null)))?((((map__38833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38833):map__38833);
var system = map__38833__$1;
var sensor_chan = cljs.core.get.call(null,map__38833__$1,new cljs.core.Keyword(null,"sensor-chan","sensor-chan",-1323578869));
cljs.core.async.close_BANG_.call(null,sensor_chan);

return cljs.core.dissoc.call(null,system,new cljs.core.Keyword(null,"sensor-chan","sensor-chan",-1323578869));
});
huginn.sensors._start_mix_sensor = (function huginn$sensors$_start_mix_sensor(sensor_name,sensor_gpio,p__38835){
var map__38836 = p__38835;
var map__38836__$1 = ((((!((map__38836 == null)))?((((map__38836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38836):map__38836);
var system = map__38836__$1;
var telemetry_chan = cljs.core.get.call(null,map__38836__$1,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503));
var sensor_chan = huginn.sensors.sensor_chan.call(null,sensor_name,sensor_gpio);
var mixer = cljs.core.async.mix.call(null,telemetry_chan);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.sensors","/tmp/form-init4426379521422539618.clj",62,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sensor_chan,mixer,map__38836,map__38836__$1,system,telemetry_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["connecting sensor to mixer"], null);
});})(sensor_chan,mixer,map__38836,map__38836__$1,system,telemetry_chan))
,null)),null,-1947431593);

cljs.core.async.admix.call(null,mixer,sensor_chan);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,cljs.core.assoc.call(null,system,new cljs.core.Keyword(null,"mixer","mixer",-120313315),mixer),new cljs.core.Keyword(null,"sensor-chan","sensor-chan",-1323578869),sensor_chan)], null);
});
huginn.sensors.start_mix_sensor = (function huginn$sensors$start_mix_sensor(system_promise,sensor_name,sensor_gpio){
return promesa.core.then.call(null,system_promise,cljs.core.partial.call(null,huginn.sensors._start_mix_sensor,sensor_name,sensor_gpio));
});

//# sourceMappingURL=sensors.js.map
