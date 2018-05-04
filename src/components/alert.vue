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
  props:['alertShow','alertMessage'],
  data(){
      return {
          
      }
  },
  methods:{
      certen(){
          this.$emit('test1')
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
        height: 100px;
        line-height: 50px;
        text-align: center;
        background: #ccc;
    }
    .message {
        border-bottom: 1px solid #eee;
    }
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0)
        }
        50% {
            transform: scale(1.5)
        }
        100% {
            transform: scale(1)
        }
    }
</style>
