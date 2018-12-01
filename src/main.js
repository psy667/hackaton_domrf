import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import spectre from 'spectre.css'
import icons from 'spectre.css/dist/spectre-icons.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
