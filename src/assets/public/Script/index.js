import Vue from 'vue'
import 'babel-polyfill'
import 'rz-ui'
import { $api, $http } from './axios'
import vw from 'em-vw'
import '../StyleSheet/animate.css'
import isScroll from './isScroll'
import util from 'rz-methods'
import { MessageBox } from "element-ui";


vw(10)

Vue.config.productionTip = false


Object.assign(Vue.prototype, {
  $api,
  $http,
  $util: util,
  $msgbox: MessageBox,
  $isScroll: isScroll,
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