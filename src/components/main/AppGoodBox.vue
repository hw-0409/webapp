<template>
    <div class="app-good-large">
      <ul>
          <li v-for="item in mocks" :key="item.id">
            <div  class="good-item"><span class="item-title" :style="{color:'#'+item.category_detail.category_color}" >{{item.category_detail.name}}</span><i>更多  ></i></div>
            <router-link tag="div" :to="{name:'indexdetails',params:{name:item.activity.name,id:item.activity.id,cityid:item.activity.ext_params.cityid}}" class="img-f-box">
                 <img :src="item.activity.img" alt="">
            </router-link>
            <ul class="product">
                <li  v-for="good in item.category_detail.goods" :key="good.id" class="product-box">
                    <router-link :to="{name:'detail',params:{id:good.id,img:good.pre_imgs,name:good.name,price:good.market_price}}" class="product-img">
                        <img  :src="good.img" :title="good.title" :alt="good.name">
                       
                    </router-link>
                    <h5>{{good.name}}</h5>
                    <p v-show="good.is_xf==1">精选</p><span class="youhui">{{good.pm_desc}}</span>
                  
                    <div class="product-info">
                        <span>{{good.specifics}}</span>
                        <i>￥{{good.price}}</i><b>￥{{good.market_price}}</b>
                        <em>+</em>
                    </div>
                </li>
            </ul>
          </li>
      </ul>
    </div>
</template> 


<script>
import { mapActions } from 'vuex'
export default {
        name:"app-good-large",
        props:['mocks'],
  methods:{
      ...mapActions(["getPosition"])
  },
  mounted(){
      this.getPosition() 
    
  }

}
</script>
<style lang="scss">


</style>
