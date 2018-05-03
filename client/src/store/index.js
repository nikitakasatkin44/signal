import Vue from 'vue'
import Vuex from 'vuex'

import { productGetters } from './getters'
import { productMutations, cartMutations } from './mutations'
import { productActions } from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    cart: [],
    showLoader: false,
    product: {},
    products: []
  },
  mutations: Object.assign({}, productMutations, cartMutations),
  getters: Object.assign({}, productGetters),
  actions: Object.assign({}, productActions)
})
