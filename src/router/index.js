import Vue from 'vue'
import VueRouter from 'vue-router'
import Slider from '../demo/slider'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Slider',
        component: Slider
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
