import axios from 'axios';

axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response.ok);
  })
  .catch(function (error) {
    console.log(error.config.method);
  });