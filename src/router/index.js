import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/pages/MainPage.vue";
import Windows from "@/pages/Windows.vue";
import TechnicalError from "@/components/technical-error.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/windows',
    name: 'windows',
    component: Windows
  },
  {
    path: '/technical-error',
    name: 'technical-error',
    component: TechnicalError
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
