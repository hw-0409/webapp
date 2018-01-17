<template>
  <div class="seach-box">
          <div class="position-box">
                <span  @click="returngo()" class="yo-ico position-left">&#xf07d;</span>
                <p class="position-right in-Border">
                    <span  class="seach-Address yo-ico" >&#xf067;</span>
                    <input class="inS" type="text" placeholder="请输入商品名称" >
                </p>
                <p class="seachFont">搜索</p>
            </div>
            <SeachGood :seachHot='seachHot'></SeachGood>
            <router-view></router-view>
  </div>
</template>
<script>
import axios from 'axios'
import SeachGood from './seach-goods'

export default {
        name:'seach',
        data(){
            return{
                seachHot:[]
            }
        },
        components:{
            SeachGood
        },
        methods:{
            getListMock(){
                let that = this
                    axios.get('/axf/data/searchHot?&shopId=15204')
                    .then((res)=>{
                        that.seachHot = res.data.data.hotquery
                    })
            },
            returngo(){
                this.$router.go(-1)
            }
        },
        created(){
            this.getListMock()
        }
}
</script>
<style lang="scss">
.position-right .inS{
 position: absolute;
    top: 0;
    left: .35rem;
    height:100%;
    border: 0;
    background: transparent;
}
.in-Border{  
     position: relative;
    border: 1px solid #e0e0e0;
    margin-top: .1rem;
    margin-bottom:.1rem; 
    width: 2.31rem;
    .seach-Address{
        position: absolute;
        left: .1rem;
        top: 0.1rem;
        color:#e0e0e0;
        line-height: 100%;
    }
}
.seachFont{
    margin-left: .1rem;
    line-height: .55rem;
    color: #777;
    font-size: 16px;
}


</style>
