<template>
  <div class="anc">
      <div class="circleProgress_wrapper">
        <div class="wrapper right">
            <div class="circleProgress rightcircle big">
                
            </div>
            <div class="circleProgress rightcircle small smallLeft">
                
            </div>
        </div>
        <div class="wrapper left">
            <div class="circleProgress leftcircle big">
                
            </div>
            <div class="circleProgress leftcircle small smallRight">
                
            </div>
        </div>
        <div class="point">
            <h6>可用积分</h6>
            <span>{{jf}}</span>
    </div>
    </div>
    
  </div>
</template>
<script>
export default {
  name:"anc",
  props:["jf"]
}
</script>
<style lang="scss" scoped>
.anc{
    width:100%;
    background: #fff; 
    padding :12px 0;
    border: 1px  solid #eee;
    border-left-width: 0;
    border-right-width: 0;
}
.point{
        position: absolute;
        z-index:999;
        width: 100%;
        height: 100%;
        text-align: center;
        padding-top:60px;
        color: #999;
        font-size: 16px;
        font-weight: 100;
        h6{
            line-height: 1em;
        }
        span{
            font-size: 25px;
        }
    }



.circleProgress_wrapper{
            width: 161px;
            height: 161px;
            margin: 0 auto;
            position: relative;
        }

        .wrapper{
            width: 80px;
            height: 160px;
            position: absolute;
            top:0;
            overflow: hidden;
        }
        .right{
            right:0;
        }
        .left{
            left:0;
        }
        .circleProgress{
            border-radius: 50%;
            position: absolute;
            
            transform: rotate(45deg);
        }
        .big{
            width: 160px;
            height: 160px;
            border:20px solid #ddd;
            top:0;
            z-index: 222;
        }
        .small{
            width: 140px;
            height: 140px;
            border:20px solid #ccc;
            top: 10px;
        }
       
        .rightcircle{
            border-top:20px solid transparent;
            border-right:20px solid transparent;
            right:0;
            animation: circleProgressLoad_right 1s linear 0s 1 alternate forwards ;
        }
        .leftcircle{
            border-bottom:20px solid transparent;
            border-left:20px solid transparent;
            left:0;
            animation: circleProgressLoad_left 1s linear 0s 1 alternate forwards;
        }
         .smallLeft{
            right: 10px;
        }
        .smallRight{
            left: 10px;
        }
     @keyframes circleProgressLoad_right{
            0%{
                -webkit-transform: rotate(45deg);
            }
            50%,100%{
                -webkit-transform: rotate(225deg);
            }
        }
        @keyframes circleProgressLoad_left{
            0%,50%{
                -webkit-transform: rotate(45deg);
            }
            100%{
                -webkit-transform: rotate(225deg);
            }
        }
</style>
