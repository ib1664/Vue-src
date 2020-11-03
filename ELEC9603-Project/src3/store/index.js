import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index';
import jwt_decode from 'jwt-decode'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwtToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.jwtToken = userData.token
      state.userId = userData.userId
    },
    clearAuthData(state) {
      state.jwtToken = null;
      state.userId = null;
    }
  },
  actions: {
    login({commit}, authData) {
      const token = authData.access_token
      const decoded = jwt_decode(token)

      localStorage.setItem('token', token)
      localStorage.setItem('userId', decoded.identity)
      // localStorage.setItem('expirationDate', expirationDate)

      commit('authUser', {
        token: token,
        userId: decoded.identity
      })
      router.push('/');
    },

    logout({commit}) {
      commit('clearAuthData')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      // localStorage.removeItem('expirationDate')
      router.replace('/login')
    },

    // fetchUser({commit}) {
    //
    // },
  },
  getters: {
    isAuthenticated: function(state) {
      return state.jwtToken !== null;
    },
    getJwtToken(state) {
      return state.jwtToken;
    },
  },
  modules: {
  }
})