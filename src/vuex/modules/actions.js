
import getPosition from '../../modules/getPosition'
const actions = {
    initInfo({ commit }) {
       
            let results = localStorage.axfInfo || ''
            commit('initInfo', results)
       
    },
    initCar({ commit }){
        setTimeout(() => {
            let res = JSON.parse(localStorage.car || '[]')
            commit('initCar', res)
        }, 300);
    },
    initAddress({ commit }){
        let res = JSON.parse(localStorage.Item || '[]')
        commit('initAddress', res)
    },
    isShou({ commit },type){
        commit('isShou', type)
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