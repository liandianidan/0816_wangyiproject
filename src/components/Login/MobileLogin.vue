<template>
  <div>
    <div id="mobile">
      <div class="login-mobile">
        <div class="login-logo">
          <div class="logo-img">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
        </div>

        <div class="login-way">
          <div class="cell-phone-number">
            <div class="cell-input">
              <input type='text' placeholder="请使用手机号登录" v-model="phone" name="mobile" v-validate="'required|mobile'"/>
              <span  v-show="errors.has('mobile')">
              {{errors.first('mobile')}}
            </span>
            </div>

          </div>
          <div class="auth-code">
            <div class="auth-code-a">
              <div class="auth-code-b">
                <input type='text' placeholder="请输入验证码" v-model="mobilepas" name="mobilepas" v-validate="{required:true,regex:/^\d{6}$/}"/>
                <span  style="color: red" v-show="errors.has('mobilepas')">{{ errors.first('mobilepas') }}</span>
              </div>
            </div>
            <div class="auth-t">
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
          <div class="else-login" @click="Toggle(0)">
            <span>其他登录方式</span>
            <i class="iconfont icon-you"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['Toggle'],
    data(){
      return{
        phone:'',//手机号
        mobilepas:''//密码
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
              span
                display block
                font-size 30px
                color red
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
                span
                  display block
                  font-size 30px
                  color red
            .auth-t
              width 146px
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
            height 60px
            text-align center
            font-size 34px
            .iconfont
              font-size 34px
</style>
