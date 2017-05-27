var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {temp, location} = this.props;
//
//     return (
//         <h3>It is {temp} in {location}</h3>
//     );
//   }
// });

var WeatherMessage = ({location, weatherData}) => {
  return (
    <div>
      <h3>It is {weatherData.temp} C in {location}</h3>
      <p>The humidity is {weatherData.humidity}%</p>
      <p>The maximum recorded temperature so far today in {location} was {weatherData.temp_max} C</p>
    </div>
  );
}

module.exports = WeatherMessage;
