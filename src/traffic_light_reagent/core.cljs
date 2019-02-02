(ns traffic-light-reagent.core
    (:require
      [reagent.core :as r]
      [beicon.core :as rx]))

(def opacity-cycle
  ; Red  Yellow Green
  [["1"   "0.2" "0.2"]
   ["1"   "1"   "0.2"]
   ["0.2" "0.2" "1"]
   ["0.2" "1"   "0.2"]])

(def third (fn [coll] (get coll 2)))

(defn increment-cycle [n]
  (mod (inc n) 4))

;; -------------------------
;; Views

(defn traffic-light []
  (let [cycle-index (r/atom 0)
        stream (->> (rx/timer 1500 1500)
                    (rx/map increment-cycle))]
    (rx/subscribe stream #(reset! cycle-index %))
    (fn []
      [:div {:style {:background "#000"
                     :margin "auto"
                     :width "120px"
                     :padding "10px"
                     :font-size "215px"
                     :line-height "100px"
                     :text-align "center"}}
       [:div {:style {:color "#f00"
                      :opacity (-> opacity-cycle
                                   (get @cycle-index)
                                   first)}}
        "●"]
       [:div {:style {:color "#ff0"
                      :opacity (-> opacity-cycle
                                   (get @cycle-index)
                                   second)}}
        "●"]
       [:div {:style {:color "#0c0"
                      :opacity (-> opacity-cycle
                                   (get @cycle-index)
                                   third)}}
        "●"]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [traffic-light] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
