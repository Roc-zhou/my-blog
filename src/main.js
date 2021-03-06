// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { Vue } from './assets/public/Script'
import App from './App'
import router from './router'
import store from './store/index'
import './assets/public/StyleSheet/main.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
