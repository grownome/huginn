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
var G__31745__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__31745 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31746__i = 0, G__31746__a = new Array(arguments.length -  0);
while (G__31746__i < G__31746__a.length) {G__31746__a[G__31746__i] = arguments[G__31746__i + 0]; ++G__31746__i;}
  args = new cljs.core.IndexedSeq(G__31746__a,0,null);
} 
return G__31745__delegate.call(this,args);};
G__31745.cljs$lang$maxFixedArity = 0;
G__31745.cljs$lang$applyTo = (function (arglist__31747){
var args = cljs.core.seq(arglist__31747);
return G__31745__delegate(args);
});
G__31745.cljs$core$IFn$_invoke$arity$variadic = G__31745__delegate;
return G__31745;
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
var G__31748__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__31748 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31749__i = 0, G__31749__a = new Array(arguments.length -  0);
while (G__31749__i < G__31749__a.length) {G__31749__a[G__31749__i] = arguments[G__31749__i + 0]; ++G__31749__i;}
  args = new cljs.core.IndexedSeq(G__31749__a,0,null);
} 
return G__31748__delegate.call(this,args);};
G__31748.cljs$lang$maxFixedArity = 0;
G__31748.cljs$lang$applyTo = (function (arglist__31750){
var args = cljs.core.seq(arglist__31750);
return G__31748__delegate(args);
});
G__31748.cljs$core$IFn$_invoke$arity$variadic = G__31748__delegate;
return G__31748;
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
return (function (p1__31751_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.nth.call(null,p1__31751_SHARP_,(0)),"_checkModeProperty");
});})(ks,vs))
),cljs.core.map.call(null,((function (ks,vs){
return (function (p__31752){
var vec__31753 = p__31752;
var k = cljs.core.nth.call(null,vec__31753,(0),null);
var v = cljs.core.nth.call(null,vec__31753,(1),null);
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
var a__22232__auto__ = a;
var l__22233__auto__ = a__22232__auto__.length;
var res = cljs.core.aclone.call(null,a__22232__auto__);
var i = (0);
while(true){
if((i < l__22233__auto__)){
(res[i] = ((!(((a[i]) === (0))))?(1):(0)));

var G__31756 = (i + (1));
i = G__31756;
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
}catch (e31757){if((e31757 instanceof Error)){
var e = e31757;
return false;
} else {
throw e31757;

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
return (function (p__31758){
var vec__31759 = p__31758;
var err = cljs.core.nth.call(null,vec__31759,(0),null);
var stats = cljs.core.nth.call(null,vec__31759,(1),null);
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
}catch (e31762){if((e31762 instanceof Error)){
var e = e31762;
return false;
} else {
throw e31762;

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
return (function (p__31763){
var vec__31764 = p__31763;
var err = cljs.core.nth.call(null,vec__31764,(0),null);
var stats = cljs.core.nth.call(null,vec__31764,(1),null);
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
}catch (e31767){if((e31767 instanceof Error)){
var e = e31767;
return false;
} else {
throw e31767;

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
}catch (e31768){if((e31768 instanceof Error)){
var e = e31768;
return false;
} else {
throw e31768;

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
}catch (e31769){if((e31769 instanceof Error)){
var e = e31769;
return false;
} else {
throw e31769;

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
}catch (e31770){if((e31770 instanceof Error)){
var e = e31770;
return false;
} else {
throw e31770;

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
}catch (e31771){if((e31771 instanceof Error)){
var e = e31771;
return false;
} else {
throw e31771;

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
return (function (p__31772){
var vec__31773 = p__31772;
var err = cljs.core.nth.call(null,vec__31773,(0),null);
var stats = cljs.core.nth.call(null,vec__31773,(1),null);
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
var G__31777 = arguments.length;
switch (G__31777) {
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
var args__22487__auto__ = [];
var len__22480__auto___31780 = arguments.length;
var i__22481__auto___31781 = (0);
while(true){
if((i__22481__auto___31781 < len__22480__auto___31780)){
args__22487__auto__.push((arguments[i__22481__auto___31781]));

var G__31782 = (i__22481__auto___31781 + (1));
i__22481__auto___31781 = G__31782;
continue;
} else {
}
break;
}

var argseq__22488__auto__ = ((((0) < args__22487__auto__.length))?(new cljs.core.IndexedSeq(args__22487__auto__.slice((0)),(0),null)):null);
return cljs_node_io.fs.resolve_path.cljs$core$IFn$_invoke$arity$variadic(argseq__22488__auto__);
});

cljs_node_io.fs.resolve_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
return cljs_node_io.fs.path.resolve.apply(null,cljs.core.apply.call(null,cljs.core.array,paths));
});

cljs_node_io.fs.resolve_path.cljs$lang$maxFixedArity = (0);

cljs_node_io.fs.resolve_path.cljs$lang$applyTo = (function (seq31779){
return cljs_node_io.fs.resolve_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31779));
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
var G__31783__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__31783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31784__i = 0, G__31784__a = new Array(arguments.length -  0);
while (G__31784__i < G__31784__a.length) {G__31784__a[G__31784__i] = arguments[G__31784__i + 0]; ++G__31784__i;}
  args = new cljs.core.IndexedSeq(G__31784__a,0,null);
} 
return G__31783__delegate.call(this,args);};
G__31783.cljs$lang$maxFixedArity = 0;
G__31783.cljs$lang$applyTo = (function (arglist__31785){
var args = cljs.core.seq(arglist__31785);
return G__31783__delegate(args);
});
G__31783.cljs$core$IFn$_invoke$arity$variadic = G__31783__delegate;
return G__31783;
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
var G__31786__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__31786 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31787__i = 0, G__31787__a = new Array(arguments.length -  0);
while (G__31787__i < G__31787__a.length) {G__31787__a[G__31787__i] = arguments[G__31787__i + 0]; ++G__31787__i;}
  args = new cljs.core.IndexedSeq(G__31787__a,0,null);
} 
return G__31786__delegate.call(this,args);};
G__31786.cljs$lang$maxFixedArity = 0;
G__31786.cljs$lang$applyTo = (function (arglist__31788){
var args = cljs.core.seq(arglist__31788);
return G__31786__delegate(args);
});
G__31786.cljs$core$IFn$_invoke$arity$variadic = G__31786__delegate;
return G__31786;
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
var G__31789__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__31789 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31790__i = 0, G__31790__a = new Array(arguments.length -  0);
while (G__31790__i < G__31790__a.length) {G__31790__a[G__31790__i] = arguments[G__31790__i + 0]; ++G__31790__i;}
  args = new cljs.core.IndexedSeq(G__31790__a,0,null);
} 
return G__31789__delegate.call(this,args);};
G__31789.cljs$lang$maxFixedArity = 0;
G__31789.cljs$lang$applyTo = (function (arglist__31791){
var args = cljs.core.seq(arglist__31791);
return G__31789__delegate(args);
});
G__31789.cljs$core$IFn$_invoke$arity$variadic = G__31789__delegate;
return G__31789;
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
var G__31792__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__31792 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31793__i = 0, G__31793__a = new Array(arguments.length -  0);
while (G__31793__i < G__31793__a.length) {G__31793__a[G__31793__i] = arguments[G__31793__i + 0]; ++G__31793__i;}
  args = new cljs.core.IndexedSeq(G__31793__a,0,null);
} 
return G__31792__delegate.call(this,args);};
G__31792.cljs$lang$maxFixedArity = 0;
G__31792.cljs$lang$applyTo = (function (arglist__31794){
var args = cljs.core.seq(arglist__31794);
return G__31792__delegate(args);
});
G__31792.cljs$core$IFn$_invoke$arity$variadic = G__31792__delegate;
return G__31792;
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
var G__31795__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__31795 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31796__i = 0, G__31796__a = new Array(arguments.length -  0);
while (G__31796__i < G__31796__a.length) {G__31796__a[G__31796__i] = arguments[G__31796__i + 0]; ++G__31796__i;}
  args = new cljs.core.IndexedSeq(G__31796__a,0,null);
} 
return G__31795__delegate.call(this,args);};
G__31795.cljs$lang$maxFixedArity = 0;
G__31795.cljs$lang$applyTo = (function (arglist__31797){
var args = cljs.core.seq(arglist__31797);
return G__31795__delegate(args);
});
G__31795.cljs$core$IFn$_invoke$arity$variadic = G__31795__delegate;
return G__31795;
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
var G__31798__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__31798 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31799__i = 0, G__31799__a = new Array(arguments.length -  0);
while (G__31799__i < G__31799__a.length) {G__31799__a[G__31799__i] = arguments[G__31799__i + 0]; ++G__31799__i;}
  args = new cljs.core.IndexedSeq(G__31799__a,0,null);
} 
return G__31798__delegate.call(this,args);};
G__31798.cljs$lang$maxFixedArity = 0;
G__31798.cljs$lang$applyTo = (function (arglist__31800){
var args = cljs.core.seq(arglist__31800);
return G__31798__delegate(args);
});
G__31798.cljs$core$IFn$_invoke$arity$variadic = G__31798__delegate;
return G__31798;
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
var G__31801__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__31801 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31802__i = 0, G__31802__a = new Array(arguments.length -  0);
while (G__31802__i < G__31802__a.length) {G__31802__a[G__31802__i] = arguments[G__31802__i + 0]; ++G__31802__i;}
  args = new cljs.core.IndexedSeq(G__31802__a,0,null);
} 
return G__31801__delegate.call(this,args);};
G__31801.cljs$lang$maxFixedArity = 0;
G__31801.cljs$lang$applyTo = (function (arglist__31803){
var args = cljs.core.seq(arglist__31803);
return G__31801__delegate(args);
});
G__31801.cljs$core$IFn$_invoke$arity$variadic = G__31801__delegate;
return G__31801;
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
var G__31804__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__31804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31805__i = 0, G__31805__a = new Array(arguments.length -  0);
while (G__31805__i < G__31805__a.length) {G__31805__a[G__31805__i] = arguments[G__31805__i + 0]; ++G__31805__i;}
  args = new cljs.core.IndexedSeq(G__31805__a,0,null);
} 
return G__31804__delegate.call(this,args);};
G__31804.cljs$lang$maxFixedArity = 0;
G__31804.cljs$lang$applyTo = (function (arglist__31806){
var args = cljs.core.seq(arglist__31806);
return G__31804__delegate(args);
});
G__31804.cljs$core$IFn$_invoke$arity$variadic = G__31804__delegate;
return G__31804;
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
var G__31807__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__31807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31808__i = 0, G__31808__a = new Array(arguments.length -  0);
while (G__31808__i < G__31808__a.length) {G__31808__a[G__31808__i] = arguments[G__31808__i + 0]; ++G__31808__i;}
  args = new cljs.core.IndexedSeq(G__31808__a,0,null);
} 
return G__31807__delegate.call(this,args);};
G__31807.cljs$lang$maxFixedArity = 0;
G__31807.cljs$lang$applyTo = (function (arglist__31809){
var args = cljs.core.seq(arglist__31809);
return G__31807__delegate(args);
});
G__31807.cljs$core$IFn$_invoke$arity$variadic = G__31807__delegate;
return G__31807;
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
var G__31810__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__31810 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31811__i = 0, G__31811__a = new Array(arguments.length -  0);
while (G__31811__i < G__31811__a.length) {G__31811__a[G__31811__i] = arguments[G__31811__i + 0]; ++G__31811__i;}
  args = new cljs.core.IndexedSeq(G__31811__a,0,null);
} 
return G__31810__delegate.call(this,args);};
G__31810.cljs$lang$maxFixedArity = 0;
G__31810.cljs$lang$applyTo = (function (arglist__31812){
var args = cljs.core.seq(arglist__31812);
return G__31810__delegate(args);
});
G__31810.cljs$core$IFn$_invoke$arity$variadic = G__31810__delegate;
return G__31810;
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
var G__31813__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__31813 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31814__i = 0, G__31814__a = new Array(arguments.length -  0);
while (G__31814__i < G__31814__a.length) {G__31814__a[G__31814__i] = arguments[G__31814__i + 0]; ++G__31814__i;}
  args = new cljs.core.IndexedSeq(G__31814__a,0,null);
} 
return G__31813__delegate.call(this,args);};
G__31813.cljs$lang$maxFixedArity = 0;
G__31813.cljs$lang$applyTo = (function (arglist__31815){
var args = cljs.core.seq(arglist__31815);
return G__31813__delegate(args);
});
G__31813.cljs$core$IFn$_invoke$arity$variadic = G__31813__delegate;
return G__31813;
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
var G__31816__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__31816 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31817__i = 0, G__31817__a = new Array(arguments.length -  0);
while (G__31817__i < G__31817__a.length) {G__31817__a[G__31817__i] = arguments[G__31817__i + 0]; ++G__31817__i;}
  args = new cljs.core.IndexedSeq(G__31817__a,0,null);
} 
return G__31816__delegate.call(this,args);};
G__31816.cljs$lang$maxFixedArity = 0;
G__31816.cljs$lang$applyTo = (function (arglist__31818){
var args = cljs.core.seq(arglist__31818);
return G__31816__delegate(args);
});
G__31816.cljs$core$IFn$_invoke$arity$variadic = G__31816__delegate;
return G__31816;
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
var seq__31819_31823 = cljs.core.seq.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs_node_io.fs.resolve_path,pathstr),cljs_node_io.fs.readdir.call(null,pathstr)));
var chunk__31820_31824 = null;
var count__31821_31825 = (0);
var i__31822_31826 = (0);
while(true){
if((i__31822_31826 < count__31821_31825)){
var p_31827 = cljs.core._nth.call(null,chunk__31820_31824,i__31822_31826);
cljs_node_io.fs.rm_r.call(null,p_31827);

var G__31828 = seq__31819_31823;
var G__31829 = chunk__31820_31824;
var G__31830 = count__31821_31825;
var G__31831 = (i__31822_31826 + (1));
seq__31819_31823 = G__31828;
chunk__31820_31824 = G__31829;
count__31821_31825 = G__31830;
i__31822_31826 = G__31831;
continue;
} else {
var temp__5457__auto___31832 = cljs.core.seq.call(null,seq__31819_31823);
if(temp__5457__auto___31832){
var seq__31819_31833__$1 = temp__5457__auto___31832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31819_31833__$1)){
var c__22132__auto___31834 = cljs.core.chunk_first.call(null,seq__31819_31833__$1);
var G__31835 = cljs.core.chunk_rest.call(null,seq__31819_31833__$1);
var G__31836 = c__22132__auto___31834;
var G__31837 = cljs.core.count.call(null,c__22132__auto___31834);
var G__31838 = (0);
seq__31819_31823 = G__31835;
chunk__31820_31824 = G__31836;
count__31821_31825 = G__31837;
i__31822_31826 = G__31838;
continue;
} else {
var p_31839 = cljs.core.first.call(null,seq__31819_31833__$1);
cljs_node_io.fs.rm_r.call(null,p_31839);

var G__31840 = cljs.core.next.call(null,seq__31819_31833__$1);
var G__31841 = null;
var G__31842 = (0);
var G__31843 = (0);
seq__31819_31823 = G__31840;
chunk__31820_31824 = G__31841;
count__31821_31825 = G__31842;
i__31822_31826 = G__31843;
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
var c__26077__auto___31938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26077__auto___31938,c){
return (function (){
var f__26078__auto__ = (function (){var switch__25897__auto__ = ((function (c__26077__auto___31938,c){
return (function (state_31909){
var state_val_31910 = (state_31909[(1)]);
if((state_val_31910 === (7))){
var inst_31855 = (state_31909[(7)]);
var inst_31858 = cljs.core.partial.call(null,cljs_node_io.fs.resolve_path,pathstr);
var inst_31859 = cljs.core.mapv.call(null,inst_31858,inst_31855);
var inst_31860 = inst_31859;
var state_31909__$1 = (function (){var statearr_31911 = state_31909;
(statearr_31911[(8)] = inst_31860);

return statearr_31911;
})();
var statearr_31912_31939 = state_31909__$1;
(statearr_31912_31939[(2)] = null);

(statearr_31912_31939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (20))){
var inst_31891 = (state_31909[(2)]);
var state_31909__$1 = state_31909;
var statearr_31913_31940 = state_31909__$1;
(statearr_31913_31940[(2)] = inst_31891);

(statearr_31913_31940[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (1))){
var inst_31844 = cljs_node_io.fs.adir_QMARK_.call(null,pathstr);
var state_31909__$1 = state_31909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31909__$1,(2),inst_31844);
} else {
if((state_val_31910 === (24))){
var inst_31903 = (state_31909[(2)]);
var state_31909__$1 = state_31909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31909__$1,(23),c,inst_31903);
} else {
if((state_val_31910 === (4))){
var inst_31901 = cljs_node_io.fs.aunlink.call(null,pathstr);
var state_31909__$1 = state_31909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31909__$1,(24),inst_31901);
} else {
if((state_val_31910 === (15))){
var inst_31872 = (state_31909[(9)]);
var inst_31871 = (state_31909[(2)]);
var inst_31872__$1 = cljs.core.nth.call(null,inst_31871,(0),null);
var inst_31873 = (inst_31872__$1 instanceof Error);
var state_31909__$1 = (function (){var statearr_31914 = state_31909;
(statearr_31914[(9)] = inst_31872__$1);

return statearr_31914;
})();
if(cljs.core.truth_(inst_31873)){
var statearr_31915_31941 = state_31909__$1;
(statearr_31915_31941[(1)] = (16));

} else {
var statearr_31916_31942 = state_31909__$1;
(statearr_31916_31942[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (21))){
var inst_31889 = (state_31909[(2)]);
var state_31909__$1 = state_31909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31909__$1,(20),c,inst_31889);
} else {
if((state_val_31910 === (13))){
var state_31909__$1 = state_31909;
var statearr_31917_31943 = state_31909__$1;
(statearr_31917_31943[(2)] = null);

(statearr_31917_31943[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (22))){
var inst_31897 = (state_31909[(2)]);
var state_31909__$1 = state_31909;
var statearr_31918_31944 = state_31909__$1;
(statearr_31918_31944[(2)] = inst_31897);

(statearr_31918_31944[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (6))){
var inst_31854 = (state_31909[(10)]);
var inst_31853 = (state_31909[(2)]);
var inst_31854__$1 = cljs.core.nth.call(null,inst_31853,(0),null);
var inst_31855 = cljs.core.nth.call(null,inst_31853,(1),null);
var inst_31856 = cljs.core.not.call(null,inst_31854__$1);
var state_31909__$1 = (function (){var statearr_31919 = state_31909;
(statearr_31919[(7)] = inst_31855);

(statearr_31919[(10)] = inst_31854__$1);

return statearr_31919;
})();
if(inst_31856){
var statearr_31920_31945 = state_31909__$1;
(statearr_31920_31945[(1)] = (7));

} else {
var statearr_31921_31946 = state_31909__$1;
(statearr_31921_31946[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (17))){
var inst_31860 = (state_31909[(8)]);
var inst_31878 = cljs.core.next.call(null,inst_31860);
var inst_31860__$1 = inst_31878;
var state_31909__$1 = (function (){var statearr_31922 = state_31909;
(statearr_31922[(8)] = inst_31860__$1);

return statearr_31922;
})();
var statearr_31923_31947 = state_31909__$1;
(statearr_31923_31947[(2)] = null);

(statearr_31923_31947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (3))){
var inst_31851 = cljs_node_io.fs.areaddir.call(null,pathstr);
var state_31909__$1 = state_31909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31909__$1,(6),inst_31851);
} else {
if((state_val_31910 === (12))){
var inst_31860 = (state_31909[(8)]);
var inst_31868 = cljs.core.first.call(null,inst_31860);
var inst_31869 = cljs_node_io.fs.arm_r.call(null,inst_31868);
var state_31909__$1 = state_31909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31909__$1,(15),inst_31869);
} else {
if((state_val_31910 === (2))){
var inst_31846 = (state_31909[(2)]);
var state_31909__$1 = state_31909;
if(cljs.core.truth_(inst_31846)){
var statearr_31924_31948 = state_31909__$1;
(statearr_31924_31948[(1)] = (3));

} else {
var statearr_31925_31949 = state_31909__$1;
(statearr_31925_31949[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (23))){
var inst_31905 = (state_31909[(2)]);
var state_31909__$1 = state_31909;
var statearr_31926_31950 = state_31909__$1;
(statearr_31926_31950[(2)] = inst_31905);

(statearr_31926_31950[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (19))){
var inst_31876 = (state_31909[(2)]);
var state_31909__$1 = state_31909;
var statearr_31927_31951 = state_31909__$1;
(statearr_31927_31951[(2)] = inst_31876);

(statearr_31927_31951[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (11))){
var inst_31886 = (state_31909[(2)]);
var inst_31887 = cljs_node_io.fs.armdir.call(null,pathstr);
var state_31909__$1 = (function (){var statearr_31928 = state_31909;
(statearr_31928[(11)] = inst_31886);

return statearr_31928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31909__$1,(21),inst_31887);
} else {
if((state_val_31910 === (9))){
var inst_31899 = (state_31909[(2)]);
var state_31909__$1 = state_31909;
var statearr_31929_31952 = state_31909__$1;
(statearr_31929_31952[(2)] = inst_31899);

(statearr_31929_31952[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (5))){
var inst_31907 = (state_31909[(2)]);
var state_31909__$1 = state_31909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31909__$1,inst_31907);
} else {
if((state_val_31910 === (14))){
var inst_31884 = (state_31909[(2)]);
var state_31909__$1 = state_31909;
var statearr_31930_31953 = state_31909__$1;
(statearr_31930_31953[(2)] = inst_31884);

(statearr_31930_31953[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (16))){
var inst_31872 = (state_31909[(9)]);
var state_31909__$1 = state_31909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31909__$1,(19),c,inst_31872);
} else {
if((state_val_31910 === (10))){
var inst_31860 = (state_31909[(8)]);
var inst_31862 = (inst_31860 == null);
var inst_31863 = cljs.core.not.call(null,inst_31862);
var state_31909__$1 = state_31909;
if(inst_31863){
var statearr_31931_31954 = state_31909__$1;
(statearr_31931_31954[(1)] = (12));

} else {
var statearr_31932_31955 = state_31909__$1;
(statearr_31932_31955[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (18))){
var inst_31881 = (state_31909[(2)]);
var state_31909__$1 = state_31909;
var statearr_31933_31956 = state_31909__$1;
(statearr_31933_31956[(2)] = inst_31881);

(statearr_31933_31956[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31910 === (8))){
var inst_31854 = (state_31909[(10)]);
var inst_31893 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31894 = [inst_31854];
var inst_31895 = (new cljs.core.PersistentVector(null,1,(5),inst_31893,inst_31894,null));
var state_31909__$1 = state_31909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31909__$1,(22),c,inst_31895);
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
});})(c__26077__auto___31938,c))
;
return ((function (switch__25897__auto__,c__26077__auto___31938,c){
return (function() {
var cljs_node_io$fs$arm_r_$_state_machine__25898__auto__ = null;
var cljs_node_io$fs$arm_r_$_state_machine__25898__auto____0 = (function (){
var statearr_31934 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31934[(0)] = cljs_node_io$fs$arm_r_$_state_machine__25898__auto__);

(statearr_31934[(1)] = (1));

return statearr_31934;
});
var cljs_node_io$fs$arm_r_$_state_machine__25898__auto____1 = (function (state_31909){
while(true){
var ret_value__25899__auto__ = (function (){try{while(true){
var result__25900__auto__ = switch__25897__auto__.call(null,state_31909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25900__auto__;
}
break;
}
}catch (e31935){if((e31935 instanceof Object)){
var ex__25901__auto__ = e31935;
var statearr_31936_31957 = state_31909;
(statearr_31936_31957[(5)] = ex__25901__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25899__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31958 = state_31909;
state_31909 = G__31958;
continue;
} else {
return ret_value__25899__auto__;
}
break;
}
});
cljs_node_io$fs$arm_r_$_state_machine__25898__auto__ = function(state_31909){
switch(arguments.length){
case 0:
return cljs_node_io$fs$arm_r_$_state_machine__25898__auto____0.call(this);
case 1:
return cljs_node_io$fs$arm_r_$_state_machine__25898__auto____1.call(this,state_31909);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_node_io$fs$arm_r_$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_node_io$fs$arm_r_$_state_machine__25898__auto____0;
cljs_node_io$fs$arm_r_$_state_machine__25898__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_node_io$fs$arm_r_$_state_machine__25898__auto____1;
return cljs_node_io$fs$arm_r_$_state_machine__25898__auto__;
})()
;})(switch__25897__auto__,c__26077__auto___31938,c))
})();
var state__26079__auto__ = (function (){var statearr_31937 = f__26078__auto__.call(null);
(statearr_31937[(6)] = c__26077__auto___31938);

return statearr_31937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26079__auto__);
});})(c__26077__auto___31938,c))
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
var G__31959__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__31959 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31960__i = 0, G__31960__a = new Array(arguments.length -  0);
while (G__31960__i < G__31960__a.length) {G__31960__a[G__31960__i] = arguments[G__31960__i + 0]; ++G__31960__i;}
  args = new cljs.core.IndexedSeq(G__31960__a,0,null);
} 
return G__31959__delegate.call(this,args);};
G__31959.cljs$lang$maxFixedArity = 0;
G__31959.cljs$lang$applyTo = (function (arglist__31961){
var args = cljs.core.seq(arglist__31961);
return G__31959__delegate(args);
});
G__31959.cljs$core$IFn$_invoke$arity$variadic = G__31959__delegate;
return G__31959;
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
var G__31962__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__31962 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31963__i = 0, G__31963__a = new Array(arguments.length -  0);
while (G__31963__i < G__31963__a.length) {G__31963__a[G__31963__i] = arguments[G__31963__i + 0]; ++G__31963__i;}
  args = new cljs.core.IndexedSeq(G__31963__a,0,null);
} 
return G__31962__delegate.call(this,args);};
G__31962.cljs$lang$maxFixedArity = 0;
G__31962.cljs$lang$applyTo = (function (arglist__31964){
var args = cljs.core.seq(arglist__31964);
return G__31962__delegate(args);
});
G__31962.cljs$core$IFn$_invoke$arity$variadic = G__31962__delegate;
return G__31962;
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
var G__31965__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__31965 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31966__i = 0, G__31966__a = new Array(arguments.length -  0);
while (G__31966__i < G__31966__a.length) {G__31966__a[G__31966__i] = arguments[G__31966__i + 0]; ++G__31966__i;}
  args = new cljs.core.IndexedSeq(G__31966__a,0,null);
} 
return G__31965__delegate.call(this,args);};
G__31965.cljs$lang$maxFixedArity = 0;
G__31965.cljs$lang$applyTo = (function (arglist__31967){
var args = cljs.core.seq(arglist__31967);
return G__31965__delegate(args);
});
G__31965.cljs$core$IFn$_invoke$arity$variadic = G__31965__delegate;
return G__31965;
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
return cljs_node_io.fs.fs.writeFileSync(pathstr,content,({"flag": (function (){var or__21201__auto__ = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21201__auto__)){
return or__21201__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"append","append",-291298229).cljs$core$IFn$_invoke$arity$1(opts))){
return "a";
} else {
return "w";
}
}
})(), "mode": (function (){var or__21201__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21201__auto__)){
return or__21201__auto__;
} else {
return (438);
}
})(), "encoding": (function (){var or__21201__auto__ = new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21201__auto__)){
return or__21201__auto__;
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
cljs_node_io.fs.fs.writeFile(pathstring,content,({"flag": (function (){var or__21201__auto__ = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21201__auto__)){
return or__21201__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"append","append",-291298229).cljs$core$IFn$_invoke$arity$1(opts))){
return "a";
} else {
return "w";
}
}
})(), "mode": (function (){var or__21201__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21201__auto__)){
return or__21201__auto__;
} else {
return (438);
}
})(), "encoding": (function (){var or__21201__auto__ = new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21201__auto__)){
return or__21201__auto__;
} else {
return "utf8";
}
})()}),((function (c){
return (function() { 
var G__31968__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__31968 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31969__i = 0, G__31969__a = new Array(arguments.length -  0);
while (G__31969__i < G__31969__a.length) {G__31969__a[G__31969__i] = arguments[G__31969__i + 0]; ++G__31969__i;}
  args = new cljs.core.IndexedSeq(G__31969__a,0,null);
} 
return G__31968__delegate.call(this,args);};
G__31968.cljs$lang$maxFixedArity = 0;
G__31968.cljs$lang$applyTo = (function (arglist__31970){
var args = cljs.core.seq(arglist__31970);
return G__31968__delegate(args);
});
G__31968.cljs$core$IFn$_invoke$arity$variadic = G__31968__delegate;
return G__31968;
})()
;})(c))
);

return c;
});
cljs_node_io.fs.watcher__GT_ch = (function cljs_node_io$fs$watcher__GT_ch(var_args){
var G__31972 = arguments.length;
switch (G__31972) {
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

cljs_node_io.fs.watcher__GT_ch.cljs$core$IFn$_invoke$arity$3 = (function (FSWatcher,out_ch,p__31973){
var map__31974 = p__31973;
var map__31974__$1 = ((((!((map__31974 == null)))?((((map__31974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31974):map__31974);
var key = cljs.core.get.call(null,map__31974__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var buf_or_n = cljs.core.get.call(null,map__31974__$1,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719),(10));
var G__31976_31978 = FSWatcher;
G__31976_31978.on("change",((function (G__31976_31978,map__31974,map__31974__$1,key,buf_or_n){
return (function (eventType,filename){
return cljs.core.async.put_BANG_.call(null,out_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,eventType)], null));
});})(G__31976_31978,map__31974,map__31974__$1,key,buf_or_n))
);

G__31976_31978.on("error",((function (G__31976_31978,map__31974,map__31974__$1,key,buf_or_n){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)], null));
});})(G__31976_31978,map__31974,map__31974__$1,key,buf_or_n))
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

cljs_node_io.fs.Watcher.cljs$lang$ctorPrWriter = (function (this__21872__auto__,writer__21873__auto__,opt__21874__auto__){
return cljs.core._write.call(null,writer__21873__auto__,"cljs-node-io.fs/Watcher");
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
var G__31981 = arguments.length;
switch (G__31981) {
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
return (function (p1__31979_SHARP_){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null),p1__31979_SHARP_);
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
var G__31985 = arguments.length;
switch (G__31985) {
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
var map__31986 = cljs.core.merge.call(null,defaults,opts);
var map__31986__$1 = ((((!((map__31986 == null)))?((((map__31986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31986.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31986):map__31986);
var opts__$1 = map__31986__$1;
var edn_QMARK_ = cljs.core.get.call(null,map__31986__$1,new cljs.core.Keyword(null,"edn?","edn?",-499466946));
var buf_or_n = cljs.core.get.call(null,map__31986__$1,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719));
var out = cljs.core.async.chan.call(null,buf_or_n,cljs.core.map.call(null,((function (defaults,map__31986,map__31986__$1,opts__$1,edn_QMARK_,buf_or_n){
return (function (p1__31983_SHARP_){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null),p1__31983_SHARP_);
});})(defaults,map__31986,map__31986__$1,opts__$1,edn_QMARK_,buf_or_n))
));
var cb = ((function (defaults,map__31986,map__31986__$1,opts__$1,edn_QMARK_,buf_or_n,out){
return (function (curr,prev){
return cljs.core.async.put_BANG_.call(null,out,(cljs.core.truth_(edn_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_node_io.fs.stat__GT_clj.call(null,curr),cljs_node_io.fs.stat__GT_clj.call(null,prev)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,prev], null)));
});})(defaults,map__31986,map__31986__$1,opts__$1,edn_QMARK_,buf_or_n,out))
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
