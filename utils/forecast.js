const process = require('process');
const request = require('request');

require('dotenv').config();

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=${lat},${long}&units=m`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback('Unable to connect to weather services.', undefined);
    } else if (body.message) {
      callback('Unable to find location, try another location', undefined);
    } else {
      callback(undefined, {
        temperature: body.current.temperature,
        feelslike: body.current.feelslike,
        description: body.current.weather_descriptions[0],
      });
    }
  });
};

module.exports = forecast;
