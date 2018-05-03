import {
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from './mutation-types'

export const productMutations = {
  [ALL_PRODUCTS] (state) {
    state.showLoader = true
  },
  [ALL_PRODUCTS_SUCCESS] (state, payload) {
    state.showLoader = false
    state.products = payload
  },
  [PRODUCT_BY_ID] (state) {
    state.showLoader = true
  },
  [PRODUCT_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false
    console.log('payload = ' + payload)
    state.product = payload
  },
}

export const cartMutations = {
  [ADD_TO_CART]: (state, payload) => state.cart.push(payload),
  [REMOVE_FROM_CART]: (state, payload) => {
    const index = state.cart.findIndex(p => p.id === payload)
    state.cart.splice(index, 1)
    console.log(state.cart, state.cart.length, index)
  }
}
