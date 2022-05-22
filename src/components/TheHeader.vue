<template>
  <div class="container-header">
    <div class="header">
    <a href="#home">Home</a>
    <a href="#sobre">Sobre</a>
    <div class="logo">
      <img src="@/assets/logo-dourada2.png" alt="">
    </div>
    <a href="#trabalhos">Trabalhos</a>
    <a href="#contato">Contato</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.container-header {
  width: 100vw;
  max-width: 1200px;
  height: 100px;
  position: relative;
  margin: 0 auto;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  z-index: 1000;
  width: 1200px;
  height: 100px;
  font-family: 'Poppins', sans-serif;
  color: white; 
  font-size: 18px;
}
a {
  color: white;
  position: relative;
  text-decoration: none;
}
a:hover {
  color: #FBCE3F;
}

a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

a:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
.logo img {
  padding-top: 10px;
  width: 50px;
  transition: all .3s;
}
.logo img:hover {
  transform: scale(1.1);
}
</style>