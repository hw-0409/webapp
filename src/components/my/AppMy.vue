<template>
  <div class="app-my">
      <header class="my-header">
         <router-link to="/my-info" tag="div">
          <dl>
            <dt></dt>
            <dd>
                <h3>{{user}}</h3>
                <h4>V0</h4>  
            </dd> 
          </dl>
        </router-link>
      </header>
      <div class="my-item">
        <div class="goods item">
          <router-link to="/my-shop" tag="div" class="inner">商品收藏</router-link>
        </div>
        <div class="split"></div>
        <div class="shops item">
          <router-link to="/my-store" tag="div" class="inner">店铺收藏</router-link>          
        </div> 
      </div>
      <section class="my-content">
        <div class="content-order">
            <router-link class="my-spline" :to='{name:"my-order",params:{id:"all"}}' tag="div" >
                <h5>我的订单</h5>
                <h6>查看全部订单</h6>
            </router-link>
            <div class="order-types">
              <ul>
            <router-link  :to='{name:"my-order",params:{id:order.id}}' tag="li" v-for="order in orders" :key="order.id" >{{order.content}}</router-link>       
                
              </ul>
            </div>
        </div>
        <div class="content-items">
          <ul>
            <router-link  :to='{name:"my-block",params:{id:block.id}}' tag="li" v-for="block in blocks" :key="block.id" >{{block.con}}</router-link>       
            <div></div>
          </ul>
        </div>
        <div class="logout" @click="removStorage()">退出当前账号</div>
      </section>
<app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from "../App-Footer/AppFooter"
import {mapState,mapActions} from 'vuex'

import axios from "axios" 
export default {
  name: 'app-my',
    components:{AppFooter},
  data () {
    return {
      user:'',
      arr :[],
      orders:[
        {id:"par",content:"待付款"},
        {id:"put",content:"待收货"},
        {id:"eva",content:"待评价"},
        {id:"ref",content:"退款/售后"}
        ],
      blocks:[
        {id:1,con:"积分商城"},
        {id:2,con:"优惠券"},
        {id:3,con:"收货地址"},
        {id:4,con:"客服/反馈"},
        {id:5,con:"关于我们"},
      ]
    }
  },
  computed: {
     ...mapState(['info']),  
  },
  methods:{
    removStorage(){
      localStorage.removeItem('axfInfo')
      this.$router.push({path:'/my-login'})
    },
    ...mapActions(['initInfo'])
  
  },
  mounted () {
    this.initInfo()
    setTimeout(()=>{
      this.user=this.info||''
      if(!this.info.length){
        this.$router.push({path:'/my-login'})
      }

    },400)
  }
}
</script>
<style>

</style>
