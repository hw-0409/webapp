<template>
  <div class="order-all">
<!-- 没有商品 -->
  <non-order></non-order>
  </div>
</template>
<script>
import nonOrder from './nonOrder.vue'
export default {
  name:"order-all",
  components: {
    nonOrder
  }
}
</script>
<style lang="scss" scoped>

</style>
