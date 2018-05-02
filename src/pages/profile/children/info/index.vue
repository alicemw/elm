<template>
  <div class="wrap info_wrap">
      <headTop head-title="个人信息"></headTop>
      <section class="canclick avatar">
          <input type="file" >
          <p>头像</p>
          <div class="avatarimg">
              <img src="" alt="">
          </div>
      </section>
      
      <router-link class="canclick" to="/profile/info/setusername">
        <p>用户名</p>
        <div>
            {{this.$store.state.userinfo.username}}
        </div>
      </router-link>
      <router-link class="canclick" to="/profile/info/address">
        <p>收货地址</p>
        
      </router-link>
      <div class="canclick disable">
          账号绑定
      </div>
      <router-link class="canclick" to="/profile/info/address">
        <p class="bphone">手机</p>
        
      </router-link>
      <transition name="slide" mode="out-in">
          <router-view></router-view>
      </transition>
      
  </div>
</template>
<script>
import headTop from '../../../../components/head'
export default {
  name:'profileInfo',
  components:{
      headTop
  }
}
</script>
<style lang="scss" scoped>
    .info_wrap {
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        section {
            
            input[type='file'] {
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                opacity: 0;
            }
        }
    }
    .canclick {
        display: flex;
        padding: 5px 10px;
        position: relative;
        height: 40px;
        line-height:40px;
        color: black;
        justify-content: space-between;
        border-bottom: 1px solid #e8e8e8;
        text-align:left;
        &.disable {
            background: #ccc;
            &::after {
                content: ''
            }
        }
        &::after {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 16px;
            right: 10px;
            content: '>'
        }
         p {
            display: inline-block;
            height: 40px;
            line-height: 40px;
        }
        &>div {
            display: inline-block;
            line-height: 40px;
            vertical-align: middle;
            margin-right: 20px;
            
        }
        .avatarimg {
            width: 40px;
            height: 40px;
            background: #666;
            border-radius: 50%;
        }
        .bphone {
            position: relative;
            padding-left: 15px;
            &:before {
                position: absolute;
                top: 0;
                left: 0;
                content: '...';
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

