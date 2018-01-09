<template>
    <div class="app-index-details">
        <div class="position-box">
        <span  @click="returngo()" class="yo-ico position-left">&#xf07d;</span>
        <p class="position-right">{{infoTitle}}</p>
            <div :style="{fontSize:'.35rem'}" class="save yo-ico">&#xf07a;</div>
        </div>
        <div v-html="detail">

        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'app-index-details',
    data(){
        return{
            detail:[],
            infoTitle:''
        }
    },
    methods:{ //http://m.beequick.cn/show/active?asid=5a375a83d6ec83054&_r=0.3133918192438836&reflogid=5a520f7d5a3503394&location_hash=c6ae4eDi0scGVO7jbEiasGajZgnK3E2a%2BQ8%2FRzBUGQXkLMt0xLyD4a23c%2FvF05OgySp4t3WCN%2Fndt8mNMjp6Mg&shopId=15204&id=22004&cb=_bee_act_cb_59333&cityid=2&bigids=2%2C0&activitygroup=shuiguokuanghuanyue&trackid=category1%7C22004
        getMock(){
            let that = this
            axios.get("/axf/show/active?shopId=15204&id=22004&cityid=2",{
                params:{id:that.$route.params.id,cityid:that.$route.params.cityid}
            })
            .then((res)=>{
                console.log(that)
                console.log(res,1111)
                that.detail = res.data
                that.infoTitle = that.$route.params.name 
            })
           //theme_all-35babfb7.css
        },
         returngo(){
            this.$router.go(-1)
        }
    },
    created(){
        this.getMock()
    }

}
//http://m.beequick.cn/show/active?asid=5a375a83d6ec83054&_r=0.7822464023500926&reflogid=5a521e743ae7a6556&location_hash=84787bAtui4iZH%2Bi2hMrg8wSQskZ6kRaXhYloshOWZ4s6JF5PsIwf0Fq4iAuqQgX1tIvJgeqMYLJMGTUyBWwJB&shopId=15204&id=22004&cb=_bee_act_cb_12961&cityid=2&bigids=2%2C0&activitygroup=shuiguokuanghuanyue&trackid=category1%7C22004
</script>

