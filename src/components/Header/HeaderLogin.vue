<template>
  <div>
    <header id="casegoods-header2">
      <!-- 搜索框 -->
      <div class="header">
        <div class="header-text"></div>
        <div class="header-input" @click="$router.push('/search')">
          <i class="icon iconfont icon-sousuo1"></i>
          <span class="header-search">搜索商品, 共21615款好物</span>
        </div>
        <button class="header-btn" @click="$router.push('/aperson')">登录</button>
      </div>
    </header>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #casegoods-header2
    width 100%
    margin-bottom 20px
    background white
    z-index 999
    .header
      display flex
      height 88px
      width 100%
      padding 25px
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
</style>
