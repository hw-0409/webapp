<template>
   <div class="app-position">
       <div class="position-box">
       <span  @click="returngo()" class="yo-ico position-left">&#xf07d;</span>
       <p class="position-right">选择地址</p>
       </div>
        <div @click="infoCase" class="position-adders">
           定位到当前位置
       </div>
    <PositionAddres></PositionAddres>
    
   </div>
</template>
<script>
import PositionAddres from "./position-addres"
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
    name:'app-position',
    components:{
        PositionAddres
    },
    methods:{
          returngo(){
            this.$router.go(-1)
        },
        infoCase(){
             Indicator.open({
                    text: '正在定位...',
                   // spinnerType: 'fading-circle'
                })
            setTimeout(()=>{
                Toast({
                        message: '定位失败，请检查定位设置',
                        position:'bottom'
                    });
               Indicator.close()
            },1000)
            
        }
    }
}
</script>
