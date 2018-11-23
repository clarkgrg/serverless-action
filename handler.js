'use strict';

const authorizer = require('./authorizer');
const getaction = require('./getaction');
const formatAttachment = require('./formatAttachment');

module.exports.authorization = async (event, context) => {
  const code = event.queryStringParameters.code;
  console.log(code);

  try {
    const response = await authorizer(code);
    console.log(response.data);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Called Authorization',
        input: event,
      }),
    };  
  } catch (err) {
    console.log(err);
  }
};

module.exports.action = async (event, context) => {
  console.log("action was called");

  // Get movie from movie DB
  let movie = await getaction();
  console.log(movie);

  // Format the reponse for Slack command
  const title = movie.title;
  const imageURL = "https://image.tmdb.org/t/p/original" + movie.poster_path;
  const attachment = formatAttachment(title, imageURL);

  return {
    statusCode: 200,
    body: JSON.stringify(attachment),
  };
};
