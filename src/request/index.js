import Qs from 'qs'
import http from './http'
import config from './config'

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    http.get(config.baseURL + url, { params })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function post (url, params = {}) {
  return new Promise((resolve, reject) => {
    http.post(config.baseURL + url, Qs.stringify(params), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const requestUser = () => post('/requestUser')

export const requestLogout = () => post('/requestLogout')
