<template>
  <div id="home" class="container-sh">
    <transition 
      appear 
    >
      <div class="infos-sh" > <!--data-anime="rigth"-->
        <h1>Vitor Stabel <span>Piercing</span>.</h1>
        <p>Body Piercer Since 2015.</p>
      </div>
    </transition>
    <transition
      name="foto"
      appear
    >
      <div class="img-sh">
        <img src="@/assets/vitor.png" alt="">
      </div>
    </transition>
  </div>
</template>

<script>
import animateScroll from "@/helpers/animations.js"

export default {
  name: 'Home',
  mixins: animateScroll,

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Beau+Rivage&display=swap');

.container-sh {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
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
.infos-sh h1 span {
  color: #FBCE3F;
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

.img-sh img {
  width: 540px;
  height: 650px;
}

/* ANIMAÇOES */

.v-enter, .v-leave-to {
  opacity: 0;
  transform: translateX(-50px)
}
.v-enter-active,
.v-leave-active,
.foto-enter-active,
.foto-leave-active {
  transition: all 3s
}
.v-enter-to,
.v-leave,
.foto-enter-to,
.foto-leave {
  transform: translateX(0px);
  opacity: 1;
}

.foto-enter, .foto-leave-to {
  opacity: 0;
  transform: translateX(50px)
}

/* RESPONSIVO */

@media only screen and (max-width: 768px) {
 .container-sh {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    max-width: 100%;
    margin: 0;
    margin-top: 100px;
  }
 
 .infos-sh {
    width: 200px;
    position: relative;
  }
  .infos-sh h1 {
    width: 100%;
    font-size: 5rem;
    margin-left: 45px;
    position: relative;
  }
  .infos-sh p {
    width: 100%;
    font-size: 10px;
    left: 8px;
  }
  .infos-sh p::before {
    width: 15px;
    left: 33px;
    top: 5px;
  }
  .img-sh {
    width: 250px;
    height: 300px;

  }
  .img-sh img {
    width: 100%;
    height: 100%;
  }

}
</style>