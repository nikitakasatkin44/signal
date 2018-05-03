import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    pets: [
      { petId: 1, name: 'Jack' },
      { petId: 2, name: 'Bred' }
    ],
    homePets: [],
    vests: []
  },
  getters: {
    pets: state => state.pets,
    vests: state => state.vests
  },
  mutations: {
    setToken (state, token) {
      state.token = token;
      state.isUserLoggedIn = !!(token)
    },
    setUser (state, user) {
      state.user = user
    },
    ADD_PET(state, petId) {
      state.homePets.push(petId);
    },
    SET_VEST_COUNT(state, vestID) {
      console.log(state.vests)
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    addPet(context, petId) {
      context.commit('ADD_PET', petId);
    },
    setVestCount(context, vestID) {
      context.commit('SET_VEST_COUNT', vestID);
    }
  }
})
