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
}catch (e29575){if((e29575 instanceof Error)){
var e = e29575;
return false;
} else {
throw e29575;

}
}});
/**
 * This is needed to mock the java.io.File constructor.
 * The java File constructor is polymorphic and accepts one or two args:
 * (Uri), (pathstring), (parentstring, childstring), (File, childstring)
 * @return {!string}
 */
cljs_node_io.core.filepath = (function cljs_node_io$core$filepath(var_args){
var G__29577 = arguments.length;
switch (G__29577) {
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
var pred__29578 = cljs.core._EQ_;
var expr__29579 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.type.call(null,a),cljs.core.type.call(null,b)], null);
if(cljs.core.truth_(pred__29578.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.Uri,null], null),expr__29579))){
return a.getPath();
} else {
if(cljs.core.truth_(pred__29578.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String,null], null),expr__29579))){
return a;
} else {
if(cljs.core.truth_(pred__29578.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String,String], null),expr__29579))){
return cljs_node_io.core.path.join.call(null,a,b);
} else {
if(cljs.core.truth_(pred__29578.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_node_io.file.File,String], null),expr__29579))){
return cljs_node_io.core.path.join.call(null,a.getPath(),b);
} else {
if(cljs.core.truth_(pred__29578.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__29579))){
throw (new TypeError(["Unrecognized path configuration passed to File constructor.","\nYou passed ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,a))," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,b)),"\nYou must pass a [string], [uri], [string string], or [file string]."].join('')));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29579)].join('')));
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
}catch (e29582){if((e29582 instanceof Error)){
var e = e29582;
return cljs_node_io.protocols.make_input_stream.call(null,(new cljs_node_io.file.File(x)),opts);
} else {
throw e29582;

}
}}));

goog.object.set(cljs_node_io.protocols.make_output_stream,"string",(function (x,opts){
try{return cljs_node_io.protocols.make_output_stream.call(null,(new goog.Uri(x)),opts);
}catch (e29583){if((e29583 instanceof Error)){
var err = e29583;
return cljs_node_io.protocols.make_output_stream.call(null,(new cljs_node_io.file.File(x)),opts);
} else {
throw e29583;

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
var G__29588 = arguments.length;
switch (G__29588) {
case 1:
return cljs_node_io.core.file.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_node_io.core.file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__22503__auto__ = [];
var len__22480__auto___29590 = arguments.length;
var i__22481__auto___29591 = (0);
while(true){
if((i__22481__auto___29591 < len__22480__auto___29590)){
args_arr__22503__auto__.push((arguments[i__22481__auto___29591]));

var G__29592 = (i__22481__auto___29591 + (1));
i__22481__auto___29591 = G__29592;
continue;
} else {
}
break;
}

var argseq__22504__auto__ = (new cljs.core.IndexedSeq(args_arr__22503__auto__.slice((2)),(0),null));
return cljs_node_io.core.file.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22504__auto__);

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

cljs_node_io.core.file.cljs$lang$applyTo = (function (seq29585){
var G__29586 = cljs.core.first.call(null,seq29585);
var seq29585__$1 = cljs.core.next.call(null,seq29585);
var G__29587 = cljs.core.first.call(null,seq29585__$1);
var seq29585__$2 = cljs.core.next.call(null,seq29585__$1);
return cljs_node_io.core.file.cljs$core$IFn$_invoke$arity$variadic(G__29586,G__29587,seq29585__$2);
});

cljs_node_io.core.file.cljs$lang$maxFixedArity = (2);

/**
 * Delete file f. Raise an exception if it fails unless silently is true.
 * @return {!boolean}
 */
cljs_node_io.core.delete_file = (function cljs_node_io$core$delete_file(var_args){
var args__22487__auto__ = [];
var len__22480__auto___29599 = arguments.length;
var i__22481__auto___29600 = (0);
while(true){
if((i__22481__auto___29600 < len__22480__auto___29599)){
args__22487__auto__.push((arguments[i__22481__auto___29600]));

var G__29601 = (i__22481__auto___29600 + (1));
i__22481__auto___29600 = G__29601;
continue;
} else {
}
break;
}

var argseq__22488__auto__ = ((((1) < args__22487__auto__.length))?(new cljs.core.IndexedSeq(args__22487__auto__.slice((1)),(0),null)):null);
return cljs_node_io.core.delete_file.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22488__auto__);
});

cljs_node_io.core.delete_file.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__29595){
var vec__29596 = p__29595;
var silently = cljs.core.nth.call(null,vec__29596,(0),null);
var or__21201__auto__ = cljs_node_io.core.file.call(null,f).delete();
if(cljs.core.truth_(or__21201__auto__)){
return or__21201__auto__;
} else {
var or__21201__auto____$1 = silently;
if(cljs.core.truth_(or__21201__auto____$1)){
return or__21201__auto____$1;
} else {
throw (new Error(["Couldn't delete ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('')));
}
}
});

cljs_node_io.core.delete_file.cljs$lang$maxFixedArity = (1);

cljs_node_io.core.delete_file.cljs$lang$applyTo = (function (seq29593){
var G__29594 = cljs.core.first.call(null,seq29593);
var seq29593__$1 = cljs.core.next.call(null,seq29593);
return cljs_node_io.core.delete_file.cljs$core$IFn$_invoke$arity$variadic(G__29594,seq29593__$1);
});

/**
 * For all streams it defers back to the stream. Note: stream objects are event driven.
 *   + buffers => BufferReadStream
 *   + files + strings => FileInputStream
 *   + goog.Uri's are treated as local files. No other protocols are supported at this time.
 * @return {!IInputStream}
 */
cljs_node_io.core.reader = (function cljs_node_io$core$reader(var_args){
var args__22487__auto__ = [];
var len__22480__auto___29604 = arguments.length;
var i__22481__auto___29605 = (0);
while(true){
if((i__22481__auto___29605 < len__22480__auto___29604)){
args__22487__auto__.push((arguments[i__22481__auto___29605]));

var G__29606 = (i__22481__auto___29605 + (1));
i__22481__auto___29605 = G__29606;
continue;
} else {
}
break;
}

var argseq__22488__auto__ = ((((1) < args__22487__auto__.length))?(new cljs.core.IndexedSeq(args__22487__auto__.slice((1)),(0),null)):null);
return cljs_node_io.core.reader.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22488__auto__);
});

cljs_node_io.core.reader.cljs$core$IFn$_invoke$arity$variadic = (function (x,opts){
return cljs_node_io.protocols.make_reader.call(null,x,(cljs.core.truth_(opts)?cljs.core.apply.call(null,cljs.core.hash_map,opts):null));
});

cljs_node_io.core.reader.cljs$lang$maxFixedArity = (1);

cljs_node_io.core.reader.cljs$lang$applyTo = (function (seq29602){
var G__29603 = cljs.core.first.call(null,seq29602);
var seq29602__$1 = cljs.core.next.call(null,seq29602);
return cljs_node_io.core.reader.cljs$core$IFn$_invoke$arity$variadic(G__29603,seq29602__$1);
});

/**
 * For all streams it defers back to the stream. Note: stream objects are event driven.
 *  + Files & Strings become FileOutputStreams.
 *  + goog.Uri's are treated as local files. No other protocols are supported at this time.
 * @return {!IOutputStream}
 */
cljs_node_io.core.writer = (function cljs_node_io$core$writer(var_args){
var args__22487__auto__ = [];
var len__22480__auto___29609 = arguments.length;
var i__22481__auto___29610 = (0);
while(true){
if((i__22481__auto___29610 < len__22480__auto___29609)){
args__22487__auto__.push((arguments[i__22481__auto___29610]));

var G__29611 = (i__22481__auto___29610 + (1));
i__22481__auto___29610 = G__29611;
continue;
} else {
}
break;
}

var argseq__22488__auto__ = ((((1) < args__22487__auto__.length))?(new cljs.core.IndexedSeq(args__22487__auto__.slice((1)),(0),null)):null);
return cljs_node_io.core.writer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22488__auto__);
});

cljs_node_io.core.writer.cljs$core$IFn$_invoke$arity$variadic = (function (x,opts){
return cljs_node_io.protocols.make_writer.call(null,x,(cljs.core.truth_(opts)?cljs.core.apply.call(null,cljs.core.hash_map,opts):null));
});

cljs_node_io.core.writer.cljs$lang$maxFixedArity = (1);

cljs_node_io.core.writer.cljs$lang$applyTo = (function (seq29607){
var G__29608 = cljs.core.first.call(null,seq29607);
var seq29607__$1 = cljs.core.next.call(null,seq29607);
return cljs_node_io.core.writer.cljs$core$IFn$_invoke$arity$variadic(G__29608,seq29607__$1);
});

/**
 * For all streams it defers back to the stream. Note: stream objects are event driven.
 *  + buffers => BufferReadStream
 *  + files + strings => FileInputStream
 *  + goog.Uri's are treated as local files. No other protocols are supported at this time.
 * @return {!IInputStream}
 */
cljs_node_io.core.input_stream = (function cljs_node_io$core$input_stream(var_args){
var args__22487__auto__ = [];
var len__22480__auto___29614 = arguments.length;
var i__22481__auto___29615 = (0);
while(true){
if((i__22481__auto___29615 < len__22480__auto___29614)){
args__22487__auto__.push((arguments[i__22481__auto___29615]));

var G__29616 = (i__22481__auto___29615 + (1));
i__22481__auto___29615 = G__29616;
continue;
} else {
}
break;
}

var argseq__22488__auto__ = ((((1) < args__22487__auto__.length))?(new cljs.core.IndexedSeq(args__22487__auto__.slice((1)),(0),null)):null);
return cljs_node_io.core.input_stream.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22488__auto__);
});

cljs_node_io.core.input_stream.cljs$core$IFn$_invoke$arity$variadic = (function (x,opts){
return cljs_node_io.protocols.make_input_stream.call(null,x,(cljs.core.truth_(opts)?cljs.core.apply.call(null,cljs.core.hash_map,opts):null));
});

cljs_node_io.core.input_stream.cljs$lang$maxFixedArity = (1);

cljs_node_io.core.input_stream.cljs$lang$applyTo = (function (seq29612){
var G__29613 = cljs.core.first.call(null,seq29612);
var seq29612__$1 = cljs.core.next.call(null,seq29612);
return cljs_node_io.core.input_stream.cljs$core$IFn$_invoke$arity$variadic(G__29613,seq29612__$1);
});

/**
 * For all streams it defers back to the stream. Note: stream objects are event driven.
 * + Files & Strings become FileOutputStreams.
 * + goog.Uri's are treated as local files. No other protocols are supported at
 * this time.
 * @return {!IOutputStream}
 */
cljs_node_io.core.output_stream = (function cljs_node_io$core$output_stream(var_args){
var args__22487__auto__ = [];
var len__22480__auto___29619 = arguments.length;
var i__22481__auto___29620 = (0);
while(true){
if((i__22481__auto___29620 < len__22480__auto___29619)){
args__22487__auto__.push((arguments[i__22481__auto___29620]));

var G__29621 = (i__22481__auto___29620 + (1));
i__22481__auto___29620 = G__29621;
continue;
} else {
}
break;
}

var argseq__22488__auto__ = ((((1) < args__22487__auto__.length))?(new cljs.core.IndexedSeq(args__22487__auto__.slice((1)),(0),null)):null);
return cljs_node_io.core.output_stream.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22488__auto__);
});

cljs_node_io.core.output_stream.cljs$core$IFn$_invoke$arity$variadic = (function (x,opts){
return cljs_node_io.protocols.make_output_stream.call(null,x,(cljs.core.truth_(opts)?cljs.core.apply.call(null,cljs.core.hash_map,opts):null));
});

cljs_node_io.core.output_stream.cljs$lang$maxFixedArity = (1);

cljs_node_io.core.output_stream.cljs$lang$applyTo = (function (seq29617){
var G__29618 = cljs.core.first.call(null,seq29617);
var seq29617__$1 = cljs.core.next.call(null,seq29617);
return cljs_node_io.core.output_stream.cljs$core$IFn$_invoke$arity$variadic(G__29618,seq29617__$1);
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
var args__22487__auto__ = [];
var len__22480__auto___29624 = arguments.length;
var i__22481__auto___29625 = (0);
while(true){
if((i__22481__auto___29625 < len__22480__auto___29624)){
args__22487__auto__.push((arguments[i__22481__auto___29625]));

var G__29626 = (i__22481__auto___29625 + (1));
i__22481__auto___29625 = G__29626;
continue;
} else {
}
break;
}

var argseq__22488__auto__ = ((((1) < args__22487__auto__.length))?(new cljs.core.IndexedSeq(args__22487__auto__.slice((1)),(0),null)):null);
return cljs_node_io.core.slurp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22488__auto__);
});

cljs_node_io.core.slurp.cljs$core$IFn$_invoke$arity$variadic = (function (p,opts){
var opts__$1 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var f = cljs_node_io.protocols.as_file.call(null,p);
return f.read((function (){var or__21201__auto__ = new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(or__21201__auto__)){
return or__21201__auto__;
} else {
return "utf8";
}
})());
});

cljs_node_io.core.slurp.cljs$lang$maxFixedArity = (1);

cljs_node_io.core.slurp.cljs$lang$applyTo = (function (seq29622){
var G__29623 = cljs.core.first.call(null,seq29622);
var seq29622__$1 = cljs.core.next.call(null,seq29622);
return cljs_node_io.core.slurp.cljs$core$IFn$_invoke$arity$variadic(G__29623,seq29622__$1);
});

/**
 * @return {!Channel} a which will receive [?err ?data]
 */
cljs_node_io.core.aslurp = (function cljs_node_io$core$aslurp(var_args){
var args__22487__auto__ = [];
var len__22480__auto___29629 = arguments.length;
var i__22481__auto___29630 = (0);
while(true){
if((i__22481__auto___29630 < len__22480__auto___29629)){
args__22487__auto__.push((arguments[i__22481__auto___29630]));

var G__29631 = (i__22481__auto___29630 + (1));
i__22481__auto___29630 = G__29631;
continue;
} else {
}
break;
}

var argseq__22488__auto__ = ((((1) < args__22487__auto__.length))?(new cljs.core.IndexedSeq(args__22487__auto__.slice((1)),(0),null)):null);
return cljs_node_io.core.aslurp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22488__auto__);
});

cljs_node_io.core.aslurp.cljs$core$IFn$_invoke$arity$variadic = (function (p,opts){
var opts__$1 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var f = cljs_node_io.protocols.as_file.call(null,p);
return f.aread((function (){var or__21201__auto__ = new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(or__21201__auto__)){
return or__21201__auto__;
} else {
return "utf8";
}
})());
});

cljs_node_io.core.aslurp.cljs$lang$maxFixedArity = (1);

cljs_node_io.core.aslurp.cljs$lang$applyTo = (function (seq29627){
var G__29628 = cljs.core.first.call(null,seq29627);
var seq29627__$1 = cljs.core.next.call(null,seq29627);
return cljs_node_io.core.aslurp.cljs$core$IFn$_invoke$arity$variadic(G__29628,seq29627__$1);
});

/**
 * Writes content synchronously to file f.
 * :encoding {string} encoding to write the string. Ignored when content is a buffer
 * :append - {boolean} - if true add content to end of file
 * @return {nil} or throws
 */
cljs_node_io.core.spit = (function cljs_node_io$core$spit(var_args){
var args__22487__auto__ = [];
var len__22480__auto___29635 = arguments.length;
var i__22481__auto___29636 = (0);
while(true){
if((i__22481__auto___29636 < len__22480__auto___29635)){
args__22487__auto__.push((arguments[i__22481__auto___29636]));

var G__29637 = (i__22481__auto___29636 + (1));
i__22481__auto___29636 = G__29637;
continue;
} else {
}
break;
}

var argseq__22488__auto__ = ((((2) < args__22487__auto__.length))?(new cljs.core.IndexedSeq(args__22487__auto__.slice((2)),(0),null)):null);
return cljs_node_io.core.spit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22488__auto__);
});

cljs_node_io.core.spit.cljs$core$IFn$_invoke$arity$variadic = (function (p,content,options){
var opts = cljs.core.apply.call(null,cljs.core.hash_map,options);
var f = cljs_node_io.protocols.as_file.call(null,p);
return f.write([cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''),opts);
});

cljs_node_io.core.spit.cljs$lang$maxFixedArity = (2);

cljs_node_io.core.spit.cljs$lang$applyTo = (function (seq29632){
var G__29633 = cljs.core.first.call(null,seq29632);
var seq29632__$1 = cljs.core.next.call(null,seq29632);
var G__29634 = cljs.core.first.call(null,seq29632__$1);
var seq29632__$2 = cljs.core.next.call(null,seq29632__$1);
return cljs_node_io.core.spit.cljs$core$IFn$_invoke$arity$variadic(G__29633,G__29634,seq29632__$2);
});

/**
 * Async spit. Wait for result before writing again!
 * @return {!Channel} recieves [?err]
 */
cljs_node_io.core.aspit = (function cljs_node_io$core$aspit(var_args){
var args__22487__auto__ = [];
var len__22480__auto___29641 = arguments.length;
var i__22481__auto___29642 = (0);
while(true){
if((i__22481__auto___29642 < len__22480__auto___29641)){
args__22487__auto__.push((arguments[i__22481__auto___29642]));

var G__29643 = (i__22481__auto___29642 + (1));
i__22481__auto___29642 = G__29643;
continue;
} else {
}
break;
}

var argseq__22488__auto__ = ((((2) < args__22487__auto__.length))?(new cljs.core.IndexedSeq(args__22487__auto__.slice((2)),(0),null)):null);
return cljs_node_io.core.aspit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22488__auto__);
});

cljs_node_io.core.aspit.cljs$core$IFn$_invoke$arity$variadic = (function (p,content,options){
var opts = cljs.core.apply.call(null,cljs.core.hash_map,options);
var f = cljs_node_io.protocols.as_file.call(null,p);
return f.awrite([cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''),opts);
});

cljs_node_io.core.aspit.cljs$lang$maxFixedArity = (2);

cljs_node_io.core.aspit.cljs$lang$applyTo = (function (seq29638){
var G__29639 = cljs.core.first.call(null,seq29638);
var seq29638__$1 = cljs.core.next.call(null,seq29638);
var G__29640 = cljs.core.first.call(null,seq29638__$1);
var seq29638__$2 = cljs.core.next.call(null,seq29638__$1);
return cljs_node_io.core.aspit.cljs$core$IFn$_invoke$arity$variadic(G__29639,G__29640,seq29638__$2);
});

/**
 * taken from clojurescript/examples/nodels.cljs
 */
cljs_node_io.core.file_seq = (function cljs_node_io$core$file_seq(dir){
return cljs.core.tree_seq.call(null,(function (f){
return cljs_node_io.core.file.call(null,f).isDirectory();
}),(function (d){
return cljs.core.map.call(null,(function (p1__29644_SHARP_){
return cljs_node_io.core.path.join(d,p1__29644_SHARP_);
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
var args__22487__auto__ = [];
var len__22480__auto___29647 = arguments.length;
var i__22481__auto___29648 = (0);
while(true){
if((i__22481__auto___29648 < len__22480__auto___29647)){
args__22487__auto__.push((arguments[i__22481__auto___29648]));

var G__29649 = (i__22481__auto___29648 + (1));
i__22481__auto___29648 = G__29649;
continue;
} else {
}
break;
}

var argseq__22488__auto__ = ((((1) < args__22487__auto__.length))?(new cljs.core.IndexedSeq(args__22487__auto__.slice((1)),(0),null)):null);
return cljs_node_io.core.make_parents.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22488__auto__);
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

cljs_node_io.core.make_parents.cljs$lang$applyTo = (function (seq29645){
var G__29646 = cljs.core.first.call(null,seq29645);
var seq29645__$1 = cljs.core.next.call(null,seq29645);
return cljs_node_io.core.make_parents.cljs$core$IFn$_invoke$arity$variadic(G__29646,seq29645__$1);
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
cljs_node_io.core.do_copy = (function (){var method_table__22256__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__22257__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__22258__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__22259__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__22260__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs-node-io.core","do-copy"),((function (method_table__22256__auto__,prefer_table__22257__auto__,method_cache__22258__auto__,cached_hierarchy__22259__auto__,hierarchy__22260__auto__){
return (function (input,output,opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__21201__auto__ = cljs_node_io.core.stream_type.call(null,input);
if(cljs.core.truth_(or__21201__auto__)){
return or__21201__auto__;
} else {
var or__21201__auto____$1 = (cljs.core.truth_(cljs_node_io.core.rFile_QMARK_.call(null,input))?new cljs.core.Keyword(null,"File","File",-1707525042):null);
if(cljs.core.truth_(or__21201__auto____$1)){
return or__21201__auto____$1;
} else {
return cljs.core.type.call(null,input);
}
}
})(),(function (){var or__21201__auto__ = cljs_node_io.core.stream_type.call(null,output);
if(cljs.core.truth_(or__21201__auto__)){
return or__21201__auto__;
} else {
var or__21201__auto____$1 = (cljs.core.truth_(cljs_node_io.core.rFile_QMARK_.call(null,output))?new cljs.core.Keyword(null,"File","File",-1707525042):null);
if(cljs.core.truth_(or__21201__auto____$1)){
return or__21201__auto____$1;
} else {
return cljs.core.type.call(null,output);
}
}
})()], null);
});})(method_table__22256__auto__,prefer_table__22257__auto__,method_cache__22258__auto__,cached_hierarchy__22259__auto__,hierarchy__22260__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__22260__auto__,method_table__22256__auto__,prefer_table__22257__auto__,method_cache__22258__auto__,cached_hierarchy__22259__auto__));
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
var args__22487__auto__ = [];
var len__22480__auto___29656 = arguments.length;
var i__22481__auto___29657 = (0);
while(true){
if((i__22481__auto___29657 < len__22480__auto___29656)){
args__22487__auto__.push((arguments[i__22481__auto___29657]));

var G__29658 = (i__22481__auto___29657 + (1));
i__22481__auto___29657 = G__29658;
continue;
} else {
}
break;
}

var argseq__22488__auto__ = ((((2) < args__22487__auto__.length))?(new cljs.core.IndexedSeq(args__22487__auto__.slice((2)),(0),null)):null);
return cljs_node_io.core.copy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22488__auto__);
});

cljs_node_io.core.copy.cljs$core$IFn$_invoke$arity$variadic = (function (input,output,opts){
var input__$1 = ((typeof input === 'string')?cljs_node_io.protocols.as_file.call(null,input):input);
var output__$1 = ((typeof output === 'string')?cljs_node_io.protocols.as_file.call(null,output):output);
return cljs_node_io.core.do_copy.call(null,input__$1,output__$1,(cljs.core.truth_(opts)?cljs.core.apply.call(null,cljs.core.hash_map,opts):null));
});

cljs_node_io.core.copy.cljs$lang$maxFixedArity = (2);

cljs_node_io.core.copy.cljs$lang$applyTo = (function (seq29653){
var G__29654 = cljs.core.first.call(null,seq29653);
var seq29653__$1 = cljs.core.next.call(null,seq29653);
var G__29655 = cljs.core.first.call(null,seq29653__$1);
var seq29653__$2 = cljs.core.next.call(null,seq29653__$1);
return cljs_node_io.core.copy.cljs$core$IFn$_invoke$arity$variadic(G__29654,G__29655,seq29653__$2);
});


//# sourceMappingURL=core.js.map
