// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'
import '../static/style/usage/app.scss';



Vue.config.productionTip = false
import store from './vuex/store'
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})