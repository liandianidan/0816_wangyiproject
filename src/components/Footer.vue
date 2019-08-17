<template>
  <!-- 底部 -->
    <div id="footer">
      <ul class="footer-nav">
        <li class="footer-item">
          <i class="iconfont icon-home"></i>
          <span>首页</span>
        </li>
        <li class="footer-item">
          <i class="iconfont icon-iconyihuifu-"></i>
          <span>分类</span>
        </li>
        <li class="footer-item">
          <i class="iconfont icon-tupian"></i>
          <span>识物</span>
        </li>
        <li class="footer-item">
          <i class="iconfont icon-gouwuche"></i>
          <span>购物车</span>
        </li>
        <li class="footer-item">
          <i class="iconfont icon-geren"></i>
          <span>个人</span>
        </li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #footer
    width 100%
    height 98px
    background-color #fff
    position fixed
    bottom 0
    left 0
    z-index 999
    .footer-nav
      width 100%
      height 100%
      display flex
      justify-content space-around
      align-items center
      .footer-item
        // height 48px
        display flex
        flex-direction column
        justify-content center
        align-items center
        .iconfont
          font-size 40px
        span
          display inline-block
          font-size 30px 
          margin-top 5px 
</style>
