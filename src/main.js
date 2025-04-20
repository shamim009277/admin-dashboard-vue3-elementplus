import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n, { loadLocaleMessages } from './i18n'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)
app.component('apexchart', VueApexCharts)
app.use(router)
app.use(ElementPlus)
app.use(i18n)

// Load the initial language
const initialLocale = localStorage.getItem('locale') || 'en'
loadLocaleMessages(initialLocale).then(() => {
  app.mount('#app')
});


