<template>
  <div class="wrap">
      <headTop head-title="个人信息"></headTop>
      
      <div class="info_wrap">
        <section class="canclick avatar">
        <input type="file" @change="getAvatar" >
        <p>头像</p>
        <div class="avatarimg">
            <img :src="avatar" alt="">
        </div>
        </section>
        
        <router-link class="canclick" to="/profile/info/setname">
            <p>用户名</p>
            <div>
                {{this.$store.state.userinfo.username}}
            </div>
        </router-link>
        <router-link class="canclick" to="/profile/info/areainfo">
            <p>收货地址</p>
            
        </router-link>
        <div class="canclick disable">
            账号绑定
        </div>
        <router-link class="canclick" to="/profile/info/phone">
            <p class="bphone">手机</p>
            
        </router-link>
      </div>
      
      <transition name="slide" mode="out-in">
          <router-view></router-view>
      </transition>
      
  </div>
</template>
<script>
import headTop from '../../../components/head'
export default {
  name:'profileInfo',
  components:{
      headTop
  },
  methods:{
    getAvatar(e){
         let file = e.target.files[0];           
          let param = new FormData(); //创建form对象
          param.append('file',file,file.name);//通过append向form对象添加数据
          param.append('chunk','0');//添加form表单中其他数据
          console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
          let config = {
            headers:{'Content-Type':'multipart/form-data'}
          };  //添加请求头
          this.axios.post('/images/avatar',param,config)
          .then(response=>{
            console.log(response.data);
          })        
    }    
  },
  computed:{
      avatar(){
          return this.$store.state.userinfo.useravatar
      }
  }


}
</script>
<style lang="scss" scoped>
    .info_wrap {
        padding-top: 40px;
       
        section {
            
            input[type='file'] {
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                opacity: 0;
            }
        }
    }
    .canclick {
        display: flex;
        padding: 5px 10px;
        position: relative;
        height: 50px;
        line-height:50px;
        color: black;
        justify-content: space-between;
        border-bottom: 1px solid #e8e8e8;
        text-align:left;
        &.disable {
            background: #ccc;
            &::after {
                content: ''
            }
        }
        &::after {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 16px;
            right: 10px;
            content: '>';
            color:#ccc;
        }
         p {
            display: inline-block;
            height: 40px;
            line-height: 40px;
        }
        &>div {
            display: inline-block;
            line-height: 40px;
            vertical-align: middle;
            margin-right: 20px;
            
        }
        .avatarimg {
            width: 40px;
            height: 40px;
            background: #666;
            border-radius: 50%;
            overflow: hidden;
            img  {
                width: 100%;
                display: block;
            }
        }
        .bphone {
            position: relative;
            padding-left: 15px;
            &:before {
                position: absolute;
                top: 0;
                left: 0;
                content: '...';
            }
        }
    }

    .slide-enter-active,.slide-leave-active {
        transition: all .4s;
    }
    .slide-enter,.slide-leave-active {
        transform: translateX(50px);
        opacity: 0;
    }
</style>

