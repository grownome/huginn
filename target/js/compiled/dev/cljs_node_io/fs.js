// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs_node_io.fs');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
cljs_node_io.fs.fs = require("fs");
cljs_node_io.fs.path = require("path");
/**
 * @type {!string}
 */
cljs_node_io.fs.sep = cljs_node_io.fs.path.sep;
/**
 * Synchronous stat
 * @param {!string} pathstring
 * @return {!fs.Stats} file stats object
 */
cljs_node_io.fs.stat = (function cljs_node_io$fs$stat(pathstring){
return cljs_node_io.fs.fs.statSync(pathstring);
});
/**
 * Asynchronous stat
 * @param {!string} pathstr
 * @return {!Channel} promise-chan receiving [?err ?fs.Stats]
 */
cljs_node_io.fs.astat = (function cljs_node_io$fs$astat(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.stat(pathstr,((function (c){
return (function() { 
var G__39376__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__39376 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39377__i = 0, G__39377__a = new Array(arguments.length -  0);
while (G__39377__i < G__39377__a.length) {G__39377__a[G__39377__i] = arguments[G__39377__i + 0]; ++G__39377__i;}
  args = new cljs.core.IndexedSeq(G__39377__a,0,null);
} 
return G__39376__delegate.call(this,args);};
G__39376.cljs$lang$maxFixedArity = 0;
G__39376.cljs$lang$applyTo = (function (arglist__39378){
var args = cljs.core.seq(arglist__39378);
return G__39376__delegate(args);
});
G__39376.cljs$core$IFn$_invoke$arity$variadic = G__39376__delegate;
return G__39376;
})()
;})(c))
);

return c;
});
/**
 * Synchronous lstat identical to stat(), except that if path is a symbolic link,
 * then the link itself is stat-ed, not the file that it refers to
 * @param {!string} pathstr
 * @return {!fs.Stats} file stats object
 */
cljs_node_io.fs.lstat = (function cljs_node_io$fs$lstat(pathstr){
return cljs_node_io.fs.fs.lstatSync(pathstr);
});
/**
 * Asynchronous lstat
 * @param {!string} pathstr
 * @return {!Channel} promise-chan receiving [?err ?fs.Stats]
 */
cljs_node_io.fs.alstat = (function cljs_node_io$fs$alstat(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.lstat(pathstr,((function (c){
return (function() { 
var G__39379__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__39379 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39380__i = 0, G__39380__a = new Array(arguments.length -  0);
while (G__39380__i < G__39380__a.length) {G__39380__a[G__39380__i] = arguments[G__39380__i + 0]; ++G__39380__i;}
  args = new cljs.core.IndexedSeq(G__39380__a,0,null);
} 
return G__39379__delegate.call(this,args);};
G__39379.cljs$lang$maxFixedArity = 0;
G__39379.cljs$lang$applyTo = (function (arglist__39381){
var args = cljs.core.seq(arglist__39381);
return G__39379__delegate(args);
});
G__39379.cljs$core$IFn$_invoke$arity$variadic = G__39379__delegate;
return G__39379;
})()
;})(c))
);

return c;
});
/**
 * Convert a fs.Stats object to edn. Function are swapped out for their return values.
 * This is useful at repl but not particularly efficient.
 * @param {!fs.Stats} st
 * @return {!IMap}
 */
cljs_node_io.fs.stat__GT_clj = (function cljs_node_io$fs$stat__GT_clj(st){
var ks = goog.object.getKeys(st);
var vs = goog.object.getValues(st);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.remove.call(null,((function (ks,vs){
return (function (p1__39382_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.nth.call(null,p1__39382_SHARP_,(0)),"_checkModeProperty");
});})(ks,vs))
),cljs.core.map.call(null,((function (ks,vs){
return (function (p__39383){
var vec__39384 = p__39383;
var k = cljs.core.nth.call(null,vec__39384,(0),null);
var v = cljs.core.nth.call(null,vec__39384,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),((cljs.core.fn_QMARK_.call(null,v))?v.apply(st):v)], null);
});})(ks,vs))
)),cljs.core.map.call(null,cljs.core.vector,ks,vs));
});
/**
 * @param {!Array<!Number>} bita :: an array of 1s an 0s
 * @return {!Number} integer
 */
cljs_node_io.fs.bita__GT_int = (function cljs_node_io$fs$bita__GT_int(bita){
return parseInt(bita.join(""),(2));
});
/**
 * @param {!fs.Stats} s :: a fs.Stats object
 * @return {!Array<Number>}
 */
cljs_node_io.fs.stat__GT_perm_bita = (function cljs_node_io$fs$stat__GT_perm_bita(s){
var mode = (s["mode"]);
var ownr = (mode & (256));
var ownw = (mode & (128));
var ownx = (mode & (64));
var grpr = (mode & (32));
var grpw = (mode & (16));
var grpx = (mode & (8));
var othr = (mode & (4));
var othw = (mode & (2));
var othx = (mode & (1));
var a = [ownr,ownw,ownx,grpr,grpw,grpx,othr,othw,othx];
var a__9957__auto__ = a;
var l__9958__auto__ = a__9957__auto__.length;
var res = cljs.core.aclone.call(null,a__9957__auto__);
var i = (0);
while(true){
if((i < l__9958__auto__)){
(res[i] = ((!(((a[i]) === (0))))?(1):(0)));

var G__39387 = (i + (1));
i = G__39387;
continue;
} else {
return res;
}
break;
}
});
/**
 * @param {!fs.Stats} st
 * @return {!Number}
 */
cljs_node_io.fs.permissions = (function cljs_node_io$fs$permissions(st){
return cljs_node_io.fs.bita__GT_int.call(null,cljs_node_io.fs.stat__GT_perm_bita.call(null,st));
});
/**
 * @return {!IMap}
 */
cljs_node_io.fs.gid_uid = (function cljs_node_io$fs$gid_uid(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gid","gid",-714078321),process.getgid(),new cljs.core.Keyword(null,"uid","uid",-1447769400),process.getuid()], null);
});
/**
 * @param {!string} pathstr
 * @return {!boolean} is the file hidden (unix only)
 */
cljs_node_io.fs.hidden_QMARK_ = (function cljs_node_io$fs$hidden_QMARK_(pathstr){
return (new RegExp("(^|\\/)\\.[^\\/\\.]")).test(pathstr);
});
/**
 * @param {!string} pathstring
 * @return {!boolean} iff abstract pathname exists and is a directory
 */
cljs_node_io.fs.dir_QMARK_ = (function cljs_node_io$fs$dir_QMARK_(pathstring){
if(typeof pathstring === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstring)"));
}

var stats = (function (){try{return cljs_node_io.fs.fs.statSync(pathstring);
}catch (e39388){if((e39388 instanceof Error)){
var e = e39388;
return false;
} else {
throw e39388;

}
}})();
if(cljs.core.not.call(null,stats)){
return false;
} else {
return stats.isDirectory();
}
});
/**
 * Asynchronous directory predicate.
 * @param {!string} pathstr
 * @return {!Channel} promise-chan receiving boolean
 */
cljs_node_io.fs.adir_QMARK_ = (function cljs_node_io$fs$adir_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
var stat_ch = cljs_node_io.fs.astat.call(null,pathstr);
cljs.core.async.take_BANG_.call(null,stat_ch,((function (c,stat_ch){
return (function (p__39389){
var vec__39390 = p__39389;
var err = cljs.core.nth.call(null,vec__39390,(0),null);
var stats = cljs.core.nth.call(null,vec__39390,(1),null);
return cljs.core.async.put_BANG_.call(null,c,((cljs.core.not.call(null,err))?stats.isDirectory():false));
});})(c,stat_ch))
);

return c;
});
/**
 * Synchronous file predicate
 * @param {!string} pathstring
 * @return {!boolean} iff abstract pathname exists and is a file
 */
cljs_node_io.fs.file_QMARK_ = (function cljs_node_io$fs$file_QMARK_(pathstring){
if(typeof pathstring === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstring)"));
}

var stats = (function (){try{return cljs_node_io.fs.lstat.call(null,pathstring);
}catch (e39393){if((e39393 instanceof Error)){
var e = e39393;
return false;
} else {
throw e39393;

}
}})();
if(cljs.core.not.call(null,stats)){
return false;
} else {
return stats.isFile();
}
});
/**
 * Asynchronous file predicate.
 * @param {!string} pathstr
 * @return {!Channel} promise-chan receiving boolean
 */
cljs_node_io.fs.afile_QMARK_ = (function cljs_node_io$fs$afile_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
var stat_ch = cljs_node_io.fs.alstat.call(null,pathstr);
cljs.core.async.take_BANG_.call(null,stat_ch,((function (c,stat_ch){
return (function (p__39394){
var vec__39395 = p__39394;
var err = cljs.core.nth.call(null,vec__39395,(0),null);
var stats = cljs.core.nth.call(null,vec__39395,(1),null);
return cljs.core.async.put_BANG_.call(null,c,((cljs.core.not.call(null,err))?stats.isFile():false));
});})(c,stat_ch))
);

return c;
});
/**
 * @param {!string} pathstr :: path to test
 * @return {!boolean} is pathstr an absolute path
 */
cljs_node_io.fs.absolute_QMARK_ = (function cljs_node_io$fs$absolute_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

return cljs_node_io.fs.path.isAbsolute.call(null,pathstr);
});
/**
 * Synchronously test if a file or directory exists
 * @param {!string} pathstr :: file path to test
 * @return {!boolean}
 */
cljs_node_io.fs.fexists_QMARK_ = (function cljs_node_io$fs$fexists_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

try{cljs_node_io.fs.fs.accessSync(pathstr,cljs_node_io.fs.fs.F_OK);

return true;
}catch (e39398){if((e39398 instanceof Error)){
var e = e39398;
return false;
} else {
throw e39398;

}
}});
/**
 * Asynchronously test if a file or directory exists
 * @param {!string} pathstr
 * @return {!Channel} promise-chan receiving boolean
 */
cljs_node_io.fs.afexists_QMARK_ = (function cljs_node_io$fs$afexists_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.access(pathstr,cljs_node_io.fs.fs.F_OK,((function (c){
return (function (e){
return cljs.core.async.put_BANG_.call(null,c,((cljs.core.not.call(null,e))?true:false));
});})(c))
);

return c;
});
/**
 * Synchronously test if a file is readable to the process
 * @param {!string} pathstr :: path to test for process read permission
 * @return {!boolean}
 */
cljs_node_io.fs.readable_QMARK_ = (function cljs_node_io$fs$readable_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

try{cljs_node_io.fs.fs.accessSync(pathstr,cljs_node_io.fs.fs.R_OK);

return true;
}catch (e39399){if((e39399 instanceof Error)){
var e = e39399;
return false;
} else {
throw e39399;

}
}});
/**
 * Asynchronously test if a file is readable to the process
 * @param {!string} pathstr
 * @return {!Channel} promise-chan receiving boolean
 */
cljs_node_io.fs.areadable_QMARK_ = (function cljs_node_io$fs$areadable_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.access(pathstr,cljs_node_io.fs.fs.R_OK,((function (c){
return (function (e){
return cljs.core.async.put_BANG_.call(null,c,((cljs.core.not.call(null,e))?true:false));
});})(c))
);

return c;
});
/**
 * Synchronously test if a file is writable to the process
 * @param {!string} pathstr :: path to test for process write permission
 * @return {!boolean}
 */
cljs_node_io.fs.writable_QMARK_ = (function cljs_node_io$fs$writable_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

try{cljs_node_io.fs.fs.accessSync(pathstr,cljs_node_io.fs.fs.W_OK);

return true;
}catch (e39400){if((e39400 instanceof Error)){
var e = e39400;
return false;
} else {
throw e39400;

}
}});
/**
 * Asynchronously test if a file is writable to the process
 * @param {!string} pathstr :: path to test for process write permission
 * @return {!Channel} promise-chan receiving boolean
 */
cljs_node_io.fs.awritable_QMARK_ = (function cljs_node_io$fs$awritable_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.access(pathstr,cljs_node_io.fs.fs.W_OK,((function (c){
return (function (e){
return cljs.core.async.put_BANG_.call(null,c,((cljs.core.not.call(null,e))?true:false));
});})(c))
);

return c;
});
/**
 * @param {!string} pathstr :: path to test for process executable permission
 * @return {!boolean}
 */
cljs_node_io.fs.executable_QMARK_ = (function cljs_node_io$fs$executable_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

if(!(cljs.core._EQ_.call(null,"win32",process.platform))){
try{cljs_node_io.fs.fs.accessSync(pathstr,cljs_node_io.fs.fs.X_OK);

return true;
}catch (e39401){if((e39401 instanceof Error)){
var e = e39401;
return false;
} else {
throw e39401;

}
}} else {
throw Error("Testing if a file is executable has no effect on Windows");
}
});
/**
 * Asynchronously test if a file is executable to the process
 * @param {!string} pathstr :: path to test for process execute permission
 * @return {!Channel} promise-chan receiving boolean
 */
cljs_node_io.fs.aexecutable_QMARK_ = (function cljs_node_io$fs$aexecutable_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

if(!(cljs.core._EQ_.call(null,"win32",process.platform))){
var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.access(pathstr,cljs_node_io.fs.fs.X_OK,((function (c){
return (function (e){
return cljs.core.async.put_BANG_.call(null,c,((cljs.core.not.call(null,e))?true:false));
});})(c))
);

return c;
} else {
throw Error("Testing if a file is executable has no effect on Windows");
}
});
/**
 * Synchronous test for symbolic link
 * @param {!string} pathstr :: path to test
 * @return {!boolean}
 */
cljs_node_io.fs.symlink_QMARK_ = (function cljs_node_io$fs$symlink_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var stats = (function (){try{return cljs_node_io.fs.lstat.call(null,pathstr);
}catch (e39402){if((e39402 instanceof Error)){
var e = e39402;
return false;
} else {
throw e39402;

}
}})();
if(cljs.core.not.call(null,stats)){
return false;
} else {
return stats.isSymbolicLink();
}
});
/**
 * Asynchronously test if path is a symbolic link
 * @param {!string} pathstr :: path to test
 * @return {!Channel} promise-chan receiving boolean
 */
cljs_node_io.fs.asymlink_QMARK_ = (function cljs_node_io$fs$asymlink_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
var stat_ch = cljs_node_io.fs.alstat.call(null,pathstr);
cljs.core.async.take_BANG_.call(null,stat_ch,((function (c,stat_ch){
return (function (p__39403){
var vec__39404 = p__39403;
var err = cljs.core.nth.call(null,vec__39404,(0),null);
var stats = cljs.core.nth.call(null,vec__39404,(1),null);
return cljs.core.async.put_BANG_.call(null,c,((cljs.core.not.call(null,err))?stats.isSymbolicLink():false));
});})(c,stat_ch))
);

return c;
});
/**
 * @param {!string} pathstring :: path to get parent of
 * @return {!string} the parent directory
 */
cljs_node_io.fs.dirname = (function cljs_node_io$fs$dirname(pathstring){
return cljs_node_io.fs.path.dirname(pathstring);
});
/**
 * @return {!string}
 */
cljs_node_io.fs.basename = (function cljs_node_io$fs$basename(var_args){
var G__39408 = arguments.length;
switch (G__39408) {
case 1:
return cljs_node_io.fs.basename.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_node_io.fs.basename.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_node_io.fs.basename.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs_node_io.fs.path.basename(p);
});

cljs_node_io.fs.basename.cljs$core$IFn$_invoke$arity$2 = (function (p,ext){
return cljs_node_io.fs.path.basename(p,ext);
});

cljs_node_io.fs.basename.cljs$lang$maxFixedArity = 2;

/**
 * @return {!string}
 */
cljs_node_io.fs.resolve_path = (function cljs_node_io$fs$resolve_path(var_args){
var args__10212__auto__ = [];
var len__10205__auto___39411 = arguments.length;
var i__10206__auto___39412 = (0);
while(true){
if((i__10206__auto___39412 < len__10205__auto___39411)){
args__10212__auto__.push((arguments[i__10206__auto___39412]));

var G__39413 = (i__10206__auto___39412 + (1));
i__10206__auto___39412 = G__39413;
continue;
} else {
}
break;
}

var argseq__10213__auto__ = ((((0) < args__10212__auto__.length))?(new cljs.core.IndexedSeq(args__10212__auto__.slice((0)),(0),null)):null);
return cljs_node_io.fs.resolve_path.cljs$core$IFn$_invoke$arity$variadic(argseq__10213__auto__);
});

cljs_node_io.fs.resolve_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
return cljs_node_io.fs.path.resolve.apply(null,cljs.core.apply.call(null,cljs.core.array,paths));
});

cljs_node_io.fs.resolve_path.cljs$lang$maxFixedArity = (0);

cljs_node_io.fs.resolve_path.cljs$lang$applyTo = (function (seq39410){
return cljs_node_io.fs.resolve_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39410));
});

/**
 * @param {!string} pathstring :: pathstring to normalize
 * @return {!string}
 */
cljs_node_io.fs.normalize_path = (function cljs_node_io$fs$normalize_path(pathstring){
return cljs_node_io.fs.path.normalize(pathstring);
});
/**
 * @param {!string} pathstring :: file to get extension from
 * @return {!string}
 */
cljs_node_io.fs.ext = (function cljs_node_io$fs$ext(pathstring){
return cljs_node_io.fs.path.extname(pathstring);
});
/**
 * Synchronous realpath
 * @param {!string} pathstr
 * @return {!string} resolved path
 */
cljs_node_io.fs.realpath = (function cljs_node_io$fs$realpath(pathstr){
return cljs_node_io.fs.fs.realpathSync(pathstr);
});
/**
 * Asynchronous realpath
 * @param {!string} pathstr
 * @return {!Channel} promise-chan recieving [?err ?resolvedPathstr]
 */
cljs_node_io.fs.arealpath = (function cljs_node_io$fs$arealpath(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.realpath(pathstr,((function (c){
return (function() { 
var G__39414__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__39414 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39415__i = 0, G__39415__a = new Array(arguments.length -  0);
while (G__39415__i < G__39415__a.length) {G__39415__a[G__39415__i] = arguments[G__39415__i + 0]; ++G__39415__i;}
  args = new cljs.core.IndexedSeq(G__39415__a,0,null);
} 
return G__39414__delegate.call(this,args);};
G__39414.cljs$lang$maxFixedArity = 0;
G__39414.cljs$lang$applyTo = (function (arglist__39416){
var args = cljs.core.seq(arglist__39416);
return G__39414__delegate(args);
});
G__39414.cljs$core$IFn$_invoke$arity$variadic = G__39414__delegate;
return G__39414;
})()
;})(c))
);

return c;
});
/**
 * Synchronous readlink
 * @param {!string} pathstr :: the symbolic link to read
 * @return {!string} the symbolic link's string value
 */
cljs_node_io.fs.readlink = (function cljs_node_io$fs$readlink(pathstr){
return cljs_node_io.fs.fs.readlinkSync(pathstr);
});
/**
 * Asynchronous readlink
 * @param {!string} pathstr :: the symbolic link to read
 * @return {!Channel} promise-chan receiving [?err ?linkstring]
 */
cljs_node_io.fs.areadlink = (function cljs_node_io$fs$areadlink(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.readlink(pathstr,((function (c){
return (function() { 
var G__39417__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__39417 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39418__i = 0, G__39418__a = new Array(arguments.length -  0);
while (G__39418__i < G__39418__a.length) {G__39418__a[G__39418__i] = arguments[G__39418__i + 0]; ++G__39418__i;}
  args = new cljs.core.IndexedSeq(G__39418__a,0,null);
} 
return G__39417__delegate.call(this,args);};
G__39417.cljs$lang$maxFixedArity = 0;
G__39417.cljs$lang$applyTo = (function (arglist__39419){
var args = cljs.core.seq(arglist__39419);
return G__39417__delegate(args);
});
G__39417.cljs$core$IFn$_invoke$arity$variadic = G__39417__delegate;
return G__39417;
})()
;})(c))
);

return c;
});
/**
 * Synchronously reads directory content
 * @param {!string} dirpath :: directory path to read
 * @return {!IVector} Vector<strings> representing directory content
 */
cljs_node_io.fs.readdir = (function cljs_node_io$fs$readdir(dirpath){
if(typeof dirpath === 'string'){
} else {
throw (new Error("Assert failed: (string? dirpath)"));
}

return cljs.core.vec.call(null,cljs_node_io.fs.fs.readdirSync(dirpath));
});
/**
 * Asynchronously reads directory content
 * @param {!string} dirpath :: directory path to read
 * @return {!Channel} promise-chan receiving [?err, ?Vector<string>]
 *  where strings are representing directory content
 */
cljs_node_io.fs.areaddir = (function cljs_node_io$fs$areaddir(dirpath){
if(typeof dirpath === 'string'){
} else {
throw (new Error("Assert failed: (string? dirpath)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.readdir(dirpath,((function (c){
return (function (e,data){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.vec.call(null,data)], null));
});})(c))
);

return c;
});
/**
 * Synchronous chmod
 * @param {!string} pathstr
 * @param {!Number} mode :: must be an integer
 * @return {nil} or throws
 */
cljs_node_io.fs.chmod = (function cljs_node_io$fs$chmod(pathstr,mode){
return cljs_node_io.fs.fs.chmodSync(pathstr,mode);
});
/**
 * Asynchronous chmod
 * @param {!string} pathstr
 * @param {!Number} mode :: must be an integer
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.achmod = (function cljs_node_io$fs$achmod(pathstr,mode){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.chmod(pathstr,mode,((function (c){
return (function() { 
var G__39420__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__39420 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39421__i = 0, G__39421__a = new Array(arguments.length -  0);
while (G__39421__i < G__39421__a.length) {G__39421__a[G__39421__i] = arguments[G__39421__i + 0]; ++G__39421__i;}
  args = new cljs.core.IndexedSeq(G__39421__a,0,null);
} 
return G__39420__delegate.call(this,args);};
G__39420.cljs$lang$maxFixedArity = 0;
G__39420.cljs$lang$applyTo = (function (arglist__39422){
var args = cljs.core.seq(arglist__39422);
return G__39420__delegate(args);
});
G__39420.cljs$core$IFn$_invoke$arity$variadic = G__39420__delegate;
return G__39420;
})()
;})(c))
);

return c;
});
/**
 * Synchronous lchmod
 * @param {!string} pathstr
 * @param {!Number} mode :: must be an integer
 * @return {nil}
 */
cljs_node_io.fs.lchmod = (function cljs_node_io$fs$lchmod(pathstr,mode){
return cljs_node_io.fs.fs.lchmodSync(pathstr,mode);
});
/**
 * Asynchronous lchmod
 * @param {!string} pathstr
 * @param {!Number} mode :: must be an integer
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.alchmod = (function cljs_node_io$fs$alchmod(pathstr,mode){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.lchmod(pathstr,mode,((function (c){
return (function() { 
var G__39423__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__39423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39424__i = 0, G__39424__a = new Array(arguments.length -  0);
while (G__39424__i < G__39424__a.length) {G__39424__a[G__39424__i] = arguments[G__39424__i + 0]; ++G__39424__i;}
  args = new cljs.core.IndexedSeq(G__39424__a,0,null);
} 
return G__39423__delegate.call(this,args);};
G__39423.cljs$lang$maxFixedArity = 0;
G__39423.cljs$lang$applyTo = (function (arglist__39425){
var args = cljs.core.seq(arglist__39425);
return G__39423__delegate(args);
});
G__39423.cljs$core$IFn$_invoke$arity$variadic = G__39423__delegate;
return G__39423;
})()
;})(c))
);

return c;
});
/**
 * Synchronous chown
 * @param {!string} pathstr
 * @param {!Number} uid
 * @param {!Number} gid
 * @return {nil}
 */
cljs_node_io.fs.chown = (function cljs_node_io$fs$chown(pathstr,uid,gid){
return cljs_node_io.fs.fs.chownSync(pathstr,uid,gid);
});
/**
 * Asynchronous chown
 * @param {!string} pathstr
 * @param {!Number} uid
 * @param {!Number} gid
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.achown = (function cljs_node_io$fs$achown(pathstr,uid,gid){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.chown(pathstr,uid,gid,((function (c){
return (function() { 
var G__39426__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__39426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39427__i = 0, G__39427__a = new Array(arguments.length -  0);
while (G__39427__i < G__39427__a.length) {G__39427__a[G__39427__i] = arguments[G__39427__i + 0]; ++G__39427__i;}
  args = new cljs.core.IndexedSeq(G__39427__a,0,null);
} 
return G__39426__delegate.call(this,args);};
G__39426.cljs$lang$maxFixedArity = 0;
G__39426.cljs$lang$applyTo = (function (arglist__39428){
var args = cljs.core.seq(arglist__39428);
return G__39426__delegate(args);
});
G__39426.cljs$core$IFn$_invoke$arity$variadic = G__39426__delegate;
return G__39426;
})()
;})(c))
);

return c;
});
/**
 * Synchronous lchown
 * @param {!string} pathstr
 * @param {!Number} uid
 * @param {!Number} gid
 * @return {nil} or throws
 */
cljs_node_io.fs.lchown = (function cljs_node_io$fs$lchown(pathstr,uid,gid){
return cljs_node_io.fs.fs.lchownSync(pathstr,uid,gid);
});
/**
 * Asynchronous lchown
 * @param {!string} pathstr
 * @param {!Number} uid
 * @param {!Number} gid
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.alchown = (function cljs_node_io$fs$alchown(pathstr,uid,gid){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.lchown(pathstr,uid,gid,((function (c){
return (function() { 
var G__39429__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__39429 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39430__i = 0, G__39430__a = new Array(arguments.length -  0);
while (G__39430__i < G__39430__a.length) {G__39430__a[G__39430__i] = arguments[G__39430__i + 0]; ++G__39430__i;}
  args = new cljs.core.IndexedSeq(G__39430__a,0,null);
} 
return G__39429__delegate.call(this,args);};
G__39429.cljs$lang$maxFixedArity = 0;
G__39429.cljs$lang$applyTo = (function (arglist__39431){
var args = cljs.core.seq(arglist__39431);
return G__39429__delegate(args);
});
G__39429.cljs$core$IFn$_invoke$arity$variadic = G__39429__delegate;
return G__39429;
})()
;})(c))
);

return c;
});
/**
 * synchronous utimes
 * - If the value is NaN or Infinity, the value would get converted to Date.now()
 * - numerable strings ie '12235' are converted to numbers
 * @param {!string} pathstr
 * @param {(string|Number)} atime
 * @param {(string|Number)} mtime
 * @return {nil}
 */
cljs_node_io.fs.utimes = (function cljs_node_io$fs$utimes(pathstr,atime,mtime){
return cljs_node_io.fs.fs.utimesSync(pathstr,atime,mtime);
});
/**
 * asynchronous utimes
 * - If the value is NaN or Infinity, the value would get converted to Date.now()
 * - numerable strings ie '12235' are converted to numbers
 * @param {!string} pathstr
 * @param {(string|Number)} atime
 * @param {(string|Number)} mtime
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.autimes = (function cljs_node_io$fs$autimes(pathstr,atime,mtime){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.utimes(pathstr,atime,mtime,((function (c){
return (function() { 
var G__39432__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__39432 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39433__i = 0, G__39433__a = new Array(arguments.length -  0);
while (G__39433__i < G__39433__a.length) {G__39433__a[G__39433__i] = arguments[G__39433__i + 0]; ++G__39433__i;}
  args = new cljs.core.IndexedSeq(G__39433__a,0,null);
} 
return G__39432__delegate.call(this,args);};
G__39432.cljs$lang$maxFixedArity = 0;
G__39432.cljs$lang$applyTo = (function (arglist__39434){
var args = cljs.core.seq(arglist__39434);
return G__39432__delegate(args);
});
G__39432.cljs$core$IFn$_invoke$arity$variadic = G__39432__delegate;
return G__39432;
})()
;})(c))
);

return c;
});
/**
 * Synchronously create a directory
 * @param {!string} pathstr :: path of directory to create
 * @return {nil} or throws
 */
cljs_node_io.fs.mkdir = (function cljs_node_io$fs$mkdir(pathstr){
return cljs_node_io.fs.fs.mkdirSync(pathstr);
});
/**
 * Asynchronously create a directory
 * @param {!string} pathstr :: path of directory to create
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.amkdir = (function cljs_node_io$fs$amkdir(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.mkdir(pathstr,((function (c){
return (function() { 
var G__39435__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__39435 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39436__i = 0, G__39436__a = new Array(arguments.length -  0);
while (G__39436__i < G__39436__a.length) {G__39436__a[G__39436__i] = arguments[G__39436__i + 0]; ++G__39436__i;}
  args = new cljs.core.IndexedSeq(G__39436__a,0,null);
} 
return G__39435__delegate.call(this,args);};
G__39435.cljs$lang$maxFixedArity = 0;
G__39435.cljs$lang$applyTo = (function (arglist__39437){
var args = cljs.core.seq(arglist__39437);
return G__39435__delegate(args);
});
G__39435.cljs$core$IFn$_invoke$arity$variadic = G__39435__delegate;
return G__39435;
})()
;})(c))
);

return c;
});
/**
 * Synchronously remove a directory
 * @param {!string} pathstr :: path of directory to remove
 * @return {nil} or throws
 */
cljs_node_io.fs.rmdir = (function cljs_node_io$fs$rmdir(pathstr){
return cljs_node_io.fs.fs.rmdirSync(pathstr);
});
/**
 * Asynchronously remove a directory
 * @param {!string} pathstr :: path of directory to remove
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.armdir = (function cljs_node_io$fs$armdir(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.rmdir(pathstr,((function (c){
return (function() { 
var G__39438__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__39438 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39439__i = 0, G__39439__a = new Array(arguments.length -  0);
while (G__39439__i < G__39439__a.length) {G__39439__a[G__39439__i] = arguments[G__39439__i + 0]; ++G__39439__i;}
  args = new cljs.core.IndexedSeq(G__39439__a,0,null);
} 
return G__39438__delegate.call(this,args);};
G__39438.cljs$lang$maxFixedArity = 0;
G__39438.cljs$lang$applyTo = (function (arglist__39440){
var args = cljs.core.seq(arglist__39440);
return G__39438__delegate(args);
});
G__39438.cljs$core$IFn$_invoke$arity$variadic = G__39438__delegate;
return G__39438;
})()
;})(c))
);

return c;
});
/**
 * Synchronous link. Will not overwrite newpath if it exists.
 * @param {!string} srcpathstr
 * @param {!string} dstpathstr
 * @return {nil} or throws
 */
cljs_node_io.fs.link = (function cljs_node_io$fs$link(srcpathstr,dstpathstr){
if(typeof srcpathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? srcpathstr)"));
}

if(typeof dstpathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? dstpathstr)"));
}

return cljs_node_io.fs.fs.linkSync(srcpathstr,dstpathstr);
});
/**
 * Synchronous link. Will not overwrite newpath if it exists.
 * @param {!string} srcpathstr
 * @param {!string} dstpathstr
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.alink = (function cljs_node_io$fs$alink(srcpathstr,dstpathstr){
if(typeof srcpathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? srcpathstr)"));
}

if(typeof dstpathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? dstpathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.link(srcpathstr,dstpathstr,((function (c){
return (function() { 
var G__39441__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__39441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39442__i = 0, G__39442__a = new Array(arguments.length -  0);
while (G__39442__i < G__39442__a.length) {G__39442__a[G__39442__i] = arguments[G__39442__i + 0]; ++G__39442__i;}
  args = new cljs.core.IndexedSeq(G__39442__a,0,null);
} 
return G__39441__delegate.call(this,args);};
G__39441.cljs$lang$maxFixedArity = 0;
G__39441.cljs$lang$applyTo = (function (arglist__39443){
var args = cljs.core.seq(arglist__39443);
return G__39441__delegate(args);
});
G__39441.cljs$core$IFn$_invoke$arity$variadic = G__39441__delegate;
return G__39441;
})()
;})(c))
);

return c;
});
/**
 * Synchronous symlink.
 * @param {!string} target :: what gets pointed to
 * @param {!string} pathstr :: the new symbolic link that points to target
 * @return {nil} or throws
 */
cljs_node_io.fs.symlink = (function cljs_node_io$fs$symlink(target,pathstr){
return cljs_node_io.fs.fs.symlinkSync(target,pathstr);
});
/**
 * Synchronous symlink.
 * @param {!string} targetstr :: what gets pointed to
 * @param {!string} pathstr :: the new symbolic link that points to target
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.asymlink = (function cljs_node_io$fs$asymlink(targetstr,pathstr){
if(typeof targetstr === 'string'){
} else {
throw (new Error("Assert failed: (string? targetstr)"));
}

if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.symlink(targetstr,pathstr,((function (c){
return (function() { 
var G__39444__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__39444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39445__i = 0, G__39445__a = new Array(arguments.length -  0);
while (G__39445__i < G__39445__a.length) {G__39445__a[G__39445__i] = arguments[G__39445__i + 0]; ++G__39445__i;}
  args = new cljs.core.IndexedSeq(G__39445__a,0,null);
} 
return G__39444__delegate.call(this,args);};
G__39444.cljs$lang$maxFixedArity = 0;
G__39444.cljs$lang$applyTo = (function (arglist__39446){
var args = cljs.core.seq(arglist__39446);
return G__39444__delegate(args);
});
G__39444.cljs$core$IFn$_invoke$arity$variadic = G__39444__delegate;
return G__39444;
})()
;})(c))
);

return c;
});
/**
 * Synchronously unlink a file.
 * @param {!string} pathstr :: path of file to unlink
 * @return {nil} or throws
 */
cljs_node_io.fs.unlink = (function cljs_node_io$fs$unlink(pathstr){
return cljs_node_io.fs.fs.unlinkSync(pathstr);
});
/**
 * Asynchronously unlink a file
 * @param {!string} pathstr :: path of file to unlink
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.aunlink = (function cljs_node_io$fs$aunlink(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.unlink(pathstr,((function (c){
return (function() { 
var G__39447__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__39447 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39448__i = 0, G__39448__a = new Array(arguments.length -  0);
while (G__39448__i < G__39448__a.length) {G__39448__a[G__39448__i] = arguments[G__39448__i + 0]; ++G__39448__i;}
  args = new cljs.core.IndexedSeq(G__39448__a,0,null);
} 
return G__39447__delegate.call(this,args);};
G__39447.cljs$lang$maxFixedArity = 0;
G__39447.cljs$lang$applyTo = (function (arglist__39449){
var args = cljs.core.seq(arglist__39449);
return G__39447__delegate(args);
});
G__39447.cljs$core$IFn$_invoke$arity$variadic = G__39447__delegate;
return G__39447;
})()
;})(c))
);

return c;
});
/**
 * Synchronously delete the file or directory path
 * @param {!string} pathstr :: can be file or directory
 * @return {nil} or throws
 */
cljs_node_io.fs.rm = (function cljs_node_io$fs$rm(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

if(cljs_node_io.fs.dir_QMARK_.call(null,pathstr)){
return cljs_node_io.fs.rmdir.call(null,pathstr);
} else {
return cljs_node_io.fs.unlink.call(null,pathstr);
}
});
/**
 * Asynchronously delete the file or directory path
 * @param {!string} pathstr
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.arm = (function cljs_node_io$fs$arm(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
var dc = cljs_node_io.fs.adir_QMARK_.call(null,pathstr);
cljs.core.async.take_BANG_.call(null,dc,((function (c,dc){
return (function (d_QMARK_){
return cljs.core.async.take_BANG_.call(null,(cljs.core.truth_(d_QMARK_)?cljs_node_io.fs.armdir.call(null,pathstr):cljs_node_io.fs.aunlink.call(null,pathstr)),((function (c,dc){
return (function (ev){
return cljs.core.async.put_BANG_.call(null,c,ev);
});})(c,dc))
);
});})(c,dc))
);

return c;
});
/**
 * @param {!string} pathstr :: path to a directory to recursively delete. Deletes a passed file as well.
 * @return {nil} or throws
 */
cljs_node_io.fs.rm_r = (function cljs_node_io$fs$rm_r(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

if(cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["/",null,"\\\\",null,"\\",null,"//",null], null), null).call(null,pathstr)) === false){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["you just tried to delete root, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,pathstr)),", be more careful."].join('')),"\n","(false? (boolean (#{\"/\" \"\\\\\\\\\" \"\\\\\" \"//\"} pathstr)))"].join('')));
}

if(cljs_node_io.fs.dir_QMARK_.call(null,pathstr)){
var seq__39450_39454 = cljs.core.seq.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs_node_io.fs.resolve_path,pathstr),cljs_node_io.fs.readdir.call(null,pathstr)));
var chunk__39451_39455 = null;
var count__39452_39456 = (0);
var i__39453_39457 = (0);
while(true){
if((i__39453_39457 < count__39452_39456)){
var p_39458 = cljs.core._nth.call(null,chunk__39451_39455,i__39453_39457);
cljs_node_io.fs.rm_r.call(null,p_39458);

var G__39459 = seq__39450_39454;
var G__39460 = chunk__39451_39455;
var G__39461 = count__39452_39456;
var G__39462 = (i__39453_39457 + (1));
seq__39450_39454 = G__39459;
chunk__39451_39455 = G__39460;
count__39452_39456 = G__39461;
i__39453_39457 = G__39462;
continue;
} else {
var temp__5457__auto___39463 = cljs.core.seq.call(null,seq__39450_39454);
if(temp__5457__auto___39463){
var seq__39450_39464__$1 = temp__5457__auto___39463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39450_39464__$1)){
var c__9857__auto___39465 = cljs.core.chunk_first.call(null,seq__39450_39464__$1);
var G__39466 = cljs.core.chunk_rest.call(null,seq__39450_39464__$1);
var G__39467 = c__9857__auto___39465;
var G__39468 = cljs.core.count.call(null,c__9857__auto___39465);
var G__39469 = (0);
seq__39450_39454 = G__39466;
chunk__39451_39455 = G__39467;
count__39452_39456 = G__39468;
i__39453_39457 = G__39469;
continue;
} else {
var p_39470 = cljs.core.first.call(null,seq__39450_39464__$1);
cljs_node_io.fs.rm_r.call(null,p_39470);

var G__39471 = cljs.core.next.call(null,seq__39450_39464__$1);
var G__39472 = null;
var G__39473 = (0);
var G__39474 = (0);
seq__39450_39454 = G__39471;
chunk__39451_39455 = G__39472;
count__39452_39456 = G__39473;
i__39453_39457 = G__39474;
continue;
}
} else {
}
}
break;
}

return cljs_node_io.fs.rmdir.call(null,pathstr);
} else {
return cljs_node_io.fs.unlink.call(null,pathstr);
}
});
/**
 * asynchronous recursive delete. Crawls in order provided by readdir and makes unlink/rmdir calls sequentially
 * after the previous has completed. Breaks on any err which is returned as [err].
 * @param {!string} pathstr
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.arm_r = (function cljs_node_io$fs$arm_r(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

if(cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["/",null,"\\\\",null,"\\",null,"//",null], null), null).call(null,pathstr)) === false){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["you just tried to delete root, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,pathstr)),", be more careful."].join('')),"\n","(false? (boolean (#{\"/\" \"\\\\\\\\\" \"\\\\\" \"//\"} pathstr)))"].join('')));
}

var c = cljs.core.async.promise_chan.call(null);
var c__17681__auto___39569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___39569,c){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___39569,c){
return (function (state_39540){
var state_val_39541 = (state_39540[(1)]);
if((state_val_39541 === (7))){
var inst_39486 = (state_39540[(7)]);
var inst_39489 = cljs.core.partial.call(null,cljs_node_io.fs.resolve_path,pathstr);
var inst_39490 = cljs.core.mapv.call(null,inst_39489,inst_39486);
var inst_39491 = inst_39490;
var state_39540__$1 = (function (){var statearr_39542 = state_39540;
(statearr_39542[(8)] = inst_39491);

return statearr_39542;
})();
var statearr_39543_39570 = state_39540__$1;
(statearr_39543_39570[(2)] = null);

(statearr_39543_39570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39541 === (20))){
var inst_39522 = (state_39540[(2)]);
var state_39540__$1 = state_39540;
var statearr_39544_39571 = state_39540__$1;
(statearr_39544_39571[(2)] = inst_39522);

(statearr_39544_39571[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39541 === (1))){
var inst_39475 = cljs_node_io.fs.adir_QMARK_.call(null,pathstr);
var state_39540__$1 = state_39540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39540__$1,(2),inst_39475);
} else {
if((state_val_39541 === (24))){
var inst_39534 = (state_39540[(2)]);
var state_39540__$1 = state_39540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39540__$1,(23),c,inst_39534);
} else {
if((state_val_39541 === (4))){
var inst_39532 = cljs_node_io.fs.aunlink.call(null,pathstr);
var state_39540__$1 = state_39540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39540__$1,(24),inst_39532);
} else {
if((state_val_39541 === (15))){
var inst_39503 = (state_39540[(9)]);
var inst_39502 = (state_39540[(2)]);
var inst_39503__$1 = cljs.core.nth.call(null,inst_39502,(0),null);
var inst_39504 = (inst_39503__$1 instanceof Error);
var state_39540__$1 = (function (){var statearr_39545 = state_39540;
(statearr_39545[(9)] = inst_39503__$1);

return statearr_39545;
})();
if(cljs.core.truth_(inst_39504)){
var statearr_39546_39572 = state_39540__$1;
(statearr_39546_39572[(1)] = (16));

} else {
var statearr_39547_39573 = state_39540__$1;
(statearr_39547_39573[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39541 === (21))){
var inst_39520 = (state_39540[(2)]);
var state_39540__$1 = state_39540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39540__$1,(20),c,inst_39520);
} else {
if((state_val_39541 === (13))){
var state_39540__$1 = state_39540;
var statearr_39548_39574 = state_39540__$1;
(statearr_39548_39574[(2)] = null);

(statearr_39548_39574[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39541 === (22))){
var inst_39528 = (state_39540[(2)]);
var state_39540__$1 = state_39540;
var statearr_39549_39575 = state_39540__$1;
(statearr_39549_39575[(2)] = inst_39528);

(statearr_39549_39575[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39541 === (6))){
var inst_39485 = (state_39540[(10)]);
var inst_39484 = (state_39540[(2)]);
var inst_39485__$1 = cljs.core.nth.call(null,inst_39484,(0),null);
var inst_39486 = cljs.core.nth.call(null,inst_39484,(1),null);
var inst_39487 = cljs.core.not.call(null,inst_39485__$1);
var state_39540__$1 = (function (){var statearr_39550 = state_39540;
(statearr_39550[(10)] = inst_39485__$1);

(statearr_39550[(7)] = inst_39486);

return statearr_39550;
})();
if(inst_39487){
var statearr_39551_39576 = state_39540__$1;
(statearr_39551_39576[(1)] = (7));

} else {
var statearr_39552_39577 = state_39540__$1;
(statearr_39552_39577[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39541 === (17))){
var inst_39491 = (state_39540[(8)]);
var inst_39509 = cljs.core.next.call(null,inst_39491);
var inst_39491__$1 = inst_39509;
var state_39540__$1 = (function (){var statearr_39553 = state_39540;
(statearr_39553[(8)] = inst_39491__$1);

return statearr_39553;
})();
var statearr_39554_39578 = state_39540__$1;
(statearr_39554_39578[(2)] = null);

(statearr_39554_39578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39541 === (3))){
var inst_39482 = cljs_node_io.fs.areaddir.call(null,pathstr);
var state_39540__$1 = state_39540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39540__$1,(6),inst_39482);
} else {
if((state_val_39541 === (12))){
var inst_39491 = (state_39540[(8)]);
var inst_39499 = cljs.core.first.call(null,inst_39491);
var inst_39500 = cljs_node_io.fs.arm_r.call(null,inst_39499);
var state_39540__$1 = state_39540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39540__$1,(15),inst_39500);
} else {
if((state_val_39541 === (2))){
var inst_39477 = (state_39540[(2)]);
var state_39540__$1 = state_39540;
if(cljs.core.truth_(inst_39477)){
var statearr_39555_39579 = state_39540__$1;
(statearr_39555_39579[(1)] = (3));

} else {
var statearr_39556_39580 = state_39540__$1;
(statearr_39556_39580[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39541 === (23))){
var inst_39536 = (state_39540[(2)]);
var state_39540__$1 = state_39540;
var statearr_39557_39581 = state_39540__$1;
(statearr_39557_39581[(2)] = inst_39536);

(statearr_39557_39581[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39541 === (19))){
var inst_39507 = (state_39540[(2)]);
var state_39540__$1 = state_39540;
var statearr_39558_39582 = state_39540__$1;
(statearr_39558_39582[(2)] = inst_39507);

(statearr_39558_39582[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39541 === (11))){
var inst_39517 = (state_39540[(2)]);
var inst_39518 = cljs_node_io.fs.armdir.call(null,pathstr);
var state_39540__$1 = (function (){var statearr_39559 = state_39540;
(statearr_39559[(11)] = inst_39517);

return statearr_39559;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39540__$1,(21),inst_39518);
} else {
if((state_val_39541 === (9))){
var inst_39530 = (state_39540[(2)]);
var state_39540__$1 = state_39540;
var statearr_39560_39583 = state_39540__$1;
(statearr_39560_39583[(2)] = inst_39530);

(statearr_39560_39583[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39541 === (5))){
var inst_39538 = (state_39540[(2)]);
var state_39540__$1 = state_39540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39540__$1,inst_39538);
} else {
if((state_val_39541 === (14))){
var inst_39515 = (state_39540[(2)]);
var state_39540__$1 = state_39540;
var statearr_39561_39584 = state_39540__$1;
(statearr_39561_39584[(2)] = inst_39515);

(statearr_39561_39584[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39541 === (16))){
var inst_39503 = (state_39540[(9)]);
var state_39540__$1 = state_39540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39540__$1,(19),c,inst_39503);
} else {
if((state_val_39541 === (10))){
var inst_39491 = (state_39540[(8)]);
var inst_39493 = (inst_39491 == null);
var inst_39494 = cljs.core.not.call(null,inst_39493);
var state_39540__$1 = state_39540;
if(inst_39494){
var statearr_39562_39585 = state_39540__$1;
(statearr_39562_39585[(1)] = (12));

} else {
var statearr_39563_39586 = state_39540__$1;
(statearr_39563_39586[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39541 === (18))){
var inst_39512 = (state_39540[(2)]);
var state_39540__$1 = state_39540;
var statearr_39564_39587 = state_39540__$1;
(statearr_39564_39587[(2)] = inst_39512);

(statearr_39564_39587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39541 === (8))){
var inst_39485 = (state_39540[(10)]);
var inst_39524 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39525 = [inst_39485];
var inst_39526 = (new cljs.core.PersistentVector(null,1,(5),inst_39524,inst_39525,null));
var state_39540__$1 = state_39540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39540__$1,(22),c,inst_39526);
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
});})(c__17681__auto___39569,c))
;
return ((function (switch__17591__auto__,c__17681__auto___39569,c){
return (function() {
var cljs_node_io$fs$arm_r_$_state_machine__17592__auto__ = null;
var cljs_node_io$fs$arm_r_$_state_machine__17592__auto____0 = (function (){
var statearr_39565 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39565[(0)] = cljs_node_io$fs$arm_r_$_state_machine__17592__auto__);

(statearr_39565[(1)] = (1));

return statearr_39565;
});
var cljs_node_io$fs$arm_r_$_state_machine__17592__auto____1 = (function (state_39540){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_39540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e39566){if((e39566 instanceof Object)){
var ex__17595__auto__ = e39566;
var statearr_39567_39588 = state_39540;
(statearr_39567_39588[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39589 = state_39540;
state_39540 = G__39589;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs_node_io$fs$arm_r_$_state_machine__17592__auto__ = function(state_39540){
switch(arguments.length){
case 0:
return cljs_node_io$fs$arm_r_$_state_machine__17592__auto____0.call(this);
case 1:
return cljs_node_io$fs$arm_r_$_state_machine__17592__auto____1.call(this,state_39540);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_node_io$fs$arm_r_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_node_io$fs$arm_r_$_state_machine__17592__auto____0;
cljs_node_io$fs$arm_r_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_node_io$fs$arm_r_$_state_machine__17592__auto____1;
return cljs_node_io$fs$arm_r_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___39569,c))
})();
var state__17683__auto__ = (function (){var statearr_39568 = f__17682__auto__.call(null);
(statearr_39568[(6)] = c__17681__auto___39569);

return statearr_39568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___39569,c))
);


return c;
});
/**
 * Synchronously rename a file.
 * @param {!string} oldpathstr :: file to rename
 * @param {!string} newpathstr :: what to rename it to
 * @return {nil}
 */
cljs_node_io.fs.rename = (function cljs_node_io$fs$rename(oldpathstr,newpathstr){
return cljs_node_io.fs.fs.renameSync(oldpathstr,newpathstr);
});
/**
 * Asynchronously rename a file
 * @param {!string} oldpathstr :: file to rename
 * @param {!string} newpathstr :: what to rename it to
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.arename = (function cljs_node_io$fs$arename(oldpathstr,newpathstr){
if(typeof oldpathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? oldpathstr)"));
}

if(typeof newpathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? newpathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.rename(oldpathstr,newpathstr,((function (c){
return (function() { 
var G__39590__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__39590 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39591__i = 0, G__39591__a = new Array(arguments.length -  0);
while (G__39591__i < G__39591__a.length) {G__39591__a[G__39591__i] = arguments[G__39591__i + 0]; ++G__39591__i;}
  args = new cljs.core.IndexedSeq(G__39591__a,0,null);
} 
return G__39590__delegate.call(this,args);};
G__39590.cljs$lang$maxFixedArity = 0;
G__39590.cljs$lang$applyTo = (function (arglist__39592){
var args = cljs.core.seq(arglist__39592);
return G__39590__delegate(args);
});
G__39590.cljs$core$IFn$_invoke$arity$variadic = G__39590__delegate;
return G__39590;
})()
;})(c))
);

return c;
});
/**
 * Synchronous truncate
 * @param {!string} pathstr
 * @param {!number} length
 * @return {nil} or throws
 */
cljs_node_io.fs.truncate = (function cljs_node_io$fs$truncate(pathstr,length){
return cljs_node_io.fs.fs.truncateSync(pathstr,length);
});
/**
 * Asynchronous truncate
 * @param {!string} pathstr
 * @param {!number} len
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.atruncate = (function cljs_node_io$fs$atruncate(pathstr,len){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.truncate(pathstr,len,((function (c){
return (function() { 
var G__39593__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__39593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39594__i = 0, G__39594__a = new Array(arguments.length -  0);
while (G__39594__i < G__39594__a.length) {G__39594__a[G__39594__i] = arguments[G__39594__i + 0]; ++G__39594__i;}
  args = new cljs.core.IndexedSeq(G__39594__a,0,null);
} 
return G__39593__delegate.call(this,args);};
G__39593.cljs$lang$maxFixedArity = 0;
G__39593.cljs$lang$applyTo = (function (arglist__39595){
var args = cljs.core.seq(arglist__39595);
return G__39593__delegate(args);
});
G__39593.cljs$core$IFn$_invoke$arity$variadic = G__39593__delegate;
return G__39593;
})()
;})(c))
);

return c;
});
/**
 * @param {!string} pathstr :: the file path to read
 * @param {!string} enc :: encoding , if "" (an explicit empty string), => raw buffer
 * @return {(buffer.Buffer|string)} or throw
 */
cljs_node_io.fs.readFile = (function cljs_node_io$fs$readFile(pathstr,enc){
return cljs_node_io.fs.fs.readFileSync(pathstr,enc);
});
/**
 * @param {!string} pathstr
 * @param {!string} enc :: if "" (an explicit empty string) => raw buffer
 * @return {!Channel} promise-chan receiving [?err ?(str|Buffer)] on successful read
 */
cljs_node_io.fs.areadFile = (function cljs_node_io$fs$areadFile(pathstr,enc){
var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.readFile(pathstr,enc,((function (c){
return (function() { 
var G__39596__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__39596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39597__i = 0, G__39597__a = new Array(arguments.length -  0);
while (G__39597__i < G__39597__a.length) {G__39597__a[G__39597__i] = arguments[G__39597__i + 0]; ++G__39597__i;}
  args = new cljs.core.IndexedSeq(G__39597__a,0,null);
} 
return G__39596__delegate.call(this,args);};
G__39596.cljs$lang$maxFixedArity = 0;
G__39596.cljs$lang$applyTo = (function (arglist__39598){
var args = cljs.core.seq(arglist__39598);
return G__39596__delegate(args);
});
G__39596.cljs$core$IFn$_invoke$arity$variadic = G__39596__delegate;
return G__39596;
})()
;})(c))
);

return c;
});
/**
 * synchronously writes content to file represented by pathstring.
 * @param {!string} pathstr :: file to write to
 * @param {(string|buffer.Buffer)} content :: if buffer, :encoding is ignored
 * @param {?IMap} opts :: {:encoding {string}, :append {boolean}, :flags {string}, :mode {int}}
 *  - flags override append
 *  - :encoding defaults to utf8
 * @return {nil} or throws
 */
cljs_node_io.fs.writeFile = (function cljs_node_io$fs$writeFile(pathstr,content,opts){
return cljs_node_io.fs.fs.writeFileSync(pathstr,content,({"flag": (function (){var or__8926__auto__ = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8926__auto__)){
return or__8926__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"append","append",-291298229).cljs$core$IFn$_invoke$arity$1(opts))){
return "a";
} else {
return "w";
}
}
})(), "mode": (function (){var or__8926__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8926__auto__)){
return or__8926__auto__;
} else {
return (438);
}
})(), "encoding": (function (){var or__8926__auto__ = new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8926__auto__)){
return or__8926__auto__;
} else {
return "utf8";
}
})()}));
});
/**
 * Asynchronously write to a file.
 * @param {!string} pathstring : file to write to
 * @param {(string|buffer.Buffer)} content : if buffer, :encoding is ignored
 * @param {?IMap} opts : :encoding {string}, :append {bool}, :flags {string}, :mode {int}
 *  - flags override append
 * @return {!Channel} promise-chan recieving [?err]
 */
cljs_node_io.fs.awriteFile = (function cljs_node_io$fs$awriteFile(pathstring,content,opts){
var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.writeFile(pathstring,content,({"flag": (function (){var or__8926__auto__ = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8926__auto__)){
return or__8926__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"append","append",-291298229).cljs$core$IFn$_invoke$arity$1(opts))){
return "a";
} else {
return "w";
}
}
})(), "mode": (function (){var or__8926__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8926__auto__)){
return or__8926__auto__;
} else {
return (438);
}
})(), "encoding": (function (){var or__8926__auto__ = new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8926__auto__)){
return or__8926__auto__;
} else {
return "utf8";
}
})()}),((function (c){
return (function() { 
var G__39599__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__39599 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39600__i = 0, G__39600__a = new Array(arguments.length -  0);
while (G__39600__i < G__39600__a.length) {G__39600__a[G__39600__i] = arguments[G__39600__i + 0]; ++G__39600__i;}
  args = new cljs.core.IndexedSeq(G__39600__a,0,null);
} 
return G__39599__delegate.call(this,args);};
G__39599.cljs$lang$maxFixedArity = 0;
G__39599.cljs$lang$applyTo = (function (arglist__39601){
var args = cljs.core.seq(arglist__39601);
return G__39599__delegate(args);
});
G__39599.cljs$core$IFn$_invoke$arity$variadic = G__39599__delegate;
return G__39599;
})()
;})(c))
);

return c;
});
cljs_node_io.fs.watcher__GT_ch = (function cljs_node_io$fs$watcher__GT_ch(var_args){
var G__39603 = arguments.length;
switch (G__39603) {
case 2:
return cljs_node_io.fs.watcher__GT_ch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_node_io.fs.watcher__GT_ch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_node_io.fs.watcher__GT_ch.cljs$core$IFn$_invoke$arity$2 = (function (FSWatcher,out_ch){
return cljs_node_io.fs.watcher__GT_ch.call(null,FSWatcher,out_ch,null);
});

cljs_node_io.fs.watcher__GT_ch.cljs$core$IFn$_invoke$arity$3 = (function (FSWatcher,out_ch,p__39604){
var map__39605 = p__39604;
var map__39605__$1 = ((((!((map__39605 == null)))?((((map__39605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39605):map__39605);
var key = cljs.core.get.call(null,map__39605__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var buf_or_n = cljs.core.get.call(null,map__39605__$1,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719),(10));
var G__39607_39609 = FSWatcher;
G__39607_39609.on("change",((function (G__39607_39609,map__39605,map__39605__$1,key,buf_or_n){
return (function (eventType,filename){
return cljs.core.async.put_BANG_.call(null,out_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,eventType)], null));
});})(G__39607_39609,map__39605,map__39605__$1,key,buf_or_n))
);

G__39607_39609.on("error",((function (G__39607_39609,map__39605,map__39605__$1,key,buf_or_n){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)], null));
});})(G__39607_39609,map__39605,map__39605__$1,key,buf_or_n))
);


return out_ch;
});

cljs_node_io.fs.watcher__GT_ch.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs_node_io.fs.Object}
*/
cljs_node_io.fs.Watcher = (function (FSWatcher,out){
this.FSWatcher = FSWatcher;
this.out = out;
});
cljs_node_io.fs.Watcher.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs_node_io.fs.Watcher.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.out,handler);
});

cljs_node_io.fs.Watcher.prototype.close = (function (){
var self__ = this;
var this$ = this;
self__.FSWatcher.close();

return cljs.core.async.put_BANG_.call(null,self__.out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close","close",1835149582)], null),((function (this$){
return (function (){
return cljs.core.async.close_BANG_.call(null,self__.out);
});})(this$))
);
});

cljs_node_io.fs.Watcher.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"FSWatcher","FSWatcher",-1658877931,null),new cljs.core.Symbol(null,"out","out",729986010,null)], null);
});

cljs_node_io.fs.Watcher.cljs$lang$type = true;

cljs_node_io.fs.Watcher.cljs$lang$ctorStr = "cljs-node-io.fs/Watcher";

cljs_node_io.fs.Watcher.cljs$lang$ctorPrWriter = (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs-node-io.fs/Watcher");
});

cljs_node_io.fs.__GT_Watcher = (function cljs_node_io$fs$__GT_Watcher(FSWatcher,out){
return (new cljs_node_io.fs.Watcher(FSWatcher,out));
});

/**
 * Watch a file or directory.
 * Make note of caveats https://nodejs.org/api/fs.html#fs_caveats
 * events : 'rename', 'change' , 'error', 'close'
 * opts :
 *  :peristent {boolean} (true) :: whether the process should continue as long as files are being watched.
 *  :recursive {boolean} (false) :: watch subdirectories
 *  :buf-or-n {(impl/Buffer|number)} (10) :: channel buffer
 *  :encoding {string} ('utf8') :: used to interpret passed filename
 * @return {!cljs-node-io.fs/Watcher}
 */
cljs_node_io.fs.watch = (function cljs_node_io$fs$watch(var_args){
var G__39612 = arguments.length;
switch (G__39612) {
case 1:
return cljs_node_io.fs.watch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_node_io.fs.watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_node_io.fs.watch.cljs$core$IFn$_invoke$arity$1 = (function (filename){
return cljs_node_io.fs.watch.call(null,filename,null);
});

cljs_node_io.fs.watch.cljs$core$IFn$_invoke$arity$2 = (function (filename,opts){
var defaults = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"persistent","persistent",885415113),true,new cljs.core.Keyword(null,"recursive","recursive",718885872),false,new cljs.core.Keyword(null,"encoding","encoding",1728578272),"utf8",new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719),(10)], null);
var opts__$1 = cljs.core.merge.call(null,defaults,opts);
var out = cljs.core.async.chan.call(null,cljs.core.get.call(null,opts__$1,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719)),cljs.core.map.call(null,((function (defaults,opts__$1){
return (function (p1__39610_SHARP_){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null),p1__39610_SHARP_);
});})(defaults,opts__$1))
));
var w = cljs_node_io.fs.fs.watch.call(null,filename,cljs.core.clj__GT_js.call(null,opts__$1));
return cljs_node_io.fs.__GT_Watcher.call(null,w,cljs_node_io.fs.watcher__GT_ch.call(null,w,out));
});

cljs_node_io.fs.watch.cljs$lang$maxFixedArity = 2;

/**
 * Prefer watch. Polls files and returns stat objects. Opts:
 *   :peristent {boolean} (true) :: whether the process should continue as long as files are being watched.
 *   :interval {number} (5007) :: polling interval in msecs
 *   :edn? {boolean} (true) :: converts stats to edn
 *   :buf-or-n {(impl/Buffer|number)} (10) :: channel buffer
 * @return {!Channel} <= [current fs.stat, previous fs.stat]
 */
cljs_node_io.fs.watchFile = (function cljs_node_io$fs$watchFile(var_args){
var G__39616 = arguments.length;
switch (G__39616) {
case 1:
return cljs_node_io.fs.watchFile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_node_io.fs.watchFile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_node_io.fs.watchFile.cljs$core$IFn$_invoke$arity$1 = (function (filename){
return cljs_node_io.fs.watchFile.call(null,filename,null);
});

cljs_node_io.fs.watchFile.cljs$core$IFn$_invoke$arity$2 = (function (filename,opts){
var defaults = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"interval","interval",1708495417),(5007),new cljs.core.Keyword(null,"persistent","persistent",885415113),true,new cljs.core.Keyword(null,"edn?","edn?",-499466946),true,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719),(10)], null);
var map__39617 = cljs.core.merge.call(null,defaults,opts);
var map__39617__$1 = ((((!((map__39617 == null)))?((((map__39617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39617):map__39617);
var opts__$1 = map__39617__$1;
var edn_QMARK_ = cljs.core.get.call(null,map__39617__$1,new cljs.core.Keyword(null,"edn?","edn?",-499466946));
var buf_or_n = cljs.core.get.call(null,map__39617__$1,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719));
var out = cljs.core.async.chan.call(null,buf_or_n,cljs.core.map.call(null,((function (defaults,map__39617,map__39617__$1,opts__$1,edn_QMARK_,buf_or_n){
return (function (p1__39614_SHARP_){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null),p1__39614_SHARP_);
});})(defaults,map__39617,map__39617__$1,opts__$1,edn_QMARK_,buf_or_n))
));
var cb = ((function (defaults,map__39617,map__39617__$1,opts__$1,edn_QMARK_,buf_or_n,out){
return (function (curr,prev){
return cljs.core.async.put_BANG_.call(null,out,(cljs.core.truth_(edn_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_node_io.fs.stat__GT_clj.call(null,curr),cljs_node_io.fs.stat__GT_clj.call(null,prev)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,prev], null)));
});})(defaults,map__39617,map__39617__$1,opts__$1,edn_QMARK_,buf_or_n,out))
;
var w = cljs_node_io.fs.fs.watchFile.call(null,filename,cljs.core.clj__GT_js.call(null,opts__$1),cb);
return out;
});

cljs_node_io.fs.watchFile.cljs$lang$maxFixedArity = 2;

/**
 * remove all watchers from a file
 * @param {!string} pathstr
 * @return {nil}
 */
cljs_node_io.fs.unwatchFile = (function cljs_node_io$fs$unwatchFile(pathstr){
return cljs_node_io.fs.fs.unwatchFile.call(null,pathstr);
});
/**
 * creates a file if non-existent, writes blank string to an existing
 * @param {!string} pathstr
 * @return {nil}
 */
cljs_node_io.fs.touch = (function cljs_node_io$fs$touch(pathstr){
return cljs_node_io.fs.writeFile.call(null,pathstr,"",null);
});
/**
 * creates a file if non-existent, writes blank string to an existing
 * @param {!string} pathstr
 * @return {!Channel} promise-chan recieving [?err]
 */
cljs_node_io.fs.atouch = (function cljs_node_io$fs$atouch(pathstr){
return cljs_node_io.fs.awriteFile.call(null,pathstr,"",null);
});

//# sourceMappingURL=fs.js.map
