import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../pages/404.vue')
    },
    {
        path: '/tcp-debug',
        name: 'TcpDebug',
        component: () => import('../pages/TcpDebug.vue')
    },
    {
        path: '/picture',
        name: 'Picture',
        component: () => import('../pages/Picture.vue')
    }
]
export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})