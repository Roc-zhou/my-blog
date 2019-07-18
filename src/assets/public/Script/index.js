import Vue from 'vue'
import 'babel-polyfill'
import 'rz-ui'
import { $api, $http } from './axios'
import '../StyleSheet/animate.css'
import $isScroll from './isScroll'
import { _encrypt, _decrypt, formatDate } from 'rz-methods'
import { MessageBox } from "element-ui";


/* Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
}) */

Vue.config.productionTip = false

const util = {
  formatDate
}

Object.assign(Vue.prototype, {
  $api,
  $http,
  $util: util,
  $msgbox: MessageBox,
  $isScroll,
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