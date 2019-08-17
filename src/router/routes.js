// 注册路由模块

import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import Aperson from '../pages/Aperson/Aperson.vue'
import CaseGoods from '../pages/CaseGoods/CaseGoods.vue'
import Shopping from '../pages/Shopping/Shopping.vue'

export default[
  {
    path:"/home",
    component:Home,
    meta:{
      isShowFooter:true //底部是否显示
    }
  },
  {
    path:"/classify",
    component:Classify,
    meta:{
      isShowFooter:true //底部是否显示
    }
  },
  {
    path:"/aperson",
    component:Aperson,
  },
  {
    path:"/casegoods",
    component:CaseGoods,
    meta:{
      isShowFooter:true //底部是否显示
    }
  },
  {
    path:"/shopping",
    component:Shopping,
    meta:{
      isShowFooter:true //底部是否显示
    }
  },
  {
    path:"/",
    redirect: "/home"
  }
]
