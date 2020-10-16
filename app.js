const request = require('request');
const url = 'http://api.weatherstack.com/current?access_key=79a1d0825b61347927e5a8dc99a40563&query=37.8267,-122.4233'

request({url: url}, (err, res) => {
  const data = JSON.parse(res.body);
  console.log(data.current);
});