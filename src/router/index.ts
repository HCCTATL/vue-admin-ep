import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Layout from '@/layouts/Layout.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/',
        name: '首页',
        component: () => import('@/views/home/HomeView.vue'),
        meta: {
          hidden: false
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/LoginView.vue'),
    meta: {
      hidden: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
