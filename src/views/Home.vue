<template>
  <div class="home">
    <SubHeader/>
  </div>
</template>

<script>
import SubHeader from "@/components/SubHeader.vue"
export default {
  name: 'Home',
  components: {
    SubHeader
  }
}
</script>
<style scoped>
.home {
  width: 100vw;
}
</style>