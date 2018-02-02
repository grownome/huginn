// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs_node_io.file');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_node_io.streams');
goog.require('cljs_node_io.fs');
goog.require('cljs_node_io.protocols');
/**
 * @param {!number} mode : the file's existing mode
 * @param {!boolean} readable : add or remove read permission
 * @param {!boolean} ownerOnly : restrict operation to user bit only
 * @return {!number} A int for chmod that only effects the targeted mode bits
 */
cljs_node_io.file.setReadable_STAR_ = (function cljs_node_io$file$setReadable_STAR_(mode,readable,ownerOnly){
var pred__39622 = cljs.core._EQ_;
var expr__39623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [readable,ownerOnly], null);
if(cljs.core.truth_(pred__39622.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null),expr__39623))){
return (mode | (256));
} else {
if(cljs.core.truth_(pred__39622.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null),expr__39623))){
return (mode & (~ (256)));
} else {
if(cljs.core.truth_(pred__39622.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),expr__39623))){
return (((mode | (256)) | (32)) | (4));
} else {
if(cljs.core.truth_(pred__39622.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null),expr__39623))){
return (((mode & (~ (256))) & (~ (32))) & (~ (4)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39623)].join('')));
}
}
}
}
});
/**
 * toggles the readable permission bit(s) for the specified filepath.
 * If readable, set 1 else 0
 * If ownerOnly (default) set just user, else set for group & other as well.
 * Does not affect other permission bits.
 */
cljs_node_io.file.setReadable = (function cljs_node_io$file$setReadable(var_args){
var G__39626 = arguments.length;
switch (G__39626) {
case 2:
return cljs_node_io.file.setReadable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_node_io.file.setReadable.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_node_io.file.setReadable.cljs$core$IFn$_invoke$arity$2 = (function (pathstr,readable){
return cljs_node_io.file.setReadable.call(null,pathstr,readable,true);
});

cljs_node_io.file.setReadable.cljs$core$IFn$_invoke$arity$3 = (function (pathstr,readable,ownerOnly){
var mode = cljs_node_io.fs.permissions.call(null,cljs_node_io.fs.stat.call(null,pathstr));
var n = cljs_node_io.file.setReadable_STAR_.call(null,mode,readable,ownerOnly);
return cljs_node_io.fs.chmod.call(null,pathstr,n);
});

cljs_node_io.file.setReadable.cljs$lang$maxFixedArity = 3;

/**
 * @param {!number} mode : the file's existing mode
 * @param {!boolean} writable : add or remove write permission
 * @param {!boolean} ownerOnly : restrict operation to user bit only
 * @return {!number} A int for chmod that only effects the targeted mode bits
 */
cljs_node_io.file.setWritable_STAR_ = (function cljs_node_io$file$setWritable_STAR_(mode,writable,ownerOnly){
var pred__39628 = cljs.core._EQ_;
var expr__39629 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [writable,ownerOnly], null);
if(cljs.core.truth_(pred__39628.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null),expr__39629))){
return (mode | (128));
} else {
if(cljs.core.truth_(pred__39628.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null),expr__39629))){
return (mode & (~ (128)));
} else {
if(cljs.core.truth_(pred__39628.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),expr__39629))){
return (((mode | (128)) | (16)) | (2));
} else {
if(cljs.core.truth_(pred__39628.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null),expr__39629))){
return (((mode & (~ (128))) & (~ (16))) & (~ (2)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39629)].join('')));
}
}
}
}
});
/**
 * toggles the writable permission bit(s) for the specified filepath.
 * If writable, set 1 else 0
 * If ownerOnly (default) set just user, else set for group & other as well.
 * Does not affect other permission bits.
 */
cljs_node_io.file.setWritable = (function cljs_node_io$file$setWritable(var_args){
var G__39632 = arguments.length;
switch (G__39632) {
case 2:
return cljs_node_io.file.setWritable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_node_io.file.setWritable.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_node_io.file.setWritable.cljs$core$IFn$_invoke$arity$2 = (function (pathstr,writable){
return cljs_node_io.file.setWritable.call(null,pathstr,writable,true);
});

cljs_node_io.file.setWritable.cljs$core$IFn$_invoke$arity$3 = (function (pathstr,writable,ownerOnly){
var mode = cljs_node_io.fs.permissions.call(null,cljs_node_io.fs.stat.call(null,pathstr));
var n = cljs_node_io.file.setWritable_STAR_.call(null,mode,writable,ownerOnly);
return cljs_node_io.fs.chmod.call(null,pathstr,n);
});

cljs_node_io.file.setWritable.cljs$lang$maxFixedArity = 3;

/**
 * @param {!number} mode : the file's existing mode
 * @param {!boolean} executable : add or remove execute permission
 * @param {!boolean} ownerOnly : restrict operation to user bit only
 * @return {!number} A int for chmod that only effects the targeted mode bits
 */
cljs_node_io.file.setExecutable_STAR_ = (function cljs_node_io$file$setExecutable_STAR_(mode,executable,ownerOnly){
var pred__39634 = cljs.core._EQ_;
var expr__39635 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [executable,ownerOnly], null);
if(cljs.core.truth_(pred__39634.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null),expr__39635))){
return (mode | (64));
} else {
if(cljs.core.truth_(pred__39634.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null),expr__39635))){
return (mode & (~ (64)));
} else {
if(cljs.core.truth_(pred__39634.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),expr__39635))){
return (((mode | (64)) | (8)) | (1));
} else {
if(cljs.core.truth_(pred__39634.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null),expr__39635))){
return (((mode & (~ (64))) & (~ (8))) & (~ (1)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39635)].join('')));
}
}
}
}
});
/**
 * toggles the executable permission bit(s) for the specified filepath.
 * If executable, set 1 else 0
 * If ownerOnly (default) set just user, else set for group & other as well.
 * Does not affect other permission bits.
 */
cljs_node_io.file.setExecutable = (function cljs_node_io$file$setExecutable(var_args){
var G__39638 = arguments.length;
switch (G__39638) {
case 2:
return cljs_node_io.file.setExecutable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_node_io.file.setExecutable.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_node_io.file.setExecutable.cljs$core$IFn$_invoke$arity$2 = (function (pathstr,executable){
return cljs_node_io.file.setExecutable.call(null,pathstr,executable,true);
});

cljs_node_io.file.setExecutable.cljs$core$IFn$_invoke$arity$3 = (function (pathstr,executable,ownerOnly){
var mode = cljs_node_io.fs.permissions.call(null,cljs_node_io.fs.stat.call(null,pathstr));
var n = cljs_node_io.file.setExecutable_STAR_.call(null,mode,executable,ownerOnly);
return cljs_node_io.fs.chmod.call(null,pathstr,n);
});

cljs_node_io.file.setExecutable.cljs$lang$maxFixedArity = 3;

/**
 * Returns sequence of strings representing non-existing directory components
 * of the passed pathstring, root first, in order
 * @param {!string} pathstring
 * @return {!ISeq}
 */
cljs_node_io.file.get_non_dirs = (function cljs_node_io$file$get_non_dirs(pathstring){
return cljs.core.reverse.call(null,cljs.core.take_while.call(null,cljs.core.complement.call(null,cljs_node_io.fs.dir_QMARK_),cljs.core.iterate.call(null,cljs_node_io.fs.dirname,pathstring)));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs_node_io.file.Object}
 * @implements {cljs_node_io.protocols.Coercions}
 * @implements {cljs_node_io.protocols.IFile}
 * @implements {cljs_node_io.protocols.IOFactory}
 * @implements {cljs.core.IPrintWithWriter}
*/
cljs_node_io.file.File = (function (pathstring){
this.pathstring = pathstring;
this.cljs$lang$protocol_mask$partition0$ = 2149580800;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs_node_io.file.File.prototype.cljs_node_io$protocols$IFile$ = cljs.core.PROTOCOL_SENTINEL;

cljs_node_io.file.File.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
var pathntype = cljs.core.juxt.call(null,((function (this$__$1){
return (function (p1__39640_SHARP_){
return p1__39640_SHARP_.getPath;
});})(this$__$1))
,cljs.core.type);
return cljs.core._EQ_.call(null,pathntype.call(null,this$__$1),pathntype.call(null,that));
});

cljs_node_io.file.File.prototype.cljs_node_io$protocols$Coercions$ = cljs.core.PROTOCOL_SENTINEL;

cljs_node_io.file.File.prototype.cljs_node_io$protocols$Coercions$as_file$arity$1 = (function (f){
var self__ = this;
var f__$1 = this;
return f__$1;
});

cljs_node_io.file.File.prototype.cljs_node_io$protocols$Coercions$as_url$arity$1 = (function (f){
var self__ = this;
var f__$1 = this;
return f__$1.to_url();
});

cljs_node_io.file.File.prototype.cljs_node_io$protocols$IOFactory$ = cljs.core.PROTOCOL_SENTINEL;

cljs_node_io.file.File.prototype.cljs_node_io$protocols$IOFactory$make_reader$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return cljs_node_io.protocols.make_reader.call(null,cljs_node_io.protocols.make_input_stream.call(null,this$__$1,opts),opts);
});

cljs_node_io.file.File.prototype.cljs_node_io$protocols$IOFactory$make_writer$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return cljs_node_io.protocols.make_writer.call(null,cljs_node_io.protocols.make_output_stream.call(null,this$__$1,opts),opts);
});

cljs_node_io.file.File.prototype.cljs_node_io$protocols$IOFactory$make_input_stream$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return cljs_node_io.streams.FileInputStream.call(null,this$__$1,opts);
});

cljs_node_io.file.File.prototype.cljs_node_io$protocols$IOFactory$make_output_stream$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return cljs_node_io.streams.FileOutputStream.call(null,this$__$1,opts);
});

cljs_node_io.file.File.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,"#object [cljs-node-io.File");

return cljs.core._write.call(null,writer,["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1.getPath())," ]"].join(''));
});

cljs_node_io.file.File.prototype.canExecute = (function (){
var self__ = this;
var this$ = this;
return cljs_node_io.fs.executable_QMARK_.call(null,self__.pathstring);
});

cljs_node_io.file.File.prototype.isDirectory = (function (){
var self__ = this;
var _ = this;
return cljs_node_io.fs.dir_QMARK_.call(null,self__.pathstring);
});

cljs_node_io.file.File.prototype.getParent = (function (){
var self__ = this;
var _ = this;
return cljs_node_io.fs.dirname.call(null,self__.pathstring);
});

cljs_node_io.file.File.prototype.setReadable = (function() {
var G__39654 = null;
var G__39654__1 = (function (r){
var self__ = this;
var _ = this;
return cljs_node_io.file.setReadable.call(null,self__.pathstring,r);
});
var G__39654__2 = (function (r,o){
var self__ = this;
var _ = this;
return cljs_node_io.file.setReadable.call(null,self__.pathstring,r,o);
});
G__39654 = function(r,o){
switch(arguments.length){
case 1:
return G__39654__1.call(this,r);
case 2:
return G__39654__2.call(this,r,o);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__39654.cljs$core$IFn$_invoke$arity$1 = G__39654__1;
G__39654.cljs$core$IFn$_invoke$arity$2 = G__39654__2;
return G__39654;
})()
;

cljs_node_io.file.File.prototype.canWrite = (function (){
var self__ = this;
var this$ = this;
return cljs_node_io.fs.writable_QMARK_.call(null,self__.pathstring);
});

cljs_node_io.file.File.prototype.stats = (function (){
var self__ = this;
var _ = this;
return cljs_node_io.fs.stat__GT_clj.call(null,cljs_node_io.fs.stat.call(null,self__.pathstring));
});

cljs_node_io.file.File.prototype.getName = (function (){
var self__ = this;
var _ = this;
return cljs_node_io.fs.basename.call(null,self__.pathstring);
});

cljs_node_io.file.File.prototype.exists = (function (){
var self__ = this;
var _ = this;
return cljs_node_io.fs.fexists_QMARK_.call(null,self__.pathstring);
});

cljs_node_io.file.File.prototype.setLastModified = (function (time){
var self__ = this;
var _ = this;
return cljs_node_io.fs.utimes.call(null,self__.pathstring,time,time);
});

cljs_node_io.file.File.prototype.canRead = (function (){
var self__ = this;
var this$ = this;
return cljs_node_io.fs.readable_QMARK_.call(null,self__.pathstring);
});

cljs_node_io.file.File.prototype.createNewFile = (function (){
var self__ = this;
var this$ = this;
try{this$.write("",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flags","flags",1775418075),"wx"], null));

return true;
}catch (e39642){if((e39642 instanceof Error)){
var e = e39642;
return false;
} else {
throw e39642;

}
}});

cljs_node_io.file.File.prototype.isAbsolute = (function (){
var self__ = this;
var _ = this;
return cljs_node_io.fs.absolute_QMARK_.call(null,self__.pathstring);
});

cljs_node_io.file.File.prototype.read = (function() {
var G__39655 = null;
var G__39655__0 = (function (){
var self__ = this;
var this$ = this;
return cljs_node_io.fs.readFile.call(null,self__.pathstring,"utf8");
});
var G__39655__1 = (function (enc){
var self__ = this;
var this$ = this;
return cljs_node_io.fs.readFile.call(null,self__.pathstring,enc);
});
G__39655 = function(enc){
switch(arguments.length){
case 0:
return G__39655__0.call(this);
case 1:
return G__39655__1.call(this,enc);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__39655.cljs$core$IFn$_invoke$arity$0 = G__39655__0;
G__39655.cljs$core$IFn$_invoke$arity$1 = G__39655__1;
return G__39655;
})()
;

cljs_node_io.file.File.prototype.listFiles = (function() {
var G__39656 = null;
var G__39656__0 = (function (){
var self__ = this;
var this$ = this;
return cljs.core.mapv.call(null,((function (this$){
return (function (p1__39641_SHARP_){
return (new cljs_node_io.file.File([cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.pathstring),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_node_io.fs.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39641_SHARP_)].join('')));
});})(this$))
,this$.list());
});
var G__39656__1 = (function (filterfn){
var self__ = this;
var this$ = this;
var temp__5455__auto__ = this$.listFiles();
if(cljs.core.truth_(temp__5455__auto__)){
var files = temp__5455__auto__;
return cljs.core.filterv.call(null,cljs.core.partial.call(null,filterfn,self__.pathstring),files);
} else {
return null;
}
});
G__39656 = function(filterfn){
switch(arguments.length){
case 0:
return G__39656__0.call(this);
case 1:
return G__39656__1.call(this,filterfn);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__39656.cljs$core$IFn$_invoke$arity$0 = G__39656__0;
G__39656.cljs$core$IFn$_invoke$arity$1 = G__39656__1;
return G__39656;
})()
;

cljs_node_io.file.File.prototype.mkdir = (function (){
var self__ = this;
var _ = this;
try{cljs_node_io.fs.mkdir.call(null,self__.pathstring);

return true;
}catch (e39643){if((e39643 instanceof Error)){
var e = e39643;
return false;
} else {
throw e39643;

}
}});

cljs_node_io.file.File.prototype.isFile = (function (){
var self__ = this;
var _ = this;
return cljs_node_io.fs.file_QMARK_.call(null,self__.pathstring);
});

cljs_node_io.file.File.prototype.toURI = (function (){
var self__ = this;
var f = this;
return (new goog.Uri(["file:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.pathstring)].join('')));
});

cljs_node_io.file.File.prototype.mkdirs = (function (){
var self__ = this;
var this$ = this;
var p = this$.getPath();
var dirs = cljs_node_io.file.get_non_dirs.call(null,p);
try{var seq__39645_39657 = cljs.core.seq.call(null,dirs);
var chunk__39646_39658 = null;
var count__39647_39659 = (0);
var i__39648_39660 = (0);
while(true){
if((i__39648_39660 < count__39647_39659)){
var d_39661 = cljs.core._nth.call(null,chunk__39646_39658,i__39648_39660);
cljs_node_io.fs.mkdir.call(null,d_39661);

var G__39662 = seq__39645_39657;
var G__39663 = chunk__39646_39658;
var G__39664 = count__39647_39659;
var G__39665 = (i__39648_39660 + (1));
seq__39645_39657 = G__39662;
chunk__39646_39658 = G__39663;
count__39647_39659 = G__39664;
i__39648_39660 = G__39665;
continue;
} else {
var temp__5457__auto___39666 = cljs.core.seq.call(null,seq__39645_39657);
if(temp__5457__auto___39666){
var seq__39645_39667__$1 = temp__5457__auto___39666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39645_39667__$1)){
var c__9857__auto___39668 = cljs.core.chunk_first.call(null,seq__39645_39667__$1);
var G__39669 = cljs.core.chunk_rest.call(null,seq__39645_39667__$1);
var G__39670 = c__9857__auto___39668;
var G__39671 = cljs.core.count.call(null,c__9857__auto___39668);
var G__39672 = (0);
seq__39645_39657 = G__39669;
chunk__39646_39658 = G__39670;
count__39647_39659 = G__39671;
i__39648_39660 = G__39672;
continue;
} else {
var d_39673 = cljs.core.first.call(null,seq__39645_39667__$1);
cljs_node_io.fs.mkdir.call(null,d_39673);

var G__39674 = cljs.core.next.call(null,seq__39645_39667__$1);
var G__39675 = null;
var G__39676 = (0);
var G__39677 = (0);
seq__39645_39657 = G__39674;
chunk__39646_39658 = G__39675;
count__39647_39659 = G__39676;
i__39648_39660 = G__39677;
continue;
}
} else {
}
}
break;
}

return true;
}catch (e39644){if((e39644 instanceof Error)){
var e = e39644;
return false;
} else {
throw e39644;

}
}});

cljs_node_io.file.File.prototype.setReadOnly = (function (){
var self__ = this;
var this$ = this;
return this$.setWritable(false,false);
});

cljs_node_io.file.File.prototype.getCanonicalFile = (function (){
var self__ = this;
var this$ = this;
return (new cljs_node_io.file.File(this$.getCanonicalPath()));
});

cljs_node_io.file.File.prototype.getAbsoluteFile = (function (){
var self__ = this;
var this$ = this;
return (new cljs_node_io.file.File(this$.getAbsolutePath()));
});

cljs_node_io.file.File.prototype.getExt = (function (){
var self__ = this;
var _ = this;
return cljs_node_io.fs.ext.call(null,self__.pathstring);
});

cljs_node_io.file.File.prototype.delete = (function (){
var self__ = this;
var this$ = this;
try{cljs_node_io.fs.rm.call(null,self__.pathstring);

return true;
}catch (e39649){if((e39649 instanceof Error)){
var e = e39649;
return false;
} else {
throw e39649;

}
}});

cljs_node_io.file.File.prototype.getPath = (function (){
var self__ = this;
var _ = this;
return self__.pathstring;
});

cljs_node_io.file.File.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.pathstring;
});

cljs_node_io.file.File.prototype.equals = (function (that){
var self__ = this;
var this$ = this;
return cljs.core._EQ_.call(null,this$,that);
});

cljs_node_io.file.File.prototype.aread = (function() {
var G__39678 = null;
var G__39678__0 = (function (){
var self__ = this;
var this$ = this;
return cljs_node_io.fs.areadFile.call(null,self__.pathstring,"utf8");
});
var G__39678__1 = (function (enc){
var self__ = this;
var this$ = this;
return cljs_node_io.fs.areadFile.call(null,self__.pathstring,enc);
});
G__39678 = function(enc){
switch(arguments.length){
case 0:
return G__39678__0.call(this);
case 1:
return G__39678__1.call(this,enc);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__39678.cljs$core$IFn$_invoke$arity$0 = G__39678__0;
G__39678.cljs$core$IFn$_invoke$arity$1 = G__39678__1;
return G__39678;
})()
;

cljs_node_io.file.File.prototype.write = (function (content,opts){
var self__ = this;
var this$ = this;
return cljs_node_io.fs.writeFile.call(null,self__.pathstring,content,opts);
});

cljs_node_io.file.File.prototype.renameTo = (function (dest){
var self__ = this;
var this$ = this;
if(typeof dest === 'string'){
} else {
throw (new Error(["Assert failed: ","destination must be a string","\n","(string? dest)"].join('')));
}

try{cljs_node_io.fs.rename.call(null,self__.pathstring,dest);

cljs_node_io.fs.unlink.call(null,self__.pathstring);

self__.pathstring = dest;

return true;
}catch (e39650){if((e39650 instanceof Error)){
var e = e39650;
return false;
} else {
throw e39650;

}
}});

cljs_node_io.file.File.prototype.deleteOnExit = (function (){
var self__ = this;
var this$ = this;
return process.on("exit",((function (this$){
return (function (exit_code){
return this$.delete();
});})(this$))
);
});

cljs_node_io.file.File.prototype.setExecutable = (function() {
var G__39679 = null;
var G__39679__1 = (function (e){
var self__ = this;
var _ = this;
return cljs_node_io.file.setExecutable.call(null,self__.pathstring,e);
});
var G__39679__2 = (function (e,o){
var self__ = this;
var _ = this;
return cljs_node_io.file.setExecutable.call(null,self__.pathstring,e,o);
});
G__39679 = function(e,o){
switch(arguments.length){
case 1:
return G__39679__1.call(this,e);
case 2:
return G__39679__2.call(this,e,o);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__39679.cljs$core$IFn$_invoke$arity$1 = G__39679__1;
G__39679.cljs$core$IFn$_invoke$arity$2 = G__39679__2;
return G__39679;
})()
;

cljs_node_io.file.File.prototype.hashCode = (function (){
var self__ = this;
var _ = this;
return cljs.core.hash.call(null,self__.pathstring);
});

cljs_node_io.file.File.prototype.lastModified = (function (){
var self__ = this;
var _ = this;
var stats = (function (){try{return cljs_node_io.fs.stat.call(null,self__.pathstring);
}catch (e39651){if((e39651 instanceof Error)){
var e = e39651;
return false;
} else {
throw e39651;

}
}})();
if(cljs.core.truth_(stats)){
return stats.mtime.valueOf();
} else {
return (0);
}
});

cljs_node_io.file.File.prototype.setWritable = (function() {
var G__39680 = null;
var G__39680__1 = (function (w){
var self__ = this;
var _ = this;
return cljs_node_io.file.setWritable.call(null,self__.pathstring,w);
});
var G__39680__2 = (function (w,o){
var self__ = this;
var _ = this;
return cljs_node_io.file.setWritable.call(null,self__.pathstring,w,o);
});
G__39680 = function(w,o){
switch(arguments.length){
case 1:
return G__39680__1.call(this,w);
case 2:
return G__39680__2.call(this,w,o);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__39680.cljs$core$IFn$_invoke$arity$1 = G__39680__1;
G__39680.cljs$core$IFn$_invoke$arity$2 = G__39680__2;
return G__39680;
})()
;

cljs_node_io.file.File.prototype.list = (function() {
var G__39681 = null;
var G__39681__0 = (function (){
var self__ = this;
var _ = this;
if(!(cljs_node_io.fs.dir_QMARK_.call(null,self__.pathstring))){
return null;
} else {
try{return cljs_node_io.fs.readdir.call(null,self__.pathstring);
}catch (e39652){if((e39652 instanceof Error)){
var e = e39652;
return null;
} else {
throw e39652;

}
}}
});
var G__39681__1 = (function (filterfn){
var self__ = this;
var this$ = this;
var temp__5455__auto__ = this$.list();
if(cljs.core.truth_(temp__5455__auto__)){
var files = temp__5455__auto__;
return cljs.core.filterv.call(null,cljs.core.partial.call(null,filterfn,self__.pathstring),files);
} else {
return null;
}
});
G__39681 = function(filterfn){
switch(arguments.length){
case 0:
return G__39681__0.call(this);
case 1:
return G__39681__1.call(this,filterfn);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__39681.cljs$core$IFn$_invoke$arity$0 = G__39681__0;
G__39681.cljs$core$IFn$_invoke$arity$1 = G__39681__1;
return G__39681;
})()
;

cljs_node_io.file.File.prototype.length = (function (){
var self__ = this;
var _ = this;
var stats = (function (){try{return cljs_node_io.fs.stat.call(null,self__.pathstring);
}catch (e39653){if((e39653 instanceof Error)){
var e = e39653;
return false;
} else {
throw e39653;

}
}})();
if(cljs.core.truth_(stats)){
if(cljs.core.truth_(stats.isDirectory())){
return null;
} else {
return stats.size;
}
} else {
return (0);
}
});

cljs_node_io.file.File.prototype.getAbsolutePath = (function (){
var self__ = this;
var _ = this;
return cljs_node_io.fs.realpath.call(null,self__.pathstring);
});

cljs_node_io.file.File.prototype.getCanonicalPath = (function (){
var self__ = this;
var _ = this;
return cljs_node_io.fs.normalize_path.call(null,self__.pathstring);
});

cljs_node_io.file.File.prototype.awrite = (function (content,opts){
var self__ = this;
var this$ = this;
return cljs_node_io.fs.awriteFile.call(null,self__.pathstring,content,opts);
});

cljs_node_io.file.File.prototype.getParentFile = (function (){
var self__ = this;
var this$ = this;
return (new cljs_node_io.file.File(this$.getParent()));
});

cljs_node_io.file.File.prototype.isHidden = (function (){
var self__ = this;
var _ = this;
return cljs_node_io.fs.hidden_QMARK_.call(null,self__.pathstring);
});

cljs_node_io.file.File.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"pathstring","pathstring",-647531094,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs_node_io.file.File.cljs$lang$type = true;

cljs_node_io.file.File.cljs$lang$ctorStr = "cljs-node-io.file/File";

cljs_node_io.file.File.cljs$lang$ctorPrWriter = (function (this__9597__auto__,writer__9598__auto__,opt__9599__auto__){
return cljs.core._write.call(null,writer__9598__auto__,"cljs-node-io.file/File");
});

cljs_node_io.file.__GT_File = (function cljs_node_io$file$__GT_File(pathstring){
return (new cljs_node_io.file.File(pathstring));
});


//# sourceMappingURL=file.js.map
