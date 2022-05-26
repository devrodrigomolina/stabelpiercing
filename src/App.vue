<template>
  <div id="app">
    <TheHeader/>
    <!--<router-view> </router-view>-->
    <Home/>
    <Sobre />
    <Trabalhos/>
    <Contato/>
    <Footer/>
  </div>
</template>

<script>
import Home from "@/views/Home.vue"
import Sobre from "@/views/Sobre.vue"
import Trabalhos from "@/views/Trabalhos.vue"
import Contato from "@/views/Contato.vue"
import Footer from "@/components/TheFooter.vue"

export default {
  name: 'App',
  components: {
    Home,
    Sobre,
    Trabalhos,
    Contato,
    Footer
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
  background: radial-gradient(circle, #0a0b10 20%, #000000 50%, rgb(0, 0, 0) 80%);
}
#app {
  width: 100vw;
  background-image: url("./assets/background4.png");
  background-repeat: repeat;
  background-size: 260px;
}

[data-anime] {
  opacity: 0;
  transition: all 3s;
}
[data-anime="top"] {
  transform: translateY(-50px);
}
[data-anime="left"] {
  transform: translate3d(50px, 0, 0);
}
[data-anime="rigth"] {
  transform: translate3d(-150px, 0, 0);
}
[data-anime].animate {
  opacity: 1;
  transform: translate3d(0 ,0 ,0);
}

/* RESPONSIVO */
@media screen and (max-width: 768px) {
  html {
    font-size: 50%;
  }
  #app {
    background-image: url("./assets/background3.png");
    background-repeat: repeat;
    background-size: 120px;
    overflow-x: hidden;
  }
}
</style>
