<template>
    <div class="loading" v-if="isLoading">
        <div>
            <div class="loadingimg" :style="{backgroundPositionY:(-positionY%7)*100+'px'}"></div>
            <div class="shadow"></div>
        </div>
        
    </div>
</template>
<script>
export default {
  name:'loading',
  data(){
      return {
          positionY:0,
          isLoading:false,
          timer:null
      }
  },
  methods:{
      hide(){
          this.isLoading = false;
      },
      show(){
          this.isLoading = true;
      }
  },
  mounted(){

      this.timer = setInterval(()=>{
          this.positionY ++;
      },600)
  },
  beforeDestroy(){
      clearInterval(this.timer)
  }
}
</script>
<style lang="scss" scoped>
.loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 100000;
    &>div {
        width: 100%;
        height: 100%;
        transform: scale(0.5);
    }
    .loadingimg {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100px;
        margin: -50px 0  0 -50px ;
        height: 100px;
        background: url('./../assets/icon_loading.png') center center no-repeat ;
        animation: load .6s infinite ease-in-out;
        
    }
    .shadow {
        width: 100px;
        height: 40px;
        border-radius: 50%;
        background: #CCC;
        position: absolute;
        top: 70%;
        left: 50%;
        margin: -50px 0 0 -50px;
        animation: shadow .6s infinite ease-in-out;
    }
}
@keyframes load {
    0%,100% {
        transform: translateY(-200px);
    }
    50% {
        transform: translateY(0);
    }
 
}
@keyframes shadow {
    0%,100% {
        transform: scale(0.5);
    }
    50% {
        transform: scale(0.9)
    }
}

</style>

