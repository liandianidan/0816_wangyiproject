import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate) //声明使用


//提示信息本地化
import zh_CN from 'vee-validate/dist/locale/zh_CN'
VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    mobile: '手机号',
    mobilepas: '验证码',
    myemail:'邮箱',
    emailPws:'密码'
  }
})

//自定义手机号验证规则
VeeValidate.Validator.extend('mobile', {
  validate: value => {
    return /^1[3456789]\d{9}$/.test(value)
  },
  getMessage: phone => phone + '必须是11位手机号码'
})
//自定义邮箱验证规则
VeeValidate.Validator.extend('email', {
  validate: value => {
    return /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/.test(value)
  },
  getMessage: myemail => myemail + '必须是11位'
})
