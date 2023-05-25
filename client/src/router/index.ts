import { createRouter, createWebHistory } from 'vue-router'
import Auth from '@/views/AuthView.vue';
import Home from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      name: "Auth",
      component: Auth
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    }
  ]
})

export default router
