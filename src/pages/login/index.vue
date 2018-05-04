<template>
  <div class="wrap">
      <headTop head-title="登录"></headTop>
      <div class="login_wrap">
          <form>
              <section class="username">
                <input type="text" id="username" v-model="username" name="username" placeholder="账号">
              </section>
              <section class="userpass">
                <input :type="passtype" id="userpass" v-model="userpass" name="userpass" placeholder="密码">
                <span class="seeview" @click="seeview" >显示密码</span>
              </section>
              <section>
                <input type="text" v-model="codenum" placeholder="验证码" >
                <div class="vertify">
                    <img :src="codeimg" alt="">
                    <p @click="getvertify">看不清换一张</p>
                </div>
              </section>
              <section class="login_submit">
                  <input type="submit" @click.prevent="check" value="登录">
              </section>
          </form>
      </div>
  </div>
</template>
<script>
import headTop from '../../components/head'
import axios from 'axios'

export default {
  name:'login',
  data(){
      return {
          passtype:'password',
          username:null,
          userpass:null,
          codenum:null,
          codeimg:null
      }
  },
  methods:{
      seeview(){
         if(this.passtype == 'password'){
             this.passtype = 'text'
         }else{
             this.passtype = 'password'
         }
      },
      check(){
          axios.get('/user').then(res=>{
            this.$store.state.userinfo = res.data;

          })

          this.$store.state.isLogin = true;
          this.$router.push('/profile')
      },
      getvertify(){
          axios.get('/user/forget/vertify').then(res=>{
              this.codeimg = res.data.vertifyimg
              this.$store.state.codenum = res.data.codenum;
          })
      }
  },
  components:{
      headTop
  },
  mounted(){
      this.getvertify()
 }
}
</script>
<style lang="scss" scoped>
    .login_wrap {
        padding-top: 40px;
        height: 100%;
        overflow-y: auto;
        section {
            border-bottom: 1px solid #e8e8e8;
            position: relative;
        }
        box-sizing: border-box;
        form {
            text-align: left;
        }
        input {
            width: 60%;
            margin: 5px 10px;
            padding: 10px 10px;
            outline: none;
            border: none;
        }
        .seeview {
            font-size: 12px;
        }
        .codeimg {
            font-size: 12px;
        }
        .login_submit {
            width: 100%;
            margin-top: 10px;
            border-bottom: none;
            input {
                width: 90%;
                margin: 0 auto;
                display: block;
                background: #4cd964;
                color: white;
                font-size: 14px;
                border-radius: 5px;
            }
        }
        .vertify {
            position: absolute;
            top: 0;
            right: 10px;
            width: 120px;
            height: 50px;
            display: flex;
            justify-content: space-between;
            padding-top: 10px;
            overflow: hidden;
            img {
                width: 70px;
                height: 30px;
                vertical-align: middle;
                background: #ccc;
            }
            &>p {
                width: 40px;
                font-size: 12px;
                color: blueviolet;
                cursor: pointer;
            }
        }
    }
</style>
