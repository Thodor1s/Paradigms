import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Krokodeilos from '@/components/Krokodeilos.vue'
import Sourikata from '@/components/Sourikata.vue'

const routes = [
  {
    path: '/',
    redirect: '/home' // Redirect root path to home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/krokodeilos',
    name: 'Krokodeilos',
    component: Krokodeilos
  },
  {
    path: '/sourikata',
    name: 'Sourikata',
    component: Sourikata
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
