var React = require('react');
var createReactClass = require('create-react-class');

var WeatherForm = createReactClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" placeholder="Enter city name" ref="location"/>
        </div>
        <div>
          <button>Get weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;
