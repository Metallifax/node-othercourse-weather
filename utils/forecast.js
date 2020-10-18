const request = require('request');
const process = require('process');
require('dotenv').config();

const forecast = (lat, long, callback) => {
  request({ url: `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=${lat},${long}&units=m`, json: true}, (err, res) => {
    if(err){
      callback('Unable to connect to weather services.', undefined);
    } else if (res.body.message) {
      callback('Unable to find location, try another location', undefined);
    }else {
      callback(undefined, {
        temperature: res.body.current.temperature,
        feelslike: res.body.current.feelslike,
        description: res.body.current.weather_descriptions[0],
      });
    }
  });
};

module.exports = forecast;