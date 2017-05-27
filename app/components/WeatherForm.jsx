var React = require('react');

var WeatherForm = React.createClass({
  onLocationSubmit: function (e) {
    e.preventDefault();
    console.log("I am in onLocationSubmit");

    var location = this.refs.location.value;

    if ( location.length > 0) {
      console.log("I have a location which is ", location);
      this.props.onLocationUpdate(location);
      this.refs.location.value = '';
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onLocationSubmit}>
        <div>
          <input type="text" ref="location" placeholder="Enter Location" />
        </div>
        <div>
          <button className='button hollow expanded'>Get Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;
