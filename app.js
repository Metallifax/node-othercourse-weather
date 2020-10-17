const request = require('request');
const url = 'http://api.weatherstack.com/current?access_key=79a1d0825b61347927e5a8dc99a40563&query=37.8267,-122.4233&units=f';

// weather
request({url: url, json: true}, (err, res) => {
  console.log(`Weather: ${res.body.current.weather_descriptions[0]}\nIt is currently ${res.body.current.temperature}° -- it feels like ${res.body.current.feelslike}°.`);
});

// const mapURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoibWV0YWxsaWZheCIsImEiOiJja2djcW15cGgwdGlmMnlxdWk5a2hlMnI0In0.iuDg476IEuXOMNqYynDe9w&limit=1';
// const mapAPI = 'pk.eyJ1IjoibWV0YWxsaWZheCIsImEiOiJja2djcW15cGgwdGlmMnlxdWk5a2hlMnI0In0.iuDg476IEuXOMNqYynDe9w';

// // Geocoding
// request({url: mapURL, json:true}, (err, res) => {
//   const lat = res.body.features[0].center[0];
//   const long = res.body.features[0].center[1];
//   console.log(`Map Coordinates ${lat} ${long}`);
// });