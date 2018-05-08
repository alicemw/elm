<template>
  <div class="wrap">
      <div class="history_wrap" id="scrollWrap">
          <ul class="scrollul">
              <li class="itemwrap" v-for="(item,index) in hbData" :key="index">
                  
                  <div class="tabitem">
                    <div class="left">
                        <p>￥<b>{{item.hong_num}}</b>元</p>
                        <span>满{{item.need_num}}元可用</span>
                    </div>
                    <div class="right">
                        <p v-if="expiredate(item.expire)<0">分享红包 <b>已超时</b></p>
                        <p v-else>分享红包<b>剩余{{expiredate(item.expire)}}日</b></p>
                        <p>{{item.expire}}日到期<br>限收货手机号为<br>{{phone}}</p>
                    </div>
                  </div>
                  <div class="itemfoot" v-if="item.hong_type.length>0">
                      限制范围：{{item.hong_type.join(',')}}
                  </div>
              </li>
          </ul>
      </div>
      <headTop head-title="历史红包"></headTop>
  </div>
</template>
<script>
import headTop from './../../../components/head'
import axios from 'axios'
import Bscroll from 'better-scroll'
export default {
  name:'hbhistory',
  data(){
      return {
          hbData:[]
      }
  },
  components:{
      headTop
  },
  methods:{
      expiredate(x){
          let now = new Date().getTime();
          let expiredate = new Date(x).getTime();
          let day = Math.ceil((expiredate-now)/(1000*60*24*60))
          return day;
      }
  },
  mounted(){
      axios.get('/benefit/history',{
          params:{
              userid:10
          }
      }).then(res=>{
          this.hbData =res.data.hongbaolist;
      })
      
    var myscroll = new Bscroll('#scrollWrap',{
        deceleration: 0.001,
        bounce: true,
        swipeTime: 1800,
        click: true,
    });

  },
  computed:{
      phone(){
          return this.$store.state.userinfo.userphone
      }
  }
}
</script>
<style lang="scss" scoped>
.history_wrap {
    padding-top: 40px;
    height: 100%;
    overflow: hidden;
    .scrollul {
        padding: 20px 0 30px 0;
    }
}
.tabitems {
        background: #F5F5F5;
        padding: 10px 0;
        .itemtitle {
            margin-top: 10px;
            text-align: left;
            p {
                position: relative;
                padding: 0 10px;
                color: #666;
                a {
                    position: absolute;
                    top: 0;
                    right: 10px;
                    color: #3190e8;
                    &::before {
                        position: absolute;
                        width: 15px;
                        height: 15px;
                        top: 4px;
                        text-indent: 2px;
                        left: -20px;
                        line-height: 15px;
                        content: '?';
                        border-radius: 10px;
                        background: #3190e8;
                        color: white;
                    }
                }
            }
        }
    }
    .itemwrap {
        margin: 5px 10px;
        background: #f9f9f9;
        .itemfoot {
            text-align: left;
            padding: 10px 5px;
            font-size: 14px;
        }
    }
    .tabitem {
        background-color: #fff;
        background-image: url('./../../../assets/benefitbg.png');
        background-repeat: repeat-x;
        background-size: 10px;
        display: flex;
        justify-content: space-between;
        
        padding:20px 5px;
        border-radius: 10px;
        font-size: 14px;
        text-align: left;
        color: #666;
        &>.left {
            border-right: 1px dashed #ccc;
            width: 31%;
            p {
                color: #ccc;
                b {
                    font-size: 28px;
                }
                margin: 10px;
            }
        }
        &>.right {
            width: 66%;
            p {
                line-height: 22px;
            }
            p:nth-child(1){
                position: relative;
                color: #333;
                &>b {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    font-weight: normal;
                    color: #ccc;
                }
            }
        }
    }

</style>

