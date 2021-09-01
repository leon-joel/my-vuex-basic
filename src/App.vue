<template>
  <div id="app">
    <input type="button" value="-" v-on:click="minus" />
    <br>
    {{ count }}
    <br>
    {{ countNumber }}
    <br>
    <input type="button" value="+" v-on:click="plus" />
    <br>
    <br>
    {{ someOtherProp }}
    <br>
    Books count: {{booksCount}}
    <br>
    getBooksByPrice: {{getBooksByPrice(3000)}}
    <br>
    booksCount3000: {{booksCount3000}}
    <hr>

    <form v-on:submit.prevent="onClick">
      <label for="isbn">ISBN: </label>
      <input type="text" id="isbn" v-model="isbn"><br>
      <label for="title">書名: </label>
      <input type="text" id=title v-model="title"><br>
      <label for="price">価格: </label>
      <input type="number" id="price" v-model="price"><br>
      <input type="submit" value="登録">
    </form>

    <br>
    <div v-for="book in books" v-bind:key="book.isbn">
      <p>{{book.title}}</p>
      <p>{{book.price}}</p>
      <p>{{book.isbn}}</p>
    </div>
    <hr>

    <form>
      <label for="name">氏名: </label>
      <input type="text" id="name" v-model="name">
    </form>
    <p>{{name}}</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: "app",
  components: {},
  props: {},
  data: function () {
    return {
      isbn: '',
      title: '',
      price: 0,
    };
  },
  computed: {
    someOtherProp() { return 1},
    // Vuexの count を count にマッピング （いちいちcount computedメソッドを作る必要が無くなる）
    ...mapState(['count', 'books']),
    // 別名でマッピング
    ...mapState({ countNumber: 'count' }),
    // count() {
    //   return this.$store.state.count;
    // },

    // Vuexの getters を同名の算出プロパティにmapする
    ...mapGetters([ 'booksCount', 'getBooksByPrice', 'booksCount3000']),

    // store.state.name用のget/set
    name: {
      get(){
        return this.$store.state.name
      },
      set(value){
        this.$store.commit('updateName', value)
      }
    }
  },
  mounted: function () {},
  methods: {
    minus() {
      // storeに定義されている mutation を呼び出す
      this.$store.commit("minus");
    },
    plus() {
      this.$store.commit("plus");
    },
    onClick(){
      this.$store.commit('addBook', {
        book: {
          isbn: this.isbn,
          title: this.title,
          price: this.price
        }
      })
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

