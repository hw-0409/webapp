<template>
  <div class="app-shop">
    app-shop
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from "../App-Footer/AppFooter"
import {mapState,mapActions} from 'vuex'
import VueRouter from 'vue-router'
export default {
  name: 'app-shop',
    components:{AppFooter},
  data () {
    return {
     
    }
  },
  computed: {
     ...mapState(['info']),  
  },
  methods:{
    ...mapActions(['initInfo'])
  
  },
  mounted () {
    this.initInfo()
    setTimeout(()=>{
      if(!this.info.length){
        this.$router.push({path:'/my-login'})
      }

    },400)
  }
}
</script>
<style>

</style>
