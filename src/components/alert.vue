<template>
    <transition name="bounce">
        <div v-show="alertShow" class="alert_wrap">
            <p class="message">{{alertMessage}}</p>
            <p @click="certen">确定</p>
        </div>
    </transition>
</template>
<script>
export default {
  name:'alert',
  data(){
      return {
          alertShow:false,
          alertMessage:'',
          isRun:false
      }
  },
  methods:{
      certen(){
          //this.$emit('test1'); //向父组件传值
          this.alertShow = false;
          if(this.isRun){
              this.$router.go(-1)
          }
      },
      show(info,callback){
          this.alertMessage =info;
          this.alertShow =true;
          if(callback){
              this.isRun = true;
          }
      }
     
  }

}
</script>
<style lang="scss" scoped>
    .alert_wrap {
        position:fixed;
        border-radius: 5px;
        border: 1px solid #ccc;
        z-index: 10;
        top: 50%;
        left: 50%;
        margin: -25px 0 0 -100px;
        width: 200px;
        line-height: 50px;
        text-align: center;
        background: #ccc;
    }
    .message {
        border-bottom: 1px solid #eee;
        padding:10px;
        line-height: 30px;
    }
    .bounce-enter-active {
        animation: bounce-in .4s ease-in-out;
    }
    .bounce-leave-active {
        animation: bounce-in .4s ease-in-out reverse
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0)
        }
        50% {
            transform: scale(1.3)
        }
        100% {
            transform: scale(1)
        }
    }
</style>
