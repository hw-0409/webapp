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

const routes = [
    { path: "", redirect: "main" },

    { path: "/main", name: "main", component: AppMian }, //首页=0
    { path: "/list", name: "list", component: AppList }, //闪送超市
    { path: "/shop", name: "shop", component: AppShop }, //购物
    { path: "/my", name: "my", component: AppMy }, //我的
    { path: "/my-info", name: "my-info", component: AppMyInfo },
    { path: "/my-shop", name: "my-shop", component: AppMyShop },
    { path: "/my-store", name: "my-store", component: AppMyStore },
    { path: "/my-add-store", name: "my-add-store", component: AppMyAddStore },
    { path: "/my-order/:id", name: "my-order", component: AppMyOrder, },
    { path: "/my-block/:id", name: "my-block", component: AppMyBlock, },
    { path: "/my-login", name: "my-login", component: AppMyLogin, },


    { path: "**", redirect: "main" }
]
const router = new Router({
    routes
})

export default router