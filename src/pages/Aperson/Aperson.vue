<template>
  <div id="app">
    <div id="header">
      <div class="header-content">
        <div>
          <i class="iconfont icon-shouye"></i>
        </div>
        <div href="javascript:;" class="icon-img"></div>
        <div href="javascript:;">
          <i class="iconfont icon-sousuo"></i>
        </div>
        <div href="javascript:;">
          <i class="iconfont icon-gouwuche"></i>
        </div>

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
            <span>手机号快速登录</span>
          </button>
        </div>
        <div class="youxiang">

          <button class="youxiang-btn">
            <i class="iconfont icon-youxiang"></i>
            <span>邮箱账号登录</span>
          </button>
        </div>

      </div>
    </div>
    <div id="botton">
      <div class="botton-a">
        <div class="weixin botton-b">
          <i class="iconfont icon-weixin1"></i>
          <span>微信</span>
        </div>
        <div class="qq botton-b">
          <i class="iconfont icon-qq1"></i>
          <span>QQ</span>
        </div>
        <div class="weibo botton-b">
          <i class="iconfont icon-weibo1"></i>
          <span>微博</span>
        </div>
      </div>
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
    background-color #f5f5f5
    #header
      width 100%
      height 88px
      background-color #fff
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
          margin 0 100px 0 200px


    #content
      width 100%
      margin-bottom 300px
      .content-img
        width 100%
        height 241px
        padding 200px 0
        text-align center
        box-sizing border-box
        margin-bottom 150px
        img
          width 268px
          height 90px
      .content-btn
        width 100%
        /*height 110px*/
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
            vertical-align center
            span
              margin-left 10px
              vertical-align center


    #botton
      width 100%
      height 60px
      padding 0 50px
      box-sizing border-box
      display flex
      justify-content center
      .botton-a
        width 100%
        height 100%
        display flex
        justify-content space-around
        .botton-b
          float left
          width 184px
          height 40px
          text-align center
          line-height 40px
          .iconfont
            font-size 38px
            color #979797
          span
            font-size 25px
            color #979797
        .qq
          border-left 1px solid #979797
          border-right 1px solid #979797


</style>
