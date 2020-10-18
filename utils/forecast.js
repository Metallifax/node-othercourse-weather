const process = require('process');
const request = require('request');

require('dotenv').config();

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=${lat},${long}&units=m`;

  request({ url, json: true }, (err, res) => {
    if (err) {
      callback('Unable to connect to weather services.', undefined);
    } else if (res.body.message) {
      callback('Unable to find location, try another location', undefined);
    } else {
      callback(undefined, {
        temperature: res.body.current.temperature,
        feelslike: res.body.current.feelslike,
        description: res.body.current.weather_descriptions[0],
      });
    }
  });
};

module.exports = forecast;
