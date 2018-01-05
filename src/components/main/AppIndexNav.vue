<template>
    <div class="app-index-nav">
       <ul class="goods-box">
           <li v-for="item in mock" :key="item.id" >
               <img :src="item.activity.img" alt="">
               <p>{{item.activity.name}}</p>
           </li>
       </ul>
        <ul class="goods-nav">
            <li v-for="item in GoodsNav" :key="item.id">
                <img   :src="item.activity.img" :alt="item.activity.name">
            </li>
        </ul>
        <div class="home-business">
        <div class="sscs">
          <img src="http://img01.bqstatic.com//upload/activity/201705221117303.png@90Q.png" alt="">
        </div>
        <div class="business-sub">
            <img src="http://img01.bqstatic.com//upload/activity/2016092417285271.jpg@90Q.jpg" alt="">
            <img src="http://img01.bqstatic.com//upload/activity/2017030919451621.jpg@90Q.jpg" alt="">
        </div>
        <ul class="shyp">
            <li v-for="item in business" :key="item.id">
                <img :src="item.cicons_detail.img" alt="">
                <p>{{item.cicons_detail.name}}</p>
            </li>
        </ul>
        
        <div class="busub">
            <ul class="busub-ul">
                <li v-for="item in busub" :key="item.id" >
                    <img :src="item.cscene_detail.img" alt="">
                </li>
            </ul>
        </div>

       </div>
    </div>
</template> 

<script>
import axios from 'axios'
export default {
        name:"app-index-nav",
       data() {
            return {
            mock:[],
            GoodsNav:[],
            business:[],
            busub:[]
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
              //.activity.img              
          })
      }
  },
  mounted(){
    this.getInfo()
  }
       
         
    
}
</script>
<style lang="scss" >


</style>
