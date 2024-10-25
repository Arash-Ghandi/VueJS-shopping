import Vue from 'vue'
import VueRouter from 'vue-router'
import {Routes} from './Routes'
import VueResource from 'vue-resource';
import {store} from './Store/Store';
import App from './App.vue';
import Vuelidate from 'vuelidate';
import VueCookie from 'vue-cookie';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuelidate);
Vue.use(VueCookie);

Vue.http.options.root = "http://127.0.0.1:5000/";
Vue.http.interceptors.push((request, next) => {

  request.headers.set('Authorization', 'Bearer ' + Vue.cookie.get('Eshop_Auth_Token'));

  next();
});

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
