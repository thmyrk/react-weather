var React = require('react');
var createReactClass = require('create-react-class');

var WeatherMessage = createReactClass({
  render: function () {
    return (
      <h3>{this.props.cityName}</h3>
    );
  }
});

module.exports = WeatherMessage;
