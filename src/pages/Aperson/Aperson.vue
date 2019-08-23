<template>
  <div>
    <Header>
      <div  class="icon-img" slot="aperson"></div>
    </Header>
    <!--登录入口-->
    <div class="login-entrance" v-if="isShow === 0">
      <div id="content">
        <div class="content-img">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="content-btn">
          <div class="shouji">

            <button class="shouji-btn"  @click="Toggle(1)">
              <i class="iconfont icon-shouji"></i>
              <span>手机号快速登录</span>
            </button>
          </div>
          <div class="youxiang">
            <button class="youxiang-btn" @click="Toggle(2)">
              <i class="iconfont icon-youxiang"></i>
              <span>邮箱账号登录</span>
            </button>
          </div>

        </div>
      </div>
      <div id="botton">
        <div class="botton-a">
          <div class="weixin botton-b">
            <i class="iconfont icon-weixin1"></i>
            <span>微信</span>
          </div>
          <div class="qq botton-b">
            <i class="iconfont icon-qq1"></i>
            <span>QQ</span>
          </div>
          <div class="weibo botton-b">
            <i class="iconfont icon-weibo1"></i>
            <span>微博</span>
          </div>
        </div>
      </div>
    </div>
    <!--手机登录-->

    <MobileLogin  :Toggle="Toggle" v-if="isShow === 1"/>


    <!--邮箱登录-->

    <EmailLogin :Toggle="Toggle" v-if="isShow === 2" ></EmailLogin>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '../../components/Header/Header.vue'
  import EmailLogin from '../../components/Login/EmailLogin.vue'
  import MobileLogin from '../../components/Login/MobileLogin.vue'

  export default {
    data(){
      return{
        isShow: 0  // 0:默认登录显示 1：手机登录 2：邮箱登录
      }
    },
    components:{
      Header,
      EmailLogin,
      MobileLogin,

    },
    methods:{
      Toggle (num) {
        this.isShow = num
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

   .login-entrance
      #content
        width 100%
        margin-bottom 300px
        .content-img
          width 100%
          height 241px
          padding 200px 0
          text-align center
          box-sizing border-box
          margin-bottom 150px
          img
            width 268px
            height 90px
        .content-btn
          width 100%
          /*height 110px*/
          padding 0 40px
          box-sizing border-box
          .shouji,.youxiang
            width 670px
            height 94px
            margin-bottom 20px
            .shouji-btn,.youxiang-btn
              width 100%
              height 100%
              /*border-radius 5px*/
            .shouji-btn
              font-size 30px
              color #fff
              background-color #DD1A21
              border 0
            .youxiang-btn
              border 1px solid #DD1A21
              background-color #fff
              color #DD1A21
              vertical-align center
              span
                margin-left 10px
                vertical-align center


      #botton
        width 100%
        height 60px
        padding 0 50px
        box-sizing border-box
        display flex
        justify-content center
        .botton-a
          width 100%
          height 100%
          display flex
          justify-content space-around
          .botton-b
            float left
            width 184px
            height 40px
            text-align center
            line-height 40px
            .iconfont
              font-size 38px
              color #979797
            span
              font-size 25px
              color #979797
          .qq
            border-left 1px solid #979797
            border-right 1px solid #979797




</style>
