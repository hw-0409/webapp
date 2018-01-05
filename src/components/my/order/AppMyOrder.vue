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
      <section>

      </section>
  </div>
</template>
<script>
export default {
  name:"app-my-order",
  props:['id'],
  data () {
      return {
           orders:[
        {id:"all" , content:"全部订单",isboo:true},
        {id:"par",content:"待付款",isboo:false},
        {id:"put",content:"待收货",isboo:false},
        {id:"eva",content:"待评价",isboo:false},
        {id:"ref",content:"退款/售后",isboo:false}
        ]
      }
  },
  methods: {
      getRoute(id){
        this.orders.forEach(item=>{
            item.isboo = false
        })
        this.orders.forEach(item=>{
            if(item.id==id){
                item.isboo = true
            }
        })
      }
  },
  mounted () {
      this.getRoute(this.$route.params.id)
  }
}
</script>
<style lang="scss">

</style>
