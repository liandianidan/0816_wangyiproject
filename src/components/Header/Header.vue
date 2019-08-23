<template>
    <div id="header">
      <div class="header-content">
        <div @click="$router.push('./home')">
          <i class="iconfont icon-shouye"></i>
        </div>
        <slot name="aperson" ></slot>
        <slot name="casegoods"></slot>
        <div >
          <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
        </div>
        <div >
          <i class="iconfont icon-gouwuche" @click="$router.push('/shopping')"></i>
        </div>

      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #header
    width 100%
    height 88px
    background-color #fafafa
    .header-content
      width 100%
      height 100%
      display flex
      box-sizing border-box
      .iconfont
        font-size 50px
        margin 20px
        line-height 88px
      .icon-img
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
        background-size 172px 54px
        display inline-block
        width 172px
        height 54px
        margin 25px 100px 0 200px
</style>
