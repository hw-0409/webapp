import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const state = {
    info: [],
}

const mutations = {
    initInfo(state, info) {
        state.info = info
    },
}
const actions = {
    initInfo({ commit }) {
        setTimeout(() => {
            let results = localStorage.axfInfo || ''
            commit('initInfo', results)
        }, 300);
    },
}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store