
import state from './state';
import { getters } from './getter';
import { getProduct } from './action';
import { mutations } from './mutations';

export default {
  state,
  getters,
  actions: {
    getProduct
  },
  mutations
};
