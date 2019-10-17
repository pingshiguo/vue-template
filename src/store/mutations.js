import * as types from './mutation-types'

const mutations = {
  [types.UPDATE_USER] (state, user) {
    Object.assign(state.user, user)
  },
  [types.LOGOUT] (state) {
    Object.assign(state.user, null)
  }
}

export default mutations
