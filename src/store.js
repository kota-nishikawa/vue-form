import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// ストアを作成
const store = new Vuex.Store({
   state: {
    count: 0,
    year : 0
  },
  getters: {
    count: state => state.count
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    },
    decrement( { commit }) {
      commit('decrement')
    }
  },
  mutations: {
    // カウントアップするミューテーションを登録
    increment: state => state.count = '男',
    decrement: state => state.count = '女',
    changeYourBox : state => state.year
  }
})

export default store