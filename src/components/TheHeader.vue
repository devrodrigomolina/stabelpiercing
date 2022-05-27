<template>
  <div class="container-header">
    <div class="container-hamburguer">
      <input 
        type="checkbox"
        id="btn-mobile"
        class="btn-mobile"
        v-model="checked"
        @click="menu"
      >
      <label for="btn-mobile">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>

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
  name: 'TheHeader',
  data() {
    return {
      checked: false
    }
  },
  methods: {
    menu() {
      let el = document.querySelector('.header');
      let links = document.querySelectorAll('.header a');

      !this.checked ? el.classList.add('active') : el.classList.remove('active');
      links.forEach((element) => {
        element.addEventListener('click', () => {
          el.classList.remove('active');
          this.checked = false

        })
      });    
    }
  },

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
.btn-mobile {
  display: none;
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

/* RESPONSIVO */

@media only screen and (max-width: 768px) {
  .header {
    width: 100%;
    height: 100vh;
    flex-direction: column;
    top: -900px;
    left: 0;
    transition: all .3s;
    background: rgba(255, 0, 0, 0.452);
  }
  .header.active {
    top: 0;
  }
  .container-hamburguer {
    display: flex;
    justify-content: flex-end;
    width: 100vw;
    height: 60px;
    position: fixed;
    z-index: 9999;
  }
  .btn-mobile {
    position: absolute;
    opacity: 0;
  }
  label {
    cursor: pointer;
    position: relative;
    left: -15px;
    top: 15px;
    display: block;
    height: 22px;
    width: 30px;
  }
  label span {
    position: absolute;
    display: block;
    height: 4px;
    width: 100%;
    z-index: 99999;
    border-radius: 30px;
    background: white;
    transition: all .3s;
  }
  label span:nth-child(1) {
    top: 0;
  }
  label span:nth-child(2) {
    top: 10px;
  }
  label span:nth-child(3) {
    top: 20px;
  }
  .btn-mobile:checked + label span:nth-child(1) {
    transform: rotate(-45deg);
    top: 10px;
  }
  .btn-mobile:checked + label span:nth-child(2) {
    opacity: 0;
  }
  .btn-mobile:checked + label span:nth-child(3) {
    transform: rotate(45deg);
    top: 10px;
  }
}
</style>