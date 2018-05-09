<template>
  <div class="wrap">
      <div class="balance_wrap">
          <section class="num">
              <section class="num_in">
                  <header>当前余额 <router-link to="/balance/intro">余额说明</router-link></header>
                  <p class="cur_num"><b>{{balance.length>3 ? balance : Number(balance).toFixed(2) }}</b>元</p>
                  <button class="tixian" :class="{isEmpty:isEmpty}" @click="tixian">提现</button>
              </section>
          </section>
      </div>
      <headTop head-title="我的余额"></headTop>
      <alert ref="alert"></alert>
       <transition name="slide" mode="out-in">
          <router-view></router-view>
      </transition>
  </div>
</template>
<script>
import headTop from './../../components/head'
import alert from './../../components/alert'
export default {
  name:'balance',
  data(){
      return {
      }
  },
  methods:{
      tixian(){
          this.$refs.alert.show('取不了')
      }
  },
  components:{
      headTop,
      alert
  },
  computed:{
      isEmpty(){
          return this.balance <= 0;
      },
      balance(){
          return this.$store.state.userinfo.balance;
      }
  }
}
</script>
<style lang="scss" scoped>
.balance_wrap {
    padding-top: 40px;
}
.num {
    background: #3190e8;
    padding:8px;
    .num_in {
        background: #fff;
        border-radius: 5px;
        padding: 8px;
        &>header {
            display: flex;
            font-size: 12px;
            justify-content: space-between;
            &>a {
                color: #3190e8;
                position: relative;
                &::before {
                    position: absolute;;
                    width: 15px;
                    height: 15px;
                    background: #3190e8;
                    content: '?';
                    border-radius: 50%;
                    color: white;
                    line-height: 15px;
                    left:-17px;
                    top: 0;
                }
            }
        }
    }
    .cur_num {
        color: #333;
        text-align:left;
        margin: 10px 0 20px 0;
        b {
            font-size: 30px;
            font-weight: normal;
        }
    }
    .tixian {
        width: 100%;
        height: 40px;
        background:  #3190e8;
        border: none;
        border-radius: 2px;
        color:white;
        font-size: 16px;
        font-weight: bold;
        opacity: 0.9;
        &:active {
            border: none;
            outline: none;
            opacity: 1;
        }
        &:focus {
            outline: none;
        }
    }
    .isEmpty {
        background: #ccc;
    }
}
.slide-enter-active,.slide-leave-active {
        transition: all .4s;
    }
.slide-enter,.slide-leave-active {
    transform: translateX(50px);
    opacity: 0;
}
</style>
