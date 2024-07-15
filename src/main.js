import '@/assets/styles/index.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './permission'
import CommonTable from '@/components/CommonTable'
import Pagination from '@/components/Pagination'
const app = createApp(App)
app.component('CommonTable', CommonTable)
app.component('Pagination', Pagination)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus).use(createPinia()).use(router).mount('#app')

