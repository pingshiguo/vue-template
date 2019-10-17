import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './lang'

import http from './request/http'
import config from './request/config'
import { getToken } from './utils/auth'
import './utils/mint-ui'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import 'normalize.css'
import './stylus/index.styl'

const isProd = process.env.NODE_ENV === 'production'

Vue.config.productionTip = false
Vue.config.performance = !isProd

router.beforeEach((to, from, next) => {
  NProgress.start()

  if (to.meta.title) {
    document.title = to.meta.title
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    let token = getToken()
    if (!token) {
      store.dispatch('logout')
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      store.dispatch('getUser')
      next()
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})

if (isProd) {
  http.get('./config.json')
    .then(res => {
      let { baseURL, socketURL, assetsURL } = res.data
      Object.assign(config, { baseURL, socketURL, assetsURL })
      startApp()
    })
} else {
  startApp()
}

function startApp () {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
  })
}
