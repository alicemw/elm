<template>
  <div class="wrap">
      <div class="commend_wrap">
          <img src="./../../../assets/activity.png" alt="">
          <div class="invite">
              <span>邀请微信好友</span>
              <span>邀请QQ好友</span>
              <span>面对面邀请</span>
          </div>
          <div class="income">
              <div class="left">
                  <p>累计收益</p>
                  <p><b>{{income}}</b>元</p>
              </div>
              <div class="right">
                  <p>成功邀请</p>
                  <p><b>{{inviteNum}}</b>人</p>
              </div>
          </div>
          <div class="incomeDetail">
              -收益明细-
          </div>
          <div class="fastInvite">
              <img src="./../../../assets/qianbao.png" alt="">
              <p>还不赶紧行动</p>
          </div>
      </div>
      <headTop head-title="推荐"></headTop>
  </div>
</template>
<script>
export default {
  name:'commend',
  data(){
      return {
          income:0,
          inviteNum:0
      }
  },
  components:{
      
  }
}
</script>
<style lang="scss" scoped>
.commend_wrap {
    padding-top: 40px;
    background: #F5F5F5;
    height: 100%;
    overflow: auto;
    img {
        width: 100%;
        display: block;
    }
}
.invite {
    display: flex;
    padding: 20px 0;
    background: #fff;
    justify-content: space-around;
    span {
        position: relative;
        padding-top: 55px;
        font-size: 14px;
        &::before {
            position: absolute;
            width: 50px;
            height: 50px;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            background: url('./../../../assets/weixin.png') center center no-repeat;
            background-size: 50px 50px;
            border-radius: 50%;
            content: ''
        }
        &:nth-child(2){
            &::before {
                background: url('./../../../assets/qq.png') center center no-repeat;
                background-size: 50px 50px;
            }
        }
        &:nth-child(3){
            &::before {
                background: url('./../../../assets/fenxiang.png') center center no-repeat;
                background-size: 50px 50px;
            }
        }
    }
}
.income {
    display: flex;
    padding: 20px 15px;
    justify-content: space-between;
    &>div {
        width: 50%;
        font-size: 14px;
        color: #666;
        b {
            font-size: 18px;
            color: red;
        }
        &:nth-child(1){
            border-right: 1px solid #e8e8e8;
        }
    }

}
.fastInvite {
    padding:20px 15px;
    img {
        display: block;
        width: 40px;
        margin: 20px auto;
    }
    p {
        font-size: 14px;
    }
}
</style>
