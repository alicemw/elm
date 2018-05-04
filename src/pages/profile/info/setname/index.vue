<template>
  <div class="wrap">
    <headTop head-title="修改用户名"></headTop>
    <div class="setname_wrap">
      <input type="text" v-model="username" @input="checkusername" placeholder="请输入用户名">
      <p v-html="message" :class="{warn:warn}"></p>
      <input type="button" @click="changename" value="确认 ">
    </div>
      
  </div>
</template>
<script>
import axios from 'axios'
import headTop from '../../../../components/head'
export default {
  name:'setname',
  data(){
    return {
      username:'',
      warn:false,
      vertifyuser:false,
      message:'用户名只能修改一次（5到10个字符）'
    }
  },
  components:{
    headTop
  },
  methods:{
    changename(){
      if(this.vertifyuser){
        axios.post('/user/setname',{
          username:this.username
        }).then(res=>{
          if(res.data.info == 'success'){
            this.$store.state.userinfo.username = this.username
            this.$router.go(-1)
          }
        })
      }else {
        alert('点不动');
        return false;
      }
    },
    checkusername(){
      if(this.username.length<5 ||this.username.length>10){
        this.message = '用户名应在5到10个字符之间'
        this.warn =true;
        this.vertifyuser =false;
      }else {
         this.message = '用户名只能修改一次（5到10个字符）'
        this.warn =false
        this.vertifyuser=true;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .warn {
    color: red;
  }
  .setname_wrap {
    padding-top: 40px;
    p {
      width: 300px;
      height: 30px;
      margin: 10px auto;
      text-align: left;
      line-height: 30px;
    }
    input[type='text'] {
      width: 300px;
      height: 30px;
      border: 1px solid #3199e8;
      text-indent: 15px;
      font-size: 16px;
      margin: 20px auto 0;
    }
    input[type='button'] {
      width: 300px;
      height: 40px;
      margin:0  auto;
      outline: none;
      border: none;
      border-radius: 5px;
      background: #3199e8;
      color: white;
      opacity: 0.8;
      font-size: 18px;
      &:active {
        opacity: 1;
      }
    }
  }
</style>
