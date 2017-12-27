<template>
  <div id="app">
      
      <app-footer></app-footer>
     <router-view></router-view>
  </div>
</template>

<script>

import AppFooter from "./components/App-Footer/AppFooter"
export default {
  name: 'app',

  components:{
    AppFooter
  }
}
</script>

<style>

</style>
