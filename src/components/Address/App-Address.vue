<template>
   <div class="app-address">
   <div class="position-box">
       <span  @click="returngo()" class="yo-ico position-left">&#xf07d;</span>
       <p class="position-right">添加地址</p>
        <div @click="mxs({selected:infoAddress.selected,detailaddress:infoAddress.detailaddress,person:infoAddress.person,phone:infoAddress.phone,id:infoAddress.id,meryaddress:infoAddress.meryaddress})" class="save">保存</div>
       </div>
    <AppAddressInfo :lataAddress='lataAddress' :infoAddress="infoAddress"></AppAddressInfo>
   </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
import AppAddressInfo from './App-Address-info'
export default {
    name:'app-addres',
      data(){
        return{
            // aaa:JSON.parse(localStorage.Item?localStorage.Item:'[]').length,
            infoAddress:
                { 
                person:'',
                phone:'',
                detailaddress:'',
                id:0,
                meryaddress:'',
                selected:'',
                seam:''
            },
            cd:[],
            lataAddress:[]
            
           
        }
  },
    components:{
    AppAddressInfo
    },
    methods:{
        returngo(){
            this.$router.go(-1)
        },
        mxs(params){
            this.cd.push(params)
            console.log( this.cd,'哇  有了 有了')
            // this.infoAddress.push(params)
            // console.log(this.infoAddress)
            // // this.infoAddress.id ++
             this.infoAddress.id++;
            this.$store.commit('addAddress',this.cd)
        },
        getAddress(){
            let that = this
            axios.get('/axf/data/getAreaInfo')
            .then((res)=>{
                console.log(res)
                that.lataAddress = res.data.data
            })
        }
        // ...mapMutations(['addAddress'])
    },
    mounted(){
        this.getAddress()
        // this.cd.push(this.infoAddress)
        // this.addAddress(this.cd)

        // console.log(this.$store.infoAddress)
    }
    
}
</script>
