import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import actions from './modules/actions'
import mutations from './modules/mutations'
import getters from './modules/getters'
const state = {
    infoAddress: [],
    info: [], //登录人的信息
    address: '',
    car: [],
    listId:''
}


const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store