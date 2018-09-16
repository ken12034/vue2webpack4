import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import Product from './Product';

const store = new Vuex.Store({
  modules: {
    Product,
  }

});

export default store;
