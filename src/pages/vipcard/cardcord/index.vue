<template>
 <div class="wrap">
     <div class="cardcord_wrap" id="cardCord" >
             <ul>
                <li class="item" :class="{active:isActive == index}" v-for="(item,index) in paylist" :key="index" @click="choose(index)">
                    <p>{{item.viptype}} <b>{{item.pay_num}}</b></p>
                    <p>{{item.date}}</p>
                </li>
            </ul>
            <div v-show="paylist.length == 0" class="empty">
                <img src="./../../../assets/no-log.png" alt="">
                <p>没有购买记录</p>
            </div>
     </div>
     <headTop head-title="购买记录"></headTop>
     <loading ref="loading"></loading>
 </div>
</template>

<script>

import axios from 'axios'
import BScroll from 'better-scroll'
export default {
 name:'cardcord',
 data(){
     return {
         paylist:[],
         isActive:0
     }
 },
 methods:{
     choose(index){

     }
 },
 mounted () {
     this.getData();
     var  myscroll = new BScroll('#cardCord',{     
                deceleration: 0.001,
                bounce: true,
                swipeTime: 1800,
                click: true,
                });
    
 },
 components:{
     
     myscroll:null
 },
 methods:{
     getData(){
         this.$refs.loading.show();
         axios.get('/card/cardcord',{
             params:{
                 userid:10,
                 currentPage:1
             }
         }).then(res=>{
             this.$refs.loading.hide();
             this.paylist = res.data.paylist;
              
         })
     },
 },

}
</script>
<style lang="scss" scoped>
 .cardcord_wrap {
     padding-top: 40px;
     &>ul {
         padding-bottom: 40px;
     }
     height: 100%;
     overflow: auto;
     background: #f5f5f5;
 }
 .item {
     padding: 10px 15px;
     margin-top: 10px;
     box-shadow: 1px 1px 1px #e8e8e8;
     background: #fff;
     border-bottom: 1px solid #e8e8e8;
     p {
         text-align: left;
         position: relative;
         b {
             position: absolute;
             top: 50%;
             right: 10px;
             transform: translateY(-50%);
         }
         &:nth-child(2){
             text-align: right;
         }
     }
 }
 .empty {
     width: 100%;
     height: 100%;
     img {
         width: 60%;
         margin: 100px auto 0;
     }
 }
</style>