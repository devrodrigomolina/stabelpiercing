<template>
  <div id="sobre" class="conainer-sb">
    <h1 class="title" data-anime="rigth">Um pouco mais sobre mim</h1>
    <div class="container-infos">
      <div class="foto" data-anime="rigth">
        <img src="@/assets/vitorpiercing.png" alt="">
      </div>
      <div  class="infos-sb" data-anime="left">
        <h1>Olá, Me chamo Vitor Stabel</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae autem cupiditate dolorum odio deserunt harum expedita veniam sit. Voluptas nam esse quaerat explicabo repudiandae quam sit vel aliquid dolor laudantium.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae autem cupiditate dolorum odio deserunt harum expedita veniam sit. Voluptas nam esse quaerat explicabo repudiandae quam sit vel aliquid dolor laudantium.</p>
      </div>
    </div>
  </div>
</template>

<script>
import animateScroll from "@/helpers/animations.js"

export default {
  name: 'Sobre',
  mixins: animateScroll,  
  mounted() {
    document.addEventListener('scroll', animateScroll.methods.scrolling)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Beau+Rivage&display=swap');
.conainer-sb {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 80px;
  box-shadow: 0px 15px 10px -15px #fbcf3f33;
  padding-bottom: 150px;
  
}
.conainer-sb .title {
  color: white;
  font-family: 'Beau Rivage', cursive;
  margin: 50px 0;
  font-size: 3rem;
}
.title:before {
  content: "";
  position: absolute;
  width: 50px;
  height: 2px;
  bottom: 0;
  left: 0px;
  background-color: #FBCE3F;
}

.container-infos {
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  padding: 60px 0;
}
.foto img {
  width: 500px;
  border-radius: 50%;
}
.infos-sb {
  box-shadow: 1px 1px 8px #fbcf3f33;
  width: 700px;
  color: white;
  text-align: justify;
  font-family: 'Courier New', Courier, monospace;
  border-radius: 50px;
  padding: 50px;
  margin: 0px 0px 0px 60px;
}
.infos-sb h1 {
  color: #FBCE3F;
  font-size: 30px;
}
.infos-sb p {
  width: 500px;
  margin: 0 auto;
  font-size: 20px;
  padding-top: 40px;
}
</style>