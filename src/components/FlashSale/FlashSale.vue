<template>
  <div id="flash-sale">
    <div class="limited">
      <div class="limited-a">
        <span class="limited_time">限时购</span>
        <span class="limited_time">01:16:45</span>
      </div>
      <div class="limited_more">
        <span>更多</span>
        <i class="iconfont icon-icon_arrow_right"></i>
      </div>
    </div>
    <div class="limitedgoods">
      <ul class="limitedlist">
        <li class="limiteditem" v-for="(item,index) in flashSaleArr" :key="index">
          <img :src="item.picUrl" alt="">
          <span>￥{{item.activityPrice}}</span>
          <strike>￥{{item.originPrice}}</strike>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    computed:{
      flashSaleArr(){
        return this.$store.state.home.flashSaleModule.itemList
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #flash-sale
    width 100%
    height 698px
    background-color #fff
    margin-bottom 30px
    .limited
      width 100%
      height 100px
      display flex
      justify-content space-between
      .limited-a
        width 290px
        height 100px
        display flex
        span
          font-size 35px
        .limited_time
          float left
          margin: 15px 20px;
          font-size 30px
      .limited_more
        width 78px
        height 100px
        display flex
        float right
        margin: 15px 15px;
        span
          display block
          color #333333
          font-size 30px
          float left
        iconfont
          float right
    .limitedgoods
      display flex
      width 100%
      height 600px
      .limitedlist
        display flex
        flex-wrap wrap
        .limiteditem
          width 216px
          height 300px
          margin-left: 26px;
          img
            width 216px
            height 216px
            background #F5F5F5
          span,strike
            font-size 28px
          span
            margin-right 10px

</style>
