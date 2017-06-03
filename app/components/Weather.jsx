var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      errorMessage: false
    };
  },
  handleLocationUpdate: function (location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: false,
      weatherData: undefined,
      location: undefined
    })

    openWeatherMap.getTemp(location).then(function(data) {
      that.setState({
        location: location,
        weatherData: data,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      })
    });
  },
  componentDidMount: function () {
    var location = this.props.location.query.location;

    if ( location && location.length > 0 ) {
      this.handleLocationUpdate(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(newProps) {
    var location = newProps.location.query.location;

    if ( location && location.length > 0 ) {
      this.handleLocationUpdate(location);
      window.location.hash = '#/';
    }
  },
  render: function () {
    var {location, weatherData, errorMessage, isLoading} = this.state;

    function renderMessage() {
      if ( isLoading ) {
        return <h3 className="text-center">Fetching weather ...</h3>;
      } else if ( weatherData && location ) {
        return <WeatherMessage location={location} weatherData={weatherData}/>;
      }
    }

    function renderError () {
      if (typeof(errorMessage) === 'string') {
        return (
          <ErrorModal errorMessage={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onLocationUpdate={this.handleLocationUpdate}/>
        {renderMessage()}
        {renderError()}
    </div>
    );
  }
});

module.exports = Weather;
