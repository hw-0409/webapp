<template>
  <div class="service">
      <div class="service-list">
          <div class="service-item">
              <dl>
                <dt><img src="../../../assets/app-my-image/xx.png" title=""></dt>
                <dd>
                  <h5>意见反馈</h5>
                  <p>1-2个工作日内反馈</p>
                </dd>
              </dl>
              <span class="yo-ico ">&#xf07f;</span>
          </div>
          <div class="service-item">
              <dl>
                <dt><img src="../../../assets/app-my-image/wh.png" title=""></dt>
                <dd>
                  <h5>常见问题</h5>
                  <p>配送时间、优惠券和退款流程等</p>
                </dd>
              </dl>
              <span class="yo-ico ">&#xf07f;</span>
          </div>
          <div class="service-item">
              <dl>
                <dt><img src="../../../assets/app-my-image/sj.png" title=""></dt>
                <dd>
                  <h5>客服电话</h5>
                  <h6>400-8484-842</h6>
                </dd>
              </dl>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name:"service",
  data () {
      return {
      }
  }

}
</script>
<style lang="scss" scoped>
  .service{
    height: 100%;
    .service-list{
      padding-left: 0.18rem;
      margin-bottom: 0.12rem;
      background: #fff;
      .service-item{
        display: flex;
          height: 0.94rem;
          align-items: center;
        dl{
          display: flex;
          height: 100%;
          flex: 1;
          align-items: center;
          border-bottom: 1px solid #eee;
          dt{
            width: 0.55rem;
            img{
              width:0.36rem;
            }
          }
          dd{
            h5{
              font-size:0.18rem;
              line-height: 0.45rem;
              font-weight: 700;
            }
            p{
                color: #999;
                line-height: 1;
                font-size: 16px;
                margin-bottom: 0.08rem;
            }
            h6{
              font-weight: 100;
              color: #57b6e2;
              font-size: 16px;
              margin-bottom: 0.08rem;
            }

          }
        }
        span{
          width:0.3rem;
          height: 100%;
          border-bottom: 1px solid #eee;
          padding-top: 0.4rem;
        }

      }
    }
  }
</style>
