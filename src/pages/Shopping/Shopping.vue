<template>
  <div id="shopping-conent">
    <div id="shopping-header">
      <div class="header-content">
        <div class="shopping-s">
          <span>购物车</span>
        </div>

        <div class="getCoupon">
          <span>领券</span>
        </div>

      </div>

    </div>
    <div id="shopping-serve">
      <ul class="shopping-list">
        <li class="shopping-item">
          <span>
            <span class="icon-1 icon"></span>
            <span>30天无忧退货</span>
          </span>
        </li>
        <li class="shopping-item">
          <span>
            <span class="icon-2 icon"></span>
            <span>24小时快速退款</span>
          </span>
        </li>
        <li class="shopping-item">
          <span>
            <span class="icon-3 icon"></span>
            <span>满88元免费邮</span>
          </span>
        </li>
      </ul>
    </div>
    <div id="shopping-bottom">
      <div class="shopping-imag">
        <div class="shopping-img"></div>
      </div>
      <div class="shopping-add">去添加点什么把</div>
      <div class="shopping-btn">登录</div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 #shopping-conent
   width 100%
   background-color #f5f5f5
   #shopping-header
    width 100%
    height 88px
    background-color #fff
    .header-content
      width 100%
      height 100%
      display flex
      padding 20px
      box-sizing border-box
      justify-content space-between
      .shopping-s
        span
          font-size 35px
      .getCoupon
        margin-right 40px
        span
          font-size 30px
          color #B4282D




   #shopping-serve
     width 100%
     height 70px
     background-color #eee
     .shopping-list
       width 100%
       height 70px
       display flex
       padding 0 20px
       box-sizing border-box
       justify-content space-around
       align-items center
       .shopping-item
         display flex
         padding 0 10rpx
         justify-content space-between

         .icon
           display inline-block
           width 10px
           height 10px
           background-size 98%
           vertical-align middle
         .icon-1
           background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png)
         .icon-2
           background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png)
         .icon-3
           background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png)
         span
           font-size 20px
           color #666
           vertical-align middle

   #shopping-bottom
    width 100%
    display flex
    flex-direction column
    justify-content center
    align-items center
    margin-top 400px
    .shopping-imag
      width 248px
      height 248px
      .shopping-img
        width 100%
        height 100%
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png)
        background-size 248px 248px
        background-repeat no-repeat
    .shopping-add
      font-size 28px
      color #999
      margin-bottom 40px
    .shopping-btn
      width 480px
      height 94px
      text-align center
      line-height 94px
      border-radius 5px
      background-color #b4282d
      font-size 30px
      color #fff


</style>
