export default {
  data() {
    return {
      idimg: 0
    }
  },
  methods: {
    next() {
      this.idimg++
      this.idimg > itens.length -1 ? this.idimg  : ''
      itens.forEach((images) => {
        images.style.transform = `translateX(${-this.idimg * 500}px)`
      })
    },
    back() {
      this.idimg--
      itens.forEach((images) => {
        images.style.transform = `translateX(${this.idimg * -500}px)`
      })
    },
  }
}
