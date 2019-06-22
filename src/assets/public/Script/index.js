import Vue from 'vue'
import 'rz-ui'
import { $api, $http } from './axios'

Vue.config.productionTip = false


Object.assign(Vue.prototype, {
  $api,
  $http,
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