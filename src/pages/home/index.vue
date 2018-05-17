<template>
    <div class="wrap">
        <headTop signUp="home" head-title="首页"></headTop>
        <div class="home_wrap">
            <p class="city_title">当前定位城市：<span>定位不准时在城市列表中选择</span></p>
            <router-link class="currentcity" :to="cityurl">{{currentCity}}</router-link>
            <section class="hotcities">
                <h4>热门城市</h4>
                <div class="hot_container">
                    
                    <router-link tag="span" :to='"/city/"+ item.id' v-for="(item,index) in hotcities" :key="index">
                        {{item.name}}
                    </router-link>
                </div>
            </section>
            <section class="allcities">
                <ul>
                    <li v-for="(item,index) in sortgroupcity" :key="index">
                        <h4>{{index}}</h4>
                        <ul class="allcity">
                            <li class="allcityitem" v-for="(x,index) in item" :key="index">
                                <router-link class="allcityname" tag="span" :to='"/city/" + x.id'>{{x.name}}</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
        <!-- 取个名字方便调用方法 -->
        <alert  ref="alert" @test="callback" ></alert>
        <foot></foot>
        <loading ref="loading"></loading>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name:'Home',
  data(){
      return {
          message:'shouey',
          flag:false,
          currentCity:'',
          cityurl:'',
          hotcities:[],
          allcities:[]
      }
  },
  methods:{
      alert(){
        
         this.$refs.alert.show('hello')
      },
      hehehe(){
          this.flag = false;
      },
      callback(){}
  },
  computed:{
      //将获取的数据按照A-Z字母开头排序
        sortgroupcity(){
            let sortobj = {};
            for (let i = 65; i <= 90; i++) {
                if (this.allcities[String.fromCharCode(i)]) {
                    sortobj[String.fromCharCode(i)] = this.allcities[String.fromCharCode(i)];
                }
            }
            this.$store.commit('setCityList',sortobj);
            return sortobj
        }
  },
  mounted(){
      //获取当前城市
      axios.get('http://cangdu.org:8001/v1/cities',{
         params:{
             type:'guess'
         }
      }).then(res=>{
          this.currentCity =res.data.name
          this.cityurl = `city/${res.data.id}`
      })
      //获取热门城市
      axios.get('http://cangdu.org:8001/v1/cities',{
         params:{
             type:'hot'
         }
      }).then(res=>{
          this.hotcities = res.data
      })
      //获取所有城市
      axios.get('http://cangdu.org:8001/v1/cities',{
         params:{
             type:'group'
         }
      }).then(res=>{
          this.allcities = res.data
      })

  }
}
</script>
<style lang="scss" scoped>
.home_wrap {
    padding-top: 40px;
    height: 100%;
    overflow-y: auto;
    background: #f5f5f5;
    text-align: left;
}
.city_title {
    font-size: 14px;
    line-height: 40px;
    text-align: left;
    background: #fff;
    padding: 0 15px;
    border-bottom: 1px solid #e8e8e8;
    span {
        float: right;
        font-size: 12px;
        color: #9f9f9f;
        font-weight: bold;
    }
}
.currentcity {
    background: #fff;
    width: 100%;
    display: block;
    padding: 0 15px;
    font-size: 16px;
    color: #3190e8;
    height: 36px;
    line-height: 36px;
    text-align: left;
    border-bottom: 2px solid #e4e4e4;
    position: relative;
    &::after{
        position: absolute;
        top: 0;
        right:20px;
        content: '>';
        line-height: 36px;
        height: 36px;
    }
}
.hotcities {
    background: #fff;
    border-top:2px solid #e4e4e4;
    h4 {
        line-height: 40px;
        font-size: 16px;
        padding: 0 15px;
    }
    .hot_container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        border-top: 1px solid #e8e8e8;
        span {
            width: 25%;
            line-height: 35px;
            border-bottom: 1px solid #e8e8e8;
            border-right: 1px solid #e8e8e8;
            display: inline-block;
            text-align: center;
            &:nth-child(4n){
                border-right: none;
            }
            color: #3190e8;
            font-size: 14px;
        }
    }
}
.allcities {
    background: #fff;
    h4 {
        padding: 0 15px;
        line-height: 35px;
    }
    .allcity {
        display:flex;
        flex-wrap: wrap;
        list-style: none;
        border-top: 1px solid #e8e8e8;
        border-bottom: 1px solid #e8e8e8;
        li {
            width: 25%;
            text-align: center;
            border-right: 1px solid #e8e8e8;
            border-bottom: 1px solid #e8e8e8;
        
            span {
                display: block;
                color: #3190e8;
                font-size: 14px;
                line-height: 35px;
                width: 100%;
                height: 100%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>
