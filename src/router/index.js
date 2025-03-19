import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import FilePage from '@/components/FilePage.vue'
import LoginPage from '@/components/LoginPage.vue'

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
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router