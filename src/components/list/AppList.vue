<template>
  <div class="app-list">
    <app-header></app-header>
     <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "../App-Header/AppHeader"
export default {
  name: 'app-list',
  components:{
    AppHeader
  },
  data () {
    return {
     
    }
  }
}
</script>
<style >

</style>
