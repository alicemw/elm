<template>
  <div class="wrap">
      <div class="order_wrap">
          <ul>
              <li class="item" v-for="(item,index) in orderlist" :key="index">
                  <div class="img">
                      <img :src="item.store_img" alt="">
                  </div>
                  <div class="info">
                    <p><b>{{item.store_name}}</b></p>
                    <p>共{{item.pay_num}}元</p>
                  </div>
                  
              </li>
          </ul>
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
          orderlist:null
      }
  },
  components:{
     
  },
  methods:{
      loadshow(){
          this.$refs.loading.show();
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
        display: flex;
        justify-content: space-between;
        padding: 10px 15px;
        border-bottom: 1px solid #e8e8e8;
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
</style>
