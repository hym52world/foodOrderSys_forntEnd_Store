import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../layout/main.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // 登录
        { path: '/login', name: 'login', component: () => import('../view/login/login.vue') },
        // 注册
        { path: '/register', name: 'register', component: () => import('../view/register/register.vue') },
        // layout
        {
            path: '/',
            component: dashboard,
            redirect: 'index',
            children: [
                // 首页
                {
                    path: 'index',
                    name: 'index',
                    component: () => import('../view/index/index.vue'),
                },
                // ------------------------- 订单管理 -------------------------
                // 订单列表
                {
                    path: 'orderList',
                    name: 'orderList',
                    component: () => import('../view/order/orderList.vue'),
                },
                // ------------------------- 餐位管理 -------------------------
                // 餐位列表
                {
                    path: 'seatList',
                    name: 'seatList',
                    component: () => import('../view/seat/seatList.vue'),
                }
            ]
        },



        // 404
        { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../view/404/404.vue')}
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


