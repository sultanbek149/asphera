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



// const messages = Object.assign({ languages })
// const i18n = createI18n({
//   // something vue-i18n options here ...
//   legacy: false,
//   // locale: defaultLocale,
//   locale: 'ja',
//   fallbackLocale: 'en',
//   messages: {
//     en: {
//       message: {
//         hello: 'hello world'
//       }
//     },
//     ja: {
//       message: {
//         hello: 'こんにちは、世界'
//       }
//     }
//   }
// })

// const app = createApp(App, {
//   setup() {
//     const { t } = useI18n()
//     return { t }
//   }
// })

const app = createApp(App)

components.forEach((component) => {
  app.component(component.name, component)
})
app.component(SpeedInsights.name, SpeedInsights)


app.config.globalProperties.$http = axios

const head = createHead()

app.use(head).use(i18n).use(routes).use(store).mount('#app')
