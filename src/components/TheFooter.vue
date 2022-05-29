<template>
  <div class="footer">
    <div>
      <div class="credits">
        <p class="copyright">&#169; 2022 Vitor Stabel.</p>
        <p>Desenvolvido por Rodrigo Molina</p>
      </div>
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
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.credits {
  color: white;
  font-size: 0.8rem;
  text-align: center;
}
</style>