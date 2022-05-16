<template>
  <div id="home" class="container-sh">
    <div class="infos-sh" data-anime="rigth">
      <h1>Vitor Stabel <span>Piercing</span>.</h1>
      <p>Body Piercer Since 2015.</p>
    </div>
    <div class="img-sh" data-anime="left">
      <img src="@/assets/vitor.png" alt="">
    </div>
  </div>
</template>

<script>
import animateScroll from "@/helpers/animations.js"

export default {
  name: 'SubHeader',
  mixins: animateScroll,

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Beau+Rivage&display=swap');

.container-sh {
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  max-width: 1300px;
  margin: 0 auto;
  box-shadow: 0px 15px 10px -15px #fbcf3f33;
  /*border-bottom: 2px solid #FBCE3F;*/
}
.infos-sh {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.infos-sh h1 {
  width: 500px;
  font-size: 6rem;
  font-family: 'Beau Rivage', cursive;
  color: white;
}
.infos-sh p {
  width: 300px;
  color: white;
  text-align: justify;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 13px;
  position: relative;
  padding-left: 50px;
}
.infos-sh p::before {
  content: '';
  width: 55px;
  height: 2px;
  background-color: #fff;
  position: absolute;
  top: 9px;
  left: -15px;
}
.infos-sh h1 span {
  color: #FBCE3F;
}
.img-sh img {
  width: 540px;
  height: 650px;
}
</style>