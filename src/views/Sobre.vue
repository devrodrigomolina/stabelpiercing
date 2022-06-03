<template>
  <div id="sobre" class="conainer-sb">
    <h1 class="title" data-anime="rigth">Um pouco mais sobre mim</h1>
    <div class="container-infos">
      <div class="foto" data-anime="top">
        <img src="@/assets/vitorpiercing.png" alt="">
      </div>
      <div  class="infos-sb" data-anime="left">
        <h1>Olá, Me chamo Vitor Henrique Stabel</h1>
        <p>Mais conhecido como <span>Vitor Stabel</span> ou <span>Stabel piercer</span>. 
        Sou profissional atuante na área como perfurador corporais/body piercer a <span>7(sete) anos</span> na cidade de Londrina-PR.</p>
        <p>No decorrer do caminho, trabalhei, evolui, aprendi e enfrentei dificuldades, mas essas dificuldades foram o que me fizeram amar e admirar ainda mais meu campo de atuação.</p>
        <p>Assim como disse, sempre busco evoluir meus conhecimentos e aprender mais todos os dias para que possa entregar o melhor resultado para meus clientes. 
        Atualmente trabalho com jóias em aço cirúrgico e em titânio e jóias trabalhadas sob encomenda.</p>
        <p>E aí, bora agendar sua perfuração ou troca de jóia!? Aguardo seu contato!</p>
   
        <!--Atendo no endereço da Rua Sérgipe 829, Edifício Baldan, sala 12 de segunda a sábado com hora marcada. 

        E aí, bora agendar sua perfuração ou troca de jóia!? Aguardo seu contato! -->
        <div class="btn">
          <a target="_blank" class="contato" href="https://wa.me/5543991278151">Contato</a>
        </div>
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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
  text-align: center;
  margin: 50px 0;
  font-size: 3rem;
  position: relative;
}
.title:before {
  content: "";
  position: absolute;
  width: 100px;
  height: 2px;
  bottom: 0;
  left: 46%;
  background-color: #FBCE3F;
}

.container-infos {
  display: flex;
  width: 100%;
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
  width: 100%;
  max-width: 700px;
  color: white;
  text-align: justify;
  font-family: 'Courier New', Courier, monospace;
  border-radius: 50px;
  padding: 50px;
  margin: 0px 0px 0px 60px;
}
.infos-sb h1 {
  color: #FBCE3F;
  font-size: 28px;
  text-align: center;
  margin-bottom: 30px;
}
.infos-sb p {
  width: 500px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  padding-top: 13px;
  text-align: justify;
}
.infos-sb p span {
  color:#FBCE3F;
}
.btn {
  padding-top: 55px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
}
.contato {
  padding: 13px 60px;
  text-align: center;
  color: white;
  background: #b89217;
  text-decoration: none;
  border-radius: 10px;
  transition: all .3s;
}
.contato:hover {
  background: #ebc64e;
}

/* ############  RESPONSIVO  #############*/

@media screen and (max-width: 768px) {
  .conainer-sb {
    width: 100%;
    padding-top: 40px;
    padding-bottom: 0px;
  }
  .container-infos {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 10px 0;
  }
  .foto img {
    width: 180px;
    margin-left: 0px;
    border-radius: 0%;
  }
  .infos-sb {
    width: 80%;
    line-height: 1.6;
    padding: 20px;
    margin: 0px;
  }
  .infos-sb p {
    width: 100%;
    font-size: 13px;
    padding-top: 10px;
  }
  .infos-sb h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 5px;
  }
  .btn {
    padding-top: 20px;
  }
}


</style>