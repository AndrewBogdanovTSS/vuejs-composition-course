import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home.vue'
import NewPost from './pages/NewPost.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'NewPost',
      path: '/post/new',
      component: NewPost
    },
  ]
})