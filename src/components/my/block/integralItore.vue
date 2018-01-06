<template>
  <div class="integral-itore">
    <anc :jf="jf" ></anc><!-- 头部动画 -->
    <div class="itore-type">
          <div class="menus" v-for="data in data" :key="data.id">
              <img :src="data.img" :title="data.type" alt="">
              <p>{{data.type}}</p>
          </div>
    </div>
    <div class="tickets ">
        <div class="tab-action">

        </div>
    </div>
  </div>
</template>
<script>
import anc from './anciecle'
import axios from 'axios'
export default {
  name:"integral-itore",
  components: {
      anc
  },
  data () {
      return {
          jf:0,
          data:[
            {id:1,type:"积分明细",img:"./src/assets/app-my-image/jf.png"},
            {id:2,type:"兑换记录",img:"./src/assets/app-my-image/dh.png"},
            {id:3,type:"积分规则",img:"./src/assets/app-my-image/gz.png"},
          ]
      }
  },
  methods: {
    getData(){
    	axios.get("/axf/data/pointsShop")
          .then((response)=>{
            //没有登录  无法访问 
      })
    }
  },
  mounted () {
    this.getData()
  }

}
</script>
<style lang="scss" scoped>
    .itore-type{
      width: 100%;
      background: #fff;
      display: flex;
      .menus{
        width: 33.33%;
        text-align: center;
        border: 1px solid #eee;
        padding-bottom: 0.06rem;
        img{
          width: 0.3rem;
          margin: 0.12rem;
        }
        p{
            color: #999
        }
      }
    }
  .tickets{
    display: flex;
    background: #fff;
    margin: 12px 0;
    .tab-action{
      width: 50%;
      border: 1px solid #eee;
      height: 100px;
    }
  }
</style>
