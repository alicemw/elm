import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)
const state = {
    userinfo:{
        username:'login/register',
        userphone:'no cellphone',
        useravatar:null
    },
    isLogin:false,
    codenum:null
}
const store = new vuex.Store({
    state
})
export default store;