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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.camera","/tmp/form-init10702756143272110808.clj",15,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["camera connected"], null);
}),null)),null,1675742688);

return success_fn.call(null);
}),"stop",(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init10702756143272110808.clj",17,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["camera stopping"], null);
}),null)),null,1429021217);

return stop_fn.call(null);
}),"exit",(function (err){
restart_fn.call(null);

return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.camera","/tmp/form-init10702756143272110808.clj",19,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exit: ",err], null);
}),null)),null,-1551619823);
}),"read",(function (err,timestamp,filename){
try{var result__44205__auto___44349 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [err,timestamp,filename], null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init10702756143272110808.clj",21,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__44205__auto___44349){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"timestamp","timestamp",-2074956798,null),new cljs.core.Symbol(null,"filename","filename",211690744,null)], null),"=>",result__44205__auto___44349], null);
});})(result__44205__auto___44349))
,null)),null,2041602087);

}catch (e44336){if((e44336 instanceof Error)){
var e__44167__auto___44350 = e44336;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.camera","/tmp/form-init10702756143272110808.clj",21,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__44167__auto___44350){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__44167__auto___44350], null);
});})(e__44167__auto___44350))
,null)),null,-583405382);

throw e__44167__auto___44350;
} else {
throw e44336;

}
}
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__){
return (function (state_44343){
var state_val_44344 = (state_44343[(1)]);
if((state_val_44344 === (1))){
var inst_44337 = [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"filename","filename",-1428840783)];
var inst_44338 = [err,timestamp,filename];
var inst_44339 = cljs.core.PersistentHashMap.fromArrays(inst_44337,inst_44338);
var state_44343__$1 = state_44343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44343__$1,(2),read_chan,inst_44339);
} else {
if((state_val_44344 === (2))){
var inst_44341 = (state_44343[(2)]);
var state_44343__$1 = state_44343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44343__$1,inst_44341);
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
var statearr_44345 = [null,null,null,null,null,null,null];
(statearr_44345[(0)] = huginn$camera$cam_handlers_$_state_machine__36498__auto__);

(statearr_44345[(1)] = (1));

return statearr_44345;
});
var huginn$camera$cam_handlers_$_state_machine__36498__auto____1 = (function (state_44343){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_44343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e44346){if((e44346 instanceof Object)){
var ex__36501__auto__ = e44346;
var statearr_44347_44351 = state_44343;
(statearr_44347_44351[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44352 = state_44343;
state_44343 = G__44352;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$camera$cam_handlers_$_state_machine__36498__auto__ = function(state_44343){
switch(arguments.length){
case 0:
return huginn$camera$cam_handlers_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$camera$cam_handlers_$_state_machine__36498__auto____1.call(this,state_44343);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$camera$cam_handlers_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$camera$cam_handlers_$_state_machine__36498__auto____0;
huginn$camera$cam_handlers_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$camera$cam_handlers_$_state_machine__36498__auto____1;
return huginn$camera$cam_handlers_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_44348 = f__36588__auto__.call(null);
(statearr_44348[(6)] = c__36587__auto__);

return statearr_44348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
})], null);
});
huginn.camera.add_handlers = (function huginn$camera$add_handlers(camera,handlers){
var seq__44353 = cljs.core.seq.call(null,handlers);
var chunk__44354 = null;
var count__44355 = (0);
var i__44356 = (0);
while(true){
if((i__44356 < count__44355)){
var vec__44357 = cljs.core._nth.call(null,chunk__44354,i__44356);
var key = cljs.core.nth.call(null,vec__44357,(0),null);
var hand = cljs.core.nth.call(null,vec__44357,(1),null);
camera.on(key,hand);

var G__44363 = seq__44353;
var G__44364 = chunk__44354;
var G__44365 = count__44355;
var G__44366 = (i__44356 + (1));
seq__44353 = G__44363;
chunk__44354 = G__44364;
count__44355 = G__44365;
i__44356 = G__44366;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__44353);
if(temp__5457__auto__){
var seq__44353__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44353__$1)){
var c__31803__auto__ = cljs.core.chunk_first.call(null,seq__44353__$1);
var G__44367 = cljs.core.chunk_rest.call(null,seq__44353__$1);
var G__44368 = c__31803__auto__;
var G__44369 = cljs.core.count.call(null,c__31803__auto__);
var G__44370 = (0);
seq__44353 = G__44367;
chunk__44354 = G__44368;
count__44355 = G__44369;
i__44356 = G__44370;
continue;
} else {
var vec__44360 = cljs.core.first.call(null,seq__44353__$1);
var key = cljs.core.nth.call(null,vec__44360,(0),null);
var hand = cljs.core.nth.call(null,vec__44360,(1),null);
camera.on(key,hand);

var G__44371 = cljs.core.next.call(null,seq__44353__$1);
var G__44372 = null;
var G__44373 = (0);
var G__44374 = (0);
seq__44353 = G__44371;
chunk__44354 = G__44372;
count__44355 = G__44373;
i__44356 = G__44374;
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
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__31754__auto__ = (function huginn$camera$chunk_img_$_iter__44375(s__44376){
return (new cljs.core.LazySeq(null,(function (){
var s__44376__$1 = s__44376;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44376__$1);
if(temp__5457__auto__){
var s__44376__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44376__$2)){
var c__31752__auto__ = cljs.core.chunk_first.call(null,s__44376__$2);
var size__31753__auto__ = cljs.core.count.call(null,c__31752__auto__);
var b__44378 = cljs.core.chunk_buffer.call(null,size__31753__auto__);
if((function (){var i__44377 = (0);
while(true){
if((i__44377 < size__31753__auto__)){
var start = cljs.core._nth.call(null,c__31752__auto__,i__44377);
var end = (function (){var x__31231__auto__ = img.length;
var y__31232__auto__ = (start + chunk_size);
return ((x__31231__auto__ < y__31232__auto__) ? x__31231__auto__ : y__31232__auto__);
})();
cljs.core.chunk_append.call(null,b__44378,(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init10702756143272110808.clj",43,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (i__44377,end,start,c__31752__auto__,size__31753__auto__,b__44378,s__44376__$2,temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["at ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null)], null);
});})(i__44377,end,start,c__31752__auto__,size__31753__auto__,b__44378,s__44376__$2,temp__5457__auto__))
,null)),null,20460487);

return (new Buffer(cljs.core.into_array.call(null,cljs.core.array_chunk.call(null,img,start,end))));
})()
);

var G__44379 = (i__44377 + (1));
i__44377 = G__44379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44378),huginn$camera$chunk_img_$_iter__44375.call(null,cljs.core.chunk_rest.call(null,s__44376__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44378),null);
}
} else {
var start = cljs.core.first.call(null,s__44376__$2);
var end = (function (){var x__31231__auto__ = img.length;
var y__31232__auto__ = (start + chunk_size);
return ((x__31231__auto__ < y__31232__auto__) ? x__31231__auto__ : y__31232__auto__);
})();
return cljs.core.cons.call(null,(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init10702756143272110808.clj",43,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (end,start,s__44376__$2,temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["at ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null)], null);
});})(end,start,s__44376__$2,temp__5457__auto__))
,null)),null,-1553173783);

return (new Buffer(cljs.core.into_array.call(null,cljs.core.array_chunk.call(null,img,start,end))));
})()
,huginn$camera$chunk_img_$_iter__44375.call(null,cljs.core.rest.call(null,s__44376__$2)));
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
return (function (state_44462){
var state_val_44463 = (state_44462[(1)]);
if((state_val_44463 === (7))){
var inst_44401 = (state_44462[(2)]);
var state_44462__$1 = state_44462;
if(cljs.core.truth_(inst_44401)){
var statearr_44464_44496 = state_44462__$1;
(statearr_44464_44496[(1)] = (11));

} else {
var statearr_44465_44497 = state_44462__$1;
(statearr_44465_44497[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (20))){
var inst_44458 = (state_44462[(2)]);
var state_44462__$1 = state_44462;
var statearr_44466_44498 = state_44462__$1;
(statearr_44466_44498[(2)] = inst_44458);

(statearr_44466_44498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (1))){
var state_44462__$1 = state_44462;
var statearr_44467_44499 = state_44462__$1;
(statearr_44467_44499[(2)] = null);

(statearr_44467_44499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (4))){
var inst_44385 = (state_44462[(7)]);
var inst_44385__$1 = (state_44462[(2)]);
var inst_44387 = (inst_44385__$1 == null);
var inst_44388 = cljs.core.not.call(null,inst_44387);
var state_44462__$1 = (function (){var statearr_44468 = state_44462;
(statearr_44468[(7)] = inst_44385__$1);

return statearr_44468;
})();
if(inst_44388){
var statearr_44469_44500 = state_44462__$1;
(statearr_44469_44500[(1)] = (5));

} else {
var statearr_44470_44501 = state_44462__$1;
(statearr_44470_44501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (15))){
var inst_44423 = (state_44462[(8)]);
var state_44462__$1 = state_44462;
var statearr_44471_44502 = state_44462__$1;
(statearr_44471_44502[(2)] = inst_44423);

(statearr_44471_44502[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (21))){
var inst_44423 = (state_44462[(8)]);
var inst_44447 = (state_44462[(9)]);
var inst_44424 = (state_44462[(10)]);
var inst_44406 = (state_44462[(11)]);
var inst_44409 = (state_44462[(12)]);
var inst_44408 = (state_44462[(13)]);
var inst_44443 = (state_44462[(14)]);
var inst_44436 = (state_44462[(15)]);
var inst_44422 = (state_44462[(16)]);
var inst_44441 = (state_44462[(17)]);
var inst_44452 = (state_44462[(2)]);
var inst_44453 = (function (){var vec__44413 = inst_44422;
var complete = inst_44447;
var timestamp = inst_44408;
var img_buffers = inst_44436;
var map__44383 = inst_44406;
var img_data = inst_44424;
var err = inst_44423;
var img_packets = inst_44443;
var header = inst_44441;
var filename = inst_44409;
var img_res = inst_44406;
return ((function (vec__44413,complete,timestamp,img_buffers,map__44383,img_data,err,img_packets,header,filename,img_res,inst_44423,inst_44447,inst_44424,inst_44406,inst_44409,inst_44408,inst_44443,inst_44436,inst_44422,inst_44441,inst_44452,state_val_44463,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["done xforming"], null);
});
;})(vec__44413,complete,timestamp,img_buffers,map__44383,img_data,err,img_packets,header,filename,img_res,inst_44423,inst_44447,inst_44424,inst_44406,inst_44409,inst_44408,inst_44443,inst_44436,inst_44422,inst_44441,inst_44452,state_val_44463,c__36587__auto__))
})();
var inst_44454 = (new cljs.core.Delay(inst_44453,null));
var inst_44455 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init10702756143272110808.clj",68,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_44454,null,893276474);
var state_44462__$1 = (function (){var statearr_44472 = state_44462;
(statearr_44472[(18)] = inst_44452);

(statearr_44472[(19)] = inst_44455);

return statearr_44472;
})();
var statearr_44473_44503 = state_44462__$1;
(statearr_44473_44503[(2)] = null);

(statearr_44473_44503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (13))){
var inst_44406 = (state_44462[(11)]);
var inst_44409 = (state_44462[(12)]);
var inst_44408 = (state_44462[(13)]);
var inst_44406__$1 = (state_44462[(2)]);
var inst_44407 = cljs.core.get.call(null,inst_44406__$1,new cljs.core.Keyword(null,"err","err",-2089457205));
var inst_44408__$1 = cljs.core.get.call(null,inst_44406__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var inst_44409__$1 = cljs.core.get.call(null,inst_44406__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var inst_44410 = (function (){var map__44383 = inst_44406__$1;
var img_res = inst_44406__$1;
var err = inst_44407;
var timestamp = inst_44408__$1;
var filename = inst_44409__$1;
return ((function (map__44383,img_res,err,timestamp,filename,inst_44406,inst_44409,inst_44408,inst_44406__$1,inst_44407,inst_44408__$1,inst_44409__$1,state_val_44463,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["xforming image ",filename], null);
});
;})(map__44383,img_res,err,timestamp,filename,inst_44406,inst_44409,inst_44408,inst_44406__$1,inst_44407,inst_44408__$1,inst_44409__$1,state_val_44463,c__36587__auto__))
})();
var inst_44411 = (new cljs.core.Delay(inst_44410,null));
var inst_44412 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init10702756143272110808.clj",51,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_44411,null,-402404194);
var inst_44416 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44409__$1)].join('');
var inst_44417 = [new cljs.core.Keyword(null,"encoding","encoding",1728578272)];
var inst_44418 = [""];
var inst_44419 = cljs.core.PersistentHashMap.fromArrays(inst_44417,inst_44418);
var inst_44420 = cljs_node_io.core.aslurp.call(null,inst_44416,inst_44419);
var state_44462__$1 = (function (){var statearr_44474 = state_44462;
(statearr_44474[(20)] = inst_44412);

(statearr_44474[(11)] = inst_44406__$1);

(statearr_44474[(12)] = inst_44409__$1);

(statearr_44474[(13)] = inst_44408__$1);

return statearr_44474;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44462__$1,(14),inst_44420);
} else {
if((state_val_44463 === (6))){
var state_44462__$1 = state_44462;
var statearr_44475_44504 = state_44462__$1;
(statearr_44475_44504[(2)] = false);

(statearr_44475_44504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (17))){
var inst_44429 = (state_44462[(2)]);
var state_44462__$1 = state_44462;
if(cljs.core.truth_(inst_44429)){
var statearr_44476_44505 = state_44462__$1;
(statearr_44476_44505[(1)] = (18));

} else {
var statearr_44477_44506 = state_44462__$1;
(statearr_44477_44506[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (3))){
var inst_44460 = (state_44462[(2)]);
var state_44462__$1 = state_44462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44462__$1,inst_44460);
} else {
if((state_val_44463 === (12))){
var inst_44385 = (state_44462[(7)]);
var state_44462__$1 = state_44462;
var statearr_44478_44507 = state_44462__$1;
(statearr_44478_44507[(2)] = inst_44385);

(statearr_44478_44507[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (2))){
var state_44462__$1 = state_44462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44462__$1,(4),in$);
} else {
if((state_val_44463 === (19))){
var inst_44423 = (state_44462[(8)]);
var inst_44447 = (state_44462[(9)]);
var inst_44424 = (state_44462[(10)]);
var inst_44406 = (state_44462[(11)]);
var inst_44409 = (state_44462[(12)]);
var inst_44408 = (state_44462[(13)]);
var inst_44443 = (state_44462[(14)]);
var inst_44436 = (state_44462[(15)]);
var inst_44422 = (state_44462[(16)]);
var inst_44441 = (state_44462[(17)]);
var inst_44436__$1 = huginn.camera.chunk_img.call(null,inst_44424,(100000));
var inst_44437 = [new cljs.core.Keyword(null,"payload","payload",-383036092)];
var inst_44438 = cljs.core.count.call(null,inst_44436__$1);
var inst_44439 = ["split_image/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44438)].join('');
var inst_44440 = [inst_44439];
var inst_44441__$1 = cljs.core.PersistentHashMap.fromArrays(inst_44437,inst_44440);
var inst_44442 = (function (){var map__44383 = inst_44406;
var img_res = inst_44406;
var err = inst_44423;
var timestamp = inst_44408;
var filename = inst_44409;
var vec__44413 = inst_44422;
var img_data = inst_44424;
var img_buffers = inst_44436__$1;
var header = inst_44441__$1;
return ((function (map__44383,img_res,err,timestamp,filename,vec__44413,img_data,img_buffers,header,inst_44423,inst_44447,inst_44424,inst_44406,inst_44409,inst_44408,inst_44443,inst_44436,inst_44422,inst_44441,inst_44436__$1,inst_44437,inst_44438,inst_44439,inst_44440,inst_44441__$1,state_val_44463,c__36587__auto__){
return (function (p1__44380_SHARP_,p2__44381_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"subfolder","subfolder",1044158439)],[p1__44380_SHARP_,timestamp,["captures/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int.call(null,(100000))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__44381_SHARP_)].join('')]);
});
;})(map__44383,img_res,err,timestamp,filename,vec__44413,img_data,img_buffers,header,inst_44423,inst_44447,inst_44424,inst_44406,inst_44409,inst_44408,inst_44443,inst_44436,inst_44422,inst_44441,inst_44436__$1,inst_44437,inst_44438,inst_44439,inst_44440,inst_44441__$1,state_val_44463,c__36587__auto__))
})();
var inst_44443__$1 = cljs.core.map_indexed.call(null,inst_44442,inst_44436__$1);
var inst_44444 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44445 = [inst_44441__$1];
var inst_44446 = (new cljs.core.PersistentVector(null,1,(5),inst_44444,inst_44445,null));
var inst_44447__$1 = cljs.core.concat.call(null,inst_44446,inst_44443__$1);
var inst_44448 = (function (){var vec__44413 = inst_44422;
var complete = inst_44447__$1;
var timestamp = inst_44408;
var img_buffers = inst_44436__$1;
var map__44383 = inst_44406;
var img_data = inst_44424;
var err = inst_44423;
var img_packets = inst_44443__$1;
var header = inst_44441__$1;
var filename = inst_44409;
var img_res = inst_44406;
return ((function (vec__44413,complete,timestamp,img_buffers,map__44383,img_data,err,img_packets,header,filename,img_res,inst_44423,inst_44447,inst_44424,inst_44406,inst_44409,inst_44408,inst_44443,inst_44436,inst_44422,inst_44441,inst_44436__$1,inst_44437,inst_44438,inst_44439,inst_44440,inst_44441__$1,inst_44442,inst_44443__$1,inst_44444,inst_44445,inst_44446,inst_44447__$1,state_val_44463,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["trying to write img packet"], null);
});
;})(vec__44413,complete,timestamp,img_buffers,map__44383,img_data,err,img_packets,header,filename,img_res,inst_44423,inst_44447,inst_44424,inst_44406,inst_44409,inst_44408,inst_44443,inst_44436,inst_44422,inst_44441,inst_44436__$1,inst_44437,inst_44438,inst_44439,inst_44440,inst_44441__$1,inst_44442,inst_44443__$1,inst_44444,inst_44445,inst_44446,inst_44447__$1,state_val_44463,c__36587__auto__))
})();
var inst_44449 = (new cljs.core.Delay(inst_44448,null));
var inst_44450 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init10702756143272110808.clj",66,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_44449,null,1956474733);
var state_44462__$1 = (function (){var statearr_44479 = state_44462;
(statearr_44479[(9)] = inst_44447__$1);

(statearr_44479[(14)] = inst_44443__$1);

(statearr_44479[(15)] = inst_44436__$1);

(statearr_44479[(17)] = inst_44441__$1);

(statearr_44479[(21)] = inst_44450);

return statearr_44479;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44462__$1,(21),out,inst_44447__$1);
} else {
if((state_val_44463 === (11))){
var inst_44385 = (state_44462[(7)]);
var inst_44403 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44385);
var state_44462__$1 = state_44462;
var statearr_44480_44508 = state_44462__$1;
(statearr_44480_44508[(2)] = inst_44403);

(statearr_44480_44508[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (9))){
var state_44462__$1 = state_44462;
var statearr_44481_44509 = state_44462__$1;
(statearr_44481_44509[(2)] = false);

(statearr_44481_44509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (5))){
var inst_44385 = (state_44462[(7)]);
var inst_44390 = inst_44385.cljs$lang$protocol_mask$partition0$;
var inst_44391 = (inst_44390 & (64));
var inst_44392 = inst_44385.cljs$core$ISeq$;
var inst_44393 = (cljs.core.PROTOCOL_SENTINEL === inst_44392);
var inst_44394 = (inst_44391) || (inst_44393);
var state_44462__$1 = state_44462;
if(cljs.core.truth_(inst_44394)){
var statearr_44482_44510 = state_44462__$1;
(statearr_44482_44510[(1)] = (8));

} else {
var statearr_44483_44511 = state_44462__$1;
(statearr_44483_44511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (14))){
var inst_44423 = (state_44462[(8)]);
var inst_44422 = (state_44462[(16)]);
var inst_44422__$1 = (state_44462[(2)]);
var inst_44423__$1 = cljs.core.nth.call(null,inst_44422__$1,(0),null);
var inst_44424 = cljs.core.nth.call(null,inst_44422__$1,(1),null);
var state_44462__$1 = (function (){var statearr_44484 = state_44462;
(statearr_44484[(8)] = inst_44423__$1);

(statearr_44484[(10)] = inst_44424);

(statearr_44484[(16)] = inst_44422__$1);

return statearr_44484;
})();
if(cljs.core.truth_(inst_44423__$1)){
var statearr_44485_44512 = state_44462__$1;
(statearr_44485_44512[(1)] = (15));

} else {
var statearr_44486_44513 = state_44462__$1;
(statearr_44486_44513[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (16))){
var inst_44409 = (state_44462[(12)]);
var inst_44427 = cljs.core._EQ_.call(null,inst_44409,"");
var state_44462__$1 = state_44462;
var statearr_44487_44514 = state_44462__$1;
(statearr_44487_44514[(2)] = inst_44427);

(statearr_44487_44514[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (10))){
var inst_44398 = (state_44462[(2)]);
var state_44462__$1 = state_44462;
var statearr_44488_44515 = state_44462__$1;
(statearr_44488_44515[(2)] = inst_44398);

(statearr_44488_44515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (18))){
var inst_44423 = (state_44462[(8)]);
var inst_44424 = (state_44462[(10)]);
var inst_44406 = (state_44462[(11)]);
var inst_44409 = (state_44462[(12)]);
var inst_44408 = (state_44462[(13)]);
var inst_44422 = (state_44462[(16)]);
var inst_44431 = (function (){var map__44383 = inst_44406;
var img_res = inst_44406;
var err = inst_44423;
var timestamp = inst_44408;
var filename = inst_44409;
var vec__44413 = inst_44422;
var img_data = inst_44424;
return ((function (map__44383,img_res,err,timestamp,filename,vec__44413,img_data,inst_44423,inst_44424,inst_44406,inst_44409,inst_44408,inst_44422,state_val_44463,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error reading image:",err," ",filename], null);
});
;})(map__44383,img_res,err,timestamp,filename,vec__44413,img_data,inst_44423,inst_44424,inst_44406,inst_44409,inst_44408,inst_44422,state_val_44463,c__36587__auto__))
})();
var inst_44432 = (new cljs.core.Delay(inst_44431,null));
var inst_44433 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.camera","/tmp/form-init10702756143272110808.clj",54,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_44432,null,-1618428870);
var state_44462__$1 = (function (){var statearr_44489 = state_44462;
(statearr_44489[(22)] = inst_44433);

return statearr_44489;
})();
var statearr_44490_44516 = state_44462__$1;
(statearr_44490_44516[(2)] = null);

(statearr_44490_44516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44463 === (8))){
var state_44462__$1 = state_44462;
var statearr_44491_44517 = state_44462__$1;
(statearr_44491_44517[(2)] = true);

(statearr_44491_44517[(1)] = (10));


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
var statearr_44492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44492[(0)] = huginn$camera$read_imgs_$_state_machine__36498__auto__);

(statearr_44492[(1)] = (1));

return statearr_44492;
});
var huginn$camera$read_imgs_$_state_machine__36498__auto____1 = (function (state_44462){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_44462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e44493){if((e44493 instanceof Object)){
var ex__36501__auto__ = e44493;
var statearr_44494_44518 = state_44462;
(statearr_44494_44518[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44519 = state_44462;
state_44462 = G__44519;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$camera$read_imgs_$_state_machine__36498__auto__ = function(state_44462){
switch(arguments.length){
case 0:
return huginn$camera$read_imgs_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$camera$read_imgs_$_state_machine__36498__auto____1.call(this,state_44462);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$camera$read_imgs_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$camera$read_imgs_$_state_machine__36498__auto____0;
huginn$camera$read_imgs_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$camera$read_imgs_$_state_machine__36498__auto____1;
return huginn$camera$read_imgs_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_44495 = f__36588__auto__.call(null);
(statearr_44495[(6)] = c__36587__auto__);

return statearr_44495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
});
huginn.camera.build_camera = (function huginn$camera$build_camera(var_args){
var G__44521 = arguments.length;
switch (G__44521) {
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

huginn.camera.build_camera.cljs$core$IFn$_invoke$arity$1 = (function (p__44522){
var map__44523 = p__44522;
var map__44523__$1 = ((((!((map__44523 == null)))?((((map__44523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44523):map__44523);
var opts = map__44523__$1;
var output_dir = cljs.core.get.call(null,map__44523__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991),"pics");
var tl = cljs.core.get.call(null,map__44523__$1,new cljs.core.Keyword(null,"tl","tl",-35265210),(((60) * (1000)) * (10)));
var mode = cljs.core.get.call(null,map__44523__$1,new cljs.core.Keyword(null,"mode","mode",654403691),"timelapse");
var encoding = cljs.core.get.call(null,map__44523__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272),"jpg");
return promesa.core.promise.call(null,((function (map__44523,map__44523__$1,opts,output_dir,tl,mode,encoding){
return (function (resolve,reject){
var snap_chan = cljs.core.async.chan.call(null);
var data_chan = cljs.core.async.chan.call(null);
var camera = (new huginn.camera.node$module$raspicam(({"output": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/%04d_img.jpg"].join(''), "mode": mode, "encoding": encoding, "tl": tl})));
var output = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"raw-chan","raw-chan",-779682305),snap_chan,new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063),data_chan,new cljs.core.Keyword(null,"camera","camera",-1190348585),camera], null);
var handlers = huginn.camera.cam_handlers.call(null,((function (snap_chan,data_chan,camera,output,map__44523,map__44523__$1,opts,output_dir,tl,mode,encoding){
return (function (){
return resolve.call(null,output);
});})(snap_chan,data_chan,camera,output,map__44523,map__44523__$1,opts,output_dir,tl,mode,encoding))
,((function (snap_chan,data_chan,camera,output,map__44523,map__44523__$1,opts,output_dir,tl,mode,encoding){
return (function (){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs_node_io.core.delete_file,cljs_node_io.core.file_seq.call(null,output_dir)));
});})(snap_chan,data_chan,camera,output,map__44523,map__44523__$1,opts,output_dir,tl,mode,encoding))
,((function (snap_chan,data_chan,camera,output,map__44523,map__44523__$1,opts,output_dir,tl,mode,encoding){
return (function (){
return camera.start();
});})(snap_chan,data_chan,camera,output,map__44523,map__44523__$1,opts,output_dir,tl,mode,encoding))
,snap_chan);
huginn.camera.read_imgs.call(null,output_dir,snap_chan,data_chan);

huginn.camera.add_handlers.call(null,camera,handlers);

return camera.start();
});})(map__44523,map__44523__$1,opts,output_dir,tl,mode,encoding))
);
});

huginn.camera.build_camera.cljs$lang$maxFixedArity = 1;

huginn.camera.cleanup_camera = (function huginn$camera$cleanup_camera(p__44526){
var map__44527 = p__44526;
var map__44527__$1 = ((((!((map__44527 == null)))?((((map__44527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44527):map__44527);
var system = map__44527__$1;
var camera = cljs.core.get.call(null,map__44527__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var snap_chan = cljs.core.get.call(null,map__44527__$1,new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063));
camera.stop();

cljs.core.async.close_BANG_.call(null,snap_chan);

return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,system,new cljs.core.Keyword(null,"camera","camera",-1190348585)),new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063));
});
huginn.camera._start_mix_camera = (function huginn$camera$_start_mix_camera(p__44529){
var map__44530 = p__44529;
var map__44530__$1 = ((((!((map__44530 == null)))?((((map__44530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44530):map__44530);
var system = map__44530__$1;
var telemetry_chan = cljs.core.get.call(null,map__44530__$1,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503));
var camera_p = huginn.camera.build_camera.call(null);
var mixer = cljs.core.async.mix.call(null,telemetry_chan);
return promesa.core.then.call(null,camera_p,((function (camera_p,mixer,map__44530,map__44530__$1,system,telemetry_chan){
return (function (p__44532){
var map__44533 = p__44532;
var map__44533__$1 = ((((!((map__44533 == null)))?((((map__44533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44533):map__44533);
var snap_chan = cljs.core.get.call(null,map__44533__$1,new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063));
var camera = cljs.core.get.call(null,map__44533__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.camera","/tmp/form-init10702756143272110808.clj",119,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__44533,map__44533__$1,snap_chan,camera,camera_p,mixer,map__44530,map__44530__$1,system,telemetry_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["connecting camera to mixer"], null);
});})(map__44533,map__44533__$1,snap_chan,camera,camera_p,mixer,map__44530,map__44530__$1,system,telemetry_chan))
,null)),null,-1395015645);

cljs.core.async.admix.call(null,mixer,snap_chan);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,system,new cljs.core.Keyword(null,"camera","camera",-1190348585),camera),new cljs.core.Keyword(null,"mixer","mixer",-120313315),mixer),new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063),snap_chan)], null);
});})(camera_p,mixer,map__44530,map__44530__$1,system,telemetry_chan))
);
});
huginn.camera.start_mix_camera = (function huginn$camera$start_mix_camera(system_promise){
return promesa.core.then.call(null,system_promise,huginn.camera._start_mix_camera);
});

//# sourceMappingURL=camera.js.map
