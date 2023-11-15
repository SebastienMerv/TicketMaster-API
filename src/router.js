import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Home
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
