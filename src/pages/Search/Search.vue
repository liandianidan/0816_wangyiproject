<template>
  <div id="search-container">
      <div class="header">
        <form action="" class="search-form">
          <i class="iconfont icon-sousuo"></i>
          <input class='search-input' type='text' placeholder="迪奥999，你值的拥有"
          v-model="userData"/>
          <div class="search-error" v-show="userData" @click="clearInput">X</div>
        </form>
        <div class="search-text" @click="$router.push('/home')">
          <span>取消</span>
        </div>
      </div>
      <div class="search-buttom">
        <div class="mack-whole">
          <div class="mack-text">全部频道</div>
        </div>
        <div class="mack-all">
          <ul class="mack-ul">
            <li class="mack-li active">
              推荐
            </li>
            <li class="mack-li ">
              香氛牙膏 谈吐芳香
            </li>
            <li class="mack-li ">
              轻弹云朵拖鞋9.9元
            </li>
            <li class="mack-li ">
              中秋月饼 上新热卖
            </li>
            <li class="mack-li ">
              推荐
            </li>
            <li class="mack-li ">
              推荐
            </li>
            <li class="mack-li ">
              推荐
            </li>
            <li class="mack-li ">
              推荐
            </li>
            <li class="mack-li ">
              推荐
            </li>
            <li class="mack-li ">
              推荐
            </li>

          </ul>
        </div>
      </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        userData:''
      }
    },
    methods:{
      clearInput(){
        this.userData=''
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #search-container
    width 100%
    background-color #fff
    .header
      width 100%
      height 87px
      display flex
      justify-content center
      align-items center
      .search-form
        width 604px
        height 56px
        box-sizing border-box
        padding 0 10px
        background-color #f4f4f4
        margin-right 15px
        border-radius 5px
        display flex
        align-items center
        .iconfont
          font-size 35px
        .search-input
          width 520px
          height 39px
          font-size 35px
          margin-left 8px
          background-color #f4f4f4
          outline none
        .search-error
          width 40px
          height 40px
          font-size 18px
          text-align center
          line-height 40px
          background-color #cccccc
          border-radius 50%
      .search-text
        font-size 30px

    .search-buttom
      width 100%
      height 404px
      padding 0 20px 20px 20px
      box-sizing border-box
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
      .mack-all
        width 100%
        height 312px
        margin-top 20px
        z-index 2
        .mack-ul
          width 100%
          height 100%
          .mack-li
            float left
            height 25PX
            border 1px solid #ccc
            margin-bottom 35px
            margin-right 35px
            background-color #FFF
            text-align center
            line-height 50px
            font-size 25px
            padding 0 10px
            &.active
              border 1px solid #b4282d
              color #b4282d
</style>
