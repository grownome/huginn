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
var G__49880__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__49880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49881__i = 0, G__49881__a = new Array(arguments.length -  0);
while (G__49881__i < G__49881__a.length) {G__49881__a[G__49881__i] = arguments[G__49881__i + 0]; ++G__49881__i;}
  args = new cljs.core.IndexedSeq(G__49881__a,0,null);
} 
return G__49880__delegate.call(this,args);};
G__49880.cljs$lang$maxFixedArity = 0;
G__49880.cljs$lang$applyTo = (function (arglist__49882){
var args = cljs.core.seq(arglist__49882);
return G__49880__delegate(args);
});
G__49880.cljs$core$IFn$_invoke$arity$variadic = G__49880__delegate;
return G__49880;
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
var G__49883__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__49883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49884__i = 0, G__49884__a = new Array(arguments.length -  0);
while (G__49884__i < G__49884__a.length) {G__49884__a[G__49884__i] = arguments[G__49884__i + 0]; ++G__49884__i;}
  args = new cljs.core.IndexedSeq(G__49884__a,0,null);
} 
return G__49883__delegate.call(this,args);};
G__49883.cljs$lang$maxFixedArity = 0;
G__49883.cljs$lang$applyTo = (function (arglist__49885){
var args = cljs.core.seq(arglist__49885);
return G__49883__delegate(args);
});
G__49883.cljs$core$IFn$_invoke$arity$variadic = G__49883__delegate;
return G__49883;
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
return (function (p1__49886_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.nth.call(null,p1__49886_SHARP_,(0)),"_checkModeProperty");
});})(ks,vs))
),cljs.core.map.call(null,((function (ks,vs){
return (function (p__49887){
var vec__49888 = p__49887;
var k = cljs.core.nth.call(null,vec__49888,(0),null);
var v = cljs.core.nth.call(null,vec__49888,(1),null);
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
var a__22233__auto__ = a;
var l__22234__auto__ = a__22233__auto__.length;
var res = cljs.core.aclone.call(null,a__22233__auto__);
var i = (0);
while(true){
if((i < l__22234__auto__)){
(res[i] = ((!(((a[i]) === (0))))?(1):(0)));

var G__49891 = (i + (1));
i = G__49891;
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
}catch (e49892){if((e49892 instanceof Error)){
var e = e49892;
return false;
} else {
throw e49892;

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
return (function (p__49893){
var vec__49894 = p__49893;
var err = cljs.core.nth.call(null,vec__49894,(0),null);
var stats = cljs.core.nth.call(null,vec__49894,(1),null);
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
}catch (e49897){if((e49897 instanceof Error)){
var e = e49897;
return false;
} else {
throw e49897;

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
return (function (p__49898){
var vec__49899 = p__49898;
var err = cljs.core.nth.call(null,vec__49899,(0),null);
var stats = cljs.core.nth.call(null,vec__49899,(1),null);
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
}catch (e49902){if((e49902 instanceof Error)){
var e = e49902;
return false;
} else {
throw e49902;

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
}catch (e49903){if((e49903 instanceof Error)){
var e = e49903;
return false;
} else {
throw e49903;

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
}catch (e49904){if((e49904 instanceof Error)){
var e = e49904;
return false;
} else {
throw e49904;

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
}catch (e49905){if((e49905 instanceof Error)){
var e = e49905;
return false;
} else {
throw e49905;

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
}catch (e49906){if((e49906 instanceof Error)){
var e = e49906;
return false;
} else {
throw e49906;

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
return (function (p__49907){
var vec__49908 = p__49907;
var err = cljs.core.nth.call(null,vec__49908,(0),null);
var stats = cljs.core.nth.call(null,vec__49908,(1),null);
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
var G__49912 = arguments.length;
switch (G__49912) {
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
var args__22488__auto__ = [];
var len__22481__auto___49915 = arguments.length;
var i__22482__auto___49916 = (0);
while(true){
if((i__22482__auto___49916 < len__22481__auto___49915)){
args__22488__auto__.push((arguments[i__22482__auto___49916]));

var G__49917 = (i__22482__auto___49916 + (1));
i__22482__auto___49916 = G__49917;
continue;
} else {
}
break;
}

var argseq__22489__auto__ = ((((0) < args__22488__auto__.length))?(new cljs.core.IndexedSeq(args__22488__auto__.slice((0)),(0),null)):null);
return cljs_node_io.fs.resolve_path.cljs$core$IFn$_invoke$arity$variadic(argseq__22489__auto__);
});

cljs_node_io.fs.resolve_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
return cljs_node_io.fs.path.resolve.apply(null,cljs.core.apply.call(null,cljs.core.array,paths));
});

cljs_node_io.fs.resolve_path.cljs$lang$maxFixedArity = (0);

cljs_node_io.fs.resolve_path.cljs$lang$applyTo = (function (seq49914){
return cljs_node_io.fs.resolve_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49914));
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
var G__49918__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__49918 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49919__i = 0, G__49919__a = new Array(arguments.length -  0);
while (G__49919__i < G__49919__a.length) {G__49919__a[G__49919__i] = arguments[G__49919__i + 0]; ++G__49919__i;}
  args = new cljs.core.IndexedSeq(G__49919__a,0,null);
} 
return G__49918__delegate.call(this,args);};
G__49918.cljs$lang$maxFixedArity = 0;
G__49918.cljs$lang$applyTo = (function (arglist__49920){
var args = cljs.core.seq(arglist__49920);
return G__49918__delegate(args);
});
G__49918.cljs$core$IFn$_invoke$arity$variadic = G__49918__delegate;
return G__49918;
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
var G__49921__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__49921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49922__i = 0, G__49922__a = new Array(arguments.length -  0);
while (G__49922__i < G__49922__a.length) {G__49922__a[G__49922__i] = arguments[G__49922__i + 0]; ++G__49922__i;}
  args = new cljs.core.IndexedSeq(G__49922__a,0,null);
} 
return G__49921__delegate.call(this,args);};
G__49921.cljs$lang$maxFixedArity = 0;
G__49921.cljs$lang$applyTo = (function (arglist__49923){
var args = cljs.core.seq(arglist__49923);
return G__49921__delegate(args);
});
G__49921.cljs$core$IFn$_invoke$arity$variadic = G__49921__delegate;
return G__49921;
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
var G__49924__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__49924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49925__i = 0, G__49925__a = new Array(arguments.length -  0);
while (G__49925__i < G__49925__a.length) {G__49925__a[G__49925__i] = arguments[G__49925__i + 0]; ++G__49925__i;}
  args = new cljs.core.IndexedSeq(G__49925__a,0,null);
} 
return G__49924__delegate.call(this,args);};
G__49924.cljs$lang$maxFixedArity = 0;
G__49924.cljs$lang$applyTo = (function (arglist__49926){
var args = cljs.core.seq(arglist__49926);
return G__49924__delegate(args);
});
G__49924.cljs$core$IFn$_invoke$arity$variadic = G__49924__delegate;
return G__49924;
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
var G__49927__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__49927 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49928__i = 0, G__49928__a = new Array(arguments.length -  0);
while (G__49928__i < G__49928__a.length) {G__49928__a[G__49928__i] = arguments[G__49928__i + 0]; ++G__49928__i;}
  args = new cljs.core.IndexedSeq(G__49928__a,0,null);
} 
return G__49927__delegate.call(this,args);};
G__49927.cljs$lang$maxFixedArity = 0;
G__49927.cljs$lang$applyTo = (function (arglist__49929){
var args = cljs.core.seq(arglist__49929);
return G__49927__delegate(args);
});
G__49927.cljs$core$IFn$_invoke$arity$variadic = G__49927__delegate;
return G__49927;
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
var G__49930__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__49930 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49931__i = 0, G__49931__a = new Array(arguments.length -  0);
while (G__49931__i < G__49931__a.length) {G__49931__a[G__49931__i] = arguments[G__49931__i + 0]; ++G__49931__i;}
  args = new cljs.core.IndexedSeq(G__49931__a,0,null);
} 
return G__49930__delegate.call(this,args);};
G__49930.cljs$lang$maxFixedArity = 0;
G__49930.cljs$lang$applyTo = (function (arglist__49932){
var args = cljs.core.seq(arglist__49932);
return G__49930__delegate(args);
});
G__49930.cljs$core$IFn$_invoke$arity$variadic = G__49930__delegate;
return G__49930;
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
var G__49933__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__49933 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49934__i = 0, G__49934__a = new Array(arguments.length -  0);
while (G__49934__i < G__49934__a.length) {G__49934__a[G__49934__i] = arguments[G__49934__i + 0]; ++G__49934__i;}
  args = new cljs.core.IndexedSeq(G__49934__a,0,null);
} 
return G__49933__delegate.call(this,args);};
G__49933.cljs$lang$maxFixedArity = 0;
G__49933.cljs$lang$applyTo = (function (arglist__49935){
var args = cljs.core.seq(arglist__49935);
return G__49933__delegate(args);
});
G__49933.cljs$core$IFn$_invoke$arity$variadic = G__49933__delegate;
return G__49933;
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
var G__49936__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__49936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49937__i = 0, G__49937__a = new Array(arguments.length -  0);
while (G__49937__i < G__49937__a.length) {G__49937__a[G__49937__i] = arguments[G__49937__i + 0]; ++G__49937__i;}
  args = new cljs.core.IndexedSeq(G__49937__a,0,null);
} 
return G__49936__delegate.call(this,args);};
G__49936.cljs$lang$maxFixedArity = 0;
G__49936.cljs$lang$applyTo = (function (arglist__49938){
var args = cljs.core.seq(arglist__49938);
return G__49936__delegate(args);
});
G__49936.cljs$core$IFn$_invoke$arity$variadic = G__49936__delegate;
return G__49936;
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
var G__49939__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__49939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49940__i = 0, G__49940__a = new Array(arguments.length -  0);
while (G__49940__i < G__49940__a.length) {G__49940__a[G__49940__i] = arguments[G__49940__i + 0]; ++G__49940__i;}
  args = new cljs.core.IndexedSeq(G__49940__a,0,null);
} 
return G__49939__delegate.call(this,args);};
G__49939.cljs$lang$maxFixedArity = 0;
G__49939.cljs$lang$applyTo = (function (arglist__49941){
var args = cljs.core.seq(arglist__49941);
return G__49939__delegate(args);
});
G__49939.cljs$core$IFn$_invoke$arity$variadic = G__49939__delegate;
return G__49939;
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
var G__49942__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__49942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49943__i = 0, G__49943__a = new Array(arguments.length -  0);
while (G__49943__i < G__49943__a.length) {G__49943__a[G__49943__i] = arguments[G__49943__i + 0]; ++G__49943__i;}
  args = new cljs.core.IndexedSeq(G__49943__a,0,null);
} 
return G__49942__delegate.call(this,args);};
G__49942.cljs$lang$maxFixedArity = 0;
G__49942.cljs$lang$applyTo = (function (arglist__49944){
var args = cljs.core.seq(arglist__49944);
return G__49942__delegate(args);
});
G__49942.cljs$core$IFn$_invoke$arity$variadic = G__49942__delegate;
return G__49942;
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
var G__49945__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__49945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49946__i = 0, G__49946__a = new Array(arguments.length -  0);
while (G__49946__i < G__49946__a.length) {G__49946__a[G__49946__i] = arguments[G__49946__i + 0]; ++G__49946__i;}
  args = new cljs.core.IndexedSeq(G__49946__a,0,null);
} 
return G__49945__delegate.call(this,args);};
G__49945.cljs$lang$maxFixedArity = 0;
G__49945.cljs$lang$applyTo = (function (arglist__49947){
var args = cljs.core.seq(arglist__49947);
return G__49945__delegate(args);
});
G__49945.cljs$core$IFn$_invoke$arity$variadic = G__49945__delegate;
return G__49945;
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
var G__49948__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__49948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49949__i = 0, G__49949__a = new Array(arguments.length -  0);
while (G__49949__i < G__49949__a.length) {G__49949__a[G__49949__i] = arguments[G__49949__i + 0]; ++G__49949__i;}
  args = new cljs.core.IndexedSeq(G__49949__a,0,null);
} 
return G__49948__delegate.call(this,args);};
G__49948.cljs$lang$maxFixedArity = 0;
G__49948.cljs$lang$applyTo = (function (arglist__49950){
var args = cljs.core.seq(arglist__49950);
return G__49948__delegate(args);
});
G__49948.cljs$core$IFn$_invoke$arity$variadic = G__49948__delegate;
return G__49948;
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
var G__49951__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__49951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49952__i = 0, G__49952__a = new Array(arguments.length -  0);
while (G__49952__i < G__49952__a.length) {G__49952__a[G__49952__i] = arguments[G__49952__i + 0]; ++G__49952__i;}
  args = new cljs.core.IndexedSeq(G__49952__a,0,null);
} 
return G__49951__delegate.call(this,args);};
G__49951.cljs$lang$maxFixedArity = 0;
G__49951.cljs$lang$applyTo = (function (arglist__49953){
var args = cljs.core.seq(arglist__49953);
return G__49951__delegate(args);
});
G__49951.cljs$core$IFn$_invoke$arity$variadic = G__49951__delegate;
return G__49951;
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
var seq__49954_49958 = cljs.core.seq.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs_node_io.fs.resolve_path,pathstr),cljs_node_io.fs.readdir.call(null,pathstr)));
var chunk__49955_49959 = null;
var count__49956_49960 = (0);
var i__49957_49961 = (0);
while(true){
if((i__49957_49961 < count__49956_49960)){
var p_49962 = cljs.core._nth.call(null,chunk__49955_49959,i__49957_49961);
cljs_node_io.fs.rm_r.call(null,p_49962);

var G__49963 = seq__49954_49958;
var G__49964 = chunk__49955_49959;
var G__49965 = count__49956_49960;
var G__49966 = (i__49957_49961 + (1));
seq__49954_49958 = G__49963;
chunk__49955_49959 = G__49964;
count__49956_49960 = G__49965;
i__49957_49961 = G__49966;
continue;
} else {
var temp__5457__auto___49967 = cljs.core.seq.call(null,seq__49954_49958);
if(temp__5457__auto___49967){
var seq__49954_49968__$1 = temp__5457__auto___49967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49954_49968__$1)){
var c__22133__auto___49969 = cljs.core.chunk_first.call(null,seq__49954_49968__$1);
var G__49970 = cljs.core.chunk_rest.call(null,seq__49954_49968__$1);
var G__49971 = c__22133__auto___49969;
var G__49972 = cljs.core.count.call(null,c__22133__auto___49969);
var G__49973 = (0);
seq__49954_49958 = G__49970;
chunk__49955_49959 = G__49971;
count__49956_49960 = G__49972;
i__49957_49961 = G__49973;
continue;
} else {
var p_49974 = cljs.core.first.call(null,seq__49954_49968__$1);
cljs_node_io.fs.rm_r.call(null,p_49974);

var G__49975 = cljs.core.next.call(null,seq__49954_49968__$1);
var G__49976 = null;
var G__49977 = (0);
var G__49978 = (0);
seq__49954_49958 = G__49975;
chunk__49955_49959 = G__49976;
count__49956_49960 = G__49977;
i__49957_49961 = G__49978;
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
var c__38078__auto___50073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38078__auto___50073,c){
return (function (){
var f__38079__auto__ = (function (){var switch__37921__auto__ = ((function (c__38078__auto___50073,c){
return (function (state_50044){
var state_val_50045 = (state_50044[(1)]);
if((state_val_50045 === (7))){
var inst_49990 = (state_50044[(7)]);
var inst_49993 = cljs.core.partial.call(null,cljs_node_io.fs.resolve_path,pathstr);
var inst_49994 = cljs.core.mapv.call(null,inst_49993,inst_49990);
var inst_49995 = inst_49994;
var state_50044__$1 = (function (){var statearr_50046 = state_50044;
(statearr_50046[(8)] = inst_49995);

return statearr_50046;
})();
var statearr_50047_50074 = state_50044__$1;
(statearr_50047_50074[(2)] = null);

(statearr_50047_50074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50045 === (20))){
var inst_50026 = (state_50044[(2)]);
var state_50044__$1 = state_50044;
var statearr_50048_50075 = state_50044__$1;
(statearr_50048_50075[(2)] = inst_50026);

(statearr_50048_50075[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50045 === (1))){
var inst_49979 = cljs_node_io.fs.adir_QMARK_.call(null,pathstr);
var state_50044__$1 = state_50044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50044__$1,(2),inst_49979);
} else {
if((state_val_50045 === (24))){
var inst_50038 = (state_50044[(2)]);
var state_50044__$1 = state_50044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50044__$1,(23),c,inst_50038);
} else {
if((state_val_50045 === (4))){
var inst_50036 = cljs_node_io.fs.aunlink.call(null,pathstr);
var state_50044__$1 = state_50044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50044__$1,(24),inst_50036);
} else {
if((state_val_50045 === (15))){
var inst_50007 = (state_50044[(9)]);
var inst_50006 = (state_50044[(2)]);
var inst_50007__$1 = cljs.core.nth.call(null,inst_50006,(0),null);
var inst_50008 = (inst_50007__$1 instanceof Error);
var state_50044__$1 = (function (){var statearr_50049 = state_50044;
(statearr_50049[(9)] = inst_50007__$1);

return statearr_50049;
})();
if(cljs.core.truth_(inst_50008)){
var statearr_50050_50076 = state_50044__$1;
(statearr_50050_50076[(1)] = (16));

} else {
var statearr_50051_50077 = state_50044__$1;
(statearr_50051_50077[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50045 === (21))){
var inst_50024 = (state_50044[(2)]);
var state_50044__$1 = state_50044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50044__$1,(20),c,inst_50024);
} else {
if((state_val_50045 === (13))){
var state_50044__$1 = state_50044;
var statearr_50052_50078 = state_50044__$1;
(statearr_50052_50078[(2)] = null);

(statearr_50052_50078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50045 === (22))){
var inst_50032 = (state_50044[(2)]);
var state_50044__$1 = state_50044;
var statearr_50053_50079 = state_50044__$1;
(statearr_50053_50079[(2)] = inst_50032);

(statearr_50053_50079[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50045 === (6))){
var inst_49989 = (state_50044[(10)]);
var inst_49988 = (state_50044[(2)]);
var inst_49989__$1 = cljs.core.nth.call(null,inst_49988,(0),null);
var inst_49990 = cljs.core.nth.call(null,inst_49988,(1),null);
var inst_49991 = cljs.core.not.call(null,inst_49989__$1);
var state_50044__$1 = (function (){var statearr_50054 = state_50044;
(statearr_50054[(7)] = inst_49990);

(statearr_50054[(10)] = inst_49989__$1);

return statearr_50054;
})();
if(inst_49991){
var statearr_50055_50080 = state_50044__$1;
(statearr_50055_50080[(1)] = (7));

} else {
var statearr_50056_50081 = state_50044__$1;
(statearr_50056_50081[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50045 === (17))){
var inst_49995 = (state_50044[(8)]);
var inst_50013 = cljs.core.next.call(null,inst_49995);
var inst_49995__$1 = inst_50013;
var state_50044__$1 = (function (){var statearr_50057 = state_50044;
(statearr_50057[(8)] = inst_49995__$1);

return statearr_50057;
})();
var statearr_50058_50082 = state_50044__$1;
(statearr_50058_50082[(2)] = null);

(statearr_50058_50082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50045 === (3))){
var inst_49986 = cljs_node_io.fs.areaddir.call(null,pathstr);
var state_50044__$1 = state_50044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50044__$1,(6),inst_49986);
} else {
if((state_val_50045 === (12))){
var inst_49995 = (state_50044[(8)]);
var inst_50003 = cljs.core.first.call(null,inst_49995);
var inst_50004 = cljs_node_io.fs.arm_r.call(null,inst_50003);
var state_50044__$1 = state_50044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50044__$1,(15),inst_50004);
} else {
if((state_val_50045 === (2))){
var inst_49981 = (state_50044[(2)]);
var state_50044__$1 = state_50044;
if(cljs.core.truth_(inst_49981)){
var statearr_50059_50083 = state_50044__$1;
(statearr_50059_50083[(1)] = (3));

} else {
var statearr_50060_50084 = state_50044__$1;
(statearr_50060_50084[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50045 === (23))){
var inst_50040 = (state_50044[(2)]);
var state_50044__$1 = state_50044;
var statearr_50061_50085 = state_50044__$1;
(statearr_50061_50085[(2)] = inst_50040);

(statearr_50061_50085[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50045 === (19))){
var inst_50011 = (state_50044[(2)]);
var state_50044__$1 = state_50044;
var statearr_50062_50086 = state_50044__$1;
(statearr_50062_50086[(2)] = inst_50011);

(statearr_50062_50086[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50045 === (11))){
var inst_50021 = (state_50044[(2)]);
var inst_50022 = cljs_node_io.fs.armdir.call(null,pathstr);
var state_50044__$1 = (function (){var statearr_50063 = state_50044;
(statearr_50063[(11)] = inst_50021);

return statearr_50063;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50044__$1,(21),inst_50022);
} else {
if((state_val_50045 === (9))){
var inst_50034 = (state_50044[(2)]);
var state_50044__$1 = state_50044;
var statearr_50064_50087 = state_50044__$1;
(statearr_50064_50087[(2)] = inst_50034);

(statearr_50064_50087[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50045 === (5))){
var inst_50042 = (state_50044[(2)]);
var state_50044__$1 = state_50044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50044__$1,inst_50042);
} else {
if((state_val_50045 === (14))){
var inst_50019 = (state_50044[(2)]);
var state_50044__$1 = state_50044;
var statearr_50065_50088 = state_50044__$1;
(statearr_50065_50088[(2)] = inst_50019);

(statearr_50065_50088[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50045 === (16))){
var inst_50007 = (state_50044[(9)]);
var state_50044__$1 = state_50044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50044__$1,(19),c,inst_50007);
} else {
if((state_val_50045 === (10))){
var inst_49995 = (state_50044[(8)]);
var inst_49997 = (inst_49995 == null);
var inst_49998 = cljs.core.not.call(null,inst_49997);
var state_50044__$1 = state_50044;
if(inst_49998){
var statearr_50066_50089 = state_50044__$1;
(statearr_50066_50089[(1)] = (12));

} else {
var statearr_50067_50090 = state_50044__$1;
(statearr_50067_50090[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50045 === (18))){
var inst_50016 = (state_50044[(2)]);
var state_50044__$1 = state_50044;
var statearr_50068_50091 = state_50044__$1;
(statearr_50068_50091[(2)] = inst_50016);

(statearr_50068_50091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50045 === (8))){
var inst_49989 = (state_50044[(10)]);
var inst_50028 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50029 = [inst_49989];
var inst_50030 = (new cljs.core.PersistentVector(null,1,(5),inst_50028,inst_50029,null));
var state_50044__$1 = state_50044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50044__$1,(22),c,inst_50030);
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
});})(c__38078__auto___50073,c))
;
return ((function (switch__37921__auto__,c__38078__auto___50073,c){
return (function() {
var cljs_node_io$fs$arm_r_$_state_machine__37922__auto__ = null;
var cljs_node_io$fs$arm_r_$_state_machine__37922__auto____0 = (function (){
var statearr_50069 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50069[(0)] = cljs_node_io$fs$arm_r_$_state_machine__37922__auto__);

(statearr_50069[(1)] = (1));

return statearr_50069;
});
var cljs_node_io$fs$arm_r_$_state_machine__37922__auto____1 = (function (state_50044){
while(true){
var ret_value__37923__auto__ = (function (){try{while(true){
var result__37924__auto__ = switch__37921__auto__.call(null,state_50044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37924__auto__;
}
break;
}
}catch (e50070){if((e50070 instanceof Object)){
var ex__37925__auto__ = e50070;
var statearr_50071_50092 = state_50044;
(statearr_50071_50092[(5)] = ex__37925__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50093 = state_50044;
state_50044 = G__50093;
continue;
} else {
return ret_value__37923__auto__;
}
break;
}
});
cljs_node_io$fs$arm_r_$_state_machine__37922__auto__ = function(state_50044){
switch(arguments.length){
case 0:
return cljs_node_io$fs$arm_r_$_state_machine__37922__auto____0.call(this);
case 1:
return cljs_node_io$fs$arm_r_$_state_machine__37922__auto____1.call(this,state_50044);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_node_io$fs$arm_r_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_node_io$fs$arm_r_$_state_machine__37922__auto____0;
cljs_node_io$fs$arm_r_$_state_machine__37922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_node_io$fs$arm_r_$_state_machine__37922__auto____1;
return cljs_node_io$fs$arm_r_$_state_machine__37922__auto__;
})()
;})(switch__37921__auto__,c__38078__auto___50073,c))
})();
var state__38080__auto__ = (function (){var statearr_50072 = f__38079__auto__.call(null);
(statearr_50072[(6)] = c__38078__auto___50073);

return statearr_50072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38080__auto__);
});})(c__38078__auto___50073,c))
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
var G__50094__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__50094 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50095__i = 0, G__50095__a = new Array(arguments.length -  0);
while (G__50095__i < G__50095__a.length) {G__50095__a[G__50095__i] = arguments[G__50095__i + 0]; ++G__50095__i;}
  args = new cljs.core.IndexedSeq(G__50095__a,0,null);
} 
return G__50094__delegate.call(this,args);};
G__50094.cljs$lang$maxFixedArity = 0;
G__50094.cljs$lang$applyTo = (function (arglist__50096){
var args = cljs.core.seq(arglist__50096);
return G__50094__delegate(args);
});
G__50094.cljs$core$IFn$_invoke$arity$variadic = G__50094__delegate;
return G__50094;
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
var G__50097__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__50097 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50098__i = 0, G__50098__a = new Array(arguments.length -  0);
while (G__50098__i < G__50098__a.length) {G__50098__a[G__50098__i] = arguments[G__50098__i + 0]; ++G__50098__i;}
  args = new cljs.core.IndexedSeq(G__50098__a,0,null);
} 
return G__50097__delegate.call(this,args);};
G__50097.cljs$lang$maxFixedArity = 0;
G__50097.cljs$lang$applyTo = (function (arglist__50099){
var args = cljs.core.seq(arglist__50099);
return G__50097__delegate(args);
});
G__50097.cljs$core$IFn$_invoke$arity$variadic = G__50097__delegate;
return G__50097;
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
var G__50100__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__50100 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50101__i = 0, G__50101__a = new Array(arguments.length -  0);
while (G__50101__i < G__50101__a.length) {G__50101__a[G__50101__i] = arguments[G__50101__i + 0]; ++G__50101__i;}
  args = new cljs.core.IndexedSeq(G__50101__a,0,null);
} 
return G__50100__delegate.call(this,args);};
G__50100.cljs$lang$maxFixedArity = 0;
G__50100.cljs$lang$applyTo = (function (arglist__50102){
var args = cljs.core.seq(arglist__50102);
return G__50100__delegate(args);
});
G__50100.cljs$core$IFn$_invoke$arity$variadic = G__50100__delegate;
return G__50100;
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
return cljs_node_io.fs.fs.writeFileSync(pathstr,content,({"flag": (function (){var or__21202__auto__ = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21202__auto__)){
return or__21202__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"append","append",-291298229).cljs$core$IFn$_invoke$arity$1(opts))){
return "a";
} else {
return "w";
}
}
})(), "mode": (function (){var or__21202__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21202__auto__)){
return or__21202__auto__;
} else {
return (438);
}
})(), "encoding": (function (){var or__21202__auto__ = new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21202__auto__)){
return or__21202__auto__;
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
cljs_node_io.fs.fs.writeFile(pathstring,content,({"flag": (function (){var or__21202__auto__ = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21202__auto__)){
return or__21202__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"append","append",-291298229).cljs$core$IFn$_invoke$arity$1(opts))){
return "a";
} else {
return "w";
}
}
})(), "mode": (function (){var or__21202__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21202__auto__)){
return or__21202__auto__;
} else {
return (438);
}
})(), "encoding": (function (){var or__21202__auto__ = new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21202__auto__)){
return or__21202__auto__;
} else {
return "utf8";
}
})()}),((function (c){
return (function() { 
var G__50103__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__50103 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50104__i = 0, G__50104__a = new Array(arguments.length -  0);
while (G__50104__i < G__50104__a.length) {G__50104__a[G__50104__i] = arguments[G__50104__i + 0]; ++G__50104__i;}
  args = new cljs.core.IndexedSeq(G__50104__a,0,null);
} 
return G__50103__delegate.call(this,args);};
G__50103.cljs$lang$maxFixedArity = 0;
G__50103.cljs$lang$applyTo = (function (arglist__50105){
var args = cljs.core.seq(arglist__50105);
return G__50103__delegate(args);
});
G__50103.cljs$core$IFn$_invoke$arity$variadic = G__50103__delegate;
return G__50103;
})()
;})(c))
);

return c;
});
cljs_node_io.fs.watcher__GT_ch = (function cljs_node_io$fs$watcher__GT_ch(var_args){
var G__50107 = arguments.length;
switch (G__50107) {
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

cljs_node_io.fs.watcher__GT_ch.cljs$core$IFn$_invoke$arity$3 = (function (FSWatcher,out_ch,p__50108){
var map__50109 = p__50108;
var map__50109__$1 = ((((!((map__50109 == null)))?((((map__50109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50109):map__50109);
var key = cljs.core.get.call(null,map__50109__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var buf_or_n = cljs.core.get.call(null,map__50109__$1,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719),(10));
var G__50111_50113 = FSWatcher;
G__50111_50113.on("change",((function (G__50111_50113,map__50109,map__50109__$1,key,buf_or_n){
return (function (eventType,filename){
return cljs.core.async.put_BANG_.call(null,out_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,eventType)], null));
});})(G__50111_50113,map__50109,map__50109__$1,key,buf_or_n))
);

G__50111_50113.on("error",((function (G__50111_50113,map__50109,map__50109__$1,key,buf_or_n){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)], null));
});})(G__50111_50113,map__50109,map__50109__$1,key,buf_or_n))
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

cljs_node_io.fs.Watcher.cljs$lang$ctorPrWriter = (function (this__21873__auto__,writer__21874__auto__,opt__21875__auto__){
return cljs.core._write.call(null,writer__21874__auto__,"cljs-node-io.fs/Watcher");
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
var G__50116 = arguments.length;
switch (G__50116) {
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
return (function (p1__50114_SHARP_){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null),p1__50114_SHARP_);
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
var G__50120 = arguments.length;
switch (G__50120) {
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
var map__50121 = cljs.core.merge.call(null,defaults,opts);
var map__50121__$1 = ((((!((map__50121 == null)))?((((map__50121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50121):map__50121);
var opts__$1 = map__50121__$1;
var edn_QMARK_ = cljs.core.get.call(null,map__50121__$1,new cljs.core.Keyword(null,"edn?","edn?",-499466946));
var buf_or_n = cljs.core.get.call(null,map__50121__$1,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719));
var out = cljs.core.async.chan.call(null,buf_or_n,cljs.core.map.call(null,((function (defaults,map__50121,map__50121__$1,opts__$1,edn_QMARK_,buf_or_n){
return (function (p1__50118_SHARP_){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null),p1__50118_SHARP_);
});})(defaults,map__50121,map__50121__$1,opts__$1,edn_QMARK_,buf_or_n))
));
var cb = ((function (defaults,map__50121,map__50121__$1,opts__$1,edn_QMARK_,buf_or_n,out){
return (function (curr,prev){
return cljs.core.async.put_BANG_.call(null,out,(cljs.core.truth_(edn_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_node_io.fs.stat__GT_clj.call(null,curr),cljs_node_io.fs.stat__GT_clj.call(null,prev)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,prev], null)));
});})(defaults,map__50121,map__50121__$1,opts__$1,edn_QMARK_,buf_or_n,out))
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
