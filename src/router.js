import Vue from "vue"
import Router from 'vue-router'

Vue.use(Router)

import Index from "./index.vue"
import form from "./form.vue"
import confirm from "./confirm.vue"

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/index',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './index.vue')
    },
    {
      path: '/confirm',
      name: 'confirm',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './confirm.vue')
    }
  ]
})