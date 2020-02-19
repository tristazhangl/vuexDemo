import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const PageOne = () => import('@/pages/PageOne')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageOne',
      component: PageOne
    }
  ]
})
