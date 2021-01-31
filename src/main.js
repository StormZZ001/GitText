import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/common.less'
import '@/plugins/vant.js'
import '@/config/rem.js'
import '@/config/filters.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
