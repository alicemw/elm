<template>
  <div class="wrap">
      <div class="order_wrap">
        <transition-group  name="remove" tag="ul" >
            <li class="item" v-for="(item,index) in orderlist" :key="item.id">
                <leftDelete @remove="remove(index)">
                    <div>
                        <div class="img">
                            <img :src="item.store_img" alt="">
                        </div>
                        <div class="info">
                            <p><b>{{item.store_name}}</b></p>
                            <p>共{{item.pay_num}}元</p>
                        </div>
                    </div>
                </leftDelete>
                
            </li>
        </transition-group>    
       
      </div>
      <headTop head-title="订单列表"></headTop>
      <loading ref="loading"></loading>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name:'order',
  data(){
      return {
          orderlist:[]
      }
  },
  components:{
     
  },
  methods:{
      loadshow(){
          this.$refs.loading.show();
      },
      test(){
         this.orderlist.splice(1,1);
         console.log()
      },
      remove(index){
          console.log(index)
          this.orderlist.splice(index,1);
          
        
      }
  },

  mounted(){
      this.$refs.loading.show();
          axios.get('/order',{
            params:{
                userid:10
            }
          }).then(res=>{
              this.orderlist = res.data;
              console.log(res)
              
              this.$refs.loading.hide();
          })

  }
}
</script>
<style lang="scss" scoped>
.order_wrap {
    padding-top: 40px;
    height: 100%;
    overflow: auto;
    .item {
        display: block;
        height: 70px;
        overflow: hidden;
        padding: 0 15px;
        transition: all .3s ease-in-out;
        border-bottom: 1px solid #e8e8e8;
        .delete {
            margin: 10px 0;
        }
        .img {
            width: 20%;
        }
        .info {
            width: 75%;
            text-align: left;
            line-height: 24px;
        }
    }
}

.remove-enter-active.remove-leave-active,{
    
  
}
.remove-leave-to {
    height: 0 !important;
    transform-origin: 0 0;
}
</style>
