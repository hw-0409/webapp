
<template>
  <div class="app-my-shop">
      <header>
        <router-link to="/my" class="yo-ico ">&#xf07d;</router-link>
        <div class="myShop">商品收藏</div>
        <div class="redact" v-if="shops.length" @click="isChangeRedact">{{isRedact}}</div>
      </header> 
      <section class="content">
          <div v-if="!shops.length" class="empty">
            <div class="em">
                <p>还没有收藏商品哦</p>
            </div>
          </div>
          <div v-else class="non-empty">
            <ul class="shopList">
              <li v-for="shop in shops" :key="shop.id">
                <div class="check" v-if="isCR">
                <input type="checkbox" v-model="shop.isremove" :checked="shop.isremove">                  
                </div>
                <dl>
                  <dt><img :src="shop.shopImg" alt=""></dt>
                  <dd>
                      <h3>{{shop.name}}</h3>
                      <h4><span>{{shop.jx==1?"精选":""}}</span></h4>
                      <h5>{{shop.specifics}}</h5>
                      <h6><span>￥{{shop.price}}</span><i>￥{{shop.market_price}}</i></h6>
                  </dd>
                </dl>
              </li>
            </ul>  
          </div>

      </section>
      <div class="footer" v-if="shops.length">
        <div class="foot" v-if="isCR">
          <div class="box" ><label for=""><input type="checkbox" v-model="ischangeAll" ><span>全选</span></label></div>
          <div class="remove" @click="remove">删除</div>
        </div>
      </div>
  </div>  
</template>
<script>
export default {
    name:"app-my-shop",
    data(){
      return{
          isEmpty : false,//是否有商品
          isRedact: "编辑",//有商品时是否编辑
          isCR:false,//控制编辑还是完成
          shops:[
            {id:1,isremove:false,shopImg:"http://img01.bqstatic.com/upload/goods/201/602/2309/20160223092902_002819.jpg@200w_200h_90Q",name:"伊利大果粒黄桃+草莓",jx:1,specifics:"260g",price:"13.8",market_price:"17.8"},
            {id:2,isremove:false,shopImg:"http://img01.bqstatic.com/upload/goods/201/602/2309/20160223092902_002819.jpg@200w_200h_90Q",name:"伊利大果粒黄桃+草莓",jx:1,specifics:"260g",price:"13.8",market_price:"17.8"},
            {id:3,isremove:false,shopImg:"http://img01.bqstatic.com/upload/goods/201/602/2309/20160223092902_002819.jpg@200w_200h_90Q",name:"伊利大果粒黄桃+草莓",jx:1,specifics:"260g",price:"13.8",market_price:"17.8"},
            {id:4,isremove:false,shopImg:"http://img01.bqstatic.com/upload/goods/201/602/2309/20160223092902_002819.jpg@200w_200h_90Q",name:"伊利大果粒黄桃+草莓",jx:1,specifics:"260g",price:"13.8",market_price:"17.8"},
          ],
          isHint:false,//提示信息
      }
    }, 
    methods: {
      isChangeRedact(){

        if(this.isCR){
          this.isRedact = "编辑"
        }else {
           this.isRedact = "完成"
        }
        this.isCR = !this.isCR
      },
      remove(){
        this.shops.forEach(function(item,i){
          if(item.isremove){
            this.shops.splice(i,1)
            this.remove()
          } else{
              this.isHint = !this.ischangeBoxisHint
          }
        }.bind(this))
      },
      changeAll(val){
        this.shops.forEach(function(item,i){
            item.isremove = val
        })
      }

    },
    computed: {
      ischangeAll:{
        get(){
          return this.shops.every(function(item,i){
           if(item.isremove){
             return true
           }else{
             return false
           } 
          })
        },
        set(newValue){
          this.changeAll(newValue)
        }
      }
    },
    
}
</script>
<style>

</style>
