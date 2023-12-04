import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/pages/MainPage.vue";
import NewPage from "@/pages/NewPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path:'/',
        component:MainPage
      },
      {
        path: '/new/:id',
        name: 'new',
        component: NewPage,
      },
  ]
})

export default router
