// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('huginn.camera');
goog.require('cljs.core');
goog.require('promesa.core');
goog.require('taoensso.timbre');
goog.require('cljs.core.async');
goog.require('cljs_node_io.core');
huginn.camera.node$module$raspicam = require('raspicam');
huginn.camera.cam_handlers = (function huginn$camera$cam_handlers(success_fn,stop_fn,restart_fn,read_chan){
return new cljs.core.PersistentArrayMap(null, 4, ["start",(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.camera","/tmp/form-init3898094783055401493.clj",15,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["camera connected"], null);
}),null)),null,1837971951);

return success_fn.call(null);
}),"stop",(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init3898094783055401493.clj",17,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["camera stopping"], null);
}),null)),null,755148391);

return stop_fn.call(null);
}),"exit",(function (err){
restart_fn.call(null);

return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.camera","/tmp/form-init3898094783055401493.clj",19,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exit: ",err], null);
}),null)),null,-993433685);
}),"read",(function (err,timestamp,filename){
try{var result__35585__auto___37043 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [err,timestamp,filename], null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init3898094783055401493.clj",21,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__35585__auto___37043){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"timestamp","timestamp",-2074956798,null),new cljs.core.Symbol(null,"filename","filename",211690744,null)], null),"=>",result__35585__auto___37043], null);
});})(result__35585__auto___37043))
,null)),null,671763070);

}catch (e37030){if((e37030 instanceof Error)){
var e__35547__auto___37044 = e37030;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.camera","/tmp/form-init3898094783055401493.clj",21,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__35547__auto___37044){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__35547__auto___37044], null);
});})(e__35547__auto___37044))
,null)),null,-698993785);

throw e__35547__auto___37044;
} else {
throw e37030;

}
}
var c__36917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto__){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto__){
return (function (state_37037){
var state_val_37038 = (state_37037[(1)]);
if((state_val_37038 === (1))){
var inst_37031 = [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"filename","filename",-1428840783)];
var inst_37032 = [err,timestamp,filename];
var inst_37033 = cljs.core.PersistentHashMap.fromArrays(inst_37031,inst_37032);
var state_37037__$1 = state_37037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37037__$1,(2),read_chan,inst_37033);
} else {
if((state_val_37038 === (2))){
var inst_37035 = (state_37037[(2)]);
var state_37037__$1 = state_37037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37037__$1,inst_37035);
} else {
return null;
}
}
});})(c__36917__auto__))
;
return ((function (switch__36894__auto__,c__36917__auto__){
return (function() {
var huginn$camera$cam_handlers_$_state_machine__36895__auto__ = null;
var huginn$camera$cam_handlers_$_state_machine__36895__auto____0 = (function (){
var statearr_37039 = [null,null,null,null,null,null,null];
(statearr_37039[(0)] = huginn$camera$cam_handlers_$_state_machine__36895__auto__);

(statearr_37039[(1)] = (1));

return statearr_37039;
});
var huginn$camera$cam_handlers_$_state_machine__36895__auto____1 = (function (state_37037){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37040){if((e37040 instanceof Object)){
var ex__36898__auto__ = e37040;
var statearr_37041_37045 = state_37037;
(statearr_37041_37045[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37046 = state_37037;
state_37037 = G__37046;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$camera$cam_handlers_$_state_machine__36895__auto__ = function(state_37037){
switch(arguments.length){
case 0:
return huginn$camera$cam_handlers_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$camera$cam_handlers_$_state_machine__36895__auto____1.call(this,state_37037);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$camera$cam_handlers_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$camera$cam_handlers_$_state_machine__36895__auto____0;
huginn$camera$cam_handlers_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$camera$cam_handlers_$_state_machine__36895__auto____1;
return huginn$camera$cam_handlers_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto__))
})();
var state__36919__auto__ = (function (){var statearr_37042 = f__36918__auto__.call(null);
(statearr_37042[(6)] = c__36917__auto__);

return statearr_37042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto__))
);

return c__36917__auto__;
})], null);
});
huginn.camera.add_handlers = (function huginn$camera$add_handlers(camera,handlers){
var seq__37047 = cljs.core.seq.call(null,handlers);
var chunk__37048 = null;
var count__37049 = (0);
var i__37050 = (0);
while(true){
if((i__37050 < count__37049)){
var vec__37051 = cljs.core._nth.call(null,chunk__37048,i__37050);
var key = cljs.core.nth.call(null,vec__37051,(0),null);
var hand = cljs.core.nth.call(null,vec__37051,(1),null);
camera.on(key,hand);

var G__37057 = seq__37047;
var G__37058 = chunk__37048;
var G__37059 = count__37049;
var G__37060 = (i__37050 + (1));
seq__37047 = G__37057;
chunk__37048 = G__37058;
count__37049 = G__37059;
i__37050 = G__37060;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37047);
if(temp__5457__auto__){
var seq__37047__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37047__$1)){
var c__31803__auto__ = cljs.core.chunk_first.call(null,seq__37047__$1);
var G__37061 = cljs.core.chunk_rest.call(null,seq__37047__$1);
var G__37062 = c__31803__auto__;
var G__37063 = cljs.core.count.call(null,c__31803__auto__);
var G__37064 = (0);
seq__37047 = G__37061;
chunk__37048 = G__37062;
count__37049 = G__37063;
i__37050 = G__37064;
continue;
} else {
var vec__37054 = cljs.core.first.call(null,seq__37047__$1);
var key = cljs.core.nth.call(null,vec__37054,(0),null);
var hand = cljs.core.nth.call(null,vec__37054,(1),null);
camera.on(key,hand);

var G__37065 = cljs.core.next.call(null,seq__37047__$1);
var G__37066 = null;
var G__37067 = (0);
var G__37068 = (0);
seq__37047 = G__37065;
chunk__37048 = G__37066;
count__37049 = G__37067;
i__37050 = G__37068;
continue;
}
} else {
return null;
}
}
break;
}
});
huginn.camera.chunk_img = (function huginn$camera$chunk_img(img,chunk_size){
if((img.length < chunk_size)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [img], null);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__31754__auto__ = (function huginn$camera$chunk_img_$_iter__37069(s__37070){
return (new cljs.core.LazySeq(null,(function (){
var s__37070__$1 = s__37070;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37070__$1);
if(temp__5457__auto__){
var s__37070__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37070__$2)){
var c__31752__auto__ = cljs.core.chunk_first.call(null,s__37070__$2);
var size__31753__auto__ = cljs.core.count.call(null,c__31752__auto__);
var b__37072 = cljs.core.chunk_buffer.call(null,size__31753__auto__);
if((function (){var i__37071 = (0);
while(true){
if((i__37071 < size__31753__auto__)){
var start = cljs.core._nth.call(null,c__31752__auto__,i__37071);
var end = (function (){var x__31231__auto__ = img.length;
var y__31232__auto__ = (start + chunk_size);
return ((x__31231__auto__ < y__31232__auto__) ? x__31231__auto__ : y__31232__auto__);
})();
cljs.core.chunk_append.call(null,b__37072,(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init3898094783055401493.clj",43,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (i__37071,end,start,c__31752__auto__,size__31753__auto__,b__37072,s__37070__$2,temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["at ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null)], null);
});})(i__37071,end,start,c__31752__auto__,size__31753__auto__,b__37072,s__37070__$2,temp__5457__auto__))
,null)),null,-974069945);

return (new Buffer(cljs.core.into_array.call(null,cljs.core.array_chunk.call(null,img,start,end))));
})()
);

var G__37073 = (i__37071 + (1));
i__37071 = G__37073;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37072),huginn$camera$chunk_img_$_iter__37069.call(null,cljs.core.chunk_rest.call(null,s__37070__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37072),null);
}
} else {
var start = cljs.core.first.call(null,s__37070__$2);
var end = (function (){var x__31231__auto__ = img.length;
var y__31232__auto__ = (start + chunk_size);
return ((x__31231__auto__ < y__31232__auto__) ? x__31231__auto__ : y__31232__auto__);
})();
return cljs.core.cons.call(null,(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init3898094783055401493.clj",43,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (end,start,s__37070__$2,temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["at ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null)], null);
});})(end,start,s__37070__$2,temp__5457__auto__))
,null)),null,1094397199);

return (new Buffer(cljs.core.into_array.call(null,cljs.core.array_chunk.call(null,img,start,end))));
})()
,huginn$camera$chunk_img_$_iter__37069.call(null,cljs.core.rest.call(null,s__37070__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31754__auto__.call(null,cljs.core.range.call(null,(0),img.length,chunk_size));
})());
}
});
huginn.camera.read_imgs = (function huginn$camera$read_imgs(output_dir,in$,out){
var c__36917__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36917__auto__){
return (function (){
var f__36918__auto__ = (function (){var switch__36894__auto__ = ((function (c__36917__auto__){
return (function (state_37155){
var state_val_37156 = (state_37155[(1)]);
if((state_val_37156 === (7))){
var inst_37093 = (state_37155[(2)]);
var state_37155__$1 = state_37155;
if(cljs.core.truth_(inst_37093)){
var statearr_37157_37189 = state_37155__$1;
(statearr_37157_37189[(1)] = (11));

} else {
var statearr_37158_37190 = state_37155__$1;
(statearr_37158_37190[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (20))){
var inst_37151 = (state_37155[(2)]);
var state_37155__$1 = state_37155;
var statearr_37159_37191 = state_37155__$1;
(statearr_37159_37191[(2)] = inst_37151);

(statearr_37159_37191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (1))){
var state_37155__$1 = state_37155;
var statearr_37160_37192 = state_37155__$1;
(statearr_37160_37192[(2)] = null);

(statearr_37160_37192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (4))){
var inst_37077 = (state_37155[(7)]);
var inst_37077__$1 = (state_37155[(2)]);
var inst_37079 = (inst_37077__$1 == null);
var inst_37080 = cljs.core.not.call(null,inst_37079);
var state_37155__$1 = (function (){var statearr_37161 = state_37155;
(statearr_37161[(7)] = inst_37077__$1);

return statearr_37161;
})();
if(inst_37080){
var statearr_37162_37193 = state_37155__$1;
(statearr_37162_37193[(1)] = (5));

} else {
var statearr_37163_37194 = state_37155__$1;
(statearr_37163_37194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (15))){
var inst_37115 = (state_37155[(8)]);
var state_37155__$1 = state_37155;
var statearr_37164_37195 = state_37155__$1;
(statearr_37164_37195[(2)] = inst_37115);

(statearr_37164_37195[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (21))){
var inst_37136 = (state_37155[(9)]);
var inst_37134 = (state_37155[(10)]);
var inst_37114 = (state_37155[(11)]);
var inst_37140 = (state_37155[(12)]);
var inst_37128 = (state_37155[(13)]);
var inst_37115 = (state_37155[(8)]);
var inst_37101 = (state_37155[(14)]);
var inst_37129 = (state_37155[(15)]);
var inst_37116 = (state_37155[(16)]);
var inst_37098 = (state_37155[(17)]);
var inst_37100 = (state_37155[(18)]);
var inst_37145 = (state_37155[(2)]);
var inst_37146 = (function (){var complete = inst_37140;
var vec__37105 = inst_37114;
var timestamp = inst_37100;
var img_buffers = inst_37128;
var map__37075 = inst_37098;
var img_data = inst_37116;
var err = inst_37115;
var img_packets = inst_37136;
var header = inst_37134;
var filename = inst_37101;
var img_res = inst_37098;
var rand_id = inst_37129;
return ((function (complete,vec__37105,timestamp,img_buffers,map__37075,img_data,err,img_packets,header,filename,img_res,rand_id,inst_37136,inst_37134,inst_37114,inst_37140,inst_37128,inst_37115,inst_37101,inst_37129,inst_37116,inst_37098,inst_37100,inst_37145,state_val_37156,c__36917__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["done xforming"], null);
});
;})(complete,vec__37105,timestamp,img_buffers,map__37075,img_data,err,img_packets,header,filename,img_res,rand_id,inst_37136,inst_37134,inst_37114,inst_37140,inst_37128,inst_37115,inst_37101,inst_37129,inst_37116,inst_37098,inst_37100,inst_37145,state_val_37156,c__36917__auto__))
})();
var inst_37147 = (new cljs.core.Delay(inst_37146,null));
var inst_37148 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init3898094783055401493.clj",72,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37147,null,201981475);
var state_37155__$1 = (function (){var statearr_37165 = state_37155;
(statearr_37165[(19)] = inst_37148);

(statearr_37165[(20)] = inst_37145);

return statearr_37165;
})();
var statearr_37166_37196 = state_37155__$1;
(statearr_37166_37196[(2)] = null);

(statearr_37166_37196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (13))){
var inst_37101 = (state_37155[(14)]);
var inst_37098 = (state_37155[(17)]);
var inst_37100 = (state_37155[(18)]);
var inst_37098__$1 = (state_37155[(2)]);
var inst_37099 = cljs.core.get.call(null,inst_37098__$1,new cljs.core.Keyword(null,"err","err",-2089457205));
var inst_37100__$1 = cljs.core.get.call(null,inst_37098__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var inst_37101__$1 = cljs.core.get.call(null,inst_37098__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var inst_37102 = (function (){var map__37075 = inst_37098__$1;
var img_res = inst_37098__$1;
var err = inst_37099;
var timestamp = inst_37100__$1;
var filename = inst_37101__$1;
return ((function (map__37075,img_res,err,timestamp,filename,inst_37101,inst_37098,inst_37100,inst_37098__$1,inst_37099,inst_37100__$1,inst_37101__$1,state_val_37156,c__36917__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["xforming image ",filename], null);
});
;})(map__37075,img_res,err,timestamp,filename,inst_37101,inst_37098,inst_37100,inst_37098__$1,inst_37099,inst_37100__$1,inst_37101__$1,state_val_37156,c__36917__auto__))
})();
var inst_37103 = (new cljs.core.Delay(inst_37102,null));
var inst_37104 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init3898094783055401493.clj",51,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37103,null,-2075828940);
var inst_37108 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37101__$1)].join('');
var inst_37109 = [new cljs.core.Keyword(null,"encoding","encoding",1728578272)];
var inst_37110 = [""];
var inst_37111 = cljs.core.PersistentHashMap.fromArrays(inst_37109,inst_37110);
var inst_37112 = cljs_node_io.core.aslurp.call(null,inst_37108,inst_37111);
var state_37155__$1 = (function (){var statearr_37167 = state_37155;
(statearr_37167[(21)] = inst_37104);

(statearr_37167[(14)] = inst_37101__$1);

(statearr_37167[(17)] = inst_37098__$1);

(statearr_37167[(18)] = inst_37100__$1);

return statearr_37167;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37155__$1,(14),inst_37112);
} else {
if((state_val_37156 === (6))){
var state_37155__$1 = state_37155;
var statearr_37168_37197 = state_37155__$1;
(statearr_37168_37197[(2)] = false);

(statearr_37168_37197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (17))){
var inst_37121 = (state_37155[(2)]);
var state_37155__$1 = state_37155;
if(cljs.core.truth_(inst_37121)){
var statearr_37169_37198 = state_37155__$1;
(statearr_37169_37198[(1)] = (18));

} else {
var statearr_37170_37199 = state_37155__$1;
(statearr_37170_37199[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (3))){
var inst_37153 = (state_37155[(2)]);
var state_37155__$1 = state_37155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37155__$1,inst_37153);
} else {
if((state_val_37156 === (12))){
var inst_37077 = (state_37155[(7)]);
var state_37155__$1 = state_37155;
var statearr_37171_37200 = state_37155__$1;
(statearr_37171_37200[(2)] = inst_37077);

(statearr_37171_37200[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (2))){
var state_37155__$1 = state_37155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37155__$1,(4),in$);
} else {
if((state_val_37156 === (19))){
var inst_37136 = (state_37155[(9)]);
var inst_37134 = (state_37155[(10)]);
var inst_37114 = (state_37155[(11)]);
var inst_37140 = (state_37155[(12)]);
var inst_37128 = (state_37155[(13)]);
var inst_37115 = (state_37155[(8)]);
var inst_37101 = (state_37155[(14)]);
var inst_37129 = (state_37155[(15)]);
var inst_37116 = (state_37155[(16)]);
var inst_37098 = (state_37155[(17)]);
var inst_37100 = (state_37155[(18)]);
var inst_37128__$1 = huginn.camera.chunk_img.call(null,inst_37116,(100000));
var inst_37129__$1 = cljs.core.rand_int.call(null,(100000));
var inst_37130 = [new cljs.core.Keyword(null,"payload","payload",-383036092)];
var inst_37131 = cljs.core.count.call(null,inst_37128__$1);
var inst_37132 = ["split_image/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37131)].join('');
var inst_37133 = [inst_37132];
var inst_37134__$1 = cljs.core.PersistentHashMap.fromArrays(inst_37130,inst_37133);
var inst_37135 = (function (){var vec__37105 = inst_37114;
var timestamp = inst_37100;
var img_buffers = inst_37128__$1;
var map__37075 = inst_37098;
var img_data = inst_37116;
var err = inst_37115;
var header = inst_37134__$1;
var filename = inst_37101;
var img_res = inst_37098;
var rand_id = inst_37129__$1;
return ((function (vec__37105,timestamp,img_buffers,map__37075,img_data,err,header,filename,img_res,rand_id,inst_37136,inst_37134,inst_37114,inst_37140,inst_37128,inst_37115,inst_37101,inst_37129,inst_37116,inst_37098,inst_37100,inst_37128__$1,inst_37129__$1,inst_37130,inst_37131,inst_37132,inst_37133,inst_37134__$1,state_val_37156,c__36917__auto__){
return (function (index,payload){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"subfolder","subfolder",1044158439)],[payload,timestamp,["captures/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rand_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,img_buffers)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')]);
});
;})(vec__37105,timestamp,img_buffers,map__37075,img_data,err,header,filename,img_res,rand_id,inst_37136,inst_37134,inst_37114,inst_37140,inst_37128,inst_37115,inst_37101,inst_37129,inst_37116,inst_37098,inst_37100,inst_37128__$1,inst_37129__$1,inst_37130,inst_37131,inst_37132,inst_37133,inst_37134__$1,state_val_37156,c__36917__auto__))
})();
var inst_37136__$1 = cljs.core.map_indexed.call(null,inst_37135,inst_37128__$1);
var inst_37137 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37138 = [inst_37134__$1];
var inst_37139 = (new cljs.core.PersistentVector(null,1,(5),inst_37137,inst_37138,null));
var inst_37140__$1 = cljs.core.concat.call(null,inst_37139,inst_37136__$1);
var inst_37141 = (function (){var complete = inst_37140__$1;
var vec__37105 = inst_37114;
var timestamp = inst_37100;
var img_buffers = inst_37128__$1;
var map__37075 = inst_37098;
var img_data = inst_37116;
var err = inst_37115;
var img_packets = inst_37136__$1;
var header = inst_37134__$1;
var filename = inst_37101;
var img_res = inst_37098;
var rand_id = inst_37129__$1;
return ((function (complete,vec__37105,timestamp,img_buffers,map__37075,img_data,err,img_packets,header,filename,img_res,rand_id,inst_37136,inst_37134,inst_37114,inst_37140,inst_37128,inst_37115,inst_37101,inst_37129,inst_37116,inst_37098,inst_37100,inst_37128__$1,inst_37129__$1,inst_37130,inst_37131,inst_37132,inst_37133,inst_37134__$1,inst_37135,inst_37136__$1,inst_37137,inst_37138,inst_37139,inst_37140__$1,state_val_37156,c__36917__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["trying to write img packet"], null);
});
;})(complete,vec__37105,timestamp,img_buffers,map__37075,img_data,err,img_packets,header,filename,img_res,rand_id,inst_37136,inst_37134,inst_37114,inst_37140,inst_37128,inst_37115,inst_37101,inst_37129,inst_37116,inst_37098,inst_37100,inst_37128__$1,inst_37129__$1,inst_37130,inst_37131,inst_37132,inst_37133,inst_37134__$1,inst_37135,inst_37136__$1,inst_37137,inst_37138,inst_37139,inst_37140__$1,state_val_37156,c__36917__auto__))
})();
var inst_37142 = (new cljs.core.Delay(inst_37141,null));
var inst_37143 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init3898094783055401493.clj",70,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37142,null,-2117368015);
var state_37155__$1 = (function (){var statearr_37172 = state_37155;
(statearr_37172[(9)] = inst_37136__$1);

(statearr_37172[(10)] = inst_37134__$1);

(statearr_37172[(22)] = inst_37143);

(statearr_37172[(12)] = inst_37140__$1);

(statearr_37172[(13)] = inst_37128__$1);

(statearr_37172[(15)] = inst_37129__$1);

return statearr_37172;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37155__$1,(21),out,inst_37140__$1);
} else {
if((state_val_37156 === (11))){
var inst_37077 = (state_37155[(7)]);
var inst_37095 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37077);
var state_37155__$1 = state_37155;
var statearr_37173_37201 = state_37155__$1;
(statearr_37173_37201[(2)] = inst_37095);

(statearr_37173_37201[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (9))){
var state_37155__$1 = state_37155;
var statearr_37174_37202 = state_37155__$1;
(statearr_37174_37202[(2)] = false);

(statearr_37174_37202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (5))){
var inst_37077 = (state_37155[(7)]);
var inst_37082 = inst_37077.cljs$lang$protocol_mask$partition0$;
var inst_37083 = (inst_37082 & (64));
var inst_37084 = inst_37077.cljs$core$ISeq$;
var inst_37085 = (cljs.core.PROTOCOL_SENTINEL === inst_37084);
var inst_37086 = (inst_37083) || (inst_37085);
var state_37155__$1 = state_37155;
if(cljs.core.truth_(inst_37086)){
var statearr_37175_37203 = state_37155__$1;
(statearr_37175_37203[(1)] = (8));

} else {
var statearr_37176_37204 = state_37155__$1;
(statearr_37176_37204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (14))){
var inst_37114 = (state_37155[(11)]);
var inst_37115 = (state_37155[(8)]);
var inst_37114__$1 = (state_37155[(2)]);
var inst_37115__$1 = cljs.core.nth.call(null,inst_37114__$1,(0),null);
var inst_37116 = cljs.core.nth.call(null,inst_37114__$1,(1),null);
var state_37155__$1 = (function (){var statearr_37177 = state_37155;
(statearr_37177[(11)] = inst_37114__$1);

(statearr_37177[(8)] = inst_37115__$1);

(statearr_37177[(16)] = inst_37116);

return statearr_37177;
})();
if(cljs.core.truth_(inst_37115__$1)){
var statearr_37178_37205 = state_37155__$1;
(statearr_37178_37205[(1)] = (15));

} else {
var statearr_37179_37206 = state_37155__$1;
(statearr_37179_37206[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (16))){
var inst_37101 = (state_37155[(14)]);
var inst_37119 = cljs.core._EQ_.call(null,inst_37101,"");
var state_37155__$1 = state_37155;
var statearr_37180_37207 = state_37155__$1;
(statearr_37180_37207[(2)] = inst_37119);

(statearr_37180_37207[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (10))){
var inst_37090 = (state_37155[(2)]);
var state_37155__$1 = state_37155;
var statearr_37181_37208 = state_37155__$1;
(statearr_37181_37208[(2)] = inst_37090);

(statearr_37181_37208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (18))){
var inst_37114 = (state_37155[(11)]);
var inst_37115 = (state_37155[(8)]);
var inst_37101 = (state_37155[(14)]);
var inst_37116 = (state_37155[(16)]);
var inst_37098 = (state_37155[(17)]);
var inst_37100 = (state_37155[(18)]);
var inst_37123 = (function (){var map__37075 = inst_37098;
var img_res = inst_37098;
var err = inst_37115;
var timestamp = inst_37100;
var filename = inst_37101;
var vec__37105 = inst_37114;
var img_data = inst_37116;
return ((function (map__37075,img_res,err,timestamp,filename,vec__37105,img_data,inst_37114,inst_37115,inst_37101,inst_37116,inst_37098,inst_37100,state_val_37156,c__36917__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error reading image:",err," ",filename], null);
});
;})(map__37075,img_res,err,timestamp,filename,vec__37105,img_data,inst_37114,inst_37115,inst_37101,inst_37116,inst_37098,inst_37100,state_val_37156,c__36917__auto__))
})();
var inst_37124 = (new cljs.core.Delay(inst_37123,null));
var inst_37125 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.camera","/tmp/form-init3898094783055401493.clj",54,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_37124,null,1069392139);
var state_37155__$1 = (function (){var statearr_37182 = state_37155;
(statearr_37182[(23)] = inst_37125);

return statearr_37182;
})();
var statearr_37183_37209 = state_37155__$1;
(statearr_37183_37209[(2)] = null);

(statearr_37183_37209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37156 === (8))){
var state_37155__$1 = state_37155;
var statearr_37184_37210 = state_37155__$1;
(statearr_37184_37210[(2)] = true);

(statearr_37184_37210[(1)] = (10));


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
});})(c__36917__auto__))
;
return ((function (switch__36894__auto__,c__36917__auto__){
return (function() {
var huginn$camera$read_imgs_$_state_machine__36895__auto__ = null;
var huginn$camera$read_imgs_$_state_machine__36895__auto____0 = (function (){
var statearr_37185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37185[(0)] = huginn$camera$read_imgs_$_state_machine__36895__auto__);

(statearr_37185[(1)] = (1));

return statearr_37185;
});
var huginn$camera$read_imgs_$_state_machine__36895__auto____1 = (function (state_37155){
while(true){
var ret_value__36896__auto__ = (function (){try{while(true){
var result__36897__auto__ = switch__36894__auto__.call(null,state_37155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36897__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36897__auto__;
}
break;
}
}catch (e37186){if((e37186 instanceof Object)){
var ex__36898__auto__ = e37186;
var statearr_37187_37211 = state_37155;
(statearr_37187_37211[(5)] = ex__36898__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36896__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37212 = state_37155;
state_37155 = G__37212;
continue;
} else {
return ret_value__36896__auto__;
}
break;
}
});
huginn$camera$read_imgs_$_state_machine__36895__auto__ = function(state_37155){
switch(arguments.length){
case 0:
return huginn$camera$read_imgs_$_state_machine__36895__auto____0.call(this);
case 1:
return huginn$camera$read_imgs_$_state_machine__36895__auto____1.call(this,state_37155);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$camera$read_imgs_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$camera$read_imgs_$_state_machine__36895__auto____0;
huginn$camera$read_imgs_$_state_machine__36895__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$camera$read_imgs_$_state_machine__36895__auto____1;
return huginn$camera$read_imgs_$_state_machine__36895__auto__;
})()
;})(switch__36894__auto__,c__36917__auto__))
})();
var state__36919__auto__ = (function (){var statearr_37188 = f__36918__auto__.call(null);
(statearr_37188[(6)] = c__36917__auto__);

return statearr_37188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36919__auto__);
});})(c__36917__auto__))
);

return c__36917__auto__;
});
huginn.camera.build_camera = (function huginn$camera$build_camera(var_args){
var G__37214 = arguments.length;
switch (G__37214) {
case 0:
return huginn.camera.build_camera.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return huginn.camera.build_camera.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

huginn.camera.build_camera.cljs$core$IFn$_invoke$arity$0 = (function (){
return huginn.camera.build_camera.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

huginn.camera.build_camera.cljs$core$IFn$_invoke$arity$1 = (function (p__37215){
var map__37216 = p__37215;
var map__37216__$1 = ((((!((map__37216 == null)))?((((map__37216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37216):map__37216);
var opts = map__37216__$1;
var output_dir = cljs.core.get.call(null,map__37216__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991),"pics");
var tl = cljs.core.get.call(null,map__37216__$1,new cljs.core.Keyword(null,"tl","tl",-35265210),(((60) * (1000)) * (10)));
var mode = cljs.core.get.call(null,map__37216__$1,new cljs.core.Keyword(null,"mode","mode",654403691),"timelapse");
var encoding = cljs.core.get.call(null,map__37216__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272),"jpg");
return promesa.core.promise.call(null,((function (map__37216,map__37216__$1,opts,output_dir,tl,mode,encoding){
return (function (resolve,reject){
var snap_chan = cljs.core.async.chan.call(null);
var data_chan = cljs.core.async.chan.call(null);
var camera = (new huginn.camera.node$module$raspicam(({"output": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/%04d_img.jpg"].join(''), "mode": mode, "encoding": encoding, "tl": tl})));
var output = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"raw-chan","raw-chan",-779682305),snap_chan,new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063),data_chan,new cljs.core.Keyword(null,"camera","camera",-1190348585),camera], null);
var handlers = huginn.camera.cam_handlers.call(null,((function (snap_chan,data_chan,camera,output,map__37216,map__37216__$1,opts,output_dir,tl,mode,encoding){
return (function (){
return resolve.call(null,output);
});})(snap_chan,data_chan,camera,output,map__37216,map__37216__$1,opts,output_dir,tl,mode,encoding))
,((function (snap_chan,data_chan,camera,output,map__37216,map__37216__$1,opts,output_dir,tl,mode,encoding){
return (function (){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs_node_io.core.delete_file,cljs_node_io.core.file_seq.call(null,output_dir)));
});})(snap_chan,data_chan,camera,output,map__37216,map__37216__$1,opts,output_dir,tl,mode,encoding))
,((function (snap_chan,data_chan,camera,output,map__37216,map__37216__$1,opts,output_dir,tl,mode,encoding){
return (function (){
return camera.start();
});})(snap_chan,data_chan,camera,output,map__37216,map__37216__$1,opts,output_dir,tl,mode,encoding))
,snap_chan);
huginn.camera.read_imgs.call(null,output_dir,snap_chan,data_chan);

huginn.camera.add_handlers.call(null,camera,handlers);

return camera.start();
});})(map__37216,map__37216__$1,opts,output_dir,tl,mode,encoding))
);
});

huginn.camera.build_camera.cljs$lang$maxFixedArity = 1;

huginn.camera.cleanup_camera = (function huginn$camera$cleanup_camera(p__37219){
var map__37220 = p__37219;
var map__37220__$1 = ((((!((map__37220 == null)))?((((map__37220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37220):map__37220);
var system = map__37220__$1;
var camera = cljs.core.get.call(null,map__37220__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var snap_chan = cljs.core.get.call(null,map__37220__$1,new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063));
camera.stop();

cljs.core.async.close_BANG_.call(null,snap_chan);

return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,system,new cljs.core.Keyword(null,"camera","camera",-1190348585)),new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063));
});
huginn.camera._start_mix_camera = (function huginn$camera$_start_mix_camera(p__37222){
var map__37223 = p__37222;
var map__37223__$1 = ((((!((map__37223 == null)))?((((map__37223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37223):map__37223);
var system = map__37223__$1;
var telemetry_chan = cljs.core.get.call(null,map__37223__$1,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503));
var camera_p = huginn.camera.build_camera.call(null);
var mixer = cljs.core.async.mix.call(null,telemetry_chan);
return promesa.core.then.call(null,camera_p,((function (camera_p,mixer,map__37223,map__37223__$1,system,telemetry_chan){
return (function (p__37225){
var map__37226 = p__37225;
var map__37226__$1 = ((((!((map__37226 == null)))?((((map__37226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37226):map__37226);
var snap_chan = cljs.core.get.call(null,map__37226__$1,new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063));
var camera = cljs.core.get.call(null,map__37226__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.camera","/tmp/form-init3898094783055401493.clj",123,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__37226,map__37226__$1,snap_chan,camera,camera_p,mixer,map__37223,map__37223__$1,system,telemetry_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["connecting camera to mixer"], null);
});})(map__37226,map__37226__$1,snap_chan,camera,camera_p,mixer,map__37223,map__37223__$1,system,telemetry_chan))
,null)),null,1556916337);

cljs.core.async.admix.call(null,mixer,snap_chan);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,system,new cljs.core.Keyword(null,"camera","camera",-1190348585),camera),new cljs.core.Keyword(null,"mixer","mixer",-120313315),mixer),new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063),snap_chan)], null);
});})(camera_p,mixer,map__37223,map__37223__$1,system,telemetry_chan))
);
});
huginn.camera.start_mix_camera = (function huginn$camera$start_mix_camera(system_promise){
return promesa.core.then.call(null,system_promise,huginn.camera._start_mix_camera);
});

//# sourceMappingURL=camera.js.map
