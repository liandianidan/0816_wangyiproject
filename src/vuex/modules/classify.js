/*首页管理模块*/

import { reqShopBar } from '../../api'



import {RECEIVE_SPECIAL_LIST} from '../mutation-rypes'

const state = {
  categorys:{}
};
const actions = {
  async getshowlist({commit}){
    const result= await  reqShopBar();
    if(result.code===0){
      const data = result.data
      commit(RECEIVE_SPECIAL_LIST, {data})
    }


  }
};
const mutations = {
  [RECEIVE_SPECIAL_LIST](state,{data}){
    state.categorys=data

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
