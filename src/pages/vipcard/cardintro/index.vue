<template>
  <div class="wrap">
      <div class="intro_wrap">
          <dl class="introduction">
              <dt>Q1: 使用余额的条件</dt>
              <dd>
                  为了保护账户安全，使用余额前必须先绑定手机号。
              </dd>
              <dt>Q2: 余额可以怎么用？</dt>
              <dd>
                  余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。
              </dd>
              <dt>Q3:我要如何提现？</dt>
              <dd>
                  为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。
              </dd>
              <dt>Q4:为什么会提现失败？</dt>
              <dd>
                  可能原因有：您的姓名、开户行、银行卡号等信息不匹配；您当日的提现次数和金额超过限制；您的账户存在异常，被风控拦截。
              </dd>
          </dl>
      </div>
      <headTop head-title="会员说明"></headTop>

  </div>
</template>
<script>
import headTop from '../../../components/head'

export default {
    name:'cardintro',
    components:{
        headTop
    }
}
</script>
<style lang="scss" scoped>
    .intro_wrap {
        padding-top: 40px;
        overflow: auto;
        height: 100%;
    }
    .introduction {
        width: 100%;
        padding: 15px;
        text-align: left;
        dt {
            color: #333;
            font-size: 16px;
            line-height: 32px;
        }
        dd {
            color: #666;
            font-size: 14px;
            line-height: 28px;
        }
    }
</style>
