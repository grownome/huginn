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
}),null)),null,451124845);

return success_fn.call(null);
}),"stop",(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init3351303088126891041.clj",18,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["camera stopping"], null);
}),null)),null,853012636);

return stop_fn.call(null);
}),"exit",(function (err){
restart_fn.call(null);

return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.camera","/tmp/form-init3351303088126891041.clj",20,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exit: ",err], null);
}),null)),null,-1743400689);
}),"read",(function (err,timestamp,filename){
try{var result__32849__auto___39783 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [err,timestamp,filename], null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init3351303088126891041.clj",22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (result__32849__auto___39783){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"err","err",-448925678,null),new cljs.core.Symbol(null,"timestamp","timestamp",-2074956798,null),new cljs.core.Symbol(null,"filename","filename",211690744,null)], null),"=>",result__32849__auto___39783], null);
});})(result__32849__auto___39783))
,null)),null,1902402462);

}catch (e39770){if((e39770 instanceof Error)){
var e__32811__auto___39784 = e39770;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.camera","/tmp/form-init3351303088126891041.clj",22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e__32811__auto___39784){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__32811__auto___39784], null);
});})(e__32811__auto___39784))
,null)),null,-1952364836);

throw e__32811__auto___39784;
} else {
throw e39770;

}
}
var c__17681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto__){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto__){
return (function (state_39777){
var state_val_39778 = (state_39777[(1)]);
if((state_val_39778 === (1))){
var inst_39771 = [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"filename","filename",-1428840783)];
var inst_39772 = [err,timestamp,filename];
var inst_39773 = cljs.core.PersistentHashMap.fromArrays(inst_39771,inst_39772);
var state_39777__$1 = state_39777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39777__$1,(2),read_chan,inst_39773);
} else {
if((state_val_39778 === (2))){
var inst_39775 = (state_39777[(2)]);
var state_39777__$1 = state_39777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39777__$1,inst_39775);
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
var statearr_39779 = [null,null,null,null,null,null,null];
(statearr_39779[(0)] = huginn$camera$cam_handlers_$_state_machine__17592__auto__);

(statearr_39779[(1)] = (1));

return statearr_39779;
});
var huginn$camera$cam_handlers_$_state_machine__17592__auto____1 = (function (state_39777){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_39777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e39780){if((e39780 instanceof Object)){
var ex__17595__auto__ = e39780;
var statearr_39781_39785 = state_39777;
(statearr_39781_39785[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39786 = state_39777;
state_39777 = G__39786;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
huginn$camera$cam_handlers_$_state_machine__17592__auto__ = function(state_39777){
switch(arguments.length){
case 0:
return huginn$camera$cam_handlers_$_state_machine__17592__auto____0.call(this);
case 1:
return huginn$camera$cam_handlers_$_state_machine__17592__auto____1.call(this,state_39777);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$camera$cam_handlers_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$camera$cam_handlers_$_state_machine__17592__auto____0;
huginn$camera$cam_handlers_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$camera$cam_handlers_$_state_machine__17592__auto____1;
return huginn$camera$cam_handlers_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__))
})();
var state__17683__auto__ = (function (){var statearr_39782 = f__17682__auto__.call(null);
(statearr_39782[(6)] = c__17681__auto__);

return statearr_39782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto__))
);

return c__17681__auto__;
})], null);
});
huginn.camera.add_handlers = (function huginn$camera$add_handlers(camera,handlers){
var seq__39787 = cljs.core.seq.call(null,handlers);
var chunk__39788 = null;
var count__39789 = (0);
var i__39790 = (0);
while(true){
if((i__39790 < count__39789)){
var vec__39791 = cljs.core._nth.call(null,chunk__39788,i__39790);
var key = cljs.core.nth.call(null,vec__39791,(0),null);
var hand = cljs.core.nth.call(null,vec__39791,(1),null);
camera.on(key,hand);

var G__39797 = seq__39787;
var G__39798 = chunk__39788;
var G__39799 = count__39789;
var G__39800 = (i__39790 + (1));
seq__39787 = G__39797;
chunk__39788 = G__39798;
count__39789 = G__39799;
i__39790 = G__39800;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__39787);
if(temp__5457__auto__){
var seq__39787__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39787__$1)){
var c__9857__auto__ = cljs.core.chunk_first.call(null,seq__39787__$1);
var G__39801 = cljs.core.chunk_rest.call(null,seq__39787__$1);
var G__39802 = c__9857__auto__;
var G__39803 = cljs.core.count.call(null,c__9857__auto__);
var G__39804 = (0);
seq__39787 = G__39801;
chunk__39788 = G__39802;
count__39789 = G__39803;
i__39790 = G__39804;
continue;
} else {
var vec__39794 = cljs.core.first.call(null,seq__39787__$1);
var key = cljs.core.nth.call(null,vec__39794,(0),null);
var hand = cljs.core.nth.call(null,vec__39794,(1),null);
camera.on(key,hand);

var G__39805 = cljs.core.next.call(null,seq__39787__$1);
var G__39806 = null;
var G__39807 = (0);
var G__39808 = (0);
seq__39787 = G__39805;
chunk__39788 = G__39806;
count__39789 = G__39807;
i__39790 = G__39808;
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
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__9808__auto__ = (function huginn$camera$chunk_img_$_iter__39809(s__39810){
return (new cljs.core.LazySeq(null,(function (){
var s__39810__$1 = s__39810;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__39810__$1);
if(temp__5457__auto__){
var s__39810__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39810__$2)){
var c__9806__auto__ = cljs.core.chunk_first.call(null,s__39810__$2);
var size__9807__auto__ = cljs.core.count.call(null,c__9806__auto__);
var b__39812 = cljs.core.chunk_buffer.call(null,size__9807__auto__);
if((function (){var i__39811 = (0);
while(true){
if((i__39811 < size__9807__auto__)){
var start = cljs.core._nth.call(null,c__9806__auto__,i__39811);
var end = (function (){var x__9285__auto__ = img.length;
var y__9286__auto__ = (start + chunk_size);
return ((x__9285__auto__ < y__9286__auto__) ? x__9285__auto__ : y__9286__auto__);
})();
cljs.core.chunk_append.call(null,b__39812,(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init3351303088126891041.clj",44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (i__39811,end,start,c__9806__auto__,size__9807__auto__,b__39812,s__39810__$2,temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["at ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null)], null);
});})(i__39811,end,start,c__9806__auto__,size__9807__auto__,b__39812,s__39810__$2,temp__5457__auto__))
,null)),null,1368097012);

return (new Buffer(cljs.core.into_array.call(null,cljs.core.array_chunk.call(null,img,start,end))));
})()
);

var G__39813 = (i__39811 + (1));
i__39811 = G__39813;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39812),huginn$camera$chunk_img_$_iter__39809.call(null,cljs.core.chunk_rest.call(null,s__39810__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39812),null);
}
} else {
var start = cljs.core.first.call(null,s__39810__$2);
var end = (function (){var x__9285__auto__ = img.length;
var y__9286__auto__ = (start + chunk_size);
return ((x__9285__auto__ < y__9286__auto__) ? x__9285__auto__ : y__9286__auto__);
})();
return cljs.core.cons.call(null,(function (){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init3351303088126891041.clj",44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (end,start,s__39810__$2,temp__5457__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["at ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null)], null);
});})(end,start,s__39810__$2,temp__5457__auto__))
,null)),null,1128885912);

return (new Buffer(cljs.core.into_array.call(null,cljs.core.array_chunk.call(null,img,start,end))));
})()
,huginn$camera$chunk_img_$_iter__39809.call(null,cljs.core.rest.call(null,s__39810__$2)));
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
return (function (state_39895){
var state_val_39896 = (state_39895[(1)]);
if((state_val_39896 === (7))){
var inst_39834 = (state_39895[(2)]);
var state_39895__$1 = state_39895;
if(cljs.core.truth_(inst_39834)){
var statearr_39897_39929 = state_39895__$1;
(statearr_39897_39929[(1)] = (11));

} else {
var statearr_39898_39930 = state_39895__$1;
(statearr_39898_39930[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39896 === (20))){
var inst_39891 = (state_39895[(2)]);
var state_39895__$1 = state_39895;
var statearr_39899_39931 = state_39895__$1;
(statearr_39899_39931[(2)] = inst_39891);

(statearr_39899_39931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39896 === (1))){
var state_39895__$1 = state_39895;
var statearr_39900_39932 = state_39895__$1;
(statearr_39900_39932[(2)] = null);

(statearr_39900_39932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39896 === (4))){
var inst_39818 = (state_39895[(7)]);
var inst_39818__$1 = (state_39895[(2)]);
var inst_39820 = (inst_39818__$1 == null);
var inst_39821 = cljs.core.not.call(null,inst_39820);
var state_39895__$1 = (function (){var statearr_39901 = state_39895;
(statearr_39901[(7)] = inst_39818__$1);

return statearr_39901;
})();
if(inst_39821){
var statearr_39902_39933 = state_39895__$1;
(statearr_39902_39933[(1)] = (5));

} else {
var statearr_39903_39934 = state_39895__$1;
(statearr_39903_39934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39896 === (15))){
var inst_39856 = (state_39895[(8)]);
var state_39895__$1 = state_39895;
var statearr_39904_39935 = state_39895__$1;
(statearr_39904_39935[(2)] = inst_39856);

(statearr_39904_39935[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39896 === (21))){
var inst_39874 = (state_39895[(9)]);
var inst_39855 = (state_39895[(10)]);
var inst_39842 = (state_39895[(11)]);
var inst_39869 = (state_39895[(12)]);
var inst_39876 = (state_39895[(13)]);
var inst_39856 = (state_39895[(8)]);
var inst_39839 = (state_39895[(14)]);
var inst_39880 = (state_39895[(15)]);
var inst_39841 = (state_39895[(16)]);
var inst_39857 = (state_39895[(17)]);
var inst_39885 = (state_39895[(2)]);
var inst_39886 = (function (){var complete = inst_39880;
var timestamp = inst_39841;
var img_buffers = inst_39869;
var map__39816 = inst_39839;
var img_data = inst_39857;
var err = inst_39856;
var img_packets = inst_39876;
var header = inst_39874;
var filename = inst_39842;
var img_res = inst_39839;
var vec__39846 = inst_39855;
return ((function (complete,timestamp,img_buffers,map__39816,img_data,err,img_packets,header,filename,img_res,vec__39846,inst_39874,inst_39855,inst_39842,inst_39869,inst_39876,inst_39856,inst_39839,inst_39880,inst_39841,inst_39857,inst_39885,state_val_39896,c__17681__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["done xforming"], null);
});
;})(complete,timestamp,img_buffers,map__39816,img_data,err,img_packets,header,filename,img_res,vec__39846,inst_39874,inst_39855,inst_39842,inst_39869,inst_39876,inst_39856,inst_39839,inst_39880,inst_39841,inst_39857,inst_39885,state_val_39896,c__17681__auto__))
})();
var inst_39887 = (new cljs.core.Delay(inst_39886,null));
var inst_39888 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init3351303088126891041.clj",63,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_39887,null,1377809020);
var state_39895__$1 = (function (){var statearr_39905 = state_39895;
(statearr_39905[(18)] = inst_39885);

(statearr_39905[(19)] = inst_39888);

return statearr_39905;
})();
var statearr_39906_39936 = state_39895__$1;
(statearr_39906_39936[(2)] = null);

(statearr_39906_39936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39896 === (13))){
var inst_39842 = (state_39895[(11)]);
var inst_39839 = (state_39895[(14)]);
var inst_39841 = (state_39895[(16)]);
var inst_39839__$1 = (state_39895[(2)]);
var inst_39840 = cljs.core.get.call(null,inst_39839__$1,new cljs.core.Keyword(null,"err","err",-2089457205));
var inst_39841__$1 = cljs.core.get.call(null,inst_39839__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
var inst_39842__$1 = cljs.core.get.call(null,inst_39839__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var inst_39843 = (function (){var map__39816 = inst_39839__$1;
var img_res = inst_39839__$1;
var err = inst_39840;
var timestamp = inst_39841__$1;
var filename = inst_39842__$1;
return ((function (map__39816,img_res,err,timestamp,filename,inst_39842,inst_39839,inst_39841,inst_39839__$1,inst_39840,inst_39841__$1,inst_39842__$1,state_val_39896,c__17681__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["xforming image ",filename], null);
});
;})(map__39816,img_res,err,timestamp,filename,inst_39842,inst_39839,inst_39841,inst_39839__$1,inst_39840,inst_39841__$1,inst_39842__$1,state_val_39896,c__17681__auto__))
})();
var inst_39844 = (new cljs.core.Delay(inst_39843,null));
var inst_39845 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init3351303088126891041.clj",52,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_39844,null,1807007632);
var inst_39849 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39842__$1)].join('');
var inst_39850 = [new cljs.core.Keyword(null,"encoding","encoding",1728578272)];
var inst_39851 = [""];
var inst_39852 = cljs.core.PersistentHashMap.fromArrays(inst_39850,inst_39851);
var inst_39853 = cljs_node_io.core.aslurp.call(null,inst_39849,inst_39852);
var state_39895__$1 = (function (){var statearr_39907 = state_39895;
(statearr_39907[(20)] = inst_39845);

(statearr_39907[(11)] = inst_39842__$1);

(statearr_39907[(14)] = inst_39839__$1);

(statearr_39907[(16)] = inst_39841__$1);

return statearr_39907;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39895__$1,(14),inst_39853);
} else {
if((state_val_39896 === (6))){
var state_39895__$1 = state_39895;
var statearr_39908_39937 = state_39895__$1;
(statearr_39908_39937[(2)] = false);

(statearr_39908_39937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39896 === (17))){
var inst_39862 = (state_39895[(2)]);
var state_39895__$1 = state_39895;
if(cljs.core.truth_(inst_39862)){
var statearr_39909_39938 = state_39895__$1;
(statearr_39909_39938[(1)] = (18));

} else {
var statearr_39910_39939 = state_39895__$1;
(statearr_39910_39939[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39896 === (3))){
var inst_39893 = (state_39895[(2)]);
var state_39895__$1 = state_39895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39895__$1,inst_39893);
} else {
if((state_val_39896 === (12))){
var inst_39818 = (state_39895[(7)]);
var state_39895__$1 = state_39895;
var statearr_39911_39940 = state_39895__$1;
(statearr_39911_39940[(2)] = inst_39818);

(statearr_39911_39940[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39896 === (2))){
var state_39895__$1 = state_39895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39895__$1,(4),in$);
} else {
if((state_val_39896 === (19))){
var inst_39874 = (state_39895[(9)]);
var inst_39855 = (state_39895[(10)]);
var inst_39842 = (state_39895[(11)]);
var inst_39869 = (state_39895[(12)]);
var inst_39876 = (state_39895[(13)]);
var inst_39856 = (state_39895[(8)]);
var inst_39839 = (state_39895[(14)]);
var inst_39880 = (state_39895[(15)]);
var inst_39841 = (state_39895[(16)]);
var inst_39857 = (state_39895[(17)]);
var inst_39869__$1 = huginn.camera.chunk_img.call(null,inst_39857,(100000));
var inst_39870 = [new cljs.core.Keyword(null,"payload","payload",-383036092)];
var inst_39871 = cljs.core.count.call(null,inst_39869__$1);
var inst_39872 = ["split_image/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39871)].join('');
var inst_39873 = [inst_39872];
var inst_39874__$1 = cljs.core.PersistentHashMap.fromArrays(inst_39870,inst_39873);
var inst_39875 = (function (){var map__39816 = inst_39839;
var img_res = inst_39839;
var err = inst_39856;
var timestamp = inst_39841;
var filename = inst_39842;
var vec__39846 = inst_39855;
var img_data = inst_39857;
var img_buffers = inst_39869__$1;
var header = inst_39874__$1;
return ((function (map__39816,img_res,err,timestamp,filename,vec__39846,img_data,img_buffers,header,inst_39874,inst_39855,inst_39842,inst_39869,inst_39876,inst_39856,inst_39839,inst_39880,inst_39841,inst_39857,inst_39869__$1,inst_39870,inst_39871,inst_39872,inst_39873,inst_39874__$1,state_val_39896,c__17681__auto__){
return (function (p1__39814_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"subfolder","subfolder",1044158439)],[p1__39814_SHARP_,timestamp,"captures"]);
});
;})(map__39816,img_res,err,timestamp,filename,vec__39846,img_data,img_buffers,header,inst_39874,inst_39855,inst_39842,inst_39869,inst_39876,inst_39856,inst_39839,inst_39880,inst_39841,inst_39857,inst_39869__$1,inst_39870,inst_39871,inst_39872,inst_39873,inst_39874__$1,state_val_39896,c__17681__auto__))
})();
var inst_39876__$1 = cljs.core.map.call(null,inst_39875,inst_39869__$1);
var inst_39877 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39878 = [inst_39874__$1];
var inst_39879 = (new cljs.core.PersistentVector(null,1,(5),inst_39877,inst_39878,null));
var inst_39880__$1 = cljs.core.concat.call(null,inst_39879,inst_39876__$1);
var inst_39881 = (function (){var complete = inst_39880__$1;
var timestamp = inst_39841;
var img_buffers = inst_39869__$1;
var map__39816 = inst_39839;
var img_data = inst_39857;
var err = inst_39856;
var img_packets = inst_39876__$1;
var header = inst_39874__$1;
var filename = inst_39842;
var img_res = inst_39839;
var vec__39846 = inst_39855;
return ((function (complete,timestamp,img_buffers,map__39816,img_data,err,img_packets,header,filename,img_res,vec__39846,inst_39874,inst_39855,inst_39842,inst_39869,inst_39876,inst_39856,inst_39839,inst_39880,inst_39841,inst_39857,inst_39869__$1,inst_39870,inst_39871,inst_39872,inst_39873,inst_39874__$1,inst_39875,inst_39876__$1,inst_39877,inst_39878,inst_39879,inst_39880__$1,state_val_39896,c__17681__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["trying to write img packet"], null);
});
;})(complete,timestamp,img_buffers,map__39816,img_data,err,img_packets,header,filename,img_res,vec__39846,inst_39874,inst_39855,inst_39842,inst_39869,inst_39876,inst_39856,inst_39839,inst_39880,inst_39841,inst_39857,inst_39869__$1,inst_39870,inst_39871,inst_39872,inst_39873,inst_39874__$1,inst_39875,inst_39876__$1,inst_39877,inst_39878,inst_39879,inst_39880__$1,state_val_39896,c__17681__auto__))
})();
var inst_39882 = (new cljs.core.Delay(inst_39881,null));
var inst_39883 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"huginn.camera","/tmp/form-init3351303088126891041.clj",61,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_39882,null,1049374871);
var state_39895__$1 = (function (){var statearr_39912 = state_39895;
(statearr_39912[(9)] = inst_39874__$1);

(statearr_39912[(12)] = inst_39869__$1);

(statearr_39912[(13)] = inst_39876__$1);

(statearr_39912[(15)] = inst_39880__$1);

(statearr_39912[(21)] = inst_39883);

return statearr_39912;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39895__$1,(21),out,inst_39880__$1);
} else {
if((state_val_39896 === (11))){
var inst_39818 = (state_39895[(7)]);
var inst_39836 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39818);
var state_39895__$1 = state_39895;
var statearr_39913_39941 = state_39895__$1;
(statearr_39913_39941[(2)] = inst_39836);

(statearr_39913_39941[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39896 === (9))){
var state_39895__$1 = state_39895;
var statearr_39914_39942 = state_39895__$1;
(statearr_39914_39942[(2)] = false);

(statearr_39914_39942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39896 === (5))){
var inst_39818 = (state_39895[(7)]);
var inst_39823 = inst_39818.cljs$lang$protocol_mask$partition0$;
var inst_39824 = (inst_39823 & (64));
var inst_39825 = inst_39818.cljs$core$ISeq$;
var inst_39826 = (cljs.core.PROTOCOL_SENTINEL === inst_39825);
var inst_39827 = (inst_39824) || (inst_39826);
var state_39895__$1 = state_39895;
if(cljs.core.truth_(inst_39827)){
var statearr_39915_39943 = state_39895__$1;
(statearr_39915_39943[(1)] = (8));

} else {
var statearr_39916_39944 = state_39895__$1;
(statearr_39916_39944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39896 === (14))){
var inst_39855 = (state_39895[(10)]);
var inst_39856 = (state_39895[(8)]);
var inst_39855__$1 = (state_39895[(2)]);
var inst_39856__$1 = cljs.core.nth.call(null,inst_39855__$1,(0),null);
var inst_39857 = cljs.core.nth.call(null,inst_39855__$1,(1),null);
var state_39895__$1 = (function (){var statearr_39917 = state_39895;
(statearr_39917[(10)] = inst_39855__$1);

(statearr_39917[(8)] = inst_39856__$1);

(statearr_39917[(17)] = inst_39857);

return statearr_39917;
})();
if(cljs.core.truth_(inst_39856__$1)){
var statearr_39918_39945 = state_39895__$1;
(statearr_39918_39945[(1)] = (15));

} else {
var statearr_39919_39946 = state_39895__$1;
(statearr_39919_39946[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39896 === (16))){
var inst_39842 = (state_39895[(11)]);
var inst_39860 = cljs.core._EQ_.call(null,inst_39842,"");
var state_39895__$1 = state_39895;
var statearr_39920_39947 = state_39895__$1;
(statearr_39920_39947[(2)] = inst_39860);

(statearr_39920_39947[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39896 === (10))){
var inst_39831 = (state_39895[(2)]);
var state_39895__$1 = state_39895;
var statearr_39921_39948 = state_39895__$1;
(statearr_39921_39948[(2)] = inst_39831);

(statearr_39921_39948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39896 === (18))){
var inst_39855 = (state_39895[(10)]);
var inst_39842 = (state_39895[(11)]);
var inst_39856 = (state_39895[(8)]);
var inst_39839 = (state_39895[(14)]);
var inst_39841 = (state_39895[(16)]);
var inst_39857 = (state_39895[(17)]);
var inst_39864 = (function (){var map__39816 = inst_39839;
var img_res = inst_39839;
var err = inst_39856;
var timestamp = inst_39841;
var filename = inst_39842;
var vec__39846 = inst_39855;
var img_data = inst_39857;
return ((function (map__39816,img_res,err,timestamp,filename,vec__39846,img_data,inst_39855,inst_39842,inst_39856,inst_39839,inst_39841,inst_39857,state_val_39896,c__17681__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error reading image:",err," ",filename], null);
});
;})(map__39816,img_res,err,timestamp,filename,vec__39846,img_data,inst_39855,inst_39842,inst_39856,inst_39839,inst_39841,inst_39857,state_val_39896,c__17681__auto__))
})();
var inst_39865 = (new cljs.core.Delay(inst_39864,null));
var inst_39866 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"huginn.camera","/tmp/form-init3351303088126891041.clj",55,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_39865,null,-1630698777);
var state_39895__$1 = (function (){var statearr_39922 = state_39895;
(statearr_39922[(22)] = inst_39866);

return statearr_39922;
})();
var statearr_39923_39949 = state_39895__$1;
(statearr_39923_39949[(2)] = null);

(statearr_39923_39949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39896 === (8))){
var state_39895__$1 = state_39895;
var statearr_39924_39950 = state_39895__$1;
(statearr_39924_39950[(2)] = true);

(statearr_39924_39950[(1)] = (10));


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
var statearr_39925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39925[(0)] = huginn$camera$read_imgs_$_state_machine__17592__auto__);

(statearr_39925[(1)] = (1));

return statearr_39925;
});
var huginn$camera$read_imgs_$_state_machine__17592__auto____1 = (function (state_39895){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_39895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e39926){if((e39926 instanceof Object)){
var ex__17595__auto__ = e39926;
var statearr_39927_39951 = state_39895;
(statearr_39927_39951[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39952 = state_39895;
state_39895 = G__39952;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
huginn$camera$read_imgs_$_state_machine__17592__auto__ = function(state_39895){
switch(arguments.length){
case 0:
return huginn$camera$read_imgs_$_state_machine__17592__auto____0.call(this);
case 1:
return huginn$camera$read_imgs_$_state_machine__17592__auto____1.call(this,state_39895);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
huginn$camera$read_imgs_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = huginn$camera$read_imgs_$_state_machine__17592__auto____0;
huginn$camera$read_imgs_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = huginn$camera$read_imgs_$_state_machine__17592__auto____1;
return huginn$camera$read_imgs_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto__))
})();
var state__17683__auto__ = (function (){var statearr_39928 = f__17682__auto__.call(null);
(statearr_39928[(6)] = c__17681__auto__);

return statearr_39928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto__))
);

return c__17681__auto__;
});
huginn.camera.build_camera = (function huginn$camera$build_camera(var_args){
var G__39954 = arguments.length;
switch (G__39954) {
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

huginn.camera.build_camera.cljs$core$IFn$_invoke$arity$1 = (function (p__39955){
var map__39956 = p__39955;
var map__39956__$1 = ((((!((map__39956 == null)))?((((map__39956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39956):map__39956);
var opts = map__39956__$1;
var output_dir = cljs.core.get.call(null,map__39956__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991),"pics");
var tl = cljs.core.get.call(null,map__39956__$1,new cljs.core.Keyword(null,"tl","tl",-35265210),(((60) * (1000)) * (10)));
var mode = cljs.core.get.call(null,map__39956__$1,new cljs.core.Keyword(null,"mode","mode",654403691),"timelapse");
var encoding = cljs.core.get.call(null,map__39956__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272),"jpg");
return promesa.core.promise.call(null,((function (map__39956,map__39956__$1,opts,output_dir,tl,mode,encoding){
return (function (resolve,reject){
var snap_chan = cljs.core.async.chan.call(null);
var data_chan = cljs.core.async.chan.call(null);
var camera = (new huginn.camera.node$module$raspicam(({"output": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/%04d_img.jpg"].join(''), "mode": mode, "encoding": encoding, "tl": tl})));
var output = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"raw-chan","raw-chan",-779682305),snap_chan,new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063),data_chan,new cljs.core.Keyword(null,"camera","camera",-1190348585),camera], null);
var handlers = huginn.camera.cam_handlers.call(null,((function (snap_chan,data_chan,camera,output,map__39956,map__39956__$1,opts,output_dir,tl,mode,encoding){
return (function (){
return resolve.call(null,output);
});})(snap_chan,data_chan,camera,output,map__39956,map__39956__$1,opts,output_dir,tl,mode,encoding))
,((function (snap_chan,data_chan,camera,output,map__39956,map__39956__$1,opts,output_dir,tl,mode,encoding){
return (function (){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs_node_io.core.delete_file,cljs_node_io.core.file_seq.call(null,output_dir)));
});})(snap_chan,data_chan,camera,output,map__39956,map__39956__$1,opts,output_dir,tl,mode,encoding))
,((function (snap_chan,data_chan,camera,output,map__39956,map__39956__$1,opts,output_dir,tl,mode,encoding){
return (function (){
return camera.start();
});})(snap_chan,data_chan,camera,output,map__39956,map__39956__$1,opts,output_dir,tl,mode,encoding))
,snap_chan);
huginn.camera.read_imgs.call(null,output_dir,snap_chan,data_chan);

huginn.camera.add_handlers.call(null,camera,handlers);

return camera.start();
});})(map__39956,map__39956__$1,opts,output_dir,tl,mode,encoding))
);
});

huginn.camera.build_camera.cljs$lang$maxFixedArity = 1;

huginn.camera.cleanup_camera = (function huginn$camera$cleanup_camera(p__39959){
var map__39960 = p__39959;
var map__39960__$1 = ((((!((map__39960 == null)))?((((map__39960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39960.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39960):map__39960);
var system = map__39960__$1;
var camera = cljs.core.get.call(null,map__39960__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
var snap_chan = cljs.core.get.call(null,map__39960__$1,new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063));
camera.stop();

cljs.core.async.close_BANG_.call(null,snap_chan);

return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,system,new cljs.core.Keyword(null,"camera","camera",-1190348585)),new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063));
});
huginn.camera._start_mix_camera = (function huginn$camera$_start_mix_camera(p__39962){
var map__39963 = p__39962;
var map__39963__$1 = ((((!((map__39963 == null)))?((((map__39963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39963):map__39963);
var system = map__39963__$1;
var telemetry_chan = cljs.core.get.call(null,map__39963__$1,new cljs.core.Keyword(null,"telemetry-chan","telemetry-chan",-1991836503));
var camera_p = huginn.camera.build_camera.call(null);
var mixer = cljs.core.async.mix.call(null,telemetry_chan);
return promesa.core.then.call(null,camera_p,((function (camera_p,mixer,map__39963,map__39963__$1,system,telemetry_chan){
return (function (p__39965){
var map__39966 = p__39965;
var map__39966__$1 = ((((!((map__39966 == null)))?((((map__39966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39966.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39966):map__39966);
var snap_chan = cljs.core.get.call(null,map__39966__$1,new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063));
var camera = cljs.core.get.call(null,map__39966__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"huginn.camera","/tmp/form-init3351303088126891041.clj",114,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__39966,map__39966__$1,snap_chan,camera,camera_p,mixer,map__39963,map__39963__$1,system,telemetry_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["connecting camera to mixer"], null);
});})(map__39966,map__39966__$1,snap_chan,camera,camera_p,mixer,map__39963,map__39963__$1,system,telemetry_chan))
,null)),null,-993700748);

cljs.core.async.admix.call(null,mixer,snap_chan);

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,system,new cljs.core.Keyword(null,"camera","camera",-1190348585),camera),new cljs.core.Keyword(null,"mixer","mixer",-120313315),mixer),new cljs.core.Keyword(null,"snap-chan","snap-chan",1438169063),snap_chan)], null);
});})(camera_p,mixer,map__39963,map__39963__$1,system,telemetry_chan))
);
});
huginn.camera.start_mix_camera = (function huginn$camera$start_mix_camera(system_promise){
return promesa.core.then.call(null,system_promise,huginn.camera._start_mix_camera);
});

//# sourceMappingURL=camera.js.map
