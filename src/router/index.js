import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/front/Home.vue';

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Index',
        component: () => import('@/views/front/Index.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/front/About.vue'),
      },
      {
        path: '/products',
        component: () => import('@/views/front/UserProducts.vue'),
      },

      {
        path: '/product/:id',
        component: () => import('@/views/front/UserProduct.vue'),
      },
      {
        path: '/cart',
        component: () => import('@/views/front/Cart.vue'),
      },
      {
        path: 'checkout/:orderId',
        component: () => import('@/views/front/UserCheckout.vue'),
      },
    ],
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/front/Login.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/back/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'adminProducts',
        component: () => import('@/views/back/AdminProducts.vue'),
      },
      {
        path: 'orders',
        name: 'adminOrders',
        component: () => import('@/views/back/Orders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('@/views/back/Coupons.vue'),
      },
    ],
  },
  // {
  //   path: '/admin',
  //   name: 'Products',
  //   component: () => import('@/views/frontStage/Products.vue'),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
