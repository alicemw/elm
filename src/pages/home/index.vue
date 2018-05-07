<template>
    <div class="wrap">
        <headTop signUp="home" head-title="首页"></headTop>
        <div class="home_wrap">
            <p @click="alert">{{message}}</p>
        </div>
        <!-- 取个名字方便调用方法 -->
        <alert  ref="alert" @test="callback" ></alert>
    </div>
</template>
<script>
import headTop from '../../components/head';
import alert from '../../components/alert';
export default {
  name:'Home',
  data(){
      return {
          message:'shouey',
          flag:false,
          alertmessage:'你好啊'
      }
  },
  methods:{
      alert(){
        
         this.$refs.alert.show('hello')
      },
      hehehe(){
          this.flag = false;
      },
      callback(){}
  },
  components:{
      headTop,
      alert
  }
}
</script>
<style lang="scss" scoped>
p {
    width: 100%;
    background: #ccc;
}
.home_wrap {
    padding-top: 40px;
    height: 100%;
    overflow-y: auto;
}
</style>
