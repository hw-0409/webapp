<template>
  <div class="app-main app-box">
    <app-header></app-header>
        


     <router-view></router-view>

  </div>
</template>

<script>
import axios from 'axios'
import swiper from 'swiper'
import AppHeader from "../App-Header/AppHeader"
export default {
  name: 'app-main',
  components:{
    AppHeader
  },
  data () {
    return {
      act_info:[]
    }
  },
  methods:{
      getInfo(){
        //http://m.beequick.cn/data/home
        //?asid=5a375a83d6ec83054&_r=0.18187183066821033&reflogid=5a43aa9b17a708017&cart_pids=&location=116.284891%2C39.919955&defPid=&designated_dealerid=
        // http://127.0.0.1:3000/axf/data/home?asid=5a375a83d6ec83054&_r=0.18187183066821033&reflogid=5a43aa9b17a708017&cart_pids=&location=116.284891%2C39.919955&defPid=&designated_dealerid=
         axios.get("/axf/data/home?asid=5a375a83d6ec83054&_r=0.18187183066821033&reflogid=5a43aa9b17a708017&cart_pids=&location=116.284891%2C39.919955&defPid=&designated_dealerid=")
          .then((response)=>{
            console.log(eval('('+response.data+')'))
             this.act_info = eval('('+response.data+')')
          })
      }
  },
  created(){
    this.getInfo()
  }
}
</script>

<style >
</style>
