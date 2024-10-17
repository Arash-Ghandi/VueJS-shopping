import Vue from 'vue';
import Vuex from 'vuex';

import about from './Modules/About';
import slider from './Modules/Slider';
import product from './Modules/Product';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  modules: {
    about,
    slider,
    product
  }
});
