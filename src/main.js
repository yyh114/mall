import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Toast from 'components/common/toast/toast.js'

// import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(Toast)
Vue.use(VueLazyLoad)

// FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
