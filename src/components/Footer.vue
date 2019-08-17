<template>
  <!-- 底部 -->
    <div id="footer">
      <ul class="footer-nav">
        <router-link to="/home">
          <li class="footer-item" > 
            <i class="iconfont icon-home"></i>
            <span>首页</span>
          </li>
        </router-link>
        <router-link to="/classify">
           <li class="footer-item">
            <i class="iconfont icon-iconyihuifu-"></i>
            <span>分类</span>
          </li>
        </router-link>
       <router-link to="casegoods">
         <li class="footer-item">
          <i class="iconfont icon-tupian"></i>
          <span>识物</span>
         </li>
       </router-link>
        <router-link to="/shopping">
          <li class="footer-item">
            <i class="iconfont icon-gouwuche"></i>
            <span>购物车</span>
          </li>
        </router-link>
        <router-link to="aperson">
          <li class="footer-item">
            <i class="iconfont icon-geren"></i>
            <span>个人</span>
          </li>
        </router-link>
        
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    // :class="{on:$route.path==='/home'}" @click="goTo('/home')"
    // name:'Footer',
    // methods:{
    //   goTo(path){
    //     this.$router.replace(path)
        
    //   }
    // }
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
