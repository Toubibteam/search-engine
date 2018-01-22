// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App'
import CodeItem from './components/CodeItem'
import Header from './components/Header'

import router from './router'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.http.options.emulateJSON = true

Vue.component('app-header', Header)
Vue.component('code-item', CodeItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
