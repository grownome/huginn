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
var G__45656__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__45656 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45657__i = 0, G__45657__a = new Array(arguments.length -  0);
while (G__45657__i < G__45657__a.length) {G__45657__a[G__45657__i] = arguments[G__45657__i + 0]; ++G__45657__i;}
  args = new cljs.core.IndexedSeq(G__45657__a,0,null);
} 
return G__45656__delegate.call(this,args);};
G__45656.cljs$lang$maxFixedArity = 0;
G__45656.cljs$lang$applyTo = (function (arglist__45658){
var args = cljs.core.seq(arglist__45658);
return G__45656__delegate(args);
});
G__45656.cljs$core$IFn$_invoke$arity$variadic = G__45656__delegate;
return G__45656;
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
var G__45659__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__45659 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45660__i = 0, G__45660__a = new Array(arguments.length -  0);
while (G__45660__i < G__45660__a.length) {G__45660__a[G__45660__i] = arguments[G__45660__i + 0]; ++G__45660__i;}
  args = new cljs.core.IndexedSeq(G__45660__a,0,null);
} 
return G__45659__delegate.call(this,args);};
G__45659.cljs$lang$maxFixedArity = 0;
G__45659.cljs$lang$applyTo = (function (arglist__45661){
var args = cljs.core.seq(arglist__45661);
return G__45659__delegate(args);
});
G__45659.cljs$core$IFn$_invoke$arity$variadic = G__45659__delegate;
return G__45659;
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
return (function (p1__45662_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.nth.call(null,p1__45662_SHARP_,(0)),"_checkModeProperty");
});})(ks,vs))
),cljs.core.map.call(null,((function (ks,vs){
return (function (p__45663){
var vec__45664 = p__45663;
var k = cljs.core.nth.call(null,vec__45664,(0),null);
var v = cljs.core.nth.call(null,vec__45664,(1),null);
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

var G__45667 = (i + (1));
i = G__45667;
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
}catch (e45668){if((e45668 instanceof Error)){
var e = e45668;
return false;
} else {
throw e45668;

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
return (function (p__45669){
var vec__45670 = p__45669;
var err = cljs.core.nth.call(null,vec__45670,(0),null);
var stats = cljs.core.nth.call(null,vec__45670,(1),null);
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
}catch (e45673){if((e45673 instanceof Error)){
var e = e45673;
return false;
} else {
throw e45673;

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
return (function (p__45674){
var vec__45675 = p__45674;
var err = cljs.core.nth.call(null,vec__45675,(0),null);
var stats = cljs.core.nth.call(null,vec__45675,(1),null);
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
}catch (e45678){if((e45678 instanceof Error)){
var e = e45678;
return false;
} else {
throw e45678;

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
}catch (e45679){if((e45679 instanceof Error)){
var e = e45679;
return false;
} else {
throw e45679;

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
}catch (e45680){if((e45680 instanceof Error)){
var e = e45680;
return false;
} else {
throw e45680;

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
}catch (e45681){if((e45681 instanceof Error)){
var e = e45681;
return false;
} else {
throw e45681;

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
}catch (e45682){if((e45682 instanceof Error)){
var e = e45682;
return false;
} else {
throw e45682;

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
return (function (p__45683){
var vec__45684 = p__45683;
var err = cljs.core.nth.call(null,vec__45684,(0),null);
var stats = cljs.core.nth.call(null,vec__45684,(1),null);
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
var G__45688 = arguments.length;
switch (G__45688) {
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
var len__10205__auto___45691 = arguments.length;
var i__10206__auto___45692 = (0);
while(true){
if((i__10206__auto___45692 < len__10205__auto___45691)){
args__10212__auto__.push((arguments[i__10206__auto___45692]));

var G__45693 = (i__10206__auto___45692 + (1));
i__10206__auto___45692 = G__45693;
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

cljs_node_io.fs.resolve_path.cljs$lang$applyTo = (function (seq45690){
return cljs_node_io.fs.resolve_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45690));
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
var G__45694__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__45694 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45695__i = 0, G__45695__a = new Array(arguments.length -  0);
while (G__45695__i < G__45695__a.length) {G__45695__a[G__45695__i] = arguments[G__45695__i + 0]; ++G__45695__i;}
  args = new cljs.core.IndexedSeq(G__45695__a,0,null);
} 
return G__45694__delegate.call(this,args);};
G__45694.cljs$lang$maxFixedArity = 0;
G__45694.cljs$lang$applyTo = (function (arglist__45696){
var args = cljs.core.seq(arglist__45696);
return G__45694__delegate(args);
});
G__45694.cljs$core$IFn$_invoke$arity$variadic = G__45694__delegate;
return G__45694;
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
var G__45697__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__45697 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45698__i = 0, G__45698__a = new Array(arguments.length -  0);
while (G__45698__i < G__45698__a.length) {G__45698__a[G__45698__i] = arguments[G__45698__i + 0]; ++G__45698__i;}
  args = new cljs.core.IndexedSeq(G__45698__a,0,null);
} 
return G__45697__delegate.call(this,args);};
G__45697.cljs$lang$maxFixedArity = 0;
G__45697.cljs$lang$applyTo = (function (arglist__45699){
var args = cljs.core.seq(arglist__45699);
return G__45697__delegate(args);
});
G__45697.cljs$core$IFn$_invoke$arity$variadic = G__45697__delegate;
return G__45697;
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
var G__45700__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__45700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45701__i = 0, G__45701__a = new Array(arguments.length -  0);
while (G__45701__i < G__45701__a.length) {G__45701__a[G__45701__i] = arguments[G__45701__i + 0]; ++G__45701__i;}
  args = new cljs.core.IndexedSeq(G__45701__a,0,null);
} 
return G__45700__delegate.call(this,args);};
G__45700.cljs$lang$maxFixedArity = 0;
G__45700.cljs$lang$applyTo = (function (arglist__45702){
var args = cljs.core.seq(arglist__45702);
return G__45700__delegate(args);
});
G__45700.cljs$core$IFn$_invoke$arity$variadic = G__45700__delegate;
return G__45700;
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
var G__45703__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__45703 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45704__i = 0, G__45704__a = new Array(arguments.length -  0);
while (G__45704__i < G__45704__a.length) {G__45704__a[G__45704__i] = arguments[G__45704__i + 0]; ++G__45704__i;}
  args = new cljs.core.IndexedSeq(G__45704__a,0,null);
} 
return G__45703__delegate.call(this,args);};
G__45703.cljs$lang$maxFixedArity = 0;
G__45703.cljs$lang$applyTo = (function (arglist__45705){
var args = cljs.core.seq(arglist__45705);
return G__45703__delegate(args);
});
G__45703.cljs$core$IFn$_invoke$arity$variadic = G__45703__delegate;
return G__45703;
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
var G__45706__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__45706 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45707__i = 0, G__45707__a = new Array(arguments.length -  0);
while (G__45707__i < G__45707__a.length) {G__45707__a[G__45707__i] = arguments[G__45707__i + 0]; ++G__45707__i;}
  args = new cljs.core.IndexedSeq(G__45707__a,0,null);
} 
return G__45706__delegate.call(this,args);};
G__45706.cljs$lang$maxFixedArity = 0;
G__45706.cljs$lang$applyTo = (function (arglist__45708){
var args = cljs.core.seq(arglist__45708);
return G__45706__delegate(args);
});
G__45706.cljs$core$IFn$_invoke$arity$variadic = G__45706__delegate;
return G__45706;
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
var G__45709__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__45709 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45710__i = 0, G__45710__a = new Array(arguments.length -  0);
while (G__45710__i < G__45710__a.length) {G__45710__a[G__45710__i] = arguments[G__45710__i + 0]; ++G__45710__i;}
  args = new cljs.core.IndexedSeq(G__45710__a,0,null);
} 
return G__45709__delegate.call(this,args);};
G__45709.cljs$lang$maxFixedArity = 0;
G__45709.cljs$lang$applyTo = (function (arglist__45711){
var args = cljs.core.seq(arglist__45711);
return G__45709__delegate(args);
});
G__45709.cljs$core$IFn$_invoke$arity$variadic = G__45709__delegate;
return G__45709;
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
var G__45712__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__45712 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45713__i = 0, G__45713__a = new Array(arguments.length -  0);
while (G__45713__i < G__45713__a.length) {G__45713__a[G__45713__i] = arguments[G__45713__i + 0]; ++G__45713__i;}
  args = new cljs.core.IndexedSeq(G__45713__a,0,null);
} 
return G__45712__delegate.call(this,args);};
G__45712.cljs$lang$maxFixedArity = 0;
G__45712.cljs$lang$applyTo = (function (arglist__45714){
var args = cljs.core.seq(arglist__45714);
return G__45712__delegate(args);
});
G__45712.cljs$core$IFn$_invoke$arity$variadic = G__45712__delegate;
return G__45712;
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
var G__45715__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__45715 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45716__i = 0, G__45716__a = new Array(arguments.length -  0);
while (G__45716__i < G__45716__a.length) {G__45716__a[G__45716__i] = arguments[G__45716__i + 0]; ++G__45716__i;}
  args = new cljs.core.IndexedSeq(G__45716__a,0,null);
} 
return G__45715__delegate.call(this,args);};
G__45715.cljs$lang$maxFixedArity = 0;
G__45715.cljs$lang$applyTo = (function (arglist__45717){
var args = cljs.core.seq(arglist__45717);
return G__45715__delegate(args);
});
G__45715.cljs$core$IFn$_invoke$arity$variadic = G__45715__delegate;
return G__45715;
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
var G__45718__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__45718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45719__i = 0, G__45719__a = new Array(arguments.length -  0);
while (G__45719__i < G__45719__a.length) {G__45719__a[G__45719__i] = arguments[G__45719__i + 0]; ++G__45719__i;}
  args = new cljs.core.IndexedSeq(G__45719__a,0,null);
} 
return G__45718__delegate.call(this,args);};
G__45718.cljs$lang$maxFixedArity = 0;
G__45718.cljs$lang$applyTo = (function (arglist__45720){
var args = cljs.core.seq(arglist__45720);
return G__45718__delegate(args);
});
G__45718.cljs$core$IFn$_invoke$arity$variadic = G__45718__delegate;
return G__45718;
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
var G__45721__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__45721 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45722__i = 0, G__45722__a = new Array(arguments.length -  0);
while (G__45722__i < G__45722__a.length) {G__45722__a[G__45722__i] = arguments[G__45722__i + 0]; ++G__45722__i;}
  args = new cljs.core.IndexedSeq(G__45722__a,0,null);
} 
return G__45721__delegate.call(this,args);};
G__45721.cljs$lang$maxFixedArity = 0;
G__45721.cljs$lang$applyTo = (function (arglist__45723){
var args = cljs.core.seq(arglist__45723);
return G__45721__delegate(args);
});
G__45721.cljs$core$IFn$_invoke$arity$variadic = G__45721__delegate;
return G__45721;
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
var G__45724__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__45724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45725__i = 0, G__45725__a = new Array(arguments.length -  0);
while (G__45725__i < G__45725__a.length) {G__45725__a[G__45725__i] = arguments[G__45725__i + 0]; ++G__45725__i;}
  args = new cljs.core.IndexedSeq(G__45725__a,0,null);
} 
return G__45724__delegate.call(this,args);};
G__45724.cljs$lang$maxFixedArity = 0;
G__45724.cljs$lang$applyTo = (function (arglist__45726){
var args = cljs.core.seq(arglist__45726);
return G__45724__delegate(args);
});
G__45724.cljs$core$IFn$_invoke$arity$variadic = G__45724__delegate;
return G__45724;
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
var G__45727__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__45727 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45728__i = 0, G__45728__a = new Array(arguments.length -  0);
while (G__45728__i < G__45728__a.length) {G__45728__a[G__45728__i] = arguments[G__45728__i + 0]; ++G__45728__i;}
  args = new cljs.core.IndexedSeq(G__45728__a,0,null);
} 
return G__45727__delegate.call(this,args);};
G__45727.cljs$lang$maxFixedArity = 0;
G__45727.cljs$lang$applyTo = (function (arglist__45729){
var args = cljs.core.seq(arglist__45729);
return G__45727__delegate(args);
});
G__45727.cljs$core$IFn$_invoke$arity$variadic = G__45727__delegate;
return G__45727;
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
var seq__45730_45734 = cljs.core.seq.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs_node_io.fs.resolve_path,pathstr),cljs_node_io.fs.readdir.call(null,pathstr)));
var chunk__45731_45735 = null;
var count__45732_45736 = (0);
var i__45733_45737 = (0);
while(true){
if((i__45733_45737 < count__45732_45736)){
var p_45738 = cljs.core._nth.call(null,chunk__45731_45735,i__45733_45737);
cljs_node_io.fs.rm_r.call(null,p_45738);

var G__45739 = seq__45730_45734;
var G__45740 = chunk__45731_45735;
var G__45741 = count__45732_45736;
var G__45742 = (i__45733_45737 + (1));
seq__45730_45734 = G__45739;
chunk__45731_45735 = G__45740;
count__45732_45736 = G__45741;
i__45733_45737 = G__45742;
continue;
} else {
var temp__5457__auto___45743 = cljs.core.seq.call(null,seq__45730_45734);
if(temp__5457__auto___45743){
var seq__45730_45744__$1 = temp__5457__auto___45743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45730_45744__$1)){
var c__9857__auto___45745 = cljs.core.chunk_first.call(null,seq__45730_45744__$1);
var G__45746 = cljs.core.chunk_rest.call(null,seq__45730_45744__$1);
var G__45747 = c__9857__auto___45745;
var G__45748 = cljs.core.count.call(null,c__9857__auto___45745);
var G__45749 = (0);
seq__45730_45734 = G__45746;
chunk__45731_45735 = G__45747;
count__45732_45736 = G__45748;
i__45733_45737 = G__45749;
continue;
} else {
var p_45750 = cljs.core.first.call(null,seq__45730_45744__$1);
cljs_node_io.fs.rm_r.call(null,p_45750);

var G__45751 = cljs.core.next.call(null,seq__45730_45744__$1);
var G__45752 = null;
var G__45753 = (0);
var G__45754 = (0);
seq__45730_45734 = G__45751;
chunk__45731_45735 = G__45752;
count__45732_45736 = G__45753;
i__45733_45737 = G__45754;
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
var c__17681__auto___45849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17681__auto___45849,c){
return (function (){
var f__17682__auto__ = (function (){var switch__17591__auto__ = ((function (c__17681__auto___45849,c){
return (function (state_45820){
var state_val_45821 = (state_45820[(1)]);
if((state_val_45821 === (7))){
var inst_45766 = (state_45820[(7)]);
var inst_45769 = cljs.core.partial.call(null,cljs_node_io.fs.resolve_path,pathstr);
var inst_45770 = cljs.core.mapv.call(null,inst_45769,inst_45766);
var inst_45771 = inst_45770;
var state_45820__$1 = (function (){var statearr_45822 = state_45820;
(statearr_45822[(8)] = inst_45771);

return statearr_45822;
})();
var statearr_45823_45850 = state_45820__$1;
(statearr_45823_45850[(2)] = null);

(statearr_45823_45850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45821 === (20))){
var inst_45802 = (state_45820[(2)]);
var state_45820__$1 = state_45820;
var statearr_45824_45851 = state_45820__$1;
(statearr_45824_45851[(2)] = inst_45802);

(statearr_45824_45851[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45821 === (1))){
var inst_45755 = cljs_node_io.fs.adir_QMARK_.call(null,pathstr);
var state_45820__$1 = state_45820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45820__$1,(2),inst_45755);
} else {
if((state_val_45821 === (24))){
var inst_45814 = (state_45820[(2)]);
var state_45820__$1 = state_45820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45820__$1,(23),c,inst_45814);
} else {
if((state_val_45821 === (4))){
var inst_45812 = cljs_node_io.fs.aunlink.call(null,pathstr);
var state_45820__$1 = state_45820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45820__$1,(24),inst_45812);
} else {
if((state_val_45821 === (15))){
var inst_45783 = (state_45820[(9)]);
var inst_45782 = (state_45820[(2)]);
var inst_45783__$1 = cljs.core.nth.call(null,inst_45782,(0),null);
var inst_45784 = (inst_45783__$1 instanceof Error);
var state_45820__$1 = (function (){var statearr_45825 = state_45820;
(statearr_45825[(9)] = inst_45783__$1);

return statearr_45825;
})();
if(cljs.core.truth_(inst_45784)){
var statearr_45826_45852 = state_45820__$1;
(statearr_45826_45852[(1)] = (16));

} else {
var statearr_45827_45853 = state_45820__$1;
(statearr_45827_45853[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45821 === (21))){
var inst_45800 = (state_45820[(2)]);
var state_45820__$1 = state_45820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45820__$1,(20),c,inst_45800);
} else {
if((state_val_45821 === (13))){
var state_45820__$1 = state_45820;
var statearr_45828_45854 = state_45820__$1;
(statearr_45828_45854[(2)] = null);

(statearr_45828_45854[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45821 === (22))){
var inst_45808 = (state_45820[(2)]);
var state_45820__$1 = state_45820;
var statearr_45829_45855 = state_45820__$1;
(statearr_45829_45855[(2)] = inst_45808);

(statearr_45829_45855[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45821 === (6))){
var inst_45765 = (state_45820[(10)]);
var inst_45764 = (state_45820[(2)]);
var inst_45765__$1 = cljs.core.nth.call(null,inst_45764,(0),null);
var inst_45766 = cljs.core.nth.call(null,inst_45764,(1),null);
var inst_45767 = cljs.core.not.call(null,inst_45765__$1);
var state_45820__$1 = (function (){var statearr_45830 = state_45820;
(statearr_45830[(7)] = inst_45766);

(statearr_45830[(10)] = inst_45765__$1);

return statearr_45830;
})();
if(inst_45767){
var statearr_45831_45856 = state_45820__$1;
(statearr_45831_45856[(1)] = (7));

} else {
var statearr_45832_45857 = state_45820__$1;
(statearr_45832_45857[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45821 === (17))){
var inst_45771 = (state_45820[(8)]);
var inst_45789 = cljs.core.next.call(null,inst_45771);
var inst_45771__$1 = inst_45789;
var state_45820__$1 = (function (){var statearr_45833 = state_45820;
(statearr_45833[(8)] = inst_45771__$1);

return statearr_45833;
})();
var statearr_45834_45858 = state_45820__$1;
(statearr_45834_45858[(2)] = null);

(statearr_45834_45858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45821 === (3))){
var inst_45762 = cljs_node_io.fs.areaddir.call(null,pathstr);
var state_45820__$1 = state_45820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45820__$1,(6),inst_45762);
} else {
if((state_val_45821 === (12))){
var inst_45771 = (state_45820[(8)]);
var inst_45779 = cljs.core.first.call(null,inst_45771);
var inst_45780 = cljs_node_io.fs.arm_r.call(null,inst_45779);
var state_45820__$1 = state_45820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45820__$1,(15),inst_45780);
} else {
if((state_val_45821 === (2))){
var inst_45757 = (state_45820[(2)]);
var state_45820__$1 = state_45820;
if(cljs.core.truth_(inst_45757)){
var statearr_45835_45859 = state_45820__$1;
(statearr_45835_45859[(1)] = (3));

} else {
var statearr_45836_45860 = state_45820__$1;
(statearr_45836_45860[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45821 === (23))){
var inst_45816 = (state_45820[(2)]);
var state_45820__$1 = state_45820;
var statearr_45837_45861 = state_45820__$1;
(statearr_45837_45861[(2)] = inst_45816);

(statearr_45837_45861[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45821 === (19))){
var inst_45787 = (state_45820[(2)]);
var state_45820__$1 = state_45820;
var statearr_45838_45862 = state_45820__$1;
(statearr_45838_45862[(2)] = inst_45787);

(statearr_45838_45862[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45821 === (11))){
var inst_45797 = (state_45820[(2)]);
var inst_45798 = cljs_node_io.fs.armdir.call(null,pathstr);
var state_45820__$1 = (function (){var statearr_45839 = state_45820;
(statearr_45839[(11)] = inst_45797);

return statearr_45839;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45820__$1,(21),inst_45798);
} else {
if((state_val_45821 === (9))){
var inst_45810 = (state_45820[(2)]);
var state_45820__$1 = state_45820;
var statearr_45840_45863 = state_45820__$1;
(statearr_45840_45863[(2)] = inst_45810);

(statearr_45840_45863[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45821 === (5))){
var inst_45818 = (state_45820[(2)]);
var state_45820__$1 = state_45820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45820__$1,inst_45818);
} else {
if((state_val_45821 === (14))){
var inst_45795 = (state_45820[(2)]);
var state_45820__$1 = state_45820;
var statearr_45841_45864 = state_45820__$1;
(statearr_45841_45864[(2)] = inst_45795);

(statearr_45841_45864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45821 === (16))){
var inst_45783 = (state_45820[(9)]);
var state_45820__$1 = state_45820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45820__$1,(19),c,inst_45783);
} else {
if((state_val_45821 === (10))){
var inst_45771 = (state_45820[(8)]);
var inst_45773 = (inst_45771 == null);
var inst_45774 = cljs.core.not.call(null,inst_45773);
var state_45820__$1 = state_45820;
if(inst_45774){
var statearr_45842_45865 = state_45820__$1;
(statearr_45842_45865[(1)] = (12));

} else {
var statearr_45843_45866 = state_45820__$1;
(statearr_45843_45866[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45821 === (18))){
var inst_45792 = (state_45820[(2)]);
var state_45820__$1 = state_45820;
var statearr_45844_45867 = state_45820__$1;
(statearr_45844_45867[(2)] = inst_45792);

(statearr_45844_45867[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45821 === (8))){
var inst_45765 = (state_45820[(10)]);
var inst_45804 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45805 = [inst_45765];
var inst_45806 = (new cljs.core.PersistentVector(null,1,(5),inst_45804,inst_45805,null));
var state_45820__$1 = state_45820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45820__$1,(22),c,inst_45806);
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
});})(c__17681__auto___45849,c))
;
return ((function (switch__17591__auto__,c__17681__auto___45849,c){
return (function() {
var cljs_node_io$fs$arm_r_$_state_machine__17592__auto__ = null;
var cljs_node_io$fs$arm_r_$_state_machine__17592__auto____0 = (function (){
var statearr_45845 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45845[(0)] = cljs_node_io$fs$arm_r_$_state_machine__17592__auto__);

(statearr_45845[(1)] = (1));

return statearr_45845;
});
var cljs_node_io$fs$arm_r_$_state_machine__17592__auto____1 = (function (state_45820){
while(true){
var ret_value__17593__auto__ = (function (){try{while(true){
var result__17594__auto__ = switch__17591__auto__.call(null,state_45820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17594__auto__;
}
break;
}
}catch (e45846){if((e45846 instanceof Object)){
var ex__17595__auto__ = e45846;
var statearr_45847_45868 = state_45820;
(statearr_45847_45868[(5)] = ex__17595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45869 = state_45820;
state_45820 = G__45869;
continue;
} else {
return ret_value__17593__auto__;
}
break;
}
});
cljs_node_io$fs$arm_r_$_state_machine__17592__auto__ = function(state_45820){
switch(arguments.length){
case 0:
return cljs_node_io$fs$arm_r_$_state_machine__17592__auto____0.call(this);
case 1:
return cljs_node_io$fs$arm_r_$_state_machine__17592__auto____1.call(this,state_45820);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_node_io$fs$arm_r_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_node_io$fs$arm_r_$_state_machine__17592__auto____0;
cljs_node_io$fs$arm_r_$_state_machine__17592__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_node_io$fs$arm_r_$_state_machine__17592__auto____1;
return cljs_node_io$fs$arm_r_$_state_machine__17592__auto__;
})()
;})(switch__17591__auto__,c__17681__auto___45849,c))
})();
var state__17683__auto__ = (function (){var statearr_45848 = f__17682__auto__.call(null);
(statearr_45848[(6)] = c__17681__auto___45849);

return statearr_45848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17683__auto__);
});})(c__17681__auto___45849,c))
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
var G__45870__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__45870 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45871__i = 0, G__45871__a = new Array(arguments.length -  0);
while (G__45871__i < G__45871__a.length) {G__45871__a[G__45871__i] = arguments[G__45871__i + 0]; ++G__45871__i;}
  args = new cljs.core.IndexedSeq(G__45871__a,0,null);
} 
return G__45870__delegate.call(this,args);};
G__45870.cljs$lang$maxFixedArity = 0;
G__45870.cljs$lang$applyTo = (function (arglist__45872){
var args = cljs.core.seq(arglist__45872);
return G__45870__delegate(args);
});
G__45870.cljs$core$IFn$_invoke$arity$variadic = G__45870__delegate;
return G__45870;
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
var G__45873__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__45873 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45874__i = 0, G__45874__a = new Array(arguments.length -  0);
while (G__45874__i < G__45874__a.length) {G__45874__a[G__45874__i] = arguments[G__45874__i + 0]; ++G__45874__i;}
  args = new cljs.core.IndexedSeq(G__45874__a,0,null);
} 
return G__45873__delegate.call(this,args);};
G__45873.cljs$lang$maxFixedArity = 0;
G__45873.cljs$lang$applyTo = (function (arglist__45875){
var args = cljs.core.seq(arglist__45875);
return G__45873__delegate(args);
});
G__45873.cljs$core$IFn$_invoke$arity$variadic = G__45873__delegate;
return G__45873;
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
var G__45876__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__45876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45877__i = 0, G__45877__a = new Array(arguments.length -  0);
while (G__45877__i < G__45877__a.length) {G__45877__a[G__45877__i] = arguments[G__45877__i + 0]; ++G__45877__i;}
  args = new cljs.core.IndexedSeq(G__45877__a,0,null);
} 
return G__45876__delegate.call(this,args);};
G__45876.cljs$lang$maxFixedArity = 0;
G__45876.cljs$lang$applyTo = (function (arglist__45878){
var args = cljs.core.seq(arglist__45878);
return G__45876__delegate(args);
});
G__45876.cljs$core$IFn$_invoke$arity$variadic = G__45876__delegate;
return G__45876;
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
var G__45879__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__45879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45880__i = 0, G__45880__a = new Array(arguments.length -  0);
while (G__45880__i < G__45880__a.length) {G__45880__a[G__45880__i] = arguments[G__45880__i + 0]; ++G__45880__i;}
  args = new cljs.core.IndexedSeq(G__45880__a,0,null);
} 
return G__45879__delegate.call(this,args);};
G__45879.cljs$lang$maxFixedArity = 0;
G__45879.cljs$lang$applyTo = (function (arglist__45881){
var args = cljs.core.seq(arglist__45881);
return G__45879__delegate(args);
});
G__45879.cljs$core$IFn$_invoke$arity$variadic = G__45879__delegate;
return G__45879;
})()
;})(c))
);

return c;
});
cljs_node_io.fs.watcher__GT_ch = (function cljs_node_io$fs$watcher__GT_ch(var_args){
var G__45883 = arguments.length;
switch (G__45883) {
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

cljs_node_io.fs.watcher__GT_ch.cljs$core$IFn$_invoke$arity$3 = (function (FSWatcher,out_ch,p__45884){
var map__45885 = p__45884;
var map__45885__$1 = ((((!((map__45885 == null)))?((((map__45885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45885):map__45885);
var key = cljs.core.get.call(null,map__45885__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var buf_or_n = cljs.core.get.call(null,map__45885__$1,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719),(10));
var G__45887_45889 = FSWatcher;
G__45887_45889.on("change",((function (G__45887_45889,map__45885,map__45885__$1,key,buf_or_n){
return (function (eventType,filename){
return cljs.core.async.put_BANG_.call(null,out_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,eventType)], null));
});})(G__45887_45889,map__45885,map__45885__$1,key,buf_or_n))
);

G__45887_45889.on("error",((function (G__45887_45889,map__45885,map__45885__$1,key,buf_or_n){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)], null));
});})(G__45887_45889,map__45885,map__45885__$1,key,buf_or_n))
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
var G__45892 = arguments.length;
switch (G__45892) {
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
return (function (p1__45890_SHARP_){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null),p1__45890_SHARP_);
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
var G__45896 = arguments.length;
switch (G__45896) {
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
var map__45897 = cljs.core.merge.call(null,defaults,opts);
var map__45897__$1 = ((((!((map__45897 == null)))?((((map__45897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45897.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45897):map__45897);
var opts__$1 = map__45897__$1;
var edn_QMARK_ = cljs.core.get.call(null,map__45897__$1,new cljs.core.Keyword(null,"edn?","edn?",-499466946));
var buf_or_n = cljs.core.get.call(null,map__45897__$1,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719));
var out = cljs.core.async.chan.call(null,buf_or_n,cljs.core.map.call(null,((function (defaults,map__45897,map__45897__$1,opts__$1,edn_QMARK_,buf_or_n){
return (function (p1__45894_SHARP_){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null),p1__45894_SHARP_);
});})(defaults,map__45897,map__45897__$1,opts__$1,edn_QMARK_,buf_or_n))
));
var cb = ((function (defaults,map__45897,map__45897__$1,opts__$1,edn_QMARK_,buf_or_n,out){
return (function (curr,prev){
return cljs.core.async.put_BANG_.call(null,out,(cljs.core.truth_(edn_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_node_io.fs.stat__GT_clj.call(null,curr),cljs_node_io.fs.stat__GT_clj.call(null,prev)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,prev], null)));
});})(defaults,map__45897,map__45897__$1,opts__$1,edn_QMARK_,buf_or_n,out))
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
