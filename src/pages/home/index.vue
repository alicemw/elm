<template>
    <div class="wrap">
        <headTop signUp="home" head-title="首页"></headTop>
        <div class="home_wrap">
            <p @click='test'>{{message}}</p>
        </div>
        <alert :alertShow="flag" :alertMessage="alertmessage" @test1="hehehe" ></alert>
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
      test(){
          if(this.flag == true){
              this.flag = false
          }else {
              this.flag = true
          }
      },
      hehehe(){
          this.flag = false;
      }
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
