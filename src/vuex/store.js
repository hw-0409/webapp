import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import actions from './modules/actions'
import mutations from './modules/mutations' 
const state = {
    info: [],
    address:'',
    infoAddress:[]
 
}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store