import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Content from '@/components/Content'
import Post from '@/components/Post'
import CreateContent from '@/components/CreateContent'
import EditContent from '@/components/EditContent'
import Settings from '@/components/Settings'
import Shop from '@/components/Shop'
import BookmarkedEntries from '@/components/BookmarkedEntries'
import NotFound from '@/components/NotFound'
import store from '@/store/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/content'
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
      path: '/content/post/:postId',
      name: 'post',
      component: Post
    },
    {
      path: '/content/create',
      name: 'create-content',
      component: CreateContent,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/content/post/:postId/edit',
      name: 'edit-content',
      component: EditContent,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/bookmarks',
      name: 'bookmarks',
      component: BookmarkedEntries
    },
    { 
      path: '/notfound',
      name: 'NotFound',
      component: NotFound,
      meta: { 
        hideNavigation: true
      }
    },
    {
      path: '*',
      redirect: '/notfound'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some (record => record.meta.requiresAuth)) {
    if (!store.state.isUserLoggedin) {
      next({
        path: '/login',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
