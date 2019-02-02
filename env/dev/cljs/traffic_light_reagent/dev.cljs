(ns ^:figwheel-no-load traffic-light-reagent.dev
  (:require
    [traffic-light-reagent.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
