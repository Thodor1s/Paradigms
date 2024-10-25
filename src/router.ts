import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/v-HomeLoader.vue'
import Krokodeilos from '@/components/v-Krokodeilos.vue'
import Sourikata from '@/components/v-Sourikata.vue'
import vILCATrainingDataKit from './components/v-ILCATrainingDataKit.vue'

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
  },
  {
    path: '/ILCA-training-data-kit',
    name: 'ILCA Training Data Kit',
    component: vILCATrainingDataKit
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
