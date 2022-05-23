<template>
  <div class="footer">
    <div>
      <div class="credits">
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
  background: rgba(17, 17, 17, 0.192);
  display: flex;
  align-items: center;
  justify-content: center;
  
}
.credits {
  color: white;
  font-size: 1.1rem;
}

</style>