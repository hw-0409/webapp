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
    car: [
        { id: 1, name: '福成原味酸牛奶', price: '8.9', num: 1, isShow: true },
        { id: 2, name: '瀚味轩香辣蟹', price: '8.9', num: 1, isShow: true },
        { id: 4, name: '越南白心火龙果（大果）', price: '8.9', num: 1, isShow: true },
        { id: 5, name: '越南白心火龙果（大果）', price: '8.9', num: 1, isShow: true },
        { id: 6, name: '越南白心火龙果（大果）', price: '8.9', num: 1, isShow: true },
        { id: 7, name: '越南白心火龙果（大果）', price: '8.9', num: 1, isShow: true },
        { id: 8, name: '越南白心火龙果（大果）', price: '8.9', num: 1, isShow: true },
        { id: 9, name: '茂谷柑', price: '8.9', num: 7, isShow: true }
    ],
    listId:''
}


const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store