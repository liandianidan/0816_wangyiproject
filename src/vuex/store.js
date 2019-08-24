/*最核心的管理对象*/
import Vue from 'vue'
import Vuex,{Store} from 'vuex'

import  home from './modules/home.js'
import classify from './modules/classify'
import searchs from './modules/searchs'
import caseGoods from './modules/caseGoods'


import mutations from  './mutations.js'
import actions from  './actions.js'
import getters from  './getters.js'

Vue.use(Vuex) //声明使用插件

export default  new Store({
  mutations,
  actions,
  getters,
  modules:{//配置应用中所有功能的相关配置
    home,
    classify,
    searchs,
    caseGoods
  }
})

