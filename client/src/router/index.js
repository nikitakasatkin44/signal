import Vue from 'vue'
import Router from 'vue-router'
import VestIndex from '@/components/Vests/Index'
import CloakIndex from '@/components/Cloaks/Index'
import Register from '@/components/Register'
import Login from '@/components/Login'

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
      path: '*',
      redirect: 'vests'
    }
  ]
})
