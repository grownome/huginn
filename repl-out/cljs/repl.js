// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__64284){
var map__64285 = p__64284;
var map__64285__$1 = ((((!((map__64285 == null)))?((((map__64285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64285.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64285):map__64285);
var m = map__64285__$1;
var n = cljs.core.get.call(null,map__64285__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__64285__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__64287_64309 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__64288_64310 = null;
var count__64289_64311 = (0);
var i__64290_64312 = (0);
while(true){
if((i__64290_64312 < count__64289_64311)){
var f_64313 = cljs.core._nth.call(null,chunk__64288_64310,i__64290_64312);
cljs.core.println.call(null,"  ",f_64313);

var G__64314 = seq__64287_64309;
var G__64315 = chunk__64288_64310;
var G__64316 = count__64289_64311;
var G__64317 = (i__64290_64312 + (1));
seq__64287_64309 = G__64314;
chunk__64288_64310 = G__64315;
count__64289_64311 = G__64316;
i__64290_64312 = G__64317;
continue;
} else {
var temp__5457__auto___64318 = cljs.core.seq.call(null,seq__64287_64309);
if(temp__5457__auto___64318){
var seq__64287_64319__$1 = temp__5457__auto___64318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64287_64319__$1)){
var c__22133__auto___64320 = cljs.core.chunk_first.call(null,seq__64287_64319__$1);
var G__64321 = cljs.core.chunk_rest.call(null,seq__64287_64319__$1);
var G__64322 = c__22133__auto___64320;
var G__64323 = cljs.core.count.call(null,c__22133__auto___64320);
var G__64324 = (0);
seq__64287_64309 = G__64321;
chunk__64288_64310 = G__64322;
count__64289_64311 = G__64323;
i__64290_64312 = G__64324;
continue;
} else {
var f_64325 = cljs.core.first.call(null,seq__64287_64319__$1);
cljs.core.println.call(null,"  ",f_64325);

var G__64326 = cljs.core.next.call(null,seq__64287_64319__$1);
var G__64327 = null;
var G__64328 = (0);
var G__64329 = (0);
seq__64287_64309 = G__64326;
chunk__64288_64310 = G__64327;
count__64289_64311 = G__64328;
i__64290_64312 = G__64329;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_64330 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21202__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21202__auto__)){
return or__21202__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_64330);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_64330)))?cljs.core.second.call(null,arglists_64330):arglists_64330));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__64291_64331 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__64292_64332 = null;
var count__64293_64333 = (0);
var i__64294_64334 = (0);
while(true){
if((i__64294_64334 < count__64293_64333)){
var vec__64295_64335 = cljs.core._nth.call(null,chunk__64292_64332,i__64294_64334);
var name_64336 = cljs.core.nth.call(null,vec__64295_64335,(0),null);
var map__64298_64337 = cljs.core.nth.call(null,vec__64295_64335,(1),null);
var map__64298_64338__$1 = ((((!((map__64298_64337 == null)))?((((map__64298_64337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64298_64337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64298_64337):map__64298_64337);
var doc_64339 = cljs.core.get.call(null,map__64298_64338__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_64340 = cljs.core.get.call(null,map__64298_64338__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_64336);

cljs.core.println.call(null," ",arglists_64340);

if(cljs.core.truth_(doc_64339)){
cljs.core.println.call(null," ",doc_64339);
} else {
}

var G__64341 = seq__64291_64331;
var G__64342 = chunk__64292_64332;
var G__64343 = count__64293_64333;
var G__64344 = (i__64294_64334 + (1));
seq__64291_64331 = G__64341;
chunk__64292_64332 = G__64342;
count__64293_64333 = G__64343;
i__64294_64334 = G__64344;
continue;
} else {
var temp__5457__auto___64345 = cljs.core.seq.call(null,seq__64291_64331);
if(temp__5457__auto___64345){
var seq__64291_64346__$1 = temp__5457__auto___64345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64291_64346__$1)){
var c__22133__auto___64347 = cljs.core.chunk_first.call(null,seq__64291_64346__$1);
var G__64348 = cljs.core.chunk_rest.call(null,seq__64291_64346__$1);
var G__64349 = c__22133__auto___64347;
var G__64350 = cljs.core.count.call(null,c__22133__auto___64347);
var G__64351 = (0);
seq__64291_64331 = G__64348;
chunk__64292_64332 = G__64349;
count__64293_64333 = G__64350;
i__64294_64334 = G__64351;
continue;
} else {
var vec__64300_64352 = cljs.core.first.call(null,seq__64291_64346__$1);
var name_64353 = cljs.core.nth.call(null,vec__64300_64352,(0),null);
var map__64303_64354 = cljs.core.nth.call(null,vec__64300_64352,(1),null);
var map__64303_64355__$1 = ((((!((map__64303_64354 == null)))?((((map__64303_64354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64303_64354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64303_64354):map__64303_64354);
var doc_64356 = cljs.core.get.call(null,map__64303_64355__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_64357 = cljs.core.get.call(null,map__64303_64355__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_64353);

cljs.core.println.call(null," ",arglists_64357);

if(cljs.core.truth_(doc_64356)){
cljs.core.println.call(null," ",doc_64356);
} else {
}

var G__64358 = cljs.core.next.call(null,seq__64291_64346__$1);
var G__64359 = null;
var G__64360 = (0);
var G__64361 = (0);
seq__64291_64331 = G__64358;
chunk__64292_64332 = G__64359;
count__64293_64333 = G__64360;
i__64294_64334 = G__64361;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__64305 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__64306 = null;
var count__64307 = (0);
var i__64308 = (0);
while(true){
if((i__64308 < count__64307)){
var role = cljs.core._nth.call(null,chunk__64306,i__64308);
var temp__5457__auto___64362__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___64362__$1)){
var spec_64363 = temp__5457__auto___64362__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_64363));
} else {
}

var G__64364 = seq__64305;
var G__64365 = chunk__64306;
var G__64366 = count__64307;
var G__64367 = (i__64308 + (1));
seq__64305 = G__64364;
chunk__64306 = G__64365;
count__64307 = G__64366;
i__64308 = G__64367;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__64305);
if(temp__5457__auto____$1){
var seq__64305__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64305__$1)){
var c__22133__auto__ = cljs.core.chunk_first.call(null,seq__64305__$1);
var G__64368 = cljs.core.chunk_rest.call(null,seq__64305__$1);
var G__64369 = c__22133__auto__;
var G__64370 = cljs.core.count.call(null,c__22133__auto__);
var G__64371 = (0);
seq__64305 = G__64368;
chunk__64306 = G__64369;
count__64307 = G__64370;
i__64308 = G__64371;
continue;
} else {
var role = cljs.core.first.call(null,seq__64305__$1);
var temp__5457__auto___64372__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___64372__$2)){
var spec_64373 = temp__5457__auto___64372__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_64373));
} else {
}

var G__64374 = cljs.core.next.call(null,seq__64305__$1);
var G__64375 = null;
var G__64376 = (0);
var G__64377 = (0);
seq__64305 = G__64374;
chunk__64306 = G__64375;
count__64307 = G__64376;
i__64308 = G__64377;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
