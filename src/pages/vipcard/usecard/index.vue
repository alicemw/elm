<template>
 <div class="wrap">
     <div class="usecard_wrap">
         <p class="info">成功兑换后关联到当前账号：<b>{{username}}</b></p>
         <div class="card_wrap">
             <input type="text" v-model="cardname" placeholder="请输入10位卡号">
             <input type="password" v-model="cardpass" placeholder="请输入6位卡密">
         </div>
         <span :class="{active:isChecked}" class="excard" @click="excard">兑换</span>
         <div class="tips">
             <h3>——温馨提示——</h3>
             <p>新兑换的会员服务，权益以「会员说明」为准。</p>
             <p>月卡：30次减免配送费</p>
             <p>季卡：90次减免配送费</p>
             <p>年卡：360次减免配送费</p>
             <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
         </div>
     </div>
     <headTop head-title="卡号兑换"></headTop>
     <alert ref="alert"></alert>
     <loading ref="loading"></loading>
 </div>
</template>

<script>

import axios from 'axios'
export default {
 name:'usecard',
 data(){
     return {
        cardname:'',
        cardpass:'',
     }
 },
 mounted () {
 },

 methods:{
     excard(){
         if(this.isChecked){
             this.$refs.loading.show();
             axios.post('/excard',{
                 params:{
                     userid:this.$store.state.userinfo.userid
                 }
             }).then(res=>{
                 this.$refs.loading.hide()
                 if(res.data.info =='success'){
                     this.$refs.alert.show('兑换成功！',true)
                 }else if(res.data.info == 'wrong'){
                     this.$refs.alert.show('账号或密码错误！')
                     this.cardname = this.cardpass ='';
                 }else {
                     this.$refs.alert.show('未知错误！');
                     this.cardname =this.cardpass = '';
                 }
             })
         }else {
             this.$refs.alert.show('请完整填写密码和账号！')
         }
     }
 },
 computed:{
     username(){
         return this.$store.state.userinfo.username;
     },
     isChecked(){
         if(this.cardname.trim().length == 10 && this.cardpass.trim().length == 6){
             return true;
         }else {
             return false;
         }
     }
 }
}
</script>
<style lang="scss" scoped>
 .usecard_wrap {
     padding-top: 40px;
     background: #f5f5f5;
     height: 100%;
     overflow: auto;
     text-align: left;
     font-size: 14px;
 }
 .info {
     padding: 10px 15px;

 }
 .card_wrap {
     input {
         width: 100%;
         padding: 15px 0 15px 15px;
         border:  none;
         color: #666;
         &:nth-child(1) {
             border-bottom: 1px solid #e8e8e8;
         }
         &:focus {
             outline: none;
         }
     }
 }
 .excard {
     width: 90%;
     height: 40px;
     line-height: 40px;
     font-size: 16px;
     display: block;
     margin: 20px auto;
     text-align: center;
     background: #ccc;
     color: white;
     border-radius: 5px;
     opacity: .9;
     &:active {
         opacity: 1;
     }
 }
 .active {
     background: #56d176;
 }
 .tips {
     padding: 20px 15px 10px 20px;
     color: #aaa;
     font-size: 12px;
     line-height: 18px;
     h3 {
         text-align: center;
         font-size: 16px;
         padding: 10px 0;
     }
 }
</style>