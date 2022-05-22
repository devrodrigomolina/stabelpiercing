<template>
  <div class="container">
    <VueSlickCarousel 
      :slidesToShow="4"
      :arrows="true"
      :autoplay="true"
      :autoplaySpeed="2000"
      >
      <div class="imagens" v-for="img in images" :key="img">
        <img :src="img" alt="">
      </div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    data() {
      return {
        images: [
          require('@/assets/trabalhos/1.jpg'),
          require('@/assets/trabalhos/2.jpg'),
          require('@/assets/trabalhos/3.jpeg'),
          require('@/assets/trabalhos/4.jpeg'),
          require('@/assets/trabalhos/5.jpeg'),
          require('@/assets/trabalhos/7.jpeg'),
          require('@/assets/trabalhos/6.jpeg'),
          require('@/assets/trabalhos/8.jpeg'),
          require('@/assets/trabalhos/10.jpeg'),
          require('@/assets/trabalhos/9.jpeg'),
          require('@/assets/trabalhos/11.jpeg'),
          require('@/assets/trabalhos/12.jpeg'),
          require('@/assets/trabalhos/13.jpeg'),
          require('@/assets/trabalhos/14.jpeg'),
          require('@/assets/trabalhos/15.jpeg'),
          require('@/assets/trabalhos/16.jpeg'),
          require('@/assets/trabalhos/17.jpeg'),
        ]
      }
    }
  }
</script> 
<style scoped>
.container {
  padding-bottom: 150px;
  box-shadow: 0px 15px 10px -15px #fbcf3f33;
}
.imagens img {
  width: 300px;
  height: 500px;
  border-radius: 10px;
}

</style>