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
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "app",
  components: {},
  props: {},
  data: function () {
    return {};
  },
  computed: {
    someOtherProp() { return 1},
    // Vuexの count を count にマッピング （いちいちcount computedメソッドを作る必要が無くなる）
    ...mapState(['count']),
    // 別名でマッピング
    ...mapState({ countNumber: 'count' }),
    // count() {
    //   return this.$store.state.count;
    // },
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

