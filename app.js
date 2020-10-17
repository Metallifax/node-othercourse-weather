const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geoCode('chester nova scotia', (err, data) => {
  console.log('Response:', err);
  console.log('Data:', data);
});

forecast(44.3214, -64.1413, (err, data) => {
  console.log('Response', err);
  console.log('Data', data);
});
