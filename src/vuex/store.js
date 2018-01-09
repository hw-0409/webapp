import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import actions from './modules/actions'
import mutations from './modules/mutations' 
const state = {
    infoAddress:[],
    info: [],//登录人的信息
    address:''
}


const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store