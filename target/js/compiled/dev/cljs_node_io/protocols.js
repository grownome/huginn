// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs_node_io.protocols');
goog.require('cljs.core');

/**
 * Coerce between various 'resource-namish' things.
 * @interface
 */
cljs_node_io.protocols.Coercions = function(){};

/**
 * Coerce argument to a file.
 */
cljs_node_io.protocols.as_file = (function cljs_node_io$protocols$as_file(x){
if((!((x == null))) && (!((x.cljs_node_io$protocols$Coercions$as_file$arity$1 == null)))){
return x.cljs_node_io$protocols$Coercions$as_file$arity$1(x);
} else {
var x__42145__auto__ = (((x == null))?null:x);
var m__42146__auto__ = (cljs_node_io.protocols.as_file[goog.typeOf(x__42145__auto__)]);
if(!((m__42146__auto__ == null))){
return m__42146__auto__.call(null,x);
} else {
var m__42146__auto____$1 = (cljs_node_io.protocols.as_file["_"]);
if(!((m__42146__auto____$1 == null))){
return m__42146__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"Coercions.as-file",x);
}
}
}
});

/**
 * Coerce argument to a URL.
 */
cljs_node_io.protocols.as_url = (function cljs_node_io$protocols$as_url(x){
if((!((x == null))) && (!((x.cljs_node_io$protocols$Coercions$as_url$arity$1 == null)))){
return x.cljs_node_io$protocols$Coercions$as_url$arity$1(x);
} else {
var x__42145__auto__ = (((x == null))?null:x);
var m__42146__auto__ = (cljs_node_io.protocols.as_url[goog.typeOf(x__42145__auto__)]);
if(!((m__42146__auto__ == null))){
return m__42146__auto__.call(null,x);
} else {
var m__42146__auto____$1 = (cljs_node_io.protocols.as_url["_"]);
if(!((m__42146__auto____$1 == null))){
return m__42146__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"Coercions.as-url",x);
}
}
}
});


/**
 * Factory functions that create various node I/O stream types, on top of anything that can
 * be unequivocally converted to the requested kind of stream.
 * Common options include
 *   :encoding  string name of encoding to use, e.g. "UTF-8".
 * Callers should generally prefer the higher level API provided by
 * reader, writer, input-stream, and output-stream.
 * @interface
 */
cljs_node_io.protocols.IOFactory = function(){};

/**
 * Defers back to the InputStream
 */
cljs_node_io.protocols.make_reader = (function cljs_node_io$protocols$make_reader(x,opts){
if((!((x == null))) && (!((x.cljs_node_io$protocols$IOFactory$make_reader$arity$2 == null)))){
return x.cljs_node_io$protocols$IOFactory$make_reader$arity$2(x,opts);
} else {
var x__42145__auto__ = (((x == null))?null:x);
var m__42146__auto__ = (cljs_node_io.protocols.make_reader[goog.typeOf(x__42145__auto__)]);
if(!((m__42146__auto__ == null))){
return m__42146__auto__.call(null,x,opts);
} else {
var m__42146__auto____$1 = (cljs_node_io.protocols.make_reader["_"]);
if(!((m__42146__auto____$1 == null))){
return m__42146__auto____$1.call(null,x,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IOFactory.make-reader",x);
}
}
}
});

/**
 * Defers back to the OutputStream
 */
cljs_node_io.protocols.make_writer = (function cljs_node_io$protocols$make_writer(x,opts){
if((!((x == null))) && (!((x.cljs_node_io$protocols$IOFactory$make_writer$arity$2 == null)))){
return x.cljs_node_io$protocols$IOFactory$make_writer$arity$2(x,opts);
} else {
var x__42145__auto__ = (((x == null))?null:x);
var m__42146__auto__ = (cljs_node_io.protocols.make_writer[goog.typeOf(x__42145__auto__)]);
if(!((m__42146__auto__ == null))){
return m__42146__auto__.call(null,x,opts);
} else {
var m__42146__auto____$1 = (cljs_node_io.protocols.make_writer["_"]);
if(!((m__42146__auto____$1 == null))){
return m__42146__auto____$1.call(null,x,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IOFactory.make-writer",x);
}
}
}
});

/**
 * Creates a buffered InputStream. See also IOFactory docs.
 */
cljs_node_io.protocols.make_input_stream = (function cljs_node_io$protocols$make_input_stream(x,opts){
if((!((x == null))) && (!((x.cljs_node_io$protocols$IOFactory$make_input_stream$arity$2 == null)))){
return x.cljs_node_io$protocols$IOFactory$make_input_stream$arity$2(x,opts);
} else {
var x__42145__auto__ = (((x == null))?null:x);
var m__42146__auto__ = (cljs_node_io.protocols.make_input_stream[goog.typeOf(x__42145__auto__)]);
if(!((m__42146__auto__ == null))){
return m__42146__auto__.call(null,x,opts);
} else {
var m__42146__auto____$1 = (cljs_node_io.protocols.make_input_stream["_"]);
if(!((m__42146__auto____$1 == null))){
return m__42146__auto____$1.call(null,x,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IOFactory.make-input-stream",x);
}
}
}
});

/**
 * Creates a buffered OutputStream. See also IOFactory docs.
 */
cljs_node_io.protocols.make_output_stream = (function cljs_node_io$protocols$make_output_stream(x,opts){
if((!((x == null))) && (!((x.cljs_node_io$protocols$IOFactory$make_output_stream$arity$2 == null)))){
return x.cljs_node_io$protocols$IOFactory$make_output_stream$arity$2(x,opts);
} else {
var x__42145__auto__ = (((x == null))?null:x);
var m__42146__auto__ = (cljs_node_io.protocols.make_output_stream[goog.typeOf(x__42145__auto__)]);
if(!((m__42146__auto__ == null))){
return m__42146__auto__.call(null,x,opts);
} else {
var m__42146__auto____$1 = (cljs_node_io.protocols.make_output_stream["_"]);
if(!((m__42146__auto____$1 == null))){
return m__42146__auto____$1.call(null,x,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IOFactory.make-output-stream",x);
}
}
}
});


/**
 * A marker protocol indicating a reified File
 * @interface
 */
cljs_node_io.protocols.IFile = function(){};


/**
 * A marker protocol indicating an input-stream
 * @interface
 */
cljs_node_io.protocols.IInputStream = function(){};


/**
 * A marker protocol indicating an output-stream
 * @interface
 */
cljs_node_io.protocols.IOutputStream = function(){};


/**
 * A marker protocol indicating an ChildProcess
 * @interface
 */
cljs_node_io.protocols.IChildProcess = function(){};


//# sourceMappingURL=protocols.js.map?rel=1516433043513
