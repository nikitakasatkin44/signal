import axios from 'axios'
import {API_BASE} from '../config'

import {
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  PRODUCT_BY_ID, PRODUCT_BY_ID_SUCCESS
} from './mutation-types'

export const productActions = {
  allProducts ({commit}) {
    commit(ALL_PRODUCTS)
    axios.get(`${API_BASE}/vests`).then(response => {
      commit(ALL_PRODUCTS_SUCCESS, response.data)
    })
  },
  productById ({commit}, payload) {
    commit(PRODUCT_BY_ID)
    axios.get(`${API_BASE}/vests/${payload}`).then(response => {
      console.log(payload, response.data)
      commit(PRODUCT_BY_ID_SUCCESS, response.data)
    })
  }
}
