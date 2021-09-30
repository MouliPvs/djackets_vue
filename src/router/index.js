import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Product from '../views/Product.vue'
import Category from '../views/Category.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
  // Dynamic Routes

  // Product.vue
  {
    // :category_slug & :product_slug are variables
    // Gets Route From <route-link v-bind:to="product.get_absolute_url" > View Product Details</route-link> In Home.vue 
    path: '/:category_slug/:product_slug',
    name: 'Product',
    component: Product,
  },

  // Category.vue
  {
    // :category_slug is variable
    path: '/:category_slug',
    name: 'Category',
    component: Category
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
