var React = require('react');
var createReactClass = require('create-react-class');

var WeatherForm = createReactClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    this.props.onNewCityName(this.refs.cityName);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" placeholder="Enter city name" ref="cityName"/>
        </div>
        <div>
          <button>Get weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;
