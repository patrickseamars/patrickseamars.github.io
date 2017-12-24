import Vue from 'vue'
import Router from 'vue-router'
import Secret from '@/components/Secret'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Secret',
      component: Secret
    }
  ]
})
