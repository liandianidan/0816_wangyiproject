<template>
  <div id="mack">
    <div class="mack-whole">
      <div class="mack-text">全部频道</div>
      <div class="mack-icon">
        <i class="iconfont icon-up2"></i>
      </div>
    </div>
    <div class="mack-all">
      <ul class="mack-ul">
        <li class="mack-li active">推荐</li>
        <li class="mack-li">母婴用品</li>
        <li class="mack-li">推荐</li>
        <li class="mack-li">推荐</li>
        <li class="mack-li">推荐</li>
        <li class="mack-li">推荐</li>
        <li class="mack-li">推荐</li>
        <li class="mack-li">推荐</li>
        <li class="mack-li">推荐</li>
      </ul>
    </div>
    <div class="mack"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #mack
    width 100%
    height 372px
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
        width 80%
        font-size 30px
        color #333
        line-height 60px
      .mack-icon
        z-index 3
        box-sizing border-box
        padding-left 80px
        height 60px
        width 20%
        line-height 60px
    .mack-all
      width 100%
      height 312px
      margin-top 20px
      z-index 2
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
    .mack
      position fixed
      top 0
      right 0
      bottom 0
      left 0
      z-index -2
      background rgba(0,0,0,.8)
</style>
