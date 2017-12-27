<template>
  <div class="app-footer">
        <ul>
            <router-link to="/main" tag="li" class=" home1 home"  >
                
                <i>首页</i>
            </router-link>
            <router-link to="/list" tag="li" class="home2 home">
                
                <i>闪送超市</i>
            </router-link>
            <router-link to="/shop" tag="li" class="home3 home">
                
                <i>购物车</i>
            </router-link>
            <router-link to="/my" tag="li" class="home4 home">
                
                <i>我的</i>
            </router-link>
         
        </ul>
  </div>
</template>
<script>
export default {
  name:"app-footer",
  data:function(){
        return {
            isShow:false
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

