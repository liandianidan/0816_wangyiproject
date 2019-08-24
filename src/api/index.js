
//请求接口文件

import ajax from './ajax'


export const reqShopBar=()=>ajax.get('/categorylist') //分类左侧和右侧的列表

export const reqPolicyDesc = () =>ajax.get('/home') //首页的列表请求

export const reqSearchDefault = (userData) => ajax({
  methods: 'GET',
  url:`/xhr/search/searchAutoComplete.json?keywordPrefix=${userData}`
})
export const reqSearchNoDefault =()=>ajax.get('/xhr/search/init.json')

export const reqCaseGoods=()=>ajax.get('/topic/v1/find/getTabs.json')

export const reqzhenxuanjialunbo=()=>ajax.get('/xhr/cart/getMiniCartNum.json')
