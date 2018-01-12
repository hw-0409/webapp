<template>
  <div class="app-shop">
    <header>
      <span class="car-top">购物车</span>
    </header>
    <section>
      <div class="car-non" v-if="!car.length">
        <img src="../../assets/app-my-image/carNon.png">
        <p>亲，购物车空空的耶~</p>
        <router-link to="/mian" tag="span">去逛逛</router-link>
      </div>
      <div class="car-group " v-else>
        <router-link to="/position" tag="div" class="car-info" >
            <table>
              <tr>
                <td width="28%">收<i class="car-hidden">a</i>货<i class="car-hidden">a</i>人</td>
                <td>韩伟 先生</td>
                <td width="17%" rowspan="3">修改<span class="yo-ico ">&#xf07f;</span></td>
              </tr>
              <tr>
                <td>电<i class="car-hidden">电话</i>话</td>
                <td>15835850014</td>
              </tr>
              <tr>
                <td>收货地址</td>
                <td>北京市回龙观 北京市回龙观地铁站</td>
              </tr>
            </table>
        </router-link>
        <div class="group-name">
            <p>闪送超市</p>
            <router-link to="/gather" tag="span">凑单专区</router-link>
        </div>
        <p class="group-proptext">¥0起送，22:00前满¥30免运费</p>
        <!-- 收货时间 -->
        <div class="group-select">
            收货时间&nbsp;&nbsp;
            <select class="select" v-model="select">
                <optgroup label="今天" v-if="isTaday.length">
                  <option v-for="tt in isTaday" :value="tt">{{tt}}</option>
                </optgroup>   
                <optgroup label="明天">
                  <option v-for="tt in timeQuantum" :value="'明天 '+tt">{{tt}}</option>
                </optgroup>   
                <optgroup label="后天">
                  <option v-for="tt in timeQuantum" :value="'后天 '+tt">{{tt}}</option>
                </optgroup>    
            </select>
            <span class="selectShow" >{{select}}</span>
            <span class="group-receive-ext">可预订<span class="yo-ico ">&#xf07f;</span></span>
        </div>

        <div class="group-comment">
            收货备注  &nbsp;&nbsp;
            <input type="text" v-model="commentWrapper" placeholder="可输入100字以内特殊要求内容"/>
        </div>
        <ul class="group-list">
          <li class="group-item" v-for="car in car" :key="car.id">
              <div class="group-item-check" :class="{'checkActivt':car.isShow}" @click="isChangeShow({id:car.id})"></div>
              <div class="group-item-img"><img :src="car.img" :title="car.name"></div>
              <div class="group-item-namePrice">
                  <div class="group-item-name">{{car.name}}</div>
                  <div class="group-item-price">
                      ￥{{car.price}}
                      <div class="group-item-ope">
                          <span class="group-item-reduce group-item-change" @click="reduceCar({id:car.id})"><b>-</b></span>
                          <span class="group-item-number"><b>{{car.num}}</b></span>
                          <span class="group-item-add group-item-change" @click="addCar({id:car.id})"><b>+</b></span>
                      </div>
                  </div>
              </div>
          </li>
        </ul>

        <div class="group-footer">
            <div class="group-check" :class="{'checkActivt':isShowAll}" @click="isAllChangeShow()">全选</div>
            <div class="heji">共：<span>￥{{money}}</span></div>
            <div class="accounts group-btn" v-if="isShop">选好了</div>
            <div class="weixuan group-btn" v-else>满￥0起送</div>
        </div>
      </div>
    </section>


    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from "../App-Footer/AppFooter"
import {mapState,mapActions,mapGetters} from 'vuex'
import VueRouter from 'vue-router'
export default {
  name: 'app-shop',
    components:{AppFooter},
  data () {
    return {
        timeQuantum:["09:00-10:00","10:00-11:00","11:00-12:00","12:00-13:00","13:00-14:00","14:00-15:00","15:00-16:00","16:00-17:00","17:00-18:00","18:00-19:00","19:00-20:00","20:00-21:00"],
        isTaday:[],
        select:'30分钟送达',//收货时间
        commentWrapper:'',//备注
    }
  },
  computed: {
     ...mapState(['info',"car"]),  
     ...mapGetters(['money']),
     isShowAll:{//全选按钮
      get(){
        return this.car.every(item => {
          if(item.isShow){
              return true
          }else{
              return false
          } 
        })
      }
    },
    isShop:{
      get(){
        return this.car.some(item => {
          if(item.isShow){
              return true
          }else{
              return false
          } 
        })
      }
    }
  },
  methods:{
    ...mapActions(['initInfo',"reduceCar","addCar","isChangeShow","isAllChangeShow"]),
    
    //收货时间
    nowTime(){

        let H = new Date().getHours()
        let time ;
        switch (H) {
          case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9: time = 0; break;
          case 10:time = 1;break;
          case 11:time = 2;break;
          case 12:time = 3;break;
          case 13:time = 4;break;
          case 14:time = 5;break;
          case 15:time = 6;break;
          case 16:time = 7;break;
          case 17:time = 8;break;
          case 18:time = 9;break;
          case 19:time = 10;break;
          case 20:time = 11;break;
          default:time = 12;break;
        }
        if(time >=0 && time <=11){
          this.isTaday[0] = "30分钟送达";
          this.isTaday.push(...this.timeQuantum.slice(time+1,12))
        }else{
          this.select = '明天 09:00-10:00'
        }
    },
    
  },
  mounted () {
    this.initInfo()
    this.nowTime()
    setTimeout(()=>{
      if(!this.info.length){
        this.$router.push({path:'/my-login'})
      }
    },400)
  },
}
</script>
<style>

</style>
