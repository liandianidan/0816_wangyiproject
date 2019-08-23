/*识物数据管理模块*/

import { reqCaseGoods } from '../../api'



import {RECEIVE_NAVLIST} from '../mutation-rypes'

const state = {
  navLists:[]
};
const actions = {
  async getGoodList({commit}){

    const result=await reqCaseGoods()
    console.log(result)
    if(result.code==='200'){
      const navList=result.data
      console.log(navList)
      commit(RECEIVE_NAVLIST,{navList})
    }

  }
};
const mutations = {
  [RECEIVE_NAVLIST](state,{navList}){
    state.navLists=navList
  }
};

const getters = {

};

export default {
  state,
  actions,
  mutations,
  getters
}
