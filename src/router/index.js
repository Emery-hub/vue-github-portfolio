import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/repoDetails/:name',
      name: 'repoDetails',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RepoDetails.vue')
    },
    {
      path: '/404',
      name: 'error',
      component: () => import('../views/ErrorPage.vue')
    }
  ]
})

export default router
