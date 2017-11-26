import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import SystemNetPage from '@/components/SystemNetPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/SystemNetPage',
      name: 'SystemNetPage',
      component: SystemNetPage
    }
  ]
})
