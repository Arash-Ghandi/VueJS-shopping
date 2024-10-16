import Vue from 'vue'
import VueRouter from 'vue-router'
import {Routes} from './Routes'
import VueResource from 'vue-resource';
import {store} from './Store/Store';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
 });
