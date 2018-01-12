<template>
  <div class="app-footer">
        <ul>
        <router-link tag="li"  v-for="item in nav"  :to="{name:item.name}" :key="item.id"  class="home"   >
            <span class="bg" :class="item.class"></span>
            <i>{{item.contant}}</i>
            <div v-if="item.id===3"><span v-if="car.length" class="carNum" >{{num}}</span></div>
        </router-link>
        </ul>
  </div>
</template>
<script>

import {mapState} from 'vuex'
export default {
  name:"app-footer",
  data(){
    return {
      nav:[
          {id:1,contant:'首页',name:'main',class:'home1'},
          {id:2,contant:'闪送超市',name:'list',class:'home2'},
          {id:3,contant:'购物车',name:'shop',class:'home3'},
          {id:4,contant:'我的',name:'my',class:'home4'}
      ]
    }
  },
  computed: {
     ...mapState(["car"]),
     num:{
       get(){ 
          let num = 0;
          this.car.forEach(item=>{
            num += item.num
          })
          return num
       }
     }
  },
}
</script>

<style lang="scss" scoped>
.home.router-link-active .home1 {
    transition:.5s;
      background: url(../../../static/app-footer/1-b.png) no-repeat center .08rem;
       background-size: auto .25rem; 
}
.home.router-link-active .home2{
    transition:.5s;
      background: url(../../../static/app-footer/2-b.png) no-repeat center .08rem;
       background-size: auto .25rem; 
}
.home.router-link-active .home3{
    transition:.5s;
      background: url(../../../static/app-footer/3-b.png) no-repeat center .08rem;
       background-size: auto .25rem; 
}
.home.router-link-active .home4{
    transition:.5s;
      background: url(../../../static/app-footer/4-b.png) no-repeat center .08rem;
       background-size: auto .25rem; 
}
.carNum{
  position: absolute;
  top: 0;
  right: 0.2rem;
  background-color: #f40;
  color: #fff;
  height: 0.216rem;
  width: 0.216rem;
  border-radius: 50%;
  text-align: center;
  font-size:12px;
  line-height: 0.23rem;
}
.home.router-link-active .bg{
    animation: donghua 1s ;
}




</style>

