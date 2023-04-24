import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { title: '网站收藏' }
    }, {
        path: '/img'
        , name: 'img'
        , component: () => import('@/views/Img.vue'),
        meta: { title: '图片收藏' }
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router