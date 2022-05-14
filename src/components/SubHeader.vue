<template>
  <div class="container-sh">
    <div class="infos-sh">
      <h1>Vitor Stabel piercing</h1>
    </div>
    <div class="img-sh">
      <img src="@/assets/vitorlado2.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubHeader'
}
</script>

<style>
.container-sh {
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 700px;

}
.infos-sh {
  display: flex;
  align-items: center;
  font-size: 2rem;
}
.infos-sh h1 {
  color: white;
  
}
.img-sh img {
  height: 700px;
}
</style>