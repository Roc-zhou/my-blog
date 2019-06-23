import Vue from 'vue'
import 'rz-ui'
import { $api, $http } from './axios'
import '../StyleSheet/animate.css'
import isScroll from './isScroll'

Vue.config.productionTip = false


Object.assign(Vue.prototype, {
  $api,
  $http,
  isScroll,
  $goto(obj, attr, boolean = true) { // 应用内/外跳转
    const {
      $data,
      $router,
    } = this;
    if (obj) boolean ? $router[attr || 'push'](obj) : window[attr || 'open'](obj)
    return $router
  },
})

export {
  Vue
}