// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/PruebaRouter',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'NuevaRuta',
        name: 'NuevaRuta',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/NuevaRuta.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory('/PruebaRouter/'),
  routes,
})

export default router
