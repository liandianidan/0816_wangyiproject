<template>

  <div id="app">
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'app',
  components: {
    Footer,

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    width 100%
    height 100%
    background-color #F2F5F4
    #app
      width 100%
      height 100%
</style>
