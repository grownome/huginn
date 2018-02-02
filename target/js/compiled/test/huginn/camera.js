// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('huginn.camera');
goog.require('cljs.core');
goog.require('promesa.core');
goog.require('taoensso.timbre');
goog.require('cljs.core.async');
goog.require('cljs_node_io.core');
goog.require('goog.crypt.base64');
huginn.camera.node$module$raspicam = require('raspicam');
huginn.camera.cam_handlers = (function huginn$camera$cam_handlers(success_fn,stop_fn,restart_fn,read_chan){
return new cljs.core.PersistentArrayMap(null, 4, ["start",(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.camera","/tmp/form-init3351303088126891041.clj",16,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["camera connected"], null);
}),null)),null,-1430280940);

return success_fn.call(null);
}),"stop",(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init3351303088126891041.clj",18,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["camera stopping"], null);
}),null)),null,906402350);

return stop_fn.call(null);
}),"exit",(function (err){
restart_fn.call(null);

return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.camera","/tmp/form-init3351303088126891041.clj",20,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exit: ",err], null);
}),null)),null,-422357958);
}),"read",(function (err,timestamp,filename){
try{var result__32849__auto___46063 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [err,timestamp,filename], null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init3351303088126891041.clj",22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__32849__auto___46063){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"timestamp","timestamp",-2074956798,null),new cljs.core.Symbol(null,"filename","filename",211690744,null)], null),"=>",result__32849__auto___46063], null);
});})(result__32849__auto___46063))
,null)),null,614890778);

}catch (e46050){if((e46050 instanceof Error)){
var e__32811__auto___46064 = e46050;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.camera","/tmp/form-init3351303088126891041.clj",22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__32811__auto___46064){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__32811__auto___46064], null);
});})(e__32811__auto___46064))
,null)),null,-1123703285);

throw e__32811__auto___46064;
} else {
throw e46050;

}
}
var c__17681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto__){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto__){
return (function (state_46057){
var state_val_46058 = (state_46057[(1)]);
if((state_val_46058 === (1))){
var inst_46051 = [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"filename","filename",-1428840783)];
var inst_46052 = [err,timestamp,filename];
var inst_46053 = cljs.core.PersistentHashMap.fromArrays(inst_46051,inst_46052);
var state_46057__$1 = state_46057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46057__$1,(2),read_chan,inst_46053);
} else {
if((state_val_46058 === (2))){
var inst_46055 = (state_46057[(2)]);
var state_46057__$1 = state_46057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46057__$1,inst_46055);
} else {
return null;
}
}
});})(c__17681__auto__))
;
return ((function (switch__17591__auto__,c__17681__auto__){
return (function() {
var huginn$camera$cam_handlers_$_state_machine__17592__auto__ = null;
var huginn$camera$cam_handlers_$_state_machine__17592__auto____0 = (function (){
var statearr_46059 = [null,null,null,null,null,null,null];
(statearr_46059[(0)] = huginn$camera$cam_handlers_$_state_machine__17592__auto__);

(statearr_46059[(1)] = (1));

return statearr_46059;
});
var huginn$camera$cam_handlers_$_state_machine__17592__auto____1 = (function (state_46057){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_46057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e46060){if((e46060 instanceof Object)){
var ex__17595__auto__ = e46060;
var statearr_46061_46065 = state_46057;
(statearr_46061_46065[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46066 = state_46057;
state_46057 = G__46066;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
huginn$camera$cam_handlers_$_state_machine__17592__auto__ = function(state_46057){
switch(arguments.length){
case 0:
return huginn$camera$cam_handlers_$_state_machine__17592__auto____0.call(this);
case 1:
return huginn$camera$cam_handlers_$_state_machine__17592__auto____1.call(this,state_46057);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$camera$cam_handlers_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$camera$cam_handlers_$_state_machine__17592__auto____0;
huginn$camera$cam_handlers_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$camera$cam_handlers_$_state_machine__17592__auto____1;
return huginn$camera$cam_handlers_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__))
})();
var state__17683__auto__ = (function (){var statearr_46062 = f__17682__auto__.call(null);
(statearr_46062[(6)] = c__17681__auto__);

return statearr_46062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto__))
);

return c__17681__auto__;
})], null);
});
huginn.camera.add_handlers = (function huginn$camera$add_handlers(camera,handlers){
var seq__46067 = cljs.core.seq.call(null,handlers);
var chunk__46068 = null;
var count__46069 = (0);
var i__46070 = (0);
while(true){
if((i__46070 < count__46069)){
var vec__46071 = cljs.core._nth.call(null,chunk__46068,i__46070);
var key = cljs.core.nth.call(null,vec__46071,(0),null);
var hand = cljs.core.nth.call(null,vec__46071,(1),null);
camera.on(key,hand);

var G__46077 = seq__46067;
var G__46078 = chunk__46068;
var G__46079 = count__46069;
var G__46080 = (i__46070 + (1));
seq__46067 = G__46077;
chunk__46068 = G__46078;
count__46069 = G__46079;
i__46070 = G__46080;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__46067);
if(temp__5457__auto__){
var seq__46067__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46067__$1)){
var c__9857__auto__ = cljs.core.chunk_first.call(null,seq__46067__$1);
var G__46081 = cljs.core.chunk_rest.call(null,seq__46067__$1);
var G__46082 = c__9857__auto__;
var G__46083 = cljs.core.count.call(null,c__9857__auto__);
var G__46084 = (0);
seq__46067 = G__46081;
chunk__46068 = G__46082;
count__46069 = G__46083;
i__46070 = G__46084;
continue;
} else {
var vec__46074 = cljs.core.first.call(null,seq__46067__$1);
var key = cljs.core.nth.call(null,vec__46074,(0),null);
var hand = cljs.core.nth.call(null,vec__46074,(1),null);
camera.on(key,hand);

var G__46085 = cljs.core.next.call(null,seq__46067__$1);
var G__46086 = null;
var G__46087 = (0);
var G__46088 = (0);
seq__46067 = G__46085;
chunk__46068 = G__46086;
count__46069 = G__46087;
i__46070 = G__46088;
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
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__9808__auto__ = (function huginn$camera$chunk_img_$_iter__46089(s__46090){
return (new cljs.core.LazySeq(null,(function (){
var s__46090__$1 = s__46090;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__46090__$1);
if(temp__5457__auto__){
var s__46090__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46090__$2)){
var c__9806__auto__ = cljs.core.chunk_first.call(null,s__46090__$2);
var size__9807__auto__ = cljs.core.count.call(null,c__9806__auto__);
var b__46092 = cljs.core.chunk_buffer.call(null,size__9807__auto__);
if((function (){var i__46091 = (0);
while(true){
if((i__46091 < size__9807__auto__)){
var start = cljs.core._nth.call(null,c__9806__auto__,i__46091);
var end = (function (){var x__9285__auto__ = img.length;
var y__9286__auto__ = (start + chunk_size);
return ((x__9285__auto__ < y__9286__auto__) ? x__9285__auto__ : y__9286__auto__);
})();
cljs.core.chunk_append.call(null,b__46092,(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init3351303088126891041.clj",44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (i__46091,end,start,c__9806__auto__,size__9807__auto__,b__46092,s__46090__$2,temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["at ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null)], null);
});})(i__46091,end,start,c__9806__auto__,size__9807__auto__,b__46092,s__46090__$2,temp__5457__auto__))
,null)),null,77814240);

return (new Buffer(cljs.core.into_array.call(null,cljs.core.array_chunk.call(null,img,start,end))));
})()
);

var G__46093 = (i__46091 + (1));
i__46091 = G__46093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46092),huginn$camera$chunk_img_$_iter__46089.call(null,cljs.core.chunk_rest.call(null,s__46090__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46092),null);
}
} else {
var start = cljs.core.first.call(null,s__46090__$2);
var end = (function (){var x__9285__auto__ = img.length;
var y__9286__auto__ = (start + chunk_size);
return ((x__9285__auto__ < y__9286__auto__) ? x__9285__auto__ : y__9286__auto__);
})();
return cljs.core.cons.call(null,(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init3351303088126891041.clj",44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (end,start,s__46090__$2,temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["at ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null)], null);
});})(end,start,s__46090__$2,temp__5457__auto__))
,null)),null,-135650);

return (new Buffer(cljs.core.into_array.call(null,cljs.core.array_chunk.call(null,img,start,end))));
})()
,huginn$camera$chunk_img_$_iter__46089.call(null,cljs.core.rest.call(null,s__46090__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9808__auto__.call(null,cljs.core.range.call(null,(0),img.length,chunk_size));
})());
}
});
huginn.camera.read_imgs = (function huginn$camera$read_imgs(output_dir,in$,out){
var c__17681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto__){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto__){
return (function (state_46175){
var state_val_46176 = (state_46175[(1)]);
if((state_val_46176 === (7))){
var inst_46114 = (state_46175[(2)]);
var state_46175__$1 = state_46175;
if(cljs.core.truth_(inst_46114)){
var statearr_46177_46209 = state_46175__$1;
(statearr_46177_46209[(1)] = (11));

} else {
var statearr_46178_46210 = state_46175__$1;
(statearr_46178_46210[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46176 === (20))){
var inst_46171 = (state_46175[(2)]);
var state_46175__$1 = state_46175;
var statearr_46179_46211 = state_46175__$1;
(statearr_46179_46211[(2)] = inst_46171);

(statearr_46179_46211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46176 === (1))){
var state_46175__$1 = state_46175;
var statearr_46180_46212 = state_46175__$1;
(statearr_46180_46212[(2)] = null);

(statearr_46180_46212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46176 === (4))){
var inst_46098 = (state_46175[(7)]);
var inst_46098__$1 = (state_46175[(2)]);
var inst_46100 = (inst_46098__$1 == null);
var inst_46101 = cljs.core.not.call(null,inst_46100);
var state_46175__$1 = (function (){var statearr_46181 = state_46175;
(statearr_46181[(7)] = inst_46098__$1);

return statearr_46181;
})();
if(inst_46101){
var statearr_46182_46213 = state_46175__$1;
(statearr_46182_46213[(1)] = (5));

} else {
var statearr_46183_46214 = state_46175__$1;
(statearr_46183_46214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46176 === (15))){
var inst_46136 = (state_46175[(8)]);
var state_46175__$1 = state_46175;
var statearr_46184_46215 = state_46175__$1;
(statearr_46184_46215[(2)] = inst_46136);

(statearr_46184_46215[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46176 === (21))){
var inst_46119 = (state_46175[(9)]);
var inst_46160 = (state_46175[(10)]);
var inst_46121 = (state_46175[(11)]);
var inst_46154 = (state_46175[(12)]);
var inst_46136 = (state_46175[(8)]);
var inst_46156 = (state_46175[(13)]);
var inst_46137 = (state_46175[(14)]);
var inst_46122 = (state_46175[(15)]);
var inst_46135 = (state_46175[(16)]);
var inst_46149 = (state_46175[(17)]);
var inst_46165 = (state_46175[(2)]);
var inst_46166 = (function (){var complete = inst_46160;
var timestamp = inst_46121;
var vec__46126 = inst_46135;
var img_buffers = inst_46149;
var img_data = inst_46137;
var map__46096 = inst_46119;
var err = inst_46136;
var img_packets = inst_46156;
var header = inst_46154;
var filename = inst_46122;
var img_res = inst_46119;
return ((function (complete,timestamp,vec__46126,img_buffers,img_data,map__46096,err,img_packets,header,filename,img_res,inst_46119,inst_46160,inst_46121,inst_46154,inst_46136,inst_46156,inst_46137,inst_46122,inst_46135,inst_46149,inst_46165,state_val_46176,c__17681__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["done xforming"], null);
});
;})(complete,timestamp,vec__46126,img_buffers,img_data,map__46096,err,img_packets,header,filename,img_res,inst_46119,inst_46160,inst_46121,inst_46154,inst_46136,inst_46156,inst_46137,inst_46122,inst_46135,inst_46149,inst_46165,state_val_46176,c__17681__auto__))
})();
var inst_46167 = (new cljs.core.Delay(inst_46166,null));
var inst_46168 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init3351303088126891041.clj",63,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_46167,null,4851498);
var state_46175__$1 = (function (){var statearr_46185 = state_46175;
(statearr_46185[(18)] = inst_46168);

(statearr_46185[(19)] = inst_46165);

return statearr_46185;
})();
var statearr_46186_46216 = state_46175__$1;
(statearr_46186_46216[(2)] = null);

(statearr_46186_46216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46176 === (13))){
var inst_46119 = (state_46175[(9)]);
var inst_46121 = (state_46175[(11)]);
var inst_46122 = (state_46175[(15)]);
var inst_46119__$1 = (state_46175[(2)]);
var inst_46120 = cljs.core.get.call(null,inst_46119__$1,new cljs.core.Keyword(null,"err","err",-2089457205));
var inst_46121__$1 = cljs.core.get.call(null,inst_46119__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var inst_46122__$1 = cljs.core.get.call(null,inst_46119__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var inst_46123 = (function (){var map__46096 = inst_46119__$1;
var img_res = inst_46119__$1;
var err = inst_46120;
var timestamp = inst_46121__$1;
var filename = inst_46122__$1;
return ((function (map__46096,img_res,err,timestamp,filename,inst_46119,inst_46121,inst_46122,inst_46119__$1,inst_46120,inst_46121__$1,inst_46122__$1,state_val_46176,c__17681__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["xforming image ",filename], null);
});
;})(map__46096,img_res,err,timestamp,filename,inst_46119,inst_46121,inst_46122,inst_46119__$1,inst_46120,inst_46121__$1,inst_46122__$1,state_val_46176,c__17681__auto__))
})();
var inst_46124 = (new cljs.core.Delay(inst_46123,null));
var inst_46125 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init3351303088126891041.clj",52,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_46124,null,-409798402);
var inst_46129 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46122__$1)].join('');
var inst_46130 = [new cljs.core.Keyword(null,"encoding","encoding",1728578272)];
var inst_46131 = [""];
var inst_46132 = cljs.core.PersistentHashMap.fromArrays(inst_46130,inst_46131);
var inst_46133 = cljs_node_io.core.aslurp.call(null,inst_46129,inst_46132);
var state_46175__$1 = (function (){var statearr_46187 = state_46175;
(statearr_46187[(9)] = inst_46119__$1);

(statearr_46187[(11)] = inst_46121__$1);

(statearr_46187[(20)] = inst_46125);

(statearr_46187[(15)] = inst_46122__$1);

return statearr_46187;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46175__$1,(14),inst_46133);
} else {
if((state_val_46176 === (6))){
var state_46175__$1 = state_46175;
var statearr_46188_46217 = state_46175__$1;
(statearr_46188_46217[(2)] = false);

(statearr_46188_46217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46176 === (17))){
var inst_46142 = (state_46175[(2)]);
var state_46175__$1 = state_46175;
if(cljs.core.truth_(inst_46142)){
var statearr_46189_46218 = state_46175__$1;
(statearr_46189_46218[(1)] = (18));

} else {
var statearr_46190_46219 = state_46175__$1;
(statearr_46190_46219[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46176 === (3))){
var inst_46173 = (state_46175[(2)]);
var state_46175__$1 = state_46175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46175__$1,inst_46173);
} else {
if((state_val_46176 === (12))){
var inst_46098 = (state_46175[(7)]);
var state_46175__$1 = state_46175;
var statearr_46191_46220 = state_46175__$1;
(statearr_46191_46220[(2)] = inst_46098);

(statearr_46191_46220[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46176 === (2))){
var state_46175__$1 = state_46175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46175__$1,(4),in$);
} else {
if((state_val_46176 === (19))){
var inst_46119 = (state_46175[(9)]);
var inst_46160 = (state_46175[(10)]);
var inst_46121 = (state_46175[(11)]);
var inst_46154 = (state_46175[(12)]);
var inst_46136 = (state_46175[(8)]);
var inst_46156 = (state_46175[(13)]);
var inst_46137 = (state_46175[(14)]);
var inst_46122 = (state_46175[(15)]);
var inst_46135 = (state_46175[(16)]);
var inst_46149 = (state_46175[(17)]);
var inst_46149__$1 = huginn.camera.chunk_img.call(null,inst_46137,(100000));
var inst_46150 = [new cljs.core.Keyword(null,"payload","payload",-383036092)];
var inst_46151 = cljs.core.count.call(null,inst_46149__$1);
var inst_46152 = ["split_image/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46151)].join('');
var inst_46153 = [inst_46152];
var inst_46154__$1 = cljs.core.PersistentHashMap.fromArrays(inst_46150,inst_46153);
var inst_46155 = (function (){var map__46096 = inst_46119;
var img_res = inst_46119;
var err = inst_46136;
var timestamp = inst_46121;
var filename = inst_46122;
var vec__46126 = inst_46135;
var img_data = inst_46137;
var img_buffers = inst_46149__$1;
var header = inst_46154__$1;
return ((function (map__46096,img_res,err,timestamp,filename,vec__46126,img_data,img_buffers,header,inst_46119,inst_46160,inst_46121,inst_46154,inst_46136,inst_46156,inst_46137,inst_46122,inst_46135,inst_46149,inst_46149__$1,inst_46150,inst_46151,inst_46152,inst_46153,inst_46154__$1,state_val_46176,c__17681__auto__){
return (function (p1__46094_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"subfolder","subfolder",1044158439)],[p1__46094_SHARP_,timestamp,"captures"]);
});
;})(map__46096,img_res,err,timestamp,filename,vec__46126,img_data,img_buffers,header,inst_46119,inst_46160,inst_46121,inst_46154,inst_46136,inst_46156,inst_46137,inst_46122,inst_46135,inst_46149,inst_46149__$1,inst_46150,inst_46151,inst_46152,inst_46153,inst_46154__$1,state_val_46176,c__17681__auto__))
})();
var inst_46156__$1 = cljs.core.map.call(null,inst_46155,inst_46149__$1);
var inst_46157 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46158 = [inst_46154__$1];
var inst_46159 = (new cljs.core.PersistentVector(null,1,(5),inst_46157,inst_46158,null));
var inst_46160__$1 = cljs.core.concat.call(null,inst_46159,inst_46156__$1);
var inst_46161 = (function (){var complete = inst_46160__$1;
var timestamp = inst_46121;
var vec__46126 = inst_46135;
var img_buffers = inst_46149__$1;
var img_data = inst_46137;
var map__46096 = inst_46119;
var err = inst_46136;
var img_packets = inst_46156__$1;
var header = inst_46154__$1;
var filename = inst_46122;
var img_res = inst_46119;
return ((function (complete,timestamp,vec__46126,img_buffers,img_data,map__46096,err,img_packets,header,filename,img_res,inst_46119,inst_46160,inst_46121,inst_46154,inst_46136,inst_46156,inst_46137,inst_46122,inst_46135,inst_46149,inst_46149__$1,inst_46150,inst_46151,inst_46152,inst_46153,inst_46154__$1,inst_46155,inst_46156__$1,inst_46157,inst_46158,inst_46159,inst_46160__$1,state_val_46176,c__17681__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["trying to write img packet"], null);
});
;})(complete,timestamp,vec__46126,img_buffers,img_data,map__46096,err,img_packets,header,filename,img_res,inst_46119,inst_46160,inst_46121,inst_46154,inst_46136,inst_46156,inst_46137,inst_46122,inst_46135,inst_46149,inst_46149__$1,inst_46150,inst_46151,inst_46152,inst_46153,inst_46154__$1,inst_46155,inst_46156__$1,inst_46157,inst_46158,inst_46159,inst_46160__$1,state_val_46176,c__17681__auto__))
})();
var inst_46162 = (new cljs.core.Delay(inst_46161,null));
var inst_46163 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init3351303088126891041.clj",61,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_46162,null,-2082225667);
var state_46175__$1 = (function (){var statearr_46192 = state_46175;
(statearr_46192[(10)] = inst_46160__$1);

(statearr_46192[(21)] = inst_46163);

(statearr_46192[(12)] = inst_46154__$1);

(statearr_46192[(13)] = inst_46156__$1);

(statearr_46192[(17)] = inst_46149__$1);

return statearr_46192;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46175__$1,(21),out,inst_46160__$1);
} else {
if((state_val_46176 === (11))){
var inst_46098 = (state_46175[(7)]);
var inst_46116 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46098);
var state_46175__$1 = state_46175;
var statearr_46193_46221 = state_46175__$1;
(statearr_46193_46221[(2)] = inst_46116);

(statearr_46193_46221[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46176 === (9))){
var state_46175__$1 = state_46175;
var statearr_46194_46222 = state_46175__$1;
(statearr_46194_46222[(2)] = false);

(statearr_46194_46222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46176 === (5))){
var inst_46098 = (state_46175[(7)]);
var inst_46103 = inst_46098.cljs$lang$protocol_mask$partition0$;
var inst_46104 = (inst_46103 & (64));
var inst_46105 = inst_46098.cljs$core$ISeq$;
var inst_46106 = (cljs.core.PROTOCOL_SENTINEL === inst_46105);
var inst_46107 = (inst_46104) || (inst_46106);
var state_46175__$1 = state_46175;
if(cljs.core.truth_(inst_46107)){
var statearr_46195_46223 = state_46175__$1;
(statearr_46195_46223[(1)] = (8));

} else {
var statearr_46196_46224 = state_46175__$1;
(statearr_46196_46224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46176 === (14))){
var inst_46136 = (state_46175[(8)]);
var inst_46135 = (state_46175[(16)]);
var inst_46135__$1 = (state_46175[(2)]);
var inst_46136__$1 = cljs.core.nth.call(null,inst_46135__$1,(0),null);
var inst_46137 = cljs.core.nth.call(null,inst_46135__$1,(1),null);
var state_46175__$1 = (function (){var statearr_46197 = state_46175;
(statearr_46197[(8)] = inst_46136__$1);

(statearr_46197[(14)] = inst_46137);

(statearr_46197[(16)] = inst_46135__$1);

return statearr_46197;
})();
if(cljs.core.truth_(inst_46136__$1)){
var statearr_46198_46225 = state_46175__$1;
(statearr_46198_46225[(1)] = (15));

} else {
var statearr_46199_46226 = state_46175__$1;
(statearr_46199_46226[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46176 === (16))){
var inst_46122 = (state_46175[(15)]);
var inst_46140 = cljs.core._EQ_.call(null,inst_46122,"");
var state_46175__$1 = state_46175;
var statearr_46200_46227 = state_46175__$1;
(statearr_46200_46227[(2)] = inst_46140);

(statearr_46200_46227[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46176 === (10))){
var inst_46111 = (state_46175[(2)]);
var state_46175__$1 = state_46175;
var statearr_46201_46228 = state_46175__$1;
(statearr_46201_46228[(2)] = inst_46111);

(statearr_46201_46228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46176 === (18))){
var inst_46119 = (state_46175[(9)]);
var inst_46121 = (state_46175[(11)]);
var inst_46136 = (state_46175[(8)]);
var inst_46137 = (state_46175[(14)]);
var inst_46122 = (state_46175[(15)]);
var inst_46135 = (state_46175[(16)]);
var inst_46144 = (function (){var map__46096 = inst_46119;
var img_res = inst_46119;
var err = inst_46136;
var timestamp = inst_46121;
var filename = inst_46122;
var vec__46126 = inst_46135;
var img_data = inst_46137;
return ((function (map__46096,img_res,err,timestamp,filename,vec__46126,img_data,inst_46119,inst_46121,inst_46136,inst_46137,inst_46122,inst_46135,state_val_46176,c__17681__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error reading image:",err," ",filename], null);
});
;})(map__46096,img_res,err,timestamp,filename,vec__46126,img_data,inst_46119,inst_46121,inst_46136,inst_46137,inst_46122,inst_46135,state_val_46176,c__17681__auto__))
})();
var inst_46145 = (new cljs.core.Delay(inst_46144,null));
var inst_46146 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.camera","/tmp/form-init3351303088126891041.clj",55,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_46145,null,1086599323);
var state_46175__$1 = (function (){var statearr_46202 = state_46175;
(statearr_46202[(22)] = inst_46146);

return statearr_46202;
})();
var statearr_46203_46229 = state_46175__$1;
(statearr_46203_46229[(2)] = null);

(statearr_46203_46229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46176 === (8))){
var state_46175__$1 = state_46175;
var statearr_46204_46230 = state_46175__$1;
(statearr_46204_46230[(2)] = true);

(statearr_46204_46230[(1)] = (10));


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
});})(c__17681__auto__))
;
return ((function (switch__17591__auto__,c__17681__auto__){
return (function() {
var huginn$camera$read_imgs_$_state_machine__17592__auto__ = null;
var huginn$camera$read_imgs_$_state_machine__17592__auto____0 = (function (){
var statearr_46205 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46205[(0)] = huginn$camera$read_imgs_$_state_machine__17592__auto__);

(statearr_46205[(1)] = (1));

return statearr_46205;
});
var huginn$camera$read_imgs_$_state_machine__17592__auto____1 = (function (state_46175){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_46175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e46206){if((e46206 instanceof Object)){
var ex__17595__auto__ = e46206;
var statearr_46207_46231 = state_46175;
(statearr_46207_46231[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46232 = state_46175;
state_46175 = G__46232;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
huginn$camera$read_imgs_$_state_machine__17592__auto__ = function(state_46175){
switch(arguments.length){
case 0:
return huginn$camera$read_imgs_$_state_machine__17592__auto____0.call(this);
case 1:
return huginn$camera$read_imgs_$_state_machine__17592__auto____1.call(this,state_46175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$camera$read_imgs_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$camera$read_imgs_$_state_machine__17592__auto____0;
huginn$camera$read_imgs_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$camera$read_imgs_$_state_machine__17592__auto____1;
return huginn$camera$read_imgs_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__))
})();
var state__17683__auto__ = (function (){var statearr_46208 = f__17682__auto__.call(null);
(statearr_46208[(6)] = c__17681__auto__);

return statearr_46208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto__))
);

return c__17681__auto__;
});
huginn.camera.build_camera = (function huginn$camera$build_camera(var_args){
var G__46234 = arguments.length;
switch (G__46234) {
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

huginn.camera.build_camera.cljs$core$IFn$_invoke$arity$1 = (function (p__46235){
var map__46236 = p__46235;
var map__46236__$1 = ((((!((map__46236 == null)))?((((map__46236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46236.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46236):map__46236);
var opts = map__46236__$1;
var output_dir = cljs.core.get.call(null,map__46236__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991),"pics");
var tl = cljs.core.get.call(null,map__46236__$1,new cljs.core.Keyword(null,"tl","tl",-35265210),(((60) * (1000)) * (10)));
var mode = cljs.core.get.call(null,map__46236__$1,new cljs.core.Keyword(null,"mode","mode",654403691),"timelapse");
var encoding = cljs.core.get.call(null,map__46236__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272),"jpg");
return promesa.core.promise.call(null,((function (map__46236,map__46236__$1,opts,output_dir,tl,mode,encoding){
return (function (resolve,reject){
var snap_chan = cljs.core.async.chan.call(null);
var data_chan = cljs.core.async.chan.call(null);
var camera = (new huginn.camera.node$module$raspicam(({"output": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/%04d_img.jpg"].join(''), "mode": mode, "encoding": encoding, "tl": tl})));
var output = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"raw-chan","raw-chan",-779682305),snap_chan,new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063),data_chan,new cljs.core.Keyword(null,"camera","camera",-1190348585),camera], null);
var handlers = huginn.camera.cam_handlers.call(null,((function (snap_chan,data_chan,camera,output,map__46236,map__46236__$1,opts,output_dir,tl,mode,encoding){
return (function (){
return resolve.call(null,output);
});})(snap_chan,data_chan,camera,output,map__46236,map__46236__$1,opts,output_dir,tl,mode,encoding))
,((function (snap_chan,data_chan,camera,output,map__46236,map__46236__$1,opts,output_dir,tl,mode,encoding){
return (function (){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs_node_io.core.delete_file,cljs_node_io.core.file_seq.call(null,output_dir)));
});})(snap_chan,data_chan,camera,output,map__46236,map__46236__$1,opts,output_dir,tl,mode,encoding))
,((function (snap_chan,data_chan,camera,output,map__46236,map__46236__$1,opts,output_dir,tl,mode,encoding){
return (function (){
return camera.start();
});})(snap_chan,data_chan,camera,output,map__46236,map__46236__$1,opts,output_dir,tl,mode,encoding))
,snap_chan);
huginn.camera.read_imgs.call(null,output_dir,snap_chan,data_chan);

huginn.camera.add_handlers.call(null,camera,handlers);

return camera.start();
});})(map__46236,map__46236__$1,opts,output_dir,tl,mode,encoding))
);
});

huginn.camera.build_camera.cljs$lang$maxFixedArity = 1;

huginn.camera.cleanup_camera = (function huginn$camera$cleanup_camera(p__46239){
var map__46240 = p__46239;
var map__46240__$1 = ((((!((map__46240 == null)))?((((map__46240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46240.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46240):map__46240);
var system = map__46240__$1;
var camera = cljs.core.get.call(null,map__46240__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var snap_chan = cljs.core.get.call(null,map__46240__$1,new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063));
camera.stop();

cljs.core.async.close_BANG_.call(null,snap_chan);

return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,system,new cljs.core.Keyword(null,"camera","camera",-1190348585)),new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063));
});
huginn.camera._start_mix_camera = (function huginn$camera$_start_mix_camera(p__46242){
var map__46243 = p__46242;
var map__46243__$1 = ((((!((map__46243 == null)))?((((map__46243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46243):map__46243);
var system = map__46243__$1;
var telemetry_chan = cljs.core.get.call(null,map__46243__$1,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503));
var camera_p = huginn.camera.build_camera.call(null);
var mixer = cljs.core.async.mix.call(null,telemetry_chan);
return promesa.core.then.call(null,camera_p,((function (camera_p,mixer,map__46243,map__46243__$1,system,telemetry_chan){
return (function (p__46245){
var map__46246 = p__46245;
var map__46246__$1 = ((((!((map__46246 == null)))?((((map__46246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46246.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46246):map__46246);
var snap_chan = cljs.core.get.call(null,map__46246__$1,new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063));
var camera = cljs.core.get.call(null,map__46246__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.camera","/tmp/form-init3351303088126891041.clj",114,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__46246,map__46246__$1,snap_chan,camera,camera_p,mixer,map__46243,map__46243__$1,system,telemetry_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["connecting camera to mixer"], null);
});})(map__46246,map__46246__$1,snap_chan,camera,camera_p,mixer,map__46243,map__46243__$1,system,telemetry_chan))
,null)),null,229355344);

cljs.core.async.admix.call(null,mixer,snap_chan);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,system,new cljs.core.Keyword(null,"camera","camera",-1190348585),camera),new cljs.core.Keyword(null,"mixer","mixer",-120313315),mixer),new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063),snap_chan)], null);
});})(camera_p,mixer,map__46243,map__46243__$1,system,telemetry_chan))
);
});
huginn.camera.start_mix_camera = (function huginn$camera$start_mix_camera(system_promise){
return promesa.core.then.call(null,system_promise,huginn.camera._start_mix_camera);
});

//# sourceMappingURL=camera.js.map
