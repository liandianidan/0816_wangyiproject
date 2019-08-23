<!--私人定制的轮播图-->
<template>
  <div id="custom-container">
    <div class="custom-text">
      <span>私人定制</span>
    </div>
    <!--轮播-->
    <div class="swiper-container custom-a" ref="aaa">
      <div class="swiper-wrapper custom-b" v-for="(p,index) in privateArr" :key="index">
        <div class="swiper-slide shop-div" v-for="(item,index) in p" :key="index">
          <img  class="shop-img" :src="item.primaryPicUrl" alt="">
          <p class="shop-p" >
            <span>{{item.name}}</span>
            <span>￥{{item.retailPrice}}</span>
          </p>
        </div>

      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

    </div>


  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
export default {
    props:['privateArr'],
    watch:{
      privateArr(){
        this.$nextTick(()=>{
          new Swiper(".custom-a",{
            slidesPerView : 3,
            loop: true, // 循环模式选项
            pagination: { //小圆点
              el: '.swiper-pagination',
            },
            autoplay:true //自动轮播
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #custom-container
    width 100%
    height 470px
    background-color #eee
    .custom-text
      width 100%
      height 100px
      font-size 34px
      color #333
      line-height 100px
      padding 0 20px

    .custom-a
      width 100%
      height 78%
      display flex
      .custom-b
        display flex
        width 100%
        height 100%
        box-sizing border-box
        .shop-div
          display inline-block
          /*margin-left 30px*/
          width 216px
          height 300px
          .shop-img
            width 216px
            height 216px
          .shop-p
            width 216px
            height 27px
            padding 0 10px
            box-sizing border-box
            font-size 20px
            span:nth-child(2)
              color #b4282d





</style>
