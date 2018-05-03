import Vue from 'vue'
import Router from 'vue-router'
import VestIndex from '@/components/Vests/Index'
import CloakIndex from '@/components/Cloaks/Index'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Basket from '@/components/Basket/Index'
import Test from '@/components/Test/Index'
import Home from '@/pages/Home'
import Details from '@/pages/Details'
import Cart from '@/pages/Cart'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/vests',
      name: 'vests',
      component: VestIndex
    },
    {
      path: '/cloaks',
      name: 'cloaks',
      component: CloakIndex
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '*',
      redirect: 'vests'
    }
  ]
})
