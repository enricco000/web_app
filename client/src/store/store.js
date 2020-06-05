import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedin: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token != null) {
        state.isUserLoggedin = true
      } else {
        state.isUserLoggedin = false
      }
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    logout ({commit}) {
      commit('setUser', null)
      commit('setToken', null)
    }
  }
})