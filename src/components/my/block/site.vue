<template>
  <div class="site">
    <div class="site-list">
        
    </div>
    <div class="add-site">
        <div class="add">
          <div  class="addSite">
+ 新增地址  
          </div>
          </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"site",
  data () {
      return {
          
      }
  }

}
</script>
<style lang="scss" scoped>
.site{
  height: 100%;
  display: flex;
  flex-direction: column;
    .site-list{
        flex: 1;
        width: 100%;
        padding-top: 0.1rem;
    }
    .add-site {
      height: 0.6rem;
        width: 100%;
        background: #fff;
        .add {
          display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            .addSite {
                height: 0.45rem;
                width: 2.25rem;
                color: #000;
                background-color: #ffd600;
                border-radius: .06rem;
                text-align: center;
                line-height: 0.45rem;
            }
        }
    }
}
</style>
