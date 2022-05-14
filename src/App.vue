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
  height: 100vh;
  background: radial-gradient(circle, #0A0B10 0%, #0A0B10 28%, rgba(0,0,0,1) 77%);
}
</style>
