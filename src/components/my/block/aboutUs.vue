<template>
  <div class="about-us">
    <div class="us-top">
        <img src="../../../assets/app-my-image/axf.png" title="axf">
        <p>爱鲜蜂</p>
        <span><img src="../../../assets/app-my-image/wx.png" title="微信">微信：beequick24</span>
    </div>
    <div class="about-footer">
      <p class="about-company">北京众成汇通信息技术有限公司</p>
      <span class="about-copy">Copyright ( c ) 2014-2015 beequick
        <br>all rights reserved
      </span>
      <div class="about-foot">
        <span>京ICP证150771号<br>食品流通许可证编号：SP1101051510350669(1-1)</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"about-us",
  data () {
      return {
          
      }
  }

}
</script>
<style lang="scss" scoped>
  .about-us{
      height: 100%;
      .us-top{

        width: 100%;
        height: 2.97rem;
        background: #fff;
        text-align: center;
        padding-top: 12px;
        margin-bottom: 12px;
        color: #333;
            font-weight: 700;
        >img{
            width: 1.08rem;
        }
        p{
          margin: 12px 0 0.96rem 0 ;
        }
        span{ 
          display: block;
            height: 0.28rem;
            font-size: 14px;
          img{
            width: 0.3rem;
            margin-right: 0.2rem;
            
          }
        }
      }
      .about-footer{
            text-align: center;
        .about-company{
            font-size: .14rem;
            line-height: 2 ;
            font-weight: 700;
        }
        .about-copy{
             color: #999;
            font-size: 12px;
            font-weight: 400;
        }
        .about-foot{
          position: absolute;
          bottom: 0.12rem;
          left: 0;
          width: 100%;
          font-size: 12px;
          font-weight: 400;
          color: #999;
        }
        
      }
  }
</style>
