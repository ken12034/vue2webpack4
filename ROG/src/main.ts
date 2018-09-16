import Vue from 'vue';
import store from './store/index';
/*import HelloComponent from "./components/Hello.vue";

let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
    `,
    data: { name: "World" },
    components: {
        HelloComponent
    }
});*/

import index from './components/index.vue';

const app = new Vue({
  store,
  render: h => h(index)

}).$mount('#app');
