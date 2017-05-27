var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9a9232bb4c5256f0d510dca4af8f518f&units=metric';

module.exports = {
  getTemp: function (location) {

    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    var errorMessage = 'Unable to fetch weather for that location';

    return axios.get(requestUrl).then(function (res) {
      if ( res.data.cod && res.data.message ) {
        throw new Error(errorMessage);
      } else {
        debugger;
        return res.data.main;
      }
    }, function (err) {
      throw new Error(errorMessage);
    }).catch( function (e) {
      throw new Error(errorMessage);
    });
  }
};
