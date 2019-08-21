<template>
  <div id="app">
    <Header>
      <div  class="icon-img" slot="aperson"></div>
    </Header>
    <!--登录入口-->
    <div class="login-entrance" v-show="showEntrance">
      <div id="content">
        <div class="content-img">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="content-btn">
          <div class="shouji">

            <button class="shouji-btn"  @click="isShowCell">
              <i class="iconfont icon-shouji"></i>
              <span>手机号快速登录</span>
            </button>
          </div>
          <div class="youxiang">

            <button class="youxiang-btn" @click="isShowEmail">
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
    <div id="mobile">
      <div class="login-mobile" v-show="showMobile">
        <div class="login-logo">
          <div class="logo-img">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
        </div>

        <div class="login-way">
          <div class="cell-phone-number">
            <div class="cell-input">
              <input type='text' placeholder="请使用手机号登录"/>
            </div>
          </div>
          <div class="auth-code">
            <div class="auth-code-a">
              <div class="auth-code-b">
                <input type='text' placeholder="请输入验证码"/>
              </div>
            </div>
            <div class="auth-text">
              <span>获取验证码</span>
            </div>
          </div>
          <div class="auth-issue">
            <span>遇到问题？</span>
            <span>使用密码验证登录</span>
          </div>
          <div class="login">
            <div class="login-a">
              登录
            </div>
          </div>
          <div class="serve-text">
            <div class="serve-border">
              <i class="iconfont icon-duihao"></i>
            </div>
            <span>我同意</span>
            <a href="javascript:;" class="clause">
              <span>《服务条款》</span>
            </a>
            <span>和</span>
            <a href="javaScript" class="clause">
              <span>《网易隐私政策》</span>
            </a>
          </div>
          <div class="else-login">
            <span>其他登录方式</span>
            <i class="iconfont icon-you"></i>
          </div>
        </div>
      </div>
    </div>
    <!--邮箱登录-->
    <div class="login-email" v-show="showEmail">
      <div class="login-logo">
        <div class="logo-img">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
      </div>

      <div class="login-way">
        <div class="cell-phone-number">
          <div class="cell-input">
            <input type='text' placeholder="邮箱"/>
          </div>
        </div>
        <div class="auth-code">
          <div class="auth-code-a">
            <div class="auth-code-b">
              <input type='text' placeholder="密码"/>
            </div>
          </div>
        </div>
        <div class="auth-issue">
          <span>注册账号</span>
          <span>忘记密码</span>
        </div>
        <div class="login">
          <div class="login-a">
            登录
          </div>
        </div>
        <div class="else-login">
          <span>其他登录方式</span>
          <i class="iconfont icon-you"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '../../components/Header/Header.vue'
  export default {
    data(){
      return{
        showEntrance:true,//登录入口默认显示
        showMobile:false, //手机登录默认隐藏
        showEmail:false
      }
    },
    components:{
      Header
    },
    methods:{
      isShowCell(){
        this.showEntrance=false, //登录入口隐藏
        this.showMobile=true   //手机登录显示
      },
      isShowEmail(){
        this.showEntrance=false
        this.showMobile=false
        this.showEmail=true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background-color #f5f5f5
    #header
      width 100%
      height 88px
      background-color #fafafa
      .header-content
        width 100%
        height 100%
        display flex
        padding 20px
        box-sizing border-box
        .iconfont
          font-size 50px
          margin 0 0 0 20px
        .icon-img
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
          background-size 172px 54px
          display inline-block
          width 172px
          height 54px
          margin 0 100px 0 200px
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


  /*手机号登录*/
   #mobile
     width 100%
     height 100%
     background-color #fff
     .login-mobile
       width 100%
       height 100%
       background-color #fff
       .login-logo
         width 100%
        .logo-img
          width 100%
          height 80px
          text-align center
          margin-top 80px
          img
            width 192px
            height 80px


       .login-way
          width 680px
          height 520px
          margin 40px auto
          .cell-phone-number
            width 100%
            height 92px
            border-bottom 1px solid #eeeeee
            .cell-input
              padding 20px 0
              input
                outline none
                font-size 35px
          .auth-code
            display flex
            width 100%
            height 92px
            align-items center
            .auth-code-a
              width 450px
              height 100%
              border-bottom 1px solid #eee
              .auth-code-b
                width 450px
                height 100%
                padding 20px 0
                input
                  outline none
                  font-size 35px

          .auth-issue
            display flex
            justify-content space-between
            font-size 30px
            padding 20px 0
            margin 10px 0
            span:nth-child(1)
              color #ccc
          .login
            width 100%
            height 92px
            margin 20px 0
            .login-a
              height 100%
              font-size 40px
              text-align center
              line-height 92px
              border-radius 8px
              background-color #DD1A21
              color #fff
          .else-login
            width 100%
            height 60px
            text-align center
            font-size 34px
            .iconfont
              font-size 34px
  /*邮箱登录*/
   .login-email
     width 100%
     height 100%
     background-color #fff
     .login-logo
       width 100%
     .logo-img
       width 100%
       height 80px
       text-align center
       margin-top 80px
       img
         width 192px
         height 80px


     .login-way
       width 680px
       height 520px
       margin 40px auto
       .cell-phone-number
         width 100%
         height 92px
         border-bottom 1px solid #eeeeee
         .cell-input
           padding 20px 0
           input
             outline none
             font-size 35px
       .auth-code
         display flex
         width 100%
         height 92px
         align-items center
         .auth-code-a
           width 100%

           height 100%
           border-bottom 1px solid #eee
           .auth-code-b
             width 450px
             height 100%
             padding 20px 0
             input
               outline none
               font-size 35px
         .auth-text
           /*width 146px*/
           height 52px
           border 1px solid red
           font-size 25px
           text-align center
           line-height 52px
           border-radius 5px
           margin-left 56px
           padding 0 10px

       .auth-issue
         display flex
         justify-content space-between
         font-size 30px
         padding 20px 0
         margin 10px 0
         span
            color #666
       .login
         width 100%
         height 92px
         margin-top 20px
         .login-a
           height 100%
           font-size 40px
           text-align center
           line-height 92px
           border-radius 8px
           background-color #DD1A21
           color #fff
       .serve-text
         display flex
         justify-content flex-start
         font-size 28px
         margin 40px 0
         .serve-border
           width 34px
           height 34px
           border 1px solid #333
           text-align center
           line-height 34px
           margin-right 10px
         .clause
           color #007AFF
       .else-login
         width 100%
         height 30px
         text-align center
         font-size 34px
         margin-top 20px
         .iconfont
           font-size 34px
</style>
