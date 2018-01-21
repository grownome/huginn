// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__55083){
var map__55084 = p__55083;
var map__55084__$1 = ((((!((map__55084 == null)))?((((map__55084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55084):map__55084);
var m = map__55084__$1;
var n = cljs.core.get.call(null,map__55084__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__55084__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__55086_55108 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55087_55109 = null;
var count__55088_55110 = (0);
var i__55089_55111 = (0);
while(true){
if((i__55089_55111 < count__55088_55110)){
var f_55112 = cljs.core._nth.call(null,chunk__55087_55109,i__55089_55111);
cljs.core.println.call(null,"  ",f_55112);

var G__55113 = seq__55086_55108;
var G__55114 = chunk__55087_55109;
var G__55115 = count__55088_55110;
var G__55116 = (i__55089_55111 + (1));
seq__55086_55108 = G__55113;
chunk__55087_55109 = G__55114;
count__55088_55110 = G__55115;
i__55089_55111 = G__55116;
continue;
} else {
var temp__5457__auto___55117 = cljs.core.seq.call(null,seq__55086_55108);
if(temp__5457__auto___55117){
var seq__55086_55118__$1 = temp__5457__auto___55117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55086_55118__$1)){
var c__42343__auto___55119 = cljs.core.chunk_first.call(null,seq__55086_55118__$1);
var G__55120 = cljs.core.chunk_rest.call(null,seq__55086_55118__$1);
var G__55121 = c__42343__auto___55119;
var G__55122 = cljs.core.count.call(null,c__42343__auto___55119);
var G__55123 = (0);
seq__55086_55108 = G__55120;
chunk__55087_55109 = G__55121;
count__55088_55110 = G__55122;
i__55089_55111 = G__55123;
continue;
} else {
var f_55124 = cljs.core.first.call(null,seq__55086_55118__$1);
cljs.core.println.call(null,"  ",f_55124);

var G__55125 = cljs.core.next.call(null,seq__55086_55118__$1);
var G__55126 = null;
var G__55127 = (0);
var G__55128 = (0);
seq__55086_55108 = G__55125;
chunk__55087_55109 = G__55126;
count__55088_55110 = G__55127;
i__55089_55111 = G__55128;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_55129 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__41412__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__41412__auto__)){
return or__41412__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_55129);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_55129)))?cljs.core.second.call(null,arglists_55129):arglists_55129));
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
var seq__55090_55130 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__55091_55131 = null;
var count__55092_55132 = (0);
var i__55093_55133 = (0);
while(true){
if((i__55093_55133 < count__55092_55132)){
var vec__55094_55134 = cljs.core._nth.call(null,chunk__55091_55131,i__55093_55133);
var name_55135 = cljs.core.nth.call(null,vec__55094_55134,(0),null);
var map__55097_55136 = cljs.core.nth.call(null,vec__55094_55134,(1),null);
var map__55097_55137__$1 = ((((!((map__55097_55136 == null)))?((((map__55097_55136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55097_55136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55097_55136):map__55097_55136);
var doc_55138 = cljs.core.get.call(null,map__55097_55137__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_55139 = cljs.core.get.call(null,map__55097_55137__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_55135);

cljs.core.println.call(null," ",arglists_55139);

if(cljs.core.truth_(doc_55138)){
cljs.core.println.call(null," ",doc_55138);
} else {
}

var G__55140 = seq__55090_55130;
var G__55141 = chunk__55091_55131;
var G__55142 = count__55092_55132;
var G__55143 = (i__55093_55133 + (1));
seq__55090_55130 = G__55140;
chunk__55091_55131 = G__55141;
count__55092_55132 = G__55142;
i__55093_55133 = G__55143;
continue;
} else {
var temp__5457__auto___55144 = cljs.core.seq.call(null,seq__55090_55130);
if(temp__5457__auto___55144){
var seq__55090_55145__$1 = temp__5457__auto___55144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55090_55145__$1)){
var c__42343__auto___55146 = cljs.core.chunk_first.call(null,seq__55090_55145__$1);
var G__55147 = cljs.core.chunk_rest.call(null,seq__55090_55145__$1);
var G__55148 = c__42343__auto___55146;
var G__55149 = cljs.core.count.call(null,c__42343__auto___55146);
var G__55150 = (0);
seq__55090_55130 = G__55147;
chunk__55091_55131 = G__55148;
count__55092_55132 = G__55149;
i__55093_55133 = G__55150;
continue;
} else {
var vec__55099_55151 = cljs.core.first.call(null,seq__55090_55145__$1);
var name_55152 = cljs.core.nth.call(null,vec__55099_55151,(0),null);
var map__55102_55153 = cljs.core.nth.call(null,vec__55099_55151,(1),null);
var map__55102_55154__$1 = ((((!((map__55102_55153 == null)))?((((map__55102_55153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55102_55153.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55102_55153):map__55102_55153);
var doc_55155 = cljs.core.get.call(null,map__55102_55154__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_55156 = cljs.core.get.call(null,map__55102_55154__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_55152);

cljs.core.println.call(null," ",arglists_55156);

if(cljs.core.truth_(doc_55155)){
cljs.core.println.call(null," ",doc_55155);
} else {
}

var G__55157 = cljs.core.next.call(null,seq__55090_55145__$1);
var G__55158 = null;
var G__55159 = (0);
var G__55160 = (0);
seq__55090_55130 = G__55157;
chunk__55091_55131 = G__55158;
count__55092_55132 = G__55159;
i__55093_55133 = G__55160;
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

var seq__55104 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__55105 = null;
var count__55106 = (0);
var i__55107 = (0);
while(true){
if((i__55107 < count__55106)){
var role = cljs.core._nth.call(null,chunk__55105,i__55107);
var temp__5457__auto___55161__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___55161__$1)){
var spec_55162 = temp__5457__auto___55161__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_55162));
} else {
}

var G__55163 = seq__55104;
var G__55164 = chunk__55105;
var G__55165 = count__55106;
var G__55166 = (i__55107 + (1));
seq__55104 = G__55163;
chunk__55105 = G__55164;
count__55106 = G__55165;
i__55107 = G__55166;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__55104);
if(temp__5457__auto____$1){
var seq__55104__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55104__$1)){
var c__42343__auto__ = cljs.core.chunk_first.call(null,seq__55104__$1);
var G__55167 = cljs.core.chunk_rest.call(null,seq__55104__$1);
var G__55168 = c__42343__auto__;
var G__55169 = cljs.core.count.call(null,c__42343__auto__);
var G__55170 = (0);
seq__55104 = G__55167;
chunk__55105 = G__55168;
count__55106 = G__55169;
i__55107 = G__55170;
continue;
} else {
var role = cljs.core.first.call(null,seq__55104__$1);
var temp__5457__auto___55171__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___55171__$2)){
var spec_55172 = temp__5457__auto___55171__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_55172));
} else {
}

var G__55173 = cljs.core.next.call(null,seq__55104__$1);
var G__55174 = null;
var G__55175 = (0);
var G__55176 = (0);
seq__55104 = G__55173;
chunk__55105 = G__55174;
count__55106 = G__55175;
i__55107 = G__55176;
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

//# sourceMappingURL=repl.js.map?rel=1516433050376
