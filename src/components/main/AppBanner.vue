<template>
    <div class="app-banner  swiper-container">
        <div class="swiper-wrapper">
            <router-link tag="div" :to="{name:'indexdetails',params:{name:item.activity.name,id:item.activity.id,cityid:item.activity.ext_params.cityid}}" v-for="item in mockBanner" :key="item.id" class="swiper-slide">
                <img width="100%" :src="item.activity.img" :title="item.name" alt="">
            </router-link>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template> 


<script>
import swiper from 'swiper'
export default {
        name:"banner",
        props:['mockBanner'],
  methods:{

  },
   updated(){
            new swiper('.app-banner',
            {    loop:true,
                autoplay:{delay:2000},
                 pagination: {
                    el: '.swiper-pagination',
                 }
            
            })       
        }
       
         
    
}
</script>
<style lang="scss">


</style>
