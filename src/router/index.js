import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/documentos',
    name: 'Documentos',
    component: () => import('@/views/Documentos.vue')
  },
  {
    path: '/libros',
    name: 'Libros',
    component: () => import('@/views/Libros.vue')
  },
  {
    path: '/videos',
    name: 'Videos',
    component: () => import('@/views/Videos.vue')
  },
  {
    path: '/biblioteca',
    name: 'Biblioteca',
    component: () => import('@/views/Biblioteca.vue')
  },
  {
    path: '/guardados',
    name: 'Guardados',
    component: () => import('@/views/Guardados.vue')
  },
  {
    path: '/descargas',
    name: 'Descargas',
    component: () => import('@/views/Descargas.vue')
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import('@/views/Perfil.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router