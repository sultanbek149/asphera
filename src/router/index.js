import Article from "@/pages/Article.vue"
import Main from "@/components/MainTry.vue"
import { createWebHistory, createRouter } from 'vue-router'
const routes = [
  { path: '/', component: Main },
  { path: '/about', component: Article },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
})

export default router
