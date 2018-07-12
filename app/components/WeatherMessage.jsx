var React = require('react');
var createReactClass = require('create-react-class');

var WeatherMessage = createReactClass({
  render: function () {
    var {temp, location} = this.props;
    return (
      <h3>Is is {temp} in {location}</h3>
    );
  }
});

module.exports = WeatherMessage;
