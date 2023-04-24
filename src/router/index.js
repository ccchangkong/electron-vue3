import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/img'
        , name: 'img'
        , component: () => import('@/views/Img.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router