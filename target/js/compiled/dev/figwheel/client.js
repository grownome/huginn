// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e55371){if((e55371 instanceof Error)){
var e = e55371;
return "Error: Unable to stringify";
} else {
throw e55371;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__55374 = arguments.length;
switch (G__55374) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__55372_SHARP_){
if(typeof p1__55372_SHARP_ === 'string'){
return p1__55372_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__55372_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__42698__auto__ = [];
var len__42691__auto___55377 = arguments.length;
var i__42692__auto___55378 = (0);
while(true){
if((i__42692__auto___55378 < len__42691__auto___55377)){
args__42698__auto__.push((arguments[i__42692__auto___55378]));

var G__55379 = (i__42692__auto___55378 + (1));
i__42692__auto___55378 = G__55379;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq55376){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55376));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__42698__auto__ = [];
var len__42691__auto___55381 = arguments.length;
var i__42692__auto___55382 = (0);
while(true){
if((i__42692__auto___55382 < len__42691__auto___55381)){
args__42698__auto__.push((arguments[i__42692__auto___55382]));

var G__55383 = (i__42692__auto___55382 + (1));
i__42692__auto___55382 = G__55383;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq55380){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55380));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__55384){
var map__55385 = p__55384;
var map__55385__$1 = ((((!((map__55385 == null)))?((((map__55385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55385):map__55385);
var message = cljs.core.get.call(null,map__55385__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__55385__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__41412__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__41412__auto__)){
return or__41412__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__41400__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__41400__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__41400__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__45292__auto___55464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto___55464,ch){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto___55464,ch){
return (function (state_55436){
var state_val_55437 = (state_55436[(1)]);
if((state_val_55437 === (7))){
var inst_55432 = (state_55436[(2)]);
var state_55436__$1 = state_55436;
var statearr_55438_55465 = state_55436__$1;
(statearr_55438_55465[(2)] = inst_55432);

(statearr_55438_55465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55437 === (1))){
var state_55436__$1 = state_55436;
var statearr_55439_55466 = state_55436__$1;
(statearr_55439_55466[(2)] = null);

(statearr_55439_55466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55437 === (4))){
var inst_55389 = (state_55436[(7)]);
var inst_55389__$1 = (state_55436[(2)]);
var state_55436__$1 = (function (){var statearr_55440 = state_55436;
(statearr_55440[(7)] = inst_55389__$1);

return statearr_55440;
})();
if(cljs.core.truth_(inst_55389__$1)){
var statearr_55441_55467 = state_55436__$1;
(statearr_55441_55467[(1)] = (5));

} else {
var statearr_55442_55468 = state_55436__$1;
(statearr_55442_55468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55437 === (15))){
var inst_55396 = (state_55436[(8)]);
var inst_55411 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_55396);
var inst_55412 = cljs.core.first.call(null,inst_55411);
var inst_55413 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_55412);
var inst_55414 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55413)].join('');
var inst_55415 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_55414);
var state_55436__$1 = state_55436;
var statearr_55443_55469 = state_55436__$1;
(statearr_55443_55469[(2)] = inst_55415);

(statearr_55443_55469[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55437 === (13))){
var inst_55420 = (state_55436[(2)]);
var state_55436__$1 = state_55436;
var statearr_55444_55470 = state_55436__$1;
(statearr_55444_55470[(2)] = inst_55420);

(statearr_55444_55470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55437 === (6))){
var state_55436__$1 = state_55436;
var statearr_55445_55471 = state_55436__$1;
(statearr_55445_55471[(2)] = null);

(statearr_55445_55471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55437 === (17))){
var inst_55418 = (state_55436[(2)]);
var state_55436__$1 = state_55436;
var statearr_55446_55472 = state_55436__$1;
(statearr_55446_55472[(2)] = inst_55418);

(statearr_55446_55472[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55437 === (3))){
var inst_55434 = (state_55436[(2)]);
var state_55436__$1 = state_55436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55436__$1,inst_55434);
} else {
if((state_val_55437 === (12))){
var inst_55395 = (state_55436[(9)]);
var inst_55409 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_55395,opts);
var state_55436__$1 = state_55436;
if(cljs.core.truth_(inst_55409)){
var statearr_55447_55473 = state_55436__$1;
(statearr_55447_55473[(1)] = (15));

} else {
var statearr_55448_55474 = state_55436__$1;
(statearr_55448_55474[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55437 === (2))){
var state_55436__$1 = state_55436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55436__$1,(4),ch);
} else {
if((state_val_55437 === (11))){
var inst_55396 = (state_55436[(8)]);
var inst_55401 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55402 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_55396);
var inst_55403 = cljs.core.async.timeout.call(null,(1000));
var inst_55404 = [inst_55402,inst_55403];
var inst_55405 = (new cljs.core.PersistentVector(null,2,(5),inst_55401,inst_55404,null));
var state_55436__$1 = state_55436;
return cljs.core.async.ioc_alts_BANG_.call(null,state_55436__$1,(14),inst_55405);
} else {
if((state_val_55437 === (9))){
var inst_55396 = (state_55436[(8)]);
var inst_55422 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_55423 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_55396);
var inst_55424 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_55423);
var inst_55425 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55424)].join('');
var inst_55426 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_55425);
var state_55436__$1 = (function (){var statearr_55449 = state_55436;
(statearr_55449[(10)] = inst_55422);

return statearr_55449;
})();
var statearr_55450_55475 = state_55436__$1;
(statearr_55450_55475[(2)] = inst_55426);

(statearr_55450_55475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55437 === (5))){
var inst_55389 = (state_55436[(7)]);
var inst_55391 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_55392 = (new cljs.core.PersistentArrayMap(null,2,inst_55391,null));
var inst_55393 = (new cljs.core.PersistentHashSet(null,inst_55392,null));
var inst_55394 = figwheel.client.focus_msgs.call(null,inst_55393,inst_55389);
var inst_55395 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_55394);
var inst_55396 = cljs.core.first.call(null,inst_55394);
var inst_55397 = figwheel.client.autoload_QMARK_.call(null);
var state_55436__$1 = (function (){var statearr_55451 = state_55436;
(statearr_55451[(9)] = inst_55395);

(statearr_55451[(8)] = inst_55396);

return statearr_55451;
})();
if(cljs.core.truth_(inst_55397)){
var statearr_55452_55476 = state_55436__$1;
(statearr_55452_55476[(1)] = (8));

} else {
var statearr_55453_55477 = state_55436__$1;
(statearr_55453_55477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55437 === (14))){
var inst_55407 = (state_55436[(2)]);
var state_55436__$1 = state_55436;
var statearr_55454_55478 = state_55436__$1;
(statearr_55454_55478[(2)] = inst_55407);

(statearr_55454_55478[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55437 === (16))){
var state_55436__$1 = state_55436;
var statearr_55455_55479 = state_55436__$1;
(statearr_55455_55479[(2)] = null);

(statearr_55455_55479[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55437 === (10))){
var inst_55428 = (state_55436[(2)]);
var state_55436__$1 = (function (){var statearr_55456 = state_55436;
(statearr_55456[(11)] = inst_55428);

return statearr_55456;
})();
var statearr_55457_55480 = state_55436__$1;
(statearr_55457_55480[(2)] = null);

(statearr_55457_55480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55437 === (8))){
var inst_55395 = (state_55436[(9)]);
var inst_55399 = figwheel.client.reload_file_state_QMARK_.call(null,inst_55395,opts);
var state_55436__$1 = state_55436;
if(cljs.core.truth_(inst_55399)){
var statearr_55458_55481 = state_55436__$1;
(statearr_55458_55481[(1)] = (11));

} else {
var statearr_55459_55482 = state_55436__$1;
(statearr_55459_55482[(1)] = (12));

}

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
});})(c__45292__auto___55464,ch))
;
return ((function (switch__45202__auto__,c__45292__auto___55464,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__45203__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__45203__auto____0 = (function (){
var statearr_55460 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55460[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__45203__auto__);

(statearr_55460[(1)] = (1));

return statearr_55460;
});
var figwheel$client$file_reloader_plugin_$_state_machine__45203__auto____1 = (function (state_55436){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_55436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e55461){if((e55461 instanceof Object)){
var ex__45206__auto__ = e55461;
var statearr_55462_55483 = state_55436;
(statearr_55462_55483[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55484 = state_55436;
state_55436 = G__55484;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__45203__auto__ = function(state_55436){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__45203__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__45203__auto____1.call(this,state_55436);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__45203__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__45203__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto___55464,ch))
})();
var state__45294__auto__ = (function (){var statearr_55463 = f__45293__auto__.call(null);
(statearr_55463[(6)] = c__45292__auto___55464);

return statearr_55463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto___55464,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__55485_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__55485_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_55487 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_55487){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e55486){if((e55486 instanceof Error)){
var e = e55486;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_55487], null));
} else {
var e = e55486;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_55487))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__55488){
var map__55489 = p__55488;
var map__55489__$1 = ((((!((map__55489 == null)))?((((map__55489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55489):map__55489);
var opts = map__55489__$1;
var build_id = cljs.core.get.call(null,map__55489__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__55489,map__55489__$1,opts,build_id){
return (function (p__55491){
var vec__55492 = p__55491;
var seq__55493 = cljs.core.seq.call(null,vec__55492);
var first__55494 = cljs.core.first.call(null,seq__55493);
var seq__55493__$1 = cljs.core.next.call(null,seq__55493);
var map__55495 = first__55494;
var map__55495__$1 = ((((!((map__55495 == null)))?((((map__55495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55495):map__55495);
var msg = map__55495__$1;
var msg_name = cljs.core.get.call(null,map__55495__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__55493__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__55492,seq__55493,first__55494,seq__55493__$1,map__55495,map__55495__$1,msg,msg_name,_,map__55489,map__55489__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__55492,seq__55493,first__55494,seq__55493__$1,map__55495,map__55495__$1,msg,msg_name,_,map__55489,map__55489__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__55489,map__55489__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__55497){
var vec__55498 = p__55497;
var seq__55499 = cljs.core.seq.call(null,vec__55498);
var first__55500 = cljs.core.first.call(null,seq__55499);
var seq__55499__$1 = cljs.core.next.call(null,seq__55499);
var map__55501 = first__55500;
var map__55501__$1 = ((((!((map__55501 == null)))?((((map__55501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55501):map__55501);
var msg = map__55501__$1;
var msg_name = cljs.core.get.call(null,map__55501__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__55499__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__55503){
var map__55504 = p__55503;
var map__55504__$1 = ((((!((map__55504 == null)))?((((map__55504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55504):map__55504);
var on_compile_warning = cljs.core.get.call(null,map__55504__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__55504__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__55504,map__55504__$1,on_compile_warning,on_compile_fail){
return (function (p__55506){
var vec__55507 = p__55506;
var seq__55508 = cljs.core.seq.call(null,vec__55507);
var first__55509 = cljs.core.first.call(null,seq__55508);
var seq__55508__$1 = cljs.core.next.call(null,seq__55508);
var map__55510 = first__55509;
var map__55510__$1 = ((((!((map__55510 == null)))?((((map__55510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55510):map__55510);
var msg = map__55510__$1;
var msg_name = cljs.core.get.call(null,map__55510__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__55508__$1;
var pred__55512 = cljs.core._EQ_;
var expr__55513 = msg_name;
if(cljs.core.truth_(pred__55512.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__55513))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__55512.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__55513))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__55504,map__55504__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__45292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto__,msg_hist,msg_names,msg){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto__,msg_hist,msg_names,msg){
return (function (state_55602){
var state_val_55603 = (state_55602[(1)]);
if((state_val_55603 === (7))){
var inst_55522 = (state_55602[(2)]);
var state_55602__$1 = state_55602;
if(cljs.core.truth_(inst_55522)){
var statearr_55604_55651 = state_55602__$1;
(statearr_55604_55651[(1)] = (8));

} else {
var statearr_55605_55652 = state_55602__$1;
(statearr_55605_55652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (20))){
var inst_55596 = (state_55602[(2)]);
var state_55602__$1 = state_55602;
var statearr_55606_55653 = state_55602__$1;
(statearr_55606_55653[(2)] = inst_55596);

(statearr_55606_55653[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (27))){
var inst_55592 = (state_55602[(2)]);
var state_55602__$1 = state_55602;
var statearr_55607_55654 = state_55602__$1;
(statearr_55607_55654[(2)] = inst_55592);

(statearr_55607_55654[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (1))){
var inst_55515 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_55602__$1 = state_55602;
if(cljs.core.truth_(inst_55515)){
var statearr_55608_55655 = state_55602__$1;
(statearr_55608_55655[(1)] = (2));

} else {
var statearr_55609_55656 = state_55602__$1;
(statearr_55609_55656[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (24))){
var inst_55594 = (state_55602[(2)]);
var state_55602__$1 = state_55602;
var statearr_55610_55657 = state_55602__$1;
(statearr_55610_55657[(2)] = inst_55594);

(statearr_55610_55657[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (4))){
var inst_55600 = (state_55602[(2)]);
var state_55602__$1 = state_55602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55602__$1,inst_55600);
} else {
if((state_val_55603 === (15))){
var inst_55598 = (state_55602[(2)]);
var state_55602__$1 = state_55602;
var statearr_55611_55658 = state_55602__$1;
(statearr_55611_55658[(2)] = inst_55598);

(statearr_55611_55658[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (21))){
var inst_55551 = (state_55602[(2)]);
var inst_55552 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55553 = figwheel.client.auto_jump_to_error.call(null,opts,inst_55552);
var state_55602__$1 = (function (){var statearr_55612 = state_55602;
(statearr_55612[(7)] = inst_55551);

return statearr_55612;
})();
var statearr_55613_55659 = state_55602__$1;
(statearr_55613_55659[(2)] = inst_55553);

(statearr_55613_55659[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (31))){
var inst_55581 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_55602__$1 = state_55602;
if(cljs.core.truth_(inst_55581)){
var statearr_55614_55660 = state_55602__$1;
(statearr_55614_55660[(1)] = (34));

} else {
var statearr_55615_55661 = state_55602__$1;
(statearr_55615_55661[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (32))){
var inst_55590 = (state_55602[(2)]);
var state_55602__$1 = state_55602;
var statearr_55616_55662 = state_55602__$1;
(statearr_55616_55662[(2)] = inst_55590);

(statearr_55616_55662[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (33))){
var inst_55577 = (state_55602[(2)]);
var inst_55578 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55579 = figwheel.client.auto_jump_to_error.call(null,opts,inst_55578);
var state_55602__$1 = (function (){var statearr_55617 = state_55602;
(statearr_55617[(8)] = inst_55577);

return statearr_55617;
})();
var statearr_55618_55663 = state_55602__$1;
(statearr_55618_55663[(2)] = inst_55579);

(statearr_55618_55663[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (13))){
var inst_55536 = figwheel.client.heads_up.clear.call(null);
var state_55602__$1 = state_55602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55602__$1,(16),inst_55536);
} else {
if((state_val_55603 === (22))){
var inst_55557 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55558 = figwheel.client.heads_up.append_warning_message.call(null,inst_55557);
var state_55602__$1 = state_55602;
var statearr_55619_55664 = state_55602__$1;
(statearr_55619_55664[(2)] = inst_55558);

(statearr_55619_55664[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (36))){
var inst_55588 = (state_55602[(2)]);
var state_55602__$1 = state_55602;
var statearr_55620_55665 = state_55602__$1;
(statearr_55620_55665[(2)] = inst_55588);

(statearr_55620_55665[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (29))){
var inst_55568 = (state_55602[(2)]);
var inst_55569 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55570 = figwheel.client.auto_jump_to_error.call(null,opts,inst_55569);
var state_55602__$1 = (function (){var statearr_55621 = state_55602;
(statearr_55621[(9)] = inst_55568);

return statearr_55621;
})();
var statearr_55622_55666 = state_55602__$1;
(statearr_55622_55666[(2)] = inst_55570);

(statearr_55622_55666[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (6))){
var inst_55517 = (state_55602[(10)]);
var state_55602__$1 = state_55602;
var statearr_55623_55667 = state_55602__$1;
(statearr_55623_55667[(2)] = inst_55517);

(statearr_55623_55667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (28))){
var inst_55564 = (state_55602[(2)]);
var inst_55565 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55566 = figwheel.client.heads_up.display_warning.call(null,inst_55565);
var state_55602__$1 = (function (){var statearr_55624 = state_55602;
(statearr_55624[(11)] = inst_55564);

return statearr_55624;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55602__$1,(29),inst_55566);
} else {
if((state_val_55603 === (25))){
var inst_55562 = figwheel.client.heads_up.clear.call(null);
var state_55602__$1 = state_55602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55602__$1,(28),inst_55562);
} else {
if((state_val_55603 === (34))){
var inst_55583 = figwheel.client.heads_up.flash_loaded.call(null);
var state_55602__$1 = state_55602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55602__$1,(37),inst_55583);
} else {
if((state_val_55603 === (17))){
var inst_55542 = (state_55602[(2)]);
var inst_55543 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55544 = figwheel.client.auto_jump_to_error.call(null,opts,inst_55543);
var state_55602__$1 = (function (){var statearr_55625 = state_55602;
(statearr_55625[(12)] = inst_55542);

return statearr_55625;
})();
var statearr_55626_55668 = state_55602__$1;
(statearr_55626_55668[(2)] = inst_55544);

(statearr_55626_55668[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (3))){
var inst_55534 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_55602__$1 = state_55602;
if(cljs.core.truth_(inst_55534)){
var statearr_55627_55669 = state_55602__$1;
(statearr_55627_55669[(1)] = (13));

} else {
var statearr_55628_55670 = state_55602__$1;
(statearr_55628_55670[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (12))){
var inst_55530 = (state_55602[(2)]);
var state_55602__$1 = state_55602;
var statearr_55629_55671 = state_55602__$1;
(statearr_55629_55671[(2)] = inst_55530);

(statearr_55629_55671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (2))){
var inst_55517 = (state_55602[(10)]);
var inst_55517__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_55602__$1 = (function (){var statearr_55630 = state_55602;
(statearr_55630[(10)] = inst_55517__$1);

return statearr_55630;
})();
if(cljs.core.truth_(inst_55517__$1)){
var statearr_55631_55672 = state_55602__$1;
(statearr_55631_55672[(1)] = (5));

} else {
var statearr_55632_55673 = state_55602__$1;
(statearr_55632_55673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (23))){
var inst_55560 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_55602__$1 = state_55602;
if(cljs.core.truth_(inst_55560)){
var statearr_55633_55674 = state_55602__$1;
(statearr_55633_55674[(1)] = (25));

} else {
var statearr_55634_55675 = state_55602__$1;
(statearr_55634_55675[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (35))){
var state_55602__$1 = state_55602;
var statearr_55635_55676 = state_55602__$1;
(statearr_55635_55676[(2)] = null);

(statearr_55635_55676[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (19))){
var inst_55555 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_55602__$1 = state_55602;
if(cljs.core.truth_(inst_55555)){
var statearr_55636_55677 = state_55602__$1;
(statearr_55636_55677[(1)] = (22));

} else {
var statearr_55637_55678 = state_55602__$1;
(statearr_55637_55678[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (11))){
var inst_55526 = (state_55602[(2)]);
var state_55602__$1 = state_55602;
var statearr_55638_55679 = state_55602__$1;
(statearr_55638_55679[(2)] = inst_55526);

(statearr_55638_55679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (9))){
var inst_55528 = figwheel.client.heads_up.clear.call(null);
var state_55602__$1 = state_55602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55602__$1,(12),inst_55528);
} else {
if((state_val_55603 === (5))){
var inst_55519 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_55602__$1 = state_55602;
var statearr_55639_55680 = state_55602__$1;
(statearr_55639_55680[(2)] = inst_55519);

(statearr_55639_55680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (14))){
var inst_55546 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_55602__$1 = state_55602;
if(cljs.core.truth_(inst_55546)){
var statearr_55640_55681 = state_55602__$1;
(statearr_55640_55681[(1)] = (18));

} else {
var statearr_55641_55682 = state_55602__$1;
(statearr_55641_55682[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (26))){
var inst_55572 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_55602__$1 = state_55602;
if(cljs.core.truth_(inst_55572)){
var statearr_55642_55683 = state_55602__$1;
(statearr_55642_55683[(1)] = (30));

} else {
var statearr_55643_55684 = state_55602__$1;
(statearr_55643_55684[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (16))){
var inst_55538 = (state_55602[(2)]);
var inst_55539 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55540 = figwheel.client.heads_up.display_exception.call(null,inst_55539);
var state_55602__$1 = (function (){var statearr_55644 = state_55602;
(statearr_55644[(13)] = inst_55538);

return statearr_55644;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55602__$1,(17),inst_55540);
} else {
if((state_val_55603 === (30))){
var inst_55574 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55575 = figwheel.client.heads_up.display_warning.call(null,inst_55574);
var state_55602__$1 = state_55602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55602__$1,(33),inst_55575);
} else {
if((state_val_55603 === (10))){
var inst_55532 = (state_55602[(2)]);
var state_55602__$1 = state_55602;
var statearr_55645_55685 = state_55602__$1;
(statearr_55645_55685[(2)] = inst_55532);

(statearr_55645_55685[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (18))){
var inst_55548 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55549 = figwheel.client.heads_up.display_exception.call(null,inst_55548);
var state_55602__$1 = state_55602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55602__$1,(21),inst_55549);
} else {
if((state_val_55603 === (37))){
var inst_55585 = (state_55602[(2)]);
var state_55602__$1 = state_55602;
var statearr_55646_55686 = state_55602__$1;
(statearr_55646_55686[(2)] = inst_55585);

(statearr_55646_55686[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55603 === (8))){
var inst_55524 = figwheel.client.heads_up.flash_loaded.call(null);
var state_55602__$1 = state_55602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55602__$1,(11),inst_55524);
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
});})(c__45292__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__45202__auto__,c__45292__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45203__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45203__auto____0 = (function (){
var statearr_55647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55647[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45203__auto__);

(statearr_55647[(1)] = (1));

return statearr_55647;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45203__auto____1 = (function (state_55602){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_55602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e55648){if((e55648 instanceof Object)){
var ex__45206__auto__ = e55648;
var statearr_55649_55687 = state_55602;
(statearr_55649_55687[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55688 = state_55602;
state_55602 = G__55688;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45203__auto__ = function(state_55602){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45203__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45203__auto____1.call(this,state_55602);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45203__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45203__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto__,msg_hist,msg_names,msg))
})();
var state__45294__auto__ = (function (){var statearr_55650 = f__45293__auto__.call(null);
(statearr_55650[(6)] = c__45292__auto__);

return statearr_55650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto__,msg_hist,msg_names,msg))
);

return c__45292__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__45292__auto___55717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto___55717,ch){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto___55717,ch){
return (function (state_55703){
var state_val_55704 = (state_55703[(1)]);
if((state_val_55704 === (1))){
var state_55703__$1 = state_55703;
var statearr_55705_55718 = state_55703__$1;
(statearr_55705_55718[(2)] = null);

(statearr_55705_55718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55704 === (2))){
var state_55703__$1 = state_55703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55703__$1,(4),ch);
} else {
if((state_val_55704 === (3))){
var inst_55701 = (state_55703[(2)]);
var state_55703__$1 = state_55703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55703__$1,inst_55701);
} else {
if((state_val_55704 === (4))){
var inst_55691 = (state_55703[(7)]);
var inst_55691__$1 = (state_55703[(2)]);
var state_55703__$1 = (function (){var statearr_55706 = state_55703;
(statearr_55706[(7)] = inst_55691__$1);

return statearr_55706;
})();
if(cljs.core.truth_(inst_55691__$1)){
var statearr_55707_55719 = state_55703__$1;
(statearr_55707_55719[(1)] = (5));

} else {
var statearr_55708_55720 = state_55703__$1;
(statearr_55708_55720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55704 === (5))){
var inst_55691 = (state_55703[(7)]);
var inst_55693 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_55691);
var state_55703__$1 = state_55703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55703__$1,(8),inst_55693);
} else {
if((state_val_55704 === (6))){
var state_55703__$1 = state_55703;
var statearr_55709_55721 = state_55703__$1;
(statearr_55709_55721[(2)] = null);

(statearr_55709_55721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55704 === (7))){
var inst_55699 = (state_55703[(2)]);
var state_55703__$1 = state_55703;
var statearr_55710_55722 = state_55703__$1;
(statearr_55710_55722[(2)] = inst_55699);

(statearr_55710_55722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55704 === (8))){
var inst_55695 = (state_55703[(2)]);
var state_55703__$1 = (function (){var statearr_55711 = state_55703;
(statearr_55711[(8)] = inst_55695);

return statearr_55711;
})();
var statearr_55712_55723 = state_55703__$1;
(statearr_55712_55723[(2)] = null);

(statearr_55712_55723[(1)] = (2));


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
});})(c__45292__auto___55717,ch))
;
return ((function (switch__45202__auto__,c__45292__auto___55717,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__45203__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__45203__auto____0 = (function (){
var statearr_55713 = [null,null,null,null,null,null,null,null,null];
(statearr_55713[(0)] = figwheel$client$heads_up_plugin_$_state_machine__45203__auto__);

(statearr_55713[(1)] = (1));

return statearr_55713;
});
var figwheel$client$heads_up_plugin_$_state_machine__45203__auto____1 = (function (state_55703){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_55703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e55714){if((e55714 instanceof Object)){
var ex__45206__auto__ = e55714;
var statearr_55715_55724 = state_55703;
(statearr_55715_55724[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55725 = state_55703;
state_55703 = G__55725;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__45203__auto__ = function(state_55703){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__45203__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__45203__auto____1.call(this,state_55703);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__45203__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__45203__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto___55717,ch))
})();
var state__45294__auto__ = (function (){var statearr_55716 = f__45293__auto__.call(null);
(statearr_55716[(6)] = c__45292__auto___55717);

return statearr_55716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto___55717,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__45292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto__){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto__){
return (function (state_55731){
var state_val_55732 = (state_55731[(1)]);
if((state_val_55732 === (1))){
var inst_55726 = cljs.core.async.timeout.call(null,(3000));
var state_55731__$1 = state_55731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55731__$1,(2),inst_55726);
} else {
if((state_val_55732 === (2))){
var inst_55728 = (state_55731[(2)]);
var inst_55729 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_55731__$1 = (function (){var statearr_55733 = state_55731;
(statearr_55733[(7)] = inst_55728);

return statearr_55733;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55731__$1,inst_55729);
} else {
return null;
}
}
});})(c__45292__auto__))
;
return ((function (switch__45202__auto__,c__45292__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__45203__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__45203__auto____0 = (function (){
var statearr_55734 = [null,null,null,null,null,null,null,null];
(statearr_55734[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__45203__auto__);

(statearr_55734[(1)] = (1));

return statearr_55734;
});
var figwheel$client$enforce_project_plugin_$_state_machine__45203__auto____1 = (function (state_55731){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_55731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e55735){if((e55735 instanceof Object)){
var ex__45206__auto__ = e55735;
var statearr_55736_55738 = state_55731;
(statearr_55736_55738[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55739 = state_55731;
state_55731 = G__55739;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__45203__auto__ = function(state_55731){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__45203__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__45203__auto____1.call(this,state_55731);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__45203__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__45203__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto__))
})();
var state__45294__auto__ = (function (){var statearr_55737 = f__45293__auto__.call(null);
(statearr_55737[(6)] = c__45292__auto__);

return statearr_55737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto__))
);

return c__45292__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__45292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto__,figwheel_version,temp__5457__auto__){
return (function (state_55746){
var state_val_55747 = (state_55746[(1)]);
if((state_val_55747 === (1))){
var inst_55740 = cljs.core.async.timeout.call(null,(2000));
var state_55746__$1 = state_55746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55746__$1,(2),inst_55740);
} else {
if((state_val_55747 === (2))){
var inst_55742 = (state_55746[(2)]);
var inst_55743 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_55744 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_55743);
var state_55746__$1 = (function (){var statearr_55748 = state_55746;
(statearr_55748[(7)] = inst_55742);

return statearr_55748;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55746__$1,inst_55744);
} else {
return null;
}
}
});})(c__45292__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__45202__auto__,c__45292__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45203__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45203__auto____0 = (function (){
var statearr_55749 = [null,null,null,null,null,null,null,null];
(statearr_55749[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45203__auto__);

(statearr_55749[(1)] = (1));

return statearr_55749;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45203__auto____1 = (function (state_55746){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_55746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e55750){if((e55750 instanceof Object)){
var ex__45206__auto__ = e55750;
var statearr_55751_55753 = state_55746;
(statearr_55751_55753[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55754 = state_55746;
state_55746 = G__55754;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45203__auto__ = function(state_55746){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45203__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45203__auto____1.call(this,state_55746);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45203__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45203__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto__,figwheel_version,temp__5457__auto__))
})();
var state__45294__auto__ = (function (){var statearr_55752 = f__45293__auto__.call(null);
(statearr_55752[(6)] = c__45292__auto__);

return statearr_55752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto__,figwheel_version,temp__5457__auto__))
);

return c__45292__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__55755){
var map__55756 = p__55755;
var map__55756__$1 = ((((!((map__55756 == null)))?((((map__55756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55756):map__55756);
var file = cljs.core.get.call(null,map__55756__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__55756__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__55756__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__55758 = "";
var G__55758__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55758),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__55758);
var G__55758__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55758__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__55758__$1);
if(cljs.core.truth_((function (){var and__41400__auto__ = line;
if(cljs.core.truth_(and__41400__auto__)){
return column;
} else {
return and__41400__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55758__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__55758__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__55759){
var map__55760 = p__55759;
var map__55760__$1 = ((((!((map__55760 == null)))?((((map__55760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55760):map__55760);
var ed = map__55760__$1;
var formatted_exception = cljs.core.get.call(null,map__55760__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__55760__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__55760__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__55762_55766 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__55763_55767 = null;
var count__55764_55768 = (0);
var i__55765_55769 = (0);
while(true){
if((i__55765_55769 < count__55764_55768)){
var msg_55770 = cljs.core._nth.call(null,chunk__55763_55767,i__55765_55769);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55770);

var G__55771 = seq__55762_55766;
var G__55772 = chunk__55763_55767;
var G__55773 = count__55764_55768;
var G__55774 = (i__55765_55769 + (1));
seq__55762_55766 = G__55771;
chunk__55763_55767 = G__55772;
count__55764_55768 = G__55773;
i__55765_55769 = G__55774;
continue;
} else {
var temp__5457__auto___55775 = cljs.core.seq.call(null,seq__55762_55766);
if(temp__5457__auto___55775){
var seq__55762_55776__$1 = temp__5457__auto___55775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55762_55776__$1)){
var c__42343__auto___55777 = cljs.core.chunk_first.call(null,seq__55762_55776__$1);
var G__55778 = cljs.core.chunk_rest.call(null,seq__55762_55776__$1);
var G__55779 = c__42343__auto___55777;
var G__55780 = cljs.core.count.call(null,c__42343__auto___55777);
var G__55781 = (0);
seq__55762_55766 = G__55778;
chunk__55763_55767 = G__55779;
count__55764_55768 = G__55780;
i__55765_55769 = G__55781;
continue;
} else {
var msg_55782 = cljs.core.first.call(null,seq__55762_55776__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55782);

var G__55783 = cljs.core.next.call(null,seq__55762_55776__$1);
var G__55784 = null;
var G__55785 = (0);
var G__55786 = (0);
seq__55762_55766 = G__55783;
chunk__55763_55767 = G__55784;
count__55764_55768 = G__55785;
i__55765_55769 = G__55786;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__55787){
var map__55788 = p__55787;
var map__55788__$1 = ((((!((map__55788 == null)))?((((map__55788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55788):map__55788);
var w = map__55788__$1;
var message = cljs.core.get.call(null,map__55788__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/js/compiled/dev/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/js/compiled/dev/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__41400__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__41400__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__41400__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__55790 = cljs.core.seq.call(null,plugins);
var chunk__55791 = null;
var count__55792 = (0);
var i__55793 = (0);
while(true){
if((i__55793 < count__55792)){
var vec__55794 = cljs.core._nth.call(null,chunk__55791,i__55793);
var k = cljs.core.nth.call(null,vec__55794,(0),null);
var plugin = cljs.core.nth.call(null,vec__55794,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55800 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55790,chunk__55791,count__55792,i__55793,pl_55800,vec__55794,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_55800.call(null,msg_hist);
});})(seq__55790,chunk__55791,count__55792,i__55793,pl_55800,vec__55794,k,plugin))
);
} else {
}

var G__55801 = seq__55790;
var G__55802 = chunk__55791;
var G__55803 = count__55792;
var G__55804 = (i__55793 + (1));
seq__55790 = G__55801;
chunk__55791 = G__55802;
count__55792 = G__55803;
i__55793 = G__55804;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__55790);
if(temp__5457__auto__){
var seq__55790__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55790__$1)){
var c__42343__auto__ = cljs.core.chunk_first.call(null,seq__55790__$1);
var G__55805 = cljs.core.chunk_rest.call(null,seq__55790__$1);
var G__55806 = c__42343__auto__;
var G__55807 = cljs.core.count.call(null,c__42343__auto__);
var G__55808 = (0);
seq__55790 = G__55805;
chunk__55791 = G__55806;
count__55792 = G__55807;
i__55793 = G__55808;
continue;
} else {
var vec__55797 = cljs.core.first.call(null,seq__55790__$1);
var k = cljs.core.nth.call(null,vec__55797,(0),null);
var plugin = cljs.core.nth.call(null,vec__55797,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55809 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55790,chunk__55791,count__55792,i__55793,pl_55809,vec__55797,k,plugin,seq__55790__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_55809.call(null,msg_hist);
});})(seq__55790,chunk__55791,count__55792,i__55793,pl_55809,vec__55797,k,plugin,seq__55790__$1,temp__5457__auto__))
);
} else {
}

var G__55810 = cljs.core.next.call(null,seq__55790__$1);
var G__55811 = null;
var G__55812 = (0);
var G__55813 = (0);
seq__55790 = G__55810;
chunk__55791 = G__55811;
count__55792 = G__55812;
i__55793 = G__55813;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__55815 = arguments.length;
switch (G__55815) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__55816_55821 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__55817_55822 = null;
var count__55818_55823 = (0);
var i__55819_55824 = (0);
while(true){
if((i__55819_55824 < count__55818_55823)){
var msg_55825 = cljs.core._nth.call(null,chunk__55817_55822,i__55819_55824);
figwheel.client.socket.handle_incoming_message.call(null,msg_55825);

var G__55826 = seq__55816_55821;
var G__55827 = chunk__55817_55822;
var G__55828 = count__55818_55823;
var G__55829 = (i__55819_55824 + (1));
seq__55816_55821 = G__55826;
chunk__55817_55822 = G__55827;
count__55818_55823 = G__55828;
i__55819_55824 = G__55829;
continue;
} else {
var temp__5457__auto___55830 = cljs.core.seq.call(null,seq__55816_55821);
if(temp__5457__auto___55830){
var seq__55816_55831__$1 = temp__5457__auto___55830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55816_55831__$1)){
var c__42343__auto___55832 = cljs.core.chunk_first.call(null,seq__55816_55831__$1);
var G__55833 = cljs.core.chunk_rest.call(null,seq__55816_55831__$1);
var G__55834 = c__42343__auto___55832;
var G__55835 = cljs.core.count.call(null,c__42343__auto___55832);
var G__55836 = (0);
seq__55816_55821 = G__55833;
chunk__55817_55822 = G__55834;
count__55818_55823 = G__55835;
i__55819_55824 = G__55836;
continue;
} else {
var msg_55837 = cljs.core.first.call(null,seq__55816_55831__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_55837);

var G__55838 = cljs.core.next.call(null,seq__55816_55831__$1);
var G__55839 = null;
var G__55840 = (0);
var G__55841 = (0);
seq__55816_55821 = G__55838;
chunk__55817_55822 = G__55839;
count__55818_55823 = G__55840;
i__55819_55824 = G__55841;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__42698__auto__ = [];
var len__42691__auto___55846 = arguments.length;
var i__42692__auto___55847 = (0);
while(true){
if((i__42692__auto___55847 < len__42691__auto___55846)){
args__42698__auto__.push((arguments[i__42692__auto___55847]));

var G__55848 = (i__42692__auto___55847 + (1));
i__42692__auto___55847 = G__55848;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__55843){
var map__55844 = p__55843;
var map__55844__$1 = ((((!((map__55844 == null)))?((((map__55844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55844.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55844):map__55844);
var opts = map__55844__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq55842){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55842));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e55849){if((e55849 instanceof Error)){
var e = e55849;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e55849;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__55850){
var map__55851 = p__55850;
var map__55851__$1 = ((((!((map__55851 == null)))?((((map__55851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55851):map__55851);
var msg_name = cljs.core.get.call(null,map__55851__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1516433050782
