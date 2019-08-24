<template>
  <div>
    <div id="casegoods-header">
      <div class="casegoods-header-content">
        <Header>
          <div class="casegoods-text" slot="casegoods">
           <span class="casegoods-span2">
              <router-link to="/casegoods">发现</router-link>
           </span>
            <span class="casegoods-span2 active">甄选家</span>
          </div>
        </Header>

      </div>

    </div>
    <div id="casegoods-banner">
      <div class="swiper-container">
        <div class="swiper-wrapper banner-list">
          <div class="swiper-slide banner-item" >
            <div class="banner-img">
              <img src="https://yanxuan.nosdn.127.net/ef59ccf1b8c6cd7be7c5a206140c3f86.jpg?imageView&quality=75&thumbnail=670x371" alt="">
            </div>
          </div>
          <div class="swiper-slide banner-item" >
            <div class="banner-img">
              <img src="https://yanxuan.nosdn.127.net/ef59ccf1b8c6cd7be7c5a206140c3f86.jpg?imageView&quality=75&thumbnail=670x371" alt="">
            </div>
          </div>
          <div class="swiper-slide banner-item" >
            <div class="banner-img">
              <img src="https://yanxuan.nosdn.127.net/ef59ccf1b8c6cd7be7c5a206140c3f86.jpg?imageView&quality=75&thumbnail=670x371" alt="">
            </div>
          </div>
          <div class="swiper-slide banner-item" >
            <div class="banner-img">
              <img src="https://yanxuan.nosdn.127.net/ef59ccf1b8c6cd7be7c5a206140c3f86.jpg?imageView&quality=75&thumbnail=670x371" alt="">
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '../../components/Header/Header.vue'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    components:{
      Header,


    },
    mounted(){
      new Swiper(".swiper-container",{
        slidesPerView : 1,
        loop: true, // 循环模式选项
        pagination: { //小圆点
          el: '.swiper-pagination',
        },
        autoplay:true //自动轮播
      })
      this.$store.dispatch('gethomelunbo')
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #casegoods-header
    width 100%
    height 88px
    background-color #FAFAFA
    border-bottom 1px solid #eee
    .casegoods-header-content
      width 100%
      height 100%
      display flex
      align-items center
      padding 0 40px
      box-sizing border-box
      justify-content space-between
      .casegoods-home
        float left
      .icon-shouye
        font-size 40px
      .casegoods-text
        width 320px
        height 100%
        text-align center
        line-height 88px
        margin-left 45PX
        span:nth-child(1)
          margin-right 10px
        span
          font-size 30px
          font-weight bold
          color #7F7F7F
          &.active
            color #b4282d
            font-size 40px
      .icon-casegoods
        .iconfont
          font-size 50px
        .icon-gouwuche
          margin-left 40px
  #casegoods-banner
    width 100%
    height 422px
    padding 30px 0
    box-sizing border-box
    background-color pink
    .swiper-container
      .banner-list
        width 100%
        height 100%
        .swiper-slide
          width 670px
          height 372px
          padding 0 20px
          border-radius 10px
          box-sizing border-box
          .banner-img
            width 100%
            height 100%
            overflow hidden
            img
              width 100%
              height 100%

</style>
