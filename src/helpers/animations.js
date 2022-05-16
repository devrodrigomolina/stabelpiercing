export default {
  methods: {
    scrolling() {
      const target = document.querySelectorAll('[data-anime]');
      const windowTop = window.pageYOffset;
      const animationClass = 'animate'

      target.forEach((element) => {
        windowTop > element.offsetTop - 700 ? element.classList.add(animationClass) : element.classList.remove(animationClass)
      })
    }
  },
}