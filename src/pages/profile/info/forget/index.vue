<template>
    <div class="wrap">
        <headTop head-title="修改密码"></headTop>   
        <div class="forget_wrap">
            <section>
                <input type="text" v-model="username" placeholder="账号" >
            </section>
            <section>
                <input type="password" v-model="userpass" placeholder="旧密码" >
            </section>
            <section>
                <input type="password" v-model="newpass1" placeholder="新密码" >
            </section>
            <section>
                <input type="password" v-model="newpass2" placeholder="新密码确认" >
            </section>
            <section>
                <input type="text" v-model="codenum" placeholder="验证码" >
                <div class="vertify">
                    <img :src="codeimg" alt="">
                    <p @click="getvertify">看不清换一张</p>
                </div>
            </section>

            <button @click="submitrevise">确认修改</button>

        </div>
        <alert ref="alert"></alert>
    </div>
</template>
<script>
import headTop from '../../../../components/head'
import alert from '../../../../components/alert'
import axios from 'axios';
export default {
  name:'forget',
  data(){
      return {
          username:null,
          userpass:null,
          newpass1:null,
          newpass2:null,
          codenum:null,
          codeimg:null,
          isChecked:false
      }
  },
  methods:{
      getvertify(){
          axios.get('/user/forget/vertify').then(res=>{
              this.codeimg = res.data.vertifyimg
              this.$store.state.codenum = res.data.codenum;
          })
      },
      datacheck(){
          const arr = Array.from(Object.keys(this.$data))
          arr.pop();
         const b =  arr.filter((item,index)=>{
              return !this.$data[item]
          })
         if(b.length>0){   
            this.$refs.alert.show('请输入完整！')
            return false;
         }
         if(this.newpass1 != this.newpass2){
             this.newpass1 =this.newpass2 = null;
              this.$refs.alert.show('两次密码不同，请重新输入！')
            return false;
         }
         if(this.codenum != this.$store.state.codenum){
             this.codenum =null;
             this.$refs.alert.show('验证码错误！')
             return false;
         }
        this.isChecked = true;

      },
      submitrevise(){
          this.datacheck()
          if(this.isChecked){
               this.$refs.alert.show('修改成功!','success');
               
          }
      }
  },
  components:{
      headTop,
      alert
  },
  mounted(){
      this.getvertify()
  }
 
}
</script>
<style lang="scss" scoped>
.forget_wrap {
    padding-top: 40px;
    &>section {
            width: 100%;
            padding: 5px 0;
            position: relative;
            border-bottom: 1px solid #e8e8e8;
            &>input {
                 width: 90%;
                margin: 0 auto;
                height: 40px;
                background: white;
                font-size: 14px;
                outline: none;
                padding: 2px 5px;
                border: none;
                border-radius: 5px;
            }
        }
        button {
            width: 90%;
            height: 40px;
            margin: 20px auto 0;
            background: #4cd964;
            border: none;
            line-height: 40px;
            color: white;
            opacity: 0.9;
            border-radius: 5px;
            &:active {
                border: none;
                outline: none;
                opacity: 1;
            }
            &:focus {
                border: none;
                outline: none;
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

