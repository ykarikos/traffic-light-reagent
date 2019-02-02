(ns traffic-light-reagent.core
    (:require
      [reagent.core :as r]))

;; -------------------------
;; Views

(defn home-page []
  [:div {:style {:background "#000"
                 :margin "auto"
                 :width "120px"
                 :padding "10px"
                 :font-size "215px"
                 :line-height "100px"
                 :text-align "center"}}
   [:div {:style {:color "#f00"
                  :opacity "0.2"}} "●"]
   [:div {:style {:color "#ff0"
                  :opacity "0.2"}} "●"]
   [:div {:style {:color "#0c0"
                  :opacity "0.2"}} "●"]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
