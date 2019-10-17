import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/home')

const Login = () => import('../views/login/login')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页',
        showFooter: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录',
        showHeader: true
      }
    }
  ]
})
