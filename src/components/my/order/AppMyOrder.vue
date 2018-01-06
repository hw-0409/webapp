<template>
  <div class="app-my-order">
      <header>
        <router-link to="/my" class="yo-ico ">&#xf07d;</router-link>
        <div class="myOrder">我的订单</div>
        <div class="redact"><i class="yo-ico">&#xf07a;</i></div>
      </header>
      <ul class="order">
          <li class="or" @click="getRoute(order.id)" :class="{activer:order.isboo}" v-for="order in orders" :key="order.id">{{order.content}}</li>
      </ul>
      <section v-show="isOrder">
          <order-all></order-all>
      </section>
  </div>
</template>
<script>
import orderAll from './orderAll.vue'
import { Indicator } from 'mint-ui';
export default {
  name:"app-my-order",
  components: {
      orderAll
  },
  props:['id'],
  data () {
      return {
        orders:[
            {id:"all" , content:"全部订单",isboo:true},
            {id:"par",content:"待付款",isboo:false},
            {id:"put",content:"待收货",isboo:false},
            {id:"eva",content:"待评价",isboo:false},
            {id:"ref",content:"退款/售后",isboo:false}
        ],
        isOrder:false,
      }
  },
  methods: {
      getRoute(id){
        this.isOrder=false;
        let that= this;
        this.orders.forEach(item=>{
            item.isboo = false
        })
        this.orders.forEach(item=>{
            if(item.id==id){
                item.isboo = true
            }
        })
         Indicator.open({
            text: '加载中',
            spinnerType: 'triple-bounce',
            spinnerColor:"#f80"
        });
        setTimeout(() => {
            Indicator.close()
            that.isOrder=true;
        }, 300);
        }
  },
  mounted () {
   
        this.getRoute(this.$route.params.id)
  }
}
</script>
<style lang="scss">
.mint-indicator-wrapper{
    width: 1.8rem;
    height: 0.6rem;
    padding: 10px !important;
    background: #aaa;
    border-radius: 15px;
    .mint-spinner-triple-bounce{
        div{
            background-color: #ffd600 !important;
            width: 18px !important;
            height:18px !important;
            margin:0 6px;
        }
    }
    .mint-indicator-text{
        margin-top: 0;
        color: #000;
    }
}
</style>
