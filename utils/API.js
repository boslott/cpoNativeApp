import axios from 'axios';

export default {

  addMainCompleteLog: function(newLog) {
    console.log(newLog);
    return axios.post('https://cpo-app.herokuapp.com/api/main-complete/create', newLog);
  },

};