<template>
    <div class="app-banner  swiper-container">
        <div class="swiper-wrapper">
            <div v-for="item in mock" :key="item.id" class="swiper-slide">
                <img width="100%" :src="item.activity.img" :title="item.name" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template> 


<script>
import axios from 'axios'
import swiper from 'swiper'
export default {
        name:"banner",
       data() {
            return {
            mock:[]
       
            }
  },
  methods:{
      getInfo(){
          let that = this
        //http://m.beequick.cn/data/home
        //?asid=5a375a83d6ec83054&_r=0.18187183066821033&reflogid=5a43aa9b17a708017&cart_pids=&location=116.284891%2C39.919955&defPid=&designated_dealerid=
        // http://127.0.0.1:3000/axf/data/home?asid=5a375a83d6ec83054&_r=0.18187183066821033&reflogid=5a43aa9b17a708017&cart_pids=&location=116.284891%2C39.919955&defPid=&designated_dealerid=
         axios.get("/axf/data/home?asid=5a375a83d6ec83054&_r=0.18187183066821033&reflogid=5a43aa9b17a708017&cart_pids=&location=116.284891%2C39.919955&defPid=&designated_dealerid=")
          .then((response)=>{
              var jsonObj =  (new Function("return" + response.data))()
              console.log(jsonObj)
            // console.log(eval('('+response.data+')'))
            //  var arr = eval('('+response.data+')')
             that.mock = jsonObj.data.act_info[0].act_rows
            //  console.log(typeof response)
            // that.mock.push(response.data)
            
            console.log(that.mock)
          })
      }
  },
  mounted(){
    this.getInfo()
  },
   updated(){
            new swiper('.app-banner',
            {autoplay:{delay:2000},
            pagination: {
                el: '.swiper-pagination',
            }
            
            })       
        }
       
         
    
}
</script>
<style lang="scss">


</style>
