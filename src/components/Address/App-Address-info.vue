<template>
  <div class="app-address-info">
       <form action="">
           <table>
               <tr>
                   <th>联系人</th>
                   <td><input v-model="infoAddress.person" type="text" placeholder="收货人姓名"></td>
               </tr>
               <tr>
                   <th>&nbsp;</th>
                   <td><span><input id="man" type="radio" value="男士" name="seam" >男士</span><span><input id="woman" type="radio" value="女士" name="seam" >女士</span></td>
               </tr>
               <tr>
                   <th>手机号码</th>
                   <td><input v-model="infoAddress.phone" type="text" placeholder="鲜蜂侠联系您的电话"></td>
               </tr>
               <tr>
                   <th>所在城市</th>
                   <td><div class="select"> 
                        请选择城市<span class="select-right"> > </span>
                       </div>
                     
                       </td>
               </tr>
               <tr>
                 <th>所在地区</th>
                   <td><input type="text" placeholder="请选择您的住宅小区、大厦或学校"></td>
               </tr>
               <tr>
                  <th>详细地址</th>
                   <td><input v-model="infoAddress.detailaddress" type="text" placeholder="请输入楼号门牌号等详细信息"></td>
               </tr>    
           </table>
       </form> 
  </div>
</template>
<script>
export default {
  name:'address-info',
  props:['infoAddress']

}
</script>

