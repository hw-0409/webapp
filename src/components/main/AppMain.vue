<template>
  <div class="app-main">
    <app-header></app-header>
       <AppBanner></AppBanner> 
       <AppIndexNav></AppIndexNav>
       <AppGoodBox></AppGoodBox>
     <router-view></router-view>
<app-footer></app-footer>
  </div>
</template>

<script>


import AppHeader from "../App-Header/AppHeader"
import AppFooter from "../App-Footer/AppFooter"
import AppBanner from "./AppBanner"
import AppIndexNav from "./AppIndexNav"
import AppGoodBox from "./AppGoodBox"
export default {
  name: 'app-main',
  components:{
    AppHeader,AppBanner,AppIndexNav,AppGoodBox,AppFooter
  }
 
}
</script>

<style >
</style>
