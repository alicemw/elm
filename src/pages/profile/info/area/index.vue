<template>
  <div class="wrap">
    <headTop head-title="编辑地址"></headTop>
    <div class="address_wrap">
      <ul class="showaddress" v-show="address.length > 0">
        <li v-for="(item,index) in address" @click="choose(index)" :key=index :class="{active: index == defaultchoice}">
          <span>姓名：{{item.name}}</span><br>
          <span>电话：{{item.phone}}</span>
        </li>
      </ul>
      <router-link class="addaddress" to='/profile/info/areainfo/add'>添加地址</router-link>
    </div>
    <transition name="slide" mode="out-in">
      <!-- 获取子组件传值变换默认地址 -->
        <router-view @test="autochange"></router-view>
    </transition>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name:'areainfo',
  data(){
    return {
      defaultchoice:0
    }
  },
  components:{
  
  },
  mounted(){
    
  },
  methods:{
    choose(index){
      this.defaultchoice = index;
    },
    autochange(data){
      this.defaultchoice = 0;
    }
  },
  computed:{
    address(){
      return this.$store.state.userinfo.address
    }
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
    border-width: 0px 0 1px 0;
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
  .showaddress li {
    width: 100%;
    border-bottom: 1px solid #e8e8e8;
    height: 50px;
    padding: 5px 10px;
    text-align: left;

    &.active {
      position: relative;
      background: #e8e8e8;
      &::after {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        content: '';
        width: 13px;
        height: 13px;
        background: green;
        border-radius: 50%;

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

