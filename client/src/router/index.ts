import { createRouter, createWebHistory } from 'vue-router'
import Auth from '@/views/AuthView.vue';
import Game from '@/views/GameView.vue';
import Option from '@/views/OptionView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      name: "Auth",
      component: Auth
    },
    {
      path: "/option",
      name: "option",
      component: Option
    },
    {
      path: "/start",
      name: "Home",
      component: Game
    }
  ]
})

export default router
