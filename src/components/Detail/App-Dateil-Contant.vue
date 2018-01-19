<template>
  <div class="app-detail-contant">
       <div v-html="goods">
         
        </div>
  </div>
</template>

<script>
export default {
  name:'app-detail-contant',
  props:['goods'],

}
</script>
