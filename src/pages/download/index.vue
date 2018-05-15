<template>
  <div class="wrap">
      <div class="download_wrap">
          <img class="logo" src="./../../assets/elmlogo.jpeg" alt="">
          <p>下载饿了么app</p>
          <input type="submit" value="下载">
      </div>
      <headTop head-title="下载"></headTop>
  </div>
</template>
<script>


export default {
  name:'download',
  data(){
      return {
          
      }
  },
  components:{
      
  }
}
</script>
<style lang="scss" scoped>
.download_wrap {
    padding-top: 40px;
    .logo {
        width: 180px;
        border-radius: 20px;
        margin: 30px auto 10px;
    }
    input {
        width: 80%;
        margin: 20px auto 0;
        background: #4cd964;
        border: none;
        border-radius: 5px;
        opacity: 0.9;
        padding: 10px 0 ;
        color: white;
        &:active {
            opacity: 1;
            
        }
        &:focus {
            outline: none;
        }
    }
}
</style>

