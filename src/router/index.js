import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/adicionar',
    name: 'CriarPublicacao',
    component: () => import('../views/CriarPublicacao.vue')
  },

  {
    path: '/materia/:id',
    name: 'Materia',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Materia.vue')
  },

  {
    path: '/update/:id',
    name: 'EditarPublicacao',
    component: () => import('../views/EditarPublicacao.vue')
    
  },

  {
    path: '/delete/:id',
    name: 'ApagarPublicacao',
    component: () => import('../views/ApagarPublicacao.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
