
import getPosition from '../../modules/getPosition'
const actions = {
    initInfo({ commit }) {
        setTimeout(() => {
            let results = localStorage.axfInfo || ''
            commit('initInfo', results)
        }, 300);
    },
    initCar({ commit }){
        setTimeout(() => {
            let res = JSON.parse(localStorage.car || '[]')
            commit('initCar', res)
        }, 300);
    },
    getPosition({ commit }){
        
          setTimeout(() => {
           // console.log(getPosition)
            	getPosition((info)=>{
			    commit('getPosition',info)
                 })
         }, 2000);
    }, 
    reduceCar({ commit },type){
        setTimeout(() => {
            commit('reduceCar', type)
        }, 300);
    },
    addCar({ commit },type){
        setTimeout(() => {
            commit('addCar', type)
        }, 300);
    },
    isChangeShow({ commit },type){
        setTimeout(() => {
            commit('isChangeShow', type)
        }, 300);
    },
    isAllChangeShow({ commit }){
        setTimeout(() => {
            commit('isAllChangeShow')
        }, 300);
    },
}
export default actions