<template>
  <div class="wrap">
      <div class="city_wrap">
         <div class="search-city">
             <input v-model="citykey" type="text" placeholder="请输入学校、商务楼、地址">
             <p @click="search">提交</p>
         </div>
         <div v-show="searchlist !=null">
             <div class="searchlist" v-if="!!searchlist">
                <p  @click="choose(index)" v-for="(item,index) in searchlist" :key="index">
                    <b>{{item.name}}</b> <br />
                    {{item.address}}
                </p>
            </div>
            <div class="empty" v-else>
                很抱歉，搜索结果为空！
            </div>
         </div>
         
         <p class="his-title" v-show="searchlist == null" >搜索历史</p>
         <div class="searchlist" v-show="searchlist==null">
             <p v-for="(item,index) in hiscity" :key="index">
                 <b>{{item.name}}</b> <br />
                 {{item.address}}
             </p>
         </div>
      </div>
      <headTop :head-title="cityname" city="true"></headTop>
      <alert ref="alert"></alert>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name:'city',
  data(){
      return {
          cityid:'',//当前城市id,
          cityname:'',
          citykey:'',
          hiscity:[],
          searchlist:null
      }
  },
  mounted(){
      this.cityid = this.$route.params.id;
      let citylist = this.$store.state.citylist;
      this.cityname = this.$route.query.name;
      this.hiscity =this.$store.state.searchcityhis
      console.log(this.hiscity)
      
  },
  computed:{
      
  },
  methods:{
      search(){
          if(!this.citykey.trim()){
              this.$refs.alert.show('输入不能为空')
          }else{
              axios.get('http://cangdu.org:8001/v1/pois',{
                  params:{
                      type:'search',
                      city_id:this.cityid,
                      keyword:this.citykey
                  }
              }).then(res=>{
                  
                  this.searchlist = res.data
           
           })
          }
      },
      gethiscity(){

      },
      choose(index){
          this.$store.commit('setsearchcityhis',this.searchlist[index]);
          this.$route.push('/');
      }
  }
}
</script>
<style lang="scss" scoped>
.city_wrap  {
    padding-top: 40px;
    background: #f5f5f5;
    height: 100%;
    overflow: auto;
}
.search-city {
    background: #fff;
    margin-top: 10px;
    padding: 10px 15px;
    border-top: 1px solid #e8e8e8;
    input {
        width: 100%;
        padding: 6px 0;
        font-size: 14px;
        text-indent: 12px;
    }
    p {
        padding: 10px 0;
        text-align: center;
        margin-top: 10px;
        background: #3190e8;
        font-size: 16px;
        color: white;
    }
}
.his-title {
    text-align:left;
    padding: 10px 15px;

}
.searchlist {
    &>p {
        background: #fff;
        border-bottom: 1px solid #e8e8e8;
        padding: 5px 15px;
        text-align: left;
        line-height: 25px;
        color: #999;
        font-size: 12px;
        b {
            font-size: 15px;
            color: #333;
        }
    }
}
</style>

