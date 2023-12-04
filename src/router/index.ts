import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/business-info/:businessId',
      name: 'BusinessInfo',
      component: () => import('../views/BusinessInfo.vue'),
      meta: { hideFooter: true } // 添加元信息，用于判断是否显示底部导航
    },
    {
      path: '/business-list',
        name: 'BusinessList',
        component: () => import('../views/BusinessList.vue')
    },
    {
      path: '/order',
      name: 'Order',
      component: () => import('../views/Order.vue'),
      meta: { hideFooter: true } // 添加元信息，用于判断是否显示底部导航
    },
    {
      path: '/order-list',
      name: 'OrderList',
      component: () => import('../views/OrderList.vue'),
    },
    {
      path: '/payment',
      name: 'Payment',
      component: () => import('../views/Payment.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register.vue'),
    },
    {
      path: '/mine',
      name: 'Mine',
      component: () => import('../views/Mine.vue'),
    },

  ],
  scrollBehavior (to, from, savedPosition) {
    // 总是滚动到顶部
    return { top: 0 }
  }
})

export default router
