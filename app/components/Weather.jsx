var React = require('react');
var createReactClass = require('create-react-class');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = createReactClass({
  getInitialState: function () {
    return {
      cityName: ""
    };
  },
  handleNewCityName: function(cityName) {
    this.setState(cityName: cityName)
  },
  render: function () {
    var cityName = this.state.cityName;
    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm onNewCityName={this.handleNewCityName} />
        <WeatherMessage cityName={cityName} />
      </div>
    );
  }
});

module.exports = Weather;
