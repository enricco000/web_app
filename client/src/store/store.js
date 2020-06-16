import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'web_app',
  storage: window.sessionStorage,
})

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [vuexPersist.plugin],
  state: {
    token: null,
    username: null,
    isAdmin: null,
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
    setUser (state, username) {
      state.user = username
    },
    setIsAdmin (state, isAdmin) {
      state.isAdmin = isAdmin
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, username) {
      commit('setUser', username)
    },
    setIsAdmin ({commit}, isAdmin) {
      commit ('setIsAdmin', isAdmin)
    },
    logout ({commit}) {
      commit('setUser', null)
      commit('setToken', null)
    }
  },
  getters: {
    isUserLoggedin (state) {
      return state.isUserLoggedin
    },
    user (state) {
      return state.user
    }
  }
})
