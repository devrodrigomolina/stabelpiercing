<template>
  <div id="sobre" class="conainer-sb">
    <h1 data-anime="rigth">Um pouco mais sobre mim</h1>
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
  border-bottom: 2px solid #FBCE3F;
  padding-bottom: 150px;
}
.conainer-sb h1 {
  color: white;
  font-family: 'Beau Rivage', cursive;
  text-align: center;
  font-size: 3rem;
}
.container-infos {
  display: flex;
  max-width: 1300px;
  margin: 0 auto;
  padding: 60px 0;
}
.foto img {
  width: 500px;
}
.infos-sb {
  box-shadow: 1px 1px 8px #fbcf3f33;
  width: 700px;
  color: white;
  text-align: justify;
  font-family: 'Courier New', Courier, monospace;
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