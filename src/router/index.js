import { createRouter, createWebHistory  }  from 'vue-router'
import dashboard from '../layout/main.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/login',component: () => import('../view/login/login.vue')  },
        {
            path: '/',
            component: dashboard,
            children: [
                {
                    path: 'index',
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

export default router 


