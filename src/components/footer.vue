<template>
  <div id="footer">
      <router-link to="/msite">外卖</router-link>
      <router-link to="/search">搜索</router-link>
      <router-link to="/order">订单</router-link>
      <router-link to="/profile">我的</router-link>
  </div>
</template>
<script>
export default {
  name:'foot'
}
</script>
<style lang="scss" scoped>
#footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    display: flex;
    box-shadow: 1px -1px 5px #ccc;
    justify-content: space-between;
    a {
        width: 25%;
        font-size: 12px;
        padding: 23px 0 2px 0;
        position: relative;
        color: #666;
        &::before {
            position: absolute;
            width: 20px;
            height: 20px;
            top: 2px;
            left: 50%;
            transform: translateX(-50%);
            content: '';
            background: #ccc;
        }
    }
}
</style>
