import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible' //设配
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


