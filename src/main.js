import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible' //设配
import router from './router'
import './mock/mock-server'
import store from './vuex/store'

import './api'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')


