import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductosView.vue'),
    props: (route) => {
      return {
        id: Number(route.params.id),
        nombre: 'Desayunos',
        descripcion: 'Contamos con desayunos nutritivos y deliciosos.',
        precio: 2000,
        cantidad: 'Para dos personas',
      };
    },
    
  },
  {
    path: '/producto/:id',
    name: 'producto',
    component: () => import(/* webpackChunkName: "about" */ '../components/Card.vue'),
    
  },
  {
    path: '/contacto',
    name: 'contacto',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
