<template>
  <div class="app-my">
      <header class="my-header">
         <router-link to="/my-info" tag="div">
          <dl>
            <dt></dt>
            <dd>
                <h3>15835850014</h3>
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
            <div class="my-spline">
                <h5>我的订单</h5>
                <h6>查看全部订单</h6>
            </div>
            <div class="order-types">
              <ul>
                <li>待付款</li>
                <li>待收货</li>
                <li>待评价</li>
                <li>退款/售后</li>
              </ul>
            </div>
        </div>
        <div class="content-items">
          <ul>
            <li>积分商城</li>
            <li>优惠券</li>
            <li>收货地址</li>
            <li>客服/反馈</li>
            <li>关于我们</li>
            <div></div>
          </ul>
        </div>
        <div class="logout">推出当前账号</div>
      </section>
      <footer>

      </footer>
  </div>
</template>

<script>
export default {
  name: 'app-my',
  data () {
    return {

    }
  },
  methods: {
    info(){
      name:''
    }
  }
}
</script>
<style>

</style>
