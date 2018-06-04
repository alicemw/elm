<template>
 <div class="food-choose">
     <div class="swiper-container">
         <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in foods" :key="index">{{item.name}}</div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

     </div>
     
 </div>
</template>

<script>
import Swiper from 'swiper'
export default {
 name:'food-choose',
 props:{
     foods:Array
 },
 mounted () {
     var _this =this;
     var myswiper = new Swiper('.swiper-container',{
          pagination: {
            el: '.swiper-pagination',
            renderBullet(index){
                console.log(_this.foods);
                return `<span>${this.foods[index].name}</span>`
            }
            },
     })
 }
}
</script>

<style lang="scss" scoped>
@import 'swiper/dist/css/swiper.min.css';

 .food-choose {
 }
</style>