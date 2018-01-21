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
var pred__47545 = cljs.core._EQ_;
var expr__47546 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [readable,ownerOnly], null);
if(cljs.core.truth_(pred__47545.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null),expr__47546))){
return (mode | (256));
} else {
if(cljs.core.truth_(pred__47545.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null),expr__47546))){
return (mode & (~ (256)));
} else {
if(cljs.core.truth_(pred__47545.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),expr__47546))){
return (((mode | (256)) | (32)) | (4));
} else {
if(cljs.core.truth_(pred__47545.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null),expr__47546))){
return (((mode & (~ (256))) & (~ (32))) & (~ (4)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__47546)].join('')));
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
var G__47549 = arguments.length;
switch (G__47549) {
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
var pred__47551 = cljs.core._EQ_;
var expr__47552 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [writable,ownerOnly], null);
if(cljs.core.truth_(pred__47551.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null),expr__47552))){
return (mode | (128));
} else {
if(cljs.core.truth_(pred__47551.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null),expr__47552))){
return (mode & (~ (128)));
} else {
if(cljs.core.truth_(pred__47551.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),expr__47552))){
return (((mode | (128)) | (16)) | (2));
} else {
if(cljs.core.truth_(pred__47551.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null),expr__47552))){
return (((mode & (~ (128))) & (~ (16))) & (~ (2)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__47552)].join('')));
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
var G__47555 = arguments.length;
switch (G__47555) {
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
var pred__47557 = cljs.core._EQ_;
var expr__47558 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [executable,ownerOnly], null);
if(cljs.core.truth_(pred__47557.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null),expr__47558))){
return (mode | (64));
} else {
if(cljs.core.truth_(pred__47557.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null),expr__47558))){
return (mode & (~ (64)));
} else {
if(cljs.core.truth_(pred__47557.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),expr__47558))){
return (((mode | (64)) | (8)) | (1));
} else {
if(cljs.core.truth_(pred__47557.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null),expr__47558))){
return (((mode & (~ (64))) & (~ (8))) & (~ (1)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__47558)].join('')));
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
var G__47561 = arguments.length;
switch (G__47561) {
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
return (function (p1__47563_SHARP_){
return p1__47563_SHARP_.getPath;
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
var G__47577 = null;
var G__47577__1 = (function (r){
var self__ = this;
var _ = this;
return cljs_node_io.file.setReadable.call(null,self__.pathstring,r);
});
var G__47577__2 = (function (r,o){
var self__ = this;
var _ = this;
return cljs_node_io.file.setReadable.call(null,self__.pathstring,r,o);
});
G__47577 = function(r,o){
switch(arguments.length){
case 1:
return G__47577__1.call(this,r);
case 2:
return G__47577__2.call(this,r,o);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__47577.cljs$core$IFn$_invoke$arity$1 = G__47577__1;
G__47577.cljs$core$IFn$_invoke$arity$2 = G__47577__2;
return G__47577;
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
}catch (e47565){if((e47565 instanceof Error)){
var e = e47565;
return false;
} else {
throw e47565;

}
}});

cljs_node_io.file.File.prototype.isAbsolute = (function (){
var self__ = this;
var _ = this;
return cljs_node_io.fs.absolute_QMARK_.call(null,self__.pathstring);
});

cljs_node_io.file.File.prototype.read = (function() {
var G__47578 = null;
var G__47578__0 = (function (){
var self__ = this;
var this$ = this;
return cljs_node_io.fs.readFile.call(null,self__.pathstring,"utf8");
});
var G__47578__1 = (function (enc){
var self__ = this;
var this$ = this;
return cljs_node_io.fs.readFile.call(null,self__.pathstring,enc);
});
G__47578 = function(enc){
switch(arguments.length){
case 0:
return G__47578__0.call(this);
case 1:
return G__47578__1.call(this,enc);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__47578.cljs$core$IFn$_invoke$arity$0 = G__47578__0;
G__47578.cljs$core$IFn$_invoke$arity$1 = G__47578__1;
return G__47578;
})()
;

cljs_node_io.file.File.prototype.listFiles = (function() {
var G__47579 = null;
var G__47579__0 = (function (){
var self__ = this;
var this$ = this;
return cljs.core.mapv.call(null,((function (this$){
return (function (p1__47564_SHARP_){
return (new cljs_node_io.file.File([cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.pathstring),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_node_io.fs.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47564_SHARP_)].join('')));
});})(this$))
,this$.list());
});
var G__47579__1 = (function (filterfn){
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
G__47579 = function(filterfn){
switch(arguments.length){
case 0:
return G__47579__0.call(this);
case 1:
return G__47579__1.call(this,filterfn);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__47579.cljs$core$IFn$_invoke$arity$0 = G__47579__0;
G__47579.cljs$core$IFn$_invoke$arity$1 = G__47579__1;
return G__47579;
})()
;

cljs_node_io.file.File.prototype.mkdir = (function (){
var self__ = this;
var _ = this;
try{cljs_node_io.fs.mkdir.call(null,self__.pathstring);

return true;
}catch (e47566){if((e47566 instanceof Error)){
var e = e47566;
return false;
} else {
throw e47566;

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
try{var seq__47568_47580 = cljs.core.seq.call(null,dirs);
var chunk__47569_47581 = null;
var count__47570_47582 = (0);
var i__47571_47583 = (0);
while(true){
if((i__47571_47583 < count__47570_47582)){
var d_47584 = cljs.core._nth.call(null,chunk__47569_47581,i__47571_47583);
cljs_node_io.fs.mkdir.call(null,d_47584);

var G__47585 = seq__47568_47580;
var G__47586 = chunk__47569_47581;
var G__47587 = count__47570_47582;
var G__47588 = (i__47571_47583 + (1));
seq__47568_47580 = G__47585;
chunk__47569_47581 = G__47586;
count__47570_47582 = G__47587;
i__47571_47583 = G__47588;
continue;
} else {
var temp__5457__auto___47589 = cljs.core.seq.call(null,seq__47568_47580);
if(temp__5457__auto___47589){
var seq__47568_47590__$1 = temp__5457__auto___47589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47568_47590__$1)){
var c__42343__auto___47591 = cljs.core.chunk_first.call(null,seq__47568_47590__$1);
var G__47592 = cljs.core.chunk_rest.call(null,seq__47568_47590__$1);
var G__47593 = c__42343__auto___47591;
var G__47594 = cljs.core.count.call(null,c__42343__auto___47591);
var G__47595 = (0);
seq__47568_47580 = G__47592;
chunk__47569_47581 = G__47593;
count__47570_47582 = G__47594;
i__47571_47583 = G__47595;
continue;
} else {
var d_47596 = cljs.core.first.call(null,seq__47568_47590__$1);
cljs_node_io.fs.mkdir.call(null,d_47596);

var G__47597 = cljs.core.next.call(null,seq__47568_47590__$1);
var G__47598 = null;
var G__47599 = (0);
var G__47600 = (0);
seq__47568_47580 = G__47597;
chunk__47569_47581 = G__47598;
count__47570_47582 = G__47599;
i__47571_47583 = G__47600;
continue;
}
} else {
}
}
break;
}

return true;
}catch (e47567){if((e47567 instanceof Error)){
var e = e47567;
return false;
} else {
throw e47567;

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
}catch (e47572){if((e47572 instanceof Error)){
var e = e47572;
return false;
} else {
throw e47572;

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
var G__47601 = null;
var G__47601__0 = (function (){
var self__ = this;
var this$ = this;
return cljs_node_io.fs.areadFile.call(null,self__.pathstring,"utf8");
});
var G__47601__1 = (function (enc){
var self__ = this;
var this$ = this;
return cljs_node_io.fs.areadFile.call(null,self__.pathstring,enc);
});
G__47601 = function(enc){
switch(arguments.length){
case 0:
return G__47601__0.call(this);
case 1:
return G__47601__1.call(this,enc);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__47601.cljs$core$IFn$_invoke$arity$0 = G__47601__0;
G__47601.cljs$core$IFn$_invoke$arity$1 = G__47601__1;
return G__47601;
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
}catch (e47573){if((e47573 instanceof Error)){
var e = e47573;
return false;
} else {
throw e47573;

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
var G__47602 = null;
var G__47602__1 = (function (e){
var self__ = this;
var _ = this;
return cljs_node_io.file.setExecutable.call(null,self__.pathstring,e);
});
var G__47602__2 = (function (e,o){
var self__ = this;
var _ = this;
return cljs_node_io.file.setExecutable.call(null,self__.pathstring,e,o);
});
G__47602 = function(e,o){
switch(arguments.length){
case 1:
return G__47602__1.call(this,e);
case 2:
return G__47602__2.call(this,e,o);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__47602.cljs$core$IFn$_invoke$arity$1 = G__47602__1;
G__47602.cljs$core$IFn$_invoke$arity$2 = G__47602__2;
return G__47602;
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
}catch (e47574){if((e47574 instanceof Error)){
var e = e47574;
return false;
} else {
throw e47574;

}
}})();
if(cljs.core.truth_(stats)){
return stats.mtime.valueOf();
} else {
return (0);
}
});

cljs_node_io.file.File.prototype.setWritable = (function() {
var G__47603 = null;
var G__47603__1 = (function (w){
var self__ = this;
var _ = this;
return cljs_node_io.file.setWritable.call(null,self__.pathstring,w);
});
var G__47603__2 = (function (w,o){
var self__ = this;
var _ = this;
return cljs_node_io.file.setWritable.call(null,self__.pathstring,w,o);
});
G__47603 = function(w,o){
switch(arguments.length){
case 1:
return G__47603__1.call(this,w);
case 2:
return G__47603__2.call(this,w,o);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__47603.cljs$core$IFn$_invoke$arity$1 = G__47603__1;
G__47603.cljs$core$IFn$_invoke$arity$2 = G__47603__2;
return G__47603;
})()
;

cljs_node_io.file.File.prototype.list = (function() {
var G__47604 = null;
var G__47604__0 = (function (){
var self__ = this;
var _ = this;
if(!(cljs_node_io.fs.dir_QMARK_.call(null,self__.pathstring))){
return null;
} else {
try{return cljs_node_io.fs.readdir.call(null,self__.pathstring);
}catch (e47575){if((e47575 instanceof Error)){
var e = e47575;
return null;
} else {
throw e47575;

}
}}
});
var G__47604__1 = (function (filterfn){
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
G__47604 = function(filterfn){
switch(arguments.length){
case 0:
return G__47604__0.call(this);
case 1:
return G__47604__1.call(this,filterfn);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__47604.cljs$core$IFn$_invoke$arity$0 = G__47604__0;
G__47604.cljs$core$IFn$_invoke$arity$1 = G__47604__1;
return G__47604;
})()
;

cljs_node_io.file.File.prototype.length = (function (){
var self__ = this;
var _ = this;
var stats = (function (){try{return cljs_node_io.fs.stat.call(null,self__.pathstring);
}catch (e47576){if((e47576 instanceof Error)){
var e = e47576;
return false;
} else {
throw e47576;

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

cljs_node_io.file.File.cljs$lang$ctorPrWriter = (function (this__42083__auto__,writer__42084__auto__,opt__42085__auto__){
return cljs.core._write.call(null,writer__42084__auto__,"cljs-node-io.file/File");
});

cljs_node_io.file.__GT_File = (function cljs_node_io$file$__GT_File(pathstring){
return (new cljs_node_io.file.File(pathstring));
});


//# sourceMappingURL=file.js.map?rel=1516433044071
