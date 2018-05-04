import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)
const state = {
    userinfo:null,
    isLogin:false,
    codenum:null
}
const store = new vuex.Store({
    state
})
export default store;