<template>
  <div id="container">
    <div id="home-container">
        <!-- 首页上半部 -->
        <div id="top-contarner">
        <!-- 头部 -->
        <header id="header">
          <!-- 搜索框 -->
          <HeaderLogin></HeaderLogin>
          <!-- 导航 -->
          <div id="nav" >
            <div class="nav-left" v-show="isShowNav">
              <ul class="nav-list">
                <li class="nav-item" v-for="(item, index) in ShowNavs"
                    :key="index"
                    @click="changeColor(index)" :class="{active:classIndex === index }">
                  <span>{{item}}</span>
                </li>
              </ul>
            </div>
            <div class="mack" v-show="isshowMack" @click="showHidden">
              <div class="mack-whole">
                <div class="mack-text">全部频道</div>
              </div>
              <div class="mack-all">
                <ul class="mack-ul">
                  <li class="mack-li" v-for="(item,index) in ShowNavs " :key="index" :class="{active:classIndex === index }">{{item}}</li>
                </ul>
              </div>
              <div class="mack"></div>
            </div>
            <div class="nav-more" @click="showHidden" >
              <div class="nav-img" >
                <i class="iconfont icon-xiangxia1" :class="{isRotate:isShowNav}"></i>
              </div>
            </div>

          </div>
        </header>
        <!-- 轮播图 -->
        <Banner></Banner>
        <!-- 商家服务 -->
        <div id="app-serve">
            <ul class="app-list">
                <li class="serve-item" v-for="(item,index) in policyDescList" :key="index">
                  <a href="#">
                    <img :src="item.icon" alt="">
                    <span>{{item.desc}}</span>
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
              <li class="shop-item" v-for="(item,index) in kingKongModule" :key="index">
                  <a href="#" class="shop-a">
                  <img :src="item.picUrl" alt="">
                  <span>{{item.text}}</span>
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
                  <div class="cargo-item" v-for="(item,index) in goodShops" :key="index">
                    <div class="cargo-text">
                        <p>{{item.styleItem.title}}</p>
                        <p>{{item.styleItem.desc}}</p>
                    </div>
                    <div class="cargo-img">
                        <img :src="item.styleItem.picUrlList[0]" alt="">
                        <img :src="item.styleItem.picUrlList[1]" alt="">
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <!-- 私人定制 -->
        <BannerB :privateArr="privateArr"></BannerB>

        </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
// import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import BScroll from '@better-scroll/core'

import HeaderLogin from '../../components/Header/HeaderLogin.vue'
import Banner from '../../components/Banner/Banner.vue'
import BannerB from '../../components/BannerB/BannerB.vue'


    export default {

      data(){
        return{
          isShowNav:true, //导航隐藏和显示
          isshowMack:false,//遮罩隐藏和显示
          ShowNavs:["推荐","家居生活","服饰鞋包","美食酒水","个人清洁","母婴用品","运动旅行","数码家电","全球特色"],
          classIndex:0 ,//点击变色

        }
      },


      components:{
        HeaderLogin,
        Banner,
        BannerB
      },
      computed: {
        policyDescList () {
          return this.$store.state.home.policyDescList
        },
        kingKongModule () {
          return this.$store.state.home.kingKongModule.kingKongList
        },
        goodShops () {
          return this.$store.state.home.goodShops
        },
        private () {
          return this.$store.state.home.private
        },
        privateArr () {
          let smallArr = []
          const bigArr=[]

          for (let i  = 0; i < this.private.length; i++) {
            if(smallArr.length===0){
              bigArr.push(smallArr)
            }
            smallArr.push(this.private[i])
            if(smallArr.length===3){
              smallArr=[]
            }
          }
          return bigArr
        }

      },
      mounted(){
       this.$store.dispatch('getPolicyDesc')
        new BScroll('.nav-left', {
          startX:0,
          click:true,
          scrollX:true,
          scrollY:false
        })
       },
      methods:{
        showHidden(){
          this.isShowNav=!this.isShowNav
          this.isshowMack=!this.isshowMack
        },
        changeColor(index){
          this.classIndex=index
        }
      },

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
        padding-top 150px
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
          background-color #fff
          .nav-left
            width 100%
            height 60px
            overflow hidden
            .nav-list
              height 100%
              display inline-block
              white-space nowrap
              .nav-item
                height 60px
                margin 0 22px
                font-size 30px
                line-height 60px
                text-align center
                display inline-block
                &.active
                  border-bottom 1px solid #b4282d
                  color #b4282d
          .nav-more
            display inline-block
            width 158px
            height 60px
            background-color #fff
            margin-left -158px
            padding-left 80px
            box-sizing border-box
            .nav-img
              display inline-block
              width 100%
              height 100%
              /*margin-left 20PX*/
              box-sizing border-box
              .iconfont
                font-size  30px 30px
                display inline-block
                &.isRotate
                 transform:rotate(180deg)
          .mack
            width 100%
            height 372px
            background-color #fff
            .mack-whole
              z-index 2
              height 60px
              width 100%
              display flex
              box-sizing border-box
              border-top 1px solid #eee
              .mack-text
                z-index 3
                padding-left 20px
                height 60px
                width 100%
                font-size 30px
                color #333
                line-height 60px
            .mack-all
              width 100%
              height 312px
              margin-top 20px
              z-index 2
              background-color #fff
              .mack-ul
                width 100%
                height 100%
                display flex
                flex-wrap wrap
                .mack-li
                  font-size 25px
                  width 70PX
                  height 25PX
                  border 1px solid #ccc
                  margin-bottom 40px
                  margin-left 40px
                  text-align center
                  line-height 50px
                  color #333
                  background-color #eee
                  &.active
                    border 1px solid #b4282d
                    color #b4282d

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
              img
                display inline-block
                width 32px
                height 32px
                vertical-align middle
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


</style>

