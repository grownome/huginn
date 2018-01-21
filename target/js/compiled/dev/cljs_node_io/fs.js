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
var G__38594__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__38594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38595__i = 0, G__38595__a = new Array(arguments.length -  0);
while (G__38595__i < G__38595__a.length) {G__38595__a[G__38595__i] = arguments[G__38595__i + 0]; ++G__38595__i;}
  args = new cljs.core.IndexedSeq(G__38595__a,0,null);
} 
return G__38594__delegate.call(this,args);};
G__38594.cljs$lang$maxFixedArity = 0;
G__38594.cljs$lang$applyTo = (function (arglist__38596){
var args = cljs.core.seq(arglist__38596);
return G__38594__delegate(args);
});
G__38594.cljs$core$IFn$_invoke$arity$variadic = G__38594__delegate;
return G__38594;
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
var G__38597__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__38597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38598__i = 0, G__38598__a = new Array(arguments.length -  0);
while (G__38598__i < G__38598__a.length) {G__38598__a[G__38598__i] = arguments[G__38598__i + 0]; ++G__38598__i;}
  args = new cljs.core.IndexedSeq(G__38598__a,0,null);
} 
return G__38597__delegate.call(this,args);};
G__38597.cljs$lang$maxFixedArity = 0;
G__38597.cljs$lang$applyTo = (function (arglist__38599){
var args = cljs.core.seq(arglist__38599);
return G__38597__delegate(args);
});
G__38597.cljs$core$IFn$_invoke$arity$variadic = G__38597__delegate;
return G__38597;
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
return (function (p1__38600_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.nth.call(null,p1__38600_SHARP_,(0)),"_checkModeProperty");
});})(ks,vs))
),cljs.core.map.call(null,((function (ks,vs){
return (function (p__38601){
var vec__38602 = p__38601;
var k = cljs.core.nth.call(null,vec__38602,(0),null);
var v = cljs.core.nth.call(null,vec__38602,(1),null);
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
var a__31903__auto__ = a;
var l__31904__auto__ = a__31903__auto__.length;
var res = cljs.core.aclone.call(null,a__31903__auto__);
var i = (0);
while(true){
if((i < l__31904__auto__)){
(res[i] = ((!(((a[i]) === (0))))?(1):(0)));

var G__38605 = (i + (1));
i = G__38605;
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
}catch (e38606){if((e38606 instanceof Error)){
var e = e38606;
return false;
} else {
throw e38606;

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
return (function (p__38607){
var vec__38608 = p__38607;
var err = cljs.core.nth.call(null,vec__38608,(0),null);
var stats = cljs.core.nth.call(null,vec__38608,(1),null);
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
}catch (e38611){if((e38611 instanceof Error)){
var e = e38611;
return false;
} else {
throw e38611;

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
return (function (p__38612){
var vec__38613 = p__38612;
var err = cljs.core.nth.call(null,vec__38613,(0),null);
var stats = cljs.core.nth.call(null,vec__38613,(1),null);
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
}catch (e38616){if((e38616 instanceof Error)){
var e = e38616;
return false;
} else {
throw e38616;

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
}catch (e38617){if((e38617 instanceof Error)){
var e = e38617;
return false;
} else {
throw e38617;

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
}catch (e38618){if((e38618 instanceof Error)){
var e = e38618;
return false;
} else {
throw e38618;

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
}catch (e38619){if((e38619 instanceof Error)){
var e = e38619;
return false;
} else {
throw e38619;

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
}catch (e38620){if((e38620 instanceof Error)){
var e = e38620;
return false;
} else {
throw e38620;

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
return (function (p__38621){
var vec__38622 = p__38621;
var err = cljs.core.nth.call(null,vec__38622,(0),null);
var stats = cljs.core.nth.call(null,vec__38622,(1),null);
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
var G__38626 = arguments.length;
switch (G__38626) {
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
var args__32158__auto__ = [];
var len__32151__auto___38629 = arguments.length;
var i__32152__auto___38630 = (0);
while(true){
if((i__32152__auto___38630 < len__32151__auto___38629)){
args__32158__auto__.push((arguments[i__32152__auto___38630]));

var G__38631 = (i__32152__auto___38630 + (1));
i__32152__auto___38630 = G__38631;
continue;
} else {
}
break;
}

var argseq__32159__auto__ = ((((0) < args__32158__auto__.length))?(new cljs.core.IndexedSeq(args__32158__auto__.slice((0)),(0),null)):null);
return cljs_node_io.fs.resolve_path.cljs$core$IFn$_invoke$arity$variadic(argseq__32159__auto__);
});

cljs_node_io.fs.resolve_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
return cljs_node_io.fs.path.resolve.apply(null,cljs.core.apply.call(null,cljs.core.array,paths));
});

cljs_node_io.fs.resolve_path.cljs$lang$maxFixedArity = (0);

cljs_node_io.fs.resolve_path.cljs$lang$applyTo = (function (seq38628){
return cljs_node_io.fs.resolve_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38628));
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
var G__38632__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__38632 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38633__i = 0, G__38633__a = new Array(arguments.length -  0);
while (G__38633__i < G__38633__a.length) {G__38633__a[G__38633__i] = arguments[G__38633__i + 0]; ++G__38633__i;}
  args = new cljs.core.IndexedSeq(G__38633__a,0,null);
} 
return G__38632__delegate.call(this,args);};
G__38632.cljs$lang$maxFixedArity = 0;
G__38632.cljs$lang$applyTo = (function (arglist__38634){
var args = cljs.core.seq(arglist__38634);
return G__38632__delegate(args);
});
G__38632.cljs$core$IFn$_invoke$arity$variadic = G__38632__delegate;
return G__38632;
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
var G__38635__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__38635 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38636__i = 0, G__38636__a = new Array(arguments.length -  0);
while (G__38636__i < G__38636__a.length) {G__38636__a[G__38636__i] = arguments[G__38636__i + 0]; ++G__38636__i;}
  args = new cljs.core.IndexedSeq(G__38636__a,0,null);
} 
return G__38635__delegate.call(this,args);};
G__38635.cljs$lang$maxFixedArity = 0;
G__38635.cljs$lang$applyTo = (function (arglist__38637){
var args = cljs.core.seq(arglist__38637);
return G__38635__delegate(args);
});
G__38635.cljs$core$IFn$_invoke$arity$variadic = G__38635__delegate;
return G__38635;
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
var G__38638__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__38638 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38639__i = 0, G__38639__a = new Array(arguments.length -  0);
while (G__38639__i < G__38639__a.length) {G__38639__a[G__38639__i] = arguments[G__38639__i + 0]; ++G__38639__i;}
  args = new cljs.core.IndexedSeq(G__38639__a,0,null);
} 
return G__38638__delegate.call(this,args);};
G__38638.cljs$lang$maxFixedArity = 0;
G__38638.cljs$lang$applyTo = (function (arglist__38640){
var args = cljs.core.seq(arglist__38640);
return G__38638__delegate(args);
});
G__38638.cljs$core$IFn$_invoke$arity$variadic = G__38638__delegate;
return G__38638;
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
var G__38641__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__38641 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38642__i = 0, G__38642__a = new Array(arguments.length -  0);
while (G__38642__i < G__38642__a.length) {G__38642__a[G__38642__i] = arguments[G__38642__i + 0]; ++G__38642__i;}
  args = new cljs.core.IndexedSeq(G__38642__a,0,null);
} 
return G__38641__delegate.call(this,args);};
G__38641.cljs$lang$maxFixedArity = 0;
G__38641.cljs$lang$applyTo = (function (arglist__38643){
var args = cljs.core.seq(arglist__38643);
return G__38641__delegate(args);
});
G__38641.cljs$core$IFn$_invoke$arity$variadic = G__38641__delegate;
return G__38641;
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
var G__38644__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__38644 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38645__i = 0, G__38645__a = new Array(arguments.length -  0);
while (G__38645__i < G__38645__a.length) {G__38645__a[G__38645__i] = arguments[G__38645__i + 0]; ++G__38645__i;}
  args = new cljs.core.IndexedSeq(G__38645__a,0,null);
} 
return G__38644__delegate.call(this,args);};
G__38644.cljs$lang$maxFixedArity = 0;
G__38644.cljs$lang$applyTo = (function (arglist__38646){
var args = cljs.core.seq(arglist__38646);
return G__38644__delegate(args);
});
G__38644.cljs$core$IFn$_invoke$arity$variadic = G__38644__delegate;
return G__38644;
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
var G__38647__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__38647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38648__i = 0, G__38648__a = new Array(arguments.length -  0);
while (G__38648__i < G__38648__a.length) {G__38648__a[G__38648__i] = arguments[G__38648__i + 0]; ++G__38648__i;}
  args = new cljs.core.IndexedSeq(G__38648__a,0,null);
} 
return G__38647__delegate.call(this,args);};
G__38647.cljs$lang$maxFixedArity = 0;
G__38647.cljs$lang$applyTo = (function (arglist__38649){
var args = cljs.core.seq(arglist__38649);
return G__38647__delegate(args);
});
G__38647.cljs$core$IFn$_invoke$arity$variadic = G__38647__delegate;
return G__38647;
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
var G__38650__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__38650 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38651__i = 0, G__38651__a = new Array(arguments.length -  0);
while (G__38651__i < G__38651__a.length) {G__38651__a[G__38651__i] = arguments[G__38651__i + 0]; ++G__38651__i;}
  args = new cljs.core.IndexedSeq(G__38651__a,0,null);
} 
return G__38650__delegate.call(this,args);};
G__38650.cljs$lang$maxFixedArity = 0;
G__38650.cljs$lang$applyTo = (function (arglist__38652){
var args = cljs.core.seq(arglist__38652);
return G__38650__delegate(args);
});
G__38650.cljs$core$IFn$_invoke$arity$variadic = G__38650__delegate;
return G__38650;
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
var G__38653__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__38653 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38654__i = 0, G__38654__a = new Array(arguments.length -  0);
while (G__38654__i < G__38654__a.length) {G__38654__a[G__38654__i] = arguments[G__38654__i + 0]; ++G__38654__i;}
  args = new cljs.core.IndexedSeq(G__38654__a,0,null);
} 
return G__38653__delegate.call(this,args);};
G__38653.cljs$lang$maxFixedArity = 0;
G__38653.cljs$lang$applyTo = (function (arglist__38655){
var args = cljs.core.seq(arglist__38655);
return G__38653__delegate(args);
});
G__38653.cljs$core$IFn$_invoke$arity$variadic = G__38653__delegate;
return G__38653;
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
var G__38656__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__38656 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38657__i = 0, G__38657__a = new Array(arguments.length -  0);
while (G__38657__i < G__38657__a.length) {G__38657__a[G__38657__i] = arguments[G__38657__i + 0]; ++G__38657__i;}
  args = new cljs.core.IndexedSeq(G__38657__a,0,null);
} 
return G__38656__delegate.call(this,args);};
G__38656.cljs$lang$maxFixedArity = 0;
G__38656.cljs$lang$applyTo = (function (arglist__38658){
var args = cljs.core.seq(arglist__38658);
return G__38656__delegate(args);
});
G__38656.cljs$core$IFn$_invoke$arity$variadic = G__38656__delegate;
return G__38656;
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
var G__38659__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__38659 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38660__i = 0, G__38660__a = new Array(arguments.length -  0);
while (G__38660__i < G__38660__a.length) {G__38660__a[G__38660__i] = arguments[G__38660__i + 0]; ++G__38660__i;}
  args = new cljs.core.IndexedSeq(G__38660__a,0,null);
} 
return G__38659__delegate.call(this,args);};
G__38659.cljs$lang$maxFixedArity = 0;
G__38659.cljs$lang$applyTo = (function (arglist__38661){
var args = cljs.core.seq(arglist__38661);
return G__38659__delegate(args);
});
G__38659.cljs$core$IFn$_invoke$arity$variadic = G__38659__delegate;
return G__38659;
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
var G__38662__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__38662 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38663__i = 0, G__38663__a = new Array(arguments.length -  0);
while (G__38663__i < G__38663__a.length) {G__38663__a[G__38663__i] = arguments[G__38663__i + 0]; ++G__38663__i;}
  args = new cljs.core.IndexedSeq(G__38663__a,0,null);
} 
return G__38662__delegate.call(this,args);};
G__38662.cljs$lang$maxFixedArity = 0;
G__38662.cljs$lang$applyTo = (function (arglist__38664){
var args = cljs.core.seq(arglist__38664);
return G__38662__delegate(args);
});
G__38662.cljs$core$IFn$_invoke$arity$variadic = G__38662__delegate;
return G__38662;
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
var G__38665__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__38665 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38666__i = 0, G__38666__a = new Array(arguments.length -  0);
while (G__38666__i < G__38666__a.length) {G__38666__a[G__38666__i] = arguments[G__38666__i + 0]; ++G__38666__i;}
  args = new cljs.core.IndexedSeq(G__38666__a,0,null);
} 
return G__38665__delegate.call(this,args);};
G__38665.cljs$lang$maxFixedArity = 0;
G__38665.cljs$lang$applyTo = (function (arglist__38667){
var args = cljs.core.seq(arglist__38667);
return G__38665__delegate(args);
});
G__38665.cljs$core$IFn$_invoke$arity$variadic = G__38665__delegate;
return G__38665;
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
var seq__38668_38672 = cljs.core.seq.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs_node_io.fs.resolve_path,pathstr),cljs_node_io.fs.readdir.call(null,pathstr)));
var chunk__38669_38673 = null;
var count__38670_38674 = (0);
var i__38671_38675 = (0);
while(true){
if((i__38671_38675 < count__38670_38674)){
var p_38676 = cljs.core._nth.call(null,chunk__38669_38673,i__38671_38675);
cljs_node_io.fs.rm_r.call(null,p_38676);

var G__38677 = seq__38668_38672;
var G__38678 = chunk__38669_38673;
var G__38679 = count__38670_38674;
var G__38680 = (i__38671_38675 + (1));
seq__38668_38672 = G__38677;
chunk__38669_38673 = G__38678;
count__38670_38674 = G__38679;
i__38671_38675 = G__38680;
continue;
} else {
var temp__5457__auto___38681 = cljs.core.seq.call(null,seq__38668_38672);
if(temp__5457__auto___38681){
var seq__38668_38682__$1 = temp__5457__auto___38681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38668_38682__$1)){
var c__31803__auto___38683 = cljs.core.chunk_first.call(null,seq__38668_38682__$1);
var G__38684 = cljs.core.chunk_rest.call(null,seq__38668_38682__$1);
var G__38685 = c__31803__auto___38683;
var G__38686 = cljs.core.count.call(null,c__31803__auto___38683);
var G__38687 = (0);
seq__38668_38672 = G__38684;
chunk__38669_38673 = G__38685;
count__38670_38674 = G__38686;
i__38671_38675 = G__38687;
continue;
} else {
var p_38688 = cljs.core.first.call(null,seq__38668_38682__$1);
cljs_node_io.fs.rm_r.call(null,p_38688);

var G__38689 = cljs.core.next.call(null,seq__38668_38682__$1);
var G__38690 = null;
var G__38691 = (0);
var G__38692 = (0);
seq__38668_38672 = G__38689;
chunk__38669_38673 = G__38690;
count__38670_38674 = G__38691;
i__38671_38675 = G__38692;
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
var c__36587__auto___38787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36587__auto___38787,c){
return (function (){
var f__36588__auto__ = (function (){var switch__36497__auto__ = ((function (c__36587__auto___38787,c){
return (function (state_38758){
var state_val_38759 = (state_38758[(1)]);
if((state_val_38759 === (7))){
var inst_38704 = (state_38758[(7)]);
var inst_38707 = cljs.core.partial.call(null,cljs_node_io.fs.resolve_path,pathstr);
var inst_38708 = cljs.core.mapv.call(null,inst_38707,inst_38704);
var inst_38709 = inst_38708;
var state_38758__$1 = (function (){var statearr_38760 = state_38758;
(statearr_38760[(8)] = inst_38709);

return statearr_38760;
})();
var statearr_38761_38788 = state_38758__$1;
(statearr_38761_38788[(2)] = null);

(statearr_38761_38788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (20))){
var inst_38740 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
var statearr_38762_38789 = state_38758__$1;
(statearr_38762_38789[(2)] = inst_38740);

(statearr_38762_38789[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (1))){
var inst_38693 = cljs_node_io.fs.adir_QMARK_.call(null,pathstr);
var state_38758__$1 = state_38758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38758__$1,(2),inst_38693);
} else {
if((state_val_38759 === (24))){
var inst_38752 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38758__$1,(23),c,inst_38752);
} else {
if((state_val_38759 === (4))){
var inst_38750 = cljs_node_io.fs.aunlink.call(null,pathstr);
var state_38758__$1 = state_38758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38758__$1,(24),inst_38750);
} else {
if((state_val_38759 === (15))){
var inst_38721 = (state_38758[(9)]);
var inst_38720 = (state_38758[(2)]);
var inst_38721__$1 = cljs.core.nth.call(null,inst_38720,(0),null);
var inst_38722 = (inst_38721__$1 instanceof Error);
var state_38758__$1 = (function (){var statearr_38763 = state_38758;
(statearr_38763[(9)] = inst_38721__$1);

return statearr_38763;
})();
if(cljs.core.truth_(inst_38722)){
var statearr_38764_38790 = state_38758__$1;
(statearr_38764_38790[(1)] = (16));

} else {
var statearr_38765_38791 = state_38758__$1;
(statearr_38765_38791[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (21))){
var inst_38738 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38758__$1,(20),c,inst_38738);
} else {
if((state_val_38759 === (13))){
var state_38758__$1 = state_38758;
var statearr_38766_38792 = state_38758__$1;
(statearr_38766_38792[(2)] = null);

(statearr_38766_38792[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (22))){
var inst_38746 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
var statearr_38767_38793 = state_38758__$1;
(statearr_38767_38793[(2)] = inst_38746);

(statearr_38767_38793[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (6))){
var inst_38703 = (state_38758[(10)]);
var inst_38702 = (state_38758[(2)]);
var inst_38703__$1 = cljs.core.nth.call(null,inst_38702,(0),null);
var inst_38704 = cljs.core.nth.call(null,inst_38702,(1),null);
var inst_38705 = cljs.core.not.call(null,inst_38703__$1);
var state_38758__$1 = (function (){var statearr_38768 = state_38758;
(statearr_38768[(10)] = inst_38703__$1);

(statearr_38768[(7)] = inst_38704);

return statearr_38768;
})();
if(inst_38705){
var statearr_38769_38794 = state_38758__$1;
(statearr_38769_38794[(1)] = (7));

} else {
var statearr_38770_38795 = state_38758__$1;
(statearr_38770_38795[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (17))){
var inst_38709 = (state_38758[(8)]);
var inst_38727 = cljs.core.next.call(null,inst_38709);
var inst_38709__$1 = inst_38727;
var state_38758__$1 = (function (){var statearr_38771 = state_38758;
(statearr_38771[(8)] = inst_38709__$1);

return statearr_38771;
})();
var statearr_38772_38796 = state_38758__$1;
(statearr_38772_38796[(2)] = null);

(statearr_38772_38796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (3))){
var inst_38700 = cljs_node_io.fs.areaddir.call(null,pathstr);
var state_38758__$1 = state_38758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38758__$1,(6),inst_38700);
} else {
if((state_val_38759 === (12))){
var inst_38709 = (state_38758[(8)]);
var inst_38717 = cljs.core.first.call(null,inst_38709);
var inst_38718 = cljs_node_io.fs.arm_r.call(null,inst_38717);
var state_38758__$1 = state_38758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38758__$1,(15),inst_38718);
} else {
if((state_val_38759 === (2))){
var inst_38695 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
if(cljs.core.truth_(inst_38695)){
var statearr_38773_38797 = state_38758__$1;
(statearr_38773_38797[(1)] = (3));

} else {
var statearr_38774_38798 = state_38758__$1;
(statearr_38774_38798[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (23))){
var inst_38754 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
var statearr_38775_38799 = state_38758__$1;
(statearr_38775_38799[(2)] = inst_38754);

(statearr_38775_38799[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (19))){
var inst_38725 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
var statearr_38776_38800 = state_38758__$1;
(statearr_38776_38800[(2)] = inst_38725);

(statearr_38776_38800[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (11))){
var inst_38735 = (state_38758[(2)]);
var inst_38736 = cljs_node_io.fs.armdir.call(null,pathstr);
var state_38758__$1 = (function (){var statearr_38777 = state_38758;
(statearr_38777[(11)] = inst_38735);

return statearr_38777;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38758__$1,(21),inst_38736);
} else {
if((state_val_38759 === (9))){
var inst_38748 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
var statearr_38778_38801 = state_38758__$1;
(statearr_38778_38801[(2)] = inst_38748);

(statearr_38778_38801[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (5))){
var inst_38756 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38758__$1,inst_38756);
} else {
if((state_val_38759 === (14))){
var inst_38733 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
var statearr_38779_38802 = state_38758__$1;
(statearr_38779_38802[(2)] = inst_38733);

(statearr_38779_38802[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (16))){
var inst_38721 = (state_38758[(9)]);
var state_38758__$1 = state_38758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38758__$1,(19),c,inst_38721);
} else {
if((state_val_38759 === (10))){
var inst_38709 = (state_38758[(8)]);
var inst_38711 = (inst_38709 == null);
var inst_38712 = cljs.core.not.call(null,inst_38711);
var state_38758__$1 = state_38758;
if(inst_38712){
var statearr_38780_38803 = state_38758__$1;
(statearr_38780_38803[(1)] = (12));

} else {
var statearr_38781_38804 = state_38758__$1;
(statearr_38781_38804[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (18))){
var inst_38730 = (state_38758[(2)]);
var state_38758__$1 = state_38758;
var statearr_38782_38805 = state_38758__$1;
(statearr_38782_38805[(2)] = inst_38730);

(statearr_38782_38805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38759 === (8))){
var inst_38703 = (state_38758[(10)]);
var inst_38742 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38743 = [inst_38703];
var inst_38744 = (new cljs.core.PersistentVector(null,1,(5),inst_38742,inst_38743,null));
var state_38758__$1 = state_38758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38758__$1,(22),c,inst_38744);
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
});})(c__36587__auto___38787,c))
;
return ((function (switch__36497__auto__,c__36587__auto___38787,c){
return (function() {
var cljs_node_io$fs$arm_r_$_state_machine__36498__auto__ = null;
var cljs_node_io$fs$arm_r_$_state_machine__36498__auto____0 = (function (){
var statearr_38783 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38783[(0)] = cljs_node_io$fs$arm_r_$_state_machine__36498__auto__);

(statearr_38783[(1)] = (1));

return statearr_38783;
});
var cljs_node_io$fs$arm_r_$_state_machine__36498__auto____1 = (function (state_38758){
while(true){
var ret_value__36499__auto__ = (function (){try{while(true){
var result__36500__auto__ = switch__36497__auto__.call(null,state_38758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36500__auto__;
}
break;
}
}catch (e38784){if((e38784 instanceof Object)){
var ex__36501__auto__ = e38784;
var statearr_38785_38806 = state_38758;
(statearr_38785_38806[(5)] = ex__36501__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38807 = state_38758;
state_38758 = G__38807;
continue;
} else {
return ret_value__36499__auto__;
}
break;
}
});
cljs_node_io$fs$arm_r_$_state_machine__36498__auto__ = function(state_38758){
switch(arguments.length){
case 0:
return cljs_node_io$fs$arm_r_$_state_machine__36498__auto____0.call(this);
case 1:
return cljs_node_io$fs$arm_r_$_state_machine__36498__auto____1.call(this,state_38758);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_node_io$fs$arm_r_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_node_io$fs$arm_r_$_state_machine__36498__auto____0;
cljs_node_io$fs$arm_r_$_state_machine__36498__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_node_io$fs$arm_r_$_state_machine__36498__auto____1;
return cljs_node_io$fs$arm_r_$_state_machine__36498__auto__;
})()
;})(switch__36497__auto__,c__36587__auto___38787,c))
})();
var state__36589__auto__ = (function (){var statearr_38786 = f__36588__auto__.call(null);
(statearr_38786[(6)] = c__36587__auto___38787);

return statearr_38786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36589__auto__);
});})(c__36587__auto___38787,c))
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
var G__38808__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__38808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38809__i = 0, G__38809__a = new Array(arguments.length -  0);
while (G__38809__i < G__38809__a.length) {G__38809__a[G__38809__i] = arguments[G__38809__i + 0]; ++G__38809__i;}
  args = new cljs.core.IndexedSeq(G__38809__a,0,null);
} 
return G__38808__delegate.call(this,args);};
G__38808.cljs$lang$maxFixedArity = 0;
G__38808.cljs$lang$applyTo = (function (arglist__38810){
var args = cljs.core.seq(arglist__38810);
return G__38808__delegate(args);
});
G__38808.cljs$core$IFn$_invoke$arity$variadic = G__38808__delegate;
return G__38808;
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
var G__38811__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__38811 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38812__i = 0, G__38812__a = new Array(arguments.length -  0);
while (G__38812__i < G__38812__a.length) {G__38812__a[G__38812__i] = arguments[G__38812__i + 0]; ++G__38812__i;}
  args = new cljs.core.IndexedSeq(G__38812__a,0,null);
} 
return G__38811__delegate.call(this,args);};
G__38811.cljs$lang$maxFixedArity = 0;
G__38811.cljs$lang$applyTo = (function (arglist__38813){
var args = cljs.core.seq(arglist__38813);
return G__38811__delegate(args);
});
G__38811.cljs$core$IFn$_invoke$arity$variadic = G__38811__delegate;
return G__38811;
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
var G__38814__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__38814 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38815__i = 0, G__38815__a = new Array(arguments.length -  0);
while (G__38815__i < G__38815__a.length) {G__38815__a[G__38815__i] = arguments[G__38815__i + 0]; ++G__38815__i;}
  args = new cljs.core.IndexedSeq(G__38815__a,0,null);
} 
return G__38814__delegate.call(this,args);};
G__38814.cljs$lang$maxFixedArity = 0;
G__38814.cljs$lang$applyTo = (function (arglist__38816){
var args = cljs.core.seq(arglist__38816);
return G__38814__delegate(args);
});
G__38814.cljs$core$IFn$_invoke$arity$variadic = G__38814__delegate;
return G__38814;
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
return cljs_node_io.fs.fs.writeFileSync(pathstr,content,({"flag": (function (){var or__30872__auto__ = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30872__auto__)){
return or__30872__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"append","append",-291298229).cljs$core$IFn$_invoke$arity$1(opts))){
return "a";
} else {
return "w";
}
}
})(), "mode": (function (){var or__30872__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30872__auto__)){
return or__30872__auto__;
} else {
return (438);
}
})(), "encoding": (function (){var or__30872__auto__ = new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30872__auto__)){
return or__30872__auto__;
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
cljs_node_io.fs.fs.writeFile(pathstring,content,({"flag": (function (){var or__30872__auto__ = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30872__auto__)){
return or__30872__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"append","append",-291298229).cljs$core$IFn$_invoke$arity$1(opts))){
return "a";
} else {
return "w";
}
}
})(), "mode": (function (){var or__30872__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30872__auto__)){
return or__30872__auto__;
} else {
return (438);
}
})(), "encoding": (function (){var or__30872__auto__ = new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30872__auto__)){
return or__30872__auto__;
} else {
return "utf8";
}
})()}),((function (c){
return (function() { 
var G__38817__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__38817 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38818__i = 0, G__38818__a = new Array(arguments.length -  0);
while (G__38818__i < G__38818__a.length) {G__38818__a[G__38818__i] = arguments[G__38818__i + 0]; ++G__38818__i;}
  args = new cljs.core.IndexedSeq(G__38818__a,0,null);
} 
return G__38817__delegate.call(this,args);};
G__38817.cljs$lang$maxFixedArity = 0;
G__38817.cljs$lang$applyTo = (function (arglist__38819){
var args = cljs.core.seq(arglist__38819);
return G__38817__delegate(args);
});
G__38817.cljs$core$IFn$_invoke$arity$variadic = G__38817__delegate;
return G__38817;
})()
;})(c))
);

return c;
});
cljs_node_io.fs.watcher__GT_ch = (function cljs_node_io$fs$watcher__GT_ch(var_args){
var G__38821 = arguments.length;
switch (G__38821) {
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

cljs_node_io.fs.watcher__GT_ch.cljs$core$IFn$_invoke$arity$3 = (function (FSWatcher,out_ch,p__38822){
var map__38823 = p__38822;
var map__38823__$1 = ((((!((map__38823 == null)))?((((map__38823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38823):map__38823);
var key = cljs.core.get.call(null,map__38823__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var buf_or_n = cljs.core.get.call(null,map__38823__$1,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719),(10));
var G__38825_38827 = FSWatcher;
G__38825_38827.on("change",((function (G__38825_38827,map__38823,map__38823__$1,key,buf_or_n){
return (function (eventType,filename){
return cljs.core.async.put_BANG_.call(null,out_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,eventType)], null));
});})(G__38825_38827,map__38823,map__38823__$1,key,buf_or_n))
);

G__38825_38827.on("error",((function (G__38825_38827,map__38823,map__38823__$1,key,buf_or_n){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)], null));
});})(G__38825_38827,map__38823,map__38823__$1,key,buf_or_n))
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

cljs_node_io.fs.Watcher.cljs$lang$ctorPrWriter = (function (this__31543__auto__,writer__31544__auto__,opt__31545__auto__){
return cljs.core._write.call(null,writer__31544__auto__,"cljs-node-io.fs/Watcher");
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
var G__38830 = arguments.length;
switch (G__38830) {
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
return (function (p1__38828_SHARP_){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null),p1__38828_SHARP_);
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
var G__38834 = arguments.length;
switch (G__38834) {
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
var map__38835 = cljs.core.merge.call(null,defaults,opts);
var map__38835__$1 = ((((!((map__38835 == null)))?((((map__38835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38835):map__38835);
var opts__$1 = map__38835__$1;
var edn_QMARK_ = cljs.core.get.call(null,map__38835__$1,new cljs.core.Keyword(null,"edn?","edn?",-499466946));
var buf_or_n = cljs.core.get.call(null,map__38835__$1,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719));
var out = cljs.core.async.chan.call(null,buf_or_n,cljs.core.map.call(null,((function (defaults,map__38835,map__38835__$1,opts__$1,edn_QMARK_,buf_or_n){
return (function (p1__38832_SHARP_){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null),p1__38832_SHARP_);
});})(defaults,map__38835,map__38835__$1,opts__$1,edn_QMARK_,buf_or_n))
));
var cb = ((function (defaults,map__38835,map__38835__$1,opts__$1,edn_QMARK_,buf_or_n,out){
return (function (curr,prev){
return cljs.core.async.put_BANG_.call(null,out,(cljs.core.truth_(edn_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_node_io.fs.stat__GT_clj.call(null,curr),cljs_node_io.fs.stat__GT_clj.call(null,prev)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,prev], null)));
});})(defaults,map__38835,map__38835__$1,opts__$1,edn_QMARK_,buf_or_n,out))
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
