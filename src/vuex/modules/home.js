/*首页管理模块*/
import {
  reqPolicyDesc
} from '../../api'

import {
  RECEIVE_POLICY_LIST,
} from '../mutation-rypes'

const state = {
  policyDescList:[], //服务策略
  kingKongModule:{},  //商品列表
  goodShops:[], //购物导航榜单
  private:[], //私人定制
  flashSaleModule:{}//限时购
}
const actions = {
  async getPolicyDesc({commit}){//商品列表 购物导航榜单 私人定制 限时购
  const result = await reqPolicyDesc()
    if(result.code===0){
      const {policyDescList,kingKongModule,sceneLightShoppingGuideModule,personalShop,flashSaleModule} = result.data
      commit(RECEIVE_POLICY_LIST,{policyDescList,kingKongModule,sceneLightShoppingGuideModule,personalShop,flashSaleModule})

    }
  },
}
const mutations={
  [RECEIVE_POLICY_LIST](state,{policyDescList,kingKongModule,sceneLightShoppingGuideModule,personalShop,flashSaleModule}){
    state.policyDescList = policyDescList
    state.kingKongModule = kingKongModule
    state.goodShops = sceneLightShoppingGuideModule
    state.private = personalShop
    state.flashSaleModule=flashSaleModule
  },

}
const getters={

}

export default {
  state,
  actions,
  mutations,
  getters
}
