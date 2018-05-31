<template>
 <div class="wrap">
     <span class="back" > 
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <polyline @click="back" points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
        </svg>    
      </span>
     <div class="shop">
         <div class="shop-info">
             <img :src="'http://cangdu.org:8001/img/'+shopinfo.image_path" alt="">
         </div>
     </div>
 </div>
</template>

<script>
export default {
 name:'wrap',
 data(){
     return {
         shopinfo:null,
     }
 },
 created(){
     this.shopinfo =this.$route.query.shopinfo;     
 },
 mounted () {
 },
 methods:{
     back(){
         this.$router.go(-1)
     }
 }
}
</script>
<style lang="scss" scoped>
 .wrap {
     .back {
         position: fixed;
         width: 100%;
         height: 44px;
         left: 0;
         top: 0;
         padding: 15px 15px 0;
     }
 }
</style>