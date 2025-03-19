import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import FilePage from '@/components/FilePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/file/:id',
    name: 'FilePage',
    component: FilePage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router