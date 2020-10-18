const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const process = require('process');

const address = process.argv[2];

const main = () => {
  // Geocode utility function
  geoCode(process.argv[2], (err, data) => {
    if (err) {
      return console.log(err);
    }

    // Forecast utility function
    forecast(data.latitude, data.longitude, (err, forecastData) => {
      if (err) {
        return console.log(err);
      }

      console.log(data.location);
      console.log(forecastData);
    });
  });
};

!address ? console.log('Please provide an address...') : main();
