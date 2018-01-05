<template>
  <div class="app-main">
    <app-header></app-header>
       <AppBanner></AppBanner> 
       <AppIndexNav></AppIndexNav>
       <AppGoodBox></AppGoodBox>
     <router-view></router-view>

  </div>
</template>

<script>


import AppHeader from "../App-Header/AppHeader"
import AppBanner from "./AppBanner"
import AppIndexNav from "./AppIndexNav"
import AppGoodBox from "./AppGoodBox"
export default {
  name: 'app-main',
  components:{
    AppHeader,AppBanner,AppIndexNav,AppGoodBox
  }
 
}
</script>

<style >
</style>
