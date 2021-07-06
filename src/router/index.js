import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/front/Home.vue';

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        component: () => import('@/views/front/Index.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/front/About.vue'),
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('@/views/front/Products.vue'),
      },
      {
        path: '/product/:id',
        name: 'Product',
        component: () => import('@/views/front/Product.vue'),
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('@/views/front/Cart.vue'),
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
  routes,
});

export default router;
