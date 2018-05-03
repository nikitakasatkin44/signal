// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import store from './store'
// import store from '@/store/store'
import Panel from '@/components/globals/Panel'
import Vue2Filters from 'vue2-filters'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSessionStorage from 'vue-sessionstorage'

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(Vue2Filters);
Vue.use(BootstrapVue);
Vue.use(VueSessionStorage);

Vue.component('panel', Panel);

sync(store, router);

const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  // created () {
  //   this.$store.dispatch('getVests');
  // }
});
