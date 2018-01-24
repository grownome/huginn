// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('cljs.tools.reader.impl.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
cljs.tools.reader.impl.utils.char$ = (function cljs$tools$reader$impl$utils$char(x){
if((x == null)){
return null;
} else {
return cljs.core.char$.call(null,x);
}
});
cljs.tools.reader.impl.utils.ex_info_QMARK_ = (function cljs$tools$reader$impl$utils$ex_info_QMARK_(ex){
return (ex instanceof cljs.core.ExceptionInfo);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.tools.reader.impl.utils.ReaderConditional = (function (splicing_QMARK_,form,__meta,__extmap,__hash){
this.splicing_QMARK_ = splicing_QMARK_;
this.form = form;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31560__auto__,k__31561__auto__){
var self__ = this;
var this__31560__auto____$1 = this;
return this__31560__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__31561__auto__,null);
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31562__auto__,k35002,else__31563__auto__){
var self__ = this;
var this__31562__auto____$1 = this;
var G__35006 = k35002;
var G__35006__$1 = (((G__35006 instanceof cljs.core.Keyword))?G__35006.fqn:null);
switch (G__35006__$1) {
case "splicing?":
return self__.splicing_QMARK_;

break;
case "form":
return self__.form;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k35002,else__31563__auto__);

}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31574__auto__,writer__31575__auto__,opts__31576__auto__){
var self__ = this;
var this__31574__auto____$1 = this;
var pr_pair__31577__auto__ = ((function (this__31574__auto____$1){
return (function (keyval__31578__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31575__auto__,cljs.core.pr_writer,""," ","",opts__31576__auto__,keyval__31578__auto__);
});})(this__31574__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31575__auto__,pr_pair__31577__auto__,"#cljs.tools.reader.impl.utils.ReaderConditional{",", ","}",opts__31576__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35001){
var self__ = this;
var G__35001__$1 = this;
return (new cljs.core.RecordIter((0),G__35001__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),new cljs.core.Keyword(null,"form","form",-1624062471)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31558__auto__){
var self__ = this;
var this__31558__auto____$1 = this;
return self__.__meta;
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31555__auto__){
var self__ = this;
var this__31555__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31564__auto__){
var self__ = this;
var this__31564__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31556__auto__){
var self__ = this;
var this__31556__auto____$1 = this;
var h__31328__auto__ = self__.__hash;
if(!((h__31328__auto__ == null))){
return h__31328__auto__;
} else {
var h__31328__auto____$1 = ((function (h__31328__auto__,this__31556__auto____$1){
return (function (coll__31557__auto__){
return (-209062840 ^ cljs.core.hash_unordered_coll.call(null,coll__31557__auto__));
});})(h__31328__auto__,this__31556__auto____$1))
.call(null,this__31556__auto____$1);
self__.__hash = h__31328__auto____$1;

return h__31328__auto____$1;
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35003,other35004){
var self__ = this;
var this35003__$1 = this;
return (!((other35004 == null))) && ((this35003__$1.constructor === other35004.constructor)) && (cljs.core._EQ_.call(null,this35003__$1.splicing_QMARK_,other35004.splicing_QMARK_)) && (cljs.core._EQ_.call(null,this35003__$1.form,other35004.form)) && (cljs.core._EQ_.call(null,this35003__$1.__extmap,other35004.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31569__auto__,k__31570__auto__){
var self__ = this;
var this__31569__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),null,new cljs.core.Keyword(null,"form","form",-1624062471),null], null), null),k__31570__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31569__auto____$1),self__.__meta),k__31570__auto__);
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31570__auto__)),null));
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31567__auto__,k__31568__auto__,G__35001){
var self__ = this;
var this__31567__auto____$1 = this;
var pred__35007 = cljs.core.keyword_identical_QMARK_;
var expr__35008 = k__31568__auto__;
if(cljs.core.truth_(pred__35007.call(null,new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),expr__35008))){
return (new cljs.tools.reader.impl.utils.ReaderConditional(G__35001,self__.form,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__35007.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),expr__35008))){
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,G__35001,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31568__auto__,G__35001),null));
}
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31572__auto__){
var self__ = this;
var this__31572__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31559__auto__,G__35001){
var self__ = this;
var this__31559__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,G__35001,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31565__auto__,entry__31566__auto__){
var self__ = this;
var this__31565__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31566__auto__)){
return this__31565__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__31566__auto__,(0)),cljs.core._nth.call(null,entry__31566__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31565__auto____$1,entry__31566__auto__);
}
});

cljs.tools.reader.impl.utils.ReaderConditional.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"splicing?","splicing?",1211935161,null),new cljs.core.Symbol(null,"form","form",16469056,null)], null);
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$type = true;

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrSeq = (function (this__31598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.tools.reader.impl.utils/ReaderConditional");
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrWriter = (function (this__31598__auto__,writer__31599__auto__){
return cljs.core._write.call(null,writer__31599__auto__,"cljs.tools.reader.impl.utils/ReaderConditional");
});

cljs.tools.reader.impl.utils.__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$__GT_ReaderConditional(splicing_QMARK_,form){
return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});

cljs.tools.reader.impl.utils.map__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$map__GT_ReaderConditional(G__35005){
return (new cljs.tools.reader.impl.utils.ReaderConditional(new cljs.core.Keyword(null,"splicing?","splicing?",-428596366).cljs$core$IFn$_invoke$arity$1(G__35005),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(G__35005),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__35005,new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),new cljs.core.Keyword(null,"form","form",-1624062471))),null));
});

/**
 * Return true if the value is the data representation of a reader conditional
 */
cljs.tools.reader.impl.utils.reader_conditional_QMARK_ = (function cljs$tools$reader$impl$utils$reader_conditional_QMARK_(value){
return (value instanceof cljs.tools.reader.impl.utils.ReaderConditional);
});
/**
 * Construct a data representation of a reader conditional.
 *   If true, splicing? indicates read-cond-splicing.
 */
cljs.tools.reader.impl.utils.reader_conditional = (function cljs$tools$reader$impl$utils$reader_conditional(form,splicing_QMARK_){
return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
cljs.core._write.call(null,writer,["#?",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"splicing?","splicing?",-428596366).cljs$core$IFn$_invoke$arity$1(coll__$1))?"@":null))].join(''));

return cljs.core.pr_writer.call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(coll__$1),writer,opts);
});
cljs.tools.reader.impl.utils.ws_rx = /[\s]/;
/**
 * Checks whether a given character is whitespace
 */
cljs.tools.reader.impl.utils.whitespace_QMARK_ = (function cljs$tools$reader$impl$utils$whitespace_QMARK_(ch){
if((ch == null)){
return null;
} else {
if((ch === ",")){
return true;
} else {
return cljs.tools.reader.impl.utils.ws_rx.test(ch);
}
}
});
/**
 * Checks whether a given character is numeric
 */
cljs.tools.reader.impl.utils.numeric_QMARK_ = (function cljs$tools$reader$impl$utils$numeric_QMARK_(ch){
if((ch == null)){
return null;
} else {
return goog.string.isNumeric(ch);
}
});
/**
 * Checks whether the character is a newline
 */
cljs.tools.reader.impl.utils.newline_QMARK_ = (function cljs$tools$reader$impl$utils$newline_QMARK_(c){
return (("\n" === c)) || (("\n" === c)) || ((c == null));
});
/**
 * Resolves syntactical sugar in metadata
 */
cljs.tools.reader.impl.utils.desugar_meta = (function cljs$tools$reader$impl$utils$desugar_meta(f){
if((f instanceof cljs.core.Keyword)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([f,true]);
} else {
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
return f;

}
}
}
});
cljs.tools.reader.impl.utils.last_id = cljs.core.atom.call(null,(0));
cljs.tools.reader.impl.utils.next_id = (function cljs$tools$reader$impl$utils$next_id(){
return cljs.core.swap_BANG_.call(null,cljs.tools.reader.impl.utils.last_id,cljs.core.inc);
});
cljs.tools.reader.impl.utils.namespace_keys = (function cljs$tools$reader$impl$utils$namespace_keys(ns,keys){
var iter__31754__auto__ = (function cljs$tools$reader$impl$utils$namespace_keys_$_iter__35011(s__35012){
return (new cljs.core.LazySeq(null,(function (){
var s__35012__$1 = s__35012;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__35012__$1);
if(temp__5457__auto__){
var s__35012__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35012__$2)){
var c__31752__auto__ = cljs.core.chunk_first.call(null,s__35012__$2);
var size__31753__auto__ = cljs.core.count.call(null,c__31752__auto__);
var b__35014 = cljs.core.chunk_buffer.call(null,size__31753__auto__);
if((function (){var i__35013 = (0);
while(true){
if((i__35013 < size__31753__auto__)){
var key = cljs.core._nth.call(null,c__31752__auto__,i__35013);
cljs.core.chunk_append.call(null,b__35014,((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword)))?(function (){var vec__35015 = cljs.core.juxt.call(null,cljs.core.namespace,cljs.core.name).call(null,key);
var key_ns = cljs.core.nth.call(null,vec__35015,(0),null);
var key_name = cljs.core.nth.call(null,vec__35015,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return __GT_key.call(null,ns,key_name);
} else {
if(cljs.core._EQ_.call(null,"_",key_ns)){
return __GT_key.call(null,key_name);
} else {
return key;

}
}
})():key));

var G__35021 = (i__35013 + (1));
i__35013 = G__35021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35014),cljs$tools$reader$impl$utils$namespace_keys_$_iter__35011.call(null,cljs.core.chunk_rest.call(null,s__35012__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35014),null);
}
} else {
var key = cljs.core.first.call(null,s__35012__$2);
return cljs.core.cons.call(null,((((key instanceof cljs.core.Symbol)) || ((key instanceof cljs.core.Keyword)))?(function (){var vec__35018 = cljs.core.juxt.call(null,cljs.core.namespace,cljs.core.name).call(null,key);
var key_ns = cljs.core.nth.call(null,vec__35018,(0),null);
var key_name = cljs.core.nth.call(null,vec__35018,(1),null);
var __GT_key = (((key instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.keyword);
if((key_ns == null)){
return __GT_key.call(null,ns,key_name);
} else {
if(cljs.core._EQ_.call(null,"_",key_ns)){
return __GT_key.call(null,key_name);
} else {
return key;

}
}
})():key),cljs$tools$reader$impl$utils$namespace_keys_$_iter__35011.call(null,cljs.core.rest.call(null,s__35012__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31754__auto__.call(null,keys);
});
cljs.tools.reader.impl.utils.second_SINGLEQUOTE_ = (function cljs$tools$reader$impl$utils$second_SINGLEQUOTE_(p__35022){
var vec__35023 = p__35022;
var a = cljs.core.nth.call(null,vec__35023,(0),null);
var b = cljs.core.nth.call(null,vec__35023,(1),null);
if(cljs.core.truth_(a)){
return null;
} else {
return b;
}
});

//# sourceMappingURL=utils.js.map
