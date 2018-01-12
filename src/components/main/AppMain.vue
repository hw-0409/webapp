<template>
  <div class="app-main">
      <app-header></app-header>
      <AppBanner :mockBanner='mockBanner'></AppBanner> 
      <AppIndexNav :busub='busub' :business='business' :GoodsNav='GoodsNav' :mock='mock'></AppIndexNav>
      <AppGoodBox :mocks='mocks'></AppGoodBox>
      <router-view></router-view>
      <app-footer></app-footer>

      <div class="app-mark" v-if="isMark">
        <div class="boot_gps">
          <p>定位中</p> 
        </div>
      </div>
  </div>
</template>

<script>

import axios from 'axios'
import AppHeader from "../App-Header/AppHeader"
import AppFooter from "../App-Footer/AppFooter"
import AppBanner from "./AppBanner"
import AppIndexNav from "./AppIndexNav"
import AppGoodBox from "./AppGoodBox"
export default {
  name: 'app-main',
  components:{
    AppHeader,AppBanner,AppIndexNav,AppGoodBox,AppFooter
  }, 
  data() {
    return {
        mock:[],//AppIndexNav
        GoodsNav:[],
        business:[],
        busub:[],
        mocks:[],//AppGoodBox
        mockBanner:[],//AppBanner
        isMark:true
    }
  },
  methods:{
      getInfo(){
            let that = this
            axios.get("/axf/data/home?asid=5a375a83d6ec83054&_r=0.18187183066821033&reflogid=5a43aa9b17a708017&cart_pids=&location=116.284891%2C39.919955&defPid=&designated_dealerid=")
            .then((response)=>{
                var jsonObj =  (new Function("return" + response.data))()
                that.mock = jsonObj.data.act_info[1].act_rows
                that.GoodsNav = jsonObj.data.act_info[3].act_rows
                 // console.log(that.mock.act_info[1].act_rows) 
                that.business =  jsonObj.data.act_info[4].act_rows[2].act_rows
                that.busub =  jsonObj.data.act_info[4].act_rows[3].act_rows
                that.mocks = jsonObj.data.act_info[5].act_rows
                that.mockBanner = jsonObj.data.act_info[0].act_rows
                //.activity.img              
                setTimeout(()=>{
                  this.isMark=false
                },1000)
            })
         }
  },
  mounted(){
    this.getInfo()
  }
 
}
</script>

<style lang="scss" scoped>
    .app-mark{
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9999;
        background:#ffd82b url(../../assets/app-mark/boot_logo.png) no-repeat;
        background-size: 60%;
        padding-top: 80%;
        background-position: center 30%;
        .boot_gps{
            p{
              background:#ffd82b url(../../assets/app-mark/boot_gps.png) no-repeat;           
              background-size: contain;
              background-position: center;
              width: 100;
              margin:0 auto;
              text-align: center;
              font-size: 14px;
              width: 50px;
              padding-top: 36px;
              height: 36px;
              animation: donghua 5s infinite;
            }
        }
        
    }

    @keyframes donghua {
    0% {
        transform: scale3d(.3, .3, .3);
    }
    20% {
        transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
        transform: scale3d(.9, .9, .9);
    }
    60% {
        transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
        transform: scale3d(.97, .97, .97);
    }
    100% {
        transform: scale3d(1, 1, 1);
    }
}
</style>

