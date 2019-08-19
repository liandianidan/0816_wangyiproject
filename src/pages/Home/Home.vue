<template>
  <div id="container">
    <div id="home-container">
        <!-- 首页上半部 -->
        <div id="top-contarner">
        <!-- 头部 -->
        <header id="header">
          <!-- 搜索框 -->
          <HeaderLogin></HeaderLogin>
          <Mack v-show="isshowMack" @click="showMack"/>
          <!-- 导航 -->
          <div id="nav" v-show="isShowNav">
            <div class="nav-left" >
              <ul class="nav-list">
                <li class="nav-item">
                  <span>推荐</span>
                </li>
                <li class="nav-item">
                  <span>家居生活</span>
                </li>
                <li class="nav-item">
                  <span>服饰鞋包</span>
                </li>
                <li class="nav-item">
                  <span>美食酒水</span>
                </li>
                <li class="nav-item">
                  <span>美食酒水</span>
                </li>
                <li class="nav-item">
                  <span>美食酒水</span>
                </li>
                <li class="nav-item">
                  <span>美食酒水</span>
                </li>
                <li class="nav-item">
                  <span>美食酒水</span>
                </li>
                <li class="nav-item">
                  <span>美食酒水</span>
                </li>
                <li class="nav-item">
                  <span>美食酒水</span>
                </li>
              </ul>
            </div>
            <div class="nav-more" @click="showHidden">
              <div class="nav-img"></div>
            </div>
          </div>
        </header>
        <!-- 轮播图 -->
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
        <!-- 商家服务 -->
        <div id="app-serve">
            <ul class="app-list">
                <li class="serve-item">
                <a href="#">
                    <span class="icon-1 icon"></span>
                    <span>网易自营品牌</span>
                </a>
                </li>
                <li class="serve-item">
                <a href="#">
                    <span class="icon-2 icon"></span>
                    <span>30天无忧退货</span>
                </a>
                </li>
                <li class="serve-item">
                <a href="#">
                    <span class="icon-3 icon"></span>
                    <span>24小时快速退款</span>
                </a>
                </li>
            </ul>
        </div>
        </div>
        <!-- 首页下半部 -->
        <div id="bottom-conterner">
        <!-- 商品展示 -->
        <div id="shop-show">
            <ul class="shop-list">
            <li class="shop-item">
                <a href="#" class="shop-a">
                <img src="https://yanxuan.nosdn.127.net/5243a7191dd4c86b3b28859089273aa8.gif" alt="">
                <span>新品首发</span>
                </a>
            </li>
            <li class="shop-item">
                <a href="#" class="shop-a">
                <img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                <span>家居生活</span>
                </a>
            </li>
            <li class="shop-item">
                <a href="#" class="shop-a">
                <img src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png" alt="">
                <span>服饰鞋包</span>
                </a>
            </li>
            <li class="shop-item">
                <a href="#" class="shop-a">
                <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="">
                <span>美食酒水</span>
                </a>
            </li>
            <li class="shop-item">
                <a href="#" class="shop-a">
                <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" alt="">
                <span>个护清洁</span>
                </a>
            </li>
            <li class="shop-item">
                <a href="#" class="shop-a">
                <img src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" alt="">
                <span>母婴亲子</span>
                </a>
            </li>
            <li class="shop-item">
                <a href="#" class="shop-a">
                <img src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png" alt="">
                <span>运动旅行</span>
                </a>
            </li>
            <li class="shop-item">
                <a href="#" class="shop-a">
                <img src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" alt="">
                <span>数码家电</span>
                </a>
            </li>
            <li class="shop-item">
                <a href="#" class="shop-a">
                <img src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png" alt="">
                <span>全球特色</span>
                </a>
            </li>
            <li class="shop-item">
                <a href="#" class="shop-a">
                <img src="https://yanxuan.nosdn.127.net/3954c3cbeb4359dd7007be7a076e0dda.gif" alt="">
                <span>超级会员</span>
                </a>
            </li>
            </ul>
        </div>
        <!-- 图片 -->
        <div class="shop-img">
            <a href="#">
            <img  src="https://yanxuan.nosdn.127.net/a55393ea2c010bd73f0666e2ffca8d55.gif" alt="">
            </a>
        </div>
        <!-- 好货列表 -->
        <div id="good-cargo">
            <div class="cargo-container">
            <div class="cargo-list">
                <div class="cargo-item">
                <div class="cargo-text">
                    <p>9.9超值专区首发</p>
                    <p>180款爆品新定价</p>
                </div>
                <div class="cargo-img">
                    <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png" alt="">
                    <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png" alt="">
                </div>
                </div>
                <div class="cargo-item">
                <div class="cargo-text">
                    <p>9.9超值专区首发</p>
                    <p>180款爆品新定价</p>
                </div>
                <div class="cargo-img">
                    <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png" alt="">
                    <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png" alt="">
                </div>
                </div>
                <div class="cargo-item">
                <div class="cargo-text">
                    <p>9.9超值专区首发</p>
                    <p>180款爆品新定价</p>
                </div>
                <div class="cargo-img">
                    <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png" alt="">
                    <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png" alt="">
                </div>
                </div>
                <div class="cargo-item">
                <div class="cargo-text">
                    <p>9.9超值专区首发</p>
                    <p>180款爆品新定价</p>
                </div>
                <div class="cargo-img">
                    <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png" alt="">
                    <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png" alt="">
                </div>
                </div>
            </div>
            </div>
        </div>
        <!-- 私人定制 -->
        <div id="custom-container">
          <div class="custom-text">
            <span>私人定制</span>
          </div>
          <!--轮播-->
          <div class="custom-shops">
            <div class="custom-shop">
              <div class="swiper-container2">
                <div class="swiper-wrapper">
                  <div class="swiper-slide shop-div">
                    <img  class="shop-img" src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" alt="">
                    <p class="shop-p" >
                      全净皓齿变速式声波电动牙...
                      <span>￥888</span>
                    </p>
                  </div>
                  <div class="swiper-slide shop-div">
                    <img  class="shop-img" src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" alt="">
                    <p class="shop-p" >
                      全净皓齿变速式声波电动牙...
                      <span>￥888</span>
                    </p>
                  </div>
                  <div class="swiper-slide shop-div">
                    <img  class="shop-img" src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" alt="">
                    <p class="shop-p" >
                      全净皓齿变速式声波电动牙...
                      <span>￥888</span>
                    </p>
                  </div>
                  <div class="swiper-slide shop-div">
                    <img  class="shop-img" src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" alt="">
                    <p class="shop-p" >
                      全净皓齿变速式声波电动牙...
                      <span>￥888</span>
                    </p>
                  </div>
                  <div class="swiper-slide shop-div">
                    <img  class="shop-img" src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" alt="">
                    <p class="shop-p" >
                      全净皓齿变速式声波电动牙...
                      <span>￥888</span>
                    </p>
                  </div>
                  <div class="swiper-slide shop-div">
                    <img  class="shop-img" src="https://yanxuan-item.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&quality=65&thumbnail=330x330" alt="">
                    <p class="shop-p" >
                      全净皓齿变速式声波电动牙...
                      <span>￥888</span>
                    </p>
                  </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>

                </div>
            </div>
          </div>

        </div>
        </div>

    </div>
  </div>

</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import BScroll from '@better-scroll/core'
import HeaderLogin from '../../components/Header/HeaderLogin.vue'
import Mack from '../../components/Mack/Mack.vue'
    export default {

    data(){
      return{
        isShowNav:true,
        isshowMack:false
      }
    },
    components:{
      HeaderLogin,
      Mack
    },
    mounted(){
        new Swiper ('.swiper-container', {
          loop: true// 循环模式选项

        })

        new Swiper('.swiper-container2',{
          slidesPerView : 3

        })
        new BScroll('.nav-left', {
              startX:0,
              click:true,
              scrollX:true,
              scrollY:false
          })
     },
    methods:{
      showHidden(){
        this.isShowNav=false
        this.isshowMack=true
      },
      showMack(){
        alert('sssssssss')
        this.isshowMack=false
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  htme,body
    width 100%
    height 100%
    overflow hidden
    overflow-y auto
    #container
      width 100%
      height 100%
      background-color #fff
      #home-container
        width 100%
        height 100%
        padding-top 100px
        padding-bottom 100px
        // 头部
        #header
          position fixed
          top 0
          left 0
          width 100%
          margin-bottom 20px
          background white
          z-index 999
          .header
            display flex
            height 88px
            width 100%
            padding 25px
            background-color #fff
            box-sizing border-box
            .header-text
              width 138px
              height 40px
              display inline-block
              margin-right  20px
              margin-top 5PX
              background-size 138px 40px
              background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
            .header-input
              width 442px
              height 56px
              background  #ededed
              display flex
              border-radius 5px
              justify-content: center
              align-items center
              vertical-align middle
             .icon
                width 28px
                height 28px
                margin-right  10px
                background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png);
                background-size 28px 28px
                color #666
              .header-search
                font-size 28px
                color #666
                vertical-align middle
            .header-btn
             width 74px
             height 40px
             font-size 20px
             border-radius 5px
             margin 10px 0 0 15px
             text-align center
             line-height 40px
             background white
             border 1px solid #b4282d
             color #b4282d


        // 导航
        #nav
          width 100%
          display  flex
          .nav-left
            width 80%
            height 60px
            overflow hidden
            .nav-list
              width 1000px
              height 100%
              display flex
              .nav-item
                flex-shrink 0 //禁止压缩
                height 60px
                margin 0 20px
                font-size 30px
                line-height 60px
                text-align center
          .nav-more
            display inline-block
            width 20%
            height 60px
            .nav-img
              display inline-block
              width 30px
              height 30px
              margin-left 60px
              background-size 30px 30px
              background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png)

        // 轮播图
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
        //商家承诺
        #app-serve
          width 100%
          height 72px
          .app-list
            width 100%
            height 72px
            display flex
            padding 0 20px
            box-sizing border-box
            justify-content space-around
            align-items center
            .serve-item
              width 456px
              height 72px
              display flex
              padding 0 10rpx
              justify-content flex-start
              align-items center
              .icon
                display inline-block
                width 32px
                height 32px
                background-size 32px
                vertical-align middle
              .icon-1
                background-image url(https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png)
              .icon-2
                background-image url(https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png)
              .icon-3
                background-image url(https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png)
              span
                font-size 20px
                color #333
                vertical-align middle
        // 商品展示
        #shop-show
          width 100%
          height 380px
          margin-bottom 20px
          .shop-list
            width 100%
            height 100%
            display flex
            justify-content space-around
            flex-wrap wrap
            .shop-item
              width 110px
              height 156px
              margin 15px
              .shop-a
                display inline-block
                width 110px
                height 110px
                img
                  width 110px
                  height 110px
                span
                  font-size 20px
                  color #333
                  text-align center
        .shop-img
          img
            width 100%
            height 127px
        // 好货展示
        #good-cargo
          width 100%
          height 580px
          margin-bottom 20px
          .cargo-container
            width 100%
            height 580px
            background-color #fff
            padding 10px 10px 0 10px
            .cargo-list
              width 100%
              /*padding 5px 10px 5px 10px*/
              box-sizing border-box
              display flex
              flex-wrap wrap
              justify-content center
              .cargo-item
                width 343px
                height 264px
                display inline-block
                box-sizing border-box
                background-color #F5F5F5

                &:nth-child(2n+1)
                  margin-bottom 5px
                &:nth-child(2n)
                  margin-left 5px
                .cargo-text
                  display flex
                  font-size 30px
                  flex-direction column
                  p
                    margin 10px 0 0 10px
                  :nth-child(2)
                    font-size 20px
                    color #7f7f7f

                .cargo-img
                  display flex
                  img
                    width 150px
                    height 150px

        // 私人定制
        #custom-container
          width 100%
          height 470px
          background-color #fff
          .custom-text
            width 100%
            height 100px
            font-size 34px
            color #333
            line-height 100px
            padding 0 20px
          .custom-shops
            width 100%
            height 370px
            .custom-shop
              width 100%
              height 370px
              .shop-div
                display flex
                flex-direction column
                .shop-img
                  width 216px
                  height 216px
                  margin 0 auto
                .shop-p
                  font-size 25px
                  text-align center
                  span
                    color red





</style>

