import React from 'react'
import createReactClass from 'create-react-class'
import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'
import openWeatherMap from 'openWeatherMap'
import ErrorModal from 'ErrorModal'
import queryString from 'query-string'

var Weather = createReactClass({
  getInitialState: function () {
    return {
      isLoading: false
    };
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp
      });
    }, function (e) {
      that.setState({errorMessage: e.message})
    }).then(function() {
      that.setState({isLoading: false});
    });
  },
  componentDidMount: function () {
    var location = queryString.parse(this.props.location.search).location;

    if (location && location.length > 0) {
      this.handleSearch(location);
    }
  },
  componentWillReceiveProps: function(newProps) {
    var newLocation = queryString.parse(newProps.location.search).location;
    var oldLocation = queryString.parse(this.props.location.search).location;

    if (newLocation && newLocation.length > 0 && newLocation != oldLocation) {
      this.handleSearch(newLocation);
    }
  },
  render: function() {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }

    function renderError () {
      if (typeof errorMessage == 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
