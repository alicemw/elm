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
import balanceintro from '@/pages/balance/intro'
import benefit from '@/pages/benefit'
import download from '@/pages/download'
import benefitintro from '@/pages/benefit/intro'
import exchange from '@/pages/benefit/exchange'
import djqintro from '@/pages/benefit/djqintro'
import commend from '@/pages/benefit/commend'
import history from '@/pages/benefit/history'
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
      component:balance,
      children:[{
        name:'balanceintro',
        path:'intro',
        component:balanceintro,
        meta:{
          requiresAuth:true
        }
      }]
    },
    {
      path:'/benefit',
      name:'benefit',
      component:benefit,
      meta:{
        requiresAuth:true
      },
      children:[
        {
          path:'intro',
          name:'benefitintro',
          component:benefitintro,
          meta:{
            requiresAuth:true
          }
        },
        {
          path:'djqintro',
          name:'djqintro',
          component:djqintro,
          meta:{
            requiresAuth:true
          }
        },
        {
          path:'exchange',
          name:'exchange',
          component:exchange,
          meta:{
            requiresAuth:true
          }
        },
        {
          path:'history',
          name:'history',
          component:history,
          meta:{
            requiresAuth:true
          }
        },
        {
          path:'commend',
          name:'commend',
          component:commend,
          meta:{
            requiresAuth:true
          }
        }
      ]
    },
    {
      path:'/download',
      name:'download',
      component:download
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
