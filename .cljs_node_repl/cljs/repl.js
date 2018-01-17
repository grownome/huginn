// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23076){
var map__23077 = p__23076;
var map__23077__$1 = ((((!((map__23077 == null)))?((((map__23077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23077):map__23077);
var m = map__23077__$1;
var n = cljs.core.get.call(null,map__23077__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__23077__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__23079_23101 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23080_23102 = null;
var count__23081_23103 = (0);
var i__23082_23104 = (0);
while(true){
if((i__23082_23104 < count__23081_23103)){
var f_23105 = cljs.core._nth.call(null,chunk__23080_23102,i__23082_23104);
cljs.core.println.call(null,"  ",f_23105);

var G__23106 = seq__23079_23101;
var G__23107 = chunk__23080_23102;
var G__23108 = count__23081_23103;
var G__23109 = (i__23082_23104 + (1));
seq__23079_23101 = G__23106;
chunk__23080_23102 = G__23107;
count__23081_23103 = G__23108;
i__23082_23104 = G__23109;
continue;
} else {
var temp__5457__auto___23110 = cljs.core.seq.call(null,seq__23079_23101);
if(temp__5457__auto___23110){
var seq__23079_23111__$1 = temp__5457__auto___23110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23079_23111__$1)){
var c__21855__auto___23112 = cljs.core.chunk_first.call(null,seq__23079_23111__$1);
var G__23113 = cljs.core.chunk_rest.call(null,seq__23079_23111__$1);
var G__23114 = c__21855__auto___23112;
var G__23115 = cljs.core.count.call(null,c__21855__auto___23112);
var G__23116 = (0);
seq__23079_23101 = G__23113;
chunk__23080_23102 = G__23114;
count__23081_23103 = G__23115;
i__23082_23104 = G__23116;
continue;
} else {
var f_23117 = cljs.core.first.call(null,seq__23079_23111__$1);
cljs.core.println.call(null,"  ",f_23117);

var G__23118 = cljs.core.next.call(null,seq__23079_23111__$1);
var G__23119 = null;
var G__23120 = (0);
var G__23121 = (0);
seq__23079_23101 = G__23118;
chunk__23080_23102 = G__23119;
count__23081_23103 = G__23120;
i__23082_23104 = G__23121;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23122 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20924__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20924__auto__)){
return or__20924__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23122);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23122)))?cljs.core.second.call(null,arglists_23122):arglists_23122));
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
var seq__23083_23123 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23084_23124 = null;
var count__23085_23125 = (0);
var i__23086_23126 = (0);
while(true){
if((i__23086_23126 < count__23085_23125)){
var vec__23087_23127 = cljs.core._nth.call(null,chunk__23084_23124,i__23086_23126);
var name_23128 = cljs.core.nth.call(null,vec__23087_23127,(0),null);
var map__23090_23129 = cljs.core.nth.call(null,vec__23087_23127,(1),null);
var map__23090_23130__$1 = ((((!((map__23090_23129 == null)))?((((map__23090_23129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23090_23129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23090_23129):map__23090_23129);
var doc_23131 = cljs.core.get.call(null,map__23090_23130__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23132 = cljs.core.get.call(null,map__23090_23130__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23128);

cljs.core.println.call(null," ",arglists_23132);

if(cljs.core.truth_(doc_23131)){
cljs.core.println.call(null," ",doc_23131);
} else {
}

var G__23133 = seq__23083_23123;
var G__23134 = chunk__23084_23124;
var G__23135 = count__23085_23125;
var G__23136 = (i__23086_23126 + (1));
seq__23083_23123 = G__23133;
chunk__23084_23124 = G__23134;
count__23085_23125 = G__23135;
i__23086_23126 = G__23136;
continue;
} else {
var temp__5457__auto___23137 = cljs.core.seq.call(null,seq__23083_23123);
if(temp__5457__auto___23137){
var seq__23083_23138__$1 = temp__5457__auto___23137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23083_23138__$1)){
var c__21855__auto___23139 = cljs.core.chunk_first.call(null,seq__23083_23138__$1);
var G__23140 = cljs.core.chunk_rest.call(null,seq__23083_23138__$1);
var G__23141 = c__21855__auto___23139;
var G__23142 = cljs.core.count.call(null,c__21855__auto___23139);
var G__23143 = (0);
seq__23083_23123 = G__23140;
chunk__23084_23124 = G__23141;
count__23085_23125 = G__23142;
i__23086_23126 = G__23143;
continue;
} else {
var vec__23092_23144 = cljs.core.first.call(null,seq__23083_23138__$1);
var name_23145 = cljs.core.nth.call(null,vec__23092_23144,(0),null);
var map__23095_23146 = cljs.core.nth.call(null,vec__23092_23144,(1),null);
var map__23095_23147__$1 = ((((!((map__23095_23146 == null)))?((((map__23095_23146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23095_23146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23095_23146):map__23095_23146);
var doc_23148 = cljs.core.get.call(null,map__23095_23147__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23149 = cljs.core.get.call(null,map__23095_23147__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23145);

cljs.core.println.call(null," ",arglists_23149);

if(cljs.core.truth_(doc_23148)){
cljs.core.println.call(null," ",doc_23148);
} else {
}

var G__23150 = cljs.core.next.call(null,seq__23083_23138__$1);
var G__23151 = null;
var G__23152 = (0);
var G__23153 = (0);
seq__23083_23123 = G__23150;
chunk__23084_23124 = G__23151;
count__23085_23125 = G__23152;
i__23086_23126 = G__23153;
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

var seq__23097 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__23098 = null;
var count__23099 = (0);
var i__23100 = (0);
while(true){
if((i__23100 < count__23099)){
var role = cljs.core._nth.call(null,chunk__23098,i__23100);
var temp__5457__auto___23154__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___23154__$1)){
var spec_23155 = temp__5457__auto___23154__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23155));
} else {
}

var G__23156 = seq__23097;
var G__23157 = chunk__23098;
var G__23158 = count__23099;
var G__23159 = (i__23100 + (1));
seq__23097 = G__23156;
chunk__23098 = G__23157;
count__23099 = G__23158;
i__23100 = G__23159;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__23097);
if(temp__5457__auto____$1){
var seq__23097__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23097__$1)){
var c__21855__auto__ = cljs.core.chunk_first.call(null,seq__23097__$1);
var G__23160 = cljs.core.chunk_rest.call(null,seq__23097__$1);
var G__23161 = c__21855__auto__;
var G__23162 = cljs.core.count.call(null,c__21855__auto__);
var G__23163 = (0);
seq__23097 = G__23160;
chunk__23098 = G__23161;
count__23099 = G__23162;
i__23100 = G__23163;
continue;
} else {
var role = cljs.core.first.call(null,seq__23097__$1);
var temp__5457__auto___23164__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___23164__$2)){
var spec_23165 = temp__5457__auto___23164__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23165));
} else {
}

var G__23166 = cljs.core.next.call(null,seq__23097__$1);
var G__23167 = null;
var G__23168 = (0);
var G__23169 = (0);
seq__23097 = G__23166;
chunk__23098 = G__23167;
count__23099 = G__23168;
i__23100 = G__23169;
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
