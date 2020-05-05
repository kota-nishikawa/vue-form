import Vue from 'vue'
import store from '@/store.js'
import App from './App.vue'

import router from './router.js'
import "../node_modules/bulma/bulma.sass";

Vue.config.productionTip = false


console.log(store.state.year)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


