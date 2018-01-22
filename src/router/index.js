import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import SearchEngine from '@/components/SearchEngine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/codage',
      name: 'SearchEngine',
      component: SearchEngine
    }
  ]
})
