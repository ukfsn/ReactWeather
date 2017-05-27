var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return { isLoading: false };
  },
  handleLocationUpdate: function (location) {
    var that = this;

    this.setState({
      isLoading: true
    })

    openWeatherMap.getTemp(location).then(function(data) {

      that.setState({
        location: location,
        weatherData: data,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({ isLoading: false })
      alert(errorMessage);
    });

  },
  render: function () {
    var {location, weatherData, isLoading} = this.state;

    function renderMessage() {
      if ( isLoading ) {
        return <h3>Fetching weather ...</h3>;
      } else if ( weatherData && location ) {
        return <WeatherMessage location={location} weatherData={weatherData}/>;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onLocationUpdate={this.handleLocationUpdate}/>
        {renderMessage()}
    </div>
    );
  }
});

module.exports = Weather;
