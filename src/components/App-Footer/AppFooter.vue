<template>
  <div class="app-footer">
        <ul>
        <router-link tag="li" v-for="item in nav" :to="{name:item.name}" :key="item.id"  class="home" :class= "item.class"  >
                        <i>{{item.contant}}</i>
        </router-link>
        </ul>
  </div>
</template>
<script>
export default {
  name:"app-footer",
  data(){
        return {
            isShow:false,
            nav:[
                {id:1,contant:'首页',name:'main',class:'home1'},
                {id:2,contant:'闪送超市',name:'list',class:'home2'},
                {id:3,contant:'购物车',name:'shop',class:'home3'},
                {id:4,contant:'我的',name:'my',class:'home4'}
            ]
        }
  }
}
</script>
<style lang="scss">
.home.home1.router-link-active{
    transition:.5s;
      background: url(../../../static/app-footer/1-b.png) no-repeat center .08rem;
       background-size: auto .25rem; 
}
.home.home2.router-link-active{
    transition:.5s;
      background: url(../../../static/app-footer/2-b.png) no-repeat center .08rem;
       background-size: auto .25rem; 
}
.home.home3.router-link-active{
    transition:.5s;
      background: url(../../../static/app-footer/3-b.png) no-repeat center .08rem;
       background-size: auto .25rem; 
}
.home.home4.router-link-active{
    transition:.5s;
      background: url(../../../static/app-footer/4-b.png) no-repeat center .08rem;
       background-size: auto .25rem; 
}
</style>

