import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/front/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('@/views/front/Index.vue'),
      },
      {
        path: '/About',
        name: 'About',
        component: () => import('@/views/front/About.vue'),
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('@/views/front/Products.vue'),
      },
      {
        path: '/products/:id',
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
        component: () => import('@/views/back/Products.vue'),
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
