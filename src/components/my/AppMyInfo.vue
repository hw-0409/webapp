<template>
  <div class="app-my-info">
    <header>
        <router-link to="/my" class="yo-ico ">&#xf07d;</router-link>
        <div class="vip">会员中心</div>
    </header>
    <section>
      <div class="bk-info">
        <div class="profile"></div>
        <p class="currentPoints">0／999</p>
        <div class="levels-iScroller">
          <div class="long"><div class="long-mark mark-color"></div></div>
          <span v-for="_type in vpiGeade" class="vip-geade">{{_type.name}}</span>
          
        </div>
        <p class="geade">距下一等级还需 {{nweGeade.lower_bound}} 成长值 </p>
      </div>
      <div class="api-legend">会员攻略</div>
      <div class="celue">
          <dl>
            <dt><img src="../../assets/app-my-image/1.png" alt=""></dt>
            <dd> 
              <h4><span>成长值</span><i class="yo-ico" :class="{tran:!warpType[0].warp}"  @click="ischange(0)">&#xf031;</i></h4>
              <p :class="{warp:warpType[0].warp}">会员等级有效期为1年，1年后扣减相应等级成长值，剩余成长值重新计算会员级别。</p>

            </dd>
          </dl> 
           <dl>
            <dt><img src="../../assets/app-my-image/1.png" alt=""></dt>
            <dd> 
              <h4><span>成长攻略</span><i class="yo-ico" :class="{tran:!warpType[1].warp}"  @click="ischange(1)">&#xf031;</i></h4>
              <p :class="{warp:warpType[1].warp}">
会员等级越高获得的积分越多。<br />1、注册会员：0.5倍积分<br />2、普通会员：1倍积分<br />3、白银会员：1.5倍积分<br />4、黄金会员：2倍积分<br />5、钻石会员：3倍积分
              </p>

            </dd>
          </dl> 
           <dl>
            <dt><img src="../../assets/app-my-image/1.png" alt=""></dt>
            <dd> 
              <h4><span>特权</span><i class="yo-ico" :class="{tran:!warpType[2].warp}" @click="ischange(2)">&#xf031;</i></h4>
              <p :class="{warp:warpType[2].warp}">
                1、注册会员：30>成长值>＝0；<br />
                2、普通会员：199>成长值>＝30；<br />
                3、白银会员：499>成长值>＝199；<br />
                4、黄金会员：999>成长值>＝499；<br />
                5、钻石会员：成长值>＝999；<br />
              </p>

            </dd>
          </dl> 
           <dl>
            <dt><img src="../../assets/app-my-image/1.png" alt=""></dt>
            <dd> 
              <h4><span>会员等级说明</span><i class="yo-ico " :class="{tran:!warpType[3].warp}" @click="ischange(3)">&#xf031;</i></h4>
              <p :class="{warp:warpType[3].warp}">
                1、购买精选商品实付金额1：1转化为成长值（不包含优惠券等抵扣部分）；<br />
                2、在“天津、西安、成都、南京、佛山”下单，完成订单后可以获得10成长值；<br />
                3、商品退换货，需扣除该商品所获得成长值；<br />
                4、订单取消，需扣除该订单所获得成长值；<br />
                5、因作弊等行为产生的成长值，爱鲜蜂有权扣除相应成长值；<br />
              </p>

            </dd>
          </dl> 
      </div>

    </section>
  </div>   

</template>
 
<script>
export default {
  name: 'app-my',
  data () {
    return {
        vpiGeade:[
            {id:0,name:"V0",width:"1.6",lower_bound:"0"},
            {id:1,name:"V1",width:"3.76",lower_bound:"30"},
            {id:2,name:"V2",width:"4.96",lower_bound:"199"},
            {id:3,name:"V3",width:"6.72",lower_bound:"499"},
            {id:4,name:"V4",width:"8.48",lower_bound:"999"},
        ],
        warpType:[
          {id:"1",warp:true},
          {id:"2",warp:true},
          {id:"3",warp:true},
          {id:"4",warp:true},
        ],
        nweGeade:{},
        nowGeade:33,


    }
  },
  methods: {
      geade(id){
        id = parseInt(id);
          if(id < 5 && id >= 0){
            this.nweGeade = this.vpiGeade[id];
          }else{
            this.nweGeade = this.vpiGeade[0];
          }
      },
      ischange(id){
          this.warpType[id].warp = !this.warpType[id].warp;
      }
  }
}
</script>
<style>

</style>

