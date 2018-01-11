import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import AppMian from "../components/main/AppMain.vue";
import AppList from "../components/list/AppList.vue";
import AppShop from "../components/shop/AppShop.vue";
import AppMy from "../components/my/AppMy.vue";
import AppMyInfo from "../components/my/AppMyInfo.vue";
import AppMyShop from "../components/my/AppMyShop.vue";
import AppMyStore from "../components/my/AppMyStore.vue";
import AppMyAddStore from "../components/my/AppMyAddStore.vue";
import AppMyOrder from "../components/my/order/AppMyOrder.vue";
import AppMyBlock from "../components/my/block/block.vue";
import AppMyLogin from "../components/login/login.vue";
import AppDetail from "../components/Detail/App-Detail.vue";
import AppIndexDetail from "../components/Detail/IndexDetails/index-details.vue";
import AppPosition from "../components/getPosition/App-getPosition.vue";
import AppAddress from "../components/Address/App-Address.vue";
import AppGather from "../components/AppGather/AppGather.vue";


const routes = [
    { path: "", redirect: "main" },

    { path: "/main", name: "main", component: AppMian }, //首页=0
    { path: "/detail/:id/:img/:name/:price&=", name: "detail", component: AppDetail }, //详情页
    { path: "/list", name: "list", component: AppList }, //闪送超市
    { path: "/shop", name: "shop", component: AppShop }, //购物
    { path: "/my", name: "my", component: AppMy }, //我的
    { path: "/my-info", name: "my-info", component: AppMyInfo }, //个人信息
    { path: "/my-shop", name: "my-shop", component: AppMyShop }, //商品收藏
    { path: "/my-store", name: "my-store", component: AppMyStore }, //店铺收藏
    { path: "/my-add-store", name: "my-add-store", component: AppMyAddStore }, //添加店铺
    { path: "/my-order/:id", name: "my-order", component: AppMyOrder, }, //订单项
    { path: "/my-block/:id", name: "my-block", component: AppMyBlock, }, //积分 优惠券 地址 客服 关于我们
    { path: "/my-login", name: "my-login", component: AppMyLogin, }, //登录
    { path: "/position", name: "position", component: AppPosition }, //定位
    { path: "/gather", name: "gather", component: AppGather }, //凑单专区

    { path: "/address", name: "address", component: AppAddress },
    { path: "/indexdetails/id=:id&cityid=:cityid&name=:name&=", name: "indexdetails", component: AppIndexDetail },


    { path: "**", redirect: "main" }
]
const router = new Router({
    routes
})

export default router