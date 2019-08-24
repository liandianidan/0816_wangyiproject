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
  flashSaleModule:{},//限时购
  newItemList:[], //新品首发
  popularItemList:[]//人气推荐
}
const actions = {
  async getPolicyDesc({commit}){//商品列表 购物导航榜单 私人定制 限时购
  const result = await reqPolicyDesc()
    if(result.code===0){
      const {policyDescList,kingKongModule,sceneLightShoppingGuideModule,personalShop,flashSaleModule,newItemList,popularItemList} = result.data

      commit(RECEIVE_POLICY_LIST,{policyDescList,kingKongModule,sceneLightShoppingGuideModule,personalShop,flashSaleModule,newItemList,popularItemList})

    }
  },
}
const mutations={
  [RECEIVE_POLICY_LIST](state,{policyDescList,kingKongModule,sceneLightShoppingGuideModule,personalShop,flashSaleModule,newItemList,popularItemList}){
    state.policyDescList = policyDescList
    state.kingKongModule = kingKongModule
    state.goodShops = sceneLightShoppingGuideModule
    state.private = personalShop
    state.flashSaleModule=flashSaleModule
    state.newItemList=newItemList
    state.popularItemList=popularItemList
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
