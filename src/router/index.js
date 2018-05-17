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
import order from '@/pages/order'
import vipcard from '@/pages/vipcard'
import cardintro from '@/pages/vipcard/cardintro'
import usecard from '@/pages/vipcard/usecard'
import cardcord from '@/pages/vipcard/cardcord'
import balanceintro from '@/pages/balance/intro'
import benefit from '@/pages/benefit'
import download from '@/pages/download'
import jifen from '@/pages/jifen'
import jfintro from '@/pages/jifen/intro'
import benefitintro from '@/pages/benefit/intro'
import exchange from '@/pages/benefit/exchange'
import djqintro from '@/pages/benefit/djqintro'
import commend from '@/pages/benefit/commend'
import history from '@/pages/benefit/history'
import add from '@/pages/profile/info/area/add'
import login from '@/pages/login'
import city from '@/pages/city'

Vue.use(Router)

const router =  new Router({
  mode:'history',
  routes: [
    //主页
    {
      path: '/',
      name: 'home',
      component: Home
    },
    //个人信息列表
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
    //城市搜索列表
    {
      path:'/city/:id',
      name:'city',
      component:city
     
    },
    //订单列表
    {
      path:'/order',
      name:'order',
      component:order,
      meta:{
        requiresAuth:true
      }
    },
    // 会员中心
    {
      path:'/vipcard',
      name:'vipcard',
      component:vipcard,
      meta:{
        requiresAuth:true
      },
      children:[
        {
          path:'intro',
          name:'cardintro',
          component:cardintro,
          meta:{
            requiresAuth:true
          }
        },
        {
          path:'usecard',
          name:'usecard',
          component:usecard,
          meta:{
            requiresAuth:true
          }
        },
        {
          path:'cardcord',
          name:'cardcord',
          component:cardcord,
          meta:{
            requiresAuth:true
          }
        }
      ]
    },
    //我的余额
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
    //我的优惠
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
    //我的积分
    {
      path:'/jifen',
      name:'jifen',
      component:jifen,
      meta:{
        requiresAuth:true
      },
      children:[
        {
          path:'intro',
          name:'jfintro',
          component:jfintro
        }
      ]
    },
    //下载饿了么
    {
      path:'/download',
      name:'download',
      component:download
    },
    //登陆
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
