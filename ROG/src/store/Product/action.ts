import axios from 'axios';
import * as types from '../types';
import PRODUCT from '../stateType';
// actions
export const getProduct = ({ commit }, val) => {

  if ( val ) {
    return axios.post(`/api/posts`, {
      status: val[0].status,
      taskContent: val[0].taskContent,
    }).then(response => {
      console.log(response.data);
      // commit(types.PRODUCT_DATA, response.data );
    });
  } else {
    return axios.get(`/api/posts`).then(response => {
      commit(types.PRODUCT_DATA, response.data);
    }).catch(err => {
      console.log(err);
    });
  }

};

