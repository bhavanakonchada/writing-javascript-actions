const request = require("request-promise");

const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers:{
    Accept: "application/json",
    "User-Agent": "Bhavana writing Actions"
  },
  json: true
};

async function getJoke(){
  const result = await result(options);
  return result.joke;
}

module.exports = getJoke;
