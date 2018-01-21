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
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.camera","/tmp/form-init1252977175527440591.clj",16,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["camera connected"], null);
}),null)),null,-513156780);

return success_fn.call(null);
}),"stop",(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init1252977175527440591.clj",18,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["camera stopping"], null);
}),null)),null,950240346);

return stop_fn.call(null);
}),"exit",(function (err){
restart_fn.call(null);

return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.camera","/tmp/form-init1252977175527440591.clj",20,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exit: ",err], null);
}),null)),null,-157929652);
}),"read",(function (err,timestamp,filename){
try{var result__44205__auto___48644 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [err,timestamp,filename], null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init1252977175527440591.clj",22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__44205__auto___48644){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"timestamp","timestamp",-2074956798,null),new cljs.core.Symbol(null,"filename","filename",211690744,null)], null),"=>",result__44205__auto___48644], null);
});})(result__44205__auto___48644))
,null)),null,906707213);

}catch (e48631){if((e48631 instanceof Error)){
var e__44167__auto___48645 = e48631;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.camera","/tmp/form-init1252977175527440591.clj",22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__44167__auto___48645){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__44167__auto___48645], null);
});})(e__44167__auto___48645))
,null)),null,484958919);

throw e__44167__auto___48645;
} else {
throw e48631;

}
}
var c__36587__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto__){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto__){
return (function (state_48638){
var state_val_48639 = (state_48638[(1)]);
if((state_val_48639 === (1))){
var inst_48632 = [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"filename","filename",-1428840783)];
var inst_48633 = [err,timestamp,filename];
var inst_48634 = cljs.core.PersistentHashMap.fromArrays(inst_48632,inst_48633);
var state_48638__$1 = state_48638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48638__$1,(2),read_chan,inst_48634);
} else {
if((state_val_48639 === (2))){
var inst_48636 = (state_48638[(2)]);
var state_48638__$1 = state_48638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48638__$1,inst_48636);
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
var statearr_48640 = [null,null,null,null,null,null,null];
(statearr_48640[(0)] = huginn$camera$cam_handlers_$_state_machine__36498__auto__);

(statearr_48640[(1)] = (1));

return statearr_48640;
});
var huginn$camera$cam_handlers_$_state_machine__36498__auto____1 = (function (state_48638){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_48638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e48641){if((e48641 instanceof Object)){
var ex__36501__auto__ = e48641;
var statearr_48642_48646 = state_48638;
(statearr_48642_48646[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48647 = state_48638;
state_48638 = G__48647;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$camera$cam_handlers_$_state_machine__36498__auto__ = function(state_48638){
switch(arguments.length){
case 0:
return huginn$camera$cam_handlers_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$camera$cam_handlers_$_state_machine__36498__auto____1.call(this,state_48638);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$camera$cam_handlers_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$camera$cam_handlers_$_state_machine__36498__auto____0;
huginn$camera$cam_handlers_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$camera$cam_handlers_$_state_machine__36498__auto____1;
return huginn$camera$cam_handlers_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_48643 = f__36588__auto__.call(null);
(statearr_48643[(6)] = c__36587__auto__);

return statearr_48643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
})], null);
});
huginn.camera.add_handlers = (function huginn$camera$add_handlers(camera,handlers){
var seq__48648 = cljs.core.seq.call(null,handlers);
var chunk__48649 = null;
var count__48650 = (0);
var i__48651 = (0);
while(true){
if((i__48651 < count__48650)){
var vec__48652 = cljs.core._nth.call(null,chunk__48649,i__48651);
var key = cljs.core.nth.call(null,vec__48652,(0),null);
var hand = cljs.core.nth.call(null,vec__48652,(1),null);
camera.on(key,hand);

var G__48658 = seq__48648;
var G__48659 = chunk__48649;
var G__48660 = count__48650;
var G__48661 = (i__48651 + (1));
seq__48648 = G__48658;
chunk__48649 = G__48659;
count__48650 = G__48660;
i__48651 = G__48661;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__48648);
if(temp__5457__auto__){
var seq__48648__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48648__$1)){
var c__31803__auto__ = cljs.core.chunk_first.call(null,seq__48648__$1);
var G__48662 = cljs.core.chunk_rest.call(null,seq__48648__$1);
var G__48663 = c__31803__auto__;
var G__48664 = cljs.core.count.call(null,c__31803__auto__);
var G__48665 = (0);
seq__48648 = G__48662;
chunk__48649 = G__48663;
count__48650 = G__48664;
i__48651 = G__48665;
continue;
} else {
var vec__48655 = cljs.core.first.call(null,seq__48648__$1);
var key = cljs.core.nth.call(null,vec__48655,(0),null);
var hand = cljs.core.nth.call(null,vec__48655,(1),null);
camera.on(key,hand);

var G__48666 = cljs.core.next.call(null,seq__48648__$1);
var G__48667 = null;
var G__48668 = (0);
var G__48669 = (0);
seq__48648 = G__48666;
chunk__48649 = G__48667;
count__48650 = G__48668;
i__48651 = G__48669;
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
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__31754__auto__ = (function huginn$camera$chunk_img_$_iter__48670(s__48671){
return (new cljs.core.LazySeq(null,(function (){
var s__48671__$1 = s__48671;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__48671__$1);
if(temp__5457__auto__){
var s__48671__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48671__$2)){
var c__31752__auto__ = cljs.core.chunk_first.call(null,s__48671__$2);
var size__31753__auto__ = cljs.core.count.call(null,c__31752__auto__);
var b__48673 = cljs.core.chunk_buffer.call(null,size__31753__auto__);
if((function (){var i__48672 = (0);
while(true){
if((i__48672 < size__31753__auto__)){
var start = cljs.core._nth.call(null,c__31752__auto__,i__48672);
var end = (function (){var x__31231__auto__ = img.length;
var y__31232__auto__ = (start + chunk_size);
return ((x__31231__auto__ < y__31232__auto__) ? x__31231__auto__ : y__31232__auto__);
})();
cljs.core.chunk_append.call(null,b__48673,(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init1252977175527440591.clj",44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (i__48672,end,start,c__31752__auto__,size__31753__auto__,b__48673,s__48671__$2,temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["at ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null)], null);
});})(i__48672,end,start,c__31752__auto__,size__31753__auto__,b__48673,s__48671__$2,temp__5457__auto__))
,null)),null,823025154);

return (new Buffer(cljs.core.into_array.call(null,cljs.core.array_chunk.call(null,img,start,end))));
})()
);

var G__48674 = (i__48672 + (1));
i__48672 = G__48674;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48673),huginn$camera$chunk_img_$_iter__48670.call(null,cljs.core.chunk_rest.call(null,s__48671__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48673),null);
}
} else {
var start = cljs.core.first.call(null,s__48671__$2);
var end = (function (){var x__31231__auto__ = img.length;
var y__31232__auto__ = (start + chunk_size);
return ((x__31231__auto__ < y__31232__auto__) ? x__31231__auto__ : y__31232__auto__);
})();
return cljs.core.cons.call(null,(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init1252977175527440591.clj",44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (end,start,s__48671__$2,temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["at ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null)], null);
});})(end,start,s__48671__$2,temp__5457__auto__))
,null)),null,1302691853);

return (new Buffer(cljs.core.into_array.call(null,cljs.core.array_chunk.call(null,img,start,end))));
})()
,huginn$camera$chunk_img_$_iter__48670.call(null,cljs.core.rest.call(null,s__48671__$2)));
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
return (function (state_48756){
var state_val_48757 = (state_48756[(1)]);
if((state_val_48757 === (7))){
var inst_48695 = (state_48756[(2)]);
var state_48756__$1 = state_48756;
if(cljs.core.truth_(inst_48695)){
var statearr_48758_48790 = state_48756__$1;
(statearr_48758_48790[(1)] = (11));

} else {
var statearr_48759_48791 = state_48756__$1;
(statearr_48759_48791[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48757 === (20))){
var inst_48752 = (state_48756[(2)]);
var state_48756__$1 = state_48756;
var statearr_48760_48792 = state_48756__$1;
(statearr_48760_48792[(2)] = inst_48752);

(statearr_48760_48792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48757 === (1))){
var state_48756__$1 = state_48756;
var statearr_48761_48793 = state_48756__$1;
(statearr_48761_48793[(2)] = null);

(statearr_48761_48793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48757 === (4))){
var inst_48679 = (state_48756[(7)]);
var inst_48679__$1 = (state_48756[(2)]);
var inst_48681 = (inst_48679__$1 == null);
var inst_48682 = cljs.core.not.call(null,inst_48681);
var state_48756__$1 = (function (){var statearr_48762 = state_48756;
(statearr_48762[(7)] = inst_48679__$1);

return statearr_48762;
})();
if(inst_48682){
var statearr_48763_48794 = state_48756__$1;
(statearr_48763_48794[(1)] = (5));

} else {
var statearr_48764_48795 = state_48756__$1;
(statearr_48764_48795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48757 === (15))){
var inst_48717 = (state_48756[(8)]);
var state_48756__$1 = state_48756;
var statearr_48765_48796 = state_48756__$1;
(statearr_48765_48796[(2)] = inst_48717);

(statearr_48765_48796[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48757 === (21))){
var inst_48730 = (state_48756[(9)]);
var inst_48716 = (state_48756[(10)]);
var inst_48735 = (state_48756[(11)]);
var inst_48737 = (state_48756[(12)]);
var inst_48700 = (state_48756[(13)]);
var inst_48741 = (state_48756[(14)]);
var inst_48703 = (state_48756[(15)]);
var inst_48718 = (state_48756[(16)]);
var inst_48702 = (state_48756[(17)]);
var inst_48717 = (state_48756[(8)]);
var inst_48746 = (state_48756[(2)]);
var inst_48747 = (function (){var complete = inst_48741;
var timestamp = inst_48702;
var map__48677 = inst_48700;
var img_buffers = inst_48730;
var img_data = inst_48718;
var err = inst_48717;
var vec__48707 = inst_48716;
var img_packets = inst_48737;
var header = inst_48735;
var filename = inst_48703;
var img_res = inst_48700;
return ((function (complete,timestamp,map__48677,img_buffers,img_data,err,vec__48707,img_packets,header,filename,img_res,inst_48730,inst_48716,inst_48735,inst_48737,inst_48700,inst_48741,inst_48703,inst_48718,inst_48702,inst_48717,inst_48746,state_val_48757,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["done xforming"], null);
});
;})(complete,timestamp,map__48677,img_buffers,img_data,err,vec__48707,img_packets,header,filename,img_res,inst_48730,inst_48716,inst_48735,inst_48737,inst_48700,inst_48741,inst_48703,inst_48718,inst_48702,inst_48717,inst_48746,state_val_48757,c__36587__auto__))
})();
var inst_48748 = (new cljs.core.Delay(inst_48747,null));
var inst_48749 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init1252977175527440591.clj",63,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_48748,null,1882575261);
var state_48756__$1 = (function (){var statearr_48766 = state_48756;
(statearr_48766[(18)] = inst_48746);

(statearr_48766[(19)] = inst_48749);

return statearr_48766;
})();
var statearr_48767_48797 = state_48756__$1;
(statearr_48767_48797[(2)] = null);

(statearr_48767_48797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48757 === (13))){
var inst_48700 = (state_48756[(13)]);
var inst_48703 = (state_48756[(15)]);
var inst_48702 = (state_48756[(17)]);
var inst_48700__$1 = (state_48756[(2)]);
var inst_48701 = cljs.core.get.call(null,inst_48700__$1,new cljs.core.Keyword(null,"err","err",-2089457205));
var inst_48702__$1 = cljs.core.get.call(null,inst_48700__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var inst_48703__$1 = cljs.core.get.call(null,inst_48700__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var inst_48704 = (function (){var map__48677 = inst_48700__$1;
var img_res = inst_48700__$1;
var err = inst_48701;
var timestamp = inst_48702__$1;
var filename = inst_48703__$1;
return ((function (map__48677,img_res,err,timestamp,filename,inst_48700,inst_48703,inst_48702,inst_48700__$1,inst_48701,inst_48702__$1,inst_48703__$1,state_val_48757,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["xforming image ",filename], null);
});
;})(map__48677,img_res,err,timestamp,filename,inst_48700,inst_48703,inst_48702,inst_48700__$1,inst_48701,inst_48702__$1,inst_48703__$1,state_val_48757,c__36587__auto__))
})();
var inst_48705 = (new cljs.core.Delay(inst_48704,null));
var inst_48706 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init1252977175527440591.clj",52,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_48705,null,-1205855603);
var inst_48710 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48703__$1)].join('');
var inst_48711 = [new cljs.core.Keyword(null,"encoding","encoding",1728578272)];
var inst_48712 = [""];
var inst_48713 = cljs.core.PersistentHashMap.fromArrays(inst_48711,inst_48712);
var inst_48714 = cljs_node_io.core.aslurp.call(null,inst_48710,inst_48713);
var state_48756__$1 = (function (){var statearr_48768 = state_48756;
(statearr_48768[(13)] = inst_48700__$1);

(statearr_48768[(20)] = inst_48706);

(statearr_48768[(15)] = inst_48703__$1);

(statearr_48768[(17)] = inst_48702__$1);

return statearr_48768;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48756__$1,(14),inst_48714);
} else {
if((state_val_48757 === (6))){
var state_48756__$1 = state_48756;
var statearr_48769_48798 = state_48756__$1;
(statearr_48769_48798[(2)] = false);

(statearr_48769_48798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48757 === (17))){
var inst_48723 = (state_48756[(2)]);
var state_48756__$1 = state_48756;
if(cljs.core.truth_(inst_48723)){
var statearr_48770_48799 = state_48756__$1;
(statearr_48770_48799[(1)] = (18));

} else {
var statearr_48771_48800 = state_48756__$1;
(statearr_48771_48800[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48757 === (3))){
var inst_48754 = (state_48756[(2)]);
var state_48756__$1 = state_48756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48756__$1,inst_48754);
} else {
if((state_val_48757 === (12))){
var inst_48679 = (state_48756[(7)]);
var state_48756__$1 = state_48756;
var statearr_48772_48801 = state_48756__$1;
(statearr_48772_48801[(2)] = inst_48679);

(statearr_48772_48801[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48757 === (2))){
var state_48756__$1 = state_48756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48756__$1,(4),in$);
} else {
if((state_val_48757 === (19))){
var inst_48730 = (state_48756[(9)]);
var inst_48716 = (state_48756[(10)]);
var inst_48735 = (state_48756[(11)]);
var inst_48737 = (state_48756[(12)]);
var inst_48700 = (state_48756[(13)]);
var inst_48741 = (state_48756[(14)]);
var inst_48703 = (state_48756[(15)]);
var inst_48718 = (state_48756[(16)]);
var inst_48702 = (state_48756[(17)]);
var inst_48717 = (state_48756[(8)]);
var inst_48730__$1 = huginn.camera.chunk_img.call(null,inst_48718,(100000));
var inst_48731 = [new cljs.core.Keyword(null,"payload","payload",-383036092)];
var inst_48732 = cljs.core.count.call(null,inst_48730__$1);
var inst_48733 = ["split_image/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48732)].join('');
var inst_48734 = [inst_48733];
var inst_48735__$1 = cljs.core.PersistentHashMap.fromArrays(inst_48731,inst_48734);
var inst_48736 = (function (){var map__48677 = inst_48700;
var img_res = inst_48700;
var err = inst_48717;
var timestamp = inst_48702;
var filename = inst_48703;
var vec__48707 = inst_48716;
var img_data = inst_48718;
var img_buffers = inst_48730__$1;
var header = inst_48735__$1;
return ((function (map__48677,img_res,err,timestamp,filename,vec__48707,img_data,img_buffers,header,inst_48730,inst_48716,inst_48735,inst_48737,inst_48700,inst_48741,inst_48703,inst_48718,inst_48702,inst_48717,inst_48730__$1,inst_48731,inst_48732,inst_48733,inst_48734,inst_48735__$1,state_val_48757,c__36587__auto__){
return (function (p1__48675_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)],[p1__48675_SHARP_,timestamp]);
});
;})(map__48677,img_res,err,timestamp,filename,vec__48707,img_data,img_buffers,header,inst_48730,inst_48716,inst_48735,inst_48737,inst_48700,inst_48741,inst_48703,inst_48718,inst_48702,inst_48717,inst_48730__$1,inst_48731,inst_48732,inst_48733,inst_48734,inst_48735__$1,state_val_48757,c__36587__auto__))
})();
var inst_48737__$1 = cljs.core.map.call(null,inst_48736,inst_48730__$1);
var inst_48738 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48739 = [inst_48735__$1];
var inst_48740 = (new cljs.core.PersistentVector(null,1,(5),inst_48738,inst_48739,null));
var inst_48741__$1 = cljs.core.concat.call(null,inst_48740,inst_48737__$1);
var inst_48742 = (function (){var complete = inst_48741__$1;
var timestamp = inst_48702;
var map__48677 = inst_48700;
var img_buffers = inst_48730__$1;
var img_data = inst_48718;
var err = inst_48717;
var vec__48707 = inst_48716;
var img_packets = inst_48737__$1;
var header = inst_48735__$1;
var filename = inst_48703;
var img_res = inst_48700;
return ((function (complete,timestamp,map__48677,img_buffers,img_data,err,vec__48707,img_packets,header,filename,img_res,inst_48730,inst_48716,inst_48735,inst_48737,inst_48700,inst_48741,inst_48703,inst_48718,inst_48702,inst_48717,inst_48730__$1,inst_48731,inst_48732,inst_48733,inst_48734,inst_48735__$1,inst_48736,inst_48737__$1,inst_48738,inst_48739,inst_48740,inst_48741__$1,state_val_48757,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["trying to write img packet"], null);
});
;})(complete,timestamp,map__48677,img_buffers,img_data,err,vec__48707,img_packets,header,filename,img_res,inst_48730,inst_48716,inst_48735,inst_48737,inst_48700,inst_48741,inst_48703,inst_48718,inst_48702,inst_48717,inst_48730__$1,inst_48731,inst_48732,inst_48733,inst_48734,inst_48735__$1,inst_48736,inst_48737__$1,inst_48738,inst_48739,inst_48740,inst_48741__$1,state_val_48757,c__36587__auto__))
})();
var inst_48743 = (new cljs.core.Delay(inst_48742,null));
var inst_48744 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init1252977175527440591.clj",61,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_48743,null,-1501952015);
var state_48756__$1 = (function (){var statearr_48773 = state_48756;
(statearr_48773[(9)] = inst_48730__$1);

(statearr_48773[(11)] = inst_48735__$1);

(statearr_48773[(12)] = inst_48737__$1);

(statearr_48773[(14)] = inst_48741__$1);

(statearr_48773[(21)] = inst_48744);

return statearr_48773;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48756__$1,(21),out,inst_48741__$1);
} else {
if((state_val_48757 === (11))){
var inst_48679 = (state_48756[(7)]);
var inst_48697 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48679);
var state_48756__$1 = state_48756;
var statearr_48774_48802 = state_48756__$1;
(statearr_48774_48802[(2)] = inst_48697);

(statearr_48774_48802[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48757 === (9))){
var state_48756__$1 = state_48756;
var statearr_48775_48803 = state_48756__$1;
(statearr_48775_48803[(2)] = false);

(statearr_48775_48803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48757 === (5))){
var inst_48679 = (state_48756[(7)]);
var inst_48684 = inst_48679.cljs$lang$protocol_mask$partition0$;
var inst_48685 = (inst_48684 & (64));
var inst_48686 = inst_48679.cljs$core$ISeq$;
var inst_48687 = (cljs.core.PROTOCOL_SENTINEL === inst_48686);
var inst_48688 = (inst_48685) || (inst_48687);
var state_48756__$1 = state_48756;
if(cljs.core.truth_(inst_48688)){
var statearr_48776_48804 = state_48756__$1;
(statearr_48776_48804[(1)] = (8));

} else {
var statearr_48777_48805 = state_48756__$1;
(statearr_48777_48805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48757 === (14))){
var inst_48716 = (state_48756[(10)]);
var inst_48717 = (state_48756[(8)]);
var inst_48716__$1 = (state_48756[(2)]);
var inst_48717__$1 = cljs.core.nth.call(null,inst_48716__$1,(0),null);
var inst_48718 = cljs.core.nth.call(null,inst_48716__$1,(1),null);
var state_48756__$1 = (function (){var statearr_48778 = state_48756;
(statearr_48778[(10)] = inst_48716__$1);

(statearr_48778[(16)] = inst_48718);

(statearr_48778[(8)] = inst_48717__$1);

return statearr_48778;
})();
if(cljs.core.truth_(inst_48717__$1)){
var statearr_48779_48806 = state_48756__$1;
(statearr_48779_48806[(1)] = (15));

} else {
var statearr_48780_48807 = state_48756__$1;
(statearr_48780_48807[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48757 === (16))){
var inst_48703 = (state_48756[(15)]);
var inst_48721 = cljs.core._EQ_.call(null,inst_48703,"");
var state_48756__$1 = state_48756;
var statearr_48781_48808 = state_48756__$1;
(statearr_48781_48808[(2)] = inst_48721);

(statearr_48781_48808[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48757 === (10))){
var inst_48692 = (state_48756[(2)]);
var state_48756__$1 = state_48756;
var statearr_48782_48809 = state_48756__$1;
(statearr_48782_48809[(2)] = inst_48692);

(statearr_48782_48809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48757 === (18))){
var inst_48716 = (state_48756[(10)]);
var inst_48700 = (state_48756[(13)]);
var inst_48703 = (state_48756[(15)]);
var inst_48718 = (state_48756[(16)]);
var inst_48702 = (state_48756[(17)]);
var inst_48717 = (state_48756[(8)]);
var inst_48725 = (function (){var map__48677 = inst_48700;
var img_res = inst_48700;
var err = inst_48717;
var timestamp = inst_48702;
var filename = inst_48703;
var vec__48707 = inst_48716;
var img_data = inst_48718;
return ((function (map__48677,img_res,err,timestamp,filename,vec__48707,img_data,inst_48716,inst_48700,inst_48703,inst_48718,inst_48702,inst_48717,state_val_48757,c__36587__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error reading image:",err," ",filename], null);
});
;})(map__48677,img_res,err,timestamp,filename,vec__48707,img_data,inst_48716,inst_48700,inst_48703,inst_48718,inst_48702,inst_48717,state_val_48757,c__36587__auto__))
})();
var inst_48726 = (new cljs.core.Delay(inst_48725,null));
var inst_48727 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.camera","/tmp/form-init1252977175527440591.clj",55,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_48726,null,1799484928);
var state_48756__$1 = (function (){var statearr_48783 = state_48756;
(statearr_48783[(22)] = inst_48727);

return statearr_48783;
})();
var statearr_48784_48810 = state_48756__$1;
(statearr_48784_48810[(2)] = null);

(statearr_48784_48810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48757 === (8))){
var state_48756__$1 = state_48756;
var statearr_48785_48811 = state_48756__$1;
(statearr_48785_48811[(2)] = true);

(statearr_48785_48811[(1)] = (10));


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
var statearr_48786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48786[(0)] = huginn$camera$read_imgs_$_state_machine__36498__auto__);

(statearr_48786[(1)] = (1));

return statearr_48786;
});
var huginn$camera$read_imgs_$_state_machine__36498__auto____1 = (function (state_48756){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_48756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e48787){if((e48787 instanceof Object)){
var ex__36501__auto__ = e48787;
var statearr_48788_48812 = state_48756;
(statearr_48788_48812[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48813 = state_48756;
state_48756 = G__48813;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
huginn$camera$read_imgs_$_state_machine__36498__auto__ = function(state_48756){
switch(arguments.length){
case 0:
return huginn$camera$read_imgs_$_state_machine__36498__auto____0.call(this);
case 1:
return huginn$camera$read_imgs_$_state_machine__36498__auto____1.call(this,state_48756);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$camera$read_imgs_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$camera$read_imgs_$_state_machine__36498__auto____0;
huginn$camera$read_imgs_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$camera$read_imgs_$_state_machine__36498__auto____1;
return huginn$camera$read_imgs_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto__))
})();
var state__36589__auto__ = (function (){var statearr_48789 = f__36588__auto__.call(null);
(statearr_48789[(6)] = c__36587__auto__);

return statearr_48789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto__))
);

return c__36587__auto__;
});
huginn.camera.build_camera = (function huginn$camera$build_camera(var_args){
var G__48815 = arguments.length;
switch (G__48815) {
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

huginn.camera.build_camera.cljs$core$IFn$_invoke$arity$1 = (function (p__48816){
var map__48817 = p__48816;
var map__48817__$1 = ((((!((map__48817 == null)))?((((map__48817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48817):map__48817);
var opts = map__48817__$1;
var output_dir = cljs.core.get.call(null,map__48817__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991),"pics");
var tl = cljs.core.get.call(null,map__48817__$1,new cljs.core.Keyword(null,"tl","tl",-35265210),(((60) * (1000)) * (10)));
var mode = cljs.core.get.call(null,map__48817__$1,new cljs.core.Keyword(null,"mode","mode",654403691),"timelapse");
var encoding = cljs.core.get.call(null,map__48817__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272),"jpg");
return promesa.core.promise.call(null,((function (map__48817,map__48817__$1,opts,output_dir,tl,mode,encoding){
return (function (resolve,reject){
var snap_chan = cljs.core.async.chan.call(null);
var data_chan = cljs.core.async.chan.call(null);
var camera = (new huginn.camera.node$module$raspicam(({"output": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/%04d_img.jpg"].join(''), "mode": mode, "encoding": encoding, "tl": tl})));
var output = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"raw-chan","raw-chan",-779682305),snap_chan,new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063),data_chan,new cljs.core.Keyword(null,"camera","camera",-1190348585),camera], null);
var handlers = huginn.camera.cam_handlers.call(null,((function (snap_chan,data_chan,camera,output,map__48817,map__48817__$1,opts,output_dir,tl,mode,encoding){
return (function (){
return resolve.call(null,output);
});})(snap_chan,data_chan,camera,output,map__48817,map__48817__$1,opts,output_dir,tl,mode,encoding))
,((function (snap_chan,data_chan,camera,output,map__48817,map__48817__$1,opts,output_dir,tl,mode,encoding){
return (function (){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs_node_io.core.delete_file,cljs_node_io.core.file_seq.call(null,output_dir)));
});})(snap_chan,data_chan,camera,output,map__48817,map__48817__$1,opts,output_dir,tl,mode,encoding))
,((function (snap_chan,data_chan,camera,output,map__48817,map__48817__$1,opts,output_dir,tl,mode,encoding){
return (function (){
return camera.start();
});})(snap_chan,data_chan,camera,output,map__48817,map__48817__$1,opts,output_dir,tl,mode,encoding))
,snap_chan);
huginn.camera.read_imgs.call(null,output_dir,snap_chan,data_chan);

huginn.camera.add_handlers.call(null,camera,handlers);

return camera.start();
});})(map__48817,map__48817__$1,opts,output_dir,tl,mode,encoding))
);
});

huginn.camera.build_camera.cljs$lang$maxFixedArity = 1;

huginn.camera.cleanup_camera = (function huginn$camera$cleanup_camera(p__48820){
var map__48821 = p__48820;
var map__48821__$1 = ((((!((map__48821 == null)))?((((map__48821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48821):map__48821);
var system = map__48821__$1;
var camera = cljs.core.get.call(null,map__48821__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var snap_chan = cljs.core.get.call(null,map__48821__$1,new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063));
camera.stop();

cljs.core.async.close_BANG_.call(null,snap_chan);

return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,system,new cljs.core.Keyword(null,"camera","camera",-1190348585)),new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063));
});
huginn.camera._start_mix_camera = (function huginn$camera$_start_mix_camera(p__48823){
var map__48824 = p__48823;
var map__48824__$1 = ((((!((map__48824 == null)))?((((map__48824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48824):map__48824);
var system = map__48824__$1;
var telemetry_chan = cljs.core.get.call(null,map__48824__$1,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503));
var camera_p = huginn.camera.build_camera.call(null);
var mixer = cljs.core.async.mix.call(null,telemetry_chan);
return promesa.core.then.call(null,camera_p,((function (camera_p,mixer,map__48824,map__48824__$1,system,telemetry_chan){
return (function (p__48826){
var map__48827 = p__48826;
var map__48827__$1 = ((((!((map__48827 == null)))?((((map__48827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48827):map__48827);
var snap_chan = cljs.core.get.call(null,map__48827__$1,new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063));
var camera = cljs.core.get.call(null,map__48827__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.camera","/tmp/form-init1252977175527440591.clj",114,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__48827,map__48827__$1,snap_chan,camera,camera_p,mixer,map__48824,map__48824__$1,system,telemetry_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["connecting camera to mixer"], null);
});})(map__48827,map__48827__$1,snap_chan,camera,camera_p,mixer,map__48824,map__48824__$1,system,telemetry_chan))
,null)),null,462929004);

cljs.core.async.admix.call(null,mixer,snap_chan);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,system,new cljs.core.Keyword(null,"camera","camera",-1190348585),camera),new cljs.core.Keyword(null,"mixer","mixer",-120313315),mixer),new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063),snap_chan)], null);
});})(camera_p,mixer,map__48824,map__48824__$1,system,telemetry_chan))
);
});
huginn.camera.start_mix_camera = (function huginn$camera$start_mix_camera(system_promise){
return promesa.core.then.call(null,system_promise,huginn.camera._start_mix_camera);
});

//# sourceMappingURL=camera.js.map
