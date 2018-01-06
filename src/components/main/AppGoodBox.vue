<template>
    <div class="app-good-large">
      <ul>
          <li v-for="item in mock" :key="item.id">
            <div  class="good-item"><span class="item-title" :style="{color:'#'+item.category_detail.category_color}" >{{item.category_detail.name}}</span><i>更多  ></i></div>
            <div class="img-f-box">
                 <img :src="item.activity.img" alt="">
            </div>
            <ul class="product">
                <li  v-for="good in item.category_detail.goods" :key="good.id" class="product-box">
                    <router-link :to="{name:'detail',params:{id:good.id,img:good.pre_imgs}}" class="product-img">
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
import Bus from '../../modules/bus'
import axios from 'axios'
export default {
        name:"app-good-large",
       data() {
            return {
            mock:[],
            imgBox:[]
            }
  },
  methods:{
      getInfo(){
          let that = this
         axios.get("/axf/data/home?asid=5a375a83d6ec83054&_r=0.18187183066821033&reflogid=5a43aa9b17a708017&cart_pids=&location=116.284891%2C39.919955&defPid=&designated_dealerid=")
          .then((response)=>{
              var jsonObj =  (new Function("return" + response.data))()
             // console.log(jsonObj)
             that.mock = jsonObj.data.act_info[5].act_rows
             //console.log(that.mock[0].category_detail.goods[0].pre_imgs)
             that.mock.forEach((item)=>{
               item.category_detail.goods.forEach((good)=>{
                   that.imgBox = that.imgBox.concat(good.pre_imgs)
               })
             }) 
              Bus.$emit('inceptMessage', this.imgBox)
               // console.log(this.imgBox)
             //console.log(that.imgBox)
          //.category_detail.name
          // .data.act_info[5].act_rows["0"]
           // console.log(that.mock)
           //http://img01.bqstatic.com/upload/goods/201/712/1415/20171214154847_872657.jpg@500w_500h_90Q
           //http://img01.bqstatic.com/upload/goods/201/712/1415/20171214154840_803982.jpg@200w_200h_90Q
          })
      },
      ...mapActions(["getPosition"])
  },
  mounted(){
      this.getPosition()
    this.getInfo()

      
    
  }

}
</script>
<style lang="scss">


</style>
