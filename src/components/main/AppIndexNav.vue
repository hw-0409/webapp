<template>
    <div class="app-index-nav">
       <ul class="goods-box">
           <li v-for="item in mock" :key="item.id" >
               <router-link :to="{name:'indexdetails',params:{name:item.activity.name,id:item.activity.id,cityid:item.activity.ext_params.cityid}}">
               <img :src="item.activity.img" alt="">
               </router-link>
               <p>{{item.activity.name}}</p>
           </li>
       </ul>
        <ul class="goods-nav">
            <router-link tag="li" :to="{name:'indexdetails',params:{name:item.activity.name,id:item.activity.id,cityid:item.activity.ext_params.cityid}}"  v-for="item in GoodsNav" :key="item.id">
                <img   :src="item.activity.img" :alt="item.activity.name">
            </router-link>
        </ul>
        <div class="home-business">
        <div class="sscs">
          <img src="http://img01.bqstatic.com//upload/activity/201705221117303.png@90Q.png" alt="">
        </div>
        <router-link :to="{name:'list'}" class="business-sub">
            <img src="http://img01.bqstatic.com//upload/activity/2016092417285271.jpg@90Q.jpg" alt="">
            <img src="http://img01.bqstatic.com//upload/activity/2017030919451621.jpg@90Q.jpg" alt="">
        </router-link>
        <ul class="shyp">
            <router-link tag="li" :to="{name:'list'}" v-for="item in business" :key="item.id">
                <img :src="item.cicons_detail.img" alt="">
                <p>{{item.cicons_detail.name}}</p>
            </router-link>
        </ul>
        
        <div class="busub">
            <ul class="busub-ul">
                <router-link tag="li" :to="{name:'indexdetails',params:{name:item.activity.name,id:item.activity.id,cityid:item.activity.ext_params.cityid}}"  v-for="item in busub" :key="item.id" >
                    <img :src="item.cscene_detail.img" alt="">
                </router-link>
            </ul>
        </div>

       </div>
    </div>
</template> 

<script>
export default {
        name:"app-index-nav",
        props:['busub','GoodsNav','mock','business'],
        methods:{
        
        }
       
}       

</script>
<style lang="scss" >


</style>
