import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const isDev = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: isDev,
  plugins: isDev ? [createLogger()] : []
})
