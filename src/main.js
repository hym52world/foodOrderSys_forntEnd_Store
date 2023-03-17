import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index.js'


const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
