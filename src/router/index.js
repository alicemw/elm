import Vue from 'vue'
import store from './../store'
import Router from 'vue-router'
import Home from '@/pages/home'
import profile from '@/pages/profile'
import profileInfo from '@/pages/profile/info'
import setname from '@/pages/profile/info/setname'
import areainfo from '@/pages/profile/info/area'
import forget from '@/pages/profile/info/forget'
import balance from '@/pages/balance'
import add from '@/pages/profile/info/area/add'
import login from '@/pages/login'

Vue.use(Router)

const router =  new Router({
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
          component:profileInfo,
          meta:{requiresAuth: true},
          children:[
            {
              path:'setname',
              name:'setname',
              meta:{requiresAuth: true},
              component:setname
            },{
              path:'areainfo',
              name:'areainfo',
              meta:{requiresAuth: true},
              component:areainfo,
              children:[
                {
                  path:'add',
                  name:'add',
                  component:add,
                  meta:{requiresAuth:true}
                }
              ]
            },{
              path:'forget',
              name:'forget',
              component:forget,
              meta:{requiresAuth:true}
             
            }
          ]
          
        }
      ]
    },
    {
      path:'/balance',
      name:'balance',
      meta:{
        requiresAuth:true
      },
      component:balance
    },
    {
      path:'/login',
      name:'login',
      component:login,
      beforeEnter:(to,from,next)=>{
          if(store.state.isLogin){
           next('/')
         }else{
           next()
         } 
      }
    }
  ]
})
router.beforeEach((to,from,next)=>{
  //全局守卫判断是否需要登陆权限
  if(to.meta.requiresAuth){
    if(store.state.isLogin){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})
export default router
