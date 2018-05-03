<template>
  <div class="wrap">
    <headTop head-title="编辑地址"></headTop>
    <div class="address_wrap">
      <router-link class="addaddress" to='/profile/info/areainfo/add'>添加地址</router-link>
    </div>
    <transition name="slide" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import axios from 'axios'
import headTop from '../../../../components/head'
export default {
  name:'areainfo',
  components:{
    headTop
  }
}
</script>
<style lang="scss" scoped>
  .address_wrap {
    padding-top: 40px;
  }
  .addaddress {
    width: 100%;
    display: inline-block;
    height: 50px;
    line-height: 50px;
    text-align: left;
    background: white;
    color: #2c3e50;
    text-indent: 20px;
    border:solid #e8e8e8;
    border-width: 1px 0 1px 0;
    position: relative;
    &::after {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 16px;
      right: 10px;
      content: '>';
      color:#ccc;
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

