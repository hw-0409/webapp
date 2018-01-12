const mutations = {

    initInfo(state, info) {
        state.info = info
    },
    initCar(state, car) {
        state.car = car
    },
    //定位，获取到定位信息后，加载其他的内容
    getPosition(state, info) {
        state.address = info.address
    },
    //添加地址
    addAddress(state, item) { 
        state.infoAddress = item
        localStorage.Item = JSON.stringify(item)
    },
    reduceCar(state, { id }) { //减少商品数量
        state.car.forEach((item, i) => {
            if (item.id == id) {
                item.num--
                    if (item.num < 1) {
                        state.car.splice(i, 1)
                    }
            }
        });
        localStorage.car = JSON.stringify(state.car)
    },
    addCar(state, { id, name, price, img }) { //增加商品
        let isHas = state.car.some(item => {
            if (item.id == id) {
                item.num++
                    return true;
            } else {
                return false;
            }
        })
        if (!isHas) {
            state.car.push({ id, name, price, img, num: 1, isShow: true })
        }
        localStorage.car = JSON.stringify(state.car)
    },
    isChangeShow(state, { id }) { //购物车内的商品是否选中
        state.car.forEach(item => {
            if (item.id == id) {
                item.isShow = !item.isShow
            }
        })
        localStorage.car = JSON.stringify(state.car)
    },
    isAllChangeShow(state) {
        let isHas = state.car.every(item => {
            if (item.isShow) {
                return true
            } else {
                return false
            }
        })
        if (isHas) {
            state.car.forEach(item => {
                item.isShow = false;
            })
        } else {
            state.car.forEach(item => {
                item.isShow = true;
            })
        }
    },
    getListId(state,id){
        state.listId = id
    }

}


export default mutations