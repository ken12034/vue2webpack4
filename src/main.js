import Vue from 'vue';

import index from './components/index.vue';
import store from './store';

const app = new Vue({
  store,
  render: h => h(index),

}).$mount('#app');
