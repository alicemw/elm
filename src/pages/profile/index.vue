<template>
  <div class="profile_wrap wrap">
      <headTop head-title="我的"></headTop>
      <div class="login">
          <router-link class="user_info" :to="isLogin ? '/profile/info' : '/login'">
            <div class="avatar" v-if="userinfo&&userinfo.id">
                <img src="" alt="">
            </div>
            <div class="avatar" v-else>
               <div class="avatar_info"></div>
            </div>
            <div class="userphone">
                <div class="username">{{userinfo.username}}</div>
                <div class="usercall">{{userinfo.userphone}}</div>
            </div>
            <div class="usergo">
                ＞
            </div>
          </router-link>   
      </div>
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
    .user_info {
        background: #3190e8;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        color: white;
        .avatar_info {
            margin: 10px 0;
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
    .slide-enter-active,.slide-leave-active {
        transition: all .4s;
    }
    .slide-enter,.slide-leave-active {
        transform: translateX(50px);
        opacity: 0;
    }
</style>
