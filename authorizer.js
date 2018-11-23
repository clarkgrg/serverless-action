'use strict';

const axios = require('axios');
const config = require('./config');

module.exports = async (code) => {
  console.log("Starting Authorization");

  const clientId = config.client_id;
  const clientSecret = config.client_secret;

  const oauthURL = 'https://slack.com/api/oauth.access?' +
    'client_id=' + clientId + '&' +
    'client_secret=' + clientSecret + '&' +
    'code=' + code;

  const options = {
    url: oauthURL,
    json: true
  };

  // Call Authorization API
  return await axios(options);
}