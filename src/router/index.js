import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
      props: {
        data: {
          API_BASE_URL: process.env.API_BASE_URL
        }
      }
    }
  ]
})
