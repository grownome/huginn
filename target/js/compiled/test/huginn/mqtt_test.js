// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('huginn.mqtt_test');
goog.require('cljs.core');
goog.require('huginn.mqtt');
goog.require('huginn.config');
goog.require('cljs.core.async');
goog.require('cljs.test');
huginn.mqtt_test.tele_chan = (function huginn$mqtt_test$tele_chan(){
return cljs.test.test_var.call(null,huginn.mqtt_test.tele_chan.cljs$lang$var);
});
huginn.mqtt_test.tele_chan.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"telemetry channel should have data on it");

try{if(typeof huginn.mqtt_test.t_huginn$mqtt_test46506 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
huginn.mqtt_test.t_huginn$mqtt_test46506 = (function (meta46507){
this.meta46507 = meta46507;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
huginn.mqtt_test.t_huginn$mqtt_test46506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46508,meta46507__$1){
var self__ = this;
var _46508__$1 = this;
return (new huginn.mqtt_test.t_huginn$mqtt_test46506(meta46507__$1));
});

huginn.mqtt_test.t_huginn$mqtt_test46506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46508){
var self__ = this;
var _46508__$1 = this;
return self__.meta46507;
});

huginn.mqtt_test.t_huginn$mqtt_test46506.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL;

huginn.mqtt_test.t_huginn$mqtt_test46506.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___21266__auto__ = self____$1;
var c__17681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto__,___21266__auto__,self____$1){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto__,___21266__auto__,self____$1){
return (function (state_46551){
var state_val_46552 = (state_46551[(1)]);
if((state_val_46552 === (1))){
var inst_46510 = huginn.mqtt.tele_chan.call(null,huginn.config.default_options);
var state_46551__$1 = (function (){var statearr_46553 = state_46551;
(statearr_46553[(7)] = inst_46510);

return statearr_46553;
})();
var statearr_46554_46626 = state_46551__$1;
(statearr_46554_46626[(2)] = null);

(statearr_46554_46626[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (2))){
var inst_46548 = (state_46551[(2)]);
var inst_46549 = done.call(null);
var state_46551__$1 = (function (){var statearr_46555 = state_46551;
(statearr_46555[(8)] = inst_46548);

return statearr_46555;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46551__$1,inst_46549);
} else {
if((state_val_46552 === (3))){
var inst_46511 = (state_46551[(2)]);
var inst_46512 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46513 = cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol("a","<!","a/<!",-1961915548,null),new cljs.core.Symbol(null,"c","c",-122660552,null))));
var inst_46514 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_46513,inst_46511,null];
var inst_46515 = cljs.core.PersistentHashMap.fromArrays(inst_46512,inst_46514);
var inst_46516 = cljs.test.do_report.call(null,inst_46515);
var state_46551__$1 = state_46551;
var statearr_46556_46627 = state_46551__$1;
(statearr_46556_46627[(2)] = inst_46516);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46551__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (4))){
var inst_46510 = (state_46551[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46551,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_46551__$1 = state_46551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46551__$1,(5),inst_46510);
} else {
if((state_val_46552 === (5))){
var inst_46524 = (state_46551[(9)]);
var inst_46525 = (state_46551[(10)]);
var inst_46521 = (state_46551[(2)]);
var inst_46522 = cljs.core._EQ_.call(null,null,inst_46521);
var inst_46523 = cljs.core.List.EMPTY;
var inst_46524__$1 = cljs.core._conj.call(null,inst_46523,inst_46522);
var inst_46525__$1 = cljs.core.apply.call(null,cljs.core.not,inst_46524__$1);
var state_46551__$1 = (function (){var statearr_46557 = state_46551;
(statearr_46557[(9)] = inst_46524__$1);

(statearr_46557[(10)] = inst_46525__$1);

return statearr_46557;
})();
if(cljs.core.truth_(inst_46525__$1)){
var statearr_46558_46628 = state_46551__$1;
(statearr_46558_46628[(1)] = (6));

} else {
var statearr_46559_46629 = state_46551__$1;
(statearr_46559_46629[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (6))){
var inst_46524 = (state_46551[(9)]);
var inst_46527 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46528 = cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol("a","<!","a/<!",-1961915548,null),new cljs.core.Symbol(null,"c","c",-122660552,null))));
var inst_46529 = cljs.core.cons.call(null,cljs.core.not,inst_46524);
var inst_46530 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_46528,inst_46529,null];
var inst_46531 = cljs.core.PersistentHashMap.fromArrays(inst_46527,inst_46530);
var inst_46532 = cljs.test.do_report.call(null,inst_46531);
var state_46551__$1 = state_46551;
var statearr_46560_46630 = state_46551__$1;
(statearr_46560_46630[(2)] = inst_46532);

(statearr_46560_46630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (7))){
var inst_46524 = (state_46551[(9)]);
var inst_46534 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46535 = cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol("a","<!","a/<!",-1961915548,null),new cljs.core.Symbol(null,"c","c",-122660552,null))));
var inst_46536 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_46537 = cljs.core.cons.call(null,inst_46536,inst_46524);
var inst_46538 = cljs.core.List.EMPTY;
var inst_46539 = cljs.core._conj.call(null,inst_46538,inst_46537);
var inst_46540 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_46541 = cljs.core._conj.call(null,inst_46539,inst_46540);
var inst_46542 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_46535,inst_46541,null];
var inst_46543 = cljs.core.PersistentHashMap.fromArrays(inst_46534,inst_46542);
var inst_46544 = cljs.test.do_report.call(null,inst_46543);
var state_46551__$1 = state_46551;
var statearr_46561_46631 = state_46551__$1;
(statearr_46561_46631[(2)] = inst_46544);

(statearr_46561_46631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46552 === (8))){
var inst_46525 = (state_46551[(10)]);
var inst_46546 = (state_46551[(2)]);
var state_46551__$1 = (function (){var statearr_46562 = state_46551;
(statearr_46562[(11)] = inst_46546);

return statearr_46562;
})();
var statearr_46563_46632 = state_46551__$1;
(statearr_46563_46632[(2)] = inst_46525);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46551__$1);

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
});})(c__17681__auto__,___21266__auto__,self____$1))
;
return ((function (switch__17591__auto__,c__17681__auto__,___21266__auto__,self____$1){
return (function() {
var huginn$mqtt_test$state_machine__17592__auto__ = null;
var huginn$mqtt_test$state_machine__17592__auto____0 = (function (){
var statearr_46564 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46564[(0)] = huginn$mqtt_test$state_machine__17592__auto__);

(statearr_46564[(1)] = (1));

return statearr_46564;
});
var huginn$mqtt_test$state_machine__17592__auto____1 = (function (state_46551){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_46551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e46565){if((e46565 instanceof Object)){
var ex__17595__auto__ = e46565;
var statearr_46566_46633 = state_46551;
(statearr_46566_46633[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46634 = state_46551;
state_46551 = G__46634;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
huginn$mqtt_test$state_machine__17592__auto__ = function(state_46551){
switch(arguments.length){
case 0:
return huginn$mqtt_test$state_machine__17592__auto____0.call(this);
case 1:
return huginn$mqtt_test$state_machine__17592__auto____1.call(this,state_46551);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt_test$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt_test$state_machine__17592__auto____0;
huginn$mqtt_test$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt_test$state_machine__17592__auto____1;
return huginn$mqtt_test$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__,___21266__auto__,self____$1))
})();
var state__17683__auto__ = (function (){var statearr_46567 = f__17682__auto__.call(null);
(statearr_46567[(6)] = c__17681__auto__);

return statearr_46567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto__,___21266__auto__,self____$1))
);

return c__17681__auto__;
});

huginn.mqtt_test.t_huginn$mqtt_test46506.prototype.apply = (function (self__,args46509){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args46509)));
});

huginn.mqtt_test.t_huginn$mqtt_test46506.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___21266__auto__ = this;
var c__17681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto__,___21266__auto__){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto__,___21266__auto__){
return (function (state_46609){
var state_val_46610 = (state_46609[(1)]);
if((state_val_46610 === (1))){
var inst_46568 = huginn.mqtt.tele_chan.call(null,huginn.config.default_options);
var state_46609__$1 = (function (){var statearr_46611 = state_46609;
(statearr_46611[(7)] = inst_46568);

return statearr_46611;
})();
var statearr_46612_46635 = state_46609__$1;
(statearr_46612_46635[(2)] = null);

(statearr_46612_46635[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46610 === (2))){
var inst_46606 = (state_46609[(2)]);
var inst_46607 = done.call(null);
var state_46609__$1 = (function (){var statearr_46613 = state_46609;
(statearr_46613[(8)] = inst_46606);

return statearr_46613;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46609__$1,inst_46607);
} else {
if((state_val_46610 === (3))){
var inst_46569 = (state_46609[(2)]);
var inst_46570 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46571 = cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol("a","<!","a/<!",-1961915548,null),new cljs.core.Symbol(null,"c","c",-122660552,null))));
var inst_46572 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_46571,inst_46569,null];
var inst_46573 = cljs.core.PersistentHashMap.fromArrays(inst_46570,inst_46572);
var inst_46574 = cljs.test.do_report.call(null,inst_46573);
var state_46609__$1 = state_46609;
var statearr_46614_46636 = state_46609__$1;
(statearr_46614_46636[(2)] = inst_46574);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46609__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46610 === (4))){
var inst_46568 = (state_46609[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46609,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_46609__$1 = state_46609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46609__$1,(5),inst_46568);
} else {
if((state_val_46610 === (5))){
var inst_46583 = (state_46609[(9)]);
var inst_46582 = (state_46609[(10)]);
var inst_46579 = (state_46609[(2)]);
var inst_46580 = cljs.core._EQ_.call(null,null,inst_46579);
var inst_46581 = cljs.core.List.EMPTY;
var inst_46582__$1 = cljs.core._conj.call(null,inst_46581,inst_46580);
var inst_46583__$1 = cljs.core.apply.call(null,cljs.core.not,inst_46582__$1);
var state_46609__$1 = (function (){var statearr_46615 = state_46609;
(statearr_46615[(9)] = inst_46583__$1);

(statearr_46615[(10)] = inst_46582__$1);

return statearr_46615;
})();
if(cljs.core.truth_(inst_46583__$1)){
var statearr_46616_46637 = state_46609__$1;
(statearr_46616_46637[(1)] = (6));

} else {
var statearr_46617_46638 = state_46609__$1;
(statearr_46617_46638[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46610 === (6))){
var inst_46582 = (state_46609[(10)]);
var inst_46585 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46586 = cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol("a","<!","a/<!",-1961915548,null),new cljs.core.Symbol(null,"c","c",-122660552,null))));
var inst_46587 = cljs.core.cons.call(null,cljs.core.not,inst_46582);
var inst_46588 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_46586,inst_46587,null];
var inst_46589 = cljs.core.PersistentHashMap.fromArrays(inst_46585,inst_46588);
var inst_46590 = cljs.test.do_report.call(null,inst_46589);
var state_46609__$1 = state_46609;
var statearr_46618_46639 = state_46609__$1;
(statearr_46618_46639[(2)] = inst_46590);

(statearr_46618_46639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46610 === (7))){
var inst_46582 = (state_46609[(10)]);
var inst_46592 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_46593 = cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),null,cljs.core.list(new cljs.core.Symbol("a","<!","a/<!",-1961915548,null),new cljs.core.Symbol(null,"c","c",-122660552,null))));
var inst_46594 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_46595 = cljs.core.cons.call(null,inst_46594,inst_46582);
var inst_46596 = cljs.core.List.EMPTY;
var inst_46597 = cljs.core._conj.call(null,inst_46596,inst_46595);
var inst_46598 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_46599 = cljs.core._conj.call(null,inst_46597,inst_46598);
var inst_46600 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_46593,inst_46599,null];
var inst_46601 = cljs.core.PersistentHashMap.fromArrays(inst_46592,inst_46600);
var inst_46602 = cljs.test.do_report.call(null,inst_46601);
var state_46609__$1 = state_46609;
var statearr_46619_46640 = state_46609__$1;
(statearr_46619_46640[(2)] = inst_46602);

(statearr_46619_46640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46610 === (8))){
var inst_46583 = (state_46609[(9)]);
var inst_46604 = (state_46609[(2)]);
var state_46609__$1 = (function (){var statearr_46620 = state_46609;
(statearr_46620[(11)] = inst_46604);

return statearr_46620;
})();
var statearr_46621_46641 = state_46609__$1;
(statearr_46621_46641[(2)] = inst_46583);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46609__$1);

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
});})(c__17681__auto__,___21266__auto__))
;
return ((function (switch__17591__auto__,c__17681__auto__,___21266__auto__){
return (function() {
var huginn$mqtt_test$state_machine__17592__auto__ = null;
var huginn$mqtt_test$state_machine__17592__auto____0 = (function (){
var statearr_46622 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46622[(0)] = huginn$mqtt_test$state_machine__17592__auto__);

(statearr_46622[(1)] = (1));

return statearr_46622;
});
var huginn$mqtt_test$state_machine__17592__auto____1 = (function (state_46609){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_46609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e46623){if((e46623 instanceof Object)){
var ex__17595__auto__ = e46623;
var statearr_46624_46642 = state_46609;
(statearr_46624_46642[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46643 = state_46609;
state_46609 = G__46643;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
huginn$mqtt_test$state_machine__17592__auto__ = function(state_46609){
switch(arguments.length){
case 0:
return huginn$mqtt_test$state_machine__17592__auto____0.call(this);
case 1:
return huginn$mqtt_test$state_machine__17592__auto____1.call(this,state_46609);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$mqtt_test$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$mqtt_test$state_machine__17592__auto____0;
huginn$mqtt_test$state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$mqtt_test$state_machine__17592__auto____1;
return huginn$mqtt_test$state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__,___21266__auto__))
})();
var state__17683__auto__ = (function (){var statearr_46625 = f__17682__auto__.call(null);
(statearr_46625[(6)] = c__17681__auto__);

return statearr_46625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto__,___21266__auto__))
);

return c__17681__auto__;
});

huginn.mqtt_test.t_huginn$mqtt_test46506.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta46507","meta46507",87782789,null)], null);
});

huginn.mqtt_test.t_huginn$mqtt_test46506.cljs$lang$type = true;

huginn.mqtt_test.t_huginn$mqtt_test46506.cljs$lang$ctorStr = "huginn.mqtt-test/t_huginn$mqtt_test46506";

huginn.mqtt_test.t_huginn$mqtt_test46506.cljs$lang$ctorPrWriter = (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"huginn.mqtt-test/t_huginn$mqtt_test46506");
});

huginn.mqtt_test.__GT_t_huginn$mqtt_test46506 = (function huginn$mqtt_test$__GT_t_huginn$mqtt_test46506(meta46507){
return (new huginn.mqtt_test.t_huginn$mqtt_test46506(meta46507));
});

}

return (new huginn.mqtt_test.t_huginn$mqtt_test46506(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

huginn.mqtt_test.tele_chan.cljs$lang$var = new cljs.core.Var(function(){return huginn.mqtt_test.tele_chan;},new cljs.core.Symbol("huginn.mqtt-test","tele-chan","huginn.mqtt-test/tele-chan",96805973,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"huginn.mqtt-test","huginn.mqtt-test",1222891859,null),new cljs.core.Symbol(null,"tele-chan","tele-chan",1396327281,null),"/home/fode/src/huginn/test/huginn/mqtt_test.cljs",21,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(huginn.mqtt_test.tele_chan)?huginn.mqtt_test.tele_chan.cljs$lang$test:null)]));

//# sourceMappingURL=mqtt_test.js.map
