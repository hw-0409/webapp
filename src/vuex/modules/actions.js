
import getPosition from '../../modules/getPosition'
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
export default actions