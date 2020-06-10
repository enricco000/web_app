import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/Root'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Content from '@/components/Content'
import Settings from '@/components/Settings'
import Store from '@/components/Store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Root
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/content',
      name: 'content',
      component: Content
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    },
    // {
    //   path: "/index.html",
    //   redirect: "/" 
    // }
  ]
})
