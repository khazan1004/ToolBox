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
        path: '/socket-debug',
        name: 'SocketDebug',
        component: () => import('../pages/SocketDebug.vue')
    },
    {
        path: '/web-socket-debug',
        name: 'WebSocketDebug',
        component: () => import('../pages/WebSocketDebug.vue')
    },
    {
        path: '/picture',
        name: 'Picture',
        component: () => import('../pages/Picture.vue')
    },
    {
        path: '/hex-convert',
        name: 'HexConvert',
        component: () => import('../pages/HexConvert.vue')
    }
]
export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})