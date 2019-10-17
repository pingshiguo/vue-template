import * as types from './mutation-types'
import { requestUser, requestLogout } from '../request'
import { removeToken } from '../utils/auth'
import { SUCCESS_CODE } from '../request/config'

export const getUser = ({ commit }) => {
  requestUser()
    .then(res => {
      updateUser({ commit }, res.datas)
    })
}

export const updateUser = ({ commit }, user) => {
  commit(types.UPDATE_USER, user)
}

export const logout = ({ commit }) => {
  return new Promise((resolve, reject) => {
    requestLogout()
      .then(res => {
        if (res.result === SUCCESS_CODE) {
          removeToken()
          commit(types.LOGOUT)
          sessionStorage.clear()
          resolve(res)
        } else {
          reject(res)
        }
      })
      .catch(reject)
  })
}
