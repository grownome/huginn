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
var G__47299__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__47299 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47300__i = 0, G__47300__a = new Array(arguments.length -  0);
while (G__47300__i < G__47300__a.length) {G__47300__a[G__47300__i] = arguments[G__47300__i + 0]; ++G__47300__i;}
  args = new cljs.core.IndexedSeq(G__47300__a,0,null);
} 
return G__47299__delegate.call(this,args);};
G__47299.cljs$lang$maxFixedArity = 0;
G__47299.cljs$lang$applyTo = (function (arglist__47301){
var args = cljs.core.seq(arglist__47301);
return G__47299__delegate(args);
});
G__47299.cljs$core$IFn$_invoke$arity$variadic = G__47299__delegate;
return G__47299;
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
var G__47302__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__47302 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47303__i = 0, G__47303__a = new Array(arguments.length -  0);
while (G__47303__i < G__47303__a.length) {G__47303__a[G__47303__i] = arguments[G__47303__i + 0]; ++G__47303__i;}
  args = new cljs.core.IndexedSeq(G__47303__a,0,null);
} 
return G__47302__delegate.call(this,args);};
G__47302.cljs$lang$maxFixedArity = 0;
G__47302.cljs$lang$applyTo = (function (arglist__47304){
var args = cljs.core.seq(arglist__47304);
return G__47302__delegate(args);
});
G__47302.cljs$core$IFn$_invoke$arity$variadic = G__47302__delegate;
return G__47302;
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
return (function (p1__47305_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.nth.call(null,p1__47305_SHARP_,(0)),"_checkModeProperty");
});})(ks,vs))
),cljs.core.map.call(null,((function (ks,vs){
return (function (p__47306){
var vec__47307 = p__47306;
var k = cljs.core.nth.call(null,vec__47307,(0),null);
var v = cljs.core.nth.call(null,vec__47307,(1),null);
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
var a__42443__auto__ = a;
var l__42444__auto__ = a__42443__auto__.length;
var res = cljs.core.aclone.call(null,a__42443__auto__);
var i = (0);
while(true){
if((i < l__42444__auto__)){
(res[i] = ((!(((a[i]) === (0))))?(1):(0)));

var G__47310 = (i + (1));
i = G__47310;
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
}catch (e47311){if((e47311 instanceof Error)){
var e = e47311;
return false;
} else {
throw e47311;

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
return (function (p__47312){
var vec__47313 = p__47312;
var err = cljs.core.nth.call(null,vec__47313,(0),null);
var stats = cljs.core.nth.call(null,vec__47313,(1),null);
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
}catch (e47316){if((e47316 instanceof Error)){
var e = e47316;
return false;
} else {
throw e47316;

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
return (function (p__47317){
var vec__47318 = p__47317;
var err = cljs.core.nth.call(null,vec__47318,(0),null);
var stats = cljs.core.nth.call(null,vec__47318,(1),null);
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
}catch (e47321){if((e47321 instanceof Error)){
var e = e47321;
return false;
} else {
throw e47321;

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
}catch (e47322){if((e47322 instanceof Error)){
var e = e47322;
return false;
} else {
throw e47322;

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
}catch (e47323){if((e47323 instanceof Error)){
var e = e47323;
return false;
} else {
throw e47323;

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
}catch (e47324){if((e47324 instanceof Error)){
var e = e47324;
return false;
} else {
throw e47324;

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
}catch (e47325){if((e47325 instanceof Error)){
var e = e47325;
return false;
} else {
throw e47325;

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
return (function (p__47326){
var vec__47327 = p__47326;
var err = cljs.core.nth.call(null,vec__47327,(0),null);
var stats = cljs.core.nth.call(null,vec__47327,(1),null);
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
var G__47331 = arguments.length;
switch (G__47331) {
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
var args__42698__auto__ = [];
var len__42691__auto___47334 = arguments.length;
var i__42692__auto___47335 = (0);
while(true){
if((i__42692__auto___47335 < len__42691__auto___47334)){
args__42698__auto__.push((arguments[i__42692__auto___47335]));

var G__47336 = (i__42692__auto___47335 + (1));
i__42692__auto___47335 = G__47336;
continue;
} else {
}
break;
}

var argseq__42699__auto__ = ((((0) < args__42698__auto__.length))?(new cljs.core.IndexedSeq(args__42698__auto__.slice((0)),(0),null)):null);
return cljs_node_io.fs.resolve_path.cljs$core$IFn$_invoke$arity$variadic(argseq__42699__auto__);
});

cljs_node_io.fs.resolve_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
return cljs_node_io.fs.path.resolve.apply(null,cljs.core.apply.call(null,cljs.core.array,paths));
});

cljs_node_io.fs.resolve_path.cljs$lang$maxFixedArity = (0);

cljs_node_io.fs.resolve_path.cljs$lang$applyTo = (function (seq47333){
return cljs_node_io.fs.resolve_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47333));
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
var G__47337__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__47337 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47338__i = 0, G__47338__a = new Array(arguments.length -  0);
while (G__47338__i < G__47338__a.length) {G__47338__a[G__47338__i] = arguments[G__47338__i + 0]; ++G__47338__i;}
  args = new cljs.core.IndexedSeq(G__47338__a,0,null);
} 
return G__47337__delegate.call(this,args);};
G__47337.cljs$lang$maxFixedArity = 0;
G__47337.cljs$lang$applyTo = (function (arglist__47339){
var args = cljs.core.seq(arglist__47339);
return G__47337__delegate(args);
});
G__47337.cljs$core$IFn$_invoke$arity$variadic = G__47337__delegate;
return G__47337;
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
var G__47340__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__47340 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47341__i = 0, G__47341__a = new Array(arguments.length -  0);
while (G__47341__i < G__47341__a.length) {G__47341__a[G__47341__i] = arguments[G__47341__i + 0]; ++G__47341__i;}
  args = new cljs.core.IndexedSeq(G__47341__a,0,null);
} 
return G__47340__delegate.call(this,args);};
G__47340.cljs$lang$maxFixedArity = 0;
G__47340.cljs$lang$applyTo = (function (arglist__47342){
var args = cljs.core.seq(arglist__47342);
return G__47340__delegate(args);
});
G__47340.cljs$core$IFn$_invoke$arity$variadic = G__47340__delegate;
return G__47340;
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
var G__47343__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__47343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47344__i = 0, G__47344__a = new Array(arguments.length -  0);
while (G__47344__i < G__47344__a.length) {G__47344__a[G__47344__i] = arguments[G__47344__i + 0]; ++G__47344__i;}
  args = new cljs.core.IndexedSeq(G__47344__a,0,null);
} 
return G__47343__delegate.call(this,args);};
G__47343.cljs$lang$maxFixedArity = 0;
G__47343.cljs$lang$applyTo = (function (arglist__47345){
var args = cljs.core.seq(arglist__47345);
return G__47343__delegate(args);
});
G__47343.cljs$core$IFn$_invoke$arity$variadic = G__47343__delegate;
return G__47343;
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
var G__47346__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__47346 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47347__i = 0, G__47347__a = new Array(arguments.length -  0);
while (G__47347__i < G__47347__a.length) {G__47347__a[G__47347__i] = arguments[G__47347__i + 0]; ++G__47347__i;}
  args = new cljs.core.IndexedSeq(G__47347__a,0,null);
} 
return G__47346__delegate.call(this,args);};
G__47346.cljs$lang$maxFixedArity = 0;
G__47346.cljs$lang$applyTo = (function (arglist__47348){
var args = cljs.core.seq(arglist__47348);
return G__47346__delegate(args);
});
G__47346.cljs$core$IFn$_invoke$arity$variadic = G__47346__delegate;
return G__47346;
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
var G__47349__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__47349 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47350__i = 0, G__47350__a = new Array(arguments.length -  0);
while (G__47350__i < G__47350__a.length) {G__47350__a[G__47350__i] = arguments[G__47350__i + 0]; ++G__47350__i;}
  args = new cljs.core.IndexedSeq(G__47350__a,0,null);
} 
return G__47349__delegate.call(this,args);};
G__47349.cljs$lang$maxFixedArity = 0;
G__47349.cljs$lang$applyTo = (function (arglist__47351){
var args = cljs.core.seq(arglist__47351);
return G__47349__delegate(args);
});
G__47349.cljs$core$IFn$_invoke$arity$variadic = G__47349__delegate;
return G__47349;
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
var G__47352__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__47352 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47353__i = 0, G__47353__a = new Array(arguments.length -  0);
while (G__47353__i < G__47353__a.length) {G__47353__a[G__47353__i] = arguments[G__47353__i + 0]; ++G__47353__i;}
  args = new cljs.core.IndexedSeq(G__47353__a,0,null);
} 
return G__47352__delegate.call(this,args);};
G__47352.cljs$lang$maxFixedArity = 0;
G__47352.cljs$lang$applyTo = (function (arglist__47354){
var args = cljs.core.seq(arglist__47354);
return G__47352__delegate(args);
});
G__47352.cljs$core$IFn$_invoke$arity$variadic = G__47352__delegate;
return G__47352;
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
var G__47355__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__47355 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47356__i = 0, G__47356__a = new Array(arguments.length -  0);
while (G__47356__i < G__47356__a.length) {G__47356__a[G__47356__i] = arguments[G__47356__i + 0]; ++G__47356__i;}
  args = new cljs.core.IndexedSeq(G__47356__a,0,null);
} 
return G__47355__delegate.call(this,args);};
G__47355.cljs$lang$maxFixedArity = 0;
G__47355.cljs$lang$applyTo = (function (arglist__47357){
var args = cljs.core.seq(arglist__47357);
return G__47355__delegate(args);
});
G__47355.cljs$core$IFn$_invoke$arity$variadic = G__47355__delegate;
return G__47355;
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
var G__47358__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__47358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47359__i = 0, G__47359__a = new Array(arguments.length -  0);
while (G__47359__i < G__47359__a.length) {G__47359__a[G__47359__i] = arguments[G__47359__i + 0]; ++G__47359__i;}
  args = new cljs.core.IndexedSeq(G__47359__a,0,null);
} 
return G__47358__delegate.call(this,args);};
G__47358.cljs$lang$maxFixedArity = 0;
G__47358.cljs$lang$applyTo = (function (arglist__47360){
var args = cljs.core.seq(arglist__47360);
return G__47358__delegate(args);
});
G__47358.cljs$core$IFn$_invoke$arity$variadic = G__47358__delegate;
return G__47358;
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
var G__47361__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__47361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47362__i = 0, G__47362__a = new Array(arguments.length -  0);
while (G__47362__i < G__47362__a.length) {G__47362__a[G__47362__i] = arguments[G__47362__i + 0]; ++G__47362__i;}
  args = new cljs.core.IndexedSeq(G__47362__a,0,null);
} 
return G__47361__delegate.call(this,args);};
G__47361.cljs$lang$maxFixedArity = 0;
G__47361.cljs$lang$applyTo = (function (arglist__47363){
var args = cljs.core.seq(arglist__47363);
return G__47361__delegate(args);
});
G__47361.cljs$core$IFn$_invoke$arity$variadic = G__47361__delegate;
return G__47361;
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
var G__47364__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__47364 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47365__i = 0, G__47365__a = new Array(arguments.length -  0);
while (G__47365__i < G__47365__a.length) {G__47365__a[G__47365__i] = arguments[G__47365__i + 0]; ++G__47365__i;}
  args = new cljs.core.IndexedSeq(G__47365__a,0,null);
} 
return G__47364__delegate.call(this,args);};
G__47364.cljs$lang$maxFixedArity = 0;
G__47364.cljs$lang$applyTo = (function (arglist__47366){
var args = cljs.core.seq(arglist__47366);
return G__47364__delegate(args);
});
G__47364.cljs$core$IFn$_invoke$arity$variadic = G__47364__delegate;
return G__47364;
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
var G__47367__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__47367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47368__i = 0, G__47368__a = new Array(arguments.length -  0);
while (G__47368__i < G__47368__a.length) {G__47368__a[G__47368__i] = arguments[G__47368__i + 0]; ++G__47368__i;}
  args = new cljs.core.IndexedSeq(G__47368__a,0,null);
} 
return G__47367__delegate.call(this,args);};
G__47367.cljs$lang$maxFixedArity = 0;
G__47367.cljs$lang$applyTo = (function (arglist__47369){
var args = cljs.core.seq(arglist__47369);
return G__47367__delegate(args);
});
G__47367.cljs$core$IFn$_invoke$arity$variadic = G__47367__delegate;
return G__47367;
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
var G__47370__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__47370 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47371__i = 0, G__47371__a = new Array(arguments.length -  0);
while (G__47371__i < G__47371__a.length) {G__47371__a[G__47371__i] = arguments[G__47371__i + 0]; ++G__47371__i;}
  args = new cljs.core.IndexedSeq(G__47371__a,0,null);
} 
return G__47370__delegate.call(this,args);};
G__47370.cljs$lang$maxFixedArity = 0;
G__47370.cljs$lang$applyTo = (function (arglist__47372){
var args = cljs.core.seq(arglist__47372);
return G__47370__delegate(args);
});
G__47370.cljs$core$IFn$_invoke$arity$variadic = G__47370__delegate;
return G__47370;
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
var seq__47373_47377 = cljs.core.seq.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs_node_io.fs.resolve_path,pathstr),cljs_node_io.fs.readdir.call(null,pathstr)));
var chunk__47374_47378 = null;
var count__47375_47379 = (0);
var i__47376_47380 = (0);
while(true){
if((i__47376_47380 < count__47375_47379)){
var p_47381 = cljs.core._nth.call(null,chunk__47374_47378,i__47376_47380);
cljs_node_io.fs.rm_r.call(null,p_47381);

var G__47382 = seq__47373_47377;
var G__47383 = chunk__47374_47378;
var G__47384 = count__47375_47379;
var G__47385 = (i__47376_47380 + (1));
seq__47373_47377 = G__47382;
chunk__47374_47378 = G__47383;
count__47375_47379 = G__47384;
i__47376_47380 = G__47385;
continue;
} else {
var temp__5457__auto___47386 = cljs.core.seq.call(null,seq__47373_47377);
if(temp__5457__auto___47386){
var seq__47373_47387__$1 = temp__5457__auto___47386;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47373_47387__$1)){
var c__42343__auto___47388 = cljs.core.chunk_first.call(null,seq__47373_47387__$1);
var G__47389 = cljs.core.chunk_rest.call(null,seq__47373_47387__$1);
var G__47390 = c__42343__auto___47388;
var G__47391 = cljs.core.count.call(null,c__42343__auto___47388);
var G__47392 = (0);
seq__47373_47377 = G__47389;
chunk__47374_47378 = G__47390;
count__47375_47379 = G__47391;
i__47376_47380 = G__47392;
continue;
} else {
var p_47393 = cljs.core.first.call(null,seq__47373_47387__$1);
cljs_node_io.fs.rm_r.call(null,p_47393);

var G__47394 = cljs.core.next.call(null,seq__47373_47387__$1);
var G__47395 = null;
var G__47396 = (0);
var G__47397 = (0);
seq__47373_47377 = G__47394;
chunk__47374_47378 = G__47395;
count__47375_47379 = G__47396;
i__47376_47380 = G__47397;
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
var c__45292__auto___47492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__45292__auto___47492,c){
return (function (){
var f__45293__auto__ = (function (){var switch__45202__auto__ = ((function (c__45292__auto___47492,c){
return (function (state_47463){
var state_val_47464 = (state_47463[(1)]);
if((state_val_47464 === (7))){
var inst_47409 = (state_47463[(7)]);
var inst_47412 = cljs.core.partial.call(null,cljs_node_io.fs.resolve_path,pathstr);
var inst_47413 = cljs.core.mapv.call(null,inst_47412,inst_47409);
var inst_47414 = inst_47413;
var state_47463__$1 = (function (){var statearr_47465 = state_47463;
(statearr_47465[(8)] = inst_47414);

return statearr_47465;
})();
var statearr_47466_47493 = state_47463__$1;
(statearr_47466_47493[(2)] = null);

(statearr_47466_47493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47464 === (20))){
var inst_47445 = (state_47463[(2)]);
var state_47463__$1 = state_47463;
var statearr_47467_47494 = state_47463__$1;
(statearr_47467_47494[(2)] = inst_47445);

(statearr_47467_47494[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47464 === (1))){
var inst_47398 = cljs_node_io.fs.adir_QMARK_.call(null,pathstr);
var state_47463__$1 = state_47463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47463__$1,(2),inst_47398);
} else {
if((state_val_47464 === (24))){
var inst_47457 = (state_47463[(2)]);
var state_47463__$1 = state_47463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47463__$1,(23),c,inst_47457);
} else {
if((state_val_47464 === (4))){
var inst_47455 = cljs_node_io.fs.aunlink.call(null,pathstr);
var state_47463__$1 = state_47463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47463__$1,(24),inst_47455);
} else {
if((state_val_47464 === (15))){
var inst_47426 = (state_47463[(9)]);
var inst_47425 = (state_47463[(2)]);
var inst_47426__$1 = cljs.core.nth.call(null,inst_47425,(0),null);
var inst_47427 = (inst_47426__$1 instanceof Error);
var state_47463__$1 = (function (){var statearr_47468 = state_47463;
(statearr_47468[(9)] = inst_47426__$1);

return statearr_47468;
})();
if(cljs.core.truth_(inst_47427)){
var statearr_47469_47495 = state_47463__$1;
(statearr_47469_47495[(1)] = (16));

} else {
var statearr_47470_47496 = state_47463__$1;
(statearr_47470_47496[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47464 === (21))){
var inst_47443 = (state_47463[(2)]);
var state_47463__$1 = state_47463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47463__$1,(20),c,inst_47443);
} else {
if((state_val_47464 === (13))){
var state_47463__$1 = state_47463;
var statearr_47471_47497 = state_47463__$1;
(statearr_47471_47497[(2)] = null);

(statearr_47471_47497[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47464 === (22))){
var inst_47451 = (state_47463[(2)]);
var state_47463__$1 = state_47463;
var statearr_47472_47498 = state_47463__$1;
(statearr_47472_47498[(2)] = inst_47451);

(statearr_47472_47498[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47464 === (6))){
var inst_47408 = (state_47463[(10)]);
var inst_47407 = (state_47463[(2)]);
var inst_47408__$1 = cljs.core.nth.call(null,inst_47407,(0),null);
var inst_47409 = cljs.core.nth.call(null,inst_47407,(1),null);
var inst_47410 = cljs.core.not.call(null,inst_47408__$1);
var state_47463__$1 = (function (){var statearr_47473 = state_47463;
(statearr_47473[(10)] = inst_47408__$1);

(statearr_47473[(7)] = inst_47409);

return statearr_47473;
})();
if(inst_47410){
var statearr_47474_47499 = state_47463__$1;
(statearr_47474_47499[(1)] = (7));

} else {
var statearr_47475_47500 = state_47463__$1;
(statearr_47475_47500[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47464 === (17))){
var inst_47414 = (state_47463[(8)]);
var inst_47432 = cljs.core.next.call(null,inst_47414);
var inst_47414__$1 = inst_47432;
var state_47463__$1 = (function (){var statearr_47476 = state_47463;
(statearr_47476[(8)] = inst_47414__$1);

return statearr_47476;
})();
var statearr_47477_47501 = state_47463__$1;
(statearr_47477_47501[(2)] = null);

(statearr_47477_47501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47464 === (3))){
var inst_47405 = cljs_node_io.fs.areaddir.call(null,pathstr);
var state_47463__$1 = state_47463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47463__$1,(6),inst_47405);
} else {
if((state_val_47464 === (12))){
var inst_47414 = (state_47463[(8)]);
var inst_47422 = cljs.core.first.call(null,inst_47414);
var inst_47423 = cljs_node_io.fs.arm_r.call(null,inst_47422);
var state_47463__$1 = state_47463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47463__$1,(15),inst_47423);
} else {
if((state_val_47464 === (2))){
var inst_47400 = (state_47463[(2)]);
var state_47463__$1 = state_47463;
if(cljs.core.truth_(inst_47400)){
var statearr_47478_47502 = state_47463__$1;
(statearr_47478_47502[(1)] = (3));

} else {
var statearr_47479_47503 = state_47463__$1;
(statearr_47479_47503[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47464 === (23))){
var inst_47459 = (state_47463[(2)]);
var state_47463__$1 = state_47463;
var statearr_47480_47504 = state_47463__$1;
(statearr_47480_47504[(2)] = inst_47459);

(statearr_47480_47504[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47464 === (19))){
var inst_47430 = (state_47463[(2)]);
var state_47463__$1 = state_47463;
var statearr_47481_47505 = state_47463__$1;
(statearr_47481_47505[(2)] = inst_47430);

(statearr_47481_47505[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47464 === (11))){
var inst_47440 = (state_47463[(2)]);
var inst_47441 = cljs_node_io.fs.armdir.call(null,pathstr);
var state_47463__$1 = (function (){var statearr_47482 = state_47463;
(statearr_47482[(11)] = inst_47440);

return statearr_47482;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47463__$1,(21),inst_47441);
} else {
if((state_val_47464 === (9))){
var inst_47453 = (state_47463[(2)]);
var state_47463__$1 = state_47463;
var statearr_47483_47506 = state_47463__$1;
(statearr_47483_47506[(2)] = inst_47453);

(statearr_47483_47506[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47464 === (5))){
var inst_47461 = (state_47463[(2)]);
var state_47463__$1 = state_47463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47463__$1,inst_47461);
} else {
if((state_val_47464 === (14))){
var inst_47438 = (state_47463[(2)]);
var state_47463__$1 = state_47463;
var statearr_47484_47507 = state_47463__$1;
(statearr_47484_47507[(2)] = inst_47438);

(statearr_47484_47507[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47464 === (16))){
var inst_47426 = (state_47463[(9)]);
var state_47463__$1 = state_47463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47463__$1,(19),c,inst_47426);
} else {
if((state_val_47464 === (10))){
var inst_47414 = (state_47463[(8)]);
var inst_47416 = (inst_47414 == null);
var inst_47417 = cljs.core.not.call(null,inst_47416);
var state_47463__$1 = state_47463;
if(inst_47417){
var statearr_47485_47508 = state_47463__$1;
(statearr_47485_47508[(1)] = (12));

} else {
var statearr_47486_47509 = state_47463__$1;
(statearr_47486_47509[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47464 === (18))){
var inst_47435 = (state_47463[(2)]);
var state_47463__$1 = state_47463;
var statearr_47487_47510 = state_47463__$1;
(statearr_47487_47510[(2)] = inst_47435);

(statearr_47487_47510[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47464 === (8))){
var inst_47408 = (state_47463[(10)]);
var inst_47447 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47448 = [inst_47408];
var inst_47449 = (new cljs.core.PersistentVector(null,1,(5),inst_47447,inst_47448,null));
var state_47463__$1 = state_47463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47463__$1,(22),c,inst_47449);
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
});})(c__45292__auto___47492,c))
;
return ((function (switch__45202__auto__,c__45292__auto___47492,c){
return (function() {
var cljs_node_io$fs$arm_r_$_state_machine__45203__auto__ = null;
var cljs_node_io$fs$arm_r_$_state_machine__45203__auto____0 = (function (){
var statearr_47488 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47488[(0)] = cljs_node_io$fs$arm_r_$_state_machine__45203__auto__);

(statearr_47488[(1)] = (1));

return statearr_47488;
});
var cljs_node_io$fs$arm_r_$_state_machine__45203__auto____1 = (function (state_47463){
while(true){
var ret_value__45204__auto__ = (function (){try{while(true){
var result__45205__auto__ = switch__45202__auto__.call(null,state_47463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__45205__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45205__auto__;
}
break;
}
}catch (e47489){if((e47489 instanceof Object)){
var ex__45206__auto__ = e47489;
var statearr_47490_47511 = state_47463;
(statearr_47490_47511[(5)] = ex__45206__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__45204__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47512 = state_47463;
state_47463 = G__47512;
continue;
} else {
return ret_value__45204__auto__;
}
break;
}
});
cljs_node_io$fs$arm_r_$_state_machine__45203__auto__ = function(state_47463){
switch(arguments.length){
case 0:
return cljs_node_io$fs$arm_r_$_state_machine__45203__auto____0.call(this);
case 1:
return cljs_node_io$fs$arm_r_$_state_machine__45203__auto____1.call(this,state_47463);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_node_io$fs$arm_r_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_node_io$fs$arm_r_$_state_machine__45203__auto____0;
cljs_node_io$fs$arm_r_$_state_machine__45203__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_node_io$fs$arm_r_$_state_machine__45203__auto____1;
return cljs_node_io$fs$arm_r_$_state_machine__45203__auto__;
})()
;})(switch__45202__auto__,c__45292__auto___47492,c))
})();
var state__45294__auto__ = (function (){var statearr_47491 = f__45293__auto__.call(null);
(statearr_47491[(6)] = c__45292__auto___47492);

return statearr_47491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__45294__auto__);
});})(c__45292__auto___47492,c))
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
var G__47513__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__47513 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47514__i = 0, G__47514__a = new Array(arguments.length -  0);
while (G__47514__i < G__47514__a.length) {G__47514__a[G__47514__i] = arguments[G__47514__i + 0]; ++G__47514__i;}
  args = new cljs.core.IndexedSeq(G__47514__a,0,null);
} 
return G__47513__delegate.call(this,args);};
G__47513.cljs$lang$maxFixedArity = 0;
G__47513.cljs$lang$applyTo = (function (arglist__47515){
var args = cljs.core.seq(arglist__47515);
return G__47513__delegate(args);
});
G__47513.cljs$core$IFn$_invoke$arity$variadic = G__47513__delegate;
return G__47513;
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
var G__47516__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__47516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47517__i = 0, G__47517__a = new Array(arguments.length -  0);
while (G__47517__i < G__47517__a.length) {G__47517__a[G__47517__i] = arguments[G__47517__i + 0]; ++G__47517__i;}
  args = new cljs.core.IndexedSeq(G__47517__a,0,null);
} 
return G__47516__delegate.call(this,args);};
G__47516.cljs$lang$maxFixedArity = 0;
G__47516.cljs$lang$applyTo = (function (arglist__47518){
var args = cljs.core.seq(arglist__47518);
return G__47516__delegate(args);
});
G__47516.cljs$core$IFn$_invoke$arity$variadic = G__47516__delegate;
return G__47516;
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
var G__47519__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__47519 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47520__i = 0, G__47520__a = new Array(arguments.length -  0);
while (G__47520__i < G__47520__a.length) {G__47520__a[G__47520__i] = arguments[G__47520__i + 0]; ++G__47520__i;}
  args = new cljs.core.IndexedSeq(G__47520__a,0,null);
} 
return G__47519__delegate.call(this,args);};
G__47519.cljs$lang$maxFixedArity = 0;
G__47519.cljs$lang$applyTo = (function (arglist__47521){
var args = cljs.core.seq(arglist__47521);
return G__47519__delegate(args);
});
G__47519.cljs$core$IFn$_invoke$arity$variadic = G__47519__delegate;
return G__47519;
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
return cljs_node_io.fs.fs.writeFileSync(pathstr,content,({"flag": (function (){var or__41412__auto__ = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__41412__auto__)){
return or__41412__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"append","append",-291298229).cljs$core$IFn$_invoke$arity$1(opts))){
return "a";
} else {
return "w";
}
}
})(), "mode": (function (){var or__41412__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__41412__auto__)){
return or__41412__auto__;
} else {
return (438);
}
})(), "encoding": (function (){var or__41412__auto__ = new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__41412__auto__)){
return or__41412__auto__;
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
cljs_node_io.fs.fs.writeFile(pathstring,content,({"flag": (function (){var or__41412__auto__ = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__41412__auto__)){
return or__41412__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"append","append",-291298229).cljs$core$IFn$_invoke$arity$1(opts))){
return "a";
} else {
return "w";
}
}
})(), "mode": (function (){var or__41412__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__41412__auto__)){
return or__41412__auto__;
} else {
return (438);
}
})(), "encoding": (function (){var or__41412__auto__ = new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__41412__auto__)){
return or__41412__auto__;
} else {
return "utf8";
}
})()}),((function (c){
return (function() { 
var G__47522__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__47522 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47523__i = 0, G__47523__a = new Array(arguments.length -  0);
while (G__47523__i < G__47523__a.length) {G__47523__a[G__47523__i] = arguments[G__47523__i + 0]; ++G__47523__i;}
  args = new cljs.core.IndexedSeq(G__47523__a,0,null);
} 
return G__47522__delegate.call(this,args);};
G__47522.cljs$lang$maxFixedArity = 0;
G__47522.cljs$lang$applyTo = (function (arglist__47524){
var args = cljs.core.seq(arglist__47524);
return G__47522__delegate(args);
});
G__47522.cljs$core$IFn$_invoke$arity$variadic = G__47522__delegate;
return G__47522;
})()
;})(c))
);

return c;
});
cljs_node_io.fs.watcher__GT_ch = (function cljs_node_io$fs$watcher__GT_ch(var_args){
var G__47526 = arguments.length;
switch (G__47526) {
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

cljs_node_io.fs.watcher__GT_ch.cljs$core$IFn$_invoke$arity$3 = (function (FSWatcher,out_ch,p__47527){
var map__47528 = p__47527;
var map__47528__$1 = ((((!((map__47528 == null)))?((((map__47528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47528):map__47528);
var key = cljs.core.get.call(null,map__47528__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var buf_or_n = cljs.core.get.call(null,map__47528__$1,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719),(10));
var G__47530_47532 = FSWatcher;
G__47530_47532.on("change",((function (G__47530_47532,map__47528,map__47528__$1,key,buf_or_n){
return (function (eventType,filename){
return cljs.core.async.put_BANG_.call(null,out_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,eventType)], null));
});})(G__47530_47532,map__47528,map__47528__$1,key,buf_or_n))
);

G__47530_47532.on("error",((function (G__47530_47532,map__47528,map__47528__$1,key,buf_or_n){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)], null));
});})(G__47530_47532,map__47528,map__47528__$1,key,buf_or_n))
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

cljs_node_io.fs.Watcher.cljs$lang$ctorPrWriter = (function (this__42083__auto__,writer__42084__auto__,opt__42085__auto__){
return cljs.core._write.call(null,writer__42084__auto__,"cljs-node-io.fs/Watcher");
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
var G__47535 = arguments.length;
switch (G__47535) {
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
return (function (p1__47533_SHARP_){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null),p1__47533_SHARP_);
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
var G__47539 = arguments.length;
switch (G__47539) {
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
var map__47540 = cljs.core.merge.call(null,defaults,opts);
var map__47540__$1 = ((((!((map__47540 == null)))?((((map__47540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47540):map__47540);
var opts__$1 = map__47540__$1;
var edn_QMARK_ = cljs.core.get.call(null,map__47540__$1,new cljs.core.Keyword(null,"edn?","edn?",-499466946));
var buf_or_n = cljs.core.get.call(null,map__47540__$1,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719));
var out = cljs.core.async.chan.call(null,buf_or_n,cljs.core.map.call(null,((function (defaults,map__47540,map__47540__$1,opts__$1,edn_QMARK_,buf_or_n){
return (function (p1__47537_SHARP_){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null),p1__47537_SHARP_);
});})(defaults,map__47540,map__47540__$1,opts__$1,edn_QMARK_,buf_or_n))
));
var cb = ((function (defaults,map__47540,map__47540__$1,opts__$1,edn_QMARK_,buf_or_n,out){
return (function (curr,prev){
return cljs.core.async.put_BANG_.call(null,out,(cljs.core.truth_(edn_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_node_io.fs.stat__GT_clj.call(null,curr),cljs_node_io.fs.stat__GT_clj.call(null,prev)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,prev], null)));
});})(defaults,map__47540,map__47540__$1,opts__$1,edn_QMARK_,buf_or_n,out))
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

//# sourceMappingURL=fs.js.map?rel=1516433043937
