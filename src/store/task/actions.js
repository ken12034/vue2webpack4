import api from '../../api/api';

export const actions = {
  getTask({ commit }, val) {
    api.getTask((data) => {
      commit('TYPE_TASK', { data });
    }, val);
  },
};
