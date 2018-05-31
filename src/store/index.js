import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)
const state = {
    userinfo:null,
    isLogin:false,
    codenum:null,
    citylist:null,
    searchcityhis:[],
    currentCity:null
}
const mutations = {
    setUser(state,params){
        state.userinfo = params
    },
    setProfile(state,params){
        
        for(let x in params){
            if(state.userinfo.hasOwnProperty(x)){
                if(state.userinfo[x] instanceof(Object)){
                    state.userinfo[x].unshift(params[x])
                }else{
                    state.userinfo[x] =params[x]
                }
            }
        }
    },
    isLogin(state,params){
        state.isLogin =params
    },
    setCodeNum(state,params){
        state.codenum = params
    },
    setCityList(state,params){
        state.citylist = params
    },
    setsearchcityhis(state,params){
        state.searchcityhis.push(params)
    },
    setCurrentCity(state,params){
        state.currentCity = params;
    }
}
const store = new vuex.Store({
    state,
    mutations
})
export default store;