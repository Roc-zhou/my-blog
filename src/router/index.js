import Vue from 'vue'
import Router from 'vue-router'
import components from '../components/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: components,
  scrollBehavior(to, from, savedPosition) { 
    if (to.path) { // 解决vue单页面路由不能触发百度统计
      window._hmt.push(['_trackPageview', to.fullPath]);
    }
  },
})
