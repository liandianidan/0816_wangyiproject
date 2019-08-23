<template>
  <div id="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/fca5a6400454717c5b7d6c393071b307.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/eda2f4fc108b2c1be7dd4eafe26b2daa.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'

  export default {
    mounted () {
      new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        pagination: { //小圆点
          el: '.swiper-pagination',
        },
        autoplay:true //自动轮播

      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #banner
    width 100%
    height 370px
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
      .swiper-slide
        img
          width 100%
          height 370px
</style>
