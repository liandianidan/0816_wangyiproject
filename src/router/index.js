// 路由对象模块
 import Vue from 'vue'
 import VueRouter from 'vue-router'
 import routes from './routes'
 
 Vue.use(VueRouter) //声明使用

export default new VueRouter({
   mode:'history',
   routes
 })

