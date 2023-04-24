import { createApp } from 'vue'
import '@/style/style.css'
import App from './App.vue'
import 'normalize.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/es/modal/style/css.js';
import { createPinia } from 'pinia'
import router from '@/router/index'
const app = createApp(App)
app.use(ArcoVueIcon)
app.use(createPinia())
app.use(router)
app.mount('#app')

