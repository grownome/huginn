// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('huginn.camera');
goog.require('cljs.core');
goog.require('promesa.core');
goog.require('taoensso.timbre');
goog.require('cljs.core.async');
goog.require('cljs_node_io.core');
goog.require('goog.crypt.base64');
huginn.camera.node$module$raspicam = require('raspicam');
huginn.camera.cam_handlers = (function huginn$camera$cam_handlers(success_fn,stop_fn,read_chan){
return new cljs.core.PersistentArrayMap(null, 4, ["start",(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.camera","/tmp/form-init1252977175527440591.clj",16,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["camera connected"], null);
}),null)),null,1073635306);

return success_fn.call(null);
}),"stop",(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init1252977175527440591.clj",18,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["camera stopping"], null);
}),null)),null,1181684954);

return stop_fn.call(null);
}),"exit",(function (err){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.camera","/tmp/form-init1252977175527440591.clj",20,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error: ",err], null);
}),null)),null,-91996855);
}),"read",(function (err,timestamp,filename){
try{var result__44205__auto___45263 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [err,timestamp,filename], null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init1252977175527440591.clj",22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__44205__auto___45263){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"timestamp","timestamp",-2074956798,null),new cljs.core.Symbol(null,"filename","filename",211690744,null)], null),"=>",result__44205__auto___45263], null);
});})(result__44205__auto___45263))
,null)),null,833671088);

}catch (e45250){if((e45250 instanceof Error)){
var e__44167__auto___45264 = e45250;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.camera","/tmp/form-init1252977175527440591.clj",22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__44167__auto___45264){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__44167__auto___45264], null);
});})(e__44167__auto___45264))
,null)),null,-516251326);

throw e__44167__auto___45264;
} else {
throw e45250;

}
}
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__){
return (function (state_45257){
var state_val_45258 = (state_45257[(1)]);
if((state_val_45258 === (1))){
var inst_45251 = [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"filename","filename",-1428840783)];
var inst_45252 = [err,timestamp,filename];
var inst_45253 = cljs.core.PersistentHashMap.fromArrays(inst_45251,inst_45252);
var state_45257__$1 = state_45257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45257__$1,(2),read_chan,inst_45253);
} else {
if((state_val_45258 === (2))){
var inst_45255 = (state_45257[(2)]);
var state_45257__$1 = state_45257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45257__$1,inst_45255);
} else {
return null;
}
}
});})(c__36587__auto__))
;
return ((function (switch__36497__auto__,c__36587__auto__){
return (function() {
var huginn$camera$cam_handlers_$_state_machine__36498__auto__ = null;
var huginn$camera$cam_handlers_$_state_machine__36498__auto____0 = (function (){
var statearr_45259 = [null,null,null,null,null,null,null];
(statearr_45259[(0)] = huginn$camera$cam_handlers_$_state_machine__36498__auto__);

(statearr_45259[(1)] = (1));

return statearr_45259;
});
var huginn$camera$cam_handlers_$_state_machine__36498__auto____1 = (function (state_45257){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_45257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e45260){if((e45260 instanceof Object)){
var ex__36501__auto__ = e45260;
var statearr_45261_45265 = state_45257;
(statearr_45261_45265[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45266 = state_45257;
state_45257 = G__45266;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$camera$cam_handlers_$_state_machine__36498__auto__ = function(state_45257){
switch(arguments.length){
case 0:
return huginn$camera$cam_handlers_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$camera$cam_handlers_$_state_machine__36498__auto____1.call(this,state_45257);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$camera$cam_handlers_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$camera$cam_handlers_$_state_machine__36498__auto____0;
huginn$camera$cam_handlers_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$camera$cam_handlers_$_state_machine__36498__auto____1;
return huginn$camera$cam_handlers_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_45262 = f__36588__auto__.call(null);
(statearr_45262[(6)] = c__36587__auto__);

return statearr_45262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
})], null);
});
huginn.camera.add_handlers = (function huginn$camera$add_handlers(camera,handlers){
var seq__45267 = cljs.core.seq.call(null,handlers);
var chunk__45268 = null;
var count__45269 = (0);
var i__45270 = (0);
while(true){
if((i__45270 < count__45269)){
var vec__45271 = cljs.core._nth.call(null,chunk__45268,i__45270);
var key = cljs.core.nth.call(null,vec__45271,(0),null);
var hand = cljs.core.nth.call(null,vec__45271,(1),null);
camera.on(key,hand);

var G__45277 = seq__45267;
var G__45278 = chunk__45268;
var G__45279 = count__45269;
var G__45280 = (i__45270 + (1));
seq__45267 = G__45277;
chunk__45268 = G__45278;
count__45269 = G__45279;
i__45270 = G__45280;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__45267);
if(temp__5457__auto__){
var seq__45267__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45267__$1)){
var c__31803__auto__ = cljs.core.chunk_first.call(null,seq__45267__$1);
var G__45281 = cljs.core.chunk_rest.call(null,seq__45267__$1);
var G__45282 = c__31803__auto__;
var G__45283 = cljs.core.count.call(null,c__31803__auto__);
var G__45284 = (0);
seq__45267 = G__45281;
chunk__45268 = G__45282;
count__45269 = G__45283;
i__45270 = G__45284;
continue;
} else {
var vec__45274 = cljs.core.first.call(null,seq__45267__$1);
var key = cljs.core.nth.call(null,vec__45274,(0),null);
var hand = cljs.core.nth.call(null,vec__45274,(1),null);
camera.on(key,hand);

var G__45285 = cljs.core.next.call(null,seq__45267__$1);
var G__45286 = null;
var G__45287 = (0);
var G__45288 = (0);
seq__45267 = G__45285;
chunk__45268 = G__45286;
count__45269 = G__45287;
i__45270 = G__45288;
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
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__31754__auto__ = (function huginn$camera$chunk_img_$_iter__45289(s__45290){
return (new cljs.core.LazySeq(null,(function (){
var s__45290__$1 = s__45290;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__45290__$1);
if(temp__5457__auto__){
var s__45290__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45290__$2)){
var c__31752__auto__ = cljs.core.chunk_first.call(null,s__45290__$2);
var size__31753__auto__ = cljs.core.count.call(null,c__31752__auto__);
var b__45292 = cljs.core.chunk_buffer.call(null,size__31753__auto__);
if((function (){var i__45291 = (0);
while(true){
if((i__45291 < size__31753__auto__)){
var start = cljs.core._nth.call(null,c__31752__auto__,i__45291);
var end = (function (){var x__31231__auto__ = img.length;
var y__31232__auto__ = (start + chunk_size);
return ((x__31231__auto__ < y__31232__auto__) ? x__31231__auto__ : y__31232__auto__);
})();
cljs.core.chunk_append.call(null,b__45292,(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init1252977175527440591.clj",44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (i__45291,end,start,c__31752__auto__,size__31753__auto__,b__45292,s__45290__$2,temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["at ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null)], null);
});})(i__45291,end,start,c__31752__auto__,size__31753__auto__,b__45292,s__45290__$2,temp__5457__auto__))
,null)),null,583447501);

return (new Buffer(cljs.core.into_array.call(null,cljs.core.array_chunk.call(null,img,start,end))));
})()
);

var G__45293 = (i__45291 + (1));
i__45291 = G__45293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45292),huginn$camera$chunk_img_$_iter__45289.call(null,cljs.core.chunk_rest.call(null,s__45290__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45292),null);
}
} else {
var start = cljs.core.first.call(null,s__45290__$2);
var end = (function (){var x__31231__auto__ = img.length;
var y__31232__auto__ = (start + chunk_size);
return ((x__31231__auto__ < y__31232__auto__) ? x__31231__auto__ : y__31232__auto__);
})();
return cljs.core.cons.call(null,(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init1252977175527440591.clj",44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (end,start,s__45290__$2,temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["at ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null)], null);
});})(end,start,s__45290__$2,temp__5457__auto__))
,null)),null,-1848230952);

return (new Buffer(cljs.core.into_array.call(null,cljs.core.array_chunk.call(null,img,start,end))));
})()
,huginn$camera$chunk_img_$_iter__45289.call(null,cljs.core.rest.call(null,s__45290__$2)));
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
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__){
return (function (state_45375){
var state_val_45376 = (state_45375[(1)]);
if((state_val_45376 === (7))){
var inst_45314 = (state_45375[(2)]);
var state_45375__$1 = state_45375;
if(cljs.core.truth_(inst_45314)){
var statearr_45377_45409 = state_45375__$1;
(statearr_45377_45409[(1)] = (11));

} else {
var statearr_45378_45410 = state_45375__$1;
(statearr_45378_45410[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (20))){
var inst_45371 = (state_45375[(2)]);
var state_45375__$1 = state_45375;
var statearr_45379_45411 = state_45375__$1;
(statearr_45379_45411[(2)] = inst_45371);

(statearr_45379_45411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (1))){
var state_45375__$1 = state_45375;
var statearr_45380_45412 = state_45375__$1;
(statearr_45380_45412[(2)] = null);

(statearr_45380_45412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (4))){
var inst_45298 = (state_45375[(7)]);
var inst_45298__$1 = (state_45375[(2)]);
var inst_45300 = (inst_45298__$1 == null);
var inst_45301 = cljs.core.not.call(null,inst_45300);
var state_45375__$1 = (function (){var statearr_45381 = state_45375;
(statearr_45381[(7)] = inst_45298__$1);

return statearr_45381;
})();
if(inst_45301){
var statearr_45382_45413 = state_45375__$1;
(statearr_45382_45413[(1)] = (5));

} else {
var statearr_45383_45414 = state_45375__$1;
(statearr_45383_45414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (15))){
var inst_45336 = (state_45375[(8)]);
var state_45375__$1 = state_45375;
var statearr_45384_45415 = state_45375__$1;
(statearr_45384_45415[(2)] = inst_45336);

(statearr_45384_45415[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (21))){
var inst_45337 = (state_45375[(9)]);
var inst_45336 = (state_45375[(8)]);
var inst_45322 = (state_45375[(10)]);
var inst_45335 = (state_45375[(11)]);
var inst_45354 = (state_45375[(12)]);
var inst_45356 = (state_45375[(13)]);
var inst_45321 = (state_45375[(14)]);
var inst_45360 = (state_45375[(15)]);
var inst_45319 = (state_45375[(16)]);
var inst_45349 = (state_45375[(17)]);
var inst_45365 = (state_45375[(2)]);
var inst_45366 = (function (){var complete = inst_45360;
var timestamp = inst_45321;
var vec__45326 = inst_45335;
var img_buffers = inst_45349;
var img_data = inst_45337;
var err = inst_45336;
var img_packets = inst_45356;
var map__45296 = inst_45319;
var header = inst_45354;
var filename = inst_45322;
var img_res = inst_45319;
return ((function (complete,timestamp,vec__45326,img_buffers,img_data,err,img_packets,map__45296,header,filename,img_res,inst_45337,inst_45336,inst_45322,inst_45335,inst_45354,inst_45356,inst_45321,inst_45360,inst_45319,inst_45349,inst_45365,state_val_45376,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["done xforming"], null);
});
;})(complete,timestamp,vec__45326,img_buffers,img_data,err,img_packets,map__45296,header,filename,img_res,inst_45337,inst_45336,inst_45322,inst_45335,inst_45354,inst_45356,inst_45321,inst_45360,inst_45319,inst_45349,inst_45365,state_val_45376,c__36587__auto__))
})();
var inst_45367 = (new cljs.core.Delay(inst_45366,null));
var inst_45368 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init1252977175527440591.clj",63,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_45367,null,1269799772);
var state_45375__$1 = (function (){var statearr_45385 = state_45375;
(statearr_45385[(18)] = inst_45368);

(statearr_45385[(19)] = inst_45365);

return statearr_45385;
})();
var statearr_45386_45416 = state_45375__$1;
(statearr_45386_45416[(2)] = null);

(statearr_45386_45416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (13))){
var inst_45322 = (state_45375[(10)]);
var inst_45321 = (state_45375[(14)]);
var inst_45319 = (state_45375[(16)]);
var inst_45319__$1 = (state_45375[(2)]);
var inst_45320 = cljs.core.get.call(null,inst_45319__$1,new cljs.core.Keyword(null,"err","err",-2089457205));
var inst_45321__$1 = cljs.core.get.call(null,inst_45319__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var inst_45322__$1 = cljs.core.get.call(null,inst_45319__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var inst_45323 = (function (){var map__45296 = inst_45319__$1;
var img_res = inst_45319__$1;
var err = inst_45320;
var timestamp = inst_45321__$1;
var filename = inst_45322__$1;
return ((function (map__45296,img_res,err,timestamp,filename,inst_45322,inst_45321,inst_45319,inst_45319__$1,inst_45320,inst_45321__$1,inst_45322__$1,state_val_45376,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["xforming image ",filename], null);
});
;})(map__45296,img_res,err,timestamp,filename,inst_45322,inst_45321,inst_45319,inst_45319__$1,inst_45320,inst_45321__$1,inst_45322__$1,state_val_45376,c__36587__auto__))
})();
var inst_45324 = (new cljs.core.Delay(inst_45323,null));
var inst_45325 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init1252977175527440591.clj",52,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_45324,null,-710175843);
var inst_45329 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45322__$1)].join('');
var inst_45330 = [new cljs.core.Keyword(null,"encoding","encoding",1728578272)];
var inst_45331 = [""];
var inst_45332 = cljs.core.PersistentHashMap.fromArrays(inst_45330,inst_45331);
var inst_45333 = cljs_node_io.core.aslurp.call(null,inst_45329,inst_45332);
var state_45375__$1 = (function (){var statearr_45387 = state_45375;
(statearr_45387[(10)] = inst_45322__$1);

(statearr_45387[(14)] = inst_45321__$1);

(statearr_45387[(20)] = inst_45325);

(statearr_45387[(16)] = inst_45319__$1);

return statearr_45387;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45375__$1,(14),inst_45333);
} else {
if((state_val_45376 === (6))){
var state_45375__$1 = state_45375;
var statearr_45388_45417 = state_45375__$1;
(statearr_45388_45417[(2)] = false);

(statearr_45388_45417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (17))){
var inst_45342 = (state_45375[(2)]);
var state_45375__$1 = state_45375;
if(cljs.core.truth_(inst_45342)){
var statearr_45389_45418 = state_45375__$1;
(statearr_45389_45418[(1)] = (18));

} else {
var statearr_45390_45419 = state_45375__$1;
(statearr_45390_45419[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (3))){
var inst_45373 = (state_45375[(2)]);
var state_45375__$1 = state_45375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45375__$1,inst_45373);
} else {
if((state_val_45376 === (12))){
var inst_45298 = (state_45375[(7)]);
var state_45375__$1 = state_45375;
var statearr_45391_45420 = state_45375__$1;
(statearr_45391_45420[(2)] = inst_45298);

(statearr_45391_45420[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (2))){
var state_45375__$1 = state_45375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45375__$1,(4),in$);
} else {
if((state_val_45376 === (19))){
var inst_45337 = (state_45375[(9)]);
var inst_45336 = (state_45375[(8)]);
var inst_45322 = (state_45375[(10)]);
var inst_45335 = (state_45375[(11)]);
var inst_45354 = (state_45375[(12)]);
var inst_45356 = (state_45375[(13)]);
var inst_45321 = (state_45375[(14)]);
var inst_45360 = (state_45375[(15)]);
var inst_45319 = (state_45375[(16)]);
var inst_45349 = (state_45375[(17)]);
var inst_45349__$1 = huginn.camera.chunk_img.call(null,inst_45337,(25000));
var inst_45350 = [new cljs.core.Keyword(null,"payload","payload",-383036092)];
var inst_45351 = cljs.core.count.call(null,inst_45349__$1);
var inst_45352 = ["split_image/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_45351)].join('');
var inst_45353 = [inst_45352];
var inst_45354__$1 = cljs.core.PersistentHashMap.fromArrays(inst_45350,inst_45353);
var inst_45355 = (function (){var map__45296 = inst_45319;
var img_res = inst_45319;
var err = inst_45336;
var timestamp = inst_45321;
var filename = inst_45322;
var vec__45326 = inst_45335;
var img_data = inst_45337;
var img_buffers = inst_45349__$1;
var header = inst_45354__$1;
return ((function (map__45296,img_res,err,timestamp,filename,vec__45326,img_data,img_buffers,header,inst_45337,inst_45336,inst_45322,inst_45335,inst_45354,inst_45356,inst_45321,inst_45360,inst_45319,inst_45349,inst_45349__$1,inst_45350,inst_45351,inst_45352,inst_45353,inst_45354__$1,state_val_45376,c__36587__auto__){
return (function (p1__45294_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)],[p1__45294_SHARP_,timestamp]);
});
;})(map__45296,img_res,err,timestamp,filename,vec__45326,img_data,img_buffers,header,inst_45337,inst_45336,inst_45322,inst_45335,inst_45354,inst_45356,inst_45321,inst_45360,inst_45319,inst_45349,inst_45349__$1,inst_45350,inst_45351,inst_45352,inst_45353,inst_45354__$1,state_val_45376,c__36587__auto__))
})();
var inst_45356__$1 = cljs.core.map.call(null,inst_45355,inst_45349__$1);
var inst_45357 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45358 = [inst_45354__$1];
var inst_45359 = (new cljs.core.PersistentVector(null,1,(5),inst_45357,inst_45358,null));
var inst_45360__$1 = cljs.core.concat.call(null,inst_45359,inst_45356__$1);
var inst_45361 = (function (){var complete = inst_45360__$1;
var timestamp = inst_45321;
var vec__45326 = inst_45335;
var img_buffers = inst_45349__$1;
var img_data = inst_45337;
var err = inst_45336;
var img_packets = inst_45356__$1;
var map__45296 = inst_45319;
var header = inst_45354__$1;
var filename = inst_45322;
var img_res = inst_45319;
return ((function (complete,timestamp,vec__45326,img_buffers,img_data,err,img_packets,map__45296,header,filename,img_res,inst_45337,inst_45336,inst_45322,inst_45335,inst_45354,inst_45356,inst_45321,inst_45360,inst_45319,inst_45349,inst_45349__$1,inst_45350,inst_45351,inst_45352,inst_45353,inst_45354__$1,inst_45355,inst_45356__$1,inst_45357,inst_45358,inst_45359,inst_45360__$1,state_val_45376,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["trying to write img packet"], null);
});
;})(complete,timestamp,vec__45326,img_buffers,img_data,err,img_packets,map__45296,header,filename,img_res,inst_45337,inst_45336,inst_45322,inst_45335,inst_45354,inst_45356,inst_45321,inst_45360,inst_45319,inst_45349,inst_45349__$1,inst_45350,inst_45351,inst_45352,inst_45353,inst_45354__$1,inst_45355,inst_45356__$1,inst_45357,inst_45358,inst_45359,inst_45360__$1,state_val_45376,c__36587__auto__))
})();
var inst_45362 = (new cljs.core.Delay(inst_45361,null));
var inst_45363 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init1252977175527440591.clj",61,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_45362,null,1207806033);
var state_45375__$1 = (function (){var statearr_45392 = state_45375;
(statearr_45392[(21)] = inst_45363);

(statearr_45392[(12)] = inst_45354__$1);

(statearr_45392[(13)] = inst_45356__$1);

(statearr_45392[(15)] = inst_45360__$1);

(statearr_45392[(17)] = inst_45349__$1);

return statearr_45392;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45375__$1,(21),out,inst_45360__$1);
} else {
if((state_val_45376 === (11))){
var inst_45298 = (state_45375[(7)]);
var inst_45316 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45298);
var state_45375__$1 = state_45375;
var statearr_45393_45421 = state_45375__$1;
(statearr_45393_45421[(2)] = inst_45316);

(statearr_45393_45421[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (9))){
var state_45375__$1 = state_45375;
var statearr_45394_45422 = state_45375__$1;
(statearr_45394_45422[(2)] = false);

(statearr_45394_45422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (5))){
var inst_45298 = (state_45375[(7)]);
var inst_45303 = inst_45298.cljs$lang$protocol_mask$partition0$;
var inst_45304 = (inst_45303 & (64));
var inst_45305 = inst_45298.cljs$core$ISeq$;
var inst_45306 = (cljs.core.PROTOCOL_SENTINEL === inst_45305);
var inst_45307 = (inst_45304) || (inst_45306);
var state_45375__$1 = state_45375;
if(cljs.core.truth_(inst_45307)){
var statearr_45395_45423 = state_45375__$1;
(statearr_45395_45423[(1)] = (8));

} else {
var statearr_45396_45424 = state_45375__$1;
(statearr_45396_45424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (14))){
var inst_45336 = (state_45375[(8)]);
var inst_45335 = (state_45375[(11)]);
var inst_45335__$1 = (state_45375[(2)]);
var inst_45336__$1 = cljs.core.nth.call(null,inst_45335__$1,(0),null);
var inst_45337 = cljs.core.nth.call(null,inst_45335__$1,(1),null);
var state_45375__$1 = (function (){var statearr_45397 = state_45375;
(statearr_45397[(9)] = inst_45337);

(statearr_45397[(8)] = inst_45336__$1);

(statearr_45397[(11)] = inst_45335__$1);

return statearr_45397;
})();
if(cljs.core.truth_(inst_45336__$1)){
var statearr_45398_45425 = state_45375__$1;
(statearr_45398_45425[(1)] = (15));

} else {
var statearr_45399_45426 = state_45375__$1;
(statearr_45399_45426[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (16))){
var inst_45322 = (state_45375[(10)]);
var inst_45340 = cljs.core._EQ_.call(null,inst_45322,"");
var state_45375__$1 = state_45375;
var statearr_45400_45427 = state_45375__$1;
(statearr_45400_45427[(2)] = inst_45340);

(statearr_45400_45427[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (10))){
var inst_45311 = (state_45375[(2)]);
var state_45375__$1 = state_45375;
var statearr_45401_45428 = state_45375__$1;
(statearr_45401_45428[(2)] = inst_45311);

(statearr_45401_45428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (18))){
var inst_45337 = (state_45375[(9)]);
var inst_45336 = (state_45375[(8)]);
var inst_45322 = (state_45375[(10)]);
var inst_45335 = (state_45375[(11)]);
var inst_45321 = (state_45375[(14)]);
var inst_45319 = (state_45375[(16)]);
var inst_45344 = (function (){var map__45296 = inst_45319;
var img_res = inst_45319;
var err = inst_45336;
var timestamp = inst_45321;
var filename = inst_45322;
var vec__45326 = inst_45335;
var img_data = inst_45337;
return ((function (map__45296,img_res,err,timestamp,filename,vec__45326,img_data,inst_45337,inst_45336,inst_45322,inst_45335,inst_45321,inst_45319,state_val_45376,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error reading image:",err," ",filename], null);
});
;})(map__45296,img_res,err,timestamp,filename,vec__45326,img_data,inst_45337,inst_45336,inst_45322,inst_45335,inst_45321,inst_45319,state_val_45376,c__36587__auto__))
})();
var inst_45345 = (new cljs.core.Delay(inst_45344,null));
var inst_45346 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.camera","/tmp/form-init1252977175527440591.clj",55,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_45345,null,554274540);
var state_45375__$1 = (function (){var statearr_45402 = state_45375;
(statearr_45402[(22)] = inst_45346);

return statearr_45402;
})();
var statearr_45403_45429 = state_45375__$1;
(statearr_45403_45429[(2)] = null);

(statearr_45403_45429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45376 === (8))){
var state_45375__$1 = state_45375;
var statearr_45404_45430 = state_45375__$1;
(statearr_45404_45430[(2)] = true);

(statearr_45404_45430[(1)] = (10));


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
});})(c__36587__auto__))
;
return ((function (switch__36497__auto__,c__36587__auto__){
return (function() {
var huginn$camera$read_imgs_$_state_machine__36498__auto__ = null;
var huginn$camera$read_imgs_$_state_machine__36498__auto____0 = (function (){
var statearr_45405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45405[(0)] = huginn$camera$read_imgs_$_state_machine__36498__auto__);

(statearr_45405[(1)] = (1));

return statearr_45405;
});
var huginn$camera$read_imgs_$_state_machine__36498__auto____1 = (function (state_45375){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_45375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e45406){if((e45406 instanceof Object)){
var ex__36501__auto__ = e45406;
var statearr_45407_45431 = state_45375;
(statearr_45407_45431[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45432 = state_45375;
state_45375 = G__45432;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$camera$read_imgs_$_state_machine__36498__auto__ = function(state_45375){
switch(arguments.length){
case 0:
return huginn$camera$read_imgs_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$camera$read_imgs_$_state_machine__36498__auto____1.call(this,state_45375);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$camera$read_imgs_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$camera$read_imgs_$_state_machine__36498__auto____0;
huginn$camera$read_imgs_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$camera$read_imgs_$_state_machine__36498__auto____1;
return huginn$camera$read_imgs_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_45408 = f__36588__auto__.call(null);
(statearr_45408[(6)] = c__36587__auto__);

return statearr_45408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
});
huginn.camera.build_camera = (function huginn$camera$build_camera(var_args){
var G__45434 = arguments.length;
switch (G__45434) {
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

huginn.camera.build_camera.cljs$core$IFn$_invoke$arity$1 = (function (p__45435){
var map__45436 = p__45435;
var map__45436__$1 = ((((!((map__45436 == null)))?((((map__45436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45436.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45436):map__45436);
var opts = map__45436__$1;
var output_dir = cljs.core.get.call(null,map__45436__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991),"pics");
var tl = cljs.core.get.call(null,map__45436__$1,new cljs.core.Keyword(null,"tl","tl",-35265210),((60) * (1000)));
var mode = cljs.core.get.call(null,map__45436__$1,new cljs.core.Keyword(null,"mode","mode",654403691),"timelapse");
var encoding = cljs.core.get.call(null,map__45436__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272),"jpg");
return promesa.core.promise.call(null,((function (map__45436,map__45436__$1,opts,output_dir,tl,mode,encoding){
return (function (resolve,reject){
var snap_chan = cljs.core.async.chan.call(null);
var data_chan = cljs.core.async.chan.call(null);
var camera = (new huginn.camera.node$module$raspicam(({"output": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/%04d_img.jpg"].join(''), "mode": mode, "encoding": encoding, "tl": tl})));
var output = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"raw-chan","raw-chan",-779682305),snap_chan,new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063),data_chan,new cljs.core.Keyword(null,"camera","camera",-1190348585),camera], null);
var handlers = huginn.camera.cam_handlers.call(null,((function (snap_chan,data_chan,camera,output,map__45436,map__45436__$1,opts,output_dir,tl,mode,encoding){
return (function (){
return resolve.call(null,output);
});})(snap_chan,data_chan,camera,output,map__45436,map__45436__$1,opts,output_dir,tl,mode,encoding))
,((function (snap_chan,data_chan,camera,output,map__45436,map__45436__$1,opts,output_dir,tl,mode,encoding){
return (function (){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs_node_io.core.delete_file,cljs_node_io.core.file_seq.call(null,output_dir)));
});})(snap_chan,data_chan,camera,output,map__45436,map__45436__$1,opts,output_dir,tl,mode,encoding))
,snap_chan);
huginn.camera.read_imgs.call(null,output_dir,snap_chan,data_chan);

huginn.camera.add_handlers.call(null,camera,handlers);

return camera.start();
});})(map__45436,map__45436__$1,opts,output_dir,tl,mode,encoding))
);
});

huginn.camera.build_camera.cljs$lang$maxFixedArity = 1;

huginn.camera.cleanup_camera = (function huginn$camera$cleanup_camera(p__45439){
var map__45440 = p__45439;
var map__45440__$1 = ((((!((map__45440 == null)))?((((map__45440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45440):map__45440);
var camera = cljs.core.get.call(null,map__45440__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var snap_chan = cljs.core.get.call(null,map__45440__$1,new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063));
camera.stop();

return cljs.core.async.close_BANG_.call(null,snap_chan);
});
huginn.camera._start_mix_camera = (function huginn$camera$_start_mix_camera(p__45442){
var map__45443 = p__45442;
var map__45443__$1 = ((((!((map__45443 == null)))?((((map__45443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45443.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45443):map__45443);
var system = map__45443__$1;
var state_chan = cljs.core.get.call(null,map__45443__$1,new cljs.core.Keyword(null,"state-chan","state-chan",-1042477017));
var camera_p = huginn.camera.build_camera.call(null);
var mixer = cljs.core.async.mix.call(null,state_chan);
return promesa.core.then.call(null,camera_p,((function (camera_p,mixer,map__45443,map__45443__$1,system,state_chan){
return (function (p__45445){
var map__45446 = p__45445;
var map__45446__$1 = ((((!((map__45446 == null)))?((((map__45446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45446):map__45446);
var snap_chan = cljs.core.get.call(null,map__45446__$1,new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063));
var camera = cljs.core.get.call(null,map__45446__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.camera","/tmp/form-init1252977175527440591.clj",110,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__45446,map__45446__$1,snap_chan,camera,camera_p,mixer,map__45443,map__45443__$1,system,state_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["connecting camera to mixer"], null);
});})(map__45446,map__45446__$1,snap_chan,camera,camera_p,mixer,map__45443,map__45443__$1,system,state_chan))
,null)),null,-307655870);

cljs.core.async.admix.call(null,mixer,snap_chan);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,system,new cljs.core.Keyword(null,"camera","camera",-1190348585),camera),new cljs.core.Keyword(null,"mixer","mixer",-120313315),mixer),new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063),snap_chan)], null);
});})(camera_p,mixer,map__45443,map__45443__$1,system,state_chan))
);
});
huginn.camera.start_mix_camera = (function huginn$camera$start_mix_camera(system_promise){
return promesa.core.then.call(null,system_promise,huginn.camera._start_mix_camera);
});

//# sourceMappingURL=camera.js.map
