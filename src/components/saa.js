const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/regions/list',
  headers: {
    'X-RapidAPI-Key': '7a52b35a3cmsh51309c43e8cddffp11ca97jsndf96dbe1af87',
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com',
  },
};

axios
  .get(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
