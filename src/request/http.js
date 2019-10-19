import axios from 'axios'
import router from '../router'
import store from '../store'
import { isJSON } from '../utils/utils'
import { getToken } from '../utils/auth'
import config, { FAILURE_CODE } from './config'
import { Toast } from 'mint-ui'

const instance = axios.create({
  baseURL: config.baseURL
})

instance.defaults.transformRequest = [
  function (data) {
    return data
  }
]

instance.defaults.transformResponse = [
  function (data) {
    if (isJSON(data)) {
      return JSON.parse(data)
    }
    return data
  }
]

instance.interceptors.request.use(
  config => {
    Object.assign(config.headers, {
      token: getToken()
    })

    return config
  },
  err => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  res => {
    if (res.status === 200) {
      if (res.data && res.data.result === FAILURE_CODE) {
        Toast(res.data.message)
        store.dispatch('logout')
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
      }

      return Promise.resolve(res)
    }
    return Promise.reject(res)
  },
  err => {
    return Promise.reject(err)
  }
)

export default instance
