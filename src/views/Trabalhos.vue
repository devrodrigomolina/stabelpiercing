<template>
  <div id="trabalhos" class="container-tb">
    <h1 class="title" data-anime="rigth">Acompanhe alguns dos meus trabalhos</h1>
    <Slider data-anime="left"/>
  </div>
</template>

<script>
import animateScroll from "@/helpers/animations.js"
import Slider from "@/components/Slider.vue"

export default {
  name: 'Trabalhos',
  mixins: animateScroll,
  components: {
    Slider
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Beau+Rivage&display=swap');


.title:before {
  content: "";
  position: absolute;
  width: 100px;
  height: 2px;
  bottom: 0;
  left: 46%;
  background-color: #FBCE3F;
}
.container-tb {
  width: 100%;
  max-width: 1300px;
  padding-top: 180px;
  margin: 0 auto;
}
.container-tb h1 {
  color: white;
  font-family: 'Beau Rivage', cursive;
  text-align: center;
  margin: 0 0 100px 0;
  font-size: 3rem;
}

@media screen and (max-width: 768px) {
  .container-tb {
     padding-top: 80px;
  }
}


</style>