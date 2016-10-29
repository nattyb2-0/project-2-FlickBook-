const fetch = require('node-fetch');

const randomUserURl = 'https://randomuser.me/api/?results=20'



function searchInmates(req, res, next) {
  console.log("inside randomUserSearch")
  fetch(randomUserURl)
    .then((apiResponse) => {
      return apiResponse.json();
    })
    .then((json) => {
     //console.log(json.results);
      res.results = json.results;
      console.log('fuckkkkkkkkkkkkkkkk offffff')
      console.log(res.results[0].gender)
      next();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}


module.exports = { searchInmates }

