import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // stateの直接【変更】はお作法として禁止されているので、strict:trueにするとそれを監視しそれを警告してくれる。
  // ただし、オーバーヘッドが大きいので本番環境ではfalseにすること。
  strict: true,
  state: {
    count: 0
  },
  mutations: {
    // state変更用のメソッド
    minus(state){
      state.count--
    },
    plus(state){
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
