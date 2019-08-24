<template>
  <div class="popularity">
    <More/>
    <div class="top">
      <div class="left">
        <img src="https://yanxuan-item.nosdn.127.net/8ee282bed26f6248b3453b4b202a55db.png?imageView&quality=65&thumbnail=280x280"/>
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
        <li class="item" v-if="index<3" v-for="(item,index) in popularItemList" :key="index">
          <img :src="item.listPicUrl"/>
          <span class="desc">{{item.name}}</span>
          <span class="label" >{{item.retailPrice}}</span>
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
    },
    computed:{
      popularItemList(){
        return this.$store.state.home.popularItemList
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .popularity
    background #fff
    padding 20px
    .top
      width 100%
      height 280px
      background #FEF0DF
      margin-bottom 10px
      display flex
      justify-content space-between
      align-items center
      box-sizing border-box
      .left
        width 280px
        height 280px
        img
          width 280px
          height 280px
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
      width 100%
      height 354px
      .list
        width 100%
        display flex
        flex-wrap wrap
        .item
          width 216px
          height 354px
          margin-left 15px
          padding-bottom 10px
          display flex
          flex-wrap wrap
          img
            width 216px
            height 216px
            margin-bottom 10px
          .desc
            width 216px
            height 72px
            font-size 13px
          .label
            padding 2px 5px
            font-size 10px
            color red
            border 1px solid red
            border-radius 21%
</style>
