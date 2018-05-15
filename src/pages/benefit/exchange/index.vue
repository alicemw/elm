<template>
  <div class="wrap">
      <div class="exchange_wrap">
          <input class="exCode" type="text" v-model="exchangeCode" placeholder="请输入兑换码">
          <div class="code_wrap">
            <input type="text" class="codenum" v-model="vertifyCode" placeholder="请输入验证码">
            <div class="codeChange">
                <img :src="codeimg" alt="">
                <p @click="getvertify">看不清换一张</p>
            </div>
          </div>
          <input :class="{abled:isChecked}" @click="check" type="submit" value="兑换">
      </div>
      <headTop head-title="兑换"></headTop>
      <alert ref="alert"></alert>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name:'exchange',
  data(){
      return {
          exchangeCode:'',
          vertifyCode:'',
          codeimg:''
      }
  },
  methods:{
      getvertify(){
          axios.get('/user/forget/vertify').then(res=>{
              this.codeimg = res.data.vertifyimg
              this.$store.commit('setCodeNum',res.data.codenum)
             
          })
      },
      check(){
        if(!this.isChecked){
            return false
        }
        if(this.vertifyCode != this.$store.state.codenum){
            this.$refs.alert.show('验证码错误！')
        }else{
            axios.post('/benefit',{
                exchangeCode:this.exchangeCode
            }).then(res=>{
                if(res.data.info == 'success'){
                    this.$refs.alert.show('兑换成功','success')
                }
            })
        }
      }
  },
  mounted(){
      this.getvertify();
  },
  computed:{
    isChecked(){
        if(this.exchangeCode && this.vertifyCode){
            return true
        }else {
            return false;
        }
    }
  },
  components:{
      
  }
}
</script>
<style lang="scss" scoped>
.exchange_wrap {
    padding: 40px 15px 0 15px;
    background: #f1f1f1;
    height: 100%;
    overflow: auto;
    input[type='submit'] {
        text-align: center;
        color: white;
        opacity: 0.8;
        font-size: 14px;
        &:active {
            opacity: 1;
        }
    }
}
input {
    width: 100%;
    margin-top: 10px;
    height: 40px;
    line-height: 40px;
    text-indent: 15px;
    border-radius: 5px;
    border: none;
    &:focus {
        outline: none;
    }
}
.code_wrap {
    display: flex;
    justify-content: space-between;
    .codenum {
        width: 50%;
    }
    .codeChange {
        display: flex;
        padding-top: 15px;
        width: 120px;
        justify-content: space-between;
        img {
            width: 70px;
            height: 30px;
            vertical-align: middle;
            background: #ccc;
        }
        p {
            width: 40px;
            font-size: 12px;
            color: blueviolet;
            cursor: pointer;
        }
    }

}
    .abled {
        background-color: #4cd964;
    }
</style>
