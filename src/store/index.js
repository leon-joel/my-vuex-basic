import Vue from 'vue'
import Vuex from 'vuex'
import { ADD_BOOK } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  // stateの直接【変更】はお作法として禁止されているので、strict:trueにするとそれを監視しそれを警告してくれる。
  // ただし、オーバーヘッドが大きいので本番環境ではfalseにすること。
  strict: true,
  state: {
    count: 0,
    books: [
      {
        isbn: '987-4-8222-5389-9',
        title: '作って楽しむプログラミング HTML5超入門',
        price: 2000
      },
      {
        isbn: '999-4-8222-5389-9',
        title: 'Vue.js超入門',
        price: 3456
      },
    ],
    name: ''
  },
  mutations: {
    // state変更用のメソッド群
    minus(state){
      state.count--
    },
    plus(state){
      state.count++
    },
    // 引数も渡せる ※payloadインスタンスは以下のobjectになっていると仮定 { book: {} } 
    [ADD_BOOK](state, payload){
      state.books.push(payload.book)
    },

    updateName(state, name){
      state.name = name
    }
  },
  getters: {
    // 何冊のbookがあるかを返す ※結果はキャッシュされる
    booksCount(state){
      return state.books.length
    },
    // 「引数に price を受け取り、それ未満のbook配列を返す」関数を返す
    // ※結果はキャッシュされない
    getBooksByPrice(state){
      return price => {
        return state.books.filter(book => book.price < price)
      }
    },
    // 他のgetterを呼び出すこともできる
    booksCount3000(state, getters){
      return getters.getBooksByPrice(3000).length;
    }
  },
  actions: {
    addAsync(context, payload){
      setTimeout(function(){
        context.commit(ADD_BOOK, payload)
      }, 5000)
    }
  },
  modules: {
  }
})
