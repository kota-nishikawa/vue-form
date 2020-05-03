import Vue from 'vue'
import App from './App.vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
import router from './router.js'
import "../node_modules/bulma/bulma.sass";

Vue.config.productionTip = false
Vue.use(Vuex)


new Vue({
  router,
  store,
  render: h => h(App),
    computed: {
        count() {
            return store.state.count
        },
    }
}).$mount('#app')


const store = new Vuex.Store({
  state: {
    count: 10
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})