import Vue from 'vue'
import Router from 'vue-router'
// import appMain from '@/components/main/appMain'

Vue.use(Router)

// export default new Router({
//     routes: [{
//         path: '/',
//         name: 'appMain',
//         component: appMain
//     }]
// })


import AppMian from "../components/main/AppMain.vue";
import AppList from "../components/list/AppList.vue";
import AppShop from "../components/shop/AppShop.vue";
import AppMy from "../components/my/AppMy.vue";
const routes = [
    { path: "", redirect: "main" },

    { path: "/main", name: "main", component: AppMian }, //首页
    { path: "/list", name: "list", component: AppList }, //闪送超市
    { path: "/shop", name: "shop", component: AppShop }, //购物
    { path: "/my", name: "my", component: AppMy }, //我的

    { path: "**", redirect: "main" },

]
const router = new Router({
    routes
})

export default router