<template>
    <div class="my-login">
        <header>
            <router-link to="/main" class="yo-ico ">&#xf07d;</router-link>
            <div class="login">验证手机</div>
      </header>
      <div class="pic-word">
            <p>为了方便您及时查询订单信息，鲜蜂侠需要验证您的手机号为查询帐号</p>
        </div>
        <div class="log">
            <div class="user us"><input type="text" onkeypress="return event.keyCode>=48&&event.keyCode<=57" v-model="user" placeholder="手机号码"/><span @click="verUser">获取验证码</span></div>
            <div class="user"><input type="text" v-model="code" placeholder="短信验证码"/><b>{{newCode}}</b></div>
        </div>
        <p class="voice">收不到短信？使用<span class="voick-link">语音验证码</span></p>
        <div class="buttom" @click="submit">确定</div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  name:"my-login",
  data () {
      return {
          user:'',
          code:'',
          newCode:'',
          
      }
  },
  methods: {
      verUser(){
        var pattern = /^(13|14|15|17|18|19)[0-9]{9}$/;
        if(this.user.length === 0){
            alert("请输入手机号")
            return false
        }
        if(pattern.test(this.user)){
            this.newCode = this.getCode()
        }else{
            alert("请输入正确的手机号")
        }
        
      },
      getCode(){
          let str = 'qwertyuiopasdfghjklzxcvbnmWERTYUIOPASDFGHJKLZXCVBNM1234567890'
          let newStr = ''
          for(let i = 0; i < 4;i++){
            newStr +=str.charAt(Math.floor(Math.random()*(str.length-1)))
          }
          return newStr
      },
      submit(){
          if(this.code.toUpperCase === this.newCode.toUpperCase){
              localStorage.user = "手机号:" + this.user
          }else{
              alert("验证码不正确")
          }
      }
  },
  created () {
      
  },
  updated () {
  }
}
</script>
<style lang="scss" scoped>

</style>
