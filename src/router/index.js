import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'


Vue.use(Router)
const User={template:'<div>user-{{$route.params.id}}</div>'}


export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },{
      path:'/Home',
      name:'home-page',
      component:Home
    },
    {
      path: '/user/:id',
      component: User
    }
  ]
})
