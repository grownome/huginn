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
}),null)),null,863254101);

return success_fn.call(null);
}),"stop",(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init1252977175527440591.clj",18,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["camera stopping"], null);
}),null)),null,-125488856);

return stop_fn.call(null);
}),"exit",(function (err){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.camera","/tmp/form-init1252977175527440591.clj",20,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error: ",err], null);
}),null)),null,-993556074);
}),"read",(function (err,timestamp,filename){
try{var result__44205__auto___44349 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [err,timestamp,filename], null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init1252977175527440591.clj",22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__44205__auto___44349){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"timestamp","timestamp",-2074956798,null),new cljs.core.Symbol(null,"filename","filename",211690744,null)], null),"=>",result__44205__auto___44349], null);
});})(result__44205__auto___44349))
,null)),null,-478814523);

}catch (e44336){if((e44336 instanceof Error)){
var e__44167__auto___44350 = e44336;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.camera","/tmp/form-init1252977175527440591.clj",22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__44167__auto___44350){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__44167__auto___44350], null);
});})(e__44167__auto___44350))
,null)),null,-1249263465);

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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init1252977175527440591.clj",44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (i__44377,end,start,c__31752__auto__,size__31753__auto__,b__44378,s__44376__$2,temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["at ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null)], null);
});})(i__44377,end,start,c__31752__auto__,size__31753__auto__,b__44378,s__44376__$2,temp__5457__auto__))
,null)),null,-532410282);

return cljs.core.into_array.call(null,cljs.core.array_chunk.call(null,img,start,end));
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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init1252977175527440591.clj",44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (end,start,s__44376__$2,temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["at ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null)], null);
});})(end,start,s__44376__$2,temp__5457__auto__))
,null)),null,-760126775);

return cljs.core.into_array.call(null,cljs.core.array_chunk.call(null,img,start,end));
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
return (function (state_44461){
var state_val_44462 = (state_44461[(1)]);
if((state_val_44462 === (7))){
var inst_44400 = (state_44461[(2)]);
var state_44461__$1 = state_44461;
if(cljs.core.truth_(inst_44400)){
var statearr_44463_44495 = state_44461__$1;
(statearr_44463_44495[(1)] = (11));

} else {
var statearr_44464_44496 = state_44461__$1;
(statearr_44464_44496[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44462 === (20))){
var inst_44457 = (state_44461[(2)]);
var state_44461__$1 = state_44461;
var statearr_44465_44497 = state_44461__$1;
(statearr_44465_44497[(2)] = inst_44457);

(statearr_44465_44497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44462 === (1))){
var state_44461__$1 = state_44461;
var statearr_44466_44498 = state_44461__$1;
(statearr_44466_44498[(2)] = null);

(statearr_44466_44498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44462 === (4))){
var inst_44384 = (state_44461[(7)]);
var inst_44384__$1 = (state_44461[(2)]);
var inst_44386 = (inst_44384__$1 == null);
var inst_44387 = cljs.core.not.call(null,inst_44386);
var state_44461__$1 = (function (){var statearr_44467 = state_44461;
(statearr_44467[(7)] = inst_44384__$1);

return statearr_44467;
})();
if(inst_44387){
var statearr_44468_44499 = state_44461__$1;
(statearr_44468_44499[(1)] = (5));

} else {
var statearr_44469_44500 = state_44461__$1;
(statearr_44469_44500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44462 === (15))){
var inst_44422 = (state_44461[(8)]);
var state_44461__$1 = state_44461;
var statearr_44470_44501 = state_44461__$1;
(statearr_44470_44501[(2)] = inst_44422);

(statearr_44470_44501[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44462 === (21))){
var inst_44421 = (state_44461[(9)]);
var inst_44442 = (state_44461[(10)]);
var inst_44423 = (state_44461[(11)]);
var inst_44408 = (state_44461[(12)]);
var inst_44435 = (state_44461[(13)]);
var inst_44422 = (state_44461[(8)]);
var inst_44407 = (state_44461[(14)]);
var inst_44440 = (state_44461[(15)]);
var inst_44405 = (state_44461[(16)]);
var inst_44446 = (state_44461[(17)]);
var inst_44451 = (state_44461[(2)]);
var inst_44452 = (function (){var complete = inst_44446;
var timestamp = inst_44407;
var map__44382 = inst_44405;
var vec__44412 = inst_44421;
var img_buffers = inst_44435;
var img_data = inst_44423;
var err = inst_44422;
var img_packets = inst_44442;
var header = inst_44440;
var filename = inst_44408;
var img_res = inst_44405;
return ((function (complete,timestamp,map__44382,vec__44412,img_buffers,img_data,err,img_packets,header,filename,img_res,inst_44421,inst_44442,inst_44423,inst_44408,inst_44435,inst_44422,inst_44407,inst_44440,inst_44405,inst_44446,inst_44451,state_val_44462,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["done xforming"], null);
});
;})(complete,timestamp,map__44382,vec__44412,img_buffers,img_data,err,img_packets,header,filename,img_res,inst_44421,inst_44442,inst_44423,inst_44408,inst_44435,inst_44422,inst_44407,inst_44440,inst_44405,inst_44446,inst_44451,state_val_44462,c__36587__auto__))
})();
var inst_44453 = (new cljs.core.Delay(inst_44452,null));
var inst_44454 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init1252977175527440591.clj",63,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_44453,null,2053420133);
var state_44461__$1 = (function (){var statearr_44471 = state_44461;
(statearr_44471[(18)] = inst_44451);

(statearr_44471[(19)] = inst_44454);

return statearr_44471;
})();
var statearr_44472_44502 = state_44461__$1;
(statearr_44472_44502[(2)] = null);

(statearr_44472_44502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44462 === (13))){
var inst_44408 = (state_44461[(12)]);
var inst_44407 = (state_44461[(14)]);
var inst_44405 = (state_44461[(16)]);
var inst_44405__$1 = (state_44461[(2)]);
var inst_44406 = cljs.core.get.call(null,inst_44405__$1,new cljs.core.Keyword(null,"err","err",-2089457205));
var inst_44407__$1 = cljs.core.get.call(null,inst_44405__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var inst_44408__$1 = cljs.core.get.call(null,inst_44405__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var inst_44409 = (function (){var map__44382 = inst_44405__$1;
var img_res = inst_44405__$1;
var err = inst_44406;
var timestamp = inst_44407__$1;
var filename = inst_44408__$1;
return ((function (map__44382,img_res,err,timestamp,filename,inst_44408,inst_44407,inst_44405,inst_44405__$1,inst_44406,inst_44407__$1,inst_44408__$1,state_val_44462,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["xforming image ",filename], null);
});
;})(map__44382,img_res,err,timestamp,filename,inst_44408,inst_44407,inst_44405,inst_44405__$1,inst_44406,inst_44407__$1,inst_44408__$1,state_val_44462,c__36587__auto__))
})();
var inst_44410 = (new cljs.core.Delay(inst_44409,null));
var inst_44411 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init1252977175527440591.clj",52,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_44410,null,-1132155354);
var inst_44415 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44408__$1)].join('');
var inst_44416 = [new cljs.core.Keyword(null,"encoding","encoding",1728578272)];
var inst_44417 = [""];
var inst_44418 = cljs.core.PersistentHashMap.fromArrays(inst_44416,inst_44417);
var inst_44419 = cljs_node_io.core.aslurp.call(null,inst_44415,inst_44418);
var state_44461__$1 = (function (){var statearr_44473 = state_44461;
(statearr_44473[(20)] = inst_44411);

(statearr_44473[(12)] = inst_44408__$1);

(statearr_44473[(14)] = inst_44407__$1);

(statearr_44473[(16)] = inst_44405__$1);

return statearr_44473;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44461__$1,(14),inst_44419);
} else {
if((state_val_44462 === (6))){
var state_44461__$1 = state_44461;
var statearr_44474_44503 = state_44461__$1;
(statearr_44474_44503[(2)] = false);

(statearr_44474_44503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44462 === (17))){
var inst_44428 = (state_44461[(2)]);
var state_44461__$1 = state_44461;
if(cljs.core.truth_(inst_44428)){
var statearr_44475_44504 = state_44461__$1;
(statearr_44475_44504[(1)] = (18));

} else {
var statearr_44476_44505 = state_44461__$1;
(statearr_44476_44505[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44462 === (3))){
var inst_44459 = (state_44461[(2)]);
var state_44461__$1 = state_44461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44461__$1,inst_44459);
} else {
if((state_val_44462 === (12))){
var inst_44384 = (state_44461[(7)]);
var state_44461__$1 = state_44461;
var statearr_44477_44506 = state_44461__$1;
(statearr_44477_44506[(2)] = inst_44384);

(statearr_44477_44506[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44462 === (2))){
var state_44461__$1 = state_44461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44461__$1,(4),in$);
} else {
if((state_val_44462 === (19))){
var inst_44421 = (state_44461[(9)]);
var inst_44442 = (state_44461[(10)]);
var inst_44423 = (state_44461[(11)]);
var inst_44408 = (state_44461[(12)]);
var inst_44435 = (state_44461[(13)]);
var inst_44422 = (state_44461[(8)]);
var inst_44407 = (state_44461[(14)]);
var inst_44440 = (state_44461[(15)]);
var inst_44405 = (state_44461[(16)]);
var inst_44446 = (state_44461[(17)]);
var inst_44435__$1 = huginn.camera.chunk_img.call(null,inst_44423,(25000));
var inst_44436 = [new cljs.core.Keyword(null,"payload","payload",-383036092)];
var inst_44437 = cljs.core.count.call(null,inst_44435__$1);
var inst_44438 = ["split_image/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44437)].join('');
var inst_44439 = [inst_44438];
var inst_44440__$1 = cljs.core.PersistentHashMap.fromArrays(inst_44436,inst_44439);
var inst_44441 = (function (){var map__44382 = inst_44405;
var img_res = inst_44405;
var err = inst_44422;
var timestamp = inst_44407;
var filename = inst_44408;
var vec__44412 = inst_44421;
var img_data = inst_44423;
var img_buffers = inst_44435__$1;
var header = inst_44440__$1;
return ((function (map__44382,img_res,err,timestamp,filename,vec__44412,img_data,img_buffers,header,inst_44421,inst_44442,inst_44423,inst_44408,inst_44435,inst_44422,inst_44407,inst_44440,inst_44405,inst_44446,inst_44435__$1,inst_44436,inst_44437,inst_44438,inst_44439,inst_44440__$1,state_val_44462,c__36587__auto__){
return (function (p1__44380_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)],[p1__44380_SHARP_,timestamp]);
});
;})(map__44382,img_res,err,timestamp,filename,vec__44412,img_data,img_buffers,header,inst_44421,inst_44442,inst_44423,inst_44408,inst_44435,inst_44422,inst_44407,inst_44440,inst_44405,inst_44446,inst_44435__$1,inst_44436,inst_44437,inst_44438,inst_44439,inst_44440__$1,state_val_44462,c__36587__auto__))
})();
var inst_44442__$1 = cljs.core.map.call(null,inst_44441,inst_44435__$1);
var inst_44443 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44444 = [inst_44440__$1];
var inst_44445 = (new cljs.core.PersistentVector(null,1,(5),inst_44443,inst_44444,null));
var inst_44446__$1 = cljs.core.concat.call(null,inst_44445,inst_44442__$1);
var inst_44447 = (function (){var complete = inst_44446__$1;
var timestamp = inst_44407;
var map__44382 = inst_44405;
var vec__44412 = inst_44421;
var img_buffers = inst_44435__$1;
var img_data = inst_44423;
var err = inst_44422;
var img_packets = inst_44442__$1;
var header = inst_44440__$1;
var filename = inst_44408;
var img_res = inst_44405;
return ((function (complete,timestamp,map__44382,vec__44412,img_buffers,img_data,err,img_packets,header,filename,img_res,inst_44421,inst_44442,inst_44423,inst_44408,inst_44435,inst_44422,inst_44407,inst_44440,inst_44405,inst_44446,inst_44435__$1,inst_44436,inst_44437,inst_44438,inst_44439,inst_44440__$1,inst_44441,inst_44442__$1,inst_44443,inst_44444,inst_44445,inst_44446__$1,state_val_44462,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["trying to write img packet"], null);
});
;})(complete,timestamp,map__44382,vec__44412,img_buffers,img_data,err,img_packets,header,filename,img_res,inst_44421,inst_44442,inst_44423,inst_44408,inst_44435,inst_44422,inst_44407,inst_44440,inst_44405,inst_44446,inst_44435__$1,inst_44436,inst_44437,inst_44438,inst_44439,inst_44440__$1,inst_44441,inst_44442__$1,inst_44443,inst_44444,inst_44445,inst_44446__$1,state_val_44462,c__36587__auto__))
})();
var inst_44448 = (new cljs.core.Delay(inst_44447,null));
var inst_44449 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init1252977175527440591.clj",61,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_44448,null,-352284750);
var state_44461__$1 = (function (){var statearr_44478 = state_44461;
(statearr_44478[(10)] = inst_44442__$1);

(statearr_44478[(21)] = inst_44449);

(statearr_44478[(13)] = inst_44435__$1);

(statearr_44478[(15)] = inst_44440__$1);

(statearr_44478[(17)] = inst_44446__$1);

return statearr_44478;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44461__$1,(21),out,inst_44446__$1);
} else {
if((state_val_44462 === (11))){
var inst_44384 = (state_44461[(7)]);
var inst_44402 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44384);
var state_44461__$1 = state_44461;
var statearr_44479_44507 = state_44461__$1;
(statearr_44479_44507[(2)] = inst_44402);

(statearr_44479_44507[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44462 === (9))){
var state_44461__$1 = state_44461;
var statearr_44480_44508 = state_44461__$1;
(statearr_44480_44508[(2)] = false);

(statearr_44480_44508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44462 === (5))){
var inst_44384 = (state_44461[(7)]);
var inst_44389 = inst_44384.cljs$lang$protocol_mask$partition0$;
var inst_44390 = (inst_44389 & (64));
var inst_44391 = inst_44384.cljs$core$ISeq$;
var inst_44392 = (cljs.core.PROTOCOL_SENTINEL === inst_44391);
var inst_44393 = (inst_44390) || (inst_44392);
var state_44461__$1 = state_44461;
if(cljs.core.truth_(inst_44393)){
var statearr_44481_44509 = state_44461__$1;
(statearr_44481_44509[(1)] = (8));

} else {
var statearr_44482_44510 = state_44461__$1;
(statearr_44482_44510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44462 === (14))){
var inst_44421 = (state_44461[(9)]);
var inst_44422 = (state_44461[(8)]);
var inst_44421__$1 = (state_44461[(2)]);
var inst_44422__$1 = cljs.core.nth.call(null,inst_44421__$1,(0),null);
var inst_44423 = cljs.core.nth.call(null,inst_44421__$1,(1),null);
var state_44461__$1 = (function (){var statearr_44483 = state_44461;
(statearr_44483[(9)] = inst_44421__$1);

(statearr_44483[(11)] = inst_44423);

(statearr_44483[(8)] = inst_44422__$1);

return statearr_44483;
})();
if(cljs.core.truth_(inst_44422__$1)){
var statearr_44484_44511 = state_44461__$1;
(statearr_44484_44511[(1)] = (15));

} else {
var statearr_44485_44512 = state_44461__$1;
(statearr_44485_44512[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44462 === (16))){
var inst_44408 = (state_44461[(12)]);
var inst_44426 = cljs.core._EQ_.call(null,inst_44408,"");
var state_44461__$1 = state_44461;
var statearr_44486_44513 = state_44461__$1;
(statearr_44486_44513[(2)] = inst_44426);

(statearr_44486_44513[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44462 === (10))){
var inst_44397 = (state_44461[(2)]);
var state_44461__$1 = state_44461;
var statearr_44487_44514 = state_44461__$1;
(statearr_44487_44514[(2)] = inst_44397);

(statearr_44487_44514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44462 === (18))){
var inst_44421 = (state_44461[(9)]);
var inst_44423 = (state_44461[(11)]);
var inst_44408 = (state_44461[(12)]);
var inst_44422 = (state_44461[(8)]);
var inst_44407 = (state_44461[(14)]);
var inst_44405 = (state_44461[(16)]);
var inst_44430 = (function (){var map__44382 = inst_44405;
var img_res = inst_44405;
var err = inst_44422;
var timestamp = inst_44407;
var filename = inst_44408;
var vec__44412 = inst_44421;
var img_data = inst_44423;
return ((function (map__44382,img_res,err,timestamp,filename,vec__44412,img_data,inst_44421,inst_44423,inst_44408,inst_44422,inst_44407,inst_44405,state_val_44462,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error reading image:",err," ",filename], null);
});
;})(map__44382,img_res,err,timestamp,filename,vec__44412,img_data,inst_44421,inst_44423,inst_44408,inst_44422,inst_44407,inst_44405,state_val_44462,c__36587__auto__))
})();
var inst_44431 = (new cljs.core.Delay(inst_44430,null));
var inst_44432 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.camera","/tmp/form-init1252977175527440591.clj",55,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_44431,null,-476543760);
var state_44461__$1 = (function (){var statearr_44488 = state_44461;
(statearr_44488[(22)] = inst_44432);

return statearr_44488;
})();
var statearr_44489_44515 = state_44461__$1;
(statearr_44489_44515[(2)] = null);

(statearr_44489_44515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44462 === (8))){
var state_44461__$1 = state_44461;
var statearr_44490_44516 = state_44461__$1;
(statearr_44490_44516[(2)] = true);

(statearr_44490_44516[(1)] = (10));


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
var statearr_44491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44491[(0)] = huginn$camera$read_imgs_$_state_machine__36498__auto__);

(statearr_44491[(1)] = (1));

return statearr_44491;
});
var huginn$camera$read_imgs_$_state_machine__36498__auto____1 = (function (state_44461){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_44461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e44492){if((e44492 instanceof Object)){
var ex__36501__auto__ = e44492;
var statearr_44493_44517 = state_44461;
(statearr_44493_44517[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44518 = state_44461;
state_44461 = G__44518;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$camera$read_imgs_$_state_machine__36498__auto__ = function(state_44461){
switch(arguments.length){
case 0:
return huginn$camera$read_imgs_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$camera$read_imgs_$_state_machine__36498__auto____1.call(this,state_44461);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$camera$read_imgs_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$camera$read_imgs_$_state_machine__36498__auto____0;
huginn$camera$read_imgs_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$camera$read_imgs_$_state_machine__36498__auto____1;
return huginn$camera$read_imgs_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_44494 = f__36588__auto__.call(null);
(statearr_44494[(6)] = c__36587__auto__);

return statearr_44494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
});
huginn.camera.build_camera = (function huginn$camera$build_camera(var_args){
var G__44520 = arguments.length;
switch (G__44520) {
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

huginn.camera.build_camera.cljs$core$IFn$_invoke$arity$1 = (function (p__44521){
var map__44522 = p__44521;
var map__44522__$1 = ((((!((map__44522 == null)))?((((map__44522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44522):map__44522);
var opts = map__44522__$1;
var output_dir = cljs.core.get.call(null,map__44522__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991),"pics");
var tl = cljs.core.get.call(null,map__44522__$1,new cljs.core.Keyword(null,"tl","tl",-35265210),((60) * (1000)));
var mode = cljs.core.get.call(null,map__44522__$1,new cljs.core.Keyword(null,"mode","mode",654403691),"timelapse");
var encoding = cljs.core.get.call(null,map__44522__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272),"jpg");
return promesa.core.promise.call(null,((function (map__44522,map__44522__$1,opts,output_dir,tl,mode,encoding){
return (function (resolve,reject){
var snap_chan = cljs.core.async.chan.call(null);
var data_chan = cljs.core.async.chan.call(null);
var camera = (new huginn.camera.node$module$raspicam(({"output": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/%d_img.jpg"].join(''), "mode": mode, "encoding": encoding, "tl": tl})));
var output = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"raw-chan","raw-chan",-779682305),snap_chan,new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063),data_chan,new cljs.core.Keyword(null,"camera","camera",-1190348585),camera], null);
var handlers = huginn.camera.cam_handlers.call(null,((function (snap_chan,data_chan,camera,output,map__44522,map__44522__$1,opts,output_dir,tl,mode,encoding){
return (function (){
return resolve.call(null,output);
});})(snap_chan,data_chan,camera,output,map__44522,map__44522__$1,opts,output_dir,tl,mode,encoding))
,((function (snap_chan,data_chan,camera,output,map__44522,map__44522__$1,opts,output_dir,tl,mode,encoding){
return (function (){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs_node_io.core.delete_file,cljs_node_io.core.file_seq.call(null,output_dir)));
});})(snap_chan,data_chan,camera,output,map__44522,map__44522__$1,opts,output_dir,tl,mode,encoding))
,snap_chan);
huginn.camera.read_imgs.call(null,output_dir,snap_chan,data_chan);

huginn.camera.add_handlers.call(null,camera,handlers);

return camera.start();
});})(map__44522,map__44522__$1,opts,output_dir,tl,mode,encoding))
);
});

huginn.camera.build_camera.cljs$lang$maxFixedArity = 1;

huginn.camera.cleanup_camera = (function huginn$camera$cleanup_camera(p__44525){
var map__44526 = p__44525;
var map__44526__$1 = ((((!((map__44526 == null)))?((((map__44526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44526):map__44526);
var camera = cljs.core.get.call(null,map__44526__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var snap_chan = cljs.core.get.call(null,map__44526__$1,new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063));
camera.stop();

return cljs.core.async.close_BANG_.call(null,snap_chan);
});
huginn.camera._start_mix_camera = (function huginn$camera$_start_mix_camera(p__44528){
var map__44529 = p__44528;
var map__44529__$1 = ((((!((map__44529 == null)))?((((map__44529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44529):map__44529);
var system = map__44529__$1;
var state_chan = cljs.core.get.call(null,map__44529__$1,new cljs.core.Keyword(null,"state-chan","state-chan",-1042477017));
var camera_p = huginn.camera.build_camera.call(null);
var mixer = cljs.core.async.mix.call(null,state_chan);
return promesa.core.then.call(null,camera_p,((function (camera_p,mixer,map__44529,map__44529__$1,system,state_chan){
return (function (p__44531){
var map__44532 = p__44531;
var map__44532__$1 = ((((!((map__44532 == null)))?((((map__44532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44532):map__44532);
var snap_chan = cljs.core.get.call(null,map__44532__$1,new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063));
var camera = cljs.core.get.call(null,map__44532__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.camera","/tmp/form-init1252977175527440591.clj",110,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__44532,map__44532__$1,snap_chan,camera,camera_p,mixer,map__44529,map__44529__$1,system,state_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["connecting camera to mixer"], null);
});})(map__44532,map__44532__$1,snap_chan,camera,camera_p,mixer,map__44529,map__44529__$1,system,state_chan))
,null)),null,173325144);

cljs.core.async.admix.call(null,mixer,snap_chan);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,system,new cljs.core.Keyword(null,"camera","camera",-1190348585),camera),new cljs.core.Keyword(null,"mixer","mixer",-120313315),mixer),new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063),snap_chan)], null);
});})(camera_p,mixer,map__44529,map__44529__$1,system,state_chan))
);
});
huginn.camera.start_mix_camera = (function huginn$camera$start_mix_camera(system_promise){
return promesa.core.then.call(null,system_promise,huginn.camera._start_mix_camera);
});

//# sourceMappingURL=camera.js.map
