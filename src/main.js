import Vue from 'vue'
import VueRouter from 'vue-router'
import {Routes} from './Routes'
import VueResource from 'vue-resource';
import {store} from './Store/Store';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "http://127.0.0.1:5000/";

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
  scrollBehavior() {
    return {
      x : 0,
      y :0
    }
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
 });
