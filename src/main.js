import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components'
import store from '@/store'
import { SpeedInsights } from "@vercel/speed-insights/vue"
import axios from 'axios'


import routes from '@/pages';

const app = createApp(App)

components.forEach((component) => {
  app.component(component.name, component)
})
app.component(SpeedInsights.name, SpeedInsights)


app.config.globalProperties.$http = axios

app.use(routes).use(store).mount('#app')
