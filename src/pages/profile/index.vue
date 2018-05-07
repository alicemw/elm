<template>
  <div class="wrap">
    <div class="profile_wrap">
        <div class="login">
            <router-link class="user_info" :to="isLogin ? '/profile/info' : '/login'">
            <div class="avatar" v-if="userinfo&&userinfo.useravatar">
                <img :src="userinfo.useravatar" alt="">
            </div>
            <div class="avatar" v-else>
                <div class="avatar_info"></div>
            </div>
            <div class="userphone" v-if="!!userinfo">
                <div class="username">{{userinfo.username}}</div>
                <div class="usercall">{{userinfo.userphone}}</div>
            </div>
            <div class="userphone" v-else>
                <div class="username">login/register</div>
                <div class="usercall">no cellphone</div>
            </div>
            <div class="usergo">
                ＞
            </div>
            </router-link>   
        </div>
        <div class="money">
            <router-link to="/balance" class="balance">
                <p v-if="userinfo && userinfo.balance"><b>{{userinfo.balance.toLocaleString()}}</b>元</p>
                <p v-else><b>{{Number(0).toFixed(2)}}</b>元</p>
                <span>我的余额</span>
            </router-link>
            <router-link to="/benefit" class="benefit">
                <p><b>{{money.benefit}}</b>个</p>
                <span>我的优惠</span>
            </router-link>
            <router-link to="/jifen" class="jifen">
                <p><b>{{money.jifen}}</b>分</p>
                <span>我的积分</span>
            </router-link>
        </div>
        <ul class="navlist">
            <li><router-link to="order">我的订单</router-link></li>
            <li><router-link to="order">积分商城</router-link></li>
            <li><router-link to="order">饿了么会员卡</router-link></li>

        </ul>
        <ul class="navlist">
            <li><router-link to="order">服务中心</router-link></li>
            <li><router-link to="order">下载饿了么app</router-link></li>

        </ul>
      </div>
      <headTop head-title="我的"></headTop>
      
      <transition name="slide" mode="out-in">
          <router-view></router-view>
      </transition>
  </div>
</template>
<script>
import headTop from '../../components/head'
import {mapState} from 'vuex'
export default {
  name:'profile',
  data(){
      return {
          money:{
              benefit:3,
              jifen:0
          }
      }
  },
  components:{
      headTop
  },
  computed:mapState([
      'userinfo',
      'isLogin'
  ])
}
</script>
<style lang="scss" scoped>
    .profile_wrap {
        padding-top: 40px;
        height: 100%;
        background: #f5f5f5;
    }
    .user_info {
        background: #3190e8;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        color: white;
        .avatar {
            width: 80px;
            height: 80px;
            overflow: hidden;
            border-radius: 50%;
            margin: 10px 0;
            img {
                width: 100%;
                display: block;
            }
        }
        .avatar_info {
           
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background:#ccc;
        }
        .userphone {
            padding: 20px 0;
            width: 50%;
            font-size: 20px;
            line-height: 30px;
        }
        .usergo {
            line-height: 100px;
            font-size: 40px;
        }
    }
    .money {
        display: flex;
        background: #fff;
        justify-content: space-between;
        text-align: center;
        padding: 10px 0;
        &>a {
           width: 33.33%;
           color: #666;
           font-size: 14px;
           border-right: 1px solid #f1f1f1; 
           p {
               margin-bottom: 3px;
           }
           b {
               font-size: 24px;
               white-space: nowrap;
               max-width: 70px;
               display: inline-block;
               text-overflow: ellipsis;
           }
           &.balance b{
               color: #f90;
           }
           &.benefit b{
               color: #ff5f3e;
           }
           &.jifen b{
               color: #6ac20b;
           }
        }
    }
    .navlist {
        background: #fff;
        margin-top: 10px;
        padding-left: 30px;
        list-style: none;
        li {
            text-align: left;
            position: relative;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #f1f1f1;
            a {
                color: #333;
                width: 100%;
                height: 100%;
                display: inline-block;
            }
            &::before {
                position: absolute;
                width: 15px;
                height: 15px;
                background: skyblue;
                left: -25px;
                top: 50%;
                transform: translateY(-50%);
                content: '';
            }
            &::after {
                position: absolute;
                width: 20px;
                height: 20px;
                right:5px;
                top: 50%;
                color: #333;
                transform: translateY(-50%);
                content: '>';
                line-height: 20px;
            }
            &:nth-last-child(1) {
                border: none;
            }
        }
    }
    .slide-enter-active,.slide-leave-active {
        transition: all .4s;
    }
    .slide-enter,.slide-leave-active {
        transform: translateX(50px);
        opacity: 0;
    }
</style>
