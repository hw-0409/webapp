

  const mutations = {
    
    initInfo(state, info) {
        state.info = info
    },
    //定位，获取到定位信息后，加载其他的内容
    getPosition(state,info){
        state.address = info.address
    },
    //添加地址
    addAddress(state,item){
        state.infoAddress = item

        localStorage.Item = JSON.stringify(item)
         console.log(localStorage.Item,888)
    }
	
        
}


export default mutations