<template>
  <div class="app-shop">
    <header>
      <span class="car-top">购物车</span>
    </header>
    <section>
      <div class="car-non">
        <img src="../../assets/app-my-image/carNon.png">
        <p>亲，购物车空空的耶~</p>
        <router-link to="/mian" tag="span">去逛逛</router-link>
      </div>
      <div class="car-info">
            <table>
              <tr>
                <td width="28%">收<i class="car-hidden">a</i>货<i class="car-hidden">a</i>人</td>
                <td>韩伟 先生</td>
                <td width="17%" rowspan="3">修改<span class="yo-ico ">&#xf07f;</span></td>
              </tr>
              <tr>
                <td>电<i class="car-hidden">电话</i>话</td>
                <td>15835850014</td>
              </tr>
              <tr>
                <td>收货地址</td>
                <td>北京市回龙观 北京市回龙观地铁站</td>
              </tr>
            </table>
      </div>

      <div class="car-group ">
        <div class="group-name">
            <p>闪送超市</p>
            <span>凑单专区</span>
        </div>
        <p class="group-proptext">¥0起送，22:00前满¥30免运费</p>
      </div>
    </section>


    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from "../App-Footer/AppFooter"
import {mapState,mapActions} from 'vuex'
import VueRouter from 'vue-router'
export default {
  name: 'app-shop',
    components:{AppFooter},
  data () {
    return {
     
    }
  },
  computed: {
     ...mapState(['info']),  
  },
  methods:{
    ...mapActions(['initInfo'])
  
  },
  mounted () {
    this.initInfo()
    setTimeout(()=>{
      if(!this.info.length){
        this.$router.push({path:'/my-login'})
      }

    },400)
  }
}
</script>
<style>

</style>
