import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Nav from '@/components/Nav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: '首页',
      component: Home,
      iconCls: 'el-icon-message',
    },
    {
      path:'/',
      name:'导航。',
      component:Nav,
    }

  ]
})
