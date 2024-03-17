import { createRouter, createWebHistory } from 'vue-router'
import {HomeView} from "@/views/index.js";
import {RegisterView} from "@/views/index.js";
import {LoginView} from "@/views/index.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      component:HomeView
    },
    {
      path:'/login',
      name:'login',
      component:LoginView
    },
    {
      path:'/register',
      name:'register',
      component:RegisterView
    }
  ]
})

export default router
