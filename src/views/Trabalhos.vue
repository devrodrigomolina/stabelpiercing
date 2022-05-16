<template>
  <div id="trabalhos" class="container-tb">
    <h1>Acompanhe alguns dos meus trabalhos</h1>
    <div class="carrossel">
      <img src="@/assets/a.jpeg" alt="">
      <img src="@/assets/b.jpeg" alt="">
      <img src="@/assets/c.jpeg" alt="">
      <img src="@/assets/c.jpeg" alt="">
      <img src="@/assets/c.jpeg" alt="">
      <img src="@/assets/c.jpeg" alt="">
      <img src="@/assets/c.jpeg" alt="">
      <img src="@/assets/c.jpeg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Trabalhos'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Beau+Rivage&display=swap');

.container-tb {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
}
.container-tb h1 {
  color: white;
  font-family: 'Beau Rivage', cursive;
  text-align: center;
  margin: 50px 0;
  font-size: 3rem;
}
.carrossel {
  display: flex;
  overflow-x: scroll;
}
.carrossel img {
  width: 300px;
}
</style>