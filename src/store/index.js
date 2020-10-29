//import { userSetter } from 'core-js/fn/symbol'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser : null
  },
  mutations: {
    UPDATE_USER(state, user){
      state.currentUser = user
    }
  },
  actions: {
    updateUser({commit}, user){
      commit('UPDATE_USER', user)
    }
  },
  modules: {
  }
})
