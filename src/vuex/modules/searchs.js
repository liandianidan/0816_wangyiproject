/*搜索模块数据管理*/
import {
  reqSearchDefault,
  reqSearchNoDefault
} from '../../api'



import {RECEIVE_SEARCH_LIST} from '../mutation-rypes'

const state = {
  data:[],
  hotKeywordVOList:[]
};
const actions = {
  async getSearch({commit},userData){
    const result= await reqSearchDefault(userData);
    console.log(result)
    if(result.code==='200'){
      const data = result.data
      console.log(data)
      commit(RECEIVE_SEARCH_LIST, {data})
    }


  },
  async getSearchDefault({commit}){
    const result=await reqSearchNoDefault()
    console.log(result)
    if(result.code==='200'){
      const data = result.data.hotKeywordVOList
      console.log(data)
      commit(RECEIVE_SEARCH_LIST, {data})
    }
  }
};
const mutations = {
 [RECEIVE_SEARCH_LIST](state,{data}){
   state.hotKeywordVOList=data
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
