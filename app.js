const process = require('process');
const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

const main = () => {
  // Geocode utility function
  geoCode(address, (err, { latitude, longitude, location } = {}) => {
    if (err) {
      return console.log(err);
    }

    // Forecast utility function
    forecast(latitude, longitude, (forecastErr, forecastData) => {
      if (forecastErr) {
        return console.log(forecastErr);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
};

// eslint-disable-next-line no-unused-expressions
!address ? console.log('Please provide an address...') : main();
