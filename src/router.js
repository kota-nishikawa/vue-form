import Vue from 'vue'
import VueRouter from "vue-router"


import confirm from "./confirm.vue"
import index from "./index.vue"
import form from "./form.vue"

Vue.use(VueRouter)

const routes = [
    { path: '/confirm', component: confirm },
    { path: '/', component: index },
    { path: '/form', component: form }
]

const router = new VueRouter({
    routes: routes
})

export default router
