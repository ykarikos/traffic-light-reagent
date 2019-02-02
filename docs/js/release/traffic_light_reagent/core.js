// Compiled by ClojureScript 1.10.516 {:static-fns true, :optimize-constants true}
goog.provide('traffic_light_reagent.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
traffic_light_reagent.core.opacity_cycle = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","0.2","0.2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","1","0.2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0.2","0.2","1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0.2","1","0.2"], null)], null);
traffic_light_reagent.core.third = (function traffic_light_reagent$core$third(coll){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,(2));
});
traffic_light_reagent.core.increment_cycle = (function traffic_light_reagent$core$increment_cycle(n){
return cljs.core.mod((n + (1)),(4));
});
traffic_light_reagent.core.traffic_light = (function traffic_light_reagent$core$traffic_light(){
var cycle_index = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return ((function (cycle_index){
return (function (){
setTimeout(((function (cycle_index){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cycle_index,traffic_light_reagent.core.increment_cycle);
});})(cycle_index))
,(1500));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$background,"#000",cljs.core.cst$kw$margin,"auto",cljs.core.cst$kw$width,"120px",cljs.core.cst$kw$padding,"10px",cljs.core.cst$kw$font_DASH_size,"215px",cljs.core.cst$kw$line_DASH_height,"100px",cljs.core.cst$kw$text_DASH_align,"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"#f00",cljs.core.cst$kw$opacity,cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(traffic_light_reagent.core.opacity_cycle,cljs.core.deref(cycle_index)))], null)], null),"\u25CF"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"#ff0",cljs.core.cst$kw$opacity,cljs.core.second(cljs.core.get.cljs$core$IFn$_invoke$arity$2(traffic_light_reagent.core.opacity_cycle,cljs.core.deref(cycle_index)))], null)], null),"\u25CF"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"#0c0",cljs.core.cst$kw$opacity,traffic_light_reagent.core.third(cljs.core.get.cljs$core$IFn$_invoke$arity$2(traffic_light_reagent.core.opacity_cycle,cljs.core.deref(cycle_index)))], null)], null),"\u25CF"], null)], null);
});
;})(cycle_index))
});
traffic_light_reagent.core.mount_root = (function traffic_light_reagent$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [traffic_light_reagent.core.traffic_light], null),document.getElementById("app"));
});
traffic_light_reagent.core.init_BANG_ = (function traffic_light_reagent$core$init_BANG_(){
return traffic_light_reagent.core.mount_root();
});
