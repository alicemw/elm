<template>
  <div class="wrap">
      <div class="city_wrap">

      </div>
      <headTop ></headTop>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name:'city',
  data(){
      return {
          cityid:''//当前城市id
      }
  },
  mounted(){
      this.cityid = this.$route.params.id;
      let citylist = this.$store.state.citylist;
          console.log(Object.keys(citylist))
  },
  computed:{
      citytitle(){
          let citylist = this.$store.state.citylist;
          for(x in citylist){
              console.log(x)
          }
      }
  }
}
</script>
<style lang="scss" scoped>

</style>

