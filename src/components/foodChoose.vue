<template>
 <div class="food-choose">
     <div class="left" >
         <div class="tab-container" :style="{transform:'translateY('+tabTop+'px)'}">
            <span ref="tab" :class="{active:isActive == index}" v-for="(item,index) in foods"  @click="tabclick(index)" :key="index">{{item.name}}</span>
         </div>
     </div>
     <div class="right">
         <div class="food-container">
             <div class="tab-item" v-for="(item,index) in foods" :key="index">
                <h4><b>{{item.name}}</b>  {{item.description}}</h4>
                <div v-for="(food,key) in item.foods" :key="key" class="food-item">
                    <div v-if="food.attributes && food.attributes.length>0" class="newfood">{{food.attributes[0].icon_name.length > 1 ? food.attributes[0].icon_name :food.attributes[0].icon_name+'品' }}</div>
                    <img :src="'http://cangdu.org:8001/img/'+food.image_path" alt="">
                    <div class="food-info">
                        <p class="food-name">{{food.name}}</p>
                        <p>{{food.description}}</p>
                        <p>{{food.tips}}</p>
                        <p class="activity" :style="{color:food.activity.icon_color}" v-if="food.activity">{{food.activity.image_text}}</p>
                        <p class="price">
                            ￥{{food.specfoods[0].price}}
                        </p>
                    </div>
                </div>
            </div>
         </div>
     </div>
     
 </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
 name:'food-choose',
 props:{
     foods:Array
 },
 data(){
     return {
         isActive:0,
         tabTop:0
     }
 },
 mounted () {
    var mymenu = new Bscroll('.left',{
       click:true
    })
    var foodscroll = new Bscroll('.right',{
        probeType: 3,
        deceleration: 0.001,
        swipeTime: 2000,
        click:true
    })
    console.log(mymenu)
},
computed:{

},
methods:{
    tabclick(index){
        this.isActive =index;
        /* if(index <3){
            this.tabTop =0
        }else if(index+5>this.foods.length){
            this.tabTop = -(this.foods.length-5)*42
            console.log('33',this.foods.length)
        }else{
            this.tabTop = -(index-3)*42;
        }
        console.log(index) */
    }
}
}
</script>

<style lang="scss" scoped>

 .food-choose {
     display: flex;
     padding: 0 0 15px;
     .left {
         width: 80px;
         height: 465px;
         overflow: auto;
         
         span {
            display: block;
            padding: 10px;
            word-break: break-all;
            white-space: wrap;
            text-align: center;
            border-left: 3px solid transparent;
            border-bottom: 1px solid #e8e8e8;
            &.active {
                border-left: 3px solid #3190e8;
            }
         }
     }
     .right {
         flex: 1;
          height: 465px;
          overflow: auto;
         .tab-item {
             h4 {
                 background: #eee;
                 text-align: left;
                 padding: 10px 5px;
                 font-size: 14px;
                 b {
                     font-size: 18px;
                 }
             }
             .food-item {
                 display: flex;
                 padding: 15px 10px;
                 position: relative;
                 overflow: hidden;
                 .newfood {
                     position: absolute;
                     top: 0;
                     left: 0;
                     background: #4cd964;
                     color: white;
                     font-size: 12px;
                     padding: 30px 15px 1px 13px;
                     transform: rotateZ(-45deg) translateY(-32px);
                }
                
                 img {
                     width: 50px;
                     height: 50px;
                     display: block;
                     vertical-align: middle;
                 }
                 .food-info {
                     
                     flex: 1;
                     font-size: 14px;
                     text-align: left;
                     padding-left: 5px;
                     .food-name {
                         font-size: 16px;
                         font-weight: bold;
                     }
                     .price {
                         color: #f60;
                         font-weight: bold;
                     }
                 }
             }
         }
     }
 }
.activity {
    border-radius: 1000px;
    border: 1px solid #e8e8e8;
    display: inline-block;
    padding: 2px;
}
</style>