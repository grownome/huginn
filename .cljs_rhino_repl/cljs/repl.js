// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22956){
var map__22957 = p__22956;
var map__22957__$1 = ((((!((map__22957 == null)))?((((map__22957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22957):map__22957);
var m = map__22957__$1;
var n = cljs.core.get.call(null,map__22957__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__22957__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__22959_22981 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22960_22982 = null;
var count__22961_22983 = (0);
var i__22962_22984 = (0);
while(true){
if((i__22962_22984 < count__22961_22983)){
var f_22985 = cljs.core._nth.call(null,chunk__22960_22982,i__22962_22984);
cljs.core.println.call(null,"  ",f_22985);

var G__22986 = seq__22959_22981;
var G__22987 = chunk__22960_22982;
var G__22988 = count__22961_22983;
var G__22989 = (i__22962_22984 + (1));
seq__22959_22981 = G__22986;
chunk__22960_22982 = G__22987;
count__22961_22983 = G__22988;
i__22962_22984 = G__22989;
continue;
} else {
var temp__5457__auto___22990 = cljs.core.seq.call(null,seq__22959_22981);
if(temp__5457__auto___22990){
var seq__22959_22991__$1 = temp__5457__auto___22990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22959_22991__$1)){
var c__20824__auto___22992 = cljs.core.chunk_first.call(null,seq__22959_22991__$1);
var G__22993 = cljs.core.chunk_rest.call(null,seq__22959_22991__$1);
var G__22994 = c__20824__auto___22992;
var G__22995 = cljs.core.count.call(null,c__20824__auto___22992);
var G__22996 = (0);
seq__22959_22981 = G__22993;
chunk__22960_22982 = G__22994;
count__22961_22983 = G__22995;
i__22962_22984 = G__22996;
continue;
} else {
var f_22997 = cljs.core.first.call(null,seq__22959_22991__$1);
cljs.core.println.call(null,"  ",f_22997);

var G__22998 = cljs.core.next.call(null,seq__22959_22991__$1);
var G__22999 = null;
var G__23000 = (0);
var G__23001 = (0);
seq__22959_22981 = G__22998;
chunk__22960_22982 = G__22999;
count__22961_22983 = G__23000;
i__22962_22984 = G__23001;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23002 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19893__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19893__auto__)){
return or__19893__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23002);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23002)))?cljs.core.second.call(null,arglists_23002):arglists_23002));
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
var seq__22963_23003 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22964_23004 = null;
var count__22965_23005 = (0);
var i__22966_23006 = (0);
while(true){
if((i__22966_23006 < count__22965_23005)){
var vec__22967_23007 = cljs.core._nth.call(null,chunk__22964_23004,i__22966_23006);
var name_23008 = cljs.core.nth.call(null,vec__22967_23007,(0),null);
var map__22970_23009 = cljs.core.nth.call(null,vec__22967_23007,(1),null);
var map__22970_23010__$1 = ((((!((map__22970_23009 == null)))?((((map__22970_23009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22970_23009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22970_23009):map__22970_23009);
var doc_23011 = cljs.core.get.call(null,map__22970_23010__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23012 = cljs.core.get.call(null,map__22970_23010__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23008);

cljs.core.println.call(null," ",arglists_23012);

if(cljs.core.truth_(doc_23011)){
cljs.core.println.call(null," ",doc_23011);
} else {
}

var G__23013 = seq__22963_23003;
var G__23014 = chunk__22964_23004;
var G__23015 = count__22965_23005;
var G__23016 = (i__22966_23006 + (1));
seq__22963_23003 = G__23013;
chunk__22964_23004 = G__23014;
count__22965_23005 = G__23015;
i__22966_23006 = G__23016;
continue;
} else {
var temp__5457__auto___23017 = cljs.core.seq.call(null,seq__22963_23003);
if(temp__5457__auto___23017){
var seq__22963_23018__$1 = temp__5457__auto___23017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22963_23018__$1)){
var c__20824__auto___23019 = cljs.core.chunk_first.call(null,seq__22963_23018__$1);
var G__23020 = cljs.core.chunk_rest.call(null,seq__22963_23018__$1);
var G__23021 = c__20824__auto___23019;
var G__23022 = cljs.core.count.call(null,c__20824__auto___23019);
var G__23023 = (0);
seq__22963_23003 = G__23020;
chunk__22964_23004 = G__23021;
count__22965_23005 = G__23022;
i__22966_23006 = G__23023;
continue;
} else {
var vec__22972_23024 = cljs.core.first.call(null,seq__22963_23018__$1);
var name_23025 = cljs.core.nth.call(null,vec__22972_23024,(0),null);
var map__22975_23026 = cljs.core.nth.call(null,vec__22972_23024,(1),null);
var map__22975_23027__$1 = ((((!((map__22975_23026 == null)))?((((map__22975_23026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22975_23026.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22975_23026):map__22975_23026);
var doc_23028 = cljs.core.get.call(null,map__22975_23027__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23029 = cljs.core.get.call(null,map__22975_23027__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23025);

cljs.core.println.call(null," ",arglists_23029);

if(cljs.core.truth_(doc_23028)){
cljs.core.println.call(null," ",doc_23028);
} else {
}

var G__23030 = cljs.core.next.call(null,seq__22963_23018__$1);
var G__23031 = null;
var G__23032 = (0);
var G__23033 = (0);
seq__22963_23003 = G__23030;
chunk__22964_23004 = G__23031;
count__22965_23005 = G__23032;
i__22966_23006 = G__23033;
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

var seq__22977 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22978 = null;
var count__22979 = (0);
var i__22980 = (0);
while(true){
if((i__22980 < count__22979)){
var role = cljs.core._nth.call(null,chunk__22978,i__22980);
var temp__5457__auto___23034__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___23034__$1)){
var spec_23035 = temp__5457__auto___23034__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23035));
} else {
}

var G__23036 = seq__22977;
var G__23037 = chunk__22978;
var G__23038 = count__22979;
var G__23039 = (i__22980 + (1));
seq__22977 = G__23036;
chunk__22978 = G__23037;
count__22979 = G__23038;
i__22980 = G__23039;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__22977);
if(temp__5457__auto____$1){
var seq__22977__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22977__$1)){
var c__20824__auto__ = cljs.core.chunk_first.call(null,seq__22977__$1);
var G__23040 = cljs.core.chunk_rest.call(null,seq__22977__$1);
var G__23041 = c__20824__auto__;
var G__23042 = cljs.core.count.call(null,c__20824__auto__);
var G__23043 = (0);
seq__22977 = G__23040;
chunk__22978 = G__23041;
count__22979 = G__23042;
i__22980 = G__23043;
continue;
} else {
var role = cljs.core.first.call(null,seq__22977__$1);
var temp__5457__auto___23044__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___23044__$2)){
var spec_23045 = temp__5457__auto___23044__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23045));
} else {
}

var G__23046 = cljs.core.next.call(null,seq__22977__$1);
var G__23047 = null;
var G__23048 = (0);
var G__23049 = (0);
seq__22977 = G__23046;
chunk__22978 = G__23047;
count__22979 = G__23048;
i__22980 = G__23049;
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
