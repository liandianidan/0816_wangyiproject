<template>
  <div id="app">
    <div id="header">
      <div class="header-content">
        <a href="#">
          <i class="iconfont icon-home"></i>
        </a>
        <a href="#" class="icon-img"></a>
        <a href="#">
          <i class="iconfont icon-sousuo"></i>
        </a>
        <a href="#">
          <i class="iconfont icon-gouwuche"></i>
        </a>

      </div>

    </div>
    <div id="content">
      <div class="content-img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="content-btn">
        <div class="shouji">

          <button class="shouji-btn">
            <i class="iconfont icon-shouji"></i>
            手机号快速登录
          </button>
        </div>
        <div class="youxiang">

          <button class="youxiang-btn">
            <i class="iconfont icon-duanxin"></i>
            邮箱账号登录
          </button>
        </div>

      </div>
      <div class="content-button"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    #header
      width 100%
      height 88px
      .header-content
        width 100%
        height 100%
        display flex
        padding 20px
        box-sizing border-box
        .iconfont
          font-size 50px
          margin 0 0 0 20px
        .icon-img
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
          background-size 172px 54px
          display inline-block
          width 172px
          height 54px
          margin 0 auto


    #content
      .content-img
        width 100%
        height 241px
        padding 200px 0
        text-align center
        box-sizing border-box
        img
          width 268px
          height 90px
      .content-btn
        width 100%
        height 110px
        padding 0 40px
        box-sizing border-box
        .shouji,.youxiang
          width 670px
          height 94px
          margin-bottom 20px
          .shouji-btn,.youxiang-btn
            width 100%
            height 100%
            /*border-radius 5px*/
          .shouji-btn
            font-size 30px
            color #fff
            background-color #DD1A21
            border 0
          .youxiang-btn
            border 1px solid #DD1A21
            background-color #fff
            color #DD1A21
</style>
