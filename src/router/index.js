import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import profile from '@/pages/profile'
import profileInfo from '@/pages/profile/children/info'
import login from '@/pages/login'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/profile',
      name:'profile',
      component:profile,
      children:[
        {
          path:'info',
          name:'profileInfo',
          component:profileInfo
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:login
    }
  ]
})
