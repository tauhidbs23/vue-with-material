import Vue from 'vue'
import VueRouter from 'vue-router'
import Post from "../components/Post.vue";
import Category from "../components/Category.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Post',
    component: Post
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
