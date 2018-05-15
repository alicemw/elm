<template>
  <div class="wrap">
    <headTop head-title="添加地址"></headTop>
    <div class="add_wrap">
        <section>
            <input class="name" v-model="name" type="text" placeholder="请输入姓名 ">
        </section>
        <section>
            <input type="text" v-model="street" placeholder="小区写字楼等" class="street">
        </section>
        <section>
            <input type="text" v-model="detailaddress" placeholder="详细地址" class="detailaddress">
        </section>
        <section>
            <input type="text" v-model="phone" placeholder="联系电话" class="phone">
        </section>
        <button @click="checkdata">新增地址</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {mapState} from 'vuex'

export default {
  name:'add',
  data(){
      return {
          name:null,
          street:null,
          detailaddress:null,
          phone:null,
          ischecked:false
      }
  },
  components:{
    
  },
  methods:{
      addarea(){
          if(this.ischecked){
              axios.post('/user/address/',{
                  address:this.street +''+this.detailaddress,
                  phone:this.phone,
                  realname:this.name
              }).then((res)=>{
                  if(res.data.info == 'success'){
                      /* this.$store.state.userinfo.address.unshift({
                          name:this.name,
                          ad:this.street +''+this.detailaddress,
                          phone:this.phone
                      }); */
                      this.$store.commit('setProfile',{
                          address:{
                               name:this.name,
                                ad:this.street +''+this.detailaddress,
                                phone:this.phone
                          }
                      })
                      //像父组件传值说明提交已成功！
                      this.$emit('test');
                      this.$router.go(-1);
                  }else{
                      alert('未知故障！')
                  }
              })
          }else{
              alert('请全部填好！')
          }
      },
      checkdata(){
         let arr = Array.from(Object.keys(this.$data))
         let b = arr.filter((item,index)=>{
             return !this.$data[item];
         })
         if(b.length>1){
             alert('请全部填好')
         }else if(b.length ==1){
             this.ischecked = true;
             this.addarea()
         }else{
             alert('未知故障！')
         }
      }
  },
  computed:mapState([
      'userinfo',
      'isLogin'
  ])
}
</script>
<style lang="scss" scoped>
    .wrap {
        background: #e8e8e8;
    }
    .add_wrap {
        padding-top: 40px;
        &>section {
            width: 100%;
            margin: 10px 0;
            &>input {
                 width: 300px;
                margin: 0 auto;
                height: 40px;
                background: white;
                font-size: 14px;
                outline: none;
                padding: 2px 5px;
                border: 1px solid #e8e8e8;
                border-radius: 5px;
            }
        }
        button {
            width: 300px;
            height: 40px;
            margin: 20px auto 0;
            background: #4cd964;
            border: none;
            line-height: 40px;
            color: white;
            opacity: 0.9;
            border-radius: 5px;
            &:active {
                border: none;
                outline: none;
                opacity: 1;
            }
            &:focus {
                border: none;
                outline: none;
            }
        }
    }


</style>
