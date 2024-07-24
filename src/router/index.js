// import Article from "@/pages/Article.vue"
import Main from "@/components/MainTry.vue"
import { createWebHistory, createRouter, RouterView } from 'vue-router'
import Tr from '@/i18n/translation'
import ArticleVue from "@/pages/Article.vue"

const routes = [
  {
    path: "/:locale?",
    component: RouterView,
    beforeEnter: Tr.routeMiddleware,
    children: [
      {
        path: '',
        name: 'home',
        component: Main
      },
      {
        path: 'docs',
        name: 'docs',
        component: ArticleVue
      },
      // {
      //   path: 'about',
      //   name: 'about',
      //   component: ArticleVue
      // },
      // {
      //   path: 'services',
      //   name: 'services',
      //   component: ArticleVue
      // }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
})

export default router
