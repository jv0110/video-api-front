import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './services/http'
Vue.config.productionTip = false
Vue.use({
  install (Vue) {
    Vue.prototype.$axios = axios
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
