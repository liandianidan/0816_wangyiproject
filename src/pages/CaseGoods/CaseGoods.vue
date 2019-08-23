<template>
  <div id="app">
    <div id="casegoods-container">
      <div id="casegoods-flixe">
        <!--头部-->
        <div id="casegoods-header">
          <div class="casegoods-header-content">
            <Header>
              <div class="casegoods-text" slot="casegoods">
                <span class="casegoods-span1 active">发现</span>
                <span class="casegoods-span2">
                <router-link to="/teueselecthome">甄选家</router-link>
                </span>
              </div>
            </Header>

          </div>

        </div>

        <!--导航-->
        <div id="casegoods-nav">
          <div class="nav">
            <ul class="casegoods-list">
              <li class="casegoods-item" v-for="(item,index) in goodslist" :key="index" :class="{active:goodIndex === index}" @click="goodsClick(index)">
                <span>{{item.tabName}}</span>
              </li>
            </ul>
          </div>
        </div>
        <!--第二个头部-->
        <HeaderLogin>
          <slot name="login"></slot>>
        </HeaderLogin>
      </div>
      <div id="casegoods-content">
        <div>
          <div class="casegoods-img-shiwu">
            <img src="https://yanxuan.nosdn.127.net/15639572098632760.jpeg" alt="">
          </div>
          <div class="casegoods-img-1">
            <div class="casegoods-img-xiao">
              <img src="https://yanxuan.nosdn.127.net/15656868015315337.jpg?_width=750&_height=344alt=">
            </div>

          </div>
          <div class="casegoods-img-yuangong">
            <img src="https://yanxuan.nosdn.127.net/15656886328485352.jpeg" alt="">
          </div>
          <!--轮播-->
          <div>
            <!--轮播图-->
            <div class="casegoods-img-lunbo">
              <div class="casegoods-img-bannt">
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img src="https://mimg.127.net/hz/uploader/20190802/15647346338570519.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                      <img src="https://mimg.127.net/hz/uploader/20190806/15650581284712201.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                      <img src="https://yanxuan.nosdn.127.net/15640224029953333.jpg">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--下面导航栏-->
            <div class="casegoods-img-list">
              <ul class="casegoods-img-ul">
                <li class="casegoods-img-li">
                  <img src="https://yanxuan.nosdn.127.net/8f3c48c48e5944d8f1a37273281201be.png?quality=95&thumbnail=130x130&imageView"
                       alt="">
                </li>
                <li class="casegoods-img-li">
                  <img src="https://yanxuan.nosdn.127.net/8f3c48c48e5944d8f1a37273281201be.png?quality=95&thumbnail=130x130&imageView"
                       alt="">
                </li>
                <li class="casegoods-img-li">
                  <img src="https://yanxuan.nosdn.127.net/8f3c48c48e5944d8f1a37273281201be.png?quality=95&thumbnail=130x130&imageView"
                       alt="">
                </li>
                <li class="casegoods-img-li">
                  <img src="https://yanxuan.nosdn.127.net/8f3c48c48e5944d8f1a37273281201be.png?quality=95&thumbnail=130x130&imageView"
                       alt="">
                </li>
                <li class="casegoods-img-li">
                  <img src="https://yanxuan.nosdn.127.net/8f3c48c48e5944d8f1a37273281201be.png?quality=95&thumbnail=130x130&imageView"
                       alt="">
                </li>
                <li class="casegoods-img-li">
                  <img src="https://yanxuan.nosdn.127.net/8f3c48c48e5944d8f1a37273281201be.png?quality=95&thumbnail=130x130&imageView"
                       alt="">
                </li>
                <li class="casegoods-img-li">
                  <img src="https://yanxuan.nosdn.127.net/8f3c48c48e5944d8f1a37273281201be.png?quality=95&thumbnail=130x130&imageView"
                       alt="">
                </li>
                <li class="casegoods-img-li">
                  <img src="https://yanxuan.nosdn.127.net/8f3c48c48e5944d8f1a37273281201be.png?quality=95&thumbnail=130x130&imageView"
                       alt="">
                </li>
                <li class="casegoods-img-li">
                  <img src="https://yanxuan.nosdn.127.net/8f3c48c48e5944d8f1a37273281201be.png?quality=95&thumbnail=130x130&imageView"
                       alt="">
                </li>
                <li class="casegoods-img-li">
                  <img src="https://yanxuan.nosdn.127.net/8f3c48c48e5944d8f1a37273281201be.png?quality=95&thumbnail=130x130&imageView"
                       alt="">
                </li>
                <li class="casegoods-img-li">
                  <img src="https://yanxuan.nosdn.127.net/8f3c48c48e5944d8f1a37273281201be.png?quality=95&thumbnail=130x130&imageView"
                       alt="">
                </li>
                <li class="casegoods-img-li">
                  <img src="https://yanxuan.nosdn.127.net/8f3c48c48e5944d8f1a37273281201be.png?quality=95&thumbnail=130x130&imageView"
                       alt="">
                </li>
                <li class="casegoods-img-li">
                  <img src="https://yanxuan.nosdn.127.net/8f3c48c48e5944d8f1a37273281201be.png?quality=95&thumbnail=130x130&imageView"
                       alt="">
                </li>
                <li class="casegoods-img-li">
                  <img src="https://yanxuan.nosdn.127.net/8f3c48c48e5944d8f1a37273281201be.png?quality=95&thumbnail=130x130&imageView"
                       alt="">
                </li>
                <li class="casegoods-img-li">
                  <img src="https://yanxuan.nosdn.127.net/8f3c48c48e5944d8f1a37273281201be.png?quality=95&thumbnail=130x130&imageView"
                       alt="">
                </li>
                <li class="casegoods-img-li">
                  <img src="https://yanxuan.nosdn.127.net/8f3c48c48e5944d8f1a37273281201be.png?quality=95&thumbnail=130x130&imageView"
                       alt="">
                </li>
                <li class="casegoods-img-li">
                  <img src="https://yanxuan.nosdn.127.net/8f3c48c48e5944d8f1a37273281201be.png?quality=95&thumbnail=130x130&imageView"
                       alt="">
                </li>
                <li class="casegoods-img-li">
                  <img src="https://yanxuan.nosdn.127.net/8f3c48c48e5944d8f1a37273281201be.png?quality=95&thumbnail=130x130&imageView"
                       alt="">
                </li>
                <li class="casegoods-img-li">
                  <img src="https://yanxuan.nosdn.127.net/8f3c48c48e5944d8f1a37273281201be.png?quality=95&thumbnail=130x130&imageView"
                       alt="">
                </li>
                <li class="casegoods-img-li">
                  <img src="https://yanxuan.nosdn.127.net/8f3c48c48e5944d8f1a37273281201be.png?quality=95&thumbnail=130x130&imageView"
                       alt="">
                </li>

              </ul>
            </div>
          </div>
        </div>
          <div class="casegoods-img-yuangong">
            <img src="https://yanxuan.nosdn.127.net/15645393458728772.jpeg" alt="">
          </div>
        <div class="casegoods-shops">
          <div class="casegoods-shops-img">
            <img src="https://yanxuan.nosdn.127.net/15640407915873725.png" alt="">
          </div>
          <div class="casegoods-shops-list">
            <div class="casegoods-shops-images">
              <img src="https://yanxuan-item.nosdn.127.net/622f2bd775e32536b0085013b9198ae2.png?imageView&thumbnail=200x200&quality=95" alt="">
              <div class="casegoods-shops-text">
                <p>男/女 舒弹按摩家居拖鞋</p>
                <p>新人专享价</p>
                <p>￥16</p>
                <p>立即抢购</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from '@better-scroll/core'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import Header from '../../components/Header/Header.vue'
  import HeaderLogin from '../../components/Header/HeaderLogin'
  export default {
    data(){
      return{
        goodIndex:0,

      }
    },
    components:{
      HeaderLogin,
      Header
    },
    mounted(){
      new BScroll('.nav', {
        startX:0,
        click:true,
        scrollX:true,
        scrollY:false
      })
      new Swiper('.swiper-wrapper',{
        effect : 'fade',
        autoplay:true
      })
      this.$store.dispatch('getGoodList')
    },
    computed:{
      goodslist(){
        return this.$store.state.caseGoods.navLists
      }
    },
    methods:{
      goodsClick(index){
        this.goodIndex=index
      },

    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background-color #f5f5f5
    #casegoods-container
      padding-top 140PX
      #casegoods-flixe
        position fixed
        top 0
        left 0
        width 100%
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
        #casegoods-nav
          width 100%
          height 72px
          background #FAFAFA
          padding-bottom 10px
          .nav
            width 100%
            height 72px
            .casegoods-list
              height 100%
              width 1200px
              padding-bottom 10px
              /*display flex*/
              display inline-block
              border-bottom 2px solid #eee
              box-sizing border-box
              white-space nowrap
              .casegoods-item
                font-size 30px
                margin 0 25px
                /*margin 0 15px*/
                /*display flex*/
                /*justify-content center*/
                /*align-items center*/
                display inline-block
                flex-shrink 0
                &.active
                  border-bottom 2px solid #B4282D
                  color #B4282D
      #casegoods-content
        width 100%
        .casegoods-img-shiwu
          width 716px
          height 230px
          padding 0 20px
          img
            width 100%
            height 100%
        .casegoods-img-1
          width 100%
          height 300px
          padding 0 20px
          .casegoods-img-xiao
            width 716px
            height 328px
            border-radius 10px
            img
              width 100%
              height 100%
        .casegoods-img-yuangong
          width 716px
          height 162px
          padding 0 20px
          img
            height 100%
            width 100%
        .casegoods-img-lunbo
          width 100%
          height 430px
          padding 0 20px
          margin 0 0 10px 0
          box-sizing border-box
          .casegoods-img-bannt
            width 100%
            height 100%
            border-radius 10px
            img
              width 696px
              height 430px
        .casegoods-img-list
          width 696px
          height 148px
          padding 10px
          .casegoods-img-ul
            height 100%
            display flex
            .casegoods-img-li
              width 120px
              height 120px
              margin 0 20px
              display flex
              flex-shrink 0
              img
                width 100%
                height 100%
        .casegoods-shops
          width 716px
          height 568px
          background pink
          .casegoods-shops-img
            width 706px
            height 168px
            img
              width 100%
              height 100%
</style>
