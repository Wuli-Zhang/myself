<template>
  <div id="app">
    <Header />
    <div class="web-body-container pattern-grid-md">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from './Header'
import Footer from './Footer'
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
.web-body-container {
  width: 100%;
}
</style>
