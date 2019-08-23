<template>
  <div id="classify-right">
    <div class="classify-r" ref="xxx">
      <div class="classify-l" >
        <div class="classify-top" >
          <img :src="categoryL1List[leftIndex].bannerUrl" alt="">
        </div>
        <div class="classify-bottom">
          <ul class="classify-ul">
            <li class="classify-li" v-for="(item, index) in subCateList"
                :key="index">
              <div class="classify-div">
                <img :src="item.bannerUrl" alt="">
                <span>{{item.name}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from '@better-scroll/core'
  export default {
    props:['leftIndex'],
    data(){
      return{
        index:0,
      }
    },
    computed:{
      categoryL1List() {
        return this.$store.state.classify.categorys.categoryL1List
      },
      subCateList() {
          return this.$store.state.classify.categorys.categoryL1List[this.leftIndex].subCateList
       },
    },
    mounted(){
      // console.log(this.subCateList)
      this.$nextTick(() => {
        // console.log('++')
        // console.log(this.$refs.xxx)
        this.BScroll = new BScroll('.classify-r', {
          probeType: 1, // 触摸   低频(非实时)
          click: true, // 标识分发点击事件
        })
      })


    },
    watch:{
      subCateList(){
        this.$nextTick(()=>{
          // console.log('--s--',this.BScroll)
          if(!this.BScroll){
            // console.log(this.$refs.xxx)
            new BScroll('.classify-r', {
              probeType: 1, // 触摸   低频(非实时)
              click: true, // 标识分发点击事件
            })
          }else{
            this.BScroll.refresh()
          }

        })
      }
    }


  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  #classify-right
    width 588px
    height 100%
    padding-bottom 98px
    padding-top 25px
    box-sizing border-box
    background-color #fff
    overflow hidden
    .classify-r
      width 100%
      height 800px
      padding 20px
      box-sizing border-box
      .classify-l
        width 100%
        height  900px
        .classify-top
          width 528px
          height 192px
          margin 0  auto 30px
          img
            width 100%
            height 100%
        .classify-bottom
          width 100%
          .classify-ul
            width 100%
            display flex
            flex-wrap wrap

            .classify-li
              width 144px
              height 216px
              padding-right 30px
              .classify-div
                height 100%
                img
                  width 144px
                  height 144px
                  display block
                span
                  font-size 25px
                  text-align center
                  display -webkit-box
                  width 144px
                  height 72px
</style>
