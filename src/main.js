import Vue from 'vue';

import index from './components/index';

var app = new Vue({

  render: h => h(index)

}).$mount('#app');