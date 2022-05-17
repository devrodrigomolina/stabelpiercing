<template>
  <div id="trabalhos" class="container-tb">
    <h1>Acompanhe alguns dos meus trabalhos</h1>
    <div class="carrossel">
      <div class="item" data-anime="rigth">
        <img src="@/assets/c.jpeg" alt="">
      </div>
      <div class="item" data-anime="rigth">
        <img src="@/assets/c.jpeg" alt="">
      </div>
      <div class="item" data-anime="rigth">
        <img src="@/assets/c.jpeg" alt="">
      </div>
      <div class="item" data-anime="rigth">
        <img src="@/assets/c.jpeg" alt="">
      </div>
      <div class="item" data-anime="left">
        <img src="@/assets/c.jpeg" alt="">
      </div>
      <div class="item" data-anime="left">
        <img src="@/assets/c.jpeg" alt="">
      </div>
      <div class="item" data-anime="left">
        <img src="@/assets/c.jpeg" alt="">
      </div>
      <div class="item" data-anime="left">
        <img src="@/assets/c.jpeg" alt="">
      </div>
    </div>
  </div>
</template>

<script>

import animateScroll from "@/helpers/animations.js"

export default {
  name: 'Trabalhos',
  mixins: animateScroll,  
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
  display: grid;
  grid-template-columns: 200px 200px 200px 200px;
  grid-template-rows: 1fr 1fr;
  grid-gap: 13px;
  border: 1px solid red;
}
.item {
  
}
.carrossel img {
  width: 200px;

}

</style>