// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs_node_io.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs_node_io.file');
goog.require('cljs_node_io.streams');
goog.require('cljs_node_io.protocols');
goog.require('goog.Uri');
goog.require('goog.string.StringBuffer');
cljs_node_io.core.path = require("path");
Buffer.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

Buffer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var this$__$1 = this;
try{return this$__$1.equals(that);
}catch (e39684){if((e39684 instanceof Error)){
var e = e39684;
return false;
} else {
throw e39684;

}
}});
/**
 * This is needed to mock the java.io.File constructor.
 * The java File constructor is polymorphic and accepts one or two args:
 * (Uri), (pathstring), (parentstring, childstring), (File, childstring)
 * @return {!string}
 */
cljs_node_io.core.filepath = (function cljs_node_io$core$filepath(var_args){
var G__39686 = arguments.length;
switch (G__39686) {
case 1:
return cljs_node_io.core.filepath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_node_io.core.filepath.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_node_io.core.filepath.cljs$core$IFn$_invoke$arity$1 = (function (a){
return cljs_node_io.core.filepath.call(null,a,null);
});

cljs_node_io.core.filepath.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var pred__39687 = cljs.core._EQ_;
var expr__39688 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.type.call(null,a),cljs.core.type.call(null,b)], null);
if(cljs.core.truth_(pred__39687.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.Uri,null], null),expr__39688))){
return a.getPath();
} else {
if(cljs.core.truth_(pred__39687.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String,null], null),expr__39688))){
return a;
} else {
if(cljs.core.truth_(pred__39687.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String,String], null),expr__39688))){
return cljs_node_io.core.path.join.call(null,a,b);
} else {
if(cljs.core.truth_(pred__39687.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_node_io.file.File,String], null),expr__39688))){
return cljs_node_io.core.path.join.call(null,a.getPath(),b);
} else {
if(cljs.core.truth_(pred__39687.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__39688))){
throw (new TypeError(["Unrecognized path configuration passed to File constructor.","\nYou passed ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,a))," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,b)),"\nYou must pass a [string], [uri], [string string], or [file string]."].join('')));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39688)].join('')));
}
}
}
}
}
});

cljs_node_io.core.filepath.cljs$lang$maxFixedArity = 2;

goog.object.set(cljs_node_io.protocols.Coercions,"null",true);

goog.object.set(cljs_node_io.protocols.as_file,"null",(function (_){
return null;
}));

goog.object.set(cljs_node_io.protocols.as_url,"null",(function (_){
return null;
}));

goog.object.set(cljs_node_io.protocols.Coercions,"string",true);

goog.object.set(cljs_node_io.protocols.as_file,"string",(function (s){
return (new cljs_node_io.file.File(cljs_node_io.core.filepath.call(null,s)));
}));

goog.object.set(cljs_node_io.protocols.as_url,"string",(function (s){
return (new goog.Uri(s)).getPath();
}));

goog.Uri.prototype.cljs_node_io$protocols$Coercions$ = cljs.core.PROTOCOL_SENTINEL;

goog.Uri.prototype.cljs_node_io$protocols$Coercions$as_url$arity$1 = (function (u){
var u__$1 = this;
return u__$1.getPath();
});

goog.Uri.prototype.cljs_node_io$protocols$Coercions$as_file$arity$1 = (function (u){
var u__$1 = this;
if(cljs.core._EQ_.call(null,"file",u__$1.getScheme())){
return cljs_node_io.protocols.as_file.call(null,u__$1.getPath());
} else {
throw (new Error(["IllegalArgumentException : Not a file: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(u__$1)].join('')));
}
});
goog.Uri.prototype.cljs_node_io$protocols$IOFactory$ = cljs.core.PROTOCOL_SENTINEL;

goog.Uri.prototype.cljs_node_io$protocols$IOFactory$make_reader$arity$2 = (function (x,opts){
var x__$1 = this;
return cljs_node_io.protocols.make_reader.call(null,cljs_node_io.protocols.make_input_stream.call(null,x__$1,opts),opts);
});

goog.Uri.prototype.cljs_node_io$protocols$IOFactory$make_writer$arity$2 = (function (x,opts){
var x__$1 = this;
return cljs_node_io.protocols.make_writer.call(null,cljs_node_io.protocols.make_output_stream.call(null,x__$1,opts),opts);
});

goog.Uri.prototype.cljs_node_io$protocols$IOFactory$make_input_stream$arity$2 = (function (x,opts){
var x__$1 = this;
return cljs_node_io.protocols.make_input_stream.call(null,((cljs.core._EQ_.call(null,"file",x__$1.getScheme()))?cljs_node_io.streams.FileInputStream.call(null,cljs_node_io.protocols.as_file.call(null,x__$1)):x__$1.openStream()),opts);
});

goog.Uri.prototype.cljs_node_io$protocols$IOFactory$make_output_stream$arity$2 = (function (x,opts){
var x__$1 = this;
if(cljs.core._EQ_.call(null,"file",x__$1.getScheme())){
return cljs_node_io.protocols.make_output_stream.call(null,cljs_node_io.protocols.as_file.call(null,x__$1),opts);
} else {
throw (new Error(["IllegalArgumentException: Can not write to non-file URL <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1),">"].join('')));
}
});

goog.object.set(cljs_node_io.protocols.IOFactory,"string",true);

goog.object.set(cljs_node_io.protocols.make_reader,"string",(function (x,opts){
return cljs_node_io.protocols.make_reader.call(null,cljs_node_io.protocols.as_file.call(null,x),opts);
}));

goog.object.set(cljs_node_io.protocols.make_writer,"string",(function (x,opts){
return cljs_node_io.protocols.make_writer.call(null,cljs_node_io.protocols.as_file.call(null,x),opts);
}));

goog.object.set(cljs_node_io.protocols.make_input_stream,"string",(function (x,opts){
try{return cljs_node_io.protocols.make_input_stream.call(null,(new goog.Uri(x)),opts);
}catch (e39691){if((e39691 instanceof Error)){
var e = e39691;
return cljs_node_io.protocols.make_input_stream.call(null,(new cljs_node_io.file.File(x)),opts);
} else {
throw e39691;

}
}}));

goog.object.set(cljs_node_io.protocols.make_output_stream,"string",(function (x,opts){
try{return cljs_node_io.protocols.make_output_stream.call(null,(new goog.Uri(x)),opts);
}catch (e39692){if((e39692 instanceof Error)){
var err = e39692;
return cljs_node_io.protocols.make_output_stream.call(null,(new cljs_node_io.file.File(x)),opts);
} else {
throw e39692;

}
}}));

Buffer.prototype.cljs_node_io$protocols$IOFactory$ = cljs.core.PROTOCOL_SENTINEL;

Buffer.prototype.cljs_node_io$protocols$IOFactory$make_reader$arity$2 = (function (b,opts){
var b__$1 = this;
return cljs_node_io.protocols.make_reader.call(null,cljs_node_io.protocols.make_input_stream.call(null,b__$1,opts),opts);
});

Buffer.prototype.cljs_node_io$protocols$IOFactory$make_input_stream$arity$2 = (function (b,opts){
var b__$1 = this;
return cljs_node_io.streams.BufferReadStream.call(null,b__$1,opts);
});

Buffer.prototype.cljs_node_io$protocols$IOFactory$make_writer$arity$2 = (function (x,opts){
var x__$1 = this;
return cljs_node_io.protocols.make_writer.call(null,cljs_node_io.protocols.make_output_stream.call(null,x__$1,opts),opts);
});

Buffer.prototype.cljs_node_io$protocols$IOFactory$make_output_stream$arity$2 = (function (x,opts){
var x__$1 = this;
throw (new Error(["IllegalArgumentException : Cannot open <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x__$1)),"> as an OutputStream."].join('')));
});
/**
 * a relative path, else IllegalArgumentException.
 * @param {(string|IFile|Uri)} x
 * @return {!string}
 */
cljs_node_io.core.as_relative_path = (function cljs_node_io$core$as_relative_path(x){
var f = cljs_node_io.protocols.as_file.call(null,x);
if(cljs.core.truth_(f.isAbsolute())){
throw (new Error(["IllegalArgumentException: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)," is not a relative path"].join('')));
} else {
return f.getPath();
}
});
/**
 * Returns a reified file, passing each arg to as-file.  Multiple-arg
 * versions treat the first argument as parent and subsequent args as
 * children relative to the parent. Use in place of File constructor
 * @return {!IFile}
 */
cljs_node_io.core.file = (function cljs_node_io$core$file(var_args){
var G__39697 = arguments.length;
switch (G__39697) {
case 1:
return cljs_node_io.core.file.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_node_io.core.file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10228__auto__ = [];
var len__10205__auto___39699 = arguments.length;
var i__10206__auto___39700 = (0);
while(true){
if((i__10206__auto___39700 < len__10205__auto___39699)){
args_arr__10228__auto__.push((arguments[i__10206__auto___39700]));

var G__39701 = (i__10206__auto___39700 + (1));
i__10206__auto___39700 = G__39701;
continue;
} else {
}
break;
}

var argseq__10229__auto__ = (new cljs.core.IndexedSeq(args_arr__10228__auto__.slice((2)),(0),null));
return cljs_node_io.core.file.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10229__auto__);

}
});

cljs_node_io.core.file.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return cljs_node_io.protocols.as_file.call(null,arg);
});

cljs_node_io.core.file.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
return (new cljs_node_io.file.File(cljs_node_io.core.filepath.call(null,cljs_node_io.protocols.as_file.call(null,parent),cljs_node_io.core.as_relative_path.call(null,child))));
});

cljs_node_io.core.file.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more){
return cljs.core.reduce.call(null,cljs_node_io.core.file,cljs_node_io.core.file.call(null,parent,child),more);
});

cljs_node_io.core.file.cljs$lang$applyTo = (function (seq39694){
var G__39695 = cljs.core.first.call(null,seq39694);
var seq39694__$1 = cljs.core.next.call(null,seq39694);
var G__39696 = cljs.core.first.call(null,seq39694__$1);
var seq39694__$2 = cljs.core.next.call(null,seq39694__$1);
return cljs_node_io.core.file.cljs$core$IFn$_invoke$arity$variadic(G__39695,G__39696,seq39694__$2);
});

cljs_node_io.core.file.cljs$lang$maxFixedArity = (2);

/**
 * Delete file f. Raise an exception if it fails unless silently is true.
 * @return {!boolean}
 */
cljs_node_io.core.delete_file = (function cljs_node_io$core$delete_file(var_args){
var args__10212__auto__ = [];
var len__10205__auto___39708 = arguments.length;
var i__10206__auto___39709 = (0);
while(true){
if((i__10206__auto___39709 < len__10205__auto___39708)){
args__10212__auto__.push((arguments[i__10206__auto___39709]));

var G__39710 = (i__10206__auto___39709 + (1));
i__10206__auto___39709 = G__39710;
continue;
} else {
}
break;
}

var argseq__10213__auto__ = ((((1) < args__10212__auto__.length))?(new cljs.core.IndexedSeq(args__10212__auto__.slice((1)),(0),null)):null);
return cljs_node_io.core.delete_file.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10213__auto__);
});

cljs_node_io.core.delete_file.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__39704){
var vec__39705 = p__39704;
var silently = cljs.core.nth.call(null,vec__39705,(0),null);
var or__8926__auto__ = cljs_node_io.core.file.call(null,f).delete();
if(cljs.core.truth_(or__8926__auto__)){
return or__8926__auto__;
} else {
var or__8926__auto____$1 = silently;
if(cljs.core.truth_(or__8926__auto____$1)){
return or__8926__auto____$1;
} else {
throw (new Error(["Couldn't delete ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('')));
}
}
});

cljs_node_io.core.delete_file.cljs$lang$maxFixedArity = (1);

cljs_node_io.core.delete_file.cljs$lang$applyTo = (function (seq39702){
var G__39703 = cljs.core.first.call(null,seq39702);
var seq39702__$1 = cljs.core.next.call(null,seq39702);
return cljs_node_io.core.delete_file.cljs$core$IFn$_invoke$arity$variadic(G__39703,seq39702__$1);
});

/**
 * For all streams it defers back to the stream. Note: stream objects are event driven.
 *   + buffers => BufferReadStream
 *   + files + strings => FileInputStream
 *   + goog.Uri's are treated as local files. No other protocols are supported at this time.
 * @return {!IInputStream}
 */
cljs_node_io.core.reader = (function cljs_node_io$core$reader(var_args){
var args__10212__auto__ = [];
var len__10205__auto___39713 = arguments.length;
var i__10206__auto___39714 = (0);
while(true){
if((i__10206__auto___39714 < len__10205__auto___39713)){
args__10212__auto__.push((arguments[i__10206__auto___39714]));

var G__39715 = (i__10206__auto___39714 + (1));
i__10206__auto___39714 = G__39715;
continue;
} else {
}
break;
}

var argseq__10213__auto__ = ((((1) < args__10212__auto__.length))?(new cljs.core.IndexedSeq(args__10212__auto__.slice((1)),(0),null)):null);
return cljs_node_io.core.reader.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10213__auto__);
});

cljs_node_io.core.reader.cljs$core$IFn$_invoke$arity$variadic = (function (x,opts){
return cljs_node_io.protocols.make_reader.call(null,x,(cljs.core.truth_(opts)?cljs.core.apply.call(null,cljs.core.hash_map,opts):null));
});

cljs_node_io.core.reader.cljs$lang$maxFixedArity = (1);

cljs_node_io.core.reader.cljs$lang$applyTo = (function (seq39711){
var G__39712 = cljs.core.first.call(null,seq39711);
var seq39711__$1 = cljs.core.next.call(null,seq39711);
return cljs_node_io.core.reader.cljs$core$IFn$_invoke$arity$variadic(G__39712,seq39711__$1);
});

/**
 * For all streams it defers back to the stream. Note: stream objects are event driven.
 *  + Files & Strings become FileOutputStreams.
 *  + goog.Uri's are treated as local files. No other protocols are supported at this time.
 * @return {!IOutputStream}
 */
cljs_node_io.core.writer = (function cljs_node_io$core$writer(var_args){
var args__10212__auto__ = [];
var len__10205__auto___39718 = arguments.length;
var i__10206__auto___39719 = (0);
while(true){
if((i__10206__auto___39719 < len__10205__auto___39718)){
args__10212__auto__.push((arguments[i__10206__auto___39719]));

var G__39720 = (i__10206__auto___39719 + (1));
i__10206__auto___39719 = G__39720;
continue;
} else {
}
break;
}

var argseq__10213__auto__ = ((((1) < args__10212__auto__.length))?(new cljs.core.IndexedSeq(args__10212__auto__.slice((1)),(0),null)):null);
return cljs_node_io.core.writer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10213__auto__);
});

cljs_node_io.core.writer.cljs$core$IFn$_invoke$arity$variadic = (function (x,opts){
return cljs_node_io.protocols.make_writer.call(null,x,(cljs.core.truth_(opts)?cljs.core.apply.call(null,cljs.core.hash_map,opts):null));
});

cljs_node_io.core.writer.cljs$lang$maxFixedArity = (1);

cljs_node_io.core.writer.cljs$lang$applyTo = (function (seq39716){
var G__39717 = cljs.core.first.call(null,seq39716);
var seq39716__$1 = cljs.core.next.call(null,seq39716);
return cljs_node_io.core.writer.cljs$core$IFn$_invoke$arity$variadic(G__39717,seq39716__$1);
});

/**
 * For all streams it defers back to the stream. Note: stream objects are event driven.
 *  + buffers => BufferReadStream
 *  + files + strings => FileInputStream
 *  + goog.Uri's are treated as local files. No other protocols are supported at this time.
 * @return {!IInputStream}
 */
cljs_node_io.core.input_stream = (function cljs_node_io$core$input_stream(var_args){
var args__10212__auto__ = [];
var len__10205__auto___39723 = arguments.length;
var i__10206__auto___39724 = (0);
while(true){
if((i__10206__auto___39724 < len__10205__auto___39723)){
args__10212__auto__.push((arguments[i__10206__auto___39724]));

var G__39725 = (i__10206__auto___39724 + (1));
i__10206__auto___39724 = G__39725;
continue;
} else {
}
break;
}

var argseq__10213__auto__ = ((((1) < args__10212__auto__.length))?(new cljs.core.IndexedSeq(args__10212__auto__.slice((1)),(0),null)):null);
return cljs_node_io.core.input_stream.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10213__auto__);
});

cljs_node_io.core.input_stream.cljs$core$IFn$_invoke$arity$variadic = (function (x,opts){
return cljs_node_io.protocols.make_input_stream.call(null,x,(cljs.core.truth_(opts)?cljs.core.apply.call(null,cljs.core.hash_map,opts):null));
});

cljs_node_io.core.input_stream.cljs$lang$maxFixedArity = (1);

cljs_node_io.core.input_stream.cljs$lang$applyTo = (function (seq39721){
var G__39722 = cljs.core.first.call(null,seq39721);
var seq39721__$1 = cljs.core.next.call(null,seq39721);
return cljs_node_io.core.input_stream.cljs$core$IFn$_invoke$arity$variadic(G__39722,seq39721__$1);
});

/**
 * For all streams it defers back to the stream. Note: stream objects are event driven.
 * + Files & Strings become FileOutputStreams.
 * + goog.Uri's are treated as local files. No other protocols are supported at
 * this time.
 * @return {!IOutputStream}
 */
cljs_node_io.core.output_stream = (function cljs_node_io$core$output_stream(var_args){
var args__10212__auto__ = [];
var len__10205__auto___39728 = arguments.length;
var i__10206__auto___39729 = (0);
while(true){
if((i__10206__auto___39729 < len__10205__auto___39728)){
args__10212__auto__.push((arguments[i__10206__auto___39729]));

var G__39730 = (i__10206__auto___39729 + (1));
i__10206__auto___39729 = G__39730;
continue;
} else {
}
break;
}

var argseq__10213__auto__ = ((((1) < args__10212__auto__.length))?(new cljs.core.IndexedSeq(args__10212__auto__.slice((1)),(0),null)):null);
return cljs_node_io.core.output_stream.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10213__auto__);
});

cljs_node_io.core.output_stream.cljs$core$IFn$_invoke$arity$variadic = (function (x,opts){
return cljs_node_io.protocols.make_output_stream.call(null,x,(cljs.core.truth_(opts)?cljs.core.apply.call(null,cljs.core.hash_map,opts):null));
});

cljs_node_io.core.output_stream.cljs$lang$maxFixedArity = (1);

cljs_node_io.core.output_stream.cljs$lang$applyTo = (function (seq39726){
var G__39727 = cljs.core.first.call(null,seq39726);
var seq39726__$1 = cljs.core.next.call(null,seq39726);
return cljs_node_io.core.output_stream.cljs$core$IFn$_invoke$arity$variadic(G__39727,seq39726__$1);
});

/**
 * sugar over Buffer.isBuffer
 * @param {*} b
 * @return {!boolean}
 */
cljs_node_io.core.Buffer_QMARK_ = (function cljs_node_io$core$Buffer_QMARK_(b){
return Buffer.isBuffer(b);
});
/**
 * @param {*} e
 * @return {!boolean}
 */
cljs_node_io.core.Error_QMARK_ = (function cljs_node_io$core$Error_QMARK_(e){
return (e instanceof Error);
});
/**
 * Returns a string synchronously. Unlike JVM, does not use FileInputStream.
 * Only option at this time is :encoding
 * If :encoding "" (an explicit empty string), returns raw buffer instead of string.
 * @return {(string|buffer.Buffer)}
 */
cljs_node_io.core.slurp = (function cljs_node_io$core$slurp(var_args){
var args__10212__auto__ = [];
var len__10205__auto___39733 = arguments.length;
var i__10206__auto___39734 = (0);
while(true){
if((i__10206__auto___39734 < len__10205__auto___39733)){
args__10212__auto__.push((arguments[i__10206__auto___39734]));

var G__39735 = (i__10206__auto___39734 + (1));
i__10206__auto___39734 = G__39735;
continue;
} else {
}
break;
}

var argseq__10213__auto__ = ((((1) < args__10212__auto__.length))?(new cljs.core.IndexedSeq(args__10212__auto__.slice((1)),(0),null)):null);
return cljs_node_io.core.slurp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10213__auto__);
});

cljs_node_io.core.slurp.cljs$core$IFn$_invoke$arity$variadic = (function (p,opts){
var opts__$1 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var f = cljs_node_io.protocols.as_file.call(null,p);
return f.read((function (){var or__8926__auto__ = new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(or__8926__auto__)){
return or__8926__auto__;
} else {
return "utf8";
}
})());
});

cljs_node_io.core.slurp.cljs$lang$maxFixedArity = (1);

cljs_node_io.core.slurp.cljs$lang$applyTo = (function (seq39731){
var G__39732 = cljs.core.first.call(null,seq39731);
var seq39731__$1 = cljs.core.next.call(null,seq39731);
return cljs_node_io.core.slurp.cljs$core$IFn$_invoke$arity$variadic(G__39732,seq39731__$1);
});

/**
 * @return {!Channel} a which will receive [?err ?data]
 */
cljs_node_io.core.aslurp = (function cljs_node_io$core$aslurp(var_args){
var args__10212__auto__ = [];
var len__10205__auto___39738 = arguments.length;
var i__10206__auto___39739 = (0);
while(true){
if((i__10206__auto___39739 < len__10205__auto___39738)){
args__10212__auto__.push((arguments[i__10206__auto___39739]));

var G__39740 = (i__10206__auto___39739 + (1));
i__10206__auto___39739 = G__39740;
continue;
} else {
}
break;
}

var argseq__10213__auto__ = ((((1) < args__10212__auto__.length))?(new cljs.core.IndexedSeq(args__10212__auto__.slice((1)),(0),null)):null);
return cljs_node_io.core.aslurp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10213__auto__);
});

cljs_node_io.core.aslurp.cljs$core$IFn$_invoke$arity$variadic = (function (p,opts){
var opts__$1 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var f = cljs_node_io.protocols.as_file.call(null,p);
return f.aread((function (){var or__8926__auto__ = new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(or__8926__auto__)){
return or__8926__auto__;
} else {
return "utf8";
}
})());
});

cljs_node_io.core.aslurp.cljs$lang$maxFixedArity = (1);

cljs_node_io.core.aslurp.cljs$lang$applyTo = (function (seq39736){
var G__39737 = cljs.core.first.call(null,seq39736);
var seq39736__$1 = cljs.core.next.call(null,seq39736);
return cljs_node_io.core.aslurp.cljs$core$IFn$_invoke$arity$variadic(G__39737,seq39736__$1);
});

/**
 * Writes content synchronously to file f.
 * :encoding {string} encoding to write the string. Ignored when content is a buffer
 * :append - {boolean} - if true add content to end of file
 * @return {nil} or throws
 */
cljs_node_io.core.spit = (function cljs_node_io$core$spit(var_args){
var args__10212__auto__ = [];
var len__10205__auto___39744 = arguments.length;
var i__10206__auto___39745 = (0);
while(true){
if((i__10206__auto___39745 < len__10205__auto___39744)){
args__10212__auto__.push((arguments[i__10206__auto___39745]));

var G__39746 = (i__10206__auto___39745 + (1));
i__10206__auto___39745 = G__39746;
continue;
} else {
}
break;
}

var argseq__10213__auto__ = ((((2) < args__10212__auto__.length))?(new cljs.core.IndexedSeq(args__10212__auto__.slice((2)),(0),null)):null);
return cljs_node_io.core.spit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10213__auto__);
});

cljs_node_io.core.spit.cljs$core$IFn$_invoke$arity$variadic = (function (p,content,options){
var opts = cljs.core.apply.call(null,cljs.core.hash_map,options);
var f = cljs_node_io.protocols.as_file.call(null,p);
return f.write([cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''),opts);
});

cljs_node_io.core.spit.cljs$lang$maxFixedArity = (2);

cljs_node_io.core.spit.cljs$lang$applyTo = (function (seq39741){
var G__39742 = cljs.core.first.call(null,seq39741);
var seq39741__$1 = cljs.core.next.call(null,seq39741);
var G__39743 = cljs.core.first.call(null,seq39741__$1);
var seq39741__$2 = cljs.core.next.call(null,seq39741__$1);
return cljs_node_io.core.spit.cljs$core$IFn$_invoke$arity$variadic(G__39742,G__39743,seq39741__$2);
});

/**
 * Async spit. Wait for result before writing again!
 * @return {!Channel} recieves [?err]
 */
cljs_node_io.core.aspit = (function cljs_node_io$core$aspit(var_args){
var args__10212__auto__ = [];
var len__10205__auto___39750 = arguments.length;
var i__10206__auto___39751 = (0);
while(true){
if((i__10206__auto___39751 < len__10205__auto___39750)){
args__10212__auto__.push((arguments[i__10206__auto___39751]));

var G__39752 = (i__10206__auto___39751 + (1));
i__10206__auto___39751 = G__39752;
continue;
} else {
}
break;
}

var argseq__10213__auto__ = ((((2) < args__10212__auto__.length))?(new cljs.core.IndexedSeq(args__10212__auto__.slice((2)),(0),null)):null);
return cljs_node_io.core.aspit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10213__auto__);
});

cljs_node_io.core.aspit.cljs$core$IFn$_invoke$arity$variadic = (function (p,content,options){
var opts = cljs.core.apply.call(null,cljs.core.hash_map,options);
var f = cljs_node_io.protocols.as_file.call(null,p);
return f.awrite([cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''),opts);
});

cljs_node_io.core.aspit.cljs$lang$maxFixedArity = (2);

cljs_node_io.core.aspit.cljs$lang$applyTo = (function (seq39747){
var G__39748 = cljs.core.first.call(null,seq39747);
var seq39747__$1 = cljs.core.next.call(null,seq39747);
var G__39749 = cljs.core.first.call(null,seq39747__$1);
var seq39747__$2 = cljs.core.next.call(null,seq39747__$1);
return cljs_node_io.core.aspit.cljs$core$IFn$_invoke$arity$variadic(G__39748,G__39749,seq39747__$2);
});

/**
 * taken from clojurescript/examples/nodels.cljs
 */
cljs_node_io.core.file_seq = (function cljs_node_io$core$file_seq(dir){
return cljs.core.tree_seq.call(null,(function (f){
return cljs_node_io.core.file.call(null,f).isDirectory();
}),(function (d){
return cljs.core.map.call(null,(function (p1__39753_SHARP_){
return cljs_node_io.core.path.join(d,p1__39753_SHARP_);
}),cljs_node_io.core.file.call(null,d).list());
}),dir);
});
/**
 * A tree seq on the xml elements as per xml/parse
 */
cljs_node_io.core.xml_seq = (function cljs_node_io$core$xml_seq(root){
return cljs.core.tree_seq.call(null,cljs.core.complement.call(null,cljs.core.string_QMARK_),cljs.core.comp.call(null,cljs.core.seq,new cljs.core.Keyword(null,"content","content",15833224)),root);
});
/**
 * Given the same arg(s) as for file, creates all parent directories of
 * the file they represent.
 * @return {!boolean}
 */
cljs_node_io.core.make_parents = (function cljs_node_io$core$make_parents(var_args){
var args__10212__auto__ = [];
var len__10205__auto___39756 = arguments.length;
var i__10206__auto___39757 = (0);
while(true){
if((i__10206__auto___39757 < len__10205__auto___39756)){
args__10212__auto__.push((arguments[i__10206__auto___39757]));

var G__39758 = (i__10206__auto___39757 + (1));
i__10206__auto___39757 = G__39758;
continue;
} else {
}
break;
}

var argseq__10213__auto__ = ((((1) < args__10212__auto__.length))?(new cljs.core.IndexedSeq(args__10212__auto__.slice((1)),(0),null)):null);
return cljs_node_io.core.make_parents.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10213__auto__);
});

cljs_node_io.core.make_parents.cljs$core$IFn$_invoke$arity$variadic = (function (f,more){
var temp__5457__auto__ = cljs.core.apply.call(null,cljs_node_io.core.file,f,more).getParentFile();
if(cljs.core.truth_(temp__5457__auto__)){
var parent = temp__5457__auto__;
return parent.mkdirs();
} else {
return null;
}
});

cljs_node_io.core.make_parents.cljs$lang$maxFixedArity = (1);

cljs_node_io.core.make_parents.cljs$lang$applyTo = (function (seq39754){
var G__39755 = cljs.core.first.call(null,seq39754);
var seq39754__$1 = cljs.core.next.call(null,seq39754);
return cljs_node_io.core.make_parents.cljs$core$IFn$_invoke$arity$variadic(G__39755,seq39754__$1);
});

/**
 * @param {*} obj object to test
 * @return {!boolean} is object an input-stream?
 */
cljs_node_io.core.input_stream_QMARK_ = (function cljs_node_io$core$input_stream_QMARK_(obj){
if(!((obj == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs_node_io$protocols$IInputStream$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * @param {*} obj object to test
 * @return {!boolean} is object an input-stream?
 */
cljs_node_io.core.output_stream_QMARK_ = (function cljs_node_io$core$output_stream_QMARK_(obj){
if(!((obj == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs_node_io$protocols$IOutputStream$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * @param {*} obj The object to test
 */
cljs_node_io.core.stream_type = (function cljs_node_io$core$stream_type(obj){
if(cljs_node_io.core.input_stream_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"InputStream","InputStream",1853664890);
} else {
if(cljs_node_io.core.output_stream_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"OutputStream","OutputStream",-1389658127);
} else {
return null;
}
}
});
/**
 * @param {*} o
 * @return {!boolean}
 */
cljs_node_io.core.rFile_QMARK_ = (function cljs_node_io$core$rFile_QMARK_(o){
if(!((o == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs_node_io$protocols$IFile$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
if(typeof cljs_node_io.core.do_copy !== 'undefined'){
} else {
/**
 * Internal helper for copy
 */
cljs_node_io.core.do_copy = (function (){var method_table__9981__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9982__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9983__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9984__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9985__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs-node-io.core","do-copy"),((function (method_table__9981__auto__,prefer_table__9982__auto__,method_cache__9983__auto__,cached_hierarchy__9984__auto__,hierarchy__9985__auto__){
return (function (input,output,opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__8926__auto__ = cljs_node_io.core.stream_type.call(null,input);
if(cljs.core.truth_(or__8926__auto__)){
return or__8926__auto__;
} else {
var or__8926__auto____$1 = (cljs.core.truth_(cljs_node_io.core.rFile_QMARK_.call(null,input))?new cljs.core.Keyword(null,"File","File",-1707525042):null);
if(cljs.core.truth_(or__8926__auto____$1)){
return or__8926__auto____$1;
} else {
return cljs.core.type.call(null,input);
}
}
})(),(function (){var or__8926__auto__ = cljs_node_io.core.stream_type.call(null,output);
if(cljs.core.truth_(or__8926__auto__)){
return or__8926__auto__;
} else {
var or__8926__auto____$1 = (cljs.core.truth_(cljs_node_io.core.rFile_QMARK_.call(null,output))?new cljs.core.Keyword(null,"File","File",-1707525042):null);
if(cljs.core.truth_(or__8926__auto____$1)){
return or__8926__auto____$1;
} else {
return cljs.core.type.call(null,output);
}
}
})()], null);
});})(method_table__9981__auto__,prefer_table__9982__auto__,method_cache__9983__auto__,cached_hierarchy__9984__auto__,hierarchy__9985__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9985__auto__,method_table__9981__auto__,prefer_table__9982__auto__,method_cache__9983__auto__,cached_hierarchy__9984__auto__));
})();
}
cljs.core._add_method.call(null,cljs_node_io.core.do_copy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"InputStream","InputStream",1853664890),new cljs.core.Keyword(null,"OutputStream","OutputStream",-1389658127)], null),(function (input,output,_){
var c = cljs.core.async.promise_chan.call(null);
output.on("finish",((function (c){
return (function (){
return cljs.core.async.close_BANG_.call(null,c);
});})(c))
);

input.pipe(output);

return c;
}));
cljs.core._add_method.call(null,cljs_node_io.core.do_copy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"File","File",-1707525042),new cljs.core.Keyword(null,"File","File",-1707525042)], null),(function (input,output,opts){
var in$ = cljs_node_io.streams.FileInputStream.call(null,input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),""], null));
var out = cljs_node_io.streams.FileOutputStream.call(null,output,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),""], null),opts));
return cljs_node_io.core.do_copy.call(null,in$,out,opts);
}));
cljs.core._add_method.call(null,cljs_node_io.core.do_copy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"File","File",-1707525042),new cljs.core.Keyword(null,"OutputStream","OutputStream",-1389658127)], null),(function (input,output,opts){
var in$ = cljs_node_io.streams.FileInputStream.call(null,input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),""], null));
return cljs_node_io.core.do_copy.call(null,in$,output,opts);
}));
cljs.core._add_method.call(null,cljs_node_io.core.do_copy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"InputStream","InputStream",1853664890),new cljs.core.Keyword(null,"File","File",-1707525042)], null),(function (input,output,opts){
var out = cljs_node_io.streams.FileOutputStream.call(null,output,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),""], null),opts));
return cljs_node_io.core.do_copy.call(null,input,out,opts);
}));
cljs.core._add_method.call(null,cljs_node_io.core.do_copy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Buffer,new cljs.core.Keyword(null,"OutputStream","OutputStream",-1389658127)], null),(function (input,output,opts){
return cljs_node_io.core.do_copy.call(null,cljs_node_io.streams.BufferReadStream.call(null,input,opts),output,null);
}));
cljs.core._add_method.call(null,cljs_node_io.core.do_copy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Buffer,new cljs.core.Keyword(null,"File","File",-1707525042)], null),(function (input,output,opts){
return cljs_node_io.core.do_copy.call(null,cljs_node_io.streams.BufferReadStream.call(null,input,opts),output,opts);
}));
/**
 * Copies input to output. Returns nil or throws.
 * Input may be an InputStream, File, Buffer, or string.
 * Output may be an String, OutputStream or File. 
 * Unlike JVM, strings are coerced to files. If you have a big string, use a buffer.    
 * By default no encoding ops occur, just read & written as binary. 
 * Options are passed to the output stream.
 *  :encoding = destination encoding to use
 *  ex: (copy 'foo.txt' 'bar.txt' :encoding 'utf8')
 */
cljs_node_io.core.copy = (function cljs_node_io$core$copy(var_args){
var args__10212__auto__ = [];
var len__10205__auto___39765 = arguments.length;
var i__10206__auto___39766 = (0);
while(true){
if((i__10206__auto___39766 < len__10205__auto___39765)){
args__10212__auto__.push((arguments[i__10206__auto___39766]));

var G__39767 = (i__10206__auto___39766 + (1));
i__10206__auto___39766 = G__39767;
continue;
} else {
}
break;
}

var argseq__10213__auto__ = ((((2) < args__10212__auto__.length))?(new cljs.core.IndexedSeq(args__10212__auto__.slice((2)),(0),null)):null);
return cljs_node_io.core.copy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10213__auto__);
});

cljs_node_io.core.copy.cljs$core$IFn$_invoke$arity$variadic = (function (input,output,opts){
var input__$1 = ((typeof input === 'string')?cljs_node_io.protocols.as_file.call(null,input):input);
var output__$1 = ((typeof output === 'string')?cljs_node_io.protocols.as_file.call(null,output):output);
return cljs_node_io.core.do_copy.call(null,input__$1,output__$1,(cljs.core.truth_(opts)?cljs.core.apply.call(null,cljs.core.hash_map,opts):null));
});

cljs_node_io.core.copy.cljs$lang$maxFixedArity = (2);

cljs_node_io.core.copy.cljs$lang$applyTo = (function (seq39762){
var G__39763 = cljs.core.first.call(null,seq39762);
var seq39762__$1 = cljs.core.next.call(null,seq39762);
var G__39764 = cljs.core.first.call(null,seq39762__$1);
var seq39762__$2 = cljs.core.next.call(null,seq39762__$1);
return cljs_node_io.core.copy.cljs$core$IFn$_invoke$arity$variadic(G__39763,G__39764,seq39762__$2);
});


//# sourceMappingURL=core.js.map
