<template>
   <div class="app-address">
   <div class="position-box">
       <span  @click="returngo()" class="yo-ico position-left">&#xf07d;</span>
       <p class="position-right">添加地址</p>
        <div @click="mxs({detailaddress:infoAddress.detailaddress,person:infoAddress.person,phone:infoAddress.phone,id:infoAddress.id})" class="save">保存</div>
       </div>
    <AppAddressInfo :infoAddress="infoAddress"></AppAddressInfo>
   </div>
</template>

<script>
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
                id:0
            },
            cd:[]
            
           
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
            console.log( this.cd,999)
            // this.infoAddress.push(params)
            // console.log(this.infoAddress)
            // // this.infoAddress.id ++
             this.infoAddress.id++;
            this.$store.commit('addAddress',this.cd)
        }
        // ...mapMutations(['addAddress'])
    },
    mounted(){
        // this.cd.push(this.infoAddress)
        // this.addAddress(this.cd)

        // console.log(this.$store.infoAddress)
    }
    
}
</script>
