<template>
  <div class="app-my-add-store">
      <header>
        <router-link to="/my-store" class="yo-ico ">&#xf07d;</router-link>
        <div class="myAddStore">新增店铺</div>
        <div class="redact"><i class="yo-ico">&#xf07d;</i><p>扫一扫</p></div>
      </header> 
      <section>
        <div class="site">
          <p>龙腾街附近</p>
          <i class="yo-ico">&#xf07f;</i>
        </div>
        <p class="p">附近的店铺</p>
        <ul class="newarby-shore">
          <li class="supermarket">
              <div class="sup-con">
                <p class="sup-name">龙腾六区超市 </p>
                <p class="sup-time">营业时间:09:00--22:00</p>
                <p class="sup-site">北京市昌平区龙腾苑六区北门底商</p>
              </div>
              <div class="sup-option">
                <div class="sup-dist">0.00km</div>
                <div class="sup-fav">+收藏</div>
              </div>
          </li>
          <li class="supermarket">
              <div class="sup-con">
                <p class="sup-name">龙腾六区超市 </p>
                <p class="sup-time">营业时间:09:00--22:00</p>
                <p class="sup-site">北京市昌平区龙腾苑六区北门底商</p>
              </div>
              <div class="sup-option">
                <div class="sup-dist">0.00km</div>
                <div class="sup-fav">+收藏</div>
              </div>
          </li>
        </ul>
      </section>
  </div>
  

</template>
<script>
export default { 
  name:"app-my-add-store"
}
</script>
<style scoped>

</style>
