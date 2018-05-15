<template>
 <div class="wrap">
     <div class="vipcard_wrap">
         <p class="intro">为账户<b> {{username}} </b>购买会员</p>
         <div class="special">
             <header>会员特权
                 <router-link to="/vipcard/intro">会员说明</router-link>
             </header>
             <div class="special_item">
                 <img src="./../../assets/sheng.jpeg" alt="">
                 <div class="desc">
                     <p>减免配送费</p>
                     <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                     <p>蜂鸟专送专享</p>
                 </div>
             </div>
             <div class="special_item">
                 <img src="./../../assets/jifen.jpeg" alt="">
                 <div class="desc">
                     <p>减免配送费</p>
                     <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                     <p>蜂鸟专送专享</p>
                 </div>
             </div>
         </div>
         <div class="special buycard">
             <header>开通会员</header>
             <div class="special_item">
                 <p class="cardpay">一个月<b>￥{{cardnum}}元</b> <button @click="buy">购买</button></p>
             </div>
         </div>
         <div class="excard special">
             <router-link to='/vipcard/usecard'>
                <header>兑换会员
                    <span>使用卡号卡密</span>
                </header>
             </router-link>
             
         </div>
         <div class="cardcord special">
             <router-link to="/vipcard/cardcord">
                <header>购买记录
                    <span>开发票</span>
                </header>
             </router-link>
         </div>
     </div>
     <headTop head-title="会员中心"></headTop>
     <transition name="slide" mode="out-in">
         <router-view></router-view>
     </transition>
 </div>
</template>

<script>

export default {
 name:'vipcard',
 mounted () {

 },
 data(){
     return {
         cardnum:20
     }
 },

 computed:{
     username(){
         return this.$store.state.userinfo.username;
     }
 },
 methods:{
     buy(){

     }
 }
}
</script>
<style lang="scss" scoped>
 .vipcard_wrap {
     height: 100%;
     background: #f5f5f5;
     overflow: auto;
     font-size: 14px;
     padding: 40px 0 20px;
     text-align: left;
 }
 .intro {
     padding:10px 15px;
 }
 .special {
     background: #fff;
     padding: 5px 0 5px 15px;
     &>a {
         display: block;
         color: #2c3e50;
     }
     header {
         display: flex;
         justify-content: space-between;
         padding: 10px 0;
         
         span,a {
             padding-right: 20px;
             color: #999;
             font: 12px;
             position: relative;
             &::after{
                 position: absolute;
                 width: 15px;
                 height: 15px;
                 display: block;
                 content:'>';
                 right: 0;
                 top: 50%;
                 margin-top: -8px;
             }
         }
     }
     .special_item {
         padding: 10px 0 ;
         border-top: 1px solid #e8e8e8;
         font-size: 12px;
         img {
             width: 32px;
             height: 36px;
             vertical-align: top;
             margin-right: 10px;
         }
        .desc {
            padding-right: 2px;
            line-height: 16px;
            color:#999;
            display: inline-block;
            p:nth-child(1){
                color:#333;
                font-size: 14px;
                line-height: 18px;
            }
        }
     }
 }
 .buycard,.excard,.cardcord {
     margin-top: 10px;
 }
 .cardpay {
     position: relative;
     b {
         color:#f60;
     }
     button {
         padding: 2px 10px;
         border: 1px solid #f60;
         border-radius: 5px;
         background: #fff;
         position: absolute;
         top: 50%;
         transform: translateY(-50%);
         right: 10px;
         opacity: .8;
         &:focus {
             outline: none;
         }
         &:active {
             opacity: 1;
             outline: none;
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