<template>
  <div class="coupon">
    <div class="gray" >
        <div class="tab" @click="tabGray(gray.id)" v-for="gray in gray" :key="gray.id" :class="{activer:gray.isboo}">
            {{gray.type}}
        </div>
    </div>
    <div class="coupon-bind">
      <div class="spline">
        <input type="text" class="txt" placeholder="请输入优惠券号码">
        <input type="button" class="btn" value="绑定">
      </div>
    </div>

    <div class="coupon-list">
      <div class="coupon-item" v-for="gr in grays">
          <dl>
            <dt>
              <div><p>￥{{gr.price}}</p></div>
            </dt>
            <dd>
              <fieldset class="item-fieldset">
                <legend>{{gr.leg}}</legend>
                <div class="item-time">{{gr.time}}</div>
                <div class="item-description">{{gr.description}}</div>
              </fieldset>
            </dd>
          </dl>
          <div class="item-left"></div>
          <div class="item-right"></div>
          <div class="item-center">
            <span v-for="i in 15"></span>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"coupon",
  data () {
      return {
          gray:[
            {id:1,type:"未使用",isboo:true},
            {id:2,type:"已使用",isboo:false},
            {id:3,type:"已过期",isboo:false}
          ],
          shouGray:1,
          grays:[],
          wsy:[
            {id:1,price:'2',leg:"鲜蜂2元福利券",time:"18/01/06 00:00至18/01/12 23:59",description:"本劵限精选商品，订单需满30元可用，每笔订单只能使用一张优惠券，限在线支付"}
          ],
          ysy:[],
          ygq:[],

      }
  },
  methods: {
    tabGray(id){
        var that = this;
        this.gray.forEach(item=>{
          item.isboo = false;
        })
        this.gray.forEach(item=>{
          if(item.id == id){
            item.isboo = true;
            that.shouGray = item.id;
          }
        })
    },
    getGray(){
          switch(this.shouGray){
              case 1: this.grays = this.wsy; return;
              case 2: this.grays = this.ysy; return;
              case 3: this.grays = this.ygq; return;
          }
      }
  },
  updated () {
    this.getGray()
  },
  mounted () {
    this.getGray()
  }



}
</script>
<style lang="scss" scoped>
  .coupon{
    .gray{
      display: flex;
      background: #FFF;
      border-bottom: 1px solid #eee;
      padding: 0 0.12rem;
      .tab{
        width: 33.33%;
        text-align: center;
        line-height: 50px;
        position: relative;
      }
      .activer{
        &:after{
          content: '';
            position: absolute;
            display: block;
            width: 80%;
            height: 0;
            border-bottom: 2px solid transparent;
            bottom: 0;
            left: 10%;
          border-color: #ff3800;
        }
      }

    }
  .coupon-bind{
    background-color: #fff;
    padding: .096rem 0.18rem; 
      .spline{
          position: relative;
          background-color: #fff;
          height: .38rem;
          line-height: .38rem;
          border:1px solid #eee;
          border-radius: .06rem;
        .txt{
          position: absolute;
          width: 78%;
          left: 0;
          top: 0;
          height: 0.36rem;
          border: 0;
          text-indent: .06rem;
          border-radius: .06rem 0 0 .06rem;
        }
        .btn{
              background-color: #ffd600;
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 22%;
          border: 0;
          border-radius: 0 .06rem .06rem 0;
          font-size: 14px;
          font-weight: 700;
        }
      }
    }
  }
  .coupon-list{
    height: 100%;
    background:#fff;
    &:before{
      content: '';
      height: 1px;
      width: 200%;
      background: #ccc;
      display: block;
      transform: scale(0.5);
      transform-origin: left ;
    }
    .coupon-item{
      padding: 0 0.18rem 0.12rem 0.18rem;
      margin:8px 0;
      position: relative;
      height: 1.25rem;
      dl{
        border: 1px solid #fee9bc;
        background-color: #fff5df;
        color: #9c714f;
        display: flex;
        height: 100%;
        dt{
          width: 0.96rem;
            div{
              position: relative;
              width: 0.6rem;
              height: 0.6rem;
              text-align: center;
              border-radius: 0.3rem;
              background-color: #d6d6d6;
              color: #fff;
              font-size: 16px;
              line-height: 16px;
              margin-left: 0.24rem;
              margin-right: 0.12rem;
              top: 0.28rem;
                 background-color: #ffd600;
              p{
                  height: 0.6rem;
                  line-height: 0.6rem;
              }
            }
        }
        dd{
          flex:1;
          padding: .06rem;
          position: relative;
          font-size: 12px;
            .item-fieldset{
                  border-top: solid 1px #fee7b5;
                  padding:4px 10px;
              legend{
                  font-weight: 700;
                  text-align: center;
              }
              .item-time{
                  height: 0.16rem;
                  line-height:12px;
                  margin: .024rem;
                  text-align: center;
                  border-bottom: solid 1px #fee7b5;
              }
              .item-description{
                line-height: 0.18rem;
                height: 0.6rem;
                overflow: hidden;
              }
            }
        }
      }
      .item-left,.item-right{
        position: absolute;
        top: 0.44rem;
        
        width: 0.12rem;
        height: 0.24rem;
        border: solid 1px #fee9bc;
        
        background-color: #fff;
      }
      .item-left{
        border-radius:0 0.24rem 0.24rem 0;
        left: 0.18rem;
      }
      .item-right{
        border-radius: 0.24rem 0 0 0.24rem ;
        right: 0.18rem;
      }
      .item-center{
        position: absolute;
        top: 0;
        left: 1.1rem;
        height: 1.13rem;
        overflow: hidden;
        span{
          width: .08rem;
          height: .08rem;
          background: #fff;
          display: block;
          margin-bottom: 1px;
          border-radius: 50%;
        }
      }
    }
  }
</style>
