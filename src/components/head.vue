<template>
  <header class="headtop">
      <span class="back" @click="back"> 
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
        </svg>    
      </span>
      <span class="headTitle">
          <span>{{headTitle}}</span>
      </span>
      <span class="head_login" v-show="signUp">
          <router-link to="/profile">login</router-link>
      </span>
  </header>
</template>
<script>

export default {
  name:'headTop',
  props:['headTitle','signUp'],
  methods:{
      back(){
          this.$router.go(-1)
      }
  },
  data(){
      return {

      }
  },

  mounted(){
    
  }

}
</script>
<style lang="scss" scoped>
    .headtop {
        z-index: 4;
        box-sizing: border-box;
        height: 40px;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        line-height: 40px;
        background: #3190e8;
        color: white;
        font-weight: bold;
        text-align: center;
        overflow: hidden;
        max-width: 100%;
    }
    .back {
        width: 20px;
        height: 40px;
        top: 12px;
        left: 10px;
        position: absolute;
    }
    .headTitle {
        position: absolute;
        top: 0;
        left: 50%;
        text-align: center;
        width: 50%;
        transform: translateX(-50%);
        display: block;
    }
    .head_login {
        position: absolute;
        right: 10px;
        top: 0;
        color: white;
        a {
            color: white;
        }
    }

</style>

