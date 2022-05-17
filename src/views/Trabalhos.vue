<template>
  <div id="trabalhos" class="container-tb">
    <h1>Acompanhe alguns dos meus trabalhos</h1>
    <div class="carrossel">
      <div class="item">
        <img src="@/assets/c.jpeg" alt="">
      </div>
      <div class="item">
        <img src="@/assets/c.jpeg" alt="">
      </div>
      <div class="item">
        <img src="@/assets/c.jpeg" alt="">
      </div>
      <div class="item">
        <img src="@/assets/c.jpeg" alt="">
      </div>
      <div class="item">
        <img src="@/assets/c.jpeg" alt="">
      </div>
      <div class="item">
        <img src="@/assets/c.jpeg" alt="">
      </div>
      <div class="item">
        <img src="@/assets/c.jpeg" alt="">
      </div>
      <div class="item">
        <img src="@/assets/c.jpeg" alt="">
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Trabalhos',
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
  width: 1300px;
  height: 500px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  overflow: scroll;
}
.carrossel img {
  height: 500px;
  margin-left: 10px;
}
.item {
  transition: all .3s;
}
</style>