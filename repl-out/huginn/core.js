// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('huginn.core');
goog.require('cljs.core');
goog.require('huginn.config');
goog.require('huginn.mqtt');
nodejs.enable_util_print_BANG_();
huginn.core._main = (function huginn$core$_main(){
cljs.core.println.call(null,"starting huginn");

return (
huginn.core.c = huginn.mqtt.init_client.call(null,huginn.config.default_options))
;
});
