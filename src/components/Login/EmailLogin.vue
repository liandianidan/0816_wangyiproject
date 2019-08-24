<template>
  <div>
    <div class="login-email">
      <div class="login-logo">
        <div class="logo-img">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
      </div>

      <div class="login-way">
        <div class="cell-phone-number">
          <div class="cell-input">
            <input type='text' placeholder="邮箱" v-model="email" name="myemail"
            v-validate="'required|email'"/>
            <span  v-show="errors.has('myemail')">
              {{errors.first('myemail')}}
            </span>
          </div>
        </div>
        <div class="auth-code">
          <div class="auth-code-a">
            <div class="auth-code-b">
              <input type='text' placeholder="密码" v-model="emailPws" name="emailPws" v-validate="{required:true,regex:/^\d{6}$/}"/>
              <span  v-show="errors.has('emailPws')">{{ errors.first('emailPws') }}</span>
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
        <div class="else-login"  @click="Toggle(0)">
          <span>其他登录方式</span>
          <i class="iconfont icon-you"></i>
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
       email:'', //邮箱
       emailPws:'', //邮箱密码

     }
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
            span
              display block
              font-size 30px
              color red

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

      .else-login
        width 100%
        height 30px
        text-align center
        font-size 34px
        margin-top 20px
        .iconfont
          font-size 34px
</style>
