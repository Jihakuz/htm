const fetch = require("node-fetch");

async function getJoke() {

  res = await fetch("https://sv443.net/jokeapi/v2/joke/any");
  json = await res.json();

  return json
}

getJoke();