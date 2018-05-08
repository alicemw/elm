<template>
  <div class="wrap">
      <div class="benefit_wrap">
          <div class="tab">
              <span v-for="(item,index) in tabnav" @click="qiehuan(index)" :class="{active: isActive == index}" :key="index">{{item}}</span>
          </div>
          <div v-if="!isActive" class="hongbao">
              <div class="tabitems">
                <div class="itemtitle">
                    <p>有{{tabitem.length}}个红包即将到期
                        <router-link to="/benefit/intro"> 红包说明</router-link>
                    </p>
                </div>
                <div class="itemwrap"  v-for="(item,index) in tabitem" :key="index">
                    <div class="tabitem">
                        <div class="left">
                            <p>￥<b>{{item.hong_num}}</b>元</p>
                            <span>满{{item.need_num}}元可用</span>
                        </div>
                        <div class="right">
                            <p>分享红包<b>剩余{{expiredate(item.expire)}}日</b></p>
                            <p>{{item.expire}}日到期<br>限收货手机号为<br>{{phone}}</p>
                        </div>
                    </div>
                    <div class="itemfoot" v-if="item.hong_type.length>0">
                        限制范围：{{item.hong_type.join(',')}}
                    </div>
                </div>
                <router-link class="turnHistory" to="/benefit/history">查看历史红包></router-link>
            </div>
            <div class="footer">
                <router-link to="/benefit/exchange">兑换红包</router-link>
                <router-link to="/benefit/commend">推荐有奖</router-link>
            </div>
          </div>
          <div v-else class="daijinquan">
              <router-link class="djqintro" to="/benefit/djqintro">代金券说明</router-link>
              <img src="./../../assets/voucher.png" alt="">
              <router-link class="download" to="/download">下载或升级客户端</router-link>
          </div>
          
      </div>
      <headTop head-title="我的优惠"></headTop>
      <alert ref="alert"></alert>
      <transition name="slide" mode="out-in">
          <router-view></router-view>
      </transition>
  </div>
</template>
<script>
import headTop from '../../components/head'
import alert from '../../components/alert'
import axios from 'axios'
export default {
  name:'benefit',
  data(){
      return {
          isActive:0,
          tabnav:['红包','商家代金券'],
          tabitem:[]
      }
  },
  methods:{
      qiehuan(index){
          if(index == this.isActive){
              return
          }else{
              this.isActive =index;
          }
      },
      getData(){
          axios.get('/user/hongbao',{
              userid:this.$store.state.userinfo.userid
          }).then(res=>{
              this.tabitem = res.data.hongbaolist;
          })
      },
      expiredate(x){
          let now = new Date().getTime();
          let expiredate = new Date(x).getTime();
          let day = Math.ceil((expiredate-now)/(1000*60*24*60))
          return day;
      }
  },
  mounted(){
      this.getData()
  },
  computed:{
      phone(){
          return this.$store.state.userinfo.userphone
      }
  },
  components:{
      headTop,
      alert
  }
}
</script>
<style lang="scss" scoped>
    .benefit_wrap {
        padding-top: 40px; 
        height: 100%;
        overflow: auto;
    }
    .tab {
        display: flex;
        justify-content: space-around;
        text-align: center;
        padding: 5px 0;
        span {
            padding: 5px 0; 
            &.active {
                border-bottom: 2px solid #3190e8;
                color: #3190e8;
            }
        }
    }
    .tabitems {
        background: #F5F5F5;
        padding: 10px 0 40px 0;
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
        background-image: url('./../../assets/benefitbg.png');
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
                color: #ff5340;
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
                    color: #ff5340;
                }
            }
        }
    }
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        padding: 0 10px;
        background: #fff;
        width: 100%;
        justify-content: space-around;
        a {
            padding: 10px 0;
            width: 50%;
            color: #555;
            font-size: 16px;
            &:nth-child(1){
                border-right: 1px solid #e8e8e8;
            }
        }
    }
    .daijinquan {
        padding-top: 380px;
        position: relative;
        .djqintro {
            position: absolute;
            top: 5px;
            right: 10px;
            color: #3190e8;
            line-height: 20px;
            &::before{
                position: absolute;
                width: 18px;
                height: 18px;
                content: '?';
                background: #3190e8;
                color: white;
                border-radius: 50%;
                top: 1px;
                left: -20px;
            }
        }
        img {
            position: absolute;
            width:30%;
            top: 200px;
            left: 50%;
            transform: translate3d(-50%,-50%,0);
        }
        &>.download {
            position: absolute;
            top: 300px;
            width: 60%;
            left: 50%;
            border: none;
            padding:10px;
            background: #56d176;
            color: white;
            border-radius: 5px;
            opacity: 0.9;
            &:active {
                opacity: 1;
            }
            &:focus{
                outline: none;
            }
            font-size: 18px;
            transform: translate3d(-50%,-50%,0)
        }
    }
    .turnHistory {
        color:#666;
        font-size: 16px;
        display: block;
        margin: 20px 0;
    }
    .slide-enter-active,.slide-leave-active {
        transition: all .4s;
    }
.slide-enter,.slide-leave-active {
    transform: translateX(50px);
    opacity: 0;
}
</style>
