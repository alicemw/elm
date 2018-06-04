<template>
 <div class="wrap">
     <span class="back" @click="back"  > 
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
        </svg>    
      </span>
     <div class="shop" :style="headerStyle">
         <div class="shoptop">
             <img :src="'http://cangdu.org:8001/img/'+shopinfo.image_path" alt="">
            <div @click="toDetail" class="shop-info">
                <h4>{{shopinfo.name}}</h4>
                <p>商家配送/{{shopinfo.float_minimum_order_amount}}分钟送达/配送费￥{{shopinfo.float_delivery_fee}}</p>
                <p>公告：{{shopinfo.promotion_info}}</p>
            </div>
         </div>
         <div class="huodong" v-if="shopinfo.activities.length>0">
             <span class="huodong-icon">{{shopinfo.activities[0].icon_name}}</span>
             <span>{{shopinfo.activities[0].description}}</span>
             <span class="huodong-num">{{shopinfo.activities.length}}个活动</span>
         </div>
        
     </div>
     <div class="goods">
         <nav class="goods-nav">
             <span v-for="(item,index) in tabitems" @click="tabChange(index)" :key="index" :class="{active:tabActive == index}"> <i>{{item}}</i></span>
         </nav>
         <div class="tab-container">
             <div class="foods">
                <food-choose :foods="foods" ></food-choose>
             </div>
             <div class="pingjia">

             </div>
         </div>
     </div>
 </div>
</template>

<script>
import axios from 'axios'
export default {
 name:'wrap',
 data(){
     return {
         shopinfo:null,
         tabActive:0,
         tabitems:['商品','评价'],
         foods:[]
     }
 },
 created(){
     this.shopinfo =this.$route.query.shopinfo;     
 },
 mounted () {
     axios.get('http://cangdu.org:8001/shopping/v2/menu',{
         params:{
             restaurant_id:this.shopinfo.id
         }
     }).then(r=>{
         this.foods =r.data;
     })
     
 },
 computed:{
     headerStyle(){
         return {
             background:'url(http://cangdu.org:8001/img/'+this.shopinfo.image_path+')',
             color:'white'
         }
     }
 },
 methods:{
     back(){
         this.$router.go(-1)
     },
     toDetail(){
         this.$router.push('detail')
     },
     tabChange(index){
         this.tabActive =index;
     }
 }
}
</script>
<style lang="scss" scoped>
 .wrap {
     .back {
         position: fixed;
         width:60px;
         height: 44px;
         left: 0;
         top: 0;
         padding: 15px 15px 0;
         z-index: 10;
     }
 }
 .shop {
     font-size: 12px;
     padding: 20px 15px;
     .shoptop {
         display: flex;
     &>img {
         width: 60px;
         height: 60px;

     }
     }
     &-info {
         flex: 1;
         text-align: left;
         margin-left: 10px;
         h4 {
             font-size: 16px;
         }
         p {
             margin-top: 5px;
             font-size: 14px;
             overflow: hidden;
             white-space: nowrap;
             text-overflow: ellipsis;
         }
     } 
     .huodong {
         text-align: left;
         font-size: 14px;
         position: relative;
         margin-top: 5px;
         padding: 4px;
         &-icon {
             background: rgb(240, 115, 115);
             padding: 4px;
         }
         &::after {
             position: absolute;
             top: 50%;
             right: 20px;
             content: '>';
             padding: 2px;
             height: 20px;
             margin-top: -10px;
         }
         &-num {
             position: absolute;
             right: 30px;
         }

     }
 }
 .goods {
    padding: 20px 15px;
    background: #fff;
    border-bottom: 1px solid #e8e8e8;
   &-nav {
     display: flex;
     span {
         display: block;
         width: 50%;
         text-align: center;
         font-size: 18px;
         i {
             font-style: normal;
         }
         &.active {
             color: #3190e8;
             i {
                 border-bottom: 2px solid #3190e8;
                 padding-bottom: 5px;
             }
             
         }
     }  
   }
}
</style>