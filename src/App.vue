<template>
  <div id="app">
      <keep-alive include="app-main">
     <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>


export default {
  name: 'app',
}
</script>

<style>
#app{
  width: 100%;
  height: 100%;
}

</style>
