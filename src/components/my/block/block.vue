<template>
    <div class="my-block">
        <header>
            <router-link to="/my" class="yo-ico ">&#xf07d;</router-link>
            <div class="block">{{blockShow.title}}</div>
            <div class="redact">{{blockShow.red}}</div>
      </header>
    </div>
</template>
<script>
export default {
  name:"my-block",
  data () {
      return {
          block:[
              {id:1,title:"积分商城",isboo:false,red:""},
              {id:2,title:"我的优惠券",isboo:true,red:"使用规则"},
              {id:3,title:"我的地址",isboo:false,red:""},
              {id:4,title:"帮助中心",isboo:false,red:""},
              {id:5,title:"关于我们",isboo:false,red:""}
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
