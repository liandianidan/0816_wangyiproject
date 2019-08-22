<template>
  <div id="appwrap">
    <div id="classify-h">
      <!--分类的头部-->
      <div id="header-content" @click="$router.push('/search')">
        <div class="header">
          <i class="icon iconfont icon-sousuo"></i>
          <span class="header-search">搜索商品, 共21615款好物</span>
        </div>
      </div>
      <!--分类的内容区-->
      <div id="classify-c">
        <!--内容的左边-->
        <div id="classify-left">
          <div class="classify-container">
            <ul class="classify-list">
              <li class="classify-item" v-for="(item, index) in categoryL1List"
                  :key="index" @click="isColor(index)" :class="{active:clickIndex===index}">
                <span>{{item.name}}</span>
              </li>
            </ul>
          </div>
        </div>
        <!--内容的右边-->
        <div id="classify-right">
          <div class="classify-r">
            <div class="classify-l" >
              <div class="classify-top" >
                <img src="https://yanxuan.nosdn.127.net/5b4ca33a0205482398006405c1db15e8.jpg?imageView&thumbnail=0x196" alt="">
              </div>
              <div class="classify-bottom">
                <ul class="classify-ul">
                  <li class="classify-li" v-for="(item, index) in categoryL2List"
            :key="index">
                    <div class="classify-div">
                      <img :src="item.bannerUrl" alt="">
                      <span>{{item.name}}</span>
                    </div>
                  </li>
                </ul>
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
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        clickIndex:0
      }
    },

    computed:mapState({
      categoryL1List: state => state.classify.categorys.categoryL1List,
      categoryL2List: state => state.classify.categorys.categoryL2List
      }),

    mounted() {
      new BScroll('.classify-container', {
        probeType: 1, // 触摸   低频(非实时)
        click: true, // 标识分发点击事件
      })
      new BScroll('.classify-r', {
        probeType: 1, // 触摸   低频(非实时)
        click: true, // 标识分发点击事件
      })

      this.$store.dispatch('getshowlist')
    },
    methods:{
      isColor(index){
        this.clickIndex=index

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #appwrap
    width 100%
    height 100%

   #classify-h
     width 100%
     height 100%
     background-color #fff
     #header-content
       position fixed
       top 0
       left 0
       width 100%
       height 88px
       border-bottom 1px solid #eee
       padding 0 20px
       box-sizing border-box
       display flex
       justify-content center
       align-items center
      .header
        width 690px
        height 56px
        background-color #eee
        display flex
        justify-content center
        align-items center
        .icon
          font-size 30px
          color #333
        .header-search
          font-size 30px
          color #333


     #classify-c
       width 100%
       height 100%
       padding-top 88px
       box-sizing border-box
       display flex
      #classify-left
        width 162px
        height 100%
        padding-bottom 98px
        box-sizing border-box
        color #63a35c
        .classify-container
          width 100%
          padding 30px 0
          height 100%
          overflow hidden
          box-sizing border-box
          .classify-list
            /*width 1000px*/
            height 1300px
            display inline-block
            .classify-item
              width 100%
              height 50px
              display flex
              justify-content center
              align-items center
              margin-top 40px
              &:nth-child(1)
                margin-top 0
              &.active
                border-left 3px solid #ab2b2b
                span
                 color #ab2b2b
              span
                font-size 28px
                color #333
      #classify-right
        width 588px
        height 100%
        padding-bottom 98px
        padding-top 25px
        box-sizing border-box
        background-color #fff
        overflow hidden
        .classify-r
          width 100%
          height 800px
          padding 20px
          box-sizing border-box
          .classify-l
             width 100%
             height  900px
             .classify-top
                width 528px
                height 192px
                margin 0  auto 30px
                img
                  width 100%
                  height 100%
             .classify-bottom
                width 100%
                .classify-ul
                  width 100%
                  display flex
                  flex-wrap wrap

                  .classify-li
                    width 144px
                    height 216px
                    padding-right 30px
                    .classify-div
                      height 100%
                      img
                        width 144px
                        height 144px
                        display block
                      span
                        font-size 25px
                        text-align center
                        display -webkit-box
                        width 144px
                        height 72px

</style>
