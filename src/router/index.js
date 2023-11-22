import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainClientView from '../views/client/MainClientView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      name: 'main',
      component: MainClientView,
      children: [
        {
          path: 'home',
          component: HomeView
        }
      ]
    }
  ]
})

export default router
