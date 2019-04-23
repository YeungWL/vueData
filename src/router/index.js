import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'
import store from 'store/index'

Vue.use(Router)

// 路由器配置
const router = new Router({
  routes: routes
})

// 配置白名单路由
const whiteList = ['/login']

// 路由守卫
router.beforeEach((to, from, next) => {
  console.log(store)
  if (store.getters.token) {
    // 已经登录
    if (to.path === '/login') {
      next({path: '/home'})
    } else {
      next()
    }
  } else {
    // 还没有登录
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next({path: '/login'})
    }
  }
})

export default router
