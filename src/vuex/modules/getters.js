

const getters = {
    money(state) {
        let money = 0;
        state.car.forEach(item => {
            if (item.isShow) {
                money += item.num * 100 * item.price
            }
        })
        return money /100
    }
}

 

export default getters