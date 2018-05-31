<template>
 <div class="wrap">
     <div class="msite_wrap">
         <nav class="foodtype swiper-container">
             <div class="swiper-wrapper">
                 <div class="swiper-slide"  v-for="(item,index) in foodType" :key="index">
                     <router-link  :to="'/food?geohash='+cityinfo.geohash+'&title='+cityinfo.address+'&id='+fooditem.id" v-for="fooditem in item" :key="fooditem.id" >
                        <img :src="'https://fuss10.elemecdn.com'+fooditem.image_url" alt="">
                        {{fooditem.title}}
                    </router-link>
                 </div>
             </div>
             <div class="swiper-pagination"></div>
         </nav>
         <div class="store-container">
             <header>附近商家</header>
             <div @click="gotoshop(index)" class="store-item" v-for="(item,index) in storeList" :key="index">
                 <img :src="'http://cangdu.org:8001/img/'+item.image_path" alt="">
                 <div class="store-info">
                     <h3>{{item.name}} 
                         <span>
                         <i v-for="x in item.supports" :key="x.id">
                             {{x.icon_name}}
                         </i>
                         </span> 
                     </h3>
                     <p><rate-stars :rating="item.rating"></rate-stars>{{item.rating}} <b>月售{{item.recent_order_num}}</b><span class="tags"><i v-if="!!item.delivery_mode">{{item.delivery_mode.text}}</i><i class="zhun" v-if="zhunshi(index)">准时达</i></span></p>
                     <p>￥{{item.float_minimum_order_amount}}元起送/配送费约{{item.float_delivery_fee}}元 <span class="tags">{{item.distance}}/{{item.order_lead_time}}</span> </p>
                 </div>
             </div>
         </div>
     </div>
     <headTop :head-title="title" signUp='1' ></headTop>
 </div>
</template>

<script>
import axios from 'axios'
import Swiper from 'swiper'
export default {
 name:'msite',
 data(){
     return {
         title:'',
         foodType:[],
         storeList:[],
         cityinfo:null
     }
 },
 created(){

     
     
 },
 methods:{
     gotoshop(index){
         this.$router.push({path:'/shop',query:{
             shopinfo:this.storeList[index]
         }})
     },
     zhunshi(index){
         let zhunStatus;
         if(this.storeList[index].supports && this.storeList[index].supports instanceof Array){
             this.storeList[index].supports.forEach(element => {
                if(element.icon_name == '准'){
                    zhunStatus = true
                }
            });
         }else{
             zhunStatus =false;
         }
         
         return zhunStatus;
     }
 },
 mounted () {
    this.cityinfo = this.$store.state.currentCity;
    this.title =this.cityinfo.address;
   let geohash = this.cityinfo.geohash;
    var myswiper =null;
     axios.get('http://cangdu.org:8001/v2/index_entry',{
            params:{
                geohash,
                group_type: '1',
                'flags[]': 'F'
            }
        }).then(res=>{
            let arr1 =res.data.splice(0,8);
            let arr2 =res.data;
            this.foodType = [arr1,arr2];
            
    }).then(()=>{
         myswiper = new Swiper('.swiper-container',{
                pagination : {
                    el:'.swiper-pagination',
                    type:'bullets',           
                },
                loop:true,
            })   
    })
    axios.get('http://cangdu.org:8001/shopping/restaurants',{
        params:{
            latitude:geohash[0],
            longitude:geohash[1]
        }
    }).then(res=>{
        this.storeList =res.data;
    })
 }
}
</script>
<style lang="scss" scoped>
@import 'swiper/dist/css/swiper.min.css';
 .msite_wrap {
     padding-top: 40px;
     height: 100%;
     overflow: auto;
 }
 .swiper-container {
     width: 100%;
     height: 200px;
     border-bottom: 1px solid #ccc;
     background: #fff;
     .swiper-slide {
         display: flex;
         justify-content: space-between;
         flex-wrap: wrap;
         text-align: center;
         a {
         display: inline-block;
         font-size: 14px;
         color: #666;
         width: 25%;
         img {
             width: 50%;
             display: block;
             margin:15px auto;
            
         }
     }
     }
     .swiper-pagination /deep/ .swiper-pagination-bullet {
         width: 8px;
         height: 8px;
         background: #000;
         opacity: 0.2;
         display: inline-block;
         margin: 0 4px;
         
         border-radius: 100px;
         &.swiper-pagination-bullet-active {
             background: #007aff;
              opacity: 1;
         }
     }
}
.store-container {
    margin-top: 10px;
    background: #fff;
    padding: 10px;

    header {
        text-align: left;
        font-size: 14px;
    }
    .store-item {
        padding:10px 0;
        border-bottom: 1px solid #e8e8e8;
        display: flex;
        justify-content: space-between;
        img {
            width: 60px;
            height: 60px;
            display: inline-block;
        }
        .store-info {
            flex: 1;
            overflow: hidden;
            text-align: left;
            h3 {
                font-size: 14px;
                padding-left: 55px;
                position: relative;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                padding-right: 35px;
                &::before {
                    content: '\54C1\724C';
                    position: absolute;
                    left: 10px;
                    display: inline-block;
                    font-size: 14px;
                    line-height: 18px;
                    color: #333;
                    background-color: #ffd930;
                    padding: 0 4px;
                    border-radius: 4px;
                    margin-right: 10px;
                }
                span {
                    position: absolute;
                    right: 0;
                    letter-spacing: -1px;
                    font-size: 12px;
                    color: #888;
                }
                i {
                    font-style: normal;

                }
            }
            p {
                padding-left: 10px;
                font-size: 10px;
                transform: scale(1);
                margin: 5px 0;
                position: relative;
                transform-origin: left;
                .rating_container {
                    display: inline-block;
                    margin-right: 3px;
                }
                .tags {
                    position: absolute;
                    right: 0;
                    transform-origin: right;
                    transform: scale(0.8);
                    i {
                        padding: 1px;
                        font-style: normal;
                        background: #3190e8;
                        border: 1px solid #3190e8;
                        color: white;
                        margin-left: 2px;
                        font-size: 12px;
                        &.zhun {
                            background: #fff;
                            color: #3190e8;
                            border: 1px solid #3190e8;
                        }
                    }
                }
            }
        }
        
    }
}
</style>    