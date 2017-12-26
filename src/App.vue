<template>
  <div id="app">
      <app-header></app-header>
      <app-footer></app-footer>
     <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/App-Header/AppHeader"
import AppFooter from "./components/App-Footer/AppFooter"
export default {
  name: 'app',

  components:{
    AppHeader,AppFooter
  }
}
</script>

<style>

</style>
