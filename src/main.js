import { createApp } from 'vue'
import './style.css'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index.js'

// app.use(ElementPlus)
createApp(App).use(router).mount('#app')
