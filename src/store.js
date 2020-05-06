import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// ストアを作成
const store = new Vuex.Store({
   state: {
    count: 0,
    year : 0,
    month : 0,
    day : 0,
    treeyear : '',
    gender : '',
    assign : '',
    sevenweek : '',
    updatetext : ''
  },
  getters: {
    gender : state => state.gender,
    year  : state => state.year,
    month : state => state.month,
    day : state => state.day,
    assign   : state => state.assign,
    treeyear   : state => state.treeyear,
    sevenweek   : state => state.sevenweek,
    updatetext   : state => state.updatetext
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
    increment: state => state.gender = '男',
    decrement: state => state.gender = '女',
    updateYear (state, year) {
      state.year = year
    },
    updateMonth (state, month) {
      state.month = month
    },
    updateDay (state, day) {
      state.day = day
    },
    updateAssign (state, assign) {
      state.assign = assign
    },
    updateTreeYear (state, treeyear) {
      state.treeyear = treeyear
    },
    updateSevenWeek (state, sevenweek) {
      state.sevenweek = sevenweek
    },
    updateText (state, updatetext) {
      state.updatetext = updatetext
    }
  }
})


export default store