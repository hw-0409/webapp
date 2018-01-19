<template>
   <div class="app-address">
   <div class="position-box">
       <span  @click="returngo()" class="yo-ico position-left">&#xf07d;</span>
       <p class="position-right">添加地址</p>
        <div @click="mxs({isShow:false,selected:infoAddress.selected,detailaddress:infoAddress.detailaddress,person:infoAddress.person,phone:infoAddress.phone,id:infoAddress.id,meryaddress:infoAddress.meryaddress})" class="save">保存</div>
       </div>
    <AppAddressInfo :lataAddress='lataAddress' :infoAddress="infoAddress"></AppAddressInfo>
   </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
import AppAddressInfo from './App-Address-info'
export default {
    name:'app-addres',
      data(){
        return{
            infoAddress: { 
                id:'',
                person:'',
                phone:'',
                detailaddress:'',
                meryaddress:'',
                selected:'',
                seam:''
            },
            lataAddress:[]
        }
    },
    
    components:{
        AppAddressInfo
    },
    methods:{
        ...mapActions(["initAddress"]),
        returngo(){
            this.$router.go(-1)
        },
        mxs(params){
            params.id = new Date().getTime();  
            this.$store.commit('addAddress',params)
            this.$router.go(-1)
        },
        getAddress(){
            let that = this
            axios.get('/axf/data/getAreaInfo')
            .then((res)=>{
                that.lataAddress = res.data.data
            })
        }
    },
    mounted(){
        this.initAddress()
        this.getAddress()
    }
    
}
</script>
