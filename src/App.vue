<template>
  <div id="app">
    <TheHeader/>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100vw;
  background: radial-gradient(circle, #0a0b10 0%, #000000 50%, rgb(0, 0, 0) 80%);
}
</style>
