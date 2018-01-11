<template>
    <div class="app-detail">
        <div class="details-fixed">
            <div class="app-detail-header">
            <span @click="returngo()" class="yo-ico details-left">&#xf07d;</span>
                <div class="header-center">
                    </div>
            </div>
        </div>

        <div class="app-details-con">
         
                <AppDateilContant :goods="goods"></AppDateilContant> 

        </div>

         <div class="app-detail-foot">
            <div class="detail-foot-f">
                    <span  class="yo-ico details-left">收藏</span>
            
            <div class="foot-center">
                    添加商品：
                    <span @click="reduceCar">-</span>
                        <i>0</i>
                    <span @click="addCar({id:id,name:name,price:price,img:img})">+</span>
            </div>
            </div>
            <div class="buyCar">
                <div class="carNum">2</div>
            </div>
         </div> 
    </div>
</template>

<script>
import { mapState,mapActions} from 'vuex'
import AppDateilContant from './App-Dateil-Contant'
import Bus from '../../modules/bus'
import axios from 'axios'
export default {
    name:'app-deteil',
    components:{
        AppDateilContant
    },
    data(){
        return{
            goods:[],
            imgBox:[],
            getImg:'',
            price:'',
            id:'',
            name:'',
            num:'',
            img:''
        }
    },
    methods:{
        getGoods(){
            let that =this
            axios.get("/axf/show/productDetail?asid=5a375a83d6ec83054&_r=0.17765971774163258&reflogid=5a4f25e9efa025878&location_hash=895f738YFTysAa1bIF1iziKG5%2BNKnJmip6bI2CB43TWEFjpAzhK8cs3h5Qbk0X74u9k7kjcMjHYDp8hXFIJx4x&from=vv&id=126061&shopId=15204&bigids=2%2C0&simulate_mobile=",{
                params:{id:that.$route.params.id,img:that.$route.params.img}
            }).then((res)=>{
             that.goods = res.data
             that.id = that.$route.params.id
             that.price = that.$route.params.price
             that.name = that.$route.params.name
             that.img = that.$route.params.img
            })
            
        },
        returngo(){
            this.$router.go(-1)
        },
        ...mapActions(['addCar','reduceCar'])
        
    },
    created(){
        this.getGoods()
    },
    updated(){
       var banner = document.getElementById("bannerContainer")
       var product = document.getElementsByClassName("product-name")[0]
       var header = document.getElementsByClassName("header-center")[0]
       header.innerHTML = product.innerHTML
       banner.style.marginTop = 4+ 'rem'
        banner.style.width = 100 + '%'
       banner.style.height = 100 + '%'
       var img = document.createElement('img')
       img.alt = '图片不见了...'
       img.style.width = 100 + '%'
       img.style.height = 100 + '%'
        //console.log(this.$route.params.img)
        //20171214155319_585613.jpg
        this.getImg = String(this.$route.params.img)
        var str = this.getImg.substr(0,3)
        var tr = this.getImg.substr(3,3)
        var sr = this.getImg.substr(6,4)
       img.src = "http://img01.bqstatic.com/upload/goods/"+str+"/"+tr+"/"+sr+"/"+this.$route.params.img+"@500w_500h_90Q"
       banner.appendChild(img)
    },
     mounted () {
            Bus.$on('inceptMessage',(imgBox) => {
                this.imgBox = imgBox
            })
        }
    

  
}
</script>
<style lang="scss" scoped>
.app-detail{
    width: 100%;
    height: 100%;
    overflow: scroll;
}
</style>

