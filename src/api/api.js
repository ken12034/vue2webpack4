import axios from 'axios';


export default {

  getTask(callback) {
    axios.get('/posts')
      .then((response) => {
        setTimeout(callback(response.data), 100);
      });
  },

};
