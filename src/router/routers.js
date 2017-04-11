/**
 * Created by zhangjiqiang on 2017/4/9.
 */
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const User={template:'<div>user-</div>'}

export default new Router({
  routes: [
    {
      path: '/user/:id',
      component: User
    }
  ]
})
