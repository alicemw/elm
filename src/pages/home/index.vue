<template>
    <div class="home_wrap wrap">
        <headTop signUp="home" head-title="首页"></headTop>
        <p>{{message}}</p>
    </div>
</template>
<script>
import headTop from '../../components/head';
export default {
  name:'Home',
  data(){
      return {
          message:'shouey'
      }
  },
  components:{
      headTop
  }
}
</script>
<style lang="scss" scoped>
p {
    width: 100%;
    height: 500px;
    background: red;
}
</style>
