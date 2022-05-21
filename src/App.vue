<template>
  <div id="app">
    <TheHeader/>
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
}
#app {
  width: 100vw;
  background: radial-gradient(circle, #0a0b10 20%, #000000 50%, rgb(0, 0, 0) 80%);
}

[data-anime] {
  opacity: 0;
  transition: all 3s;
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
</style>
