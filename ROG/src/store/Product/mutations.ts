import * as types from '../types';
import { Product } from '../stateType';

export const mutations = {
  [types.PRODUCT_DATA](state: any, data: any) {
    state.product = data;
  }
};
