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

const mutations = {
    
    initInfo(state, info) {
        state.info = info
    },
    //定位，获取到定位信息后，加载其他的内容
    getPosition(state,info){
        state.address = info.address
    }
	
        
}
const actions = {
    initInfo({ commit }) {
        setTimeout(() => {
            let results = localStorage.axfInfo || ''
            commit('initInfo', results)
        }, 300);
    },
    getPosition({ commit }){
          setTimeout(() => {
           // console.log(getPosition)
            	getPosition((info)=>{
			    commit('getPosition',info)
                 })
         }, 2000);
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store