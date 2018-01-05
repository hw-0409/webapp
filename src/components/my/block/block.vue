<template>
    <div class="my-block">
        <header>
            <router-link to="/my" class="yo-ico ">&#xf07d;</router-link>
            <div class="block">{{blockShow.title}}</div>
            <div class="redact" >{{blockShow.right}}</div>
      </header>
      <section>
          <integral-itore v-if="blockShow.id==1"></integral-itore>
          <coupon  v-if="blockShow.id==2"></coupon>
          <site  v-if="blockShow.id==3"></site>
          <service  v-if="blockShow.id==4"></service>
          <about-us  v-if="blockShow.id==5"></about-us>
      </section>
    </div>
</template>
<script>
import integralItore from './integralItore'
import coupon from './coupon'
import aboutUs from './aboutUs'
import service from './service'
import site from './site'
export default {
  name:"my-block",
  components: {
      integralItore,coupon,aboutUs,service,site
  },
  data () {
      return {
          block:[
              {id:1,title:"积分商城",isboo:false,right:""},
              {id:2,title:"我的优惠券",isboo:false,right:"使用规则"},
              {id:3,title:"我的地址",isboo:false,right:""},
              {id:4,title:"帮助中心",isboo:false,right:""},
              {id:5,title:"关于我们",isboo:false,right:""},
          ],
          blockShow:'',
      }
  },
  methods: {
      isBlock(id){
        this.block.forEach(item=>{
            if(item.id == id){
                this.blockShow = item
            }
        })
      }
  },
  mounted () {
      this.isBlock(this.$route.params.id)
  }
}
</script>
<style lang="scss">

</style>
