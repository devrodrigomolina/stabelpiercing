<template>
  <div id="contato" class="contaier">
    <h1 class="title" data-anime="rigth">Contatos</h1>
    <div class="sociais">
      <div data-anime="top" class="text">
        <p>Fique a vontade para entrar em contato comigo, será um prazer atende-lo</p>
      </div>
      <div data-anime="top" class="logo-sociais">
        <span>
          <a href="https://wa.me/5543991278151"><img src="@/assets/sociais/whatsapp.png" alt=""></a>
        </span>
        <span>
          <a href="https://www.instagram.com/stabelpiercer/"><img src="@/assets/sociais/instagram.png" alt=""></a>
        </span>
        <span>
          <a href="https://www.facebook.com/stabelpiercer"><img src="@/assets/sociais/facebook.png" alt=""></a>
        </span>

      </div>
    </div>
    <div class="map">
      <p data-anime="top">Rua: Sergipe, 829 - Sala 12 - Centro, Londrina - PR, 86010-380</p>
      <iframe data-anime="top" class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d770.2949173870337!2d-51.16094469249895!3d-23.309924411170908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb44a054295555%3A0x208034269cae8cb2!2sR.%20Sergipe%2C%20829%20-%20Sala%2012%20-%20Centro%2C%20Londrina%20-%20PR%2C%2086010-380!5e0!3m2!1spt-BR!2sbr!4v1653787783348!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contato'
}
</script>

<style scoped>

.contaier {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.title {
  color: white;
  font-family: 'Beau Rivage', cursive;
  text-align: center;
  margin: 123px 0 40px 0;
  font-size: 3rem;
}
.title:before {
  content: "";
  position: absolute;
  width: 50px;
  height: 2px;
  bottom: 0;
  left: 40px;
  background-color: #FBCE3F;
}
.sociais {
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  margin-bottom: 60px;
}
.sociais img{
  width: 70px;
  margin-left: 20px;
  transition: all .3s;
}
.sociais img:hover {
  transform: scale(1.1);
}
.text p {
  margin: 50px 0 50px 0;
  font-size: 1.5rem;
}
.map {
  width: 100%;
  max-width: 1300px;
  border-radius: 10px;
  height: 420px;
  margin-top: 8px;
}
.map p {
  color: white;
  text-align: center;
}
/* RESPONSIVO */
@media screen and (max-width: 768px) {
  .text p {
    width: 200px;
    text-align: center;
    font-size: 1.3rem;
  }
  .map {
    border-radius: 0px;
  }
}

</style>