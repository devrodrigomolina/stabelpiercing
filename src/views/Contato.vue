<template>
  <div class="contaier">
    <h1 class="title" data-anime="rigth">Contatos</h1>
    <iframe data-anime="rigth" class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1295.4634265491713!2d-51.15721706888937!3d-23.311263179517688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb449fd882faff%3A0xcf56b7ec58c268a9!2sRoyal%20Plaza%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1653007109075!5m2!1spt-BR!2sbr" width="600"    height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
  margin: 50px 0;
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

.map {
  width: 100%;
  height: 400px;
}
</style>