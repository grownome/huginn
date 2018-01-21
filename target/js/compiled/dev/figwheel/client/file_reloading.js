// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__41412__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__41412__auto__){
return or__41412__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__41412__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__41412__auto__)){
return or__41412__auto__;
} else {
var or__41412__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__41412__auto____$1)){
return or__41412__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__53337_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__53337_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__53338 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__53339 = null;
var count__53340 = (0);
var i__53341 = (0);
while(true){
if((i__53341 < count__53340)){
var n = cljs.core._nth.call(null,chunk__53339,i__53341);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__53342 = seq__53338;
var G__53343 = chunk__53339;
var G__53344 = count__53340;
var G__53345 = (i__53341 + (1));
seq__53338 = G__53342;
chunk__53339 = G__53343;
count__53340 = G__53344;
i__53341 = G__53345;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__53338);
if(temp__5457__auto__){
var seq__53338__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53338__$1)){
var c__42343__auto__ = cljs.core.chunk_first.call(null,seq__53338__$1);
var G__53346 = cljs.core.chunk_rest.call(null,seq__53338__$1);
var G__53347 = c__42343__auto__;
var G__53348 = cljs.core.count.call(null,c__42343__auto__);
var G__53349 = (0);
seq__53338 = G__53346;
chunk__53339 = G__53347;
count__53340 = G__53348;
i__53341 = G__53349;
continue;
} else {
var n = cljs.core.first.call(null,seq__53338__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__53350 = cljs.core.next.call(null,seq__53338__$1);
var G__53351 = null;
var G__53352 = (0);
var G__53353 = (0);
seq__53338 = G__53350;
chunk__53339 = G__53351;
count__53340 = G__53352;
i__53341 = G__53353;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__53363_53371 = cljs.core.seq.call(null,deps);
var chunk__53364_53372 = null;
var count__53365_53373 = (0);
var i__53366_53374 = (0);
while(true){
if((i__53366_53374 < count__53365_53373)){
var dep_53375 = cljs.core._nth.call(null,chunk__53364_53372,i__53366_53374);
topo_sort_helper_STAR_.call(null,dep_53375,(depth + (1)),state);

var G__53376 = seq__53363_53371;
var G__53377 = chunk__53364_53372;
var G__53378 = count__53365_53373;
var G__53379 = (i__53366_53374 + (1));
seq__53363_53371 = G__53376;
chunk__53364_53372 = G__53377;
count__53365_53373 = G__53378;
i__53366_53374 = G__53379;
continue;
} else {
var temp__5457__auto___53380 = cljs.core.seq.call(null,seq__53363_53371);
if(temp__5457__auto___53380){
var seq__53363_53381__$1 = temp__5457__auto___53380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53363_53381__$1)){
var c__42343__auto___53382 = cljs.core.chunk_first.call(null,seq__53363_53381__$1);
var G__53383 = cljs.core.chunk_rest.call(null,seq__53363_53381__$1);
var G__53384 = c__42343__auto___53382;
var G__53385 = cljs.core.count.call(null,c__42343__auto___53382);
var G__53386 = (0);
seq__53363_53371 = G__53383;
chunk__53364_53372 = G__53384;
count__53365_53373 = G__53385;
i__53366_53374 = G__53386;
continue;
} else {
var dep_53387 = cljs.core.first.call(null,seq__53363_53381__$1);
topo_sort_helper_STAR_.call(null,dep_53387,(depth + (1)),state);

var G__53388 = cljs.core.next.call(null,seq__53363_53381__$1);
var G__53389 = null;
var G__53390 = (0);
var G__53391 = (0);
seq__53363_53371 = G__53388;
chunk__53364_53372 = G__53389;
count__53365_53373 = G__53390;
i__53366_53374 = G__53391;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__53367){
var vec__53368 = p__53367;
var seq__53369 = cljs.core.seq.call(null,vec__53368);
var first__53370 = cljs.core.first.call(null,seq__53369);
var seq__53369__$1 = cljs.core.next.call(null,seq__53369);
var x = first__53370;
var xs = seq__53369__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__53368,seq__53369,first__53370,seq__53369__$1,x,xs,get_deps__$1){
return (function (p1__53354_SHARP_){
return clojure.set.difference.call(null,p1__53354_SHARP_,x);
});})(vec__53368,seq__53369,first__53370,seq__53369__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__53392 = cljs.core.seq.call(null,provides);
var chunk__53393 = null;
var count__53394 = (0);
var i__53395 = (0);
while(true){
if((i__53395 < count__53394)){
var prov = cljs.core._nth.call(null,chunk__53393,i__53395);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__53396_53404 = cljs.core.seq.call(null,requires);
var chunk__53397_53405 = null;
var count__53398_53406 = (0);
var i__53399_53407 = (0);
while(true){
if((i__53399_53407 < count__53398_53406)){
var req_53408 = cljs.core._nth.call(null,chunk__53397_53405,i__53399_53407);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53408,prov);

var G__53409 = seq__53396_53404;
var G__53410 = chunk__53397_53405;
var G__53411 = count__53398_53406;
var G__53412 = (i__53399_53407 + (1));
seq__53396_53404 = G__53409;
chunk__53397_53405 = G__53410;
count__53398_53406 = G__53411;
i__53399_53407 = G__53412;
continue;
} else {
var temp__5457__auto___53413 = cljs.core.seq.call(null,seq__53396_53404);
if(temp__5457__auto___53413){
var seq__53396_53414__$1 = temp__5457__auto___53413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53396_53414__$1)){
var c__42343__auto___53415 = cljs.core.chunk_first.call(null,seq__53396_53414__$1);
var G__53416 = cljs.core.chunk_rest.call(null,seq__53396_53414__$1);
var G__53417 = c__42343__auto___53415;
var G__53418 = cljs.core.count.call(null,c__42343__auto___53415);
var G__53419 = (0);
seq__53396_53404 = G__53416;
chunk__53397_53405 = G__53417;
count__53398_53406 = G__53418;
i__53399_53407 = G__53419;
continue;
} else {
var req_53420 = cljs.core.first.call(null,seq__53396_53414__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53420,prov);

var G__53421 = cljs.core.next.call(null,seq__53396_53414__$1);
var G__53422 = null;
var G__53423 = (0);
var G__53424 = (0);
seq__53396_53404 = G__53421;
chunk__53397_53405 = G__53422;
count__53398_53406 = G__53423;
i__53399_53407 = G__53424;
continue;
}
} else {
}
}
break;
}

var G__53425 = seq__53392;
var G__53426 = chunk__53393;
var G__53427 = count__53394;
var G__53428 = (i__53395 + (1));
seq__53392 = G__53425;
chunk__53393 = G__53426;
count__53394 = G__53427;
i__53395 = G__53428;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__53392);
if(temp__5457__auto__){
var seq__53392__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53392__$1)){
var c__42343__auto__ = cljs.core.chunk_first.call(null,seq__53392__$1);
var G__53429 = cljs.core.chunk_rest.call(null,seq__53392__$1);
var G__53430 = c__42343__auto__;
var G__53431 = cljs.core.count.call(null,c__42343__auto__);
var G__53432 = (0);
seq__53392 = G__53429;
chunk__53393 = G__53430;
count__53394 = G__53431;
i__53395 = G__53432;
continue;
} else {
var prov = cljs.core.first.call(null,seq__53392__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__53400_53433 = cljs.core.seq.call(null,requires);
var chunk__53401_53434 = null;
var count__53402_53435 = (0);
var i__53403_53436 = (0);
while(true){
if((i__53403_53436 < count__53402_53435)){
var req_53437 = cljs.core._nth.call(null,chunk__53401_53434,i__53403_53436);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53437,prov);

var G__53438 = seq__53400_53433;
var G__53439 = chunk__53401_53434;
var G__53440 = count__53402_53435;
var G__53441 = (i__53403_53436 + (1));
seq__53400_53433 = G__53438;
chunk__53401_53434 = G__53439;
count__53402_53435 = G__53440;
i__53403_53436 = G__53441;
continue;
} else {
var temp__5457__auto___53442__$1 = cljs.core.seq.call(null,seq__53400_53433);
if(temp__5457__auto___53442__$1){
var seq__53400_53443__$1 = temp__5457__auto___53442__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53400_53443__$1)){
var c__42343__auto___53444 = cljs.core.chunk_first.call(null,seq__53400_53443__$1);
var G__53445 = cljs.core.chunk_rest.call(null,seq__53400_53443__$1);
var G__53446 = c__42343__auto___53444;
var G__53447 = cljs.core.count.call(null,c__42343__auto___53444);
var G__53448 = (0);
seq__53400_53433 = G__53445;
chunk__53401_53434 = G__53446;
count__53402_53435 = G__53447;
i__53403_53436 = G__53448;
continue;
} else {
var req_53449 = cljs.core.first.call(null,seq__53400_53443__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53449,prov);

var G__53450 = cljs.core.next.call(null,seq__53400_53443__$1);
var G__53451 = null;
var G__53452 = (0);
var G__53453 = (0);
seq__53400_53433 = G__53450;
chunk__53401_53434 = G__53451;
count__53402_53435 = G__53452;
i__53403_53436 = G__53453;
continue;
}
} else {
}
}
break;
}

var G__53454 = cljs.core.next.call(null,seq__53392__$1);
var G__53455 = null;
var G__53456 = (0);
var G__53457 = (0);
seq__53392 = G__53454;
chunk__53393 = G__53455;
count__53394 = G__53456;
i__53395 = G__53457;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__53458_53462 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__53459_53463 = null;
var count__53460_53464 = (0);
var i__53461_53465 = (0);
while(true){
if((i__53461_53465 < count__53460_53464)){
var ns_53466 = cljs.core._nth.call(null,chunk__53459_53463,i__53461_53465);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_53466);

var G__53467 = seq__53458_53462;
var G__53468 = chunk__53459_53463;
var G__53469 = count__53460_53464;
var G__53470 = (i__53461_53465 + (1));
seq__53458_53462 = G__53467;
chunk__53459_53463 = G__53468;
count__53460_53464 = G__53469;
i__53461_53465 = G__53470;
continue;
} else {
var temp__5457__auto___53471 = cljs.core.seq.call(null,seq__53458_53462);
if(temp__5457__auto___53471){
var seq__53458_53472__$1 = temp__5457__auto___53471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53458_53472__$1)){
var c__42343__auto___53473 = cljs.core.chunk_first.call(null,seq__53458_53472__$1);
var G__53474 = cljs.core.chunk_rest.call(null,seq__53458_53472__$1);
var G__53475 = c__42343__auto___53473;
var G__53476 = cljs.core.count.call(null,c__42343__auto___53473);
var G__53477 = (0);
seq__53458_53462 = G__53474;
chunk__53459_53463 = G__53475;
count__53460_53464 = G__53476;
i__53461_53465 = G__53477;
continue;
} else {
var ns_53478 = cljs.core.first.call(null,seq__53458_53472__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_53478);

var G__53479 = cljs.core.next.call(null,seq__53458_53472__$1);
var G__53480 = null;
var G__53481 = (0);
var G__53482 = (0);
seq__53458_53462 = G__53479;
chunk__53459_53463 = G__53480;
count__53460_53464 = G__53481;
i__53461_53465 = G__53482;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__41412__auto__ = goog.require__;
if(cljs.core.truth_(or__41412__auto__)){
return or__41412__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__53483__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__53483 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53484__i = 0, G__53484__a = new Array(arguments.length -  0);
while (G__53484__i < G__53484__a.length) {G__53484__a[G__53484__i] = arguments[G__53484__i + 0]; ++G__53484__i;}
  args = new cljs.core.IndexedSeq(G__53484__a,0,null);
} 
return G__53483__delegate.call(this,args);};
G__53483.cljs$lang$maxFixedArity = 0;
G__53483.cljs$lang$applyTo = (function (arglist__53485){
var args = cljs.core.seq(arglist__53485);
return G__53483__delegate(args);
});
G__53483.cljs$core$IFn$_invoke$arity$variadic = G__53483__delegate;
return G__53483;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__53486_SHARP_,p2__53487_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__53486_SHARP_)].join('')),p2__53487_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__53488_SHARP_,p2__53489_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__53488_SHARP_)].join(''),p2__53489_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__53490 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__53490.addCallback(((function (G__53490){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__53490))
);

G__53490.addErrback(((function (G__53490){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__53490))
);

return G__53490;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__53491 = cljs.core._EQ_;
var expr__53492 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__53491.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__53492))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__53491,expr__53492){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__53491,expr__53492))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__53491,expr__53492){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e53494){if((e53494 instanceof Error)){
var e = e53494;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e53494;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__53491,expr__53492))
} else {
if(cljs.core.truth_(pred__53491.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__53492))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__53491.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__53492))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__53491.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__53492))){
return ((function (pred__53491,expr__53492){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e53495){if((e53495 instanceof Error)){
var e = e53495;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e53495;

}
}})());
});
;})(pred__53491,expr__53492))
} else {
return ((function (pred__53491,expr__53492){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__53491,expr__53492))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__53496,callback){
var map__53497 = p__53496;
var map__53497__$1 = ((((!((map__53497 == null)))?((((map__53497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53497):map__53497);
var file_msg = map__53497__$1;
var request_url = cljs.core.get.call(null,map__53497__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__53497,map__53497__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__53497,map__53497__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__45292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto__){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto__){
return (function (state_53521){
var state_val_53522 = (state_53521[(1)]);
if((state_val_53522 === (7))){
var inst_53517 = (state_53521[(2)]);
var state_53521__$1 = state_53521;
var statearr_53523_53540 = state_53521__$1;
(statearr_53523_53540[(2)] = inst_53517);

(statearr_53523_53540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53522 === (1))){
var state_53521__$1 = state_53521;
var statearr_53524_53541 = state_53521__$1;
(statearr_53524_53541[(2)] = null);

(statearr_53524_53541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53522 === (4))){
var inst_53501 = (state_53521[(7)]);
var inst_53501__$1 = (state_53521[(2)]);
var state_53521__$1 = (function (){var statearr_53525 = state_53521;
(statearr_53525[(7)] = inst_53501__$1);

return statearr_53525;
})();
if(cljs.core.truth_(inst_53501__$1)){
var statearr_53526_53542 = state_53521__$1;
(statearr_53526_53542[(1)] = (5));

} else {
var statearr_53527_53543 = state_53521__$1;
(statearr_53527_53543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53522 === (6))){
var state_53521__$1 = state_53521;
var statearr_53528_53544 = state_53521__$1;
(statearr_53528_53544[(2)] = null);

(statearr_53528_53544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53522 === (3))){
var inst_53519 = (state_53521[(2)]);
var state_53521__$1 = state_53521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53521__$1,inst_53519);
} else {
if((state_val_53522 === (2))){
var state_53521__$1 = state_53521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53521__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_53522 === (11))){
var inst_53513 = (state_53521[(2)]);
var state_53521__$1 = (function (){var statearr_53529 = state_53521;
(statearr_53529[(8)] = inst_53513);

return statearr_53529;
})();
var statearr_53530_53545 = state_53521__$1;
(statearr_53530_53545[(2)] = null);

(statearr_53530_53545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53522 === (9))){
var inst_53505 = (state_53521[(9)]);
var inst_53507 = (state_53521[(10)]);
var inst_53509 = inst_53507.call(null,inst_53505);
var state_53521__$1 = state_53521;
var statearr_53531_53546 = state_53521__$1;
(statearr_53531_53546[(2)] = inst_53509);

(statearr_53531_53546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53522 === (5))){
var inst_53501 = (state_53521[(7)]);
var inst_53503 = figwheel.client.file_reloading.blocking_load.call(null,inst_53501);
var state_53521__$1 = state_53521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53521__$1,(8),inst_53503);
} else {
if((state_val_53522 === (10))){
var inst_53505 = (state_53521[(9)]);
var inst_53511 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_53505);
var state_53521__$1 = state_53521;
var statearr_53532_53547 = state_53521__$1;
(statearr_53532_53547[(2)] = inst_53511);

(statearr_53532_53547[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53522 === (8))){
var inst_53501 = (state_53521[(7)]);
var inst_53507 = (state_53521[(10)]);
var inst_53505 = (state_53521[(2)]);
var inst_53506 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_53507__$1 = cljs.core.get.call(null,inst_53506,inst_53501);
var state_53521__$1 = (function (){var statearr_53533 = state_53521;
(statearr_53533[(9)] = inst_53505);

(statearr_53533[(10)] = inst_53507__$1);

return statearr_53533;
})();
if(cljs.core.truth_(inst_53507__$1)){
var statearr_53534_53548 = state_53521__$1;
(statearr_53534_53548[(1)] = (9));

} else {
var statearr_53535_53549 = state_53521__$1;
(statearr_53535_53549[(1)] = (10));

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
});})(c__45292__auto__))
;
return ((function (switch__45202__auto__,c__45292__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__45203__auto__ = null;
var figwheel$client$file_reloading$state_machine__45203__auto____0 = (function (){
var statearr_53536 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53536[(0)] = figwheel$client$file_reloading$state_machine__45203__auto__);

(statearr_53536[(1)] = (1));

return statearr_53536;
});
var figwheel$client$file_reloading$state_machine__45203__auto____1 = (function (state_53521){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_53521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e53537){if((e53537 instanceof Object)){
var ex__45206__auto__ = e53537;
var statearr_53538_53550 = state_53521;
(statearr_53538_53550[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53551 = state_53521;
state_53521 = G__53551;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__45203__auto__ = function(state_53521){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__45203__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__45203__auto____1.call(this,state_53521);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__45203__auto____0;
figwheel$client$file_reloading$state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__45203__auto____1;
return figwheel$client$file_reloading$state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto__))
})();
var state__45294__auto__ = (function (){var statearr_53539 = f__45293__auto__.call(null);
(statearr_53539[(6)] = c__45292__auto__);

return statearr_53539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto__))
);

return c__45292__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__53552,callback){
var map__53553 = p__53552;
var map__53553__$1 = ((((!((map__53553 == null)))?((((map__53553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53553.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53553):map__53553);
var file_msg = map__53553__$1;
var namespace = cljs.core.get.call(null,map__53553__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__53553,map__53553__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__53553,map__53553__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__53555){
var map__53556 = p__53555;
var map__53556__$1 = ((((!((map__53556 == null)))?((((map__53556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53556.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53556):map__53556);
var file_msg = map__53556__$1;
var namespace = cljs.core.get.call(null,map__53556__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__53558){
var map__53559 = p__53558;
var map__53559__$1 = ((((!((map__53559 == null)))?((((map__53559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53559):map__53559);
var file_msg = map__53559__$1;
var namespace = cljs.core.get.call(null,map__53559__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__41400__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__41400__auto__){
var or__41412__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__41412__auto__)){
return or__41412__auto__;
} else {
var or__41412__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__41412__auto____$1)){
return or__41412__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__41400__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__53561,callback){
var map__53562 = p__53561;
var map__53562__$1 = ((((!((map__53562 == null)))?((((map__53562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53562):map__53562);
var file_msg = map__53562__$1;
var request_url = cljs.core.get.call(null,map__53562__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__53562__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__45292__auto___53612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto___53612,out){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto___53612,out){
return (function (state_53597){
var state_val_53598 = (state_53597[(1)]);
if((state_val_53598 === (1))){
var inst_53571 = cljs.core.seq.call(null,files);
var inst_53572 = cljs.core.first.call(null,inst_53571);
var inst_53573 = cljs.core.next.call(null,inst_53571);
var inst_53574 = files;
var state_53597__$1 = (function (){var statearr_53599 = state_53597;
(statearr_53599[(7)] = inst_53573);

(statearr_53599[(8)] = inst_53572);

(statearr_53599[(9)] = inst_53574);

return statearr_53599;
})();
var statearr_53600_53613 = state_53597__$1;
(statearr_53600_53613[(2)] = null);

(statearr_53600_53613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53598 === (2))){
var inst_53580 = (state_53597[(10)]);
var inst_53574 = (state_53597[(9)]);
var inst_53579 = cljs.core.seq.call(null,inst_53574);
var inst_53580__$1 = cljs.core.first.call(null,inst_53579);
var inst_53581 = cljs.core.next.call(null,inst_53579);
var inst_53582 = (inst_53580__$1 == null);
var inst_53583 = cljs.core.not.call(null,inst_53582);
var state_53597__$1 = (function (){var statearr_53601 = state_53597;
(statearr_53601[(11)] = inst_53581);

(statearr_53601[(10)] = inst_53580__$1);

return statearr_53601;
})();
if(inst_53583){
var statearr_53602_53614 = state_53597__$1;
(statearr_53602_53614[(1)] = (4));

} else {
var statearr_53603_53615 = state_53597__$1;
(statearr_53603_53615[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53598 === (3))){
var inst_53595 = (state_53597[(2)]);
var state_53597__$1 = state_53597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53597__$1,inst_53595);
} else {
if((state_val_53598 === (4))){
var inst_53580 = (state_53597[(10)]);
var inst_53585 = figwheel.client.file_reloading.reload_js_file.call(null,inst_53580);
var state_53597__$1 = state_53597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53597__$1,(7),inst_53585);
} else {
if((state_val_53598 === (5))){
var inst_53591 = cljs.core.async.close_BANG_.call(null,out);
var state_53597__$1 = state_53597;
var statearr_53604_53616 = state_53597__$1;
(statearr_53604_53616[(2)] = inst_53591);

(statearr_53604_53616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53598 === (6))){
var inst_53593 = (state_53597[(2)]);
var state_53597__$1 = state_53597;
var statearr_53605_53617 = state_53597__$1;
(statearr_53605_53617[(2)] = inst_53593);

(statearr_53605_53617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53598 === (7))){
var inst_53581 = (state_53597[(11)]);
var inst_53587 = (state_53597[(2)]);
var inst_53588 = cljs.core.async.put_BANG_.call(null,out,inst_53587);
var inst_53574 = inst_53581;
var state_53597__$1 = (function (){var statearr_53606 = state_53597;
(statearr_53606[(12)] = inst_53588);

(statearr_53606[(9)] = inst_53574);

return statearr_53606;
})();
var statearr_53607_53618 = state_53597__$1;
(statearr_53607_53618[(2)] = null);

(statearr_53607_53618[(1)] = (2));


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
});})(c__45292__auto___53612,out))
;
return ((function (switch__45202__auto__,c__45292__auto___53612,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45203__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45203__auto____0 = (function (){
var statearr_53608 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53608[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45203__auto__);

(statearr_53608[(1)] = (1));

return statearr_53608;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__45203__auto____1 = (function (state_53597){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_53597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e53609){if((e53609 instanceof Object)){
var ex__45206__auto__ = e53609;
var statearr_53610_53619 = state_53597;
(statearr_53610_53619[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53620 = state_53597;
state_53597 = G__53620;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45203__auto__ = function(state_53597){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45203__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45203__auto____1.call(this,state_53597);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45203__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__45203__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto___53612,out))
})();
var state__45294__auto__ = (function (){var statearr_53611 = f__45293__auto__.call(null);
(statearr_53611[(6)] = c__45292__auto___53612);

return statearr_53611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto___53612,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__53621,opts){
var map__53622 = p__53621;
var map__53622__$1 = ((((!((map__53622 == null)))?((((map__53622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53622):map__53622);
var eval_body = cljs.core.get.call(null,map__53622__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__53622__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__41400__auto__ = eval_body;
if(cljs.core.truth_(and__41400__auto__)){
return typeof eval_body === 'string';
} else {
return and__41400__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e53624){var e = e53624;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__53625_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__53625_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__53626){
var vec__53627 = p__53626;
var k = cljs.core.nth.call(null,vec__53627,(0),null);
var v = cljs.core.nth.call(null,vec__53627,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__53630){
var vec__53631 = p__53630;
var k = cljs.core.nth.call(null,vec__53631,(0),null);
var v = cljs.core.nth.call(null,vec__53631,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__53637,p__53638){
var map__53639 = p__53637;
var map__53639__$1 = ((((!((map__53639 == null)))?((((map__53639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53639):map__53639);
var opts = map__53639__$1;
var before_jsload = cljs.core.get.call(null,map__53639__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__53639__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__53639__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__53640 = p__53638;
var map__53640__$1 = ((((!((map__53640 == null)))?((((map__53640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53640):map__53640);
var msg = map__53640__$1;
var files = cljs.core.get.call(null,map__53640__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__53640__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__53640__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__45292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto__,map__53639,map__53639__$1,opts,before_jsload,on_jsload,reload_dependents,map__53640,map__53640__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto__,map__53639,map__53639__$1,opts,before_jsload,on_jsload,reload_dependents,map__53640,map__53640__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_53794){
var state_val_53795 = (state_53794[(1)]);
if((state_val_53795 === (7))){
var inst_53655 = (state_53794[(7)]);
var inst_53656 = (state_53794[(8)]);
var inst_53657 = (state_53794[(9)]);
var inst_53654 = (state_53794[(10)]);
var inst_53662 = cljs.core._nth.call(null,inst_53655,inst_53657);
var inst_53663 = figwheel.client.file_reloading.eval_body.call(null,inst_53662,opts);
var inst_53664 = (inst_53657 + (1));
var tmp53796 = inst_53655;
var tmp53797 = inst_53656;
var tmp53798 = inst_53654;
var inst_53654__$1 = tmp53798;
var inst_53655__$1 = tmp53796;
var inst_53656__$1 = tmp53797;
var inst_53657__$1 = inst_53664;
var state_53794__$1 = (function (){var statearr_53799 = state_53794;
(statearr_53799[(7)] = inst_53655__$1);

(statearr_53799[(8)] = inst_53656__$1);

(statearr_53799[(9)] = inst_53657__$1);

(statearr_53799[(11)] = inst_53663);

(statearr_53799[(10)] = inst_53654__$1);

return statearr_53799;
})();
var statearr_53800_53883 = state_53794__$1;
(statearr_53800_53883[(2)] = null);

(statearr_53800_53883[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (20))){
var inst_53697 = (state_53794[(12)]);
var inst_53705 = figwheel.client.file_reloading.sort_files.call(null,inst_53697);
var state_53794__$1 = state_53794;
var statearr_53801_53884 = state_53794__$1;
(statearr_53801_53884[(2)] = inst_53705);

(statearr_53801_53884[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (27))){
var state_53794__$1 = state_53794;
var statearr_53802_53885 = state_53794__$1;
(statearr_53802_53885[(2)] = null);

(statearr_53802_53885[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (1))){
var inst_53646 = (state_53794[(13)]);
var inst_53643 = before_jsload.call(null,files);
var inst_53644 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_53645 = (function (){return ((function (inst_53646,inst_53643,inst_53644,state_val_53795,c__45292__auto__,map__53639,map__53639__$1,opts,before_jsload,on_jsload,reload_dependents,map__53640,map__53640__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__53634_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__53634_SHARP_);
});
;})(inst_53646,inst_53643,inst_53644,state_val_53795,c__45292__auto__,map__53639,map__53639__$1,opts,before_jsload,on_jsload,reload_dependents,map__53640,map__53640__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53646__$1 = cljs.core.filter.call(null,inst_53645,files);
var inst_53647 = cljs.core.not_empty.call(null,inst_53646__$1);
var state_53794__$1 = (function (){var statearr_53803 = state_53794;
(statearr_53803[(14)] = inst_53644);

(statearr_53803[(15)] = inst_53643);

(statearr_53803[(13)] = inst_53646__$1);

return statearr_53803;
})();
if(cljs.core.truth_(inst_53647)){
var statearr_53804_53886 = state_53794__$1;
(statearr_53804_53886[(1)] = (2));

} else {
var statearr_53805_53887 = state_53794__$1;
(statearr_53805_53887[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (24))){
var state_53794__$1 = state_53794;
var statearr_53806_53888 = state_53794__$1;
(statearr_53806_53888[(2)] = null);

(statearr_53806_53888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (39))){
var inst_53747 = (state_53794[(16)]);
var state_53794__$1 = state_53794;
var statearr_53807_53889 = state_53794__$1;
(statearr_53807_53889[(2)] = inst_53747);

(statearr_53807_53889[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (46))){
var inst_53789 = (state_53794[(2)]);
var state_53794__$1 = state_53794;
var statearr_53808_53890 = state_53794__$1;
(statearr_53808_53890[(2)] = inst_53789);

(statearr_53808_53890[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (4))){
var inst_53691 = (state_53794[(2)]);
var inst_53692 = cljs.core.List.EMPTY;
var inst_53693 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_53692);
var inst_53694 = (function (){return ((function (inst_53691,inst_53692,inst_53693,state_val_53795,c__45292__auto__,map__53639,map__53639__$1,opts,before_jsload,on_jsload,reload_dependents,map__53640,map__53640__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__53635_SHARP_){
var and__41400__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__53635_SHARP_);
if(cljs.core.truth_(and__41400__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__53635_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__53635_SHARP_)));
} else {
return and__41400__auto__;
}
});
;})(inst_53691,inst_53692,inst_53693,state_val_53795,c__45292__auto__,map__53639,map__53639__$1,opts,before_jsload,on_jsload,reload_dependents,map__53640,map__53640__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53695 = cljs.core.filter.call(null,inst_53694,files);
var inst_53696 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_53697 = cljs.core.concat.call(null,inst_53695,inst_53696);
var state_53794__$1 = (function (){var statearr_53809 = state_53794;
(statearr_53809[(12)] = inst_53697);

(statearr_53809[(17)] = inst_53693);

(statearr_53809[(18)] = inst_53691);

return statearr_53809;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_53810_53891 = state_53794__$1;
(statearr_53810_53891[(1)] = (16));

} else {
var statearr_53811_53892 = state_53794__$1;
(statearr_53811_53892[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (15))){
var inst_53681 = (state_53794[(2)]);
var state_53794__$1 = state_53794;
var statearr_53812_53893 = state_53794__$1;
(statearr_53812_53893[(2)] = inst_53681);

(statearr_53812_53893[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (21))){
var inst_53707 = (state_53794[(19)]);
var inst_53707__$1 = (state_53794[(2)]);
var inst_53708 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_53707__$1);
var state_53794__$1 = (function (){var statearr_53813 = state_53794;
(statearr_53813[(19)] = inst_53707__$1);

return statearr_53813;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53794__$1,(22),inst_53708);
} else {
if((state_val_53795 === (31))){
var inst_53792 = (state_53794[(2)]);
var state_53794__$1 = state_53794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53794__$1,inst_53792);
} else {
if((state_val_53795 === (32))){
var inst_53747 = (state_53794[(16)]);
var inst_53752 = inst_53747.cljs$lang$protocol_mask$partition0$;
var inst_53753 = (inst_53752 & (64));
var inst_53754 = inst_53747.cljs$core$ISeq$;
var inst_53755 = (cljs.core.PROTOCOL_SENTINEL === inst_53754);
var inst_53756 = (inst_53753) || (inst_53755);
var state_53794__$1 = state_53794;
if(cljs.core.truth_(inst_53756)){
var statearr_53814_53894 = state_53794__$1;
(statearr_53814_53894[(1)] = (35));

} else {
var statearr_53815_53895 = state_53794__$1;
(statearr_53815_53895[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (40))){
var inst_53769 = (state_53794[(20)]);
var inst_53768 = (state_53794[(2)]);
var inst_53769__$1 = cljs.core.get.call(null,inst_53768,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_53770 = cljs.core.get.call(null,inst_53768,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_53771 = cljs.core.not_empty.call(null,inst_53769__$1);
var state_53794__$1 = (function (){var statearr_53816 = state_53794;
(statearr_53816[(21)] = inst_53770);

(statearr_53816[(20)] = inst_53769__$1);

return statearr_53816;
})();
if(cljs.core.truth_(inst_53771)){
var statearr_53817_53896 = state_53794__$1;
(statearr_53817_53896[(1)] = (41));

} else {
var statearr_53818_53897 = state_53794__$1;
(statearr_53818_53897[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (33))){
var state_53794__$1 = state_53794;
var statearr_53819_53898 = state_53794__$1;
(statearr_53819_53898[(2)] = false);

(statearr_53819_53898[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (13))){
var inst_53667 = (state_53794[(22)]);
var inst_53671 = cljs.core.chunk_first.call(null,inst_53667);
var inst_53672 = cljs.core.chunk_rest.call(null,inst_53667);
var inst_53673 = cljs.core.count.call(null,inst_53671);
var inst_53654 = inst_53672;
var inst_53655 = inst_53671;
var inst_53656 = inst_53673;
var inst_53657 = (0);
var state_53794__$1 = (function (){var statearr_53820 = state_53794;
(statearr_53820[(7)] = inst_53655);

(statearr_53820[(8)] = inst_53656);

(statearr_53820[(9)] = inst_53657);

(statearr_53820[(10)] = inst_53654);

return statearr_53820;
})();
var statearr_53821_53899 = state_53794__$1;
(statearr_53821_53899[(2)] = null);

(statearr_53821_53899[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (22))){
var inst_53707 = (state_53794[(19)]);
var inst_53711 = (state_53794[(23)]);
var inst_53715 = (state_53794[(24)]);
var inst_53710 = (state_53794[(25)]);
var inst_53710__$1 = (state_53794[(2)]);
var inst_53711__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_53710__$1);
var inst_53712 = (function (){var all_files = inst_53707;
var res_SINGLEQUOTE_ = inst_53710__$1;
var res = inst_53711__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_53707,inst_53711,inst_53715,inst_53710,inst_53710__$1,inst_53711__$1,state_val_53795,c__45292__auto__,map__53639,map__53639__$1,opts,before_jsload,on_jsload,reload_dependents,map__53640,map__53640__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__53636_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__53636_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_53707,inst_53711,inst_53715,inst_53710,inst_53710__$1,inst_53711__$1,state_val_53795,c__45292__auto__,map__53639,map__53639__$1,opts,before_jsload,on_jsload,reload_dependents,map__53640,map__53640__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53713 = cljs.core.filter.call(null,inst_53712,inst_53710__$1);
var inst_53714 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_53715__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_53714);
var inst_53716 = cljs.core.not_empty.call(null,inst_53715__$1);
var state_53794__$1 = (function (){var statearr_53822 = state_53794;
(statearr_53822[(26)] = inst_53713);

(statearr_53822[(23)] = inst_53711__$1);

(statearr_53822[(24)] = inst_53715__$1);

(statearr_53822[(25)] = inst_53710__$1);

return statearr_53822;
})();
if(cljs.core.truth_(inst_53716)){
var statearr_53823_53900 = state_53794__$1;
(statearr_53823_53900[(1)] = (23));

} else {
var statearr_53824_53901 = state_53794__$1;
(statearr_53824_53901[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (36))){
var state_53794__$1 = state_53794;
var statearr_53825_53902 = state_53794__$1;
(statearr_53825_53902[(2)] = false);

(statearr_53825_53902[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (41))){
var inst_53769 = (state_53794[(20)]);
var inst_53773 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_53774 = cljs.core.map.call(null,inst_53773,inst_53769);
var inst_53775 = cljs.core.pr_str.call(null,inst_53774);
var inst_53776 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53775)].join('');
var inst_53777 = figwheel.client.utils.log.call(null,inst_53776);
var state_53794__$1 = state_53794;
var statearr_53826_53903 = state_53794__$1;
(statearr_53826_53903[(2)] = inst_53777);

(statearr_53826_53903[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (43))){
var inst_53770 = (state_53794[(21)]);
var inst_53780 = (state_53794[(2)]);
var inst_53781 = cljs.core.not_empty.call(null,inst_53770);
var state_53794__$1 = (function (){var statearr_53827 = state_53794;
(statearr_53827[(27)] = inst_53780);

return statearr_53827;
})();
if(cljs.core.truth_(inst_53781)){
var statearr_53828_53904 = state_53794__$1;
(statearr_53828_53904[(1)] = (44));

} else {
var statearr_53829_53905 = state_53794__$1;
(statearr_53829_53905[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (29))){
var inst_53747 = (state_53794[(16)]);
var inst_53707 = (state_53794[(19)]);
var inst_53713 = (state_53794[(26)]);
var inst_53711 = (state_53794[(23)]);
var inst_53715 = (state_53794[(24)]);
var inst_53710 = (state_53794[(25)]);
var inst_53743 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_53746 = (function (){var all_files = inst_53707;
var res_SINGLEQUOTE_ = inst_53710;
var res = inst_53711;
var files_not_loaded = inst_53713;
var dependencies_that_loaded = inst_53715;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53747,inst_53707,inst_53713,inst_53711,inst_53715,inst_53710,inst_53743,state_val_53795,c__45292__auto__,map__53639,map__53639__$1,opts,before_jsload,on_jsload,reload_dependents,map__53640,map__53640__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53745){
var map__53830 = p__53745;
var map__53830__$1 = ((((!((map__53830 == null)))?((((map__53830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53830.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53830):map__53830);
var namespace = cljs.core.get.call(null,map__53830__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53747,inst_53707,inst_53713,inst_53711,inst_53715,inst_53710,inst_53743,state_val_53795,c__45292__auto__,map__53639,map__53639__$1,opts,before_jsload,on_jsload,reload_dependents,map__53640,map__53640__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53747__$1 = cljs.core.group_by.call(null,inst_53746,inst_53713);
var inst_53749 = (inst_53747__$1 == null);
var inst_53750 = cljs.core.not.call(null,inst_53749);
var state_53794__$1 = (function (){var statearr_53832 = state_53794;
(statearr_53832[(16)] = inst_53747__$1);

(statearr_53832[(28)] = inst_53743);

return statearr_53832;
})();
if(inst_53750){
var statearr_53833_53906 = state_53794__$1;
(statearr_53833_53906[(1)] = (32));

} else {
var statearr_53834_53907 = state_53794__$1;
(statearr_53834_53907[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (44))){
var inst_53770 = (state_53794[(21)]);
var inst_53783 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_53770);
var inst_53784 = cljs.core.pr_str.call(null,inst_53783);
var inst_53785 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53784)].join('');
var inst_53786 = figwheel.client.utils.log.call(null,inst_53785);
var state_53794__$1 = state_53794;
var statearr_53835_53908 = state_53794__$1;
(statearr_53835_53908[(2)] = inst_53786);

(statearr_53835_53908[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (6))){
var inst_53688 = (state_53794[(2)]);
var state_53794__$1 = state_53794;
var statearr_53836_53909 = state_53794__$1;
(statearr_53836_53909[(2)] = inst_53688);

(statearr_53836_53909[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (28))){
var inst_53713 = (state_53794[(26)]);
var inst_53740 = (state_53794[(2)]);
var inst_53741 = cljs.core.not_empty.call(null,inst_53713);
var state_53794__$1 = (function (){var statearr_53837 = state_53794;
(statearr_53837[(29)] = inst_53740);

return statearr_53837;
})();
if(cljs.core.truth_(inst_53741)){
var statearr_53838_53910 = state_53794__$1;
(statearr_53838_53910[(1)] = (29));

} else {
var statearr_53839_53911 = state_53794__$1;
(statearr_53839_53911[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (25))){
var inst_53711 = (state_53794[(23)]);
var inst_53727 = (state_53794[(2)]);
var inst_53728 = cljs.core.not_empty.call(null,inst_53711);
var state_53794__$1 = (function (){var statearr_53840 = state_53794;
(statearr_53840[(30)] = inst_53727);

return statearr_53840;
})();
if(cljs.core.truth_(inst_53728)){
var statearr_53841_53912 = state_53794__$1;
(statearr_53841_53912[(1)] = (26));

} else {
var statearr_53842_53913 = state_53794__$1;
(statearr_53842_53913[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (34))){
var inst_53763 = (state_53794[(2)]);
var state_53794__$1 = state_53794;
if(cljs.core.truth_(inst_53763)){
var statearr_53843_53914 = state_53794__$1;
(statearr_53843_53914[(1)] = (38));

} else {
var statearr_53844_53915 = state_53794__$1;
(statearr_53844_53915[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (17))){
var state_53794__$1 = state_53794;
var statearr_53845_53916 = state_53794__$1;
(statearr_53845_53916[(2)] = recompile_dependents);

(statearr_53845_53916[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (3))){
var state_53794__$1 = state_53794;
var statearr_53846_53917 = state_53794__$1;
(statearr_53846_53917[(2)] = null);

(statearr_53846_53917[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (12))){
var inst_53684 = (state_53794[(2)]);
var state_53794__$1 = state_53794;
var statearr_53847_53918 = state_53794__$1;
(statearr_53847_53918[(2)] = inst_53684);

(statearr_53847_53918[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (2))){
var inst_53646 = (state_53794[(13)]);
var inst_53653 = cljs.core.seq.call(null,inst_53646);
var inst_53654 = inst_53653;
var inst_53655 = null;
var inst_53656 = (0);
var inst_53657 = (0);
var state_53794__$1 = (function (){var statearr_53848 = state_53794;
(statearr_53848[(7)] = inst_53655);

(statearr_53848[(8)] = inst_53656);

(statearr_53848[(9)] = inst_53657);

(statearr_53848[(10)] = inst_53654);

return statearr_53848;
})();
var statearr_53849_53919 = state_53794__$1;
(statearr_53849_53919[(2)] = null);

(statearr_53849_53919[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (23))){
var inst_53707 = (state_53794[(19)]);
var inst_53713 = (state_53794[(26)]);
var inst_53711 = (state_53794[(23)]);
var inst_53715 = (state_53794[(24)]);
var inst_53710 = (state_53794[(25)]);
var inst_53718 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_53720 = (function (){var all_files = inst_53707;
var res_SINGLEQUOTE_ = inst_53710;
var res = inst_53711;
var files_not_loaded = inst_53713;
var dependencies_that_loaded = inst_53715;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53707,inst_53713,inst_53711,inst_53715,inst_53710,inst_53718,state_val_53795,c__45292__auto__,map__53639,map__53639__$1,opts,before_jsload,on_jsload,reload_dependents,map__53640,map__53640__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53719){
var map__53850 = p__53719;
var map__53850__$1 = ((((!((map__53850 == null)))?((((map__53850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53850):map__53850);
var request_url = cljs.core.get.call(null,map__53850__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53707,inst_53713,inst_53711,inst_53715,inst_53710,inst_53718,state_val_53795,c__45292__auto__,map__53639,map__53639__$1,opts,before_jsload,on_jsload,reload_dependents,map__53640,map__53640__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53721 = cljs.core.reverse.call(null,inst_53715);
var inst_53722 = cljs.core.map.call(null,inst_53720,inst_53721);
var inst_53723 = cljs.core.pr_str.call(null,inst_53722);
var inst_53724 = figwheel.client.utils.log.call(null,inst_53723);
var state_53794__$1 = (function (){var statearr_53852 = state_53794;
(statearr_53852[(31)] = inst_53718);

return statearr_53852;
})();
var statearr_53853_53920 = state_53794__$1;
(statearr_53853_53920[(2)] = inst_53724);

(statearr_53853_53920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (35))){
var state_53794__$1 = state_53794;
var statearr_53854_53921 = state_53794__$1;
(statearr_53854_53921[(2)] = true);

(statearr_53854_53921[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (19))){
var inst_53697 = (state_53794[(12)]);
var inst_53703 = figwheel.client.file_reloading.expand_files.call(null,inst_53697);
var state_53794__$1 = state_53794;
var statearr_53855_53922 = state_53794__$1;
(statearr_53855_53922[(2)] = inst_53703);

(statearr_53855_53922[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (11))){
var state_53794__$1 = state_53794;
var statearr_53856_53923 = state_53794__$1;
(statearr_53856_53923[(2)] = null);

(statearr_53856_53923[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (9))){
var inst_53686 = (state_53794[(2)]);
var state_53794__$1 = state_53794;
var statearr_53857_53924 = state_53794__$1;
(statearr_53857_53924[(2)] = inst_53686);

(statearr_53857_53924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (5))){
var inst_53656 = (state_53794[(8)]);
var inst_53657 = (state_53794[(9)]);
var inst_53659 = (inst_53657 < inst_53656);
var inst_53660 = inst_53659;
var state_53794__$1 = state_53794;
if(cljs.core.truth_(inst_53660)){
var statearr_53858_53925 = state_53794__$1;
(statearr_53858_53925[(1)] = (7));

} else {
var statearr_53859_53926 = state_53794__$1;
(statearr_53859_53926[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (14))){
var inst_53667 = (state_53794[(22)]);
var inst_53676 = cljs.core.first.call(null,inst_53667);
var inst_53677 = figwheel.client.file_reloading.eval_body.call(null,inst_53676,opts);
var inst_53678 = cljs.core.next.call(null,inst_53667);
var inst_53654 = inst_53678;
var inst_53655 = null;
var inst_53656 = (0);
var inst_53657 = (0);
var state_53794__$1 = (function (){var statearr_53860 = state_53794;
(statearr_53860[(32)] = inst_53677);

(statearr_53860[(7)] = inst_53655);

(statearr_53860[(8)] = inst_53656);

(statearr_53860[(9)] = inst_53657);

(statearr_53860[(10)] = inst_53654);

return statearr_53860;
})();
var statearr_53861_53927 = state_53794__$1;
(statearr_53861_53927[(2)] = null);

(statearr_53861_53927[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (45))){
var state_53794__$1 = state_53794;
var statearr_53862_53928 = state_53794__$1;
(statearr_53862_53928[(2)] = null);

(statearr_53862_53928[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (26))){
var inst_53707 = (state_53794[(19)]);
var inst_53713 = (state_53794[(26)]);
var inst_53711 = (state_53794[(23)]);
var inst_53715 = (state_53794[(24)]);
var inst_53710 = (state_53794[(25)]);
var inst_53730 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_53732 = (function (){var all_files = inst_53707;
var res_SINGLEQUOTE_ = inst_53710;
var res = inst_53711;
var files_not_loaded = inst_53713;
var dependencies_that_loaded = inst_53715;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53707,inst_53713,inst_53711,inst_53715,inst_53710,inst_53730,state_val_53795,c__45292__auto__,map__53639,map__53639__$1,opts,before_jsload,on_jsload,reload_dependents,map__53640,map__53640__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53731){
var map__53863 = p__53731;
var map__53863__$1 = ((((!((map__53863 == null)))?((((map__53863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53863):map__53863);
var namespace = cljs.core.get.call(null,map__53863__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__53863__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53707,inst_53713,inst_53711,inst_53715,inst_53710,inst_53730,state_val_53795,c__45292__auto__,map__53639,map__53639__$1,opts,before_jsload,on_jsload,reload_dependents,map__53640,map__53640__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53733 = cljs.core.map.call(null,inst_53732,inst_53711);
var inst_53734 = cljs.core.pr_str.call(null,inst_53733);
var inst_53735 = figwheel.client.utils.log.call(null,inst_53734);
var inst_53736 = (function (){var all_files = inst_53707;
var res_SINGLEQUOTE_ = inst_53710;
var res = inst_53711;
var files_not_loaded = inst_53713;
var dependencies_that_loaded = inst_53715;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53707,inst_53713,inst_53711,inst_53715,inst_53710,inst_53730,inst_53732,inst_53733,inst_53734,inst_53735,state_val_53795,c__45292__auto__,map__53639,map__53639__$1,opts,before_jsload,on_jsload,reload_dependents,map__53640,map__53640__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53707,inst_53713,inst_53711,inst_53715,inst_53710,inst_53730,inst_53732,inst_53733,inst_53734,inst_53735,state_val_53795,c__45292__auto__,map__53639,map__53639__$1,opts,before_jsload,on_jsload,reload_dependents,map__53640,map__53640__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53737 = setTimeout(inst_53736,(10));
var state_53794__$1 = (function (){var statearr_53865 = state_53794;
(statearr_53865[(33)] = inst_53730);

(statearr_53865[(34)] = inst_53735);

return statearr_53865;
})();
var statearr_53866_53929 = state_53794__$1;
(statearr_53866_53929[(2)] = inst_53737);

(statearr_53866_53929[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (16))){
var state_53794__$1 = state_53794;
var statearr_53867_53930 = state_53794__$1;
(statearr_53867_53930[(2)] = reload_dependents);

(statearr_53867_53930[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (38))){
var inst_53747 = (state_53794[(16)]);
var inst_53765 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53747);
var state_53794__$1 = state_53794;
var statearr_53868_53931 = state_53794__$1;
(statearr_53868_53931[(2)] = inst_53765);

(statearr_53868_53931[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (30))){
var state_53794__$1 = state_53794;
var statearr_53869_53932 = state_53794__$1;
(statearr_53869_53932[(2)] = null);

(statearr_53869_53932[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (10))){
var inst_53667 = (state_53794[(22)]);
var inst_53669 = cljs.core.chunked_seq_QMARK_.call(null,inst_53667);
var state_53794__$1 = state_53794;
if(inst_53669){
var statearr_53870_53933 = state_53794__$1;
(statearr_53870_53933[(1)] = (13));

} else {
var statearr_53871_53934 = state_53794__$1;
(statearr_53871_53934[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (18))){
var inst_53701 = (state_53794[(2)]);
var state_53794__$1 = state_53794;
if(cljs.core.truth_(inst_53701)){
var statearr_53872_53935 = state_53794__$1;
(statearr_53872_53935[(1)] = (19));

} else {
var statearr_53873_53936 = state_53794__$1;
(statearr_53873_53936[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (42))){
var state_53794__$1 = state_53794;
var statearr_53874_53937 = state_53794__$1;
(statearr_53874_53937[(2)] = null);

(statearr_53874_53937[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (37))){
var inst_53760 = (state_53794[(2)]);
var state_53794__$1 = state_53794;
var statearr_53875_53938 = state_53794__$1;
(statearr_53875_53938[(2)] = inst_53760);

(statearr_53875_53938[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53795 === (8))){
var inst_53667 = (state_53794[(22)]);
var inst_53654 = (state_53794[(10)]);
var inst_53667__$1 = cljs.core.seq.call(null,inst_53654);
var state_53794__$1 = (function (){var statearr_53876 = state_53794;
(statearr_53876[(22)] = inst_53667__$1);

return statearr_53876;
})();
if(inst_53667__$1){
var statearr_53877_53939 = state_53794__$1;
(statearr_53877_53939[(1)] = (10));

} else {
var statearr_53878_53940 = state_53794__$1;
(statearr_53878_53940[(1)] = (11));

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
});})(c__45292__auto__,map__53639,map__53639__$1,opts,before_jsload,on_jsload,reload_dependents,map__53640,map__53640__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__45202__auto__,c__45292__auto__,map__53639,map__53639__$1,opts,before_jsload,on_jsload,reload_dependents,map__53640,map__53640__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45203__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45203__auto____0 = (function (){
var statearr_53879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53879[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__45203__auto__);

(statearr_53879[(1)] = (1));

return statearr_53879;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__45203__auto____1 = (function (state_53794){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_53794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e53880){if((e53880 instanceof Object)){
var ex__45206__auto__ = e53880;
var statearr_53881_53941 = state_53794;
(statearr_53881_53941[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53942 = state_53794;
state_53794 = G__53942;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__45203__auto__ = function(state_53794){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45203__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45203__auto____1.call(this,state_53794);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__45203__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__45203__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto__,map__53639,map__53639__$1,opts,before_jsload,on_jsload,reload_dependents,map__53640,map__53640__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__45294__auto__ = (function (){var statearr_53882 = f__45293__auto__.call(null);
(statearr_53882[(6)] = c__45292__auto__);

return statearr_53882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto__,map__53639,map__53639__$1,opts,before_jsload,on_jsload,reload_dependents,map__53640,map__53640__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__45292__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__53945,link){
var map__53946 = p__53945;
var map__53946__$1 = ((((!((map__53946 == null)))?((((map__53946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53946):map__53946);
var file = cljs.core.get.call(null,map__53946__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__53946,map__53946__$1,file){
return (function (p1__53943_SHARP_,p2__53944_SHARP_){
if(cljs.core._EQ_.call(null,p1__53943_SHARP_,p2__53944_SHARP_)){
return p1__53943_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__53946,map__53946__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__53949){
var map__53950 = p__53949;
var map__53950__$1 = ((((!((map__53950 == null)))?((((map__53950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53950):map__53950);
var match_length = cljs.core.get.call(null,map__53950__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__53950__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__53948_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__53948_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__53952_SHARP_,p2__53953_SHARP_){
return cljs.core.assoc.call(null,p1__53952_SHARP_,cljs.core.get.call(null,p2__53953_SHARP_,key),p2__53953_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_53954 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_53954);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_53954);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__53955,p__53956){
var map__53957 = p__53955;
var map__53957__$1 = ((((!((map__53957 == null)))?((((map__53957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53957):map__53957);
var on_cssload = cljs.core.get.call(null,map__53957__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__53958 = p__53956;
var map__53958__$1 = ((((!((map__53958 == null)))?((((map__53958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53958):map__53958);
var files_msg = map__53958__$1;
var files = cljs.core.get.call(null,map__53958__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1516433049247
