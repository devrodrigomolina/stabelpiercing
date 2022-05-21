<template>
  <div class="footer">
    <div class="credits">
      <p>Desenvolvido por Rodrigo Molina</p>
    </div>
    <div class="sociais">
     <font-awesome-icon icon="fa-brands fa-instagram" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style>
.footer {
  width: 100vw;
  height: 300px;
  background: rgba(88, 88, 88, 0.336);
}
.credits {
  color: white;
  font-size: 1.2rem;
}
.sociais {
  width: 300px;
  height: 300px;
}
</style>