<template>
  <div class="integral-itore">
    <anc :jf="jf" ></anc><!-- 头部动画 -->

  </div>
</template>
<script>
import anc from './anciecle'
export default {
  name:"integral-itore",
  components: {
      anc
  },
  data () {
      return {
          jf:0,
      }
  }

}
</script>
<style lang="scss" scoped>
    
</style>
