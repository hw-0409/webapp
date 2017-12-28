<template>
  <div class="app-main app-box">
    <app-header></app-header>
       <AppBanner></AppBanner> 
     <router-view></router-view>

  </div>
</template>

<script>


import AppHeader from "../App-Header/AppHeader"
import AppBanner from "./AppBanner"
export default {
  name: 'app-main',
  components:{
    AppHeader,AppBanner
  }
 
}
</script>

<style >
</style>
