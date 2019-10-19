import Qs from 'qs'
import http from './http'

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    http.get(url, { params })
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
    http.post(url, Qs.stringify(params), {
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
