/*搜索模块数据管理*/
import {
  reqzhenxuanjialunbo
} from '../../api'



// import {RECEIVE_SEARCH_LIST} from '../mutation-rypes'

const state = {

};
const actions = {
  async gethomelunbo(){
    const result = await reqzhenxuanjialunbo()
    console.log(result)

  }
};
const mutations = {

};

const getters = {

};

export default {
  state,
  actions,
  mutations,
  getters
}
