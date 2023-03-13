import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../layout/main.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: () => import('../view/login/login.vue') },
        { path: '/register', component: () => import('../view/register/register.vue') },
        {
            path: '/',
            component: dashboard,
            children: [
                {
                    path: '/index',
                    component: () => import('../view/index/index.vue'),
                },
                {
                    path: 'orderList',
                    component: () => import('../view/order/orderList.vue'),
                },
            ]
        }
        // { path: '/home',component: () => import('../Vue文件')  },
    ]
})

// 路由拦截 没有token跳转到登录页面
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    if (to.path === '/login' || to.path === '/register') {
        next()
    } else {
        token ? next() : next('/login')
    }
})

export default router


