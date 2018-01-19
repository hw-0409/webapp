

const getters = {
    money(state) {
        let money = 0;
        state.car.forEach(item => {
            if (item.isShow) {
                money +=  Math.floor(item.num * item.price*10)
            }
        })
        
        return money /10
    }
    
}

 

export default getters