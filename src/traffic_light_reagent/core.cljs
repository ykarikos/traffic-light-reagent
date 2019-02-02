(ns traffic-light-reagent.core
    (:require
      [reagent.core :as r]))

;; -------------------------
;; Views

(defn home-page []
  [:div {:class "traffic-light"}
   [:div {:class "light red"}]
   [:div {:class "light yellow"}]
   [:div {:class "light green"}]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
