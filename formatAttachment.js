'use strict';

module.exports = (title, url) => {
  const attachment = {
    fallback: "1980s action flick",
    color: "#36a64f",
    title: title,
    title_link: url, 
    image_url: url
  };

  const response = {
    attachments: [attachment]
  }

  return response;
}