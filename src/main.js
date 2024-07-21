import './assets/main.css'

import { createApp } from 'vue'
import axios from 'axios'
import { createHead } from '@unhead/vue'
import { SpeedInsights } from "@vercel/speed-insights/vue"
import store from '@/store'
import routes from '@/router';
import i18n from "./i18n"

import App from './App.vue'
import components from '@/components'


const app = createApp(App)

components.forEach((component) => {
  app.component(component.name, component)
})
app.component(SpeedInsights.name, SpeedInsights)


app.config.globalProperties.$http = axios

const head = createHead()

app.use(head).use(i18n).use(routes).use(store).mount('#app')
