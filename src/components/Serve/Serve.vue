<template>
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
</template>

<script type="text/ecmascript-6">
  export default {
    props:['policyDescList']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
</style>
