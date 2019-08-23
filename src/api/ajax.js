//封装ajax请求

import axios from 'axios'
import qs from 'qs' //转换urleacoded的格式


//添加拦截请求器
axios.interceptors.request.use((config)=>{
  const{ method,data }=config //获取请求的数据
  if(method.toLowerCase()==='post'&& data instanceof 'object'){ //判断post和数据的格式
    config.data=qs.stringify(data) //将数据转换成JSON格式的数据
    // console.log(1111)
  }
  return config
})

//添加一个相应拦截器
axios.interceptors.response.use(response=>{
  return response.data
},error=>{
  alert(error.message)
  return new Promise(()=>{})

})

export default axios
