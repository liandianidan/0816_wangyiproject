<template>
  <div class="popularity">
    <More :title='newTitle'/>
    <div class="top">
      <div class="left">
        <img src=""/>
      </div>
      <div class="right">
        <div class="dis">11</div>
        <div class="big">22</div>
        <div class="small">33</div>
        <div class="pri">44</div>
      </div>
    </div>
    <div class="bottom">
      <ul class="list">
        <li class="item" >
          <img src=""/>
          <span class="desc">ddddd</span>
          <span class="label" >haha</span>
        </li>
      </ul>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import More from './More.vue'
  export default {
    components:{
      More
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .popularity
    background #fff
    .top
      width 345px
      height 140px
      margin 0 15px 10px 15px
      background #FEF0DF
      display flex
      justify-content space-between
      align-items center
      box-sizing border-box
      .left
        width 140px
        height 140px
        img
          width 140px
          height 140px
      .right
        .dis
          font-size 10px
        .big
          font-size 14px
        .small
          font-size 12px
        .pri
          font-size 14px
          color red
    .bottom
      width 370px
      height 175px
      .list
        width 100%
        display flex
        flex-wrap wrap
        .item
          width 108px
          height 177px
          margin-left 10px
          padding-bottom 6px
          display flex
          flex-wrap wrap
          img
            width 108px
            height 108px
            margin-bottom 10px
          .desc
            width 108px
            height 36px
            font-size 13px
          .label
            padding 2px 5px
            font-size 10px
            color red
            border 1px solid red
            border-radius 21%
</style>
