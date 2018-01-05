<template>
  <div class="app-my-store">
       <header>
        <router-link to="/my" class="yo-ico ">&#xf07d;</router-link>
        <div class="myStore">店铺收藏</div>
        <div class="redact" @click="isChangeRedact">{{isRedact}}</div>
      </header> 
      <section class="section">
          <div class="content" v-for="store in store">
            <h4>{{store.name}}</h4>
            <p>{{store.time}}</p>
            <p>{{store.site}}</p>
            <transition v-if="!isCR" enter-active-class="ani fade-in-right" leave-active-class="ani fade-out-right">
            <div  class="remove ani fade-in-right" @click="isRemove(store.id)">删除</div>
            </transition>
          </div>
      </section>
      <footer>
        <div class="foot">
          <router-link to="/my-add-store" class="addStore">
+ 新增店铺
          </router-link>
        </div>
      </footer>
  </div>
</template>
<script>
export default {
  name:"app-my-store",
  data () {
    return {
      store:[
        {id:1,name:"爱鲜蜂(苑店)",time:"营业时间:09:00--22:00",site:"北京市昌平区龙腾苑六区北门底商"},
        {id:2,name:"爱鲜蜂(龙腾苑店)",time:"营业时间:09:00--22:00",site:"北京市昌平区龙腾苑六区北门底商"},
        {id:3,name:"爱鲜蜂()",time:"营业时间:09:00--22:00",site:"北京市昌平区龙腾苑六区北门底商"},
        ],
      isCR:true,
      isRedact: "编辑",
    }
  },
  methods: {
     isChangeRedact(){
        if(!this.isCR){
          this.isRedact = "编辑"
        }else {
           this.isRedact = "完成"
        }
        this.isCR = !this.isCR
      },
      isRemove(id){
        let that = this
        this.store.forEach((item,i)=>{
            if(item.id===id){
              that.store.splice(i,1)
            }
        })
      }
  }

}
</script>