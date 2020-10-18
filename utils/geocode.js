const request = require('request');
const process = require('process');

require('dotenv').config();

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?proximity=-74.70850,40.78375&access_token=${process.env.GEOCODE_API_KEY}&limit=1`;

  request({ url: url, json: true}, (err, res) => {
    if(err){
      callback('Unable to connect to location services', undefined);
    } else if (res.body.features.length === 0) {
      callback('Unable to find location. Try another search', undefined);
    } else {
      callback(undefined, {
        longitude: res.body.features[0].center[0],
        latitude: res.body.features[0].center[1],
        location: res.body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCode;