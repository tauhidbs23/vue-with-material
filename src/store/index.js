import Vue from 'vue'
import Vuex from 'vuex'
import category from "./category";
import posts from "./posts";


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    category,
    posts
  }
})
