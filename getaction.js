'use strict';

const axios = require('axios');
const config = require('./config');

module.exports = async () => {
  console.log("action was called");

  const apiKey = config.api_key;
  const movieURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=1979&release_date.lte=1990&with_genres=28`;  

  const options = {
    url: movieURL,
    json: true
  };

  const response = await axios(options);
  const max = response.data.results.length - 1;
  const index = Math.floor(Math.random() * Math.floor(max));
  return response.data.results[index]; 
} 